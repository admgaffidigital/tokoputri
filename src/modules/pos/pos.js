/**
 * ============================================================
 * MODUL POS KASIR — TOKO PUTRI
 * Point-of-Sale kasir langsung dari Admin CMS.
 * Fitur: Katalog produk, keranjang kasir, diskon per item +
 * global, pilih pelanggan (umum/member/tempo), metode bayar
 * (tunai/QRIS/transfer/tempo), scan barcode USB, cetak struk,
 * dan simpan transaksi ke Firestore pos_transactions.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, setIn, esc, fCur, showToast, getOptImg } from '../../core/utils.js';

// ─── State ──────────────────────────────────────────────────
let posCart        = [];
let posSearch      = '';
let posCatFilterVal = '';
let posCustomer    = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };
let posPayMethod   = 'cash';
let posPaidAmount  = 0;
let posGlobalDisc  = 0;
let barcodeBuffer  = '';
let barcodeTimer   = null;

// ─── Helpers ────────────────────────────────────────────────
const fNum = (n) => Math.max(0, parseInt(n) || 0);
const fRp  = (n) => fCur(n);

const posSubtotal = () => posCart.reduce((s, i) => s + i.subtotal, 0);
const posTotal    = () => Math.max(0, posSubtotal() - fNum(posGlobalDisc));
const posChange   = () => Math.max(0, posPaidAmount - posTotal());

const recalcItem  = (item) => {
    item.subtotal = Math.max(0, item.price * item.qty - fNum(item.discount));
    return item;
};

const genTxId = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `POS-${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${Date.now().toString(36).toUpperCase()}`;
};

// ─── Barcode Scanner (USB) ──────────────────────────────────
const initBarcodeListener = () => {
    if (window.__posBarcodeFn) document.removeEventListener('keydown', window.__posBarcodeFn);
    window.__posBarcodeFn = (e) => {
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
        if (e.key === 'Enter') {
            if (barcodeBuffer.length >= 3) {
                const c = barcodeBuffer.trim().toLowerCase();
                const prod = (appData.products || []).find(p =>
                    p && p.isActive !== 'false' && p.isActive !== false &&
                    ((p.barcode && p.barcode.toLowerCase() === c) ||
                     (p.sku && p.sku.toLowerCase() === c) ||
                     (p.id && String(p.id).toLowerCase() === c))
                );
                if (prod) {
                    addToCart(prod.id);
                    showToast(`Ditambahkan: ${prod.name}`, 'success');
                } else {
                    const sf = el('pos-search-input-d');
                    if (sf) { sf.value = barcodeBuffer; posSearch = barcodeBuffer; renderCatalog(); }
                    showToast('Barcode tidak ditemukan di katalog', 'warning');
                }
                barcodeBuffer = '';
            }
        } else if (e.key.length === 1) {
            barcodeBuffer += e.key;
            clearTimeout(barcodeTimer);
            barcodeTimer = setTimeout(() => { barcodeBuffer = ''; }, 150);
        }
    };
    document.addEventListener('keydown', window.__posBarcodeFn);
};

// ─── Cart CRUD ───────────────────────────────────────────────
export const addToCart = (productId) => {
    const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
    if (!p) return;
    const existing = posCart.find(i => String(i.id) === String(productId));
    if (existing) { existing.qty += 1; recalcItem(existing); }
    else { const price = parseFloat(p.price) || 0; posCart.push(recalcItem({ id: p.id, name: p.name, price, qty: 1, discount: 0, subtotal: price })); }
    renderCart();
};

export const updateQty = (productId, delta) => {
    const item = posCart.find(i => String(i.id) === String(productId));
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta); recalcItem(item); renderCart();
};

export const setQty = (productId, val) => {
    const item = posCart.find(i => String(i.id) === String(productId));
    if (!item) return;
    item.qty = Math.max(1, fNum(val)); recalcItem(item); renderCart();
};

export const setItemDisc = (productId, val) => {
    const item = posCart.find(i => String(i.id) === String(productId));
    if (!item) return;
    item.discount = Math.min(fNum(val), item.price * item.qty); recalcItem(item); renderCart();
};

export const removeFromCart = (productId) => { posCart = posCart.filter(i => String(i.id) !== String(productId)); renderCart(); };
export const clearCart      = () => { posCart = []; posGlobalDisc = 0; renderCart(); };

// ─── Render Katalog ──────────────────────────────────────────
const renderCatalog = () => {
    const products = (appData.products || []).filter(p => {
        if (!p || p.isActive === 'false' || p.isActive === false) return false;
        if (posCatFilterVal && p.category !== posCatFilterVal) return false;
        if (posSearch) {
            const q = posSearch.toLowerCase();
            return (p.name||'').toLowerCase().includes(q) || (p.barcode||'').toLowerCase().includes(q) || (p.sku||'').toLowerCase().includes(q);
        }
        return true;
    });

    const cats = ['Semua', ...[...new Set((appData.products||[]).filter(p => p && p.isActive !== 'false' && p.category).map(p => p.category))]];

    const catHTML = cats.map(c => {
        const isAll = c === 'Semua';
        const active = isAll ? !posCatFilterVal : posCatFilterVal === c;
        return `<button onclick="window.posCatFilter('${esc(isAll ? '' : c)}')" class="shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${active ? 'text-white border-transparent' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}" style="${active ? 'background:var(--color-primary)' : ''}">${esc(c)}</button>`;
    }).join('');

    const prodHTML = products.length === 0
        ? `<div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-box-open text-4xl mb-3"></i><p class="font-semibold text-sm">Produk tidak ditemukan</p></div>`
        : products.map(p => {
            const img     = p.img ? getOptImg(p.img, 'w200-rw') : '';
            const inCart  = posCart.find(i => String(i.id) === String(p.id));
            const safeId  = esc(String(p.id));
            return `<button onclick="window.posAddToCart('${safeId}')" class="relative flex flex-col bg-white dark:bg-slate-800 border rounded-2xl p-2.5 text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-95 overflow-hidden ${inCart ? 'border-[var(--color-primary)] shadow-sm' : 'border-slate-200 dark:border-slate-700'}">
                ${inCart ? `<div class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full text-white flex items-center justify-center text-[9px] font-black z-10" style="background:var(--color-primary)">${inCart.qty}</div>` : ''}
                <div class="w-full aspect-square rounded-xl bg-slate-100 dark:bg-slate-700 mb-2 overflow-hidden flex items-center justify-center">
                    ${img ? `<img loading="lazy" src="${esc(img)}" alt="${esc(p.name)}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid fa-box text-slate-300 text-xl\\'></i>'">` : `<i class="fa-solid fa-box text-slate-300 text-xl"></i>`}
                </div>
                <p class="text-[10px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-tight mb-1 flex-1">${esc(p.name)}</p>
                <p class="text-xs font-black" style="color:var(--color-primary)">${fRp(parseFloat(p.price)||0)}</p>
            </button>`;
        }).join('');

    const catEl  = el('pos-cat-filter-d');
    const gridEl = el('pos-catalog-grid-d');
    if (catEl)  catEl.innerHTML  = catHTML;
    if (gridEl) gridEl.innerHTML = prodHTML;
};

// ─── Render Cart ─────────────────────────────────────────────
const renderCart = () => {
    if (!el('pos-cart-items')) return;
    const itemsHTML = posCart.length === 0
        ? `<div class="flex flex-col items-center justify-center h-full py-10 text-slate-300 dark:text-slate-600 select-none"><i class="fa-solid fa-cart-shopping text-4xl mb-2"></i><p class="text-sm font-semibold">Keranjang kosong</p><p class="text-xs mt-0.5 text-center px-4">Klik produk untuk menambah</p></div>`
        : posCart.map(item => {
            const sid = esc(String(item.id));
            return `<div class="flex items-start gap-2 p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xs">
                <div class="flex-1 min-w-0">
                    <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1">${esc(item.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${fRp(item.price)} × ${item.qty}</p>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 shrink-0">Diskon Rp:</span>
                        <input type="number" min="0" placeholder="0" value="${item.discount||''}" onchange="window.posSetItemDisc('${sid}',this.value)"
                            class="w-20 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-white dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/60 rounded-lg p-0.5">
                        <button onclick="window.posUpdateQty('${sid}',-1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">−</button>
                        <input type="number" min="1" value="${item.qty}" onchange="window.posSetQty('${sid}',this.value)"
                            class="w-8 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${sid}',1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">+</button>
                    </div>
                    <p class="text-[10px] font-black" style="color:var(--color-primary)">${fRp(item.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${sid}')" class="w-6 h-6 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`;
        }).join('');

    setH('pos-cart-items', itemsHTML);
    setIn('pos-subtotal', fRp(posSubtotal()));
    const di = el('pos-global-disc');
    if (di && document.activeElement !== di) di.value = posGlobalDisc || '';
    setIn('pos-total-amount', fRp(posTotal()));
    const btn = el('pos-pay-btn');
    if (btn) {
        btn.disabled = posCart.length === 0;
        btn.innerHTML = posCart.length > 0 ? `<i class="fa-solid fa-cash-register mr-2"></i>BAYAR — ${fRp(posTotal())}` : `<i class="fa-solid fa-cash-register mr-2"></i>BAYAR`;
    }
};

// ─── Modal Bayar ─────────────────────────────────────────────
export const openPayModal = () => {
    if (posCart.length === 0) { showToast('Keranjang masih kosong!', 'warning'); return; }
    posCustomer  = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };
    posPayMethod = 'cash';
    posPaidAmount = 0;

    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[92vh] flex flex-col">
        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2"><i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>Proses Pembayaran</h2>
            <p class="text-xs text-slate-500 mt-0.5">Total: <span class="font-black" style="color:var(--color-primary)">${fRp(posTotal())}</span></p>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 text-xl transition-all leading-none">×</button>
        </div>
        <div class="p-5 space-y-5 overflow-y-auto flex-1">
          <div>
            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 block">Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-3">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user block text-base mb-1"></i>Umum</button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-id-card block text-base mb-1"></i>Member</button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-base mb-1"></i>Tempo</button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pelanggan (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">
            </div>
          </div>
          <div>
            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 block">Metode Pembayaran</label>
            <div class="grid grid-cols-2 gap-2 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave block text-base mb-1"></i>Tunai</button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-qrcode block text-base mb-1"></i>QRIS</button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-building-columns block text-base mb-1"></i>Transfer</button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-base mb-1"></i>Tempo</button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
          <button onclick="window.closePayModal()" class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)"><i class="fa-solid fa-check-circle"></i> Proses & Simpan</button>
        </div>
      </div>
    </div>`);

    renderPayDetail('cash');
};

export const closePayModal = () => el('pos-pay-modal')?.remove();

const setActiveBtn = (prefix, active, list) => {
    list.forEach(k => {
        const b = el(`${prefix}-${k}`);
        if (!b) return;
        if (k === active) { b.style.background = 'var(--color-primary)'; b.style.color = 'white'; b.style.borderColor = 'var(--color-primary)'; }
        else { b.style.removeProperty('background'); b.style.removeProperty('color'); b.style.removeProperty('border-color'); }
    });
};

const renderPayDetail = (method) => {
    const d = el('pos-pay-detail');
    if (!d) return;
    const total  = posTotal();
    const topRow = `<div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 mb-3 text-sm"><span class="text-slate-500">Total Tagihan</span><span class="font-black" style="color:var(--color-primary)">${fRp(total)}</span></div>`;
    if (method === 'cash') {
        d.innerHTML = `${topRow}<label class="text-[10px] text-slate-500 font-semibold">Nominal Bayar (Rp)</label>
        <input id="pos-paid-input" type="number" min="0" placeholder="${total}" class="mt-1 w-full border-2 rounded-xl px-3 py-3 text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right" style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
        <div class="flex justify-between mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl"><span class="text-sm font-bold text-emerald-700 dark:text-emerald-400">Kembalian</span><span id="pos-change-display" class="font-black text-sm text-emerald-700 dark:text-emerald-400">${fRp(0)}</span></div>`;
    } else if (method === 'qris') {
        const q = appData.payment?.qrisUrl || '';
        d.innerHTML = `${topRow}${q ? `<div class="flex justify-center"><img src="${esc(q)}" class="w-44 h-44 object-contain rounded-xl border" alt="QRIS"></div><p class="text-center text-xs text-slate-500 mt-2">Scan QRIS untuk pembayaran</p>` : `<p class="text-center text-xs text-rose-500 font-semibold p-3 bg-rose-50 rounded-xl">QRIS belum diatur — buka Pengaturan → QRIS Pay</p>`}`;
    } else if (method === 'transfer') {
        const banks = (appData.banks || []).filter(b => b && b.name);
        d.innerHTML = `${topRow}<label class="text-[10px] text-slate-500 font-semibold block mb-1">Pilih Rekening Tujuan</label>
        <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">
            ${banks.length ? banks.map(b => `<option>${esc(b.name)} — ${esc(b.number||'')} a/n ${esc(b.holder||'')}</option>`).join('') : '<option>Rekening belum diatur</option>'}</select>`;
    } else if (method === 'tempo') {
        d.innerHTML = `${topRow}<div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-3"><p class="text-xs font-bold text-amber-700 dark:text-amber-400"><i class="fa-solid fa-hourglass-half mr-1"></i>Pembayaran Tempo / Piutang</p><p class="text-[10px] text-amber-600 mt-1">Transaksi dicatat sebagai piutang. Jatuh tempo & cicilan diatur di tab Piutang Tempo.</p></div>
        <label class="text-[10px] text-slate-500 font-semibold block mb-1">Uang Muka / DP (Rp) — opsional</label>
        <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`;
    }
};

export const setPosCustomerType = (type) => {
    posCustomer.isMember  = type === 'member';
    posCustomer.isNewTempo = type === 'tempo';
    setActiveBtn('pos-ctype', type, ['umum','member','tempo']);
    const f = el('pos-customer-fields');
    if (!f) return;
    if (type === 'umum') {
        f.innerHTML = `<input id="pos-cust-name" type="text" placeholder="Nama pelanggan (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`;
    } else if (type === 'member') {
        f.innerHTML = `<div class="flex gap-2"><input id="pos-cust-phone" type="tel" placeholder="No. HP Member" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">
        <button onclick="window.lookupPosMember()" class="px-3 py-2 rounded-xl text-white text-xs font-bold" style="background:var(--color-primary)"><i class="fa-solid fa-search"></i></button></div>
        <div id="pos-member-result" class="mt-2"></div>`;
    } else if (type === 'tempo') {
        setPosPayMethod('tempo');
        f.innerHTML = `<p class="text-xs text-amber-600 font-semibold mb-2">⚠️ Transaksi masuk Piutang Tempo</p>
        <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none mb-2">
        <input id="pos-cust-phone" type="tel" placeholder="No. HP *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">`;
    }
};

export const setPosPayMethod = (method) => {
    posPayMethod = method;
    setActiveBtn('pos-pay', method, ['cash','qris','transfer','tempo']);
    renderPayDetail(method);
};

export const updatePosChange = (val) => {
    posPaidAmount = fNum(val);
    const c = el('pos-change-display');
    if (c) c.textContent = fRp(posChange());
};

export const lookupPosMember = () => {
    const phone = el('pos-cust-phone')?.value?.trim();
    if (!phone) { showToast('Masukkan nomor HP', 'warning'); return; }
    const norm   = phone.replace(/\D/g, '');
    const member = (appData.customers || []).find(c => c && c.phone && c.phone.replace(/\D/g, '').endsWith(norm));
    const r = el('pos-member-result');
    if (!r) return;
    if (member) {
        posCustomer.name = member.name || ''; posCustomer.memberId = member.id || member.phone;
        r.innerHTML = `<div class="flex items-center gap-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check text-emerald-500"></i><div><p class="text-xs font-bold text-emerald-700">${esc(member.name)}</p><p class="text-[10px] text-emerald-600">Member Terverifikasi ✓</p></div></div>`;
    } else {
        r.innerHTML = `<p class="text-xs text-rose-500 font-semibold p-2 bg-rose-50 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark mr-1"></i>Tidak ditemukan di database member</p>`;
    }
};

// ─── Proses Transaksi ────────────────────────────────────────
export const processPOSTx = async () => {
    if (posCart.length === 0) { showToast('Keranjang kosong!', 'warning'); return; }
    const custName  = el('pos-cust-name')?.value?.trim()  || 'Pelanggan Umum';
    const custPhone = el('pos-cust-phone')?.value?.trim() || '';
    if (posCustomer.isNewTempo && !custPhone) { showToast('No. HP wajib diisi untuk tempo!', 'warning'); return; }
    if (posPayMethod === 'cash') {
        posPaidAmount = fNum(el('pos-paid-input')?.value || 0);
        if (posPaidAmount < posTotal()) { showToast(`Uang kurang! Minimal ${fRp(posTotal())}`, 'warning'); return; }
    }
    posCustomer.name = custName; posCustomer.phone = custPhone;
    const dp       = posPayMethod === 'tempo' ? fNum(el('pos-dp-input')?.value || 0) : 0;
    const bankName = posPayMethod === 'transfer' ? (el('pos-bank-sel')?.value || '') : '';
    const btn      = el('pos-process-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...'; }

    try {
        const txId   = genTxId();
        const txData = {
            txId, date: firebase.firestore.FieldValue.serverTimestamp(), dateMs: Date.now(),
            cashier: window.__currentAdminUid || 'admin', cashierName: appData.store?.name || 'Kasir',
            customer: { name: posCustomer.name || 'Pelanggan Umum', phone: posCustomer.phone || '', isMember: posCustomer.isMember || false, memberId: posCustomer.memberId || null },
            items: posCart.map(i => ({ ...i })), subtotal: posSubtotal(), globalDiscount: fNum(posGlobalDisc), total: posTotal(),
            payment: { method: posPayMethod, paid: posPayMethod === 'cash' ? posPaidAmount : (posPayMethod === 'tempo' ? dp : posTotal()), change: posPayMethod === 'cash' ? posChange() : 0, bank: bankName, dp, tempoBalance: posPayMethod === 'tempo' ? posTotal() - dp : 0 },
            status: posPayMethod === 'tempo' ? 'tempo' : 'paid', notes: '', source: 'pos',
        };
        await db.collection('freshmart').doc('cms_data').collection('pos_transactions').doc(txId).set(txData);
        if (posPayMethod === 'tempo') {
            await db.collection('freshmart').doc('cms_data').collection('orders').doc(txId).set({
                orderId: txId, source: 'pos', dateString: new Date().toISOString(),
                customerName: txData.customer.name, customerPhone: txData.customer.phone,
                items: posCart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
                total: posTotal(), payment: { method: 'tempo', paid: dp, tempoBalance: posTotal() - dp, tempoDueDate: 0, tempoPenaltyRate: 1, tempoPenaltyStopped: false },
                status: 'processing', isTempo: true,
            });
        }
        closePayModal();
        const lastTx = { ...txData };
        posCart = []; posGlobalDisc = 0;
        renderCart(); renderCatalog();
        showPOSSuccess(lastTx);
    } catch (err) {
        console.error('[POS] Error:', err);
        showToast('Gagal menyimpan transaksi. Coba lagi.', 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>Proses & Simpan'; }
    }
};

// ─── Dialog Sukses ───────────────────────────────────────────
const showPOSSuccess = (tx) => {
    const changeInfo = tx.payment.method === 'cash'
        ? `<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${fRp(tx.payment.change)}</span></p>`
        : tx.payment.method === 'tempo' ? `<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>`
        : `<p class="text-sm text-slate-500">Metode: ${tx.payment.method.toUpperCase()}</p>`;
    const txJson = JSON.stringify(tx).replace(/"/g, '&quot;');
    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${esc(tx.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${fRp(tx.total)}</p>
          ${changeInfo}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${txJson})" class="w-full py-3 rounded-xl text-white font-bold text-sm shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">Lewati — Transaksi Baru</button>
        </div>
      </div>
    </div>`);
};

// ─── Cetak Struk ─────────────────────────────────────────────
export const printPOSReceipt = (tx) => {
    document.getElementById('pos-success-modal')?.remove();
    const storeName = appData.store?.name || 'TOKO PUTRI';
    const storeWa   = appData.store?.wa || '';
    const storeAddr = appData.store?.address || '';
    const dateStr   = new Date(tx.dateMs).toLocaleString('id-ID');
    const itemsHtml = (tx.items || []).map(i =>
        `<tr><td style="padding:2px 0;word-wrap:break-word">${esc(i.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${i.qty}x ${fRp(i.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${fRp(i.subtotal)}</td></tr>`
    ).join('');
    const w = window.open('', '_blank', 'width=420,height=720');
    if (!w) { showToast('Izinkan popup untuk cetak struk', 'warning'); return; }
    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${storeName}</h2>${storeAddr?`<p>${esc(storeAddr)}</p>`:''}${storeWa?`<p>WA: ${esc(storeWa)}</p>`:''}
    <div class="line"></div>
    <p class="left">No: <b>${esc(tx.txId)}</b></p><p class="left">Tgl: ${esc(dateStr)}</p>
    <p class="left">Kasir: ${esc(tx.cashierName)}</p><p class="left">Pelanggan: ${esc(tx.customer?.name||'Umum')}</p>
    ${tx.customer?.phone?`<p class="left">HP: ${esc(tx.customer.phone)}</p>`:''}
    <div class="line"></div><table>${itemsHtml}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${fRp(tx.subtotal)}</td></tr>
    ${(tx.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${fRp(tx.globalDiscount)}</td></tr>`:''}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${fRp(tx.total)}</td></tr>
    ${tx.payment.method==='cash'?`<tr><td>Bayar</td><td style="text-align:right">${fRp(tx.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${fRp(tx.payment.change)}</b></td></tr>`:''}
    ${tx.payment.method==='tempo'?`<tr><td>DP</td><td style="text-align:right">${fRp(tx.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${fRp(tx.payment.tempoBalance||0)}</td></tr>`:''}
    <tr><td>Metode</td><td style="text-align:right">${esc(tx.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`);
    w.document.close();
};

// ─── Render POS Utama ────────────────────────────────────────
export const renderPOS = () => {
    posSearch = ''; posCatFilterVal = '';

    setH('admin-content', `
    <div class="flex flex-col" style="height:calc(100vh - 56px)">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0" style="background:var(--color-primary)"><i class="fa-solid fa-cash-register"></i></div>
          <div><p class="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider leading-none">Kasir POS</p><p class="text-[9px] text-slate-400 mt-0.5">${esc(appData.store?.name||'Toko Putri')}</p></div>
        </div>
        <button onclick="window.openPOSHistory()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shrink-0">
          <i class="fa-solid fa-clock-rotate-left text-xs"></i><span>Riwayat</span>
        </button>
      </div>
      <!-- Split Panel -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Kiri: Katalog -->
        <div class="flex flex-col border-r border-slate-200 dark:border-slate-800 overflow-hidden" style="width:60%;min-width:0">
          <div class="p-3 space-y-2 shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
              <input id="pos-search-input-d" type="text" placeholder="Cari produk / ketik kode barcode (scanner USB)..." class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSearchFn(this.value)">
            </div>
            <div id="pos-cat-filter-d" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
          </div>
          <div id="pos-catalog-grid-d" class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-3 overflow-y-auto flex-1 content-start"></div>
        </div>
        <!-- Kanan: Keranjang -->
        <div class="flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden" style="width:40%;min-width:0">
          <div class="px-3 pt-2.5 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
            <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-cart-shopping"></i> Keranjang</p>
            <button onclick="window.posClearCart()" class="text-[9px] font-bold text-red-400 hover:text-red-600 transition-colors"><i class="fa-solid fa-trash-can mr-0.5"></i>Kosongkan</button>
          </div>
          <div id="pos-cart-items" class="flex-1 overflow-y-auto p-2 space-y-2"></div>
          <div class="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 space-y-2">
            <div class="flex justify-between text-xs"><span class="text-slate-500">Subtotal</span><span id="pos-subtotal" class="font-bold text-slate-700 dark:text-slate-200">Rp 0</span></div>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-slate-500 shrink-0">Diskon Global Rp</span>
              <input type="number" min="0" id="pos-global-disc" placeholder="0" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
            </div>
            <div class="flex justify-between items-center pt-1.5 border-t border-slate-200 dark:border-slate-700">
              <span class="text-sm font-black text-slate-800 dark:text-white">TOTAL</span>
              <span id="pos-total-amount" class="text-base font-black" style="color:var(--color-primary)">Rp 0</span>
            </div>
            <button id="pos-pay-btn" disabled onclick="window.openPayModal()" class="w-full py-3 rounded-xl text-white font-black text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)">
              <i class="fa-solid fa-cash-register"></i> BAYAR
            </button>
          </div>
        </div>
      </div>
    </div>`);

    renderCatalog(); renderCart(); initBarcodeListener();

    window.posAddToCart      = addToCart;
    window.posUpdateQty      = updateQty;
    window.posSetQty         = setQty;
    window.posSetItemDisc    = setItemDisc;
    window.posRemoveItem     = removeFromCart;
    window.posClearCart      = clearCart;
    window.openPayModal      = openPayModal;
    window.closePayModal     = closePayModal;
    window.setPosCustomerType = setPosCustomerType;
    window.setPosPayMethod   = setPosPayMethod;
    window.updatePosChange   = updatePosChange;
    window.lookupPosMember   = lookupPosMember;
    window.processPOSTx      = processPOSTx;
    window.printPOSReceipt   = printPOSReceipt;
    window.posSetGlobalDisc  = (v) => { posGlobalDisc = fNum(v); renderCart(); };
    window.posCatFilter      = (c) => { posCatFilterVal = c; renderCatalog(); };
    window.posSearchFn       = (v) => { posSearch = v; renderCatalog(); };
    window.openPOSHistory    = () => import('./pos-history.js').then(m => m.renderPOSHistory());
};

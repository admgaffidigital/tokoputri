/**
 * ============================================================
 * MODUL POS KASIR — TOKO PUTRI (SUPER-APP REDESIGN)
 * Point-of-Sale modern, responsif penuh (mobile-first),
 * multi-varian, harga grosir otomatis, diskon item + global,
 * floating cart bar, bottom sheet keranjang di HP,
 * split panel leluasa di desktop, dan quick-cash buttons.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, setIn, esc, fCur, showToast, getOptImg } from '../../core/utils.js';

// ─── Import modul varian POS (lazy agar tidak load di awal) ──
let _posVariantSheetLoaded = false;
const ensurePOSVariantSheet = () => {
    if (_posVariantSheetLoaded) return Promise.resolve();
    return import('./pos-variant-sheet.js').then(() => { _posVariantSheetLoaded = true; });
};

// ─── State ──────────────────────────────────────────────────
let posCart            = [];
let posSearch          = '';
let posCatFilterVal    = '';
let posCatalogViewMode = 'grid'; // 'grid' | 'list'
try {
    const savedMode = localStorage.getItem('pos_view_mode');
    if (savedMode === 'list' || savedMode === 'grid') posCatalogViewMode = savedMode;
} catch (e) {}
let posCustomer     = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };
let posPayMethod    = 'cash';
let posPaidAmount   = 0;
let posGlobalDisc   = 0;
let barcodeBuffer   = '';
let barcodeTimer    = null;
let clockInterval   = null;

export const setPOSViewMode = (mode) => {
    posCatalogViewMode = mode;
    try { localStorage.setItem('pos_view_mode', mode); } catch (e) {}
    const bGrid = el('pos-view-btn-grid');
    const bList = el('pos-view-btn-list');
    if (bGrid && bList) {
        if (mode === 'grid') {
            bGrid.style.background = 'var(--color-primary)';
            bGrid.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs';
            bList.style.removeProperty('background');
            bList.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400';
        } else {
            bList.style.background = 'var(--color-primary)';
            bList.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs';
            bGrid.style.removeProperty('background');
            bGrid.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400';
        }
    }
    renderCatalog();
};

// ─── Helpers ────────────────────────────────────────────────
const fNum = (n) => Math.max(0, parseInt(n) || 0);
const fRp  = (n) => fCur(n);

const posSubtotal = () => posCart.reduce((s, i) => s + i.subtotal, 0);
const posTotal    = () => Math.max(0, posSubtotal() - fNum(posGlobalDisc));
const posChange   = () => posPaidAmount - posTotal();

// Audio Beep Sintetis Kasir (Zero-dependency Web Audio API)
export const playCashierBeep = () => {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
        setTimeout(() => { ctx.close().catch(() => {}); }, 150);
    } catch (e) {}
};

// Hitung harga grosir berdasarkan qty (untuk produk tanpa varian)
const getWholesalePrice = (product, qty) => {
    if (!product || !product.wholesale || !product.wholesale.length) return null;
    const tiers = [...product.wholesale].sort((a, b) => b.minQty - a.minQty);
    for (const tier of tiers) {
        if (qty >= parseFloat(tier.minQty)) return parseFloat(tier.price);
    }
    return null;
};

const recalcItem = (item) => {
    // Jika bukan varian, hitung harga grosir otomatis
    if (!item.isVariant) {
        const p = (appData.products || []).find(x => x && String(x.id) === String(item.id));
        const wPrice = p ? getWholesalePrice(p, item.qty) : null;
        if (wPrice !== null) {
            item.basePrice   = item.basePrice || item.price; // simpan harga asli
            item.price       = wPrice;
            item.isWholesale = true;
        } else {
            if (item.basePrice) item.price = item.basePrice; // kembalikan harga asli
            item.isWholesale = false;
        }
    }
    item.subtotal = Math.max(0, item.price * item.qty - fNum(item.discount));
    return item;
};

const genTxId = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `POS-${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${Date.now().toString(36).toUpperCase()}`;
};

// ─── Digital Clock Updater ──────────────────────────────────
const startClock = () => {
    if (clockInterval) clearInterval(clockInterval);
    const update = () => {
        const c = el('pos-live-clock');
        if (!c) return;
        const now = new Date();
        c.textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
    };
    update();
    clockInterval = setInterval(update, 1000);
};

// ─── Barcode Scanner (USB) ──────────────────────────────────
export const destroyBarcodeListener = () => {
    if (window.__posBarcodeFn) {
        document.removeEventListener('keydown', window.__posBarcodeFn);
        window.__posBarcodeFn = null;
    }
};

const initBarcodeListener = () => {
    destroyBarcodeListener();
    window.__posBarcodeFn = (e) => {
        if (!e || typeof e.key !== 'string') return;

        // Hanya aktif di view POS Cashier atau tab POS Admin
        const curView = window.curViewName || '';
        const inPos = curView === 'view-pos-cashier' || (curView === 'view-admin' && window.cTab === 'pos');
        if (!inPos) return;

        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

        if (e.key === 'Enter') {
            if (barcodeBuffer && barcodeBuffer.length >= 3) {
                const c = barcodeBuffer.trim().toLowerCase();
                const prod = (appData.products || []).find(p =>
                    p && p.isActive !== 'false' && p.isActive !== false &&
                    ((p.barcode && p.barcode.toLowerCase() === c) ||
                     (p.sku && p.sku.toLowerCase() === c) ||
                     (p.id && String(p.id).toLowerCase() === c))
                );
                if (prod) {
                    addToCart(prod.id);
                    playCashierBeep();
                    showToast(`Ditambahkan: ${prod.name}`, 'success');
                } else {
                    const sf = el('pos-search-input');
                    if (sf) { sf.value = barcodeBuffer; posSearch = barcodeBuffer; renderCatalog(); }
                    showToast('Barcode tidak ditemukan di katalog', 'warning');
                }
                barcodeBuffer = '';
            }
        } else if (e.key && e.key.length === 1) {
            barcodeBuffer = (barcodeBuffer || '') + e.key;
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
    const hasVariants = p.variants && p.variants.length > 0;
    if (hasVariants) {
        // Produk ber-varian → buka sheet pilih varian
        ensurePOSVariantSheet().then(() => {
            if (typeof window.openPOSVariantSheet === 'function') window.openPOSVariantSheet(productId);
        });
        return;
    }
    const existing = posCart.find(i => String(i.id) === String(productId) && !i.isVariant);
    if (existing) { existing.qty += 1; recalcItem(existing); }
    else {
        const price = parseFloat(p.price) || 0;
        posCart.push(recalcItem({ id: p.id, name: p.name, price, basePrice: price, qty: 1, discount: 0, subtotal: price, isVariant: false, isWholesale: false }));
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
};

export const posAddToCartQty = (productId, qty) => {
    const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
    if (!p) return;
    const existing = posCart.find(i => String(i.id) === String(productId) && !i.isVariant);
    if (existing) { existing.qty += qty; recalcItem(existing); }
    else {
        const price = parseFloat(p.price) || 0;
        const item  = recalcItem({ id: p.id, name: p.name, price, basePrice: price, qty, discount: 0, subtotal: price * qty, isVariant: false, isWholesale: false });
        posCart.push(item);
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
};

export const addToCartWithVariant = (productId, variantName, variantPrice, variantIdx, qty = 1) => {
    const cartKey = `${productId}__v${variantIdx}`;
    const existing = posCart.find(i => i.cartKey === cartKey);
    if (existing) { existing.qty += qty; recalcItem(existing); }
    else {
        const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
        const displayName = `${p?.name || productId} — ${variantName}`;
        posCart.push(recalcItem({
            id: productId, cartKey,
            name: displayName,
            variantName, variantIdx,
            price: variantPrice, basePrice: variantPrice,
            qty, discount: 0, subtotal: variantPrice * qty,
            isVariant: true, isWholesale: false
        }));
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
};

export const updateQty = (cartKey, delta) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    recalcItem(item);
    if (delta > 0) playCashierBeep();
    renderCart();
};

export const setQty = (cartKey, val) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    item.qty = Math.max(1, fNum(val));
    recalcItem(item);
    renderCart();
};

export const setItemDisc = (cartKey, val) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    item.discount = Math.min(fNum(val), item.price * item.qty);
    recalcItem(item);
    renderCart();
};

export const removeFromCart = (cartKey) => {
    posCart = posCart.filter(i => (i.cartKey || String(i.id)) !== String(cartKey));
    renderCart();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const clearCart = () => {
    if (posCart.length === 0) return;
    const executeClear = () => {
        posCart = []; posGlobalDisc = 0; renderCart();
        showToast('Keranjang kasir dikosongkan.');
    };
    if (typeof window.showConfirm === 'function') {
        window.showConfirm('Kosongkan Keranjang', 'Hapus semua item dari transaksi saat ini?', executeClear, 'Ya, Kosongkan', true);
    } else {
        executeClear();
    }
};

// ─── Mobile Drawer (Bottom Sheet) ───────────────────────────
export const openPOSCartDrawer = () => {
    const drawer = el('pos-mobile-cart-drawer');
    const sheet  = el('pos-mobile-cart-sheet');
    if (drawer && sheet) {
        drawer.classList.remove('opacity-0', 'pointer-events-none');
        drawer.classList.add('opacity-100');
        sheet.classList.remove('translate-y-full');
        sheet.classList.add('translate-y-0');
        if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posCartDrawer');
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    }
};

export const closePOSCartDrawer = (skipHistory = false) => {
    const drawer = el('pos-mobile-cart-drawer');
    const sheet  = el('pos-mobile-cart-sheet');
    if (drawer && sheet) {
        const performClose = () => {
            sheet.classList.add('translate-y-full');
            sheet.classList.remove('translate-y-0');
            drawer.classList.add('opacity-0', 'pointer-events-none');
            drawer.classList.remove('opacity-100');
        };
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posCartDrawer', false, performClose);
        } else {
            performClose();
        }
    }
};

// ─── Render Katalog ──────────────────────────────────────────
const getItemImg = (item) => {
    if (item.img && typeof item.img === 'string') return getOptImg(item.img, 'w150-rw');
    const p = (appData.products || []).find(x => String(x.id) === String(item.id));
    if (p && p.img && typeof p.img === 'string') return getOptImg(p.img, 'w150-rw');
    return '';
};

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
        const isAll  = c === 'Semua';
        const active = isAll ? !posCatFilterVal : posCatFilterVal === c;
        return `<button onclick="window.posCatFilter('${esc(isAll ? '' : c)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${active ? 'text-white border-transparent' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}" style="${active ? 'background:var(--color-primary)' : ''}">${esc(c)}</button>`;
    }).join('');

    const prodHTML = products.length === 0
        ? `<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`
        : products.map(p => {
            const hasImg         = Boolean(p.img && typeof p.img === 'string' && p.img.trim());
            const imgUrl         = hasImg ? getOptImg(p.img, 'w300-rw') : '';
            const hasVariants    = p.variants && p.variants.length > 0;
            const hasGrosir      = p.wholesale && p.wholesale.length > 0;
            const cartItems      = posCart.filter(i => String(i.id) === String(p.id));
            const totalQtyInCart = cartItems.reduce((s, i) => s + i.qty, 0);
            const safeId         = esc(String(p.id));

            if (posCatalogViewMode === 'list') {
                // ── LIST MODE: baris kompak dengan thumbnail 52px ──
                return `
                <div class="pos-list-item${totalQtyInCart > 0 ? ' in-cart' : ''}" onclick="window.posAddToCart('${safeId}')">
                    <div class="pos-list-thumb">
                        ${hasImg
                            ? `<img width="52" height="52" loading="lazy" decoding="async" src="${esc(imgUrl)}" alt="${esc(p.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`
                            : `<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`}
                        ${totalQtyInCart > 0 ? `<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${totalQtyInCart}</div>` : ''}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${p.category ? `<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${esc(p.category)}</span>` : ''}
                            ${hasVariants ? `<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>` : ''}
                            ${hasGrosir   ? `<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>` : ''}
                        </div>
                        <p style="font-size:12px;font-weight:700;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(p.name)}">${esc(p.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${fRp(parseFloat(p.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${safeId}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`;
            }

            // ── GRID MODE (Default): kartu 1:1 anti-collapse (min-height 220px) ──
            return `
            <div class="pos-product-card${totalQtyInCart > 0 ? ' in-cart' : ''}" onclick="window.posAddToCart('${safeId}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${hasVariants ? `<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>` : ''}
                        ${hasGrosir   ? `<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>` : ''}
                    </div>
                    ${totalQtyInCart > 0 ? `<div class="pos-qty-badge">${totalQtyInCart}</div>` : ''}
                    ${hasImg
                        ? `<img width="300" height="300" loading="lazy" decoding="async" src="${esc(imgUrl)}" alt="${esc(p.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${esc(p.category || 'Toko')}</span>
                           </div>`
                        : `<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${esc(p.category || 'Produk')}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${p.category ? `<p class="pos-card-cat">${esc(p.category)}</p>` : ''}
                    <p class="pos-card-name" title="${esc(p.name)}">${esc(p.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${fRp(parseFloat(p.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${safeId}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');

    const catEl  = el('pos-cat-filter');
    const gridEl = el('pos-catalog-grid');
    if (catEl)  catEl.innerHTML  = catHTML;
    if (gridEl) {
        gridEl.className = posCatalogViewMode === 'list' ? 'pos-catalog-list-mode' : 'pos-catalog-grid-mode';
        gridEl.innerHTML = prodHTML;
    }
};

// ─── Render Cart ─────────────────────────────────────────────
const renderCart = () => {
    const totalQty = posCart.reduce((s, i) => s + i.qty, 0);
    const subtotal = posSubtotal();
    const total    = posTotal();
    const formattedTotal = fRp(total);
    const formattedSub   = fRp(subtotal);

    const itemsHTML = posCart.length === 0
        ? `<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`
        : posCart.map(item => {
            const ckey = esc(String(item.cartKey || item.id));
            const img = getItemImg(item);
            return `
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${img 
                        ? `<img width="40" height="40" loading="lazy" src="${esc(img)}" alt="${esc(item.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`
                        : `<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug">${esc(item.name)}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${item.isWholesale ? `<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>` : ''}
                        ${item.isVariant ? `<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded bg-indigo-600 text-white shadow-2xs">VARIAN</span>` : ''}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${item.isWholesale && item.basePrice ? `<span class="line-through text-slate-400">${fRp(item.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${fRp(item.price)}</span>` : fRp(item.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${item.discount || ''}" onchange="window.posSetItemDisc('${ckey}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${ckey}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${item.qty}" onchange="window.posSetQty('${ckey}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${ckey}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${fRp(item.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${ckey}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`;
        }).join('');

    // Update semua target DOM tersinkronisasi
    document.querySelectorAll('.pos-cart-items-target').forEach(e => e.innerHTML = itemsHTML);
    document.querySelectorAll('.pos-subtotal-target').forEach(e => e.textContent = formattedSub);
    document.querySelectorAll('.pos-total-target').forEach(e => e.textContent = formattedTotal);
    document.querySelectorAll('.pos-item-count-target').forEach(e => e.textContent = String(totalQty));
    document.querySelectorAll('.pos-global-disc-target').forEach(e => {
        if (document.activeElement !== e) e.value = posGlobalDisc || '';
    });
    document.querySelectorAll('.pos-pay-btn-target').forEach(btn => {
        btn.disabled = posCart.length === 0;
        const textSpan = btn.querySelector('.btn-text');
        if (textSpan) {
            textSpan.textContent = posCart.length > 0 ? `BAYAR — ${formattedTotal}` : `PROSES PEMBAYARAN`;
        }
    });

    // Kontrol visibilitas Floating Cart Bar di Layar HP
    const floatBar = el('pos-mobile-floating-bar');
    if (floatBar) {
        if (posCart.length > 0) {
            floatBar.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
            floatBar.classList.add('translate-y-0', 'opacity-100');
        } else {
            floatBar.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
            floatBar.classList.remove('translate-y-0', 'opacity-100');
            closePOSCartDrawer(true);
        }
    }
};

// ─── Modal Bayar ─────────────────────────────────────────────
export const openPayModal = () => {
    if (posCart.length === 0) { showToast('Keranjang masih kosong!', 'warning'); return; }
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posPayment');
    posCustomer   = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };
    posPayMethod  = 'cash';
    posPaidAmount = posTotal(); // default: uang pas

    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${fRp(posTotal())}</span></p>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user block text-sm mb-1"></i>Umum</button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-id-card block text-sm mb-1"></i>Member</button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-sm mb-1"></i>Tempo</button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave block text-sm mb-1"></i>Tunai</button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-qrcode block text-sm mb-1"></i>QRIS</button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-building-columns block text-sm mb-1"></i>Bank</button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-sm mb-1"></i>Tempo</button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2.5 shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <button onclick="window.closePayModal()" class="w-1/3 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`);

    renderPayDetail('cash');
};

export const closePayModal = (skipHistory = false) => {
    const m = el('pos-pay-modal');
    if (m) {
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posPayment', false, () => m.remove());
        } else {
            m.remove();
        }
    }
};

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
    const topRow = `
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${fRp(total)}</span>
      </div>`;

    if (method === 'cash') {
        const quickAmounts = [
            { label: 'Uang Pas', val: total, isPas: true },
            { label: '10.000', val: 10000 },
            { label: '20.000', val: 20000 },
            { label: '50.000', val: 50000 },
            { label: '100.000', val: 100000 },
            { label: '200.000', val: 200000 },
            { label: '500.000', val: 500000 }
        ];

        const quickBtns = quickAmounts.map(q => `
            <button onclick="window.posSetQuickCash(${q.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${q.isPas ? 'text-white border-transparent shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]'}"
                style="${q.isPas ? 'background:var(--color-primary)' : ''}">
                ${q.isPas ? '💵 Uang Pas' : `Rp ${q.label}`}
            </button>
        `).join('');

        d.innerHTML = `
            ${topRow}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${total}" value="${posPaidAmount || ''}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${quickBtns}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${posPaidAmount >= total ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${posPaidAmount >= total ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}">
                            ${posPaidAmount >= total ? 'Kembalian Uang Pembeli:' : 'Uang Masih Kurang:'}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${posPaidAmount >= total ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                        ${fRp(Math.abs(posChange()))}
                    </span>
                </div>
            </div>
        `;
    } else if (method === 'qris') {
        const q = appData.payment?.qrisUrl || '';
        d.innerHTML = `
          ${topRow}
          ${q ? `<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${esc(q)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>` 
             : `<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>`}`;
    } else if (method === 'transfer') {
        const banks = (appData.banks || []).filter(b => b && b.name);
        d.innerHTML = `
          ${topRow}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Rekening Tujuan Toko</label>
          <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none">
            ${banks.length ? banks.map(b => `<option>${esc(b.name)} — ${esc(b.number||'')} a/n ${esc(b.holder||'')}</option>`).join('') : '<option>Rekening bank belum diatur</option>'}
          </select>`;
    } else if (method === 'tempo') {
        d.innerHTML = `
          ${topRow}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`;
    }
};

export const setPosCustomerType = (type) => {
    posCustomer.isMember   = type === 'member';
    posCustomer.isNewTempo = type === 'tempo';
    setActiveBtn('pos-ctype', type, ['umum','member','tempo']);
    const f = el('pos-customer-fields');
    if (!f) return;
    if (type === 'umum') {
        f.innerHTML = `<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">`;
    } else if (type === 'member') {
        f.innerHTML = `
          <div class="flex gap-2">
            <input id="pos-cust-phone" type="tel" placeholder="No. HP Member Toko" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            <button onclick="window.lookupPosMember()" type="button" class="px-3.5 py-2 rounded-xl text-white text-xs font-bold" style="background:var(--color-primary)"><i class="fa-solid fa-magnifying-glass mr-1"></i>Cek</button>
          </div>
          <div id="pos-member-result" class="mt-2"></div>`;
    } else if (type === 'tempo') {
        setPosPayMethod('tempo');
        f.innerHTML = `
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`;
    }
};

export const setPosPayMethod = (method) => {
    posPayMethod = method;
    setActiveBtn('pos-pay', method, ['cash','qris','transfer','tempo']);
    renderPayDetail(method);
};

export const updatePosChange = (val) => {
    posPaidAmount = fNum(val);
    const total   = posTotal();
    const change  = posPaidAmount - total;
    const c       = el('pos-change-display');
    const lbl     = el('pos-change-label');
    const box     = el('pos-change-box');
    const procBtn = el('pos-process-btn');

    if (c) c.textContent = fRp(Math.abs(change));
    if (lbl) lbl.textContent = change >= 0 ? 'Kembalian Uang Pembeli:' : 'Uang Masih Kurang:';
    if (c) {
        c.className = `text-base font-black ${change >= 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`;
    }
    if (box) {
        box.className = `mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${change >= 0 ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'}`;
    }
    if (procBtn && posPayMethod === 'cash') {
        procBtn.disabled = change < 0;
        procBtn.classList.toggle('opacity-50', change < 0);
    }
};

export const posSetQuickCash = (val) => {
    const inp = el('pos-paid-input');
    if (inp) {
        inp.value = val;
        updatePosChange(val);
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    }
};

export const lookupPosMember = () => {
    const phone = el('pos-cust-phone')?.value?.trim();
    if (!phone) { showToast('Masukkan nomor HP', 'warning'); return; }
    const norm   = phone.replace(/\D/g, '');
    const member = (appData.customers || []).find(c => c && c.phone && c.phone.replace(/\D/g, '').endsWith(norm));
    const r = el('pos-member-result');
    if (!r) return;
    if (member) {
        posCustomer.name     = member.name || '';
        posCustomer.memberId = member.id || member.phone;
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
    posCustomer.name  = custName;
    posCustomer.phone = custPhone;
    const dp          = posPayMethod === 'tempo' ? fNum(el('pos-dp-input')?.value || 0) : 0;
    const bankName    = posPayMethod === 'transfer' ? (el('pos-bank-sel')?.value || '') : '';
    const btn         = el('pos-process-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...'; }

    try {
        const txId   = genTxId();
        const cashierSession = typeof window.getCashierSession === 'function' ? window.getCashierSession() : null;
        const cashierName = cashierSession?.name || appData.store?.name || 'Kasir';
        const cashierUid  = cashierSession?.uid || window.__currentAdminUid || 'admin';

        const txData = {
            txId, date: firebase.firestore.FieldValue.serverTimestamp(), dateMs: Date.now(),
            cashier: cashierUid, cashierName,
            customer: { name: posCustomer.name || 'Pelanggan Umum', phone: posCustomer.phone || '', isMember: posCustomer.isMember || false, memberId: posCustomer.memberId || null },
            items: posCart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, discount: i.discount || 0, subtotal: i.subtotal, variantName: i.variantName || '', isVariant: i.isVariant || false, isWholesale: i.isWholesale || false })),
            subtotal: posSubtotal(), globalDiscount: fNum(posGlobalDisc), total: posTotal(),
            payment: { method: posPayMethod, paid: posPayMethod === 'cash' ? posPaidAmount : (posPayMethod === 'tempo' ? dp : posTotal()), change: posPayMethod === 'cash' ? posChange() : 0, bank: bankName, dp, tempoBalance: posPayMethod === 'tempo' ? posTotal() - dp : 0 },
            status: posPayMethod === 'tempo' ? 'tempo' : 'paid', notes: '', source: 'pos',
        };

        await db.collection('freshmart').doc('cms_data').collection('pos_transactions').doc(txId).set(txData);

        if (posPayMethod === 'tempo') {
            await db.collection('freshmart_orders').doc(txId).set({
                orderId: txId, source: 'pos', dateString: new Date().toISOString(),
                customerName: txData.customer.name, customerPhone: txData.customer.phone,
                items: posCart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
                total: posTotal(),
                payment: {
                    method: 'tempo',
                    paymentStatus: 'hutang',
                    paid: dp,
                    tempoBalance: posTotal() - dp,
                    tempoDueDate: Date.now() + 7 * 86400000,
                    tempoPenaltyRate: 1,
                    tempoPenaltyStopped: false
                },
                status: 'Diproses',
                isTempo: true,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        closePayModal();
        closePOSCartDrawer(true);
        const lastTx = { ...txData };
        posCart = []; posGlobalDisc = 0;
        renderCart(); renderCatalog();
        showPOSSuccess(lastTx);
    } catch (err) {
        console.error('[POS] Error:', err);
        showToast('Gagal menyimpan transaksi. Coba lagi.', 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi'; }
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
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${esc(tx.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${fRp(tx.total)}</p>
          ${changeInfo}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${txJson})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">Transaksi Baru</button>
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

// ─── Layout Generator Terpadu ────────────────────────────────
const buildPOSLayout = ({ isStorefront }) => {
    const cashierSession = typeof window.getCashierSession === 'function' ? window.getCashierSession() : null;
    const cashierName = cashierSession?.name || (isStorefront ? 'Kasir' : 'Admin Seller');
    const storeName   = esc(appData.store?.name || 'Toko Putri');

    const headerHTML = isStorefront
        ? `
        <!-- STOREFRONT POS HEADER (52px) -->
        <header class="h-[52px] shrink-0 text-white flex items-center justify-between px-3 sm:px-4 z-30 shadow-md" style="background:var(--color-primary)">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer" title="Kembali ke Etalase Toko">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div class="min-w-0">
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${storeName}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${esc(cashierName)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <button onclick="window.openPOSHistory()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-black/15 hover:bg-black/25 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer" title="Riwayat Transaksi">
                    <i class="fa-solid fa-clock-rotate-left text-xs"></i>
                    <span class="hidden sm:inline">Riwayat</span>
                </button>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`
        : `
        <!-- ADMIN POS ACTION STRIP (kompak & menyatu tanpa double header) -->
        <div class="h-10 shrink-0 bg-slate-100 dark:bg-slate-800/70 px-3 sm:px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 text-xs">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">Terminal Kasir POS</span>
                <span class="hidden sm:inline text-slate-400">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[10px] font-mono text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="hidden md:inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-barcode"></i> Scanner Otomatis
                </span>
                <button onclick="window.openPOSHistory()" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-[10px] font-bold flex items-center gap-1 hover:bg-slate-50 transition-all cursor-pointer">
                    <i class="fa-solid fa-clock-rotate-left"></i> Riwayat
                </button>
                <button onclick="window.posClearCart()" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-rose-500 text-[10px] font-bold flex items-center gap-1 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                    <i class="fa-solid fa-trash-can"></i> Reset
                </button>
            </div>
        </div>`;

    return `
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-100/70 dark:bg-slate-950">
        ${headerHTML}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1">
                            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari nama barang, barcode scanner USB, atau SKU..." 
                                class="w-full pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button onclick="el('pos-search-input').value=''; window.posSearchFn('');" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer" title="Hapus pencarian">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${posCatalogViewMode === 'grid' ? 'text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'}" style="${posCatalogViewMode === 'grid' ? 'background:var(--color-primary)' : ''}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${posCatalogViewMode === 'list' ? 'text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'}" style="${posCatalogViewMode === 'list' ? 'background:var(--color-primary)' : ''}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${posCatalogViewMode === 'list' ? 'pos-catalog-list-mode' : 'pos-catalog-grid-mode'}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">
                            Keranjang Transaksi (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                        <i class="fa-solid fa-trash-can mr-1"></i>Kosongkan
                    </button>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="text-slate-500 shrink-0 font-medium">Diskon Global</span>
                        <div class="flex-1 relative">
                            <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                            <input type="number" min="0" placeholder="0" class="pos-global-disc-target w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-7 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-xl font-black" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60">Siap Bayar</span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-3 left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between border border-slate-700/80 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="pos-item-count-target absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">0</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-[11px] font-bold text-slate-300">Total Transaksi</span>
                        </div>
                        <p class="pos-total-target text-sm font-black text-emerald-400">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:var(--color-primary)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Bottom Sheet Slide-up) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden fixed inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(3px)">
            <div id="pos-mobile-cart-sheet" class="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden border-t border-slate-200 dark:border-slate-800">
                <!-- Handle -->
                <div class="pt-2 pb-1 flex justify-center shrink-0 cursor-pointer" onclick="window.closePOSCartDrawer()">
                    <div class="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <!-- Header -->
                <div class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">Keranjang Transaksi (<span class="pos-item-count-target">0</span>)</h3>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 transition-all"><i class="fa-solid fa-trash-can mr-1"></i>Kosongkan</button>
                        <button onclick="window.closePOSCartDrawer()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2 min-h-[160px]"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="text-slate-500 shrink-0 font-medium">Diskon Global Rp</span>
                        <input type="number" min="0" placeholder="0" class="pos-global-disc-target flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base font-black" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};

// ─── Render Storefront Standalone View ───────────────────────
export const renderPOSStorefront = () => {
    posSearch       = '';
    posCatFilterVal = '';
    posCart         = [];
    posGlobalDisc   = 0;

    const viewEl = el('view-pos-cashier');
    if (!viewEl) return;

    viewEl.innerHTML = buildPOSLayout({ isStorefront: true });
    renderCatalog();
    renderCart();
    initBarcodeListener();
    startClock();
    exposeToWindow();
};

// ─── Render di Admin CMS ────────────────────────────────────
export const renderPOS = () => {
    posSearch       = '';
    posCatFilterVal = '';

    const adminContent = el('admin-content');
    if (!adminContent) return;

    // Pastikan container admin mengambil tinggi penuh layar tanpa scroll ganda
    setH('admin-content', `<div style="height:calc(100vh - 105px)">${buildPOSLayout({ isStorefront: false })}</div>`);
    renderCatalog();
    renderCart();
    initBarcodeListener();
    startClock();
    exposeToWindow();
};

// ─── Expose ke Window ────────────────────────────────────────
const exposeToWindow = () => {
    window.setPOSViewMode          = setPOSViewMode;
    window.posAddToCart            = addToCart;
    window.posAddToCartQty         = posAddToCartQty;
    window.addToCartPOSWithVariant = addToCartWithVariant;
    window.posUpdateQty            = updateQty;
    window.posSetQty               = setQty;
    window.posSetItemDisc          = setItemDisc;
    window.posRemoveItem           = removeFromCart;
    window.posClearCart            = clearCart;
    window.openPayModal            = openPayModal;
    window.closePayModal           = closePayModal;
    window.setPosCustomerType      = setPosCustomerType;
    window.setPosPayMethod         = setPosPayMethod;
    window.updatePosChange         = updatePosChange;
    window.posSetQuickCash         = posSetQuickCash;
    window.lookupPosMember         = lookupPosMember;
    window.processPOSTx            = processPOSTx;
    window.printPOSReceipt         = printPOSReceipt;
    window.posSetGlobalDisc        = (v) => { posGlobalDisc = fNum(v); renderCart(); };
    window.posCatFilter            = (c) => { posCatFilterVal = c; renderCatalog(); };
    window.posSearchFn             = (v) => { posSearch = v; renderCatalog(); };
    window.openPOSCartDrawer       = openPOSCartDrawer;
    window.closePOSCartDrawer      = closePOSCartDrawer;
    window.playCashierBeep         = playCashierBeep;
    window.openPOSHistory          = () => import('./pos-history.js').then(m => m.renderPOSHistory());
    window.destroyBarcodeListener  = destroyBarcodeListener;
};

// Global expose
window.setPOSViewMode         = setPOSViewMode;
window.renderPOSStorefront    = renderPOSStorefront;
window.renderPOS              = renderPOS;
window.destroyBarcodeListener = destroyBarcodeListener;
window.openPOSCartDrawer      = openPOSCartDrawer;
window.closePOSCartDrawer     = closePOSCartDrawer;
window.posSetQuickCash        = posSetQuickCash;
window.playCashierBeep        = playCashierBeep;

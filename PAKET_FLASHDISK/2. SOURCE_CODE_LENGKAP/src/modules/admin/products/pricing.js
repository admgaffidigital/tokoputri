/**
 * ============================================================
 * ADMIN PRODUCTS — EDIT CEPAT HARGA & GROSIR (pricing.js)
 * Modal ringan untuk update HPP, harga jual, harga coret, poin,
 * dan tabel harga grosir tanpa perlu membuka form lengkap.
 * Menggunakan Firestore transaction agar aman dari race condition.
 * ============================================================
 */

import { db } from '../../../config/firebase.js';
import { saveApp } from '../../../services/storage.js';
import { appData } from '../../../core/state.js';
import { setH, esc, sLoad, hLoad, showToast } from '../../../core/utils.js';
import { isSaving, setIsSaving, tWhol, setTWhol } from './index.js';

const pushModalHistory  = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => window.requestCloseModal?.(id, fH, cb);

/** Array grosir sementara khusus modal edit cepat harga */
let qpWhol = [];

// ─── Modal Edit Cepat Harga ───────────────────────────────────────────────────

window.openQuickPriceModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;
    const hasVariants = p.variants && p.variants.length > 0;
    qpWhol = (!hasVariants && p.wholesale) ? JSON.parse(JSON.stringify(p.wholesale)) : [];

    let body = '';
    if (hasVariants) {
        body = p.variants.map((v, i) => `
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${v.colorCode ? `<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${i}" value="${v.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${i}" value="${v.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${i}" value="${v.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${v.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`
        ).join('');
    } else {
        body = `
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${p.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${p.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${p.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${p.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;
    }

    let m = document.getElementById('quickprice-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'quickprice-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeQuickPriceModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${body}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`;
    if (!hasVariants) rQpWhol();
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => { m.style.transition = 'opacity 0.25s ease'; m.style.opacity = '1'; });
    pushModalHistory('quickprice');
};

/** Render daftar baris harga grosir dalam modal edit cepat */
window.rQpWhol = () => {
    setH('qp-whol-container', qpWhol.length ? qpWhol.map((w, i) => `
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${w.minQty||''}" onchange="qpWhol[${i}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${w.price||''}" onchange="qpWhol[${i}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="qpWhol.splice(${i},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>`);
};
window.qpAddWhol = () => { qpWhol.push({minQty:0, price:0}); rQpWhol(); };

window.closeQuickPriceModal = (fH=false) => {
    requestCloseModal('quickprice', fH, () => {
        const m = document.getElementById('quickprice-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    });
};

window.processQuickPrice = async (id) => {
    if (isSaving) return; setIsSaving(true);
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { setIsSaving(false); return; }
    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;

    sLoad('Menyimpan Harga...');
    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        if (!_db) throw new Error("Database Firebase belum terhubung");

        const prodRef = _db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let updated = null;
        await _db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                p.variants.forEach((localVar, i) => {
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx < 0) return;
                    serverProd.variants[sIdx].hpp         = parseFloat(document.getElementById('qp-var-hpp-' + i)?.value) || 0;
                    serverProd.variants[sIdx].price       = parseFloat(document.getElementById('qp-var-price-' + i)?.value) || 0;
                    serverProd.variants[sIdx].priceNormal = parseFloat(document.getElementById('qp-var-normal-' + i)?.value) || 0;
                    serverProd.variants[sIdx].poin        = parseFloat(document.getElementById('qp-var-poin-' + i)?.value) || 0;
                });
            } else {
                serverProd.hpp         = parseFloat(document.getElementById('qp-hpp')?.value) || 0;
                serverProd.price       = parseFloat(document.getElementById('qp-price')?.value) || 0;
                serverProd.priceNormal = parseFloat(document.getElementById('qp-normal')?.value) || 0;
                serverProd.poin        = parseFloat(document.getElementById('qp-poin')?.value) || 0;
                serverProd.wholesale   = qpWhol.filter(w => parseFloat(w.minQty) > 0.01 && w.price > 0);
            }
            transaction.set(prodRef, serverProd);
            updated = serverProd;
        });
        appData.products[idx] = updated;
        await _save([], { updateType: 'stock_change', updatedProductIds: [id.toString()] });
        closeQuickPriceModal();
        window.rAdmItms?.('products');
        showToast("✅ Harga berhasil diperbarui!");
    } catch(e) { showToast("Gagal simpan harga: " + (e.message || '')); }
    finally { setIsSaving(false); hLoad(); }
};

// ─── Wholesale & Spec Builder (dipanggil dari form.js) ───────────────────────

window.rWholB = () => {
    let h = `<div class="space-y-4 mb-4">${tWhol.map((w,i) => `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-600">
            <button onclick="rmWhol(${i})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.minQty}" onchange="uWhol(${i},'minQty',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.price}" onchange="uWhol(${i},'price',this.value)">
                </div>
            </div>
        </div>`).join('')}</div>
        <button onclick="addWhol()" class="w-full py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-bold rounded-[1.5rem] text-sm border-2 border-amber-200 border-dashed hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-tags"></i> Tambah Tingkatan Grosir</button>`;
    const el_ = document.getElementById('wholesale-builder-container');
    if (el_) el_.innerHTML = h;
};

window.addWhol  = () => { tWhol.push({minQty:2, price:0}); setTWhol(tWhol); window.rWholB(); };
window.rmWhol   = (i) => { tWhol.splice(i,1); setTWhol(tWhol); window.rWholB(); };
window.uWhol    = (i,k,v) => { tWhol[i][k] = parseFloat(v) || 0; };

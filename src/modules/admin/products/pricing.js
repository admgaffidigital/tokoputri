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
import { isSaving, setIsSaving, tWhol, setTWhol, tMultiUnits, setTMultiUnits } from './index.js';
import { checkHppMarginStatus } from '../../../core/uom.js';

const pushModalHistory  = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => window.requestCloseModal?.(id, fH, cb);

/** Array grosir sementara khusus modal edit cepat harga */
let qpWhol = [];

// ─── Modal Edit Cepat Harga ───────────────────────────────────────────────────

window.openQuickPriceModal = (id) => {
    const p = appData.products.find(x => x && x.id != null && String(x.id) === String(id));
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
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${v.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`
        ).join('');
    } else {
        body = `
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${p.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${p.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${p.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${p.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
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
        m.className = 'fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeQuickPriceModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${body}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice('${esc(String(id))}')" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`;
    if (!hasVariants) rQpWhol();
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => { m.style.transition = 'opacity 0.25s ease'; m.style.opacity = '1'; });
    pushModalHistory('quickprice');
};

/** Handler mutasi grosir edit cepat */
window.qpUpdateWhol = (idx, field, val) => {
    if (qpWhol[idx]) qpWhol[idx][field] = parseFloat(val) || 0;
};
window.qpRemoveWhol = (idx) => {
    qpWhol.splice(idx, 1);
    if (typeof window.rQpWhol === 'function') window.rQpWhol();
};

/** Render daftar baris harga grosir dalam modal edit cepat */
window.rQpWhol = () => {
    setH('qp-whol-container', qpWhol.length ? qpWhol.map((w, i) => `
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${w.minQty||''}" onchange="window.qpUpdateWhol(${i}, 'minQty', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${w.price||''}" onchange="window.qpUpdateWhol(${i}, 'price', this.value)" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="window.qpRemoveWhol(${i})" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
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
    const idx = appData.products.findIndex(x => x && x.id != null && String(x.id) === String(id));
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
        showToast("Harga berhasil diperbarui!");
    } catch(e) { showToast("Gagal simpan harga: " + (e.message || '')); }
    finally { setIsSaving(false); hLoad(); }
};

// ─── Wholesale & Spec Builder (dipanggil dari form.js) ───────────────────────

// ─── Wholesale & Multi-Units Builder (dipanggil dari form.js) ────────────────

window.rWholB = () => {
    const el_ = document.getElementById('wholesale-builder-container');
    if (!el_) return;
    const baseHpp = parseFloat(document.getElementById('af-hpp')?.value) || 0;
    let h = `<div class="space-y-4 mb-4">${tWhol.map((w,i) => {
        const margin = checkHppMarginStatus(w.price, baseHpp);
        let marginBadge = '';
        if (w.price > 0 && baseHpp > 0) {
            if (margin.isNegative) {
                marginBadge = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif (-Rp ${Math.abs(margin.marginRp).toLocaleString('id-ID')})</span>`;
            } else if (margin.isThin) {
                marginBadge = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${margin.marginPercent}%)</span>`;
            } else {
                marginBadge = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${margin.marginPercent}%)</span>`;
            }
        }
        return `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
            <button type="button" onclick="rmWhol(${i})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.minQty}" onchange="uWhol(${i},'minQty',this.value)">
                </div>
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                        ${marginBadge}
                    </div>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.price}" onchange="uWhol(${i},'price',this.value); window.rWholB();">
                </div>
            </div>
        </div>`;
    }).join('')}</div>
    <button type="button" onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir Eceran</button>`;
    el_.innerHTML = h;
};

window.addWhol  = () => { tWhol.push({minQty:2, price:0}); setTWhol(tWhol); window.rWholB(); };
window.rmWhol   = (i) => { tWhol.splice(i,1); setTWhol(tWhol); window.rWholB(); };
window.uWhol    = (i,k,v) => { tWhol[i][k] = parseFloat(v) || 0; };

// ─── Multi-Units Builder (Satuan Kemasan Bertingkat) ─────────────────────────

window.rMultiUnitsB = () => {
    const el_ = document.getElementById('multi-units-builder-container');
    if (!el_) return;
    const baseUnit = (document.getElementById('af-unit')?.value || 'pcs').trim() || 'pcs';
    const baseHpp = parseFloat(document.getElementById('af-hpp')?.value) || 0;

    let h = `<div class="space-y-4 mb-4">`;
    if (!tMultiUnits || tMultiUnits.length === 0) {
        h += `<div class="text-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40">
            <i class="fa-solid fa-boxes-packing text-slate-300 dark:text-slate-600 text-3xl mb-2"></i>
            <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Belum ada kemasan bertingkat.</p>
            <p class="text-[10px] text-slate-400 max-w-sm mx-auto mt-1">Gunakan fitur ini jika barang dijual dalam satuan kemasan (contoh: 1 Roll = 100 Meter, 1 Dus = 6 Keping, 1 Karton = 24 Pcs, 1 Sak = 50 Kg).</p>
        </div>`;
    } else {
        h += tMultiUnits.map((u, i) => {
            const uName = u.name || u.unitName || '';
            const uMultiplier = parseFloat(u.multiplier != null ? u.multiplier : u.conversionRatio) || 1;
            const uPrice = parseFloat(u.price) || 0;
            const uBarcode = u.barcode || '';
            const calcHpp = (u.hpp != null && parseFloat(u.hpp) > 0) ? parseFloat(u.hpp) : Math.round(baseHpp * uMultiplier);
            const margin = checkHppMarginStatus(uPrice, calcHpp);

            let marginBadge = '';
            if (uPrice > 0 && calcHpp > 0) {
                if (margin.isNegative) {
                    marginBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10px] font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i> Margin Negatif! Jual di bawah HPP modal (Rugi Rp ${Math.abs(margin.marginRp).toLocaleString('id-ID')})</span>`;
                } else if (margin.isThin) {
                    marginBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10px] font-bold text-amber-600 dark:text-amber-400"><i class="fa-solid fa-circle-exclamation"></i> Margin Tipis (${margin.marginPercent}%)</span>`;
                } else {
                    marginBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-shield-halved"></i> Margin Sehat (+${margin.marginPercent}% / Untung Rp ${margin.marginRp.toLocaleString('id-ID')})</span>`;
                }
            }

            return `
            <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40">
                <button type="button" onclick="rmMultiUnit(${i})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer" title="Hapus Satuan Kemasan"><i class="fa-solid fa-trash text-xs"></i></button>
                
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center">#${i+1}</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">${esc(uName) || 'Satuan Kemasan'}</span>
                        <span class="text-[11px] text-slate-500 font-medium">(${uMultiplier} ${esc(baseUnit)})</span>
                    </div>
                    <div>${marginBadge}</div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Nama Kemasan</label>
                        <input autocomplete='off' type="text" placeholder="Cth: Roll / Dus / Sak" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${esc(uName)}" onchange="uMultiUnit(${i},'name',this.value)" oninput="uMultiUnit(${i},'name',this.value)">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Isi (per ${esc(baseUnit)})</label>
                        <input autocomplete='off' type="number" step="0.01" min="0.01" placeholder="Cth: 100" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold" value="${uMultiplier}" onchange="uMultiUnit(${i},'multiplier',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-[var(--color-primary)] mb-1.5 uppercase tracking-widest">Harga Jual Kemasan (Rp)</label>
                        <input autocomplete='off' type="number" min="0" placeholder="Cth: 680000" class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm font-bold text-[var(--color-primary)]" value="${uPrice}" onchange="uMultiUnit(${i},'price',this.value); window.rMultiUnitsB();">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">Barcode Kemasan (Opsional)</label>
                        <div class="relative flex items-center">
                            <input autocomplete='off' type="text" id="mu-barcode-${i}" placeholder="Scan dus..." class="admin-input !text-xs !py-3 bg-white dark:bg-slate-800 shadow-sm !pr-10" value="${esc(uBarcode)}" onchange="uMultiUnit(${i},'barcode',this.value)">
                            <button type="button" onclick="openCameraScanner('mu-barcode-${i}')" class="absolute right-1 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] transition-all cursor-pointer" title="Scan Barcode Kemasan"><i class="fa-solid fa-qrcode text-base"></i></button>
                        </div>
                    </div>
                </div>

                <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400 font-medium">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[var(--color-primary)]"></i> 1 ${esc(uName || 'Kemasan')} = <b>${uMultiplier} ${esc(baseUnit)}</b> &bull; Modal HPP Ekuivalen: <b>Rp ${calcHpp.toLocaleString('id-ID')}</b></span>
                    ${uPrice > 0 ? `<span class="text-slate-500 font-bold">Harga Ecer Ekuivalen: Rp ${(Math.round(uPrice / (uMultiplier || 1))).toLocaleString('id-ID')} / ${esc(baseUnit)}</span>` : ''}
                </div>
            </div>`;
        }).join('');
    }
    h += `</div>
    <button type="button" onclick="addMultiUnit()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-box-open text-base"></i> Tambah Satuan Kemasan (Roll/Dus/Sak/Pack)</button>`;
    el_.innerHTML = h;
};

window.addMultiUnit = () => {
    tMultiUnits.push({ name: '', multiplier: 1, price: 0, barcode: '', hpp: 0 });
    setTMultiUnits(tMultiUnits);
    window.rMultiUnitsB();
};

window.rmMultiUnit = (i) => {
    tMultiUnits.splice(i, 1);
    setTMultiUnits(tMultiUnits);
    window.rMultiUnitsB();
};

window.uMultiUnit = (i, k, v) => {
    if (!tMultiUnits[i]) return;
    if (k === 'multiplier') tMultiUnits[i].multiplier = parseFloat(v) || 1;
    else if (k === 'price') tMultiUnits[i].price = parseFloat(v) || 0;
    else if (k === 'hpp') tMultiUnits[i].hpp = parseFloat(v) || 0;
    else tMultiUnits[i][k] = v;
};

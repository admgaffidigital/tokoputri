/**
 * ============================================================
 * ADMIN PRODUCTS — RESTOCK, STATUS TOGGLE & CLOSE MODAL
 * Mengatur penambahan stok (restock) dengan Firestore transaction,
 * toggle aktif/nonaktif produk, dan penutupan modal admin utama.
 * ============================================================
 */

import { db } from '../../../config/firebase.js';
import { saveApp } from '../../../services/storage.js';
import { appData } from '../../../core/state.js';
import { el, show, hide, setIn, esc, sLoad, hLoad, showToast } from '../../../core/utils.js';
import { isSaving, setIsSaving } from './index.js';

// Fungsi ini diimpor dari router.js (admin) via window agar tidak circular
const pushModalHistory  = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => window.requestCloseModal?.(id, fH, cb);

// ─── Restock Produk ───────────────────────────────────────────────────────────

window.openRestockModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;

    const hasVariants = p.variants && p.variants.length > 0;
    let variantsHtml = '';

    if (hasVariants) {
        variantsHtml = p.variants.map((v, i) => `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${v.colorCode ? `<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(v.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${i}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`
        ).join('');
    } else {
        variantsHtml = `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(p.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(p.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;
    }

    let m = document.getElementById('restock-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'restock-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeRestockModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-indigo-500"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-3 rounded-xl"><i class="fa-solid fa-circle-info text-indigo-500 mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${variantsHtml}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`;
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    pushModalHistory('restock');
};

window.closeRestockModal = (fH=false) => {
    requestCloseModal('restock', fH, () => {
        const m = document.getElementById('restock-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};

window.processRestock = async (id) => {
    if (isSaving) return; setIsSaving(true);
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { setIsSaving(false); return; }

    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;
    let updated = JSON.parse(JSON.stringify(p));

    let totalAdded = 0;
    if (hasVariants) {
        updated.variants = updated.variants.map((v, i) => {
            const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
            if (addVal > 0) {
                v.stock = (parseFloat(v.stock)||0) + addVal;
                totalAdded += addVal;
                if (v.stock > 0 && (v.isActive === false || v.isActive === 'false')) v.isActive = true;
            }
            return v;
        });
        const anyActiveVariant = updated.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
        if (anyActiveVariant && (updated.isActive === false || updated.isActive === 'false')) updated.isActive = 'true';
    } else {
        const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
        if (addVal > 0) {
            updated.stock = (parseFloat(updated.stock)||0) + addVal;
            totalAdded += addVal;
            if (updated.stock > 0 && (updated.isActive === false || updated.isActive === 'false')) updated.isActive = 'true';
        }
    }
    if (totalAdded <= 0) { setIsSaving(false); return showToast("Masukkan jumlah restock terlebih dahulu!"); }

    sLoad('Menyimpan Restock...');
    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        if (!_db) throw new Error("Database Firebase belum terhubung");

        const prodRef = _db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let finalStock = 0;
        await _db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                p.variants.forEach((localVar, i) => {
                    const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
                    if (addVal <= 0) return;
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx > -1) {
                        serverProd.variants[sIdx].stock = (parseFloat(serverProd.variants[sIdx].stock)||0) + addVal;
                        if (serverProd.variants[sIdx].stock > 0 &&
                            (serverProd.variants[sIdx].isActive === false || serverProd.variants[sIdx].isActive === 'false')) {
                            serverProd.variants[sIdx].isActive = true;
                        }
                    }
                });
                const anyActive = serverProd.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
                if (anyActive && (serverProd.isActive === false || serverProd.isActive === 'false')) serverProd.isActive = 'true';
                finalStock = serverProd.variants.reduce((s,v) => s+(parseFloat(v.stock)||0), 0);
            } else {
                const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
                serverProd.stock = (parseFloat(serverProd.stock)||0) + addVal;
                if (serverProd.stock > 0 && (serverProd.isActive === false || serverProd.isActive === 'false')) serverProd.isActive = 'true';
                finalStock = serverProd.stock;
            }
            transaction.set(prodRef, serverProd);
            Object.assign(updated, serverProd);
        });
        appData.products[idx] = updated;
        await _save([], { updateType: 'stock_change', updatedProductIds: [id.toString()] });
        closeRestockModal();
        window.rAdmItms?.('products');
        setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
        showToast(`✅ Restock +${totalAdded} berhasil! Total stok: ${finalStock}`);
    } catch(e) { showToast("Gagal restock: " + (e.message || '')); }
    finally { setIsSaving(false); hLoad(); }
};

// ─── Toggle Aktif / Nonaktif Produk ──────────────────────────────────────────

window.toggleProductStatus = async (id, toActive) => {
    if(isSaving) return; setIsSaving(true);
    const i = appData.products.findIndex(x => x.id === id);
    if(i > -1){
        appData.products[i].isActive = toActive ? 'true' : 'false';
        sLoad(toActive ? 'Mengaktifkan...' : 'Menonaktifkan...');
        try {
            const _db = (typeof db !== 'undefined' && db) ? db : window.db;
            const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
            if (!_db) throw new Error("Database Firebase belum terhubung");
            await _db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).update({isActive: toActive ? 'true' : 'false'});
            await _save([], { updateType: 'stock_change', updatedProductIds: [id.toString()] });
            setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
            showToast(toActive ? "Produk Aktif!" : "Stok Dikosongkan!");
        } catch(e) { showToast("Gagal update status: " + (e.message || '')); }
        finally { setIsSaving(false); hLoad(); }
    }
};

// ─── Tutup Modal Admin Utama ──────────────────────────────────────────────────

window.closeAdminModal = (fH=false) => {
    requestCloseModal('admin', fH, () => {
        el('admin-modal').classList.add('opacity-0');
        el('admin-modal-box').classList.add('scale-95');
        setTimeout(() => hide('admin-modal'), 300);
    });
};

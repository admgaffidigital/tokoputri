/**
 * ============================================================
 * ADMIN PRODUCTS — RENDER TABEL & LIST PRODUK (table.js)
 * Mengatur tampilan daftar data produk, warna, pelanggan, reward,
 * pencarian & filter, kartu item, kalkulasi statistik ringkas,
 * serta fitur geser urutan produk (Drag & Drop Reorder).
 * ============================================================
 */

import Sortable from 'sortablejs';
import { appData } from '../../../core/state.js';
import { el, setH, esc, fCur, showToast, renderProductCoverHtml } from '../../../core/utils.js';
import { saveApp, sortProductsByOrder } from '../../../services/storage.js';
import { computeInventoryStats } from '../auth.js';
import { cTab, setCTab, aSq, setASq } from './index.js';

let adminSortableInstance = null;

// ─── Terapkan & Simpan Urutan Baru Produk ─────────────────────────────────────

export const applyNewProductOrder = async (newIdsInView) => {
    if (!newIdsInView || !newIdsInView.length) return;

    let currentMasterOrder = (appData.productOrder && appData.productOrder.length)
        ? [...appData.productOrder]
        : (appData.products || []).map(p => String(p.id));

    // Pastikan semua produk di appData sudah ada di master order
    const existingSet = new Set(currentMasterOrder);
    (appData.products || []).forEach(p => {
        const sid = String(p.id);
        if (!existingSet.has(sid)) {
            currentMasterOrder.push(sid);
            existingSet.add(sid);
        }
    });

    const viewSet = new Set(newIdsInView);
    // Cari index posisi dari item-item view di dalam master order
    const slotIndices = [];
    currentMasterOrder.forEach((id, idx) => {
        if (viewSet.has(id)) slotIndices.push(idx);
    });

    // Masukkan urutan baru ke slot-slot yang bersangkutan
    newIdsInView.forEach((id, i) => {
        if (i < slotIndices.length) {
            currentMasterOrder[slotIndices[i]] = id;
        }
    });

    appData.productOrder = currentMasterOrder;
    sortProductsByOrder(appData.products);

    try {
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        await _save(['productOrder']);
        showToast("Urutan produk berhasil disimpan! ✨");
    } catch(e) {
        console.warn("Gagal simpan urutan produk:", e);
    }

    rAdmItms('products');
};
window.applyNewProductOrder = applyNewProductOrder;

// ─── Geser Produk 1 Tingkat (Naik / Turun) ───────────────────────────────────

window.moveProductOrder = async (productId, direction) => {
    const pIdStr = String(productId);
    const rawList = [...(appData.products || [])];
    const searchVal = (aSq || window.aSq || '').toLowerCase();
    const currentList = rawList.filter(x => {
        let m = (x.name || x.title || x.bankName || x.code || x.sku || x.phone || '').toLowerCase().includes(searchVal);
        if (!m && x.variants) m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(searchVal));
        return m;
    });

    const currentIndex = currentList.findIndex(p => String(p.id) === pIdStr);
    if (currentIndex === -1) return;
    const targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= currentList.length) return;

    const newIds = currentList.map(p => String(p.id));
    const temp = newIds[currentIndex];
    newIds[currentIndex] = newIds[targetIndex];
    newIds[targetIndex] = temp;

    await applyNewProductOrder(newIds);
};

// ─── Lompat ke Nomor Urut Tertentu ───────────────────────────────────────────

window.jumpProductOrder = async (productId) => {
    const pIdStr = String(productId);
    const rawList = [...(appData.products || [])];
    const searchVal = (aSq || window.aSq || '').toLowerCase();
    const currentList = rawList.filter(x => {
        let m = (x.name || x.title || x.bankName || x.code || x.sku || x.phone || '').toLowerCase().includes(searchVal);
        if (!m && x.variants) m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(searchVal));
        return m;
    });
    const currentIndex = currentList.findIndex(p => String(p.id) === pIdStr);
    if (currentIndex === -1) return;

    const prod = currentList[currentIndex];
    const targetNumStr = prompt(`Pindahkan "${prod.name}" ke nomor urut berapa? (1 - ${currentList.length}):`, String(currentIndex + 1));
    if (!targetNumStr) return;
    const targetNum = parseInt(targetNumStr, 10);
    if (isNaN(targetNum) || targetNum < 1 || targetNum > currentList.length) {
        return showToast(`Nomor urut harus antara 1 sampai ${currentList.length}`);
    }
    const targetIndex = targetNum - 1;
    if (targetIndex === currentIndex) return;

    const newIds = currentList.map(p => String(p.id));
    const [movedId] = newIds.splice(currentIndex, 1);
    newIds.splice(targetIndex, 0, movedId);

    await applyNewProductOrder(newIds);
};

// ─── Otomatis Kumpulkan Produk per Kategori & Sub-Kategori ───────────────────

window.autoGroupProductsByCategory = async () => {
    window.showConfirm?.(
        "Rapikan per Kategori",
        "Susun produk otomatis berdasarkan Kategori dan Jenis (Sub-Kategori) agar produk sejenis (seperti semen, paku, cat) berkelompok rapi?",
        async () => {
            const list = [...(appData.products || [])];
            list.sort((a, b) => {
                const catA = (a.category || '').toLowerCase();
                const catB = (b.category || '').toLowerCase();
                if (catA !== catB) return catA.localeCompare(catB);

                const subCatA = (a.subCategory || '').toLowerCase();
                const subCatB = (b.subCategory || '').toLowerCase();
                if (subCatA !== subCatB) return subCatA.localeCompare(subCatB);

                return (a.name || '').localeCompare(b.name || '');
            });
            const newIds = list.map(p => String(p.id));
            await applyNewProductOrder(newIds);
            showToast("Produk berhasil dirapikan per kategori! 📦");
        },
        "Ya, Rapikan",
        false
    );
};

// ─── Urutkan Cepat (Menu Dropdown) ───────────────────────────────────────────

window.toggleProductOrderMenu = (e) => {
    if (e) e.stopPropagation();
    const menu = el('admin-product-order-dropdown');
    if (!menu) return;
    menu.classList.toggle('hidden');
};

window.sortProductsQuick = async (mode) => {
    const menu = el('admin-product-order-dropdown');
    if (menu) menu.classList.add('hidden');

    const list = [...(appData.products || [])];
    if (mode === 'az') {
        list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (mode === 'za') {
        list.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    } else if (mode === 'price_low') {
        list.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
    } else if (mode === 'price_high') {
        list.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
    } else if (mode === 'reset_newest') {
        list.sort((a, b) => (b.id || 0) - (a.id || 0));
    }
    const newIds = list.map(p => String(p.id));
    await applyNewProductOrder(newIds);
};

if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
        const wrap = el('admin-product-order-dropdown-wrap');
        const menu = el('admin-product-order-dropdown');
        if (wrap && menu && !wrap.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
}

// ─── Inisialisasi SortableJS ───────────────────────────────────────────────────

const initAdminProductSortable = () => {
    const container = el('admin-list-container');
    if (!container) return;

    if (adminSortableInstance) {
        try { adminSortableInstance.destroy(); } catch(e) {}
        adminSortableInstance = null;
    }

    const curTab = cTab || window.cTab || 'products';
    if (curTab !== 'products') return;

    adminSortableInstance = new Sortable(container, {
        handle: '.product-drag-handle',
        animation: 200,
        ghostClass: 'opacity-30',
        chosenClass: 'ring-2',
        dragClass: 'shadow-2xl',
        forceFallback: false,
        onEnd: async (evt) => {
            if (evt.oldIndex === evt.newIndex) return;
            const items = Array.from(container.querySelectorAll('[data-id]'));
            const newIdsInView = items.map(el => el.getAttribute('data-id')).filter(Boolean);
            await applyNewProductOrder(newIdsInView);
        }
    });
};

// ─── Render Shell Konten Admin ────────────────────────────────────────────────

window.rAdmL = t => {
    setCTab(t);
    if (typeof window.setCTab === 'function') window.setCTab(t);
    window.cTab = t;

    const statsContainer = t === 'products' ? `<div id="admin-product-stats" class="mb-5"></div>` : '';
    const colorActions = t === 'colors' ? `
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-[11px] uppercase tracking-widest hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-sm"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>` : '';

    const productToolbar = t === 'products' ? `
        <div class="flex items-center justify-between gap-2 flex-wrap mb-4 px-1">
            <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold text-[11px]">
                <i class="fa-solid fa-up-down-left-right text-[var(--color-primary)]"></i>
                <span class="hidden sm:inline">Tahan & geser pegangan <i class="fa-solid fa-grip-vertical opacity-60"></i> atau gunakan tombol panah untuk mengatur urutan.</span>
                <span class="sm:hidden">Geser <i class="fa-solid fa-grip-vertical opacity-60"></i> atau panah untuk atur urutan.</span>
            </div>
            <div class="flex items-center gap-2 ml-auto flex-wrap">
                ${(appData.suppliers || []).length > 0 ? `
                    <div class="relative inline-block">
                        <select onchange="window.adminSupplierFilter = this.value; rAdmItms('products');" class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] border border-slate-200/80 dark:border-slate-700 cursor-pointer shadow-2xs">
                            <option value="">Semua Supplier (${(appData.suppliers || []).length})</option>
                            ${(appData.suppliers || []).map(s => `<option value="${s.id}" ${window.adminSupplierFilter === String(s.id) ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}
                <button onclick="window.autoGroupProductsByCategory()" class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] transition-all active:scale-95 shadow-2xs border border-slate-200/80 dark:border-slate-700" title="Otomatis kumpulkan produk sejenis (Paku dengan Paku, Semen dengan Semen)">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Rapikan per Kategori
                </button>
                <div class="relative inline-block" id="admin-product-order-dropdown-wrap">
                    <button onclick="window.toggleProductOrderMenu(event)" class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] transition-all active:scale-95 shadow-2xs border border-slate-200/80 dark:border-slate-700">
                        <i class="fa-solid fa-arrow-down-a-z"></i> Urutkan Cepat <i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
                    </button>
                    <div id="admin-product-order-dropdown" class="hidden absolute right-0 mt-1.5 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-1.5 z-40 text-[11px] font-bold">
                        <button onclick="window.sortProductsQuick('az')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-a-z text-slate-400"></i> Nama A - Z</button>
                        <button onclick="window.sortProductsQuick('za')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-z-a text-slate-400"></i> Nama Z - A</button>
                        <button onclick="window.sortProductsQuick('price_low')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-1-9 text-slate-400"></i> Harga Termurah</button>
                        <button onclick="window.sortProductsQuick('price_high')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-9-1 text-slate-400"></i> Harga Termahal</button>
                        <div class="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
                        <button onclick="window.sortProductsQuick('reset_newest')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 text-rose-500"><i class="fa-solid fa-rotate-left"></i> Reset ke ID Terbaru</button>
                    </div>
                </div>
            </div>
        </div>` : '';

    setH('admin-content', `
        <div class="max-w-5xl mx-auto">
        ${statsContainer}
        <div class="mb-6">
            ${colorActions}
            <div class="flex gap-2 items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="(window.setASq ? window.setASq(this.value.toLowerCase()) : (window.aSq=this.value.toLowerCase()));rAdmItms('${t}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl primary-bg font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
            ${productToolbar}
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `);
    rAdmItms(t);
};

// ─── Render Daftar Item Tabel ─────────────────────────────────────────────────

window.rAdmItms = t => {
    if (t) {
        setCTab(t);
        if (typeof window.setCTab === 'function') window.setCTab(t);
        window.cTab = t;
    }
    const listContainerForScroll = el('admin-list-container');
    const scrollParent = listContainerForScroll ? listContainerForScroll.closest('.scroll-content') : null;
    const savedScrollTop = scrollParent ? scrollParent.scrollTop : 0;

    if (t === 'products' && el('admin-product-stats')) {
        const st = computeInventoryStats();
        setH('admin-product-stats', `
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-box mr-1"></i>Produk Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeProd}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-layer-group mr-1"></i>Varian Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeVar}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kosong / Nonaktif</p>
                    <p class="text-lg sm:text-xl font-bold text-amber-500">${st.inactiveProd + st.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${st.inactiveProd} produk, ${st.inactiveVar} varian</p>
                </div>
                <div class="card-modern p-5 sm:p-5 bg-slate-50 dark:bg-slate-800/40">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-warehouse mr-1"></i>Total Aset Gudang</p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetJual)}</b></p>
                </div>
            </div>
        `);
    }

    let rawList = [...(appData[t]||[])];
    if (t === 'products') {
        sortProductsByOrder(rawList);
    } else {
        rawList.sort((a,b) => (b.id||0)-(a.id||0));
    }

    const searchVal = (aSq || window.aSq || '').toLowerCase();
    const selSupFilter = window.adminSupplierFilter || '';
    let i = rawList.filter(x => {
        if (t === 'products' && selSupFilter) {
            if (String(x.supplierId) !== String(selSupFilter)) return false;
        }
        let m = (x.name||x.title||x.bankName||x.code||x.sku||x.phone||'').toLowerCase().includes(searchVal);
        if(t==='products' && !m) {
            if (x.supplierId && (appData.suppliers || []).length) {
                const sObj = appData.suppliers.find(s => String(s.id) === String(x.supplierId));
                if (sObj && (sObj.name || '').toLowerCase().includes(searchVal)) m = true;
            }
            if (!m && x.variants) {
                m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(searchVal));
            }
        }
        return m;
    });
    
    if(!i.length){ return setH('admin-list-container', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>`); }
    
    setH('admin-list-container', i.map((x, idx) => {
        let isP = t==='products', isOff = isP && (x.isActive==='false'||x.isActive===false);
        let bC = isOff ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800';
        let tC = isOff ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100';
        
        let dragHandle = isP ? `
            <div class="product-drag-handle flex flex-col items-center justify-center w-7 sm:w-8 -my-2 -ml-1 sm:-ml-2 py-3 cursor-grab active:cursor-grabbing primary-text opacity-25 hover:opacity-90 transition-opacity select-none touch-none group/handle shrink-0" onclick="event.stopPropagation();" title="Tahan & geser untuk mengubah urutan">
                <i class="fa-solid fa-grip-vertical text-base sm:text-lg group-hover/handle:scale-110 transition-transform"></i>
            </div>
            <div class="flex flex-col items-center justify-center shrink-0 gap-1 mr-1 sm:mr-2 select-none" onclick="event.stopPropagation();">
                <button class="w-6 h-6 rounded-lg primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white text-[10px] flex items-center justify-center transition-all active:scale-90 shadow-sm ${idx === 0 ? 'opacity-25 pointer-events-none' : ''}" onclick="window.moveProductOrder('${x.id}', -1)" title="Geser Naik 1 Posisi"><i class="fa-solid fa-chevron-up"></i></button>
                <button class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white font-mono tracking-tighter transition-all" onclick="window.jumpProductOrder('${x.id}')" title="Klik untuk lompat ke nomor urut tertentu">#${idx + 1}</button>
                <button class="w-6 h-6 rounded-lg primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white text-[10px] flex items-center justify-center transition-all active:scale-90 shadow-sm ${idx === i.length - 1 ? 'opacity-25 pointer-events-none' : ''}" onclick="window.moveProductOrder('${x.id}', 1)" title="Geser Turun 1 Posisi"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
        ` : '';

        const coverThumb = renderProductCoverHtml(x, { size: 'thumb' });
        let img = x.img 
            ? `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-contain ${isOff?'grayscale opacity-50':''}"><div class="w-full h-full" style="display:none">${coverThumb}</div></div>`
            : `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-100 dark:border-slate-700/60 rounded-2xl overflow-hidden flex items-center justify-center">${coverThumb}</div>`;
        
        const isAdminActive = window.isAdm || window.__localIsAdm;
        let tglBtn = isP ? (isOff 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${x.id}', true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`
            : `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${x.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`
        ) : '';
        
        let dupBtn = isP 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct('${x.id}')" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>` 
            : '';

        // FIX: cek useStock dengan cara yang konsisten
        const useStockEnabled = appData.store.useStock === true || appData.store.useStock === 'true';
        let restockBtn = (isP && useStockEnabled) 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal('${x.id}')" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`
            : '';

        let qPriceBtn = isP
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal('${x.id}')" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`
            : '';

        let cardBtn = (t === 'customers') 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-300 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${x.id||x.phone}'))||{name:'${esc(x.name)}',phone:'${esc(x.phone)}',points:${parseFloat(x.points)||0}} : {name:'${esc(x.name)}',phone:'${esc(x.phone)}',points:${parseFloat(x.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP"><i class="fa-solid fa-id-card text-xs sm:text-sm"></i></button>`
            : '';

        let editBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${t}','${x.id}')" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`;
        
        let delBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${t}','${x.id}')" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;

        return `
        <div data-id="${x.id}" class="product-admin-card p-3.5 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 rounded-2xl sm:rounded-[1.5rem] border shadow-2xs cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-200 ${bC}" onclick="oAEd('${t}','${x.id}')">
            <div class="flex items-start sm:items-center gap-2.5 sm:gap-4 min-w-0 w-full">
                ${dragHandle}
                ${img}
                <div class="min-w-0 flex flex-col justify-center py-0.5">
                    <p class="text-xs sm:text-sm font-bold ${tC} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${esc(x.name||x.title||x.bankName||x.code||'Item')}</p>
                    ${isP ? `<p class="text-sm sm:text-base font-black text-[var(--color-primary)] tracking-tight">${fCur(x.price)}</p>` : ''}
                    ${isP && isAdminActive && useStockEnabled ? `<p class="text-[10px] font-bold mt-1 ${(x.variants&&x.variants.length?x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0):parseFloat(x.stock)||0) === 0 ? 'text-rose-500 animate-pulse' : 'text-blue-500'}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${x.variants&&x.variants.length ? x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0).toFixed(2).replace(/\.?0+$/,'') : (parseFloat(x.stock)||0)}</p>` : ''}
                    ${isP && isAdminActive && x.hpp ? `<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${fCur(x.hpp)}</p>` : ''}
                    ${isP ? (() => {
                        const sold = x.variants && x.variants.length ? x.variants.reduce((s,vv)=>s+(parseFloat(vv.totalSold)||0),0) : (parseFloat(x.totalSold)||0);
                        return sold > 0 ? `<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${sold}</p>` : '';
                    })() : ''}
                    ${isP && x.supplierId ? (() => {
                        const sObj = (appData.suppliers || []).find(s => String(s.id) === String(x.supplierId));
                        return sObj ? `<p class="text-[10px] font-bold text-teal-600 dark:text-teal-400 mt-0.5"><i class="fa-solid fa-truck-field mr-1"></i>Supplier: <b>${esc(sObj.name)}</b></p>` : '';
                    })() : ''}
                    ${t==='colors' ? `<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${esc(x.hex||'transparent')}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${esc(x.catalog||'Tanpa Katalog')}</p></div>` : ''}
                    ${t==='customers' ? `<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${esc(x.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.points)||0)} Poin</p>` : ''}
                    ${t==='rewards' ? `<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.pointsCost)||0)} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(x.stock)||0}</p>` : ''}
                </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:gap-2.5 shrink-0 self-end sm:self-center pt-2.5 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${tglBtn}
                ${restockBtn}
                ${qPriceBtn}
                ${dupBtn}
                ${cardBtn}
                ${editBtn}
                ${delBtn}
            </div>
        </div>`;
    }).join(''));

    if (t === 'products') {
        initAdminProductSortable();
    }

    if (scrollParent) requestAnimationFrame(() => { scrollParent.scrollTop = savedScrollTop; });
};


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
import { el, setH, esc, fCur, showToast, renderProductCoverHtml, isPlaceholderImg } from '../../../core/utils.js';
import { saveApp, sortProductsByOrder } from '../../../services/storage.js';
import { computeInventoryStats, computeTotalProductStock } from '../../../core/pricing.js';
import { customPrompt, showConfirm } from '../../../core/ui.js';
import { cTab, setCTab, aSq, setASq } from './index.js';
import { openProductFifoModal } from './fifo-modal.js';

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
        showToast("Urutan produk berhasil disimpan!");
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
    const rawSearch = (aSq || window.aSq || '').toLowerCase().trim();
    const searchVal = rawSearch.replace(/^\][a-zA-Z0-9]{2}/, '').trim() || rawSearch;
    const currentList = rawList.filter(x => {
        let m = (x.name || x.title || x.bankName || x.code || x.sku || x.barcode || x.phone || String(x.id || '') || `sku-${x.id}`).toLowerCase().includes(searchVal);
        if (!m && x.variants) {
            m = x.variants.some((v, vIdx) => (v.sku && v.sku.toLowerCase().includes(searchVal)) || (v.barcode && v.barcode.toLowerCase().includes(searchVal)) || `${x.sku || x.id}-${vIdx + 1}`.toLowerCase().includes(searchVal));
        }
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
    const askPrompt = (typeof window.customPrompt === 'function') ? window.customPrompt : null;
    if (askPrompt) {
        askPrompt(`Pindahkan urutan "${prod.name}" (1 - ${currentList.length}):`, String(currentIndex + 1), async (targetNumStr) => {
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
        });
    }
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
            showToast("Produk berhasil dirapikan per kategori!");
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
            <button onclick="openImportFromProductsModal()" class="h-11 px-4 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:primary-bg hover:text-white transition-all active:scale-95 shadow-2xs flex items-center gap-2 cursor-pointer"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>` : '';

    const productToolbar = t === 'products' ? `
        <div class="flex items-center justify-between gap-3 flex-wrap mb-4 px-1">
            <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold text-[11px]">
                <i class="fa-solid fa-up-down-left-right text-[var(--color-primary)]"></i>
                <span class="hidden sm:inline">Tahan &amp; geser pegangan <i class="fa-solid fa-grip-vertical opacity-60"></i> atau panah untuk mengatur urutan produk.</span>
                <span class="sm:hidden">Geser <i class="fa-solid fa-grip-vertical opacity-60"></i> / panah untuk atur urutan.</span>
            </div>
            <div class="flex items-center gap-2 ml-auto flex-wrap">
                ${(appData.suppliers || []).length > 0 ? `
                    <div class="relative inline-block">
                        <select onchange="window.adminSupplierFilter = this.value; rAdmItms('products');" class="h-10 px-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200/90 dark:border-slate-700/80 cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors">
                            <option value="">Semua Supplier (${(appData.suppliers || []).length})</option>
                            ${(appData.suppliers || []).map(s => `<option value="${s.id}" ${window.adminSupplierFilter === String(s.id) ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
                        </select>
                    </div>
                ` : ''}
                <button onclick="window.autoGroupProductsByCategory()" class="h-10 px-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all active:scale-95 shadow-2xs border border-slate-200/90 dark:border-slate-700/80 flex items-center gap-1.5 cursor-pointer" title="Otomatis kumpulkan produk sejenis">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Rapikan per Kategori
                </button>
                <div class="relative inline-block" id="admin-product-order-dropdown-wrap">
                    <button onclick="window.toggleProductOrderMenu(event)" class="h-10 px-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all active:scale-95 shadow-2xs border border-slate-200/90 dark:border-slate-700/80 flex items-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-arrow-down-a-z"></i> Urutkan Cepat <i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
                    </button>
                    <div id="admin-product-order-dropdown" class="hidden absolute right-0 mt-1.5 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-1.5 z-40 text-xs font-bold">
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

    const bannerHeroNotice = t === 'banners' ? `
        <div class="mb-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/60 bg-black/40 shrink-0 shadow-inner">
                    <img src="${esc(appData.store.heroMascotImg || '/putri_mascot_anim.gif')}" onerror="this.onerror=null;this.src='/putri_mascot_3d.jpg';" alt="Maskot" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[7px] text-center font-black text-amber-300 py-0.5">SLIDE #0</div>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h4 class="font-extrabold text-xs sm:text-sm text-white">Slide #0: Banner Sambutan &amp; Maskot 3D Toko</h4>
                        <span class="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase ${appData.store.showHeroSlide !== false && appData.store.showHeroSlide !== 'false' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-700 text-slate-400'}">
                            ${appData.store.showHeroSlide !== false && appData.store.showHeroSlide !== 'false' ? 'Aktif Tayang' : 'Disembunyikan'}
                        </span>
                    </div>
                    <p class="text-[10px] text-slate-300 mt-0.5 line-clamp-2">Ganti foto maskot, ubah status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama.</p>
                </div>
            </div>
            <button onclick="if(typeof window.openHeroBannerModal==='function') window.openHeroBannerModal(); else if(typeof window.openSettingForm==='function') window.openSettingForm('profile');" type="button" class="shrink-0 w-full sm:w-auto h-11 px-4 rounded-xl primary-bg hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm transition-all cursor-pointer">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Kelola Maskot &amp; Sambutan
            </button>
        </div>` : '';

    setH('admin-content', `
        <div class="max-w-5xl mx-auto pb-16">
        ${statsContainer}
        ${bannerHeroNotice}
        <div class="mb-5">
            ${colorActions}
            <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari produk, SKU, varian, barcode..." oninput="(window.setASq ? window.setASq(this.value.toLowerCase()) : (window.aSq=this.value.toLowerCase()));rAdmItms('${t}')" class="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl pl-11 pr-12 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all" >
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    ${t === 'products' ? `
                    <button onclick="openAdminTab('stock_opname')" class="h-12 px-4 rounded-2xl border font-bold text-xs flex items-center gap-2 shadow-2xs active:scale-95 transition-all shrink-0 cursor-pointer hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Stock Opname (Audit Fisik Stok)">
                        <i class="fa-solid fa-clipboard-check text-sm"></i>
                        <span class="hidden sm:inline">Stock Opname</span>
                    </button>` : ''}
                    <button onclick="oAAdd()" class="h-12 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah ${t === 'products' ? 'Produk' : t === 'categories' ? 'Kategori' : t === 'brands' ? 'Merek' : 'Data'}</span>
                    </button>
                </div>
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
                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Produk Aktif</span>
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));">
                            <i class="fa-solid fa-box-open"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${st.activeProd}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Katalog Tayang di Etalase</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Varian Aktif</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">${st.activeVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Opsi Rasa, Ukuran &amp; Warna</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Kosong / Nonaktif</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${st.inactiveProd + st.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${st.inactiveProd} Produk, ${st.inactiveVar} Varian</p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Valuasi Stok</span>
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-warehouse"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Modal: <b class="text-slate-800 dark:text-slate-200">${fCur(st.assetHpp)}</b></p>
                        <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">Jual: <b class="text-slate-800 dark:text-slate-200">${fCur(st.assetJual)}</b></p>
                    </div>
                    <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('stock'), 100);}" class="mt-2 inline-flex items-center gap-1.5 text-[10px] font-black text-[var(--color-primary)] hover:underline cursor-pointer transition-colors">
                        <i class="fa-solid fa-chart-pie text-[10px]"></i>
                        <span>Laporan Stok Lengkap &rarr;</span>
                    </button>
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
            const hasSup = String(x.supplierId) === String(selSupFilter) ||
                (Array.isArray(x.suppliers) && x.suppliers.some(s => String(s.supplierId) === String(selSupFilter)));
            if (!hasSup) return false;
        }
        const rawClean = searchVal.replace(/^\][a-zA-Z0-9]{2}/, '').trim() || searchVal;
        let m = (x.name || x.title || x.bankName || x.code || x.sku || x.barcode || x.phone || String(x.id || '') || `sku-${x.id}`).toLowerCase().includes(rawClean);
        if(t==='products' && !m) {
            if (x.supplierId && (appData.suppliers || []).length) {
                const sObj = appData.suppliers.find(s => String(s.id) === String(x.supplierId));
                if (sObj && (sObj.name || '').toLowerCase().includes(rawClean)) m = true;
            }
            if (!m && Array.isArray(x.suppliers)) {
                m = x.suppliers.some(s => (s.supplierName || '').toLowerCase().includes(rawClean));
            }
            if (!m && x.variants) {
                m = x.variants.some((v, vIdx) => 
                    (v.sku && v.sku.toLowerCase().includes(rawClean)) ||
                    (v.barcode && v.barcode.toLowerCase().includes(rawClean)) ||
                    `${x.sku || x.id}-${vIdx + 1}`.toLowerCase().includes(rawClean)
                );
            }
        }
        return m;
    });
    
    if(!i.length){ return setH('admin-list-container', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>`); }
    
    setH('admin-list-container', i.map((x, idx) => {
        if (t === 'categories') {
            const catProducts = (appData.products || []).filter(p => p.category === x.name);
            const totalProd = catProducts.length;
            const officialSubs = Array.isArray(x.subCategories) ? x.subCategories : [];
            
            // Cari subkategori di produk yang belum ada di officialSubs
            const existingProductSubCats = [...new Set(catProducts.map(p => (p.subCategory || '').trim()).filter(Boolean))];
            const unregisteredSubCats = existingProductSubCats.filter(sc => !officialSubs.some(osc => osc.toLowerCase() === sc.toLowerCase()));

            const catImgHtml = x.img 
                ? `<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-1 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" class="w-full h-full object-contain" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl\\'><i class=\\'fa-solid fa-shapes\\'></i></div>';"></div>`
                : `<div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold border border-slate-200 dark:border-slate-700" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)"><i class="fa-solid fa-layer-group"></i></div>`;

            return `
            <div data-id="${x.id}" class="category-admin-card p-4 sm:p-5 md:p-6 flex flex-col gap-3.5 rounded-2xl sm:rounded-[1.5rem] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all duration-200">
                <!-- Header: Ikon + Nama Kategori + Badge Jumlah + Tombol Aksi -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3.5 min-w-0">
                        ${catImgHtml}
                        <div class="min-w-0 flex flex-col justify-center">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h4 class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide leading-tight">${esc(x.name)}</h4>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    <i class="fa-solid fa-boxes-stacked mr-1 text-[9px] text-[var(--color-primary)]"></i>${totalProd} Produk
                                </span>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]">
                                    <i class="fa-solid fa-shapes mr-1 text-[9px]"></i>${officialSubs.length} Sub-Kategori
                                </span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-0.5 font-medium">Master Kategori &amp; Pengelompokan Jenis Produk</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${x.id}')" class="px-3.5 py-2 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer" title="Tambah Sub-Kategori ke ${esc(x.name)}">
                            <i class="fa-solid fa-plus text-[10px]"></i>
                            <span>Sub-Kategori</span>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oAEd('categories','${x.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm cursor-pointer" title="Edit Kategori">
                            <i class="fa-solid fa-pen text-xs sm:text-sm"></i>
                        </button>
                        <button type="button" onclick="event.stopPropagation(); oADel('categories','${x.id}')" class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm cursor-pointer" title="Hapus Kategori">
                            <i class="fa-solid fa-trash text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Wadah Kelompok Sub-Kategori -->
                <div class="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700/60 flex flex-col gap-2.5">
                    <div class="flex items-center justify-between gap-2 flex-wrap">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                            <i class="fa-solid fa-folder-tree text-[var(--color-primary)]"></i>
                            <span>Kelompok Sub-Kategori / Jenis Produk Terdaftar:</span>
                        </span>
                        ${unregisteredSubCats.length > 0 ? `
                            <button type="button" onclick="event.stopPropagation(); window.syncSubCategoriesFromProducts('${x.id}')" class="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                                <span>Tarik ${unregisteredSubCats.length} sub dari produk</span>
                            </button>
                        ` : ''}
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        ${officialSubs.length === 0 ? `
                            <div class="text-xs text-slate-400 italic py-1 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-slate-300 dark:text-slate-600"></i>
                                <span>Belum ada sub-kategori. Klik tombol <b>+ Sub-Kategori</b> di atas untuk menambahkan kelompok jenis produk.</span>
                            </div>
                        ` : officialSubs.map(sc => {
                            const subCount = catProducts.filter(p => (p.subCategory || '').trim().toLowerCase() === sc.toLowerCase()).length;
                            return `
                            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all group">
                                <i class="fa-solid fa-shapes text-[10px] text-[var(--color-primary)]"></i>
                                <span>${esc(sc)}</span>
                                <span class="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600" title="${subCount} Produk">${subCount}</span>
                                <button type="button" onclick="event.stopPropagation(); window.removeCategorySubCategory('${x.id}', '${esc(sc).replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-rose-500 p-0.5 rounded ml-0.5 transition-colors cursor-pointer" title="Hapus Sub-Kategori '${esc(sc)}'">
                                    <i class="fa-solid fa-xmark text-[11px]"></i>
                                </button>
                            </span>`;
                        }).join('')}
                        <button type="button" onclick="event.stopPropagation(); window.promptAddSubCategory('${x.id}')" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-all cursor-pointer">
                            <i class="fa-solid fa-plus text-[9px]"></i>
                            <span>Tambah Sub</span>
                        </button>
                    </div>
                </div>
            </div>`;
        }

        let isP = t==='products', isOff = isP && (x.isActive==='false'||x.isActive===false);
        let bC = isOff ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10' : 'border-slate-200/90 bg-white/95 dark:border-slate-700/80 dark:bg-slate-800/90';
        let tC = isOff ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100';

        const coverThumb = renderProductCoverHtml(x, { size: 'thumb' });
        const hasValidImg = Boolean(x.img && typeof x.img === 'string' && x.img.trim() && !isPlaceholderImg(x.img));
        let img = hasValidImg 
            ? `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-contain ${isOff?'grayscale opacity-50':''}"><div class="w-full h-full" style="display:none">${coverThumb}</div></div>`
            : `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-100 dark:border-slate-700/60 rounded-2xl overflow-hidden flex items-center justify-center">${coverThumb}</div>`;
        
        const isAdminActive = window.isAdm || window.__localIsAdm;
        const useStockEnabled = appData.store.useStock === true || appData.store.useStock === 'true';

        return `
        <div data-id="${x.id}" class="product-admin-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${bC} shadow-2xs hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all flex flex-col gap-3.5 group">
            <!-- BARIS 1: IDENTITAS PRODUK, THUMBNAIL, STOK & FIFO -->
            <div class="flex items-start gap-3 sm:gap-4 min-w-0">
                <!-- Drag Handle & Order Badge -->
                ${isP ? `
                    <div class="flex flex-col items-center justify-center shrink-0 gap-1 select-none pt-0.5" onclick="event.stopPropagation();">
                        <div class="product-drag-handle w-6 h-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/60 flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-400 hover:text-[var(--color-primary)] transition-colors" title="Tahan &amp; geser untuk mengatur urutan">
                            <i class="fa-solid fa-grip-vertical text-xs"></i>
                        </div>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${idx === 0 ? 'opacity-25 pointer-events-none' : ''}" onclick="window.moveProductOrder('${x.id}', -1)" title="Geser Naik 1 Posisi">
                            <i class="fa-solid fa-chevron-up"></i>
                        </button>
                        <button class="text-[9px] font-mono font-black px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border text-[var(--color-primary)] transition-all" onclick="window.jumpProductOrder('${x.id}')" title="Klik untuk lompat ke nomor urut tertentu">
                            #${idx + 1}
                        </button>
                        <button class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[9px] flex items-center justify-center transition-all active:scale-90 ${idx === i.length - 1 ? 'opacity-25 pointer-events-none' : ''}" onclick="window.moveProductOrder('${x.id}', 1)" title="Geser Turun 1 Posisi">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                ` : ''}

                <!-- Thumbnail -->
                ${img}

                <!-- Info Teks Produk -->
                <div class="min-w-0 flex-1 flex flex-col justify-center">
                    <h4 class="text-sm sm:text-base font-black ${tC} line-clamp-2 leading-snug tracking-tight mb-1 cursor-pointer hover:text-[var(--color-primary)] transition-colors" onclick="oAEd('${t}','${x.id}')">
                        ${esc(x.name||x.title||x.bankName||x.code||'Item')}
                    </h4>

                    ${isP ? `
                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                            <span class="text-base sm:text-lg font-black text-[var(--color-primary)] tracking-tight">${fCur(x.price)}</span>
                            <span class="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 hover:bg-indigo-50 dark:bg-slate-700/80 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-300 px-2 py-0.5 rounded-md border border-slate-200/60 hover:border-indigo-300 dark:border-slate-600/60 transition-colors cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${x.id}')" title="Klik untuk Cetak Label Barcode &amp; Harga">
                                <i class="fa-solid fa-barcode text-[8.5px]"></i> ${esc(x.sku || 'TANPA SKU')}
                            </span>
                            ${x.variants && x.variants.length > 0 ? `
                                <span class="inline-flex items-center gap-1 text-[9px] font-black text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800" title="${x.variants.length} Varian">
                                    <i class="fa-solid fa-layer-group text-[8.5px]"></i> ${x.variants.length} Varian
                                </span>
                            ` : ''}
                        </div>
                    ` : ''}

                    <!-- Badges Baris 2: Stok, HPP, Terjual & FIFO -->
                    <div class="flex items-center gap-1.5 flex-wrap text-xs">
                        ${isP && isAdminActive ? (() => {
                            const sInfo = computeTotalProductStock(x, appData.store);
                            if (!sInfo.isManaged) return '';
                            if (sInfo.isOutOfStock) {
                                return `<span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-200/80 dark:border-rose-900/60"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Habis (0)</span>`;
                            }
                            const stockVal = sInfo.stock != null ? String(sInfo.stock).replace(/\.?0+$/, '') : '0';
                            const colorCls = sInfo.isLowStock 
                                ? 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800' 
                                : 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800';
                            return `<span class="inline-flex items-center gap-1 text-[9.5px] font-bold ${colorCls} px-2 py-0.5 rounded-md border"><i class="fa-solid fa-boxes-stacked mr-0.5"></i>Stok: ${stockVal}</span>`;
                        })() : ''}

                        ${isP && isAdminActive && x.hpp ? `
                            <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/60" title="Harga Modal (HPP)">
                                <i class="fa-solid fa-coins mr-0.5"></i>HPP: ${fCur(x.hpp)}
                            </span>
                        ` : ''}

                        ${isP ? (() => {
                            const sold = x.variants && x.variants.length ? x.variants.reduce((s,vv)=>s+(parseFloat(vv.totalSold)||0),0) : (parseFloat(x.totalSold)||0);
                            return sold > 0 ? `
                                <span class="inline-flex items-center gap-1 text-[9.5px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded-md border border-orange-200/60 dark:border-orange-800/60">
                                    <i class="fa-solid fa-fire mr-0.5"></i>Terjual: ${sold}
                                </span>` : '';
                        })() : ''}

                        ${isP ? (() => {
                            const sups = Array.isArray(x.suppliers) && x.suppliers.length > 0
                                ? x.suppliers
                                : (x.supplierId ? [{ supplierId: x.supplierId, isPrimary: true }] : []);
                            if (!sups.length) return '';
                            const firstSup = sups.find(s => s.isPrimary) || sups[0];
                            const sObj = (appData.suppliers || []).find(s => String(s.id) === String(firstSup.supplierId));
                            const sName = sObj ? sObj.name : (firstSup.supplierName || 'Supplier');
                            const extraCount = sups.length - 1;
                            const batchCount = Array.isArray(x.stockBatches) ? x.stockBatches.filter(b => (parseFloat(b.remainingQty) || 0) > 0).length : 0;
                            return `
                                <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${x.id}');" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/40 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-all cursor-pointer shadow-2xs" title="Lihat Rekanan Supplier &amp; Antrean Batch FIFO">
                                    <i class="fa-solid fa-truck-field text-[8.5px]"></i>
                                    <span class="max-w-[120px] truncate">${esc(sName)}</span>
                                    ${extraCount > 0 ? `<span class="bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 px-1 py-0.2 rounded text-[8.5px] font-black">+${extraCount}</span>` : ''}
                                </button>
                                ${batchCount > 0 ? `
                                    <button type="button" onclick="event.stopPropagation(); window.openProductFifoModal?.('${x.id}');" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition-all cursor-pointer" title="Lacak Antrean FIFO">
                                        <i class="fa-solid fa-layer-group text-[8px]"></i>
                                        <span>${batchCount} Batch</span>
                                    </button>
                                ` : ''}
                            `;
                        })() : ''}

                        ${t==='colors' ? `<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${esc(x.hex||'transparent')}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${esc(x.catalog||'Tanpa Katalog')}</p></div>` : ''}

                        ${t==='customers' ? `
                            <p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${esc(x.phone)}</p>
                            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                                <span class="text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.points)||0)} Poin</span>
                                ${(x.paylaterActive === true || x.paylaterActive === 'true') ? `
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                                        <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${fCur(Math.max(0, (parseFloat(x.paylaterLimit)||0) - Math.max(0, parseFloat(x.paylaterUsed)||0)))} / ${fCur(parseFloat(x.paylaterLimit)||0)}
                                    </span>
                                ` : `
                                    <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-slate-100 dark:bg-slate-700 text-slate-400">PayLater Off</span>
                                `}
                            </div>
                        ` : ''}

                        ${t==='rewards' ? `<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.pointsCost)||0)} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(x.stock)||0}</p>` : ''}
                    </div>
                </div>
            </div>

            <!-- BARIS 2: UNIFIED NATIVE ACTION BAR (TOUCH-TARGET STANDARD 40px) -->
            <div class="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                <!-- Aksi Status / Restock / Harga Cepat -->
                <div class="flex items-center gap-2 flex-wrap">
                    ${isP ? (isOff 
                        ? `<button type="button" class="h-10 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${x.id}', true)" title="Aktifkan Kembali Stok Produk"><i class="fa-solid fa-check text-xs"></i><span>Aktifkan</span></button>`
                        : `<button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); toggleProductStatus('${x.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs"></i><span>Nonaktifkan</span></button>`
                    ) : ''}

                    ${(isP && useStockEnabled) ? `
                        <button type="button" class="h-10 px-3.5 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] hover:primary-bg hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openRestockModal('${x.id}')" title="Restock Stok Produk">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Restock</span>
                        </button>
                    ` : ''}

                    ${isP ? `
                        <button type="button" class="h-10 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); openQuickPriceModal('${x.id}')" title="Ubah Cepat Harga Jual">
                            <i class="fa-solid fa-tags text-xs"></i>
                            <span class="hidden sm:inline">Harga</span>
                        </button>

                        <button type="button" class="h-10 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); window.openProductBarcodeLabelModal?.('${x.id}')" title="Cetak Label Harga &amp; Barcode Barang">
                            <i class="fa-solid fa-barcode text-xs"></i>
                            <span class="hidden sm:inline">Label</span>
                        </button>
                    ` : ''}

                    ${t === 'customers' ? `
                        <button type="button" class="h-10 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-500 hover:text-white dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${x.id||x.phone}'))||{name:'${esc(x.name)}',phone:'${esc(x.phone)}',points:${parseFloat(x.points)||0}} : {name:'${esc(x.name)}',phone:'${esc(x.phone)}',points:${parseFloat(x.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP">
                            <i class="fa-solid fa-id-card text-xs"></i>
                            <span>Kartu Member</span>
                        </button>
                    ` : ''}
                </div>

                <!-- Aksi Utama: Duplikat, Edit, Hapus -->
                <div class="flex items-center gap-2 ml-auto">
                    ${isP ? `
                        <button type="button" class="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); duplicateProduct('${x.id}')" title="Duplikat Produk">
                            <i class="fa-regular fa-copy text-xs"></i>
                        </button>
                    ` : ''}

                    <button type="button" class="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oAEd('${t}','${x.id}')" title="Edit Data Lengkap">
                        <i class="fa-solid fa-pen text-xs"></i>
                        <span>Edit</span>
                    </button>

                    <button type="button" class="h-10 w-10 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" onclick="event.stopPropagation(); oADel('${t}','${x.id}')" title="Hapus Permanen">
                        <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }).join(''));

    if (t === 'products') {
        initAdminProductSortable();
    }

    if (scrollParent) requestAnimationFrame(() => { scrollParent.scrollTop = savedScrollTop; });
};

// ─── Aksi Cepat Manajemen Sub-Kategori di Master Kategori ────────────────────

window.promptAddSubCategory = async (catId) => {
    const catObj = (appData.categories || []).find(c => String(c.id) === String(catId));
    if (!catObj) return;
    const promptFn = typeof customPrompt === 'function' ? customPrompt : (window.customPrompt || prompt);
    const res = await promptFn(`Tambah Sub-Kategori Baru untuk '${catObj.name}':`, '');
    if (!res || !res.trim()) return;
    const newSub = res.trim();

    catObj.subCategories = Array.isArray(catObj.subCategories) ? catObj.subCategories : [];
    if (catObj.subCategories.some(s => s.toLowerCase() === newSub.toLowerCase())) {
        showToast("Sub-kategori ini sudah ada!");
        return;
    }
    catObj.subCategories.push(newSub);

    try {
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        await _save(['categories']);
        showToast(`Sub-kategori '${newSub}' berhasil ditambahkan ke '${catObj.name}'!`);
        window.rAdmItms?.('categories');
    } catch(e) {
        console.error("Gagal simpan subkategori:", e);
        showToast("Gagal menyimpan sub-kategori: " + (e.message || ''));
    }
};

window.removeCategorySubCategory = async (catId, subCatName) => {
    const catObj = (appData.categories || []).find(c => String(c.id) === String(catId));
    if (!catObj) return;

    const confirmFn = typeof showConfirm === 'function' ? showConfirm : window.showConfirm;
    const doRemove = async () => {
        catObj.subCategories = (catObj.subCategories || []).filter(s => s.toLowerCase() !== subCatName.toLowerCase());
        try {
            const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
            await _save(['categories']);
            showToast(`Sub-kategori '${subCatName}' berhasil dihapus!`);
            window.rAdmItms?.('categories');
        } catch(e) {
            console.error("Gagal hapus subkategori:", e);
            showToast("Gagal menghapus sub-kategori: " + (e.message || ''));
        }
    };

    if (confirmFn) {
        confirmFn("Hapus Sub-Kategori", `Hapus sub-kategori '${subCatName}' dari kelompok '${catObj.name}'? Produk yang sudah ada tidak akan terhapus.`, doRemove, "Ya, Hapus", true);
    } else {
        await doRemove();
    }
};

window.syncSubCategoriesFromProducts = async (catId) => {
    const catObj = (appData.categories || []).find(c => String(c.id) === String(catId));
    if (!catObj) return;

    const inProds = [...new Set((appData.products || [])
        .filter(p => p.category === catObj.name && p.subCategory)
        .map(p => p.subCategory.trim()))];

    if (!inProds.length) {
        showToast("Tidak ditemukan sub-kategori di produk untuk kategori ini.");
        return;
    }

    catObj.subCategories = Array.isArray(catObj.subCategories) ? catObj.subCategories : [];
    let added = 0;
    inProds.forEach(sc => {
        if (!catObj.subCategories.some(s => s.toLowerCase() === sc.toLowerCase())) {
            catObj.subCategories.push(sc);
            added++;
        }
    });

    if (added === 0) {
        showToast("Semua sub-kategori produk sudah terdaftar di master!");
        return;
    }

    try {
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        await _save(['categories']);
        showToast(`${added} sub-kategori berhasil disinkronkan dari produk!`);
        window.rAdmItms?.('categories');
    } catch(e) {
        console.error("Gagal sinkron subkategori:", e);
        showToast("Gagal sinkron sub-kategori: " + (e.message || ''));
    }
};

window.openProductFifoModal = openProductFifoModal;



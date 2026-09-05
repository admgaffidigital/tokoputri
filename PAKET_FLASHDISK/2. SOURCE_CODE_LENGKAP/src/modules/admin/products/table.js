/**
 * ============================================================
 * ADMIN PRODUCTS — RENDER TABEL & LIST PRODUK (table.js)
 * Mengatur tampilan daftar data produk, warna, pelanggan, reward,
 * pencarian & filter, kartu item, dan kalkulasi statistik ringkas.
 * ============================================================
 */

import { appData } from '../../../core/state.js';
import { el, setH, esc, fCur } from '../../../core/utils.js';
import { computeInventoryStats } from '../auth.js';
import { cTab, setCTab, aSq, setASq } from './index.js';

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

    let rawList = [...(appData[t]||[])]; rawList.sort((a,b) => (b.id||0)-(a.id||0));
    const searchVal = (aSq || window.aSq || '').toLowerCase();
    let i = rawList.filter(x => {
        let m = (x.name||x.title||x.bankName||x.code||x.sku||x.phone||'').toLowerCase().includes(searchVal);
        if(t==='products' && !m && x.variants) { m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(searchVal)); }
        return m;
    });
    
    if(!i.length){ return setH('admin-list-container', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>`); }
    
    setH('admin-list-container', i.map(x => {
        let isP = t==='products', isOff = isP && (x.isActive==='false'||x.isActive===false);
        let bC = isOff ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800';
        let tC = isOff ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100';
        
        let img = x.img 
            ? `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${isOff?'grayscale opacity-50':''}"></div>`
            : `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>`;
        
        let tglBtn = isP ? (isOff 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`
            : `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`
        ) : '';
        
        let dupBtn = isP 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct(${x.id})" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>` 
            : '';

        // FIX: cek useStock dengan cara yang konsisten
        const useStockEnabled = appData.store.useStock === true || appData.store.useStock === 'true';
        let restockBtn = (isP && useStockEnabled) 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal(${x.id})" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`
            : '';

        let qPriceBtn = isP
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal(${x.id})" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`
            : '';

        let editBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${t}',${x.id})" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`;
        
        let delBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${t}',${x.id})" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;

        return `
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${bC}" onclick="oAEd('${t}',${x.id})">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${img}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${tC} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${esc(x.name||x.title||x.bankName||x.code||'Item')}</p>
                    ${isP ? `<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${fCur(x.price)}</p>` : ''}
                    ${isP && window.isAdm && useStockEnabled ? `<p class="text-[10px] font-bold mt-1 ${(x.variants&&x.variants.length?x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0):parseFloat(x.stock)||0) === 0 ? 'text-rose-500 animate-pulse' : 'text-blue-500'}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${x.variants&&x.variants.length ? x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0).toFixed(2).replace(/\.?0+$/,'') : (parseFloat(x.stock)||0)}</p>` : ''}
                    ${isP && window.isAdm && x.hpp ? `<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${fCur(x.hpp)}</p>` : ''}
                    ${isP ? (() => {
                        const sold = x.variants && x.variants.length ? x.variants.reduce((s,vv)=>s+(parseFloat(vv.totalSold)||0),0) : (parseFloat(x.totalSold)||0);
                        return sold > 0 ? `<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${sold}</p>` : '';
                    })() : ''}
                    ${t==='colors' ? `<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${esc(x.hex||'transparent')}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${esc(x.catalog||'Tanpa Katalog')}</p></div>` : ''}
                    ${t==='customers' ? `<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${esc(x.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.points)||0)} Poin</p>` : ''}
                    ${t==='rewards' ? `<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.pointsCost)||0)} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(x.stock)||0}</p>` : ''}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${tglBtn}
                ${restockBtn}
                ${qPriceBtn}
                ${dupBtn}
                ${editBtn}
                ${delBtn}
            </div>
        </div>`;
    }).join(''));

    if (scrollParent) requestAnimationFrame(() => { scrollParent.scrollTop = savedScrollTop; });
};

// ─── Proxy Delegates ──────────────────────────────────────────────────────────
// Memastikan pemanggilan fungsi antar-modul tetap aman
window.rAdmReviews = () => window.rAdmReviews?.();
window.rTaxPanel = () => window.rTaxPanel?.();

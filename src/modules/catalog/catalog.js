/**
 * ============================================================
 * MODUL KATALOG PRODUK, FILTER & PENCARIAN
 * Mengatur render daftar produk, mode grid/list, filter kategori & merek,
 * pencarian instan (debounce), sortir harga/nama/terbaru, dan pagination.
 * ============================================================
 */

import { appData, aCat, setACat, aBrand, setABrand, sQ, setSQ, cSort, setCSort, cView, setCView, cPage, setCPage, iPP } from '../../core/state.js';
import { el, show, hide, toggleCls, esc, fCur, getOptImg } from '../../core/utils.js';

let searchTmr = null;

/**
 * Render daftar produk katalog utama storefront
 */
export const rCat = () => {
    const isFiltered = (aCat !== 'Semua Produk' || aBrand !== 'Semua Merek' || sQ !== '');
    
    toggleCls('dynamic-banners-container', 'hidden', isFiltered);
    toggleCls('reward-catalog-container', 'hidden', isFiltered);
    toggleCls('dynamic-vouchers-container', 'hidden', isFiltered);
    toggleCls('dynamic-categories-container', 'hidden', isFiltered);
    toggleCls('dynamic-brands-container', 'hidden', isFiltered);

    const showCat = appData.store.showCategories !== false && appData.store.showCategories !== 'false';
    const showBrnd = appData.store.showBrands !== false && appData.store.showBrands !== 'false';

    toggleCls('sec-categories', 'hidden', isFiltered || !showCat);
    toggleCls('sec-brands', 'hidden', isFiltered || !showBrnd);

    let backBtnContainer = el('dynamic-active-filter');
    if (!backBtnContainer) {
        let pContainer = el('product-container');
        if (pContainer) { 
            pContainer.insertAdjacentHTML('beforebegin', '<div id="dynamic-active-filter" class="transition-all w-full"></div>'); 
            backBtnContainer = el('dynamic-active-filter'); 
        }
    }
    
    if (backBtnContainer) {
        if (isFiltered) {
            let filterLabel = "Menampilkan"; 
            let filterValue = ""; 
            let filterIcon = "fa-filter"; 
            let iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";
            
            if (sQ !== '') { 
                filterLabel = "Hasil Pencarian"; 
                filterValue = `"${sQ}"`; 
                filterIcon = "fa-magnifying-glass"; 
                iconColor = "text-rose-500 bg-rose-50 dark:bg-rose-900/30"; 
            } else if (aCat !== 'Semua Produk') { 
                filterLabel = "Kategori Pilihan"; 
                filterValue = aCat; 
                filterIcon = "fa-layer-group"; 
                iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"; 
            } else if (aBrand !== 'Semua Merek') { 
                filterLabel = "Merek Pilihan"; 
                filterValue = aBrand; 
                filterIcon = "fa-tag"; 
                iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"; 
            }

            backBtnContainer.innerHTML = `
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex justify-between items-center mb-5 shadow-sm">
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-10 h-10 rounded-xl ${iconColor} flex items-center justify-center shrink-0"><i class="fa-solid ${filterIcon} text-lg"></i></div>
                    <div class="flex flex-col min-w-0 pr-2">
                        <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${filterLabel}</span>
                        <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${esc(filterValue)}</span>
                    </div>
                </div>
                <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
            </div>`;
            backBtnContainer.classList.remove('hidden');
        } else { 
            backBtnContainer.innerHTML = ''; 
            backBtnContainer.classList.add('hidden'); 
        }
    }

    let f = appData.products.filter(p => {
        if (p.isActive === false || p.isActive === 'false') return false;
        if (aCat !== 'Semua Produk' && p.category !== aCat) return false;
        if (aBrand !== 'Semua Merek' && p.brand !== aBrand) return false;
        if (!sQ) return true;
        let q = sQ.toLowerCase();
        return (p.name || '').toLowerCase().includes(q) || 
               (p.sku || '').toLowerCase().includes(q) || 
               (p.category || '').toLowerCase().includes(q) || 
               (p.brand || '').toLowerCase().includes(q) || 
               (p.variants && p.variants.some(v => (v.name || '').toLowerCase().includes(q) || (v.sku || '').toLowerCase().includes(q)));
    }).sort((a, b) => {
        if (cSort === 'cheapest') return (a.price || 0) - (b.price || 0);
        if (cSort === 'expensive') return (b.price || 0) - (a.price || 0);
        if (cSort === 'az') return (a.name || '').localeCompare(b.name || '');
        if (cSort === 'za') return (b.name || '').localeCompare(a.name || '');
        if (cSort === 'oldest') return (a.id || 0) - (b.id || 0);
        return (b.id || 0) - (a.id || 0);
    });

    const c = el('product-container');
    if (!c) return;
    c.className = cView === 'grid' 
        ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8' 
        : 'flex flex-col gap-3 sm:gap-4';
    
    if (!f.length) {
        c.innerHTML = `<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>`;
        hide('load-more-container'); 
        return;
    }
    
    const v = f.slice(0, cPage * iPP);
    c.innerHTML = v.map(p => {
        let nH = '';
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        let stockBadge = '';
        
        if (useStk) {
            const totalStock = p.variants && p.variants.length
                ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s, v) => s + (parseFloat(v.stock) || 0), 0)
                : parseFloat(p.stock) || 0;
            if (totalStock <= 0) {
                nH = `<div class="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-20 flex items-center justify-center rounded-2xl"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>`;
            } else if (totalStock <= 5) {
                stockBadge = `<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${totalStock}</span>`;
            } else {
                stockBadge = `<span class="absolute top-2 left-2 z-10 bg-slate-800/80 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider backdrop-blur-sm"><i class="fa-solid fa-box mr-0.5"></i> Stok ${totalStock}</span>`;
            }
        }
        
        const canOpen = !nH;
        const cardCursorCls = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40' : 'cursor-not-allowed';
        const cardCursorClsList = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40' : 'cursor-not-allowed';

        let discPill = '';
        let priceNormalHtml = '';
        if (p.priceNormal && p.priceNormal > p.price) {
            let pct = Math.round(((p.priceNormal - p.price) / p.priceNormal) * 100);
            discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${pct}%</span>`;
            priceNormalHtml = `<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${fCur(p.priceNormal)}</p>`;
        }

        let poPill = p.poTime ? `<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>` : '';

        let poinBadge = '';
        if (p.variants && p.variants.length) {
            const poinVals = p.variants.map(v => parseFloat(v.poin) || 0).filter(x => x > 0);
            if (poinVals.length) {
                const uniq = [...new Set(poinVals)];
                poinBadge = uniq.length === 1
                    ? `<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${uniq[0]} Poin</span>`
                    : `<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>`;
            }
        } else if (parseFloat(p.poin) > 0) {
            poinBadge = `<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(p.poin)} Poin</span>`;
        }

        const totalSoldCard = p.variants && p.variants.length
            ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0)
            : (parseFloat(p.totalSold) || 0);
        const soldBadge = totalSoldCard > 0
            ? `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${totalSoldCard} Terjual</span>`
            : '';

        let bH = `<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${discPill}
            ${poPill}
            ${poinBadge}
            ${soldBadge}
            ${p.tag ? `<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${esc(p.tag)}</span>` : ''}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${p.brand ? `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${esc(p.brand)}</span>` : ''}
            ${(p.wholesale?.length && !p.variants?.length) ? `<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>` : ''}
        </div>`;
        
        let unt = `<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${esc(p.unit || 'PCS')}</span>`;
        
        if (cView === 'grid') {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${cardCursorCls} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${p.id})">
                ${nH}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${stockBadge}
                      <img loading="lazy" decoding="async" src="${esc(getOptImg(p.img, 'w300-rw'))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${nH ? 'grayscale opacity-50' : ''}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${bH}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${esc(p.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${p.variants && p.variants.length > 0 ? '' : priceNormalHtml}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                            </p>
                            ${p.variants && p.variants.length > 0 ? '' : unt}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`;
        } else {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${cardCursorClsList} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${p.id})">
                ${nH}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${stockBadge}
                    <img loading="lazy" decoding="async" src="${esc(getOptImg(p.img, 'w300-rw'))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${nH ? 'grayscale opacity-50' : ''}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${bH}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${esc(p.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${p.variants && p.variants.length > 0 ? '' : priceNormalHtml}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                            </p>
                            ${p.variants && p.variants.length > 0 ? '' : unt}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`;
        }
    }).join('');
    
    v.length < f.length ? show('load-more-container') : hide('load-more-container');
};

export const filterCategory = c => {
    setACat((aCat === c && c !== 'Semua Produk') ? 'Semua Produk' : c); 
    setCPage(1); 
    if (typeof window.rDyn === 'function') window.rDyn();
    const sc = document.querySelector('#view-catalog .scroll-content'); 
    if (sc) setTimeout(() => sc.scrollTo({ top: 0, behavior: 'smooth' }), 10);
};

export const filterBrand = b => {
    setABrand((aBrand === b && b !== 'Semua Merek') ? 'Semua Merek' : b); 
    setCPage(1); 
    if (typeof window.rDyn === 'function') window.rDyn();
    const sc = document.querySelector('#view-catalog .scroll-content'); 
    if (sc) setTimeout(() => sc.scrollTo({ top: 0, behavior: 'smooth' }), 10);
};

export const resetSemuaFilter = () => { 
    setACat('Semua Produk'); 
    setABrand('Semua Merek'); 
    setSQ(''); 
    setCPage(1); 
    if (typeof window.rDyn === 'function') window.rDyn(); 
};

export const handleSearch = v => { 
    clearTimeout(searchTmr); 
    searchTmr = setTimeout(() => { 
        setSQ(v); 
        setCPage(1); 
        rCat(); 
    }, 300); 
};

export const handleSort = v => { 
    setCSort(v); 
    setCPage(1); 
    rCat(); 
};

export const toggleView = v => {
    setCView(v); 
    setCPage(1);
    if (el('btn-view-grid')) {
        el('btn-view-grid').className = v === 'grid' 
            ? "w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all" 
            : "w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all";
    }
    if (el('btn-view-list')) {
        el('btn-view-list').className = v === 'list' 
            ? "w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all" 
            : "w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all";
    }
    rCat();
};

export const loadMoreProducts = () => { 
    setCPage(cPage + 1); 
    rCat(); 
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.rCat = rCat;
window.filterCategory = filterCategory;
window.filterBrand = filterBrand;
window.resetSemuaFilter = resetSemuaFilter;
window.handleSearch = handleSearch;
window.handleSort = handleSort;
window.toggleView = toggleView;
window.loadMoreProducts = loadMoreProducts;

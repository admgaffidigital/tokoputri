/**
 * ============================================================
 * MODUL KATALOG PRODUK, FILTER & PENCARIAN
 * Mengatur render daftar produk, mode grid/list, filter kategori & merek,
 * pencarian instan (debounce), sortir harga/nama/terbaru, dan pagination.
 * ============================================================
 */

import { appData, cart, aCat, setACat, aSubCat, setASubCat, aBrand, setABrand, sQ, setSQ, cSort, setCSort, cView, setCView, cPage, setCPage, iPP } from '../../core/state.js';
import { el, show, hide, toggleCls, esc, fCur, getOptImg, showToast, renderProductCoverHtml, isPlaceholderImg } from '../../core/utils.js';
import { computeTotalProductStock } from '../../core/pricing.js';
import { updCart } from '../cart/cart.js';
import { openProductModal, openQuickVariantSheet } from './product-modal.js';

let searchTmr = null;

/**
 * Render daftar produk katalog utama storefront
 */
export const rCat = () => {
    const isFiltered = (aCat !== 'Semua Produk' || aBrand !== 'Semua Merek' || sQ !== '' || aSubCat !== 'Semua Jenis');
    
    toggleCls('dynamic-banners-container', 'hidden', isFiltered);
    const isShowRewards = (appData.store.showRewardCatalog !== false && appData.store.showRewardCatalog !== 'false') && (appData.rewards || []).some(r => r.isActive !== 'false' && r.isActive !== false);
    toggleCls('reward-catalog-container', 'hidden', isFiltered || !isShowRewards);
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
            let iconColor = "text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-[rgba(var(--color-primary-rgb),0.2)]";
            
            if (sQ !== '') { 
                filterLabel = "Hasil Pencarian"; 
                filterValue = `"${sQ}"`; 
                filterIcon = "fa-magnifying-glass"; 
                iconColor = "text-rose-500 bg-rose-50 dark:bg-rose-900/30"; 
            } else if (aCat !== 'Semua Produk') { 
                filterLabel = "Kategori Pilihan"; 
                filterValue = aCat + (aSubCat !== 'Semua Jenis' ? ` • ${aSubCat}` : ''); 
                filterIcon = "fa-layer-group"; 
                iconColor = "text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-[rgba(var(--color-primary-rgb),0.2)]"; 
            } else if (aBrand !== 'Semua Merek') { 
                filterLabel = "Merek Pilihan"; 
                filterValue = aBrand; 
                filterIcon = "fa-tag"; 
                iconColor = "text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-[rgba(var(--color-primary-rgb),0.2)]"; 
            } else if (aSubCat !== 'Semua Jenis') {
                filterLabel = "Sub-Kategori"; 
                filterValue = aSubCat; 
                filterIcon = "fa-shapes"; 
                iconColor = "text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-[rgba(var(--color-primary-rgb),0.2)]"; 
            }

            // Ekstrak sub-kategori unik jika kategori sedang dipilih
            let subCategoriesHtml = '';
            if (aCat !== 'Semua Produk') {
                const catObj = (appData.categories || []).find(c => c.name === aCat);
                const officialSubs = Array.isArray(catObj?.subCategories) ? catObj.subCategories : [];
                const productsInCat = appData.products.filter(p => (p.isActive !== false && p.isActive !== 'false') && p.category === aCat);
                const subCatMap = {};

                // Daftarkan subkategori resmi
                officialSubs.forEach(sc => {
                    const trimmed = (sc || '').trim();
                    if (trimmed) subCatMap[trimmed] = 0;
                });

                productsInCat.forEach(p => {
                    const sc = (p.subCategory || '').trim();
                    if (sc) {
                        subCatMap[sc] = (subCatMap[sc] || 0) + 1;
                    }
                });
                const subCats = Object.keys(subCatMap).sort().map(name => ({ name, count: subCatMap[name] }));
                
                if (subCats.length > 0) {
                    subCategoriesHtml = `
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        <div class="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                            <span>Pilih Jenis / Sub-Kategori:</span>
                        </div>
                        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar -mx-1 px-1">
                            <button onclick="filterSubCategory('Semua Jenis')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${aSubCat === 'Semua Jenis' ? 'bg-[var(--color-primary)] text-white shadow-xs' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}">
                                Semua Jenis
                            </button>
                            ${subCats.map(item => `
                                <button onclick="filterSubCategory('${esc(item.name).replace(/'/g, "\\'")}')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${aSubCat.toLowerCase() === item.name.toLowerCase() ? 'bg-[var(--color-primary)] text-white shadow-xs' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}">
                                    <span>${esc(item.name)}</span>
                                    <span class="text-[10px] px-1.5 py-0.2 rounded-full ${aSubCat.toLowerCase() === item.name.toLowerCase() ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${item.count}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>`;
                }
            }

            backBtnContainer.innerHTML = `
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex flex-col gap-2.5 mb-5 shadow-sm">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 overflow-hidden">
                        <div class="w-10 h-10 rounded-xl ${iconColor} flex items-center justify-center shrink-0"><i class="fa-solid ${filterIcon} text-lg"></i></div>
                        <div class="flex flex-col min-w-0 pr-2">
                            <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${filterLabel}</span>
                            <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${esc(filterValue)}</span>
                        </div>
                    </div>
                    <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
                </div>
                ${subCategoriesHtml}
            </div>`;
            backBtnContainer.classList.remove('hidden');
        } else { 
            backBtnContainer.innerHTML = ''; 
            backBtnContainer.classList.add('hidden'); 
        }
    }

    const pOrder = (appData.productOrder && appData.productOrder.length) ? appData.productOrder : null;
    const orderMap = pOrder ? new Map(pOrder.map((id, idx) => [String(id), idx])) : null;

    let f = appData.products.filter(p => {
        if (p.isActive === false || p.isActive === 'false') return false;
        if (aCat !== 'Semua Produk' && p.category !== aCat) return false;
        if (aSubCat !== 'Semua Jenis' && (p.subCategory || '').trim().toLowerCase() !== aSubCat.trim().toLowerCase()) return false;
        if (aBrand !== 'Semua Merek' && p.brand !== aBrand) return false;
        if (!sQ) return true;
        let q = sQ.toLowerCase();
        return (p.name || '').toLowerCase().includes(q) || 
               (p.sku || '').toLowerCase().includes(q) || 
               (p.category || '').toLowerCase().includes(q) || 
               (p.subCategory || '').toLowerCase().includes(q) || 
               (p.brand || '').toLowerCase().includes(q) || 
               (p.variants && p.variants.some(v => (v.name || '').toLowerCase().includes(q) || (v.sku || '').toLowerCase().includes(q)));
    }).sort((a, b) => {
        if (cSort === 'cheapest') return (a.price || 0) - (b.price || 0);
        if (cSort === 'expensive') return (b.price || 0) - (a.price || 0);
        if (cSort === 'az') return (a.name || '').localeCompare(b.name || '');
        if (cSort === 'za') return (b.name || '').localeCompare(a.name || '');
        if (cSort === 'oldest') return (a.id || 0) - (b.id || 0);
        if (orderMap) {
            const idA = a && a.id != null ? String(a.id) : '';
            const idB = b && b.id != null ? String(b.id) : '';
            const hasA = orderMap.has(idA);
            const hasB = orderMap.has(idB);
            if (hasA && hasB) return orderMap.get(idA) - orderMap.get(idB);
            if (hasA) return -1;
            if (hasB) return 1;
        }
        return (b.id || 0) - (a.id || 0);
    });    const c = el('product-container');
    if (!c) return;
    c.className = cView === 'grid' 
        ? 'grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-4.5 lg:grid-cols-4 lg:gap-5 xl:grid-cols-4 2xl:grid-cols-5 min-h-[400px]' 
        : 'flex flex-col gap-2.5 sm:gap-3';
    
    if (!f.length) {
        if (!window.__isProductsLoaded && !sQ && !aCat && !aBrand) {
            // Data produk masih dalam proses unduh, pertahankan skeleton card
            return;
        }
        c.innerHTML = `<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>`;
        hide('load-more-container'); 
        return;
    }
    
    const v = f.slice(0, cPage * iPP);
    c.innerHTML = v.map(p => {
        const stockInfo = computeTotalProductStock(p);
        let nH = '';
        let stockChip = '';

        if (stockInfo.isOutOfStock) {
            nH = `<div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center rounded-xl"><span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1"><i class="fa-solid fa-ban"></i> HABIS</span></div>`;
            stockChip = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-ban text-[7.5px]"></i> Habis</span>`;
        } else if (stockInfo.isLowStock) {
            stockChip = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-fire text-[7.5px]"></i> Sisa ${stockInfo.totalStock}</span>`;
        } else if (stockInfo.isManaged && stockInfo.totalStock > 0) {
            stockChip = `<span class="bg-slate-800/90 dark:bg-slate-700 text-white px-2 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-box text-[7.5px]"></i> Stok ${stockInfo.totalStock}</span>`;
        }
        
        const canOpen = !stockInfo.isOutOfStock || stockInfo.isPreorder;
        const cardCursorCls = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/45' : 'cursor-not-allowed';
        const cardCursorClsList = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-primary)]/45' : 'cursor-not-allowed';

        let discPill = '';
        let priceNormalHtml = '';
        if (p.priceNormal && p.priceNormal > p.price) {
            let pct = Math.round(((p.priceNormal - p.price) / p.priceNormal) * 100);
            discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${pct}%</span>`;
            priceNormalHtml = `<p class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate mb-0.5">${fCur(p.priceNormal)}</p>`;
        } else if (p.variants && p.variants.length) {
            const varDiscs = p.variants
                .filter(v => v.priceNormal && parseFloat(v.priceNormal) > parseFloat(v.price))
                .map(v => Math.round(((parseFloat(v.priceNormal) - parseFloat(v.price)) / parseFloat(v.priceNormal)) * 100));
            if (varDiscs.length > 0) {
                const maxPct = Math.max(...varDiscs);
                discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${maxPct}%</span>`;
            }
        }

        const compactPoStr = p.poTime
            ? String(p.poTime).replace(/\s*hari\s*kerja/gi, 'hr').replace(/\s*hari/gi, 'hr').replace(/\s*minggu/gi, 'mgg').replace(/\s*bulan/gi, 'bln').trim()
            : '';
        let poPill = compactPoStr ? `<span class="bg-amber-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock text-[7.5px]"></i> PO ${esc(compactPoStr)}</span>` : '';

        // Eyebrow Kategori & Brand Terdedikasi (100% Lebar Kartu, Anti-Terpotong)
        const catBrandText = esc(`${p.subCategory || p.category || 'PRODUK'}${p.brand ? ` · ${p.brand}` : ''}`);

        let poinBadge = '';
        if (p.variants && p.variants.length) {
            const poinVals = p.variants.map(v => parseFloat(v.poin) || 0).filter(x => x > 0);
            if (poinVals.length) {
                const uniq = [...new Set(poinVals)];
                poinBadge = uniq.length === 1
                    ? `<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> +${uniq[0]}</span>`
                    : `<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> Poin</span>`;
            }
        } else if (parseFloat(p.poin) > 0) {
            poinBadge = `<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> +${parseFloat(p.poin)}</span>`;
        }

        const totalSoldCard = p.variants && p.variants.length
            ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0)
            : (parseFloat(p.totalSold) || 0);

        const soldBadge = totalSoldCard > 0
            ? `<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7.5px]"></i> ${totalSoldCard} Terjual</span>`
            : '';

        const variantBadge = (p.variants && p.variants.length > 0)
            ? `<span class="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-layer-group text-[7.5px]"></i> Varian</span>`
            : '';

        const grosirBadge = (p.wholesale?.length && !p.variants?.length)
            ? `<span class="amber-badge px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-tags text-[7.5px]"></i> Grosir</span>`
            : '';

        // ── Badges Lengkap & Bersih (100% di Luar Gambar Produk, Anti-Duplikat): Diskon, Stok, PO, Varian, Grosir, Poin & Terjual ──
        const allProductChips = [];
        if (discPill) allProductChips.push(discPill);
        if (stockChip) allProductChips.push(stockChip);
        if (poPill) allProductChips.push(poPill);
        if (variantBadge) allProductChips.push(variantBadge);
        if (grosirBadge) allProductChips.push(grosirBadge);
        if (poinBadge) allProductChips.push(poinBadge);
        if (soldBadge) allProductChips.push(soldBadge);
        const chipsHtml = allProductChips.join('');
        
        let unt = `<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${esc(p.unit || 'PCS')}</span>`;
        
        const hasImg = Boolean(p.img && typeof p.img === 'string' && p.img.trim() && !isPlaceholderImg(p.img));
        const imgUrl = hasImg ? esc(getOptImg(p.img, 'w300-rw')) : '';
        const coverMdHtml = renderProductCoverHtml(p, { size: 'md' });
        const coverSmHtml = renderProductCoverHtml(p, { size: 'sm' });

        if (cView === 'grid') {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs ${cardCursorCls} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${esc(p.id)}')">
                ${nH}
                <!-- Kotak Gambar Rasio 1:1 Bersih Murni (Tanpa Badge Menutupi Gambar) -->
                <div class="relative aspect-square w-full bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50 overflow-hidden">
                      ${hasImg 
                          ? `<img width="300" height="300" loading="lazy" decoding="async" sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw" src="${imgUrl}" alt="${esc(p.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${nH ? 'grayscale opacity-50' : ''}">
                             <div class="w-full h-full" style="display:none">${coverMdHtml}</div>`
                          : coverMdHtml}
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-3.5 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    <p class="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1.5">${catBrandText}</p>
                    <h4 class="text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug min-h-[2.3rem] sm:min-h-[2.5rem] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase break-words">${esc(p.name)}</h4>
                    <!-- Baris Chips Operasional 100% di Luar Gambar (Anti-Duplikat) -->
                    <div class="h-5.5 mb-2 flex items-center gap-1.5 overflow-x-auto hide-scrollbar no-scrollbar flex-nowrap py-0.5 shrink-0">
                        ${chipsHtml}
                    </div>
                    <div class="flex items-end justify-between mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-700/50">
                        <div class="min-w-0 pr-1">
                            <div class="h-3.5 flex items-center">
                                ${p.variants && p.variants.length > 0 ? '' : priceNormalHtml}
                            </div>
                            <div class="flex items-baseline gap-0.5">
                                <p class="text-[var(--color-primary)] font-black text-xs sm:text-[14px] lg:text-[15px] leading-none tracking-tight truncate">
                                    ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                                </p>
                                ${p.variants && p.variants.length > 0 ? '' : unt}
                            </div>
                        </div>
                        <button type="button" class="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-center justify-center shrink-0 transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-105 active:scale-95 shadow-2xs cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${esc(p.id)}')" title="${p.variants && p.variants.length > 0 ? 'Pilih Varian' : 'Tambah ke Keranjang'}" aria-label="${p.variants && p.variants.length > 0 ? 'Pilih varian ' + esc(p.name) : 'Tambah ' + esc(p.name) + ' ke keranjang'}">
                            ${p.variants && p.variants.length > 0 ? '<i class="fa-solid fa-layer-group text-xs"></i>' : '<i class="fa-solid fa-plus text-xs"></i>'}
                        </button>
                    </div>
                </div>
            </a>`;
        } else {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs ${cardCursorClsList} transition-all duration-300 flex items-center p-3 sm:p-3.5 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${esc(p.id)}')">
                ${nH}
                <!-- Thumbnail Kiri Bersih Murni (Tanpa Badge Menutupi Gambar) -->
                <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${hasImg
                        ? `<img width="96" height="96" loading="lazy" decoding="async" sizes="96px" src="${imgUrl}" alt="${esc(p.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${nH ? 'grayscale opacity-50' : ''}">
                           <div class="w-full h-full" style="display:none">${coverSmHtml}</div>`
                        : coverSmHtml}
                </div>
                <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 gap-1 relative z-10 pr-0.5">
                    <!-- Line 1: Eyebrow Kategori & Brand Terdedikasi (100% lebar kartu, anti-terpotong) -->
                    <p class="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none">${catBrandText}</p>
                    <!-- Line 2: Nama Produk -->
                    <h4 class="text-xs sm:text-[14px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1 sm:line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors uppercase break-words">${esc(p.name)}</h4>
                    <!-- Line 3: Chips Operasional Rapi 100% di Luar Gambar (Anti-Duplikat) -->
                    ${chipsHtml ? `<div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar no-scrollbar flex-nowrap py-0.5">${chipsHtml}</div>` : ''}
                    <!-- Line 4: Harga & Action -->
                    <div class="flex items-center justify-between pt-0.5">
                        <div class="flex items-baseline gap-1.5 min-w-0">
                            <p class="text-[var(--color-primary)] font-black text-xs sm:text-[15px] leading-none tracking-tight truncate">
                                ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                            </p>
                            ${p.variants && p.variants.length > 0 ? '' : unt}
                            ${(p.variants && p.variants.length > 0) || !p.priceNormal || p.priceNormal <= p.price ? '' : `<span class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate">${fCur(p.priceNormal)}</span>`}
                        </div>
                        <button type="button" class="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-center justify-center shrink-0 transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-105 active:scale-95 shadow-2xs mr-0.5 cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${esc(p.id)}')" title="${p.variants && p.variants.length > 0 ? 'Pilih Varian' : 'Tambah ke Keranjang'}" aria-label="${p.variants && p.variants.length > 0 ? 'Pilih varian ' + esc(p.name) : 'Tambah ' + esc(p.name) + ' ke keranjang'}">
                            ${p.variants && p.variants.length > 0 ? '<i class="fa-solid fa-layer-group text-xs"></i>' : '<i class="fa-solid fa-plus text-xs"></i>'}
                        </button>
                    </div>
                </div>
            </a>`;
        }
    }).join('');
    
    v.length < f.length ? show('load-more-container') : hide('load-more-container');
};

/**
 * Quick Add ke Keranjang langsung dari kartu katalog
 */
export const quickAddOrOpenProduct = (e, productId) => {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    const p = appData.products.find(x => String(x.id) === String(productId));
    if (!p) return;
    
    // Jika punya varian, buka Drawer Pilih Varian Cepat (Quick Variant Bottom Sheet)
    if (p.variants && p.variants.length > 0) {
        if (typeof openQuickVariantSheet === 'function') {
            openQuickVariantSheet(productId);
        } else if (typeof window.openQuickVariantSheet === 'function') {
            window.openQuickVariantSheet(productId);
        } else {
            openProductModal(productId);
        }
        return;
    }

    // Validasi stok jika toko mengaktifkan pembatasan stok
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const sInfo = computeTotalProductStock(p);
    if (useStk && !sInfo.isPreorder && sInfo.totalStock <= 0) {
        return showToast('Stok produk ini sedang kosong');
    }

    const existing = cart.find(i => i.id === p.id && !i.variantName);
    const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;
    if (useStk && !sInfo.isPreorder && inCartQty + 1 > sInfo.totalStock) {
        return showToast(`Maksimal stok tercapai: ${sInfo.totalStock}`);
    }

    if (existing) {
        existing.qty = parseFloat((existing.qty + 1).toFixed(2));
    } else {
        const itemPoin = parseFloat(p.poin) > 0 ? parseFloat(p.poin) : 0;
        cart.push({
            id: p.id,
            name: p.name,
            variantName: null,
            price: p.price,
            img: p.img,
            qty: 1,
            unit: p.unit || 'pcs',
            poTime: p.poTime || '',
            colorCode: '',
            poin: itemPoin
        });
    }
    updCart();
    
    // Trigger Animasi Terbang & Haptic Feedback
    const btnEl = e?.currentTarget || e?.target;
    if (typeof window.flyToCartAnimation === 'function') {
        window.flyToCartAnimation(btnEl, '#bnav-cart', p.img);
    } else if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('medium');
    }
    showToast(`+1 ${p.name} Masuk Keranjang`, 'success');
};

/**
 * Tampilkan skeleton placeholder beranimasi shimmer saat memuat data
 */
export const renderCatalogSkeleton = () => {
    const c = el('product-container');
    if (!c) return;
    const count = 6;
    let skeletonCards = '';
    for (let i = 0; i < count; i++) {
        skeletonCards += `
        <div class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-2xl shadow-soft p-2.5 sm:p-3 flex flex-col space-y-2 overflow-hidden">
            <div class="aspect-square w-full rounded-xl skeleton-shimmer"></div>
            <div class="h-3 w-16 rounded-md skeleton-shimmer"></div>
            <div class="h-3.5 w-full rounded-md skeleton-shimmer"></div>
            <div class="h-3 w-3/4 rounded-md skeleton-shimmer"></div>
            <div class="mt-auto pt-1 flex items-center justify-between">
                <div class="h-4 w-16 rounded-md skeleton-shimmer"></div>
                <div class="w-7 h-7 rounded-xl skeleton-shimmer"></div>
            </div>
        </div>`;
    }
    c.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4';
    c.innerHTML = skeletonCards;
};

export const filterCategory = c => {
    setACat((aCat === c && c !== 'Semua Produk') ? 'Semua Produk' : c); 
    setASubCat('Semua Jenis');
    setCPage(1); 
    if (typeof window.rDyn === 'function') window.rDyn();
    const sc = document.querySelector('#view-catalog .scroll-content'); 
    if (sc) setTimeout(() => sc.scrollTo({ top: 0, behavior: 'smooth' }), 10);
};

export const filterSubCategory = sc => {
    setASubCat(aSubCat === sc ? 'Semua Jenis' : sc);
    setCPage(1);
    rCat();
    const scEl = document.querySelector('#view-catalog .scroll-content');
    if (scEl) setTimeout(() => scEl.scrollTo({ top: 0, behavior: 'smooth' }), 10);
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
    setASubCat('Semua Jenis');
    setABrand('Semua Merek'); 
    setSQ(''); 
    setCPage(1); 
    if (typeof window.rDyn === 'function') window.rDyn(); 
};

export const handleSearch = v => { 
    clearTimeout(searchTmr); 
    const mobInput = el('mobile-header-search');
    if (mobInput && mobInput.value !== v) mobInput.value = v;
    const clearBtn = el('mobile-header-search-clear');
    if (clearBtn) clearBtn.classList.toggle('hidden', !v || !v.trim());
    searchTmr = setTimeout(() => { 
        setSQ(v); 
        setCPage(1); 
        rCat(); 
    }, 300); 
};

export const handleMobileHeaderSearch = v => {
    const mainInput = el('search-input');
    if (mainInput && mainInput.value !== v) mainInput.value = v;
    const clearBtn = el('mobile-header-search-clear');
    if (clearBtn) clearBtn.classList.toggle('hidden', !v || !v.trim());
    handleSearch(v);
};

export const clearMobileHeaderSearch = () => {
    const mobInput = el('mobile-header-search');
    if (mobInput) mobInput.value = '';
    const mainInput = el('search-input');
    if (mainInput) mainInput.value = '';
    const clearBtn = el('mobile-header-search-clear');
    if (clearBtn) clearBtn.classList.add('hidden');
    handleSearch('');
};

export const onMobileSearchFocus = () => {
    const sec = el('sec-categories') || el('product-container');
    const sc = document.querySelector('#view-catalog .scroll-content');
    if (sec && sc && sc.scrollTop < 60) {
        const topPos = sec.offsetTop - 70;
        sc.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
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
window.filterSubCategory = filterSubCategory;
window.filterBrand = filterBrand;
window.resetSemuaFilter = resetSemuaFilter;
window.handleSearch = handleSearch;
window.handleMobileHeaderSearch = handleMobileHeaderSearch;
window.clearMobileHeaderSearch = clearMobileHeaderSearch;
window.onMobileSearchFocus = onMobileSearchFocus;
window.handleSort = handleSort;
window.toggleView = toggleView;
window.loadMoreProducts = loadMoreProducts;
window.quickAddOrOpenProduct = quickAddOrOpenProduct;
window.renderCatalogSkeleton = renderCatalogSkeleton;

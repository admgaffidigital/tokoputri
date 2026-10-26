/**
 * ============================================================
 * MODUL STOREFRONT FLASH SALE (PROMO KILAT BERBATAS WAKTU)
 * Panggung promo kilat interaktif dengan Live Countdown Timer,
 * progress bar kuota keterjualan, dan harga promo diskon petir.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc, fCur, getOptImg, showToast } from '../../core/utils.js';
import { getActiveFlashSaleSession, checkFlashSaleStatus } from '../../core/pricing.js';
import { openProductModal } from './product-modal.js';
import { updCart } from '../cart/cart.js';
import { cart } from '../../core/state.js';

let flashSaleInterval = null;

/**
 * Format selisih waktu dalam Jam : Menit : Detik
 */
const formatCountdown = (diffMs) => {
    if (diffMs <= 0) return { h: '00', m: '00', s: '00', totalSec: 0 };
    const totalSec = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return {
        h: String(hours).padStart(2, '0'),
        m: String(minutes).padStart(2, '0'),
        s: String(seconds).padStart(2, '0'),
        totalSec
    };
};

/**
 * Render Panggung Flash Sale di Storefront
 */
export const renderStorefrontFlashSale = () => {
    const container = el('dynamic-flashsale-container');
    if (!container) return;

    if (flashSaleInterval) {
        clearInterval(flashSaleInterval);
        flashSaleInterval = null;
    }

    const session = getActiveFlashSaleSession('web');
    if (!session || !Array.isArray(session.items) || session.items.length === 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const endTime = session.endTime ? (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(session.endTime) : new Date(session.endTime).getTime()) : 0;
    const now = Date.now();
    const diffMs = Math.max(0, endTime - now);

    if (endTime && diffMs <= 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const cd = formatCountdown(diffMs);
    const validItems = session.items.filter(it => it && it.productId);
    if (validItems.length === 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const cardsHtml = validItems.map(item => {
        const prod = (appData.products || []).find(p => String(p.id) === String(item.productId));
        if (!prod || prod.isActive === false || prod.isActive === 'false') return '';

        const normalPrice = parseFloat(item.normalPrice) || parseFloat(prod.price) || 0;
        const flashPrice = parseFloat(item.flashSalePrice) || 0;
        const quota = parseFloat(item.quota) || 0;
        const sold = parseFloat(item.soldCount) || 0;
        const isSoldOut = quota > 0 && sold >= quota;
        const percentSold = quota > 0 ? Math.min(100, Math.round((sold / quota) * 100)) : 0;
        const remaining = Math.max(0, quota - sold);
        const discountPct = normalPrice > 0 ? Math.round(((normalPrice - flashPrice) / normalPrice) * 100) : (item.discountPercent || 0);

        const vObj = item.variantName && prod.variants ? prod.variants.find(v => v.name === item.variantName) : null;
        const rawImg = (vObj && vObj.img) ? vObj.img : prod.img;
        const imgUrl = rawImg ? getOptImg(rawImg, 'w400-rw') : '/favicon.png';
        const prodName = prod.name || 'Produk Promo';
        const variantSuffix = item.variantName ? ` (${item.variantName})` : '';

        return `
        <div class="snap-start shrink-0 flex flex-col w-[150px] sm:w-[172px] md:w-[188px] ${validItems.length <= 4 ? 'lg:w-[220px] xl:w-[240px]' : ''}">
            <div class="flash-sale-card group relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <!-- Badge Diskon Petir Harmonis Tema Neo-Brutalist (Proporsional & Nyaman) -->
                <div class="absolute left-1.5 top-1.5 z-10 flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[8.5px] sm:text-[9px] font-black uppercase tracking-wide text-slate-950 bg-amber-400 border border-slate-950 shadow-[1px_1px_0px_#0f172a]">
                    <i class="fa-solid fa-bolt text-slate-950 text-[7.5px] sm:text-[8px]"></i>
                    <span>-${Math.max(1, discountPct)}%</span>
                </div>

                ${remaining <= 3 && !isSoldOut && quota > 0 ? `
                <div class="absolute right-1.5 top-1.5 z-10 flex items-center gap-0.5 rounded-md bg-rose-600 px-1.5 py-0.5 text-[8px] sm:text-[8.5px] font-black text-white shadow-[1px_1px_0px_#0f172a] border border-slate-950">
                    <span><i class="fa-solid fa-fire text-amber-200 text-[7.5px]"></i> Sisa ${remaining}!</span>
                </div>` : ''}

                <!-- Foto Produk / Varian: Presisi Full Frame 1:1 Tanpa Padding Menjorok -->
                <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-b border-slate-200 dark:border-slate-800/80 shrink-0" onclick="window.openProductModal && window.openProductModal('${esc(prod.id)}', false, '${esc(item.variantName || '')}')">
                    <img src="${esc(imgUrl)}" alt="${esc(prodName)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/favicon.png'">
                    ${isSoldOut ? `
                    <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                        <span class="rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-md text-white bg-rose-700">HABIS</span>
                        <span class="mt-0.5 text-[8.5px] font-medium text-slate-300">Kuota terpenuhi</span>
                    </div>` : ''}
                </div>

                <!-- Detail & Harga -->
                <div class="flex flex-1 flex-col justify-between p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900 relative z-10">
                    <div>
                        <h4 class="line-clamp-2 text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors leading-snug min-h-[2rem] sm:min-h-[2.3rem] cursor-pointer" title="${esc(prodName + variantSuffix)}" onclick="window.openProductModal && window.openProductModal('${esc(prod.id)}', false, '${esc(item.variantName || '')}')">
                            ${esc(prodName)}
                        </h4>
                        
                        <!-- Baris Badge Varian Terdedikasi: Ramping, Proporsional & Lapang -->
                        <div class="mt-1 flex items-center min-h-[18px]">
                            ${item.variantName ? `
                                <span class="flash-variant-badge inline-flex items-center gap-1 text-[8px] sm:text-[8.5px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shrink-0 max-w-full truncate shadow-none">
                                    <i class="fa-solid fa-shapes text-[7.5px] text-[var(--color-primary)] shrink-0"></i>
                                    <span class="truncate">${esc(item.variantName)}</span>
                                </span>
                            ` : `<span class="invisible text-[8px] py-0.5 select-none" aria-hidden="true">&nbsp;</span>`}
                        </div>
                        
                        <!-- Coretan Harga & Harga Kilat Harmonis -->
                        <div class="mt-1.5 flex flex-col">
                            <span class="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                                ${fCur(normalPrice)}
                            </span>
                            <span class="text-xs sm:text-[14px] lg:text-[15px] font-black truncate leading-tight mt-0.5 text-rose-600 dark:text-rose-400">
                                ${fCur(flashPrice)}
                            </span>
                        </div>
                    </div>

                    <!-- Footer FOMO Progress Bar & Tombol Aksi Beli Kilat -->
                    <div class="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <div class="mb-1.5">
                            <div class="flex items-center justify-between text-[8px] sm:text-[8.5px] font-extrabold text-slate-500 dark:text-slate-400 mb-0.5">
                                <span class="flex items-center gap-1"><i class="fa-solid fa-fire text-amber-500 text-[8px]"></i> ${isSoldOut ? 'Terjual Habis' : `Terjual ${sold}/${quota || '∞'}`}</span>
                                <span class="${percentSold >= 80 ? 'text-rose-600 dark:text-rose-400 font-black' : ''}">${quota > 0 ? percentSold + '%' : 'Terbatas'}</span>
                            </div>
                            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                                <div class="h-full rounded-full transition-all duration-500 ${isSoldOut ? 'bg-slate-400' : ''}" style="${isSoldOut ? '' : 'background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);'} width: ${isSoldOut ? 100 : Math.max(8, percentSold)}%;"></div>
                            </div>
                        </div>

                        ${isSoldOut ? `
                        <button type="button" disabled class="btn-flash-buy-disabled w-full">
                            <span>Kuota Habis</span>
                        </button>` : `
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${esc(prod.id)}', '${esc(item.variantName || '')}')" class="btn-flash-buy w-full">
                            <i class="fa-solid fa-bolt text-amber-300 text-[10.5px]"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    if (!cardsHtml || !cardsHtml.trim()) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');

    container.innerHTML = `
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-3.5 sm:p-5 shadow-xs border transition-all duration-300" style="border-color: rgba(var(--color-primary-rgb), 0.22);">
        <!-- Top Caution/Hazard Stripe Accent -->
        <div class="neo-hazard-stripe-subtle h-1.5 w-full -mx-3.5 -mt-3.5 mb-3 sm:-mx-5 sm:-mt-5 sm:mb-4"></div>

        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b pb-3 mb-3" style="border-color: rgba(var(--color-primary-rgb), 0.12);">
            <div class="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 border-2 border-slate-950 shadow-[2px_2px_0px_#0f172a]">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl text-slate-950 animate-pulse"></i>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span class="rounded-md px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white shadow-2xs bg-rose-600 border border-slate-950">PROMO KILAT</span>
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                            <span class="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span> LIVE
                        </span>
                    </div>
                    <h3 class="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 truncate mt-0.5">
                        ${esc(session.title || 'Flash Sale Spesial Hari Ini')}
                    </h3>
                    <p class="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer & Navigasi Desktop -->
            <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0 self-stretch sm:self-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                <!-- Countdown Timer Block Harmonis Tema (Digital LED Clock) -->
                <div class="flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-black text-white border-2 border-slate-900 dark:border-slate-700 px-3 py-1.5 shadow-[2px_2px_0px_#0f172a]">
                    <div class="flex items-center gap-1 text-[10px] sm:text-[11px] font-black uppercase text-amber-300">
                        <i class="fa-solid fa-stopwatch text-rose-500 animate-bounce"></i>
                        <span class="tracking-wider">BERAKHIR:</span>
                    </div>
                    <div class="flex items-center gap-1 font-mono font-black">
                        <span id="fs-cd-h" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-black border border-slate-700">${cd.h}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-m" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-black border border-slate-700">${cd.m}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-s" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-rose-600 text-white px-1 py-0.5 text-xs sm:text-sm font-black border border-rose-500">${cd.s}</span>
                    </div>
                </div>

                <!-- Desktop Nav Buttons (< >) -->
                <div class="hidden sm:flex items-center gap-1.5 ml-1">
                    <button type="button" onclick="window.scrollFlashSaleLeft && window.scrollFlashSaleLeft()" class="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 active:translate-x-0.5 active:translate-y-0.5 transition-all shadow-[1.5px_1.5px_0px_#0f172a] cursor-pointer" title="Geser Kiri">
                        <i class="fa-solid fa-chevron-left text-xs"></i>
                    </button>
                    <button type="button" onclick="window.scrollFlashSaleRight && window.scrollFlashSaleRight()" class="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 active:translate-x-0.5 active:translate-y-0.5 transition-all shadow-[1.5px_1.5px_0px_#0f172a] cursor-pointer" title="Geser Kanan">
                        <i class="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div id="fs-cards-slider" class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2.5 pt-1 hide-scrollbar snap-x -mx-1 px-1 sm:mx-0 sm:px-0 scroll-smooth ${validItems.length <= 4 ? 'sm:justify-start lg:gap-5' : ''}">
            ${cardsHtml}
        </div>
    </div>`;

    // Mulai timer live countdown per detik
    if (endTime) {
        flashSaleInterval = setInterval(() => {
            const currentDiff = Math.max(0, endTime - Date.now());
            if (currentDiff <= 0) {
                clearInterval(flashSaleInterval);
                flashSaleInterval = null;
                renderStorefrontFlashSale();
                if (typeof window.rCat === 'function') window.rCat();
                return;
            }
            const currentCd = formatCountdown(currentDiff);
            const elH = el('fs-cd-h');
            const elM = el('fs-cd-m');
            const elS = el('fs-cd-s');
            if (elH) elH.innerText = currentCd.h;
            if (elM) elM.innerText = currentCd.m;
            if (elS) elS.innerText = currentCd.s;
        }, 1000);
    }
};

/**
 * Helper Beli Cepat dari Kartu Flash Sale
 */
export const quickBuyFlashSaleItem = (prodId, variantName = '') => {
    const prod = (appData.products || []).find(p => String(p.id) === String(prodId));
    if (!prod) return;

    if (prod.variants && prod.variants.length > 0 && !variantName) {
        // Jika produk memiliki varian dan promo ini berlaku untuk semua varian tanpa spesifik, buka modal produk agar pembeli memilih varian
        openProductModal(prodId);
        return;
    }

    // Jika tanpa varian atau varian sudah spesifik, masukkan langsung ke keranjang dengan varian tersebut
    const vName = variantName || (prod.variants && prod.variants[0] ? prod.variants[0].name : '');
    const price = window.getEffP ? window.getEffP({ id: prod.id, price: prod.price, variantName: vName }, 'web') : prod.price;
    const vObj = vName && prod.variants ? prod.variants.find(v => v.name === vName) : null;
    const itemImg = (vObj && vObj.img) ? vObj.img : (prod.img || '');
    const itemPoin = (vObj && parseFloat(vObj.poin) > 0) ? parseFloat(vObj.poin) : (parseFloat(prod.poin) || 0);

    const existingIndex = cart.findIndex(c => String(c.id) === String(prod.id) && String(c.variantName || '') === String(vName || ''));
    if (existingIndex > -1) {
        cart[existingIndex].qty = (parseFloat(cart[existingIndex].qty) || 0) + 1;
    } else {
        cart.push({
            id: prod.id,
            name: prod.name,
            variantName: vName,
            price: price,
            img: itemImg,
            qty: 1,
            unit: (vObj && vObj.unit) || prod.unit || 'pcs',
            colorCode: (vObj && vObj.colorCode) || '',
            poin: itemPoin
        });
    }

    try { localStorage.setItem('freshmart_cart', JSON.stringify(cart)); } catch(e) {}
    updCart();
    showToast(`"${prod.name}${vName ? ` (${vName})` : ''}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`, 'success');
};

/**
 * Navigasi Geser Slider Flash Sale
 */
export const scrollFlashSaleLeft = () => {
    const slider = el('fs-cards-slider');
    if (slider) slider.scrollBy({ left: -220, behavior: 'smooth' });
};

export const scrollFlashSaleRight = () => {
    const slider = el('fs-cards-slider');
    if (slider) slider.scrollBy({ left: 220, behavior: 'smooth' });
};

// Expose ke window
window.renderStorefrontFlashSale = renderStorefrontFlashSale;
window.quickBuyFlashSaleItem = quickBuyFlashSaleItem;
window.scrollFlashSaleLeft = scrollFlashSaleLeft;
window.scrollFlashSaleRight = scrollFlashSaleRight;

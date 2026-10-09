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

    const endTime = session.endTime ? new Date(session.endTime).getTime() : 0;
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

    container.classList.remove('hidden');

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

        const imgUrl = prod.img ? getOptImg(prod.img, 'w400-rw') : '/favicon.png';
        const prodName = prod.name || 'Produk Promo';
        const variantSuffix = item.variantName ? ` (${item.variantName})` : '';

        return `
        <div class="group relative flex w-[170px] sm:w-[205px] md:w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-rose-200/80 dark:border-rose-900/40 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:shadow-lg snap-start">
            <!-- Badge Diskon Petir -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1, discountPct)}%</span>
            </div>

            ${remaining <= 3 && !isSoldOut && quota > 0 ? `
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500/90 backdrop-blur-xs px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span>🔥 Sisa ${remaining}!</span>
            </div>` : ''}

            <!-- Foto Produk -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-2.5 flex items-center justify-center" onclick="window.openProductModal && window.openProductModal('${esc(prod.id)}')">
                <img src="${esc(imgUrl)}" alt="${esc(prodName)}" loading="lazy" decoding="async" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108" onerror="this.src='/favicon.png'">
                ${isSoldOut ? `
                <div class="absolute inset-0 bg-slate-950/75 backdrop-blur-2xs flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg bg-rose-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>` : ''}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3">
                <div>
                    <h4 class="line-clamp-2 text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors" title="${esc(prodName + variantSuffix)}">
                        ${esc(prodName + variantSuffix)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through">
                            ${fCur(normalPrice)}
                        </span>
                        <span class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400">
                            ${fCur(flashPrice)}
                        </span>
                    </div>
                </div>

                <!-- FOMO Progress Bar Kuota -->
                <div class="mt-3">
                    <div class="flex items-center justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                        <span>${isSoldOut ? 'Terjual Habis' : `Terjual ${sold}/${quota || '∞'}`}</span>
                        <span>${quota > 0 ? percentSold + '%' : 'Terbatas'}</span>
                    </div>
                    <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="h-full rounded-full transition-all duration-500 ${isSoldOut ? 'bg-slate-400' : 'bg-gradient-to-r from-amber-500 via-rose-500 to-red-600'}" style="width: ${isSoldOut ? 100 : Math.max(8, percentSold)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${isSoldOut ? `
                        <button type="button" disabled class="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>` : `
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${esc(prod.id)}', '${esc(item.variantName || '')}')" class="w-full py-2 rounded-xl text-white text-xs font-black bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 active:scale-95 transition-all shadow-sm shadow-rose-600/30 flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-cart-shopping text-xs"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] border border-rose-300/80 dark:border-rose-900/60 bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-900/90 dark:via-slate-900/90 dark:to-slate-900/90 p-4 sm:p-5 shadow-md">
        <!-- Dekorasi Efek Cahaya Latar -->
        <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-500/15 blur-2xl dark:bg-rose-500/10"></div>
        <div class="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-amber-500/15 blur-2xl dark:bg-amber-500/10"></div>

        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-rose-100 dark:border-rose-900/40 pb-3.5 mb-3.5">
            <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-red-600 to-amber-500 text-white shadow-md shadow-rose-600/30">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl animate-pulse"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="rounded-md bg-rose-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">PROMO SPESIAL</span>
                        <h3 class="text-base sm:text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-1.5">
                            ${esc(session.title || 'FLASH SALE KILAT')}
                        </h3>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer Block -->
            <div class="flex items-center gap-2 self-start sm:self-auto rounded-2xl bg-white dark:bg-slate-800/90 border border-rose-200 dark:border-rose-900/50 px-3 py-1.5 shadow-2xs">
                <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:inline">Berakhir:</span>
                <div class="flex items-center gap-1 font-mono font-black text-rose-600 dark:text-rose-400">
                    <span id="fs-cd-h" class="min-w-[24px] text-center rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 px-1.5 py-0.5 text-xs sm:text-sm text-rose-700 dark:text-rose-300">${cd.h}</span>
                    <span class="text-xs">:</span>
                    <span id="fs-cd-m" class="min-w-[24px] text-center rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 px-1.5 py-0.5 text-xs sm:text-sm text-rose-700 dark:text-rose-300">${cd.m}</span>
                    <span class="text-xs">:</span>
                    <span id="fs-cd-s" class="min-w-[24px] text-center rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 px-1.5 py-0.5 text-xs sm:text-sm text-rose-700 dark:text-rose-300">${cd.s}</span>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 hide-scrollbar snap-x">
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
        // Jika produk memiliki varian, buka modal produk agar pembeli memilih varian
        openProductModal(prodId);
        return;
    }

    // Jika tanpa varian atau varian sudah spesifik, masukkan langsung ke keranjang
    const vName = variantName || (prod.variants && prod.variants[0] ? prod.variants[0].name : '');
    const price = window.getEffP ? window.getEffP({ id: prod.id, price: prod.price, variantName: vName }) : prod.price;

    const existingIndex = cart.findIndex(c => String(c.id) === String(prod.id) && String(c.variantName || '') === String(vName || ''));
    if (existingIndex > -1) {
        cart[existingIndex].qty = (parseFloat(cart[existingIndex].qty) || 0) + 1;
    } else {
        cart.push({
            id: prod.id,
            name: prod.name,
            variantName: vName,
            price: price,
            img: prod.img || '',
            qty: 1,
            unit: prod.unit || 'pcs'
        });
    }

    try { localStorage.setItem('freshmart_cart', JSON.stringify(cart)); } catch(e) {}
    updCart();
    showToast(`"${prod.name}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`, 'success');
};

// Expose ke window
window.renderStorefrontFlashSale = renderStorefrontFlashSale;
window.quickBuyFlashSaleItem = quickBuyFlashSaleItem;

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
        <div class="group relative flex w-[172px] sm:w-[205px] md:w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start" style="transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;">
            <!-- Badge Diskon Petir Harmonis Tema -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1, discountPct)}%</span>
            </div>

            ${remaining <= 3 && !isSoldOut && quota > 0 ? `
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500/95 backdrop-blur-xs px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span>🔥 Sisa ${remaining}!</span>
            </div>` : ''}

            <!-- Foto Produk -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-2.5 flex items-center justify-center border-b border-slate-100 dark:border-slate-800" onclick="window.openProductModal && window.openProductModal('${esc(prod.id)}')">
                <img src="${esc(imgUrl)}" alt="${esc(prodName)}" loading="lazy" decoding="async" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108" onerror="this.src='/favicon.png'">
                ${isSoldOut ? `
                <div class="absolute inset-0 bg-slate-950/75 backdrop-blur-2xs flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md text-white" style="background: var(--color-primary-dark);">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>` : ''}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3">
                <div>
                    <h4 class="line-clamp-2 text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors" title="${esc(prodName + variantSuffix)}">
                        ${esc(prodName + variantSuffix)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat Harmonis -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                            ${fCur(normalPrice)}
                        </span>
                        <span class="text-sm sm:text-base font-black truncate leading-tight" style="color: var(--color-primary);">
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
                        <div class="h-full rounded-full transition-all duration-500 ${isSoldOut ? 'bg-slate-400' : ''}" style="${isSoldOut ? '' : 'background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);'} width: ${isSoldOut ? 100 : Math.max(8, percentSold)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${isSoldOut ? `
                        <button type="button" disabled class="btn-native-action w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>` : `
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${esc(prod.id)}', '${esc(item.variantName || '')}')" class="btn-native-action w-full py-2.5 rounded-xl text-white text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-bolt text-amber-300 text-xs"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5 shadow-xs border transition-all duration-300" style="border-color: rgba(var(--color-primary-rgb), 0.22);">
        <!-- Dekorasi Efek Cahaya Latar Harmonis Tema -->
        <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-35 dark:opacity-20" style="background: var(--color-primary);"></div>
        <div class="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl dark:bg-amber-500/10"></div>

        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b pb-3.5 mb-3.5" style="border-color: rgba(var(--color-primary-rgb), 0.12);">
            <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm" style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl text-amber-300 animate-pulse"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: var(--color-primary);">PROMO KILAT</span>
                        <h3 class="text-base sm:text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-1.5">
                            ${esc(session.title || 'FLASH SALE KILAT')}
                        </h3>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer Block Harmonis Tema -->
            <div class="flex items-center gap-2 self-start sm:self-auto rounded-2xl bg-white/90 dark:bg-slate-800/90 border px-3 py-1.5 shadow-2xs backdrop-blur-xs" style="border-color: rgba(var(--color-primary-rgb), 0.25);">
                <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:inline">Berakhir:</span>
                <div class="flex items-center gap-1 font-mono font-black" style="color: var(--color-primary);">
                    <span id="fs-cd-h" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${cd.h}</span>
                    <span>:</span>
                    <span id="fs-cd-m" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${cd.m}</span>
                    <span>:</span>
                    <span id="fs-cd-s" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${cd.s}</span>
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

/**
 * ============================================================
 * MODUL POS KASIR: SHEET PILIH VARIAN
 * Bottom drawer untuk memilih varian produk saat kasir klik
 * produk yang memiliki varian (warna/ukuran/tipe).
 * Mendukung tampilan harga per varian & qty pilih.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc, fCur, getOptImg, showToast } from '../../core/utils.js';

// ─── State ───────────────────────────────────────────────────
let _currentProductId  = null;
let _selectedVariantIdx = 0;
let _selectedQty       = 1;

const fRp = (n) => fCur(n);

// ─── Hitung harga grosir untuk produk non-varian ─────────────
const getWholesalePrice = (product, qty) => {
    if (!product || !product.wholesale || !product.wholesale.length) return null;
    const tiers = [...product.wholesale].sort((a, b) => b.minQty - a.minQty);
    for (const tier of tiers) {
        if (qty >= parseFloat(tier.minQty)) return parseFloat(tier.price);
    }
    return null;
};

// ─── Buka Sheet ──────────────────────────────────────────────
export const openPOSVariantSheet = (productId) => {
    _currentProductId  = String(productId);
    _selectedVariantIdx = 0;
    _selectedQty       = 1;

    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (!p) { showToast('Produk tidak ditemukan', 'warning'); return; }

    const modal  = el('pos-variant-sheet');
    const box    = el('pos-variant-sheet-box');
    if (!modal || !box) return;

    renderVariantSheetContent(p);

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (box) box.classList.remove('translate-y-full');
    }, 10);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const closePOSVariantSheet = () => {
    const modal = el('pos-variant-sheet');
    const box   = el('pos-variant-sheet-box');
    if (modal) modal.classList.add('opacity-0');
    if (box)   box.classList.add('translate-y-full');
    setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        _currentProductId  = null;
        _selectedVariantIdx = 0;
        _selectedQty       = 1;
    }, 300);
};

// ─── Render Konten Sheet ─────────────────────────────────────
const renderVariantSheetContent = (p) => {
    const vars = p.variants || [];
    const hasVariants = vars.length > 0;

    // Hitung harga & stok variant yang dipilih
    const getActiveVariant = () => hasVariants ? vars[_selectedVariantIdx] : null;
    const activeVar = getActiveVariant();
    const activePrice = hasVariants
        ? (parseFloat(activeVar?.price) || parseFloat(p.price) || 0)
        : (parseFloat(p.price) || 0);
    const activeStock = hasVariants ? (parseFloat(activeVar?.stock) || 0) : (parseFloat(p.stock) || 0);
    const activeStockStr = (appData.store?.useStock === true || appData.store?.useStock === 'true')
        ? `Stok: ${activeStock}`
        : 'Tersedia';

    const img = p.img ? getOptImg(p.img, 'w200-rw') : '';

    // Thumbnail
    const imgHtml = img
        ? `<img src="${esc(img)}" alt="${esc(p.name)}" class="w-full h-full object-cover">`
        : `<i class="fa-solid fa-box text-slate-300 text-2xl"></i>`;

    // Varian chips
    const variantsHtml = hasVariants ? vars.map((v, i) => {
        const varPrice = parseFloat(v.price) || parseFloat(p.price) || 0;
        const varStock = parseFloat(v.stock) || 0;
        const useStock = appData.store?.useStock === true || appData.store?.useStock === 'true';
        const isOutOfStock = useStock && varStock <= 0;
        const isActive = i === _selectedVariantIdx;
        const activeStyle = isActive
            ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]'
            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800';
        const outStyle = isOutOfStock ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]';
        // Tampilkan warna jika ada
        const colorDot = v.color
            ? `<span class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background:${esc(v.color)}"></span>`
            : '';
        return `<button
            onclick="${isOutOfStock ? '' : `window.selectPOSVariant(${i})`}"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${activeStyle} ${outStyle}"
            ${isOutOfStock ? 'disabled' : ''}>
            ${colorDot}
            <span class="truncate max-w-[80px]">${esc(v.name)}</span>
            ${isActive ? '<i class="fa-solid fa-check text-[8px] shrink-0"></i>' : ''}
        </button>`;
    }).join('') : '';

    // Harga grosir info (hanya untuk produk tanpa varian)
    let wholesaleHtml = '';
    if (!hasVariants && p.wholesale && p.wholesale.length > 0) {
        const tiers = [...p.wholesale].sort((a, b) => a.minQty - b.minQty);
        wholesaleHtml = `
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${tiers.map(t => `
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(t.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${fRp(parseFloat(t.price))}/pcs</span>
                </div>`).join('')}
            </div>
        </div>`;
    }

    // Harga efektif berdasarkan qty (untuk non-varian)
    const wholesalePrice = !hasVariants ? getWholesalePrice(p, _selectedQty) : null;
    const displayPrice   = wholesalePrice !== null ? wholesalePrice : activePrice;
    const subtotal       = displayPrice * _selectedQty;

    const priceHtml = wholesalePrice !== null ? `
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${fRp(wholesalePrice)}</span>
            <span class="text-xs text-slate-400 line-through">${fRp(activePrice)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>` : `<span class="text-base font-black" style="color:var(--color-primary)">${fRp(activePrice)}</span>`;

    const content = `
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${imgHtml}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words">${esc(p.name)}</h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${priceHtml}
                <span class="text-[10px] font-bold text-slate-400">${activeStockStr}</span>
            </div>
            ${hasVariants ? `<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${esc(vars[_selectedVariantIdx]?.name || '-')}</p>` : ''}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${hasVariants ? `
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${variantsHtml}
            </div>
        </div>` : wholesaleHtml}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${wholesalePrice !== null ? `<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>` : ''}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" min="1" value="${_selectedQty}" readonly
                    class="w-12 border-x border-slate-200 bg-transparent text-center text-sm font-extrabold focus:outline-none dark:border-slate-700 dark:text-white">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] active:scale-90"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60">
        <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${fRp(subtotal)}</span>
        </div>
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`;

    const contentEl = el('pos-variant-sheet-content');
    if (contentEl) contentEl.innerHTML = content;
};

// ─── Pilih Varian ────────────────────────────────────────────
export const selectPOSVariant = (idx) => {
    _selectedVariantIdx = idx;
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (p) renderVariantSheetContent(p);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

// ─── Update Qty ──────────────────────────────────────────────
export const updatePOSVariantQty = (delta) => {
    _selectedQty = Math.max(1, _selectedQty + delta);
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (p) renderVariantSheetContent(p);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('selection');
};

// ─── Konfirmasi Tambah ke Keranjang ─────────────────────────
export const confirmPOSVariantAdd = () => {
    if (!_currentProductId) return;
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (!p) return;

    const hasVariants = p.variants && p.variants.length > 0;

    if (hasVariants) {
        const v = p.variants[_selectedVariantIdx];
        if (!v) { showToast('Pilih varian terlebih dahulu', 'warning'); return; }
        // Cek stok varian
        const useStock = appData.store?.useStock === true || appData.store?.useStock === 'true';
        if (useStock && (parseFloat(v.stock) || 0) <= 0) {
            showToast('Stok varian ini habis', 'warning'); return;
        }
        if (typeof window.addToCartPOSWithVariant === 'function') {
            window.addToCartPOSWithVariant(p.id, v.name, parseFloat(v.price) || parseFloat(p.price) || 0, _selectedVariantIdx, _selectedQty);
        }
    } else {
        // Non varian — gunakan addToCart biasa dengan qty
        if (typeof window.posAddToCartQty === 'function') {
            window.posAddToCartQty(p.id, _selectedQty);
        }
    }

    closePOSVariantSheet();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('success');
};

// ─── Expose ke window ────────────────────────────────────────
window.openPOSVariantSheet    = openPOSVariantSheet;
window.closePOSVariantSheet   = closePOSVariantSheet;
window.selectPOSVariant       = selectPOSVariant;
window.updatePOSVariantQty    = updatePOSVariantQty;
window.confirmPOSVariantAdd   = confirmPOSVariantAdd;

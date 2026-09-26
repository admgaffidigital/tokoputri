/**
 * ============================================================
 * MODUL POS KASIR: SHEET PILIH VARIAN
 * Bottom drawer untuk memilih varian produk saat kasir klik
 * produk yang memiliki varian (warna/ukuran/tipe).
 * Mendukung tampilan harga per varian & qty pilih.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc, fCur, getOptImg, showToast, renderProductCoverHtml } from '../../core/utils.js';
import { getEffHpp } from '../../core/pricing.js';

// ─── State ───────────────────────────────────────────────────
let _currentProductId  = null;
let _selectedVariantIdx = 0;
let _selectedQty       = 1;

const fRp = (n) => fCur(n);
const fQty = (n) => {
    if (n == null) return 0;
    if (typeof n === 'string') n = n.replace(',', '.').trim();
    const val = parseFloat(n);
    return isNaN(val) ? 0 : Math.max(0, parseFloat(val.toFixed(3)));
};
const formatQty = (n) => {
    const val = parseFloat(n) || 0;
    return parseFloat(val.toFixed(3)).toString();
};

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

    // 1. Validasi Status Produk Aktif (Identik Storefront)
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    if (!pActive) {
        showToast('Produk ini sedang tidak tersedia', 'warning');
        return;
    }

    // 2. Validasi Stok Total Produk (Identik Storefront)
    const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
    if (useStk) {
        const totalAvail = (p.variants && p.variants.length)
            ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s, v) => s + (parseFloat(v.stock) || 0), 0)
            : (parseFloat(p.stock) || 0);
        if (totalAvail <= 0) {
            showToast('Maaf, stok produk ini sedang kosong', 'warning');
            return;
        }
    }

    // 3. Auto-select varian aktif pertama yang memiliki stok
    if (p.variants && p.variants.length > 0) {
        const found = p.variants.findIndex(v => {
            const isActive = v.isActive !== false && v.isActive !== 'false';
            const stock = parseFloat(v.stock) || 0;
            return isActive && (!useStk || stock > 0);
        });
        _selectedVariantIdx = found >= 0 ? found : 0;
    } else {
        _selectedVariantIdx = 0;
    }

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
    const useStock = appData.store?.useStock === true || appData.store?.useStock === 'true';

    // Hitung harga & stok variant yang dipilih
    const getActiveVariant = () => hasVariants ? vars[_selectedVariantIdx] : null;
    const activeVar = getActiveVariant();
    const activePrice = hasVariants
        ? (parseFloat(activeVar?.price) || parseFloat(p.price) || 0)
        : (parseFloat(p.price) || 0);
    const activeHpp = activeVar && activeVar.hpp != null ? (parseFloat(activeVar.hpp) || 0) : (parseFloat(p.hpp) || 0);
    const activeStock = hasVariants ? (parseFloat(activeVar?.stock) || 0) : (parseFloat(p.stock) || 0);
    const isVarActive = activeVar ? (activeVar.isActive !== false && activeVar.isActive !== 'false') : true;
    const isOutOfStock = useStock && activeStock <= 0;

    let activeStockStr = 'Tersedia';
    if (!isVarActive) {
        activeStockStr = 'Tidak Tersedia';
    } else if (useStock) {
        activeStockStr = isOutOfStock ? 'Stok Habis' : `Stok: ${formatQty(activeStock)}`;
    }

    const img = p.img ? getOptImg(p.img, 'w200-rw') : '';
    const coverThumb = renderProductCoverHtml(p, { size: 'thumb' });

    // Thumbnail
    const imgHtml = img
        ? `<img src="${esc(img)}" alt="${esc(p.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
           <div class="w-full h-full" style="display:none">${coverThumb}</div>`
        : coverThumb;

    // Varian chips
    const variantsHtml = hasVariants ? vars.map((v, i) => {
        const varPrice = parseFloat(v.price) || parseFloat(p.price) || 0;
        const varHpp   = v.hpp != null ? (parseFloat(v.hpp) || 0) : (parseFloat(p.hpp) || 0);
        const varStock = parseFloat(v.stock) || 0;
        const isVActive = v.isActive !== false && v.isActive !== 'false';
        const isVOutOfStock = useStock && varStock <= 0;
        const isDisabled = !isVActive || isVOutOfStock;
        const isActive = i === _selectedVariantIdx;
        const activeStyle = isActive
            ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]'
            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800';
        const outStyle = isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]';

        let labelSuffix = '';
        if (!isVActive) labelSuffix = ' (Nonaktif)';
        else if (isVOutOfStock) labelSuffix = ' (Habis)';

        // Tampilkan warna jika ada
        const colorDot = v.color
            ? `<span class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background:${esc(v.color)}"></span>`
            : '';
        return `<button
            onclick="${isDisabled ? '' : `window.selectPOSVariant(${i})`}"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${activeStyle} ${outStyle}"
            ${isDisabled ? 'disabled' : ''}>
            ${colorDot}
            <div class="flex flex-col items-start min-w-0">
                <span class="truncate max-w-[120px]">${esc(v.name)}${labelSuffix}</span>
                <div class="flex items-center gap-1.5 text-[9px]">
                    <span class="text-slate-500 font-bold">${fRp(varPrice)}</span>
                    ${varHpp > 0 ? `<span class="text-amber-600 dark:text-amber-400 font-black">HPP: ${fRp(varHpp)}</span>` : ''}
                </div>
            </div>
            ${isActive ? '<i class="fa-solid fa-check text-[8px] shrink-0 ml-1"></i>' : ''}
        </button>`;
    }).join('') : '';

    // Badge Pre-Order jika produk memiliki estimasi PO
    const poPill = p.poTime
        ? `<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>`
        : '';

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
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${esc(p.name)}</span>
                ${poPill}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${priceHtml}
                <span class="text-[10px] font-bold text-slate-400">${activeStockStr}</span>
                ${activeHpp > 0 ? `<span class="inline-flex items-center gap-1 text-[10px] font-black text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300/80 dark:border-amber-700 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${fRp(activeHpp)}</span>` : ''}
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
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${formatQty(_selectedQty)}" onchange="window.setPOSVariantQty(this.value)"
                    class="w-14 border-x border-slate-200 bg-transparent text-center text-sm font-extrabold focus:outline-none dark:border-slate-700 dark:text-white px-1">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60">
        <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${fRp(subtotal)}</span>
        </div>
        ${activeHpp > 0 ? `
        <div class="flex items-center justify-between mb-3 text-[10px]">
            <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP): <b class="text-amber-600 dark:text-amber-400 font-bold">${fRp(activeHpp * _selectedQty)}</b></span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Untung: +${fRp(Math.max(0, subtotal - (activeHpp * _selectedQty)))}</span>
        </div>` : '<div class="mb-2"></div>'}
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
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
    let q = parseFloat((_selectedQty + delta).toFixed(3));
    _selectedQty = Math.max(0.01, q);
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (p) renderVariantSheetContent(p);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('selection');
};

export const setPOSVariantQty = (val) => {
    let q = fQty(val);
    if (q <= 0) q = 0.01;
    _selectedQty = q;
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (p) renderVariantSheetContent(p);
};

// ─── Konfirmasi Tambah ke Keranjang ─────────────────────────
export const confirmPOSVariantAdd = () => {
    if (!_currentProductId) return;
    const p = (appData.products || []).find(x => x && String(x.id) === _currentProductId);
    if (!p) return;

    // 1. Validasi Status Produk Aktif
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    if (!pActive) {
        showToast('Produk ini sedang tidak tersedia', 'warning');
        return;
    }

    const hasVariants = p.variants && p.variants.length > 0;
    const useStock = appData.store?.useStock === true || appData.store?.useStock === 'true';
    const posCart = typeof window.getPOSCart === 'function' ? window.getPOSCart() : (window.__getPOSCart ? window.__getPOSCart() : []);

    if (hasVariants) {
        const v = p.variants[_selectedVariantIdx];
        if (!v) { showToast('Pilih varian terlebih dahulu', 'warning'); return; }

        // 2. Validasi Varian Aktif
        const vActive = v.isActive !== false && v.isActive !== 'false';
        if (!vActive) {
            showToast('Varian ini sedang tidak tersedia', 'warning');
            return;
        }

        // 3. Validasi Stok Varian & Akumulasi Keranjang
        if (useStock) {
            const vStock = parseFloat(v.stock) || 0;
            if (vStock <= 0) {
                showToast(`Maaf, stok varian "${v.name}" sedang kosong!`, 'warning');
                return;
            }
            const cartKey = `${p.id}__v${_selectedVariantIdx}`;
            const existing = (posCart || []).find(i => i.cartKey === cartKey);
            const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;
            if (inCartQty + _selectedQty > vStock) {
                showToast(`Stok varian "${v.name}" tidak cukup! Sisa: ${formatQty(vStock)}`, 'warning');
                return;
            }
        }

        if (typeof window.addToCartPOSWithVariant === 'function') {
            const added = window.addToCartPOSWithVariant(p.id, v.name, parseFloat(v.price) || parseFloat(p.price) || 0, _selectedVariantIdx, _selectedQty);
            if (!added) return;
        }
    } else {
        // Non varian — gunakan posAddToCartQty
        if (useStock) {
            const pStock = parseFloat(p.stock) || 0;
            if (pStock <= 0) {
                showToast(`Maaf, stok "${p.name}" sedang kosong!`, 'warning');
                return;
            }
            const existing = (posCart || []).find(i => String(i.id) === String(p.id) && !i.isVariant);
            const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;
            if (inCartQty + _selectedQty > pStock) {
                showToast(`Stok "${p.name}" tidak cukup! Sisa: ${formatQty(pStock)}`, 'warning');
                return;
            }
        }

        if (typeof window.posAddToCartQty === 'function') {
            const added = window.posAddToCartQty(p.id, _selectedQty);
            if (!added) return;
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
window.setPOSVariantQty       = setPOSVariantQty;
window.confirmPOSVariantAdd   = confirmPOSVariantAdd;

/**
 * ============================================================
 * MODUL FAVORIT / WISHLIST
 * Mengatur penambahan produk ke favorit, update badge wishlist,
 * hapus produk dari wishlist, pindahkan ke keranjang belanja,
 * dan bersihkan seluruh wishlist.
 * ============================================================
 */

import { wishlist, cart, appData } from '../../core/state.js';
import { 
    el, show, hide, setH, esc, fCur, ssL, 
    showToast, showConfirm 
} from '../../core/utils.js';
import { updCart, renderCart } from './cart.js';

/**
 * Update badge counter favorit di navigasi
 */
export const updWish = () => { 
    const b = el('wishlist-badge'); 
    if (b) { 
        b.innerText = wishlist.length; 
        b.classList.toggle('scale-0', !wishlist.length); 
    } 
};

/**
 * Hapus 1 item dari favorit
 */
export const rmWish = (i) => { 
    wishlist.splice(i, 1); 
    ssL('freshmart_wishlist', JSON.stringify(wishlist)); 
    updWish(); 
    renderWish(); 
};

/**
 * Pindahkan item dari favorit ke keranjang belanja
 */
export const moveWish = (i) => {
    const it = wishlist[i];
    const p = appData.products?.find(x => x.id === it.id);
    if (!p || p.isActive === 'false' || p.isActive === false) {
        return showToast(`${it.name} sudah tidak tersedia.`);
    }
    const v = it.variantName ? (p.variants || []).find(vv => vv.name === it.variantName) : null;
    const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
    if (useStk) {
        if (it.variantName && (!v || v.isActive === false || v.isActive === 'false')) {
            return showToast(`Varian ${it.variantName} sudah tidak tersedia.`);
        }
        const avail = v ? (parseFloat(v.stock) || 0) : (parseFloat(p.stock) || 0);
        const inCart = cart.find(c => c.id === it.id && c.variantName === it.variantName);
        const alreadyInCart = inCart ? (parseFloat(inCart.qty) || 0) : 0;
        if (avail <= 0 || alreadyInCart >= avail) {
            return showToast(`Stok ${it.name} tidak mencukupi!`);
        }
    }
    const e = cart.find(c => c.id === it.id && c.variantName === it.variantName);
    if (e) {
        e.qty = parseFloat((e.qty + 1).toFixed(2));
    } else {
        const itemPoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(p.poin) || 0);
        cart.push({
            id: p.id, 
            name: p.name, 
            variantName: it.variantName || '',
            price: v ? v.price : p.price, 
            img: v?.img || p.img, 
            qty: 1,
            unit: p.unit || 'pcs', 
            poTime: p.poTime || '', 
            colorCode: v?.colorCode || '',
            poin: itemPoin
        });
    }
    updCart(); 
    showToast("Ke Keranjang!");
    if (typeof window.curViewName !== 'undefined' && window.curViewName === 'view-cart') {
        renderCart();
    }
};

/**
 * Bersihkan seluruh produk di wishlist
 */
export const clearWishlist = () => { 
    showConfirm("Hapus Favorit", "Yakin ingin menghapus semua?", () => { 
        wishlist.length = 0; 
        ssL('freshmart_wishlist', JSON.stringify(wishlist)); 
        updWish(); 
        renderWish(); 
        showToast("Dibersihkan"); 
    }); 
};

/**
 * Render halaman favorit
 */
export const renderWish = () => {
    if (!wishlist.length) { 
        show('wishlist-empty-state'); 
        hide('btn-clear-wishlist'); 
        show('spacer-wishlist'); 
        setH('wishlist-items-container', ''); 
        return; 
    }
    hide('wishlist-empty-state'); 
    show('btn-clear-wishlist'); 
    hide('spacer-wishlist');
    setH('wishlist-items-container', wishlist.map((i, x) => {
        let colorIndicator = i.colorCode ? `<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${esc(i.colorCode)};"></span>` : '';
        
        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmWish(${x})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${esc(i.name)}</h4>
                
                ${i.variantName ? `<div class="mb-2 flex items-center gap-1.5">${colorIndicator}<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${esc(i.variantName)}</span></div>` : ''}
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${fCur(i.price)}</p>
                    <button onclick="moveWish(${x})" class="h-9 px-5 rounded-xl bg-[var(--color-primary)] hover:opacity-90 text-white border border-[var(--color-primary)] text-xs font-bold transition-colors active:scale-95 shadow-glow flex items-center gap-1.5"><i class="fa-solid fa-cart-plus"></i> Beli</button>
                </div>
            </div>
        </div>`;
    }).join(''));
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.updWish = updWish;
window.rmWish = rmWish;
window.moveWish = moveWish;
window.clearWishlist = clearWishlist;
window.renderWish = renderWish;

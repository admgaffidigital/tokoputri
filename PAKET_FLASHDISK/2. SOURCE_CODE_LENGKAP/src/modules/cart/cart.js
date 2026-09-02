/**
 * ============================================================
 * MODUL KERANJANG BELANJA (CART)
 * Mengatur item belanja, jumlah (qty), badge keranjang,
 * validasi stok per varian, dan penyimpanan ke localStorage.
 * ============================================================
 */

import { appData, cart, setCart } from '../../core/state.js';
import { el, show, hide, setIn, setH, esc, fCur, ssL } from '../../core/utils.js';

/**
 * Membersihkan keranjang dari produk atau varian yang sudah dihapus/dinonaktifkan Admin
 */
export const sanitizeCart = () => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const cleanCart = cart.filter(c => {
        const p = appData.products.find(x => x.id === c.id);
        if (!p || p.isActive === 'false' || p.isActive === false) return false;
        
        if (c.variantName) {
            const v = (p.variants || []).find(vv => vv.name === c.variantName);
            if (!v) return false;
            if (v.isActive === false || v.isActive === 'false') return false;
            if (useStk && (parseFloat(v.stock) || 0) <= 0) return false;
        } else {
            if (useStk && (parseFloat(p.stock) || 0) <= 0) return false;
        }
        return true;
    });
    setCart(cleanCart);
    ssL('freshmart_cart', JSON.stringify(cart));
};

/**
 * Perbarui indikator badge dan total preview keranjang
 */
export const updCart = () => {
    ssL('freshmart_cart', JSON.stringify(cart));
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);
    const q = parseFloat(cart.reduce((s, i) => s + (parseFloat(i.qty) || 0), 0).toFixed(2));
    const a = cart.reduce((s, i) => s + getEffP(i) * (parseFloat(i.qty) || 0), 0);
    
    setIn('cart-badge', q.toString());
    setIn('cart-total-preview', fCur(a));
    const b = el('cart-badge');
    if (b) b.classList.toggle('scale-0', q <= 0);
    
    // Tampilkan / sembunyikan floating FAB secara dinamis
    const fc = el('floating-cart-container');
    if (fc) {
        if (q > 0) {
            fc.classList.remove('scale-0', 'pointer-events-none');
            fc.classList.add('scale-100', 'pointer-events-auto');
        } else {
            fc.classList.remove('scale-100', 'pointer-events-auto');
            fc.classList.add('scale-0', 'pointer-events-none');
        }
    }
};

/**
 * Render halaman tampilan keranjang belanja
 */
export const renderCart = () => {
    if (!cart.length) { 
        show('cart-empty-state'); 
        hide('cart-bottom-bar'); 
        hide('btn-clear-cart'); 
        show('spacer-cart'); 
        setH('cart-items-container', ''); 
        return; 
    }
    
    hide('cart-empty-state'); 
    show('cart-bottom-bar'); 
    show('btn-clear-cart'); 
    hide('spacer-cart');
    
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);
    let s = 0;
    
    setH('cart-items-container', cart.map((i, x) => {
        let q = parseFloat(i.qty) || 0;
        let e = getEffP(i), w = e < i.price;
        s += e * q;
        
        let colorIndicator = i.colorCode 
            ? `<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${esc(i.colorCode)};"></span>` 
            : '';

        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${x})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${esc(i.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${w ? `<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>` : ''}
                    ${colorIndicator}
                    ${i.variantName ? `<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${esc(i.variantName)}</span>` : ''}
                    ${i.poTime ? `<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${esc(i.poTime)}</span>` : ''}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${w ? `<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${fCur(i.price)}</p>` : ''}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${fCur(e)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${esc(i.unit || 'pcs')}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${x}, -1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${q}" onchange="setCQty(${x}, this.value)">
                        <button onclick="updCQty(${x}, 1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] dark:text-slate-400 dark:hover:text-[var(--color-primary)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.12)] font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    }).join(''));
    
    setIn('cart-subtotal', fCur(s));
};

/**
 * Atur kuantitas barang secara langsung dari input angka
 */
export const setCQty = (i, v) => {
    let nv = parseFloat(v);
    if (isNaN(nv) || nv <= 0) { 
        cart.splice(i, 1); 
    } else {
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk) {
            const ci = cart[i];
            const p = appData.products.find(x => x.id === ci.id);
            if (p) {
                const avail = ci.variantName
                    ? (parseFloat(((p.variants || []).find(vv => vv.name === ci.variantName) || {}).stock) || 0)
                    : (parseFloat(p.stock) || 0);
                if (nv > avail) { 
                    nv = avail; 
                    if (typeof window.showToast === 'function') window.showToast(`Maks stok: ${avail}`); 
                }
            }
        }
        cart[i].qty = parseFloat(nv.toFixed(2));
    }
    renderCart(); 
    updCart();
};

/**
 * Tambah / kurangi kuantitas item dengan tombol + atau -
 */
export const updCQty = (i, c) => {
    let nv = parseFloat((parseFloat(cart[i].qty) + c).toFixed(2));
    if (nv <= 0) { 
        cart.splice(i, 1); 
    } else {
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk && c > 0) {
            const ci = cart[i];
            const p = appData.products.find(x => x.id === ci.id);
            if (p) {
                const avail = ci.variantName
                    ? (parseFloat(((p.variants || []).find(vv => vv.name === ci.variantName) || {}).stock) || 0)
                    : (parseFloat(p.stock) || 0);
                if (nv > avail) { 
                    nv = avail; 
                    if (typeof window.showToast === 'function') window.showToast(`Maks stok: ${avail}`); 
                }
            }
        }
        cart[i].qty = nv;
    }
    renderCart(); 
    updCart();
};

/**
 * Hapus satu item dari keranjang
 */
export const rmCart = i => { 
    cart.splice(i, 1); 
    renderCart(); 
    updCart(); 
};

/**
 * Hapus seluruh isi keranjang dengan konfirmasi dialog
 */
export const clearCart = () => { 
    if (typeof window.showConfirm === 'function') {
        window.showConfirm("Kosongkan Keranjang", "Semua barang akan dihapus. Lanjutkan?", () => { 
            setCart([]); 
            updCart(); 
            renderCart(); 
            if (typeof window.showToast === 'function') window.showToast("Dibersihkan"); 
        });
    } else {
        setCart([]);
        updCart();
        renderCart();
    }
};

/**
 * Validasi sebelum menuju form checkout pelanggan
 */
export const validateCartToCheckout = () => {
    if (window.isAdm) {
        if (typeof window.showConfirm === 'function') {
            window.showConfirm(
                "Akses Ditolak",
                "Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",
                () => { if (typeof window.logoutAdmin === 'function') window.logoutAdmin(); },
                "Logout Sekarang",
                false
            );
        }
        return;
    }
    if (!cart.length) return;
    if (typeof window.changeView === 'function') window.changeView('view-checkout');
};

// ─── Expose ke window untuk kompatibilitas onclick di HTML ──────
window.sanitizeCart = sanitizeCart;
window.updCart = updCart;
window.renderCart = renderCart;
window.setCQty = setCQty;
window.updCQty = updCQty;
window.rmCart = rmCart;
window.clearCart = clearCart;
window.validateCartToCheckout = validateCartToCheckout;

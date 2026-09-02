/**
 * ============================================================
 * MODUL VOUCHER & KUPON DISKON
 * Mengatur validasi kode voucher, batas minimal belanja,
 * diskon produk dan diskon ongkos kirim.
 * ============================================================
 */

import { appData, cart, vouch, setVouch, cust } from '../../core/state.js';
import { el, show, hide, getV, setH, fCur } from '../../core/utils.js';

/**
 * Terapkan kode voucher yang dimasukkan pembeli saat checkout
 */
export const applyVoucher = () => {
    const inputEl = el('voucher-input');
    const i = (getV('voucher-input') || '').toUpperCase().trim();
    const f = (appData.vouchers || []).find(v => (v.code || '').toUpperCase() === i);
    show('voucher-msg-container');
    
    // Hitung subtotal produk di keranjang saat ini
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (item => item.effectivePrice || item.price || 0);
    const currentSubtotal = cart.reduce((s, item) => s + (parseFloat(getEffP(item)) || 0) * (parseFloat(item.qty) || 0), 0);
    
    if (f) {
        let hasTarget = true;
        
        // Cek apakah produk yang ditargetkan ada di keranjang
        if (f.targetProduct && f.targetProduct !== '') {
            const targetId = parseInt(f.targetProduct);
            hasTarget = cart.some(item => item.id === targetId);
        }

        if (f.targetProduct && f.targetProduct !== '' && !hasTarget) {
            setVouch(null);
            setH('voucher-msg', `<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!`);
            if (el('voucher-msg')) el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
        }
        else if (f.minPurchase && parseFloat(f.minPurchase) > 0 && currentSubtotal < parseFloat(f.minPurchase)) {
            setVouch(null);
            setH('voucher-msg', `<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${fCur(f.minPurchase)}`);
            if (el('voucher-msg')) el('voucher-msg').className = "text-sm font-bold text-amber-500 dark:text-amber-400";
        } 
        else if (f.type && f.type.includes('shipping') && cust.deliveryMethod !== 'delivery') {
            setVouch(null);
            setH('voucher-msg', `<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!`);
            if (el('voucher-msg')) el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
        }
        else {
            setVouch(f);
            setH('voucher-msg', `<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!`);
            if (el('voucher-msg')) el('voucher-msg').className = "text-sm font-bold text-[var(--color-primary)]";
        }
    } else if (i === '') {
        setVouch(null); 
        hide('voucher-msg-container');
        if (typeof window.rPay === 'function') window.rPay();
    } else {
        setVouch(null);
        setH('voucher-msg', `<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid`);
        if (el('voucher-msg')) el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
    }
    
    if (typeof window.rPay === 'function') window.rPay();
};

// ─── Expose ke window ─────────────────────────────────────────
window.applyVoucher = applyVoucher;

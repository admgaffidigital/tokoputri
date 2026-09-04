/**
 * ============================================================
 * MODUL VOUCHER & KUPON DISKON
 * Mengatur validasi kode voucher, batas minimal belanja,
 * diskon produk, diskon ongkos kirim, dan modal kupon promo.
 * ============================================================
 */

import { appData, cart, vouch, setVouch, cust } from '../../core/state.js';
import { el, show, hide, getV, setH, fCur, esc } from '../../core/utils.js';

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

/**
 * Buka modal daftar Kupon Promo Aktif
 */
export const openVoucherModal = () => {
    let m = document.getElementById('voucher-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'voucher-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeVoucherModal(); };
        document.body.appendChild(m);
    }

    const activeVouchers = (appData.vouchers || []).filter(v => v.isShow !== false && v.isShow !== 'false');

    const voucherListHtml = activeVouchers.length ? activeVouchers.map(v => {
        let discText = '';
        if (v.type === 'percent') discText = `Diskon ${v.value}%`;
        else if (v.type === 'shipping_free') discText = `Gratis Ongkir`;
        else if (v.type === 'shipping_flat') discText = `Diskon Ongkir ${fCur(v.value)}`;
        else discText = `Potongan ${fCur(v.value)}`;

        const minText = v.minPurchase && parseFloat(v.minPurchase) > 0 ? `Min. belanja ${fCur(v.minPurchase)}` : 'Tanpa minimal belanja';

        return `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${esc(v.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${discText}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${minText}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${esc(v.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${esc(v.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`;
    }).join('') : `
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;

    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${voucherListHtml}
            </div>
        </div>`;

    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('voucher');
};

/**
 * Salin kode voucher ke clipboard
 */
export const copyVoucherCode = (code) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => {
            if (typeof window.showToast === 'function') window.showToast(`✅ Kode "${code}" disalin ke clipboard!`);
        }).catch(() => {
            if (typeof window.showToast === 'function') window.showToast(`Kode Kupon: ${code}`);
        });
    } else {
        if (typeof window.showToast === 'function') window.showToast(`Kode Kupon: ${code}`);
    }
};

/**
 * Gunakan voucher langsung
 */
export const useVoucherCode = (code) => {
    closeVoucherModal();
    const vInput = el('voucher-input');
    if (vInput) {
        vInput.value = code;
        applyVoucher();
    }
    if (cart.length > 0) {
        if (typeof window.changeView === 'function') window.changeView('view-checkout');
    } else {
        if (typeof window.showToast === 'function') window.showToast(`Kode "${code}" siap digunakan saat checkout belanja!`);
        if (typeof window.changeView === 'function') window.changeView('view-catalog');
    }
};

/**
 * Tutup modal voucher
 */
export const closeVoucherModal = () => {
    const m = document.getElementById('voucher-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0';
    m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => {
        m.style.display = 'none';
        m.style.opacity = '';
        m.style.transition = '';
    }, 250);
};

// ─── Expose ke window ─────────────────────────────────────────
window.applyVoucher = applyVoucher;
window.openVoucherModal = openVoucherModal;
window.closeVoucherModal = closeVoucherModal;
window.copyVoucherCode = copyVoucherCode;
window.useVoucherCode = useVoucherCode;

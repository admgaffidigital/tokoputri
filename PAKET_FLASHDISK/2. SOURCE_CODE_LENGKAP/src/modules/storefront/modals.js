/**
 * ============================================================
 * MODUL STOREFRONT: MODAL KATEGORI, BRAND & INFORMASI TOKO
 * Mengatur modal daftar kategori, grid logo merek, quick menu
 * navigasi cepat, syarat & ketentuan (terms), serta kebijakan privasi.
 * ============================================================
 */

import { appData, aCat, aBrand, setACat, setABrand, setCPage, oMods } from '../../core/state.js';
import { el, show, hide, setH, esc, openModalAnim, closeModalAnim } from '../../core/utils.js';
import { curViewName, changeView, pushModalHistory, requestCloseModal } from '../../core/router.js';

// Fungsi Filter Global untuk Kategori dan Merek
window.setCat = c => { setACat(c); setCPage(1); if (typeof window.rCat === 'function') window.rCat(); };
window.setBrand = b => { setABrand(b); setCPage(1); if (typeof window.rCat === 'function') window.rCat(); };

export const openCategoryModal = () => {
    let h = ``;
    let isActiveAll = aCat === 'Semua Produk';

    // FIX TAMPILAN: kategori sekarang daftar list ke bawah (1 baris penuh per kategori),
    // bukan grid kotak-kotak lagi. Logo merek (openBrandModal di bawah) TIDAK diubah, tetap grid.
    h += `
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActiveAll ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isActiveAll ? 'bg-[var(--color-primary)] text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]'} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-300 dark:text-slate-600'}"></i>
    </button>`;

    appData.categories.forEach(c => {
        let isActive = aCat === c.name;
        // Ikon kategori tetap bisa diganti gambar custom (di Pengaturan > Kategori); kalau kosong, fallback ke ikon default
        let imgH = c.img ? `<img loading="lazy" src="${esc(c.img)}" alt="${esc(c.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">` : `<i class="fa-solid fa-box text-base sm:text-lg"></i>`;
        h += `
        <button onclick="setCat('${esc(c.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActive ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">${esc(c.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-300 dark:text-slate-600'}"></i>
        </button>`;
    });
    
    const container = el('modal-category-list');
    if(container) { container.innerHTML = `<div class="flex flex-col gap-2.5 pb-6 w-full">${h}</div>`; }

    const m = el('category-modal'), c = el('category-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('category');
        openModalAnim(m, c);
    }
};
window.openCategoryModal = openCategoryModal;

window.openBrandModal = () => {
    let h = ``;
    let isActiveAll = aBrand === 'Semua Merek';
    
    h += `
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${isActiveAll ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${isActiveAll ? 'bg-[var(--color-primary)] text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]'} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">SEMUA MEREK</span>
    </button>`;

    appData.brands.forEach(b => {
        let isActive = aBrand === b.name;
        let imgH = b.img ? `<img loading="lazy" src="${esc(b.img)}" alt="${esc(b.name)}" class="w-full h-full object-contain p-1.5" >` : `<i class="fa-solid fa-tag text-lg sm:text-xl"></i>`;
        h += `
        <button onclick="setBrand('${esc(b.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${isActive ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">${esc(b.name)}</span>
        </button>`;
    });
    
    const container = el('modal-brand-grid');
    if(container) { container.innerHTML = h; }

    const m = el('brand-modal'), c = el('brand-modal-content');
    if(m && c){
        if (m.classList.contains('hidden')) pushModalHistory('brand');
        openModalAnim(m, c);
    }
};

window.closeCategoryModal = (fH=false) => {
    const m = el('category-modal'), c = el('category-modal-content');
    if (m && c) {
        requestCloseModal('category', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.closeBrandModal = (fH=false) => {
    const m = el('brand-modal'), c = el('brand-modal-content');
    if(m && c){
        requestCloseModal('brand', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.openQuickMenuModal = () => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if(m && c){
        if (m.classList.contains('hidden')) pushModalHistory('quickmenu');
        openModalAnim(m, c);
    }
};

window.openTermsModal = () => {
    const defaultTerms = `
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-file-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Dengan mengakses dan bertransaksi di website <b>Toko Putri</b>, Anda menyetujui seluruh syarat dan ketentuan layanan yang berlaku berikut ini:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Ketentuan Umum</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Pemesanan &amp; Hubungi Admin</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Pembayaran</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Retur &amp; Barang PO</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.
          </p>
        </div>
      </div>
    `;
    const rawTerms = appData?.store?.terms;
    const content = rawTerms 
        ? (rawTerms.includes('<') ? rawTerms : `<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${rawTerms}</div>`) 
        : defaultTerms;
    setH('terms-modal-content-body', content);
    
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('terms');
        openModalAnim(m, c);
    }
};

window.closeTermsModal = (fH=false) => {
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        requestCloseModal('terms', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.openPrivacyModal = () => {
    const defaultPrivacy = `
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Keamanan data dan privasi Anda adalah prioritas utama kami di <b>Toko Putri</b>. Berikut komitmen perlindungan data pelanggan:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Data Yang Kami Kumpulkan</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kerahasiaan Data</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Keamanan Data Transaksi</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.
          </p>
        </div>
      </div>
    `;
    const rawPrivacy = appData?.store?.privacy;
    const content = rawPrivacy 
        ? (rawPrivacy.includes('<') ? rawPrivacy : `<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${rawPrivacy}</div>`) 
        : defaultPrivacy;
    setH('privacy-modal-content-body', content);
    
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('privacy');
        openModalAnim(m, c);
    }
};

window.closePrivacyModal = (fH=false) => {
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        requestCloseModal('privacy', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.closeQuickMenuModal = (fH=false) => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if (m && c) {
        requestCloseModal('quickmenu', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.openShoppingGuideModal = () => {
    const m = el('shopping-guide-modal'), c = el('shopping-guide-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('guide');
        openModalAnim(m, c);
    }
};

window.closeShoppingGuideModal = (fH=false) => {
    const m = el('shopping-guide-modal'), c = el('shopping-guide-modal-content');
    if (m && c) {
        requestCloseModal('guide', fH, () => {
            closeModalAnim(m, c);
        });
    }
};

window.navigateFromQuickMenu = (targetViewOrAction) => {
    closeQuickMenuModal(true);
    const idx = oMods.indexOf('quickmenu');
    if (idx > -1) oMods.splice(idx, 1);
    
    if (typeof targetViewOrAction === 'function') {
        history.replaceState({view: curViewName}, '', window.location.href);
        targetViewOrAction();
    } else {
        history.replaceState({view: targetViewOrAction}, '', window.location.href);
        changeView(targetViewOrAction, true);
    }
};



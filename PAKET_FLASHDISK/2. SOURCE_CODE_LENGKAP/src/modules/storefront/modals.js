/**
 * ============================================================
 * MODUL STOREFRONT: MODAL KATEGORI, BRAND & INFORMASI TOKO
 * Mengatur modal daftar kategori, grid logo merek, quick menu
 * navigasi cepat, syarat & ketentuan (terms), serta kebijakan privasi.
 * ============================================================
 */

import { appData, aCat, aBrand, setACat, setABrand, setCPage, oMods } from '../../core/state.js';
import { el, show, hide, setH, esc } from '../../core/utils.js';
import { curViewName, changeView } from '../../core/router.js';

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
        show('category-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.openBrandModal = () => {
    let h = ``;
    let isActiveAll = aBrand === 'Semua Merek';
    
    h += `
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActiveAll ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${isActiveAll ? 'bg-[var(--color-primary)] text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]'} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">SEMUA MEREK</span>
    </button>`;

    appData.brands.forEach(b => {
        let isActive = aBrand === b.name;
        let imgH = b.img ? `<img loading="lazy" src="${esc(b.img)}" alt="${esc(b.name)}" class="w-full h-full object-contain p-1.5" >` : `<i class="fa-solid fa-tag text-lg sm:text-xl"></i>`;
        h += `
        <button onclick="setBrand('${esc(b.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActive ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
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
        show('brand-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closeCategoryModal = (fH=false) => {
    const m = el('category-modal'), c = el('category-modal-content');
    if (m && c) {
        requestCloseModal('category', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('category-modal'), 300);
        });
    }
};

window.closeBrandModal = (fH=false) => {
    const m = el('brand-modal'), c = el('brand-modal-content');
    if(m && c){
        requestCloseModal('brand', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('brand-modal'), 300);
        });
    }
};

window.openQuickMenuModal = () => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if(m && c){
        if (m.classList.contains('hidden')) pushModalHistory('quickmenu');
        show('quickmenu-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.openTermsModal = () => {
    const defaultTerms = `
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">1. Ketentuan Umum</h4>
        <p class="leading-relaxed">Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">2. Pemesanan &amp; Hubungi Admin</h4>
        <p class="leading-relaxed">Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">3. Kebijakan Pembayaran</h4>
        <p class="leading-relaxed">Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">4. Kebijakan Retur &amp; Barang PO</h4>
        <p class="leading-relaxed">Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.</p>
      </div>
    `;
    const terms = appData.store.terms || defaultTerms;
    setH('terms-modal-content-body', terms.replace(/\n/g, '<br>'));
    
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('terms');
        show('terms-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closeTermsModal = (fH=false) => {
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        requestCloseModal('terms', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('terms-modal'), 300);
        });
    }
};

window.openPrivacyModal = () => {
    const defaultPrivacy = `
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">1. Data Yang Kami Kumpulkan</h4>
        <p class="leading-relaxed">Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">2. Kerahasiaan Data</h4>
        <p class="leading-relaxed">Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">3. Keamanan Data Transaksi</h4>
        <p class="leading-relaxed">Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.</p>
      </div>
    `;
    const privacy = appData.store.privacy || defaultPrivacy;
    setH('privacy-modal-content-body', privacy.replace(/\n/g, '<br>'));
    
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('privacy');
        show('privacy-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closePrivacyModal = (fH=false) => {
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        requestCloseModal('privacy', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('privacy-modal'), 300);
        });
    }
};

window.closeQuickMenuModal = (fH=false) => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if (m && c) {
        requestCloseModal('quickmenu', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('quickmenu-modal'), 300);
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


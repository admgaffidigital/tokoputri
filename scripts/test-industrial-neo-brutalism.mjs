/**
 * ============================================================
 * TEST SUITE: INDUSTRIAL NEO-BRUTALISM & FULL NATIVE APP ENGINE
 * Toko Putri (Putri Utama Teknik) — v1.20.0
 * 
 * Verifikasi arsitektural:
 * 1. Standarisasi Token CSS (:root variables, 2px borders, hard shadows, safety accents).
 * 2. Konsistensi Komponen Utama (.neo-box, .neo-card, .neo-btn, .neo-badge, .neo-input).
 * 3. Integrasi Taktil & Ergonomi Native (Mechanical switch press translate, min-h 44px).
 * 4. Integrasi Storefront (Hero Banner, Promo Banner, Catalog Product Cards & Badges).
 * 5. Integrasi POS Kasir (Customer Types, Pay Methods, Quick Cash, Paid Input, Pay CTA).
 * 6. Isolasi Keamanan Thermal Print & Dokumen A4 (Zero shadow leak guarantee).
 * ============================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ✅ PASS: ${message}`);
    } else {
        console.error(`  ❌ FAIL: ${message}`);
    }
}

console.log('============================================================');
console.log('🛠️  TEST SUITE: INDUSTRIAL NEO-BRUTALISM & NATIVE APP ENGINE');
console.log('============================================================\n');

// ─── 1. Verifikasi CSS Tokens di src/style.css ─────────────────
console.log('📐 1. Memeriksa Token Desain Industrial di src/style.css...');
const cssPath = path.join(rootDir, 'src', 'style.css');
assert(fs.existsSync(cssPath), 'Berkas src/style.css tersedia');
const cssContent = fs.readFileSync(cssPath, 'utf-8');

assert(
    cssContent.includes('--neo-border-width: 2px;') &&
    cssContent.includes('--neo-border-color: #0f172a;'),
    'Token border tebal industrial (--neo-border-width: 2px) terdefinisi'
);

assert(
    cssContent.includes('--neo-shadow-md: 2.5px 2.5px 0px #0f172a;') &&
    cssContent.includes('--neo-shadow-dark-md: 2.5px 2.5px 0px #000000;'),
    'Token zero-blur hard shadow (2.5px offset) terdefinisi untuk Light & Dark Mode'
);

assert(
    cssContent.includes('--neo-hazard-yellow:') &&
    cssContent.includes('--neo-hazard-orange:') &&
    cssContent.includes('--neo-safety-green:'),
    'Token safety hazard accents (kuning peringatan, oranye industri, hijau SNI) terpasang'
);

// ─── 2. Verifikasi Komponen Inti (.neo-box, .neo-card, .neo-btn, .neo-badge, .neo-input)
console.log('\n🧱 2. Memeriksa Komponen Inti Industrial Neo-Brutalism...');
assert(
    cssContent.includes('.neo-box {') &&
    cssContent.includes('border: 2px solid #0f172a !important;') &&
    cssContent.includes('box-shadow: 2.5px 2.5px 0px #0f172a !important;'),
    '.neo-box memiliki border 2px solid dan hard shadow 2.5px'
);

assert(
    cssContent.includes('.catalog-product-card,') &&
    cssContent.includes('.bento-island-card') &&
    cssContent.includes('border-radius: 0.875rem !important;'),
    '.neo-card, .catalog-product-card, dan .bento-island-card memiliki squircle radius 14px'
);

assert(
    cssContent.includes('.neo-btn {') &&
    cssContent.includes('min-height: 2.75rem !important;') &&
    cssContent.includes('touch-action: manipulation;'),
    '.neo-btn terkunci touch target minimal 44px (2.75rem) anti-meleset'
);

assert(
    cssContent.includes('.neo-btn:active:not(:disabled) {') &&
    cssContent.includes('transform: translate(2px, 2px) !important;') &&
    cssContent.includes('box-shadow: 0.5px 0.5px 0px #0f172a !important;'),
    '.neo-btn memiliki efek tekan mekanikal instan (translate 2px, 2px)'
);

assert(
    cssContent.includes('.neo-badge {') &&
    cssContent.includes('white-space: nowrap !important;') &&
    cssContent.includes('text-transform: uppercase !important;'),
    '.neo-badge memiliki proteksi anti-wrap dan uppercase ala plat serial industri'
);

assert(
    cssContent.includes('.neo-input {') &&
    cssContent.includes('.neo-input:focus {') &&
    cssContent.includes('border-color: var(--color-primary) !important;'),
    '.neo-input memiliki outline tegas dan fokus ring kontras tinggi'
);

assert(
    cssContent.includes('.neo-hazard-stripe {') &&
    cssContent.includes('.neo-hazard-stripe-subtle {'),
    'Aksen pita proyek (.neo-hazard-stripe & .neo-hazard-stripe-subtle) terdefinisi'
);

// ─── 3. Verifikasi Isolasi Keamanan Cetak Thermal & A4 ──────────
console.log('\n🖨️  3. Memeriksa Isolasi Keamanan Cetak Thermal & Dokumen A4...');
const printIsolationRegex = /@media print\s*{[^}]+#thermal-receipt[^}]+box-shadow:\s*none\s*!important/s;
assert(
    printIsolationRegex.test(cssContent),
    'Isolasi cetak print menjamin hard shadow dinonaktifkan mutlak pada struk thermal'
);

assert(
    cssContent.includes('#doc-preview-modal') &&
    cssContent.includes('text-shadow: none !important;'),
    'Dokumen A4 pratinjau terlindungi bebas efek shadow saat cetak'
);

// ─── 4. Verifikasi Integrasi Storefront & Katalog ───────────────
console.log('\n🏪 4. Memeriksa Integrasi Storefront & Katalog...');
const catPath = path.join(rootDir, 'src', 'modules', 'catalog', 'catalog.js');
assert(fs.existsSync(catPath), 'Berkas catalog.js tersedia');
const catContent = fs.readFileSync(catPath, 'utf-8');

assert(
    catContent.includes('catalog-product-card neo-card') &&
    catContent.includes('neo-badge'),
    'Kartu produk katalog (grid & list) dan label satuan/stok menggunakan neo-card & neo-badge'
);

const secPath = path.join(rootDir, 'src', 'modules', 'home', 'sections.js');
assert(fs.existsSync(secPath), 'Berkas sections.js tersedia');
const secContent = fs.readFileSync(secPath, 'utf-8');

assert(
    secContent.includes('neo-hazard-stripe-subtle') &&
    secContent.includes('bento-promo-card neo-card'),
    'Hero banner dan bento promo banner menggunakan aksen pita proyek & neo-card'
);

// ─── 5. Verifikasi Integrasi POS Kasir ──────────────────────────
console.log('\n💳 5. Memeriksa Integrasi POS Kasir...');
const posPath = path.join(rootDir, 'src', 'modules', 'pos', 'pos.js');
assert(fs.existsSync(posPath), 'Berkas pos.js tersedia');
const posContent = fs.readFileSync(posPath, 'utf-8');

assert(
    posContent.includes('id="pos-ctype-umum" type="button" class="neo-btn') &&
    posContent.includes('id="pos-ctype-member" type="button" class="neo-btn') &&
    posContent.includes('id="pos-ctype-tempo" type="button" class="neo-btn'),
    'Tombol tipe pelanggan (Umum, Member, Tempo) menggunakan neo-btn taktil'
);

assert(
    posContent.includes('pos-quick-btn neo-btn') &&
    posContent.includes('id="pos-change-box" class="neo-box') &&
    posContent.includes('id="pos-paid-input" type="number" min="0" placeholder="${total}" value="${posPaidAmount || total}"\n                            class="neo-input'),
    'Tombol uang cepat, kotak kembalian, dan input nominal bayar menggunakan standar neo-industrial'
);

assert(
    posContent.includes('pos-pay-btn-target neo-btn'),
    'Tombol aksi utama Pembayaran Kasir (F4) menggunakan neo-btn tebal ber-shadow'
);

// ─── 6. Verifikasi Integrasi CMS Admin Dashboard ───────────────
console.log('\n📊 6. Memeriksa Integrasi CMS Admin Dashboard Bento...');
assert(
    cssContent.includes('.bento-island-card') &&
    cssContent.includes('box-shadow: 2.5px 2.5px 0px #0f172a !important;') &&
    cssContent.includes('html:not(.dark) .bento-island-card') &&
    cssContent.includes('border: 2px solid #0f172a !important;'),
    'Seluruh kartu bento di Dashboard CMS terintegrasi otomatis dengan styling neo-card & proteksi specificity'
);

assert(
    cssContent.includes('#admin-dashboard-view .grid button') &&
    cssContent.includes('#admin-dashboard-cashflow-slot .bento-island-card') &&
    cssContent.includes('#view-admin .glass-header button'),
    'CMS Header, widget arus kas, dan menu navigasi utama terlindungi styling industrial neo-brutalist'
);

// ─── 7. Verifikasi Universal Neo-Brutalism di Seluruh Web Aplikasi ─
console.log('\n🌐 7. Memeriksa Cakupan Universal Neo-Brutalism di Seluruh Web Aplikasi...');
assert(
    cssContent.includes('#dynamic-categories-container [onclick*="filterCategory"] > div') &&
    cssContent.includes('#dynamic-brands-container [onclick*="filterBrand"] > div') &&
    cssContent.includes('#modal-brand-grid button'),
    'Chiclet kategori, kartu brand etalase, dan modal brand terstandarisasi neo-brutalist 2px border & 2px shadow'
);

assert(
    cssContent.includes('#modal-active-controls .overflow-hidden.rounded-xl') &&
    cssContent.includes('#modal-qty-input') &&
    cssContent.includes('not(#modal-qty-input)'),
    'Stepper kuantitas terproteksi dari styling input umum dan terintegrasi sebagai unit mekanikal neo-brutalist'
);

assert(
    cssContent.includes('#product-modal-options button') &&
    cssContent.includes('.paint-swatch-card') &&
    cssContent.includes('#product-modal-sticky-bar button'),
    'Varian produk, swatch warna cat, dan bilah tombol aksi beli terstandarisasi neo-brutalist'
);


assert(
    cssContent.includes('#shopping-guide-modal [id^="guide-tab-btn-"]') &&
    cssContent.includes('#shopping-guide-modal .p-4.rounded-2xl.border'),
    'Modal Panduan & SOP Ekosistem Toko terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('#product-modal-related-container [onclick*="openProductModal"]') &&
    cssContent.includes('#product-modal-related-container .group') &&
    cssContent.includes('#product-modal-related-container .relative.aspect-square'),
    'Kartu produk sejenis & rekomendasi terkait di modal produk terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('#modal-category-list button') &&
    cssContent.includes('#modal-brand-grid button') &&
    cssContent.includes('#category-modal button[onclick*="closeCategoryModal"]'),
    'Daftar kategori modal dan grid brand modal terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('#admin-content button[onclick*="openSettingForm"]') &&
    cssContent.includes('#admin-content button[onclick*="openPrinterSettingsModal"]') &&
    cssContent.includes('#admin-content button[onclick*="openAdminTab(\'backup_sync\')"]') &&
    cssContent.includes('#admin-content > div > .mb-5.flex.items-center.justify-between'),
    'Menu kartu bento grid Pengaturan Toko dan header banner terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('#admin-product-stats .grid > div') &&
    cssContent.includes('#admin-content .grid-cols-2.lg\\:grid-cols-4 > div') &&
    cssContent.includes('#admin-content > div > .relative.overflow-hidden.p-5'),
    'Seluruh kartu metrik KPI dan banner modul CMS Admin terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('button[onclick*="openPriceListExportModal"]') &&
    cssContent.includes('button[onclick*="oAAdd()"]') &&
    cssContent.includes('#admin-list-container button[onclick*="toggleProductStatus"]') &&
    cssContent.includes('#admin-list-container button[onclick*="oAEd"]'),
    'Tombol aksi toolbar dan kartu baris produk terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('#modal-supplier-detail-box') &&
    cssContent.includes('#modal-supplier-detail button[onclick*="closeSupplierDetailModal"]') &&
    cssContent.includes('#modal-supplier-detail button[onclick*="quickCreatePOForSupplier"]'),
    'Modal detail supplier, segmented tabs, dan aksi kulakan terstandarisasi neo-brutalist'
);

assert(
    cssContent.includes('.footer-bento-hub') &&
    cssContent.includes('.footer-bento-hub a[onclick*="sendWhatsAppCustomerService"]') &&
    cssContent.includes('.footer-bento-hub div[onclick*="openAppDownloadModal"]'),
    'Kartu identitas toko, WhatsApp prioritas, dan unduh APK di footer terstandarisasi neo-brutalism'
);

assert(
    cssContent.includes('.card-modern,') &&
    cssContent.includes('.card-native,') &&
    cssContent.includes('.product-admin-card,') &&
    cssContent.includes('.kpi-card,') &&
    cssContent.includes('#address-container,'),
    'Semua kartu admin, native card, KPI card, dan checkout card terlingkupi neo-brutalism'
);

assert(
    cssContent.includes('.btn-primary,') &&
    cssContent.includes('.btn-secondary,') &&
    cssContent.includes('.btn-native-action,') &&
    cssContent.includes('#btn-checkout-next,') &&
    cssContent.includes('#btn-floating-wa,'),
    'Semua tombol utama, sekunder, aksi native, checkout, dan floating button terlingkupi neo-btn'
);

assert(
    cssContent.includes('.admin-input,') &&
    cssContent.includes('.header-search-capsule') &&
    cssContent.includes('textarea.admin-input,'),
    'Semua kolom input form admin, header search bar, dan textarea terlingkupi neo-input'
);

assert(
    cssContent.includes('.status-pill,') &&
    cssContent.includes('[class*="status-badge"],'),
    'Semua badge status transaksi, order, PO, dan supplier terlingkupi neo-badge'
);

assert(
    cssContent.includes('.admin-table-container,') &&
    cssContent.includes('.table-container,') &&
    cssContent.includes('table thead th {'),
    'Semua tabel data CMS Admin terlingkupi neo-table dengan border & header tegas'
);

assert(
    cssContent.includes('.modal-bottom-sheet,') &&
    cssContent.includes('[id$="-modal-box"],') &&
    cssContent.includes('#custom-confirm-box,'),
    'Semua modal bottom sheet, dialog popup, dan confirm box terlingkupi neo-modal'
);

assert(
    cssContent.includes('#bottom-nav-bar {') &&
    cssContent.includes('#bnav-home .bnav-hero-button {'),
    'Bilah navigasi bawah (bottom-nav-bar) dan tombol home terlingkupi aksen neo-brutalist'
);

assert(
    cssContent.includes('#orders-items-container > div,') &&
    cssContent.includes('#wishlist-items-container > div,') &&
    cssContent.includes('#dynamic-flashsale-container .snap-start > div,') &&
    cssContent.includes('#reward-catalog-container .snap-start > div,') &&
    cssContent.includes('#dynamic-vouchers-container .snap-start > div,'),
    'Riwayat pesanan, wishlist, promo flash sale, reward katalog, dan voucher terlingkupi neo-card'
);

assert(
    cssContent.includes('.custom-radio:checked + .option-select-card {') &&
    cssContent.includes('box-shadow: 3px 3px 0px var(--color-primary) !important;') &&
    cssContent.includes('transform: translate(-1px, -1px) !important;'),
    'Opsi pengiriman & metode bayar (.option-select-card) terstandarisasi neo-brutalism saat dipilih'
);

// ─── 8. Verifikasi Service Worker Cache & Versi Sistem ─────────
console.log('\n⚡ 8. Memeriksa Service Worker & Invalidation Cache...');
const swPath = path.join(rootDir, 'public', 'sw.js');
assert(fs.existsSync(swPath), 'Berkas public/sw.js tersedia');
const swContent = fs.readFileSync(swPath, 'utf-8');
assert(
    swContent.includes("CACHE_VERSION = 'v1.20.1';") &&
    swContent.includes('caches.delete(name);'),
    'Service Worker Cache ter-bump ke v1.20.1 dengan auto-purge cache usang v1.20.0'
);

// ─── Hasil Akhir ───────────────────────────────────────────────
console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
if (passedTests === totalTests) {
    console.log('✨ INDUSTRIAL NEO-BRUTALISM & NATIVE APP ENGINE 100% VALID & BEBAS REGRESI! ✅');
} else {
    console.error('❌ Terdapat pengujian yang gagal, silakan periksa implementasi!');
    process.exit(1);
}
console.log('============================================================\n');

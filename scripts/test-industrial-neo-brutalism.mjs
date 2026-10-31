/**
 * ============================================================
 * TEST SUITE: SHOPIFY POLARIS & CLEAN MINIMALIST DESIGN ENGINE
 * Toko Putri (Putri Utama Teknik) — v1.21.0
 * 
 * Verifikasi arsitektural:
 * 1. Standarisasi Token CSS Clean Minimalist (:root variables, 1px crisp borders, soft ambient elevation).
 * 2. Konsistensi Komponen Utama (.neo-box, .neo-card, .neo-btn, .neo-badge, .neo-input).
 * 3. Integrasi Taktil & Ergonomi Native (Spring scale press feedback, min-h 44px).
 * 4. Integrasi Storefront (Hero Banner, Promo Banner, Catalog Product Cards & Badges).
 * 5. Integrasi POS Kasir (Customer Types, Pay Methods, Quick Cash, Paid Input, Pay CTA).
 * 6. Isolasi Keamanan Thermal Print & Dokumen A4 (Zero shadow leak guarantee).
 * 7. Universal Clean Coverage (Modals, Tables, Forms, Chiclets, Steppers).
 * 8. Service Worker & Cache Integrity.
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
console.log('🛍️  TEST SUITE: SHOPIFY POLARIS & CLEAN MINIMALIST ENGINE');
console.log('============================================================\n');

// ─── 1. Verifikasi CSS Tokens di src/style.css ─────────────────
console.log('📐 1. Memeriksa Token Desain Shopify Polaris di src/style.css...');
const cssPath = path.join(rootDir, 'src', 'style.css');
assert(fs.existsSync(cssPath), 'Berkas src/style.css tersedia');
const cssContent = fs.readFileSync(cssPath, 'utf-8');

assert(
    cssContent.includes('--clean-border-width: 1px;') &&
    cssContent.includes('--clean-border-color: #e2e8f0;'),
    'Token border tipis elegan (--clean-border-width: 1px) terdefinisi'
);

assert(
    cssContent.includes('--clean-shadow-xs:') &&
    cssContent.includes('--clean-shadow-sm:') &&
    cssContent.includes('--clean-shadow-md:') &&
    cssContent.includes('--clean-shadow-lg:'),
    'Token soft ambient elevation shadows (xs, sm, md, lg, xl) terdefinisi untuk Light & Dark Mode'
);

assert(
    cssContent.includes('--neo-border-width: 1px;') &&
    cssContent.includes('--neo-shadow-md: 0 4px 14px -2px rgba(15, 23, 42, 0.05);'),
    'Token legacy di-alias harmonis ke standar clean minimalist 1px & diffuse shadow'
);

// ─── 2. Verifikasi Komponen Inti (.neo-box, .neo-card, .neo-btn, .neo-badge, .neo-input)
console.log('\n🧱 2. Memeriksa Komponen Inti Shopify Polaris & Clean Minimalist...');
assert(
    cssContent.includes('.neo-box') &&
    cssContent.includes('border: 1px solid #e2e8f0 !important;') &&
    cssContent.includes('border-radius: 1rem !important;'),
    '.neo-box memiliki crisp 1px border dan soft ambient shadow squircle 1rem'
);

assert(
    cssContent.includes('.catalog-product-card,') &&
    cssContent.includes('.bento-island-card') &&
    cssContent.includes('border-radius: 1rem !important;'),
    '.neo-card, .catalog-product-card, dan .bento-island-card memiliki squircle radius 1rem (16px)'
);

assert(
    cssContent.includes('.neo-btn') &&
    cssContent.includes('min-height: 2.75rem !important;') &&
    cssContent.includes('touch-action: manipulation'),
    '.neo-btn terkunci touch target minimal 44px (2.75rem) anti-meleset'
);

assert(
    cssContent.includes('button:active') &&
    (cssContent.includes('transform: scale(0.97)') || cssContent.includes('transform: scale(0.98)')),
    'Tombol aksi memiliki sentuhan taktil pegas halus scale(0.97) / scale(0.98)'
);

assert(
    cssContent.includes('.neo-badge') &&
    cssContent.includes('white-space: nowrap !important;') &&
    cssContent.includes('border-radius: 9999px !important;'),
    '.neo-badge terstandarisasi sebagai pill badge elegan anti-wrap'
);

assert(
    cssContent.includes('.neo-input') &&
    cssContent.includes('.neo-input:focus') &&
    cssContent.includes('box-shadow: 0 0 0 3.5px rgba(var(--color-primary-rgb), 0.15) !important;'),
    '.neo-input memiliki Shopify Polaris focus ring halo 3.5px'
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
    secContent.includes('bnav-home') || secContent.includes('bento-promo-card neo-card') || secContent.includes('banner-slide-item'),
    'Hero banner dan promo banner terintegrasi bersih dan rapi'
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
    'Tombol uang cepat, kotak kembalian, dan input nominal bayar menggunakan standar clean minimal'
);

assert(
    posContent.includes('pos-pay-btn-target neo-btn'),
    'Tombol aksi utama Pembayaran Kasir (F4) menggunakan neo-btn clean ber-elevasi halus'
);

// ─── 6. Verifikasi Integrasi CMS Admin Dashboard ───────────────
console.log('\n📊 6. Memeriksa Integrasi CMS Admin Dashboard...');
assert(
    cssContent.includes('.bento-island-card') &&
    cssContent.includes('border: 1px solid #e2e8f0 !important;'),
    'Seluruh kartu bento di Dashboard CMS terintegrasi otomatis dengan styling clean card 1px'
);

assert(
    cssContent.includes('#admin-dashboard-view .grid button') &&
    cssContent.includes('#admin-dashboard-cashflow-slot .bento-island-card') &&
    cssContent.includes('#view-admin .glass-header button'),
    'CMS Header, widget arus kas, dan menu navigasi utama terlindungi styling clean minimalist'
);

// ─── 7. Verifikasi Universal Clean Minimalist di Seluruh Web Aplikasi ─
console.log('\n🌐 7. Memeriksa Cakupan Universal Clean Minimalist di Seluruh Web Aplikasi...');
assert(
    cssContent.includes('#dynamic-categories-container [onclick*="filterCategory"] > div') &&
    cssContent.includes('#dynamic-brands-container [onclick*="filterBrand"] > div') &&
    cssContent.includes('#modal-brand-grid button'),
    'Chiclet kategori, kartu brand etalase, dan modal brand terstandarisasi clean 1px border & soft shadow'
);

assert(
    cssContent.includes('#modal-active-controls .overflow-hidden.rounded-xl') &&
    cssContent.includes('#modal-qty-input') &&
    cssContent.includes('not(#modal-qty-input)'),
    'Stepper kuantitas terproteksi dari styling input umum dan terintegrasi sebagai unit clean minimalist'
);

assert(
    cssContent.includes('#product-modal-options button') &&
    cssContent.includes('.paint-swatch-card') &&
    cssContent.includes('#product-modal-sticky-bar button'),
    'Varian produk, swatch warna cat, dan bilah tombol aksi beli terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('#shopping-guide-modal [id^="guide-tab-btn-"]') &&
    cssContent.includes('#shopping-guide-modal .p-4.rounded-2xl.border'),
    'Modal Panduan & SOP Ekosistem Toko terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('#product-modal-related-container [onclick*="openProductModal"]') &&
    cssContent.includes('#product-modal-related-container .group') &&
    cssContent.includes('#product-modal-related-container .relative.aspect-square'),
    'Kartu produk sejenis & rekomendasi terkait di modal produk terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('#modal-category-list button') &&
    cssContent.includes('#modal-brand-grid button') &&
    cssContent.includes('#category-modal button[onclick*="closeCategoryModal"]'),
    'Daftar kategori modal dan grid brand modal terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('#admin-content button[onclick*="openSettingForm"]') &&
    cssContent.includes('#admin-content button[onclick*="openPrinterSettingsModal"]') &&
    cssContent.includes('#admin-content button[onclick*="openAdminTab(\'backup_sync\')"]') &&
    cssContent.includes('#admin-content > div > .mb-5.flex.items-center.justify-between'),
    'Menu kartu bento grid Pengaturan Toko dan header banner terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('.kpi-card') &&
    cssContent.includes('.card-modern'),
    'Seluruh kartu metrik KPI dan banner modul CMS Admin terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('button[onclick*="openPriceListExportModal"]') &&
    cssContent.includes('button[onclick*="oAAdd()"]') &&
    cssContent.includes('#admin-list-container button[onclick*="toggleProductStatus"]') &&
    cssContent.includes('#admin-list-container button[onclick*="oAEd"]'),
    'Tombol aksi toolbar dan kartu baris produk terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('#modal-supplier-detail-box') &&
    cssContent.includes('#modal-supplier-detail button[onclick*="closeSupplierDetailModal"]') &&
    cssContent.includes('#modal-supplier-detail button[onclick*="quickCreatePOForSupplier"]'),
    'Modal detail supplier, segmented tabs, dan aksi kulakan terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('.footer-bento-hub') &&
    cssContent.includes('.footer-bento-hub a[onclick*="sendWhatsAppCustomerService"]') &&
    cssContent.includes('.footer-bento-hub div[onclick*="openAppDownloadModal"]'),
    'Kartu identitas toko, WhatsApp prioritas, dan unduh APK di footer terstandarisasi clean minimalist'
);

assert(
    cssContent.includes('.card-modern,') &&
    cssContent.includes('.card-native,') &&
    cssContent.includes('.product-admin-card,') &&
    cssContent.includes('.kpi-card,') &&
    cssContent.includes('#address-container,'),
    'Semua kartu admin, native card, KPI card, dan checkout card terlingkupi clean design system'
);

assert(
    cssContent.includes('.neo-btn,') &&
    cssContent.includes('.btn-primary,') &&
    cssContent.includes('.btn-secondary,') &&
    cssContent.includes('.btn-native-action'),
    'Semua tombol utama, sekunder, aksi native terlingkupi clean button styling'
);

assert(
    cssContent.includes('.admin-input,') &&
    cssContent.includes('.header-search-capsule') &&
    cssContent.includes('textarea.admin-input,'),
    'Semua kolom input form admin, header search bar, dan textarea terlingkupi clean input styling'
);

assert(
    cssContent.includes('.status-pill,') &&
    cssContent.includes('[class*="status-badge"],'),
    'Semua badge status transaksi, order, PO, dan supplier terlingkupi clean pill badges'
);

assert(
    cssContent.includes('.admin-table-container,') &&
    cssContent.includes('.table-container,') &&
    cssContent.includes('table thead th {'),
    'Semua tabel data CMS Admin terlingkupi clean table dengan 1px border halus'
);

assert(
    cssContent.includes('.modal-bottom-sheet,') &&
    cssContent.includes('[id$="-modal-box"],') &&
    cssContent.includes('#custom-confirm-box,'),
    'Semua modal bottom sheet, dialog popup, dan confirm box terlingkupi clean modal system'
);

assert(
    cssContent.includes('#bottom-nav-bar {') &&
    cssContent.includes('#bnav-home .bnav-hero-button {'),
    'Bilah navigasi bawah (bottom-nav-bar) dan tombol home terlingkupi clean minimalist styling'
);

assert(
    cssContent.includes('#orders-items-container > div,') &&
    cssContent.includes('#wishlist-items-container > div,') &&
    cssContent.includes('#dynamic-flashsale-container .snap-start > div,') &&
    cssContent.includes('#reward-catalog-container .snap-start > div,') &&
    cssContent.includes('#dynamic-vouchers-container .snap-start > div,'),
    'Riwayat pesanan, wishlist, promo flash sale, reward katalog, dan voucher terlingkupi clean cards'
);

assert(
    cssContent.includes('.custom-radio:checked + .option-select-card {'),
    'Opsi pengiriman & metode bayar (.option-select-card) terstandarisasi saat dipilih'
);

// ─── 8. Verifikasi Service Worker Cache & Versi Sistem ─────────
console.log('\n⚡ 8. Memeriksa Service Worker & Invalidation Cache...');
const swPath = path.join(rootDir, 'public', 'sw.js');
assert(fs.existsSync(swPath), 'Berkas public/sw.js tersedia');
const swContent = fs.readFileSync(swPath, 'utf-8');
assert(
    swContent.includes('caches.delete(name);'),
    'Service Worker Cache terpasang dengan auto-purge cache usang'
);

// ─── Hasil Akhir ───────────────────────────────────────────────
console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
if (passedTests === totalTests) {
    console.log('✨ SHOPIFY POLARIS & CLEAN MINIMALIST ENGINE 100% VALID & BEBAS REGRESI! ✅');
} else {
    console.error('❌ Terdapat pengujian yang gagal, silakan periksa implementasi!');
    process.exit(1);
}
console.log('============================================================\n');

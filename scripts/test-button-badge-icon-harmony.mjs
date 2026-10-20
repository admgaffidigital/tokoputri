/**
 * ============================================================
 * TEST SUITE: UNIVERSAL BUTTON, BADGE & ICON POD HARMONY ENGINE
 * Verifikasi keselarasan tampilan antarmuka (UI Harmony):
 * 1. Badge Status & Pill: Anti-wrap, bebas bertumpuk, line-height rapi,
 *    border-radius squircle seragam (0.5rem / 8px).
 * 2. Tombol (Buttons): Hierarki border-radius konsisten (16px Primary,
 *    12px Secondary/Filter, 12px Compact Action, 8px Micro).
 * 3. Icon Pods: Border-radius konsisten berdasar dimensi container
 *    (Large 16px, Medium 14px, Compact 12px, Small 8px) & aspect-ratio 1:1.
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
console.log('🎨 TEST SUITE: BUTTON, BADGE & ICON POD HARMONY ENGINE');
console.log('============================================================\n');

// ─── 1. Verifikasi Aturan di src/style.css ──────────────────────────────────
console.log('💅 1. Memeriksa Universal Harmony Engine di src/style.css...');
const cssPath = path.join(rootDir, 'src', 'style.css');
assert(fs.existsSync(cssPath), 'Berkas src/style.css tersedia');

const cssContent = fs.readFileSync(cssPath, 'utf-8');

// Badge rules
assert(
    cssContent.includes('white-space: nowrap !important;') &&
    cssContent.includes('word-break: keep-all !important;'),
    'Universal Badge Anti-Wrap Engine terpasang dengan white-space: nowrap !important'
);

assert(
    cssContent.includes('border-radius: 0.5rem !important;') &&
    cssContent.includes('[class*="badge"]'),
    'Badge squircle radius terstandarisasi seragam ke 0.5rem (8px)'
);

assert(
    cssContent.includes('max-height: 26px !important;'),
    'Badge height terproteksi anti-bloat/anti-menggembung'
);

// Button rules
assert(
    cssContent.includes('.btn-primary') &&
    cssContent.includes('border-radius: 1rem !important;'),
    'Tombol Utama (Primary / Submit / CTA) terkunci ke border-radius: 1rem (16px squircle)'
);

assert(
    cssContent.includes('.btn-secondary') &&
    cssContent.includes('border-radius: 0.75rem !important;'),
    'Tombol Sekunder / Neutral / Chiclet terkunci ke border-radius: 0.75rem (12px squircle)'
);

assert(
    cssContent.includes('button.h-8.w-8') &&
    cssContent.includes('button.h-9.w-9'),
    'Tombol ikon aksi kompak (w-8 s.d. w-11) terproteksi aspect-ratio 1:1 dan radius 12px'
);

// Icon Pod rules
assert(
    cssContent.includes('div[class*="w-14"][class*="h-14"]') &&
    cssContent.includes('border-radius: 1rem !important;'),
    'Large Icon Pods (w-14 / w-16) terkunci ke border-radius: 1rem (16px squircle)'
);

assert(
    cssContent.includes('div[class*="w-10"][class*="h-10"]') &&
    cssContent.includes('border-radius: 0.875rem !important;'),
    'Medium Icon Pods (w-10 / w-12) terkunci ke border-radius: 0.875rem (14px squircle)'
);

assert(
    cssContent.includes('div[class*="w-8"][class*="h-8"]') &&
    cssContent.includes('border-radius: 0.75rem !important;'),
    'Compact / KPI Stat Icon Pods (w-8 / w-9) terkunci ke border-radius: 0.75rem (12px squircle)'
);

assert(
    cssContent.includes('div[class*="w-6"][class*="h-6"]') &&
    cssContent.includes('border-radius: 0.5rem !important;'),
    'Small Icon Pods (w-6 / w-7) terkunci ke border-radius: 0.5rem (8px squircle)'
);

// ─── 2. Verifikasi Template Orders Admin (src/modules/admin/orders.js) ──────
console.log('\n📦 2. Memeriksa Keselarasan Badge di src/modules/admin/orders.js...');
const ordersJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'orders.js');
const ordersContent = fs.readFileSync(ordersJsPath, 'utf-8');

assert(
    ordersContent.includes('whitespace-nowrap inline-flex items-center') &&
    ordersContent.includes('tracking-wider'),
    'Badge status dan kasir pesanan di orders.js menggunakan whitespace-nowrap & tracking-wider'
);

// ─── 3. Verifikasi Template Suppliers Admin (src/modules/admin/suppliers.js) 
console.log('\n🚚 3. Memeriksa Keselarasan Badge & Button di src/modules/admin/suppliers.js...');
const suppliersJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'suppliers.js');
const suppliersContent = fs.readFileSync(suppliersJsPath, 'utf-8');

assert(
    !suppliersContent.includes('px-2.5 py-0.5 rounded-full text-[10px] font-bold border" style="background: rgba(var(--color-primary-rgb), 0.1)'),
    'Badge termin cash/tempo di kartu supplier tidak lagi menggunakan rounded-full yang jomplang'
);

assert(
    suppliersContent.includes('rounded-xl') &&
    suppliersContent.includes('window.openSupplierWhatsApp'),
    'Tombol aksi baris supplier (WA Sales, Edit, Hapus) menggunakan rounded-xl konsisten'
);

// ─── 4. Verifikasi Template Purchases Admin (src/modules/admin/purchases.js) 
console.log('\n🛒 4. Memeriksa Keselarasan Badge di src/modules/admin/purchases.js...');
const purchasesJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'purchases.js');
const purchasesContent = fs.readFileSync(purchasesJsPath, 'utf-8');

assert(
    purchasesContent.includes('rounded-lg text-[10px] font-black uppercase tracking-wider border whitespace-nowrap inline-flex items-center') &&
    purchasesContent.includes('statusBadge ='),
    'statusBadge PO kulakan menggunakan rounded-lg dan whitespace-nowrap'
);

assert(
    purchasesContent.includes('paymentBadge =') &&
    purchasesContent.includes('whitespace-nowrap inline-flex items-center'),
    'paymentBadge PO kulakan menggunakan whitespace-nowrap inline-flex'
);

// ─── 5. Verifikasi Template Kategori (src/modules/admin/products/table.js) ──
console.log('\n🏷️ 5. Memeriksa Keselarasan Badge di src/modules/admin/products/table.js...');
const tableJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'products', 'table.js');
const tableContent = fs.readFileSync(tableJsPath, 'utf-8');

assert(
    tableContent.includes('rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 whitespace-nowrap inline-flex items-center'),
    'Badge jumlah produk kategori di table.js menggunakan rounded-lg dan whitespace-nowrap'
);

// ─── 6. Verifikasi Template Tempo (src/modules/admin/tempo.js) ──────────────
console.log('\n⏱️ 6. Memeriksa Keselarasan Badge di src/modules/admin/tempo.js...');
const tempoJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'tempo.js');
const tempoContent = fs.readFileSync(tempoJsPath, 'utf-8');

assert(
    tempoContent.includes('rounded-lg uppercase tracking-wider whitespace-nowrap inline-flex items-center'),
    'Badge pelanggan dan PayLater di tempo.js menggunakan rounded-lg dan whitespace-nowrap'
);

// ─── 7. Verifikasi Header Admin di index.html ──────────────────────────────
console.log('\n🏛️ 7. Memeriksa Keselarasan Badge di index.html...');
const indexPath = path.join(rootDir, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

assert(
    indexContent.includes('id="admin-header-role-badge"') &&
    indexContent.includes('rounded-lg') &&
    indexContent.includes('whitespace-nowrap'),
    'Badge role admin header di index.html menggunakan rounded-lg dan whitespace-nowrap'
);

assert(
    indexContent.includes('id="admin-dashboard-welcome-tag"') &&
    indexContent.includes('whitespace-nowrap'),
    'Welcome tag dashboard admin di index.html menggunakan whitespace-nowrap anti-wrap'
);

// ─── 8. Verifikasi Dropdown Ekspor & Badge di reports.js ──────────────────
console.log('\n📊 8. Memeriksa Dropdown Ekspor & Badge di src/modules/admin/reports.js...');
const reportsJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'reports.js');
const reportsContent = fs.readFileSync(reportsJsPath, 'utf-8');

assert(
    reportsContent.includes('id="report-export-dropdown-menu"') &&
    reportsContent.includes('left-0 sm:left-auto sm:right-0') &&
    reportsContent.includes('max-w-[calc(100vw-2rem)]'),
    'Dropdown ekspor di reports.js memiliki proteksi anti-clipping ke sisi kiri layar'
);

assert(
    reportsContent.includes('px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider shrink-0 whitespace-nowrap') &&
    reportsContent.includes('Live'),
    'Badge Live di header reports.js menggunakan rounded-lg dan whitespace-nowrap'
);

assert(
    reportsContent.includes('px-2 py-0.5 rounded-lg bg-emerald-100') &&
    reportsContent.includes('whitespace-nowrap') &&
    reportsContent.includes('Aktif'),
    'Badge Aktif di dropdown ekspor menggunakan rounded-lg dan whitespace-nowrap'
);

// ─── 9. Verifikasi Empty State & Switcher Kasir di pos.js ───────────────────
console.log('\n🛒 9. Memeriksa Empty State & Switcher di src/modules/pos/pos.js...');
const posJsPath = path.join(rootDir, 'src', 'modules', 'pos', 'pos.js');
const posContent = fs.readFileSync(posJsPath, 'utf-8');

assert(
    posContent.includes('Bersihkan (Esc)') &&
    posContent.includes('whitespace-nowrap inline-flex items-center justify-center shrink-0'),
    'Tombol Bersihkan (Esc) di empty state kasir menggunakan whitespace-nowrap anti-wrap'
);

assert(
    posContent.includes('Scan Kamera') &&
    posContent.includes('whitespace-nowrap inline-flex items-center justify-center shrink-0'),
    'Tombol Scan Kamera di empty state kasir menggunakan whitespace-nowrap anti-wrap'
);

const emptyBlockMatch = posContent.match(/bento-empty-state-card[\s\S]*?Item Tidak Ditemukan/);
assert(
    emptyBlockMatch && !emptyBlockMatch[0].includes('linear-gradient'),
    'Wadah ikon empty state kasir tidak lagi menggunakan linear-gradient'
);

// ─── 10. Verifikasi Widget Arus Kas di dashboard-cashflow.js ───────────────
console.log('\n💰 10. Memeriksa Widget Arus Kas di src/modules/admin/dashboard-cashflow.js...');
const cashflowJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'dashboard-cashflow.js');
const cashflowContent = fs.readFileSync(cashflowJsPath, 'utf-8');

assert(
    cashflowContent.includes('Arus Kas Hari Ini') &&
    cashflowContent.includes('whitespace-nowrap'),
    'Judul Arus Kas Hari Ini menggunakan whitespace-nowrap anti-wrap'
);

assert(
    cashflowContent.includes('hidden sm:inline text-[10px] font-bold text-slate-400 normal-case whitespace-nowrap') &&
    cashflowContent.includes('${data.todayStr}'),
    'Tanggal widget arus kas terproteksi whitespace-nowrap dan disembunyikan di mobile sempit'
);

assert(
    cashflowContent.includes('Laporan P&amp;L') &&
    cashflowContent.includes('whitespace-nowrap'),
    'Tombol Laporan P&L terproteksi whitespace-nowrap dan shrink-0'
);

// ─── 11. Verifikasi Header Kasir & Search Bar di pos.js ────────────────────
console.log('\n🖥️ 11. Memeriksa Header Kasir & Search Bar di src/modules/pos/pos.js...');
assert(
    posContent.includes('min-w-[130px] sm:min-w-[160px] flex-1') &&
    posContent.includes('STOREFRONT POS HEADER'),
    'Sisi kiri header storefront POS memiliki proteksi min-w-[130px] sm:min-w-[160px] flex-1 anti-gepeng'
);

assert(
    posContent.includes('placeholder="Cari nama, SKU, barcode... [F2]"'),
    'Search input POS kasir menggunakan placeholder asli lengkap dengan shortcut [F2]'
);

assert(
    posContent.includes('hidden sm:inline whitespace-nowrap">Scan (F9)</span>'),
    'Tombol kamera di search bar POS menampilkan teks Scan (F9) pada layar tablet & desktop'
);

assert(
    cssContent.includes('button[class*=":w-auto"]') &&
    cssContent.includes('aspect-ratio: auto !important;'),
    'Tombol dengan w-auto atau aspect-auto ternetralkan dari aspect-ratio 1:1 paksaan'
);

assert(
    cssContent.includes('#btn-admin-refresh') &&
    cssContent.includes('height: 2rem !important;'),
    'Tombol sinkronasi admin #btn-admin-refresh terkunci proporsional ke height: 2rem (32px)'
);

// ─── 12. Verifikasi Proteksi Hidden & Keselarasan Icon Sinkronasi ─────────────
console.log('\n🔒 12. Memeriksa Proteksi Hidden & Keselarasan Icon Sinkronasi...');
assert(
    cssContent.includes('.hidden,') &&
    cssContent.includes('[hidden]') &&
    cssContent.includes('display: none !important;'),
    'Proteksi mutlak utilitas Tailwind .hidden & [hidden] terpasang dengan display: none !important'
);

assert(
    cssContent.includes('[class*="badge"]:not(.hidden):not([hidden])') &&
    cssContent.includes('div[class*="w-8"][class*="h-8"]:not([class*="rounded-full"]):not(.avatar):not(.hidden):not([hidden])'),
    'Badge dan Icon Pods memiliki guard :not(.hidden):not([hidden]) anti-kebocoran display di HP'
);

assert(
    cssContent.includes('#admin-refresh-icon') &&
    cssContent.includes('#dashboard-cashflow-refresh-icon') &&
    cssContent.includes('transform-origin: center center !important;'),
    'Icon sinkronasi admin & arus kas terstandarisasi proporsional 1:1 dengan transform-origin di pusat'
);

assert(
    cashflowContent.includes('fa-arrows-rotate text-xs') &&
    cashflowContent.includes('id="dashboard-cashflow-refresh-icon"'),
    'Tombol Segarkan widget arus kas menggunakan fa-arrows-rotate text-xs selaras proporsional dengan header'
);

// ─── 13. Verifikasi Proteksi Kontras Tinggi Icon Pods & Anti White-on-White ───
console.log('\n🛡️ 13. Memeriksa Proteksi Kontras Tinggi Icon Pods & Anti White-on-White...');
const settingsJsPath = path.join(rootDir, 'src', 'modules', 'admin', 'settings.js');
const settingsContent = fs.readFileSync(settingsJsPath, 'utf-8');

assert(
    settingsContent.includes('style="background-color: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);"') &&
    !settingsContent.includes('style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%'),
    'Icon pods kartu pengaturan toko di settings.js menggunakan solid background-color var(--color-primary)'
);

assert(
    cssContent.includes('[style*="var(--color-primary)"][class*="text-white"]') &&
    cssContent.includes('background-color: var(--color-primary) !important;'),
    'Proteksi CSS menegakkan background-color var(--color-primary) pada elemen bertema toko berteks putih'
);

assert(
    cssContent.includes('[style*="var(--color-primary)"][class*="text-white"] i') &&
    cssContent.includes('color: #ffffff !important;'),
    'Ikon di dalam wadah bertema toko terkunci putih kontras tinggi (anti-pudar / anti white-on-white)'
);

assert(
    !cssContent.includes('[style*="linear-gradient"][style*="var(--color-primary-rgb)"]:not([style*="repeating-linear-gradient"]) {'),
    'Selector bermasalah yang menimpa icon pods bertema toko menjadi latar pudar telah dieliminasi'
);

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passedTests} Passed, ${totalTests - passedTests} Failed`);
if (passedTests === totalTests) {
    console.log('✨ KESELARASAN BUTTON, BADGE & ICON POD 100% TERVERIFIKASI! ✅');
    console.log('============================================================');
    process.exit(0);
} else {
    console.error('⚠️ ADA PENGUJIAN YANG GAGAL!');
    console.log('============================================================');
    process.exit(1);
}

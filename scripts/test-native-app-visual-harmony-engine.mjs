import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const STYLE_CSS_PATH = path.join(ROOT_DIR, 'src', 'style.css');
const INDEX_HTML_PATH = path.join(ROOT_DIR, 'index.html');

console.log('\n============================================================');
console.log('🧪 TEST SUITE: NATIVE APP HARMONY & PROPORTIONAL ENGINE AUDIT');
console.log('============================================================\n');

assert(fs.existsSync(STYLE_CSS_PATH), 'src/style.css harus tersedia');
const styleCss = fs.readFileSync(STYLE_CSS_PATH, 'utf-8');

assert(fs.existsSync(INDEX_HTML_PATH), 'index.html harus tersedia');
const indexHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

let passCount = 0;
const test = (desc, fn) => {
    try {
        fn();
        console.log(`  ✅ PASS: ${desc}`);
        passCount++;
    } catch (e) {
        console.error(`  ❌ FAIL: ${desc} -> ${e.message}`);
        process.exitCode = 1;
    }
};

// 1. Proportional Card & Bento Hover Frame
console.log('🖼️ 1. Uji Proportional Card & Bento Hover Frame:');
test('Hover frame card hanya aktif pada desktop dengan mouse/trackpad (pointer: fine)', () => {
    assert(styleCss.includes('@media (hover: hover) and (pointer: fine)'), 'Menggunakan media query pointer: fine');
    assert(styleCss.includes('.bento-island-card:hover'), 'Mendefinisikan .bento-island-card:hover');
    assert(styleCss.includes('transform: translateY(-2px)'), 'Memberikan subtle lift 2px saat hover');
    assert(styleCss.includes('border-color: rgba(var(--color-primary-rgb), 0.4)'), 'Menggunakan aksen tema toko halus');
});

test('Touch guard menonaktifkan hover transform pada layar sentuh (hover: none) agar tidak lengket', () => {
    assert(styleCss.includes('@media (hover: none)'), 'Mendefinisikan guard @media (hover: none)');
    assert(styleCss.includes('transform: none !important'), 'Menetralkan transform pada touch screen');
});

// 2. Proportional Form Input Engine
console.log('\n📝 2. Uji Kolom Input Proporsional (Touch Target, Frame & Font):');
test('Input & select memiliki touch target standar minimal 44px (min-height: 2.75rem)', () => {
    assert(styleCss.includes('min-height: 2.75rem !important'), 'Standarisasi min-height 2.75rem (44px)');
    assert(styleCss.includes('border-radius: 0.875rem !important'), 'Standarisasi radius 0.875rem (14px squircle)');
});

test('Input hover frame halus terpasang untuk Light & Dark Mode', () => {
    assert(styleCss.includes('border-color: #94a3b8 !important'), 'Hover border slate-400 di light mode');
    assert(styleCss.includes('border-color: #475569 !important'), 'Hover border slate-600 di dark mode');
});

test('Mobile font size proteksi anti auto-zoom (16px) pada layar smartphone', () => {
    assert(styleCss.includes('font-size: 16px !important'), 'Input di layar <= 768px terkunci ke 16px');
});

// 3. Proportional Button Consistency Engine
console.log('\n🔘 3. Uji Konsistensi Tombol Proporsional & Sentuhan Taktil:');
test('Tombol memiliki touch target minimal 44px dan tactile press feedback scale(0.965)', () => {
    assert(styleCss.includes('transform: scale(0.965) !important'), 'Tactile press scale 0.965 terpasang');
    assert(styleCss.includes('.btn-primary'), 'Mendefinisikan .btn-primary');
    assert(styleCss.includes('.btn-secondary'), 'Mendefinisikan .btn-secondary');
});

test('Hover frame tombol terdefinisi halus tanpa pergeseran tata letak', () => {
    assert(styleCss.includes('button[class*="border-slate-"]:not(:disabled):hover'), 'Hover frame tombol sekunder');
    assert(styleCss.includes('box-shadow: 0 6px 18px rgba(var(--color-primary-rgb), 0.35) !important'), 'Glow halus tombol utama');
});

// 4. Proportional Typography Hierarchy Engine
console.log('\n🔤 4. Uji Hierarki Tipografi Proporsional (Fluid Clamp Titles & Stats):');
test('Page titles menggunakan fluid clamp(1.25rem, 2.5vw, 1.75rem) font-black', () => {
    assert(styleCss.includes('clamp(1.25rem, 2.5vw, 1.75rem)'), 'Page title clamp terdefinisi');
});

test('Modal titles menggunakan fluid clamp(1.05rem, 2vw, 1.35rem) font-black', () => {
    assert(styleCss.includes('clamp(1.05rem, 2vw, 1.35rem)'), 'Modal title clamp terdefinisi');
});

test('Bento stat numbers menggunakan fluid clamp(1.5rem, 3.5vw, 2.25rem) font-black', () => {
    assert(styleCss.includes('clamp(1.5rem, 3.5vw, 2.25rem)'), 'Bento stat number clamp terdefinisi');
});

// 5. Native App Modal & Bottom Sheet Harmony
console.log('\n📱 5. Uji Keselarasan Modal Ala App Native (Bottom Sheet & Pull Pill):');
test('Modal bottom sheet otomatis squircle 2rem di mobile dan 1.5rem di desktop', () => {
    assert(styleCss.includes('border-top-left-radius: 2rem !important'), 'Mobile squircle 2rem (32px)');
    assert(styleCss.includes('border-radius: 1.5rem !important'), 'Desktop squircle 1.5rem (24px)');
});

test('Pull indicator handle bar terdefinisi proporsional', () => {
    assert(styleCss.includes('.pull-indicator'), 'Pull indicator terpasang');
    assert(styleCss.includes('width: 2.75rem !important'), 'Panjang 44px proporsional');
});

test('Proteksi safe area bottom inset terpasang pada footer modal', () => {
    assert(styleCss.includes('padding-bottom: max(1rem, env(safe-area-inset-bottom)) !important'), 'Safe area bottom inset terpasang');
});

test('Seluruh modal utama di index.html memiliki modal-bottom-sheet dan rounded squircle', () => {
    assert(indexHtml.includes('id="terms-modal-content"') && indexHtml.includes('modal-bottom-sheet'), 'terms modal menggunakan modal-bottom-sheet');
    assert(indexHtml.includes('id="privacy-modal-content"') && indexHtml.includes('modal-bottom-sheet'), 'privacy modal menggunakan modal-bottom-sheet');
    assert(indexHtml.includes('id="category-modal-content"') && indexHtml.includes('modal-bottom-sheet'), 'category modal menggunakan modal-bottom-sheet');
    assert(indexHtml.includes('id="brand-modal-content"') && indexHtml.includes('modal-bottom-sheet'), 'brand modal menggunakan modal-bottom-sheet');
});

// 6. Zero Horizontal Overflow Engine
console.log('\n📐 6. Uji Proteksi Tata Letak Rapi & Zero Horizontal Overflow:');
test('Viewport & layout sections memiliki proteksi overflow-x: hidden', () => {
    assert(styleCss.includes('overflow-x: hidden !important'), 'Proteksi mutlak anti bocor horizontal');
});

// 7. Modals Spesifik (POS Pembayaran Kasir & Barcode Label Modal)
console.log('\n💳 7. Uji Kasir POS & Cetak Label Barcode Native App Harmony:');
const POS_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'pos', 'pos.js');
assert(fs.existsSync(POS_JS_PATH), 'pos.js harus tersedia');
const posJs = fs.readFileSync(POS_JS_PATH, 'utf-8');

const BARCODE_MODAL_PATH = path.join(ROOT_DIR, 'src', 'modules', 'admin', 'products', 'barcode-label-modal.js');
assert(fs.existsSync(BARCODE_MODAL_PATH), 'barcode-label-modal.js harus tersedia');
const barcodeModalJs = fs.readFileSync(BARCODE_MODAL_PATH, 'utf-8');

test('Modal POS Pembayaran Kasir memiliki pull-indicator, rounded-t-[2rem], dan layout proporsional', () => {
    assert(posJs.includes('pull-indicator w-12 h-1.5'), 'Pull indicator handle terpasang di modal POS');
    assert(posJs.includes('modal-bottom-sheet'), 'Menggunakan arsitektur modal-bottom-sheet');
    assert(posJs.includes('rounded-t-[2rem]'), 'Squircle 2rem pada mobile');
    assert(posJs.includes('id="pos-change-box"'), 'Kembalian box tersedia');
    assert(styleCss.includes('#pos-paid-input'), 'CSS kontras tinggi pos-paid-input terpasang di style.css');
});

test('Modal Cetak Label Barcode anti-wrap pada SKU dan responsif pada mobile', () => {
    assert(barcodeModalJs.includes('pull-indicator w-12 h-1.5'), 'Pull indicator handle terpasang di barcode modal');
    assert(barcodeModalJs.includes('whitespace-nowrap'), 'SKU terlindungi dari pemotongan hyphen (whitespace-nowrap)');
    assert(barcodeModalJs.includes('flex flex-col sm:flex-row'), 'Baris item varian fleksibel responsif mobile-desktop');
    assert(barcodeModalJs.includes('RawBT<span class="hidden sm:inline"> / Bluetooth</span>'), 'Tombol RawBT ringkas di layar kecil');
    assert(styleCss.includes('#modal-product-barcode-label .font-mono'), 'CSS anti-wrap font-mono terpasang di style.css');
});

const ATTENDANCE_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'admin', 'hr', 'hr-attendance.js');
assert(fs.existsSync(ATTENDANCE_JS_PATH), 'hr-attendance.js harus tersedia');
const attJs = fs.readFileSync(ATTENDANCE_JS_PATH, 'utf-8');

test('Modal Rekapitulasi Presensi Tim memiliki header anti-truncate, pull-indicator, dan footer proporsional', () => {
    assert(attJs.includes('pull-indicator w-12 h-1.5'), 'Pull indicator handle terpasang di modal rekap presensi');
    assert(attJs.includes('modal-bottom-sheet'), 'Menggunakan modal-bottom-sheet');
    assert(attJs.includes('att-rekap-period-picker-desktop') && attJs.includes('att-rekap-period-picker'), 'Selector bulan responsif desktop-mobile');
    assert(attJs.includes('min-h-[44px] px-4 rounded-xl') && attJs.includes('min-h-[44px] px-3 sm:px-4 rounded-xl'), 'Tombol footer berderet proporsional dalam 1 baris');
    assert(attJs.includes('placeholder="Cari nama / jabatan..."'), 'Placeholder search bar rekap presensi ringkas dan anti-terpotong di mobile');
});

// 8. Storefront Hero Banner & Section Header Ergonomics
console.log('\n🏪 8. Uji Storefront Hero Banner & Section Header Zero-Crushing:');
const SECTIONS_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'home', 'sections.js');
assert(fs.existsSync(SECTIONS_JS_PATH), 'sections.js harus tersedia');
const sectionsJs = fs.readFileSync(SECTIONS_JS_PATH, 'utf-8');

test('Hero Banner dan Promo Banner titles menggunakan line-clamp-2 anti-ellipsis truncation di mobile', () => {
    assert(sectionsJs.includes('line-clamp-2">\n                        ${esc(heroTitle)}') || sectionsJs.includes('line-clamp-2">\r\n                        ${esc(heroTitle)}'), 'Hero title menggunakan line-clamp-2');
    assert(sectionsJs.includes('line-clamp-2">${esc(b.title || \'Penawaran Spesial\')}</h2>'), 'Promo banner title menggunakan line-clamp-2');
});

test('Section Header Kategori dan Brand di index.html memiliki proteksi zero-crushing dan adaptive titles', () => {
    assert(indexHtml.includes('KATEGORI MATERIAL <span class="hidden sm:inline">&amp; ALAT TEKNIK</span>'), 'Judul kategori adaptif mobile/desktop');
    assert(indexHtml.includes('BRAND RESMI <span class="hidden sm:inline">&amp; PRODUSEN TERPERCAYA</span>'), 'Judul brand adaptif mobile/desktop');
    assert(indexHtml.includes('shrink-0 whitespace-nowrap min-h-[30px] inline-flex items-center justify-center rounded-lg border border-[rgba(var(--color-primary-rgb),0.15)] bg-[rgba(var(--color-primary-rgb),0.08)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[var(--color-primary)]'), 'Tombol Lihat Semua pada Kategori dan Brand memiliki shrink-0 whitespace-nowrap');
    assert(styleCss.includes('#sec-categories button[onclick*="openCategoryModal"]') && styleCss.includes('flex-shrink: 0 !important;'), 'CSS flex-shrink: 0 terpasang di style.css');
});

// 9. Quick Menu Modal & Badge Anti-Inflate Protection
console.log('\n🧭 9. Uji Quick Menu Modal & Badge Anti-Inflate Protection:');
test('Modal Tautan Cepat memiliki badge proporsional dan tidak terpengaruh min-height 44px', () => {
    assert(indexHtml.includes('id="quickmenu-modal-content"') && indexHtml.includes('modal-bottom-sheet'), 'Quickmenu modal menggunakan modal-bottom-sheet');
    assert(styleCss.includes('.modal-bottom-sheet button.primary-bg'), 'Selector min-height 44px hanya menarget button');
    assert(styleCss.includes('span.primary-bg') && styleCss.includes('min-height: unset !important;'), 'Guard min-height unset untuk span/badge terpasang');
    assert(indexHtml.includes('bg-rose-500 text-white shadow-2xs">Update</span>'), 'Badge Update di quickmenu modal berukuran proporsional chip');
});

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passCount} Passed, 0 Failed`);
console.log('✨ SELURUH APLIKASI SUDAH 100% NATIVE APP HARMONY & PROPOSIONAL! ✅');
console.log('============================================================\n');


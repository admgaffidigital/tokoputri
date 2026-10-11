import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('📐 MENJALANKAN TEST SUITE RESPONSIVE POS HEADER & QUICK MENU');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

const posJsPath = path.resolve('src/modules/pos/pos.js');
const posShiftJsPath = path.resolve('src/modules/pos/pos-shift.js');
const styleCssPath = path.resolve('src/style.css');

const posJs = fs.readFileSync(posJsPath, 'utf8');
const posShiftJs = fs.readFileSync(posShiftJsPath, 'utf8');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');

// ── 1. Uji Proteksi Sisi Kiri (Nama Toko & Kasir Anti-Gepeng) ──
console.log('🏪 1. Uji Proteksi Sisi Kiri (Nama Toko & Kasir Anti-Gepeng):');
assert(posJs.includes('min-w-[130px] sm:min-w-[160px] flex-1'), 'Sisi Kiri memiliki guard min-w-[130px] sm:min-w-[160px]');
assert(posJs.includes('hidden xl:flex w-8 h-8 rounded-xl items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20'), 'Ikon dekoratif mesin kasir disembunyikan di layar < xl untuk menghemat ruang');
assert(posJs.includes('truncate drop-shadow-2xs">${storeName}</h1>'), 'Nama toko menggunakan truncate dan drop-shadow rapi');
assert(posJs.includes('${esc(cashierName)}</span>'), 'Nama kasir ter-escape dan terlindungi XSS');

// ── 2. Uji Breakpoint Sisi Kanan (Anti-Overflow pada Tablet & HP) ──
console.log('\n📱 2. Uji Breakpoint Sisi Kanan (Anti-Overflow pada Layar < xl):');
assert(posJs.includes('pos-network-status-badge hidden xl:inline-flex'), 'Badge Online hanya muncul di layar lebar xl:');
assert(posJs.includes('id="pos-live-clock" class="hidden xl:inline-block'), 'Jam live clock tersembunyi di tablet untuk mencegah sesak');
assert(posJs.includes('hidden 2xl:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg'), 'Badge USB scanner tersembunyi hingga layar 2xl:');

// ── 3. Uji Quick Action Menu Popover [⋮] ──
console.log('\n✨ 3. Uji Quick Action Menu Popover [⋮] (Tersedia di Layar < xl):');
assert(posJs.includes('id="pos-mobile-menu-btn" onclick="window.togglePOSMobileMenu(event)" class="xl:hidden'), 'Tombol Titik Tiga [⋮] aktif di seluruh layar < xl (mobile & tablet)');
assert(posJs.includes('id="pos-mobile-quick-menu"'), 'Kontainer pos-mobile-quick-menu tersedia');
assert(posJs.includes('id="pos-mobile-menu-backdrop"'), 'Backdrop click-outside dismissal tersedia');
assert(posJs.includes('openMaterialEstimatorModal(\'pos\')'), 'Quick menu memuat Estimator Material');
assert(posJs.includes('openPrinterSettingsModal'), 'Quick menu memuat Printer Thermal');
assert(posJs.includes('openPOSCashMovementModal'), 'Quick menu memuat Catat Kas Laci F11');
assert(posJs.includes('openPOSShiftSummaryModal'), 'Quick menu memuat Ringkasan Shift');
assert(posJs.includes('openShoppingGuideModal(\'pos\')'), 'Quick menu memuat Panduan Kasir POS');
assert(posJs.includes('window.cashierLogout()'), 'Quick menu memuat Keluar Mode Kasir');

// ── 4. Uji Tombol Aksi Desktop & Tombol Keluar Adaptif ──
console.log('\n🖥️ 4. Uji Tombol Aksi Desktop & Tombol Keluar Adaptif:');
assert(posJs.includes('class="hidden xl:flex w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0 shadow-2xs" title="Kalkulator Kebutuhan Material Proyek'), 'Tombol Estimator F3 standalone dibuka di xl:flex');
assert(posJs.includes('class="hidden xl:flex w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0 shadow-2xs" title="Pengaturan Printer Kasir & Thermal [F7]'), 'Tombol Printer F7 standalone dibuka di xl:flex');
assert(posJs.includes('class="hidden xl:flex w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0 shadow-2xs" title="Buku Panduan Kasir POS"'), 'Tombol Panduan POS standalone dibuka di xl:flex');
assert(posJs.includes('class="hidden md:inline-flex h-8 px-2 sm:px-2.5 xl:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap shrink-0"'), 'Tombol Keluar kasir adaptif tampil sejak md:inline-flex');
assert(posJs.includes('<span class="hidden xl:inline">Keluar</span>'), 'Teks "Keluar" disembunyikan di tablet untuk menjaga efisiensi ruang');

// ── 5. Uji Tombol Parkir Antrean & Shift Header Badge ──
console.log('\n⏳ 5. Uji Tombol Parkir Antrean & Shift Header Badge:');
assert(posJs.includes('w-8 h-8 xl:w-auto xl:h-8 xl:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0 shadow-2xs'), 'Tombol Parkir (0) tetap berupa kotak 32px ringkas di tablet (< xl)');
assert(posJs.includes('<span class="hidden xl:inline whitespace-nowrap">Parkir (0)</span>'), 'Teks "Parkir (0)" disembunyikan di layar < xl saat 0 parkir');
assert(posShiftJs.includes('<span class="hidden xl:inline text-xs font-medium">Shift: </span>'), 'Label teks "Shift: " disembunyikan di layar < xl di storefront');
assert(posShiftJs.includes('hidden xl:inline-flex h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-amber-300'), 'Tombol Kas ± storefront disembunyikan di layar < xl (tersedia di Quick Menu F11)');

// ── 6. Uji CSS Safe Area & Overflow di style.css ──
console.log('\n🎨 6. Uji CSS Safe Area & Overflow di style.css:');
assert(styleCss.includes('.pos-storefront-header {') && styleCss.includes('overflow: visible !important;'), '.pos-storefront-header memiliki overflow: visible');
assert(styleCss.includes('max-width: 100vw !important;'), '.pos-storefront-header memiliki max-width: 100vw');
assert(styleCss.includes('.pos-mobile-quick-menu {'), 'Class .pos-mobile-quick-menu didefinisikan dengan benar');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ RESPONSIVE POS HEADER & QUICK MENU 100% VALID & BEBAS GEPEK! ✅');
} else {
    console.error('⚠️ DITEMUKAN KEGAGALAN DALAM PENGUJIAN!');
    process.exit(1);
}
console.log('============================================================');

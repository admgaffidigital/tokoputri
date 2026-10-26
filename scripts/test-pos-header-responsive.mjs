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
assert(posJs.includes('hidden sm:flex w-8 h-8 rounded-xl items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20'), 'Ikon dekoratif mesin kasir disembunyikan di HP (< sm) untuk menghemat ruang');
assert(posJs.includes('truncate drop-shadow-2xs">${storeName}</h1>'), 'Nama toko menggunakan truncate dan drop-shadow rapi');
assert(posJs.includes('${esc(cashierName)}</span>'), 'Nama kasir ter-escape dan terlindungi XSS');

// ── 2. Uji Breakpoint Sisi Kanan (Harmonisasi Tablet & Desktop) ──
console.log('\n📱 2. Uji Breakpoint Sisi Kanan (Harmonisasi Tablet & Desktop):');
assert(posJs.includes('pos-network-status-badge hidden lg:inline-flex'), 'Badge Online muncul di layar laptop & desktop (>= lg)');
assert(posJs.includes('id="pos-live-clock" class="hidden md:inline-block'), 'Jam live clock aktif di tablet & desktop (>= md)');
assert(posJs.includes('hidden 2xl:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg'), 'Badge USB scanner tersembunyi hingga layar 2xl:');

// ── 3. Uji Quick Action Menu Popover [⋮] (Khusus Mobile < md) ──
console.log('\n✨ 3. Uji Quick Action Menu Popover [⋮] (Khusus Smartphone < md):');
assert(posJs.includes('id="pos-mobile-menu-btn" onclick="window.togglePOSMobileMenu(event)" class="md:hidden'), 'Tombol Titik Tiga [⋮] khusus smartphone (md:hidden)');
assert(posJs.includes('id="pos-mobile-quick-menu"'), 'Kontainer pos-mobile-quick-menu tersedia');
assert(posJs.includes('id="pos-mobile-menu-backdrop"'), 'Backdrop click-outside dismissal tersedia');
assert(posJs.includes('openPrinterSettingsModal'), 'Quick menu memuat Printer Thermal');
assert(posJs.includes('openPOSCashMovementModal'), 'Quick menu memuat Catat Kas Laci F11');
assert(posJs.includes('openPOSShiftSummaryModal'), 'Quick menu memuat Ringkasan Shift');
assert(posJs.includes('openShoppingGuideModal(\'pos\')'), 'Quick menu memuat Panduan Kasir POS');
assert(posJs.includes('window.cashierLogout()'), 'Quick menu memuat Keluar Mode Kasir');

// ── 4. Uji Tombol Aksi Desktop & Tablet serta Split Workspace ──
console.log('\n🖥️ 4. Uji Tombol Aksi Desktop & Tablet serta Split Workspace:');
assert(posJs.includes('class="hidden md:flex w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0 shadow-2xs" title="Pengaturan Printer Kasir & Thermal [F7]'), 'Tombol Printer F7 standalone dibuka sejak tablet (md:flex)');
assert(posJs.includes('class="hidden lg:flex w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0 shadow-2xs" title="Buku Panduan Kasir POS"'), 'Tombol Panduan POS standalone dibuka di laptop/desktop (lg:flex)');
assert(posJs.includes('class="hidden md:inline-flex h-8 px-2 sm:px-2.5 lg:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap shrink-0"'), 'Tombol Keluar kasir adaptif tampil sejak md:inline-flex');
assert(posJs.includes('<span class="hidden lg:inline">Keluar</span>'), 'Teks "Keluar" tampil di laptop/desktop (lg:inline)');
assert(posJs.includes('hidden md:flex flex-col md:w-[42%] lg:w-[37%] xl:w-[35%]'), 'Panel keranjang kasir split screen aktif sejak tablet (md:flex)');

// ── 5. Uji Tombol Parkir Antrean & Shift Header Badge ──
console.log('\n⏳ 5. Uji Tombol Parkir Antrean & Shift Header Badge:');
assert(posJs.includes('w-8 h-8 lg:w-auto lg:h-8 lg:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0 shadow-2xs'), 'Tombol Parkir (0) ringkas 32px di tablet dan melebar di laptop (lg:w-auto)');
assert(posJs.includes('<span class="hidden lg:inline whitespace-nowrap">Parkir (0)</span>'), 'Teks "Parkir (0)" dibuka di laptop/desktop (lg:inline)');
assert(posShiftJs.includes('<span class="hidden lg:inline text-xs font-medium">Shift: </span>'), 'Label teks "Shift: " dibuka di laptop/desktop (lg:inline)');
assert(posShiftJs.includes('hidden lg:inline-flex h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-amber-300'), 'Tombol Kas ± storefront dibuka di laptop/desktop (lg:inline-flex)');

// ── 6. Uji CSS Safe Area & Responsive Engine di style.css ──
console.log('\n🎨 6. Uji CSS Safe Area & Responsive Engine di style.css:');
assert(styleCss.includes('.pos-storefront-header {') && styleCss.includes('overflow: visible !important;'), '.pos-storefront-header memiliki overflow: visible');
assert(styleCss.includes('max-width: 100vw !important;'), '.pos-storefront-header memiliki max-width: 100vw');
assert(styleCss.includes('.pos-mobile-quick-menu {'), 'Class .pos-mobile-quick-menu didefinisikan dengan benar');
assert(styleCss.includes('.md\\:flex { display: flex !important; }'), 'Rule pemulihan display responsif .md:flex aktif dengan !important');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ RESPONSIVE POS HEADER & QUICK MENU 100% VALID & BEBAS GEPEK! ✅');
} else {
    console.error('⚠️ DITEMUKAN KEGAGALAN DALAM PENGUJIAN!');
    process.exit(1);
}
console.log('============================================================');

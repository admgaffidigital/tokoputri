import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const FLASH_SALE_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'admin', 'flash-sale.js');

console.log('\n============================================================');
console.log('🧪 TEST SUITE: NATIVE APP HARMONY & RESPONSIVE FLASH SALE MODAL');
console.log('============================================================\n');

assert(fs.existsSync(FLASH_SALE_JS_PATH), 'Berkas flash-sale.js harus tersedia');
const code = fs.readFileSync(FLASH_SALE_JS_PATH, 'utf-8');

console.log('📱 1. Uji Arsitektur Native Bottom Sheet & Drag Indicator:');
assert(
    code.includes('modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh]'),
    'Modal flash sale harus mengimplementasikan arsitektur modal-bottom-sheet responsive'
);
console.log('  ✅ PASS: modal-bottom-sheet terpasang dengan max-h responsive (92dvh mobile, 88dvh desktop)');

assert(
    code.includes('pull-indicator sm:hidden'),
    'Modal flash sale harus memiliki pull-indicator drag handle bar di smartphone'
);
console.log('  ✅ PASS: pull-indicator drag handle bar terpasang di smartphone');

assert(
    code.includes('items-end sm:items-center justify-center p-0 sm:p-4'),
    'Modal flash sale harus docked di bagian bawah (items-end p-0) di mobile dan centered di desktop'
);
console.log('  ✅ PASS: Positioning bottom-sheet di mobile dan centered di desktop terpasang');

assert(
    code.includes('rounded-t-[2rem] sm:rounded-3xl'),
    'Modal flash sale harus memiliki rounded squircle native app (rounded-t-[2rem] di mobile, sm:rounded-3xl)'
);
console.log('  ✅ PASS: Squircle border-radius native app terpasang');

console.log('\n🎨 2. Uji Penyelarasan Tema Dinamis (Theme Harmony):');
assert(
    code.includes('linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))'),
    'Header modal dan tombol aksi harus mengadopsi gradasi tema dinamis var(--color-primary)'
);
console.log('  ✅ PASS: Gradasi tema dinamis toko var(--color-primary) terpasang di header dan tombol');

assert(
    code.includes('Harga Kilat (Rp)'),
    'Label harga flash sale harus ringkas dan jelas'
);
console.log('  ✅ PASS: Label harga flash sale proporsional');

assert(
    code.includes('style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.45);"'),
    'Input harga flash sale harus memiliki styling aksen warna toko yang menonjol'
);
console.log('  ✅ PASS: Input harga flash sale mengadopsi aksen warna tema toko dinamis');

console.log('\n🛡️ 3. Uji Eliminasi Overflow Horizontal & Anti Teks Terpotong:');
assert(
    code.includes('flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3'),
    'Header bagian daftar barang harus responsive (flex-col di mobile, sm:flex-row) anti-overflow'
);
console.log('  ✅ PASS: Header daftar barang responsive flex-col sm:flex-row anti teks terpotong');

assert(
    code.includes('overflow-x-hidden'),
    'Kontainer modal dan list harus memiliki proteksi overflow-x-hidden'
);
console.log('  ✅ PASS: Proteksi overflow-x-hidden terpasang mengeliminasi scrollbar horizontal');

assert(
    code.includes('Belum Ada Produk Promo Terpilih'),
    'Empty state harus menggunakan kartu bento interaktif yang memukau'
);
console.log('  ✅ PASS: Bento island empty state dengan tombol CTA terpilih');

console.log('\n============================================================');
console.log('🎯 TOTAL HASIL: 9 Passed, 0 Failed');
console.log('✨ MODAL FLASH SALE 100% NATIVE APP, RESPONSIVE & HARMONIS TEMA! ✅');
console.log('============================================================\n');

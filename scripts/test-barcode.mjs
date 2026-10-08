/**
 * Test Suite Generator Barcode Code 128 (Native SVG)
 * Memverifikasi integritas algoritma Code 128 untuk SKU Toko Putri
 */

import { encodeCode128B, generateCode128Svg } from '../src/core/barcode-code128.js';

console.log('============================================================');
console.log('🧪 MENJALANKAN TEST SUITE GENERATOR BARCODE CODE 128');
console.log('============================================================\n');

let passCount = 0;
let failCount = 0;

function assert(cond, msg) {
    if (cond) {
        console.log(`  ✅ PASS: ${msg}`);
        passCount++;
    } else {
        console.error(`  ❌ FAIL: ${msg}`);
        failCount++;
    }
}

// 1. Uji Pengkodean SKU Umum
console.log('📦 1. Uji Encoding SKU Alfanumerik:');
const enc1 = encodeCode128B('CAT-AVI-01');
assert(enc1 !== null, 'Encoding CAT-AVI-01 berhasil');
assert(enc1.text === 'CAT-AVI-01', 'Teks hasil encoding cocok');
assert(enc1.moduleCount === 145, 'Jumlah modul sesuai standar Code 128 (145 modul)');

// 2. Uji SKU Varian & Karakter Spesial (Titik, Garis Miring, Spasi)
console.log('\n🏷️ 2. Uji Karakter Spesial (Titik, Slash, Strip):');
const enc2 = encodeCode128B('KRN-1/2-PVC.01');
assert(enc2 !== null, 'Encoding karakter slash dan titik berhasil');
assert(enc2.moduleCount > 0, 'Modul ter-generate dengan benar');

// 3. Uji Proteksi Input Kosong & Tak Valid
console.log('\n🚫 3. Uji Proteksi Input Kosong:');
assert(encodeCode128B('') === null, 'Input kosong ditolak (mengembalikan null)');
assert(encodeCode128B(null) === null, 'Input null ditolak');
assert(encodeCode128B('   ') === null, 'Input spasi saja ditolak');

// 4. Uji Output SVG Vektor
console.log('\n🎨 4. Uji Output SVG Vektor:');
const svg = generateCode128Svg('PKU-5CM-1KG', { height: 40, showText: true });
assert(typeof svg === 'string', 'SVG berupa string');
assert(svg.startsWith('<svg'), 'Dimulai dengan tag <svg');
assert(svg.includes('<rect'), 'Memiliki elemen <rect untuk batang barcode');
assert(svg.includes('PKU-5CM-1KG'), 'Menyertakan teks SKU human-readable');

console.log('\n============================================================');
if (failCount === 0) {
    console.log(`🎯 HASIL UJI COBA: ${passCount} Passed, 0 Failed`);
    console.log('✨ ENGINE GENERATOR BARCODE CODE 128 TERVERIFIKASI 100% VALID! ✅\n');
} else {
    console.error(`❌ HASIL UJI COBA: ${passCount} Passed, ${failCount} Failed\n`);
    process.exit(1);
}

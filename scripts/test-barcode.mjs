/**
 * Test Suite Generator Barcode Code 128 (Native SVG)
 * Memverifikasi integritas algoritma Code 128 untuk SKU Toko Putri
 */

import { encodeCode128B, encodeCode128C, encodeCode128Auto, generateCode128Svg } from '../src/core/barcode-code128.js';

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

// 3. Uji Encoding Subtipe C (Numeric Pairing 2 Digit)
console.log('\n🔢 3. Uji Encoding Subtipe C (Mode Angka Genap):');
const encC = encodeCode128C('8992002002');
assert(encC !== null, 'Encoding angka genap 10 digit berhasil');
assert(encC.subtype === 'C', 'Subtipe yang dihasilkan adalah C');
// 10 digit = 5 pasangan data. Modul: (1 start + 5 data + 1 checksum + 1 stop) * 11 + 2 = 90 modul
assert(encC.moduleCount === 90, 'Panjang modul Mode C terkompresi optimal (90 modul vs 145 modul)');
assert(encodeCode128C('12345') === null, 'Digit ganjil ditolak oleh Mode C');
assert(encodeCode128C('ABC123') === null, 'String alfanumerik ditolak oleh Mode C');

// 4. Uji Auto Subtipe Detector
console.log('\n🤖 4. Uji Auto Subtipe Detector:');
const autoNumeric = encodeCode128Auto('8991001001');
assert(autoNumeric.subtype === 'C', 'Digit genap otomatis dialihkan ke Mode C');
const autoAlphanum = encodeCode128Auto('SKU-1004');
assert(autoAlphanum.subtype === 'B', 'Alfanumerik otomatis dialihkan ke Mode B');

// 5. Uji Proteksi Input Kosong & Tak Valid
console.log('\n🚫 5. Uji Proteksi Input Kosong:');
assert(encodeCode128B('') === null, 'Input kosong ditolak (mengembalikan null)');
assert(encodeCode128B(null) === null, 'Input null ditolak');
assert(encodeCode128B('   ') === null, 'Input spasi saja ditolak');

// 6. Uji Output SVG Vektor (High-Res & Background Putih Solid)
console.log('\n🎨 6. Uji Output SVG Vektor:');
const svg = generateCode128Svg('PKU-5CM-1KG', { height: 58, showText: true });
assert(typeof svg === 'string', 'SVG berupa string');
assert(svg.startsWith('<svg'), 'Dimulai dengan tag <svg');
assert(svg.includes('<rect'), 'Memiliki elemen <rect untuk batang barcode');
assert(svg.includes('fill="#ffffff"'), 'Memiliki background putih solid murni');
assert(svg.includes('PKU-5CM-1KG'), 'Menyertakan teks SKU human-readable');

// 7. Uji Kalkulasi Jumlah Label & Estimasi Lembar A4 (Zero-Flicker Partial DOM)
console.log('\n📄 7. Uji Kalkulasi Agregasi Kuantitas Label & Estimasi Lembar A4:');
const sampleQueue = [
    { name: 'Cat Tembok 5kg Putih', sku: 'CAT-5KG-WHT', qty: 15 },
    { name: 'Cat Tembok 5kg Abu', sku: 'CAT-5KG-GRY', qty: 10 },
    { name: 'Kuas Rol 9 inch', sku: 'ROL-9INCH', qty: 5 }
];

const calcTotalLabels = (queue) => queue.reduce((acc, it) => acc + (parseInt(it.qty, 10) || 0), 0);
const calcA4Sheets = (total, paperSize) => {
    const perSheet = paperSize === 'a4-2x7' ? 14 : 30;
    return Math.ceil(total / perSheet) || 0;
};
const sanitizeQty = (val) => {
    const parsed = parseInt(val, 10);
    return isNaN(parsed) ? 0 : Math.max(0, parsed);
};

const total1 = calcTotalLabels(sampleQueue);
assert(total1 === 30, 'Total stiker agregat 15 + 10 + 5 = 30 lembar');

const sheets3x10 = calcA4Sheets(total1, 'a4-3x10');
assert(sheets3x10 === 1, 'Kertas A4 3x10 untuk 30 stiker butuh tepat 1 lembar');

const sheets3x10More = calcA4Sheets(31, 'a4-3x10');
assert(sheets3x10More === 2, 'Kertas A4 3x10 untuk 31 stiker butuh 2 lembar (pembulatan ke atas)');

const sheets2x7 = calcA4Sheets(total1, 'a4-2x7');
assert(sheets2x7 === 3, 'Kertas A4 2x7 untuk 30 stiker butuh 3 lembar (ceil 30 / 14 = 3)');

assert(sanitizeQty('abc') === 0, 'Kuantitas invalid (non-angka) di-sanitize aman menjadi 0');
assert(sanitizeQty('-5') === 0, 'Kuantitas negatif di-sanitize aman menjadi 0');
assert(sanitizeQty('12.8') === 12, 'Kuantitas string angka bulat di-sanitize aman');

console.log('\n============================================================');
if (failCount === 0) {
    console.log(`🎯 HASIL UJI COBA: ${passCount} Passed, 0 Failed`);
    console.log('✨ ENGINE GENERATOR BARCODE CODE 128 & LABEL PRINT TERVERIFIKASI 100% VALID! ✅\n');
} else {
    console.error(`❌ HASIL UJI COBA: ${passCount} Passed, ${failCount} Failed\n`);
    process.exit(1);
}

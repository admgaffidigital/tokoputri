/**
 * Test Suite: Validasi Pencocokan Barcode/SKU Produk Induk & Varian POS Kasir
 */

import assert from 'node:assert';

// Normalisasi dan bersihkan kode barcode dari prefix AIM symbology (misal ]C1, ]e0)
const cleanBarcodeRaw = (raw) => {
    if (raw === null || raw === undefined) return '';
    let str = String(raw).trim();
    // Hapus prefix AIM Symbology (misal ]C1 untuk Code 128, ]e0 untuk EAN, dll)
    str = str.replace(/^\][a-zA-Z0-9]{2}/, '');
    // Hapus karakter non-printable / control character ASCII 0-31 dan 127
    str = str.replace(/[\x00-\x1F\x7F]/g, '');
    return str.trim();
};

/**
 * Dapatkan variasi kode normalisasi untuk toleransi pencocokan scanner:
 * - Kode bersih asli (lowercase)
 * - Kode tanpa leading zeros (misal '0899...' -> '899...')
 * - Kode UPC-A ke EAN-13 padding (misal 12 digit ditambah '0')
 * - Kode tanpa spasi/tanda hubung/titik
 */
const getBarcodeVariations = (raw) => {
    const clean = cleanBarcodeRaw(raw);
    if (!clean) return [];
    const lower = clean.toLowerCase();
    const set = new Set();
    set.add(lower);

    // Variasi tanpa leading zeroes (misal scanner membaca '0899...' padahal di database '899...')
    const noZero = lower.replace(/^0+/, '');
    if (noZero && noZero !== lower) {
        set.add(noZero);
    }

    // Variasi padding nol jika 12 digit angka (UPC-A to EAN-13)
    if (/^\d{12}$/.test(lower)) {
        set.add('0' + lower);
    }

    // Variasi tanpa pemisah spasi, strip, underscore, titik
    const noDelim = lower.replace(/[\s\-_.]/g, '');
    if (noDelim && noDelim !== lower) {
        set.add(noDelim);
        const noDelimNoZero = noDelim.replace(/^0+/, '');
        if (noDelimNoZero) set.add(noDelimNoZero);
    }

    return Array.from(set);
};

const matchCodeAny = (needleVariations, candidateStr) => {
    if (candidateStr === null || candidateStr === undefined || candidateStr === '') return false;
    const candClean = cleanBarcodeRaw(candidateStr).toLowerCase();
    if (!candClean) return false;

    // Kecocokan langsung
    if (needleVariations.includes(candClean)) return true;

    // Kecocokan tanpa leading zeroes
    const candNoZero = candClean.replace(/^0+/, '');
    if (candNoZero && needleVariations.includes(candNoZero)) return true;

    // Kecocokan padding EAN 12 digit
    if (/^\d{12}$/.test(candClean) && needleVariations.includes('0' + candClean)) return true;

    // Kecocokan tanpa pembatas
    const candNoDelim = candClean.replace(/[\s\-_.]/g, '');
    if (candNoDelim && needleVariations.includes(candNoDelim)) return true;

    return false;
};

// Helper findProductOrVariantByBarcode yang identik dengan src/modules/pos/pos.js
const findProductOrVariantByBarcode = (rawCode, products) => {
    if (rawCode === null || rawCode === undefined || rawCode === '') return null;
    const variations = getBarcodeVariations(rawCode);
    if (!variations.length) return null;
    const list = products || [];

    // 1. Prioritas Tertinggi: Cocokkan SKU/Barcode spesifik varian aktif
    for (const p of list) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        if (Array.isArray(p.variants) && p.variants.length > 0) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const pSkuStr = String(p.sku || '').trim().toLowerCase();

            for (let vIdx = 0; vIdx < p.variants.length; vIdx++) {
                const v = p.variants[vIdx];
                if (!v || v.isActive === false || v.isActive === 'false') continue;

                // Format fallback label yang dicetak oleh modal label:
                const fallbackSku1 = `${pSkuStr || pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku2 = `${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku3 = `sku-${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku4 = pSkuStr ? `sku-${pSkuStr}-${vIdx + 1}`.toLowerCase() : '';

                if (
                    matchCodeAny(variations, v.barcode) ||
                    matchCodeAny(variations, v.sku) ||
                    matchCodeAny(variations, fallbackSku1) ||
                    matchCodeAny(variations, fallbackSku2) ||
                    matchCodeAny(variations, fallbackSku3) ||
                    (fallbackSku4 && matchCodeAny(variations, fallbackSku4))
                ) {
                    return {
                        product: p,
                        variant: v,
                        variantIdx: vIdx,
                        isVariantMatch: true
                    };
                }
            }
        }
    }

    // 2. Cocokkan SKU/Barcode/ID di level produk induk aktif
    for (const p of list) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        const pIdStr = String(p.id || '').trim().toLowerCase();
        const fallbackSku = `sku-${pIdStr}`.toLowerCase();

        if (
            matchCodeAny(variations, p.barcode) ||
            matchCodeAny(variations, p.sku) ||
            matchCodeAny(variations, pIdStr) ||
            matchCodeAny(variations, fallbackSku)
        ) {
            return {
                product: p,
                variant: null,
                variantIdx: -1,
                isVariantMatch: false
            };
        }
    }

    return null;
};

// Deteksi produk/varian nonaktif untuk memberikan feedback jelas di kasir
const findInactiveProductByBarcode = (rawCode, products) => {
    if (rawCode === null || rawCode === undefined || rawCode === '') return null;
    const variations = getBarcodeVariations(rawCode);
    if (!variations.length) return null;
    const list = products || [];

    for (const p of list) {
        if (!p) continue;
        const pIsInactive = p.isActive === 'false' || p.isActive === false;

        if (Array.isArray(p.variants) && p.variants.length > 0) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const pSkuStr = String(p.sku || '').trim().toLowerCase();

            for (let vIdx = 0; vIdx < p.variants.length; vIdx++) {
                const v = p.variants[vIdx];
                if (!v) continue;
                const vIsInactive = pIsInactive || v.isActive === false || v.isActive === 'false';
                if (!vIsInactive) continue;

                const fallbackSku1 = `${pSkuStr || pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku2 = `${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku3 = `sku-${pIdStr}-${vIdx + 1}`.toLowerCase();

                if (
                    matchCodeAny(variations, v.barcode) ||
                    matchCodeAny(variations, v.sku) ||
                    matchCodeAny(variations, fallbackSku1) ||
                    matchCodeAny(variations, fallbackSku2) ||
                    matchCodeAny(variations, fallbackSku3)
                ) {
                    return {
                        product: p,
                        variant: v,
                        variantIdx: vIdx,
                        isVariantMatch: true,
                        isInactive: true
                    };
                }
            }
        }

        if (pIsInactive) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const fallbackSku = `sku-${pIdStr}`.toLowerCase();

            if (
                matchCodeAny(variations, p.barcode) ||
                matchCodeAny(variations, p.sku) ||
                matchCodeAny(variations, pIdStr) ||
                matchCodeAny(variations, fallbackSku)
            ) {
                return {
                    product: p,
                    variant: null,
                    variantIdx: -1,
                    isVariantMatch: false,
                    isInactive: true
                };
            }
        }
    }

    return null;
};

console.log('============================================================');
console.log('🧪 MENJALANKAN TEST SUITE PENCOCOKAN BARCODE/SKU KASIR POS');
console.log('============================================================');

const mockProducts = [
    {
        id: 'PROD-001',
        name: 'Semen Gresik 50kg',
        sku: 'SKU-SMN-001',
        barcode: '8991001001',
        price: 68000,
        isActive: 'true'
    },
    {
        id: 'PROD-002',
        name: 'Cat No Drop Anti Bocor',
        sku: 'SKU-NODROP-PARENT',
        barcode: '8992002000',
        price: 65000,
        isActive: 'true',
        variants: [
            {
                name: '1kg Putih 001',
                sku: 'VAR-ND-PUTIH-1KG',
                barcode: '8992002001',
                price: 65000,
                stock: 12,
                isActive: true
            },
            {
                name: '1kg Abu-abu 002',
                sku: 'VAR-ND-ABU-1KG',
                barcode: '8992002002',
                price: 65000,
                stock: 8,
                isActive: true
            },
            {
                name: '4kg Putih 001',
                sku: 'VAR-ND-PUTIH-4KG',
                barcode: '8992002003',
                price: 245000,
                stock: 5,
                isActive: true
            },
            {
                name: 'Varian Polos Tanpa SKU/Barcode',
                price: 70000,
                stock: 10,
                isActive: true
            },
            {
                name: 'Varian Nonaktif',
                sku: 'VAR-ND-NONAKTIF',
                barcode: '8992002999',
                price: 50000,
                stock: 0,
                isActive: false
            }
        ]
    },
    {
        id: '1004',
        name: 'Paku Beton 5cm (Tanpa Barcode/SKU Manual)',
        price: 25000,
        isActive: 'true'
    },
    {
        id: 'PROD-003',
        name: 'Produk Discontinued',
        sku: 'SKU-DISC-001',
        barcode: '8993003001',
        price: 10000,
        isActive: 'false'
    }
];

// Test 1: Scan SKU Produk Tunggal
console.log('\n📦 1. Uji Scan Produk Tanpa Varian:');
const t1 = findProductOrVariantByBarcode('SKU-SMN-001', mockProducts);
assert.ok(t1, 'Produk harus ditemukan');
assert.strictEqual(t1.product.name, 'Semen Gresik 50kg');
assert.strictEqual(t1.isVariantMatch, false);
console.log('  ✅ PASS: SKU produk induk cocok');

// Test 2: Scan Barcode Fisik Produk Tunggal (case insensitive & trimmed)
const t2 = findProductOrVariantByBarcode('  8991001001  ', mockProducts);
assert.ok(t2, 'Produk harus ditemukan via barcode');
assert.strictEqual(t2.product.id, 'PROD-001');
console.log('  ✅ PASS: Barcode fisik produk induk cocok dengan pembersihan spasi');

// Test 3: Scan Barcode Spesifik Varian
console.log('\n🏷️ 2. Uji Scan Barcode Spesifik Varian:');
const t3 = findProductOrVariantByBarcode('8992002002', mockProducts);
assert.ok(t3, 'Varian harus ditemukan');
assert.strictEqual(t3.isVariantMatch, true);
assert.strictEqual(t3.variant.name, '1kg Abu-abu 002');
assert.strictEqual(t3.variantIdx, 1);
assert.strictEqual(t3.product.name, 'Cat No Drop Anti Bocor');
console.log('  ✅ PASS: Barcode varian "1kg Abu-abu 002" langsung terdeteksi ke varian spesifik');

// Test 4: Scan SKU Spesifik Varian
const t4 = findProductOrVariantByBarcode('var-nd-putih-4kg', mockProducts);
assert.ok(t4, 'Varian harus ditemukan via SKU varian case-insensitive');
assert.strictEqual(t4.isVariantMatch, true);
assert.strictEqual(t4.variant.name, '4kg Putih 001');
assert.strictEqual(t4.variant.price, 245000);
console.log('  ✅ PASS: SKU varian "4kg Putih 001" terdeteksi tepat');

// Test 5: Scan Barcode Induk pada Produk Ber-Varian
console.log('\n👨‍👩‍👧 3. Uji Scan Barcode Induk Produk Ber-Varian:');
const t5 = findProductOrVariantByBarcode('SKU-NODROP-PARENT', mockProducts);
assert.ok(t5, 'Produk induk harus ditemukan');
assert.strictEqual(t5.isVariantMatch, false);
assert.strictEqual(t5.variant, null);
assert.strictEqual(t5.product.variants.length, 5);
console.log('  ✅ PASS: Barcode induk produk ber-varian terdeteksi sebagai induk (membuka sheet varian)');

// Test 6: Pembersihan Otomatis Prefix AIM Symbology (misal ]C1, ]e0 dari scanner USB/Bluetooth)
console.log('\n📡 4. Uji Pembersihan Prefix AIM Symbology:');
const t6 = findProductOrVariantByBarcode(']C1SKU-SMN-001\r', mockProducts);
assert.ok(t6, 'Prefix ]C1 dan CR harus dibersihkan otomatis');
assert.strictEqual(t6.product.name, 'Semen Gresik 50kg');
console.log('  ✅ PASS: Prefix ]C1Code128 berhasil dinormalisasi dan produk ditemukan');

const t6b = findProductOrVariantByBarcode(']C18992002002', mockProducts);
assert.ok(t6b, 'Prefix ]C1 pada barcode varian berhasil dinormalisasi');
assert.strictEqual(t6b.variant.name, '1kg Abu-abu 002');
console.log('  ✅ PASS: Prefix ]C1 pada varian berhasil dinormalisasi');

// Test 7: Fallback Label SKU Produk Tanpa Barcode/SKU Manual
console.log('\n🏷️ 5. Uji Fallback Label SKU & Varian:');
const t7 = findProductOrVariantByBarcode('SKU-1004', mockProducts);
assert.ok(t7, 'Label SKU fallback "SKU-1004" harus cocok dengan produk id 1004');
assert.strictEqual(t7.product.name, 'Paku Beton 5cm (Tanpa Barcode/SKU Manual)');
console.log('  ✅ PASS: Fallback label "SKU-1004" berhasil dicocokkan ke produk');

// Test 8: Fallback Label SKU Varian Tanpa SKU/Barcode Manual
const t8 = findProductOrVariantByBarcode('SKU-NODROP-PARENT-4', mockProducts);
assert.ok(t8, 'Label varian fallback "SKU-NODROP-PARENT-4" harus cocok');
assert.strictEqual(t8.variant.name, 'Varian Polos Tanpa SKU/Barcode');
console.log('  ✅ PASS: Fallback label varian "SKU-NODROP-PARENT-4" terdeteksi tepat');

// Test 9: Varian Nonaktif Tidak Boleh Terdeteksi
console.log('\n🚫 6. Uji Proteksi Status Nonaktif & Data Hilang:');
const t9 = findProductOrVariantByBarcode('8992002999', mockProducts);
assert.strictEqual(t9, null, 'Varian nonaktif tidak boleh terdeteksi');
console.log('  ✅ PASS: Varian nonaktif diabaikan');

// Test 10: Produk Nonaktif Tidak Boleh Terdeteksi
const t10 = findProductOrVariantByBarcode('8993003001', mockProducts);
assert.strictEqual(t10, null, 'Produk nonaktif tidak boleh terdeteksi');
console.log('  ✅ PASS: Produk nonaktif diabaikan');

// Test 11: Barcode Tidak Dikenal
const t11 = findProductOrVariantByBarcode('BARCODE-ACAK-TIDAK-ADA', mockProducts);
assert.strictEqual(t11, null, 'Barcode liar harus mengembalikan null');
console.log('  ✅ PASS: Barcode acak mengembalikan null');

// Test 12: Kamera HP Membaca Barcode EAN dengan Leading Zero Tambahan
console.log('\n📱 7. Uji Toleransi Kamera HP (Leading Zero & Format Scanner):');
const t12 = findProductOrVariantByBarcode('08991001001', mockProducts);
assert.ok(t12, 'Barcode dengan leading zero dari kamera HP harus cocok ke 8991001001');
assert.strictEqual(t12.product.id, 'PROD-001');
console.log('  ✅ PASS: Scanner HP membaca 08991001001 berhasil dicocokkan ke 8991001001');

// Test 13: Kamera HP Membaca Barcode Varian dengan Leading Zero
const t13 = findProductOrVariantByBarcode('08992002002', mockProducts);
assert.ok(t13, 'Barcode varian dengan leading zero harus cocok');
assert.strictEqual(t13.variant.name, '1kg Abu-abu 002');
console.log('  ✅ PASS: Scanner HP membaca 08992002002 cocok ke varian 1kg Abu-abu 002');

// Test 14: Barcode Bertipe Number (Angka Murni Tanpa String)
const mockProductsWithNumber = [
    {
        id: 'PROD-NUM',
        name: 'Cat Dasar Anti Karat (Barcode Number)',
        barcode: 8995550001, // Tipe number di DB
        price: 45000,
        isActive: true
    }
];
const t14 = findProductOrVariantByBarcode('8995550001', mockProductsWithNumber);
assert.ok(t14, 'Barcode bertipe number harus ditemukan tanpa TypeError');
assert.strictEqual(t14.product.name, 'Cat Dasar Anti Karat (Barcode Number)');
console.log('  ✅ PASS: Barcode tipe angka murni di database berhasil dicocokkan');

// Test 15: SKU dengan Variasi Spasi atau Strip
const t15 = findProductOrVariantByBarcode('SKU SMN 001', mockProducts);
assert.ok(t15, 'SKU dengan variasi spasi harus cocok ke SKU-SMN-001');
assert.strictEqual(t15.product.id, 'PROD-001');
console.log('  ✅ PASS: Variasi spasi/strip SKU berhasil dicocokkan');

// Test 16: Deteksi Produk Nonaktif untuk Feedback Informatif di Kasir
console.log('\n💡 8. Uji Deteksi Produk Nonaktif (Feedback Cerdas Kasir):');
const t16 = findInactiveProductByBarcode('8993003001', mockProducts);
assert.ok(t16, 'Produk nonaktif harus terdeteksi oleh helper inactive');
assert.strictEqual(t16.isInactive, true);
assert.strictEqual(t16.product.name, 'Produk Discontinued');
console.log('  ✅ PASS: Produk nonaktif terdeteksi dengan tepat untuk notifikasi kasir');

const t16b = findInactiveProductByBarcode('8992002999', mockProducts);
assert.ok(t16b, 'Varian nonaktif harus terdeteksi oleh helper inactive');
assert.strictEqual(t16b.isInactive, true);
assert.strictEqual(t16b.variant.name, 'Varian Nonaktif');
console.log('  ✅ PASS: Varian nonaktif terdeteksi dengan tepat untuk notifikasi kasir');

console.log('\n============================================================');
console.log('🎯 HASIL UJI COBA: Seluruh 17 Pengujian Barcode & SKU PASS! ✅');
console.log('============================================================\n');

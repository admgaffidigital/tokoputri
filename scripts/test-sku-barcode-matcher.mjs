/**
 * Test Suite: Validasi Pencocokan Barcode/SKU Produk Induk & Varian POS Kasir
 */

import assert from 'node:assert';

// Helper findProductOrVariantByBarcode yang identik dengan src/modules/pos/pos.js
const findProductOrVariantByBarcode = (rawCode, products) => {
    if (!rawCode) return null;
    const c = String(rawCode).trim().toLowerCase();

    // 1. Prioritas Tertinggi: Cocokkan SKU/Barcode spesifik varian
    for (const p of products) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        if (Array.isArray(p.variants) && p.variants.length > 0) {
            const vIdx = p.variants.findIndex(v =>
                v && v.isActive !== false && v.isActive !== 'false' &&
                ((v.barcode && String(v.barcode).trim().toLowerCase() === c) ||
                 (v.sku && String(v.sku).trim().toLowerCase() === c))
            );
            if (vIdx > -1) {
                return {
                    product: p,
                    variant: p.variants[vIdx],
                    variantIdx: vIdx,
                    isVariantMatch: true
                };
            }
        }
    }

    // 2. Cocokkan SKU/Barcode/ID di level produk induk
    for (const p of products) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        const bMatch = (p.barcode && String(p.barcode).trim().toLowerCase() === c);
        const sMatch = (p.sku && String(p.sku).trim().toLowerCase() === c);
        const iMatch = (p.id && String(p.id).trim().toLowerCase() === c);
        if (bMatch || sMatch || iMatch) {
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
assert.strictEqual(t5.product.variants.length, 4);
console.log('  ✅ PASS: Barcode induk produk ber-varian terdeteksi sebagai induk (membuka sheet varian)');

// Test 6: Varian Nonaktif Tidak Boleh Terdeteksi
console.log('\n🚫 4. Uji Proteksi Status Nonaktif & Data Hilang:');
const t6 = findProductOrVariantByBarcode('8992002999', mockProducts);
assert.strictEqual(t6, null, 'Varian nonaktif tidak boleh terdeteksi');
console.log('  ✅ PASS: Varian nonaktif diabaikan');

// Test 7: Produk Nonaktif Tidak Boleh Terdeteksi
const t7 = findProductOrVariantByBarcode('8993003001', mockProducts);
assert.strictEqual(t7, null, 'Produk nonaktif tidak boleh terdeteksi');
console.log('  ✅ PASS: Produk nonaktif diabaikan');

// Test 8: Barcode Tidak Dikenal
const t8 = findProductOrVariantByBarcode('BARCODE-ACAK-TIDAK-ADA', mockProducts);
assert.strictEqual(t8, null, 'Barcode liar harus mengembalikan null');
console.log('  ✅ PASS: Barcode acak mengembalikan null');

console.log('\n============================================================');
console.log('🎯 HASIL UJI COBA: Seluruh 8 Pengujian Barcode & SKU PASS! ✅');
console.log('============================================================\n');

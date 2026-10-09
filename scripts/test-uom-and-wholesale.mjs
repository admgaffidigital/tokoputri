/**
 * Test Suite: Multi-Satuan Bertingkat (UOM Hierarchy) & Harga Grosir Fleksibel
 * Validasi konversi kuantitas dasar vs kemasan, evaluasi harga grosir,
 * pencocokan barcode kemasan, dan proteksi margin HPP.
 */

import {
    getAvailableUnits,
    convertQtyToBase,
    convertBaseToUnit,
    resolveEffectivePrice,
    checkHppMarginStatus,
    findProductByMultiUnitBarcode
} from '../src/core/uom.js';

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE MULTI-SATUAN & HARGA GROSIR (UOM)');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

const assert = (condition, desc) => {
    if (condition) {
        console.log(`  ✅ PASS: ${desc}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${desc}`);
        failed++;
    }
};

// ─── DUMMY DATA PRODUK RITEL MATERIAL ────────────────────────
const sampleKabel = {
    id: 'prod-kabel-01',
    name: 'Kabel Listrik NYM 2x1.5mm',
    unit: 'Meter',
    price: 8000,
    hpp: 6000,
    sku: 'KBL-NYM-01',
    wholesale: [
        { minQty: 10, price: 7200 } // Beli >= 10 meter harga Rp 7.200/m
    ],
    multiUnits: [
        {
            name: 'Roll',
            multiplier: 100, // 1 Roll = 100 Meter
            price: 680000,   // Rp 680.000 / Roll (lebih murah dari eceran 100 * 8.000 = 800.000)
            hpp: 550000,     // Modal Roll dari distributor
            barcode: '8991234567890'
        }
    ]
};

const sampleKeramik = {
    id: 'prod-keramik-01',
    name: 'Keramik Lantai Putih Polos 40x40',
    unit: 'Keping',
    price: 12000,
    hpp: 9000,
    sku: 'KRM-40-WHT',
    multiUnits: [
        {
            name: 'Dus',
            multiplier: 6, // 1 Dus = 6 Keping
            price: 65000,  // Rp 65.000 / Dus
            hpp: 50000,
            barcode: '8999876543210'
        }
    ]
};

// ─── 1. UJI DEFINISI & EKSTRAKSI SATUAN TERSEDIA ──────────────
console.log('📦 1. Uji Ekstraksi Satuan Tersedia (Base UOM + Packaging UOM):');
const kabelUnits = getAvailableUnits(sampleKabel);
assert(kabelUnits.length === 2, `Kabel memiliki 2 pilihan satuan (didapat: ${kabelUnits.length})`);
assert(kabelUnits[0].name === 'Meter' && kabelUnits[0].isBase === true, `Satuan dasar adalah 'Meter'`);
assert(kabelUnits[0].multiplier === 1 && kabelUnits[0].price === 8000, `Satuan dasar rasio 1 harga Rp 8.000`);
assert(kabelUnits[1].name === 'Roll' && kabelUnits[1].isBase === false, `Satuan kemasan adalah 'Roll'`);
assert(kabelUnits[1].multiplier === 100 && kabelUnits[1].price === 680000, `Satuan kemasan 1 Roll = 100m, harga Rp 680.000`);
assert(kabelUnits[1].barcode === '8991234567890', `Barcode khusus Roll tersimpan valid`);

// ─── 2. UJI KONVERSI KUANTITAS DASAR <-> KEMASAN ─────────────
console.log('\n🔄 2. Uji Konversi Kuantitas (Conversion Engine):');
const qtyMeterFrom2Roll = convertQtyToBase(2, 100);
assert(qtyMeterFrom2Roll === 200, `2 Roll (rasio 100) = 200 Meter (didapat: ${qtyMeterFrom2Roll})`);

const qtyRollFrom250Meter = convertBaseToUnit(250, 100);
assert(qtyRollFrom250Meter === 2.5, `250 Meter = 2.5 Roll (didapat: ${qtyRollFrom250Meter})`);

const qtyKepingFrom3Dus = convertQtyToBase(3, 6);
assert(qtyKepingFrom3Dus === 18, `3 Dus keramik (rasio 6) = 18 Keping (didapat: ${qtyKepingFrom3Dus})`);

const qtyDusFrom12Keping = convertBaseToUnit(12, 6);
assert(qtyDusFrom12Keping === 2, `12 Keping = 2 Dus (didapat: ${qtyDusFrom12Keping})`);

// ─── 3. UJI EVALUASI HARGA SATUAN & GROSIR BERTINGKAT ─────────
console.log('\n💰 3. Uji Evaluasi Harga Satuan & Grosir Bertingkat:');
// Beli 5 meter (eceran biasa)
const p1 = resolveEffectivePrice(sampleKabel, 'Meter', 5);
assert(p1.price === 8000 && !p1.isWholesale, `Beli 5 Meter berlaku harga eceran Rp 8.000`);

// Beli 15 meter (kena tier grosir >= 10 meter)
const p2 = resolveEffectivePrice(sampleKabel, 'Meter', 15);
assert(p2.price === 7200 && p2.isWholesale === true, `Beli 15 Meter otomatis dapat harga grosir Rp 7.200/m`);

// Beli 1 Roll (satuan kemasan)
const p3 = resolveEffectivePrice(sampleKabel, 'Roll', 1);
assert(p3.price === 680000 && p3.isPackagingUnit === true, `Beli 1 Roll berlaku harga kemasan Rp 680.000`);
assert(p3.unitMultiplier === 100, `Rasio unit Roll adalah 100`);

// ─── 4. UJI PENCOCOKAN SCAN BARCODE KHUSUS SATUAN KEMASAN ─────
console.log('\n🏷️ 4. Uji Scan Barcode Satuan Kemasan (Packaging Barcode):');
const catalogList = [sampleKabel, sampleKeramik];
const matchRoll = findProductByMultiUnitBarcode(catalogList, '8991234567890');
assert(matchRoll !== null, `Barcode Roll berhasil dicocokkan ke produk`);
assert(matchRoll.product.id === 'prod-kabel-01', `Produk cocok: ${matchRoll.product.name}`);
assert(matchRoll.matchedUnit.name === 'Roll', `Satuan yang cocok adalah 'Roll'`);

const matchDus = findProductByMultiUnitBarcode(catalogList, '8999876543210');
assert(matchDus !== null && matchDus.matchedUnit.name === 'Dus', `Barcode Dus keramik cocok ke satuan 'Dus'`);

const matchNotFound = findProductByMultiUnitBarcode(catalogList, '9999999999999');
assert(matchNotFound === null, `Barcode tidak terdaftar mengembalikan null`);

// ─── 5. UJI PROTEKSI MARGIN HPP (HPP MARGIN PROTECTION) ───────
console.log('\n🛡️ 5. Uji Proteksi Margin HPP:');
const normalMargin = checkHppMarginStatus(8000, 6000);
assert(!normalMargin.isNegative && !normalMargin.isThin, `Margin normal Rp 8.000 vs HPP Rp 6.000 valid (${normalMargin.marginPercent}%)`);

const thinMargin = checkHppMarginStatus(6100, 6000);
assert(thinMargin.isThin === true, `Margin tipis (< 3%) terdeteksi peringatan (${thinMargin.marginPercent}%)`);

const negativeMargin = checkHppMarginStatus(5500, 6000);
assert(negativeMargin.isNegative === true, `Margin negatif (harga Rp 5.500 < modal Rp 6.000) terdeteksi`);

// ─── 6. UJI KALKULASI PEMOTONGAN STOK GUDANG DALAM SATUAN DASAR
console.log('\n📦 6. Uji Kalkulasi Pemotongan Stok Persediaan (Floor & FIFO):');
// Simulasi transaksi kasir:
// Pembeli membeli 2 Roll kabel NYM dan 4 Dus keramik
const cartItems = [
    { id: sampleKabel.id, name: sampleKabel.name, qty: 2, unit: 'Roll', unitMultiplier: 100 },
    { id: sampleKeramik.id, name: sampleKeramik.name, qty: 4, unit: 'Dus', unitMultiplier: 6 }
];

let baseDeductionKabel = 0;
let baseDeductionKeramik = 0;

cartItems.forEach(ci => {
    const baseDeducted = convertQtyToBase(ci.qty, ci.unitMultiplier);
    if (ci.id === sampleKabel.id) baseDeductionKabel += baseDeducted;
    if (ci.id === sampleKeramik.id) baseDeductionKeramik += baseDeducted;
});

assert(baseDeductionKabel === 200, `Penjualan 2 Roll memotong 200 Meter dari kartu stok persediaan (didapat: ${baseDeductionKabel})`);
assert(baseDeductionKeramik === 24, `Penjualan 4 Dus memotong 24 Keping dari kartu stok persediaan (didapat: ${baseDeductionKeramik})`);

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ ENGINE MULTI-SATUAN (UOM) & HARGA GROSIR TERVERIFIKASI 100% VALID! ✅');
} else {
    console.error('❌ BEBERAPA UJI COBA GAGAL!');
    process.exit(1);
}
console.log('============================================================\n');

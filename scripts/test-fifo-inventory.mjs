/**
 * TEST SUITE: ENGINE MULTI-SUPPLIER & PELACAKAN INVENTORI FIFO (LOT/BATCH)
 * 
 * Menguji:
 * 1. Normalisasi produk warisan (legacy) tanpa merusak struktur data lama.
 * 2. Penghubungan multi-supplier per produk (Primary & Rekanan Pemasok).
 * 3. Pencatatan batch masuk dari PO (First-In) dengan HPP dan kuantitas berbeda.
 * 4. Pemotongan stok FIFO (First-Out) dari batch tertua terlebih dahulu.
 * 5. Kalkulasi matematis akurat untuk HPP riil transaksi dan laba kotor.
 * 6. Audit valuasi sisa inventori gudang sesuai standar PSAK.
 */

import { 
    normalizeProductInventory, 
    recordFifoRestock, 
    deductFifoStock, 
    linkSupplierToProduct, 
    setPrimarySupplierForProduct, 
    computeFifoValuation 
} from '../src/core/fifo-inventory.js';

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

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE MULTI-SUPPLIER & INVENTORI FIFO');
console.log('============================================================\n');

// ─── 1. UJI NORMALISASI PRODUK WARISAN (LEGACY) ───────────────────────────
console.log('📦 1. Uji Normalisasi Produk Warisan (Legacy):');

const legacyProduct = {
    id: 'PROD-NODROP-4KG',
    name: 'Cat No Drop 4 Kg Tinting',
    stock: 5,
    hpp: 200000,
    price: 235000,
    supplierId: 'SUP-001'
};

const masterSuppliers = [
    { id: 'SUP-001', name: 'PT Avia Avian Distributor' },
    { id: 'SUP-002', name: 'Grosir Cat Makmur' }
];

normalizeProductInventory(legacyProduct, masterSuppliers);

assert(Array.isArray(legacyProduct.suppliers), 'Array suppliers terinisialisasi');
assert(legacyProduct.suppliers.length === 1, 'Supplier legacy masuk ke daftar suppliers');
assert(legacyProduct.suppliers[0].supplierId === 'SUP-001', 'Supplier ID legacy cocok');
assert(legacyProduct.suppliers[0].isPrimary === true, 'Supplier legacy menjadi supplier utama');
assert(Array.isArray(legacyProduct.stockBatches), 'Array stockBatches terinisialisasi');
assert(legacyProduct.stockBatches.length === 1, 'Stok eksisting menjadi batch awal');
assert(legacyProduct.stockBatches[0].remainingQty === 5, 'Sisa stok batch awal sesuai stok produk (5 unit)');
assert(legacyProduct.stockBatches[0].buyPrice === 200000, 'Harga beli batch awal sesuai HPP legacy (Rp 200.000)');

// ─── 2. UJI MULTI-SUPPLIER PER PRODUK ─────────────────────────────────────
console.log('\n📦 2. Uji Menghubungkan Multi-Supplier:');

linkSupplierToProduct(legacyProduct, {
    supplierId: 'SUP-002',
    supplierName: 'Grosir Cat Makmur',
    lastBuyPrice: 212000,
    supplierSku: 'MAK-ND-04',
    isPrimary: false
});

assert(legacyProduct.suppliers.length === 2, 'Produk kini memiliki 2 supplier terdaftar');
assert(legacyProduct.suppliers[1].supplierId === 'SUP-002', 'Supplier kedua berhasil terhubung');
assert(legacyProduct.suppliers[1].lastBuyPrice === 212000, 'Harga beli supplier kedua tercatat Rp 212.000');

// Ubah supplier utama ke Grosir Makmur
setPrimarySupplierForProduct(legacyProduct, 'SUP-002');
assert(legacyProduct.supplierId === 'SUP-002', 'Supplier utama produk berganti ke SUP-002');
assert(legacyProduct.suppliers.find(s => s.supplierId === 'SUP-002').isPrimary === true, 'Flag isPrimary terpasang pada SUP-002');
assert(legacyProduct.suppliers.find(s => s.supplierId === 'SUP-001').isPrimary === false, 'Flag isPrimary dilepas dari SUP-001');

// ─── 3. UJI RESTOCK PO (FIRST-IN) ─────────────────────────────────────────
console.log('\n📦 3. Uji Penerimaan Barang PO (FIFO Inflow):');

// PO 1 masuk dari PT Avia Avian (10 unit @ Rp 205.000) pada 1 Oktober
const batch1 = recordFifoRestock(legacyProduct, {
    poId: 'PO-001',
    poNumber: 'PO/2610/001',
    supplierId: 'SUP-001',
    supplierName: 'PT Avia Avian Distributor',
    qty: 10,
    unitPrice: 205000,
    receivedAt: '2026-10-01T10:00:00Z'
});

assert(batch1 !== null, 'Batch 1 berhasil dibuat');
assert(batch1.remainingQty === 10, 'Batch 1 memiliki sisa stok 10');
assert(batch1.buyPrice === 205000, 'Batch 1 tercatat dengan HPP Rp 205.000');

// PO 2 masuk dari Grosir Cat Makmur (10 unit @ Rp 215.000) pada 5 Oktober
const batch2 = recordFifoRestock(legacyProduct, {
    poId: 'PO-002',
    poNumber: 'PO/2610/002',
    supplierId: 'SUP-002',
    supplierName: 'Grosir Cat Makmur',
    qty: 10,
    unitPrice: 215000,
    receivedAt: '2026-10-05T14:00:00Z'
});

assert(batch2 !== null, 'Batch 2 berhasil dibuat');
assert(batch2.remainingQty === 10, 'Batch 2 memiliki sisa stok 10');
assert(batch2.buyPrice === 215000, 'Batch 2 tercatat dengan HPP Rp 215.000');

// Valuasi total stok masuk:
// Batch Awal (5 unit @ 200k) + Batch 1 (10 unit @ 205k) + Batch 2 (10 unit @ 215k) = 25 unit
const valBefore = computeFifoValuation(legacyProduct);
assert(valBefore.totalActiveQty === 25, 'Total kuantitas stok aktif adalah 25 unit');
const expectedValuation = (5 * 200000) + (10 * 205000) + (10 * 215000); // 1.000.000 + 2.050.000 + 2.150.000 = 5.200.000
assert(valBefore.totalValuationRp === expectedValuation, `Valuasi stok total awal Rp ${expectedValuation} (didapat: ${valBefore.totalValuationRp})`);

// ─── 4. UJI PEMOTONGAN PENJUALAN FIFO (FIRST-OUT) ─────────────────────────
console.log('\n📦 4. Uji Pemotongan Stok Penjualan FIFO (First-Out):');

// Pelanggan membeli 12 unit:
// Alokasi FIFO:
// - 5 unit dari Batch Awal (@ Rp 200.000) -> sisa 0
// - 7 unit dari Batch 1 (@ Rp 205.000)    -> sisa 3
// Total Modal Riil = (5 * 200.000) + (7 * 205.000) = 1.000.000 + 1.435.000 = Rp 2.435.000
// Effective HPP = 2.435.000 / 12 = Rp 202.916,67
const sale1 = deductFifoStock(legacyProduct, 12);

assert(sale1.deductedQty === 12, '12 unit berhasil dipotong');
assert(sale1.batchesDeducted.length === 2, 'Pemotongan melibatkan 2 batch tertua');
assert(sale1.batchesDeducted[0].qty === 5, '5 unit dipotong dari Batch Awal');
assert(sale1.batchesDeducted[1].qty === 7, '7 unit dipotong dari Batch 1');
assert(sale1.totalCost === 2435000, `Total modal riil Rp 2.435.000 (didapat: ${sale1.totalCost})`);
assert(Math.round(sale1.effectiveHpp) === 202917, 'Effective HPP riil Rp 202.917');

// Periksa sisa stok fisik: 25 - 12 = 13 unit
assert(legacyProduct.stock === 13, `Sisa stok produk kini 13 unit (didapat: ${legacyProduct.stock})`);

// Sisa di Batch 1 harus 3 unit
const remBatch1 = legacyProduct.stockBatches.find(b => b.batchId === batch1.batchId);
assert(remBatch1.remainingQty === 3, 'Sisa stok Batch 1 tersisa 3 unit');

// Batch 2 belum tersentuh (masih 10 unit)
const remBatch2 = legacyProduct.stockBatches.find(b => b.batchId === batch2.batchId);
assert(remBatch2.remainingQty === 10, 'Sisa stok Batch 2 masih utuh 10 unit');

// ─── 5. UJI PENJUALAN KEDUA MENGHABISKAN BATCH 1 DAN MEMOTONG BATCH 2 ─────
console.log('\n📦 5. Uji Penjualan Beruntun Lintas Batch:');

// Pelanggan membeli 5 unit lagi:
// Alokasi:
// - 3 unit dari Batch 1 (@ Rp 205.000) -> sisa 0 (Batch 1 habis!)
// - 2 unit dari Batch 2 (@ Rp 215.000) -> sisa 8
// Total Modal Riil = (3 * 205.000) + (2 * 215.000) = 615.000 + 430.000 = Rp 1.045.000
const sale2 = deductFifoStock(legacyProduct, 5);

assert(sale2.deductedQty === 5, '5 unit berhasil dipotong');
assert(sale2.totalCost === 1045000, `Total modal riil penjualan ke-2 Rp 1.045.000 (didapat: ${sale2.totalCost})`);
assert(remBatch1.remainingQty === 0, 'Batch 1 kini berstatus habis (remainingQty = 0)');
assert(remBatch2.remainingQty === 8, 'Batch 2 kini tersisa 8 unit');
assert(legacyProduct.stock === 8, `Sisa stok produk total kini 8 unit (didapat: ${legacyProduct.stock})`);

// HPP berjalan produk sekarang otomatis berganti ke harga beli Batch 2 (Rp 215.000)
assert(legacyProduct.hpp === 215000, `HPP berjalan produk terupdate ke Batch 2: Rp 215.000 (didapat: ${legacyProduct.hpp})`);

// ─── 6. AUDIT SISA VALUASI GUDANG PASCA PENJUALAN ─────────────────────────
console.log('\n📦 6. Uji Audit Sisa Valuasi Gudang:');

const valAfter = computeFifoValuation(legacyProduct);
assert(valAfter.totalActiveQty === 8, 'Total sisa stok gudang 8 unit');
assert(valAfter.activeBatchesCount === 1, 'Hanya ada 1 batch aktif yang tersisa (Batch 2)');
assert(valAfter.totalValuationRp === 8 * 215000, `Valuasi sisa aset gudang: 8 x 215.000 = Rp 1.720.000 (didapat: ${valAfter.totalValuationRp})`);

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
console.log('============================================================\n');

if (failed > 0) {
    process.exit(1);
} else {
    console.log('✨ SEMUA TEST SUITE MULTI-SUPPLIER & FIFO INVENTORY SUKSES 100%!\n');
}

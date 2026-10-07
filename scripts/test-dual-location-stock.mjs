/**
 * TEST SUITE: DUAL-LOCATION INVENTORY (STOK RAK TOKO VS STOK GUDANG CADANGAN)
 * Menguji arsitektur stok 2 lokasi, pemotongan Floor-First, transfer internal,
 * alokasi PO receiving, dan Stock Opname per lokasi.
 */

import assert from 'node:assert/strict';
import {
    normalizeProductInventory,
    recordFifoRestock,
    deductFifoStock,
    transferStockBetweenLocations,
    computeFifoValuation
} from '../src/core/fifo-inventory.js';

console.log('🧪 Memulai Test Suite Dual-Location Inventory...\n');

let passedTests = 0;
const test = (title, fn) => {
    try {
        fn();
        console.log(`  ✅ PASS: ${title}`);
        passedTests++;
    } catch (err) {
        console.error(`  ❌ FAIL: ${title}`);
        console.error(err);
        process.exit(1);
    }
};

// 1. Normalisasi Kompatibel Mundur
test('Produk warisan tanpa storeStock & warehouseStock otomatis dialokasikan 100% ke storeStock', () => {
    const legacyProduct = {
        id: 'P1',
        name: 'Cat No Drop 1kg',
        stock: 25,
        hpp: 45000,
        price: 60000
    };

    normalizeProductInventory(legacyProduct);

    assert.equal(legacyProduct.storeStock, 25, 'storeStock harus sama dengan stok awal warisan');
    assert.equal(legacyProduct.warehouseStock, 0, 'warehouseStock harus 0');
    assert.equal(legacyProduct.stock, 25, 'total stock harus tetap 25');
});

// 2. Normalisasi Produk Bervarian
test('Varian warisan tanpa storeStock & warehouseStock otomatis dialokasikan ke storeStock', () => {
    const legacyVarProduct = {
        id: 'P2',
        name: 'Kuas Cat',
        variants: [
            { name: '1 Inch', stock: 10, hpp: 5000, price: 8000 },
            { name: '2 Inch', stock: 15, hpp: 8000, price: 12000 }
        ]
    };

    normalizeProductInventory(legacyVarProduct);

    assert.equal(legacyVarProduct.variants[0].storeStock, 10);
    assert.equal(legacyVarProduct.variants[0].warehouseStock, 0);
    assert.equal(legacyVarProduct.variants[1].storeStock, 15);
    assert.equal(legacyVarProduct.variants[1].warehouseStock, 0);
    assert.equal(legacyVarProduct.storeStock, 25);
    assert.equal(legacyVarProduct.warehouseStock, 0);
    assert.equal(legacyVarProduct.stock, 25);
});

// 3. Kulakan PO ke Rak Toko
test('Kulakan PO dengan targetLocation "store" menambah storeStock dan menandai batch location "store"', () => {
    const prod = {
        id: 'P3',
        name: 'Semen Gresik',
        storeStock: 5,
        warehouseStock: 0,
        stock: 5,
        hpp: 40000
    };

    recordFifoRestock(prod, {
        poId: 'PO-01',
        poNumber: 'PO-2026-001',
        supplierId: 'SUP-01',
        supplierName: 'PT Semen Jaya',
        qty: 20,
        unitPrice: 42000,
        targetLocation: 'store'
    });

    assert.equal(prod.storeStock, 25, 'storeStock harus bertambah 20 menjadi 25');
    assert.equal(prod.warehouseStock, 0, 'warehouseStock harus tetap 0');
    assert.equal(prod.stockBatches.length, 2, 'harus ada 2 batch (batch awal + batch PO baru)');
    const lastBatch = prod.stockBatches[prod.stockBatches.length - 1];
    assert.equal(lastBatch.location, 'store');
});

// 4. Kulakan PO ke Gudang Cadangan
test('Kulakan PO dengan targetLocation "warehouse" menambah warehouseStock dan menandai batch location "warehouse"', () => {
    const prod = {
        id: 'P4',
        name: 'Pipa PVC 3/4',
        storeStock: 10,
        warehouseStock: 5,
        stock: 15,
        hpp: 25000
    };

    recordFifoRestock(prod, {
        poId: 'PO-02',
        poNumber: 'PO-2026-002',
        supplierId: 'SUP-02',
        supplierName: 'Distributor Pipa',
        qty: 50,
        unitPrice: 24000,
        targetLocation: 'warehouse'
    });

    assert.equal(prod.storeStock, 10, 'storeStock harus tetap 10');
    assert.equal(prod.warehouseStock, 55, 'warehouseStock harus bertambah 50 menjadi 55');
    assert.equal(prod.stock, 65, 'total stock harus 65');
    const lastBatch = prod.stockBatches[prod.stockBatches.length - 1];
    assert.equal(lastBatch.location, 'warehouse');
});

// 5. Floor-First Deduction (Stok Toko Cukup)
test('Penjualan saat stok toko cukup hanya memotong storeStock tanpa menyentuh gudang', () => {
    const prod = {
        id: 'P5',
        name: 'Paku 5cm',
        storeStock: 20,
        warehouseStock: 100,
        stock: 120,
        hpp: 15000
    };

    const res = deductFifoStock(prod, 15);

    assert.equal(res.storeDeducted, 15, 'storeDeducted harus 15');
    assert.equal(res.warehouseDeducted, 0, 'warehouseDeducted harus 0');
    assert.equal(res.needWarehouseRetrieval, false, 'tidak butuh ambil dari gudang belakang');
    assert.equal(prod.storeStock, 5, 'sisa stok toko harus 5');
    assert.equal(prod.warehouseStock, 100, 'stok gudang tetap 100');
    assert.equal(prod.stock, 105, 'total stok 105');
});

// 6. Floor-First Deduction (Stok Toko Habis, Mengambil Gudang)
test('Penjualan saat stok toko tidak cukup memotong seluruh toko lalu mengambil sisa dari gudang', () => {
    const prod = {
        id: 'P6',
        name: 'Thinner Bintang',
        storeStock: 4,
        warehouseStock: 20,
        stock: 24,
        hpp: 18000
    };

    const res = deductFifoStock(prod, 10);

    assert.equal(res.storeDeducted, 4, 'stok toko terpotong habis (4)');
    assert.equal(res.warehouseDeducted, 6, 'sisa 6 diambil dari gudang');
    assert.equal(res.needWarehouseRetrieval, true, 'harus menyalakan flag ambil gudang');
    assert.equal(prod.storeStock, 0, 'stok toko menjadi 0');
    assert.equal(prod.warehouseStock, 14, 'stok gudang berkurang dari 20 menjadi 14');
    assert.equal(prod.stock, 14, 'total stok menjadi 14');
});

// 7. Internal Stock Transfer (Gudang -> Toko)
test('Transfer internal memindahkan kuantitas dari gudang ke rak toko dengan aman', () => {
    const prod = {
        id: 'P7',
        name: 'Lem Pipa Fox',
        storeStock: 2,
        warehouseStock: 18,
        stock: 20,
        hpp: 10000,
        stockBatches: [
            { batchId: 'B1', location: 'warehouse', remainingQty: 18, buyPrice: 10000 }
        ]
    };

    const result = transferStockBetweenLocations(prod, 'warehouse', 'store', 10);

    assert.equal(result.success, true);
    assert.equal(result.transferredQty, 10);
    assert.equal(prod.storeStock, 12, 'stok toko menjadi 12 (2 + 10)');
    assert.equal(prod.warehouseStock, 8, 'stok gudang berkurang menjadi 8 (18 - 10)');
    assert.equal(prod.stock, 20, 'total stok tetap utuh 20');
});

// 8. Internal Stock Transfer Validasi Error (Qty Melebihi Ketersediaan)
test('Transfer internal menolak jika kuantitas transfer melebihi stok yang ada di lokasi asal', () => {
    const prod = {
        id: 'P8',
        name: 'Cat Semprot Samurai',
        storeStock: 5,
        warehouseStock: 3,
        stock: 8
    };

    const result = transferStockBetweenLocations(prod, 'warehouse', 'store', 10);

    assert.equal(result.success, false);
    assert.match(result.error, /tidak mencukupi/i);
    assert.equal(prod.storeStock, 5, 'stok toko tidak boleh berubah');
    assert.equal(prod.warehouseStock, 3, 'stok gudang tidak boleh berubah');
});

// 9. Pemotongan Varian Floor-First
test('Pemotongan stok pada varian menerapkan aturan Floor-First dan memperbarui induk', () => {
    const prod = {
        id: 'P9',
        name: 'Pipa Galvanis',
        storeStock: 10,
        warehouseStock: 30,
        stock: 40,
        variants: [
            { name: '1/2 Inch', storeStock: 2, warehouseStock: 18, stock: 20, hpp: 30000 },
            { name: '3/4 Inch', storeStock: 8, warehouseStock: 12, stock: 20, hpp: 40000 }
        ]
    };

    const res = deductFifoStock(prod, 5, '1/2 Inch');

    assert.equal(res.storeDeducted, 2, 'toko varian habis (2)');
    assert.equal(res.warehouseDeducted, 3, 'sisa varian diambil dari gudang (3)');
    assert.equal(res.needWarehouseRetrieval, true);

    const v0 = prod.variants[0];
    assert.equal(v0.storeStock, 0);
    assert.equal(v0.warehouseStock, 15);
    assert.equal(v0.stock, 15);

    // Induk tersinkronisasi
    assert.equal(prod.storeStock, 8);
    assert.equal(prod.warehouseStock, 27);
    assert.equal(prod.stock, 35);
});

console.log(`\n🎉 Seluruh ${passedTests} pengujian Dual-Location Inventory BERHASIL (100% PASS)!`);

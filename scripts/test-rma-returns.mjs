/**
 * Test Suite: RMA Engine & Inventory Returns Reconciliation (v1.12.0)
 * Menguji logika bisnis:
 * 1. Restorasi Stok Fisik & FIFO Lot (Kondisi Baik -> Rak Toko vs Kondisi Rusak -> Karantina)
 * 2. Restorasi Stok Produk Bervarian
 * 3. Pemotongan Inventori Retur Vendor (Rak Toko vs Gudang Cadangan)
 * 4. Rekonsiliasi Finansial Kasir (Cash Refund -> Beban Buku Kas Laci)
 * 5. Rekonsiliasi Finansial Pemasok (AP Deduction -> Potong Hutang PO)
 * 6. Validasi Proteksi Kuantitas Maksimum Retur
 */

import { restoreFifoStock, deductVendorReturnStock } from '../src/core/fifo-inventory.js';

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE RMA RETURNS & INVENTORY RECONCILIATION');
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

// ─── 1. RESTORASI STOK PRODUK KONDISI BAIK (RAK TOKO) ─────────
console.log('📦 1. Uji Restorasi Stok Kondisi Baik (Rak Toko & Batch FIFO):');

const productA = {
    id: 'PROD-001',
    name: 'Semen Gresik 40kg',
    stock: 20,
    storeStock: 15,
    warehouseStock: 5,
    damagedStock: 0,
    stockBatches: [
        { batchId: 'BATCH-001', qty: 20, remainingQty: 20, buyPrice: 50000, location: 'store' }
    ]
};

restoreFifoStock(productA, {
    returnNumber: 'RMA-SLS-20261008-01',
    orderId: 'POS-001',
    qty: 3,
    buyPrice: 50000,
    condition: 'good'
});

assert(productA.storeStock === 18, `Stok rak toko bertambah 3 unit (15 -> 18, didapat: ${productA.storeStock})`);
assert(productA.stock === 23, `Total stok jual bertambah 3 unit (20 -> 23, didapat: ${productA.stock})`);
assert(productA.damagedStock === 0, `Stok rusak tetap 0 (didapat: ${productA.damagedStock})`);
assert(productA.stockBatches.length === 2, `Terbentuk tiket batch FIFO baru untuk retur (didapat: ${productA.stockBatches.length} batch)`);
assert(productA.stockBatches[1].batchId.startsWith('BATCH-RETUR-'), `ID batch diawali 'BATCH-RETUR-' (${productA.stockBatches[1].batchId})`);
assert(productA.stockBatches[1].remainingQty === 3, `Sisa qty batch retur adalah 3 (didapat: ${productA.stockBatches[1].remainingQty})`);

// ─── 2. RESTORASI STOK PRODUK KONDISI RUSAK (KARANTINA) ────────
console.log('\n☣️ 2. Uji Restorasi Stok Kondisi Rusak (Karantina Cacat):');

const productB = {
    id: 'PROD-002',
    name: 'Cat Dulux 5kg',
    stock: 10,
    storeStock: 10,
    warehouseStock: 0,
    damagedStock: 0,
    stockBatches: [
        { batchId: 'BATCH-002', qty: 10, remainingQty: 10, buyPrice: 150000, location: 'store' }
    ]
};

restoreFifoStock(productB, {
    returnNumber: 'RMA-SLS-20261008-02',
    orderId: 'POS-002',
    qty: 2,
    buyPrice: 150000,
    condition: 'damaged'
});

assert(productB.storeStock === 10, `Stok rak toko TIDAK bertambah karena rusak (tetap 10, didapat: ${productB.storeStock})`);
assert(productB.stock === 10, `Total stok jual TIDAK bertambah agar kasir tidak menjual barang rusak (didapat: ${productB.stock})`);
assert(productB.damagedStock === 2, `Stok karantina rusak bertambah 2 (didapat: ${productB.damagedStock})`);
assert(productB.stockBatches.length === 1, `Tidak ada batch FIFO jual baru yang dibuat untuk barang rusak (didapat: ${productB.stockBatches.length} batch)`);

// ─── 3. RESTORASI STOK PADA PRODUK MULTI-VARIAN ───────────────
console.log('\n🎨 3. Uji Restorasi Stok Produk Multi-Varian:');

const productC = {
    id: 'PROD-003',
    name: 'Paku Tembok Beton',
    stock: 30,
    storeStock: 30,
    warehouseStock: 0,
    variants: [
        { name: '2 Inch', stock: 10, storeStock: 10, warehouseStock: 0, damagedStock: 0 },
        { name: '3 Inch', stock: 20, storeStock: 20, warehouseStock: 0, damagedStock: 0 }
    ],
    stockBatches: []
};

restoreFifoStock(productC, {
    returnNumber: 'RMA-SLS-20261008-03',
    orderId: 'POS-003',
    qty: 5,
    buyPrice: 10000,
    variantName: '2 Inch',
    condition: 'good'
});

const var2 = productC.variants.find(v => v.name === '2 Inch');
assert(var2.storeStock === 15, `Stok varian '2 Inch' bertambah 5 (10 -> 15, didapat: ${var2.storeStock})`);
assert(var2.stock === 15, `Total stok varian '2 Inch' bertambah 5 (didapat: ${var2.stock})`);
assert(productC.stock === 35, `Agregat stok master produk terkalibrasi otomatis (30 -> 35, didapat: ${productC.stock})`);

// ─── 4. PEMOTONGAN STOK RETUR PEMBELIAN VENDOR ────────────────
console.log('\n🚚 4. Uji Pemotongan Stok Retur Pembelian Supplier:');

const productD = {
    id: 'PROD-004',
    name: 'Pipa PVC Wavin 3/4"',
    stock: 50,
    storeStock: 30,
    warehouseStock: 20,
    damagedStock: 4,
    stockBatches: []
};

// Retur dari Rak Toko
deductVendorReturnStock(productD, {
    qty: 10,
    fromLocation: 'store'
});

assert(productD.storeStock === 20, `Stok rak toko terpotong 10 (30 -> 20, didapat: ${productD.storeStock})`);
assert(productD.warehouseStock === 20, `Stok gudang tidak terpengaruh (didapat: ${productD.warehouseStock})`);
assert(productD.stock === 40, `Total stok jual terpotong 10 (50 -> 40, didapat: ${productD.stock})`);

// Retur dari Gudang
deductVendorReturnStock(productD, {
    qty: 5,
    fromLocation: 'warehouse'
});

assert(productD.warehouseStock === 15, `Stok gudang terpotong 5 (20 -> 15, didapat: ${productD.warehouseStock})`);
assert(productD.stock === 35, `Total stok jual kini 35 (didapat: ${productD.stock})`);

// Retur dari Karantina Rusak (damagedStock)
deductVendorReturnStock(productD, {
    qty: 3,
    fromLocation: 'quarantine'
});

assert(productD.damagedStock === 1, `Stok karantina rusak terpotong 3 (4 -> 1, didapat: ${productD.damagedStock})`);
assert(productD.stock === 35, `Total stok jual tidak berkurang saat retur dari karantina (didapat: ${productD.stock})`);

// Retur Pembelian Supplier untuk Produk Multi-Varian
console.log('\n🎨 4b. Uji Pemotongan Stok Retur Supplier pada Produk Multi-Varian:');

const productE = {
    id: 'PROD-005',
    name: 'Cat No Drop Anti Bocor',
    stock: 25,
    storeStock: 15,
    warehouseStock: 10,
    damagedStock: 2,
    variants: [
        { name: '1kg Abu-abu', stock: 10, storeStock: 7, warehouseStock: 3, damagedStock: 2, hpp: 45000 },
        { name: '4kg Abu-abu', stock: 15, storeStock: 8, warehouseStock: 7, damagedStock: 0, hpp: 160000 }
    ]
};

deductVendorReturnStock(productE, {
    qty: 2,
    variantName: '1kg Abu-abu',
    fromLocation: 'store'
});

const v1 = productE.variants.find(v => v.name === '1kg Abu-abu');
const v4 = productE.variants.find(v => v.name === '4kg Abu-abu');
assert(v1.storeStock === 5, `Stok rak varian '1kg Abu-abu' terpotong 2 (7 -> 5, didapat: ${v1.storeStock})`);
assert(v1.stock === 8, `Total stok varian '1kg Abu-abu' kini 8 (didapat: ${v1.stock})`);
assert(v4.storeStock === 8, `Varian '4kg Abu-abu' tidak terpengaruh (tetap 8, didapat: ${v4.storeStock})`);
assert(productE.storeStock === 13, `Agregat stok rak produk terkalibrasi otomatis (15 -> 13, didapat: ${productE.storeStock})`);
assert(productE.stock === 23, `Agregat total stok produk terkalibrasi otomatis (25 -> 23, didapat: ${productE.stock})`);

// Retur varian dari karantina rusak ke supplier
deductVendorReturnStock(productE, {
    qty: 2,
    variantName: '1kg Abu-abu',
    fromLocation: 'quarantine'
});

assert(v1.damagedStock === 0, `Stok rusak varian '1kg Abu-abu' habis diklaim ke supplier (2 -> 0, didapat: ${v1.damagedStock})`);
assert(productE.damagedStock === 0, `Agregat karantina rusak produk master kini 0 (didapat: ${productE.damagedStock})`);
assert(productE.stock === 23, `Stok jual tetap tidak berubah saat klaim barang rusak (didapat: ${productE.stock})`);

// ─── 5. REKONSILIASI KAS LACI & EXPENSES (CASH REFUND) ────────
console.log('\n💵 5. Uji Rekonsiliasi Kas Laci (Cash Refund):');

const mockExpenses = [];
const processRefundExpense = (returnId, orderId, refundAmount) => {
    mockExpenses.unshift({
        id: `EXP-RET-${Date.now()}`,
        category: 'Retur Penjualan',
        description: `Pengembalian Tunai Retur Nota ${orderId} (${returnId})`,
        amount: refundAmount,
        paymentSource: 'kas_toko',
        source: 'pos_cashier',
        receiptNumber: returnId
    });
};

processRefundExpense('RMA-SLS-001', 'POS-20261008-01', 75000);

assert(mockExpenses.length === 1, `Buku kas pengeluaran mencatat 1 entri refund`);
assert(mockExpenses[0].category === 'Retur Penjualan', `Kategori beban adalah 'Retur Penjualan'`);
assert(mockExpenses[0].amount === 75000, `Nominal refund tercatat akurat Rp 75.000`);
assert(mockExpenses[0].paymentSource === 'kas_toko', `Sumber dana kas laci toko 'kas_toko'`);

// ─── 6. REKONSILIASI HUTANG PO SUPPLIER (AP DEDUCTION) ────────
console.log('\n📑 6. Uji Rekonsiliasi AP Deduction (Potong Hutang PO):');

const mockPO = {
    id: 'PO-202610-001',
    totalPrice: 1000000,
    remainingDebt: 400000
};

const processVendorAPDeduction = (po, claimAmount) => {
    po.remainingDebt = Math.max(0, (po.remainingDebt || 0) - claimAmount);
};

processVendorAPDeduction(mockPO, 150000);
assert(mockPO.remainingDebt === 250000, `Sisa hutang PO berkurang dari 400.000 menjadi 250.000 (didapat: ${mockPO.remainingDebt})`);

processVendorAPDeduction(mockPO, 300000);
assert(mockPO.remainingDebt === 0, `Sisa hutang PO tidak menjadi minus (batas minimum 0, didapat: ${mockPO.remainingDebt})`);

// ─── 7. VALIDASI BATAS MAKSIMUM KUANTITAS RETUR ───────────────
console.log('\n🛡️ 7. Uji Validasi Batas Kuantitas Maksimum Retur:');

const orderItem = { id: 'P1', name: 'Cat Tembok', qty: 5 };
const priorReturns = [
    { items: [{ id: 'P1', qty: 2 }] }
];

const getAvailableReturnQty = (item, returns) => {
    const returnedSoFar = returns.reduce((sum, r) => {
        const found = r.items.find(x => x.id === item.id);
        return sum + (found ? (parseFloat(found.qty) || 0) : 0);
    }, 0);
    return Math.max(0, item.qty - returnedSoFar);
};

const maxReturnQty1 = getAvailableReturnQty(orderItem, priorReturns);
assert(maxReturnQty1 === 3, `Item dibeli 5, sudah diretur 2 -> Sisa kuota retur adalah 3 (didapat: ${maxReturnQty1})`);

priorReturns.push({ items: [{ id: 'P1', qty: 3 }] });
const maxReturnQty2 = getAvailableReturnQty(orderItem, priorReturns);
assert(maxReturnQty2 === 0, `Item dibeli 5, sudah diretur 5 -> Kuota retur habis 0 (didapat: ${maxReturnQty2})`);

console.log('\n============================================================');
console.log(`📊 HASIL PENGUJIAN RMA ENGINE: ${passed} PASSED / ${failed} FAILED`);
console.log('============================================================\n');

if (failed > 0) {
    process.exit(1);
}

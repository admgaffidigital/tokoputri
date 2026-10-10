/**
 * ============================================================
 * ENGINE INTI: MULTI-SUPPLIER & PELACAKAN INVENTORI FIFO (LOT/BATCH)
 * ============================================================
 * 
 * Prinsip Kerja:
 * 1. Multi-Supplier per Produk:
 *    Satu produk dapat dipasok oleh banyak supplier. Setiap supplier memiliki
 *    riwayat harga beli terakhir (lastBuyPrice), SKU supplier, waktu kirim, dan status primer.
 * 
 * 2. FIFO (First-In, First-Out) Batch Inventory:
 *    Setiap penerimaan barang (PO / Kulakan) mencatat batch baru dengan:
 *    { batchId, poId, poNumber, supplierId, supplierName, receivedAt, buyPrice, initialQty, remainingQty, expDate }
 * 
 * 3. Pemotongan Stok FIFO Otomatis:
 *    Saat transaksi (POS / Checkout), stok dipotong dari batch tertua yang masih memiliki
 *    remainingQty > 0. HPP riil transaksi dihitung secara matematis berdasarkan modal masing-masing batch.
 * 
 * 4. Kompatibilitas Mundur (Backward Compatibility):
 *    Jika produk belum memiliki stockBatches, sistem membuat batch dasar dari stok dan HPP yang ada.
 */

/**
 * Normalisasi struktur inventori produk agar aman diproses oleh engine FIFO & Multi-Supplier.
 * Menjamin array `suppliers` dan `stockBatches` terinisialisasi tanpa merusak data lama.
 * 
 * @param {Object} product Objek produk
 * @param {Array} allSuppliers Daftar master supplier (opsional, untuk nama fallback)
 * @returns {Object} Objek produk yang telah ternormalisasi
 */
export const normalizeProductInventory = (product, allSuppliers = []) => {
    if (!product || typeof product !== 'object') return product;

    // 1. Normalisasi Multi-Supplier Directory
    if (!Array.isArray(product.suppliers)) {
        product.suppliers = [];
    }

    // Jika memiliki supplierId warisan (legacy) namun belum tercatat di array suppliers
    if (product.supplierId && !product.suppliers.some(s => String(s.supplierId) === String(product.supplierId))) {
        const sObj = (allSuppliers || []).find(s => String(s.id) === String(product.supplierId));
        product.suppliers.unshift({
            supplierId: String(product.supplierId),
            supplierName: sObj ? sObj.name : 'Supplier Utama',
            lastBuyPrice: parseFloat(product.hpp) || 0,
            supplierSku: product.sku || '',
            minOrderQty: 1,
            isPrimary: true,
            updatedAt: product.updatedAt || new Date().toISOString()
        });
    }

    // Pastikan selalu ada penanda isPrimary jika ada supplier terdaftar
    if (product.suppliers.length > 0 && !product.suppliers.some(s => s.isPrimary)) {
        product.suppliers[0].isPrimary = true;
    }

    // Sinkronkan default supplierId jika belum ada
    const primarySup = product.suppliers.find(s => s.isPrimary) || product.suppliers[0];
    if (primarySup && !product.supplierId) {
        product.supplierId = primarySup.supplierId;
    }

    // 2. Normalisasi Kolam Batch FIFO
    if (!Array.isArray(product.stockBatches)) {
        product.stockBatches = [];
        const curStock = parseFloat(product.stock) || 0;
        // Jika produk sudah memiliki stok positif di database tetapi belum memiliki batch
        if (curStock > 0) {
            const primaryName = primarySup ? primarySup.supplierName : 'Stok Awal Toko';
            product.stockBatches.push({
                batchId: `BATCH-INIT-${product.id || Date.now()}`,
                poId: null,
                poNumber: 'STOK AWAL',
                supplierId: product.supplierId || '',
                supplierName: primaryName,
                receivedAt: product.createdAt || new Date(0).toISOString(),
                buyPrice: parseFloat(product.hpp) || 0,
                initialQty: curStock,
                remainingQty: curStock,
                variantName: '',
                location: 'store',
                isInitial: true
            });
        }
    }

    // 3. Normalisasi Dual-Location Stock (Rak Toko vs Gudang Cadangan)
    if (product.storeStock === undefined && product.warehouseStock === undefined) {
        product.storeStock = parseFloat(product.stock) || 0;
        product.warehouseStock = 0;
    } else {
        product.storeStock = Math.max(0, parseFloat(product.storeStock) || 0);
        product.warehouseStock = Math.max(0, parseFloat(product.warehouseStock) || 0);
    }
    product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));

    // Sinkronkan Dual-Location per varian jika ada
    if (Array.isArray(product.variants)) {
        product.variants.forEach(v => {
            if (v.storeStock === undefined && v.warehouseStock === undefined) {
                v.storeStock = parseFloat(v.stock) || 0;
                v.warehouseStock = 0;
            } else {
                v.storeStock = Math.max(0, parseFloat(v.storeStock) || 0);
                v.warehouseStock = Math.max(0, parseFloat(v.warehouseStock) || 0);
            }
            v.stock = parseFloat((v.storeStock + v.warehouseStock).toFixed(3));
        });
        if (product.variants.length > 0) {
            product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
            product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
            product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
        }
    }

    return product;
};

/**
 * Mencatat penambahan stok dari penerimaan PO / Kulakan ke dalam antrean batch FIFO.
 * 
 * @param {Object} product Objek produk target
 * @param {Object} restockData Rincian penerimaan:
 *        { poId, poNumber, supplierId, supplierName, qty, unitPrice, variantName, receivedAt, expDate }
 * @returns {Object} Objek batch yang baru saja dibuat
 */
export const recordFifoRestock = (product, restockData = {}) => {
    if (!product) return null;
    normalizeProductInventory(product);

    const qty = parseFloat(restockData.qty) || 0;
    if (qty <= 0) return null;

    const unitPrice = parseFloat(restockData.unitPrice) || 0;
    const supplierId = restockData.supplierId ? String(restockData.supplierId) : (product.supplierId || '');
    const supplierName = restockData.supplierName || 'Pemasok Toko';
    const variantName = restockData.variantName || '';
    const receivedAt = restockData.receivedAt || new Date().toISOString();

    // 1. Perbarui atau Tambahkan ke Directory Multi-Supplier Produk
    const supIdx = product.suppliers.findIndex(s => String(s.supplierId) === supplierId);
    if (supIdx > -1) {
        if (unitPrice > 0) product.suppliers[supIdx].lastBuyPrice = unitPrice;
        if (supplierName) product.suppliers[supIdx].supplierName = supplierName;
        product.suppliers[supIdx].updatedAt = receivedAt;
    } else if (supplierId) {
        product.suppliers.push({
            supplierId,
            supplierName,
            lastBuyPrice: unitPrice,
            supplierSku: restockData.supplierSku || '',
            minOrderQty: 1,
            isPrimary: product.suppliers.length === 0,
            updatedAt: receivedAt
        });
    }

    const targetLocation = (restockData.targetLocation === 'warehouse' || restockData.location === 'warehouse') ? 'warehouse' : 'store';

    // 2. Buat Tiket Batch FIFO Baru
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const batchId = `BATCH-${Date.now().toString(36).toUpperCase()}-${randomSuffix}`;
    const newBatch = {
        batchId,
        poId: restockData.poId || null,
        poNumber: restockData.poNumber || (restockData.poId ? `PO-${restockData.poId}` : 'KULAKAN'),
        supplierId,
        supplierName,
        receivedAt,
        buyPrice: unitPrice,
        initialQty: qty,
        remainingQty: qty,
        variantName,
        location: targetLocation,
        expDate: restockData.expDate || null
    };

    product.stockBatches.push(newBatch);

    // 3. Urutkan antrean batch secara kronologis (FIFO: Masuk Paling Awal di Indeks Depan)
    product.stockBatches.sort((a, b) => new Date(a.receivedAt || 0) - new Date(b.receivedAt || 0));

    // 4. Sinkronkan Kuantitas Stok Fisik Produk & Varian per Lokasi
    if (variantName && Array.isArray(product.variants)) {
        const v = product.variants.find(x => x.name === variantName);
        if (v) {
            if (targetLocation === 'warehouse') {
                v.warehouseStock = parseFloat(((parseFloat(v.warehouseStock) || 0) + qty).toFixed(3));
            } else {
                v.storeStock = parseFloat(((parseFloat(v.storeStock) || 0) + qty).toFixed(3));
            }
            v.stock = parseFloat(((parseFloat(v.storeStock) || 0) + (parseFloat(v.warehouseStock) || 0)).toFixed(3));
        }
        product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
        product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    } else {
        if (targetLocation === 'warehouse') {
            product.warehouseStock = parseFloat(((parseFloat(product.warehouseStock) || 0) + qty).toFixed(3));
        } else {
            product.storeStock = parseFloat(((parseFloat(product.storeStock) || 0) + qty).toFixed(3));
        }
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    }

    // 4. Perbarui Nilai HPP Berjalan Produk
    // HPP berjalan diambil dari batch terdepan yang masih memiliki sisa stok
    const activeBatch = product.stockBatches.find(b => 
        (!variantName || b.variantName === variantName) && 
        (parseFloat(b.remainingQty) || 0) > 0 && 
        (parseFloat(b.buyPrice) || 0) > 0
    );

    if (activeBatch) {
        if (variantName && Array.isArray(product.variants)) {
            const v = product.variants.find(x => x.name === variantName);
            if (v) v.hpp = activeBatch.buyPrice;
        } else {
            product.hpp = activeBatch.buyPrice;
        }
    }

    return newBatch;
};

/**
 * Memotong stok produk dengan aturan FIFO (First-In, First-Out).
 * Memprioritaskan batch tertua terlebih dahulu hingga jumlah qty terpenuhi.
 * 
 * @param {Object} product Objek produk
 * @param {Number} qty Jumlah stok yang dipotong
 * @param {String} variantName Nama varian jika berlaku
 * @returns {Object} Hasil alokasi pemotongan FIFO:
 *          {
 *            deductedQty: Number,
 *            batchesDeducted: Array<{ batchId, supplierId, supplierName, qty, buyPrice, subtotalCost }>,
 *            totalCost: Number,
 *            effectiveHpp: Number
 *          }
 */
export const deductFifoStock = (product, qty, variantName = '') => {
    const needQty = parseFloat(qty) || 0;
    if (!product || needQty <= 0) {
        return { deductedQty: 0, batchesDeducted: [], totalCost: 0, effectiveHpp: 0 };
    }

    normalizeProductInventory(product);

    let remainingNeed = needQty;
    const batchesDeducted = [];
    let totalCost = 0;

    // Pastikan batch terurut FIFO
    product.stockBatches.sort((a, b) => new Date(a.receivedAt || 0) - new Date(b.receivedAt || 0));

    // Iterasi memotong dari batch paling tua yang masih memiliki remainingQty > 0
    for (const batch of product.stockBatches) {
        if (remainingNeed <= 0) break;

        // Cocokkan spesifikasi varian jika ada
        if (variantName) {
            if (batch.variantName !== variantName) continue;
        } else {
            // Jika memotong produk utama tanpa varian, hindari batch varian jika ada
            if (batch.variantName && batch.variantName !== '') continue;
        }

        const bRem = parseFloat(batch.remainingQty) || 0;
        if (bRem <= 0) continue;

        const take = Math.min(bRem, remainingNeed);
        batch.remainingQty = parseFloat((bRem - take).toFixed(3));
        remainingNeed = parseFloat((remainingNeed - take).toFixed(3));

        const batchCost = parseFloat((take * (parseFloat(batch.buyPrice) || 0)).toFixed(2));
        totalCost += batchCost;

        batchesDeducted.push({
            batchId: batch.batchId,
            poId: batch.poId,
            poNumber: batch.poNumber,
            supplierId: batch.supplierId,
            supplierName: batch.supplierName,
            qty: take,
            buyPrice: parseFloat(batch.buyPrice) || 0,
            subtotalCost: batchCost
        });
    }

    // Jika stok batch habis atau tidak mencukupi (stok negatif / darurat),
    // penuhi sisa kebutuhan menggunakan HPP produk saat ini sebagai fallback
    if (remainingNeed > 0) {
        const fallbackPrice = parseFloat(product.hpp) || 0;
        const fallbackCost = parseFloat((remainingNeed * fallbackPrice).toFixed(2));
        totalCost += fallbackCost;

        batchesDeducted.push({
            batchId: 'FALLBACK-DEFICIT',
            poId: null,
            poNumber: 'STOK DARURAT',
            supplierId: product.supplierId || '',
            supplierName: 'Stok Toko',
            qty: remainingNeed,
            buyPrice: fallbackPrice,
            subtotalCost: fallbackCost,
            isDeficit: true
        });
    }

    // Hitung pemotongan Dual-Location: Store First!
    let curStore = 0;
    let curWarehouse = 0;
    let targetObj = product;

    if (variantName && Array.isArray(product.variants)) {
        const v = product.variants.find(x => x.name === variantName);
        if (v) {
            targetObj = v;
            curStore = parseFloat(v.storeStock) || 0;
            curWarehouse = parseFloat(v.warehouseStock) || 0;
        }
    } else {
        curStore = parseFloat(product.storeStock) || 0;
        curWarehouse = parseFloat(product.warehouseStock) || 0;
    }

    const takeFromStore = Math.min(curStore, needQty);
    const takeFromWarehouse = Math.max(0, needQty - takeFromStore);

    targetObj.storeStock = Math.max(0, parseFloat((curStore - takeFromStore).toFixed(3)));
    targetObj.warehouseStock = Math.max(0, parseFloat((curWarehouse - takeFromWarehouse).toFixed(3)));
    targetObj.stock = parseFloat((targetObj.storeStock + targetObj.warehouseStock).toFixed(3));

    if (variantName && Array.isArray(product.variants)) {
        product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
        product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    } else {
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    }

    // Perbarui HPP berjalan produk ke batch berikutnya yang siap dijual
    const nextActiveBatch = product.stockBatches.find(b => 
        (!variantName || b.variantName === variantName) && 
        (parseFloat(b.remainingQty) || 0) > 0 && 
        (parseFloat(b.buyPrice) || 0) > 0
    );

    if (nextActiveBatch) {
        if (variantName && Array.isArray(product.variants)) {
            const v = product.variants.find(x => x.name === variantName);
            if (v) v.hpp = nextActiveBatch.buyPrice;
        } else {
            product.hpp = nextActiveBatch.buyPrice;
        }
    }

    const effectiveHpp = needQty > 0 ? parseFloat((totalCost / needQty).toFixed(2)) : 0;

    return {
        deductedQty: needQty,
        storeDeducted: takeFromStore,
        warehouseDeducted: takeFromWarehouse,
        needWarehouseRetrieval: takeFromWarehouse > 0,
        batchesDeducted,
        totalCost,
        effectiveHpp
    };
};

/**
 * Memindahkan stok secara internal antara Gudang Belakang dan Rak Toko.
 * 
 * @param {Object} product Objek produk
 * @param {'warehouse'|'store'} fromLocation Lokasi asal
 * @param {'warehouse'|'store'} toLocation Lokasi tujuan
 * @param {Number} qty Jumlah kuantitas yang dipindah
 * @param {String} variantName Nama varian jika berlaku
 * @returns {Object} Hasil mutasi { success, message, transferredQty, newStoreStock, newWarehouseStock }
 */
export const transferStockBetweenLocations = (product, fromLocation = 'warehouse', toLocation = 'store', qty = 0, variantName = '') => {
    const numQty = parseFloat(qty) || 0;
    if (!product || numQty <= 0) return { success: false, message: 'Jumlah mutasi harus lebih besar dari 0' };
    if (fromLocation === toLocation) return { success: false, message: 'Lokasi asal dan tujuan tidak boleh sama' };

    normalizeProductInventory(product);

    let targetObj = product;
    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    let actualVariantName = variantName;

    if (hasVariants) {
        if (actualVariantName) {
            const v = product.variants.find(x => x.name === actualVariantName);
            if (v) targetObj = v;
        } else if (product.variants.length === 1) {
            // Jika produk hanya memiliki 1 varian, otomatis alokasikan ke varian tersebut
            targetObj = product.variants[0];
            actualVariantName = product.variants[0].name;
        }
    }

    const fromKey = fromLocation === 'warehouse' ? 'warehouseStock' : 'storeStock';
    const toKey = toLocation === 'warehouse' ? 'warehouseStock' : 'storeStock';
    const available = parseFloat(targetObj[fromKey]) || 0;

    if (available < numQty) {
        const locLabel = fromLocation === 'warehouse' ? 'Gudang' : 'Rak Toko';
        const msg = `Stok di ${locLabel} tidak mencukupi! Tersedia: ${available} ${product.unit || 'pcs'}`;
        return {
            success: false,
            message: msg,
            error: msg
        };
    }

    targetObj[fromKey] = parseFloat((available - numQty).toFixed(3));
    targetObj[toKey] = parseFloat(((parseFloat(targetObj[toKey]) || 0) + numQty).toFixed(3));
    targetObj.stock = parseFloat(((parseFloat(targetObj.storeStock) || 0) + (parseFloat(targetObj.warehouseStock) || 0)).toFixed(3));

    if (hasVariants) {
        product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
        product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    }

    // Perbarui lokasi batch secara presisi (termasuk batch splitting bila kuantitas parsial)
    let remTransfer = numQty;
    const updatedBatches = [];
    for (const b of (product.stockBatches || [])) {
        if (remTransfer <= 0) {
            updatedBatches.push(b);
            continue;
        }
        if (actualVariantName && b.variantName !== actualVariantName) {
            updatedBatches.push(b);
            continue;
        }
        if (!actualVariantName && b.variantName) {
            updatedBatches.push(b);
            continue;
        }

        const bLoc = b.location || 'store';
        const bRem = parseFloat(b.remainingQty) || 0;

        if (bLoc === fromLocation && bRem > 0) {
            if (bRem <= remTransfer) {
                // Seluruh batch berpindah lokasi
                b.location = toLocation;
                remTransfer = parseFloat((remTransfer - bRem).toFixed(3));
                updatedBatches.push(b);
            } else {
                // Batch dipisah (split): sebagian pindah lokasi, sisanya tetap di tempat asal
                const splitMoved = remTransfer;
                const splitRemain = parseFloat((bRem - remTransfer).toFixed(3));

                b.remainingQty = splitRemain;
                updatedBatches.push(b);

                const movedBatch = {
                    ...b,
                    batchId: `${b.batchId || 'LOT'}-TRF-${Date.now().toString(36)}`,
                    initialQty: splitMoved,
                    remainingQty: splitMoved,
                    location: toLocation
                };
                updatedBatches.push(movedBatch);
                remTransfer = 0;
            }
        } else {
            updatedBatches.push(b);
        }
    }
    product.stockBatches = updatedBatches;

    // Catat log histori pemindahan internal ke produk
    if (!Array.isArray(product.internalTransfers)) {
        product.internalTransfers = [];
    }
    product.internalTransfers.push({
        id: `TRF-${Date.now()}`,
        date: Date.now(),
        fromLocation,
        toLocation,
        qty: numQty,
        variantName: actualVariantName || '',
        unit: product.unit || 'pcs'
    });

    return {
        success: true,
        transferredQty: numQty,
        fromLocation,
        toLocation,
        variantName: actualVariantName,
        newStoreStock: targetObj.storeStock,
        newWarehouseStock: targetObj.warehouseStock,
        totalStock: targetObj.stock
    };
};

/**
 * Menghubungkan supplier baru ke produk atau memperbarui data supplier rekanan.
 * 
 * @param {Object} product Objek produk
 * @param {Object} supplierData { supplierId, supplierName, lastBuyPrice, supplierSku, isPrimary }
 * @returns {Array} Daftar seluruh supplier produk yang terupdate
 */
export const linkSupplierToProduct = (product, supplierData = {}) => {
    if (!product || !supplierData.supplierId) return product?.suppliers || [];
    normalizeProductInventory(product);

    const supId = String(supplierData.supplierId);
    const existingIdx = product.suppliers.findIndex(s => String(s.supplierId) === supId);

    if (supplierData.isPrimary) {
        product.suppliers.forEach(s => { s.isPrimary = false; });
        product.supplierId = supId;
    }

    const entry = {
        supplierId: supId,
        supplierName: supplierData.supplierName || 'Supplier Rekanan',
        lastBuyPrice: parseFloat(supplierData.lastBuyPrice) || 0,
        supplierSku: supplierData.supplierSku || '',
        minOrderQty: parseFloat(supplierData.minOrderQty) || 1,
        leadTimeDays: parseInt(supplierData.leadTimeDays, 10) || 0,
        isPrimary: !!supplierData.isPrimary,
        updatedAt: new Date().toISOString()
    };

    if (existingIdx > -1) {
        product.suppliers[existingIdx] = { ...product.suppliers[existingIdx], ...entry };
    } else {
        if (product.suppliers.length === 0) {
            entry.isPrimary = true;
            product.supplierId = supId;
        }
        product.suppliers.push(entry);
    }

    return product.suppliers;
};

/**
 * Menetapkan satu supplier sebagai Supplier Utama (Primary).
 * 
 * @param {Object} product Objek produk
 * @param {String} supplierId ID supplier yang dipilih
 */
export const setPrimarySupplierForProduct = (product, supplierId) => {
    if (!product || !supplierId) return;
    normalizeProductInventory(product);

    const targetId = String(supplierId);
    product.suppliers.forEach(s => {
        s.isPrimary = String(s.supplierId) === targetId;
    });
    product.supplierId = targetId;
};

/**
 * Menghitung audit valuasi stok fisik berbasis antrean batch FIFO riil.
 * Standar PSAK / Financial Reporting: Total Aset = Sum(Sisa Qty Tiap Batch * Harga Beli Batch).
 * 
 * @param {Object} product Objek produk
 * @returns {Object} { totalValuationRp, totalActiveQty, activeBatchesCount, batches }
 */
export const computeFifoValuation = (product) => {
    if (!product) return { totalValuationRp: 0, totalActiveQty: 0, activeBatchesCount: 0, batches: [] };
    normalizeProductInventory(product);

    const activeBatches = (product.stockBatches || []).filter(b => (parseFloat(b.remainingQty) || 0) > 0);
    let totalValuationRp = 0;
    let totalActiveQty = 0;

    activeBatches.forEach(b => {
        const qty = parseFloat(b.remainingQty) || 0;
        const price = parseFloat(b.buyPrice) || 0;
        totalValuationRp += qty * price;
        totalActiveQty += qty;
    });

    return {
        totalValuationRp: Math.round(totalValuationRp),
        totalActiveQty: parseFloat(totalActiveQty.toFixed(3)),
        activeBatchesCount: activeBatches.length,
        storeStock: parseFloat((product.storeStock || 0).toFixed(3)),
        warehouseStock: parseFloat((product.warehouseStock || 0).toFixed(3)),
        batches: activeBatches
    };
};

/**
 * Merestorasi stok fisik produk dari transaksi Retur Penjualan (RMA Konsumen).
 * Jika kondisi baik, stok dikembalikan ke Rak Toko (store) dan dibuatkan lot batch baru.
 * Jika kondisi rusak/cacat, barang dimasukkan ke Karantina Rusak (damagedStock) tanpa menambah stok jual.
 * 
 * @param {Object} product Objek produk
 * @param {Object} returnData { returnNumber, orderId, qty, buyPrice, variantName, condition, restockLocation }
 * @returns {Object} Hasil restorasi { restoredLocation, qty, batch }
 */
export const restoreFifoStock = (product, returnData = {}) => {
    if (!product) return null;
    normalizeProductInventory(product);

    const qty = parseFloat(returnData.qty) || 0;
    if (qty <= 0) return null;

    const condition = returnData.condition || 'good';
    const variantName = returnData.variantName || '';
    const unitPrice = parseFloat(returnData.buyPrice) || parseFloat(product.hpp) || 0;

    let targetObj = product;
    if (variantName && Array.isArray(product.variants)) {
        const v = product.variants.find(x => x.name === variantName);
        if (v) targetObj = v;
    }

    if (condition === 'damaged') {
        // Masuk karantina barang rusak (tidak menambah stok jual)
        targetObj.damagedStock = parseFloat(((parseFloat(targetObj.damagedStock) || 0) + qty).toFixed(3));
        if (targetObj !== product) {
            product.damagedStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.damagedStock) || 0), 0);
        }
        return { restoredLocation: 'quarantine', qty };
    }

    // Kondisi baik: masuk ke rak toko (store)
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const batchId = `BATCH-RETUR-${Date.now().toString(36).toUpperCase()}-${randomSuffix}`;
    const newBatch = {
        batchId,
        poId: null,
        poNumber: returnData.returnNumber || `RETUR-${returnData.orderId || 'SALES'}`,
        supplierId: product.supplierId || '',
        supplierName: 'Retur Pelanggan',
        receivedAt: new Date().toISOString(),
        buyPrice: unitPrice,
        initialQty: qty,
        remainingQty: qty,
        variantName,
        location: 'store'
    };

    if (!Array.isArray(product.stockBatches)) product.stockBatches = [];
    product.stockBatches.push(newBatch);
    product.stockBatches.sort((a, b) => new Date(a.receivedAt || 0) - new Date(b.receivedAt || 0));

    targetObj.storeStock = parseFloat(((parseFloat(targetObj.storeStock) || 0) + qty).toFixed(3));
    targetObj.stock = parseFloat(((parseFloat(targetObj.storeStock) || 0) + (parseFloat(targetObj.warehouseStock) || 0)).toFixed(3));

    if (variantName && Array.isArray(product.variants)) {
        product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
        product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    } else {
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    }

    return { restoredLocation: 'store', batch: newBatch, qty };
};

/**
 * Memotong kuantitas stok fisik saat melakukan pengembalian barang retur ke supplier (Vendor Return).
 * 
 * @param {Object} product Objek produk
 * @param {Object} returnData { qty, variantName, fromLocation }
 * @returns {Object} Hasil pemotongan { fromLocation, qty }
 */
export const deductVendorReturnStock = (product, returnData = {}) => {
    if (!product) return null;
    normalizeProductInventory(product);

    const qty = parseFloat(returnData.qty) || 0;
    if (qty <= 0) return null;

    const fromLocation = returnData.fromLocation === 'warehouse' ? 'warehouse' : (returnData.fromLocation === 'quarantine' ? 'quarantine' : 'store');
    const variantName = returnData.variantName || '';

    let targetObj = product;
    if (variantName && Array.isArray(product.variants)) {
        const v = product.variants.find(x => x.name === variantName);
        if (v) targetObj = v;
    }

    const locKey = fromLocation === 'warehouse' ? 'warehouseStock' : (fromLocation === 'quarantine' ? 'damagedStock' : 'storeStock');
    targetObj[locKey] = Math.max(0, parseFloat(((parseFloat(targetObj[locKey]) || 0) - qty).toFixed(3)));
    targetObj.stock = parseFloat(((parseFloat(targetObj.storeStock) || 0) + (parseFloat(targetObj.warehouseStock) || 0)).toFixed(3));

    if (variantName && Array.isArray(product.variants)) {
        product.storeStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.storeStock) || 0), 0);
        product.warehouseStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.warehouseStock) || 0), 0);
        product.damagedStock = product.variants.reduce((acc, it) => acc + (parseFloat(it.damagedStock) || 0), 0);
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    } else {
        product.stock = parseFloat((product.storeStock + product.warehouseStock).toFixed(3));
    }

    return { fromLocation, qty };
};


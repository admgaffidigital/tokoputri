/**
 * ============================================================
 * TEST SUITE: PERSISTENSI DATABASE BERSAMA & BATCH IMPORT PRODUK
 * Memverifikasi penyimpanan permanen template produk master ke
 * Firestore sub-koleksi & localStorage anti-hilang saat reload.
 * ============================================================
 */

import fs from 'fs';
import path from 'path';

let passed = 0;
let failed = 0;

function assert(desc, condition) {
    if (condition) {
        console.log(`  ✅ PASS: ${desc}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${desc}`);
        failed++;
    }
}

console.log('\n============================================================');
console.log('🧪 TEST SUITE: MASTER PRESETS PERSISTENCE & BATCH IMPORT');
console.log('============================================================\n');

const masterPresetsPath = path.resolve('src/modules/admin/products/master-presets.js');
const storagePath = path.resolve('src/services/storage.js');

const masterPresetsContent = fs.readFileSync(masterPresetsPath, 'utf8');
const storageContent = fs.readFileSync(storagePath, 'utf8');

console.log('📦 1. Memeriksa Integrasi Database Firebase di master-presets.js...');
assert('master-presets.js mengimpor db dari firebase.js', masterPresetsContent.includes("import { db } from '../../../config/firebase.js';"));
assert('confirmExecuteMasterProductImport menulis langsung ke sub-koleksi products', 
    masterPresetsContent.includes('.collection("products").doc(prodIdStr).set(importedProduct)'));
assert('confirmExecuteMasterProductImport mendaftarkan ID ke productOrder', 
    masterPresetsContent.includes('appData.productOrder.unshift(prodIdStr)'));
assert('confirmExecuteMasterProductImport menyiarkan sinyal product_single', 
    masterPresetsContent.includes("updateType: 'product_single'"));
assert('confirmExecuteMasterProductImport menyegarkan cache lokal freshmart_products', 
    masterPresetsContent.includes("localStorage.setItem('freshmart_products', JSON.stringify(appData.products))"));

console.log('\n⚡ 2. Memeriksa Fitur Salin Semua ke Toko (Batch Import All)...');
assert('Fungsi confirmImportAllMasterPresets tersedia & diekspor', 
    masterPresetsContent.includes('export const confirmImportAllMasterPresets ='));
assert('Fungsi executeImportAllMasterPresets tersedia & diekspor', 
    masterPresetsContent.includes('export const executeImportAllMasterPresets ='));
assert('executeImportAllMasterPresets menggunakan db.batch() untuk Firestore write', 
    masterPresetsContent.includes('_db.batch()') && masterPresetsContent.includes('batch.commit()'));
assert('executeImportAllMasterPresets menyiarkan sinyal product_bulk', 
    masterPresetsContent.includes("updateType: 'product_bulk'"));
assert('Tombol Salin Semua ke Toko terpasang di toolbar header', 
    masterPresetsContent.includes('onclick="window.confirmImportAllMasterPresets()"') && masterPresetsContent.includes('Salin Semua ke Toko'));
assert('Kartu Tersedia utk Diimpor interaktif dan terhubung ke confirmImportAllMasterPresets', 
    masterPresetsContent.includes('onclick="window.confirmImportAllMasterPresets()" title="Klik untuk menyalin semua template yang tersedia ke toko Anda"'));

console.log('\n🛡️ 3. Memeriksa Proteksi saveApp di src/services/storage.js...');
assert('saveApp memfilter products dari dokumen utama cms_data', 
    storageContent.includes("k !== 'products'"));
assert('saveApp mendeteksi hasProductsKey saat changedKeys memuat products', 
    storageContent.includes("const hasProductsKey = changedKeys.includes('products');"));
assert('saveApp memiliki proteksi batch sync ke sub-koleksi products jika ada updatedProductIds', 
    storageContent.includes('.collection("products").doc(prod.id.toString())'));

console.log('\n🌐 4. Memeriksa Expose Global ke Window Object...');
assert('window.confirmImportAllMasterPresets terekspos', 
    masterPresetsContent.includes('window.confirmImportAllMasterPresets = confirmImportAllMasterPresets;'));
assert('window.executeImportAllMasterPresets terekspos', 
    masterPresetsContent.includes('window.executeImportAllMasterPresets = executeImportAllMasterPresets;'));
assert('window.confirmExecuteMasterProductImport terekspos', 
    masterPresetsContent.includes('window.confirmExecuteMasterProductImport = confirmExecuteMasterProductImport;'));

console.log('\n============================================================');
console.log(`🏁 HASIL TEST: ${passed} LULUS, ${failed} GAGAL`);
console.log('============================================================\n');

if (failed > 0) {
    process.exit(1);
}

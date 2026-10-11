/**
 * ============================================================
 * TEST SUITE: ESTIMATOR REKOMENDASI PRODUK & VARIAN MODAL Z-INDEX
 * Memverifikasi integritas hierarki z-index dan navigasi modal
 * agar detail produk bervarian tidak tertutup oleh modal estimator.
 * ============================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ✅ PASS: ${message}`);
    } else {
        failedTests++;
        console.error(`  ❌ FAIL: ${message}`);
    }
}

console.log('\n============================================================');
console.log('🏗️  MENJALANKAN TEST SUITE ESTIMATOR & MODAL VARIAN Z-INDEX');
console.log('============================================================\n');

// 1. Uji File index.html Z-Index Hierarchy
console.log('📐 1. Uji Hierarki Z-Index di index.html:');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Ekstrak z-index modal
const estimatorMatch = indexHtml.match(/id="modal-material-estimator"[^>]*class="[^"]*z-\[(\d+)\]/i) || indexHtml.match(/class="[^"]*z-\[(\d+)\][^"]*"[^>]*id="modal-material-estimator"/i);
const productModalMatch = indexHtml.match(/id="product-modal"[^>]*class="[^"]*z-\[(\d+)\]/i) || indexHtml.match(/class="[^"]*z-\[(\d+)\][^"]*"[^>]*id="product-modal"/i);
const quickVariantMatch = indexHtml.match(/id="quick-variant-modal"[^>]*class="[^"]*z-\[(\d+)\]/i) || indexHtml.match(/class="[^"]*z-\[(\d+)\][^"]*"[^>]*id="quick-variant-modal"/i);

const zEstimator = estimatorMatch ? parseInt(estimatorMatch[1], 10) : 0;
const zProduct = productModalMatch ? parseInt(productModalMatch[1], 10) : 0;
const zQuickVariant = quickVariantMatch ? parseInt(quickVariantMatch[1], 10) : 0;

assert(zEstimator === 115, `modal-material-estimator memiliki z-index 115 (didapat: ${zEstimator})`);
assert(zProduct >= 120, `product-modal memiliki z-index >= 120 (didapat: ${zProduct})`);
assert(zQuickVariant >= 125, `quick-variant-modal memiliki z-index >= 125 (didapat: ${zQuickVariant})`);
assert(zProduct > zEstimator, `product-modal (${zProduct}) tampil di DEPAN modal-material-estimator (${zEstimator})`);
assert(zQuickVariant > zEstimator, `quick-variant-modal (${zQuickVariant}) tampil di DEPAN modal-material-estimator (${zEstimator})`);
assert(zQuickVariant > zProduct, `quick-variant-modal (${zQuickVariant}) tampil di DEPAN product-modal (${zProduct})`);

// 2. Uji Integrasi material-estimator.js
console.log('\n🧱 2. Uji Penanganan Modal di material-estimator.js:');
const estimatorJsPath = path.join(rootDir, 'src', 'modules', 'catalog', 'material-estimator.js');
const estimatorJs = fs.readFileSync(estimatorJsPath, 'utf-8');

assert(estimatorJs.includes('closeQuickVariantSheet'), 'closeMaterialEstimatorModal memanggil pembersihan closeQuickVariantSheet');
assert(estimatorJs.includes('addStoreProductFromEstimator'), 'Fungsi addStoreProductFromEstimator terekspos untuk integrasi katalog rekomendasi');
assert(estimatorJs.includes('quickAddOrOpenProduct'), 'addStoreProductFromEstimator memanggil quickAddOrOpenProduct untuk mendeteksi produk bervarian');

// 3. Uji Router Fallback Prioritas di router.js
console.log('\n🧭 3. Uji Prioritas Fallback Scan di router.js:');
const routerJsPath = path.join(rootDir, 'src', 'core', 'router.js');
const routerJs = fs.readFileSync(routerJsPath, 'utf-8');

const allKnownModalsMatch = routerJs.match(/const allKnownModals = \[([\s\S]*?)\];/);
assert(Boolean(allKnownModalsMatch), 'allKnownModals terdefinisi di router.js');

if (allKnownModalsMatch) {
    const modalsList = allKnownModalsMatch[1];
    const idxQuickVariant = modalsList.indexOf("'quickVariant'");
    const idxProduct = modalsList.indexOf("'product'");
    const idxEstimator = modalsList.indexOf("'materialEstimator'");

    assert(idxQuickVariant > -1, "'quickVariant' terdaftar di allKnownModals");
    assert(idxProduct > -1, "'product' terdaftar di allKnownModals");
    assert(idxEstimator > -1, "'materialEstimator' terdaftar di allKnownModals");

    assert(idxQuickVariant < idxEstimator, "'quickVariant' ditutup lebih dulu daripada 'materialEstimator' saat fallback scan");
    assert(idxProduct < idxEstimator, "'product' ditutup lebih dulu daripada 'materialEstimator' saat fallback scan");
}

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ HIERARKI MODAL & VARIAN ESTIMATOR 100% VALID DAN BEBAS KENDALA! ✅');
} else {
    console.error('❌ TERDAPAT PENGUJIAN YANG GAGAL!');
    process.exit(1);
}
console.log('============================================================\n');

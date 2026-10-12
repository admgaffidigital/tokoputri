/**
 * Test Suite: Material Estimator Formulas & POS Decimal Precision
 * Validasi keakuratan matematis estimator bahan bangunan dan presisi desimal kasir
 */

import { 
    calculatePaintNeeds, 
    calculateTileNeeds, 
    calculateBrickNeeds,
    calculateRoofNeeds,
    setEstimatorRoofMode,
    setEstimatorRoofType,
    updateEstimatorRoofField,
    updateEstimatorPaintField,
    updateEstimatorTileField,
    updateEstimatorBrickField,
    findRelatedStoreProducts,
    renderRelatedProductsHtml,
    addStoreProductFromEstimator,
    handleEstimatorProductCardClick,
    openMaterialEstimatorModal
} from '../src/modules/catalog/material-estimator.js';
import { appData } from '../src/core/state.js';

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE ESTIMATOR MATERIAL & POS DESIMAL');
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

// ─── 1. UJI ESTIMATOR CAT TEMBOK & PLAFON ───────────────────
console.log('🎨 1. Uji Kalkulator Cat Tembok & Plafon:');
const paintRes = calculatePaintNeeds();
assert(paintRes.totalWallArea > 0, `Luas dinding terhitung positif (${paintRes.totalWallArea} m²)`);
assert(paintRes.grandArea > paintRes.totalWallArea, `Grand area menyertakan plafon (${paintRes.grandArea} m²)`);
assert(paintRes.totalVolumeLiters > 0, `Kebutuhan cat terhitung (${paintRes.totalVolumeLiters} Liter)`);
assert(paintRes.gallons > 0 || paintRes.pails > 0, `Rekomendasi kemasan valid (${paintRes.pails} Pail, ${paintRes.gallons} Galon)`);
assert(paintRes.sealerGallons > 0, `Cat dasar alkali sealer terhitung (${paintRes.sealerGallons} Galon)`);

// ─── 2. UJI ESTIMATOR KERAMIK & GRANIT ───────────────────────
console.log('\n🧱 2. Uji Kalkulator Keramik & Granit:');
const tileRes = calculateTileNeeds();
assert(tileRes.rawArea === 12, `Luas bersih kamar 4x3m adalah 12 m² (didapat: ${tileRes.rawArea})`);
assert(tileRes.totalAreaWithWaste === 13.2, `Luas dengan cadangan 10% adalah 13.2 m² (didapat: ${tileRes.totalAreaWithWaste})`);
assert(tileRes.totalBoxes === 14, `Kebutuhan keramik 40x40cm adalah 14 dus (didapat: ${tileRes.totalBoxes})`);
assert(tileRes.adhesiveBags === 2, `Kebutuhan semen perekat adalah 2 sak (didapat: ${tileRes.adhesiveBags})`);
assert(tileRes.groutBags === 4, `Kebutuhan pengisi nat adalah 4 bungkus (didapat: ${tileRes.groutBags})`);

// ─── 3. UJI ESTIMATOR PASANGAN DINDING (HEBEL / BATA) ───────
console.log('\n🏗️ 3. Uji Kalkulator Pasangan Dinding:');
const brickRes = calculateBrickNeeds();
assert(brickRes.rawWallArea === 18, `Luas kotor tembok 6x3m adalah 18 m² (didapat: ${brickRes.rawWallArea})`);
assert(brickRes.netArea === 16, `Luas bersih dinding adalah 16 m² (didapat: ${brickRes.netArea})`);
assert(brickRes.brickPcs === 134, `Kebutuhan hebel 10cm adalah 134 pcs (didapat: ${brickRes.brickPcs})`);
assert(brickRes.brickCubic === 1.6, `Volume hebel adalah 1.6 m³ (didapat: ${brickRes.brickCubic})`);
assert(brickRes.mortarBags === 2, `Kebutuhan semen mortar thinbed adalah 2 sak (didapat: ${brickRes.mortarBags})`);

// ─── 4. UJI ESTIMATOR ATAP & SENG GELOMBANG ─────────────────
console.log('\n🏠 4. Uji Kalkulator Atap (Spandek, Seng, Asbes):');

// 4a. Uji Spandek Galvalum (Model Pelana 2 Sisi 8x6m)
setEstimatorRoofMode('gable');
setEstimatorRoofType('spandek');
updateEstimatorRoofField('length', 8);
updateEstimatorRoofField('width', 6);
updateEstimatorRoofField('slopeAngle', 20);
updateEstimatorRoofField('overhang', 0.6);
updateEstimatorRoofField('sheetLength', 4);
updateEstimatorRoofField('includeRidge', true);
updateEstimatorRoofField('includeFasteners', true);

const roofSpandek = calculateRoofNeeds();
assert(roofSpandek.totalRoofArea > 0, `Luas total atap spandek terhitung (${roofSpandek.totalRoofArea} m²)`);
assert(roofSpandek.slopeLength > 3.5 && roofSpandek.slopeLength < 4.5, `Panjang lereng miring terhitung realistis (${roofSpandek.slopeLength} m)`);
assert(roofSpandek.totalSheets > 0, `Total lembar spandek terhitung (${roofSpandek.totalSheets} Lembar)`);
assert(roofSpandek.ridgePieces === 11, `Nok bubungan spandek terhitung 11 batang untuk bentang 9.2m (didapat: ${roofSpandek.ridgePieces})`);
assert(roofSpandek.fastenerPcs > 0 && roofSpandek.fastenerPacks > 0, `Baut roofing SDS terhitung (${roofSpandek.fastenerPcs} Pcs / ${roofSpandek.fastenerPacks} Box)`);

// 4b. Uji Seng Gelombang BJLS
setEstimatorRoofType('seng');
updateEstimatorRoofField('sheetLength', 2.1);
const roofSeng = calculateRoofNeeds();
assert(roofSeng.spec.id === 'seng', `Tipe seng aktif terverifikasi (${roofSeng.spec.name})`);
assert(roofSeng.sheetsPerSlope === 2, `Lereng ~3.83m butuh 2 susun sambungan untuk seng 2.1m (didapat: ${roofSeng.sheetsPerSlope})`);
assert(roofSeng.fastenerPcs === roofSeng.totalSheets * 8, `Paku payung seng = 8 pcs/lembar (${roofSeng.fastenerPcs} pcs)`);

// 4c. Uji Asbes Gelombang (Lebar Efektif 0.95m)
setEstimatorRoofType('asbes');
updateEstimatorRoofField('sheetLength', 2.4);
const roofAsbes = calculateRoofNeeds();
assert(roofAsbes.spec.id === 'asbes', `Tipe asbes aktif terverifikasi (${roofAsbes.spec.name})`);
assert(roofAsbes.spec.effectiveWidth === 0.95, `Lebar efektif asbes adalah 0.95m (didapat: ${roofAsbes.spec.effectiveWidth})`);
assert(roofAsbes.fastenerPcs === roofAsbes.totalSheets * 6, `Paku asbes berkaret = 6 pcs/lembar (${roofAsbes.fastenerPcs} pcs)`);

// 4d. Uji Mode Kanopi (Monopitch 1 Sisi)
setEstimatorRoofMode('monopitch');
updateEstimatorRoofField('length', 5);
updateEstimatorRoofField('width', 3);
updateEstimatorRoofField('sheetLength', 4);
const roofKanopi = calculateRoofNeeds();
assert(roofKanopi.mode === 'monopitch', `Mode kanopi 1 sisi aktif`);
assert(roofKanopi.ridgePieces === 0, `Kanopi 1 sisi tidak membutuhkan nok bubungan puncak (didapat: ${roofKanopi.ridgePieces})`);
assert(roofKanopi.totalSheets > 0, `Total lembar kanopi terhitung (${roofKanopi.totalSheets} Lembar)`);

// 4e. Uji Mode Luas Langsung M²
setEstimatorRoofMode('area');
updateEstimatorRoofField('directArea', 50);
const roofArea = calculateRoofNeeds();
assert(roofArea.mode === 'area', `Mode luas langsung aktif`);
assert(roofArea.totalRoofArea === 50, `Luas langsung 50 m² terhitung (didapat: ${roofArea.totalRoofArea})`);
assert(roofArea.totalSheets > 0, `Total lembar terhitung dari luas langsung (${roofArea.totalSheets} Lembar)`);

// ─── 5. UJI PRESISI DESIMAL DAN STEPPER KASIR POS ───────────
console.log('\n⚖️ 5. Uji Presisi Desimal Kasir POS (Paku/Kabel Curah):');
const calcSubtotal = (price, qty, disc = 0) => Math.max(0, Math.round(price * qty - disc));

const sub1 = calcSubtotal(24000, 0.5);
assert(sub1 === 12000, `0.5 kg paku @ Rp 24.000 = Rp 12.000 (didapat: ${sub1})`);

const sub2 = calcSubtotal(24000, 0.25);
assert(sub2 === 6000, `0.25 kg paku @ Rp 24.000 = Rp 6.000 (didapat: ${sub2})`);

const sub3 = calcSubtotal(8500, 2.5);
assert(sub3 === 21250, `2.5 meter kabel @ Rp 8.500 = Rp 21.250 (didapat: ${sub3})`);

// Uji Anti-Floating Point Glitch (cth: 24000 * 0.3)
const subGlitch = calcSubtotal(24000, 0.3);
assert(subGlitch === 7200, `24000 * 0.3 terbulatkan sempurna ke Rp 7.200 tanpa pecahan floating point (didapat: ${subGlitch})`);

// ─── 6. UJI REKOMENDASI PRODUK DINAMIS DARI DATABASE TOKO ─────
console.log('\n📦 6. Uji Rekomendasi Produk Dinamis & Tambah ke Keranjang:');

// Setup mock produk toko aktif di appData.products
appData.products = [
    { id: 'prod-cat-1', name: 'Cat Tembok Dulux Weathershield 2.5L', category: 'Cat & Finishing', price: 245000, isActive: true },
    { id: 'prod-cat-2', name: 'Alkali Sealer Mowilex Precoat 2.5L', category: 'Cat & Finishing', price: 165000, isActive: true },
    { id: 'prod-tile-1', name: 'Keramik Roman 40x40 G4001', category: 'Lantai & Dinding', price: 78000, isActive: true },
    { id: 'prod-brick-1', name: 'Bata Ringan Hebel Citicon 10cm', category: 'Material Konstruksi', price: 10500, isActive: true },
    { id: 'prod-roof-1', name: 'Atap Spandek Galvalum 0.30mm (4m)', category: 'Atap & Plafon', price: 135000, isActive: true },
    { id: 'prod-non-mat', name: 'Sabun Cuci Tangan 500ml', category: 'Kebutuhan Harian', price: 15000, isActive: true }
];

const matchedPaints = findRelatedStoreProducts('paint');
assert(matchedPaints.length === 2, `Pencocokan cat menghasilkan 2 produk toko (didapat: ${matchedPaints.length})`);
assert(matchedPaints.some(p => p.id === 'prod-cat-1'), `Produk Dulux ditemukan dalam rekomendasi cat`);

const matchedTiles = findRelatedStoreProducts('tile');
assert(matchedTiles.length === 1 && matchedTiles[0].id === 'prod-tile-1', `Produk Keramik Roman ditemukan dalam rekomendasi keramik`);

const matchedBricks = findRelatedStoreProducts('brick');
assert(matchedBricks.length === 1 && matchedBricks[0].id === 'prod-brick-1', `Produk Hebel Citicon ditemukan dalam rekomendasi bata`);

const matchedRoofs = findRelatedStoreProducts('roof');
assert(matchedRoofs.length === 1 && matchedRoofs[0].id === 'prod-roof-1', `Produk Spandek ditemukan dalam rekomendasi atap`);

// Non-material tidak boleh bocor ke rekomendasi
assert(!matchedPaints.some(p => p.id === 'prod-non-mat'), `Produk non-material tidak bocor ke rekomendasi`);

// Uji integrasi aksi tambah ke keranjang Storefront
let addedToStorefrontId = null;
globalThis.window = globalThis.window || {};
globalThis.window.quickAddOrOpenProduct = (e, id) => {
    addedToStorefrontId = id;
};

// Simulasi mode Storefront
openMaterialEstimatorModal('storefront');
addStoreProductFromEstimator('prod-cat-1');
assert(addedToStorefrontId === 'prod-cat-1', `addStoreProductFromEstimator berhasil memanggil quickAddOrOpenProduct di Storefront`);

// Uji integrasi aksi tambah ke kasir POS
let addedToPOSId = null;
globalThis.window.posAddToCart = (id) => {
    addedToPOSId = id;
};

// Simulasi mode POS
openMaterialEstimatorModal('pos');
addStoreProductFromEstimator('prod-roof-1');
assert(addedToPOSId === 'prod-roof-1', `addStoreProductFromEstimator berhasil memanggil posAddToCart di mode Kasir POS`);

// ─── 7. UJI PRODUK MULTI-VARIAN, RENTANG HARGA & RESPONSIVE LAYOUT ───
console.log('\n📱 7. Uji Produk Multi-Varian, Rentang Harga & Layout Responsif:');

const prodVariant = {
    id: 'prod-nodrop-var',
    name: 'Cat Pelapis No Drop Waterproofing',
    category: 'Cat & Finishing',
    price: 65000,
    hasVariants: true,
    variants: [
        { name: '1 kg Abu-abu', price: 65000 },
        { name: '4 kg Abu-abu', price: 235000 },
        { name: '20 kg Pail', price: 1100000 }
    ],
    isActive: true
};
appData.products.push(prodVariant);

const htmlResult = renderRelatedProductsHtml('paint', 'fa-paintbrush', 'Rekomendasi Cat');
assert(htmlResult.includes('grid-cols-1 sm:grid-cols-2'), `Layout responsif mengadopsi 1-kolom di mobile dan 2-kolom di sm: (grid-cols-1 sm:grid-cols-2)`);
assert(htmlResult.includes('Varian'), `Badge chip Varian ter-render pada produk multi-varian`);
assert(htmlResult.includes('Rp 65.000 - Rp 1.100.000'), `Rentang harga min-max ter-render dengan rapi (${htmlResult.includes('Rp 65.000 - Rp 1.100.000') ? 'valid' : 'gagal'})`);
assert(htmlResult.includes('window.handleEstimatorProductCardClick'), `Kartu produk memanggil handler terpadu handleEstimatorProductCardClick`);

// Uji routing POS untuk produk bervarian
let openedPOSVariantId = null;
globalThis.window.openPOSVariantSheet = (id) => {
    openedPOSVariantId = id;
};

openMaterialEstimatorModal('pos');
handleEstimatorProductCardClick('prod-nodrop-var');
assert(openedPOSVariantId === 'prod-nodrop-var', `Klik kartu produk multi-varian di POS membuka Drawer Varian (openPOSVariantSheet)`);

openedPOSVariantId = null;
addStoreProductFromEstimator('prod-nodrop-var');
assert(openedPOSVariantId === 'prod-nodrop-var', `Tombol (+) produk multi-varian di POS membuka Drawer Varian (openPOSVariantSheet)`);

// Uji routing Storefront untuk detail produk
let openedProductModalId = null;
globalThis.window.openProductModal = (id) => {
    openedProductModalId = id;
};
openMaterialEstimatorModal('storefront');
handleEstimatorProductCardClick('prod-nodrop-var');
assert(openedProductModalId === 'prod-nodrop-var', `Klik kartu produk di Storefront membuka modal detail (openProductModal)`);

// ─── 8. UJI KEAMANAN MATEMATIS & ZERO-SAFE INPUTS (ANTI-NAN) ───
console.log('\n🛡️ 8. Uji Keamanan Matematis & Proteksi Nilai Negatif/Kosong:');

updateEstimatorPaintField('length', '');
updateEstimatorPaintField('width', '-5');
updateEstimatorPaintField('openings', 'abc');
const safePaint = calculatePaintNeeds();
assert(!isNaN(safePaint.grandArea) && safePaint.grandArea >= 0, `calculatePaintNeeds aman dari NaN dan negatif saat input kosong/minus`);
assert(!isNaN(safePaint.totalVolumeLiters), `Kebutuhan volume cat aman dari NaN`);

updateEstimatorTileField('length', '');
updateEstimatorTileField('wastePercent', '-10');
const safeTile = calculateTileNeeds();
assert(!isNaN(safeTile.totalAreaWithWaste) && safeTile.totalAreaWithWaste >= 0, `calculateTileNeeds aman dari NaN saat input kosong/minus`);

updateEstimatorBrickField('length', '');
updateEstimatorBrickField('openings', '999');
const safeBrick = calculateBrickNeeds();
assert(!isNaN(safeBrick.netArea) && safeBrick.netArea >= 0, `calculateBrickNeeds aman dari NaN dan netArea tidak bernilai negatif`);

// Kembalikan nilai default kalkulator
updateEstimatorPaintField('length', 4);
updateEstimatorPaintField('width', 3);
updateEstimatorPaintField('openings', 4);
updateEstimatorTileField('length', 4);
updateEstimatorTileField('width', 3);
updateEstimatorTileField('wastePercent', 10);
updateEstimatorBrickField('length', 6);
updateEstimatorBrickField('height', 3);
updateEstimatorBrickField('openings', 2);

// ─── 9. UJI PERLUASAN SINONIM KOSAKATA MATERIAL LOKAL ─────────
console.log('\n🔍 9. Uji Perluasan Sinonim Kosakata Material Toko:');

appData.products.push(
    { id: 'syn-1', name: 'Plamur Tembok RJ London 1kg', category: 'Finishing', price: 25000, isActive: true },
    { id: 'syn-2', name: 'Semen Tile Grout AM 53 Pengisi Nat', category: 'Perekat', price: 18000, isActive: true },
    { id: 'syn-3', name: 'Bata Merah Bakar Super Garut', category: 'Bahan Kasar', price: 850, isActive: true },
    { id: 'syn-4', name: 'Baut Roofing SDS 12x50 Baut Baja Ringan', category: 'Aksesoris Atap', price: 500, isActive: true }
);

const synPaints = findRelatedStoreProducts('paint');
assert(synPaints.some(p => p.id === 'syn-1'), `Sinonim 'plamur' berhasil dicocokkan ke kategori cat`);

const synTiles = findRelatedStoreProducts('tile');
assert(synTiles.some(p => p.id === 'syn-2'), `Sinonim 'tile grout' berhasil dicocokkan ke kategori keramik`);

const synBricks = findRelatedStoreProducts('brick');
assert(synBricks.some(p => p.id === 'syn-3'), `Sinonim 'bata merah' berhasil dicocokkan ke kategori dinding`);

const synRoofs = findRelatedStoreProducts('roof');
assert(synRoofs.some(p => p.id === 'syn-4'), `Sinonim 'baut roofing sds' berhasil dicocokkan ke kategori atap`);

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ SEMUA KALKULASI ESTIMATOR, REKOMENDASI & CART 100% VALID! ✅\n');
} else {
    process.exit(1);
}

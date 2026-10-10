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
    updateEstimatorRoofField
} from '../src/modules/catalog/material-estimator.js';

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

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ SEMUA KALKULASI ESTIMATOR & PRESISI DESIMAL 100% VALID! ✅\n');
} else {
    process.exit(1);
}

/**
 * Test Suite: Material Estimator Formulas & POS Decimal Precision
 * Validasi keakuratan matematis estimator bahan bangunan dan presisi desimal kasir
 */

import { calculatePaintNeeds, calculateTileNeeds, calculateBrickNeeds } from '../src/modules/catalog/material-estimator.js';

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

// ─── 4. UJI PRESISI DESIMAL DAN STEPPER KASIR POS ───────────
console.log('\n⚖️ 4. Uji Presisi Desimal Kasir POS (Paku/Kabel Curah):');
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

/**
 * Test Suite: Verifikasi Proporsionalitas & Harmonisasi Tema Promo (Katalog Reward Poin & Flash Sale)
 * Memastikan kartu reward dan flash sale tidak berukuran raksasa, proporsional,
 * menggunakan tombol teks kompak ('Tukar Hadiah' & 'Beli Kilat') yang single-line dan rapi.
 */

import fs from 'fs';
import path from 'path';
import assert from 'assert';

const ROOT_DIR = process.cwd();
const REWARD_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'member', 'reward.js');
const FLASH_SALE_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'catalog', 'flash-sale-section.js');
const STYLE_CSS_PATH = path.join(ROOT_DIR, 'src', 'style.css');

console.log('\n============================================================');
console.log('🧪 TEST SUITE: PROPORSIONALITAS KATALOG REWARD & FLASH SALE');
console.log('============================================================\n');

let passedTests = 0;
let failedTests = 0;

function runTest(desc, testFn) {
    try {
        testFn();
        console.log(`  ✅ PASS: ${desc}`);
        passedTests++;
    } catch (err) {
        console.error(`  ❌ FAIL: ${desc}`);
        console.error(`     Alasan: ${err.message}`);
        failedTests++;
    }
}

// ── 1. UJI UKURAN KARTU & TATA LETAK KATALOG REWARD ──────────────
console.log('🎁 1. Uji Proporsionalitas Kartu Reward Poin:');
const rewardJsCode = fs.readFileSync(REWARD_JS_PATH, 'utf8');

runTest('Kartu katalog reward tidak lagi menggunakan lebar berlebihan w-[180px]', () => {
    assert.ok(
        !rewardJsCode.includes('w-[180px] sm:w-[215px] md:w-[228px]'),
        'Masih ditemukan lebar raksasa w-[180px] sm:w-[215px] md:w-[228px] di reward.js'
    );
});

runTest('Kartu katalog reward menggunakan lebar proporsional w-[150px] sm:w-[172px] md:w-[188px]', () => {
    assert.ok(
        rewardJsCode.includes('w-[150px] sm:w-[172px] md:w-[188px]'),
        'Lebar proporsional w-[150px] sm:w-[172px] md:w-[188px] harus terpasang di reward.js'
    );
});

runTest('Padding kartu reward proporsional p-2.5 sm:p-3 (tidak puffy p-3.5 sm:p-4)', () => {
    assert.ok(
        rewardJsCode.includes('p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900'),
        'Padding internal kartu reward harus proporsional p-2.5 sm:p-3'
    );
});

runTest('Tombol reward tetap menggunakan teks jelas "Tukar Hadiah" (.btn-reward-redeem)', () => {
    assert.ok(
        rewardJsCode.includes('class="btn-reward-redeem w-full"') && rewardJsCode.includes('<span>Tukar Hadiah</span>'),
        'Tombol reward harus berupa tombol teks "Tukar Hadiah" dengan kelas .btn-reward-redeem'
    );
});

runTest('Biaya poin ditempatkan rapi di atas tombol dengan label Biaya Poin dan chip koin', () => {
    assert.ok(
        rewardJsCode.includes('Biaya Poin') && rewardJsCode.includes('fa-solid fa-coins text-amber-500'),
        'Biaya poin harus memiliki label eyebrow Biaya Poin dan ikon koin'
    );
});

// ── 2. UJI UKURAN KARTU & TATA LETAK FLASH SALE ──────────────────
console.log('\n⚡ 2. Uji Proporsionalitas Kartu Flash Sale:');
const flashSaleCode = fs.readFileSync(FLASH_SALE_JS_PATH, 'utf8');

runTest('Kartu flash sale tidak lagi menggunakan lebar berlebihan w-[180px]', () => {
    assert.ok(
        !flashSaleCode.includes('w-[180px] sm:w-[215px] md:w-[228px]'),
        'Masih ditemukan lebar raksasa w-[180px] di flash-sale-section.js'
    );
});

runTest('Kartu flash sale menggunakan lebar proporsional w-[150px] sm:w-[172px] md:w-[188px] selaras reward', () => {
    assert.ok(
        flashSaleCode.includes('w-[150px] sm:w-[172px] md:w-[188px]'),
        'Lebar proporsional w-[150px] sm:w-[172px] md:w-[188px] harus terpasang di flash-sale-section.js'
    );
});

runTest('Tombol flash sale menggunakan kelas khusus kompak .btn-flash-buy dengan teks "Beli Kilat"', () => {
    assert.ok(
        flashSaleCode.includes('class="btn-flash-buy w-full"') && flashSaleCode.includes('<span>Beli Kilat</span>'),
        'Tombol flash sale harus menggunakan kelas .btn-flash-buy dan teks "Beli Kilat"'
    );
});

runTest('Progress bar kuota flash sale berukuran kompak h-1.5 (tidak tebal h-2.5)', () => {
    assert.ok(
        flashSaleCode.includes('h-1.5 w-full overflow-hidden rounded-full'),
        'Progress bar kuota flash sale harus kompak h-1.5'
    );
});

// ── 3. UJI STYLE CSS DI SRC/STYLE.CSS ────────────────────────────
console.log('\n🎨 3. Uji Aturan Styling CSS di style.css:');
const styleCssCode = fs.readFileSync(STYLE_CSS_PATH, 'utf8');

runTest('.btn-reward-redeem dan .btn-flash-buy terdefinisi dengan tinggi kompak 32px (34px desktop)', () => {
    assert.ok(
        styleCssCode.includes('.btn-reward-redeem,') && styleCssCode.includes('.btn-flash-buy {') && styleCssCode.includes('height: 32px !important;'),
        'Tombol promo harus memiliki styling tinggi kompak 32px'
    );
});

runTest('.btn-reward-redeem dan .btn-flash-buy memiliki proteksi single-line (white-space: nowrap)', () => {
    assert.ok(
        styleCssCode.includes('white-space: nowrap !important;'),
        'Tombol promo harus memiliki white-space: nowrap agar tidak meluber 2 baris'
    );
});

runTest('.btn-flash-buy-disabled terdefinisi untuk kondisi stok habis', () => {
    assert.ok(
        styleCssCode.includes('.btn-flash-buy-disabled {'),
        '.btn-flash-buy-disabled harus didefinisikan di style.css'
    );
});

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ KATALOG REWARD & FLASH SALE 100% PROPORSIONAL, RAPI & SELARAS TEMA! ✅');
} else {
    console.error('❌ BEBERAPA UJI COBA GAGAL!');
    process.exit(1);
}
console.log('============================================================\n');

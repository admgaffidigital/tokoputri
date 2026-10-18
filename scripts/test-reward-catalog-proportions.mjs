/**
 * Test Suite: Verifikasi Proporsionalitas & Harmonisasi Tema Katalog Reward Poin & Tombol Aksi
 * Memastikan kartu katalog reward poin tidak lagi berukuran raksasa, poin proporsional,
 * dan tombol aksi selaras 100% dengan standar .btn-catalog-action tema toko.
 */

import fs from 'fs';
import path from 'path';
import assert from 'assert';

const ROOT_DIR = process.cwd();
const REWARD_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'member', 'reward.js');
const STYLE_CSS_PATH = path.join(ROOT_DIR, 'src', 'style.css');

console.log('\n============================================================');
console.log('🧪 TEST SUITE: PROPORSIONALITAS KATALOG & POIN REWARD');
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
console.log('📐 1. Uji Proporsionalitas Dimensi Kartu Reward:');
const rewardJsCode = fs.readFileSync(REWARD_JS_PATH, 'utf8');

runTest('Kartu katalog reward tidak lagi menggunakan lebar berlebihan w-[180px]', () => {
    assert.ok(
        !rewardJsCode.includes('w-[180px] sm:w-[215px] md:w-[228px]'),
        'Masih ditemukan lebar raksasa w-[180px] sm:w-[215px] md:w-[228px] di reward.js'
    );
});

runTest('Kartu katalog reward menggunakan lebar proporsional w-[148px] sm:w-[172px] md:w-[190px]', () => {
    assert.ok(
        rewardJsCode.includes('w-[148px] sm:w-[172px] md:w-[190px]'),
        'Lebar proporsional w-[148px] sm:w-[172px] md:w-[190px] harus terpasang di reward.js'
    );
});

runTest('Padding kartu proporsional p-2.5 sm:p-3 (tidak puffy p-3.5 sm:p-4)', () => {
    assert.ok(
        rewardJsCode.includes('p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900'),
        'Padding internal kartu reward harus proporsional p-2.5 sm:p-3'
    );
});

// ── 2. UJI KONSISTENSI TOMBOL AKSI DENGAN TEMA KATALOG ────────────
console.log('\n🔘 2. Uji Penyelarasan Tombol Aksi Tukar Hadiah:');

runTest('Tombol tidak lagi menggunakan .btn-native-action w-full yang membengkak 2-baris', () => {
    assert.ok(
        !rewardJsCode.includes('btn-native-action w-full py-2.5 px-3 rounded-xl text-white font-black text-[11px] sm:text-xs uppercase tracking-wider text-center'),
        'Masih ditemukan tombol raksasa 2 baris .btn-native-action w-full'
    );
});

runTest('Tombol aksi mengadopsi standar tema .btn-catalog-action dan .btn-reward-action', () => {
    assert.ok(
        rewardJsCode.includes('btn-catalog-action btn-reward-action'),
        'Tombol reward harus menggunakan kelas .btn-catalog-action dan .btn-reward-action'
    );
});

runTest('Tombol aksi memiliki atribut aksesibilitas title dan aria-label', () => {
    assert.ok(
        rewardJsCode.includes('title="Tukar Hadiah') && rewardJsCode.includes('aria-label="Tukar Hadiah'),
        'Tombol reward harus memiliki title dan aria-label ramah screen-reader'
    );
});

// ── 3. UJI PENYATUAN BARIS POIN & TOMBOL SEJAJAR ────────────────
console.log('\n⚖️ 3. Uji Penyatuan Baris Footer (Poin di Kiri & Tombol di Kanan):');

runTest('Poin dan tombol aksi disatukan dalam 1 baris flex horizontal (items-end justify-between)', () => {
    assert.ok(
        rewardJsCode.includes('flex items-end justify-between mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-800/80 gap-1.5'),
        'Baris footer reward harus sejajar items-end justify-between selaras katalog utama'
    );
});

runTest('Biaya poin memiliki label mini eyebrow (Biaya Poin) dan ikon koin rapi', () => {
    assert.ok(
        rewardJsCode.includes('Biaya Poin') && rewardJsCode.includes('fa-solid fa-coins text-amber-500'),
        'Biaya poin harus memiliki label eyebrow Biaya Poin dan ikon fa-coins amber'
    );
});

runTest('Eliminasi kotak tag poin terpisah bg-amber-50 yang memakan ruang vertikal', () => {
    assert.ok(
        !rewardJsCode.includes('mt-2.5 flex items-center gap-1.5 py-1 px-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80'),
        'Kotak tag poin terpisah bg-amber-50 harus sudah dihilangkan'
    );
});

// ── 4. UJI STYLE CSS DI SRC/STYLE.CSS ────────────────────────────
console.log('\n🎨 4. Uji Styling CSS .btn-reward-action di style.css:');
const styleCssCode = fs.readFileSync(STYLE_CSS_PATH, 'utf8');

runTest('.btn-reward-action terdefinisi di src/style.css', () => {
    assert.ok(
        styleCssCode.includes('.btn-reward-action {'),
        '.btn-reward-action harus didefinisikan di style.css'
    );
});

runTest('.btn-reward-action mendukung Dark Mode', () => {
    assert.ok(
        styleCssCode.includes('.dark .btn-reward-action {'),
        '.dark .btn-reward-action harus didefinisikan di style.css'
    );
});

runTest('.btn-reward-action memiliki efek tactile feedback :active scale', () => {
    assert.ok(
        styleCssCode.includes('.btn-reward-action:active {'),
        '.btn-reward-action:active harus didefinisikan di style.css'
    );
});

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ KATALOG DAN POIN REWARD 100% PROPORSIONAL & SELARAS TEMA! ✅');
} else {
    console.error('❌ BEBERAPA UJI COBA GAGAL!');
    process.exit(1);
}
console.log('============================================================\n');

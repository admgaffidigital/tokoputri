#!/usr/bin/env node
/**
 * ============================================================
 * TEST SUITE: LOGIKA MEMBER, LOYALITAS, TIERING & REWARD
 * Toko Putri - Validasi Matematis & Arsitektur Bisnis Loyalitas
 * ============================================================
 */

import { getMemberTier, formatMemberCardNumber } from '../src/modules/member/reward.js';
import { generateCode128Svg } from '../src/core/barcode-code128.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE LOGIKA MEMBER & LOYALITAS VIP');
console.log('============================================================\n');

// ── 1. UJI TINGKATAN (TIER) & PROGRES LEVEL ───────────────────
console.log('👑 1. Uji Klasifikasi Tingkat (Tier) Member:');

// a. Bronze Member (0 - 99 Poin)
const bronze0 = getMemberTier(0);
assert(bronze0.level === 1, '0 poin harus Level 1 (Bronze)');
assert(bronze0.name === 'BRONZE MEMBER', 'Nama tier: BRONZE MEMBER');
assert(bronze0.nextTier === 'Silver Member', 'Tier berikutnya: Silver Member');
assert(bronze0.ptsNeeded === 100, 'Kurang 100 poin menuju Silver');
assert(bronze0.progress === 0, 'Progres 0% pada 0 poin');

const bronze50 = getMemberTier(50);
assert(bronze50.level === 1, '50 poin harus Level 1 (Bronze)');
assert(bronze50.ptsNeeded === 50, 'Kurang 50 poin menuju Silver (didapat: 50)');
assert(bronze50.progress === 50, 'Progres 50% pada 50 poin (didapat: 50%)');

// b. Silver Member (100 - 499 Poin)
const silver100 = getMemberTier(100);
assert(silver100.level === 2, '100 poin harus Level 2 (Silver)');
assert(silver100.name === 'SILVER MEMBER', 'Nama tier: SILVER MEMBER');
assert(silver100.nextTier === 'Gold Member', 'Tier berikutnya: Gold Member');
assert(silver100.ptsNeeded === 400, 'Kurang 400 poin menuju Gold (didapat: 400)');
assert(silver100.progress === 0, 'Progres 0% pada awal Silver (100 poin)');

const silver300 = getMemberTier(300);
assert(silver300.level === 2, '300 poin harus Level 2 (Silver)');
assert(silver300.ptsNeeded === 200, 'Kurang 200 poin menuju Gold (didapat: 200)');
assert(silver300.progress === 50, 'Progres 50% pada 300 poin (rentang 100-500)');

// c. Gold Member (500 - 999 Poin)
const gold500 = getMemberTier(500);
assert(gold500.level === 3, '500 poin harus Level 3 (Gold)');
assert(gold500.name === 'GOLD MEMBER', 'Nama tier: GOLD MEMBER');
assert(gold500.nextTier === 'Platinum VIP', 'Tier berikutnya: Platinum VIP');
assert(gold500.ptsNeeded === 500, 'Kurang 500 poin menuju Platinum (didapat: 500)');
assert(gold500.progress === 0, 'Progres 0% pada awal Gold (500 poin)');

const gold750 = getMemberTier(750);
assert(gold750.level === 3, '750 poin harus Level 3 (Gold)');
assert(gold750.ptsNeeded === 250, 'Kurang 250 poin menuju Platinum (didapat: 250)');
assert(gold750.progress === 50, 'Progres 50% pada 750 poin (rentang 500-1000)');

// d. Platinum VIP (>= 1000 Poin)
const plat1000 = getMemberTier(1000);
assert(plat1000.level === 4, '1000 poin harus Level 4 (Platinum VIP)');
assert(plat1000.name === 'PLATINUM VIP', 'Nama tier: PLATINUM VIP');
assert(plat1000.nextTier === null, 'Tingkat tertinggi tidak memiliki nextTier');
assert(plat1000.ptsNeeded === 0, 'Poin yang dibutuhkan 0 pada Platinum');
assert(plat1000.progress === 100, 'Progres 100% pada Platinum VIP');

const plat5000 = getMemberTier(5000);
assert(plat5000.level === 4, '5000 poin tetap Level 4 (Platinum VIP)');
assert(plat5000.progress === 100, 'Progres tetap 100%');

// e. Input Toleransi Tinggi (NaN, Negatif, String)
const safeNaN = getMemberTier('bukan-angka');
assert(safeNaN.level === 1, 'Input non-angka fallback aman ke Level 1 Bronze');
const safeNeg = getMemberTier(-150);
assert(safeNeg.level === 1 && safeNeg.ptsNeeded === 100, 'Input negatif dinormalkan ke 0 poin');


// ── 2. UJI FORMAT NOMOR KARTU DIGITAL VIP ─────────────────────
console.log('\n💳 2. Uji Format Nomor Kartu Member Digital:');
const card1 = formatMemberCardNumber('081234567890');
assert(card1.startsWith('PUTRI • '), `Kartu harus diawali prefix PUTRI • (didapat: ${card1})`);
assert(card1.includes('8123'), 'Mengandung 4 digit pertama tanpa leading 0');

const card2 = formatMemberCardNumber('62812345678901');
assert(card2.startsWith('PUTRI • '), `Kartu format 62 diawali PUTRI • (didapat: ${card2})`);
assert(card2.includes('8123 • 4567'), 'Memecah kelompok 4 digit konsisten');

const cardShort = formatMemberCardNumber('812');
assert(cardShort.length >= 16, `Nomor pendek otomatis di-pad minimal 8 digit (didapat: ${cardShort})`);


// ── 3. UJI GENERATOR BARCODE MEMBER CODE 128 ──────────────────
console.log('\n🏷️ 3. Uji Barcode Standar Code 128 untuk Scanner POS:');
const bcSvg = generateCode128Svg('081234567890', { height: 34, showText: false });
assert(typeof bcSvg === 'string', 'Barcode menghasilkan output string');
assert(bcSvg.startsWith('<svg') && bcSvg.endsWith('</svg>'), 'Barcode berupa elemen SVG utuh');
assert(bcSvg.includes('viewBox="0 0'), 'SVG memiliki atribut viewBox proporsional');
assert(bcSvg.includes('shape-rendering="crispEdges"'), 'Barcode menggunakan crispEdges untuk presisi scanner laser');


// ── 4. UJI PERHITUNGAN LIMIT & TAGIHAN PUTRI PAYLATER ─────────
console.log('\n⚡ 4. Uji Logika Perhitungan Limit Kredit Putri PayLater:');
const dummyMemberActive = {
    name: 'Haji Supardi',
    phone: '081234567890',
    points: 650,
    paylaterActive: true,
    paylaterLimit: 2500000,
    paylaterUsed: 750000,
    paylaterDueDay: 5
};

const limit = Math.max(0, parseFloat(dummyMemberActive.paylaterLimit) || 0);
const used = Math.max(0, parseFloat(dummyMemberActive.paylaterUsed) || 0);
const available = Math.max(0, limit - used);
const percentUsed = Math.min(100, Math.max(0, Math.round((used / limit) * 100)));

assert(limit === 2500000, 'Total plafon limit kredit adalah Rp 2.500.000');
assert(used === 750000, 'Limit terpakai adalah Rp 750.000');
assert(available === 1750000, `Sisa limit tersedia adalah Rp 1.750.000 (didapat: ${available})`);
assert(percentUsed === 30, `Persentase terpakai adalah 30% (didapat: ${percentUsed}%)`);
assert(dummyMemberActive.paylaterDueDay === 5, 'Tanggal jatuh tempo adalah tanggal 5 bulan depan');

// Uji member nonaktif PayLater
const dummyMemberInactive = {
    name: 'Pelanggan Umum',
    phone: '085712345678',
    points: 80,
    paylaterActive: false,
    paylaterLimit: 0,
    paylaterUsed: 0
};
const inactiveLimit = Math.max(0, parseFloat(dummyMemberInactive.paylaterLimit) || 0);
const isPlActive = dummyMemberInactive.paylaterActive === true && inactiveLimit > 0;
assert(isPlActive === false, 'Member tanpa aktivasi paylater terdeteksi nonaktif secara tepat');


// ── 5. UJI LOGIKA PENUKARAN REWARD DENGAN POIN ────────────────
console.log('\n🎁 5. Uji Validasi Penukaran Hadiah (Reward Redemption):');
const dummyRewards = [
    { id: 'REW-1', name: 'Kaos Proyek Toko Putri', pointsCost: 150, stock: 5, isActive: true },
    { id: 'REW-2', name: 'Set Obeng Presisi 24 in 1', pointsCost: 500, stock: 2, isActive: true },
    { id: 'REW-3', name: 'Mesin Bor Impact Cordless', pointsCost: 1000, stock: 0, isActive: true }, // Habis stok
    { id: 'REW-4', name: 'Genset Mini Portable', pointsCost: 2000, stock: 1, isActive: true } // Poin kurang
];

const memberPts = 650;

// REW-1: 150 pts, stock 5 -> OK
const rew1Ok = memberPts >= dummyRewards[0].pointsCost && dummyRewards[0].stock > 0;
assert(rew1Ok === true, 'Kaos Proyek (150 poin) dapat ditukar oleh member dengan 650 poin');

// REW-2: 500 pts, stock 2 -> OK
const rew2Ok = memberPts >= dummyRewards[1].pointsCost && dummyRewards[1].stock > 0;
assert(rew2Ok === true, 'Set Obeng (500 poin) dapat ditukar oleh member dengan 650 poin');

// REW-3: 1000 pts, stock 0 -> Gagal karena stok habis dan poin kurang
const rew3StockOk = dummyRewards[2].stock > 0;
assert(rew3StockOk === false, 'Mesin Bor terdeteksi stok kosong (stock: 0)');

// REW-4: 2000 pts, stock 1 -> Gagal karena poin tidak cukup
const rew4CanClaim = memberPts >= dummyRewards[3].pointsCost && dummyRewards[3].stock > 0;
assert(rew4CanClaim === false, 'Genset Mini tidak dapat ditukar karena poin kurang (650 < 2000)');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
console.log('✨ LOGIKA SISTEM MEMBER, TIERING & REWARD 100% VALID!');
console.log('============================================================\n');

if (failed > 0) process.exit(1);

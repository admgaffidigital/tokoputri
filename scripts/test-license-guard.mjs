#!/usr/bin/env node
/**
 * ============================================================
 * UNIT TEST & VALIDASI SISTEM LISENSI SAAS TOKO PUTRI
 * Memverifikasi keandalan engine lisensi, guard langganan,
 * dan sinkronisasi antara generator CLI dan runtime browser.
 * ============================================================
 */

import { computeLicenseChecksum, getSubscriptionInfo } from '../src/core/subscription.js';

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
console.log('🧪 MENJALANKAN TEST SUITE ENGINE LISENSI & GUARD LANGGANAN');
console.log('============================================================\n');

// 1. Uji Algoritma Checksum
console.log('📦 1. Uji Checksum Generator & Verifier:');
const chkPutri30 = computeLicenseChecksum('PUTRI', 30);
const chkMaster365 = computeLicenseChecksum('MASTER', 365);
const chkBerkah365 = computeLicenseChecksum('BERKAH', 365);

assert(chkPutri30 === '25F750', `Checksum PUTRI 30 hari harus 25F750 (didapat: ${chkPutri30})`);
assert(chkBerkah365 === '349C6B', `Checksum BERKAH 365 hari harus 349C6B (didapat: ${chkBerkah365})`);
assert(typeof chkMaster365 === 'string' && chkMaster365.length === 6, 'Checksum MASTER 365 hari harus 6 karakter hex');

// 2. Uji Status Langganan: Perpetual (Tanpa Batas)
console.log('\n📦 2. Uji Evaluasi Langganan — Mode Perpetual:');
const infoPerpetual = getSubscriptionInfo({ expiresAt: null, storeCode: 'PUTRI' });
assert(infoPerpetual.status === 'active', 'Status harus active');
assert(infoPerpetual.isPerpetual === true, 'isPerpetual harus true');
assert(infoPerpetual.isLocked === false, 'isLocked harus false');
assert(infoPerpetual.isExpiringSoon === false, 'isExpiringSoon harus false');

// 3. Uji Status Langganan: Aktif Normal (30 Hari ke depan)
console.log('\n📦 3. Uji Evaluasi Langganan — Aktif Normal (30 Hari):');
const future30 = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)).toISOString();
const infoActive30 = getSubscriptionInfo({ expiresAt: future30, storeCode: 'PUTRI' });
assert(infoActive30.status === 'active', 'Status harus active');
assert(infoActive30.isLocked === false, 'isLocked harus false');
assert(infoActive30.isExpiringSoon === false, 'isExpiringSoon harus false (karena > 7 hari)');
assert(infoActive30.daysLeft >= 29 && infoActive30.daysLeft <= 31, `daysLeft harus ~30 (didapat: ${infoActive30.daysLeft})`);

// 4. Uji Status Langganan: Menjelang Jatuh Tempo (H-5)
console.log('\n📦 4. Uji Evaluasi Langganan — Menjelang Jatuh Tempo (H-5):');
const future5 = new Date(Date.now() + (5 * 24 * 60 * 60 * 1000)).toISOString();
const infoExpiring = getSubscriptionInfo({ expiresAt: future5, storeCode: 'PUTRI' });
assert(infoExpiring.status === 'expiring_soon', 'Status harus expiring_soon');
assert(infoExpiring.isExpiringSoon === true, 'isExpiringSoon harus true');
assert(infoExpiring.isLocked === false, 'isLocked harus false (toko tetap beroperasi)');
assert(infoExpiring.isGrace === false, 'isGrace harus false');

// 5. Uji Status Langganan: Masa Tenggang (Grace Period — Telat 3 Hari)
console.log('\n📦 5. Uji Evaluasi Langganan — Masa Tenggang (Telat 3 Hari):');
const past3 = new Date(Date.now() - (3 * 24 * 60 * 60 * 1000)).toISOString();
const infoGrace = getSubscriptionInfo({ expiresAt: past3, allowGraceDays: 7, storeCode: 'PUTRI' });
assert(infoGrace.status === 'grace_period', 'Status harus grace_period');
assert(infoGrace.isGrace === true, 'isGrace harus true');
assert(infoGrace.isLocked === false, 'isLocked harus false (belum dikunci selama toleransi 7 hari)');
assert(infoGrace.graceDaysLeft >= 3 && infoGrace.graceDaysLeft <= 5, `graceDaysLeft harus ~4 hari (didapat: ${infoGrace.graceDaysLeft})`);

// 6. Uji Status Langganan: Kedaluwarsa & Terkunci (Telat 10 Hari)
console.log('\n📦 6. Uji Evaluasi Langganan — Terkunci (Telat 10 Hari):');
const past10 = new Date(Date.now() - (10 * 24 * 60 * 60 * 1000)).toISOString();
const infoLocked = getSubscriptionInfo({ expiresAt: past10, allowGraceDays: 7, storeCode: 'PUTRI' });
assert(infoLocked.status === 'expired', 'Status harus expired');
assert(infoLocked.isLocked === true, 'isLocked harus true (sistem dikunci anggun)');
assert(infoLocked.isGrace === false, 'isGrace harus false');

// 7. Ringkasan
console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
console.log('============================================================\n');

if (failed > 0) {
    process.exit(1);
} else {
    console.log('✨ SEMUA TES ENGINE LISENSI DAN GUARD BERHASIL 100%!\n');
}

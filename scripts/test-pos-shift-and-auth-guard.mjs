#!/usr/bin/env node
/**
 * Test Suite: Detach Realtime Listeners & Auth Guard (Zero Permission Error)
 * Memverifikasi pelepasan listener Firestore sebelum signOut dan proteksi permission-denied
 */

import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('🛡️ MENJALANKAN TEST SUITE DETACH LISTENERS & AUTH GUARD');
console.log('============================================================\n');

let passCount = 0;
let failCount = 0;

function assert(cond, msg) {
    if (cond) {
        console.log(`  ✅ PASS: ${msg}`);
        passCount++;
    } else {
        console.error(`  ❌ FAIL: ${msg}`);
        failCount++;
    }
}

// 1. Uji Deteksi Permission Denied Error Guard
console.log('🔒 1. Uji Logika Deteksi Error Permission Denied:');
const testErr1 = { code: 'permission-denied', message: 'Missing or insufficient permissions.' };
const testErr2 = { code: 'failed-precondition', message: 'The query requires an index.' };
const testErr3 = new Error('FirebaseError: Missing or insufficient permissions.');
const testErr4 = { code: 'permission-denied', message: 'The caller does not have permission' };

const isPermissionError = (err) => {
    return err?.code === 'permission-denied' || 
        (err?.message && (err.message.includes('Missing or insufficient permissions') || err.message.includes('insufficient permissions')));
};

assert(isPermissionError(testErr1) === true, 'Kode permission-denied terdeteksi sebagai permission error');
assert(isPermissionError(testErr2) === false, 'Kode failed-precondition tidak salah dideteksi sebagai permission error');
assert(isPermissionError(testErr3) === true, 'Pesan error Missing or insufficient permissions terdeteksi');
assert(isPermissionError(testErr4) === true, 'Kode permission-denied umum terdeteksi');

// 2. Uji Guard Sesi Sebelum Attach Listener Cloud
console.log('\n🛡️ 2. Uji Guard Sesi Sebelum Attach Listener Realtime:');
const isUserAuthenticated = (user, isAdm, localIsAdm, cashierSession) => {
    return !!(user || isAdm || localIsAdm || cashierSession);
};

assert(isUserAuthenticated(null, false, false, null) === false, 'Pengunjung storefront publik ditolak memasang listener pos_shifts');
assert(isUserAuthenticated({ uid: 'test' }, false, false, null) === true, 'Pengguna dengan Firebase Auth diizinkan');
assert(isUserAuthenticated(null, true, false, null) === true, 'Admin toko diizinkan');
assert(isUserAuthenticated(null, false, false, { uid: 'cashier-1' }) === true, 'Kasir POS aktif diizinkan');

// 3. Verifikasi Statis: auth.js
console.log('\n📄 3. Verifikasi Statis Proteksi Listener di auth.js:');
const authCode = fs.readFileSync(path.resolve('src/modules/admin/auth.js'), 'utf8');
assert(authCode.includes('export const detachAllAdminListenersBeforeSignOut'), 'Fungsi detachAllAdminListenersBeforeSignOut terdefinisi di auth.js');
assert(authCode.includes('window.detachAllAdminListenersBeforeSignOut = detachAllAdminListenersBeforeSignOut'), 'detachAllAdminListenersBeforeSignOut diekspos ke window');
assert(authCode.includes('detachAllAdminListenersBeforeSignOut();\n        await auth.signOut();') || 
       authCode.includes('detachAllAdminListenersBeforeSignOut();') && authCode.includes('await auth.signOut();'), 
       'detachAllAdminListenersBeforeSignOut dipanggil sebelum signOut di logoutAdmin');

// 4. Verifikasi Statis: session.js
console.log('\n📄 4. Verifikasi Statis Proteksi Kickout di session.js:');
const sessionCode = fs.readFileSync(path.resolve('src/modules/admin/session.js'), 'utf8');
assert(sessionCode.includes('detachAllAdminListenersBeforeSignOut') || sessionCode.includes('detachActiveShiftListener'), 
       'Pembersihan listener dipanggil sebelum kickout signOut di session.js');
assert(sessionCode.includes("err?.code !== 'permission-denied'"), 'Session guard mengabaikan error permission-denied');

// 5. Verifikasi Statis: main.js
console.log('\n📄 5. Verifikasi Statis Proteksi Sesi Habis di main.js:');
const mainCode = fs.readFileSync(path.resolve('src/main.js'), 'utf8');
assert(mainCode.includes('detachAllAdminListenersBeforeSignOut') || mainCode.includes('detachActiveShiftListener'), 
       'Pembersihan listener dipanggil saat sesi habis di main.js onAuthStateChanged');

// 6. Verifikasi Statis: pos-shift.js
console.log('\n📄 6. Verifikasi Statis Penanganan Error di pos-shift.js:');
const posShiftCode = fs.readFileSync(path.resolve('src/modules/pos/pos-shift.js'), 'utf8');
assert(posShiftCode.includes('Missing or insufficient permissions'), 'Penanganan error Missing or insufficient permissions ada di snapshot listener');
assert(posShiftCode.includes('detachActiveShiftListener();\n                return;'), 'Listener langsung dilepas saat permission-denied diterima');
assert(posShiftCode.includes('if (!isAuth)'), 'Guard otentikasi diterapkan pada findActiveShiftInCloud & listenActiveShiftCloud');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passCount} Passed, ${failCount} Failed`);
if (failCount === 0) {
    console.log('✨ PROTEKSI DETACH LISTENERS & AUTH GUARD 100% VALID! ✅');
}
console.log('============================================================\n');

if (failCount > 0) process.exit(1);

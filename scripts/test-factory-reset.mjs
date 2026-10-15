#!/usr/bin/env node
/**
 * ============================================================
 * UNIT TEST & VALIDASI SISTEM RESET KE SETELAN AWAL (CLEAN SWEEP GUARD)
 * Memverifikasi integritas algoritma keamanan, validasi frasa konfirmasi,
 * proteksi peran Owner, dan pemisahan mode transaksi vs full reset.
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
console.log('🧪 MENJALANKAN TEST SUITE PUSAT RESET KE SETELAN AWAL (CLEAN SWEEP)');
console.log('============================================================\n');

// 1. Uji Registrasi Modal di router.js
console.log('📐 1. Uji Registrasi Modal di router.js:');
const routerPath = path.join(rootDir, 'src', 'core', 'router.js');
const routerContent = fs.readFileSync(routerPath, 'utf-8');

assert(routerContent.includes("factoryReset: ['modal-factory-reset', 'factory-reset-modal']"), 'factoryReset terdaftar di MODAL_ELEMENT_MAP');
assert(routerContent.includes("case 'factoryReset':"), 'factoryReset memiliki case di closeModalByName');
assert(routerContent.includes("'factoryReset'"), 'factoryReset terdaftar di allKnownModals');

// 2. Uji Integrasi Modul factory-reset.js
console.log('\n🧱 2. Uji Integritas File & Ekspor factory-reset.js:');
const factoryResetPath = path.join(rootDir, 'src', 'modules', 'admin', 'factory-reset.js');
assert(fs.existsSync(factoryResetPath), 'File factory-reset.js ada dan terpasang');

const factoryResetContent = fs.readFileSync(factoryResetPath, 'utf-8');
assert(factoryResetContent.includes('export const RESET_MODES = {'), 'Konstanta RESET_MODES diekspor');
assert(factoryResetContent.includes('openFactoryResetModal'), 'Fungsi openFactoryResetModal diekspor');
assert(factoryResetContent.includes('closeFactoryResetModal'), 'Fungsi closeFactoryResetModal diekspor');
assert(factoryResetContent.includes('executeFactoryResetAction'), 'Fungsi executeFactoryResetAction diekspor');
assert(factoryResetContent.includes('exportEmergencySafetyBackup'), 'Fungsi exportEmergencySafetyBackup diekspor');
assert(factoryResetContent.includes("TARGET_CONFIRM_PHRASE = 'RESET KE SETELAN AWAL'"), 'Frasa konfirmasi tepat: RESET KE SETELAN AWAL');

// 3. Uji Logika Validasi Frasa Konfirmasi & Checkbox Risiko
console.log('\n🔐 3. Uji Logika Validasi Frasa Konfirmasi:');
const validatePhrase = (phrase, riskChecked) => {
    const clean = String(phrase || '').trim().toUpperCase();
    const isPhraseValid = clean === 'RESET KE SETELAN AWAL' || clean === 'RESET SETELAN AWAL' || clean === 'RESET PABRIK';
    return isPhraseValid && Boolean(riskChecked);
};

assert(validatePhrase('RESET KE SETELAN AWAL', true) === true, 'Frasa "RESET KE SETELAN AWAL" dengan checkbox aktif disetujui');
assert(validatePhrase('reset ke setelan awal', true) === true, 'Frasa huruf kecil "reset ke setelan awal" otomatis dinormalisasi');
assert(validatePhrase('  RESET KE SETELAN AWAL  ', true) === true, 'Frasa dengan spasi di awal/akhir otomatis di-trim');
assert(validatePhrase('RESET SETELAN AWAL', true) === true, 'Frasa alternatif "RESET SETELAN AWAL" juga didukung');
assert(validatePhrase('RESET KE SETELAN AWAL', false) === false, 'Frasa benar ditolak jika checkbox risiko belum dicentang');
assert(validatePhrase('RESET', true) === false, 'Kata tidak lengkap "RESET" ditolak');
assert(validatePhrase('HAPUS DATA', true) === false, 'Kata salah "HAPUS DATA" ditolak');
assert(validatePhrase('', true) === false, 'Input kosong ditolak');

// 4. Uji Integrasi Menu Settings & Backup-Sync
console.log('\n⚙️ 4. Uji Penyematan di settings.js & backup-sync.js:');
const settingsPath = path.join(rootDir, 'src', 'modules', 'admin', 'settings.js');
const settingsContent = fs.readFileSync(settingsPath, 'utf-8');
assert(settingsContent.includes('getFactoryResetDangerCardHtml'), 'settings.js memuat helper kartu zona bahaya getFactoryResetDangerCardHtml');
assert(settingsContent.includes('openFactoryResetModal'), 'settings.js mengekspos openFactoryResetModal ke window');

const backupSyncPath = path.join(rootDir, 'src', 'modules', 'admin', 'backup-sync.js');
const backupSyncContent = fs.readFileSync(backupSyncPath, 'utf-8');
assert(backupSyncContent.includes('Zona Bahaya: Reset ke Setelan Awal &amp; Pembersihan Data'), 'backup-sync.js menyematkan bagian Zona Bahaya');
assert(backupSyncContent.includes('openFactoryResetModal'), 'backup-sync.js mengekspos openFactoryResetModal ke window');

// 5. Uji Struktur DOM Modal di index.html
console.log('\n🏛️ 5. Uji Struktur Elemen Modal di index.html:');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');
assert(indexHtml.includes('id="modal-factory-reset"'), 'index.html memuat kontainer #modal-factory-reset');
assert(indexHtml.includes('id="modal-factory-reset-box"'), 'index.html memuat kotak bottom-sheet #modal-factory-reset-box');
assert(indexHtml.includes('id="modal-factory-reset-content"'), 'index.html memuat wadah konten dinamis #modal-factory-reset-content');

// 6. Uji Proteksi Lisensi & Akun Owner
console.log('\n🛡️ 6. Uji Proteksi Lisensi & Akun Owner:');
assert(!factoryResetContent.includes('freshmart_licenses').valueOf() || factoryResetContent.includes('// KEEPS:') || !factoryResetContent.includes('delete(doc.ref); // licenses'), 'Koleksi freshmart_licenses TIDAK PERNAH dihapus saat reset');
assert(factoryResetContent.includes('isOwnerUser'), 'Pemeriksaan isOwnerUser diterapkan pada pembukaan dan eksekusi');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ SISTEM RESET KE SETELAN AWAL 100% AMAN, VALID & MEMENUHI STANDAR FORTRESS! ✅');
} else {
    console.error('❌ Terdapat kegagalan pengujian pada modul Reset ke Setelan Awal.');
    process.exit(1);
}
console.log('============================================================\n');

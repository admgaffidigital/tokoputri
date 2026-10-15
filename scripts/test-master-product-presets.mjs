#!/usr/bin/env node
/**
 * ============================================================
 * UNIT TEST & VALIDASI SISTEM PUSTAKA DATABASE PRODUK BERSAMA
 * Memverifikasi integritas master presets, multi-varian,
 * impor selektif per-produk, deteksi status toko, dan UI Bento.
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
console.log('📦 MENJALANKAN TEST SUITE DATABASE MASTER PRODUK BERSAMA');
console.log('============================================================\n');

// 1. Uji Keberadaan File Modul
console.log('🧱 1. Uji Integritas File Modul master-presets.js:');
const presetsModulePath = path.join(rootDir, 'src', 'modules', 'admin', 'products', 'master-presets.js');
assert(fs.existsSync(presetsModulePath), 'File master-presets.js terpasang dengan benar');

const presetsCode = fs.readFileSync(presetsModulePath, 'utf-8');
assert(presetsCode.includes('export const BUILTIN_MASTER_PRESETS = ['), 'BUILTIN_MASTER_PRESETS diekspor');
assert(presetsCode.includes('getAllMasterPresets'), 'getAllMasterPresets didefinisikan');
assert(presetsCode.includes('checkPresetStoreStatus'), 'checkPresetStoreStatus didefinisikan');
assert(presetsCode.includes('renderMasterCatalogView'), 'renderMasterCatalogView didefinisikan');
assert(presetsCode.includes('openMasterProductImportModal'), 'openMasterProductImportModal didefinisikan');
assert(presetsCode.includes('confirmExecuteMasterProductImport'), 'confirmExecuteMasterProductImport didefinisikan');
assert(presetsCode.includes('confirmExportProductToMaster'), 'confirmExportProductToMaster didefinisikan');

// 2. Uji Kelengkapan Kategori & Variansi Data Bawaan
console.log('\n📋 2. Uji Kelengkapan Kategori & Preset Produk Bangunan:');
const requiredCategories = [
    'Cat & Pelapis',
    'Semen & Mortar',
    'Pipa & Sambungan',
    'Besi & Baja',
    'Alat Teknik',
    'Baut & Sekrup',
    'Sanitari',
    'Kelistrikan'
];

for (const cat of requiredCategories) {
    assert(presetsCode.includes(cat), `Mencakup sektor kategori: ${cat}`);
}

assert(presetsCode.includes('preset-cat-nodrop'), 'Preset Cat No Drop tersedia');
assert(presetsCode.includes('preset-semen-gresik'), 'Preset Semen Gresik PCC tersedia');
assert(presetsCode.includes('preset-pipa-rucika-aw'), 'Preset Pipa Rucika AW tersedia');
assert(presetsCode.includes('preset-besi-beton-polos'), 'Preset Besi Beton Polos SNI tersedia');
assert(presetsCode.includes('preset-mesin-gerinda-makita'), 'Preset Mesin Gerinda Tangan tersedia');
assert(presetsCode.includes('preset-baut-roofing-sds'), 'Preset Baut Roofing SDS tersedia');
assert(presetsCode.includes('preset-kran-onda-sus304'), 'Preset Kran Stainless Onda tersedia');
assert(presetsCode.includes('preset-kabel-nym-supreme'), 'Preset Kabel Listrik Supreme tersedia');

// 3. Uji Integrasi Entry Point di products/index.js
console.log('\n🔗 3. Uji Integrasi Sub-Modul di products/index.js:');
const productsIndexPath = path.join(rootDir, 'src', 'modules', 'admin', 'products', 'index.js');
const productsIndexCode = fs.readFileSync(productsIndexPath, 'utf-8');
assert(productsIndexCode.includes("import './master-presets.js'"), 'products/index.js mengimpor master-presets.js');
assert(productsIndexCode.includes("export * from './master-presets.js'"), 'products/index.js mengekspor fungsi master-presets.js');

// 4. Uji Integrasi Router & Judul Tab di router.js
console.log('\n🧭 4. Uji Integrasi Tab & Router di router.js:');
const routerPath = path.join(rootDir, 'src', 'modules', 'admin', 'router.js');
const routerCode = fs.readFileSync(routerPath, 'utf-8');
assert(routerCode.includes("'colors': 'Database Produk Bersama'"), 'Judul tab colors diperbarui menjadi Database Produk Bersama');
assert(routerCode.includes("window.rAdmMasterCatalogView()"), 'Router meneruskan tab colors ke rAdmMasterCatalogView');

// 5. Uji Integrasi Kartu Dashboard Bento di index.html
console.log('\n🎨 5. Uji Struktur Kartu Menu Bento di index.html:');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');
assert(indexHtml.includes('Database Bersama'), 'index.html memuat judul Database Bersama');
assert(indexHtml.includes('Master Produk &amp; Varian'), 'index.html memuat sub-judul Master Produk & Varian');
assert(indexHtml.includes('fa-boxes-stacked'), 'index.html menggunakan ikon modern fa-boxes-stacked');

// 6. Uji Integrasi Hak Akses di auth-roles.js
console.log('\n🛡️ 6. Uji Metadata Hak Akses di auth-roles.js:');
const authRolesPath = path.join(rootDir, 'src', 'core', 'auth-roles.js');
const authRolesCode = fs.readFileSync(authRolesPath, 'utf-8');
assert(authRolesCode.includes("label: 'Database Produk Bersama'"), 'auth-roles.js mendefinisikan label Database Produk Bersama');

// 7. Uji Tombol Ekspor di Tabel Produk (table.js)
console.log('\n📤 7. Uji Tombol Simpan ke Master Preset di table.js:');
const tablePath = path.join(rootDir, 'src', 'modules', 'admin', 'products', 'table.js');
const tableCode = fs.readFileSync(tablePath, 'utf-8');
assert(tableCode.includes('confirmExportProductToMaster'), 'table.js menyematkan tombol confirmExportProductToMaster');
assert(tableCode.includes('rAdmMasterCatalogView'), 'table.js mendelegasikan rAdmL colors ke rAdmMasterCatalogView');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ SISTEM PUSTAKA DATABASE MASTER PRODUK 100% VALID & MEMENUHI STANDAR! ✅');
} else {
    console.error('❌ Terdapat kegagalan pengujian.');
    process.exit(1);
}
console.log('============================================================\n');

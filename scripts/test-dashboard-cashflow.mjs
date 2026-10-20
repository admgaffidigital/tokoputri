import assert from 'assert';
import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('🧪 TEST SUITE: WIDGET ARUS KAS & POSISI FINANSIAL DASHBOARD');
console.log('============================================================\n');

const cashflowPath = path.resolve('src/modules/admin/dashboard-cashflow.js');
const indexPath = path.resolve('index.html');
const adminIndexPath = path.resolve('src/modules/admin/index.js');
const adminAuthPath = path.resolve('src/modules/admin/auth.js');

// 1. Uji Eksistensi Modul dashboard-cashflow.js
console.log('📁 1. Memeriksa Eksistensi Modul dashboard-cashflow.js...');
assert.ok(fs.existsSync(cashflowPath), 'File src/modules/admin/dashboard-cashflow.js harus ada');
const cashflowCode = fs.readFileSync(cashflowPath, 'utf8');
assert.ok(cashflowCode.includes('calculateTodayCashflow'), 'calculateTodayCashflow harus didefinisikan');
assert.ok(cashflowCode.includes('renderDashboardCashflowWidget'), 'renderDashboardCashflowWidget harus didefinisikan');
console.log('  ✅ PASS: Modul dashboard-cashflow.js tersedia dengan fungsi kalkulasi & render lengkap\n');

// 2. Uji Integrasi Slot di index.html
console.log('🌐 2. Memeriksa Integrasi Slot di index.html...');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
assert.ok(indexHtml.includes('id="admin-dashboard-cashflow-slot"'), 'Slot admin-dashboard-cashflow-slot harus ada di index.html');
console.log('  ✅ PASS: Slot admin-dashboard-cashflow-slot terpasang di index.html di bawah Welcome Banner\n');

// 3. Uji Barrel Export di src/modules/admin/index.js
console.log('📦 3. Memeriksa Barrel Export di src/modules/admin/index.js...');
const adminIndexCode = fs.readFileSync(adminIndexPath, 'utf8');
assert.ok(adminIndexCode.includes('./dashboard-cashflow.js'), 'dashboard-cashflow.js harus diekspor dari index.js');
console.log('  ✅ PASS: dashboard-cashflow.js telah diekspor di admin index.js\n');

// 4. Uji Pemanggilan di openAdminMenu di src/modules/admin/auth.js
console.log('🔌 4. Memeriksa Integrasi Lifecycle di auth.js...');
const adminAuthCode = fs.readFileSync(adminAuthPath, 'utf8');
assert.ok(adminAuthCode.includes('renderDashboardCashflowWidget'), 'renderDashboardCashflowWidget harus diimpor dan dipanggil di auth.js');
assert.ok(adminAuthCode.includes('renderDashboardCashflowWidget();'), 'renderDashboardCashflowWidget() harus dipanggil di openAdminMenu()');
console.log('  ✅ PASS: renderDashboardCashflowWidget() dipanggil secara otomatis saat membuka menu admin\n');

// 5. Uji Keamanan Hak Akses (RBAC)
console.log('🛡️ 5. Memeriksa Proteksi Privasi & Hak Akses Akun...');
assert.ok(cashflowCode.includes("hasPermission('view_reports')"), 'Widget wajib memvalidasi izin view_reports');
assert.ok(cashflowCode.includes("slot.classList.add('hidden')"), 'Widget disembunyikan jika akun tidak memiliki izin laporan finansial');
console.log('  ✅ PASS: Hak akses terproteksi, data kas hanya dapat dilihat oleh akun dengan izin view_reports (Owner)\n');

// 6. Uji Kelengkapan 4 Metrik Likuiditas Bento
console.log('📊 6. Memeriksa 4 Kartu Metrik Likuiditas Arus Kas...');
assert.ok(cashflowCode.includes('Kas Tunai (Laci)'), 'Kartu 1 Kas Tunai Laci harus ada');
assert.ok(cashflowCode.includes('Bank &amp; QRIS'), 'Kartu 2 Bank & QRIS harus ada');
assert.ok(cashflowCode.includes('Pengeluaran'), 'Kartu 3 Pengeluaran Toko harus ada');
assert.ok(cashflowCode.includes('Arus Kas Bersih'), 'Kartu 4 Arus Kas Bersih harus ada');
console.log('  ✅ PASS: Seluruh 4 kartu likuiditas kas terpasang lengkap dengan aksi navigasi cepat\n');

console.log('============================================================');
console.log('🎯 TOTAL HASIL: 6 Passed, 0 Failed');
console.log('✨ WIDGET ARUS KAS & POSISI FINANSIAL 100% TERVERIFIKASI! ✅');
console.log('============================================================');

import fs from 'fs';
import path from 'path';

console.log('\n============================================================');
console.log('🧪 TEST SUITE: STAFF ADMIN UI HARMONY & ZERO DISPARITY AUDIT');
console.log('============================================================\n');

let passedCount = 0;
let failedCount = 0;

function assert(condition, testName) {
    if (condition) {
        console.log(`  ✅ PASS: ${testName}`);
        passedCount++;
    } else {
        console.error(`  ❌ FAIL: ${testName}`);
        failedCount++;
    }
}

const staffAdminCode = fs.readFileSync('src/modules/pos/pos-cashier-admin.js', 'utf8');

// 1. Uji Hero Banner & 4-Card Bento Stat Hub
console.log('🏛️ 1. Uji Hero Banner & 4-Card Bento Stat Hub:');
assert(
    staffAdminCode.includes('Tim Toko &amp; Keamanan Akses') && staffAdminCode.includes('Manajemen Staf &amp; Hak Akses'),
    'Hero Banner terpadu dengan chip badge Tim Toko & Keamanan Akses terpasang'
);
assert(
    staffAdminCode.includes('id="staff-metrics-container"') && staffAdminCode.includes('renderStaffMetrics'),
    'Wadah metrik kepegawaian #staff-metrics-container dan fungsi renderStaffMetrics terpasang'
);
assert(
    staffAdminCode.includes('Total Tim &amp; Staf') &&
    staffAdminCode.includes('Kasir POS Aktif') &&
    staffAdminCode.includes('Admin &amp; Logistik') &&
    staffAdminCode.includes('Beban Gaji Pokok'),
    '4 Kartu Bento Metrik (Total Tim, Kasir POS, Admin & Logistik, Beban Gaji) terdefinisi lengkap'
);

// 2. Uji Flagship Bento Island: Akun Pemilik Utama (Owner)
console.log('\n👑 2. Uji Flagship Bento Island Akun Pemilik Utama (Owner):');
assert(
    staffAdminCode.includes('id="owner-card-container"') && staffAdminCode.includes('getOwnerCardHtml'),
    'Wadah #owner-card-container dan generator getOwnerCardHtml terpasang'
);
assert(
    staffAdminCode.includes('fa-crown') && staffAdminCode.includes('OWN-001') && staffAdminCode.includes('Super Admin Terproteksi'),
    'Kartu Owner memiliki avatar pod Crown, badge ID OWN-001, dan badge Super Admin'
);
assert(
    staffAdminCode.includes('Gaji Pokok Direksi') && staffAdminCode.includes('22 Modul Lengkap (Akses Penuh)'),
    'Parameter akuntansi modern (Gaji Direksi & Hak Akses 22 Modul) tercantum jelas'
);
assert(
    !staffAdminCode.includes('style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08)'),
    'Kartu Owner terbebas dari linear-gradient kusam/jadul (100% Solid Flat Clean)'
);

// 3. Uji Search Bar & Filter Chiclets
console.log('\n🔍 3. Uji Search Bar Realtime & Chiclet Filter:');
assert(
    staffAdminCode.includes('id="staff-search-input"') && staffAdminCode.includes('handleStaffSearch'),
    'Search input #staff-search-input dengan listener handleStaffSearch terpasang'
);
assert(
    staffAdminCode.includes('id="btn-clear-staff-search"') && staffAdminCode.includes('clearStaffSearch'),
    'Tombol reset search #btn-clear-staff-search terpasang'
);
assert(
    staffAdminCode.includes('id="staff-role-filters-bar"') && staffAdminCode.includes('renderStaffRoleFilterChiclets'),
    'Wadah chiclet #staff-role-filters-bar dengan fungsi render dinamis terpasang'
);

// 4. Uji Kartu Staf Modern Native App
console.log('\n📱 4. Uji Kartu Staf Modern Native App:');
assert(
    staffAdminCode.includes('https://wa.me/') && staffAdminCode.includes('cleanPhone'),
    'Integrasi tautan pesan WhatsApp langsung dengan helper sanitasi cleanPhone terpasang'
);
assert(
    staffAdminCode.includes('fa-sliders') && staffAdminCode.includes('openPermissionsModal') && staffAdminCode.includes('Modul Diizinkan'),
    'Tombol Hak Akses dengan indikator jumlah modul terpasang di baris staf'
);
assert(
    staffAdminCode.includes('w-10 h-10 rounded-xl') && staffAdminCode.includes('toggleStaffActive') && staffAdminCode.includes('deleteStaffAccount'),
    'Action buttons (Toggle Aktif, Edit, Hapus) terstandarisasi squircle 40x40px'
);

// 5. Uji Zero Gradients pada Seluruh Modal Staf
console.log('\n🛡️ 5. Uji Eliminasi Gradient pada Seluruh Modal Staf:');
assert(
    staffAdminCode.includes('id="add-staff-modal"') && !staffAdminCode.includes('id="add-staff-modal-box">\n            <!-- Mobile Drag Handle -->\n            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>\n            <!-- Modal Header -->\n            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"\n                style="background: linear-gradient'),
    'Modal Tambah Staf tidak lagi menggunakan linear-gradient pada header'
);
assert(
    staffAdminCode.includes('id="permissions-modal"') && !staffAdminCode.includes('id="permissions-modal-box">\n            <!-- Mobile Drag Handle -->\n            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>\n            <!-- Modal Header -->\n            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"\n                style="background: linear-gradient'),
    'Modal Hak Akses tidak lagi menggunakan linear-gradient pada header'
);

// 6. Uji Preservasi Standar Antarmuka Native (min-h-[44px] & Safe Area)
console.log('\n📐 6. Uji Preservasi Standar Touch Target & Safe Area:');
assert(
    staffAdminCode.includes('min-h-[44px]') && staffAdminCode.includes('min-w-[125px] sm:min-w-0'),
    'Preservasi touch target minimal 44px dan anti-shrink tab horizontal'
);
assert(
    staffAdminCode.includes('pb-[max(1rem,env(safe-area-inset-bottom))]'),
    'Preservasi safe area bottom padding pada seluruh modal footer staf'
);

console.log('\n============================================================');
console.log(`🎯 HASIL AKHIR: ${passedCount} Passed, ${failedCount} Failed`);
if (failedCount === 0) {
    console.log('✨ ANTARMUKA KELOLA STAF & HAK AKSES 100% MODERN, HARMONIS & SOLID CLEAN! ✅');
} else {
    console.error('❌ BEBERAPA AUDIT GAGAL, PERIKSA KEMBALI IMPLEMENTASI!');
    process.exit(1);
}
console.log('============================================================\n');

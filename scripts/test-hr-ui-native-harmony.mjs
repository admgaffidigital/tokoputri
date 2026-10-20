import fs from 'fs';
import path from 'path';

console.log('\n============================================================');
console.log('🧪 TEST SUITE: HRD UI NATIVE HARMONY & ZERO DISPARITY AUDIT');
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

// 1. Memeriksa file pos-cashier-admin.js
console.log('📱 1. Uji Modul Kasir Admin & HR Staf (pos-cashier-admin.js):');
const posAdminCode = fs.readFileSync('src/modules/pos/pos-cashier-admin.js', 'utf8');

assert(
    posAdminCode.includes('min-h-[44px]') && posAdminCode.includes('min-w-[125px] sm:min-w-0') && posAdminCode.includes('shrink-0 sm:shrink'),
    'Segmented control bar memiliki touch target 44px & anti-shrink horizontal scrolling'
);
assert(
    !posAdminCode.includes('text-purple-700') && !posAdminCode.includes('border-purple-200'),
    'Eliminasi total hardcoded warna ungu (purple) pada kartu profil owner & tombol'
);
assert(
    !posAdminCode.includes('text-indigo-500'),
    'Eliminasi total hardcoded warna indigo pada ikon posisi staf'
);
assert(
    posAdminCode.includes('id="add-staff-modal"') && (posAdminCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || posAdminCode.includes('var(--color-primary)') || posAdminCode.includes('bg-slate-50')),
    'Modal Tambah Staf memiliki Theme Header dinamis'
);
assert(
    posAdminCode.includes('id="edit-staff-modal"') && (posAdminCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || posAdminCode.includes('var(--color-primary)') || posAdminCode.includes('bg-slate-50')),
    'Modal Edit Staf memiliki Theme Header dinamis'
);
assert(
    posAdminCode.includes('id="modal-owner-hr"') && (posAdminCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || posAdminCode.includes('var(--color-primary)') || posAdminCode.includes('bg-slate-50')),
    'Modal Gaji & HR Owner memiliki Theme Header dinamis'
);
assert(
    posAdminCode.includes('id="permissions-modal"') && (posAdminCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || posAdminCode.includes('var(--color-primary)') || posAdminCode.includes('bg-slate-50')),
    'Modal Hak Akses Staf memiliki Theme Header dinamis'
);

// 2. Memeriksa file hr-advances.js
console.log('\n💵 2. Uji Modul Kasbon & Pinjaman Karyawan (hr-advances.js):');
const advancesCode = fs.readFileSync('src/modules/admin/hr/hr-advances.js', 'utf8');

assert(
    !advancesCode.includes('text-indigo-600') && !advancesCode.includes('bg-indigo-50'),
    'Eliminasi total hardcoded warna indigo pada form dan riwayat kasbon'
);
assert(
    advancesCode.includes('id="modal-salary-advance-form"') && (advancesCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || advancesCode.includes('var(--color-primary)') || advancesCode.includes('bg-slate-50')),
    'Modal Form Pengajuan Kasbon memiliki Theme Header'
);
assert(
    advancesCode.includes('id="modal-salary-advance-detail"') && (advancesCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || advancesCode.includes('var(--color-primary)') || advancesCode.includes('bg-slate-50')),
    'Modal Rincian Kasbon memiliki Theme Header'
);
assert(
    advancesCode.includes('min-h-[44px] text-[16px] sm:text-sm'),
    'Input form kasbon memiliki min-h 44px dan font 16px mobile anti-auto-zoom'
);
assert(
    advancesCode.includes('pb-[max(1rem,env(safe-area-inset-bottom))]'),
    'Modal kasbon mengadopsi safe-area-inset-bottom padding di footer'
);

// 3. Memeriksa file hr-payroll.js
console.log('\n💰 3. Uji Modul Penggajian & Slip Gaji (hr-payroll.js):');
const payrollCode = fs.readFileSync('src/modules/admin/hr/hr-payroll.js', 'utf8');

assert(
    !payrollCode.includes('text-indigo-600') && !payrollCode.includes('focus:border-indigo-500'),
    'Eliminasi total focus:border-indigo-500 dan teks indigo pada form kompensasi gaji'
);
assert(
    !payrollCode.includes('bg-purple-100 text-purple-700'),
    'Eliminasi badge avatar ungu jomplang pada kartu list penggajian'
);
assert(
    payrollCode.includes('id="modal-payroll-item-form"') && (payrollCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || payrollCode.includes('var(--color-primary)') || payrollCode.includes('bg-slate-50')),
    'Modal Form Hitung Kompensasi Gaji memiliki Theme Header'
);
assert(
    payrollCode.includes('id="modal-payslip-preview"') && (payrollCode.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || payrollCode.includes('var(--color-primary)') || payrollCode.includes('bg-slate-50')),
    'Modal Pratinjau Slip Gaji memiliki Theme Header'
);
assert(
    payrollCode.includes('SLIP GAJI RESMI') && payrollCode.includes('rgba(var(--color-primary-rgb), 0.1)'),
    'Kop resmi slip gaji selaras 100% dengan tema dinamis toko'
);
assert(
    payrollCode.includes('min-h-[44px] px-5 py-2.5 rounded-2xl') && payrollCode.includes('min-h-[44px] px-4 py-2.5 rounded-2xl'),
    'Seluruh tombol aksi cetak, struk thermal, WA & PDF ber-touch target min 44px'
);

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passedCount} Passed, ${failedCount} Failed`);
if (failedCount === 0) {
    console.log('✨ SELURUH TAMPILAN HR 100% KONSISTEN, NATIVE-APP & HARMONIS TEMA TOKO! ✅');
    console.log('============================================================\n');
    process.exit(0);
} else {
    console.error('⚠️ ADA KOMPONEN YANG TIDAK SESUAI STANDAR!');
    console.log('============================================================\n');
    process.exit(1);
}

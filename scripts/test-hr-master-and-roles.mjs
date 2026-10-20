/**
 * ============================================================
 * UNIT TEST SUITE: HR MASTER, MULTI-ROLE & STRUKTUR KOMPENSASI
 * Toko Putri v1.19.0
 * Menguji:
 * 1. Skema Multi-Role (Owner, Admin, Kasir, Staff) & Preset Hak Akses
 * 2. Generator ID Karyawan Unik (EMP-xxx / OWN-xxx)
 * 3. Normalisasi Profil Karyawan & Jabatan Terstandarisasi
 * 4. Profil Kompensasi & Gaji Direksi/Owner Terpisah dari Laba Usaha
 * 5. Sinkronisasi Profil HR & Akun Staf Toko
 * ============================================================
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';

import { 
    ROLES, 
    STANDARD_POSITIONS, 
    ROLE_PRESETS, 
    getRoleBadgeHtml, 
    isOwnerUser 
} from '../src/core/auth-roles.js';

import { 
    EMPLOYMENT_STATUSES, 
    SALARY_PAYMENT_METHODS, 
    generateEmployeeId, 
    getOwnerEmployeeProfile, 
    normalizeEmployeeProfile, 
    mergeStaffWithHrProfiles 
} from '../src/modules/admin/hr/hr-schema.js';

console.log('🧪 Memulai Test Suite: HR Master, Multi-Role & Kompensasi Toko Putri...\n');

let totalTests = 0;
let passedTests = 0;

const test = (title, fn) => {
    totalTests++;
    try {
        fn();
        passedTests++;
        console.log(`  ✅ [PASS] ${title}`);
    } catch (err) {
        console.error(`  ❌ [FAIL] ${title}: ${err.message}`);
        throw err;
    }
};

// ─── Test Group 1: Multi-Role & Preset Hak Akses ───────────────
console.log('--- Test Group 1: Multi-Role & Preset Hak Akses ---');

test('ROLES mendefinisikan OWNER, ADMIN, CASHIER, dan STAFF', () => {
    assert.strictEqual(ROLES.OWNER, 'owner');
    assert.strictEqual(ROLES.ADMIN, 'admin');
    assert.strictEqual(ROLES.CASHIER, 'cashier');
    assert.strictEqual(ROLES.STAFF, 'staff');
});

test('ROLE_PRESETS menyediakan preset modul untuk Staf Gudang/Operasional (ROLES.STAFF)', () => {
    const staffPreset = ROLE_PRESETS[ROLES.STAFF];
    assert.ok(staffPreset, 'Preset untuk ROLES.STAFF harus didefinisikan');
    assert.strictEqual(staffPreset.stock_opname, true, 'Staf harus memiliki akses stock opname');
    assert.strictEqual(staffPreset.cashiers, false, 'Staf TIDAK boleh memiliki akses manajemen staf');
    assert.strictEqual(staffPreset.reports, false, 'Staf TIDAK boleh memiliki akses laporan laba rugi');
});

test('STANDARD_POSITIONS mencakup setidaknya 9 jabatan operasional toko', () => {
    assert.ok(Array.isArray(STANDARD_POSITIONS));
    assert.ok(STANDARD_POSITIONS.length >= 9);
    const labels = STANDARD_POSITIONS.map(p => p.label || p);
    assert.ok(labels.includes('Kasir POS'));
    assert.ok(labels.includes('Admin Operasional & Inventori'));
    assert.ok(labels.includes('Staf Gudang & Penataan Rak'));
    assert.ok(labels.includes('Owner / Direktur Utama'));
});

test('getRoleBadgeHtml menghasilkan badge HTML valid dengan ikon yang sesuai', () => {
    const badgeStaff = getRoleBadgeHtml(ROLES.STAFF);
    assert.ok(badgeStaff.includes('Staf / Gudang'), 'Badge staf harus bertuliskan Staf / Gudang');
    assert.ok(badgeStaff.includes('fa-user-gear'), 'Badge staf harus berikon user-gear');

    const badgeOwner = getRoleBadgeHtml(ROLES.OWNER);
    assert.ok(badgeOwner.includes('Owner'), 'Badge owner harus bertuliskan Owner');
    assert.ok(badgeOwner.includes('fa-crown'), 'Badge owner harus berikon crown');
});

// ─── Test Group 2: Generator ID Karyawan Unik ─────────────────
console.log('\n--- Test Group 2: Generator ID Karyawan Unik ---');

test('generateEmployeeId menghasilkan EMP-001 pada daftar kosong', () => {
    const id = generateEmployeeId([]);
    assert.strictEqual(id, 'EMP-001');
});

test('generateEmployeeId melakukan auto-increment secara deterministik', () => {
    const existing = [
        { employeeId: 'EMP-001' },
        { employeeId: 'EMP-002' },
        { employeeId: 'EMP-003' }
    ];
    const nextId = generateEmployeeId(existing);
    assert.strictEqual(nextId, 'EMP-004');
});

test('generateEmployeeId mendukung prefix custom seperti OWN', () => {
    const existingOwners = [{ employeeId: 'OWN-001' }];
    const nextOwner = generateEmployeeId(existingOwners, 'OWN');
    assert.strictEqual(nextOwner, 'OWN-002');
});

// ─── Test Group 3: Normalisasi Profil Karyawan & Gaji ──────────
console.log('\n--- Test Group 3: Normalisasi Profil & Struktur Kompensasi ---');

test('normalizeEmployeeProfile menetapkan nilai default yang aman dan terstruktur', () => {
    const raw = { name: 'Siti Aminah', role: ROLES.CASHIER };
    const p = normalizeEmployeeProfile(raw, 0);

    assert.strictEqual(p.name, 'Siti Aminah');
    assert.strictEqual(p.role, ROLES.CASHIER);
    assert.strictEqual(p.position, 'Kasir POS');
    assert.strictEqual(p.employeeId, 'EMP-001');
    assert.strictEqual(p.baseSalary, 0);
    assert.strictEqual(p.dailyAllowance, 0);
    assert.strictEqual(p.employmentStatus, 'permanent');
    assert.strictEqual(p.isActive, true);
});

test('normalizeEmployeeProfile memastikan gaji dan tunjangan non-negatif', () => {
    const raw = { name: 'Budi Santoso', baseSalary: -500000, dailyAllowance: '25000' };
    const p = normalizeEmployeeProfile(raw, 1);

    assert.strictEqual(p.baseSalary, 0, 'Gaji minus harus dinormalkan ke 0');
    assert.strictEqual(p.dailyAllowance, 25000, 'Tunjangan string harus di-parse ke float');
});

test('getOwnerEmployeeProfile menginisialisasi profil direksi dengan gaji resmi', () => {
    const dummyAppData = { store: { name: 'Toko Putri Utama', wa: '08123456789' } };
    const owner = getOwnerEmployeeProfile(dummyAppData);

    assert.strictEqual(owner.employeeId, 'OWN-001');
    assert.strictEqual(owner.role, ROLES.OWNER);
    assert.strictEqual(owner.position, 'Owner / Direktur Utama');
    assert.strictEqual(owner.baseSalary, 10000000, 'Default gaji direksi harus Rp 10.000.000');
    assert.strictEqual(owner.phone, '08123456789');
    assert.strictEqual(owner.isActive, true);
});

test('mergeStaffWithHrProfiles menggabungkan akun Firebase dengan data profil HR', () => {
    const staffList = [
        { uid: 'u1', name: 'Rina Kasir', email: 'rina@tokoputri.com', role: ROLES.CASHIER }
    ];
    const appData = {
        employees: [
            { uid: 'u1', employeeId: 'EMP-007', position: 'Senior Cashier', baseSalary: 3200000 }
        ]
    };

    const merged = mergeStaffWithHrProfiles(staffList, appData);
    assert.strictEqual(merged.length, 1);
    assert.strictEqual(merged[0].employeeId, 'EMP-007');
    assert.strictEqual(merged[0].position, 'Senior Cashier');
    assert.strictEqual(merged[0].baseSalary, 3200000);
});

// ─── Test Group 4: Pendaftaran Modal & Router Verification ──────
console.log('\n--- Test Group 4: Pendaftaran Modal & Integrasi Router ---');

test('Modal ownerHr terdaftar sinkron di router.js', () => {
    const routerCode = fs.readFileSync('src/core/router.js', 'utf8');
    assert.ok(routerCode.includes("ownerHr: ['modal-owner-hr'"), 'ownerHr harus ada di MODAL_ELEMENT_MAP');
    assert.ok(routerCode.includes("case 'ownerHr':"), 'ownerHr harus ada di closeModalByName');
    assert.ok(routerCode.includes("'ownerHr'"), 'ownerHr harus ada di allKnownModals');
});

test('Modal modal-owner-hr terdaftar di native-mobile.js', () => {
    const mobileCode = fs.readFileSync('src/core/native-mobile.js', 'utf8');
    assert.ok(mobileCode.includes("case 'modal-owner-hr':"), 'modal-owner-hr harus ada di closeModalById native-mobile.js');
});

test('pos-cashier-admin.js mengekspos openOwnerHrModal, closeOwnerHrModal, dan saveOwnerHrProfile', () => {
    const staffCode = fs.readFileSync('src/modules/pos/pos-cashier-admin.js', 'utf8');
    assert.ok(staffCode.includes('export const openOwnerHrModal'), 'openOwnerHrModal harus diekspor');
    assert.ok(staffCode.includes('export const closeOwnerHrModal'), 'closeOwnerHrModal harus diekspor');
    assert.ok(staffCode.includes('export const saveOwnerHrProfile'), 'saveOwnerHrProfile harus diekspor');
    assert.ok(staffCode.includes('window.openOwnerHrModal'), 'openOwnerHrModal harus diekspos ke window');
    assert.ok(staffCode.includes('window.closeOwnerHrModal'), 'closeOwnerHrModal harus diekspos ke window');
    assert.ok(staffCode.includes('window.saveOwnerHrProfile'), 'saveOwnerHrProfile harus diekspos ke window');
});

console.log(`\n🎉 SUKSES: Seluruh ${passedTests}/${totalTests} unit test HR Master, Multi-Role & Kompensasi 100% Passed! ✅\n`);

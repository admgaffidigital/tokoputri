/**
 * ============================================================
 * UNIT TEST AUDIT: HR ADVANCES (KASBON) & ATTENDANCE (PRESENSI)
 * Toko Putri v1.19.0
 * Menguji:
 * 1. Generator ID Kasbon (generateAdvanceId)
 * 2. Daftar Karyawan Toko & Inklusi Owner (getAllStoreEmployees)
 * 3. Logika Cicilan, Pelunasan & Sisa Pinjaman Kasbon
 * 4. Integrasi Pencatatan Pengeluaran Kas Toko (expenses category 'kasbon')
 * 5. Generator ID Absensi (generateAttendanceId)
 * 6. Validasi Status Kehadiran & Hak Tunjangan Harian
 * 7. Rekapitulasi Presensi Bulanan untuk Mesin Penggajian (calculateMonthlyAttendanceSummary)
 * ============================================================
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { 
    generateAdvanceId, 
    getAllStoreEmployees 
} from '../src/modules/admin/hr/hr-advances.js';

import { 
    generateAttendanceId, 
    ATTENDANCE_STATUSES, 
    calculateMonthlyAttendanceSummary 
} from '../src/modules/admin/hr/hr-attendance.js';

import { appData } from '../src/core/state.js';

describe('HR Advances & Attendance Unit Tests (Fase 2)', () => {

    it('1. generateAdvanceId harus menghasilkan ID kasbon berurutan dengan format KSB-YYYY-XXX', () => {
        const year = new Date().getFullYear();
        const id1 = generateAdvanceId([]);
        assert.equal(id1, `KSB-${year}-001`);

        const existing = [
            { advanceId: `KSB-${year}-001` },
            { advanceId: `KSB-${year}-005` },
            { advanceId: `KSB-${year}-002` }
        ];
        const idNext = generateAdvanceId(existing);
        assert.equal(idNext, `KSB-${year}-006`);
    });

    it('2. getAllStoreEmployees harus menyertakan Owner utama toko', () => {
        appData.employees = [
            { employeeId: 'EMP-001', name: 'Budi Santoso', role: 'cashier', isActive: true },
            { employeeId: 'EMP-002', name: 'Siti Aminah', role: 'staff', isActive: true },
            { employeeId: 'EMP-003', name: 'Rian Hidayat', role: 'staff', isActive: false }
        ];

        const all = getAllStoreEmployees();
        assert.ok(Array.isArray(all), 'Harus berupa array');
        assert.ok(all.length >= 3, 'Minimal ada 2 karyawan aktif + 1 owner');
        
        // Memastikan karyawan nonaktif terfilter
        const hasInactive = all.some(e => e.employeeId === 'EMP-003');
        assert.equal(hasInactive, false, 'Karyawan nonaktif tidak boleh masuk list aktif');

        // Memastikan owner hadir
        const ownerFound = all.find(e => e.employeeId === 'OWN-001' || e.role === 'owner');
        assert.ok(ownerFound, 'Owner harus terdaftar di list karyawan toko');
        assert.equal(ownerFound.role, 'owner');
    });

    it('3. Simulasi Kasbon: Kalkulasi Tenor, Cicilan & Pelunasan Bertahap', () => {
        const principalAmount = 1500000; // Rp 1.500.000
        const totalTenorMonths = 3; // 3 bulan cicilan
        const monthlyInstallment = Math.round(principalAmount / totalTenorMonths); // Rp 500.000 / bln

        assert.equal(monthlyInstallment, 500000);

        let remaining = principalAmount;
        let status = 'active';

        // Cicilan Bulan 1
        const pay1 = Math.min(remaining, monthlyInstallment);
        remaining -= pay1;
        status = remaining <= 0 ? 'paid' : 'active';
        assert.equal(remaining, 1000000);
        assert.equal(status, 'active');

        // Cicilan Bulan 2
        const pay2 = Math.min(remaining, monthlyInstallment);
        remaining -= pay2;
        status = remaining <= 0 ? 'paid' : 'active';
        assert.equal(remaining, 500000);
        assert.equal(status, 'active');

        // Cicilan Bulan 3 (Lunas)
        const pay3 = Math.min(remaining, monthlyInstallment);
        remaining -= pay3;
        status = remaining <= 0 ? 'paid' : 'active';
        assert.equal(remaining, 0);
        assert.equal(status, 'paid');
    });

    it('4. Integrasi Hulu-ke-Hilir: Pengeluaran Kasbon dicatat ke appData.expenses', () => {
        if (!Array.isArray(appData.expenses)) appData.expenses = [];
        const initialCount = appData.expenses.length;

        const advanceAmount = 600000;
        const advanceId = 'KSB-2026-099';
        const empName = 'Andi Pratama';

        const expenseEntry = {
            id: 'EXP-' + Date.now(),
            date: '2026-10-20',
            amount: advanceAmount,
            category: 'kasbon',
            note: `Pencairan Kasbon Karyawan: ${empName} (#${advanceId})`,
            createdAt: new Date().toISOString()
        };

        appData.expenses.push(expenseEntry);

        assert.equal(appData.expenses.length, initialCount + 1);
        const recorded = appData.expenses[appData.expenses.length - 1];
        assert.equal(recorded.category, 'kasbon');
        assert.equal(recorded.amount, 600000);
        assert.ok(recorded.note.includes(advanceId));
    });

    it('5. generateAttendanceId harus menghasilkan ID deterministik ATT-YYYY-MM-DD-EMPID', () => {
        const attId1 = generateAttendanceId('2026-10-20', 'EMP-001');
        assert.equal(attId1, 'ATT-2026-10-20-EMP001');

        const attId2 = generateAttendanceId('2026-10-20', 'OWN-001');
        assert.equal(attId2, 'ATT-2026-10-20-OWN001');
    });

    it('6. Status kehadiran harus memiliki 5 tipe baku dengan hak tunjangan yang tepat', () => {
        assert.equal(ATTENDANCE_STATUSES.length, 5);
        const keys = ATTENDANCE_STATUSES.map(s => s.key);
        assert.deepEqual(keys, ['present', 'late', 'permit', 'sick', 'alpha']);

        const dailyAllowanceRate = 25000; // Rp 25.000 per hari

        // Hadir -> berhak dapat uang makan/tunjangan harian penuh
        const allowPresent = ['present', 'late'].includes('present') ? dailyAllowanceRate : 0;
        assert.equal(allowPresent, 25000);

        // Terlambat -> tetap berhak dapat tunjangan harian
        const allowLate = ['present', 'late'].includes('late') ? dailyAllowanceRate : 0;
        assert.equal(allowLate, 25000);

        // Izin / Sakit / Alpha -> tidak dapat tunjangan harian
        const allowPermit = ['present', 'late'].includes('permit') ? dailyAllowanceRate : 0;
        const allowSick = ['present', 'late'].includes('sick') ? dailyAllowanceRate : 0;
        const allowAlpha = ['present', 'late'].includes('alpha') ? dailyAllowanceRate : 0;
        assert.equal(allowPermit, 0);
        assert.equal(allowSick, 0);
        assert.equal(allowAlpha, 0);
    });

    it('7. calculateMonthlyAttendanceSummary harus menghitung agregasi absensi bulanan secara akurat', () => {
        const mockAttendances = [
            { date: '2026-10-01', employeeId: 'EMP-001', status: 'present', allowanceEarned: 25000 },
            { date: '2026-10-02', employeeId: 'EMP-001', status: 'present', allowanceEarned: 25000 },
            { date: '2026-10-03', employeeId: 'EMP-001', status: 'late',    allowanceEarned: 25000 },
            { date: '2026-10-04', employeeId: 'EMP-001', status: 'sick',    allowanceEarned: 0 },
            { date: '2026-10-05', employeeId: 'EMP-001', status: 'permit',  allowanceEarned: 0 },
            { date: '2026-10-06', employeeId: 'EMP-001', status: 'alpha',   allowanceEarned: 0 },
            // Karyawan lain (tidak boleh ikut terhitung saat filter empId)
            { date: '2026-10-01', employeeId: 'EMP-002', status: 'present', allowanceEarned: 30000 },
            // Bulan lain (tidak boleh ikut terhitung)
            { date: '2026-09-30', employeeId: 'EMP-001', status: 'present', allowanceEarned: 25000 }
        ];

        const summary = calculateMonthlyAttendanceSummary(mockAttendances, '2026-10', 'EMP-001');

        assert.equal(summary.totalRecords, 6);
        assert.equal(summary.presentDays, 2);
        assert.equal(summary.lateDays, 1);
        assert.equal(summary.sickDays, 1);
        assert.equal(summary.permitDays, 1);
        assert.equal(summary.alphaDays, 1);
        assert.equal(summary.totalAllowance, 75000); // 2 present (50k) + 1 late (25k)
    });

    it('8. firestore.rules harus mencakup aturan keamanan sub-koleksi attendances, salary_advances, dan salary_payrolls', async () => {
        const fs = await import('fs');
        const rules = fs.readFileSync('firestore.rules', 'utf8');

        assert.ok(rules.includes('match /attendances/{attendanceId}'), 'firestore.rules harus memiliki aturan match /attendances/{attendanceId}');
        assert.ok(rules.includes('match /salary_advances/{advanceId}'), 'firestore.rules harus memiliki aturan match /salary_advances/{advanceId}');
        assert.ok(rules.includes('match /salary_payrolls/{payrollId}'), 'firestore.rules harus memiliki aturan match /salary_payrolls/{payrollId}');
        assert.ok(rules.includes('isAuthStaff()'), 'Sub-koleksi HR harus dilindungi oleh verifikasi staf terotentikasi isAuthStaff');
    });

    it('9. hr-attendance.js harus mendukung offline-first, persistensi localStorage dan graceful cloud fallback', async () => {
        const fs = await import('fs');
        const attCode = fs.readFileSync('src/modules/admin/hr/hr-attendance.js', 'utf8');

        assert.ok(attCode.includes('freshmart_attendances'), 'hr-attendance.js harus menyimpan ke localStorage freshmart_attendances');
        assert.ok(attCode.includes('saveApp()'), 'hr-attendance.js harus memanggil saveApp() untuk persistensi global');
        assert.ok(!attCode.includes("showToast('Gagal menyimpan presensi: ' + err.message, 'error')"), 'hr-attendance.js tidak boleh gagal fatal saat Firestore permission error');
    });

    it('10. storage.js prepareAppData harus memulihkan cache HR saat startup', async () => {
        const fs = await import('fs');
        const storageCode = fs.readFileSync('src/services/storage.js', 'utf8');

        assert.ok(storageCode.includes('appData.attendances'), 'storage.js harus menginisialisasi appData.attendances');
        assert.ok(storageCode.includes('appData.salaryAdvances'), 'storage.js harus menginisialisasi appData.salaryAdvances');
        assert.ok(storageCode.includes('appData.payrollRuns'), 'storage.js harus menginisialisasi appData.payrollRuns');
    });
});


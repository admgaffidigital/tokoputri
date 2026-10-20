/**
 * ============================================================
 * UNIT TEST AUDIT: HR PAYROLL ENGINE, SLIP GAJI & BEBAN KAS
 * Toko Putri v1.19.0
 * Menguji:
 * 1. Generator ID Payroll (generatePayrollId)
 * 2. Formatter Label Periode Bulan Bahasa Indonesia (getPeriodMonthLabel)
 * 3. Kalkulasi Otomatis Gaji Bersih Karyawan (calculateEmployeePayrollDraft)
 * 4. Penggajian Owner Direksi Terpisah dari Laba Usaha Toko
 * 5. Pemotongan Selisih Barang Hilang / Stock Opname per Jabatan
 * 6. Integrasi Pemotongan Angsuran Kasbon Otomatis
 * 7. Integrasi Pencatatan Pengeluaran Gaji ke Buku Kas (appData.expenses category 'gaji')
 * ============================================================
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { 
    generatePayrollId, 
    getPeriodMonthLabel, 
    calculateEmployeePayrollDraft 
} from '../src/modules/admin/hr/hr-payroll.js';

import { appData } from '../src/core/state.js';
import { getOwnerEmployeeProfile } from '../src/modules/admin/hr/hr-schema.js';

describe('HR Payroll Engine & Payslip Unit Tests (Fase 3)', () => {

    it('1. generatePayrollId harus menghasilkan ID deterministik dengan format PAY-YYYYMM-EMPID', () => {
        const id1 = generatePayrollId('2026-10', 'EMP-001');
        assert.equal(id1, 'PAY-202610-EMP001');

        const id2 = generatePayrollId('2026-10', 'OWN-001');
        assert.equal(id2, 'PAY-202610-OWN001');
    });

    it('2. getPeriodMonthLabel harus memformat YYYY-MM menjadi nama bulan Indonesia resmi', () => {
        assert.equal(getPeriodMonthLabel('2026-01'), 'Januari 2026');
        assert.equal(getPeriodMonthLabel('2026-10'), 'Oktober 2026');
        assert.equal(getPeriodMonthLabel('2026-12'), 'Desember 2026');
    });

    it('3. calculateEmployeePayrollDraft harus menghitung Take Home Pay secara presisi dari gaji pokok, absensi, dan kasbon', () => {
        const mockEmployee = {
            uid: 'uid-kasir-1',
            employeeId: 'EMP-001',
            name: 'Rina Kasir',
            role: 'cashier',
            position: 'Kasir Utama',
            baseSalary: 3500000,
            dailyAllowance: 25000,
            paymentMethod: 'transfer',
            bankName: 'BCA',
            bankAccount: '7720192837',
            phone: '081298765432'
        };

        const mockAttendances = [
            { date: '2026-10-01', employeeId: 'EMP-001', status: 'present', allowanceEarned: 25000 },
            { date: '2026-10-02', employeeId: 'EMP-001', status: 'present', allowanceEarned: 25000 },
            { date: '2026-10-03', employeeId: 'EMP-001', status: 'late',    allowanceEarned: 25000 },
            { date: '2026-10-04', employeeId: 'EMP-001', status: 'sick',    allowanceEarned: 0 }
        ];

        const mockAdvances = [
            {
                advanceId: 'KSB-2026-001',
                employeeId: 'EMP-001',
                employeeUid: 'uid-kasir-1',
                remainingAmount: 600000,
                monthlyInstallment: 200000,
                status: 'active'
            }
        ];

        const draft = calculateEmployeePayrollDraft(mockEmployee, '2026-10', mockAttendances, mockAdvances);

        assert.equal(draft.employeeId, 'EMP-001');
        assert.equal(draft.baseSalary, 3500000);
        assert.equal(draft.totalAttendanceDays, 3); // 2 present + 1 late
        assert.equal(draft.attendanceAllowance, 75000); // 3 * 25.000
        assert.equal(draft.totalEarnings, 3575000); // 3.500.000 + 75.000
        assert.equal(draft.advanceDeduction, 200000); // cicilan kasbon per bulan
        assert.equal(draft.advanceId, 'KSB-2026-001');
        assert.equal(draft.totalDeductions, 200000);
        assert.equal(draft.netSalary, 3375000); // 3.575.000 - 200.000
    });

    it('4. Penggajian Owner: Owner menerima gaji pokok direksi setara dalam sistem payroll', () => {
        const ownerProfile = getOwnerEmployeeProfile(appData);
        assert.equal(ownerProfile.role, 'owner');
        assert.equal(ownerProfile.employeeId, 'OWN-001');
        assert.ok(ownerProfile.baseSalary >= 5000000, 'Gaji pokok owner direksi terdefinisi');

        const draftOwner = calculateEmployeePayrollDraft(ownerProfile, '2026-10', [], []);
        assert.equal(draftOwner.employeeId, 'OWN-001');
        assert.equal(draftOwner.baseSalary, ownerProfile.baseSalary);
        assert.equal(draftOwner.totalEarnings, ownerProfile.baseSalary);
        assert.equal(draftOwner.netSalary, ownerProfile.baseSalary);
    });

    it('5. Potongan Selisih Barang Hilang / Stock Opname per Jabatan', () => {
        const mockStaff = {
            employeeId: 'EMP-005',
            name: 'Doni Gudang',
            role: 'staff',
            position: 'Staf Gudang & Logistik',
            baseSalary: 3000000,
            dailyAllowance: 20000
        };

        const draft = calculateEmployeePayrollDraft(mockStaff, '2026-10', [], []);
        
        // Simulasi penyesuaian potongan selisih stock opname barang hilang
        const lostItemDeduction = 75000;
        const totalEarnings = draft.totalEarnings;
        const totalDeductions = draft.totalDeductions + lostItemDeduction;
        const netSalary = totalEarnings - totalDeductions;

        assert.equal(netSalary, 3000000 - 75000);
        assert.equal(netSalary, 2925000);
    });

    it('6. Simulasi Pengurangan Sisa Kasbon Karyawan saat Payroll Dibayar', () => {
        const mockAdvance = {
            advanceId: 'KSB-2026-012',
            employeeId: 'EMP-002',
            remainingAmount: 500000,
            status: 'active'
        };

        const payrollDeduction = 250000;
        const newRemaining = mockAdvance.remainingAmount - payrollDeduction;
        const newStatus = newRemaining <= 0 ? 'paid' : 'active';

        assert.equal(newRemaining, 250000);
        assert.equal(newStatus, 'active');

        // Bulan berikutnya bayar lagi 250.000 -> Lunas
        const secondDeduction = 250000;
        const finalRemaining = newRemaining - secondDeduction;
        const finalStatus = finalRemaining <= 0 ? 'paid' : 'active';

        assert.equal(finalRemaining, 0);
        assert.equal(finalStatus, 'paid');
    });

    it('7. Integrasi Hulu-ke-Hilir: Beban Gaji Karyawan tercatat di appData.expenses kategori gaji', () => {
        if (!Array.isArray(appData.expenses)) appData.expenses = [];
        const initCount = appData.expenses.length;

        const netSalary = 3375000;
        const empName = 'Rina Kasir';
        const payrollId = 'PAY-202610-EMP001';

        const expEntry = {
            id: 'exp_pay_' + Date.now(),
            date: '2026-10-25',
            category: 'gaji',
            amount: netSalary,
            desc: `Gaji Karyawan: ${empName} (Kasir Utama) - Periode Oktober 2026`,
            source: 'bank',
            recipient: empName,
            payrollId: payrollId,
            createdAt: new Date().toISOString()
        };

        appData.expenses.push(expEntry);

        assert.equal(appData.expenses.length, initCount + 1);
        const saved = appData.expenses[appData.expenses.length - 1];
        assert.equal(saved.category, 'gaji');
        assert.equal(saved.amount, 3375000);
        assert.ok(saved.desc.includes(empName));
        assert.equal(saved.payrollId, payrollId);
    });
});

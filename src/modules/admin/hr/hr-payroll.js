/**
 * ============================================================
 * MODUL HRD: PENGGAJIAN (PAYROLL), SLIP GAJI & BEBAN OPERASIONAL
 * Toko Putri v1.19.0
 * Fitur:
 * 1. Kalkulasi Gaji Bersih (Take Home Pay) Otomatis:
 *    - Gaji Pokok (sesuai profil karyawan & owner)
 *    - Tunjangan Kehadiran (rekap absensi harian)
 *    - Bonus / Insentif Kinerja & Lembur
 *    - Pemotongan Kasbon Berjalan (terkoneksi hr-advances)
 *    - Pemotongan Selisih Barang Hilang / Stock Opname per Jabatan
 * 2. Multi-Format Slip Gaji Resmi:
 *    - Cetak Dokumen Presisi A4 PDF
 *    - Cetak Struk Thermal Kasir (58mm / 80mm)
 *    - 1-Klik Kirim Slip Gaji via WhatsApp ke No. HP Karyawan
 * 3. Integrasi Hulu-ke-Hilir:
 *    - Otomatis Mengurangi Sisa Kasbon Karyawan saat Gaji Dibayar
 *    - Otomatis Mencatat Beban Gaji Operasional di appData.expenses (expenses.js)
 *    - Pelaporan Laba Rugi & Perpajakan Ter-Update Riil
 * ============================================================
 */

import { appData } from '../../../core/state.js';
import { db, firebase, auth, ADMIN_UID } from '../../../config/firebase.js';
import { 
    el, esc, fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../../core/utils.js';
import { getAllStoreEmployees, recordAdvanceRepayment } from './hr-advances.js';
import { calculateMonthlyAttendanceSummary } from './hr-attendance.js';
import { verifyOwnerAuthority, getOwnerEmployeeProfile } from './hr-schema.js';

let _activePayrollPeriod = new Date().toISOString().slice(0, 7); // Format: 'YYYY-MM'
let _cachedPayrollRuns = [];
let _activeViewingPayslip = null;

const saveApp = async () => {
    try {
        if (typeof window !== 'undefined' && typeof window.saveApp === 'function') {
            return await window.saveApp();
        }
        const storageMod = await import('../../../services/storage.js');
        if (typeof storageMod?.saveApp === 'function') {
            return await storageMod.saveApp();
        }
    } catch (_) {}
};

/**
 * Generator ID Unik Slip Gaji (Contoh: PAY-202610-EMP001)
 */
export const generatePayrollId = (period, employeeId) => {
    const cleanPeriod = (period || new Date().toISOString().slice(0, 7)).replace(/[^0-9]/g, '');
    const cleanEmpId = (employeeId || 'STAFF').replace(/[^a-zA-Z0-9]/g, '');
    return `PAY-${cleanPeriod}-${cleanEmpId}`;
};

/**
 * Dapatkan Label Nama Bulan Indonesia dari format 'YYYY-MM'
 */
export const getPeriodMonthLabel = (periodStr) => {
    if (!periodStr) return '-';
    const [year, month] = periodStr.split('-');
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const mIdx = parseInt(month, 10) - 1;
    return `${monthNames[mIdx] || month} ${year}`;
};

/**
 * Muat daftar penggajian untuk periode tertentu
 */
export const loadPayrollRuns = async (periodStr = _activePayrollPeriod) => {
    try {
        let runs = [];
        try {
            const snap = await db.collection('freshmart').doc('cms_data')
                .collection('salary_payrolls')
                .where('period', '==', periodStr)
                .get();
            runs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (_) {
            const allLocal = Array.isArray(appData.payrollRuns) ? appData.payrollRuns : [];
            runs = allLocal.filter(r => r.period === periodStr);
        }

        _cachedPayrollRuns = runs;
        return runs;
    } catch (err) {
        console.error('[HR Payroll] Gagal memuat payroll:', err);
        const allLocal = Array.isArray(appData.payrollRuns) ? appData.payrollRuns : [];
        _cachedPayrollRuns = allLocal.filter(r => r.period === periodStr);
        return _cachedPayrollRuns;
    }
};

/**
 * Kalkulasi Draf Kompensasi Karyawan Secara Otomatis
 * Memadukan Gaji Pokok, Rekap Absensi, dan Buku Kasbon Berjalan
 */
export const calculateEmployeePayrollDraft = (employee, periodStr, allAttendances = [], allAdvances = []) => {
    const empId = employee.employeeId || employee.uid;
    const baseSalary = parseFloat(employee.baseSalary) || 0;
    const dailyAllowanceRate = parseFloat(employee.dailyAllowance) || 0;

    // 1. Rekapitulasi Presensi Kehadiran
    const attSummary = calculateMonthlyAttendanceSummary(allAttendances, periodStr, empId);
    const presentDays = attSummary.presentDays || 0;
    const lateDays = attSummary.lateDays || 0;
    const totalAttendanceDays = presentDays + lateDays;
    
    // Tunjangan Kehadiran Otomatis
    let attendanceAllowance = attSummary.totalAllowance;
    if (attendanceAllowance <= 0 && dailyAllowanceRate > 0 && totalAttendanceDays > 0) {
        attendanceAllowance = totalAttendanceDays * dailyAllowanceRate;
    }

    // 2. Deteksi Kasbon Aktif
    const activeAdvance = allAdvances.find(a => 
        (a.employeeId === empId || a.employeeUid === employee.uid) && 
        a.status === 'active' && 
        parseFloat(a.remainingAmount) > 0
    );

    let advanceDeduction = 0;
    let advanceId = '';
    let advanceRemainingBefore = 0;

    if (activeAdvance) {
        advanceId = activeAdvance.advanceId || activeAdvance.id;
        advanceRemainingBefore = parseFloat(activeAdvance.remainingAmount) || 0;
        const inst = parseFloat(activeAdvance.monthlyInstallment) || advanceRemainingBefore;
        advanceDeduction = Math.min(advanceRemainingBefore, inst);
    }

    const bonus = 0;
    const overtimePay = 0;
    const lostItemDeduction = 0;
    const otherDeductions = 0;

    const totalEarnings = baseSalary + attendanceAllowance + bonus + overtimePay;
    const totalDeductions = advanceDeduction + lostItemDeduction + otherDeductions;
    const netSalary = Math.max(0, totalEarnings - totalDeductions);

    return {
        payrollId: generatePayrollId(periodStr, empId),
        period: periodStr,
        periodLabel: getPeriodMonthLabel(periodStr),
        employeeUid: employee.uid || '',
        employeeId: empId,
        employeeName: employee.name || 'Karyawan',
        employeeRole: employee.role || 'staff',
        position: employee.position || 'Staf Toko',
        phone: employee.phone || '',
        status: 'draft',

        // Rincian Penghasilan
        baseSalary,
        dailyAllowanceRate,
        presentDays,
        lateDays,
        permitDays: attSummary.permitDays || 0,
        sickDays: attSummary.sickDays || 0,
        alphaDays: attSummary.alphaDays || 0,
        totalAttendanceDays,
        attendanceAllowance,
        bonus,
        overtimePay,
        totalEarnings,

        // Rincian Potongan
        advanceDeduction,
        advanceId,
        advanceRemainingBefore,
        lostItemDeduction,
        lostItemNotes: '',
        otherDeductions,
        totalDeductions,

        // Take Home Pay
        netSalary,

        // Pembayaran
        paymentMethod: employee.paymentMethod || 'transfer',
        bankName: employee.bankName || 'BCA',
        bankAccount: employee.bankAccount || '-',
        notes: `Gaji periode ${getPeriodMonthLabel(periodStr)}`,
        createdAt: new Date().toISOString()
    };
};

/**
 * ─── Render Tampilan Utama Panel Penggajian & Slip Gaji ──────────
 */
export const renderPayrollView = async (container) => {
    if (!container) return;

    container.innerHTML = `
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl" style="color: var(--color-primary)"></i>
        <p class="text-xs text-slate-400 mt-2 font-medium">Memuat data payroll &amp; rekap kehadiran tim...</p>
    </div>`;

    await loadPayrollRuns(_activePayrollPeriod);

    // Muat absensi & kasbon lokal/cloud
    const allAtts = Array.isArray(appData.attendances) ? appData.attendances : [];
    const allAdvs = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];
    const employees = getAllStoreEmployees();

    // Gabungkan data karyawan dengan status payroll periode berjalan
    const payrollItems = employees.map(emp => {
        const empId = emp.employeeId || emp.uid;
        const existingRun = _cachedPayrollRuns.find(r => r.employeeId === empId || r.employeeUid === emp.uid);
        if (existingRun) {
            return existingRun;
        }
        return calculateEmployeePayrollDraft(emp, _activePayrollPeriod, allAtts, allAdvs);
    });

    // Metrik Ringkasan Penggajian
    const totalPayroll = payrollItems.reduce((acc, p) => acc + (parseFloat(p.netSalary) || 0), 0);
    const paidCount = payrollItems.filter(p => p.status === 'paid').length;
    const draftCount = payrollItems.length - paidCount;
    const totalAdvanceDeducted = payrollItems.reduce((acc, p) => acc + (parseFloat(p.advanceDeduction) || 0), 0);
    const totalLostItemDeducted = payrollItems.reduce((acc, p) => acc + (parseFloat(p.lostItemDeduction) || 0), 0);

    const monthLabel = getPeriodMonthLabel(_activePayrollPeriod);

    container.innerHTML = `
    <div class="space-y-4">
        <!-- Header & Navigasi Periode Bulan Penggajian -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
                <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]" style="background: rgba(var(--color-primary-rgb), 0.08)">
                        <i class="fa-solid fa-money-check-dollar"></i>
                    </span>
                    <span>Penggajian (Payroll) &amp; Slip Gaji</span>
                </h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Kelola gaji pokok, tunjangan absensi, potongan kasbon &amp; selisih stok barang hilang
                </p>
            </div>

            <!-- Periode Selector -->
            <div class="flex items-center gap-2 bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0">
                <button onclick="window.navigatePayrollPeriod(-1)"
                    title="Bulan Sebelumnya"
                    class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <input type="month" id="payroll-period-picker" value="${_activePayrollPeriod}"
                    onchange="window.onPayrollPeriodChanged(this.value)"
                    class="px-2 py-1 bg-transparent text-xs font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer">
                <button onclick="window.navigatePayrollPeriod(1)"
                    title="Bulan Berikutnya"
                    class="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </div>

        <!-- Bento Metrik Ringkasan Penggajian -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Total Gaji (${monthLabel})</span>
                    <i class="fa-solid fa-sack-dollar text-emerald-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono truncate">
                    Rp ${fCur(totalPayroll)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${employees.length} Karyawan (Termasuk Owner)</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Status Pembayaran</span>
                    <i class="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-slate-800 dark:text-white font-mono">
                    <span class="text-emerald-600">${paidCount} Lunas</span> / <span class="text-amber-500">${draftCount} Draf</span>
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">${draftCount === 0 ? 'Semua gaji lunas' : 'Menunggu pencairan'}</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Kasbon</span>
                    <i class="fa-solid fa-hand-holding-dollar text-xs" style="color: var(--color-primary)"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-[var(--color-primary)] font-mono truncate">
                    Rp ${fCur(totalAdvanceDeducted)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Otomatis potong saldo pinjaman</div>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <div class="flex items-center justify-between text-slate-400 mb-1">
                    <span class="text-[11px] font-bold">Potongan Barang Hilang</span>
                    <i class="fa-solid fa-boxes-packing text-rose-500 text-xs"></i>
                </div>
                <div class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono truncate">
                    Rp ${fCur(totalLostItemDeducted)}
                </div>
                <div class="text-[10px] text-slate-400 mt-0.5">Kompensasi selisih stock opname</div>
            </div>
        </div>

        <!-- Daftar Kartu Payroll Karyawan -->
        <div class="space-y-3" id="payroll-items-container">
            ${payrollItems.map((item, idx) => {
                const isPaid = item.status === 'paid';
                const isOwner = item.employeeRole === 'owner' || item.employeeId === 'OWN-001';
                return `
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${isPaid ? 'border-emerald-200 dark:border-emerald-800/60' : 'border-slate-200/90 dark:border-slate-700'} shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                    <!-- Info Karyawan -->
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border ${isOwner ? 'text-[var(--color-primary)] border-[rgba(var(--color-primary-rgb),0.3)]' : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700'}"
                            style="${isOwner ? 'background: rgba(var(--color-primary-rgb), 0.12)' : ''}">
                            ${isOwner ? '<i class="fa-solid fa-crown text-amber-500"></i>' : (item.employeeName?.charAt(0)?.toUpperCase() || 'K')}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm font-black text-slate-900 dark:text-white truncate">${esc(item.employeeName)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                    ${esc(item.employeeId)}
                                </span>
                                <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full ${isPaid ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300'}">
                                    <i class="fa-solid ${isPaid ? 'fa-circle-check text-emerald-500' : 'fa-clock text-amber-500'} text-[9px]"></i>
                                    ${isPaid ? 'Lunas / Dibayar' : 'Draf Penggajian'}
                                </span>
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                                <span class="font-bold text-slate-700 dark:text-slate-200">${esc(item.position)}</span>
                                <span>•</span>
                                <span>Absensi: <strong>${item.totalAttendanceDays || 0} Hari Masuk</strong></span>
                                <span>•</span>
                                <span>Gaji Pokok: <strong>Rp ${fCur(item.baseSalary)}</strong></span>
                                ${item.attendanceAllowance > 0 ? `<span>•</span><span>Tunjangan: <strong class="text-[var(--color-primary)] font-bold">+${fCur(item.attendanceAllowance)}</strong></span>` : ''}
                            </div>
                            <!-- Rincian Potongan -->
                            <div class="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 flex-wrap">
                                ${item.advanceDeduction > 0 ? `<span class="text-[var(--color-primary)] font-bold"><i class="fa-solid fa-hand-holding-dollar mr-0.5"></i> Potong Kasbon: -${fCur(item.advanceDeduction)}</span><span>•</span>` : ''}
                                ${item.lostItemDeduction > 0 ? `<span class="text-rose-500 font-medium"><i class="fa-solid fa-triangle-exclamation mr-0.5"></i> Potong Hilang: -${fCur(item.lostItemDeduction)}</span><span>•</span>` : ''}
                                <span>Metode: <strong class="text-slate-600 dark:text-slate-300">${esc(item.paymentMethod?.toUpperCase())}</strong></span>
                                ${item.bankAccount && item.bankAccount !== '-' ? `<span>(${esc(item.bankName)}: ${esc(item.bankAccount)})</span>` : ''}
                            </div>
                        </div>
                    </div>

                    <!-- Nominal Take Home Pay & Tombol Aksi -->
                    <div class="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-700/60">
                        <div class="text-left md:text-right">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Take Home Pay</span>
                            <span class="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                Rp ${fCur(item.netSalary)}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="window.openPayslipPreviewModal('${esc(item.payrollId || item.id)}', '${esc(item.employeeId)}')"
                                title="Lihat & Cetak Slip Gaji"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i>
                                <span>Slip Gaji</span>
                            </button>
                            <button onclick="window.openPayrollItemModal('${esc(item.employeeId)}', '${_activePayrollPeriod}')"
                                title="${isPaid ? 'Ubah Rincian Kompensasi' : 'Hitung & Bayar Gaji'}"
                                class="px-3.5 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
                                style="background: ${isPaid ? 'var(--color-primary)' : '#10b981'}">
                                <i class="fa-solid ${isPaid ? 'fa-pen-to-square' : 'fa-cash-register'}"></i>
                                <span>${isPaid ? 'Edit' : 'Bayar'}</span>
                            </button>
                        </div>
                    </div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
};

/**
 * Navigasi Periode Bulan Penggajian (+1 / -1 Bulan)
 */
export const navigatePayrollPeriod = (deltaMonths) => {
    const [yearStr, monthStr] = _activePayrollPeriod.split('-');
    let year = parseInt(yearStr, 10);
    let month = parseInt(monthStr, 10) + deltaMonths;

    if (month < 1) {
        month = 12;
        year -= 1;
    } else if (month > 12) {
        month = 1;
        year += 1;
    }

    _activePayrollPeriod = `${year}-${String(month).padStart(2, '0')}`;
    const picker = el('payroll-period-picker');
    if (picker) picker.value = _activePayrollPeriod;

    const panel = el('cashier-panel-payroll');
    if (panel) renderPayrollView(panel);
};

export const onPayrollPeriodChanged = (val) => {
    if (!val) return;
    _activePayrollPeriod = val;
    const panel = el('cashier-panel-payroll');
    if (panel) renderPayrollView(panel);
};

/**
 * ─── Modal Hitung / Edit Kompensasi Gaji Karyawan ────────────────
 */
export const openPayrollItemModal = async (employeeId, periodStr = _activePayrollPeriod) => {
    if (!verifyOwnerAuthority('mengelola penggajian karyawan')) return;

    const employees = getAllStoreEmployees();
    const emp = employees.find(e => (e.employeeId === employeeId || e.uid === employeeId));
    if (!emp) {
        showToast('Karyawan tidak ditemukan', 'warning');
        return;
    }

    // Ambil data absensi dan kasbon
    const allAtts = Array.isArray(appData.attendances) ? appData.attendances : [];
    const allAdvs = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];

    const existingRun = _cachedPayrollRuns.find(r => 
        (r.employeeId === employeeId || r.employeeUid === emp.uid) && r.period === periodStr
    );

    const draft = existingRun || calculateEmployeePayrollDraft(emp, periodStr, allAtts, allAdvs);

    const existingModal = el('modal-payroll-item-form');
    if (existingModal) existingModal.remove();

    const monthLabel = getPeriodMonthLabel(periodStr);

    document.body.insertAdjacentHTML('beforeend', `
    <div id="modal-payroll-item-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayrollItemModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payroll-item-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-calculator text-base"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">
                            Hitung Kompensasi Gaji
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">
                            ${esc(emp.name)} • ${esc(emp.position)} • Periode ${esc(monthLabel)}
                        </p>
                    </div>
                </div>
                <button onclick="window.closePayrollItemModal()" 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body Scrollable -->
            <div class="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-xs">
                <!-- Info Status Presensi Bulan Berjalan -->
                <div class="p-3.5 rounded-2xl border flex items-center justify-between gap-3 flex-wrap"
                    style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.18)">
                    <div>
                        <span class="font-black text-slate-900 dark:text-white block">Presensi Kehadiran (${monthLabel}):</span>
                        <span class="text-slate-600 dark:text-slate-300 text-[11px]">
                            Hadir: <strong>${draft.presentDays}</strong> • Terlambat: <strong>${draft.lateDays}</strong> • Izin: <strong>${draft.permitDays}</strong> • Sakit: <strong>${draft.sickDays}</strong> • Alpha: <strong>${draft.alphaDays}</strong>
                        </span>
                    </div>
                    <span class="font-mono font-bold text-xs px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border"
                        style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                        Total Masuk: ${draft.totalAttendanceDays} Hari
                    </span>
                </div>

                <!-- Bagian 1: Komponen Penghasilan (+) -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <h4 class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <i class="fa-solid fa-plus-circle"></i> Komponen Penghasilan (+)
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Gaji Pokok (Rp)</label>
                            <input type="number" id="pay-base-salary" value="${draft.baseSalary}" min="0" step="50000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Tunjangan Harian / Uang Makan (Rp)
                            </label>
                            <input type="number" id="pay-attendance-allowance" value="${draft.attendanceAllowance}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Hitungan otomatis: ${draft.totalAttendanceDays} hari x ${fCur(draft.dailyAllowanceRate)}</span>
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Bonus Kinerja / Insentif Toko (Rp)</label>
                            <input type="number" id="pay-bonus" value="${draft.bonus || 0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Uang Lembur / Tambahan (Rp)</label>
                            <input type="number" id="pay-overtime" value="${draft.overtimePay || 0}" min="0" step="25000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        </div>
                    </div>
                </div>

                <!-- Bagian 2: Komponen Potongan (-) -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                    <h4 class="font-black text-rose-500 dark:text-rose-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                        <i class="fa-solid fa-minus-circle"></i> Komponen Pemotongan (-)
                    </h4>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Kasbon Berjalan (Rp)
                            </label>
                            <input type="number" id="pay-advance-deduction" value="${draft.advanceDeduction || 0}" min="0" step="10000"
                                oninput="window.recalculatePayrollItem()"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            ${draft.advanceId ? `
                                <span class="text-[10px] text-[var(--color-primary)] mt-0.5 block font-medium">
                                    Terkoneksi #${draft.advanceId} (Sisa saldo kasbon: Rp ${fCur(draft.advanceRemainingBefore)})
                                </span>
                            ` : `<span class="text-[10px] text-slate-400 mt-0.5 block">Tidak ada kasbon aktif</span>`}
                        </div>
                        <div>
                            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                                Potongan Selisih Barang Hilang / Stock Opname (Rp)
                            </label>
                            <input type="number" id="pay-lost-item-deduction" value="${draft.lostItemDeduction || 0}" min="0" step="5000"
                                oninput="window.recalculatePayrollItem()"
                                placeholder="0"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <span class="text-[10px] text-slate-400 mt-0.5 block">Disesuaikan jabatan &amp; tanggung jawab staf</span>
                        </div>
                    </div>

                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Keterangan Pemotongan Barang Hilang / Catatan</label>
                        <input type="text" id="pay-lost-item-notes" value="${esc(draft.lostItemNotes || '')}"
                            placeholder="Contoh: Selisih opname toko 1 sak semen & 2 kran air"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Bagian 3: Ringkasan Kalkulasi Take Home Pay -->
                <div class="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-white dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800 space-y-2">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Penghasilan Bruto:</span>
                        <strong class="font-mono text-emerald-600 dark:text-emerald-400" id="pay-total-earnings-display">
                            Rp ${fCur(draft.totalEarnings)}
                        </strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 text-xs">
                        <span>Total Potongan:</span>
                        <strong class="font-mono text-rose-500 dark:text-rose-400" id="pay-total-deductions-display">
                            -Rp ${fCur(draft.totalDeductions)}
                        </strong>
                    </div>
                    <div class="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span class="font-black text-slate-900 dark:text-white text-sm">Gaji Bersih (Take Home Pay):</span>
                        <span class="font-black text-lg sm:text-xl font-mono text-emerald-600 dark:text-emerald-400" id="pay-net-salary-display">
                            Rp ${fCur(draft.netSalary)}
                        </span>
                    </div>
                </div>

                <!-- Bagian 4: Pengaturan Pembayaran -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Metode Pembayaran</label>
                        <select id="pay-payment-method"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="transfer" ${draft.paymentMethod === 'transfer' ? 'selected' : ''}>Transfer Bank / Rekening</option>
                            <option value="cash" ${draft.paymentMethod === 'cash' ? 'selected' : ''}>Tunai Langsung (Kas Toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rekening Karyawan</label>
                        <input type="text" id="pay-bank-account" value="${esc(draft.bankAccount !== '-' ? `${draft.bankName}: ${draft.bankAccount}` : 'Tunai / Kas Toko')}"
                            readonly
                            class="w-full min-h-[44px] text-[16px] sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                    </div>
                </div>

                <!-- Opsi Integrasi Buku Kas Toko -->
                <div class="p-3.5 rounded-2xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2)">
                    <label class="flex items-start gap-2.5 cursor-pointer">
                        <input type="checkbox" id="pay-sync-expense" checked
                            class="w-4 h-4 mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 cursor-pointer">
                        <div class="text-xs">
                            <strong class="text-slate-900 dark:text-white block font-black">Catat otomatis ke Buku Kas Beban Operasional Toko:</strong>
                            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                                Memasukkan pengeluaran gaji ini ke kategori <em>'gaji'</em> di buku kas pengeluaran toko sehingga neraca laba rugi terpotong secara riil.
                            </p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Modal Footer Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 bg-slate-50/70 dark:bg-slate-800/40 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePayrollItemModal()" 
                    class="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="window.savePayrollItem('${esc(emp.employeeId || emp.uid)}', '${periodStr}', 'draft')"
                        class="min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                        Simpan Draf
                    </button>
                    <button onclick="window.savePayrollItem('${esc(emp.employeeId || emp.uid)}', '${periodStr}', 'paid')"
                        class="min-h-[44px] px-6 py-2.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                        style="background: #10b981;">
                        <i class="fa-solid fa-check"></i>
                        <span>Bayar &amp; Terbitkan Slip</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('payrollItemForm');
    }

    setTimeout(() => {
        const box = el('payroll-item-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closePayrollItemModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-payroll-item-form');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('payrollItemForm', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Kalkulasi Real-time Nilai Kompensasi di Modal Form
 */
export const recalculatePayrollItem = () => {
    const base = parseFloat(el('pay-base-salary')?.value) || 0;
    const attAllowance = parseFloat(el('pay-attendance-allowance')?.value) || 0;
    const bonus = parseFloat(el('pay-bonus')?.value) || 0;
    const overtime = parseFloat(el('pay-overtime')?.value) || 0;

    const advDeduction = parseFloat(el('pay-advance-deduction')?.value) || 0;
    const lostItem = parseFloat(el('pay-lost-item-deduction')?.value) || 0;

    const totalEarnings = base + attAllowance + bonus + overtime;
    const totalDeductions = advDeduction + lostItem;
    const netSalary = Math.max(0, totalEarnings - totalDeductions);

    const earnEl = el('pay-total-earnings-display');
    const dedEl = el('pay-total-deductions-display');
    const netEl = el('pay-net-salary-display');

    if (earnEl) earnEl.textContent = `Rp ${fCur(totalEarnings)}`;
    if (dedEl) dedEl.textContent = `-Rp ${fCur(totalDeductions)}`;
    if (netEl) netEl.textContent = `Rp ${fCur(netSalary)}`;
};

/**
 * Simpan Data Payroll (Draf / Lunas Dibayar)
 */
export const savePayrollItem = async (employeeId, periodStr, targetStatus = 'paid') => {
    if (!verifyOwnerAuthority('menyimpan data payroll karyawan')) return;

    const employees = getAllStoreEmployees();
    const emp = employees.find(e => (e.employeeId === employeeId || e.uid === employeeId));
    if (!emp) return;

    const baseSalary = parseFloat(el('pay-base-salary')?.value) || 0;
    const attendanceAllowance = parseFloat(el('pay-attendance-allowance')?.value) || 0;
    const bonus = parseFloat(el('pay-bonus')?.value) || 0;
    const overtimePay = parseFloat(el('pay-overtime')?.value) || 0;

    const advanceDeduction = parseFloat(el('pay-advance-deduction')?.value) || 0;
    const lostItemDeduction = parseFloat(el('pay-lost-item-deduction')?.value) || 0;
    const lostItemNotes = el('pay-lost-item-notes')?.value?.trim() || '';
    const paymentMethod = el('pay-payment-method')?.value || 'transfer';
    const syncExpense = el('pay-sync-expense')?.checked !== false;

    const totalEarnings = baseSalary + attendanceAllowance + bonus + overtimePay;
    const totalDeductions = advanceDeduction + lostItemDeduction;
    const netSalary = Math.max(0, totalEarnings - totalDeductions);

    const payrollId = generatePayrollId(periodStr, employeeId);

    sLoad(targetStatus === 'paid' ? 'Memproses pembayaran gaji...' : 'Menyimpan draf payroll...');

    try {
        let expenseId = null;

        // 1. Integrasi Hulu-ke-Hilir ke Beban Kas Toko jika dibayar
        if (targetStatus === 'paid' && syncExpense && netSalary > 0) {
            expenseId = 'exp_pay_' + Date.now();
            const expEntry = {
                id: expenseId,
                date: new Date().toISOString().split('T')[0],
                category: 'gaji',
                amount: netSalary,
                desc: `Gaji Karyawan: ${emp.name} (${emp.position}) - Periode ${getPeriodMonthLabel(periodStr)}`,
                source: paymentMethod === 'cash' ? 'cash' : 'bank',
                recipient: emp.name,
                receiptUrl: '',
                payrollId: payrollId,
                createdAt: new Date().toISOString()
            };

            if (!Array.isArray(appData.expenses)) appData.expenses = [];
            appData.expenses.unshift(expEntry);
            try {
                await saveApp();
            } catch (_) {}
        }

        // 2. Integrasi Otomatis: Pelunasan Kasbon jika ada pemotongan kasbon
        if (targetStatus === 'paid' && advanceDeduction > 0) {
            const allAdvs = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];
            const activeAdv = allAdvs.find(a => 
                (a.employeeId === employeeId || a.employeeUid === emp.uid) && 
                a.status === 'active' && 
                parseFloat(a.remainingAmount) > 0
            );
            if (activeAdv) {
                const advId = activeAdv.advanceId || activeAdv.id;
                try {
                    await recordAdvanceRepayment(advId, advanceDeduction, `Pemotongan payroll periode ${getPeriodMonthLabel(periodStr)}`);
                } catch (advErr) {
                    console.warn('[HR Payroll] Gagal memotong saldo kasbon:', advErr);
                }
            }
        }

        const payrollDoc = {
            payrollId,
            period: periodStr,
            periodLabel: getPeriodMonthLabel(periodStr),
            employeeUid: emp.uid || '',
            employeeId: employeeId,
            employeeName: emp.name,
            employeeRole: emp.role,
            position: emp.position,
            phone: emp.phone || '',
            status: targetStatus,

            baseSalary,
            attendanceAllowance,
            bonus,
            overtimePay,
            totalEarnings,

            advanceDeduction,
            lostItemDeduction,
            lostItemNotes,
            totalDeductions,

            netSalary,
            paymentMethod,
            bankName: emp.bankName || 'BCA',
            bankAccount: emp.bankAccount || '-',
            expenseId,
            notes: `Gaji ${getPeriodMonthLabel(periodStr)}`,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            paidAt: targetStatus === 'paid' ? new Date().toISOString() : null
        };

        // Simpan ke Firestore
        try {
            await db.collection('freshmart').doc('cms_data')
                .collection('salary_payrolls')
                .doc(payrollId)
                .set(payrollDoc, { merge: true });
        } catch (_) {}

        if (!Array.isArray(appData.payrollRuns)) appData.payrollRuns = [];
        const existIdx = appData.payrollRuns.findIndex(r => r.payrollId === payrollId || r.id === payrollId);
        if (existIdx > -1) {
            appData.payrollRuns[existIdx] = { id: payrollId, ...payrollDoc };
        } else {
            appData.payrollRuns.unshift({ id: payrollId, ...payrollDoc });
        }

        closePayrollItemModal();
        showToast(
            targetStatus === 'paid' 
                ? `Gaji Rp ${fCur(netSalary)} untuk ${emp.name} berhasil dibayarkan!` 
                : `Draf gaji untuk ${emp.name} berhasil disimpan`, 
            'success'
        );

        const panel = el('cashier-panel-payroll');
        if (panel) renderPayrollView(panel);

    } catch (err) {
        console.error('[HR Payroll] Gagal menyimpan payroll:', err);
        showToast('Gagal menyimpan: ' + err.message, 'error');
    } finally {
        hLoad();
    }
};

/**
 * ─── Modal Pratinjau Slip Gaji (Preview, Cetak A4, Struk Thermal, WhatsApp) ─
 */
export const openPayslipPreviewModal = (payrollId, employeeId) => {
    let item = _cachedPayrollRuns.find(r => (r.payrollId || r.id) === payrollId);
    
    if (!item && employeeId) {
        const emp = getAllStoreEmployees().find(e => (e.employeeId === employeeId || e.uid === employeeId));
        if (emp) {
            const allAtts = Array.isArray(appData.attendances) ? appData.attendances : [];
            const allAdvs = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];
            item = calculateEmployeePayrollDraft(emp, _activePayrollPeriod, allAtts, allAdvs);
        }
    }

    if (!item) {
        showToast('Data slip gaji tidak ditemukan', 'warning');
        return;
    }

    _activeViewingPayslip = item;

    const existingModal = el('modal-payslip-preview');
    if (existingModal) existingModal.remove();

    const store = appData.store || { name: 'TOKO PUTRI', address: 'Jl. Raya Toko Putri', phone: '081234567890' };

    document.body.insertAdjacentHTML('beforeend', `
    <div id="modal-payslip-preview" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePayslipPreviewModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="payslip-preview-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden flex justify-center pt-3 pb-1 cursor-grab">
                <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>

            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar text-base"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">
                            Pratinjau Slip Gaji Karyawan
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">
                            #${esc(item.payrollId || item.id)} • ${esc(item.periodLabel)}
                        </p>
                    </div>
                </div>
                <button onclick="window.closePayslipPreviewModal()" 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Desain Kartu Slip Fisik) -->
            <div class="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-xs">
                <!-- Lembar Slip Gaji -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 font-sans text-slate-800 dark:text-slate-200 shadow-inner">
                    <!-- Kop Toko -->
                    <div class="text-center pb-3 border-b border-dashed border-slate-300 dark:border-slate-600 space-y-1">
                        <h4 class="font-black text-base text-slate-900 dark:text-white tracking-wide uppercase">${esc(store.name || 'TOKO PUTRI')}</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">${esc(store.address || 'Penyedia Bahan Bangunan & Alat Teknik')}</p>
                        <div class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mt-1 border"
                            style="background: rgba(var(--color-primary-rgb), 0.1); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            SLIP GAJI RESMI • ${esc(item.periodLabel)}
                        </div>
                    </div>

                    <!-- Identitas Karyawan -->
                    <div class="grid grid-cols-2 gap-2 text-xs pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <div>
                            <span class="text-slate-400 block text-[10px]">ID Karyawan:</span>
                            <span class="font-mono font-bold">${esc(item.employeeId)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nama Karyawan:</span>
                            <span class="font-bold">${esc(item.employeeName)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Jabatan / Divisi:</span>
                            <span class="font-bold">${esc(item.position)}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Status Pembayaran:</span>
                            <span class="font-bold ${item.status === 'paid' ? 'text-emerald-600' : 'text-amber-500'}">
                                ${item.status === 'paid' ? 'Lunas / Dibayar' : 'Draf'}
                            </span>
                        </div>
                    </div>

                    <!-- Rincian Penghasilan (+) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider block">PENGHASILAN (+)</span>
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Gaji Pokok:</span>
                            <span class="font-mono font-bold">Rp ${fCur(item.baseSalary)}</span>
                        </div>
                        ${item.attendanceAllowance > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Tunjangan Kehadiran (${item.totalAttendanceDays || 0} Hari):</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${fCur(item.attendanceAllowance)}</span>
                        </div>` : ''}
                        ${item.bonus > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Bonus Kinerja &amp; Insentif:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${fCur(item.bonus)}</span>
                        </div>` : ''}
                        ${item.overtimePay > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Uang Lembur:</span>
                            <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+Rp ${fCur(item.overtimePay)}</span>
                        </div>` : ''}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Penghasilan Bruto:</span>
                            <span class="font-mono text-emerald-600 dark:text-emerald-400">Rp ${fCur(item.totalEarnings)}</span>
                        </div>
                    </div>

                    <!-- Rincian Potongan (-) -->
                    <div class="space-y-1.5 pb-3 border-b border-dashed border-slate-300 dark:border-slate-600">
                        <span class="text-[11px] font-black uppercase text-rose-500 tracking-wider block">POTONGAN (-)</span>
                        ${item.advanceDeduction > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Angsuran Kasbon (#${esc(item.advanceId || 'KSB')}):</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${fCur(item.advanceDeduction)}</span>
                        </div>` : ''}
                        ${item.lostItemDeduction > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-600 dark:text-slate-300">Potongan Selisih Barang Hilang:</span>
                            <span class="font-mono font-bold text-rose-500">-Rp ${fCur(item.lostItemDeduction)}</span>
                        </div>
                        ${item.lostItemNotes ? `<span class="text-[10px] text-slate-400 italic block pl-2">${esc(item.lostItemNotes)}</span>` : ''}` : ''}
                        ${item.totalDeductions === 0 ? `<div class="text-slate-400 text-[11px] italic">Tidak ada potongan pada periode ini</div>` : ''}
                        <div class="flex justify-between pt-1 border-t border-slate-200 dark:border-slate-700 font-bold">
                            <span>Total Potongan:</span>
                            <span class="font-mono text-rose-500">-Rp ${fCur(item.totalDeductions)}</span>
                        </div>
                    </div>

                    <!-- Total Gaji Bersih (Take Home Pay) -->
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 flex items-center justify-between">
                        <div>
                            <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GAJI BERSIH (TAKE HOME PAY)</span>
                            <span class="text-[10px] text-slate-500">Metode: ${esc(item.paymentMethod?.toUpperCase())}</span>
                        </div>
                        <span class="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            Rp ${fCur(item.netSalary)}
                        </span>
                    </div>

                    <!-- Tanda Tangan Ringkas -->
                    <div class="grid grid-cols-2 text-center pt-2 text-[10px] text-slate-400">
                        <div>
                            <span>Penerima,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${esc(item.employeeName)}</span>
                        </div>
                        <div>
                            <span>Pengelola HR / Owner,</span>
                            <div class="h-10"></div>
                            <span class="font-bold text-slate-700 dark:text-slate-300">${esc(store.name || 'Owner Toko')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Footer (3 Tombol Aksi Cetak & Share) -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 bg-slate-50/70 dark:bg-slate-800/40 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePayslipPreviewModal()" 
                    class="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tutup
                </button>
                <div class="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                    <button onclick="window.sendPayslipWhatsApp('${esc(item.payrollId || item.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-white font-black text-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Kirim WA</span>
                    </button>
                    <button onclick="window.printPayslipThermal('${esc(item.payrollId || item.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-4 py-2.5 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-receipt text-xs"></i>
                        <span>Struk Thermal</span>
                    </button>
                    <button onclick="window.printPayslipA4('${esc(item.payrollId || item.id)}')"
                        class="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        style="background: var(--color-primary);">
                        <i class="fa-solid fa-print text-xs"></i>
                        <span>Cetak A4 PDF</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('payslipPreview');
    }

    setTimeout(() => {
        const box = el('payslip-preview-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closePayslipPreviewModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-payslip-preview');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('payslipPreview', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * ─── 1-Klik Kirim Slip Gaji via WhatsApp ────────────────────────
 */
export const sendPayslipWhatsApp = (payrollId) => {
    const item = _activeViewingPayslip || _cachedPayrollRuns.find(r => (r.payrollId || r.id) === payrollId);
    if (!item) return;

    const store = appData.store || { name: 'TOKO PUTRI' };
    const empPhone = String(item.phone || '').replace(/[^0-9]/g, '');

    const lines = [
        `*SLIP GAJI RESMI - ${store.name?.toUpperCase() || 'TOKO PUTRI'}*`,
        `Periode: *${item.periodLabel}*`,
        `----------------------------------------`,
        `👤 *KARYAWAN*`,
        `• ID: \`${item.employeeId}\``,
        `• Nama: *${item.employeeName}*`,
        `• Jabatan: ${item.position}`,
        `• Hari Masuk: ${item.totalAttendanceDays || 0} Hari`,
        `----------------------------------------`,
        `💰 *PENGHASILAN (+)*`,
        `• Gaji Pokok: Rp ${fCur(item.baseSalary)}`,
        item.attendanceAllowance > 0 ? `• Tunjangan Absensi: +Rp ${fCur(item.attendanceAllowance)}` : '',
        item.bonus > 0 ? `• Bonus / Insentif: +Rp ${fCur(item.bonus)}` : '',
        item.overtimePay > 0 ? `• Uang Lembur: +Rp ${fCur(item.overtimePay)}` : '',
        `*Total Bruto: Rp ${fCur(item.totalEarnings)}*`,
        `----------------------------------------`,
        `✂️ *POTONGAN (-)*`,
        item.advanceDeduction > 0 ? `• Angsuran Kasbon: -Rp ${fCur(item.advanceDeduction)}` : '',
        item.lostItemDeduction > 0 ? `• Potongan Selisih Barang Hilang: -Rp ${fCur(item.lostItemDeduction)}` : '',
        item.totalDeductions === 0 ? `• Tidak ada potongan` : `*Total Potongan: -Rp ${fCur(item.totalDeductions)}*`,
        `----------------------------------------`,
        `💵 *GAJI BERSIH (TAKE HOME PAY)*`,
        `*Rp ${fCur(item.netSalary)}*`,
        `Metode: ${item.paymentMethod?.toUpperCase()} (${item.bankName || 'BCA'}: ${item.bankAccount || '-'})`,
        `Status: *${item.status === 'paid' ? 'LUNAS / DIBAYAR' : 'DRAF'}*`,
        `----------------------------------------`,
        `_Slip gaji ini dibuat otomatis secara sah oleh sistem manajemen Toko Putri._`
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(lines);
    const targetUrl = empPhone ? `https://wa.me/${empPhone}?text=${encoded}` : `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(targetUrl, '_blank');
};

/**
 * ─── Cetak Struk Thermal Kasir (58mm / 80mm) ────────────────────
 */
export const printPayslipThermal = (payrollId) => {
    const item = _activeViewingPayslip || _cachedPayrollRuns.find(r => (r.payrollId || r.id) === payrollId);
    if (!item) return;

    const store = appData.store || { name: 'TOKO PUTRI', address: 'Jl. Raya Toko Putri' };

    const thermalHtml = `
    <div style="font-family:'Courier New',Courier,monospace;width:300px;margin:0 auto;padding:10px;font-size:12px;color:#000;">
        <div style="text-align:center;border-bottom:1px dashed #000;padding-bottom:8px;margin-bottom:8px;">
            <div style="font-size:16px;font-weight:bold;">${esc(store.name || 'TOKO PUTRI')}</div>
            <div style="font-size:10px;">${esc(store.address || '')}</div>
            <div style="font-weight:bold;margin-top:4px;">SLIP GAJI KARYAWAN</div>
            <div style="font-size:11px;">${esc(item.periodLabel)}</div>
        </div>
        <div style="margin-bottom:6px;font-size:11px;">
            <div>ID: ${esc(item.employeeId)}</div>
            <div>Nama: <strong>${esc(item.employeeName)}</strong></div>
            <div>Jabatan: ${esc(item.position)}</div>
            <div>Hadir: ${item.totalAttendanceDays || 0} Hari</div>
        </div>
        <div style="border-top:1px dashed #000;border-bottom:1px dashed #000;padding:6px 0;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">PENGHASILAN:</div>
            <div style="display:flex;justify-content:space-between;"><span>Gaji Pokok:</span><span>Rp ${fCur(item.baseSalary)}</span></div>
            ${item.attendanceAllowance > 0 ? `<div style="display:flex;justify-content:space-between;"><span>Tunj. Kehadiran:</span><span>+Rp ${fCur(item.attendanceAllowance)}</span></div>` : ''}
            ${item.bonus > 0 ? `<div style="display:flex;justify-content:space-between;"><span>Bonus/Insentif:</span><span>+Rp ${fCur(item.bonus)}</span></div>` : ''}
            ${item.overtimePay > 0 ? `<div style="display:flex;justify-content:space-between;"><span>Lembur:</span><span>+Rp ${fCur(item.overtimePay)}</span></div>` : ''}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Bruto:</span><span>Rp ${fCur(item.totalEarnings)}</span></div>
        </div>
        <div style="border-bottom:1px dashed #000;padding-bottom:6px;margin-bottom:6px;">
            <div style="font-weight:bold;margin-bottom:2px;">POTONGAN:</div>
            ${item.advanceDeduction > 0 ? `<div style="display:flex;justify-content:space-between;"><span>Kasbon:</span><span>-Rp ${fCur(item.advanceDeduction)}</span></div>` : ''}
            ${item.lostItemDeduction > 0 ? `<div style="display:flex;justify-content:space-between;"><span>Selisih Barang:</span><span>-Rp ${fCur(item.lostItemDeduction)}</span></div>` : ''}
            ${item.totalDeductions === 0 ? `<div>(Tidak ada potongan)</div>` : ''}
            <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:2px;"><span>Tot. Potongan:</span><span>-Rp ${fCur(item.totalDeductions)}</span></div>
        </div>
        <div style="font-size:14px;font-weight:bold;display:flex;justify-content:space-between;margin-bottom:10px;">
            <span>TAKE HOME PAY:</span>
            <span>Rp ${fCur(item.netSalary)}</span>
        </div>
        <div style="text-align:center;font-size:10px;border-top:1px dashed #000;padding-top:8px;">
            <div>Metode: ${esc(item.paymentMethod?.toUpperCase())} • Status: ${esc(item.status?.toUpperCase())}</div>
            <div style="margin-top:4px;">Terima kasih atas kerja keras Anda!</div>
        </div>
    </div>`;

    const w = window.open('', '_blank');
    if (w) {
        w.document.write(`<html><head><title>Slip Gaji - ${item.employeeName}</title></head><body onload="window.print();">${thermalHtml}</body></html>`);
        w.document.close();
    }
};

/**
 * ─── Cetak Dokumen Presisi A4 PDF ──────────────────────────────
 */
export const printPayslipA4 = (payrollId) => {
    const item = _activeViewingPayslip || _cachedPayrollRuns.find(r => (r.payrollId || r.id) === payrollId);
    if (!item) return;

    const store = appData.store || { name: 'TOKO PUTRI', address: 'Jl. Raya Toko Putri', phone: '081234567890' };

    const a4Html = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Slip Gaji Resmi - ${item.employeeName} (${item.periodLabel})</title>
        <style>
            @page { size: A4 portrait; margin: 15mm; }
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; font-size: 13px; line-height: 1.5; }
            .kop { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .kop-title { font-size: 22px; font-weight: 900; color: #0f172a; letter-spacing: 0.5px; }
            .kop-sub { font-size: 11px; color: #64748b; }
            .badge-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #4338ca; background: #e0e7ff; padding: 6px 16px; border-radius: 9999px; display: inline-block; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
            .table-block { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table-block th { background: #f1f5f9; padding: 10px 14px; font-size: 11px; font-weight: 800; text-transform: uppercase; text-align: left; border-bottom: 1px solid #cbd5e1; }
            .table-block td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; }
            .text-right { text-align: right; }
            .total-box { background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 12px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
            .total-label { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #065f46; }
            .total-val { font-size: 24px; font-weight: 900; color: #047857; font-family: monospace; }
            .sign-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center; margin-top: 40px; }
            .sign-line { border-bottom: 1px solid #94a3b8; width: 60%; margin: 60px auto 8px auto; }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body onload="window.print();">
        <div class="kop">
            <div>
                <div class="kop-title">${esc(store.name || 'TOKO PUTRI')}</div>
                <div class="kop-sub">${esc(store.address || 'Pusat Bahan Bangunan & Alat Teknik')}</div>
                <div class="kop-sub">WhatsApp: ${esc(store.phone || '-')}</div>
            </div>
            <div style="text-align: right;">
                <div class="badge-title">SLIP GAJI KARYAWAN</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 5px;">Periode: <strong>${esc(item.periodLabel)}</strong></div>
            </div>
        </div>

        <div class="meta-grid">
            <div>
                <div style="color: #64748b; font-size: 11px;">Nomor Slip:</div>
                <div style="font-weight: 800; font-family: monospace;">${esc(item.payrollId || item.id)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">ID Karyawan:</div>
                <div style="font-weight: 700;">${esc(item.employeeId)}</div>
            </div>
            <div>
                <div style="color: #64748b; font-size: 11px;">Nama Karyawan:</div>
                <div style="font-weight: 800; font-size: 14px;">${esc(item.employeeName)}</div>
                <div style="color: #64748b; font-size: 11px; margin-top: 6px;">Jabatan:</div>
                <div style="font-weight: 700;">${esc(item.position)} (${item.totalAttendanceDays || 0} Hari Kerja)</div>
            </div>
        </div>

        <table class="table-block">
            <thead>
                <tr>
                    <th>Deskripsi Komponen Penghasilan (+)</th>
                    <th class="text-right">Jumlah (Rp)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gaji Pokok Karyawan</td>
                    <td class="text-right font-mono">Rp ${fCur(item.baseSalary)}</td>
                </tr>
                ${item.attendanceAllowance > 0 ? `
                <tr>
                    <td>Tunjangan Kehadiran (${item.totalAttendanceDays || 0} hari x Rp ${fCur(item.dailyAllowanceRate)})</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${fCur(item.attendanceAllowance)}</td>
                </tr>` : ''}
                ${item.bonus > 0 ? `
                <tr>
                    <td>Bonus Kinerja &amp; Insentif Toko</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${fCur(item.bonus)}</td>
                </tr>` : ''}
                ${item.overtimePay > 0 ? `
                <tr>
                    <td>Uang Lembur / Tambahan</td>
                    <td class="text-right font-mono text-emerald-600">+Rp ${fCur(item.overtimePay)}</td>
                </tr>` : ''}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Penghasilan Bruto</td>
                    <td class="text-right font-mono text-emerald-600">Rp ${fCur(item.totalEarnings)}</td>
                </tr>
            </tbody>
        </table>

        <table class="table-block">
            <thead>
                <tr>
                    <th>Deskripsi Komponen Pemotongan (-)</th>
                    <th class="text-right">Jumlah (Rp)</th>
                </tr>
            </thead>
            <tbody>
                ${item.advanceDeduction > 0 ? `
                <tr>
                    <td>Angsuran Kasbon / Pinjaman Karyawan (#${esc(item.advanceId || 'KSB')})</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${fCur(item.advanceDeduction)}</td>
                </tr>` : ''}
                ${item.lostItemDeduction > 0 ? `
                <tr>
                    <td>Potongan Selisih Barang Hilang / Stock Opname ${item.lostItemNotes ? `(${esc(item.lostItemNotes)})` : ''}</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${fCur(item.lostItemDeduction)}</td>
                </tr>` : ''}
                ${item.totalDeductions === 0 ? `
                <tr>
                    <td colspan="2" style="color: #94a3b8; font-style: italic;">Tidak ada potongan pada periode penggajian ini.</td>
                </tr>` : ''}
                <tr style="background: #f8fafc; font-weight: 800;">
                    <td>Subtotal Pemotongan</td>
                    <td class="text-right font-mono text-rose-500">-Rp ${fCur(item.totalDeductions)}</td>
                </tr>
            </tbody>
        </table>

        <div class="total-box">
            <div>
                <div class="total-label">Gaji Bersih Diterima (Take Home Pay)</div>
                <div style="font-size: 11px; color: #047857; margin-top: 2px;">
                    Metode Pembayaran: <strong>${esc(item.paymentMethod?.toUpperCase())}</strong> 
                    ${item.bankAccount && item.bankAccount !== '-' ? `(${esc(item.bankName)}: ${esc(item.bankAccount)})` : ''}
                </div>
            </div>
            <div class="total-val">Rp ${fCur(item.netSalary)}</div>
        </div>

        <div class="sign-grid">
            <div>
                <div>Diterima oleh Karyawan,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">${esc(item.employeeName)}</div>
                <div style="font-size: 11px; color: #64748b;">${esc(item.position)}</div>
            </div>
            <div>
                <div>Mengetahui,</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 11px; color: #64748b;">${esc(store.name || 'Toko Putri')}</div>
            </div>
        </div>
    </body>
    </html>`;

    const pWin = window.open('', '_blank');
    if (pWin) {
        pWin.document.write(a4Html);
        pWin.document.close();
    }
};

// ─── Expose Global Window ────────────────────────────────────
if (typeof window !== 'undefined') {
    window.generatePayrollId            = generatePayrollId;
    window.loadPayrollRuns              = loadPayrollRuns;
    window.calculateEmployeePayrollDraft = calculateEmployeePayrollDraft;
    window.renderPayrollView            = renderPayrollView;
    window.navigatePayrollPeriod        = navigatePayrollPeriod;
    window.onPayrollPeriodChanged       = onPayrollPeriodChanged;
    window.openPayrollItemModal         = openPayrollItemModal;
    window.closePayrollItemModal        = closePayrollItemModal;
    window.recalculatePayrollItem       = recalculatePayrollItem;
    window.savePayrollItem              = savePayrollItem;
    window.openPayslipPreviewModal      = openPayslipPreviewModal;
    window.closePayslipPreviewModal     = closePayslipPreviewModal;
    window.sendPayslipWhatsApp          = sendPayslipWhatsApp;
    window.printPayslipThermal          = printPayslipThermal;
    window.printPayslipA4               = printPayslipA4;
}

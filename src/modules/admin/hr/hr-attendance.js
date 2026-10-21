/**
 * ============================================================
 * MODUL HRD: ABSENSI SHIFT & REKAP KEHADIRAN KARYAWAN
 * Toko Putri v1.19.0
 * Fitur:
 * 1. Pencatatan Kehadiran Harian (Hadir, Terlambat, Izin, Sakit, Alpha)
 * 2. Kalkulasi Otomatis Hak Uang Makan / Tunjangan Harian
 * 3. 1-Klik Hadirkan Semua Staf (Quick Bulk Attendance)
 * 4. Integrasi Otomatis dari Buka Shift Kasir POS (pos-shift.js)
 * 5. Rekapitulasi Presensi Periode Bulanan untuk Engine Payroll
 * ============================================================
 */

import { appData } from '../../../core/state.js';
import { db, firebase, auth } from '../../../config/firebase.js';
import { 
    el, esc, fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../../core/utils.js';
import { getAllStoreEmployees } from './hr-advances.js';
import { verifyOwnerAuthority, getPeriodMonthLabel } from './hr-schema.js';

let _selectedAttendanceDate = new Date().toISOString().split('T')[0];
let _cachedAttendances = []; // Data absensi tanggal terpilih

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

export const ATTENDANCE_STATUSES = [
    { key: 'present', label: 'Hadir', badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200', icon: 'fa-check' },
    { key: 'late',    label: 'Terlambat', badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200', icon: 'fa-clock' },
    { key: 'permit',  label: 'Izin', badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200', icon: 'fa-envelope-open-text' },
    { key: 'sick',    label: 'Sakit', badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200', icon: 'fa-notes-medical' },
    { key: 'alpha',   label: 'Alpha', badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200', icon: 'fa-xmark' }
];

/**
 * Generator ID Unik Absensi: ATT-YYYY-MM-DD-EMPID
 */
export const generateAttendanceId = (dateStr, empId) => {
    return `ATT-${dateStr}-${empId.replace(/[^a-zA-Z0-9]/g, '')}`;
};

/**
 * Muat data absensi untuk tanggal tertentu
 */
export const loadAttendancesForDate = async (dateStr = _selectedAttendanceDate) => {
    _selectedAttendanceDate = dateStr;
    try {
        let atts = [];
        let fromCloud = false;
        try {
            const snap = await db.collection('freshmart').doc('cms_data')
                .collection('attendances')
                .where('date', '==', dateStr)
                .get();
            if (snap && !snap.empty) {
                atts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                fromCloud = true;
            }
        } catch (_) {}

        if (!fromCloud || atts.length === 0) {
            let allLocal = Array.isArray(appData.attendances) ? appData.attendances : [];
            if (allLocal.length === 0) {
                try {
                    allLocal = JSON.parse(localStorage.getItem('freshmart_attendances') || '[]');
                    if (Array.isArray(allLocal) && allLocal.length > 0) appData.attendances = allLocal;
                } catch (_) {}
            }
            const dateLocal = allLocal.filter(a => a.date === dateStr);
            if (dateLocal.length > 0) atts = dateLocal;
        }

        _cachedAttendances = atts;
        return atts;
    } catch (err) {
        console.error('[HR Attendance] Gagal memuat absensi tanggal:', dateStr, err);
        const allLocal = Array.isArray(appData.attendances) ? appData.attendances : [];
        _cachedAttendances = allLocal.filter(a => a.date === dateStr);
        return _cachedAttendances;
    }
};

/**
 * Render Tampilan Utama Panel Absensi Tim
 */
export const renderAttendanceView = async (container) => {
    if (!container) return;

    container.innerHTML = `
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat lembar presensi tim...</p>
    </div>`;

    await loadAttendancesForDate(_selectedAttendanceDate);

    const employees = getAllStoreEmployees();
    const attMap = new Map();
    _cachedAttendances.forEach(a => {
        attMap.set(a.employeeId || a.employeeUid, a);
    });

    // Statistik hari terpilih
    let presentCount = 0;
    let lateCount = 0;
    let permitCount = 0;
    let alphaCount = 0;
    let totalAllowanceToday = 0;

    employees.forEach(emp => {
        const att = attMap.get(emp.employeeId) || attMap.get(emp.uid);
        const status = att ? att.status : 'unrecorded';
        if (status === 'present') {
            presentCount++;
            totalAllowanceToday += (parseFloat(att.allowanceEarned) || parseFloat(emp.dailyAllowance) || 0);
        } else if (status === 'late') {
            lateCount++;
            totalAllowanceToday += (parseFloat(att.allowanceEarned) || parseFloat(emp.dailyAllowance) || 0);
        } else if (status === 'permit' || status === 'sick') {
            permitCount++;
        } else if (status === 'alpha') {
            alphaCount++;
        }
    });

    const isToday = _selectedAttendanceDate === new Date().toISOString().split('T')[0];

    container.innerHTML = `
    <div class="space-y-4">
        <!-- Date Selector & Quick Controls -->
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-calendar-day" style="color: var(--color-primary)"></i>
                    <span>Tanggal Presensi:</span>
                </span>
                <button onclick="window.navigateAttendanceDate(-1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Sebelumnya">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <input id="att-date-picker" type="date" value="${_selectedAttendanceDate}" onchange="window.onAttendanceDateChanged(this.value)"
                    class="h-9 border border-slate-200 dark:border-slate-700 rounded-xl px-3 text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                <button onclick="window.navigateAttendanceDate(1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Berikutnya">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                ${!isToday ? `
                <button onclick="window.onAttendanceDateChanged('${new Date().toISOString().split('T')[0]}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer">
                    Hari Ini
                </button>` : ''}
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openMonthlyAttendanceRecapModal('${_selectedAttendanceDate.slice(0, 7)}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                    title="Rekapitulasi Presensi & Kedisiplinan Tim">
                    <i class="fa-solid fa-chart-pie" style="color: var(--color-primary)"></i>
                    <span>Rekap Bulanan</span>
                </button>
                <button onclick="window.bulkMarkAllPresent()"
                    class="h-9 px-4 rounded-xl text-xs font-black text-white shadow-xs active:scale-95 transition-all cursor-pointer flex items-center gap-2 hover:opacity-95"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-bolt text-xs"></i>
                    <span>Hadirkan Semua Staf</span>
                </button>
            </div>
        </div>

        <!-- Bento Ringkasan Kehadiran Hari Ini (Theme Harmonized) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Hadir Tepat Waktu</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                        <i class="fa-solid fa-user-check"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${presentCount} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Presensi terpenuhi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Terlambat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                        <i class="fa-solid fa-user-clock"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${lateCount} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Jam masuk lewat batas</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Izin / Sakit</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                        <i class="fa-solid fa-calendar-minus"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${permitCount} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-0.5">Tercatat izin resmi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Alpha / Belum Tercatat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-rose-200 dark:border-rose-800/60 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
                        <i class="fa-solid fa-user-xmark"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${alphaCount + (employees.length - presentCount - lateCount - permitCount - alphaCount)} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-rose-500 mt-0.5">Uang makan Rp 0</p>
            </div>
        </div>

        <!-- Daftar Kehadiran Staf -->
        <div class="space-y-2.5">
            ${employees.map(emp => {
                const att = attMap.get(emp.employeeId) || attMap.get(emp.uid);
                const status = att ? att.status : 'present'; // Default saran Hadir
                const isRecorded = !!att;
                const clockIn = att?.clockIn || '08:00';
                const clockOut = att?.clockOut || '17:00';
                const notes = att?.notes || '';
                const dailyAllowance = parseFloat(emp.dailyAllowance) || 0;
                const earned = isRecorded ? (parseFloat(att?.allowanceEarned) || 0) : (dailyAllowance > 0 ? dailyAllowance : 0);
                const initials = (emp.name || 'ST').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
                const isOwner = emp.role === 'owner' || emp.employeeId === 'OWN-001';
                const avatarContent = isOwner 
                    ? '<i class="fa-solid fa-crown text-amber-500 text-sm"></i>' 
                    : initials;

                return `
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col xl:flex-row xl:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0 flex-1">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border ${isOwner ? 'border-amber-300 dark:border-amber-600/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-500' : 'border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)]'}">
                            ${avatarContent}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight sm:whitespace-nowrap">${esc(emp.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap shrink-0">
                                    ${esc(emp.employeeId)}
                                </span>
                                ${isRecorded ? `
                                    <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 whitespace-nowrap shrink-0">
                                        <i class="fa-solid fa-circle-check"></i> Tersimpan
                                    </span>
                                ` : `
                                    <span class="text-[9px] font-bold text-amber-500 flex items-center gap-1 whitespace-nowrap shrink-0">
                                        <i class="fa-solid fa-clock"></i> Belum Disimpan
                                    </span>
                                `}
                            </div>
                            <div class="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap gap-x-2 gap-y-0.5">
                                <span class="font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">${esc(emp.position)}</span>
                                <span class="inline-flex items-center whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <span>Uang Makan: <strong class="text-emerald-600 dark:text-emerald-400 font-bold">${fCur(dailyAllowance)}</strong></span>
                                </span>
                                ${att?.source === 'pos_shift' ? `
                                <span class="inline-flex items-center text-[10px] text-blue-500 font-bold whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift
                                </span>` : ''}
                            </div>
                        </div>
                    </div>

                    <!-- Status Selector Buttons & Jam Kerja -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <!-- Status Chips -->
                        <div class="grid grid-cols-5 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            ${ATTENDANCE_STATUSES.map(st => {
                                const isActive = status === st.key;
                                let activeColorClass = 'bg-slate-800 text-white';
                                if (st.key === 'present') activeColorClass = 'bg-emerald-600 text-white shadow-2xs font-black';
                                else if (st.key === 'late') activeColorClass = 'bg-amber-500 text-white shadow-2xs font-black';
                                else if (st.key === 'permit') activeColorClass = 'bg-blue-600 text-white shadow-2xs font-black';
                                else if (st.key === 'sick') activeColorClass = 'bg-purple-600 text-white shadow-2xs font-black';
                                else if (st.key === 'alpha') activeColorClass = 'bg-rose-600 text-white shadow-2xs font-black';

                                return `
                                <button type="button" onclick="window.setQuickAttendanceStatus('${esc(emp.employeeId)}', '${st.key}')"
                                    id="btn-att-status-${esc(emp.employeeId)}-${st.key}"
                                    data-status="${st.key}"
                                    data-selected="${isActive ? 'true' : 'false'}"
                                    class="att-status-btn-${esc(emp.employeeId)} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${
                                        isActive 
                                            ? activeColorClass 
                                            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60'}">
                                    <i class="fa-solid ${st.icon} text-[9px]"></i>
                                    <span>${st.label}</span>
                                </button>
                            `;}).join('')}
                        </div>

                        <!-- Jam Masuk & Keluar -->
                        <div class="flex items-center gap-1 text-xs">
                            <input id="att-in-${esc(emp.employeeId)}" type="time" value="${clockIn}" title="Jam Masuk"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <span class="text-slate-400 font-bold">-</span>
                            <input id="att-out-${esc(emp.employeeId)}" type="time" value="${clockOut}" title="Jam Pulang"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>

                        <!-- Tombol Simpan Row -->
                        <button onclick="window.saveSingleAttendance('${esc(emp.employeeId)}', '${esc(emp.uid || emp.employeeId)}', '${esc(emp.name)}', '${esc(emp.position)}', '${esc(emp.role)}', ${dailyAllowance})"
                            id="btn-save-att-${esc(emp.employeeId)}"
                            class="h-9 px-4 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 hover:opacity-95"
                            style="background: var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk text-[10px]"></i>
                            <span>Simpan</span>
                        </button>
                    </div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
};

/**
 * Navigasi tanggal presensi (-1 hari atau +1 hari)
 */
export const navigateAttendanceDate = (offsetDays) => {
    const cur = new Date(_selectedAttendanceDate);
    cur.setDate(cur.getDate() + offsetDays);
    _selectedAttendanceDate = cur.toISOString().split('T')[0];
    const panel = el('cashier-panel-attendance');
    if (panel) renderAttendanceView(panel);
};

export const onAttendanceDateChanged = (newDate) => {
    _selectedAttendanceDate = newDate;
    const panel = el('cashier-panel-attendance');
    if (panel) renderAttendanceView(panel);
};

/**
 * Toggle visual chip status presensi
 */
export const setQuickAttendanceStatus = (empId, statusKey) => {
    document.querySelectorAll(`.att-status-btn-${empId}`).forEach(btn => {
        btn.className = `att-status-btn-${empId} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60`;
        btn.setAttribute('data-selected', 'false');
    });

    const activeBtn = el(`btn-att-status-${empId}-${statusKey}`);
    if (activeBtn) {
        let activeColorClass = 'bg-slate-800 text-white';
        if (statusKey === 'present') activeColorClass = 'bg-emerald-600 text-white shadow-2xs font-black';
        else if (statusKey === 'late') activeColorClass = 'bg-amber-500 text-white shadow-2xs font-black';
        else if (statusKey === 'permit') activeColorClass = 'bg-blue-600 text-white shadow-2xs font-black';
        else if (statusKey === 'sick') activeColorClass = 'bg-purple-600 text-white shadow-2xs font-black';
        else if (statusKey === 'alpha') activeColorClass = 'bg-rose-600 text-white shadow-2xs font-black';

        activeBtn.className = `att-status-btn-${empId} px-2.5 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${activeColorClass}`;
        activeBtn.setAttribute('data-selected', 'true');
        activeBtn.setAttribute('data-selected-status', statusKey);
    }
};

/**
 * Simpan data presensi per satu karyawan
 */
export const saveSingleAttendance = async (empId, uid, name, position, role, dailyAllowance) => {
    if (!verifyOwnerAuthority('mencatat absensi karyawan')) return;

    let selectedStatus = 'present';
    ATTENDANCE_STATUSES.forEach(st => {
        const btn = el(`btn-att-status-${empId}-${st.key}`);
        if (btn && (btn.getAttribute('data-selected') === 'true' || btn.getAttribute('data-selected-status') === st.key || btn.classList.contains('bg-emerald-600') || btn.classList.contains('bg-amber-500') || btn.classList.contains('bg-blue-600') || btn.classList.contains('bg-purple-600') || btn.classList.contains('bg-rose-600') || btn.classList.contains('bg-white') || btn.classList.contains('dark:bg-slate-800'))) {
            selectedStatus = st.key;
        }
    });

    const clockIn = el(`att-in-${empId}`)?.value || '08:00';
    const clockOut = el(`att-out-${empId}`)?.value || '17:00';
    const allowanceEarned = (selectedStatus === 'present' || selectedStatus === 'late') ? dailyAllowance : 0;
    const attendanceId = generateAttendanceId(_selectedAttendanceDate, empId);

    const attRecord = {
        attendanceId,
        date: _selectedAttendanceDate,
        employeeUid: uid,
        employeeId: empId,
        employeeName: name,
        position,
        role,
        status: selectedStatus,
        clockIn,
        clockOut,
        allowanceEarned,
        notes: '',
        source: 'manual',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        recordedBy: auth.currentUser?.uid || 'owner'
    };

    const btn = el(`btn-save-att-${empId}`);
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-[10px]"></i>'; }

    // 1. UPDATE CACHE LOKAL & APPDATA TERLEBIH DAHULU (Offline-First, Anti-Data-Loss)
    const idx = _cachedAttendances.findIndex(a => a.attendanceId === attendanceId);
    if (idx > -1) _cachedAttendances[idx] = { id: attendanceId, ...attRecord };
    else _cachedAttendances.push({ id: attendanceId, ...attRecord });

    if (!Array.isArray(appData.attendances)) appData.attendances = [];
    const globalIdx = appData.attendances.findIndex(a => a.attendanceId === attendanceId);
    if (globalIdx > -1) appData.attendances[globalIdx] = { id: attendanceId, ...attRecord };
    else appData.attendances.push({ id: attendanceId, ...attRecord });

    try {
        localStorage.setItem('freshmart_attendances', JSON.stringify(appData.attendances));
    } catch (_) {}

    // 2. SINKRONISASI KE CLOUD FIRESTORE SUB-KOLEKSI SECARA ASINKRON & AMAN
    try {
        await db.collection('freshmart').doc('cms_data')
            .collection('attendances')
            .doc(attendanceId)
            .set(attRecord, { merge: true });
    } catch (syncErr) {
        console.warn('[HR Attendance] Cloud sync terkendala hak akses/offline, presensi tetap tersimpan di lokal:', syncErr);
    }

    // 3. PERSISTENSI KE STATE LOKAL
    try {
        await saveApp();
    } catch (_) {}

    showToast(`Presensi ${name} (${selectedStatus.toUpperCase()}) tersimpan!`, 'success');
    if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i><span>Tersimpan</span>';
    }
};

/**
 * ⚡ 1-Klik Hadirkan Semua Staf (Bulk Mark All Present)
 */
export const bulkMarkAllPresent = async () => {
    if (!verifyOwnerAuthority('mencatat presensi massal')) return;

    const employees = getAllStoreEmployees();
    if (employees.length === 0) return;

    sLoad('Mencatat kehadiran seluruh staf...');

    try {
        const updatedList = [];

        for (const emp of employees) {
            const empId = emp.employeeId || 'EMP-001';
            const attendanceId = generateAttendanceId(_selectedAttendanceDate, empId);
            const dailyAllowance = parseFloat(emp.dailyAllowance) || 0;

            const attRecord = {
                attendanceId,
                date: _selectedAttendanceDate,
                employeeUid: emp.uid || empId,
                employeeId: empId,
                employeeName: emp.name || 'Karyawan',
                position: emp.position || 'Staf Toko',
                role: emp.role || 'staff',
                status: 'present',
                clockIn: '08:00',
                clockOut: '17:00',
                allowanceEarned: dailyAllowance,
                notes: 'Hadir massal 1-klik',
                source: 'bulk',
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                recordedBy: auth.currentUser?.uid || 'owner'
            };

            updatedList.push({ id: attendanceId, ...attRecord });
        }

        // 1. UPDATE CACHE LOKAL & APPDATA TERLEBIH DAHULU (Offline-First)
        _cachedAttendances = updatedList;
        if (!Array.isArray(appData.attendances)) appData.attendances = [];
        updatedList.forEach(item => {
            const gIdx = appData.attendances.findIndex(a => a.attendanceId === item.attendanceId);
            if (gIdx > -1) appData.attendances[gIdx] = item;
            else appData.attendances.push(item);
        });

        try {
            localStorage.setItem('freshmart_attendances', JSON.stringify(appData.attendances));
        } catch (_) {}

        // 2. SINKRONISASI BATCH KE CLOUD FIRESTORE
        try {
            const batch = db.batch();
            for (const item of updatedList) {
                const ref = db.collection('freshmart').doc('cms_data')
                    .collection('attendances')
                    .doc(item.attendanceId);
                batch.set(ref, item, { merge: true });
            }
            await batch.commit();
        } catch (batchErr) {
            console.warn('[HR Attendance] Cloud batch presensi massal terkendala hak akses/offline, tetap tersimpan lokal:', batchErr);
        }

        // 3. PERSISTENSI KE STATE LOKAL
        try {
            await saveApp();
        } catch (_) {}

        showToast(`Presensi seluruh ${employees.length} staf berhasil dicatat sebagai HADIR!`, 'success');

        const panel = el('cashier-panel-attendance');
        if (panel) renderAttendanceView(panel);

    } catch (err) {
        console.error('[HR Attendance] Gagal presensi massal:', err);
        showToast('Gagal presensi massal: ' + err.message, 'error');
    } finally {
        hLoad();
    }
};

/**
 * Integrasi Otomatis dari Buka Shift Kasir POS (pos-shift.js)
 * Saat kasir buka shift, otomatis buat catatan hadir jika belum ada
 */
export const autoRecordCashierShiftAttendance = async (cashierUser, openTimeDate) => {
    try {
        if (!cashierUser) return;
        const todayStr = new Date().toISOString().split('T')[0];
        const empId = cashierUser.employeeId || 'EMP-001';
        const attendanceId = generateAttendanceId(todayStr, empId);

        // Cek di cache lokal dulu
        if (!Array.isArray(appData.attendances)) appData.attendances = [];
        const existsLocal = appData.attendances.some(a => a.attendanceId === attendanceId);
        if (existsLocal) return;

        const hours = String(openTimeDate?.getHours ? openTimeDate.getHours() : new Date().getHours()).padStart(2, '0');
        const minutes = String(openTimeDate?.getMinutes ? openTimeDate.getMinutes() : new Date().getMinutes()).padStart(2, '0');
        const clockIn = `${hours}:${minutes}`;

        const dailyAllowance = parseFloat(cashierUser.dailyAllowance) || 20000;

        const attRecord = {
            attendanceId,
            date: todayStr,
            employeeUid: cashierUser.uid || empId,
            employeeId: empId,
            employeeName: cashierUser.name || 'Kasir POS',
            position: cashierUser.position || 'Kasir POS',
            role: cashierUser.role || 'cashier',
            status: 'present',
            clockIn,
            clockOut: '17:00',
            allowanceEarned: dailyAllowance,
            notes: 'Absensi otomatis dari Buka Shift Kasir',
            source: 'pos_shift',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Simpan lokal
        appData.attendances.push({ id: attendanceId, ...attRecord });
        try {
            localStorage.setItem('freshmart_attendances', JSON.stringify(appData.attendances));
        } catch (_) {}

        // Simpan cloud (graceful)
        try {
            const docRef = db.collection('freshmart').doc('cms_data').collection('attendances').doc(attendanceId);
            const snap = await docRef.get();
            if (!snap.exists) {
                await docRef.set(attRecord);
            }
        } catch (_) {}

        console.log('[HR Attendance] Presensi kasir tercatat otomatis dari shift:', empId, clockIn);

    } catch (err) {
        console.warn('[HR Attendance] Gagal auto-record shift attendance:', err.message);
    }
};

/**
 * Rekapitulasi Presensi Karyawan untuk Periode Bulan Tertentu (untuk Engine Payroll)
 * @param {string} yearMonth Format: 'YYYY-MM'
 * @param {string} employeeId
 * @returns {Object} { totalDays, presentDays, lateDays, permitDays, sickDays, alphaDays, totalAllowance }
 */
export const calculateMonthlyAttendanceSummary = (allAttendances = [], yearMonth, employeeId) => {
    const list = allAttendances.filter(a => {
        const matchesDate = a.date && a.date.startsWith(yearMonth);
        const matchesEmp = employeeId ? (a.employeeId === employeeId || a.employeeUid === employeeId) : true;
        return matchesDate && matchesEmp;
    });

    let presentDays = 0;
    let lateDays = 0;
    let permitDays = 0;
    let sickDays = 0;
    let alphaDays = 0;
    let totalAllowance = 0;

    list.forEach(a => {
        if (a.status === 'present') {
            presentDays++;
            totalAllowance += (parseFloat(a.allowanceEarned) || 0);
        } else if (a.status === 'late') {
            lateDays++;
            totalAllowance += (parseFloat(a.allowanceEarned) || 0);
        } else if (a.status === 'permit') {
            permitDays++;
        } else if (a.status === 'sick') {
            sickDays++;
        } else if (a.status === 'alpha') {
            alphaDays++;
        }
    });

    return {
        totalRecords: list.length,
        presentDays,
        lateDays,
        permitDays,
        sickDays,
        alphaDays,
        totalAllowance
    };
};

/**
 * ─── Hitung Rekapitulasi Presensi Seluruh Tim Toko untuk 1 Bulan ───
 * @param {string} yearMonth Format 'YYYY-MM'
 * @returns {Object} Agregasi data & matriks per karyawan
 */
export const calculateMonthlyTeamAttendanceRecap = (yearMonth = new Date().toISOString().slice(0, 7)) => {
    const allAtts = Array.isArray(appData.attendances) ? appData.attendances : [];
    const employees = getAllStoreEmployees();
    const periodLabel = getPeriodMonthLabel(yearMonth);

    let totalTeamAllowance = 0;
    let totalPresentDays = 0;
    let totalLateDays = 0;
    let totalPermitDays = 0;
    let totalSickDays = 0;
    let totalAlphaDays = 0;

    const items = employees.map(emp => {
        const empId = emp.employeeId || emp.uid;
        const summary = calculateMonthlyAttendanceSummary(allAtts, yearMonth, empId);
        
        const presentDays = summary.presentDays || 0;
        const lateDays = summary.lateDays || 0;
        const permitDays = summary.permitDays || 0;
        const sickDays = summary.sickDays || 0;
        const alphaDays = summary.alphaDays || 0;
        const totalWorkDays = presentDays + lateDays;
        const totalLoggedDays = summary.totalRecords || (totalWorkDays + permitDays + sickDays + alphaDays);
        const totalAllowance = summary.totalAllowance || 0;

        // Persentase kedisiplinan: hadir + bobot late (90%) dibagi hari tercatat (min 1)
        const rate = totalLoggedDays > 0 
            ? Math.min(100, Math.round(((presentDays + (lateDays * 0.9)) / totalLoggedDays) * 1000) / 10)
            : 0;

        totalTeamAllowance += totalAllowance;
        totalPresentDays += presentDays;
        totalLateDays += lateDays;
        totalPermitDays += permitDays;
        totalSickDays += sickDays;
        totalAlphaDays += alphaDays;

        return {
            employeeId: empId,
            employeeUid: emp.uid || '',
            name: emp.name || 'Karyawan',
            position: emp.position || 'Staf Toko',
            role: emp.role || 'staff',
            dailyAllowanceRate: parseFloat(emp.dailyAllowance) || 0,
            presentDays,
            lateDays,
            permitDays,
            sickDays,
            alphaDays,
            totalWorkDays,
            totalLoggedDays,
            attendanceRate: rate,
            totalAllowance
        };
    });

    const totalWorkDays = totalPresentDays + totalLateDays;
    const totalAllLogged = totalWorkDays + totalPermitDays + totalSickDays + totalAlphaDays;
    const avgAttendanceRate = totalAllLogged > 0
        ? Math.min(100, Math.round(((totalPresentDays + (totalLateDays * 0.9)) / totalAllLogged) * 1000) / 10)
        : 0;

    return {
        period: yearMonth,
        periodLabel,
        items,
        totalMembers: employees.length,
        totalPresentDays,
        totalLateDays,
        totalPermitDays,
        totalSickDays,
        totalAlphaDays,
        totalWorkDays,
        totalTeamAllowance,
        avgAttendanceRate
    };
};

/**
 * Muat data absensi sebulan penuh dari cloud/lokal
 */
export const loadAttendancesForMonth = async (yearMonth = new Date().toISOString().slice(0, 7)) => {
    try {
        let allLocal = Array.isArray(appData.attendances) ? appData.attendances : [];
        if (allLocal.length === 0) {
            try {
                allLocal = JSON.parse(localStorage.getItem('freshmart_attendances') || '[]');
                if (Array.isArray(allLocal) && allLocal.length > 0) appData.attendances = allLocal;
            } catch (_) {}
        }

        try {
            const startDate = `${yearMonth}-01`;
            const endDate = `${yearMonth}-31\uf8ff`;
            const snap = await db.collection('freshmart').doc('cms_data')
                .collection('attendances')
                .where('date', '>=', startDate)
                .where('date', '<=', endDate)
                .get();

            if (snap && !snap.empty) {
                const cloudAtts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                if (!Array.isArray(appData.attendances)) appData.attendances = [];
                cloudAtts.forEach(ca => {
                    const cId = ca.attendanceId || ca.id;
                    const idx = appData.attendances.findIndex(a => (a.attendanceId || a.id) === cId);
                    if (idx >= 0) {
                        appData.attendances[idx] = { ...appData.attendances[idx], ...ca };
                    } else {
                        appData.attendances.push(ca);
                    }
                });
                try {
                    localStorage.setItem('freshmart_attendances', JSON.stringify(appData.attendances));
                } catch (_) {}
            }
        } catch (err) {
            console.warn('[HR Attendance] Fallback offline untuk rekap bulan:', yearMonth, err.message);
        }

        return calculateMonthlyTeamAttendanceRecap(yearMonth);
    } catch (err) {
        console.error('[HR Attendance] Gagal memuat absensi bulanan:', err);
        return calculateMonthlyTeamAttendanceRecap(yearMonth);
    }
};

/**
 * ─── Modal Native Bottom Sheet: Rekapitulasi Presensi & Kedisiplinan Tim ───
 */
export const openMonthlyAttendanceRecapModal = async (yearMonth = (_selectedAttendanceDate || new Date().toISOString().split('T')[0]).slice(0, 7)) => {
    let modal = el('modal-attendance-rekap');
    if (modal) modal.remove();

    sLoad();
    await loadAttendancesForMonth(yearMonth);
    hLoad();

    const recap = calculateMonthlyTeamAttendanceRecap(yearMonth);
    const store = appData.store || { name: 'TOKO PUTRI UTAMA TEKNIK' };

    modal = document.createElement('div');
    modal.id = 'modal-attendance-rekap';
    modal.className = 'fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 transition-opacity duration-200';
    modal.style.opacity = '0';

    modal.innerHTML = `
    <div id="attendance-rekap-modal-box" class="modal-bottom-sheet w-full sm:max-w-4xl bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden transform transition-all duration-200 scale-95">
        
        <!-- Pull Indicator (Mobile Native Bottom Sheet) -->
        <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto mt-2.5 mb-1 sm:hidden shrink-0"></div>

        <!-- Modal Header (Solid Clean & Anti-Truncate) -->
        <div class="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 shrink-0">
            <div class="flex items-center justify-between gap-2.5">
                <div class="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-clipboard-user text-sm sm:text-base"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                            Rekapitulasi Presensi Tim
                        </h3>
                        <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            ${esc(store.name || 'Toko Putri')} • <strong class="text-slate-700 dark:text-slate-200">${esc(recap.periodLabel)}</strong>
                        </p>
                    </div>
                </div>

                <!-- Responsive Period Pickers & Close Button (Compact Top Pill, Zero Vertical Waste) -->
                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <!-- Desktop Period Picker -->
                    <div class="hidden sm:flex items-center gap-1.5 bg-white dark:bg-slate-800 py-1 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)] text-xs"></i>
                        <input type="month" id="att-rekap-period-picker-desktop" value="${yearMonth}"
                            onchange="window.openMonthlyAttendanceRecapModal(this.value)"
                            class="bg-transparent text-xs font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer">
                    </div>
                    <!-- Mobile Period Picker -->
                    <div class="sm:hidden flex items-center gap-1 bg-white dark:bg-slate-800 py-1 px-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)] text-[10px]"></i>
                        <input type="month" id="att-rekap-period-picker" value="${yearMonth}"
                            onchange="window.openMonthlyAttendanceRecapModal(this.value)"
                            class="bg-transparent text-[11px] font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer max-w-[108px]">
                    </div>
                    <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                        class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-base flex items-center justify-center transition-all cursor-pointer shrink-0"
                        title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal Body -->
        <div class="p-3.5 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 flex-1 custom-scrollbar text-xs">
            
            <!-- 4 Bento KPI Kehadiran Bulanan (Compact Native App Bento Layout) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Rata-Rata Disiplin</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-chart-line text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${recap.avgAttendanceRate}%</p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">Tingkat kehadiran tim</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Hari Hadir</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-user-check text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${recap.totalWorkDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">${recap.totalPresentDays} Tepat, ${recap.totalLateDays} Terlambat</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Izin, Sakit &amp; Alpha</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-user-clock text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${recap.totalPermitDays + recap.totalSickDays + recap.totalAlphaDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">${recap.totalPermitDays} Iz, ${recap.totalSickDays} Sk, ${recap.totalAlphaDays} Al</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Hak Uang Makan</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono tracking-tight">${fCur(recap.totalTeamAllowance)}</p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">Siap ditarik ke Payroll</p>
                </div>
            </div>

            <!-- Realtime Search Bar Staf -->
            <div class="flex items-center justify-between gap-2">
                <div class="relative flex-1 min-w-0">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                    <input type="text" id="att-rekap-search" placeholder="Cari nama / jabatan..."
                        oninput="window.filterAttendanceRecapTable(this.value)"
                        class="w-full h-10 min-h-[40px] pl-8 pr-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <span class="h-10 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0 whitespace-nowrap flex items-center">
                    Total: <strong class="text-slate-800 dark:text-slate-200 ml-1">${recap.totalMembers} Staf</strong>
                </span>
            </div>

            <!-- Matriks Tabel Presensi Karyawan -->
            <div class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs bg-white dark:bg-slate-800/60">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left text-xs whitespace-nowrap">
                        <thead class="bg-slate-50 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 font-black uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-2.5 px-3 text-center w-10">No</th>
                                <th class="py-2.5 px-3">Karyawan</th>
                                <th class="py-2.5 px-2 text-center">Hadir</th>
                                <th class="py-2.5 px-2 text-center">Terlambat</th>
                                <th class="py-2.5 px-2 text-center">Izin</th>
                                <th class="py-2.5 px-2 text-center">Sakit</th>
                                <th class="py-2.5 px-2 text-center">Alpha</th>
                                <th class="py-2.5 px-3 text-center">Total Masuk</th>
                                <th class="py-2.5 px-3 text-center">% Disiplin</th>
                                <th class="py-2.5 px-3 text-right">Hak Tunjangan</th>
                            </tr>
                        </thead>
                        <tbody id="att-rekap-tbody" class="divide-y divide-slate-100 dark:divide-slate-700/60">
                            ${recap.items.map((it, idx) => {
                                const rateClass = it.attendanceRate >= 95 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300' : (it.attendanceRate >= 80 ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300');
                                const isRowOwner = it.role === 'owner' || it.employeeId === 'OWN-001';
                                const initials = esc((it.name || 'K').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase());
                                const rowAvatar = isRowOwner 
                                    ? '<i class="fa-solid fa-crown text-amber-500 text-[10px]"></i>' 
                                    : initials;
                                return `
                                <tr class="att-rekap-row hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors" data-name="${esc(it.name.toLowerCase())}" data-pos="${esc(it.position.toLowerCase())}">
                                    <td class="py-2.5 px-3 text-center font-mono text-slate-400">${idx + 1}</td>
                                    <td class="py-2.5 px-3">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-7 h-7 rounded-xl flex items-center justify-center font-black text-[10px] shrink-0 border ${isRowOwner ? 'border-amber-300 dark:border-amber-600/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-500' : 'border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]'}">
                                                ${rowAvatar}
                                            </div>
                                            <div class="min-w-0">
                                                <div class="font-black text-slate-800 dark:text-white truncate">${esc(it.name)}</div>
                                                <div class="text-[10px] text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                                                    <span class="font-mono">${esc(it.employeeId)}</span>
                                                    <span class="text-slate-300 dark:text-slate-600">•</span>
                                                    <span class="truncate">${esc(it.position)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold text-slate-800 dark:text-slate-100">${it.presentDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold ${it.lateDays > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}">${it.lateDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${it.permitDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${it.sickDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold ${it.alphaDays > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-400'}">${it.alphaDays}</td>
                                    <td class="py-2.5 px-3 text-center font-mono font-black text-slate-800 dark:text-white">${it.totalWorkDays} Hari</td>
                                    <td class="py-2.5 px-3 text-center">
                                        <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border ${rateClass}">
                                            ${it.attendanceRate}%
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900 dark:text-white">${fCur(it.totalAllowance)}</td>
                                </tr>`;
                            }).join('')}
                        </tbody>
                        <tfoot class="bg-slate-50 dark:bg-slate-800/90 font-black text-slate-800 dark:text-white border-t-2 border-slate-200 dark:border-slate-700">
                            <tr>
                                <td colspan="2" class="py-2.5 px-3 text-right font-black">TOTAL TIM (${recap.totalMembers} Staf):</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${recap.totalPresentDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black ${recap.totalLateDays > 0 ? 'text-amber-600 dark:text-amber-400' : ''}">${recap.totalLateDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${recap.totalPermitDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${recap.totalSickDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black ${recap.totalAlphaDays > 0 ? 'text-rose-600 dark:text-rose-400' : ''}">${recap.totalAlphaDays}</td>
                                <td class="py-2.5 px-3 text-center font-mono font-black">${recap.totalWorkDays} Hari</td>
                                <td class="py-2.5 px-3 text-center">
                                    <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border ${recap.avgAttendanceRate >= 90 ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-amber-100 text-amber-800 border-amber-300'}">
                                        ${recap.avgAttendanceRate}%
                                    </span>
                                </td>
                                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900 dark:text-white">${fCur(recap.totalTeamAllowance)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal Footer (Single Clean Responsive Action Bar) -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 shrink-0 bg-white dark:bg-slate-900 pb-[max(0.875rem,env(safe-area-inset-bottom))]">
            <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                class="min-h-[44px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer shrink-0">
                Tutup
            </button>
            <button onclick="window.exportMonthlyAttendanceCSV('${yearMonth}')"
                class="flex-1 min-h-[44px] px-3 sm:px-4 rounded-xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 whitespace-nowrap">
                <i class="fa-solid fa-file-excel text-emerald-600 text-xs"></i>
                <span>Ekspor CSV</span>
            </button>
            <button onclick="window.openDocPreview ? window.openDocPreview('attendance_recap', '${yearMonth}') : window.printMonthlyAttendanceA4('${yearMonth}')"
                class="btn-native-action flex-1 min-h-[44px] px-3.5 sm:px-5 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span class="hidden sm:inline">Pratinjau &amp; Cetak A4</span>
                <span class="sm:hidden">Preview A4</span>
            </button>
        </div>
    </div>`;

    document.body.appendChild(modal);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('attendanceRecap');
    }

    setTimeout(() => {
        modal.style.opacity = '1';
        const box = el('attendance-rekap-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeMonthlyAttendanceRecapModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-attendance-rekap');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('attendanceRecap', fH, doClose);
    } else {
        doClose();
    }
};

export const filterAttendanceRecapTable = (query = '') => {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.att-rekap-row');
    rows.forEach(r => {
        const name = r.getAttribute('data-name') || '';
        const pos = r.getAttribute('data-pos') || '';
        if (!q || name.includes(q) || pos.includes(q)) {
            r.classList.remove('hidden');
        } else {
            r.classList.add('hidden');
        }
    });
};

/**
 * ─── 1-Klik Ekspor Rekapitulasi Presensi ke Format CSV / Excel ───
 */
export const exportMonthlyAttendanceCSV = (yearMonth = new Date().toISOString().slice(0, 7)) => {
    const recap = calculateMonthlyTeamAttendanceRecap(yearMonth);
    const storeName = appData.store?.name || 'TOKO PUTRI UTAMA TEKNIK';

    const header = [
        'No',
        'ID Karyawan',
        'Nama Karyawan',
        'Jabatan',
        'Role',
        'Hadir (Hari)',
        'Terlambat (Hari)',
        'Izin (Hari)',
        'Sakit (Hari)',
        'Alpha (Hari)',
        'Total Masuk (Hari)',
        'Disiplin Kehadiran (%)',
        'Total Uang Makan / Tunjangan (Rp)'
    ];

    const rows = recap.items.map((it, idx) => [
        idx + 1,
        `"${it.employeeId}"`,
        `"${(it.name || '').replace(/"/g, '""')}"`,
        `"${(it.position || '').replace(/"/g, '""')}"`,
        `"${it.role}"`,
        it.presentDays,
        it.lateDays,
        it.permitDays,
        it.sickDays,
        it.alphaDays,
        it.totalWorkDays,
        `"${it.attendanceRate}%"`,
        it.totalAllowance
    ]);

    // Total Row
    rows.push([
        '',
        '"TOTAL"',
        `"${recap.totalMembers} Staf"`,
        '""',
        '""',
        recap.totalPresentDays,
        recap.totalLateDays,
        recap.totalPermitDays,
        recap.totalSickDays,
        recap.totalAlphaDays,
        recap.totalWorkDays,
        `"${recap.avgAttendanceRate}%"`,
        recap.totalTeamAllowance
    ]);

    const csvContent = '\uFEFF' + [
        `"REKAPITULASI PRESENSI & KEDISIPLINAN KARYAWAN"`,
        `"Toko: ${storeName.replace(/"/g, '""')}"`,
        `"Periode: ${recap.periodLabel}"`,
        `"Tanggal Ekspor: ${new Date().toLocaleDateString('id-ID')}"`,
        '',
        header.join(','),
        ...rows.map(r => r.join(','))
    ].join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const cleanStore = storeName.replace(/[^a-zA-Z0-9]/g, '_');
    a.download = `Rekap_Presensi_${cleanStore}_${yearMonth}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Rekap presensi periode ${recap.periodLabel} berhasil diekspor ke CSV!`, 'success');
};

/**
 * ─── Cetak Dokumen Rekapitulasi Presensi Standar A4 Landscape ───
 */
export const printMonthlyAttendanceA4 = (yearMonth = new Date().toISOString().slice(0, 7)) => {
    if (typeof window !== 'undefined' && typeof window.openDocPreview === 'function') {
        window.openDocPreview('attendance_recap', yearMonth);
        return;
    }
    const recap = calculateMonthlyTeamAttendanceRecap(yearMonth);
    const store = appData.store || { name: 'TOKO PUTRI UTAMA TEKNIK' };
    const datePrinted = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const html = `<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Rekap Presensi - ${esc(recap.periodLabel)} - ${esc(store.name || 'Toko Putri')}</title>
        <style>
            @page {
                size: A4 landscape;
                margin: 12mm 15mm;
            }
            * { box-sizing: border-box; }
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
                margin: 0;
                padding: 20px;
                color: #0f172a;
                background: #fff;
                font-size: 11px;
                line-height: 1.4;
            }
            .kop {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #0f172a;
                padding-bottom: 12px;
                margin-bottom: 16px;
            }
            .kop-title {
                font-size: 18px;
                font-weight: 900;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                color: #0f172a;
            }
            .kop-sub {
                font-size: 11px;
                color: #475569;
                margin-top: 2px;
            }
            .doc-badge {
                display: inline-block;
                padding: 4px 12px;
                border: 1.5px solid #0f172a;
                font-weight: 900;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-radius: 6px;
                margin-bottom: 4px;
            }
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
                margin-bottom: 16px;
            }
            .kpi-card {
                border: 1px solid #cbd5e1;
                border-radius: 8px;
                padding: 10px 14px;
                background: #f8fafc;
            }
            .kpi-label {
                font-size: 9.5px;
                font-weight: 800;
                text-transform: uppercase;
                color: #64748b;
            }
            .kpi-val {
                font-size: 16px;
                font-weight: 900;
                margin-top: 2px;
                color: #0f172a;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            th {
                background: #f1f5f9;
                border: 1px solid #cbd5e1;
                padding: 8px 10px;
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
                text-align: center;
            }
            td {
                border: 1px solid #cbd5e1;
                padding: 7px 10px;
                font-size: 10.5px;
            }
            .text-left { text-align: left; }
            .text-center { text-align: center; }
            .text-right { text-align: right; }
            .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
            .badge-rate {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 10px;
            }
            .rate-green { background: #dcfce7; color: #166534; }
            .rate-amber { background: #fef3c7; color: #92400e; }
            .rate-rose { background: #ffe4e6; color: #9f1239; }
            .sign-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                text-align: center;
                margin-top: 30px;
                page-break-inside: avoid;
            }
            .sign-line {
                border-bottom: 1px solid #94a3b8;
                width: 60%;
                margin: 50px auto 6px auto;
            }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body onload="window.print();">
        <div class="kop">
            <div>
                <div class="kop-title">${esc(store.name || 'TOKO PUTRI UTAMA TEKNIK')}</div>
                <div class="kop-sub">${esc(store.address || 'Pusat Bahan Bangunan & Alat Teknik')}</div>
                <div class="kop-sub">WhatsApp: ${esc(store.phone || store.wa || '-')}</div>
            </div>
            <div style="text-align: right;">
                <div class="doc-badge">REKAPITULASI PRESENSI KARYAWAN</div>
                <div style="font-size: 11px; color: #475569;">Periode: <strong>${esc(recap.periodLabel)}</strong></div>
                <div style="font-size: 10px; color: #64748b; margin-top: 2px;">Dicetak: ${datePrinted}</div>
            </div>
        </div>

        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-label">Rata-Rata Disiplin Kehadiran</div>
                <div class="kpi-val" style="color: #059669;">${recap.avgAttendanceRate}%</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Hari Masuk Tim</div>
                <div class="kpi-val">${recap.totalWorkDays} Hari Kerja</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Izin / Sakit / Alpha</div>
                <div class="kpi-val" style="color: #475569;">${recap.totalPermitDays} / ${recap.totalSickDays} / ${recap.totalAlphaDays}</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Akumulasi Uang Makan / Tunjangan</div>
                <div class="kpi-val font-mono" style="color: #059669;">${fCur(recap.totalTeamAllowance)}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 35px;">No</th>
                    <th class="text-left">Karyawan</th>
                    <th class="text-left">Jabatan</th>
                    <th>Hadir</th>
                    <th>Terlambat</th>
                    <th>Izin</th>
                    <th>Sakit</th>
                    <th>Alpha</th>
                    <th>Total Masuk</th>
                    <th>% Kehadiran</th>
                    <th class="text-right">Hak Tunjangan (Rp)</th>
                </tr>
            </thead>
            <tbody>
                ${recap.items.map((it, idx) => {
                    const rateClass = it.attendanceRate >= 95 ? 'rate-green' : (it.attendanceRate >= 80 ? 'rate-amber' : 'rate-rose');
                    return `
                    <tr>
                        <td class="text-center font-mono">${idx + 1}</td>
                        <td class="text-left font-bold">
                            ${esc(it.name)}
                            <span style="font-size: 9.5px; color: #64748b; font-weight: normal; margin-left: 4px;">(${esc(it.employeeId)})</span>
                        </td>
                        <td class="text-left text-slate-600">${esc(it.position)}</td>
                        <td class="text-center font-bold" style="color: #16a34a;">${it.presentDays}</td>
                        <td class="text-center font-bold" style="color: #d97706;">${it.lateDays}</td>
                        <td class="text-center text-slate-600">${it.permitDays}</td>
                        <td class="text-center text-slate-600">${it.sickDays}</td>
                        <td class="text-center font-bold" style="color: #e11d48;">${it.alphaDays}</td>
                        <td class="text-center font-bold font-mono">${it.totalWorkDays} Hari</td>
                        <td class="text-center">
                            <span class="badge-rate ${rateClass}">${it.attendanceRate}%</span>
                        </td>
                        <td class="text-right font-bold font-mono">${fCur(it.totalAllowance)}</td>
                    </tr>`;
                }).join('')}
                <tr style="background: #f8fafc; font-weight: 900; border-top: 2px solid #94a3b8;">
                    <td colspan="3" class="text-right" style="padding: 10px;">TOTAL TIM (${recap.totalMembers} Staf):</td>
                    <td class="text-center font-mono" style="color: #16a34a;">${recap.totalPresentDays}</td>
                    <td class="text-center font-mono" style="color: #d97706;">${recap.totalLateDays}</td>
                    <td class="text-center font-mono">${recap.totalPermitDays}</td>
                    <td class="text-center font-mono">${recap.totalSickDays}</td>
                    <td class="text-center font-mono" style="color: #e11d48;">${recap.totalAlphaDays}</td>
                    <td class="text-center font-mono">${recap.totalWorkDays} Hari</td>
                    <td class="text-center">
                        <span class="badge-rate ${recap.avgAttendanceRate >= 95 ? 'rate-green' : 'rate-amber'}">${recap.avgAttendanceRate}%</span>
                    </td>
                    <td class="text-right font-mono" style="color: #059669;">${fCur(recap.totalTeamAllowance)}</td>
                </tr>
            </tbody>
        </table>

        <div class="sign-grid">
            <div>
                <div>Dibuat oleh (Pengelola HR / Kasir Kepala):</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Staf Administrasi & HR</div>
                <div style="font-size: 10.5px; color: #64748b;">${esc(store.name || 'Toko Putri')}</div>
            </div>
            <div>
                <div>Mengetahui & Disetujui oleh:</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 10.5px; color: #64748b;">${esc(store.name || 'Toko Putri')}</div>
            </div>
        </div>
    </body>
    </html>`;

    const pWin = window.open('', '_blank');
    if (pWin) {
        pWin.document.write(html);
        pWin.document.close();
    }
};

// ─── Expose Global Window ────────────────────────────────────
if (typeof window !== 'undefined') {
    window.ATTENDANCE_STATUSES              = ATTENDANCE_STATUSES;
    window.generateAttendanceId             = generateAttendanceId;
    window.loadAttendancesForDate           = loadAttendancesForDate;
    window.loadAttendancesForMonth          = loadAttendancesForMonth;
    window.renderAttendanceView             = renderAttendanceView;
    window.navigateAttendanceDate           = navigateAttendanceDate;
    window.onAttendanceDateChanged          = onAttendanceDateChanged;
    window.setQuickAttendanceStatus         = setQuickAttendanceStatus;
    window.saveSingleAttendance             = saveSingleAttendance;
    window.bulkMarkAllPresent               = bulkMarkAllPresent;
    window.autoRecordCashierShiftAttendance = autoRecordCashierShiftAttendance;
    window.calculateMonthlyAttendanceSummary = calculateMonthlyAttendanceSummary;
    window.calculateMonthlyTeamAttendanceRecap = calculateMonthlyTeamAttendanceRecap;
    window.openMonthlyAttendanceRecapModal  = openMonthlyAttendanceRecapModal;
    window.closeMonthlyAttendanceRecapModal = closeMonthlyAttendanceRecapModal;
    window.filterAttendanceRecapTable       = filterAttendanceRecapTable;
    window.exportMonthlyAttendanceCSV       = exportMonthlyAttendanceCSV;
    window.printMonthlyAttendanceA4         = printMonthlyAttendanceA4;
}


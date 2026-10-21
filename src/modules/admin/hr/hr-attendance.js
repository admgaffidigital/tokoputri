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
import { verifyOwnerAuthority } from './hr-schema.js';

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

                return `
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                            style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            ${initials}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white">${esc(emp.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${esc(emp.employeeId)}
                                </span>
                                ${isRecorded ? `
                                    <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <i class="fa-solid fa-circle-check"></i> Tersimpan
                                    </span>
                                ` : `
                                    <span class="text-[9px] font-bold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-clock"></i> Belum Disimpan
                                    </span>
                                `}
                            </div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex-wrap">
                                <span class="font-semibold text-slate-700 dark:text-slate-300">${esc(emp.position)}</span>
                                <span>•</span>
                                <span>Uang Makan Harian: <strong class="text-emerald-600 dark:text-emerald-400">${fCur(dailyAllowance)}</strong></span>
                                ${att?.source === 'pos_shift' ? `<span>•</span><span class="text-[10px] text-blue-500 font-bold"><i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift</span>` : ''}
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

// ─── Expose Global Window ────────────────────────────────────
if (typeof window !== 'undefined') {
    window.ATTENDANCE_STATUSES              = ATTENDANCE_STATUSES;
    window.generateAttendanceId             = generateAttendanceId;
    window.loadAttendancesForDate           = loadAttendancesForDate;
    window.renderAttendanceView             = renderAttendanceView;
    window.navigateAttendanceDate           = navigateAttendanceDate;
    window.onAttendanceDateChanged          = onAttendanceDateChanged;
    window.setQuickAttendanceStatus         = setQuickAttendanceStatus;
    window.saveSingleAttendance             = saveSingleAttendance;
    window.bulkMarkAllPresent               = bulkMarkAllPresent;
    window.autoRecordCashierShiftAttendance = autoRecordCashierShiftAttendance;
    window.calculateMonthlyAttendanceSummary = calculateMonthlyAttendanceSummary;
}

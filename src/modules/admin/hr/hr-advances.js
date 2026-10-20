/**
 * ============================================================
 * MODUL HRD: BUKU KASBON & PINJAMAN KARYAWAN (SALARY ADVANCES)
 * Toko Putri v1.19.0
 * Fitur:
 * 1. Pengajuan & Pencatatan Kasbon Karyawan (Admin, Kasir, Staf, Owner)
 * 2. Skema Potongan Fleksibel: Sekali Potong Payroll atau Cicilan Tenor Multi-Bulan
 * 3. Integrasi Hulu-ke-Hilir: Otomatis Mencatat Pengeluaran Kas Toko di expenses.js
 * 4. Tracking Sisa Pinjaman & Riwayat Pembayaran/Pelunasan
 * 5. Standar Native Bottom Sheet & Bento UI/UX Ergonomis
 * ============================================================
 */

import { appData } from '../../../core/state.js';
import { db, firebase, auth, ADMIN_UID } from '../../../config/firebase.js';
import { 
    el, esc, fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../../core/utils.js';
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
import { getOwnerEmployeeProfile, normalizeEmployeeProfile, verifyOwnerAuthority } from './hr-schema.js';

let _activeAdvanceFilter = 'active'; // 'all' | 'active' | 'paid'
let _cachedAdvances = [];
let _activeViewingAdvanceId = null;

/**
 * Generator ID Unik Kasbon Karyawan (Contoh: KSB-2026-001)
 */
export const generateAdvanceId = (existingList = []) => {
    const year = new Date().getFullYear();
    const prefix = `KSB-${year}`;
    let maxNum = 0;
    const regex = new RegExp(`^KSB-${year}-(\\d+)`, 'i');

    existingList.forEach(item => {
        const idStr = String(item?.advanceId || item?.id || '').trim();
        const m = idStr.match(regex);
        if (m && m[1]) {
            const num = parseInt(m[1], 10);
            if (!isNaN(num) && num > maxNum) maxNum = num;
        }
    });

    const nextNum = maxNum + 1;
    return `${prefix}-${String(nextNum).padStart(3, '0')}`;
};

/**
 * Dapatkan daftar seluruh karyawan aktif toko (termasuk Owner)
 */
export const getAllStoreEmployees = () => {
    const list = Array.isArray(appData.employees) ? [...appData.employees] : [];
    const owner = getOwnerEmployeeProfile(appData);

    const hasOwner = list.some(e => e.employeeId === 'OWN-001' || e.role === 'owner');
    if (!hasOwner) {
        list.unshift(owner);
    }
    return list.filter(e => e.isActive !== false);
};

/**
 * Muat data kasbon karyawan dari Firestore & sinkronkan ke appData
 */
export const loadSalaryAdvances = async () => {
    try {
        let advances = [];
        try {
            const snap = await db.collection('freshmart').doc('cms_data')
                .collection('salary_advances')
                .orderBy('createdAt', 'desc')
                .get();
            advances = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (_) {
            advances = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];
        }

        _cachedAdvances = advances;
        appData.salaryAdvances = advances;
        return advances;
    } catch (err) {
        console.error('[HR Advances] Gagal memuat data kasbon:', err);
        _cachedAdvances = Array.isArray(appData.salaryAdvances) ? appData.salaryAdvances : [];
        return _cachedAdvances;
    }
};

/**
 * Render Tampilan Utama Buku Kasbon Karyawan
 */
export const renderSalaryAdvancesView = async (container) => {
    if (!container) return;

    container.innerHTML = `
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat buku kasbon karyawan...</p>
    </div>`;

    await loadSalaryAdvances();

    const advances = _cachedAdvances;
    const activeAdvances = advances.filter(a => a.status === 'active' && (parseFloat(a.remainingAmount) || 0) > 0);
    const totalActiveAmount = activeAdvances.reduce((acc, curr) => acc + (parseFloat(curr.remainingAmount) || 0), 0);
    const totalBorrowers = new Set(activeAdvances.map(a => a.employeeId || a.employeeName)).size;
    const totalMonthlyDeduction = activeAdvances.reduce((acc, curr) => acc + Math.min(parseFloat(curr.monthlyInstallment) || 0, parseFloat(curr.remainingAmount) || 0), 0);

    let filtered = advances;
    if (_activeAdvanceFilter === 'active') {
        filtered = advances.filter(a => a.status === 'active' && (parseFloat(a.remainingAmount) || 0) > 0);
    } else if (_activeAdvanceFilter === 'paid') {
        filtered = advances.filter(a => a.status === 'paid' || (parseFloat(a.remainingAmount) || 0) <= 0);
    }

    container.innerHTML = `
    <div class="space-y-4">
        <!-- Bento Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Kasbon Aktif</span>
                <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400">${fCur(totalActiveAmount)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sisa piutang staf toko</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Karyawan Meminjam</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${totalBorrowers} <span class="text-xs font-medium text-slate-400">Orang</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Kasbon belum lunas</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Potongan Payroll Bln Ini</span>
                <p class="text-base sm:text-lg font-black text-[var(--color-primary)]">${fCur(totalMonthlyDeduction)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Otomatis dipotong gaji</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Pengajuan</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${advances.length} <span class="text-xs font-medium text-slate-400">Riwayat</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sepanjang masa toko</span>
            </div>
        </div>

        <!-- Action Bar & Filter -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterAdvanceStatus('active')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${
                        _activeAdvanceFilter === 'active' 
                            ? 'text-white shadow-xs' 
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                    style="${_activeAdvanceFilter === 'active' ? 'background: var(--color-primary); color: #fff;' : ''}">
                    <i class="fa-solid fa-clock-rotate-left text-[10px]"></i>
                    <span>Kasbon Aktif (${activeAdvances.length})</span>
                </button>
                <button onclick="window.filterAdvanceStatus('paid')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${
                        _activeAdvanceFilter === 'paid' 
                            ? 'text-white shadow-xs' 
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                    style="${_activeAdvanceFilter === 'paid' ? 'background: var(--color-primary); color: #fff;' : ''}">
                    <i class="fa-solid fa-circle-check text-[10px] text-emerald-500"></i>
                    <span>Sudah Lunas</span>
                </button>
                <button onclick="window.filterAdvanceStatus('all')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${
                        _activeAdvanceFilter === 'all' 
                            ? 'text-white shadow-xs' 
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                    style="${_activeAdvanceFilter === 'all' ? 'background: var(--color-primary); color: #fff;' : ''}">
                    <i class="fa-solid fa-list text-[10px]"></i>
                    <span>Semua Catatan (${advances.length})</span>
                </button>
            </div>

            <button onclick="window.openSalaryAdvanceFormModal()"
                class="px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto hover:opacity-95"
                style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-hand-holding-dollar text-xs"></i>
                <span>+ Ajukan Kasbon Baru</span>
            </button>
        </div>

        <!-- List Kasbon Cards -->
        <div id="salary-advances-list" class="space-y-3">
            ${renderAdvanceCardsHtml(filtered)}
        </div>
    </div>`;
};

/**
 * Filter status kasbon
 */
export const filterAdvanceStatus = (status) => {
    _activeAdvanceFilter = status;
    const panel = el('cashier-panel-advances');
    if (panel) renderSalaryAdvancesView(panel);
};

/**
 * Render Kartu List Kasbon
 */
const renderAdvanceCardsHtml = (list) => {
    if (!list || list.length === 0) {
        return `
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Tidak ada catatan kasbon pada filter ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "+ Ajukan Kasbon Baru" untuk mencatat pinjaman staf toko</p>
        </div>`;
    }

    return list.map(adv => {
        const remaining = Math.max(0, parseFloat(adv.remainingAmount) || 0);
        const original = Math.max(1, parseFloat(adv.amount) || 1);
        const paid = Math.max(0, original - remaining);
        const pct = Math.min(100, Math.round((paid / original) * 100));
        const isPaid = remaining <= 0 || adv.status === 'paid';
        const sourceLabel = adv.disbursementSource === 'bank' ? 'Transfer Bank' : adv.disbursementSource === 'owner' ? 'Dana Owner' : 'Kas Toko (Tunai)';
        const dateStr = adv.requestDate || '-';

        return `
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-base shrink-0 shadow-2xs font-black ${
                    isPaid ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-800'}">
                    <i class="fa-solid ${isPaid ? 'fa-circle-check' : 'fa-hand-holding-dollar'}"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white truncate">${esc(adv.employeeName || 'Karyawan')}</span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${esc(adv.employeeId || 'EMP')}
                        </span>
                        <span class="font-mono text-[10px] text-slate-400">#${esc(adv.advanceId || adv.id)}</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                            isPaid 
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200' 
                                : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200'}">
                            <span class="w-1.5 h-1.5 rounded-full ${isPaid ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}"></span>
                            ${isPaid ? 'Lunas' : 'Belum Lunas'}
                        </span>
                    </div>

                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-200">${esc(adv.position || 'Staf Toko')}</span>
                        <span>•</span>
                        <span>Pinjaman: <strong class="text-slate-900 dark:text-white">${fCur(adv.amount)}</strong></span>
                        <span>•</span>
                        <span>Sisa: <strong class="${isPaid ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">${fCur(remaining)}</strong></span>
                        <span>•</span>
                        <span>Potongan: <strong class="text-[var(--color-primary)] font-bold">${fCur(adv.monthlyInstallment)}/bln</strong></span>
                    </div>

                    <!-- Progress Bar Cicilan -->
                    <div class="pt-1 max-w-md">
                        <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                            <span>Terbayar: ${fCur(paid)}</span>
                            <span class="font-bold text-slate-600 dark:text-slate-300">${pct}% Lunas</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-500 ${isPaid ? 'bg-emerald-500' : ''}" style="width: ${pct}%; ${isPaid ? '' : 'background: var(--color-primary)'}"></div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 flex-wrap pt-0.5">
                        <span class="flex items-center gap-1"><i class="fa-solid fa-calendar-day text-[10px]"></i> Tgl: ${esc(dateStr)}</span>
                        <span>•</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[10px]"></i> Sumber: ${esc(sourceLabel)}</span>
                        ${adv.reason ? `<span>•</span><span class="italic text-slate-500 truncate max-w-xs">"${esc(adv.reason)}"</span>` : ''}
                    </div>
                </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openAdvanceDetailModal('${esc(adv.advanceId || adv.id)}')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                    <i class="fa-solid fa-file-invoice text-[10px]" style="color: var(--color-primary)"></i>
                    <span>Riwayat &amp; Rincian</span>
                </button>
                ${!isPaid ? `
                <button onclick="window.promptManualRepayment('${esc(adv.advanceId || adv.id)}', ${remaining})"
                    class="px-3.5 py-2 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-money-bill-transfer text-[10px]"></i>
                    <span>Bayar Kasbon</span>
                </button>` : ''}
                <button onclick="window.deleteSalaryAdvance('${esc(adv.advanceId || adv.id)}', '${esc(adv.employeeName || 'Karyawan')}')"
                    title="Hapus Catatan Kasbon"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
    }).join('');
};

/**
 * ─── Modal Form Tambah Kasbon Baru ───────────────────────────
 */
export const openSalaryAdvanceFormModal = () => {
    if (!verifyOwnerAuthority('mencatat kasbon karyawan')) return;

    const employees = getAllStoreEmployees();
    if (employees.length === 0) {
        showToast('Belum ada staf terdaftar di toko. Tambahkan staf terlebih dahulu.', 'warning');
        return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const autoAdvanceId = generateAdvanceId(_cachedAdvances);

    const existingModal = el('modal-salary-advance-form');
    if (existingModal) existingModal.remove();

    document.body.insertAdjacentHTML('beforeend', `
    <div id="modal-salary-advance-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeSalaryAdvanceFormModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Form Pengajuan Kasbon Karyawan</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${esc(autoAdvanceId)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Pencatatan pinjaman operasional staf toko</p>
                    </div>
                </div>
                <button onclick="window.closeSalaryAdvanceFormModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Pilih Karyawan Peminjam <span class="text-rose-500">*</span></label>
                    <select id="adv-employee-select" onchange="window.onAdvanceEmployeeChange()"
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        ${employees.map(e => `
                            <option value="${esc(e.uid || e.employeeId)}" data-empid="${esc(e.employeeId)}" data-name="${esc(e.name)}" data-role="${esc(e.role)}" data-position="${esc(e.position)}" data-salary="${e.baseSalary || 0}">
                                ${esc(e.name)} — ${esc(e.position)} (${esc(e.employeeId)}) [Gaji: ${fCur(e.baseSalary || 0)}]
                            </option>
                        `).join('')}
                    </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tanggal Pencairan <span class="text-rose-500">*</span></label>
                        <input id="adv-request-date" type="date" value="${todayStr}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nominal Kasbon (Rp) <span class="text-rose-500">*</span></label>
                        <input id="adv-amount" type="number" min="10000" step="50000" placeholder="Contoh: 500000"
                            oninput="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Skema Tenor Potongan Gaji</label>
                        <select id="adv-tenor-select" onchange="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="1">1 Bulan (Lunas Sekali Potong)</option>
                            <option value="2">2 Bulan (Cicilan 2x)</option>
                            <option value="3">3 Bulan (Cicilan 3x)</option>
                            <option value="4">4 Bulan (Cicilan 4x)</option>
                            <option value="6">6 Bulan (Cicilan 6x)</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Potongan Tiap Bulan (Rp)</label>
                        <input id="adv-installment" type="number" min="0" step="10000"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)] font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Sumber Dana Pencairan</label>
                        <select id="adv-disbursement-source"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="cash">Kas Laci Toko (Tunai)</option>
                            <option value="bank">Transfer Rekening Bank Toko</option>
                            <option value="owner">Dana Pribadi / Talangan Owner</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Keperluan / Alasan Pinjaman</label>
                        <input id="adv-reason" type="text" placeholder="Contoh: Kebutuhan darurat / biaya keluarga"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Opsi Integrasi Buku Kas Toko -->
                <div class="p-3.5 rounded-2xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2)">
                    <label class="flex items-start gap-2.5 cursor-pointer">
                        <input id="adv-sync-expense" type="checkbox" checked class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="text-xs">
                            <span class="font-black text-slate-900 dark:text-white">Catat Otomatis ke Buku Kas Pengeluaran Toko (expenses.js)</span>
                            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                                Dana kasbon yang dicairkan langsung memotong saldo kas toko dan masuk ke laporan beban kas operasional kategori "Kasbon &amp; Pinjaman Karyawan".
                            </p>
                        </div>
                    </label>
                </div>

                <div id="adv-form-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeSalaryAdvanceFormModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveSalaryAdvance()" id="save-adv-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Cairkan Kasbon
                </button>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('advanceForm');
    }

    setTimeout(() => {
        const box = el('salary-advance-modal-box');
        if (box) box.classList.remove('scale-95');
        const amtInput = el('adv-amount');
        if (amtInput) amtInput.focus();
    }, 10);
};

export const closeSalaryAdvanceFormModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-salary-advance-form');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('advanceForm', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Kalkulasi otomatis potongan per bulan berdasarkan nominal dan tenor
 */
export const calculateAdvanceInstallment = () => {
    const amt = parseFloat(el('adv-amount')?.value) || 0;
    const tenor = parseInt(el('adv-tenor-select')?.value, 10) || 1;
    const instEl = el('adv-installment');
    if (instEl && amt > 0) {
        instEl.value = Math.ceil(amt / tenor);
    }
};

export const onAdvanceEmployeeChange = () => {
    calculateAdvanceInstallment();
};

/**
 * Simpan Pengajuan Kasbon Baru ke Cloud & Buku Kas
 */
export const saveSalaryAdvance = async () => {
    if (!verifyOwnerAuthority('mencatat kasbon karyawan')) return;

    const empSelect = el('adv-employee-select');
    const selectedOpt = empSelect?.options[empSelect.selectedIndex];
    if (!selectedOpt) {
        showToast('Pilih karyawan terlebih dahulu', 'warning');
        return;
    }

    const employeeUid = empSelect.value;
    const employeeId = selectedOpt.getAttribute('data-empid') || 'EMP-001';
    const employeeName = selectedOpt.getAttribute('data-name') || 'Karyawan';
    const employeeRole = selectedOpt.getAttribute('data-role') || 'staff';
    const position = selectedOpt.getAttribute('data-position') || 'Staf Toko';
    const requestDate = el('adv-request-date')?.value || new Date().toISOString().split('T')[0];
    const amount = Math.max(0, parseFloat(el('adv-amount')?.value) || 0);
    const tenor = parseInt(el('adv-tenor-select')?.value, 10) || 1;
    const monthlyInstallment = Math.max(0, parseFloat(el('adv-installment')?.value) || Math.ceil(amount / tenor));
    const disbursementSource = el('adv-disbursement-source')?.value || 'cash';
    const reason = el('adv-reason')?.value?.trim() || 'Kasbon Operasional Karyawan';
    const syncExpense = el('adv-sync-expense')?.checked !== false;

    const errEl = el('adv-form-error');
    const btn = el('save-adv-btn');

    if (amount < 10000) {
        if (errEl) { errEl.textContent = 'Nominal kasbon minimal Rp 10.000.'; errEl.classList.remove('hidden'); }
        return;
    }

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'; }
    sLoad('Mencatat kasbon karyawan...');

    try {
        const advanceId = generateAdvanceId(_cachedAdvances);
        let expenseId = null;

        // 1. Integrasi otomatis ke Buku Kas Beban Operasional jika dicentang
        if (syncExpense) {
            expenseId = 'exp_adv_' + Date.now();
            const expEntry = {
                id: expenseId,
                date: requestDate,
                category: 'kasbon',
                amount: amount,
                desc: `Pencairan Kasbon: ${employeeName} (${employeeId}) - ${reason}`,
                source: disbursementSource,
                recipient: employeeName,
                receiptUrl: '',
                advanceId: advanceId,
                createdAt: new Date().toISOString()
            };

            if (!Array.isArray(appData.expenses)) appData.expenses = [];
            appData.expenses.unshift(expEntry);
            try {
                await saveApp();
            } catch (_) {}
        }

        const advanceDoc = {
            advanceId,
            employeeUid,
            employeeId,
            employeeName,
            employeeRole,
            position,
            requestDate,
            amount,
            monthlyInstallment,
            totalTenorMonths: tenor,
            remainingAmount: amount,
            reason,
            status: 'active',
            disbursementSource,
            expenseId,
            repayments: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: auth.currentUser?.uid || 'owner'
        };

        // Simpan ke Firestore
        try {
            await db.collection('freshmart').doc('cms_data')
                .collection('salary_advances')
                .doc(advanceId)
                .set(advanceDoc);
        } catch (_) {}

        if (!Array.isArray(appData.salaryAdvances)) appData.salaryAdvances = [];
        appData.salaryAdvances.unshift({ id: advanceId, ...advanceDoc });
        _cachedAdvances = appData.salaryAdvances;

        closeSalaryAdvanceFormModal();
        showToast(`Kasbon Rp ${fCur(amount)} untuk ${employeeName} berhasil dicatat!`, 'success');

        const panel = el('cashier-panel-advances');
        if (panel) renderSalaryAdvancesView(panel);

    } catch (err) {
        console.error('[HR Advances] Gagal menyimpan kasbon:', err);
        if (errEl) {
            errEl.textContent = 'Gagal menyimpan kasbon: ' + (err.message || 'Kesalahan sistem');
            errEl.classList.remove('hidden');
        }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Cairkan Kasbon'; }
    } finally {
        hLoad();
    }
};

/**
 * ─── Modal Detail & Riwayat Pembayaran Kasbon ────────────────
 */
export const openAdvanceDetailModal = (advanceId) => {
    const adv = _cachedAdvances.find(a => (a.advanceId || a.id) === advanceId);
    if (!adv) {
        showToast('Data kasbon tidak ditemukan', 'warning');
        return;
    }

    _activeViewingAdvanceId = advanceId;
    const remaining = Math.max(0, parseFloat(adv.remainingAmount) || 0);
    const original = Math.max(1, parseFloat(adv.amount) || 1);
    const paid = Math.max(0, original - remaining);
    const pct = Math.min(100, Math.round((paid / original) * 100));
    const isPaid = remaining <= 0 || adv.status === 'paid';
    const repayments = Array.isArray(adv.repayments) ? adv.repayments : [];

    const existingModal = el('modal-salary-advance-detail');
    if (existingModal) existingModal.remove();

    document.body.insertAdjacentHTML('beforeend', `
    <div id="modal-salary-advance-detail" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAdvanceDetailModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-detail-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0"
                style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%)">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs ${isPaid ? 'bg-emerald-500 text-white' : 'text-white'}"
                        style="${isPaid ? '' : 'background: var(--color-primary)'}">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Detail Kasbon: ${esc(adv.employeeName)}</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${esc(adv.advanceId || adv.id)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">${esc(adv.position)} • ID: ${esc(adv.employeeId)}</p>
                    </div>
                </div>
                <button onclick="window.closeAdvanceDetailModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Body -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Status & Saldo Bento Card -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-500">Status Pelunasan:</span>
                        <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full ${
                            isPaid ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'}">
                            <span class="w-2 h-2 rounded-full ${isPaid ? 'bg-emerald-500' : 'bg-rose-500 animate-pulse'}"></span>
                            ${isPaid ? 'Lunas Sepenuhnya' : 'Masih Berjalan (Belum Lunas)'}
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Pinjaman</span>
                            <span class="text-sm font-black text-slate-800 dark:text-white">${fCur(adv.amount)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Sisa Pinjaman</span>
                            <span class="text-sm font-black ${isPaid ? 'text-emerald-600' : 'text-rose-600'}">${fCur(remaining)}</span>
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mt-2">
                        <div class="h-full rounded-full transition-all duration-500 ${isPaid ? 'bg-emerald-500' : ''}" style="width: ${pct}%; ${isPaid ? '' : 'background: var(--color-primary)'}"></div>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                        <span>Potongan: <strong>${fCur(adv.monthlyInstallment)} / bln</strong></span>
                        <span>Tenor: <strong>${adv.totalTenorMonths || 1} Bulan</strong></span>
                    </div>
                </div>

                <!-- Riwayat Pembayaran / Pemotongan -->
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5 mb-2">
                        <i class="fa-solid fa-clock-rotate-left" style="color: var(--color-primary)"></i> Riwayat Angsuran &amp; Pemotongan
                    </h4>
                    ${repayments.length === 0 ? `
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
                            Belum ada riwayat pemotongan gaji atau pembayaran angsuran untuk kasbon ini.
                        </div>
                    ` : `
                        <div class="space-y-2">
                            ${repayments.map((rep, idx) => `
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                <div>
                                    <span class="font-bold text-slate-800 dark:text-white block">Angsuran #${idx + 1}: ${fCur(rep.amount)}</span>
                                    <span class="text-[10px] text-slate-400">${esc(rep.date || '-')} • ${esc(rep.notes || 'Potongan Payroll')}</span>
                                </div>
                                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">-${fCur(rep.amount)}</span>
                            </div>`).join('')}
                        </div>
                    `}
                </div>
            </div>

            <!-- Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeAdvanceDetailModal()"
                    class="min-h-[44px] px-6 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('advanceDetail');
    }

    setTimeout(() => {
        const box = el('salary-advance-detail-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeAdvanceDetailModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-salary-advance-detail');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('advanceDetail', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Pelunasan / Angsuran Manual di Luar Payroll
 */
export const promptManualRepayment = (advanceId, remainingAmount) => {
    if (!verifyOwnerAuthority('mencatat pembayaran kasbon')) return;

    const adv = _cachedAdvances.find(a => (a.advanceId || a.id) === advanceId);
    if (!adv) return;

    const payInput = prompt(`Masukkan nominal pembayaran angsuran kasbon untuk "${adv.employeeName}":\n(Sisa pinjaman saat ini: Rp ${fCur(remainingAmount)})`, remainingAmount);
    if (payInput === null) return;

    const payAmount = Math.max(0, parseFloat(payInput.replace(/[^0-9]/g, '')) || 0);
    if (payAmount <= 0) {
        showToast('Nominal pembayaran tidak valid', 'warning');
        return;
    }

    recordAdvanceRepayment(advanceId, payAmount, 'Pembayaran manual / tunai staf');
};

/**
 * Catat pembayaran angsuran kasbon (Internal & Payroll Engine)
 */
export const recordAdvanceRepayment = async (advanceId, payAmount, notes = 'Potongan gaji payroll') => {
    const adv = _cachedAdvances.find(a => (a.advanceId || a.id) === advanceId);
    if (!adv) return false;

    const currentRemaining = Math.max(0, parseFloat(adv.remainingAmount) || 0);
    const actualPay = Math.min(currentRemaining, payAmount);
    const newRemaining = Math.max(0, currentRemaining - actualPay);
    const isNowPaid = newRemaining <= 0;

    const repaymentEntry = {
        date: new Date().toISOString().split('T')[0],
        amount: actualPay,
        remainingAfter: newRemaining,
        notes,
        recordedAt: new Date().toISOString()
    };

    sLoad('Memperbarui catatan kasbon...');

    try {
        const updatedDoc = {
            remainingAmount: newRemaining,
            status: isNowPaid ? 'paid' : 'active',
            repayments: firebase.firestore.FieldValue.arrayUnion(repaymentEntry),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        try {
            await db.collection('freshmart').doc('cms_data')
                .collection('salary_advances')
                .doc(advanceId)
                .update(updatedDoc);
        } catch (_) {}

        adv.remainingAmount = newRemaining;
        adv.status = isNowPaid ? 'paid' : 'active';
        if (!Array.isArray(adv.repayments)) adv.repayments = [];
        adv.repayments.push(repaymentEntry);

        showToast(`Pembayaran kasbon Rp ${fCur(actualPay)} berhasil dicatat! Sisa: Rp ${fCur(newRemaining)}`, 'success');

        const panel = el('cashier-panel-advances');
        if (panel) renderSalaryAdvancesView(panel);

        return true;
    } catch (err) {
        console.error('[HR Advances] Gagal mencatat pembayaran:', err);
        showToast('Gagal mencatat pembayaran: ' + err.message, 'error');
        return false;
    } finally {
        hLoad();
    }
};

/**
 * Hapus Catatan Kasbon
 */
export const deleteSalaryAdvance = (advanceId, employeeName) => {
    if (!verifyOwnerAuthority('menghapus data kasbon')) return;

    showConfirm(
        'Hapus Catatan Kasbon',
        `Yakin hapus data kasbon "${employeeName}" (#${advanceId})? Tindakan ini tidak dapat dibatalkan.`,
        async () => {
            sLoad('Menghapus catatan kasbon...');
            try {
                await db.collection('freshmart').doc('cms_data')
                    .collection('salary_advances')
                    .doc(advanceId)
                    .delete();

                _cachedAdvances = _cachedAdvances.filter(a => (a.advanceId || a.id) !== advanceId);
                appData.salaryAdvances = _cachedAdvances;

                showToast(`Catatan kasbon "${employeeName}" berhasil dihapus`, 'success');
                const panel = el('cashier-panel-advances');
                if (panel) renderSalaryAdvancesView(panel);
            } catch (err) {
                console.error('[HR Advances] Gagal menghapus kasbon:', err);
                showToast('Gagal menghapus: ' + err.message, 'error');
            } finally {
                hLoad();
            }
        },
        'Ya, Hapus',
        true
    );
};

// ─── Expose Global Window ────────────────────────────────────
if (typeof window !== 'undefined') {
    window.loadSalaryAdvances          = loadSalaryAdvances;
    window.renderSalaryAdvancesView     = renderSalaryAdvancesView;
    window.filterAdvanceStatus          = filterAdvanceStatus;
    window.openSalaryAdvanceFormModal   = openSalaryAdvanceFormModal;
    window.closeSalaryAdvanceFormModal  = closeSalaryAdvanceFormModal;
    window.calculateAdvanceInstallment  = calculateAdvanceInstallment;
    window.onAdvanceEmployeeChange      = onAdvanceEmployeeChange;
    window.saveSalaryAdvance            = saveSalaryAdvance;
    window.openAdvanceDetailModal       = openAdvanceDetailModal;
    window.closeAdvanceDetailModal      = closeAdvanceDetailModal;
    window.promptManualRepayment        = promptManualRepayment;
    window.recordAdvanceRepayment       = recordAdvanceRepayment;
    window.deleteSalaryAdvance          = deleteSalaryAdvance;
}

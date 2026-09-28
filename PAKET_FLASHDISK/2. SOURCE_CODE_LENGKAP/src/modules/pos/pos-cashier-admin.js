/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN STAF & HAK AKSES TOKO
 * Toko Putri v1.9.86
 * Ditampilkan di tab "Staf & Hak Akses" (cashiers/staff) pada CMS.
 * Owner dapat:
 * - Menambah staf baru (Kasir POS, Admin Operasional, Owner)
 * - Mengatur hak akses setiap modul secara dinamis (granular permissions)
 * - Mengaktifkan / menonaktifkan akun staf seketika
 * - Menghapus akun staf
 * ============================================================
 */

import { auth, db, firebase, ADMIN_UID } from '../../config/firebase.js';
import { el, setH, esc, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';
import { 
    ROLES, 
    PERMISSION_DEFINITIONS, 
    ROLE_PRESETS, 
    isOwnerUser, 
    getRoleBadgeHtml 
} from '../../core/auth-roles.js';
import { renderAdminShiftReportView } from './pos-shift.js';

let _cachedStaffList = [];
let _activeRoleFilter = 'all'; // 'all' | 'admin' | 'cashier'

// ─── Render Panel Manajemen Staf & Akses ─────────────────────
export const renderCashierAccounts = async () => {
    const content = el('admin-content');
    if (!content) return;

    const sc = document.querySelector('#view-admin .scroll-content');
    if (sc) sc.scrollTop = 0;

    setH('admin-content', `
    <div class="space-y-4 max-w-5xl mx-auto pb-16">
        <!-- Native App Sticky Segmented Control Bar -->
        <div class="sticky top-0 z-20 -mx-4 lg:-mx-8 px-4 lg:px-8 py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <div class="p-1.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl max-w-md w-full mx-auto grid grid-cols-2 gap-1.5 border border-slate-200/90 dark:border-slate-700/80 shadow-inner">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-users-gear text-white"></i>
                    <span>Staf &amp; Hak Akses</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Laporan Shift Kasir</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Manajemen Staf & Hak Akses -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            <!-- Header -->
            <div class="flex items-center justify-between gap-3 pt-1">
                <div>
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-user-shield"></i>
                        </span>
                        <span>Manajemen Staf &amp; Hak Akses</span>
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Kelola akun kasir, admin, dan batasan wewenang tiap modul toko</p>
                </div>
                <button onclick="window.openAddStaffModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 shrink-0"
                    style="background:var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-user-plus text-xs"></i>
                    <span>Tambah Staf</span>
                </button>
            </div>

            <!-- Kartu Owner Utama Toko (Super Admin Protection) -->
            <div class="relative overflow-hidden p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-purple-200 dark:border-purple-800/60 bg-gradient-to-br from-purple-500/10 via-slate-50 to-white dark:from-purple-950/40 dark:via-slate-800 dark:to-slate-800 shadow-2xs flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-md bg-gradient-to-tr from-purple-600 to-indigo-500 text-white border border-purple-300 dark:border-purple-700">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="space-y-1.5 min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white">Akun Pemilik Utama (Owner)</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/70 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700">
                            <i class="fa-solid fa-lock text-[9px]"></i> Super Admin Terproteksi
                        </span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Akun Owner memiliki akses 100% penuh atas seluruh modul toko, keuangan rahasia, laporan laba rugi, pengaturan rekening bank, serta satu-satunya akun yang berhak mendaftarkan dan mengubah hak akses staf lain.
                    </p>
                    <div class="flex items-center gap-3 pt-1 text-[11px] text-purple-700 dark:text-purple-300 font-bold">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-emerald-500"></i> Status: Master Aktif</span>
                        <span>•</span>
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-key"></i> Hak Akses: 22 Modul Terbuka</span>
                    </div>
                </div>
            </div>

            <!-- Filter Kategori Staf -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterStaffRole('all')" id="staff-filter-all"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95"
                    style="background: var(--color-primary); color: #fff;">
                    <i class="fa-solid fa-users text-[10px]"></i>
                    <span>Semua Staf</span>
                </button>
                <button onclick="window.filterStaffRole('admin')" id="staff-filter-admin"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-shield-halved text-[10px] text-blue-500"></i>
                    <span>Admin Toko</span>
                </button>
                <button onclick="window.filterStaffRole('cashier')" id="staff-filter-cashier"
                    class="staff-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-cash-register text-[10px] text-emerald-500"></i>
                    <span>Kasir POS</span>
                </button>
            </div>

            <!-- List Staf Terdaftar -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`);

    await loadStaffList();
};

export const switchCashierTab = (tab) => {
    const sc = document.querySelector('#view-admin .scroll-content');
    if (sc) sc.scrollTop = 0;

    const tabAccounts = el('tab-btn-cashier-accounts');
    const tabShifts   = el('tab-btn-cashier-shifts');
    const panelAccounts = el('cashier-panel-accounts');
    const panelShifts   = el('cashier-panel-shifts');

    const applyActive = (btn, iconHtml, label) => {
        if (!btn) return;
        btn.className = 'py-2.5 px-4 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md';
        btn.style.background = 'var(--color-primary)';
        btn.style.boxShadow = '0 4px 14px rgba(var(--color-primary-rgb), 0.35)';
        btn.innerHTML = `${iconHtml}<span>${label}</span>`;
    };

    const applyInactive = (btn, iconHtml, label) => {
        if (!btn) return;
        btn.className = 'py-2.5 px-4 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95';
        btn.style.background = 'transparent';
        btn.style.boxShadow = 'none';
        btn.innerHTML = `${iconHtml}<span>${label}</span>`;
    };

    if (tab === 'shifts') {
        applyInactive(tabAccounts, '<i class="fa-solid fa-users-gear"></i>', 'Staf &amp; Hak Akses');
        applyActive(tabShifts, '<i class="fa-solid fa-file-invoice-dollar text-white"></i>', 'Laporan Shift Kasir');
        if (panelAccounts) panelAccounts.classList.add('hidden');
        if (panelShifts) {
            panelShifts.classList.remove('hidden');
            renderAdminShiftReportView(panelShifts);
        }
    } else {
        applyActive(tabAccounts, '<i class="fa-solid fa-users-gear text-white"></i>', 'Staf &amp; Hak Akses');
        applyInactive(tabShifts, '<i class="fa-solid fa-file-invoice-dollar"></i>', 'Laporan Shift Kasir');
        if (panelAccounts) panelAccounts.classList.remove('hidden');
        if (panelShifts) panelShifts.classList.add('hidden');
    }
};

export const filterStaffRole = (role) => {
    _activeRoleFilter = role;
    document.querySelectorAll('.staff-filter-btn').forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = '';
        btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
    });

    const activeBtn = el(`staff-filter-${role}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
        activeBtn.style.background = 'var(--color-primary)';
        activeBtn.style.color = '#fff';
    }

    renderStaffListHtml();
};

const countStaffPermissions = (staff) => {
    if (staff.role === ROLES.OWNER) return PERMISSION_DEFINITIONS.length;
    if (staff.permissions) {
        return Object.values(staff.permissions).filter(Boolean).length;
    }
    const preset = ROLE_PRESETS[staff.role] || ROLE_PRESETS[ROLES.CASHIER];
    return Object.values(preset).filter(Boolean).length;
};

const renderStaffListHtml = () => {
    const container = el('cashier-list-container');
    if (!container) return;

    let filtered = _cachedStaffList;
    if (_activeRoleFilter === 'admin') {
        filtered = _cachedStaffList.filter(s => s.role === ROLES.ADMIN || s.role === ROLES.OWNER);
    } else if (_activeRoleFilter === 'cashier') {
        filtered = _cachedStaffList.filter(s => s.role === ROLES.CASHIER || !s.role);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum ada akun staf pada kategori ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "Tambah Staf" untuk mendaftarkan akun kasir atau admin baru</p>
        </div>`;
        return;
    }

    const listHtml = filtered.map(d => {
        const uid = d.uid;
        const isActive = d.isActive !== false;
        const dateStr  = d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';
        const initials = (d.name || 'Staf').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'ST';
        const role = d.role || ROLES.CASHIER;
        const permCount = countStaffPermissions(d);

        return `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all">
            <div class="flex items-start sm:items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                    style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    ${initials}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm font-black text-slate-900 dark:text-white truncate">${esc(d.name || 'Staf')}</p>
                        ${getRoleBadgeHtml(role)}
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${isActive
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600'}">
                            <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span>
                            ${isActive ? 'Aktif' : 'Nonaktif'}
                        </span>
                    </div>
                    <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${esc(d.email || '')}</span>
                        <span>•</span>
                        <span class="inline-flex items-center gap-1 font-bold text-[11px] text-[var(--color-primary)]">
                            <i class="fa-solid fa-key text-[9px]"></i> ${permCount} Modul Diizinkan
                        </span>
                        <span>•</span>
                        <span class="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Terdaftar: ${esc(dateStr)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${esc(uid)}')"
                    title="Atur Hak Akses Modul"
                    class="px-3 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5 border border-purple-200 dark:border-purple-800/60 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${esc(uid)}', ${!isActive})"
                    title="${isActive ? 'Nonaktifkan Akun Staf' : 'Aktifkan Akun Staf'}"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border
                    ${isActive
                        ? 'bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300'
                        : 'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800'}">
                    <i class="fa-solid ${isActive ? 'fa-ban' : 'fa-circle-check'}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${esc(uid)}', '${esc(d.name || '')}', '${esc(d.email || '')}', '${esc(role)}')"
                    title="Edit Profil Staf"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${esc(uid)}', '${esc(d.name || 'Staf')}')"
                    title="Hapus Akun Staf"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `<div class="space-y-2.5">${listHtml}</div>
    <p class="text-center text-[10px] text-slate-400 mt-3 font-medium">${filtered.length} staf terdaftar</p>`;
};

export const loadStaffList = async () => {
    const container = el('cashier-list-container');
    if (!container) return;

    try {
        let snap;
        try {
            snap = await db.collection('freshmart').doc('cms_data')
                .collection('cashier_accounts')
                .orderBy('createdAt', 'desc')
                .get();
        } catch (_) {
            snap = await db.collection('freshmart').doc('cms_data')
                .collection('cashier_accounts')
                .get();
        }

        _cachedStaffList = snap.docs.map(doc => ({ uid: doc.id, ...doc.data() }));

        // Sinkronisasi status hasCashier ke metadata
        const hasActiveCashier = _cachedStaffList.some(s => s.isActive !== false && s.role === ROLES.CASHIER);
        try {
            localStorage.setItem('pos_has_cashier', hasActiveCashier ? 'true' : 'false');
            await db.collection('freshmart').doc('cms_data').set({ hasCashier: hasActiveCashier }, { merge: true });
        } catch (_) {}
        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

        renderStaffListHtml();

    } catch (err) {
        console.error('[StaffAdmin] Gagal memuat daftar staf:', err);
        container.innerHTML = `
        <div class="text-center py-10 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl mb-2.5 shadow-2xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Gagal memuat data staf</p>
            <p class="text-[11px] text-slate-400 mt-0.5">${esc(err.message || 'Periksa koneksi internet atau login admin')}</p>
            <button onclick="window.loadStaffList()" class="mt-3 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95">
                <i class="fa-solid fa-arrows-rotate text-[10px]"></i>
                <span>Coba Lagi</span>
            </button>
        </div>`;
    }
};

// ─── Modal Tambah Staf Baru ──────────────────────────────────
export const openAddStaffModal = () => {
    // Generate permission checkboxes HTML
    const renderPermissionGroup = (groupName, groupTitle, groupIcon) => {
        const defs = PERMISSION_DEFINITIONS.filter(p => p.group === groupName);
        return `
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${groupIcon} text-[var(--color-primary)]"></i>
                <span>${groupTitle}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${defs.map(p => `
                <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${p.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${p.icon} text-[10px] text-slate-400"></i>
                            <span>${p.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${p.desc}</p>
                    </div>
                </label>`).join('')}
            </div>
        </div>`;
    };

    document.body.insertAdjacentHTML('beforeend', `
    <div id="add-staff-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closeAddStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="add-staff-modal-box">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Daftarkan Staf Baru</h3>
                        <p class="text-[11px] text-slate-400">Buat akun untuk kasir atau administrator toko</p>
                    </div>
                </div>
                <button onclick="window.closeAddStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Info Akun Dasar -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Lengkap Staf <span class="text-rose-500">*</span></label>
                        <input id="new-staff-name" type="text" placeholder="Contoh: Rina Kasir / Budi Supervisor"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login <span class="text-rose-500">*</span></label>
                        <input id="new-staff-email" type="email" placeholder="staf@tokoputri.com"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password Staf (Min. 6 Karakter) <span class="text-rose-500">*</span></label>
                    <div class="relative">
                        <input id="new-staff-pass" type="password" placeholder="Minimal 6 karakter..."
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl pl-4 pr-12 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                        <button type="button" onclick="window.toggleStaffPassVisibility('new-staff-pass')"
                            class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan / Role Pokok <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-3 gap-2">
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 cursor-pointer hover:border-emerald-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${ROLES.CASHIER}" checked onchange="window.applyNewStaffPreset('${ROLES.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1 text-emerald-600"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-blue-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${ROLES.ADMIN}" onchange="window.applyNewStaffPreset('${ROLES.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer hover:border-purple-500 transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1 text-purple-500"></i>
                            <span class="text-xs font-black">Manajer</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Akses Luas</span>
                        </label>
                    </div>
                </div>

                <!-- Bagian Hak Akses Modul Dinamis -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-black text-slate-900 dark:text-white">Rincian Hak Akses Modul</h4>
                            <p class="text-[10px] text-slate-400">Centang modul yang diizinkan untuk akun staf ini</p>
                        </div>
                        <div class="flex items-center gap-1.5 text-[11px]">
                            <button type="button" onclick="window.setAllNewStaffPerms(true)" class="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all">Pilih Semua</button>
                            <button type="button" onclick="window.setAllNewStaffPerms(false)" class="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all">Kosongkan</button>
                        </div>
                    </div>

                    ${renderPermissionGroup('operasional', '1. Operasional Toko', 'fa-dolly')}
                    ${renderPermissionGroup('konten', '2. Katalog & Konten Toko', 'fa-layer-group')}
                    ${renderPermissionGroup('sensitif', '3. Finansial & Pengaturan Sensitif (Khusus Owner)', 'fa-lock')}
                </div>

                <div id="add-staff-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closeAddStaffModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffAccount()" id="save-staff-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Daftarkan Staf
                </button>
            </div>
        </div>
    </div>`);

    // Inisialisasi preset default Kasir
    window.applyNewStaffPreset(ROLES.CASHIER);

    setTimeout(() => {
        const box = el('add-staff-modal-box');
        if (box) box.classList.remove('scale-95');
        const nameInput = el('new-staff-name');
        if (nameInput) nameInput.focus();
    }, 10);
};

export const closeAddStaffModal = () => {
    const modal = el('add-staff-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
};

export const applyNewStaffPreset = (presetKey) => {
    const preset = ROLE_PRESETS[presetKey] || ROLE_PRESETS[ROLES.CASHIER];
    document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(cb => {
        cb.checked = !!preset[cb.value];
    });

    // Update style radio border
    document.querySelectorAll('#add-staff-modal input[name="new_staff_role"]').forEach(rb => {
        const label = rb.closest('label');
        if (label) {
            if (rb.value === presetKey) {
                label.className = 'flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-xs transition-all text-center';
            } else {
                label.className = 'flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-all text-center';
            }
        }
    });
};

export const setAllNewStaffPerms = (val) => {
    document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(cb => {
        cb.checked = !!val;
    });
};

// ─── Simpan Akun Staf Baru ───────────────────────────────────
export const saveStaffAccount = async () => {
    const name  = el('new-staff-name')?.value?.trim() || '';
    const email = el('new-staff-email')?.value?.trim() || '';
    const pass  = el('new-staff-pass')?.value || '';
    const roleRadio = document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked');
    const roleValue = roleRadio ? roleRadio.value : ROLES.CASHIER;
    const finalRole = (roleValue === 'manager' || roleValue === ROLES.ADMIN) ? ROLES.ADMIN : roleValue;

    const errEl = el('add-staff-error');
    const btn   = el('save-staff-btn');

    const showErr = (msg) => {
        if (errEl) { errEl.textContent = msg; errEl.classList.remove('hidden'); }
    };
    const clearErr = () => { if (errEl) errEl.classList.add('hidden'); };

    clearErr();
    if (!name) { showErr('Nama staf wajib diisi.'); return; }
    if (!email || !email.includes('@')) { showErr('Email login tidak valid.'); return; }
    if (pass.length < 6) { showErr('Password minimal 6 karakter.'); return; }

    // Kumpulkan hak akses yang dicentang
    const permissions = {};
    PERMISSION_DEFINITIONS.forEach(p => {
        const cb = document.querySelector(`#add-staff-modal input[name="staff_perm"][value="${p.key}"]`);
        permissions[p.key] = cb ? cb.checked : false;
    });

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan ke Firebase...'; }
    sLoad('Mendaftarkan akun staf...');

    try {
        // Buat akun Firebase Auth via secondary app instance agar sesi Owner tidak tergeser
        const secondaryApp = firebase.apps.find(a => a.name === 'pos-cashier-creator') ||
            firebase.initializeApp(window.FIREBASE_CONFIG || firebase.app().options, 'pos-cashier-creator');
        const secondaryAuth = secondaryApp.auth();

        const cred = await secondaryAuth.createUserWithEmailAndPassword(email, pass);
        const uid  = cred.user?.uid;
        if (!uid) throw new Error('UID tidak diterima dari Firebase');

        // Sign out dari secondary app
        await secondaryAuth.signOut();

        // Simpan dokumen profil staf ke Firestore
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).set({
            uid,
            name,
            email,
            role: finalRole,
            permissions,
            isActive: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: auth.currentUser?.uid || 'owner'
        });

        // Update status hasCashier toko jika role kasir
        if (finalRole === ROLES.CASHIER) {
            try {
                localStorage.setItem('pos_has_cashier', 'true');
                await db.collection('freshmart').doc('cms_data').set({ hasCashier: true }, { merge: true });
            } catch (_) {}
        }

        closeAddStaffModal();
        showToast(`Akun "${name}" (${finalRole.toUpperCase()}) berhasil didaftarkan! ✅`, 'success');
        await loadStaffList();

        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

    } catch (err) {
        console.error('[StaffAdmin] Gagal membuat akun staf:', err);
        const code = err.code || '';
        if (code === 'auth/email-already-in-use') {
            showErr('Email sudah digunakan oleh akun lain di Firebase.');
        } else if (code === 'auth/invalid-email') {
            showErr('Format email tidak valid.');
        } else if (code === 'auth/weak-password') {
            showErr('Password terlalu lemah (min. 6 karakter).');
        } else {
            showErr('Gagal mendaftarkan: ' + (err.message || 'Terjadi kesalahan sistem'));
        }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Daftarkan Staf'; }
    } finally {
        hLoad();
    }
};

// ─── Modal Atur Hak Akses Staf ───────────────────────────────
export const openPermissionsModal = (uid) => {
    const staff = _cachedStaffList.find(s => s.uid === uid);
    if (!staff) {
        showToast("Data staf tidak ditemukan!");
        return;
    }

    const currentPerms = staff.permissions || (ROLE_PRESETS[staff.role] || ROLE_PRESETS[ROLES.CASHIER]);

    const renderPermissionGroup = (groupName, groupTitle, groupIcon) => {
        const defs = PERMISSION_DEFINITIONS.filter(p => p.group === groupName);
        return `
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${groupIcon} text-[var(--color-primary)]"></i>
                <span>${groupTitle}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${defs.map(p => {
                    const isChecked = currentPerms[p.key] === true;
                    return `
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${p.key}" ${isChecked ? 'checked' : ''} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${p.icon} text-[10px] text-slate-400"></i>
                                <span>${p.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${p.desc}</p>
                        </div>
                    </label>`;
                }).join('')}
            </div>
        </div>`;
    };

    document.body.insertAdjacentHTML('beforeend', `
    <div id="permissions-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closePermissionsModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="permissions-modal-box">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs border border-purple-200 dark:border-purple-800/60 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300">
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${esc(staff.name || 'Staf')}</h3>
                        <p class="text-[11px] text-slate-400">Sesuaikan modul yang boleh dibuka oleh akun ini</p>
                    </div>
                </div>
                <button onclick="window.closePermissionsModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- 1-Click Preset Bar -->
                <div class="p-3 bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Preset Cepat:</span>
                        <div class="flex items-center gap-1.5 text-[11px]">
                            <button type="button" onclick="window.setAllEditStaffPerms(true)" class="text-xs text-[var(--color-primary)] font-bold hover:underline">Semua</button>
                            <span class="text-slate-300">•</span>
                            <button type="button" onclick="window.setAllEditStaffPerms(false)" class="text-xs text-rose-500 font-bold hover:underline">Kosongkan</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-1.5">
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.CASHIER}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs">Kasir POS</button>
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.ADMIN}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs">Admin Ops</button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 transition-all active:scale-95 shadow-2xs">Manajer</button>
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.OWNER}')" class="py-2 px-2 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs">Full Akses</button>
                    </div>
                </div>

                ${renderPermissionGroup('operasional', '1. Operasional Toko', 'fa-dolly')}
                ${renderPermissionGroup('konten', '2. Katalog & Konten Toko', 'fa-layer-group')}
                ${renderPermissionGroup('sensitif', '3. Finansial & Pengaturan Sensitif (Khusus Owner)', 'fa-lock')}
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closePermissionsModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffPermissions('${esc(uid)}')" id="save-perms-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`);

    setTimeout(() => {
        const box = el('permissions-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closePermissionsModal = () => {
    const modal = el('permissions-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
};

export const applyEditStaffPreset = (presetKey) => {
    const preset = ROLE_PRESETS[presetKey] || ROLE_PRESETS[ROLES.CASHIER];
    document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(cb => {
        cb.checked = !!preset[cb.value];
    });
};

export const setAllEditStaffPerms = (val) => {
    document.querySelectorAll('#permissions-modal input[name="edit_staff_perm"]').forEach(cb => {
        cb.checked = !!val;
    });
};

export const saveStaffPermissions = async (uid) => {
    const btn = el('save-perms-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'; }
    sLoad('Memperbarui hak akses...');

    try {
        const permissions = {};
        PERMISSION_DEFINITIONS.forEach(p => {
            const cb = document.querySelector(`#permissions-modal input[name="edit_staff_perm"][value="${p.key}"]`);
            permissions[p.key] = cb ? cb.checked : false;
        });

        // Otomatis tentukan role berdasarkan profil hak akses
        let detectedRole = ROLES.CASHIER;
        if (permissions.orders || permissions.products || permissions.suppliers || permissions.purchases) {
            detectedRole = ROLES.ADMIN;
        }

        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).update({
            permissions,
            role: detectedRole
        });

        closePermissionsModal();
        showToast('Hak akses berhasil diperbarui! ✅', 'success');
        await loadStaffList();

    } catch (err) {
        console.error('[StaffAdmin] Gagal menyimpan hak akses:', err);
        showToast('Gagal memperbarui hak akses: ' + err.message, 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses'; }
    } finally {
        hLoad();
    }
};

// ─── Modal Edit Profil Staf (Nama & Role) ────────────────────
export const openEditStaffModal = (uid, currentName, currentEmail, currentRole) => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-to-square text-[var(--color-primary)]"></i> Edit Profil Staf
                </h3>
                <button onclick="window.closeEditStaffModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Staf</label>
                    <input id="edit-staff-name" type="text" value="${esc(currentName)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan / Role</label>
                    <select id="edit-staff-role" class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white transition-all shadow-inner font-bold">
                        <option value="${ROLES.CASHIER}" ${currentRole === ROLES.CASHIER ? 'selected' : ''}>Kasir POS</option>
                        <option value="${ROLES.ADMIN}" ${currentRole === ROLES.ADMIN ? 'selected' : ''}>Admin Toko</option>
                        <option value="${ROLES.OWNER}" ${currentRole === ROLES.OWNER ? 'selected' : ''}>Co-Owner / Wakil Owner</option>
                    </select>
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${esc(currentEmail)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${esc(uid)}')" id="update-staff-btn"
                    class="flex-[2] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan
                </button>
            </div>
        </div>
    </div>`);

    setTimeout(() => {
        const box = el('edit-staff-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeEditStaffModal = () => {
    const modal = el('edit-staff-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
};

export const updateStaffProfile = async (uid) => {
    const name = el('edit-staff-name')?.value?.trim() || '';
    const role = el('edit-staff-role')?.value || ROLES.CASHIER;
    const errEl = el('edit-staff-error');
    const btn = el('update-staff-btn');

    if (!name) {
        if (errEl) { errEl.textContent = 'Nama staf tidak boleh kosong.'; errEl.classList.remove('hidden'); }
        return;
    }

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'; }
    sLoad('Memperbarui profil staf...');

    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).update({
            name,
            role
        });
        closeEditStaffModal();
        showToast('Profil staf berhasil diperbarui! ✅', 'success');
        await loadStaffList();
    } catch (err) {
        if (errEl) { errEl.textContent = 'Gagal memperbarui: ' + err.message; errEl.classList.remove('hidden'); }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan'; }
    } finally {
        hLoad();
    }
};

// ─── Toggle Aktif / Nonaktif ─────────────────────────────────
export const toggleStaffActive = async (uid, newStatus) => {
    sLoad(newStatus ? 'Mengaktifkan staf...' : 'Menonaktifkan staf...');
    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).update({
            isActive: newStatus
        });
        showToast(newStatus ? 'Akun staf diaktifkan ✅' : 'Akun staf dinonaktifkan ❌', 'success');
        await loadStaffList();
    } catch (err) {
        showToast('Gagal mengubah status staf: ' + err.message, 'error');
    } finally {
        hLoad();
    }
};

// ─── Hapus Akun Staf ─────────────────────────────────────────
export const deleteStaffAccount = (uid, name) => {
    showConfirm(
        'Hapus Akun Staf',
        `Yakin hapus akun staf "${name}"? Akun tidak dapat dipulihkan dan staf tidak dapat login lagi ke toko.`,
        async () => {
            sLoad('Menghapus akun staf...');
            try {
                await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).delete();
                showToast(`Akun "${name}" berhasil dihapus`, 'success');
                await loadStaffList();
            } catch (err) {
                showToast('Gagal menghapus staf: ' + err.message, 'error');
            } finally {
                hLoad();
            }
        },
        'Ya, Hapus',
        true
    );
};

// ─── Toggle Password Visibility ──────────────────────────────
export const toggleStaffPassVisibility = (inputId) => {
    const input = el(inputId);
    const eyeIcon = el(inputId + '-eye');
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        if (eyeIcon) { eyeIcon.className = 'fa-solid fa-eye-slash text-sm'; }
    } else {
        input.type = 'password';
        if (eyeIcon) { eyeIcon.className = 'fa-solid fa-eye text-sm'; }
    }
};

// ─── Backward Compatibility Mapping ──────────────────────────
export const openAddCashierModal = openAddStaffModal;
export const closeAddCashierModal = closeAddStaffModal;
export const saveCashierAccount = saveStaffAccount;
export const openEditCashierModal = (uid, name, email) => openEditStaffModal(uid, name, email, ROLES.CASHIER);
export const closeEditCashierModal = closeEditStaffModal;
export const toggleCashierActive = toggleStaffActive;
export const deleteCashierAccount = deleteStaffAccount;
export const loadCashierList = loadStaffList;
export const toggleCashierPassVisibility = toggleStaffPassVisibility;

// ─── Expose ke window untuk atribut onclick HTML ─────────────
if (typeof window !== 'undefined') {
    window.renderCashierAccounts        = renderCashierAccounts;
    window.switchCashierTab             = switchCashierTab;
    window.filterStaffRole              = filterStaffRole;
    window.loadStaffList                = loadStaffList;
    window.openAddStaffModal            = openAddStaffModal;
    window.closeAddStaffModal           = closeAddStaffModal;
    window.applyNewStaffPreset          = applyNewStaffPreset;
    window.setAllNewStaffPerms          = setAllNewStaffPerms;
    window.saveStaffAccount             = saveStaffAccount;
    window.openPermissionsModal         = openPermissionsModal;
    window.closePermissionsModal        = closePermissionsModal;
    window.applyEditStaffPreset         = applyEditStaffPreset;
    window.setAllEditStaffPerms         = setAllEditStaffPerms;
    window.saveStaffPermissions         = saveStaffPermissions;
    window.openEditStaffModal           = openEditStaffModal;
    window.closeEditStaffModal          = closeEditStaffModal;
    window.updateStaffProfile           = updateStaffProfile;
    window.toggleStaffActive            = toggleStaffActive;
    window.deleteStaffAccount           = deleteStaffAccount;
    window.toggleStaffPassVisibility    = toggleStaffPassVisibility;

    // Legacy aliases
    window.openAddCashierModal          = openAddCashierModal;
    window.closeAddCashierModal         = closeAddCashierModal;
    window.saveCashierAccount           = saveCashierAccount;
    window.openEditCashierModal         = openEditCashierModal;
    window.closeEditCashierModal        = closeEditCashierModal;
    window.toggleCashierActive          = toggleCashierActive;
    window.deleteCashierAccount         = deleteCashierAccount;
    window.loadCashierList              = loadCashierList;
    window.toggleCashierPassVisibility  = toggleCashierPassVisibility;
}

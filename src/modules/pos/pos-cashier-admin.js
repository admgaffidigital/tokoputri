/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN STAF & HAK AKSES TOKO (HARMONIZED)
 * Toko Putri v1.19.6
 * Ditampilkan di tab "Staf & Hak Akses" (cashiers/staff) pada CMS.
 * Fitur:
 * 1. Hero Banner Terpadu Beraksen Tema Toko & 4-Card Bento Stat Hub (Total Tim, Kasir POS, Admin & Gudang, Beban Gaji).
 * 2. Flagship Bento Island: Akun Pemilik Utama (Owner / Super Admin) dengan status login, ID resmi, dan gaji direksi.
 * 3. Search Bar Realtime Cepat [F2] & Filter Chiclet Responsif (Semua, Kasir, Admin, Gudang, Nonaktif).
 * 4. Kartu Staf Modern Native App (Bento Cards) dengan Initial Avatar Pods, Link WhatsApp Langsung, dan Action Bar Ergonomis.
 * 5. Modal Tambah Staf, Edit Profil, Hak Akses Granular, & Kompensasi Owner 100% Solid Flat Clean (Zero Gradients).
 * ============================================================
 */

import { auth, db, firebase, ADMIN_UID } from '../../config/firebase.js';
import { el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';
import { 
    ROLES, 
    STANDARD_POSITIONS,
    PERMISSION_DEFINITIONS, 
    ROLE_PRESETS, 
    isOwnerUser, 
    getRoleBadgeHtml 
} from '../../core/auth-roles.js';
import { 
    generateEmployeeId, 
    getOwnerEmployeeProfile, 
    normalizeEmployeeProfile, 
    EMPLOYMENT_STATUSES, 
    SALARY_PAYMENT_METHODS,
    verifyOwnerAuthority
} from '../admin/hr/hr-schema.js';
import { appData } from '../../core/state.js';
import { renderAdminShiftReportView } from './pos-shift.js';
import { renderSalaryAdvancesView } from '../admin/hr/hr-advances.js';
import { renderAttendanceView } from '../admin/hr/hr-attendance.js';
import { renderPayrollView } from '../admin/hr/hr-payroll.js';

export { verifyOwnerAuthority };

let _cachedStaffList = [];
let _activeRoleFilter = 'all'; // 'all' | 'cashier' | 'admin' | 'staff' | 'inactive'
let _staffSearchQuery = '';

/**
 * Format nomor telepon untuk tautan langsung ke WhatsApp
 */
const cleanPhone = (p) => {
    if (!p) return '';
    let clean = p.replace(/[^0-9]/g, '');
    if (clean.startsWith('0')) clean = '62' + clean.slice(1);
    return clean;
};

// ─── Render Panel Manajemen Staf & Akses ─────────────────────
export const renderCashierAccounts = async () => {
    const content = el('admin-content');
    if (!content) return;

    const sc = document.querySelector('#view-admin .scroll-content');
    if (sc) sc.scrollTop = 0;

    const curUser = auth.currentUser;
    const isOwner = curUser && curUser.uid === ADMIN_UID;
    const isStaff = curUser && curUser.uid !== ADMIN_UID;
    const isUnauth = !curUser;
    const ownerProfile = getOwnerEmployeeProfile(appData);

    let authStatusBadge = '';
    let authBannerHtml = '';

    if (isUnauth) {
        authStatusBadge = '<span class="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Status: Pratinjau Lokal</span>';
        authBannerHtml = `
        <div class="p-4 rounded-2xl border border-amber-300 dark:border-amber-700/80 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs mb-4">
            <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-amber-200/80 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <i class="fa-solid fa-triangle-exclamation text-sm"></i>
                </div>
                <div>
                    <h4 class="text-xs font-black">Mode Pratinjau Lokal (Sesi Firebase Belum Terotentikasi)</h4>
                    <p class="text-[11px] text-amber-800/90 dark:text-amber-300/90 mt-0.5 leading-relaxed">
                        Anda dapat melihat data staf, namun untuk mendaftarkan staf baru atau menyimpan hak akses ke database cloud, Anda wajib login resmi dengan Email Pemilik Toko (Owner).
                    </p>
                </div>
            </div>
            <button onclick="if(typeof window.changeView==='function') window.changeView('view-admin-login');"
                class="px-3.5 py-2 rounded-xl text-xs font-black text-white shrink-0 shadow-sm active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                style="background: var(--color-primary)">
                <i class="fa-solid fa-right-to-bracket text-xs"></i>
                <span>Login Akun Owner</span>
            </button>
        </div>`;
    } else if (isStaff) {
        authStatusBadge = `<span class="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><i class="fa-solid fa-user-shield"></i> Staf (${esc(curUser.email || 'Staf')})</span>`;
        authBannerHtml = `
        <div class="p-3.5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 flex items-center gap-3 shadow-2xs mb-4">
            <div class="w-8 h-8 rounded-xl bg-blue-200/70 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-xs"></i>
            </div>
            <div class="text-[11px] leading-snug">
                <span class="font-bold">Mode Akun Staf (${esc(curUser.email || 'Staf')}):</span> Anda dapat melihat direktori staf. Penambahan, pengubahan wewenang hak akses, dan penghapusan staf diproteksi eksklusif untuk Pemilik Toko (Owner).
            </div>
        </div>`;
    } else {
        authStatusBadge = `<span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> Owner Terverifikasi (${esc(curUser.email || 'Master')})</span>`;
    }

    setH('admin-content', `
    <div class="space-y-4 max-w-5xl mx-auto pb-24">
        <!-- Native App Sticky Segmented Control Bar (Horizontal Smooth Slide & Desktop Drag) -->
        <div class="sticky top-0 z-20 py-2 sm:py-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-none border-b border-slate-200/80 dark:border-slate-800/80 mb-2">
            <div id="cashier-admin-tabs-bar" class="segmented-tabs-bar p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full mx-auto flex items-center gap-2 overflow-x-auto hide-scrollbar sm:grid sm:grid-cols-5 select-none" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; touch-action: pan-x; cursor: grab;">
                <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200/90 dark:border-slate-800 shadow-sm active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0"
                    style="background: var(--color-primary);">
                    <i class="fa-solid fa-users-gear text-white"></i>
                    <span class="truncate">Staf &amp; Akses</span>
                </button>
                <button id="tab-btn-cashier-attendance" onclick="window.switchCashierTab('attendance')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-clipboard-user"></i>
                    <span class="truncate">Absensi Tim</span>
                </button>
                <button id="tab-btn-cashier-advances" onclick="window.switchCashierTab('advances')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <span class="truncate">Buku Kasbon</span>
                </button>
                <button id="tab-btn-cashier-payroll" onclick="window.switchCashierTab('payroll')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <span class="truncate">Gaji &amp; Slip</span>
                </button>
                <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" 
                    class="min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span class="truncate">Shift Kasir</span>
                </button>
            </div>
        </div>

        <!-- Panel 1: Manajemen Staf & Hak Akses -->
        <div id="cashier-panel-accounts" class="space-y-4 pt-1">
            ${authBannerHtml}

            <!-- 1. HERO BANNER: MASTER MANAJEMEN STAF & HAK AKSES (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-4 sm:p-5 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border shadow-2xs whitespace-nowrap" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-users-gear"></i> Tim Toko &amp; Keamanan Akses
                            </span>
                        </div>
                        <h2 class="text-base sm:text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
                            Manajemen Staf &amp; Hak Akses
                        </h2>
                        <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Daftarkan akun kasir POS, admin operasional, dan staf gudang. Atur wewenang akses modul toko secara granular serta sinkronisasi penggajian dan kompensasi HR.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0 pt-1 md:pt-0">
                        <button onclick="window.openOwnerHrModal()" class="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-crown text-amber-500"></i>
                            <span>Profil Owner</span>
                        </button>
                        <button onclick="window.openAddStaffModal()" class="flex-1 sm:flex-none neo-btn px-4 py-2 rounded-xl text-xs font-black text-white flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-95" style="background: var(--color-primary);">
                            <i class="fa-solid fa-user-plus text-xs"></i>
                            <span>Tambah Staf</span>
                        </button>
                    </div>
                </div>

                <!-- 2. METRIK STATISTIK TIM (4-CARD BENTO STAT HUB) -->
                <div id="staff-metrics-container" class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                            <div class="flex items-center justify-between mb-1.5">
                                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                                    <i class="fa-solid fa-users"></i>
                                </div>
                            </div>
                            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">-</p>
                            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 mt-0.5">Memuat data...</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. FLAGSHIP BENTO ISLAND: AKUN PEMILIK UTAMA (SUPER ADMIN & MASTER HR) -->
            <div id="owner-card-container">
                ${getOwnerCardHtml(ownerProfile, authStatusBadge)}
            </div>

            <!-- 4. TOOLBAR PENCARIAN & CHICLET FILTER PERAN -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <!-- Kolom Pencarian High-Contrast -->
                <div class="relative flex-1">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none" style="color: var(--color-primary)"></i>
                    <input id="staff-search-input" type="text"
                        placeholder="Cari nama staf, ID karyawan, email, no. HP, jabatan..."
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        oninput="window.handleStaffSearch(this.value)"
                        class="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-xs sm:text-sm font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    <button id="btn-clear-staff-search" onclick="window.clearStaffSearch()" class="hidden absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center text-xs hover:bg-rose-100 hover:text-rose-600 transition-all cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <!-- Filter Kategori Staf (Chiclet Pill Bar) -->
                <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 shrink-0" id="staff-role-filters-bar">
                    <!-- Rendered by renderStaffRoleFilterChiclets() -->
                </div>
            </div>

            <!-- 5. LIST STAF TERDAFTAR (MODERN BENTO CARDS) -->
            <div id="cashier-list-container" class="pt-1">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Absensi Shift & Kehadiran Tim -->
        <div id="cashier-panel-attendance" class="hidden pt-1"></div>

        <!-- Panel 3: Buku Kasbon & Pinjaman Karyawan -->
        <div id="cashier-panel-advances" class="hidden pt-1"></div>

        <!-- Panel 4: Penggajian (Payroll) & Slip Gaji -->
        <div id="cashier-panel-payroll" class="hidden pt-1"></div>

        <!-- Panel 5: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden pt-1"></div>
    </div>`);

    initCashierAdminTabsSlider();
    await loadStaffList();
};

/**
 * Render HTML Kartu Pemilik Utama Toko (Solid Flat Clean & Harmonized)
 */
const getOwnerCardHtml = (ownerProfile, authStatusBadge) => {
    return `
    <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-white/95 dark:bg-slate-800/90 shadow-2xs hover:border-[var(--color-primary)] transition-all">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            <div class="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg shrink-0 text-white border border-slate-200/90 dark:border-slate-700/80 shadow-xs" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-crown text-amber-300"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            ${esc(ownerProfile.name || 'Akun Pemilik Utama (Owner)')}
                        </h3>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-shield-halved text-[9px]"></i> Super Admin Terproteksi
                        </span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.2);">
                            ${esc(ownerProfile.employeeId || 'OWN-001')}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Owner Aktif
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tie text-[11px] mr-1" style="color: var(--color-primary)"></i>${esc(ownerProfile.position || 'Owner / Direktur Utama')}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${fCur(ownerProfile.baseSalary || 10000000)}/bln
                        </span>
                        <span class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">(Gaji Pokok Direksi)</span>
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        ${authStatusBadge}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[10px]"></i> 22 Modul Lengkap (Akses Penuh)
                        </span>
                        ${ownerProfile.bankAccount && ownerProfile.bankAccount !== '-' ? `
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${esc(ownerProfile.bankName || 'BCA')}: ${esc(ownerProfile.bankAccount)}
                        </span>` : ''}
                    </div>
                </div>
            </div>
            <div class="shrink-0 self-end lg:self-center border-t lg:border-t-0 pt-2.5 lg:pt-0 border-slate-100 dark:border-slate-700/60 w-full lg:w-auto flex justify-end">
                <button onclick="window.openOwnerHrModal()" class="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border transition-all cursor-pointer shadow-2xs flex items-center justify-center gap-2 active:scale-95 hover:bg-slate-50 dark:hover:bg-slate-700" style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-user-pen text-xs"></i>
                    <span>Atur Gaji &amp; HR Owner</span>
                </button>
            </div>
        </div>
    </div>`;
};

/**
 * Inisialisasi Slider Interaktif Drag & Geser Horizontal Tab Staf
 */
export const initCashierAdminTabsSlider = () => {
    const slider = el('cashier-admin-tabs-bar');
    if (!slider || slider.__dragScrollAttached) return;
    slider.__dragScrollAttached = true;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    // Mouse drag scrolling untuk perangkat Desktop/Laptop
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        hasMoved = false;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    const stopDrag = () => {
        if (!isDown) return;
        isDown = false;
        slider.style.cursor = 'grab';
    };

    slider.addEventListener('mouseleave', stopDrag);
    slider.addEventListener('mouseup', stopDrag);

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 4) {
            hasMoved = true;
        }
        slider.scrollLeft = scrollLeft - walk;
    });

    // Cegah pemicuan klik tombol yang tidak disengaja saat user melakukan drag/geser
    slider.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (hasMoved) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }, true);
    });
};

/**
 * Switch Tab Navigasi Staf (Accounts, Attendance, Advances, Payroll, Shifts)
 */
export const switchCashierTab = (tab) => {
    const sc = document.querySelector('#view-admin .scroll-content');
    if (sc) sc.scrollTop = 0;

    const tabAccounts   = el('tab-btn-cashier-accounts');
    const tabAttendance = el('tab-btn-cashier-attendance');
    const tabAdvances   = el('tab-btn-cashier-advances');
    const tabPayroll    = el('tab-btn-cashier-payroll');
    const tabShifts     = el('tab-btn-cashier-shifts');

    const panelAccounts   = el('cashier-panel-accounts');
    const panelAttendance = el('cashier-panel-attendance');
    const panelAdvances   = el('cashier-panel-advances');
    const panelPayroll    = el('cashier-panel-payroll');
    const panelShifts     = el('cashier-panel-shifts');

    const applyActive = (btn, iconHtml, label) => {
        if (!btn) return;
        btn.className = 'min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-black text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200/90 dark:border-slate-800 shadow-sm active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0';
        btn.style.background = 'var(--color-primary)';
        btn.style.boxShadow = '';
        btn.innerHTML = `${iconHtml}<span class="truncate">${label}</span>`;
    };

    const applyInactive = (btn, iconHtml, label) => {
        if (!btn) return;
        btn.className = 'min-h-[44px] py-2.5 px-3 sm:px-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 sm:shrink min-w-[125px] sm:min-w-0';
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.innerHTML = `${iconHtml}<span class="truncate">${label}</span>`;
    };

    // Reset semua tab ke status inactive
    applyInactive(tabAccounts, '<i class="fa-solid fa-users-gear"></i>', 'Staf &amp; Akses');
    applyInactive(tabAttendance, '<i class="fa-solid fa-clipboard-user"></i>', 'Absensi Tim');
    applyInactive(tabAdvances, '<i class="fa-solid fa-hand-holding-dollar"></i>', 'Buku Kasbon');
    applyInactive(tabPayroll, '<i class="fa-solid fa-money-check-dollar"></i>', 'Gaji &amp; Slip');
    applyInactive(tabShifts, '<i class="fa-solid fa-file-invoice-dollar"></i>', 'Shift Kasir');

    // Sembunyikan seluruh panel
    if (panelAccounts) panelAccounts.classList.add('hidden');
    if (panelAttendance) panelAttendance.classList.add('hidden');
    if (panelAdvances) panelAdvances.classList.add('hidden');
    if (panelPayroll) panelPayroll.classList.add('hidden');
    if (panelShifts) panelShifts.classList.add('hidden');

    let activeBtn = tabAccounts;

    if (tab === 'attendance') {
        applyActive(tabAttendance, '<i class="fa-solid fa-clipboard-user text-white"></i>', 'Absensi Tim');
        activeBtn = tabAttendance;
        if (panelAttendance) {
            panelAttendance.classList.remove('hidden');
            renderAttendanceView(panelAttendance);
        }
    } else if (tab === 'advances') {
        applyActive(tabAdvances, '<i class="fa-solid fa-hand-holding-dollar text-white"></i>', 'Buku Kasbon');
        activeBtn = tabAdvances;
        if (panelAdvances) {
            panelAdvances.classList.remove('hidden');
            renderSalaryAdvancesView(panelAdvances);
        }
    } else if (tab === 'payroll') {
        applyActive(tabPayroll, '<i class="fa-solid fa-money-check-dollar text-white"></i>', 'Gaji &amp; Slip');
        activeBtn = tabPayroll;
        if (panelPayroll) {
            panelPayroll.classList.remove('hidden');
            renderPayrollView(panelPayroll);
        }
    } else if (tab === 'shifts') {
        applyActive(tabShifts, '<i class="fa-solid fa-file-invoice-dollar text-white"></i>', 'Shift Kasir');
        activeBtn = tabShifts;
        if (panelShifts) {
            panelShifts.classList.remove('hidden');
            renderAdminShiftReportView(panelShifts);
        }
    } else {
        applyActive(tabAccounts, '<i class="fa-solid fa-users-gear text-white"></i>', 'Staf &amp; Akses');
        activeBtn = tabAccounts;
        if (panelAccounts) panelAccounts.classList.remove('hidden');
    }

    // Scroll tombol tab aktif ke tengah secara mulus (auto-centering)
    if (activeBtn) {
        try {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (_) {}
    }
};

/**
 * Kalkulasi & Render 4-Card Bento Stat Hub Metrik Kepegawaian
 */
const renderStaffMetrics = () => {
    const container = el('staff-metrics-container');
    if (!container) return;

    const ownerProfile = getOwnerEmployeeProfile(appData);
    const totalStaff = _cachedStaffList.length;
    const activeStaff = _cachedStaffList.filter(s => s.isActive !== false).length;
    const cashierCount = _cachedStaffList.filter(s => (s.role === ROLES.CASHIER || !s.role) && s.isActive !== false).length;
    const adminCount = _cachedStaffList.filter(s => s.role === ROLES.ADMIN && s.isActive !== false).length;
    const staffGudangCount = _cachedStaffList.filter(s => s.role === ROLES.STAFF && s.isActive !== false).length;
    const inactiveCount = _cachedStaffList.filter(s => s.isActive === false).length;
    const totalBaseSalary = _cachedStaffList.reduce((acc, s) => acc + (parseFloat(s.baseSalary) || 0), 0) + (parseFloat(ownerProfile?.baseSalary) || 10000000);

    container.innerHTML = `
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        <!-- 1. Total Tim & Staf -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Tim &amp; Staf</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-users"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${activeStaff + 1} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">/ ${totalStaff + 1} Akun</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${inactiveCount > 0 ? `${inactiveCount} Akun Dinonaktifkan` : 'Seluruh Tim Aktif'}</p>
        </div>

        <!-- 2. Kasir POS Aktif -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasir POS Aktif</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-cash-register"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${cashierCount} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Penjualan Kasir Fisik Toko</p>
        </div>

        <!-- 3. Admin & Logistik -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Admin &amp; Logistik</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
            </div>
            <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${adminCount + staffGudangCount} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Personel</span></p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">${adminCount} Admin • ${staffGudangCount} Staf Gudang</p>
        </div>

        <!-- 4. Beban Gaji Bulanan -->
        <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Beban Gaji Pokok</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background-color: var(--color-primary);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
            </div>
            <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${fCur(totalBaseSalary)}</p>
            <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-0.5">Total Gaji Tim &amp; Direksi /bln</p>
        </div>
    </div>`;
};

/**
 * Render Chiclets Filter Peran Staf dengan indikator jumlah real
 */
const renderStaffRoleFilterChiclets = () => {
    const bar = el('staff-role-filters-bar');
    if (!bar) return;

    const totalCount = _cachedStaffList.length;
    const adminCount = _cachedStaffList.filter(s => s.role === ROLES.ADMIN || s.role === ROLES.OWNER || s.role === 'admin' || s.role === 'owner').length;
    const cashierCount = _cachedStaffList.filter(s => s.role === ROLES.CASHIER || s.role === 'cashier' || !s.role).length;
    const staffCount = _cachedStaffList.filter(s => s.role === ROLES.STAFF || s.role === 'staff').length;
    const inactiveCount = _cachedStaffList.filter(s => s.isActive === false).length;

    const filters = [
        { key: 'all', label: 'Semua Staf', icon: 'fa-users', count: totalCount },
        { key: 'cashier', label: 'Kasir POS', icon: 'fa-cash-register', count: cashierCount },
        { key: 'admin', label: 'Admin Toko', icon: 'fa-shield-halved', count: adminCount },
        { key: 'staff', label: 'Staf Gudang', icon: 'fa-user-gear', count: staffCount },
    ];

    if (inactiveCount > 0) {
        filters.push({ key: 'inactive', label: 'Nonaktif', icon: 'fa-user-slash', count: inactiveCount });
    }

    bar.innerHTML = filters.map(f => {
        const isActive = _activeRoleFilter === f.key;
        return `
        <button onclick="window.filterStaffRole('${f.key}')" id="staff-filter-${f.key}"
            class="staff-filter-btn min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 shrink-0 border ${
                isActive
                    ? 'text-white border-transparent'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
            }"
            style="${isActive ? 'background: var(--color-primary);' : ''}">
            <i class="fa-solid ${f.icon} text-[10px]"></i>
            <span>${f.label}</span>
            <span class="ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}">${f.count}</span>
        </button>`;
    }).join('');
};

/**
 * Filter Peran Staf
 */
export const filterStaffRole = (role) => {
    _activeRoleFilter = role;
    renderStaffRoleFilterChiclets();
    renderStaffListHtml();
};

/**
 * Handler Pencarian Staf Realtime
 */
export const handleStaffSearch = (query) => {
    _staffSearchQuery = (query || '').toLowerCase().trim();
    const clearBtn = el('btn-clear-staff-search');
    if (clearBtn) {
        if (_staffSearchQuery) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
    }
    renderStaffListHtml();
};

/**
 * Reset Input Pencarian
 */
export const clearStaffSearch = () => {
    const input = el('staff-search-input');
    if (input) {
        input.value = '';
        input.focus();
    }
    handleStaffSearch('');
};

/**
 * Hitung Jumlah Hak Akses Modul Aktif Staf
 */
const countStaffPermissions = (staff) => {
    if (staff.role === ROLES.OWNER) return PERMISSION_DEFINITIONS.length;
    if (staff.permissions) {
        return Object.values(staff.permissions).filter(Boolean).length;
    }
    const preset = ROLE_PRESETS[staff.role] || ROLE_PRESETS[ROLES.CASHIER];
    return Object.values(preset).filter(Boolean).length;
};

/**
 * Render Kartu-Kartu Staf Terdaftar (Hero Bento Cards)
 */
const renderStaffListHtml = () => {
    const container = el('cashier-list-container');
    if (!container) return;

    let filtered = _cachedStaffList;

    // Filter berdasarkan tab peran
    if (_activeRoleFilter === 'admin') {
        filtered = filtered.filter(s => s.role === ROLES.ADMIN || s.role === ROLES.OWNER || s.role === 'admin' || s.role === 'owner');
    } else if (_activeRoleFilter === 'cashier') {
        filtered = filtered.filter(s => s.role === ROLES.CASHIER || s.role === 'cashier' || !s.role);
    } else if (_activeRoleFilter === 'staff') {
        filtered = filtered.filter(s => s.role === ROLES.STAFF || s.role === 'staff');
    } else if (_activeRoleFilter === 'inactive') {
        filtered = filtered.filter(s => s.isActive === false);
    }

    // Filter berdasarkan query pencarian teks
    if (_staffSearchQuery) {
        const q = _staffSearchQuery;
        filtered = filtered.filter(s => {
            const name = (s.name || '').toLowerCase();
            const email = (s.email || '').toLowerCase();
            const empId = (s.employeeId || '').toLowerCase();
            const phone = (s.phone || '').toLowerCase();
            const pos = (s.position || '').toLowerCase();
            return name.includes(q) || email.includes(q) || empId.includes(q) || phone.includes(q) || pos.includes(q);
        });
    }

    if (filtered.length === 0) {
        container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white/95 dark:bg-slate-800/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 text-center shadow-2xs">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                <i class="fa-solid fa-user-slash"></i>
            </div>
            <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Tidak ada staf yang cocok</h4>
            <p class="text-xs mt-1 text-slate-400 dark:text-slate-500 max-w-sm">
                ${_staffSearchQuery ? `Tidak ditemukan staf dengan kata kunci "${esc(_staffSearchQuery)}". Silakan ubah filter atau kata kunci.` : 'Belum ada akun staf pada kategori ini.'}
            </p>
            <div class="mt-4 flex items-center gap-2">
                ${_staffSearchQuery ? `
                <button onclick="window.clearStaffSearch()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer">
                    Reset Pencarian
                </button>` : ''}
                <button onclick="window.openAddStaffModal()" class="px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer active:scale-95" style="background: var(--color-primary)">
                    <i class="fa-solid fa-plus mr-1"></i> Tambah Staf Baru
                </button>
            </div>
        </div>`;
        return;
    }

    const listHtml = filtered.map((d, idx) => {
        const uid = d.uid;
        const isActive = d.isActive !== false;
        const dateStr  = d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : (d.hireDate || '-');
        const initials = (d.name || 'Staf').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'ST';
        const role = d.role || ROLES.CASHIER;
        const permCount = countStaffPermissions(d);
        const empId = d.employeeId || `EMP-${String(idx + 1).padStart(3, '0')}`;
        const position = d.position || (role === ROLES.CASHIER ? 'Kasir POS' : role === ROLES.ADMIN ? 'Admin Operasional' : 'Staf Gudang & Logistik');
        const baseSalary = parseFloat(d.baseSalary) || 0;
        const dailyAllowance = parseFloat(d.dailyAllowance) || 0;

        // Styling Avatar Pod berbasis Peran
        let avatarStyle = 'background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);';
        if (role === ROLES.ADMIN) {
            avatarStyle = 'background: rgba(37, 99, 235, 0.12); color: #2563eb; border-color: rgba(37, 99, 235, 0.25);';
        } else if (role === ROLES.STAFF) {
            avatarStyle = 'background: rgba(217, 119, 6, 0.12); color: #d97706; border-color: rgba(217, 119, 6, 0.25);';
        }

        return `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white/95 dark:bg-slate-800/95 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all">
            <div class="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-2xs border" style="${avatarStyle}">
                    ${initials}
                </div>
                <div class="min-w-0 flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">${esc(d.name || 'Staf')}</p>
                        ${getRoleBadgeHtml(role)}
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                            ${esc(empId)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-0.5 rounded-full ${isActive
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 border border-slate-200 dark:border-slate-600'}">
                            <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span>
                            ${isActive ? 'Aktif' : 'Nonaktif'}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 flex-wrap">
                        <span class="font-bold text-slate-800 dark:text-slate-100">
                            <i class="fa-solid fa-user-tag text-[10px] mr-1" style="color: var(--color-primary)"></i>${esc(position)}
                        </span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">
                            <i class="fa-solid fa-money-bill-wave text-[10px] mr-1"></i>${fCur(baseSalary)}/bln
                        </span>
                        ${dailyAllowance > 0 ? `<span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">(+${fCur(dailyAllowance)}/hr)</span>` : ''}
                    </div>
                    <div class="flex items-center gap-3 pt-0.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="inline-flex items-center gap-1 font-medium"><i class="fa-solid fa-envelope text-[10px] text-slate-400"></i> ${esc(d.email || '-')}</span>
                        ${d.phone ? `
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <a href="https://wa.me/${cleanPhone(d.phone)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline" title="Kirim Pesan WhatsApp">
                            <i class="fa-brands fa-whatsapp text-[12px]"></i> ${esc(d.phone)}
                        </a>` : ''}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 font-bold" style="color: var(--color-primary)">
                            <i class="fa-solid fa-key text-[9px]"></i> ${permCount} Modul Diizinkan
                        </span>
                        ${d.bankAccount && d.bankAccount !== '-' ? `
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-building-columns text-[10px]"></i> ${esc(d.bankName)}: ${esc(d.bankAccount)}
                        </span>` : ''}
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><i class="fa-solid fa-calendar-days text-[10px]"></i> Masuk: ${esc(dateStr)}</span>
                    </div>
                </div>
            </div>
            <!-- Tombol Aksi Hak Akses, Status & Edit -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openPermissionsModal('${esc(uid)}')"
                    title="Atur Hak Akses Modul"
                    class="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 border"
                    style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-[10px]"></i>
                    <span>Hak Akses</span>
                </button>
                <button onclick="window.toggleStaffActive('${esc(uid)}', ${!isActive})"
                    title="${isActive ? 'Nonaktifkan Akun Staf' : 'Aktifkan Akun Staf'}"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer shadow-2xs border shrink-0 ${
                        isActive
                            ? 'bg-slate-50 hover:bg-amber-50 dark:bg-slate-700/80 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-600 border-slate-200/80 dark:border-slate-700 hover:border-amber-300'
                            : 'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200 dark:border-emerald-800'
                    }">
                    <i class="fa-solid ${isActive ? 'fa-ban' : 'fa-circle-check'}"></i>
                </button>
                <button onclick="window.openEditStaffModal('${esc(uid)}', '${esc(d.name || '')}', '${esc(d.email || '')}', '${esc(role)}')"
                    title="Edit Profil Staf &amp; HR"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="window.deleteStaffAccount('${esc(uid)}', '${esc(d.name || 'Staf')}')"
                    title="Hapus Akun Staf"
                    class="w-10 h-10 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/80 dark:border-slate-700 hover:border-rose-200 transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="space-y-3">${listHtml}</div>
    <div class="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-4 px-1">
        <span>Menampilkan <strong>${filtered.length}</strong> dari <strong>${_cachedStaffList.length}</strong> staf</span>
        <button onclick="window.loadStaffList()" class="inline-flex items-center gap-1.5 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
            <i class="fa-solid fa-arrows-rotate text-[10px]"></i> Segarkan Daftar
        </button>
    </div>`;
};

/**
 * Muat Seluruh Akun Staf dari Database Cloud Firestore
 */
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

        _cachedStaffList = snap.docs.map((doc, idx) => {
            const data = doc.data() || {};
            return {
                uid: doc.id,
                ...normalizeEmployeeProfile({ uid: doc.id, ...data }, idx)
            };
        });

        // Sinkronisasi status hasCashier ke metadata toko
        const hasActiveCashier = _cachedStaffList.some(s => s.isActive !== false && s.role === ROLES.CASHIER);
        try {
            localStorage.setItem('pos_has_cashier', hasActiveCashier ? 'true' : 'false');
            await db.collection('freshmart').doc('cms_data').set({ hasCashier: hasActiveCashier }, { merge: true });
        } catch (_) {}
        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

        // Ambil data HR Owner jika ada
        try {
            const cmsDoc = await db.collection('freshmart').doc('cms_data').get();
            if (cmsDoc.exists && cmsDoc.data()?.ownerEmployee) {
                appData.ownerEmployee = cmsDoc.data().ownerEmployee;
            }
        } catch (_) {}

        appData.employees = _cachedStaffList.map((s, idx) => normalizeEmployeeProfile(s, idx));

        // Render komponen-komponen UI
        renderStaffMetrics();
        renderStaffRoleFilterChiclets();
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

// ─── Modal Tambah Staf Baru (Solid Flat Clean) ────────────────
export const openAddStaffModal = () => {
    if (!verifyOwnerAuthority('mendaftarkan staf baru')) return;

    const autoEmpId = generateEmployeeId(_cachedStaffList, 'EMP');

    // Generate permission checkboxes HTML
    const renderPermissionGroup = (groupName, groupTitle, groupIcon) => {
        const defs = PERMISSION_DEFINITIONS.filter(p => p.group === groupName);
        return `
        <div class="space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <i class="fa-solid ${groupIcon}" style="color: var(--color-primary)"></i>
                <span>${groupTitle}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${defs.map(p => `
                <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                    <input type="checkbox" name="staff_perm" value="${p.key}" class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid ${p.icon} text-[10px] text-slate-400"></i>
                            <span>${p.label}</span>
                        </p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${p.desc}</p>
                    </div>
                </label>`).join('')}
            </div>
        </div>`;
    };

    document.body.insertAdjacentHTML('beforeend', `
    <div id="add-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAddStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="add-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Daftarkan Staf &amp; Karyawan Baru</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Buat akun untuk kasir, admin, atau staf gudang/operasional</p>
                    </div>
                </div>
                <button onclick="window.closeAddStaffModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Info Akun Dasar -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Nama Lengkap Staf <span class="text-rose-500">*</span></label>
                        <input id="new-staff-name" type="text" placeholder="Contoh: Rina Kasir / Budi Gudang"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Email Login <span class="text-rose-500">*</span></label>
                        <input id="new-staff-email" type="email" placeholder="staf@tokoputri.com"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Password Staf (Min. 6 Karakter) <span class="text-rose-500">*</span></label>
                    <div class="relative">
                        <input id="new-staff-pass" type="password" placeholder="Minimal 6 karakter..."
                            autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl pl-4 pr-12 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs transition-all">
                        <button type="button" onclick="window.toggleStaffPassVisibility('new-staff-pass')"
                            class="btn-input-icon absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1.5" title="Lihat Password">
                            <i id="new-staff-pass-eye" class="fa-solid fa-eye text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Pilihan Role Pokok (4 Kolom Responsif) -->
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem <span class="text-rose-500">*</span></label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="new-staff-roles-container">
                        <label class="staff-role-card is-role-active flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-sm transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${ROLES.CASHIER}" checked onchange="window.applyNewStaffPreset('${ROLES.CASHIER}')" class="sr-only">
                            <i class="fa-solid fa-cash-register text-lg mb-1" style="color: var(--color-primary)"></i>
                            <span class="text-xs font-black">Kasir POS</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Penjualan Fisik</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-sm transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${ROLES.ADMIN}" onchange="window.applyNewStaffPreset('${ROLES.ADMIN}')" class="sr-only">
                            <i class="fa-solid fa-shield-halved text-lg mb-1 text-blue-500"></i>
                            <span class="text-xs font-black">Admin Toko</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Operasional CMS</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-sm transition-all text-center">
                            <input type="radio" name="new_staff_role" value="${ROLES.STAFF}" onchange="window.applyNewStaffPreset('${ROLES.STAFF}')" class="sr-only">
                            <i class="fa-solid fa-user-gear text-lg mb-1 text-amber-500"></i>
                            <span class="text-xs font-black">Staf Gudang</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Logistik &amp; Rak</span>
                        </label>
                        <label class="staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-sm transition-all text-center">
                            <input type="radio" name="new_staff_role" value="manager" onchange="window.applyNewStaffPreset('manager')" class="sr-only">
                            <i class="fa-solid fa-user-tie text-lg mb-1 text-purple-500"></i>
                            <span class="text-xs font-black">Manajer</span>
                            <span class="text-[9px] text-slate-400 mt-0.5">Wewenang Luas</span>
                        </label>
                    </div>
                </div>

                <!-- Bagian Master Profil & Struktur Kompensasi HR -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-id-card-clip" style="color: var(--color-primary)"></i>
                                <span>Profil Kepegawaian &amp; Struktur Kompensasi</span>
                            </h4>
                            <p class="text-[10px] text-slate-400">ID karyawan resmi, jabatan terstandarisasi, gaji pokok &amp; rekening pencairan</p>
                        </div>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800/60 shadow-2xs whitespace-nowrap shrink-0">
                            Master HR
                        </span>
                    </div>

                    <!-- Datalist Jabatan Terstandar -->
                    <datalist id="staff-positions-datalist">
                        ${STANDARD_POSITIONS.map(p => `<option value="${esc(p.label || p)}"></option>`).join('')}
                    </datalist>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                            <input id="new-staff-empid" type="text" value="${esc(autoEmpId)}" placeholder="EMP-001"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi <span class="text-rose-500">*</span></label>
                            <input id="new-staff-position" list="staff-positions-datalist" type="text" value="Kasir POS" placeholder="Pilih / ketik jabatan..."
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                            <input id="new-staff-phone" type="tel" placeholder="081234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp) <span class="text-rose-500">*</span></label>
                            <input id="new-staff-salary" type="number" min="0" step="50000" value="2500000" placeholder="2500000"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                            <input id="new-staff-allowance" type="number" min="0" step="5000" value="20000" placeholder="20000"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                            <select id="new-staff-status" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${EMPLOYMENT_STATUSES.map(s => `<option value="${s.key}">${esc(s.label)}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Pencairan Gaji</label>
                            <select id="new-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                                ${SALARY_PAYMENT_METHODS.map(m => `<option value="${m.key}">${esc(m.label)}</option>`).join('')}
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Nomor Rekening Bank</label>
                            <input id="new-staff-bank-account" type="text" placeholder="Contoh: 1234567890 (atau '-' jika tunai)"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                            <input id="new-staff-bank-holder" type="text" placeholder="Sesuai buku tabungan..."
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                        </div>
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
                            <button type="button" onclick="window.setAllNewStaffPerms(true)" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all cursor-pointer">Pilih Semua</button>
                            <button type="button" onclick="window.setAllNewStaffPerms(false)" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold active:scale-95 transition-all cursor-pointer">Kosongkan</button>
                        </div>
                    </div>

                    ${renderPermissionGroup('operasional', '1. Operasional Toko', 'fa-dolly')}
                    ${renderPermissionGroup('konten', '2. Katalog & Konten Toko', 'fa-layer-group')}
                    ${renderPermissionGroup('sensitif', '3. Finansial & Pengaturan Sensitif (Khusus Owner)', 'fa-lock')}
                </div>

                <div id="add-staff-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeAddStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffAccount()" id="save-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Daftarkan Staf
                </button>
            </div>
        </div>
    </div>`);

    // Inisialisasi preset default Kasir
    window.applyNewStaffPreset(ROLES.CASHIER);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('addStaff');
    }

    setTimeout(() => {
        const box = el('add-staff-modal-box');
        if (box) box.classList.remove('scale-95');
        const nameInput = el('new-staff-name');
        if (nameInput) nameInput.focus();
    }, 10);
};

export const closeAddStaffModal = (fH = false) => {
    const doClose = () => {
        const modal = el('add-staff-modal');
        if (modal) {
            const nEl = el('new-staff-name'); if (nEl) nEl.value = '';
            const eEl = el('new-staff-email'); if (eEl) eEl.value = '';
            const pEl = el('new-staff-pass'); if (pEl) pEl.value = '';
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('addStaff', fH, doClose);
    } else {
        doClose();
    }
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
                label.className = 'staff-role-card is-role-active flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-slate-900 dark:text-white cursor-pointer shadow-sm transition-all text-center';
            } else {
                label.className = 'staff-role-card flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer hover:border-slate-600 shadow-sm transition-all text-center';
            }
        }
    });

    // Sesuaikan jabatan default jika ada input new-staff-position
    const posInput = el('new-staff-position');
    const knownLabels = STANDARD_POSITIONS.map(p => p.label || p);
    if (posInput && (!posInput.value || knownLabels.includes(posInput.value))) {
        if (presetKey === ROLES.STAFF) posInput.value = 'Staf Gudang & Penataan Rak';
        else if (presetKey === ROLES.ADMIN) posInput.value = 'Admin Operasional & Inventori';
        else if (presetKey === 'manager') posInput.value = 'Kepala Toko / Manager';
        else posInput.value = 'Kasir POS';
    }
};

export const setAllNewStaffPerms = (val) => {
    document.querySelectorAll('#add-staff-modal input[name="staff_perm"]').forEach(cb => {
        cb.checked = !!val;
    });
};

// ─── Simpan Akun Staf Baru ───────────────────────────────────
export const saveStaffAccount = async () => {
    if (!verifyOwnerAuthority('mendaftarkan staf baru')) return;

    const name  = el('new-staff-name')?.value?.trim() || '';
    const email = el('new-staff-email')?.value?.trim() || '';
    const pass  = el('new-staff-pass')?.value || '';
    const roleRadio = document.querySelector('#add-staff-modal input[name="new_staff_role"]:checked');
    const roleValue = roleRadio ? roleRadio.value : ROLES.CASHIER;
    const finalRole = roleValue === 'manager' ? ROLES.ADMIN : roleValue;

    // Kumpulkan data profil HRD kompensasi
    const employeeId = el('new-staff-empid')?.value?.trim() || generateEmployeeId(_cachedStaffList, 'EMP');
    const position = el('new-staff-position')?.value?.trim() || (finalRole === ROLES.STAFF ? 'Staf Gudang & Logistik' : finalRole === ROLES.ADMIN ? 'Admin Operasional' : 'Kasir POS');
    const phone = el('new-staff-phone')?.value?.trim() || '';
    const baseSalary = Math.max(0, parseFloat(el('new-staff-salary')?.value) || 0);
    const dailyAllowance = Math.max(0, parseFloat(el('new-staff-allowance')?.value) || 0);
    const employmentStatus = el('new-staff-status')?.value || 'permanent';
    const paymentMethod = el('new-staff-payment-method')?.value || 'cash';
    const bankAccount = el('new-staff-bank-account')?.value?.trim() || '-';
    const bankHolder = el('new-staff-bank-holder')?.value?.trim() || name;
    const bankName = paymentMethod === 'cash' ? 'Tunai Kas Laci Toko' : (paymentMethod.toUpperCase() || 'Bank');

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
            employeeId,
            name,
            email,
            phone,
            role: finalRole,
            position,
            baseSalary,
            dailyAllowance,
            employmentStatus,
            paymentMethod,
            bankName,
            bankAccount,
            bankHolder,
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

        const pEl = el('new-staff-pass'); if (pEl) pEl.value = '';
        const nEl = el('new-staff-name'); if (nEl) nEl.value = '';
        const eEl = el('new-staff-email'); if (eEl) eEl.value = '';
        closeAddStaffModal();
        showToast(`Akun "${name}" (${finalRole.toUpperCase()}) berhasil didaftarkan!`, 'success');
        await loadStaffList();

        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

    } catch (err) {
        console.error('[StaffAdmin] Gagal membuat akun staf:', err);
        const isPerm = err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'));
        const code = err.code || '';
        if (isPerm) {
            showErr('Akses Ditolak Firebase: Hanya akun Owner yang berwenang menambahkan staf ke Firestore.');
        } else if (code === 'auth/email-already-in-use') {
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

// ─── Modal Atur Hak Akses Staf (Solid Flat Clean) ────────────
export const openPermissionsModal = (uid) => {
    if (!verifyOwnerAuthority('mengatur hak akses staf')) return;

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
                <i class="fa-solid ${groupIcon}" style="color: var(--color-primary)"></i>
                <span>${groupTitle}</span>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${defs.map(p => {
                    const isChecked = currentPerms[p.key] === true;
                    return `
                    <label class="flex items-start gap-2.5 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.3)] transition-all cursor-pointer text-left">
                        <input type="checkbox" name="edit_staff_perm" value="${p.key}" ${isChecked ? 'checked' : ''} class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30 w-4 h-4 cursor-pointer" style="accent-color: var(--color-primary)">
                        <div class="min-w-0 flex-1">
                            <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid ${p.icon} text-[10px] text-slate-400"></i>
                                <span>${p.label}</span>
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${p.desc}</p>
                        </div>
                    </label>`;
                }).join('')}
            </div>
        </div>`;
    };

    document.body.insertAdjacentHTML('beforeend', `
    <div id="permissions-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closePermissionsModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="permissions-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Atur Hak Akses: ${esc(staff.name || 'Staf')}</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Sesuaikan modul yang boleh dibuka oleh akun ini</p>
                    </div>
                </div>
                <button onclick="window.closePermissionsModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- 1-Click Preset Bar -->
                <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/90 dark:border-slate-700/80">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Preset Cepat 1-Klik:</span>
                        <div class="flex items-center gap-2 text-[11px]">
                            <button type="button" onclick="window.setAllEditStaffPerms(true)" class="text-xs font-bold hover:underline active:scale-95 transition-all cursor-pointer" style="color: var(--color-primary)">Pilih Semua</button>
                            <span class="text-slate-300">•</span>
                            <button type="button" onclick="window.setAllEditStaffPerms(false)" class="text-xs text-rose-500 font-bold hover:underline active:scale-95 transition-all cursor-pointer">Kosongkan</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.CASHIER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-cash-register text-[11px] text-emerald-500"></i>
                            <span>Kasir POS</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.ADMIN}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-shield-halved text-[11px] text-blue-500"></i>
                            <span>Admin Ops</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('manager')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-user-tie text-[11px]" style="color: var(--color-primary)"></i>
                            <span>Manajer</span>
                        </button>
                        <button type="button" onclick="window.applyEditStaffPreset('${ROLES.OWNER}')" class="py-2.5 px-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-amber-500 hover:text-amber-600 transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-crown text-[11px] text-amber-500"></i>
                            <span>Full Akses</span>
                        </button>
                    </div>
                </div>

                ${renderPermissionGroup('operasional', '1. Operasional Toko', 'fa-dolly')}
                ${renderPermissionGroup('konten', '2. Katalog & Konten Toko', 'fa-layer-group')}
                ${renderPermissionGroup('sensitif', '3. Finansial & Pengaturan Sensitif (Khusus Owner)', 'fa-lock')}
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closePermissionsModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveStaffPermissions('${esc(uid)}')" id="save-perms-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Hak Akses
                </button>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('permissions');
    }

    setTimeout(() => {
        const box = el('permissions-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closePermissionsModal = (fH = false) => {
    const doClose = () => {
        const modal = el('permissions-modal');
        if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('permissions', fH, doClose);
    } else {
        doClose();
    }
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
    if (!verifyOwnerAuthority('mengubah hak akses staf')) return;

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

        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).set({
            permissions,
            role: detectedRole,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        closePermissionsModal();
        showToast('Hak akses berhasil diperbarui!', 'success');
        await loadStaffList();

    } catch (err) {
        console.error('[StaffAdmin] Gagal menyimpan hak akses:', err);
        const isPerm = err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'));
        if (isPerm) {
            showToast('Izin Ditolak Firebase: Pastikan login dengan Akun Owner dan aturan firestore.rules sudah dipublikasikan di Firebase Console.', 'error');
        } else {
            showToast('Gagal memperbarui hak akses: ' + (err.message || 'Terjadi kesalahan sistem'), 'error');
        }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Hak Akses'; }
    } finally {
        hLoad();
    }
};

// ─── Modal Edit Profil Staf (Data Akun & HR Kompensasi) ───────
export const openEditStaffModal = (uid, currentName, currentEmail, currentRole) => {
    if (!verifyOwnerAuthority('mengubah profil staf')) return;

    const staff = _cachedStaffList.find(s => s.uid === uid) || {};
    const name = currentName || staff.name || '';
    const email = currentEmail || staff.email || '';
    const role = currentRole || staff.role || ROLES.CASHIER;
    const employeeId = staff.employeeId || 'EMP-001';
    const position = staff.position || (role === ROLES.CASHIER ? 'Kasir POS' : role === ROLES.ADMIN ? 'Admin Operasional' : 'Staf Gudang & Logistik');
    const phone = staff.phone || '';
    const baseSalary = staff.baseSalary || 0;
    const dailyAllowance = staff.dailyAllowance || 0;
    const employmentStatus = staff.employmentStatus || 'permanent';
    const paymentMethod = staff.paymentMethod || 'cash';
    const bankName = staff.bankName || 'BCA';
    const bankAccount = staff.bankAccount && staff.bankAccount !== '-' ? staff.bankAccount : '';
    const bankHolder = staff.bankHolder || name;

    document.body.insertAdjacentHTML('beforeend', `
    <div id="edit-staff-modal" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeEditStaffModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="edit-staff-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shadow-xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-user-pen"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Edit Profil &amp; HR Staf</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${esc(employeeId)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Perbarui data personal, peran, kompensasi &amp; rekening</p>
                    </div>
                </div>
                <button onclick="window.closeEditStaffModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <div class="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Datalist Jabatan Terstandar -->
                <datalist id="edit-staff-positions-datalist">
                    ${STANDARD_POSITIONS.map(p => `<option value="${esc(p.label || p)}"></option>`).join('')}
                </datalist>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Nama Staf <span class="text-rose-500">*</span></label>
                        <input id="edit-staff-name" type="text" value="${esc(name)}"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">Role Pokok Sistem</label>
                        <select id="edit-staff-role" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            <option value="${ROLES.CASHIER}" ${role === ROLES.CASHIER ? 'selected' : ''}>Kasir POS (Penjualan)</option>
                            <option value="${ROLES.ADMIN}" ${role === ROLES.ADMIN ? 'selected' : ''}>Admin Toko (Operasional CMS)</option>
                            <option value="${ROLES.STAFF}" ${role === ROLES.STAFF ? 'selected' : ''}>Staf Gudang &amp; Logistik</option>
                            <option value="${ROLES.OWNER}" ${role === ROLES.OWNER ? 'selected' : ''}>Co-Owner / Wakil Owner</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">ID Karyawan</label>
                        <input id="edit-staff-empid" type="text" value="${esc(employeeId)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Jabatan Resmi</label>
                        <input id="edit-staff-position" list="edit-staff-positions-datalist" type="text" value="${esc(position)}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. WhatsApp / HP</label>
                        <input id="edit-staff-phone" type="tel" value="${esc(phone)}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Gaji Pokok Bulanan (Rp)</label>
                        <input id="edit-staff-salary" type="number" min="0" step="50000" value="${baseSalary}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Tunjangan Harian / Uang Makan (Rp/Hari)</label>
                        <input id="edit-staff-allowance" type="number" min="0" step="5000" value="${dailyAllowance}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Status Hubungan Kerja</label>
                        <select id="edit-staff-status" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${EMPLOYMENT_STATUSES.map(s => `<option value="${s.key}" ${employmentStatus === s.key ? 'selected' : ''}>${esc(s.label)}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Metode Bayar Gaji</label>
                        <select id="edit-staff-payment-method" class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                            ${SALARY_PAYMENT_METHODS.map(m => `<option value="${m.key}" ${paymentMethod === m.key ? 'selected' : ''}>${esc(m.label)}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Bank</label>
                        <input id="edit-staff-bank-name" type="text" value="${esc(bankName)}" placeholder="BCA / BRI"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">No. Rekening</label>
                        <input id="edit-staff-bank-account" type="text" value="${esc(bankAccount)}" placeholder="1234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Atas Nama Rekening</label>
                        <input id="edit-staff-bank-holder" type="text" value="${esc(bankHolder)}" placeholder="Nama Pemilik"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-3.5 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] shadow-2xs">
                    </div>
                </div>

                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Login (Permanen)</label>
                    <input type="email" value="${esc(email)}" disabled
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-staff-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800"></div>
            </div>

            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeEditStaffModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.updateStaffProfile('${esc(uid)}')" id="update-staff-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Profil &amp; HR
                </button>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('editStaff');
    }

    setTimeout(() => {
        const box = el('edit-staff-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeEditStaffModal = (fH = false) => {
    const doClose = () => {
        const modal = el('edit-staff-modal');
        if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('editStaff', fH, doClose);
    } else {
        doClose();
    }
};

export const updateStaffProfile = async (uid) => {
    if (!verifyOwnerAuthority('mengubah profil staf')) return;

    const name = el('edit-staff-name')?.value?.trim() || '';
    const role = el('edit-staff-role')?.value || ROLES.CASHIER;
    const employeeId = el('edit-staff-empid')?.value?.trim() || 'EMP-001';
    const position = el('edit-staff-position')?.value?.trim() || 'Staf Toko';
    const phone = el('edit-staff-phone')?.value?.trim() || '';
    const baseSalary = Math.max(0, parseFloat(el('edit-staff-salary')?.value) || 0);
    const dailyAllowance = Math.max(0, parseFloat(el('edit-staff-allowance')?.value) || 0);
    const employmentStatus = el('edit-staff-status')?.value || 'permanent';
    const paymentMethod = el('edit-staff-payment-method')?.value || 'cash';
    const bankName = el('edit-staff-bank-name')?.value?.trim() || (paymentMethod === 'cash' ? 'Tunai Kas Laci Toko' : (paymentMethod.toUpperCase() || 'Bank'));
    const bankAccount = el('edit-staff-bank-account')?.value?.trim() || '-';
    const bankHolder = el('edit-staff-bank-holder')?.value?.trim() || name;

    const errEl = el('edit-staff-error');
    const btn = el('update-staff-btn');

    if (!name) {
        if (errEl) { errEl.textContent = 'Nama staf tidak boleh kosong.'; errEl.classList.remove('hidden'); }
        return;
    }

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'; }
    sLoad('Memperbarui profil staf...');

    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).set({
            name,
            role,
            employeeId,
            position,
            phone,
            baseSalary,
            dailyAllowance,
            employmentStatus,
            paymentMethod,
            bankName,
            bankAccount,
            bankHolder,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        closeEditStaffModal();
        showToast('Profil staf & data HR berhasil diperbarui!', 'success');
        await loadStaffList();
    } catch (err) {
        const isPerm = err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'));
        const msg = isPerm ? 'Izin ditolak oleh Firebase (Khusus Akun Owner).' : err.message;
        if (errEl) { errEl.textContent = 'Gagal memperbarui: ' + msg; errEl.classList.remove('hidden'); }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan'; }
    } finally {
        hLoad();
    }
};

// ─── Modal Profil & Gaji HR Owner (Direksi) ─────────────────
export const openOwnerHrModal = () => {
    if (!verifyOwnerAuthority('mengatur profil dan gaji owner')) return;

    const ownerProfile = getOwnerEmployeeProfile(appData);

    const existingModal = el('modal-owner-hr');
    if (existingModal) existingModal.remove();

    document.body.insertAdjacentHTML('beforeend', `
    <div id="modal-owner-hr" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeOwnerHrModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="owner-hr-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            
            <!-- Modal Header (Solid Flat Clean) -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-md text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-crown text-amber-300"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Atur Kompensasi &amp; HR Owner</span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold"
                                style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">OWN-001</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Gaji resmi pemilik toko terpisah dari laba usaha (Tata Kelola Modern)</p>
                    </div>
                </div>
                <button onclick="window.closeOwnerHrModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <div class="p-3.5 rounded-2xl text-xs flex items-start gap-2.5 text-slate-800 dark:text-slate-200"
                    style="background: rgba(var(--color-primary-rgb), 0.06); border: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                    <i class="fa-solid fa-lightbulb text-amber-500 text-sm mt-0.5 shrink-0"></i>
                    <p class="leading-relaxed">
                        <strong>Standar Akuntansi &amp; Bisnis Sehat:</strong> Pemilik toko berhak menerima gaji bulanan tetap sebagai pengelola operasional. Biaya ini tercatat resmi di beban operasional dan laporan perpajakan usaha toko.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor ID Karyawan Owner</label>
                        <input id="owner-hr-empid" type="text" value="${esc(ownerProfile.employeeId || 'OWN-001')}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono font-bold cursor-not-allowed" readonly>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemilik / Direktur <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-name" type="text" value="${esc(ownerProfile.name || 'Pemilik Toko')}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Jabatan Resmi</label>
                        <input id="owner-hr-position" type="text" value="${esc(ownerProfile.position || 'Owner / Direktur Utama')}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">No. WhatsApp Pribadi</label>
                        <input id="owner-hr-phone" type="tel" value="${esc(ownerProfile.phone || '')}" placeholder="081234567890"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Gaji Pokok Direksi (Rp/Bulan) <span class="text-rose-500">*</span></label>
                        <input id="owner-hr-salary" type="number" min="0" step="50000" value="${ownerProfile.baseSalary || 10000000}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-bold transition-all shadow-2xs">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tunjangan Bulanan Direksi (Rp)</label>
                        <input id="owner-hr-allowance" type="number" min="0" step="50000" value="${ownerProfile.dailyAllowance || 0}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                    </div>
                </div>

                <!-- Informasi Rekening Bank Owner -->
                <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-3">
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-building-columns" style="color: var(--color-primary)"></i> Rekening Penerimaan Gaji
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Bank</label>
                            <input id="owner-hr-bank-name" type="text" value="${esc(ownerProfile.bankName || 'BCA')}" placeholder="BCA / Mandiri / BRI"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nomor Rekening</label>
                            <input id="owner-hr-bank-account" type="text" value="${esc(ownerProfile.bankAccount && ownerProfile.bankAccount !== '-' ? ownerProfile.bankAccount : '')}" placeholder="1234567890"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white font-mono transition-all shadow-2xs">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Atas Nama Rekening</label>
                            <input id="owner-hr-bank-holder" type="text" value="${esc(ownerProfile.bankHolder || ownerProfile.name || '')}" placeholder="Nama Pemilik"
                                class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] text-slate-900 dark:text-white transition-all shadow-2xs">
                        </div>
                    </div>
                </div>

                <div id="owner-hr-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeOwnerHrModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveOwnerHrProfile()" id="save-owner-hr-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary);">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Kompensasi Owner
                </button>
            </div>
        </div>
    </div>`);

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('ownerHr');
    }

    setTimeout(() => {
        const box = el('owner-hr-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeOwnerHrModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-owner-hr');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 200);
        }
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('ownerHr', fH, doClose);
    } else {
        doClose();
    }
};

export const saveOwnerHrProfile = async () => {
    if (!verifyOwnerAuthority('menyimpan kompensasi owner')) return;

    const name = el('owner-hr-name')?.value?.trim() || 'Pemilik Toko';
    const position = el('owner-hr-position')?.value?.trim() || 'Owner / Direktur Utama';
    const phone = el('owner-hr-phone')?.value?.trim() || '';
    const baseSalary = Math.max(0, parseFloat(el('owner-hr-salary')?.value) || 0);
    const dailyAllowance = Math.max(0, parseFloat(el('owner-hr-allowance')?.value) || 0);
    const bankName = el('owner-hr-bank-name')?.value?.trim() || 'BCA';
    const bankAccount = el('owner-hr-bank-account')?.value?.trim() || '-';
    const bankHolder = el('owner-hr-bank-holder')?.value?.trim() || name;

    const errEl = el('owner-hr-error');
    const btn = el('save-owner-hr-btn');

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan ke Cloud...'; }
    sLoad('Menyimpan data kompensasi owner...');

    try {
        const ownerEmployeeData = {
            employeeId: 'OWN-001',
            name,
            position,
            phone,
            baseSalary,
            dailyAllowance,
            employmentStatus: 'permanent',
            bankName,
            bankAccount,
            bankHolder,
            role: ROLES.OWNER,
            isActive: true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await db.collection('freshmart').doc('cms_data').set({
            ownerEmployee: ownerEmployeeData
        }, { merge: true });

        appData.ownerEmployee = ownerEmployeeData;

        closeOwnerHrModal();
        showToast('Data kompensasi Owner berhasil diperbarui!', 'success');
        await renderCashierAccounts();

    } catch (err) {
        console.error('[OwnerHr] Gagal menyimpan data owner:', err);
        if (errEl) {
            errEl.textContent = 'Gagal menyimpan: ' + (err.message || 'Terjadi kesalahan sistem');
            errEl.classList.remove('hidden');
        }
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Kompensasi Owner';
        }
    } finally {
        hLoad();
    }
};

// ─── Toggle Aktif / Nonaktif ─────────────────────────────────
export const toggleStaffActive = async (uid, newStatus) => {
    if (!verifyOwnerAuthority('mengubah status aktif staf')) return;

    sLoad(newStatus ? 'Mengaktifkan staf...' : 'Menonaktifkan staf...');
    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).set({
            isActive: newStatus,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        showToast(newStatus ? 'Akun staf diaktifkan' : 'Akun staf dinonaktifkan', 'success');
        await loadStaffList();
    } catch (err) {
        const isPerm = err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'));
        if (isPerm) {
            showToast('Akses Ditolak: Hanya akun Owner yang berwenang mengubah status staf.', 'error');
        } else {
            showToast('Gagal mengubah status staf: ' + err.message, 'error');
        }
    } finally {
        hLoad();
    }
};

// ─── Hapus Akun Staf ─────────────────────────────────────────
export const deleteStaffAccount = (uid, name) => {
    if (!verifyOwnerAuthority('menghapus akun staf')) return;

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
                const isPerm = err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'));
                if (isPerm) {
                    showToast('Akses Ditolak: Hanya akun Owner yang berwenang menghapus staf.', 'error');
                } else {
                    showToast('Gagal menghapus staf: ' + err.message, 'error');
                }
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
    window.initCashierAdminTabsSlider   = initCashierAdminTabsSlider;
    window.filterStaffRole              = filterStaffRole;
    window.handleStaffSearch            = handleStaffSearch;
    window.clearStaffSearch             = clearStaffSearch;
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
    window.openOwnerHrModal             = openOwnerHrModal;
    window.closeOwnerHrModal            = closeOwnerHrModal;
    window.saveOwnerHrProfile           = saveOwnerHrProfile;
    window.toggleStaffActive            = toggleStaffActive;
    window.deleteStaffAccount           = deleteStaffAccount;
    window.toggleStaffPassVisibility    = toggleStaffPassVisibility;
    window.verifyOwnerAuthority         = verifyOwnerAuthority;

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

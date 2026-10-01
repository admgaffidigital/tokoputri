/**
 * ============================================================
 * MODUL ADMIN: OTENTIKASI & DASHBOARD REPORT
 * Mengelola login/logout admin via Firebase Auth, verifikasi UID,
 * perhitungan statistik inventaris/aset, serta laporan penjualan.
 * ============================================================
 */

import { auth, db, firebase, ADMIN_UID } from '../../config/firebase.js';
import { 
    appData, setCTab, aOrdLst, setAOrdLst, aCustLst, setACustLst, 
    aRevLst, setARevLst, lastReportPeriod, setLastReportPeriod 
} from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, setV, getV, 
    fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../core/utils.js';
import { 
    claimAdminSession, 
    attachAdminSessionGuard, 
    detachAdminSessionGuard, 
    isCurrentSessionActive,
    setLoggingIn 
} from './session.js';
import {
    ROLES,
    getActiveStaff,
    setActiveStaff,
    clearActiveStaff,
    isOwnerUser,
    isAdminUser,
    isCashierUser,
    hasPermission,
    getRoleBadgeHtml
} from '../../core/auth-roles.js';

/**
 * Terapkan penyaringan menu navigasi dashboard CMS sesuai hak akses akun aktif
 */
export const applyStaffMenuPermissions = () => {
    const dashboardView = el('admin-dashboard-view');
    if (!dashboardView) return;

    // Mapping tab ke izin yang dibutuhkan
    const tabPermissionMap = {
        'orders': 'orders',
        'products': 'products',
        'suppliers': 'suppliers',
        'purchases': 'purchases',
        'settings': 'settings',
        'categories': 'categories',
        'brands': 'brands',
        'colors': 'colors',
        'vouchers': 'vouchers',
        'banks': 'banks',
        'banners': 'banners',
        'customers': 'customers',
        'rewards': 'rewards',
        'reviews': 'reviews',
        'faqs': 'faqs',
        'reports': 'reports',
        'tax': 'reports',
        'piutang': 'piutang',
        'changelog': 'changelog',
        'pos': 'pos',
        'cashiers': 'cashiers',
        'backup_sync': 'backup_sync'
    };

    // Cari semua tombol navigasi menu di dashboard admin
    const menuButtons = dashboardView.querySelectorAll('button[onclick*="openAdminTab"]');
    menuButtons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        const match = onclickAttr.match(/openAdminTab\(['"]([^'"]+)['"]\)/);
        if (match && match[1]) {
            const tabKey = match[1];
            const permKey = tabPermissionMap[tabKey] || tabKey;
            const allowed = hasPermission(permKey);
            if (allowed) {
                btn.classList.remove('hidden');
                btn.style.display = '';
            } else {
                btn.classList.add('hidden');
                btn.style.display = 'none';
            }
        }
    });

    // Perbarui badge role & nama akun di header dashboard
    const staff = getActiveStaff();
    const roleBadgeEl = el('admin-header-role-badge');
    if (roleBadgeEl) {
        if (isOwnerUser()) {
            roleBadgeEl.innerHTML = '<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-amber-300 drop-shadow-xs"><i class="fa-solid fa-crown text-[8px]"></i> Owner</span>';
        } else if (staff?.role === ROLES.ADMIN) {
            roleBadgeEl.innerHTML = `<span class="inline-flex items-center gap-1 text-[9px] font-black uppercase text-blue-200 drop-shadow-xs"><i class="fa-solid fa-shield-halved text-[8px]"></i> Admin (${staff.name || 'Staf'})</span>`;
        } else {
            roleBadgeEl.innerHTML = '<span class="text-[9px] font-bold uppercase text-white/90">Seller</span>';
        }
    }
};

/**
 * Cek akses admin atau redirect ke halaman login
 */
export const checkAdminAccess = async () => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (window.isAdm || isLocal) {
        // Hanya verifikasi auto kick-out jika pengguna adalah Owner utama (di luar lingkungan dev lokal)
        if (isOwnerUser() && !isLocal) {
            const active = await isCurrentSessionActive();
            if (!active && auth.currentUser) {
                detachAdminSessionGuard();
                localStorage.removeItem('freshmart_admin_session_id');
                clearActiveStaff();
                await auth.signOut();
                window.isAdm = false;
                window.__localIsAdm = false;
                showToast("Sesi Owner telah diambil alih oleh perangkat lain.");
                setV('login-username', '');
                setV('login-password', '');
                if (typeof window.changeView === 'function') window.changeView('view-admin-login');
                return;
            }
        }

        window.__localIsAdm = true;
        if (typeof window.changeView === 'function') window.changeView('view-admin');
        if (isOwnerUser()) attachAdminSessionGuard();
        if (auth.currentUser) {
            openAdminMenu();
        } else {
            const unsub = auth.onAuthStateChanged(() => {
                unsub();
                openAdminMenu();
            });
        }
    } else {
        setV('login-username', '');
        setV('login-password', '');
        if (typeof window.changeView === 'function') window.changeView('view-admin-login');
    }
};

/**
 * Buka menu beranda admin CMS seller
 */
export const openAdminMenu = () => { 
    if (isOwnerUser()) attachAdminSessionGuard();
    const adminView = el('view-admin');
    if (adminView) adminView.classList.remove('admin-pos-mode');
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    if (typeof window.hideFloatingScrollTop === 'function') window.hideFloatingScrollTop();
    show('admin-dashboard-view'); 
    hide('admin-content-view'); 
    hide('btn-admin-back'); 
    show('admin-logo-box'); 
    setIn('admin-header-title', 'CMS SELLER'); 
    
    setCTab('');
    window.cTab = '';
    try {
        if (history.state && history.state.tab) {
            history.replaceState({ view: 'view-admin' }, '', window.location.href);
        }
    } catch(e) {}
    
    if (typeof window.detachPOSHistoryListener === 'function') window.detachPOSHistoryListener();
    if (aOrdLst) { aOrdLst(); setAOrdLst(null); } 
    if (aCustLst) { aCustLst(); setACustLst(null); } 
    if (aRevLst) { aRevLst(); setARevLst(null); } 
    
    // Terapkan izin menu dinamis ke tombol-tombol dashboard
    applyStaffMenuPermissions();

    loadAdminReport(lastReportPeriod); 
    toggleTaxMenuVisibility(); 
};

/**
 * Tampilkan tombol menu Pajak hanya jika PPN diaktifkan di toko DAN memiliki izin
 */
export const toggleTaxMenuVisibility = () => {
    const btn = el('admin-menu-tax-btn');
    if (!btn) return;
    const hasTaxPerm = hasPermission('tax');
    const ppnOn = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
    if (ppnOn && hasTaxPerm) { 
        btn.classList.remove('hidden'); 
        btn.classList.add('flex'); 
    } else { 
        btn.classList.add('hidden'); 
        btn.classList.remove('flex'); 
    }
};

/**
 * Hitung statistik inventaris produk, varian, dan total modal aset tertanam
 */
export const computeInventoryStats = () => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let activeProd = 0, inactiveProd = 0, activeVar = 0, inactiveVar = 0, assetHpp = 0, assetJual = 0;
    (appData.products || []).forEach(p => {
        if (p.variants && p.variants.length) {
            p.variants.forEach(v => {
                const isAct = v.isActive !== false && v.isActive !== 'false';
                const stock = parseFloat(v.stock) || 0;
                const purchasable = isAct && (!useStk || stock > 0);
                if (purchasable) activeVar++; else inactiveVar++;
                assetHpp += (parseFloat(v.hpp) || 0) * stock;
                assetJual += (parseFloat(v.price) || 0) * stock;
            });
        } else {
            const isAct = p.isActive !== false && p.isActive !== 'false';
            const stock = parseFloat(p.stock) || 0;
            const purchasable = isAct && (!useStk || stock > 0);
            if (purchasable) activeProd++; else inactiveProd++;
            assetHpp += (parseFloat(p.hpp) || 0) * stock;
            assetJual += (parseFloat(p.price) || 0) * stock;
        }
    });
    return { activeProd, inactiveProd, activeVar, inactiveVar, assetHpp, assetJual };
};

/**
 * Muat ringkasan omset penjualan & laba bersih sesuai periode
 */
const adminReportCache = new Map();
const ADMIN_REPORT_CACHE_TTL = 2 * 60 * 1000; // 2 menit

/**
 * Muat ringkasan omset penjualan & laba bersih sesuai periode
 */
export const loadAdminReport = async (period = 'month') => {
    setLastReportPeriod(period);
    const container = el('admin-report-container');
    if (!container) return;

    // Periksa apakah akun berhak melihat laporan finansial/laba toko
    if (!hasPermission('view_reports')) {
        setH('admin-report-container', `
            <div class="p-6 sm:p-8 bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <p class="text-xs font-black text-slate-800 dark:text-white">Laporan Keuangan Dibatasi</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-sm leading-relaxed">
                    Informasi omset, modal HPP, margin laba kotor, dan laba bersih toko dirahasiakan & hanya dapat diakses oleh akun dengan izin laporan finansial (Owner).
                </p>
            </div>
        `);
        return;
    }

    document.querySelectorAll('.report-period-btn').forEach(b => {
        const active = b.dataset.period === period;
        b.style.background = active ? 'var(--color-primary)' : 'transparent';
        b.style.color = active ? 'var(--color-primary-contrast, #fff)' : '';
        b.style.boxShadow = active ? '0 2px 8px rgba(var(--color-primary-rgb),0.35)' : 'none';
    });

    const renderReportUI = ({ totalPenjualan, totalHppTerjual, totalDiskonProduk, orderCount, truncated }) => {
        const labaKotor = totalPenjualan - totalHppTerjual;
        const labaBersih = labaKotor - totalDiskonProduk;
        const periodLabel = { today: 'Hari Ini', week: 'Minggu Ini', month: 'Bulan Ini', all: 'Sepanjang Waktu' }[period] || '';

        setH('admin-report-container', `
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${periodLabel})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(totalPenjualan)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${orderCount} pesanan${truncated ? ' (≥3000, dibatasi)' : ''}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${fCur(labaKotor)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${fCur(totalHppTerjual)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${fCur(labaBersih)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `);
    };

    // 1. Cek in-memory cache
    const cached = adminReportCache.get(period);
    if (cached && (Date.now() - cached.timestamp < ADMIN_REPORT_CACHE_TTL)) {
        renderReportUI(cached.data);
        return;
    }

    setH('admin-report-container', `<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>`);

    let startDate = null;
    const now = new Date();
    if (period === 'today') {
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (period === 'week') {
        const day = now.getDay();
        const diffToMonday = day === 0 ? 6 : day - 1;
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday);
    } else if (period === 'month') {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    let totalPenjualan = 0, totalHppTerjual = 0, totalDiskonProduk = 0, orderCount = 0, truncated = false;
    try {
        if (!auth.currentUser) {
            setH('admin-report-container', `<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>`);
            return;
        }
        let q = db.collection("freshmart_orders");
        if (startDate) q = q.where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(startDate));
        const snap = await q.limit(3000).get();
        truncated = snap.size >= 3000;
        snap.forEach(doc => {
            const o = doc.data();
            if (o.status === 'Dibatalkan') return;
            orderCount++;
            totalPenjualan += parseFloat(o.payment?.subtotal) || 0;
            totalDiskonProduk += parseFloat(o.payment?.productDiscount) || 0;
            (o.items || []).forEach(it => {
                const hppItem = (it.hpp !== undefined && it.hpp !== null) 
                    ? parseFloat(it.hpp) 
                    : (typeof window.getEffHpp === 'function' ? window.getEffHpp(it) : 0);
                totalHppTerjual += (parseFloat(hppItem) || 0) * (parseFloat(it.qty) || 0);
            });
        });

        const reportData = { totalPenjualan, totalHppTerjual, totalDiskonProduk, orderCount, truncated };
        adminReportCache.set(period, { data: reportData, timestamp: Date.now() });
        renderReportUI(reportData);
    } catch(e) { 
        console.error('Gagal memuat laporan penjualan:', e); 
    }
};

/**
 * Eksekusi login terpadu cerdas (Smart Unified Login)
 * Otomatis mendeteksi role akun: Owner, Admin, atau Kasir POS
 */
export const processAdminLogin = async () => {
    const u = getV('login-username');
    const p = getV('login-password');
    if (!u || !p) return showToast("Email & Password wajib diisi!");
    
    setLoggingIn(true);
    sLoad('Verifikasi Akun & Hak Akses...');
    try {
        const cred = await auth.signInWithEmailAndPassword(u, p);
        const loggedInUser = cred.user || auth.currentUser;
        if (!loggedInUser) throw new Error('AUTH_FAILED');

        // 1. JIKA AKUN ADALAH OWNER UTAMA (ADMIN_UID)
        if (loggedInUser.uid === ADMIN_UID) {
            const mySessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
            localStorage.setItem('freshmart_admin_session_id', mySessionId);
            await claimAdminSession(mySessionId);
            attachAdminSessionGuard();

            setActiveStaff({
                uid: ADMIN_UID,
                name: 'Owner Toko',
                email: u,
                role: ROLES.OWNER,
                isActive: true
            });

            window.isAdm = true;
            window.__localIsAdm = true;
            history.replaceState({ view: 'view-admin' }, '', window.location.href);
            if (typeof window.changeView === 'function') window.changeView('view-admin', true);
            openAdminMenu();
            showToast("Selamat datang, Pemilik Toko! 👑", "success");
            return;
        }

        // 2. CEK APAKAH TERDAFTAR SEBAGAI STAF (ADMIN ATAU KASIR) DI FIRESTORE
        const staffDoc = await db.collection('freshmart').doc('cms_data')
            .collection('cashier_accounts').doc(loggedInUser.uid).get();

        if (!staffDoc.exists) {
            await auth.signOut();
            localStorage.removeItem('freshmart_admin_session_id');
            clearActiveStaff();
            throw new Error('STAFF_NOT_FOUND');
        }

        const staffData = staffDoc.data() || {};
        if (staffData.isActive === false) {
            await auth.signOut();
            localStorage.removeItem('freshmart_admin_session_id');
            clearActiveStaff();
            throw new Error('STAFF_INACTIVE');
        }

        const staffProfile = {
            uid: loggedInUser.uid,
            name: staffData.name || u,
            email: staffData.email || u,
            role: staffData.role || ROLES.CASHIER,
            permissions: staffData.permissions || null,
            isActive: true
        };
        setActiveStaff(staffProfile);

        // Catat waktu login terakhir (non-blocking)
        staffDoc.ref.update({
            lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(() => {});

        // 2A. JIKA ROLE ADALAH KASIR POS
        if (staffProfile.role === ROLES.CASHIER) {
            try {
                const posAuthMod = await import('../pos/pos-auth.js');
                if (posAuthMod && typeof posAuthMod.setCashierSession === 'function') {
                    posAuthMod.setCashierSession(staffProfile);
                }
            } catch (_) {}
            try { localStorage.setItem('pos_has_cashier', 'true'); } catch (_) {}
            if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

            // Alihkan langsung ke mode POS Kasir!
            history.replaceState({ view: 'view-pos-cashier' }, '', window.location.href);
            if (typeof window.changeView === 'function') window.changeView('view-pos-cashier', true);
            showToast(`Login Berhasil! Selamat bertugas di Kasir, ${staffProfile.name || 'Kasir'}! 🛒`, "success");
            return;
        }

        // 2B. JIKA ROLE ADALAH ADMIN OPERASIONAL ATAU CO-OWNER
        window.isAdm = true;
        window.__localIsAdm = true;
        history.replaceState({ view: 'view-admin' }, '', window.location.href);
        if (typeof window.changeView === 'function') window.changeView('view-admin', true);
        openAdminMenu();
        showToast(`Login Berhasil! Selamat bertugas, ${staffProfile.name || 'Admin'}! 🛡️`, "success");

    } catch(error) {
        console.error(error);
        localStorage.removeItem('freshmart_admin_session_id');
        clearActiveStaff();
        if (error.message === 'STAFF_NOT_FOUND') {
            showToast("Login Ditolak: Akun Anda tidak terdaftar sebagai staf Toko Putri!");
        } else if (error.message === 'STAFF_INACTIVE') {
            showToast("Login Ditolak: Akun Anda dinonaktifkan oleh Owner Toko.");
        } else if (error.message && error.message.startsWith('UID_MISMATCH:')) {
            showToast("Login Ditolak: Akun tidak memiliki hak akses CMS.");
        } else {
            showToast("Login Ditolak: Email atau Password salah!");
        }
    } finally {
        setLoggingIn(false);
        hLoad();
    }
};

/**
 * Logout admin dan reset seluruh state keamanan
 */
export const logoutAdmin = async () => { 
    sLoad('Keluar...');
    try {
        if (isOwnerUser()) detachAdminSessionGuard();
        localStorage.removeItem('freshmart_admin_session_id');
        clearActiveStaff();
        // Detach seluruh Firestore realtime listeners SEBELUM signOut agar tidak terpicu permission-denied
        if (typeof window.detachPOSHistoryListener === 'function') {
            window.detachPOSHistoryListener();
        }
        if (aOrdLst) { aOrdLst(); setAOrdLst(null); } 
        if (aCustLst) { aCustLst(); setACustLst(null); } 
        if (aRevLst) { aRevLst(); setARevLst(null); } 
        await auth.signOut();
        window.isAdm = false; 
        window.__localIsAdm = false;
        window.isPro = false; 
        if (typeof window.updateProBadge === 'function') window.updateProBadge();
        showToast("Berhasil Logout");
        if (typeof window.changeView === 'function') window.changeView('view-catalog');
    } catch(e) {
        showToast("Gagal Logout");
    } finally {
        hLoad();
    }
};

export const confirmLogoutAdmin = () => {
    showConfirm(
        "Keluar Seller",
        "Apakah anda akan keluar dari dashboard seller?",
        () => { logoutAdmin(); },
        "Ya, Keluar",
        true
    );
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.__checkAdminAccessReal = checkAdminAccess;
window.checkAdminAccess = checkAdminAccess;
window.openAdminMenu = openAdminMenu;
window.toggleTaxMenuVisibility = toggleTaxMenuVisibility;
window.computeInventoryStats = computeInventoryStats;
window.loadAdminReport = loadAdminReport;
window.processAdminLogin = processAdminLogin;
window.logoutAdmin = logoutAdmin;
window.confirmLogoutAdmin = confirmLogoutAdmin;


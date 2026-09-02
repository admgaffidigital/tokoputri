/**
 * ============================================================
 * MODUL ADMIN: OTENTIKASI & DASHBOARD REPORT
 * Mengelola login/logout admin via Firebase Auth, verifikasi UID,
 * perhitungan statistik inventaris/aset, serta laporan penjualan.
 * ============================================================
 */

import { auth, db, firebase, ADMIN_UID } from '../../config/firebase.js';
import { 
    appData, aOrdLst, setAOrdLst, aCustLst, setACustLst, 
    aRevLst, setARevLst, lastReportPeriod, setLastReportPeriod 
} from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, setV, getV, 
    fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../core/utils.js';


/**
 * Cek akses admin atau redirect ke halaman login
 */
export const checkAdminAccess = () => {
    if (window.isAdm || window.location.hostname === 'localhost') {
        window.__localIsAdm = true;
        if (typeof window.changeView === 'function') window.changeView('view-admin');
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
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    show('admin-dashboard-view'); 
    hide('admin-content-view'); 
    hide('btn-admin-back'); 
    show('admin-logo-box'); 
    setIn('admin-header-title', 'CMS SELLER'); 
    
    if (aOrdLst) { aOrdLst(); setAOrdLst(null); } 
    if (aCustLst) { aCustLst(); setACustLst(null); } 
    if (aRevLst) { aRevLst(); setARevLst(null); } 
    
    loadAdminReport(lastReportPeriod); 
    toggleTaxMenuVisibility(); 
};

/**
 * Tampilkan tombol menu Pajak hanya jika PPN diaktifkan di toko
 */
export const toggleTaxMenuVisibility = () => {
    const btn = el('admin-menu-tax-btn');
    if (!btn) return;
    const ppnOn = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
    if (ppnOn) { 
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
export const loadAdminReport = async (period) => {
    setLastReportPeriod(period);
    document.querySelectorAll('.report-period-btn').forEach(b => {
        const active = b.dataset.period === period;
        b.style.background = active ? 'var(--color-primary)' : 'transparent';
        b.style.color = active ? 'var(--color-primary-contrast, #fff)' : '';
        b.style.boxShadow = active ? '0 2px 8px rgba(var(--color-primary-rgb),0.35)' : 'none';
    });
    const container = el('admin-report-container');
    if (!container) return;
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
    } catch(e) { 
        console.error('Gagal memuat laporan penjualan:', e); 
    }

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
                <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${fCur(labaBersih)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon Produk</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${fCur(totalHppTerjual)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
            </div>
        </div>
    `);
};

/**
 * Eksekusi login admin dengan validasi Firebase Auth & UID matching
 */
export const processAdminLogin = async () => {
    const u = getV('login-username');
    const p = getV('login-password');
    if (!u || !p) return showToast("Email & Password wajib diisi!");
    
    sLoad('Verifikasi Login...');
    try {
        await auth.signInWithEmailAndPassword(u, p);
        if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
            const currentUid = auth.currentUser ? auth.currentUser.uid : 'null';
            await auth.signOut();
            throw new Error('UID_MISMATCH: ' + currentUid);
        }

        window.isAdm = true; 
        history.replaceState({ view: 'view-admin' }, '', window.location.href);
        if (typeof window.changeView === 'function') window.changeView('view-admin', true); 
        openAdminMenu();
        showToast("Login Berhasil!");
    } catch(error) {
        console.error(error);
        if (error.message && error.message.startsWith('UID_MISMATCH:')) {
            const uidStr = error.message.replace('UID_MISMATCH: ', '');
            showToast("Login Ditolak: UID Anda (" + uidStr + ") tidak cocok dengan ADMIN_UID!");
        } else {
            showToast("Login Ditolak: Email atau Password salah!");
        }
    } finally {
        hLoad();
    }
};

/**
 * Logout admin dan reset state
 */
export const logoutAdmin = async () => { 
    sLoad('Keluar...');
    try {
        await auth.signOut();
        window.isAdm = false; 
        window.__localIsAdm = false;
        window.isPro = false; 
        if (typeof window.updateProBadge === 'function') window.updateProBadge();
        if (aOrdLst) { aOrdLst(); setAOrdLst(null); } 
        if (aCustLst) { aCustLst(); setACustLst(null); }
        if (aRevLst) { aRevLst(); setARevLst(null); }
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
window.checkAdminAccess = checkAdminAccess;
window.openAdminMenu = openAdminMenu;
window.toggleTaxMenuVisibility = toggleTaxMenuVisibility;
window.computeInventoryStats = computeInventoryStats;
window.loadAdminReport = loadAdminReport;
window.processAdminLogin = processAdminLogin;
window.logoutAdmin = logoutAdmin;
window.confirmLogoutAdmin = confirmLogoutAdmin;


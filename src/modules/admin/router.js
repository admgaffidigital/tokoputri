/**
 * ============================================================
 * MODUL ADMIN: TAB ROUTER & NAVIGATION
 * Mengatur pergantian tab admin (pesanan, pengaturan, produk,
 * kategori, merek, bank, banner, voucher, database pelanggan,
 * program hadiah, ulasan pelanggan, FAQ, pajak, dan piutang).
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { 
    appData, cTab, setCTab, aSq, setASq, 
    aOrdLst, setAOrdLst, aCustLst, setACustLst, 
    aRevLst, setARevLst, gReviews, setGReviews 
} from '../../core/state.js';
import { el, show, hide, setIn, setH, showToast } from '../../core/utils.js';
import { hasPermission } from '../../core/auth-roles.js';

/**
 * Tampilan pemulihan anggun jika terjadi kegagalan muat chunk/modul lazy
 */
const renderModuleLoadError = (moduleTitle, tabKey, err) => {
    console.error(`[AdminRouter] Gagal memuat modul ${moduleTitle}:`, err);
    setH('admin-content', `
        <div class="max-w-md mx-auto my-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-2xl">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Gagal Memuat ${moduleTitle}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Modul gagal diunduh dari server. Hal ini biasanya terjadi jika koneksi terputus atau versi aplikasi baru saja diperbarui di server.
            </p>
            <div class="flex items-center justify-center gap-3">
                <button type="button" onclick="openAdminTab('${tabKey}')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all cursor-pointer active:scale-95">
                    <i class="fa-solid fa-rotate-right mr-1.5"></i> Coba Lagi
                </button>
                <button type="button" onclick="window.location.reload()" class="px-4 py-2.5 rounded-xl text-white text-xs font-black shadow-sm transition-all cursor-pointer active:scale-95 hover:opacity-95" style="background: var(--color-primary);">
                    <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Segarkan Halaman
                </button>
            </div>
        </div>
    `);
};

// Proxy auto-loader: jika ada pemanggilan window.openExpenseModal sebelum expenses.js selesai dimuat,
// panggil dynamic import internal Vite agar modul dimuat secara mulus ke chunk asset resmi.
if (typeof window.openExpenseModal !== 'function') {
    window.openExpenseModal = (expenseId = null) => {
        import('./expenses.js').then(m => {
            if (m && typeof m.openExpenseModal === 'function') {
                m.openExpenseModal(expenseId);
            }
        }).catch(err => {
            console.error('[Expenses] Gagal memuat modal pengeluaran via proxy:', err);
            showToast('Gagal memuat form pengeluaran.');
        });
    };
}

export const openAdminTab = (t, fH = false) => {
    // Verifikasi hak akses pengguna untuk modul ini
    const permKey = t === 'staff' ? 'cashiers' : t;
    if (!hasPermission(permKey)) {
        showToast("Akses Dibatasi: Akun Anda tidak memiliki izin untuk membuka modul ini.");
        if (typeof window.openAdminMenu === 'function') window.openAdminMenu();
        return;
    }

    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    if (typeof window.hideFloatingScrollTop === 'function') window.hideFloatingScrollTop();
    
    const adminView = el('view-admin');
    if (adminView) {
        if (t === 'pos') adminView.classList.add('admin-pos-mode');
        else adminView.classList.remove('admin-pos-mode');
    }
    
    setCTab(t);
    setASq('');
    
    if (!fH) {
        const curState = history.state;
        if (curState && curState.view === 'view-admin' && curState.tab) {
            history.replaceState({ view: 'view-admin', tab: t }, '', window.location.href);
        } else {
            history.pushState({ view: 'view-admin', tab: t }, '', window.location.href);
        }
    }

    hide('admin-dashboard-view');
    show('admin-content-view');
    show('btn-admin-back');
    hide('admin-logo-box');
    
    const titles = {
        'orders': 'Pesanan',
        'settings': 'Toko',
        'products': 'Produk',
        'categories': 'Kategori',
        'brands': 'Merek',
        'banks': 'Rekening',
        'banners': 'Banner',
        'vouchers': 'Voucher',
        'customers': 'Database Pelanggan',
        'rewards': 'Program Hadiah',
        'reviews': 'Ulasan Pelanggan',
        'faqs': 'Tanya Jawab / Q&A',
        'reports': 'Pusat Laporan & Keuangan',
        'tax': 'Pusat Laporan & Keuangan',
        'expenses': 'Biaya Operasional Toko',
        'stock_opname': 'Stock Opname (Audit Fisik)',
        'piutang': 'Piutang Tempo',
        'colors': 'Database Warna',
        'changelog': 'Log Pembaruan Sistem',
        'suppliers': 'Supplier & Rekanan',
        'purchases': 'Order Pembelian & Hutang PO',
        'pos': 'Kasir POS',
        'cashiers': 'Kelola Staf & Hak Akses',
        'staff': 'Kelola Staf & Hak Akses',
        'backup_sync': 'Pusat Data & Sinkronisasi'
    };
    
    setIn('admin-header-title', titles[t] || 'CMS');
    
    if (t !== 'orders' && aOrdLst) { aOrdLst(); setAOrdLst(null); }
    if (t !== 'customers' && aCustLst) { aCustLst(); setACustLst(null); }
    if (t !== 'reviews' && aRevLst) { aRevLst(); setARevLst(null); }

    if (t === 'settings') {
        if (typeof window.rAdmSet === 'function') window.rAdmSet();
    } else if (t === 'orders') {
        if (typeof window.rAdmOrd === 'function') window.rAdmOrd();
    } else if (t === 'reports' || t === 'tax') {
        // Lazy load modul Pusat Laporan & Keuangan Terpadu
        import('./reports.js').then(m => m.renderReportsHubView(t === 'tax' ? 'tax' : null)).catch(err => {
            renderModuleLoadError('Pusat Laporan & Keuangan', t, err);
        });
    } else if (t === 'piutang') {
        if (typeof window.rAdmPiutang === 'function') window.rAdmPiutang();
    } else if (t === 'suppliers') {
        // Lazy load modul master data supplier & asal-usul barang
        import('./suppliers.js').then(m => m.renderSuppliersView()).catch(err => {
            renderModuleLoadError('Supplier & Rekanan', t, err);
        });
    } else if (t === 'purchases') {
        // Lazy load modul order pembelian (PO) & hutang rekanan
        import('./purchases.js').then(m => m.renderPurchasesView()).catch(err => {
            renderModuleLoadError('Order Pembelian (PO)', t, err);
        });
    } else if (t === 'expenses') {
        // Lazy load modul pencatatan biaya operasional & buku kas pengeluaran
        import('./expenses.js').then(m => m.renderExpensesAdminView()).catch(err => {
            renderModuleLoadError('Biaya Operasional Toko', t, err);
        });
    } else if (t === 'stock_opname') {
        // Lazy load modul Stock Opname & Audit Inventori Fisik
        import('./stock-opname.js').then(m => m.renderStockOpnameView()).catch(err => {
            renderModuleLoadError('Stock Opname (Audit Fisik)', t, err);
        });
    } else if (t === 'customers') {
        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aCustLst) { aCustLst(); setACustLst(null); }
        const unsubCust = db.collection("freshmart").doc("cms_data").collection("customers")
            .onSnapshot(snap => {
                appData.customers = snap.docs.map(d => {
                    const cData = d.data();
                    if (parseFloat(cData.paylaterUsed) < 0) {
                        cData.paylaterUsed = 0;
                        d.ref.update({ paylaterUsed: 0 }).catch(() => {});
                    }
                    return cData;
                });
                if (typeof window.rAdmL === 'function') window.rAdmL('customers');
            }, () => { 
                showToast("Gagal memuat data pelanggan!"); 
                if (typeof window.rAdmL === 'function') window.rAdmL('customers'); 
            });
        setACustLst(unsubCust);
    } else if (t === 'reviews') {
        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aRevLst) { aRevLst(); setARevLst(null); }
        const unsubRev = db.collection("freshmart").doc("cms_data").collection("reviews")
            .onSnapshot(snap => {
                const reviews = snap.docs.map(d => d.data());
                reviews.sort((a, b) => {
                    const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
                    const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
                    return tb - ta;
                });
                setGReviews(reviews);
                if (typeof window.rAdmReviews === 'function') window.rAdmReviews();
            }, () => { showToast("Gagal memuat ulasan!"); });
        setARevLst(unsubRev);
    } else if (t === 'faqs') {
        if (typeof window.rAdmFAQ === 'function') window.rAdmFAQ();
    } else if (t === 'changelog') {
        if (typeof window.rAdmChangelog === 'function') window.rAdmChangelog();
    } else if (t === 'rewards') {
        if (typeof window.attachRewardsRealtime === 'function') window.attachRewardsRealtime();
        if (typeof window.rAdmL === 'function') window.rAdmL('rewards');
    } else if (t === 'pos') {
        // Lazy load modul POS — hanya dimuat saat kasir dibuka
        import('../../modules/pos/pos.js').then(m => m.renderPOS()).catch(err => {
            renderModuleLoadError('Kasir POS', t, err);
        });
    } else if (t === 'cashiers' || t === 'staff') {
        // Lazy load modul manajemen staf & hak akses
        import('../../modules/pos/pos-cashier-admin.js').then(m => m.renderCashierAccounts()).catch(err => {
            renderModuleLoadError('Kelola Staf & Hak Akses', t, err);
        });
    } else if (t === 'backup_sync') {
        // Lazy load modul pusat data, backup & sinkronisasi
        import('./backup-sync.js').then(m => m.renderBackupSyncView()).catch(err => {
            renderModuleLoadError('Pusat Data & Sinkronisasi', t, err);
        });
    } else {
        if (typeof window.rAdmL === 'function') window.rAdmL(t);
    }
};

// ─── Expose ke window untuk navigasi inline HTML ──────
window.openAdminTab = openAdminTab;

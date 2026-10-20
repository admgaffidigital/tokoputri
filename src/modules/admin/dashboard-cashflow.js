/**
 * ============================================================
 * MODUL ADMIN: WIDGET ARUS KAS & POSISI FINANSIAL HARIAN (DASHBOARD)
 * (Executive Daily Cash Flow & Liquidity Summary Hub)
 * 
 * Menampilkan ringkasan likuiditas keuangan hari ini di CMS Owner/Admin:
 * 1. Kas Tunai Laci Kasir Hari Ini (Cash Payments)
 * 2. Pemasukan Rekening Bank & QRIS Hari Ini (Non-Cash Payments)
 * 3. Pengeluaran Toko Hari Ini (Operational Expenses)
 * 4. Estimasi Arus Kas Bersih Masuk Hari Ini (Net Inflow Cash Flow)
 * ============================================================
 */

import { db, firebase, auth } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, fCur, showToast, esc } from '../../core/utils.js';
import { hasPermission, isOwnerUser } from '../../core/auth-roles.js';

// Cache in-memory ringkasan kas harian (TTL 1 menit)
let cashflowCache = null;
let cashflowCacheTime = 0;
const CACHE_TTL_MS = 60 * 1000;

/**
 * Format tanggal lokal YYYY-MM-DD
 */
const getTodayDateStr = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

/**
 * Tarik & hitung data arus kas hari ini
 */
export const calculateTodayCashflow = async (forceRefresh = false) => {
    const now = Date.now();
    if (!forceRefresh && cashflowCache && (now - cashflowCacheTime < CACHE_TTL_MS)) {
        return cashflowCache;
    }

    const todayStr = getTodayDateStr();

    // 1. Hitung total pengeluaran beban operasional hari ini
    const allExpenses = Array.isArray(appData.expenses) ? appData.expenses : [];
    const todayExpenses = allExpenses.filter(e => e && e.date === todayStr);
    const totalExpenseToday = todayExpenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
    const expenseCountToday = todayExpenses.length;

    // 2. Hitung penerimaan pesanan hari ini dari Firestore
    let totalCashToday = 0;
    let totalBankToday = 0;
    let todayOrderCount = 0;

    try {
        if (auth.currentUser) {
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);

            const snap = await db.collection("freshmart_orders")
                .where("timestamp", ">=", firebase.firestore.Timestamp.fromDate(startOfDay))
                .get()
                .catch(() => null);

            if (snap && !snap.empty) {
                snap.forEach(doc => {
                    const o = doc.data();
                    if (!o || o.status === 'Dibatalkan' || o.status === 'Test') return;
                    todayOrderCount++;

                    const total = parseFloat(o.payment?.finalAmount ?? o.payment?.total ?? o.total) || 0;
                    const method = String(o.payment?.method || o.paymentMethod || 'cash').toLowerCase();

                    if (method === 'cash' || method === 'tunai') {
                        totalCashToday += total;
                    } else if (method === 'tempo') {
                        // Uang muka (DP) tunai atau transfer
                        const dpPaid = parseFloat(o.payment?.dpAmount || o.payment?.amountPaid) || 0;
                        if (dpPaid > 0) {
                            const dpMethod = String(o.payment?.dpMethod || 'cash').toLowerCase();
                            if (dpMethod === 'cash' || dpMethod === 'tunai') totalCashToday += dpPaid;
                            else totalBankToday += dpPaid;
                        }
                    } else {
                        // Transfer Bank, QRIS, Kartu Debit
                        totalBankToday += total;
                    }
                });
            }
        }
    } catch (e) {
        console.warn('[DashboardCashflow] Menggunakan kalkulasi lokal/offline:', e);
    }

    const totalInflowToday = totalCashToday + totalBankToday;
    const netCashFlowToday = totalInflowToday - totalExpenseToday;

    cashflowCache = {
        todayStr,
        totalCashToday,
        totalBankToday,
        totalInflowToday,
        totalExpenseToday,
        netCashFlowToday,
        todayOrderCount,
        expenseCountToday
    };
    cashflowCacheTime = now;

    return cashflowCache;
};

/**
 * Render widget arus kas di halaman beranda admin
 */
export const renderDashboardCashflowWidget = async (forceRefresh = false) => {
    const slot = el('admin-dashboard-cashflow-slot');
    if (!slot) return;

    // Proteksi privasi: Hanya tampil jika akun memiliki hak akses melihat laporan finansial
    if (!hasPermission('view_reports')) {
        slot.classList.add('hidden');
        slot.innerHTML = '';
        return;
    }

    slot.classList.remove('hidden');

    // Tampilkan placeholder loading jika belum ada cache
    if (!cashflowCache || forceRefresh) {
        slot.innerHTML = `
            <div class="bento-island-card rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-xs mb-7 text-center">
                <div class="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-spinner fa-spin text-sm" style="color:var(--color-primary)"></i>
                    <span>Memuat Ringkasan Arus Kas Hari Ini...</span>
                </div>
            </div>
        `;
    }

    const data = await calculateTodayCashflow(forceRefresh);

    const isNetPositive = data.netCashFlowToday >= 0;
    const netColorClass = isNetPositive 
        ? 'text-emerald-600 dark:text-emerald-400' 
        : 'text-rose-600 dark:text-rose-400';

    slot.innerHTML = `
        <div class="mb-7 space-y-3">
            <!-- Header Widget Arus Kas (Anti-Wrap, Anti-Tumpuk & Seimbang di Segala Resolusi) -->
            <div class="flex items-center justify-between gap-2 px-1">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold border shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                        <i class="fa-solid fa-vault"></i>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                            <span>Arus Kas Hari Ini</span>
                            <span class="hidden sm:inline text-[10px] font-bold text-slate-400 normal-case whitespace-nowrap">(${data.todayStr})</span>
                        </h3>
                    </div>
                </div>

                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                    <button type="button" onclick="window.refreshDashboardCashflow()" class="h-8 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap shadow-2xs" title="Perbarui Ringkasan Kas Hari Ini">
                        <i class="fa-solid fa-rotate text-[11px]" id="dashboard-cashflow-refresh-icon"></i>
                        <span class="text-[11px] whitespace-nowrap">Segarkan</span>
                    </button>
                    <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('reports')" class="h-8 px-2.5 rounded-xl border font-bold text-xs transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1 shrink-0 whitespace-nowrap shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Buka Pusat Laporan Keuangan Lengkap">
                        <span class="text-[11px] whitespace-nowrap">Laporan P&amp;L</span>
                        <i class="fa-solid fa-chevron-right text-[9px] shrink-0"></i>
                    </button>
                </div>
            </div>

            <!-- Bento 4-Card Cash Flow Grid (100% Solid & Clean) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                <!-- 1. KAS TUNAI HARI INI -->
                <div class="bento-island-card card-modern p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Kas Tunai (Laci)</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-money-bill-wave"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight truncate">${fCur(data.totalCashToday)}</p>
                        <div class="flex items-center justify-between mt-1 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">Pembayaran Tunai</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('pos')" class="hover:text-emerald-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">Buka POS &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 2. TRANSFER BANK & QRIS HARI INI -->
                <div class="bento-island-card card-modern p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Bank &amp; QRIS</span>
                        <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-building-columns"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-sky-400 tracking-tight truncate">${fCur(data.totalBankToday)}</p>
                        <div class="flex items-center justify-between mt-1 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">Rekening Riil Toko</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('orders')" class="hover:text-blue-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">Pesanan &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 3. PENGELUARAN TOKO HARI INI -->
                <div class="bento-island-card card-modern p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Pengeluaran</span>
                        <div class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400 tracking-tight truncate">${fCur(data.totalExpenseToday)}</p>
                        <div class="flex items-center justify-between mt-1 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">${data.expenseCountToday} beban hari ini</span>
                            <button type="button" onclick="if(window.openExpenseModal) window.openExpenseModal(); else if(window.openAdminTab) window.openAdminTab('expenses')" class="hover:text-rose-500 hover:underline cursor-pointer whitespace-nowrap shrink-0">+ Catat &rarr;</button>
                        </div>
                    </div>
                </div>

                <!-- 4. ARUS KAS BERSIH HARI INI -->
                <div class="bento-island-card card-modern p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between transition-all hover:-translate-y-0.5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Arus Kas Bersih</span>
                        <div class="w-8 h-8 rounded-xl text-white flex items-center justify-center text-xs shadow-xs shrink-0" style="background: var(--color-primary)">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg sm:text-xl font-black tracking-tight truncate ${netColorClass}">${fCur(data.netCashFlowToday)}</p>
                        <div class="flex items-center justify-between mt-1 text-[10px] font-bold text-slate-400 gap-1">
                            <span class="truncate">(Kas + Bank) − Beban</span>
                            <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('reports')" class="hover:opacity-80 hover:underline cursor-pointer whitespace-nowrap shrink-0" style="color:var(--color-primary)">Analisis &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/**
 * Helper refresh manual dari tombol di UI
 */
window.refreshDashboardCashflow = async () => {
    const icon = el('dashboard-cashflow-refresh-icon');
    if (icon) icon.classList.add('fa-spin');
    await renderDashboardCashflowWidget(true);
    if (icon) icon.classList.remove('fa-spin');
    showToast('Ringkasan arus kas berhasil diperbarui', 'info');
};

window.renderDashboardCashflowWidget = renderDashboardCashflowWidget;

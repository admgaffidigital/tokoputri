/**
 * ============================================================
 * MODUL ADMIN: PUSAT LAPORAN & ANALITIKA KEUANGAN TERPADU
 * Toko Putri v1.10.13
 * 
 * Single Source of Truth untuk seluruh analitika toko:
 * 1. Ringkasan Eksekutif & Laba Rugi Komprehensif (P&L Financial Statement)
 * 2. Laporan Penjualan & Kasir (Metode Bayar, Top Produk, Performa Kasir)
 * 3. Laporan Stok & Valuasi Aset Gudang (Nilai Modal HPP, Nilai Jual, Stok Kritis)
 * 4. Laporan Utang & Piutang Terpadu (Piutang Pelanggan vs Utang Supplier Rekanan)
 * 5. Laporan Biaya Operasional (Gaji, Listrik, Sewa, Kemasan, Pemeliharaan)
 * 6. Laporan Perpajakan RI 2026 (PPN 0%/11%/12%, PPh Final UMKM 0,5% PP 55/2022)
 * 7. Laporan Neraca Keuangan Seimbang (Balance Sheet)
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData, isSaving, setIsSaving } from '../../core/state.js';
import { 
    el, show, hide, setH, setIn, getV, esc, fCur, 
    showToast, showConfirm, sLoad, hLoad, toggleCls, 
    openWhatsApp, normalizeWA, renderProductCoverHtml 
} from '../../core/utils.js';
import { computeInventoryStats } from './auth.js';
import { computePurchaseMetrics } from './purchases.js';
import { getTempoOrderCalculations } from './tempo.js';
import { 
    fetchTaxPeriodData, getTaxPeriodTotals, getTaxPeriodExpenses, 
    saveMonthlyExpense, saveBalanceField, saveTaxSettingsPanel, 
    openTaxDocPreview, MONTH_NAMES, getEffHpp 
} from './finance.js';

// ─── State Modul Laporan Terpadu ──────────────────────────────
export let reportActiveTab = 'executive'; // 'executive' | 'sales' | 'stock' | 'debts' | 'expenses' | 'tax' | 'balance'
export let reportYear = new Date().getFullYear();
export let reportMonth = 0; // 0 = Setahun Penuh, 1-12 = Bulan Tertentu
export let reportSalesPeriod = 'month'; // 'today' | 'week' | 'month' | 'year' | 'all'
export let reportStockFilter = 'all'; // 'all' | 'low' | 'empty' | 'safe'
export let reportStockCategory = 'all';
export let reportDebtFilter = 'all'; // 'all' | 'late' | 'due_soon' | 'active'
export let reportSearchQuery = '';

// Cache internal query pesanan untuk analitika penjualan & piutang
let cachedReportOrders = [];
let cachedPiutangOrders = [];
let cachedSalesMetrics = null;
let lastFetchKey = '';

// Kategori Standar Beban Operasional Toko
import { EXPENSE_CATEGORIES } from './schema.js';
export { EXPENSE_CATEGORIES };

/**
 * Helper ekstraksi objek Date dari berbagai format timestamp pesanan
 */
export const parseOrderDate = (o) => {
    if (!o) return null;
    let d = null;
    if (o.timestamp?.toDate) {
        d = o.timestamp.toDate();
    } else if (o.createdAt?.toDate) {
        d = o.createdAt.toDate();
    } else if (o.dateMs) {
        d = new Date(o.dateMs);
    } else if (o.dateString) {
        d = new Date(o.dateString);
    } else if (typeof o.timestamp === 'number') {
        d = new Date(o.timestamp);
    } else if (typeof o.timestamp === 'string') {
        d = new Date(o.timestamp);
    } else if (typeof o.createdAt === 'string') {
        d = new Date(o.createdAt);
    }
    return (d && !isNaN(d.getTime())) ? d : null;
};

/**
 * Tarik data pesanan lengkap untuk periode aktif (Realtime & Multi-format)
 */
export const fetchReportOrdersData = async (forceRefresh = false) => {
    const fetchKey = `${reportYear}-${reportMonth}`;
    if (!forceRefresh && lastFetchKey === fetchKey && cachedReportOrders.length > 0) {
        return { orders: cachedReportOrders, piutang: cachedPiutangOrders };
    }

    cachedReportOrders = [];
    cachedPiutangOrders = [];

    try {
        // 1. Tarik pesanan dari Firestore freshmart_orders
        const snap = await db.collection("freshmart_orders")
            .orderBy("timestamp", "desc")
            .limit(2000)
            .get()
            .catch(async () => {
                // Fallback jika belum ada composite index: ambil tanpa orderBy
                return await db.collection("freshmart_orders").limit(2000).get();
            });

        snap.forEach(doc => {
            const o = doc.data();
            if (o.status === 'Dibatalkan' || o.status === 'Test') return;

            const orderDate = parseOrderDate(o);
            if (!orderDate) return;

            const oYear = orderDate.getFullYear();
            const oMonth = orderDate.getMonth() + 1; // 1-12

            // Filter tahun
            if (oYear !== reportYear) return;
            // Filter bulan jika bukan setahun penuh (0)
            if (reportMonth !== 0 && oMonth !== reportMonth) return;

            cachedReportOrders.push(o);
        });

        // 2. Tarik seluruh piutang tempo yang belum lunas (aktif & menunggak)
        const qPiutang = db.collection("freshmart_orders")
            .where("payment.method", "==", "tempo")
            .where("payment.paymentStatus", "==", "hutang");
        
        const snapPiutang = await qPiutang.get();
        snapPiutang.forEach(doc => {
            cachedPiutangOrders.push(doc.data());
        });

        lastFetchKey = fetchKey;
    } catch (e) {
        console.error('[ReportsHub] Gagal memuat data transaksi:', e);
        showToast('Gagal memuat data transaksi laporan: ' + e.message);
    }

    return { orders: cachedReportOrders, piutang: cachedPiutangOrders };
};

/**
 * Hitung kalkulasi angka finansial & pajak mandiri untuk pesanan periode aktif
 */
export const getReportFinancialTotals = () => {
    let omset = 0;
    let ppn = 0;
    let hpp = 0;
    let disc = 0;
    let orderCount = cachedReportOrders.length;

    cachedReportOrders.forEach(o => {
        const dppVal = (o.payment?.dppAmount !== undefined && o.payment?.dppAmount !== null) 
            ? parseFloat(o.payment.dppAmount) 
            : (parseFloat(o.payment?.subtotal) || 0);
        
        omset += dppVal;
        ppn += parseFloat(o.payment?.ppnAmount) || 0;
        disc += parseFloat(o.payment?.productDiscount) || 0;

        (o.items || []).forEach(it => {
            const hppItem = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : (getEffHpp(it) || 0);
            hpp += (parseFloat(hppItem) || 0) * (parseFloat(it.qty) || 1);
        });
    });

    return { omset, ppn, hpp, disc, orderCount };
};

/**
 * Hitung kalkulasi rincian operasional bulanan
 */
export const getExpenseBreakdownForPeriod = () => {
    const expBreakdown = appData.taxSettings?.expenseBreakdown || {};
    const monthlyExp = appData.taxSettings?.monthlyExpenses || {};
    const allExpenses = Array.isArray(appData.expenses) ? appData.expenses : [];
    const months = reportMonth === 0 ? Array.from({length: 12}, (_, i) => i + 1) : [reportMonth];
    
    const summary = {
        total: 0,
        transactionCount: 0,
        categories: {},
        periodExpenses: []
    };
    EXPENSE_CATEGORIES.forEach(c => { summary.categories[c.key] = 0; });

    // 1. Agregasi dari transaksi buku kas operasional (Itemized Expense Ledger)
    allExpenses.forEach(exp => {
        if (!exp || !exp.date) return;
        const [expYStr, expMStr] = exp.date.split('-');
        const expY = parseInt(expYStr, 10);
        const expM = parseInt(expMStr, 10);

        if (expY === reportYear && (reportMonth === 0 || expM === reportMonth)) {
            const amt = parseFloat(exp.amount) || 0;
            const catKey = exp.category || 'lainnya';
            if (summary.categories[catKey] !== undefined) {
                summary.categories[catKey] += amt;
            } else {
                summary.categories['lainnya'] += amt;
            }
            summary.total += amt;
            summary.transactionCount++;
            summary.periodExpenses.push(exp);
        }
    });

    // Urutkan transaksi periode ini (terbaru duluan)
    summary.periodExpenses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 2. Fallback untuk bulan yang belum memiliki transaksi itemized di Buku Kas:
    // Gunakan input manual dari taxSettings.monthlyExpenses agar data legacy tetap utuh
    months.forEach(m => {
        const k = `${reportYear}-${m}`;
        const hasTransactionsInMonth = allExpenses.some(exp => {
            if (!exp || !exp.date) return false;
            const [y, mon] = exp.date.split('-');
            return parseInt(y, 10) === reportYear && parseInt(mon, 10) === m;
        });

        if (!hasTransactionsInMonth) {
            const detail = expBreakdown[k];
            if (detail) {
                EXPENSE_CATEGORIES.forEach(c => {
                    summary.categories[c.key] += (parseFloat(detail[c.key]) || 0);
                });
                summary.total += (parseFloat(monthlyExp[k]) || 0);
            } else {
                const rawVal = parseFloat(monthlyExp[k]) || 0;
                summary.total += rawVal;
                summary.categories['lainnya'] += rawVal;
            }
        }
    });

    return summary;
};

/**
 * Entry point utama membuka Pusat Laporan & Keuangan Terpadu
 */
export const renderReportsHubView = async (initialTab = null) => {
    if (initialTab) reportActiveTab = initialTab;
    const content = el('admin-content');
    if (!content) return;

    setH('admin-content', `
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `);

    // Tarik data paralel
    await Promise.all([
        fetchTaxPeriodData(reportYear),
        fetchReportOrdersData()
    ]);

    renderReportsShell();
};

/**
 * Render bingkai & bilah navigasi tab laporan
 */
export const renderReportsShell = () => {
    const yearOptions = Array.from({length: 6}, (_, i) => new Date().getFullYear() - 4 + i);
    const periodLabel = reportMonth === 0 ? `Setahun Penuh (${reportYear})` : `${MONTH_NAMES[reportMonth - 1]} ${reportYear}`;

    const tabs = [
        { k: 'executive', l: 'Ringkasan & Laba Rugi', i: 'fa-chart-pie', sub: 'P&L Statement' },
        { k: 'sales', l: 'Penjualan & Kasir', i: 'fa-chart-line', sub: 'Omset & Kas' },
        { k: 'stock', l: 'Stok & Aset Gudang', i: 'fa-boxes-stacked', sub: 'Valuasi Inventori' },
        { k: 'debts', l: 'Utang & Piutang', i: 'fa-scale-balanced', sub: 'AP & AR Hub' },
        { k: 'expenses', l: 'Biaya Operasional', i: 'fa-money-bill-transfer', sub: 'Beban Toko' },
        { k: 'tax', l: 'Perpajakan RI 2026', i: 'fa-file-invoice-dollar', sub: 'PPN & PPh Final' },
        { k: 'balance', l: 'Neraca Keuangan', i: 'fa-scale-unbalanced', sub: 'Aset & Modal' }
    ];

    const tabsHTML = tabs.map(tab => {
        const isActive = reportActiveTab === tab.k;
        return `
            <button type="button" onclick="switchReportTab('${tab.k}')" class="group flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 snap-start ${
                isActive 
                ? 'bg-[var(--color-primary)] text-white shadow-2xs font-black' 
                : 'bg-slate-50 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.06)]'
            }">
                <div class="w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]'} transition-colors">
                    <i class="fa-solid ${tab.i} text-[10px]"></i>
                </div>
                <span>${tab.l}</span>
            </button>
        `;
    }).join('');

    setH('admin-content', `
        <div class="space-y-4 sm:space-y-6">
            <!-- 1. HEADER KONTROL PUSAT LAPORAN TERPADU (NATIVE APP BAR) -->
            <div class="rounded-2xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.04)] dark:from-slate-900 dark:via-slate-900 dark:to-[rgba(var(--color-primary-rgb),0.08)] p-3.5 sm:p-5 shadow-2xs space-y-3.5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-chart-pie text-lg sm:text-xl"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <h1 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider truncate">Pusat Laporan &amp; Keuangan</h1>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Live</span>
                            </div>
                            <p class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium truncate">
                                Laba Rugi, Penjualan, Valuasi Stok, Utang Piutang &amp; Pajak
                            </p>
                        </div>
                    </div>

                    <!-- Global Filter & Actions Bar -->
                    <div class="flex items-center flex-wrap gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80">
                        <!-- Filter Bulan -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700 min-h-[36px]">
                            <i class="fa-solid fa-calendar-day text-[11px] text-slate-400"></i>
                            <select onchange="changeReportMonth(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-2 pl-0.5 focus:outline-hidden cursor-pointer">
                                <option value="0" ${reportMonth === 0 ? 'selected' : ''}>Setahun Penuh</option>
                                ${MONTH_NAMES.map((m, idx) => `<option value="${idx + 1}" ${reportMonth === (idx + 1) ? 'selected' : ''}>${m}</option>`).join('')}
                            </select>
                        </div>

                        <!-- Filter Tahun -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700 min-h-[36px]">
                            <i class="fa-solid fa-calendar text-[11px] text-slate-400"></i>
                            <select onchange="changeReportYear(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-2 pl-0.5 focus:outline-hidden cursor-pointer">
                                ${yearOptions.map(y => `<option value="${y}" ${y === reportYear ? 'selected' : ''}>${y}</option>`).join('')}
                            </select>
                        </div>

                        <!-- Tombol Refresh Data -->
                        <button type="button" onclick="refreshReportData()" class="h-9 w-9 sm:w-auto sm:px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5" title="Muat Ulang Data Terbaru">
                            <i class="fa-solid fa-arrows-rotate text-xs"></i>
                            <span class="hidden sm:inline">Segarkan</span>
                        </button>

                        <!-- Tombol Cetak Dokumen A4 -->
                        <button type="button" onclick="openReportCurrentDocPreview()" class="h-9 px-3.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-black/10 shadow-2xs" style="background: var(--color-primary);" title="Cetak Lembar Resmi A4 / PDF">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span>Cetak A4</span>
                        </button>
                    </div>
                </div>

                <!-- Tab Segmented Pill Navigation -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar pb-1 snap-x snap-mandatory">
                    ${tabsHTML}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `);

    renderReportTabContent();
};

/**
 * Ganti tab aktif pada Pusat Laporan
 */
export const switchReportTab = (tabKey) => {
    reportActiveTab = tabKey;
    renderReportsShell();
};

/**
 * Ganti tahun laporan
 */
export const changeReportYear = async (val) => {
    reportYear = parseInt(val, 10);
    sLoad('Memuat data tahun ' + reportYear + '...');
    await Promise.all([
        fetchTaxPeriodData(reportYear),
        fetchReportOrdersData(true)
    ]);
    hLoad();
    renderReportsShell();
};

/**
 * Ganti bulan laporan
 */
export const changeReportMonth = async (val) => {
    reportMonth = parseInt(val, 10);
    sLoad('Memuat data bulan...');
    await fetchReportOrdersData(true);
    hLoad();
    renderReportsShell();
};

/**
 * Muat ulang data terbaru (force refresh)
 */
export const refreshReportData = async () => {
    sLoad('Menyinkronkan data terbaru...');
    await Promise.all([
        fetchTaxPeriodData(reportYear),
        fetchReportOrdersData(true)
    ]);
    hLoad();
    showToast('Data laporan berhasil disegarkan!');
    renderReportsShell();
};

/**
 * Router internal merender konten tab aktif
 */
export const renderReportTabContent = () => {
    const container = el('report-hub-content');
    if (!container) return;

    if (reportActiveTab === 'executive') renderExecutiveSummaryTab();
    else if (reportActiveTab === 'sales') renderSalesAnalyticsTab();
    else if (reportActiveTab === 'stock') renderStockValuationTab();
    else if (reportActiveTab === 'debts') renderDebtsReceivablesTab();
    else if (reportActiveTab === 'expenses') renderExpensesTab();
    else if (reportActiveTab === 'tax') renderTaxComplianceTab();
    else if (reportActiveTab === 'balance') renderBalanceSheetTab();
};

// ═══════════════════════════════════════════════════════════════
// 1. TAB 1: RINGKASAN EKSEKUTIF & LABA RUGI (P&L STATEMENT)
// ═══════════════════════════════════════════════════════════════
export const renderExecutiveSummaryTab = () => {
    const totals = getReportFinancialTotals();
    const periodLabel = reportMonth === 0 ? `Tahun ${reportYear}` : `${MONTH_NAMES[reportMonth - 1]} ${reportYear}`;

    const grossSales = totals.omset;
    const totalDiscount = totals.disc;
    const netSales = grossSales - totalDiscount;
    const totalHpp = totals.hpp;
    const grossProfit = netSales - totalHpp;
    const totalExpenses = getExpenseBreakdownForPeriod().total;
    const operatingProfit = grossProfit - totalExpenses;

    // Pajak Penghasilan (PPh Final 0,5% PP 55/2022)
    const scheme = appData.taxSettings?.taxScheme || 'umkm_final';
    let taxAmount = 0;
    let taxLabel = 'PPh Final UMKM 0,5% (PP 55/2022)';
    if (scheme === 'umkm_final') {
        taxAmount = Math.round(grossSales * 0.005);
    } else if (scheme === 'badan_normal') {
        taxAmount = operatingProfit > 0 ? Math.round(operatingProfit * 0.22) : 0;
        taxLabel = 'PPh Badan Normal 22% (UU HPP)';
    } else {
        const rate = parseFloat(appData.taxSettings?.customTaxRate) || 0.5;
        taxAmount = operatingProfit > 0 ? Math.round(operatingProfit * (rate / 100)) : 0;
        taxLabel = `PPh Custom (${rate}%)`;
    }

    const netProfit = operatingProfit - taxAmount;

    // Rasio Kesehatan Finansial
    const grossMarginPercent = grossSales > 0 ? ((grossProfit / grossSales) * 100).toFixed(1) : '0.0';
    const netMarginPercent = grossSales > 0 ? ((netProfit / grossSales) * 100).toFixed(1) : '0.0';
    const expenseRatio = grossSales > 0 ? ((totalExpenses / grossSales) * 100).toFixed(1) : '0.0';

    setH('report-hub-content', `
        <div class="space-y-4 sm:space-y-6">
            ${totals.orderCount === 0 ? `
            <!-- BANNER STATUS INFORMASI TRANSAKSI KOSONG (THEME HARMONY) -->
            <div class="p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.25);">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary);">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white">Belum ada transaksi penjualan selesai pada ${periodLabel}</p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Nilai Rp 0 adalah status riil database saat ini. Begitu transaksi kasir POS atau pesanan web tercatat, omzet dan laba akan terakumulasi otomatis.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button type="button" onclick="switchReportTab('stock')" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs" style="border-color: rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-boxes-stacked mr-1" style="color: var(--color-primary)"></i> Cek Valuasi Stok
                    </button>
                    <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('pos')" class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95" style="background: var(--color-primary);">
                        <i class="fa-solid fa-cash-register mr-1"></i> Buka Kasir POS
                    </button>
                </div>
            </div>` : ''}

            <!-- 4 KARTU BENTO UTAMA KESEHATAN FINANSIAL -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- 1. Omset Penjualan -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${fCur(grossSales)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${totals.orderCount} transaksi</span>
                        <span class="text-rose-500 font-bold">Disc: ${fCur(totalDiscount)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${fCur(grossProfit)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${fCur(totalHpp)}</span>
                        <span class="font-bold" style="color: var(--color-primary)">Margin ${grossMarginPercent}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Usaha</span>
                            <span class="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${fCur(totalExpenses)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Beban toko</span>
                        <span class="text-slate-500 font-bold">${expenseRatio}% omset</span>
                    </div>
                </div>

                <!-- 4. Laba Bersih Akhir (Royal Theme Card) -->
                <div class="card-modern p-4 sm:p-5 flex flex-col justify-between col-span-2 lg:col-span-1 rounded-2xl" style="border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-primary-rgb), 0.03));">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">Laba Bersih Riil</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.18); color: var(--color-primary)"><i class="fa-solid fa-crown"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${fCur(netProfit)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 flex items-center justify-between text-[10px]" style="border-top: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                        <span class="font-medium" style="color: var(--color-primary); opacity: 0.85;">Net Profit</span>
                        <span class="font-black" style="color: var(--color-primary)">${netMarginPercent}%</span>
                    </div>
                </div>
            </div>

            <!-- LEMBAR LAPORAN LABA RUGI RESMI (P&L BREAKDOWN) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-file-invoice"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Laporan Laba Rugi Komprehensif — ${periodLabel}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Penetapan pendapatan, beban pokok penjualan, beban operasional &amp; laba bersih</p>
                        </div>
                    </div>
                    <button type="button" onclick="openTaxDocPreview('income')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs">
                        <i class="fa-solid fa-print text-xs"></i> <span class="hidden sm:inline">Cetak Laba Rugi</span>
                    </button>
                </div>

                <div class="p-4 sm:p-6 space-y-4">
                    <!-- 1. PENDAPATAN -->
                    <div class="space-y-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">1. Pendapatan Penjualan</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Penjualan Bruto (${totals.orderCount} pesanan)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${fCur(grossSales)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${fCur(totalDiscount)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white font-black">${fCur(netSales)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${fCur(totalHpp)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${fCur(grossProfit)}</span>
                        </div>
                    </div>

                    <!-- 3. BEBAN OPERASIONAL -->
                    <div class="space-y-2 pt-2">
                        <div class="flex items-center justify-between">
                            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">3. Beban Operasional Usaha</p>
                            <button type="button" onclick="switchReportTab('expenses')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                                Kelola Biaya Operasional <i class="fa-solid fa-arrow-right text-[9px]"></i>
                            </button>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Beban Rutin Operasional Toko</span>
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${fCur(totalExpenses)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white font-black">${fCur(operatingProfit)}</span>
                        </div>
                    </div>

                    <!-- 4. PAJAK PENGHASILAN & LABA BERSIH -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">4. Kepatuhan Pajak &amp; Laba Bersih Akhir</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">${taxLabel}</span>
                            <span class="font-bold text-slate-700 dark:text-slate-300">− ${fCur(taxAmount)}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 px-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-2xs" style="background: var(--color-primary);">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-crown text-base"></i>
                                <span>LABA BERSIH TAHUN / BULAN BERJALAN</span>
                            </div>
                            <span class="text-base sm:text-lg font-black">${fCur(netProfit)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
};

// ═══════════════════════════════════════════════════════════════
// 2. TAB 2: LAPORAN PENJUALAN & KASIR (SALES & PAYMENT ANALYTICS)
// ═══════════════════════════════════════════════════════════════
export const renderSalesAnalyticsTab = () => {
    const orders = cachedReportOrders || [];
    const totalTransactions = orders.length;

    let totalGross = 0;
    let totalDisc = 0;
    let totalItemsCount = 0;

    // Distribusi metode bayar
    const payMethods = {
        cash: { count: 0, total: 0, label: 'Tunai Kasir', icon: 'fa-money-bill-wave', color: 'emerald' },
        qris: { count: 0, total: 0, label: 'QRIS Dinamis / Statis', icon: 'fa-qrcode', color: 'blue' },
        transfer: { count: 0, total: 0, label: 'Transfer Bank (BCA/Mandiri/BRI)', icon: 'fa-building-columns', color: 'purple' },
        tempo: { count: 0, total: 0, label: 'Tempo / Putri PayLater', icon: 'fa-clock-rotate-left', color: 'amber' },
        other: { count: 0, total: 0, label: 'Lainnya', icon: 'fa-credit-card', color: 'slate' }
    };

    // Kanal Penjualan: Kasir POS vs Online Storefront
    let posCount = 0, posTotal = 0;
    let webCount = 0, webTotal = 0;

    // Produk Terlaris Agregator
    const productSalesMap = {};

    orders.forEach(o => {
        const subtotal = parseFloat(o.payment?.subtotal) || 0;
        const disc = parseFloat(o.payment?.productDiscount) || 0;
        totalGross += subtotal;
        totalDisc += disc;

        const mRaw = (o.payment?.method || '').toLowerCase();
        let targetKey = 'other';
        if (mRaw.includes('cash') || mRaw.includes('tunai')) targetKey = 'cash';
        else if (mRaw.includes('qris')) targetKey = 'qris';
        else if (mRaw.includes('transfer') || mRaw.includes('bca') || mRaw.includes('mandiri') || mRaw.includes('bri')) targetKey = 'transfer';
        else if (mRaw.includes('tempo') || mRaw.includes('paylater')) targetKey = 'tempo';

        payMethods[targetKey].count++;
        payMethods[targetKey].total += subtotal;

        // Cek kanal transaksi
        if (o.cashierShiftId || o.cashierId || (o.notes && o.notes.includes('POS'))) {
            posCount++;
            posTotal += subtotal;
        } else {
            webCount++;
            webTotal += subtotal;
        }

        // Hitung produk terlaris
        (o.items || []).forEach(it => {
            const qty = parseFloat(it.qty) || 1;
            totalItemsCount += qty;
            const pId = it.id || it.name;
            if (!productSalesMap[pId]) {
                productSalesMap[pId] = {
                    id: pId,
                    name: it.name || 'Produk',
                    qty: 0,
                    omset: 0,
                    hpp: 0,
                    image: it.image || ''
                };
            }
            const itHpp = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : getEffHpp(it);
            productSalesMap[pId].qty += qty;
            productSalesMap[pId].omset += (parseFloat(it.price) || 0) * qty;
            productSalesMap[pId].hpp += itHpp * qty;
        });
    });

    const aov = totalTransactions > 0 ? Math.round(totalGross / totalTransactions) : 0;
    const avgItemsPerOrder = totalTransactions > 0 ? (totalItemsCount / totalTransactions).toFixed(1) : '0';

    // Urutkan top 10 produk terlaris
    const topProducts = Object.values(productSalesMap).sort((a, b) => b.qty - a.qty).slice(0, 10);

    const maxOmset = topProducts.length ? Math.max(...topProducts.map(p => p.omset || 1)) : 1;
    
    // 1. Mobile Native Leaderboard Cards
    const topProductsCardsHTML = topProducts.length ? topProducts.map((p, idx) => {
        const profit = p.omset - p.hpp;
        const marginPct = p.omset > 0 ? ((profit / p.omset) * 100).toFixed(0) : '0';
        const omsetPct = Math.min(100, Math.max(8, Math.round((p.omset / maxOmset) * 100)));

        let rankBadge = '';
        if (idx === 0) {
            rankBadge = `<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-950 shadow-2xs shrink-0"><i class="fa-solid fa-trophy text-[11px]"></i></span>`;
        } else if (idx === 1) {
            rankBadge = `<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-2xs shrink-0">#2</span>`;
        } else if (idx === 2) {
            rankBadge = `<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-amber-700/20 text-amber-800 dark:text-amber-300 border border-amber-600/30 shrink-0">#3</span>`;
        } else {
            rankBadge = `<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">#${idx + 1}</span>`;
        }

        return `
            <div class="p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        ${rankBadge}
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${esc(p.name)}</p>
                            <p class="text-[10px] text-slate-400">Modal HPP: ${fCur(p.hpp)}</p>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            ${p.qty} Unit
                        </span>
                    </div>
                </div>
                <!-- Progress bar omset -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500" style="width: ${omsetPct}%; background: var(--color-primary);"></div>
                </div>
                <!-- Stat 2 Kolom -->
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Total Omset</span>
                        <span class="font-black text-slate-800 dark:text-white">${fCur(p.omset)}</span>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl text-right">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Laba Kotor</span>
                        <span class="font-black" style="color: var(--color-primary);">${fCur(profit)} <span class="text-[9px] font-normal text-slate-400">(${marginPct}%)</span></span>
                    </div>
                </div>
            </div>
        `;
    }).join('') : `
        <div class="py-8 text-center flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center mb-2" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-chart-simple text-sm"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum ada transaksi penjualan pada periode ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Penjualan kasir POS &amp; pesanan web akan otomatis tampil di sini</p>
        </div>
    `;

    // 2. Desktop Table Rows
    const topProductsHTML = topProducts.length ? topProducts.map((p, idx) => {
        const profit = p.omset - p.hpp;
        const marginPct = p.omset > 0 ? ((profit / p.omset) * 100).toFixed(0) : '0';
        return `
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${idx + 1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${esc(p.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${fCur(p.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${p.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${fCur(p.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black" style="color: var(--color-primary);">${fCur(profit)} <span class="text-[9px] font-normal text-slate-400">(${marginPct}%)</span></td>
            </tr>
        `;
    }).join('') : `
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;

    setH('report-hub-content', `
        <div class="space-y-4 sm:space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${fCur(totalGross)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${totalTransactions} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rata-Rata Keranjang (AOV)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-basket-shopping"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${fCur(aov)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Per transaksi pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Barang Terjual</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-boxes-packing"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${totalItemsCount} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Rata-rata ${avgItemsPerOrder} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kanal Penjualan</span>
                            <span class="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-cash-register"></i></span>
                        </div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                            <span>Kasir POS:</span> <b style="color: var(--color-primary)">${fCur(posTotal)}</b>
                        </p>
                    </div>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span>Storefront:</span> <b class="text-slate-600 dark:text-slate-300">${fCur(webTotal)}</b>
                    </p>
                </div>
            </div>

            <!-- DISTRIBUSI METODE PEMBAYARAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-2xs">
                <div class="flex items-center gap-2 mb-3.5">
                    <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">
                        Distribusi Metode Pembayaran
                    </h3>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    ${Object.values(payMethods).filter(m => m.count > 0 || m.label.includes('Tunai') || m.label.includes('QRIS') || m.label.includes('Transfer') || m.label.includes('Tempo')).map(m => {
                        const pct = totalGross > 0 ? ((m.total / totalGross) * 100).toFixed(0) : '0';
                        return `
                            <div class="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 shadow-2xs">
                                        <i class="fa-solid ${m.icon}"></i>
                                    </div>
                                    <p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate">${m.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${fCur(m.total)}</p>
                                <div class="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${pct}%; background: var(--color-primary);"></div>
                                </div>
                                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                                    <span>${m.count} pesanan</span>
                                    <span class="font-bold text-slate-700 dark:text-slate-300">${pct}%</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- TOP 10 PRODUK TERLARIS (RESPONSIVE CARD / TABLE HYBRID) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-ranking-star"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Top 10 Produk Terlaris &amp; Kontribusi Laba</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Produk dengan volume penjualan &amp; margin keuntungan tertinggi</p>
                        </div>
                    </div>
                </div>

                <!-- Tampilan Mobile (< 640px): Leaderboard Cards -->
                <div class="block sm:hidden p-3.5 space-y-3">
                    ${topProductsCardsHTML}
                </div>

                <!-- Tampilan Desktop (>= 640px): Full Table -->
                <div class="hidden sm:block overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <th class="py-2.5 px-3 text-center w-12">No</th>
                                <th class="py-2.5 px-3">Nama Produk</th>
                                <th class="py-2.5 px-3 text-right">Qty Terjual</th>
                                <th class="py-2.5 px-3 text-right">Total Omset</th>
                                <th class="py-2.5 px-3 text-right">Laba Kotor</th>
                            </tr>
                        </thead>
                        <tbody>${topProductsHTML}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `);
};

// ═══════════════════════════════════════════════════════════════
// 3. TAB 3: LAPORAN STOK & VALUASI ASET GUDANG
// ═══════════════════════════════════════════════════════════════
export const renderStockValuationTab = () => {
    const products = appData.products || [];
    const categories = appData.categories || [];
    const brands = appData.brands || [];

    let totalAssetHpp = 0;
    let totalAssetRetail = 0;
    let totalPhysicalUnits = 0;
    let totalSkuCount = 0;
    let outOfStockCount = 0;
    let lowStockCount = 0;
    let safeStockCount = 0;

    const stockItems = [];

    products.forEach(p => {
        const minStk = parseFloat(p.minStock) || 5;
        if (p.variants && p.variants.length) {
            p.variants.forEach(v => {
                totalSkuCount++;
                const stk = parseFloat(v.stock) || 0;
                const hpp = parseFloat(v.hpp) || 0;
                const price = parseFloat(v.price) || 0;
                totalPhysicalUnits += stk;
                totalAssetHpp += stk * hpp;
                totalAssetRetail += stk * price;

                let status = 'safe';
                if (stk <= 0) { outOfStockCount++; status = 'empty'; }
                else if (stk <= minStk) { lowStockCount++; status = 'low'; }
                else { safeStockCount++; }

                stockItems.push({
                    id: p.id,
                    variantId: v.id || v.name,
                    name: `${p.name} (${v.name})`,
                    category: p.category || 'Umum',
                    brand: p.brand || '-',
                    stock: stk,
                    unit: p.unit || 'pcs',
                    hpp: hpp,
                    price: price,
                    totalHpp: stk * hpp,
                    totalRetail: stk * price,
                    status: status,
                    minStock: minStk,
                    image: p.image || ''
                });
            });
        } else {
            totalSkuCount++;
            const stk = parseFloat(p.stock) || 0;
            const hpp = parseFloat(p.hpp) || 0;
            const price = parseFloat(p.price) || 0;
            totalPhysicalUnits += stk;
            totalAssetHpp += stk * hpp;
            totalAssetRetail += stk * price;

            let status = 'safe';
            if (stk <= 0) { outOfStockCount++; status = 'empty'; }
            else if (stk <= minStk) { lowStockCount++; status = 'low'; }
            else { safeStockCount++; }

            stockItems.push({
                id: p.id,
                variantId: null,
                name: p.name,
                category: p.category || 'Umum',
                brand: p.brand || '-',
                stock: stk,
                unit: p.unit || 'pcs',
                hpp: hpp,
                price: price,
                totalHpp: stk * hpp,
                totalRetail: stk * price,
                status: status,
                minStock: minStk,
                image: p.image || ''
            });
        }
    });

    const potentialMargin = totalAssetRetail - totalAssetHpp;

    // Filter daftar item stok
    let filteredItems = stockItems.filter(item => {
        if (reportStockFilter !== 'all' && item.status !== reportStockFilter) return false;
        if (reportStockCategory !== 'all' && item.category !== reportStockCategory) return false;
        if (reportSearchQuery) {
            const q = reportSearchQuery.toLowerCase();
            return item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
        }
        return true;
    });

    // Urutkan default: stok habis & menipis di paling atas
    filteredItems.sort((a, b) => a.stock - b.stock);

    // 1. Mobile Native Inventory Cards (< 640px)
    const stockCardsHTML = filteredItems.length ? filteredItems.map((item, idx) => {
        let badgeHTML = '';
        if (item.status === 'empty') {
            badgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">Habis</span>`;
        } else if (item.status === 'low') {
            badgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60">Sisa ${item.stock}</span>`;
        } else {
            badgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Stok Aman (${item.stock})</span>`;
        }

        const marginTotal = item.totalRetail - item.totalHpp;
        const marginUnit = item.price - item.hpp;

        return `
            <div class="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-start justify-between gap-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary)">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${esc(item.name)}</p>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <span class="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase tracking-wider">${esc(item.category)}</span>
                                ${item.brand && item.brand !== '-' ? `<span class="text-[9px] text-slate-400">• ${esc(item.brand)}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="shrink-0">
                        ${badgeHTML}
                    </div>
                </div>

                <!-- Bento Mini Grid 2x2 -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Stok Fisik</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${item.stock} ${item.unit}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Harga Jual Retail</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${fCur(item.price)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${fCur(item.totalRetail)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Modal Kulakan (HPP)</span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${fCur(item.hpp)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${fCur(item.totalHpp)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2);">
                        <span class="text-[9px] font-bold uppercase tracking-widest block" style="color: var(--color-primary);">Potensi Laba Kotor</span>
                        <span class="text-xs font-black truncate" style="color: var(--color-primary);">+${fCur(marginTotal)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Per unit: +${fCur(marginUnit)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('') : `
        <div class="py-10 text-center flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-boxes-stacked text-base"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Tidak ada produk yang cocok</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Ubah pencarian atau reset filter untuk menampilkan barang</p>
        </div>
    `;

    // 2. Desktop Table Rows (>= 640px)
    const stockRowsHTML = filteredItems.length ? filteredItems.map((item, idx) => {
        let badgeHTML = '';
        if (item.status === 'empty') {
            badgeHTML = `<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>`;
        } else if (item.status === 'low') {
            badgeHTML = `<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${item.stock}</span>`;
        } else {
            badgeHTML = `<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Aman</span>`;
        }

        return `
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${idx + 1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${esc(item.name)}</p>
                    <p class="text-[10px] text-slate-400">${esc(item.category)} • ${esc(item.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${item.stock} ${item.unit}</span>
                        ${badgeHTML}
                    </div>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${fCur(item.hpp)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${fCur(item.totalHpp)}</p>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${fCur(item.price)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${fCur(item.totalRetail)}</p>
                </td>
            </tr>
        `;
    }).join('') : `
        <tr><td colspan="5" class="py-10 text-center text-xs text-slate-400">Tidak ada produk yang sesuai dengan filter</td></tr>
    `;

    // Filter status pills list
    const statusPills = [
        { key: 'all', label: 'Semua', count: stockItems.length },
        { key: 'empty', label: 'Habis', count: outOfStockCount, colorClass: 'text-rose-600 dark:text-rose-400' },
        { key: 'low', label: 'Menipis', count: lowStockCount, colorClass: 'text-amber-600 dark:text-amber-400' },
        { key: 'safe', label: 'Aman', count: safeStockCount, colorClass: 'text-emerald-600 dark:text-emerald-400' }
    ];

    const statusPillsHTML = statusPills.map(p => {
        const isSel = reportStockFilter === p.key;
        return `
            <button type="button" onclick="filterStockReportStatus('${p.key}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 flex items-center gap-1.5 ${
                isSel 
                ? 'bg-[var(--color-primary)] text-white shadow-2xs font-black' 
                : 'bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[var(--color-primary)]'
            }">
                <span>${p.label}</span>
                <span class="px-1.5 py-0.2 rounded-md text-[10px] ${isSel ? 'bg-white/25 text-white' : 'bg-slate-200/80 dark:bg-slate-700 ' + (p.colorClass || 'text-slate-600 dark:text-slate-300')}">${p.count}</span>
            </button>
        `;
    }).join('');

    setH('report-hub-content', `
        <div class="space-y-4 sm:space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aset Modal (HPP)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${fCur(totalAssetHpp)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">Modal fisik tertanam</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nilai Jual Retail</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${fCur(totalAssetRetail)}</p>
                    </div>
                    <p class="text-[10px] font-bold mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate" style="color: var(--color-primary)">Potensi margin: ${fCur(potentialMargin)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fisik Barang</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"><i class="fa-solid fa-box-archive"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${totalPhysicalUnits.toLocaleString('id-ID')} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">${totalSkuCount} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kritis Stok</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i></span>
                        </div>
                        <div class="flex items-center gap-1.5 mt-1">
                            <button type="button" onclick="filterStockReportStatus('empty')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 active:scale-95 cursor-pointer" title="Klik filter habis">${outOfStockCount} Habis</button>
                            <button type="button" onclick="filterStockReportStatus('low')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 active:scale-95 cursor-pointer" title="Klik filter menipis">${lowStockCount} Menipis</button>
                        </div>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Aman: <b>${safeStockCount}</b></span>
                        <button type="button" onclick="filterStockReportStatus('all')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">Lihat Semua</button>
                    </div>
                </div>
            </div>

            <!-- VALUASI INVENTORI & FILTER BAR -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Valuasi Inventori Gudang</h3>
                                <p class="text-[10px] text-slate-400 mt-0.5">Daftar barang beserta perbandingan modal HPP vs harga retail</p>
                            </div>
                        </div>

                        <!-- Bar Pencarian, Dropdown Kategori & Tombol Stock Opname -->
                        <div class="flex items-center flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                            <button type="button" onclick="openAdminTab('stock_opname')" class="px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Audit fisik stok rak & rekonsiliasi selisih">
                                <i class="fa-solid fa-clipboard-check text-xs"></i> <span>Stock Opname</span>
                            </button>
                            <!-- Input Pencarian dengan Clear Button -->
                            <div class="relative flex-1 sm:w-56">
                                <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
                                <input type="text" placeholder="Cari nama barang / SKU..." value="${esc(reportSearchQuery)}" oninput="filterStockReportSearch(this.value)" class="w-full pl-8 pr-7 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden">
                                ${reportSearchQuery ? `
                                    <button type="button" onclick="filterStockReportSearch('')" class="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </button>
                                ` : ''}
                            </div>

                            <!-- Filter Kategori -->
                            <select onchange="filterStockReportCategory(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer max-w-[140px] sm:max-w-none truncate">
                                <option value="all" ${reportStockCategory === 'all' ? 'selected' : ''}>Semua Kategori</option>
                                ${categories.map(c => `<option value="${c.name}" ${reportStockCategory === c.name ? 'selected' : ''}>${c.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>

                    <!-- Filter Status Pills Carousel -->
                    <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-1">
                        ${statusPillsHTML}
                    </div>
                </div>

                <!-- Tampilan Mobile (< 640px): Native Inventory Cards -->
                <div class="block sm:hidden p-3.5 space-y-3">
                    ${stockCardsHTML}
                </div>

                <!-- Tampilan Desktop (>= 640px): Full Table -->
                <div class="hidden sm:block overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <th class="py-2.5 px-3 text-center w-12">No</th>
                                <th class="py-2.5 px-3">Produk &amp; Kategori</th>
                                <th class="py-2.5 px-3 text-center">Stok Fisik</th>
                                <th class="py-2.5 px-3 text-right">Modal (HPP)</th>
                                <th class="py-2.5 px-3 text-right">Harga Jual</th>
                            </tr>
                        </thead>
                        <tbody>${stockRowsHTML}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `);
};

export const clearStockReportSearch = () => {
    reportSearchQuery = '';
    renderStockValuationTab();
};

export const filterStockReportStatus = (val) => {
    reportStockFilter = val;
    renderStockValuationTab();
};

export const filterStockReportCategory = (val) => {
    reportStockCategory = val;
    renderStockValuationTab();
};

export const filterStockReportSearch = (val) => {
    reportSearchQuery = val;
    renderStockValuationTab();
};
// 4. TAB 4: LAPORAN UTANG & PIUTANG TERPADU (DEBTS & RECEIVABLES)
// ═══════════════════════════════════════════════════════════════
export const renderDebtsReceivablesTab = () => {
    // 1. Data Piutang Pelanggan
    const piutangOrders = cachedPiutangOrders || [];
    let totalPiutangPelanggan = 0;
    let latePiutangCount = 0;
    let dueSoonPiutangCount = 0;
    const debiturMap = {};

    piutangOrders.forEach(o => {
        const calc = getTempoOrderCalculations(o);
        const sisa = calc.totalAkhir;
        totalPiutangPelanggan += sisa;
        if (calc.isLate) latePiutangCount++;
        else if (calc.isDueSoon) dueSoonPiutangCount++;

        const cName = o.customer?.name || 'Pelanggan Umum';
        const cPhone = o.customer?.phone || o.customer?.wa || '-';
        if (!debiturMap[cName]) {
            debiturMap[cName] = { name: cName, phone: cPhone, totalPiutang: 0, orderCount: 0, isLate: false };
        }
        debiturMap[cName].totalPiutang += sisa;
        debiturMap[cName].orderCount++;
        if (calc.isLate) debiturMap[cName].isLate = true;
    });

    const topDebitur = Object.values(debiturMap).sort((a, b) => b.totalPiutang - a.totalPiutang);

    // 2. Data Utang Supplier Kulakan PO
    const purchaseMetrics = computePurchaseMetrics();
    const totalUtangSupplier = purchaseMetrics.totalUnpaidDebt;
    const purchases = appData.purchases || [];
    const supplierDebtMap = {};

    purchases.forEach(po => {
        if (po.paymentType === 'tempo' && po.paymentStatus !== 'lunas' && po.status !== 'cancelled') {
            const poTotal = parseFloat(po.total) || 0;
            const paid = parseFloat(po.amountPaid) || 0;
            const unpaid = poTotal - paid;
            if (unpaid > 0) {
                const sName = po.supplierName || 'Supplier';
                if (!supplierDebtMap[sName]) {
                    supplierDebtMap[sName] = { name: sName, totalDebt: 0, poCount: 0 };
                }
                supplierDebtMap[sName].totalDebt += unpaid;
                supplierDebtMap[sName].poCount++;
            }
        }
    });

    const topSupplierDebt = Object.values(supplierDebtMap).sort((a, b) => b.totalDebt - a.totalDebt);

    // 3. Posisi Bersih Likuiditas (Net Liquidity Gap)
    const netGap = totalPiutangPelanggan - totalUtangSupplier;
    const isSurplus = netGap >= 0;

    // Mobile & Desktop HTML untuk Debitur Pelanggan
    const topDebiturCardsHTML = topDebitur.length ? topDebitur.slice(0, 8).map(d => `
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${esc(d.name)}</p>
                        ${d.isLate ? '<span class="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">Jatuh Tempo</span>' : ''}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5">${d.orderCount} nota tempo aktif</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-slate-900 dark:text-white">${fCur(d.totalPiutang)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Tagihan</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-phone text-[9px]"></i> ${esc(d.phone)}
                </span>
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-[10px] font-bold shadow-2xs hover:opacity-90 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1">
                    Kelola Nota <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </button>
            </div>
        </div>
    `).join('') : `
        <div class="py-8 px-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-center space-y-2">
            <div class="w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-sm" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Tidak Ada Piutang Pelanggan</p>
            <p class="text-[10px] text-slate-400 max-w-xs mx-auto">Seluruh pelanggan telah melunasi tagihannya atau belum ada penjualan tempo aktif.</p>
        </div>
    `;

    const topDebiturRowsHTML = topDebitur.length ? topDebitur.slice(0, 5).map(d => `
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                 <p class="font-bold text-slate-800 dark:text-white truncate">${esc(d.name)}</p>
                 <p class="text-[10px] text-slate-400">${d.orderCount} nota ${d.isLate ? '<span class="text-rose-500 font-bold">• Terlambat</span>' : ''}</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-white">${fCur(d.totalPiutang)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Buka</button>
            </td>
        </tr>
    `).join('') : `
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Tidak ada piutang pelanggan aktif</td></tr>
    `;

    // Mobile & Desktop HTML untuk Utang Supplier
    const topSupplierCardsHTML = topSupplierDebt.length ? topSupplierDebt.slice(0, 8).map(s => `
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${esc(s.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${s.poCount} invoice PO tempo kulakan</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${fCur(s.totalDebt)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Hutang Toko</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-truck text-[9px]"></i> Rekanan Kulakan
                </span>
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-[10px] font-bold shadow-2xs hover:opacity-90 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1">
                    Bayar PO <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </button>
            </div>
        </div>
    `).join('') : `
        <div class="py-8 px-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-center space-y-2">
            <div class="w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-sm bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <i class="fa-solid fa-check-double"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Seluruh Tagihan Lunas</p>
            <p class="text-[10px] text-slate-400 max-w-xs mx-auto">Seluruh tagihan pembelian & kulakan ke supplier telah lunas tepat waktu.</p>
        </div>
    `;

    const topSupplierRowsHTML = topSupplierDebt.length ? topSupplierDebt.slice(0, 5).map(s => `
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                <p class="font-bold text-slate-800 dark:text-white truncate">${esc(s.name)}</p>
                <p class="text-[10px] text-slate-400">${s.poCount} invoice PO tempo</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-rose-500">${fCur(s.totalDebt)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Bayar</button>
            </td>
        </tr>
    `).join('') : `
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Seluruh tagihan kulakan supplier telah lunas</td></tr>
    `;

    setH('report-hub-content', `
        <div class="space-y-4 sm:space-y-6">
            <!-- KARTU POSISI BERSIH LIKUIDITAS TOKO -->
            <div class="rounded-2xl border p-4 sm:p-5 ${!isSurplus ? 'border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20' : ''}" style="${isSurplus ? 'border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08), rgba(var(--color-primary-rgb), 0.02));' : ''}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span class="text-[9px] font-black uppercase tracking-widest ${!isSurplus ? 'text-rose-700 dark:text-rose-400' : ''}" style="${isSurplus ? 'color: var(--color-primary);' : ''}">
                            Posisi Bersih Likuiditas Toko (Net Working Capital Gap)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black ${!isSurplus ? 'text-rose-800 dark:text-rose-300' : ''} mt-0.5" style="${isSurplus ? 'color: var(--color-primary);' : ''}">
                            ${isSurplus ? '+' : ''}${fCur(netGap)}
                        </h2>
                        <p class="text-xs ${!isSurplus ? 'text-rose-700 dark:text-rose-400' : ''} mt-1 font-medium" style="${isSurplus ? 'color: var(--color-primary); opacity: 0.9;' : ''}">
                            ${isSurplus 
                                ? 'Surplus Piutang: Hak tagihan toko di pelanggan lebih besar daripada kewajiban toko ke supplier.' 
                                : 'Defisit Utang: Kewajiban toko ke supplier lebih besar daripada tagihan piutang di pelanggan.'}
                        </p>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Piutang Pelanggan</span>
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${fCur(totalPiutangPelanggan)}</span>
                        </div>
                        <span class="text-slate-400 font-black text-sm">−</span>
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${fCur(totalUtangSupplier)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DUA KOLOM: PIUTANG PELANGGAN vs UTANG SUPPLIER -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <!-- KOLOM KIRI: PIUTANG PELANGGAN (ACCOUNTS RECEIVABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Piutang Pelanggan</h3>
                                <p class="text-[10px] text-slate-400">${piutangOrders.length} nota tempo aktif</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('piutang')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional Tempo <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Piutang Toko</span>
                            <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 truncate">${fCur(totalPiutangPelanggan)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${latePiutangCount} Nota</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Debitur Pelanggan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${topDebiturCardsHTML}
                        </div>

                        <!-- Desktop View (>= 640px): Table -->
                        <div class="hidden sm:block overflow-x-auto">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                        <th class="py-2 px-3">Nama Pelanggan</th>
                                        <th class="py-2 px-3 text-right">Sisa Tagihan</th>
                                        <th class="py-2 px-3 text-right w-16">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${topDebiturRowsHTML}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- KOLOM KANAN: UTANG SUPPLIER KULAKAN (ACCOUNTS PAYABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-cart-flatbed"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Utang Kulakan Supplier</h3>
                                <p class="text-[10px] text-slate-400">Order pembelian rekanan (PO)</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('purchases')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional PO <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Hutang Supplier</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5 truncate">${fCur(totalUtangSupplier)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold uppercase" style="color: var(--color-primary)">Menunggu Kirim Barang</span>
                            <p class="text-sm sm:text-base font-black mt-0.5 truncate" style="color: var(--color-primary)">${purchaseMetrics.pendingArrivalCount} PO</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tagihan Supplier Rekanan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${topSupplierCardsHTML}
                        </div>

                        <!-- Desktop View (>= 640px): Table -->
                        <div class="hidden sm:block overflow-x-auto">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                        <th class="py-2 px-3">Nama Supplier</th>
                                        <th class="py-2 px-3 text-right">Sisa Hutang</th>
                                        <th class="py-2 px-3 text-right w-16">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${topSupplierRowsHTML}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
};

// ═══════════════════════════════════════════════════════════════
// 5. TAB 5: LAPORAN BIAYA OPERASIONAL (OPERATIONAL EXPENSES)
// ═══════════════════════════════════════════════════════════════

/**
 * Helper pembuka modal pengeluaran operasional terintegrasi dari dalam Pusat Laporan.
 * Memanfaatkan dynamic import internal Vite agar terbundle ke hash asset yang tepat di Vercel/Produksi.
 */
export const openExpenseModalFromReports = async (expenseId = null) => {
    if (typeof window.openExpenseModal === 'function') {
        window.openExpenseModal(expenseId);
        return;
    }
    try {
        const mod = await import('./expenses.js');
        if (mod && typeof mod.openExpenseModal === 'function') {
            mod.openExpenseModal(expenseId);
        } else if (typeof window.openExpenseModal === 'function') {
            window.openExpenseModal(expenseId);
        }
    } catch (err) {
        console.error('[Reports] Gagal membuka form pengeluaran operasional:', err);
        showToast('Gagal memuat modul pengeluaran operasional.');
    }
};
window.openExpenseModalFromReports = openExpenseModalFromReports;

export const renderExpensesTab = () => {
    const periodLabel = reportMonth === 0 ? `Tahun ${reportYear}` : `${MONTH_NAMES[reportMonth - 1]} ${reportYear}`;
    const expenseData = getExpenseBreakdownForPeriod();

    const currentKey = reportMonth === 0 ? null : `${reportYear}-${reportMonth}`;
    const monthlyExpMap = appData.taxSettings?.monthlyExpenses || {};
    const expBreakdownMap = appData.taxSettings?.expenseBreakdown || {};

    const categoryCardsHTML = EXPENSE_CATEGORIES.map(cat => {
        const val = expenseData.categories[cat.key] || 0;
        const pct = expenseData.total > 0 ? ((val / expenseData.total) * 100).toFixed(0) : '0';
        return `
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${cat.label}</span>
                        <i class="fa-solid ${cat.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${fCur(val)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${pct}%</span>
                </div>
            </div>
        `;
    }).join('');

    // Input form rincian beban operasional
    let formHTML = '';
    if (reportMonth === 0) {
        // Tampilan 12 bulan
        const rows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
            const k = `${reportYear}-${m}`;
            const val = monthlyExpMap[k] || 0;
            return `
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${MONTH_NAMES[m - 1]} ${reportYear}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${val}" onchange="saveReportMonthlyExpense('${k}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `;
        }).join('');

        formHTML = `
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${reportYear}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${rows}</div>
            </div>
        `;
    } else {
        // Tampilan rincian kategori untuk 1 bulan spesifik
        const currentDetail = expBreakdownMap[currentKey] || {};
        const categoryInputs = EXPENSE_CATEGORIES.map(cat => {
            const val = currentDetail[cat.key] || 0;
            return `
                <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${cat.icon} text-xs text-slate-400 w-4"></i>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${cat.label}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${val}" id="input-exp-${cat.key}" oninput="calcReportMonthlyExpenseTotal()" class="w-36 text-right font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `;
        }).join('');

        const totalCurrentMonth = monthlyExpMap[currentKey] || 0;

        formHTML = `
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${periodLabel}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${fCur(totalCurrentMonth)}</span>
                </div>

                <div class="space-y-1">${categoryInputs}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${currentKey}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `;
    }

    const hasLedgerItems = (expenseData.periodExpenses && expenseData.periodExpenses.length > 0);

    // Tabel / Daftar Transaksi Pengeluaran Buku Kas Terkini untuk Periode ini
    const ledgerTableHTML = hasLedgerItems ? `
        <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i> Riwayat Transaksi Beban Operasional — ${periodLabel}
                    </h3>
                    <p class="text-[10px] text-slate-400 mt-0.5">Daftar nota pengeluaran operasional yang dicatat di Buku Kas</p>
                </div>
                <button type="button" onclick="openAdminTab('expenses')" class="text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-80" style="color: var(--color-primary)">
                    <span>Buka Buku Kas Lengkap</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>

            <!-- Tabel Transaksi Desktop & Mobile Card -->
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/60 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-100 dark:border-slate-800">
                        <tr>
                            <th class="py-2.5 px-3">Tanggal</th>
                            <th class="py-2.5 px-3">Kategori</th>
                            <th class="py-2.5 px-3">Keperluan</th>
                            <th class="py-2.5 px-3">Sumber</th>
                            <th class="py-2.5 px-3 text-right">Nominal</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        ${expenseData.periodExpenses.slice(0, 10).map(exp => {
                            const catObj = EXPENSE_CATEGORIES.find(c => c.key === exp.category) || EXPENSE_CATEGORIES[6];
                            const srcLabel = exp.source === 'cash' ? 'Kas Toko' : exp.source === 'bank' ? 'Transfer Bank' : 'Dana Owner';
                            return `
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                                    <td class="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">${exp.date || '-'}</td>
                                    <td class="py-2.5 px-3">
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                            <i class="fa-solid ${catObj.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                            <span>${catObj.label}</span>
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-white">${esc(exp.desc)}</p>
                                        ${exp.recipient ? `<span class="text-[10px] text-slate-400">Penerima: ${esc(exp.recipient)}</span>` : ''}
                                    </td>
                                    <td class="py-2.5 px-3 whitespace-nowrap">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400">${srcLabel}</span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100 text-sm whitespace-nowrap">
                                        - ${fCur(exp.amount)}
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            ${expenseData.periodExpenses.length > 10 ? `
                <div class="text-center pt-2">
                    <button type="button" onclick="openAdminTab('expenses')" class="text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">
                        + Lihat ${expenseData.periodExpenses.length - 10} transaksi lainnya di Buku Kas
                    </button>
                </div>
            ` : ''}
        </div>
    ` : '';

    setH('report-hub-content', `
        <div class="space-y-6">
            <!-- HEADER TOOLBAR BIAYA OPERASIONAL -->
            <div class="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div>
                    <h3 class="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-money-bill-transfer" style="color: var(--color-primary)"></i>
                        <span>Manajemen Biaya Operasional Toko</span>
                    </h3>
                    <p class="text-[11px] text-slate-400 mt-0.5">Catat nota beban berkala dan sinkronkan dengan perhitungan Laba Rugi</p>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button type="button" onclick="openAdminTab('expenses')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-book" style="color: var(--color-primary)"></i>
                        <span>Buku Kas &amp; Riwayat</span>
                    </button>
                    <button type="button" onclick="openExpenseModalFromReports()" class="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- STATUS KONEKSI BUKU KAS -->
            <div class="p-3.5 rounded-xl border ${
                hasLedgerItems 
                ? 'border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300' 
                : 'border-amber-200/80 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300'
            } flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <i class="fa-solid ${hasLedgerItems ? 'fa-circle-check text-emerald-600 text-sm' : 'fa-circle-info text-amber-600 text-sm'}"></i>
                    <div>
                        <span class="font-bold">${hasLedgerItems ? 'Sinkronisasi Otomatis Aktif' : 'Pencatatan Transaksional'}</span>: 
                        <span class="text-[11px] opacity-90">${
                            hasLedgerItems 
                            ? `Terhubung dengan Buku Kas (${expenseData.transactionCount} transaksi di ${periodLabel}).` 
                            : `Belum ada nota transaksi di ${periodLabel}. Anda dapat mencatat nota baru atau memasukkan estimasi nominal di bawah.`
                        }</span>
                    </div>
                </div>
                <button type="button" onclick="openExpenseModalFromReports()" class="shrink-0 text-[11px] font-black underline cursor-pointer hover:opacity-80" style="color: var(--color-primary)">
                    + Catat Baru
                </button>
            </div>

            <!-- REKAP KARTU KATEGORI BEBAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Distribusi Biaya Operasional Toko — ${periodLabel}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-rose-600 dark:text-rose-400">${fCur(expenseData.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${categoryCardsHTML}</div>
            </div>

            <!-- DAFTAR TRANSAKSI ITEM BUKU KAS (JIKA ADA) -->
            ${ledgerTableHTML}

            <!-- FORM PENYESUAIAN BULANAN / MANUAL OVERRIDE -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <div class="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyesuaian Manual / Input Angka Cepat</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Digunakan jika Anda ingin menyesuaikan total operasional secara langsung per bulan</p>
                </div>
                ${formHTML}
            </div>
        </div>
    `);
};

export const calcReportMonthlyExpenseTotal = () => {
    let sum = 0;
    EXPENSE_CATEGORIES.forEach(cat => {
        const inp = el(`input-exp-${cat.key}`);
        if (inp) sum += (parseFloat(inp.value) || 0);
    });
    setIn('label-exp-total', fCur(sum));
};

export const saveReportExpenseBreakdown = async (key) => {
    sLoad('Menyimpan biaya operasional...');
    const detail = {};
    let total = 0;

    EXPENSE_CATEGORIES.forEach(cat => {
        const inp = el(`input-exp-${cat.key}`);
        const val = inp ? (parseFloat(inp.value) || 0) : 0;
        detail[cat.key] = val;
        total += val;
    });

    if (!appData.taxSettings) appData.taxSettings = {};
    if (!appData.taxSettings.monthlyExpenses) appData.taxSettings.monthlyExpenses = {};
    if (!appData.taxSettings.expenseBreakdown) appData.taxSettings.expenseBreakdown = {};

    appData.taxSettings.monthlyExpenses[key] = total;
    appData.taxSettings.expenseBreakdown[key] = detail;

    try {
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings']);
        hLoad();
        showToast('Biaya operasional berhasil disimpan!');
        renderReportsShell();
    } catch(e) {
        hLoad();
        showToast('Gagal menyimpan biaya operasional: ' + e.message);
    }
};

export const saveReportMonthlyExpense = async (key, val) => {
    await saveMonthlyExpense(key, val);
    renderReportsShell();
};

// ═══════════════════════════════════════════════════════════════
// 6. TAB 6: LAPORAN PERPAJAKAN RI 2026 (TAX COMPLIANCE)
// ═══════════════════════════════════════════════════════════════
export const renderTaxComplianceTab = () => {
    const totals = getReportFinancialTotals();
    const periodLabel = reportMonth === 0 ? `Tahun ${reportYear}` : `${MONTH_NAMES[reportMonth - 1]} ${reportYear}`;
    const dpp = totals.omset - totals.disc;
    const estimasiPphFinal = Math.round(totals.omset * 0.005);
    const ts = appData.taxSettings || {};

    const monthlyMap = {};
    for (let m = 1; m <= 12; m++) monthlyMap[m] = { omset: 0, ppn: 0, orderCount: 0 };
    cachedReportOrders.forEach(o => {
        const orderDate = parseOrderDate(o);
        if (!orderDate) return;
        const mKey = orderDate.getMonth() + 1;
        if (monthlyMap[mKey]) {
            const dppVal = (o.payment?.dppAmount !== undefined && o.payment?.dppAmount !== null) 
                ? parseFloat(o.payment.dppAmount) 
                : (parseFloat(o.payment?.subtotal) || 0);
            monthlyMap[mKey].omset += dppVal;
            monthlyMap[mKey].ppn += parseFloat(o.payment?.ppnAmount) || 0;
            monthlyMap[mKey].orderCount++;
        }
    });

    // Mobile Monthly SPT Cards (< 640px)
    const monthCardsHTML = Array.from({length: 12}, (_, i) => i + 1).map(m => {
        const d = (window.gTaxMonthly && window.gTaxMonthly[m] && window.gTaxMonthly[m].omset > 0)
            ? window.gTaxMonthly[m]
            : monthlyMap[m];
        const isActiveRow = reportMonth === m;
        const mPph = Math.round((d.omset || 0) * 0.005);
        return `
            <div class="p-3.5 rounded-xl border transition-all ${
                isActiveRow 
                ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] shadow-2xs' 
                : 'border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40'
            } space-y-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${
                            isActiveRow ? 'bg-[var(--color-primary)] text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }">${m}</span>
                        <span class="text-xs font-black ${isActiveRow ? 'text-[var(--color-primary)]' : 'text-slate-800 dark:text-white'}">${MONTH_NAMES[m - 1]}</span>
                        ${isActiveRow ? '<span class="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[var(--color-primary)] text-white">Bulan Aktif</span>' : ''}
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        ${d.orderCount} Pesanan
                    </span>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-center">
                    <div>
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Omset (DPP)</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${fCur(d.omset)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPN</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${fCur(d.ppn)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPh 0,5%</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${fCur(mPph)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Desktop 12-Month Table Rows (>= 640px)
    const monthRows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
        const d = (window.gTaxMonthly && window.gTaxMonthly[m] && window.gTaxMonthly[m].omset > 0)
            ? window.gTaxMonthly[m]
            : monthlyMap[m];
        const isActiveRow = reportMonth === m;
        const mPph = Math.round((d.omset || 0) * 0.005);
        return `
            <tr class="${isActiveRow ? 'bg-[rgba(var(--color-primary-rgb),0.08)] font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${MONTH_NAMES[m - 1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${fCur(d.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${fCur(d.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color: var(--color-primary)">${fCur(mPph)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${d.orderCount}</td>
            </tr>
        `;
    }).join('');

    setH('report-hub-content', `
        <div class="space-y-4 sm:space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Omset Bruto</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${fCur(totals.omset)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${totals.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Diskon Produk</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${fCur(totals.disc)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">DPP Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-calculator"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${fCur(dpp)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color:var(--color-primary)">PPN Keluaran</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-receipt"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${fCur(totals.ppn)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${totals.ppn > 0 ? 'Wajib setor kas negara' : 'Bebas PPN / Tarif 0%'}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 col-span-2 lg:col-span-1 rounded-2xl flex flex-col justify-between" style="border: 1px solid rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.05);">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">PPh Final 0,5%</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.2); color: var(--color-primary);"><i class="fa-solid fa-building-columns"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color: var(--color-primary)">${fCur(estimasiPphFinal)}</p>
                    </div>
                    <p class="text-[10px] font-medium mt-2 pt-2 border-t border-[rgba(var(--color-primary-rgb),0.15)]" style="color: var(--color-primary); opacity: 0.85;">PP 55/2022 UMKM</p>
                </div>
            </div>

            <!-- TABEL REKAP 12 BULAN & PENGATURAN IDENTITAS PAJAK -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <!-- Tabel / Kartu 12 Bulan -->
                <div class="lg:col-span-2 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${reportYear}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Dasar Pengenaan Pajak, PPN Keluaran, &amp; PPh Final 0,5%</p>
                        </div>
                        <button type="button" onclick="openTaxDocPreview('summary')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0">
                            <i class="fa-solid fa-print text-xs"></i> Cetak Rekap
                        </button>
                    </div>
                    
                    <!-- Mobile View (< 640px): Native Cards -->
                    <div class="block sm:hidden p-3.5 space-y-2.5">
                        ${monthCardsHTML}
                    </div>

                    <!-- Desktop View (>= 640px): Full Table -->
                    <div class="hidden sm:block overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <th class="py-2.5 px-4">Bulan</th>
                                    <th class="py-2.5 px-4 text-right">Omset (DPP)</th>
                                    <th class="py-2.5 px-4 text-right">PPN</th>
                                    <th class="py-2.5 px-4 text-right">PPh 0,5%</th>
                                    <th class="py-2.5 px-4 text-right">Pesanan</th>
                                </tr>
                            </thead>
                            <tbody>${monthRows}</tbody>
                        </table>
                    </div>
                </div>

                <!-- Formulir Identitas Pajak CTAS 2026 -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-id-card"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Identitas Wajib Pajak</h4>
                            <p class="text-[10px] text-slate-400">NPWP 16-Digit CTAS DJP 2026</p>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Nama Badan Usaha</label>
                            <input type="text" id="report-tax-company" value="${esc(ts.companyName || appData.store?.name || '')}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${esc(ts.npwp || appData.store?.taxNpwp || '')}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Skema PPh Toko</label>
                            <select id="report-tax-scheme" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden cursor-pointer">
                                <option value="umkm_final" ${ts.taxScheme === 'umkm_final' ? 'selected' : ''}>PPh Final UMKM 0,5% (PP 55/2022)</option>
                                <option value="badan_normal" ${ts.taxScheme === 'badan_normal' ? 'selected' : ''}>PPh Badan Normal 22% (UU HPP)</option>
                            </select>
                        </div>
                        <button type="button" onclick="saveReportTaxSettings()" class="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 mt-2 shadow-2xs">
                            <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `);
};

export const saveReportTaxSettings = async () => {
    sLoad('Menyimpan pengaturan pajak...');
    if (!appData.taxSettings) appData.taxSettings = {};
    const company = getV('report-tax-company');
    const npwp = getV('report-tax-npwp');
    const scheme = getV('report-tax-scheme');

    appData.taxSettings.companyName = company;
    appData.taxSettings.npwp = npwp;
    appData.taxSettings.taxScheme = scheme;

    if (!appData.store) appData.store = {};
    appData.store.taxNpwp = npwp;

    try {
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings', 'store']);
        hLoad();
        showToast('Identitas pajak berhasil diperbarui!');
        renderReportsShell();
    } catch (e) {
        hLoad();
        showToast('Gagal menyimpan: ' + e.message);
    }
};

// ═══════════════════════════════════════════════════════════════
// 7. TAB 7: NERACA KEUANGAN (BALANCE SHEET)
// ═══════════════════════════════════════════════════════════════
export const renderBalanceSheetTab = () => {
    const bs = appData.taxSettings?.balanceSheet || { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 };
    const st = computeInventoryStats();
    const purchaseMetrics = computePurchaseMetrics();

    const kas = parseFloat(bs.kas) || 0;
    const piutangOtomatis = cachedPiutangOrders.reduce((acc, o) => acc + (getTempoOrderCalculations(o).totalAkhir || 0), 0);
    const persediaanBarang = st.assetHpp || 0;
    const totalAktiva = kas + piutangOtomatis + persediaanBarang;

    const hutangOtomatis = purchaseMetrics.totalUnpaidDebt || 0;
    const modalDanLaba = Math.max(0, totalAktiva - hutangOtomatis);
    const totalPasiva = hutangOtomatis + modalDanLaba;

    setH('report-hub-content', `
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black" style="color: var(--color-primary)">${fCur(totalAktiva)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${kas}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${fCur(piutangOtomatis)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${fCur(persediaanBarang)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span style="color: var(--color-primary)">${fCur(totalAktiva)}</span>
                        </div>
                    </div>
                </div>

                <!-- PASIVA (KEWAJIBAN & MODAL) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs"><i class="fa-solid fa-scale-balanced"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">KEWAJIBAN &amp; MODAL</h3>
                        </div>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${fCur(totalPasiva)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${fCur(hutangOtomatis)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold" style="color: var(--color-primary)">${fCur(modalDanLaba)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-slate-800 dark:text-white">${fCur(totalPasiva)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center pt-2">
                <button type="button" onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer inline-flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak Lembar Neraca A4
                </button>
            </div>
        </div>
    `);
};

/**
 * Buka preview dokumen cetak A4 sesuai tab aktif
 */
export const openReportCurrentDocPreview = () => {
    if (reportActiveTab === 'executive' || reportActiveTab === 'sales') {
        openTaxDocPreview('income');
    } else if (reportActiveTab === 'tax') {
        openTaxDocPreview('summary');
    } else if (reportActiveTab === 'balance') {
        openTaxDocPreview('balance');
    } else {
        openTaxDocPreview('income');
    }
};

// ─── Expose ke Global Window untuk Navigasi Inline HTML ─────
window.renderReportsHubView = renderReportsHubView;
window.switchReportTab = switchReportTab;
window.changeReportYear = changeReportYear;
window.changeReportMonth = changeReportMonth;
window.refreshReportData = refreshReportData;
window.openReportCurrentDocPreview = openReportCurrentDocPreview;
window.filterStockReportStatus = filterStockReportStatus;
window.filterStockReportCategory = filterStockReportCategory;
window.filterStockReportSearch = filterStockReportSearch;
window.clearStockReportSearch = clearStockReportSearch;
window.calcReportMonthlyExpenseTotal = calcReportMonthlyExpenseTotal;
window.saveReportExpenseBreakdown = saveReportExpenseBreakdown;
window.saveReportMonthlyExpense = saveReportMonthlyExpense;
window.saveReportTaxSettings = saveReportTaxSettings;

export default {
    renderReportsHubView,
    switchReportTab,
    changeReportYear,
    changeReportMonth,
    refreshReportData,
    openReportCurrentDocPreview
};

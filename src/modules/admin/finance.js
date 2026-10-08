/**
 * ============================================================
 * MODUL ADMIN: KEUANGAN & PAJAK (PPN, LABA RUGI, NERACA)
 * Mengatur rekap transaksi tahunan, dasar pengenaan pajak (DPP),
 * PPN keluaran, perhitungan laba kotor & bersih, biaya operasional,
 * neraca aset/kewajiban, dan cetak dokumen A4 laporan keuangan.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData, isSaving, setIsSaving } from '../../core/state.js';

import { 
    el, show, setIn, setH, getV, esc, fCur, fAccounting,
    showToast, sLoad, hLoad, toggleCls 
} from '../../core/utils.js';
import { computeInventoryStats } from './auth.js';

export let taxYear = new Date().getFullYear();
export let taxMonth = 0; // 0 = Setahun Penuh, 1-12 = bulan spesifik
export let taxActiveTab = 'menu';
export let gTaxMonthly = null; // cache hasil fetch: { "1":{omset,ppn,hpp,disc,orderCount}, ..., "12":{...} }
export const MONTH_NAMES = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

/**
 * Dapatkan HPP efektif untuk perhitungan laba
 */
export const getEffHpp = (item) => {
    if (typeof window.getEffHpp === 'function') return window.getEffHpp(item);
    const p = appData.products?.find(x => x && x.id != null && String(x.id) === String(item.id));
    if (!p) return 0;
    if (item.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === item.variantName);
        if (v && v.hpp != null) return parseFloat(v.hpp) || 0;
    }
    return parseFloat(p.hpp) || 0;
};

const taxPeriodCache = new Map();
const TAX_PERIOD_CACHE_TTL = 2 * 60 * 1000; // 2 menit

/**
 * Tarik data transaksi pesanan per periode dari Firestore
 */
export const fetchTaxPeriodData = async (year) => {
    const cached = taxPeriodCache.get(year);
    if (cached && (Date.now() - cached.timestamp < TAX_PERIOD_CACHE_TTL)) {
        return cached.data;
    }

    const monthly = {};
    for (let m = 1; m <= 12; m++) monthly[m] = { omset: 0, ppn: 0, hpp: 0, disc: 0, orderCount: 0 };
    try {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year + 1, 0, 1);
        const q = db.collection("freshmart_orders")
            .where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(startDate))
            .where('timestamp', '<', firebase.firestore.Timestamp.fromDate(endDate));
        const snap = await q.limit(5000).get();
        snap.forEach(doc => {
            const o = doc.data();
            if (o.status === 'Dibatalkan') return;
            if (!o.timestamp || !o.timestamp.toDate) return;
            
            const monthKey = o.timestamp.toDate().getMonth() + 1; // 1-12
            if (!monthly[monthKey]) return;
            const dppVal = (o.payment?.dppAmount !== undefined && o.payment?.dppAmount !== null) 
                ? parseFloat(o.payment.dppAmount) 
                : (parseFloat(o.payment?.subtotal) || 0);
            
            monthly[monthKey].omset += dppVal;
            monthly[monthKey].ppn += parseFloat(o.payment?.ppnAmount) || 0;
            monthly[monthKey].disc += parseFloat(o.payment?.productDiscount) || 0;
            monthly[monthKey].orderCount++;
            (o.items || []).forEach(it => {
                const hppItem = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : getEffHpp(it);
                monthly[monthKey].hpp += (parseFloat(hppItem) || 0) * (parseFloat(it.qty) || 0);
            });
        });
    } catch(e) { 
        console.error('Gagal memuat data pajak:', e); 
        showToast('Gagal memuat data periode ini!'); 
    }
    taxPeriodCache.set(year, { data: monthly, timestamp: Date.now() });
    gTaxMonthly = monthly;
    return monthly;
};

/**
 * Jumlahkan bulan-bulan yang relevan sesuai filter
 */
export const getTaxPeriodTotals = () => {
    if (!gTaxMonthly) return { omset: 0, ppn: 0, hpp: 0, disc: 0, orderCount: 0 };
    const months = taxMonth === 0 ? Object.keys(gTaxMonthly) : [taxMonth];
    return months.reduce((acc, m) => {
        const d = gTaxMonthly[m];
        acc.omset += d.omset; 
        acc.ppn += d.ppn; 
        acc.hpp += d.hpp; 
        acc.disc += d.disc; 
        acc.orderCount += d.orderCount;
        return acc;
    }, { omset: 0, ppn: 0, hpp: 0, disc: 0, orderCount: 0 });
};

/**
 * Total biaya operasional manual untuk bulan/periode yang dipilih
 */
export const getTaxPeriodExpenses = () => {
    const exp = appData.taxSettings?.monthlyExpenses || {};
    const months = taxMonth === 0 ? Array.from({length: 12}, (_, i) => i + 1) : [taxMonth];
    return months.reduce((s, m) => s + (parseFloat(exp[`${taxYear}-${m}`]) || 0), 0);
};

/**
 * Inisialisasi dan render shell panel pajak & keuangan
 */
export const rTaxPanel = async () => {
    setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
    gTaxMonthly = await fetchTaxPeriodData(taxYear);
    rTaxRenderShell();
};

export const rTaxRenderShell = () => {
    const yearOptions = Array.from({length: 6}, (_, i) => new Date().getFullYear() - 4 + i);
    const tabs = [
        {k: 'summary', l: 'Ringkasan PPN', i: 'fa-receipt'},
        {k: 'income', l: 'Laba Rugi', i: 'fa-chart-pie'},
        {k: 'balance', l: 'Neraca', i: 'fa-scale-balanced'},
        {k: 'settings', l: 'Pengaturan', i: 'fa-gear'}
    ];

    if (taxActiveTab === 'menu') taxActiveTab = 'summary';
    
    const headerHTML = `
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                <i class="fa-solid fa-file-invoice-dollar text-base"></i>
            </div>
            <div>
                <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pajak &amp; Keuangan</h2>
                <p class="text-[9px] font-bold text-slate-500 mt-0.5">Rekap Omset, PPN, Laba Rugi, &amp; Neraca Toko</p>
            </div>
        </div>
        
        ${taxActiveTab === 'settings' ? '' : `
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${yearOptions.map(y => `<option value="${y}" ${y === taxYear ? 'selected' : ''}>${y}</option>`).join('')}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${taxMonth === 0 ? 'selected' : ''}>Setahun Penuh</option>
                ${MONTH_NAMES.map((n, idx) => `<option value="${idx + 1}" ${taxMonth === idx + 1 ? 'selected' : ''}>${n} ${taxYear}</option>`).join('')}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${tabs.map(t => {
            const isActive = taxActiveTab === t.k;
            return `
            <button onclick="switchTaxTab('${t.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${isActive ? 'primary-bg text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]'}">
                <i class="fa-solid ${t.i} text-xs"></i>
                <span>${t.l}</span>
            </button>`;
        }).join('')}
    </div>
    `;
    
    setH('admin-content', `
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${headerHTML}

        <div id="tax-content"></div>
    </div>`);
    rTaxSubContent();
};

export const switchTaxTab = (tab) => {
    taxActiveTab = tab;
    rTaxRenderShell();
};

export const changeTaxYear = async (y) => {
    taxYear = parseInt(y, 10);
    setH('tax-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
    gTaxMonthly = await fetchTaxPeriodData(taxYear);
    rTaxSubContent();
};

export const changeTaxMonth = (m) => { 
    taxMonth = parseInt(m, 10); 
    rTaxSubContent(); 
};

export const rTaxSubContent = () => {
    if (taxActiveTab === 'summary') rTaxSummary();
    else if (taxActiveTab === 'income') rTaxIncome();
    else if (taxActiveTab === 'balance') rTaxBalance();
    else if (taxActiveTab === 'settings') rTaxSettingsPanel();
};

// ---------- SUB-TAB 1: RINGKASAN PPN & OMSET ----------
export const rTaxSummary = () => {
    const t = getTaxPeriodTotals();
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth - 1]} ${taxYear}`;
    const dpp = t.omset - t.disc;
    const estimasiPphFinal = Math.round(t.omset * 0.005);

    const monthRows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
        const d = gTaxMonthly ? gTaxMonthly[m] : { omset: 0, ppn: 0, orderCount: 0 };
        const isActiveRow = taxMonth === m;
        const mPph = Math.round((d.omset || 0) * 0.005);
        return `<tr class="${isActiveRow ? 'bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-700/30'} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${MONTH_NAMES[m - 1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${fCur(d.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${fCur(d.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${fCur(mPph)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${d.orderCount}</td>
        </tr>`;
    }).join('');

    setH('tax-content', `
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${periodLabel})</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${fCur(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-sm sm:text-lg font-bold text-rose-500 truncate">${fCur(t.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">${fCur(dpp)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-sm sm:text-lg font-bold truncate" style="color:var(--color-primary)">${fCur(t.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">${t.ppn > 0 ? 'Wajib setor kas negara' : 'Bebas PPN / Tarif 0%'}</p>
            </div>
            <div class="card-modern p-4 sm:p-5 flex flex-col justify-between border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-building-columns mr-1"></i>PPh Final 0,5%</p>
                <p class="text-sm sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 truncate">${fCur(estimasiPphFinal)}</p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 Badan/UMKM</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${taxYear}</h4>
                <button onclick="openTaxDocPreview('summary')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-700/70">
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Bulan</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Omset</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">PPN Keluaran</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">PPh Final 0,5%</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Pesanan</th>
                        </tr>
                    </thead>
                    <tbody>${monthRows}</tbody>
                </table>
            </div>
        </div>
    `);
};

// ---------- SUB-TAB 2: LABA RUGI ----------
export const rTaxIncome = () => {
    const t = getTaxPeriodTotals();
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth - 1]} ${taxYear}`;
    const labaKotor = t.omset - t.disc - t.hpp;
    const expenseKey = taxMonth === 0 ? null : `${taxYear}-${taxMonth}`;
    const totalExpense = getTaxPeriodExpenses();
    const labaBersih = labaKotor - totalExpense;

    const scheme = appData.taxSettings?.taxScheme || 'umkm_final';
    let taxRate, taxBase, taxLabel;
    if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final Badan / UMKM (0,5% × Omset PP 55/2022)'; }
    else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan (22% × Laba Bersih UU HPP)'; }
    else { taxRate = parseFloat(appData.taxSettings?.customTaxRate) || 0; taxBase = Math.max(0, labaBersih); taxLabel = `PPh Custom (${taxRate}% × Laba Bersih)`; }
    const estimasiPajak = taxBase * (taxRate / 100);
    const labaSetelahPajak = labaBersih - estimasiPajak;

    let expenseInputs = '';
    if (taxMonth === 0) {
        expenseInputs = Array.from({length: 12}, (_, i) => i + 1).map(m => {
            const key = `${taxYear}-${m}`;
            const val = (appData.taxSettings?.monthlyExpenses || {})[key] || 0;
            return `<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${MONTH_NAMES[m - 1]} ${taxYear}</span>
                <input type="number" min="0" value="${val}" onchange="saveMonthlyExpense('${key}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`;
        }).join('');
    } else {
        const val = (appData.taxSettings?.monthlyExpenses || {})[expenseKey] || 0;
        expenseInputs = `<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${MONTH_NAMES[taxMonth - 1]} ${taxYear}</span>
            <input type="number" min="0" value="${val}" onchange="saveMonthlyExpense('${expenseKey}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`;
    }

    setH('tax-content', `
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${periodLabel}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${fCur(t.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${fCur(t.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${fCur(t.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${fCur(labaKotor)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${fCur(totalExpense)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${fCur(labaBersih)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${taxLabel}</span><span class="font-bold text-rose-500">-${fCur(estimasiPajak)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${fCur(labaSetelahPajak)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${expenseInputs}
                </div>
            </div>
        </div>
    `);
};

export const saveMonthlyExpense = async (key, value) => {
    const num = parseFloat(value) || 0;
    if (!appData.taxSettings) appData.taxSettings = {};
    if (!appData.taxSettings.monthlyExpenses) appData.taxSettings.monthlyExpenses = {};
    appData.taxSettings.monthlyExpenses[key] = num;
    try {
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings']);
        rTaxIncome();
    } catch(e) { 
        showToast('Gagal menyimpan biaya operasional!'); 
    }
};

// ---------- SUB-TAB 3: NERACA SEDERHANA ----------
export const rTaxBalance = () => {
    const st = computeInventoryStats();
    const bs = appData.taxSettings?.balanceSheet || { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 };

    const totalAset = (parseFloat(bs.kas) || 0) + (parseFloat(bs.piutang) || 0) + st.assetHpp;
    const totalKewajiban = parseFloat(bs.hutang) || 0;
    const modalDanLaba = totalAset - totalKewajiban;

    setH('tax-content', `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- ASET CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                            <i class="fa-solid fa-arrow-down-wide-short text-xs"></i>
                        </div>
                        <span>ASET (Aktiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Kas &amp; Bank (manual)</span>
                        <input type="number" min="0" value="${bs.kas || 0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${bs.piutang || 0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${fCur(st.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${fCur(totalAset)}</span>
                    </div>
                </div>
            </div>

            <!-- KEWAJIBAN & MODAL CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-arrow-up-wide-short text-xs"></i>
                        </div>
                        <span>KEWAJIBAN &amp; MODAL (Pasiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Hutang Usaha (manual)</span>
                        <input type="number" min="0" value="${bs.hutang || 0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${fCur(modalDanLaba)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${fCur(totalKewajiban + modalDanLaba)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `);
};

export const saveBalanceField = async (key, value) => {
    const num = parseFloat(value) || 0;
    if (!appData.taxSettings) appData.taxSettings = {};
    if (!appData.taxSettings.balanceSheet) appData.taxSettings.balanceSheet = { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 };
    appData.taxSettings.balanceSheet[key] = num;
    try {
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings']);
        rTaxBalance();
    } catch(e) { 
        showToast('Gagal menyimpan data neraca!'); 
    }
};

// ---------- SUB-TAB 4: PENGATURAN PAJAK ----------
export const rTaxSettingsPanel = () => {
    const ts = appData.taxSettings || {};
    setH('tax-content', `
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${esc(ts.companyName || '')}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${esc(ts.npwp || '')}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${ts.taxScheme === 'umkm_final' ? 'selected' : ''}>PPh Final Badan / UMKM — 0,5% dari Omset (PP 55/2022 &amp; UU HPP)</option>
                    <option value="badan_normal" ${ts.taxScheme === 'badan_normal' ? 'selected' : ''}>PPh Badan Normal — 22% dari Laba Bersih (UU HPP)</option>
                    <option value="custom" ${ts.taxScheme === 'custom' ? 'selected' : ''}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${ts.taxScheme === 'custom' ? '' : 'hidden'}">
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${ts.customTaxRate || 0.5}" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <button onclick="saveTaxSettingsPanel()" class="primary-bg py-3.5 text-xs sm:text-sm font-bold shadow-glow rounded-xl flex items-center justify-center gap-2 w-full uppercase tracking-widest text-white active:scale-95 transition-all">
                <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
            </button>
        </div>
    `);
};

export const toggleCustomTaxRateInput = (val) => { 
    toggleCls('tax-custom-rate-wrap', 'hidden', val !== 'custom'); 
};

export const saveTaxSettingsPanel = async () => {
    if (isSaving) return; 
    setIsSaving(true);
    sLoad('Menyimpan...');
    try {
        if (!appData.taxSettings) appData.taxSettings = {};
        appData.taxSettings.companyName = getV('tax-company-name');
        const npwpVal = getV('tax-npwp');
        appData.taxSettings.npwp = npwpVal;
        if (!appData.store) appData.store = {};
        appData.store.taxNpwp = npwpVal;
        appData.taxSettings.taxScheme = getV('tax-scheme');
        appData.taxSettings.customTaxRate = parseFloat(getV('tax-custom-rate')) || 0.5;
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings', 'store']);
        showToast('Pengaturan pajak & NPWP tersimpan!');
    } catch(e) { 
        showToast('Gagal menyimpan pengaturan pajak!'); 
    } finally { 
        setIsSaving(false); 
        hLoad(); 
    }
};

/**
 * Preview dokumen A4 untuk laporan Pajak sebelum dicetak
 */
export const openTaxDocPreview = (reportType) => {
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear} (Setahun Penuh)` : `${MONTH_NAMES[taxMonth - 1]} ${taxYear}`;
    const ts = appData.taxSettings || {};
    const today = new Date().toLocaleDateString('id-ID', {day: '2-digit', month: 'long', year: 'numeric'});
    const storeName = ts.companyName || appData.store?.name || 'PUTRI UTAMA TEKNIK';
    const storeAddress = appData.store?.address || 'Jln. Pakem RT005 RW003 Ds. Banyuanyar, Kec. Gurah, Kab. Kediri';
    const storePhone = appData.store?.wa || appData.store?.phone || '-';
    const npwpStr = ts.npwp || '';

    let logoHTML = '';
    if (appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-14 h-14 object-contain rounded-xl border border-slate-200">`;
    } else {
        logoHTML = `<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-md shrink-0" style="background: linear-gradient(135deg, var(--color-primary, #b8860b), var(--color-primary-dark, #8b6508));"><i class="fa-solid fa-store"></i></div>`;
    }

    const titles = { summary: 'LAPORAN PPN & OMSET BULANAN', income: 'LAPORAN LABA RUGI KOMPREHENSIF', balance: 'NERACA KEUANGAN (BALANCE SHEET)' };
    const docCodes = { summary: 'PPN', income: 'PL', balance: 'BS' };
    const title = titles[reportType] || 'LAPORAN KEUANGAN';
    const docNumber = `DOC-${docCodes[reportType] || 'FIN'}-${taxYear}${taxMonth ? String(taxMonth).padStart(2, '0') : 'FY'}-001`;

    // ─── KOP SURAT RESMI EKSEKUTIF TOKO PUTRI ───
    const kopHtml = `
    <div class="border-b-2 border-slate-900 pb-3.5 mb-3.5 select-none">
        <div class="flex justify-between items-start gap-4">
            <div class="flex items-center gap-3.5">
                ${logoHTML}
                <div>
                    <h1 class="font-black text-lg sm:text-xl tracking-tight text-slate-900 uppercase leading-none">${esc(storeName)}</h1>
                    <p class="text-[11px] font-semibold text-slate-500 mt-1 max-w-sm leading-tight">${esc(storeAddress)}</p>
                    <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                        ${npwpStr ? `<span class="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">NPWP: ${esc(npwpStr)}</span>` : ''}
                        <span class="font-bold text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i>${esc(storePhone)}</span>
                    </div>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white mb-1">Executive Statement</span>
                <h2 class="font-black text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight">${title}</h2>
                <p class="text-xs font-bold text-slate-700 mt-0.5 font-mono">No: <span class="text-blue-700 font-black">${docNumber}</span></p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${periodLabel}</b> &bull; Dicetak: ${today}</p>
            </div>
        </div>
    </div>
    <div class="bg-amber-50/90 border border-amber-200/90 rounded-xl p-2.5 mb-3.5 text-[10.5px] font-medium text-amber-900 flex items-start gap-2 leading-relaxed select-none">
        <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 text-xs shrink-0"></i>
        <span><b>Rekapitulasi Pembukuan Finansial Internal:</b> Dokumen ini disusun secara otomatis berdasarkan pencatatan transaksi POS Kasir, penjualan etalase, sistem HPP FIFO kulakan, dan buku kas operasional Toko Putri. Mohon validasi ke akuntan sebelum pelaporan SPT resmi.</span>
    </div>
    `;

    // ─── KOLOM PENGESAHAN TANDA TANGAN GANDA ───
    const signaturesHtml = `
    <div class="mt-auto pt-3 flex justify-between items-end text-xs text-slate-700 select-none">
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disusun &amp; Diperiksa Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan Staf]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${esc(appData.store?.staffName || 'Bagian Keuangan')}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Administrasi &amp; Kasir</p>
        </div>
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disetujui &amp; Disahkan Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan &amp; Stempel]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${esc(storeName)}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Pemilik Usaha / Owner</p>
        </div>
    </div>
    `;

    // ─── RUNNING FOOTER LEMBAR A4 ───
    const footerHtml = `
    <div class="a4-page-footer mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${esc(storeName)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${esc(title)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono">${docNumber}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            <span>Halaman 1 dari 1</span>
        </div>
    </div>
    `;

    let innerContentHtml = '';

    if (reportType === 'summary') {
        const t = getTaxPeriodTotals();
        const dpp = Math.max(0, t.omset - t.disc);
        const rows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
            const d = gTaxMonthly ? gTaxMonthly[m] : { omset: 0, ppn: 0, orderCount: 0 };
            const mDpp = Math.max(0, (d.omset || 0) - (d.disc || 0));
            return `
            <tr class="border-b border-slate-200 hover:bg-slate-50/50">
                <td class="py-2 px-3 font-bold text-slate-800">${MONTH_NAMES[m - 1]} ${taxYear}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${fCur(d.omset || 0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-700">${fCur(mDpp)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-bold text-amber-700">${fCur(d.ppn || 0)}</td>
                <td class="py-2 px-3 text-right font-mono tabular-nums font-semibold text-slate-600">${d.orderCount || 0} Trx</td>
            </tr>`;
        }).join('');

        innerContentHtml = `
            <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Omset Bruto</span>
                    <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${fCur(t.omset)}</span>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Diskon Produk</span>
                    <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${t.disc > 0 ? fAccounting(t.disc, true) : 'Rp 0'}</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Dasar Pajak (DPP)</span>
                    <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${fCur(dpp)}</span>
                </div>
                <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Total PPN Keluaran</span>
                    <span class="text-sm font-black text-amber-700 font-mono tabular-nums block mt-0.5">${fCur(t.ppn)}</span>
                </div>
            </div>

            <table class="w-full text-xs border-collapse border border-slate-300 mb-4">
                <thead>
                    <tr class="bg-slate-900 text-white font-bold text-[9.5px] uppercase tracking-wider">
                        <th class="py-2.5 px-3 text-left">Bulan</th>
                        <th class="py-2.5 px-3 text-right">Omset Bruto</th>
                        <th class="py-2.5 px-3 text-right">Dasar Pajak (DPP)</th>
                        <th class="py-2.5 px-3 text-right">PPN Keluaran</th>
                        <th class="py-2.5 px-3 text-right">Jumlah Pesanan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                    ${rows}
                    <tr class="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-800">
                        <td class="py-2.5 px-3 uppercase">Total Tahunan</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${fCur(t.omset)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${fCur(dpp)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-amber-700">${fCur(t.ppn)}</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums">${t.orderCount || 0} Trx</td>
                    </tr>
                </tbody>
            </table>
        `;
    } else if (reportType === 'income') {
        const t = getTaxPeriodTotals();
        const netSales = Math.max(0, t.omset - t.disc);
        const labaKotor = netSales - t.hpp;
        const totalExpense = getTaxPeriodExpenses();
        const labaBersih = labaKotor - totalExpense;
        const scheme = ts.taxScheme || 'umkm_final';
        let taxRate, taxBase, taxLabel;
        if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final UMKM PP 55/2022 (0,5% × Omset)'; }
        else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan UU HPP (22% × Laba Bersih)'; }
        else { taxRate = parseFloat(ts.customTaxRate) || 0; taxBase = Math.max(0, labaBersih); taxLabel = `PPh Tarif Khusus (${taxRate}% × Laba Bersih)`; }
        const estimasiPajak = taxBase * (taxRate / 100);
        const labaSetelahPajak = labaBersih - estimasiPajak;

        // Persentase Margin terhadap Omset
        const grossMarginPct = netSales > 0 ? ((labaKotor / netSales) * 100).toFixed(1) : '0.0';
        const opexPct = netSales > 0 ? ((totalExpense / netSales) * 100).toFixed(1) : '0.0';
        const netMarginPct = netSales > 0 ? ((labaSetelahPajak / netSales) * 100).toFixed(1) : '0.0';

        // 4 KPI Cards Eksekutif
        const kpiHtml = `
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Penjualan Bersih</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${fCur(netSales)}</span>
                <span class="text-[9px] font-bold text-slate-400 mt-0.5 block">100% Basis Omset</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-800 block">Laba Kotor (Gross)</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${fCur(labaKotor)}</span>
                <span class="text-[9px] font-bold text-emerald-600 mt-0.5 block">${grossMarginPct}% Gross Margin</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Beban Operasional</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${totalExpense > 0 ? fAccounting(totalExpense, true) : 'Rp 0'}</span>
                <span class="text-[9px] font-bold text-rose-600 mt-0.5 block">${opexPct}% Opex Ratio</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Laba Bersih Akhir</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${fCur(labaSetelahPajak)}</span>
                <span class="text-[9px] font-bold text-blue-600 mt-0.5 block">${netMarginPct}% Net Margin</span>
            </div>
        </div>
        `;

        // Tabel Ledger Akuntansi PSAK
        innerContentHtml = `
            ${kpiHtml}
            <table class="w-full text-xs border-collapse border border-slate-300 mb-3.5">
                <thead>
                    <tr class="bg-slate-900 text-white font-bold text-[9.5px] uppercase tracking-wider">
                        <th class="py-2.5 px-3 text-left w-16">Kode</th>
                        <th class="py-2.5 px-3 text-left">Komponen Akun Finansial</th>
                        <th class="py-2.5 px-3 text-center w-28">Catatan / %</th>
                        <th class="py-2.5 px-3 text-right w-36">Rincian (Rp)</th>
                        <th class="py-2.5 px-3 text-right w-36">Saldo Bersih (Rp)</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-800">
                    <!-- I. PENDAPATAN USAHA -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">1.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">I. PENDAPATAN USAHA (REVENUE)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6">Penjualan Kotor (Gross Sales)</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">POS &amp; Online</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold">${fCur(t.omset)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">4-200</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Potongan &amp; Diskon Penjualan</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">Diskon Nota</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${fAccounting(t.disc, true)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">4-000</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Total Pendapatan Bersih (Net Revenue)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-blue-700 font-bold">100.0%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${fCur(netSales)}</td>
                    </tr>

                    <!-- II. HPP -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">2.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">II. HARGA POKOK PENJUALAN (COST OF GOODS SOLD)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">5-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Beban Pokok Penjualan (HPP FIFO / Kulakan)</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">Stok Terjual</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${fAccounting(t.hpp, true)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-emerald-50/80 font-black text-emerald-950 border-t border-emerald-300">
                        <td class="py-2 px-3 font-mono text-[11px]">5-900</td>
                        <td class="py-2 px-3 pl-6 uppercase tracking-wide text-emerald-900 text-[11px]">LABA KOTOR (GROSS PROFIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-emerald-700 font-bold">${grossMarginPct}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-emerald-700 text-[12.5px] font-black">${fCur(labaKotor)}</td>
                    </tr>

                    <!-- III. BEBAN OPERASIONAL -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">3.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">III. BEBAN OPERASIONAL (OPERATING EXPENSES)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">6-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Beban Operasional Toko, Listrik &amp; Biaya Lain</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-slate-500">Buku Kas Toko</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${fAccounting(totalExpense, true)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-slate-50 font-bold text-slate-900 border-t border-slate-300">
                        <td class="py-2 px-3 font-mono text-[11px]">6-900</td>
                        <td class="py-2 px-3 pl-6 uppercase text-[11px]">Laba Operasional Sebelum Pajak (EBIT)</td>
                        <td class="py-2 px-3 text-center text-[10px] font-mono text-slate-600">${netSales > 0 ? ((labaBersih / netSales) * 100).toFixed(1) : '0.0'}%</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2 px-3 text-right font-mono tabular-nums font-black text-slate-900 text-[12px]">${fCur(labaBersih)}</td>
                    </tr>

                    <!-- IV. PAJAK & LABA BERSIH -->
                    <tr class="bg-slate-100/70 font-black text-slate-900 text-[10.5px]">
                        <td class="py-1.5 px-3 font-mono">4.0</td>
                        <td class="py-1.5 px-3 uppercase tracking-wide" colspan="4">IV. ESTIMASI BEBAN PAJAK PENGHASILAN (TAX PROVISION)</td>
                    </tr>
                    <tr>
                        <td class="py-1.5 px-3 font-mono text-slate-500 text-[11px]">9-100</td>
                        <td class="py-1.5 px-3 font-semibold pl-6 text-rose-700">Estimasi ${esc(taxLabel)}</td>
                        <td class="py-1.5 px-3 text-center text-[10px] text-rose-600">${taxRate}% Basis</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums font-semibold text-rose-600">${fAccounting(estimasiPajak, true)}</td>
                        <td class="py-1.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                    </tr>
                    <tr class="bg-blue-50/90 text-blue-950 font-black border-t-2 border-slate-900 border-b-4 border-double border-slate-900">
                        <td class="py-2.5 px-3 font-mono text-[11.5px]">9-900</td>
                        <td class="py-2.5 px-3 pl-6 uppercase tracking-wider text-blue-900 text-[11.5px]">LABA BERSIH SETELAH PAJAK (NET INCOME)</td>
                        <td class="py-2.5 px-3 text-center text-[10.5px] font-mono text-blue-700">${netMarginPct}%</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-400">-</td>
                        <td class="py-2.5 px-3 text-right font-mono tabular-nums text-blue-900 text-[13.5px] font-black">${fCur(labaSetelahPajak)}</td>
                    </tr>
                </tbody>
            </table>
        `;
    } else if (reportType === 'balance') {
        const st = computeInventoryStats();
        const bs = ts.balanceSheet || { kas: 0, piutang: 0, hutang: 0 };
        const totalAset = (parseFloat(bs.kas) || 0) + (parseFloat(bs.piutang) || 0) + st.assetHpp;
        const totalKewajiban = parseFloat(bs.hutang) || 0;
        const modalDanLaba = totalAset - totalKewajiban;

        innerContentHtml = `
            <div class="grid grid-cols-2 gap-5 mb-4">
                <!-- ASET -->
                <div class="border border-slate-300 rounded-xl overflow-hidden bg-white">
                    <div class="bg-slate-900 text-white p-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>ASET (AKTIVA)</span>
                        <span class="font-mono text-[10px] text-slate-300">KODE: 1-000</span>
                    </div>
                    <div class="p-3 space-y-2 text-xs">
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-100 Kas &amp; Saldo Bank</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${fCur(bs.kas || 0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-200 Piutang Usaha (Nota Tempo)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${fCur(bs.piutang || 0)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">1-300 Persediaan Barang (Nilai HPP Stok)</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${fCur(st.assetHpp)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL ASET</span>
                            <span class="font-mono tabular-nums text-sm">${fCur(totalAset)}</span>
                        </div>
                    </div>
                </div>

                <!-- KEWAJIBAN & EKUITAS -->
                <div class="border border-slate-300 rounded-xl overflow-hidden bg-white">
                    <div class="bg-slate-900 text-white p-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>KEWAJIBAN &amp; EKUITAS (PASIVA)</span>
                        <span class="font-mono text-[10px] text-slate-300">KODE: 2-000 / 3-000</span>
                    </div>
                    <div class="p-3 space-y-2 text-xs">
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">2-100 Hutang Usaha (Kulakan PO Rekanan)</span>
                            <span class="font-mono tabular-nums font-bold text-rose-700">${fCur(totalKewajiban)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100">
                            <span class="font-semibold text-slate-700">3-100 Modal Disetor &amp; Saldo Laba Usaha</span>
                            <span class="font-mono tabular-nums font-bold text-slate-900">${fCur(modalDanLaba)}</span>
                        </div>
                        <div class="flex justify-between py-1.5 border-b border-slate-100 opacity-0 pointer-events-none">
                            <span>-</span><span>-</span>
                        </div>
                        <div class="flex justify-between py-2 border-t-2 border-slate-900 mt-2 bg-slate-50 px-2 rounded font-black text-slate-900">
                            <span class="uppercase tracking-wider">TOTAL KEWAJIBAN + EKUITAS</span>
                            <span class="font-mono tabular-nums text-sm">${fCur(totalKewajiban + modalDanLaba)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ─── BUNGKUS KE DALAM LEMBAR KERTAS A4 RESMI (.a4-page) ───
    const fullPageHtml = `
    <div class="a4-page" data-page="1" data-total-pages="1">
        <div class="a4-page-body flex-1 flex flex-col justify-between">
            <div>
                ${kopHtml}
                ${innerContentHtml}
            </div>
            ${signaturesHtml}
        </div>
        ${footerHtml}
    </div>
    `;

    setIn('doc-modal-title', 'Preview ' + title);
    setH('doc-paper-content', fullPageHtml);
    const badge = el('doc-page-count-badge');
    if (badge) badge.textContent = '1 Halaman A4';
    const mDoc = el('doc-preview-modal');
    if (mDoc && mDoc.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('docPreview');
    }
    show('doc-preview-modal');
    setTimeout(() => {
        if (el('doc-preview-modal')) el('doc-preview-modal').classList.remove('opacity-0');
        if (el('doc-preview-modal-box')) el('doc-preview-modal-box').classList.remove('scale-95');
        if (typeof window.fitDocPreview === 'function') window.fitDocPreview();
    }, 10);
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.fetchTaxPeriodData = fetchTaxPeriodData;
window.getTaxPeriodTotals = getTaxPeriodTotals;
window.getTaxPeriodExpenses = getTaxPeriodExpenses;
window.rTaxPanel = rTaxPanel;
window.rTaxRenderShell = rTaxRenderShell;
window.switchTaxTab = switchTaxTab;
window.changeTaxYear = changeTaxYear;
window.changeTaxMonth = changeTaxMonth;
window.rTaxSubContent = rTaxSubContent;
window.rTaxSummary = rTaxSummary;
window.rTaxIncome = rTaxIncome;
window.saveMonthlyExpense = saveMonthlyExpense;
window.rTaxBalance = rTaxBalance;
window.saveBalanceField = saveBalanceField;
window.rTaxSettingsPanel = rTaxSettingsPanel;
window.toggleCustomTaxRateInput = toggleCustomTaxRateInput;
window.saveTaxSettingsPanel = saveTaxSettingsPanel;
window.openTaxDocPreview = openTaxDocPreview;
window.MONTH_NAMES = MONTH_NAMES;

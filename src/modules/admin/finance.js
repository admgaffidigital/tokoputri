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
    el, show, setIn, setH, getV, esc, fCur, 
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
    const p = appData.products?.find(x => x.id === item.id);
    if (!p) return 0;
    if (item.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === item.variantName);
        if (v && v.hpp != null) return parseFloat(v.hpp) || 0;
    }
    return parseFloat(p.hpp) || 0;
};

/**
 * Tarik data transaksi pesanan per periode dari Firestore
 */
export const fetchTaxPeriodData = async (year) => {
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

    const monthRows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
        const d = gTaxMonthly ? gTaxMonthly[m] : { omset: 0, ppn: 0, orderCount: 0 };
        const isActiveRow = taxMonth === m;
        return `<tr class="${isActiveRow ? 'bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-700/30'} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${MONTH_NAMES[m - 1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${fCur(d.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${fCur(d.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${d.orderCount}</td>
        </tr>`;
    }).join('');

    setH('tax-content', `
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${periodLabel})</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-base sm:text-xl font-bold text-rose-500 truncate">${fCur(t.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(dpp)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <div class="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-xl pointer-events-none" style="background: rgba(var(--color-primary-rgb),0.15)"></div>
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-base sm:text-xl font-bold truncate" style="color:var(--color-primary)">${fCur(t.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">Wajib disetor ke negara</p>
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
    if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final UMKM (0,5% × Omset)'; }
    else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan (22% × Laba Bersih)'; }
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
                <input id="tax-company-name" type="text" value="${esc(ts.companyName || '')}" placeholder="Cth: PT/CV Restu Karya Utama" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${esc(ts.npwp || '')}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${ts.taxScheme === 'umkm_final' ? 'selected' : ''}>PPh Final UMKM — 0,5% dari Omset (PP 23/2018)</option>
                    <option value="badan_normal" ${ts.taxScheme === 'badan_normal' ? 'selected' : ''}>PPh Badan Normal — 22% dari Laba Bersih</option>
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
        appData.taxSettings.npwp = getV('tax-npwp');
        appData.taxSettings.taxScheme = getV('tax-scheme');
        appData.taxSettings.customTaxRate = parseFloat(getV('tax-custom-rate')) || 0.5;
        if (typeof window.saveApp === 'function') await window.saveApp(['taxSettings']);
        showToast('Pengaturan pajak tersimpan!');
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
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth - 1]} ${taxYear}`;
    const ts = appData.taxSettings || {};
    const today = new Date().toLocaleDateString('id-ID', {day: '2-digit', month: 'long', year: 'numeric'});

    let logoHTML = '';
    if (appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
    } else {
        logoHTML = `<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>`;
    }

    const titles = { summary: 'LAPORAN PPN & OMSET', income: 'LAPORAN LABA RUGI', balance: 'NERACA' };
    const title = titles[reportType] || 'LAPORAN';

    let headerHtml = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${esc(ts.companyName || appData.store.name)}</h1>
                ${ts.npwp ? `<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${esc(ts.npwp)}</p>` : ''}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store.address || '')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${title}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${periodLabel}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${today}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`;

    let bodyHtml = '';

    if (reportType === 'summary') {
        const t = getTaxPeriodTotals();
        const dpp = t.omset - t.disc;
        const rows = Array.from({length: 12}, (_, i) => i + 1).map(m => {
            const d = gTaxMonthly ? gTaxMonthly[m] : { omset: 0, ppn: 0, orderCount: 0 };
            return `<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${MONTH_NAMES[m - 1]} ${taxYear}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${fCur(d.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${fCur(d.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${d.orderCount}</td></tr>`;
        }).join('');
        bodyHtml = `
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${fCur(t.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${fCur(t.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${fCur(dpp)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${fCur(t.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${rows}</tbody></table>`;
    } else if (reportType === 'income') {
        const t = getTaxPeriodTotals();
        const labaKotor = t.omset - t.disc - t.hpp;
        const totalExpense = getTaxPeriodExpenses();
        const labaBersih = labaKotor - totalExpense;
        const scheme = ts.taxScheme || 'umkm_final';
        let taxRate, taxBase, taxLabel;
        if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final UMKM (0,5% × Omset)'; }
        else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan (22% × Laba Bersih)'; }
        else { taxRate = parseFloat(ts.customTaxRate) || 0; taxBase = Math.max(0, labaBersih); taxLabel = `PPh Custom (${taxRate}% × Laba Bersih)`; }
        const estimasiPajak = taxBase * (taxRate / 100);
        const labaSetelahPajak = labaBersih - estimasiPajak;
        const row = (label, val, bold, color) => `<div class="flex justify-between py-2 ${bold ? 'border-t-2 border-slate-800 mt-1 pt-3' : 'border-b border-slate-100'}"><span class="${bold ? 'font-bold text-slate-900' : 'font-bold text-slate-600'}">${label}</span><span class="font-bold ${color || 'text-slate-900'}">${val}</span></div>`;
        bodyHtml = `<div class="max-w-xl">
            ${row('Omset Bruto', fCur(t.omset))}
            ${row('(−) Diskon Produk', '-' + fCur(t.disc), false, 'text-rose-600')}
            ${row('(−) HPP', '-' + fCur(t.hpp), false, 'text-rose-600')}
            ${row('Laba Kotor', fCur(labaKotor), true, 'text-emerald-600')}
            ${row('(−) Biaya Operasional', '-' + fCur(totalExpense), false, 'text-rose-600')}
            ${row('Laba Bersih Sebelum Pajak', fCur(labaBersih), true)}
            ${row('(−) Estimasi ' + taxLabel, '-' + fCur(estimasiPajak), false, 'text-rose-600')}
            ${row('Laba Bersih Setelah Pajak (Estimasi)', fCur(labaSetelahPajak), true)}
        </div>`;
    } else if (reportType === 'balance') {
        const st = computeInventoryStats();
        const bs = ts.balanceSheet || { kas: 0, piutang: 0, hutang: 0 };
        const totalAset = (parseFloat(bs.kas) || 0) + (parseFloat(bs.piutang) || 0) + st.assetHpp;
        const totalKewajiban = parseFloat(bs.hutang) || 0;
        const modalDanLaba = totalAset - totalKewajiban;
        bodyHtml = `
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${fCur(bs.kas || 0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${fCur(bs.piutang || 0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${fCur(st.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${fCur(totalAset)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${fCur(totalKewajiban)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${fCur(modalDanLaba)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${fCur(totalKewajiban + modalDanLaba)}</span></div>
            </div>
        </div>`;
    }

    setIn('doc-modal-title', 'Preview ' + title);
    setH('doc-paper-content', headerHtml + bodyHtml);
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

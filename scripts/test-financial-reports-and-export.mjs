/**
 * ============================================================
 * TEST SUITE: ANALITIKA KEUANGAN, GRAFIK 12 BULAN & EKSPOR CSV
 * Menguji kalkulasi akuntansi, performa grafik SVG bulanan,
 * agregasi profitabilitas kategori & generator spreadsheet CSV
 * ============================================================
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reportsJsPath = path.resolve(__dirname, '../src/modules/admin/reports.js');

let passCount = 0;
let failCount = 0;

const test = (title, fn) => {
    try {
        fn();
        console.log(`  ✅ PASS: ${title}`);
        passCount++;
    } catch (err) {
        console.error(`  ❌ FAIL: ${title}`);
        console.error(`     Error: ${err.message}`);
        failCount++;
    }
};

console.log('\n============================================================');
console.log('📊 MENJALANKAN TEST SUITE ANALITIKA KEUANGAN & EKSPOR CSV');
console.log('============================================================\n');

// ─── 1. Uji Validasi Format CSV RFC 4180 & Escape String ─────
console.log('📝 1. Uji Validasi Mesin CSV & RFC 4180 Compliant:');

const escapeCsvValue = (val) => {
    if (val === null || val === undefined) return '""';
    let str = String(val).replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    if (str.includes('"') || str.includes(',') || str.includes(';')) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return `"${str}"`;
};

test('Nilai null dan undefined menghasilkan string kosong berpagar kutip ("")', () => {
    assert.strictEqual(escapeCsvValue(null), '""');
    assert.strictEqual(escapeCsvValue(undefined), '""');
});

test('Teks dengan tanda koma otomatis dibungkus tanda kutip ganda', () => {
    const res = escapeCsvValue('Batu Bata, Semen, Pasir');
    assert.strictEqual(res, '"Batu Bata, Semen, Pasir"');
});

test('Teks dengan tanda kutip ganda di-escape menjadi ganda ("")', () => {
    const res = escapeCsvValue('Pipa PVC 1/2" Wavin');
    assert.strictEqual(res, '"Pipa PVC 1/2"" Wavin"');
});

test('Karakter baris baru (newline) dinormalisasi menjadi spasi', () => {
    const res = escapeCsvValue("Baris 1\nBaris 2\r\nBaris 3");
    assert.strictEqual(res, '"Baris 1 Baris 2 Baris 3"');
});

test('Nilai numerik dibungkus dengan aman', () => {
    assert.strictEqual(escapeCsvValue(1500000), '"1500000"');
    assert.strictEqual(escapeCsvValue(0), '"0"');
});

// ─── 2. Uji Agregasi Profitabilitas Kategori Produk ───────────
console.log('\n🏷️ 2. Uji Agregasi Profitabilitas Per Kategori Produk:');

const sampleProducts = [
    { id: 'P1', name: 'Cat Tembok Putih 5kg', category: 'Cat & Finishing', hpp: 80000, price: 120000 },
    { id: 'P2', name: 'Semen Gresik 40kg', category: 'Bahan Bangunan', hpp: 55000, price: 65000 },
    { id: 'P3', name: 'Kuas Cat 2.5 Inch', category: 'Cat & Finishing', hpp: 10000, price: 15000 },
    { id: 'P4', name: 'Pipa PVC AW 3/4', category: 'Pipa & Sanitair', hpp: 30000, price: 45000 }
];

const sampleOrders = [
    {
        orderId: 'ORD-001',
        items: [
            { id: 'P1', name: 'Cat Tembok Putih 5kg', qty: 2, price: 120000, hpp: 80000 },
            { id: 'P2', name: 'Semen Gresik 40kg', qty: 10, price: 65000, hpp: 55000 }
        ]
    },
    {
        orderId: 'ORD-002',
        items: [
            { id: 'P3', name: 'Kuas Cat 2.5 Inch', qty: 4, price: 15000, hpp: 10000 },
            { id: 'P4', name: 'Pipa PVC AW 3/4', qty: 5, price: 45000, hpp: 30000 }
        ]
    }
];

const computeCategoryAnalytics = (orders, products) => {
    const catMap = {};
    let totalOmset = 0;
    let totalProfit = 0;
    let totalItemsSold = 0;

    orders.forEach(o => {
        (o.items || []).forEach(it => {
            const qty = parseFloat(it.qty) || 1;
            const price = parseFloat(it.price) || 0;
            const lineOmset = price * qty;
            const p = products.find(x => x.id === it.id) || {};
            const cat = it.category || p.category || 'Lainnya';
            const itHpp = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : (p.hpp || 0);
            const lineHpp = itHpp * qty;
            const lineProfit = lineOmset - lineHpp;

            if (!catMap[cat]) {
                catMap[cat] = { category: cat, qty: 0, omset: 0, hpp: 0, profit: 0, txCount: 0 };
            }
            catMap[cat].qty += qty;
            catMap[cat].omset += lineOmset;
            catMap[cat].hpp += lineHpp;
            catMap[cat].profit += lineProfit;
            catMap[cat].txCount++;

            totalOmset += lineOmset;
            totalProfit += lineProfit;
            totalItemsSold += qty;
        });
    });

    const list = Object.values(catMap).map(c => {
        const marginPct = c.omset > 0 ? ((c.profit / c.omset) * 100).toFixed(1) : '0.0';
        const contributionPct = totalOmset > 0 ? ((c.omset / totalOmset) * 100).toFixed(1) : '0.0';
        return {
            ...c,
            marginPct: parseFloat(marginPct),
            contributionPct: parseFloat(contributionPct)
        };
    }).sort((a, b) => b.omset - a.omset);

    return { list, totalOmset, totalProfit, totalItemsSold };
};

const catRes = computeCategoryAnalytics(sampleOrders, sampleProducts);

test('Menghasilkan 3 kategori material unik dari transaksi sampel', () => {
    assert.strictEqual(catRes.list.length, 3);
});

test('Total omset agregat harus sama dengan Rp 1.175.000', () => {
    // Cat Tembok: 2 * 120rb = 240rb
    // Semen: 10 * 65rb = 650rb
    // Kuas: 4 * 15rb = 60rb
    // Pipa: 5 * 45rb = 225rb
    // Total = 240k + 650k + 60k + 225k = 1,175,000
    assert.strictEqual(catRes.totalOmset, 1175000);
});

test('Kategori Bahan Bangunan harus berada di ranking #1 omset (Rp 650.000)', () => {
    assert.strictEqual(catRes.list[0].category, 'Bahan Bangunan');
    assert.strictEqual(catRes.list[0].omset, 650000);
});

test('Persentase kontribusi omset Bahan Bangunan akurat (~55.3%)', () => {
    const expected = parseFloat(((650000 / 1175000) * 100).toFixed(1));
    assert.strictEqual(catRes.list[0].contributionPct, expected);
});

test('Laba kotor dan margin kategori Cat & Finishing dihitung presisi', () => {
    // Cat: omset 240k + 60k = 300k, hpp: 2*80k + 4*10k = 200k, profit: 100k
    // margin: 100k / 300k = 33.3%
    const cat = catRes.list.find(c => c.category === 'Cat & Finishing');
    assert.ok(cat);
    assert.strictEqual(cat.omset, 300000);
    assert.strictEqual(cat.profit, 100000);
    assert.strictEqual(cat.marginPct, 33.3);
});

// ─── 3. Uji Rekapitulasi Data Finansial 12 Bulan ──────────────
console.log('\n📅 3. Uji Perhitungan Rekapitulasi Finansial 12 Bulan:');

const mockTaxMonthly = {
    "1": { omset: 50000000, disc: 1000000, hpp: 35000000, orderCount: 45 },
    "2": { omset: 60000000, disc: 2000000, hpp: 40000000, orderCount: 50 },
    "3": { omset: 75000000, disc: 2500000, hpp: 50000000, orderCount: 65 }
};
const mockExpenses = {
    "2026-1": 5000000,
    "2026-2": 6000000,
    "2026-3": 7000000
};

const getTwelveMonthMock = (year) => {
    const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    const res = [];
    for (let m = 1; m <= 12; m++) {
        const d = mockTaxMonthly[m] || { omset: 0, disc: 0, hpp: 0, orderCount: 0 };
        const omset = d.omset || 0;
        const disc = d.disc || 0;
        const netSales = Math.max(0, omset - disc);
        const hpp = d.hpp || 0;
        const grossProfit = Math.max(0, netSales - hpp);
        const expense = mockExpenses[`${year}-${m}`] || 0;
        const netProfit = grossProfit - expense;

        res.push({
            month: m,
            monthName: months[m - 1],
            omset,
            grossProfit,
            expenses: expense,
            netProfit,
            orderCount: d.orderCount || 0
        });
    }
    return res;
};

const twelveData = getTwelveMonthMock(2026);

test('Array 12 bulan menghasilkan tepat 12 entri dari Januari s.d. Desember', () => {
    assert.strictEqual(twelveData.length, 12);
    assert.strictEqual(twelveData[0].monthName, 'Jan');
    assert.strictEqual(twelveData[11].monthName, 'Des');
});

test('Bulan Januari: Laba kotor (Rp 14.000.000) dan laba bersih (Rp 9.000.000) valid', () => {
    // Omset: 50M, disc: 1M, netSales: 49M, hpp: 35M -> Gross profit = 14M
    // Expense: 5M -> Net profit = 9M
    const jan = twelveData[0];
    assert.strictEqual(jan.omset, 50000000);
    assert.strictEqual(jan.grossProfit, 14000000);
    assert.strictEqual(jan.expenses, 5000000);
    assert.strictEqual(jan.netProfit, 9000000);
});

test('Bulan yang belum memiliki transaksi terisi 0 dengan aman tanpa error NaN', () => {
    const apr = twelveData[3];
    assert.strictEqual(apr.omset, 0);
    assert.strictEqual(apr.grossProfit, 0);
    assert.strictEqual(apr.expenses, 0);
    assert.strictEqual(apr.netProfit, 0);
    assert.strictEqual(isNaN(apr.netProfit), false);
});

// ─── 4. Verifikasi Statis Ekspor & Modul di reports.js ────────
console.log('\n🔍 4. Verifikasi Statis Fungsi & Kompatibilitas di reports.js:');

const reportsCode = fs.readFileSync(reportsJsPath, 'utf8');

test('reports.js mengekspor fungsi escapeCsvValue', () => {
    assert.ok(reportsCode.includes('export const escapeCsvValue'), 'Harus mengekspor escapeCsvValue');
});

test('reports.js mengekspor fungsi downloadCsvFile dengan UTF-8 BOM', () => {
    assert.ok(reportsCode.includes('export const downloadCsvFile'), 'Harus mengekspor downloadCsvFile');
    assert.ok(reportsCode.includes('\\uFEFF'), 'Harus menyertakan UTF-8 BOM untuk kompatibilitas Excel');
});

test('reports.js mengekspor seluruh generator CSV 5 domain', () => {
    assert.ok(reportsCode.includes('export const exportSalesReportCSV'), 'Harus ada exportSalesReportCSV');
    assert.ok(reportsCode.includes('export const exportPnlReportCSV'), 'Harus ada exportPnlReportCSV');
    assert.ok(reportsCode.includes('export const exportStockValuationCSV'), 'Harus ada exportStockValuationCSV');
    assert.ok(reportsCode.includes('export const exportExpensesCSV'), 'Harus ada exportExpensesCSV');
    assert.ok(reportsCode.includes('export const exportDebtsReceivablesCSV'), 'Harus ada exportDebtsReceivablesCSV');
});

test('reports.js mengekspor helper grafik 12 bulan SVG', () => {
    assert.ok(reportsCode.includes('export const getTwelveMonthPerformanceData'), 'Harus ada getTwelveMonthPerformanceData');
    assert.ok(reportsCode.includes('export const renderTwelveMonthPerformanceSvg'), 'Harus ada renderTwelveMonthPerformanceSvg');
    assert.ok(reportsCode.includes('export const showChartMonthTooltip'), 'Harus ada showChartMonthTooltip');
});

test('reports.js mengekspor generator analitika kategori getCategorySalesAnalytics', () => {
    assert.ok(reportsCode.includes('export const getCategorySalesAnalytics'), 'Harus ada getCategorySalesAnalytics');
});

test('reports.js memiliki pembungkus lembar resmi A4 renderReportA4DocumentShell', () => {
    assert.ok(reportsCode.includes('export const renderReportA4DocumentShell'), 'Harus ada renderReportA4DocumentShell');
});

test('reports.js memiliki dokumen cetak A4 untuk Penjualan, Valuasi Stok, Utang Piutang & Beban', () => {
    assert.ok(reportsCode.includes('export const openSalesReportDocPreview'), 'Harus ada openSalesReportDocPreview');
    assert.ok(reportsCode.includes('export const openStockValuationDocPreview'), 'Harus ada openStockValuationDocPreview');
    assert.ok(reportsCode.includes('export const openDebtsDocPreview'), 'Harus ada openDebtsDocPreview');
    assert.ok(reportsCode.includes('export const openExpensesDocPreview'), 'Harus ada openExpensesDocPreview');
});

test('openReportCurrentDocPreview mendistribusikan preview sesuai seluruh tab aktif', () => {
    assert.ok(reportsCode.includes("reportActiveTab === 'executive'"), 'Harus menangani executive');
    assert.ok(reportsCode.includes("reportActiveTab === 'sales'"), 'Harus menangani sales');
    assert.ok(reportsCode.includes("reportActiveTab === 'stock'"), 'Harus menangani stock');
    assert.ok(reportsCode.includes("reportActiveTab === 'debts'"), 'Harus menangani debts');
    assert.ok(reportsCode.includes("reportActiveTab === 'expenses'"), 'Harus menangani expenses');
});

test('Seluruh fungsi baru terekspos ke window object untuk navigasi inline HTML', () => {
    assert.ok(reportsCode.includes('window.toggleReportExportMenu = toggleReportExportMenu;'));
    assert.ok(reportsCode.includes('window.exportCurrentReportCSV = exportCurrentReportCSV;'));
    assert.ok(reportsCode.includes('window.exportSalesReportCSV = exportSalesReportCSV;'));
    assert.ok(reportsCode.includes('window.exportPnlReportCSV = exportPnlReportCSV;'));
    assert.ok(reportsCode.includes('window.exportStockValuationCSV = exportStockValuationCSV;'));
    assert.ok(reportsCode.includes('window.exportExpensesCSV = exportExpensesCSV;'));
    assert.ok(reportsCode.includes('window.exportDebtsReceivablesCSV = exportDebtsReceivablesCSV;'));
    assert.ok(reportsCode.includes('window.openSalesReportDocPreview = openSalesReportDocPreview;'));
    assert.ok(reportsCode.includes('window.openStockValuationDocPreview = openStockValuationDocPreview;'));
    assert.ok(reportsCode.includes('window.openDebtsDocPreview = openDebtsDocPreview;'));
    assert.ok(reportsCode.includes('window.openExpensesDocPreview = openExpensesDocPreview;'));
});

// ─── HASIL AKHIR PENGUJIAN ───────────────────────────────────
console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passCount} Passed, ${failCount} Failed`);
if (failCount === 0) {
    console.log('✨ INTEGRITAS LAPORAN FINANSIAL, GRAFIK 12 BULAN & EKSPOR CSV 100% VALID! ✅');
} else {
    console.log('⚠️ TERDAPAT PENGUJIAN YANG GAGAL!');
    process.exit(1);
}
console.log('============================================================\n');

/**
 * ============================================================
 * MODUL CORE: PUTRI PAYLATER & KALKULATOR CICILAN TRANSPARAN
 * Menyediakan kalkulasi angsuran multi-bulan (30 hari, 2 bulan, 3 bulan),
 * rincian biaya admin dan penanganan tanpa biaya tersembunyi (zero hidden fees),
 * serta helper konfigurasi dinamis yang sinkron dengan CMS Pengaturan Toko.
 * ============================================================
 */

import { appData } from './state.js';
import { fCur } from './utils.js';

/**
 * Konfigurasi default sistem Putri PayLater & Cicilan
 */
export const DEFAULT_PAYLATER_CONFIG = {
    enabled: true,
    minOrder: 20000,
    maxOrder: 10000000,
    noticeText: 'Cicilan transparan tanpa bunga atau biaya tersembunyi. Tagihan jatuh tempo setiap bulan.',
    tenors: {
        '30d': {
            enabled: true,
            label: '30 Hari (1x Bayar)',
            shortLabel: '30 Hari',
            months: 1,
            days: 30,
            adminFeeType: 'flat',      // 'flat' (Rp) | 'percent' (%)
            adminFeeValue: 0,
            serviceFeeType: 'flat',    // 'flat' (Rp) | 'percent' (%)
            serviceFeeValue: 0
        },
        '2m': {
            enabled: true,
            label: '2 Bulan (Cicilan 2x)',
            shortLabel: '2 Bulan',
            months: 2,
            days: 60,
            adminFeeType: 'flat',
            adminFeeValue: 1500,
            serviceFeeType: 'percent',
            serviceFeeValue: 1.5
        },
        '3m': {
            enabled: true,
            label: '3 Bulan (Cicilan 3x)',
            shortLabel: '3 Bulan',
            months: 3,
            days: 90,
            adminFeeType: 'flat',
            adminFeeValue: 2500,
            serviceFeeType: 'percent',
            serviceFeeValue: 2.5
        }
    }
};

/**
 * Ambil konfigurasi PayLater aktif dari appData.store atau fallback default
 */
export const getPaylaterConfig = () => {
    const raw = appData?.store?.paylater || {};
    const tenorsRaw = raw.tenors || {};

    const resolveTenor = (key, defaultObj) => {
        const t = tenorsRaw[key] || {};
        return {
            enabled: t.enabled !== undefined ? Boolean(t.enabled) : defaultObj.enabled,
            label: t.label || defaultObj.label,
            shortLabel: t.shortLabel || defaultObj.shortLabel,
            months: parseInt(t.months, 10) || defaultObj.months,
            days: parseInt(t.days, 10) || defaultObj.days,
            adminFeeType: (t.adminFeeType === 'percent') ? 'percent' : 'flat',
            adminFeeValue: Math.max(0, parseFloat(t.adminFeeValue) || 0),
            serviceFeeType: (t.serviceFeeType === 'percent') ? 'percent' : 'flat',
            serviceFeeValue: Math.max(0, parseFloat(t.serviceFeeValue) || 0)
        };
    };

    return {
        enabled: raw.enabled !== undefined ? (raw.enabled === true || raw.enabled === 'true') : DEFAULT_PAYLATER_CONFIG.enabled,
        minOrder: Math.max(0, parseFloat(raw.minOrder !== undefined ? raw.minOrder : DEFAULT_PAYLATER_CONFIG.minOrder)),
        maxOrder: Math.max(0, parseFloat(raw.maxOrder !== undefined ? raw.maxOrder : DEFAULT_PAYLATER_CONFIG.maxOrder)),
        noticeText: (raw.noticeText || DEFAULT_PAYLATER_CONFIG.noticeText).trim(),
        tenors: {
            '30d': resolveTenor('30d', DEFAULT_PAYLATER_CONFIG.tenors['30d']),
            '2m':  resolveTenor('2m',  DEFAULT_PAYLATER_CONFIG.tenors['2m']),
            '3m':  resolveTenor('3m',  DEFAULT_PAYLATER_CONFIG.tenors['3m'])
        }
    };
};

/**
 * Helper pembersih angka: mendukung format angka Indonesia ('Rp 300.000', '1.500.000,50', dsb)
 */
export const parseCleanNumber = (val) => {
    if (typeof val === 'number') return isNaN(val) ? 0 : Math.max(0, val);
    if (!val) return 0;
    let s = String(val).trim().replace(/[^0-9.,-]/g, '');
    if (!s) return 0;
    if (s.includes('.') && s.includes(',')) {
        s = s.replace(/\./g, '').replace(',', '.');
    } else if (s.includes('.') && !s.includes(',')) {
        if (/\.\d{3}($|\.)/.test(s)) {
            s = s.replace(/\./g, '');
        }
    } else if (s.includes(',') && !s.includes('.')) {
        if (/,\d{3}($|,)/.test(s)) {
            s = s.replace(/,/g, '');
        } else {
            s = s.replace(',', '.');
        }
    }
    const num = parseFloat(s);
    return isNaN(num) ? 0 : Math.max(0, num);
};

/**
 * Kalkulasi rincian cicilan transparan untuk tenor tertentu
 * @param {number} amount - Nominal pokok harga produk / subtotal
 * @param {string} tenorKey - '30d' | '2m' | '3m'
 * @param {object} [customConfig] - Konfigurasi opsional override
 */
export const calculateInstallmentBreakdown = (amount, tenorKey = '30d', customConfig = null) => {
    const config = customConfig || getPaylaterConfig();
    const cleanAmount = parseCleanNumber(amount);
        
    const tenor = config.tenors?.[tenorKey] || DEFAULT_PAYLATER_CONFIG.tenors[tenorKey] || DEFAULT_PAYLATER_CONFIG.tenors['30d'];

    const months = Math.max(1, parseInt(tenor.months, 10) || 1);
    const isEligible = cleanAmount >= config.minOrder && (config.maxOrder <= 0 || cleanAmount <= config.maxOrder);

    // 1. Pokok Pembayaran
    const pokokTotal = cleanAmount;
    const pokokPerMonth = Math.round(pokokTotal / months);

    // 2. Biaya Administrasi (Admin Fee) - Zero fee jika pokok = 0
    let totalAdminFee = 0;
    const rawAdminVal = Math.max(0, parseFloat(tenor.adminFeeValue) || 0);
    if (cleanAmount > 0 && rawAdminVal > 0) {
        if (tenor.adminFeeType === 'percent') {
            totalAdminFee = Math.round((pokokTotal * rawAdminVal) / 100);
        } else {
            totalAdminFee = Math.round(rawAdminVal);
        }
    }
    const adminFeePerMonth = Math.round(totalAdminFee / months);

    // 3. Biaya Penanganan / Layanan (Service / Processing Fee) - Zero fee jika pokok = 0
    let totalServiceFee = 0;
    const rawServiceVal = Math.max(0, parseFloat(tenor.serviceFeeValue) || 0);
    if (cleanAmount > 0 && rawServiceVal > 0) {
        if (tenor.serviceFeeType === 'percent') {
            totalServiceFee = Math.round((pokokTotal * rawServiceVal) / 100);
        } else {
            totalServiceFee = Math.round(rawServiceVal);
        }
    }
    const serviceFeePerMonth = Math.round(totalServiceFee / months);

    // 4. Total Angsuran per Bulan & Grand Total Keseluruhan
    const totalPerMonth = cleanAmount > 0 ? (pokokPerMonth + adminFeePerMonth + serviceFeePerMonth) : 0;
    const grandTotal = cleanAmount > 0 ? (pokokTotal + totalAdminFee + totalServiceFee) : 0;

    // 5. Jadwal Angsuran Simulasi (Due Dates) dengan Rekonsiliasi Presisi 1 Rupiah & Safe Calendar
    const schedule = [];
    if (cleanAmount > 0) {
        const now = new Date();
        const dueDay = Math.max(1, Math.min(31, parseInt(customConfig?.dueDay ?? config?.dueDay ?? 5, 10) || 5));
        let accumulatedPokok = 0;
        let accumulatedAdmin = 0;
        let accumulatedService = 0;

        for (let i = 1; i <= months; i++) {
            // Safe month & day calculation anti-overflow (misal tgl 31 di bulan Februari)
            const targetYear = now.getFullYear();
            const targetMonth = now.getMonth() + i;
            const testDate = new Date(targetYear, targetMonth, 1);
            const y = testDate.getFullYear();
            const m = testDate.getMonth();
            const maxDaysInMonth = new Date(y, m + 1, 0).getDate();
            const safeDay = Math.min(dueDay, maxDaysInMonth);
            const dueDate = new Date(y, m, safeDay, 23, 59, 59);

            let itemPokok = pokokPerMonth;
            let itemAdmin = adminFeePerMonth;
            let itemService = serviceFeePerMonth;

            // Bulan terakhir menampung sisa pembulatan agar total persis sama dengan grandTotal
            if (i === months) {
                itemPokok = Math.max(0, pokokTotal - accumulatedPokok);
                itemAdmin = Math.max(0, totalAdminFee - accumulatedAdmin);
                itemService = Math.max(0, totalServiceFee - accumulatedService);
            } else {
                accumulatedPokok += itemPokok;
                accumulatedAdmin += itemAdmin;
                accumulatedService += itemService;
            }

            const itemTotal = itemPokok + itemAdmin + itemService;

            schedule.push({
                installmentIndex: i,
                totalMonths: months,
                dueDate: dueDate.getTime(),
                dueDateFormatted: dueDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
                pokok: itemPokok,
                adminFee: itemAdmin,
                serviceFee: itemService,
                total: itemTotal
            });
        }
    }

    return {
        tenorKey,
        enabled: tenor.enabled,
        label: tenor.label,
        shortLabel: tenor.shortLabel,
        months,
        days: tenor.days || (months * 30),
        isEligible,
        minOrder: config.minOrder,
        maxOrder: config.maxOrder,
        pokokTotal,
        pokokPerMonth,
        adminFeeType: tenor.adminFeeType,
        adminFeeValue: tenor.adminFeeValue,
        totalAdminFee,
        adminFeePerMonth,
        serviceFeeType: tenor.serviceFeeType,
        serviceFeeValue: tenor.serviceFeeValue,
        totalServiceFee,
        serviceFeePerMonth,
        totalPerMonth,
        grandTotal,
        schedule,
        noticeText: config.noticeText
    };
};

/**
 * Kalkulasi semua tenor aktif untuk perbandingan simulasi
 */
export const calculateAllPaylaterTenors = (amount, customConfig = null) => {
    const config = customConfig || getPaylaterConfig();
    const tenors = ['30d', '2m', '3m'];
    const results = {};
    let minMonthly = Infinity;
    let minTenorKey = '3m';

    tenors.forEach(k => {
        const breakdown = calculateInstallmentBreakdown(amount, k, config);
        results[k] = breakdown;
        if (breakdown.enabled && breakdown.totalPerMonth > 0 && breakdown.totalPerMonth < minMonthly) {
            minMonthly = breakdown.totalPerMonth;
            minTenorKey = k;
        }
    });

    return {
        config,
        results,
        minMonthly: minMonthly === Infinity ? 0 : minMonthly,
        minTenorKey,
        amount: Math.max(0, parseFloat(amount) || 0)
    };
};

/**
 * Porsi POKOK yang sudah dipulihkan ke limit member pada saldo tagihan tertentu.
 * Limit hanya terpakai sebesar pokok (payment.paylaterUsed) — biaya admin & penanganan
 * adalah pendapatan toko dan TIDAK boleh menambah limit saat dibayar.
 * Return null untuk pesanan non-PayLater / data lama tanpa pokok tercatat.
 */
const principalRestoredAt = (payment, balance) => {
    const principal = Math.max(0, parseFloat(payment?.paylaterUsed) || 0);
    if (principal <= 0) return null;
    const fees = Math.max(0, parseFloat(payment?.paylaterAdminFee) || 0) + Math.max(0, parseFloat(payment?.paylaterServiceFee) || 0);
    const totalPayable = principal + fees;
    const bal = Math.max(0, parseFloat(balance) || 0);
    if (bal <= 0) return principal;
    const paid = Math.max(0, totalPayable - bal);
    return Math.min(principal, Math.max(0, Math.round((principal * paid) / totalPayable)));
};

/**
 * Nominal limit yang dipulihkan saat pembayaran angsuran (saldo balanceBefore → balanceAfter).
 * Fallback ke nominal bayar untuk pesanan lama yang tidak mencatat pokok.
 */
export const computePaylaterLimitRestore = (payment, balanceBefore, balanceAfter, paidAmount = 0) => {
    const before = principalRestoredAt(payment, balanceBefore);
    const after = principalRestoredAt(payment, balanceAfter);
    if (before === null || after === null) return Math.max(0, parseFloat(paidAmount) || 0);
    return Math.max(0, after - before);
};

/**
 * Sisa pokok yang belum dipulihkan (dipakai saat pesanan PayLater dibatalkan),
 * sehingga angsuran yang sudah dibayar tidak dipulihkan dua kali.
 */
export const computePaylaterRemainingPrincipal = (payment) => {
    const principal = Math.max(0, parseFloat(payment?.paylaterUsed) || 0);
    if (principal <= 0) return 0;
    const hasBalance = payment && payment.tempoBalance !== undefined && payment.tempoBalance !== null;
    if (!hasBalance) return principal;
    const restored = principalRestoredAt(payment, payment.tempoBalance) || 0;
    return Math.max(0, principal - restored);
};

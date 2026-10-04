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
 * Kalkulasi rincian cicilan transparan untuk tenor tertentu
 * @param {number} amount - Nominal pokok harga produk / subtotal
 * @param {string} tenorKey - '30d' | '2m' | '3m'
 * @param {object} [customConfig] - Konfigurasi opsional override
 */
export const calculateInstallmentBreakdown = (amount, tenorKey = '30d', customConfig = null) => {
    const config = customConfig || getPaylaterConfig();
    const cleanAmount = Math.max(0, parseFloat(amount) || 0);
    const tenor = config.tenors?.[tenorKey] || DEFAULT_PAYLATER_CONFIG.tenors[tenorKey] || DEFAULT_PAYLATER_CONFIG.tenors['30d'];

    const months = Math.max(1, parseInt(tenor.months, 10) || 1);
    const isEligible = cleanAmount >= config.minOrder && (config.maxOrder <= 0 || cleanAmount <= config.maxOrder);

    // 1. Pokok Pembayaran
    const pokokTotal = cleanAmount;
    const pokokPerMonth = Math.round(pokokTotal / months);

    // 2. Biaya Administrasi (Admin Fee)
    let totalAdminFee = 0;
    if (tenor.adminFeeType === 'percent') {
        totalAdminFee = Math.round((pokokTotal * tenor.adminFeeValue) / 100);
    } else {
        totalAdminFee = Math.round(tenor.adminFeeValue);
    }
    const adminFeePerMonth = Math.round(totalAdminFee / months);

    // 3. Biaya Penanganan / Layanan (Service / Processing Fee)
    let totalServiceFee = 0;
    if (tenor.serviceFeeType === 'percent') {
        totalServiceFee = Math.round((pokokTotal * tenor.serviceFeeValue) / 100);
    } else {
        totalServiceFee = Math.round(tenor.serviceFeeValue);
    }
    const serviceFeePerMonth = Math.round(totalServiceFee / months);

    // 4. Total Angsuran per Bulan & Grand Total Keseluruhan
    const totalPerMonth = pokokPerMonth + adminFeePerMonth + serviceFeePerMonth;
    const grandTotal = pokokTotal + totalAdminFee + totalServiceFee;

    // 5. Jadwal Angsuran Simulasi (Due Dates)
    const schedule = [];
    const now = new Date();
    for (let i = 1; i <= months; i++) {
        const dueDate = new Date(now.getFullYear(), now.getMonth() + i, 5); // Tgl 5 tiap bulan
        schedule.push({
            installmentIndex: i,
            totalMonths: months,
            dueDate: dueDate.getTime(),
            dueDateFormatted: dueDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
            pokok: pokokPerMonth,
            adminFee: adminFeePerMonth,
            serviceFee: serviceFeePerMonth,
            total: totalPerMonth
        });
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

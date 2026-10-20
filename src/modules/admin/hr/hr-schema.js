/**
 * ============================================================
 * MODUL HRD & PAYROLL: SKEMA MASTER KARYAWAN & STRUKTUR GAJI
 * Toko Putri - Human Resource & Compensation Architecture
 * Mengatur standarisasi data karyawan (Owner, Admin, Kasir, Staff),
 * nomor ID karyawan, jabatan resmi, komponen gaji & tunjangan.
 * ============================================================
 */

import { ROLES, STANDARD_POSITIONS } from '../../../core/auth-roles.js';

// ─── Status Kepegawaian ──────────────────────────────────────
export const EMPLOYMENT_STATUSES = [
    { key: 'permanent', label: 'Karyawan Tetap', badgeColor: 'emerald' },
    { key: 'contract', label: 'Kontrak (PKWT)', badgeColor: 'blue' },
    { key: 'probation', label: 'Masa Percobaan (3 Bulan)', badgeColor: 'amber' },
    { key: 'daily', label: 'Staf Harian Lepas', badgeColor: 'purple' }
];

// ─── Pilihan Rekening Pembayaran Gaji ─────────────────────────
export const SALARY_PAYMENT_METHODS = [
    { key: 'bca', label: 'BCA (Bank Central Asia)' },
    { key: 'bri', label: 'BRI (Bank Rakyat Indonesia)' },
    { key: 'mandiri', label: 'Bank Mandiri' },
    { key: 'bni', label: 'BNI (Bank Negara Indonesia)' },
    { key: 'bsi', label: 'BSI (Bank Syariah Indonesia)' },
    { key: 'jatim', label: 'Bank Jatim' },
    { key: 'cash', label: 'Tunai Kas Laci Toko (Cash)' },
    { key: 'other', label: 'Bank Lainnya / E-Wallet' }
];

/**
 * Generator Otomatis ID Karyawan Unik (Contoh: EMP-001, EMP-002)
 * @param {Array} existingList Daftar karyawan atau akun staf yang ada
 * @param {string} prefix Awalan ID ('EMP' atau 'OWN')
 * @returns {string} ID Karyawan unik terformat
 */
export const generateEmployeeId = (existingList = [], prefix = 'EMP') => {
    if (!Array.isArray(existingList) || existingList.length === 0) {
        return `${prefix}-001`;
    }
    
    let maxNum = 0;
    const regex = new RegExp(`^${prefix}-(\\d+)`, 'i');
    
    existingList.forEach(item => {
        const idStr = String(item?.employeeId || item?.nik || '').trim();
        const match = idStr.match(regex);
        if (match && match[1]) {
            const num = parseInt(match[1], 10);
            if (!isNaN(num) && num > maxNum) {
                maxNum = num;
            }
        }
    });

    const nextNum = maxNum + 1;
    return `${prefix}-${String(nextNum).padStart(3, '0')}`;
};

/**
 * Dapatkan atau Inisialisasi Profil Karyawan untuk Akun Owner
 * @param {Object} appData State global toko
 * @returns {Object} Profil resmi Owner sebagai penerima gaji
 */
export const getOwnerEmployeeProfile = (appData) => {
    if (appData && appData.ownerEmployee && typeof appData.ownerEmployee === 'object') {
        return {
            employeeId: 'OWN-001',
            role: ROLES.OWNER,
            position: 'Owner / Direktur Utama',
            baseSalary: 10000000,
            dailyAllowance: 0,
            employmentStatus: 'permanent',
            bankName: 'BCA / Rekening Toko',
            bankAccount: '-',
            bankHolder: 'Pemilik Toko',
            isActive: true,
            ...appData.ownerEmployee
        };
    }

    return {
        employeeId: 'OWN-001',
        name: appData?.store?.name ? `Pemilik ${appData.store.name}` : 'Pemilik Toko',
        email: appData?.subscription?.clientEmail || 'owner@tokoputri.com',
        phone: appData?.store?.wa || '',
        role: ROLES.OWNER,
        position: 'Owner / Direktur Utama',
        baseSalary: 10000000,
        dailyAllowance: 0,
        employmentStatus: 'permanent',
        bankName: 'BCA / Rekening Toko',
        bankAccount: '-',
        bankHolder: 'Pemilik Toko',
        hireDate: '2024-01-01',
        isActive: true,
        notes: 'Gaji resmi direksi / pemilik toko terpisah dari laba usaha toko.'
    };
};

/**
 * Normalisasi data profil HR karyawan
 * @param {Object} raw Data mentah
 * @param {number} index Indeks urutan untuk auto-generate ID jika kosong
 * @returns {Object} Profil HR terstruktur
 */
export const normalizeEmployeeProfile = (raw = {}, index = 0) => {
    const isOwner = raw.role === ROLES.OWNER || raw.role === 'owner';
    const fallbackPrefix = isOwner ? 'OWN' : 'EMP';
    const employeeId = (raw.employeeId || raw.nik || `${fallbackPrefix}-${String(index + 1).padStart(3, '0')}`).trim();
    
    // Tentukan label jabatan standar
    let position = raw.position || '';
    if (!position) {
        if (isOwner) position = 'Owner / Direktur Utama';
        else if (raw.role === ROLES.ADMIN) position = 'Admin Operasional Toko';
        else if (raw.role === ROLES.CASHIER) position = 'Kasir POS';
        else position = 'Staf Operasional / Gudang';
    }

    return {
        uid: raw.uid || raw.id || `emp_${Date.now()}_${index}`,
        employeeId,
        name: String(raw.name || 'Karyawan').trim(),
        email: String(raw.email || '').trim(),
        phone: String(raw.phone || '').trim(),
        role: raw.role || ROLES.CASHIER,
        position,
        employmentStatus: raw.employmentStatus || 'permanent',
        hireDate: raw.hireDate || new Date().toISOString().split('T')[0],
        baseSalary: Math.max(0, parseFloat(raw.baseSalary) || 0),
        dailyAllowance: Math.max(0, parseFloat(raw.dailyAllowance) || 0),
        bankName: raw.bankName || 'cash',
        bankAccount: String(raw.bankAccount || '').trim(),
        bankHolder: String(raw.bankHolder || raw.name || '').trim(),
        nikKtp: String(raw.nikKtp || '').trim(),
        npwp: String(raw.npwp || '').trim(),
        isActive: raw.isActive !== false,
        notes: String(raw.notes || '').trim()
    };
};

/**
 * Sinkronisasi daftar staf akun Firebase dengan master profil HR
 * @param {Array} staffList Daftar dari cashier_accounts
 * @param {Object} appData State global
 * @returns {Array} Daftar karyawan terpadu lengkap dengan data HR
 */
export const mergeStaffWithHrProfiles = (staffList = [], appData = {}) => {
    const hrEmployees = Array.isArray(appData?.employees) ? appData.employees : [];
    const hrMap = new Map();
    hrEmployees.forEach(e => {
        if (e.uid) hrMap.set(e.uid, e);
        if (e.email) hrMap.set(e.email.toLowerCase(), e);
        if (e.employeeId) hrMap.set(e.employeeId, e);
    });

    return staffList.map((staf, idx) => {
        const matched = hrMap.get(staf.uid) || hrMap.get(staf.email?.toLowerCase()) || {};
        return normalizeEmployeeProfile({
            ...matched,
            ...staf,
            uid: staf.uid,
            email: staf.email,
            name: staf.name || matched.name,
            role: staf.role || matched.role,
            isActive: staf.isActive !== false
        }, idx);
    });
};

/**
 * Helper: Verifikasi apakah pengguna saat ini terotentikasi sebagai Owner Utama (Super Admin)
 * untuk melakukan modifikasi akun atau hak akses staf di Firestore Cloud.
 */
export const verifyOwnerAuthority = (actionName = 'mengubah data staf') => {
    try {
        if (typeof window !== 'undefined' && window.auth && window.ADMIN_UID) {
            const user = window.auth.currentUser;
            if (!user) {
                if (typeof window.showToast === 'function') {
                    window.showToast(`Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${actionName}.`, 'warning');
                }
                return false;
            }
            if (user.uid !== window.ADMIN_UID) {
                if (typeof window.showToast === 'function') {
                    window.showToast(`Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${actionName}. Akun staf tidak memiliki izin modifikasi database staf.`, 'error');
                }
                return false;
            }
            return true;
        }
    } catch (_) {}
    return true; // Fallback permissif di lingkungan pengujian/offline jika window.auth tidak ada
};

// ─── Expose Global Window untuk Akses Interaktif ─────────────
if (typeof window !== 'undefined') {
    window.EMPLOYMENT_STATUSES = EMPLOYMENT_STATUSES;
    window.SALARY_PAYMENT_METHODS = SALARY_PAYMENT_METHODS;
    window.generateEmployeeId = generateEmployeeId;
    window.getOwnerEmployeeProfile = getOwnerEmployeeProfile;
    window.normalizeEmployeeProfile = normalizeEmployeeProfile;
    window.mergeStaffWithHrProfiles = mergeStaffWithHrProfiles;
    window.verifyOwnerAuthority = verifyOwnerAuthority;
}

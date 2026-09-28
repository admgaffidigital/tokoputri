/**
 * ============================================================
 * MODUL KEAMANAN: ROLE-BASED ACCESS CONTROL (RBAC) & HAK AKSES
 * Toko Putri v1.9.86
 * Mengatur tingkatan akun (Owner, Admin, Kasir) dan matriks
 * hak akses granular per modul untuk keamanan menyeluruh.
 * ============================================================
 */

import { auth, ADMIN_UID } from '../config/firebase.js';

// ─── Definisi Role ───────────────────────────────────────────
export const ROLES = {
    OWNER: 'owner',     // Pemilik Toko / Super Admin (Akses Penuh 100%)
    ADMIN: 'admin',     // Admin Operasional Toko (Katalog, Stok, Pesanan, PO)
    CASHIER: 'cashier'  // Kasir POS (Hanya transaksi & shift kasir fisik)
};

// ─── Matriks Hak Akses / Permission Definitions ─────────────
export const PERMISSION_DEFINITIONS = [
    // 1. Modul Operasional Toko
    { key: 'orders', label: 'Pesanan Online', desc: 'Proses status pesanan, update resi pengiriman & konfirmasi bayar', group: 'operasional', icon: 'fa-receipt' },
    { key: 'products', label: 'Katalog Produk & Stok', desc: 'Tambah/edit produk, atur varian, dan perbarui stok barang', group: 'operasional', icon: 'fa-box-open' },
    { key: 'suppliers', label: 'Supplier & Rekanan', desc: 'Kelola master data supplier, kontak kulakan, dan asal produk', group: 'operasional', icon: 'fa-truck-field' },
    { key: 'purchases', label: 'Order Kulakan (PO)', desc: 'Buat PO pembelian grosir, terima restock, & kelola hutang rekanan', group: 'operasional', icon: 'fa-cart-flatbed' },
    { key: 'piutang', label: 'Piutang Tempo & Cicilan', desc: 'Kelola nota piutang pelanggan, denda keterlambatan, & cicilan', group: 'operasional', icon: 'fa-clock-rotate-left' },
    { key: 'customers', label: 'Database Pelanggan', desc: 'Lihat daftar member, atur limit kredit PayLater, & mutasi poin', group: 'operasional', icon: 'fa-address-book' },
    { key: 'pos', label: 'Kasir POS', desc: 'Akses antarmuka penjualan kasir toko fisik dan shift kasir', group: 'operasional', icon: 'fa-cash-register' },

    // 2. Modul Konten & Etalase
    { key: 'categories', label: 'Kategori Produk', desc: 'Tambah dan susun kategori etalase produk', group: 'konten', icon: 'fa-tags' },
    { key: 'brands', label: 'Merek Produk', desc: 'Kelola daftar brand dagang barang', group: 'konten', icon: 'fa-copyright' },
    { key: 'colors', label: 'Database Warna', desc: 'Katalog warna produk dan swatch varian', group: 'konten', icon: 'fa-swatchbook' },
    { key: 'vouchers', label: 'Voucher & Promo', desc: 'Buat kode voucher diskon dan promo belanja', group: 'konten', icon: 'fa-ticket-simple' },
    { key: 'banners', label: 'Banner Promosi', desc: 'Kelola gambar dan video slider beranda toko', group: 'konten', icon: 'fa-images' },
    { key: 'rewards', label: 'Program Hadiah Poin', desc: 'Kelola katalog hadiah penukaran poin member', group: 'konten', icon: 'fa-gift' },
    { key: 'reviews', label: 'Ulasan Pelanggan', desc: 'Moderasi ulasan dan testimoni produk pembeli', group: 'konten', icon: 'fa-star' },
    { key: 'faqs', label: 'Tanya Jawab / Q&A', desc: 'Kelola jawaban pertanyaan umum pembeli', group: 'konten', icon: 'fa-circle-question' },
    { key: 'changelog', label: 'Log Pembaruan Sistem', desc: 'Melihat riwayat update sistem toko', group: 'konten', icon: 'fa-code-branch' },

    // 3. Modul Sensitif & Finansial (Hanya Owner secara default)
    { key: 'view_reports', label: 'Laporan Finansial & Laba', desc: 'Lihat omset, total HPP terjual, margin & laba bersih toko', group: 'sensitif', icon: 'fa-chart-line' },
    { key: 'tax', label: 'Pajak & Keuangan (PPN)', desc: 'Laporan PPN, neraca keuangan, dan laba rugi resmi', group: 'sensitif', icon: 'fa-file-invoice-dollar' },
    { key: 'banks', label: 'Rekening Bank & QRIS', desc: 'Ubah nomor rekening toko dan QRIS tujuan pembayaran', group: 'sensitif', icon: 'fa-building-columns' },
    { key: 'settings', label: 'Pengaturan Utama Toko', desc: 'Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem', group: 'sensitif', icon: 'fa-gear' },
    { key: 'cashiers', label: 'Kelola Staf & Hak Akses', desc: 'Daftarkan staf baru, atur jabatan, & ubah batasan hak akses', group: 'sensitif', icon: 'fa-users-gear' },
    { key: 'backup_sync', label: 'Pusat Data & Backup Cloud', desc: 'Cadangkan data toko, ekspor database, & sinkronisasi cloud', group: 'sensitif', icon: 'fa-cloud-arrow-up' }
];

// ─── Preset Hak Akses Siap Pakai ─────────────────────────────
export const ROLE_PRESETS = {
    // 🛒 KASIR: Hanya POS kasir
    [ROLES.CASHIER]: {
        pos: true,
        orders: false, products: false, suppliers: false, purchases: false,
        piutang: false, customers: false, categories: false, brands: false,
        colors: false, vouchers: false, banners: false, rewards: false,
        reviews: false, faqs: false, changelog: false,
        view_reports: false, tax: false, banks: false, settings: false,
        cashiers: false, backup_sync: false
    },
    // 🛡️ ADMIN OPERASIONAL: Operasional & konten aktif, finansial & pengaturan toko dibatasi
    [ROLES.ADMIN]: {
        pos: true,
        orders: true, products: true, suppliers: true, purchases: true,
        piutang: true, customers: true, categories: true, brands: true,
        colors: true, vouchers: true, banners: true, rewards: true,
        reviews: true, faqs: true, changelog: true,
        view_reports: false, tax: false, banks: false, settings: false,
        cashiers: false, backup_sync: false
    },
    // 💼 MANAJER TOKO: Semua operasional + laporan laba, tanpa izin ubah rekening & akun staf
    manager: {
        pos: true,
        orders: true, products: true, suppliers: true, purchases: true,
        piutang: true, customers: true, categories: true, brands: true,
        colors: true, vouchers: true, banners: true, rewards: true,
        reviews: true, faqs: true, changelog: true,
        view_reports: true, tax: true, banks: false, settings: false,
        cashiers: false, backup_sync: false
    },
    // 👑 OWNER: Akses 100% penuh tanpa batasan
    [ROLES.OWNER]: {
        pos: true,
        orders: true, products: true, suppliers: true, purchases: true,
        piutang: true, customers: true, categories: true, brands: true,
        colors: true, vouchers: true, banners: true, rewards: true,
        reviews: true, faqs: true, changelog: true,
        view_reports: true, tax: true, banks: true, settings: true,
        cashiers: true, backup_sync: true
    }
};

// ─── State Profil Staf Aktif ─────────────────────────────────
let _activeStaffProfile = null;

export const getActiveStaff = () => {
    if (_activeStaffProfile) return _activeStaffProfile;
    try {
        const raw = sessionStorage.getItem('freshmart_staff_profile');
        if (raw) {
            _activeStaffProfile = JSON.parse(raw);
            return _activeStaffProfile;
        }
    } catch (_) {}
    return null;
};

export const setActiveStaff = (profile) => {
    _activeStaffProfile = profile;
    try {
        if (profile) sessionStorage.setItem('freshmart_staff_profile', JSON.stringify(profile));
        else sessionStorage.removeItem('freshmart_staff_profile');
    } catch (_) {}
};

export const clearActiveStaff = () => {
    _activeStaffProfile = null;
    try { sessionStorage.removeItem('freshmart_staff_profile'); } catch (_) {}
};

// ─── Helper Pengecekan Peran (Role Checks) ───────────────────

/**
 * Cek apakah pengguna saat ini adalah Owner Toko (Super Admin)
 */
export const isOwnerUser = () => {
    const user = auth.currentUser;
    if (user && user.uid === ADMIN_UID) return true;
    const staff = getActiveStaff();
    return staff?.role === ROLES.OWNER;
};

/**
 * Cek apakah pengguna saat ini memiliki hak Admin atau Owner
 */
export const isAdminUser = () => {
    if (isOwnerUser()) return true;
    const staff = getActiveStaff();
    return staff?.role === ROLES.ADMIN;
};

/**
 * Cek apakah pengguna saat ini adalah Kasir
 */
export const isCashierUser = () => {
    if (isOwnerUser() || isAdminUser()) return false;
    const staff = getActiveStaff();
    return staff?.role === ROLES.CASHIER;
};

/**
 * Cek apakah pengguna memiliki izin untuk modul / fitur tertentu
 * @param {string} permissionKey Kunci izin (misal: 'orders', 'view_reports', 'settings')
 * @returns {boolean}
 */
export const hasPermission = (permissionKey) => {
    // 1. Owner selalu memiliki izin 100%
    if (isOwnerUser()) return true;

    const staff = getActiveStaff();
    if (!staff) {
        // Fallback untuk sesi admin legacy di localhost atau tanpa data staff
        if (window.isAdm || window.__localIsAdm) {
            // Jika modul sensitif keuangan/pengaturan, hanya izinkan jika UID adalah ADMIN_UID
            if (['banks', 'settings', 'cashiers', 'backup_sync'].includes(permissionKey)) {
                return auth.currentUser?.uid === ADMIN_UID;
            }
            return true;
        }
        return false;
    }

    // 2. Jika akun dinonaktifkan
    if (staff.isActive === false) return false;

    // 3. Kasir murni hanya diizinkan untuk POS
    if (staff.role === ROLES.CASHIER) {
        return permissionKey === 'pos';
    }

    // 4. Periksa izin eksplisit pada profil staf
    if (staff.permissions && typeof staff.permissions[permissionKey] !== 'undefined') {
        return staff.permissions[permissionKey] === true;
    }

    // 5. Fallback ke preset default sesuai role staf
    const defaultPreset = ROLE_PRESETS[staff.role] || ROLE_PRESETS[ROLES.ADMIN];
    return defaultPreset[permissionKey] === true;
};

/**
 * Dapatkan badge HTML yang cantik dan selaras tema untuk ditampilkan di UI
 */
export const getRoleBadgeHtml = (role) => {
    switch (role) {
        case ROLES.OWNER:
            return `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;
        case ROLES.ADMIN:
            return `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;
        case ROLES.CASHIER:
        default:
            return `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`;
    }
};

// ─── Expose ke window untuk akses global ─────────────────────
if (typeof window !== 'undefined') {
    window.ROLES = ROLES;
    window.PERMISSION_DEFINITIONS = PERMISSION_DEFINITIONS;
    window.ROLE_PRESETS = ROLE_PRESETS;
    window.getActiveStaff = getActiveStaff;
    window.setActiveStaff = setActiveStaff;
    window.clearActiveStaff = clearActiveStaff;
    window.isOwnerUser = isOwnerUser;
    window.isAdminUser = isAdminUser;
    window.isCashierUser = isCashierUser;
    window.hasPermission = hasPermission;
    window.getRoleBadgeHtml = getRoleBadgeHtml;
}

/**
 * ============================================================
 * MODUL ADMIN: BIAYA OPERASIONAL & BUKU KAS PENGELUARAN HARIAN
 * (Operational Expense Ledger & Petty Cash Management Hub)
 * 
 * Fitur Utama:
 * 1. Model Transaksional Harian (Buku Kas & Nota Kas Keluar):
 *    - Tanggal, Kategori Beban, Nominal Rp, Keperluan, Sumber Dana, Penerima, Bukti Nota
 * 2. Sumber Dana Terpadu:
 *    - Kas Laci Toko (Tunai Kasir / Petty Cash)
 *    - Transfer Rekening Bank (BCA / BRI / Mandiri Toko)
 *    - Dana Pribadi Owner (Talangan modal pemilik)
 * 3. Bento Stat Cards & Distribusi Beban Operasional
 * 4. Filter Fleksibel: Tahun, Bulan, Kategori, Sumber Dana, & Pencarian Instan
 * 5. Tampilan Responsif: Desktop Profesional Table & Mobile-First Bento Cards
 * 6. Modal Tambah / Edit Pengeluaran (Zero-Blur, Solid Elegance)
 * 7. Kompresi Cerdas & Upload Foto Bukti Struk/Nota ke Google Drive / Cloud
 * 8. Ekspor CSV Buku Kas Akuntansi & Cetak Bukti Kas Keluar (BKK) Resmi
 * 9. Otomatis Terkoneksi & Mengisi Laporan Terpadu (Tab 5 & Laba Rugi Tab 1)
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { 
    el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, 
    fixD, openModalAnim, closeModalAnim 
} from '../../core/utils.js';
import { saveApp } from '../../services/storage.js';
import { EXPENSE_CATEGORIES } from './schema.js';
import { GAS_UPLOAD_URL } from '../../services/gas.js';

// ─── Definisi Sumber Dana Pengeluaran ────────────────────────
export const EXPENSE_SOURCES = [
    { key: 'cash', label: 'Kas Laci Toko (Tunai)', shortLabel: 'Kas Toko', icon: 'fa-money-bill-wave', color: 'emerald' },
    { key: 'bank', label: 'Transfer Rekening Bank', shortLabel: 'Transfer Bank', icon: 'fa-building-columns', color: 'blue' },
    { key: 'owner', label: 'Dana Pribadi / Talangan Owner', shortLabel: 'Dana Owner', icon: 'fa-user-shield', color: 'purple' }
];

const MONTH_NAMES = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// ─── State Internal Modul ────────────────────────────────────
let expSelectedYear = new Date().getFullYear();
let expSelectedMonth = new Date().getMonth() + 1; // 1-12, atau 0 untuk setahun penuh
let expSelectedCategory = 'all';                  // 'all' atau key dari EXPENSE_CATEGORIES
let expSelectedSource = 'all';                    // 'all', 'cash', 'bank', 'owner'
let expSearchQuery = '';
let expSortBy = 'newest';                         // 'newest' | 'oldest' | 'highest' | 'lowest'
let editingExpenseId = null;

// ─── Helper Generator ID Unik ────────────────────────────────
const generateExpenseId = () => {
    return 'exp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
};

// ─── Helper Terbilang Angka Rupiah untuk Cetak BKK ───────────
const terbilang = (n) => {
    const angka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    n = Math.floor(Math.abs(Number(n) || 0));
    if (n < 12) return angka[n];
    if (n < 20) return terbilang(n - 10) + " Belas";
    if (n < 100) return terbilang(Math.floor(n / 10)) + " Puluh " + terbilang(n % 10);
    if (n < 200) return "Seratus " + terbilang(n - 100);
    if (n < 1000) return terbilang(Math.floor(n / 100)) + " Ratus " + terbilang(n % 100);
    if (n < 2000) return "Seribu " + terbilang(n - 1000);
    if (n < 1000000) return terbilang(Math.floor(n / 1000)) + " Ribu " + terbilang(n % 1000);
    if (n < 1000000000) return terbilang(Math.floor(n / 1000000)) + " Juta " + terbilang(n % 1000000);
    if (n < 1000000000000) return terbilang(Math.floor(n / 1000000000)) + " Miliar " + terbilang(n % 1000000000);
    return "Jumlah Sangat Besar";
};

// ─── Helper Format Tanggal Indonesia ─────────────────────────
const formatIndoDate = (dateStr) => {
    if (!dateStr) return '-';
    try {
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const y = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10);
            const d = parseInt(parts[2], 10);
            return `${d} ${MONTH_NAMES[m - 1] || ''} ${y}`;
        }
        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? dateStr : `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
    } catch (_) {
        return dateStr;
    }
};

/**
 * Pastikan wadah Modal & Viewer terpasang di document.body
 */
export const ensureExpenseModals = () => {
    // Bersihkan modal lama jika terduplikasi di dalam container admin
    const oldForm = document.querySelector('#admin-content #modal-expense-form');
    if (oldForm) oldForm.remove();
    const oldReceipt = document.querySelector('#admin-content #modal-expense-receipt-preview');
    if (oldReceipt) oldReceipt.remove();

    // 1. Modal Form Input / Edit
    if (!el('modal-expense-form')) {
        const m = document.createElement('div');
        m.id = 'modal-expense-form';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeExpenseModal?.(); };
        m.innerHTML = `
            <div id="modal-expense-form-content" class="w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden transform translate-y-full sm:translate-y-8 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Header Modal -->
                <div class="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20 text-base">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </div>
                        <div>
                            <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white" id="modal-expense-title">Catat Pengeluaran Baru</h3>
                            <p class="text-[10px] text-slate-400 font-medium">Buku Kas &amp; Beban Operasional Toko</p>
                        </div>
                    </div>
                    <button type="button" onclick="closeExpenseModal()" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <!-- Form Body (Scrollable) -->
                <form id="form-expense-entry" onsubmit="event.preventDefault(); window.submitExpenseForm();" class="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
                    <input type="hidden" id="exp-input-id" value="">

                    <!-- Baris 1: Tanggal & Kategori -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-regular fa-calendar text-rose-500 mr-1"></i> Tanggal Transaksi <span class="text-rose-500">*</span>
                            </label>
                            <input type="date" id="exp-input-date" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-tags text-rose-500 mr-1"></i> Kategori Beban <span class="text-rose-500">*</span>
                            </label>
                            <select id="exp-input-category" required class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors cursor-pointer">
                                ${EXPENSE_CATEGORIES.map(c => `<option value="${c.key}">${c.label}</option>`).join('')}
                            </select>
                        </div>
                    </div>

                    <!-- Baris 2: Nominal Pengeluaran + Quick Chips -->
                    <div>
                        <div class="flex items-center justify-between mb-1.5">
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                <i class="fa-solid fa-rupiah-sign text-rose-500 mr-1"></i> Nominal Pengeluaran <span class="text-rose-500">*</span>
                            </label>
                            <span class="text-[10px] font-bold text-rose-500" id="exp-nominal-preview">Rp 0</span>
                        </div>
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400">Rp</span>
                            <input type="text" id="exp-input-amount" inputmode="numeric" placeholder="0" required oninput="window.handleExpenseAmountInput(this)" class="w-full pl-11 pr-4 py-2.5 text-sm font-black bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <!-- Quick Nominal Chips -->
                        <div class="flex flex-wrap items-center gap-1.5 mt-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mr-1">Cepat:</span>
                            <button type="button" onclick="window.addQuickExpenseAmount(10000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+10 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(25000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+25 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(50000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+50 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(100000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+100 rb</button>
                            <button type="button" onclick="window.addQuickExpenseAmount(500000)" class="px-2 py-0.5 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-rose-400 text-slate-700 dark:text-slate-300 active:scale-95 transition-all">+500 rb</button>
                        </div>
                    </div>

                    <!-- Baris 3: Keperluan / Deskripsi Pengeluaran -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-align-left text-rose-500 mr-1"></i> Keperluan / Uraian Beban <span class="text-rose-500">*</span>
                        </label>
                        <textarea id="exp-input-desc" rows="2" required placeholder="Contoh: Beli lakban cokelat 5 roll, isi ulang galon, token listrik toko..." class="w-full text-xs font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors"></textarea>
                    </div>

                    <!-- Baris 4: Sumber Pembayaran Dana -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-wallet text-rose-500 mr-1"></i> Sumber Dana Pembayaran <span class="text-rose-500">*</span>
                        </label>
                        <div class="grid grid-cols-3 gap-2" id="exp-source-selector">
                            ${EXPENSE_SOURCES.map(s => `
                                <label class="relative flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/50 cursor-pointer text-center transition-all hover:border-slate-400 select-none group has-checked:border-rose-500 has-checked:bg-rose-50/40 dark:has-checked:bg-rose-950/20 has-checked:text-rose-600">
                                    <input type="radio" name="exp_source" value="${s.key}" class="sr-only" ${s.key === 'cash' ? 'checked' : ''}>
                                    <i class="fa-solid ${s.icon} text-sm mb-1 text-slate-500 group-hover:text-slate-800 dark:group-hover:text-white"></i>
                                    <span class="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight">${s.shortLabel}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Baris 5: Toko / Penerima Dana (Opsional) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-store text-rose-500 mr-1"></i> Dibayarkan Kepada / Vendor <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                            </label>
                            <input type="text" id="exp-input-recipient" placeholder="Contoh: Toko Plastik Berkah, PLN, SPBU..." class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                                <i class="fa-solid fa-user-pen text-rose-500 mr-1"></i> Dicatat Oleh <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                            </label>
                            <input type="text" id="exp-input-createdby" placeholder="Owner / Kasir Shift" class="w-full text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-rose-500 transition-colors">
                        </div>
                    </div>

                    <!-- Baris 6: Foto Bukti Struk / Nota (Upload & Preview) -->
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            <i class="fa-solid fa-receipt text-rose-500 mr-1"></i> Foto Bukti Struk / Nota Fisik <span class="text-[9px] text-slate-400 lowercase">(opsional)</span>
                        </label>
                        <div class="flex items-center gap-3">
                            <div id="exp-receipt-preview-box" class="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 relative group">
                                <i class="fa-regular fa-image text-slate-400 text-xl" id="exp-receipt-placeholder-icon"></i>
                                <img id="exp-receipt-preview-img" src="" alt="Bukti Struk" class="w-full h-full object-cover hidden">
                                <button type="button" id="exp-receipt-remove-btn" onclick="window.removeExpenseReceiptPhoto()" class="absolute inset-0 bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden cursor-pointer">
                                    <i class="fa-solid fa-trash-can text-sm text-rose-400"></i>
                                </button>
                            </div>
                            <div class="flex-1 space-y-1.5">
                                <input type="hidden" id="exp-input-receipt-url" value="">
                                <div class="flex items-center gap-2">
                                    <label class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 active:scale-95">
                                        <i class="fa-solid fa-camera text-rose-500"></i>
                                        <span>Ambil Foto / Pilih File</span>
                                        <input type="file" accept="image/*" class="sr-only" onchange="window.handleExpenseReceiptUpload(this)">
                                    </label>
                                    <span class="text-[10px] text-slate-400">JPG, PNG, WEBP (maks. 5MB)</span>
                                </div>
                                <input type="url" id="exp-input-receipt-manual" placeholder="Atau tempel URL gambar langsung..." oninput="window.setExpenseReceiptUrl(this.value)" class="w-full text-[11px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-700 dark:text-slate-300 focus:outline-hidden">
                            </div>
                        </div>
                    </div>

                    <!-- Footer Action Buttons -->
                    <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                        <button type="button" onclick="closeExpenseModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            Batal
                        </button>
                        <button type="submit" id="btn-save-expense" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white text-xs font-black shadow-md shadow-rose-500/25 transition-all cursor-pointer active:scale-95 flex items-center gap-2">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Simpan Pengeluaran</span>
                        </button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(m);
    }

    // 2. Modal Preview Nota Fullscreen
    if (!el('modal-expense-receipt-preview')) {
        const p = document.createElement('div');
        p.id = 'modal-expense-receipt-preview';
        p.className = 'fixed inset-0 z-[160] flex hidden items-center justify-center p-4 bg-slate-950/90 opacity-0 transition-opacity duration-300';
        p.onclick = () => window.closeExpenseReceiptPreview?.();
        p.innerHTML = `
            <div class="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl flex flex-col items-center justify-center" onclick="event.stopPropagation()">
                <button type="button" onclick="closeExpenseReceiptPreview()" class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:bg-rose-700 cursor-pointer z-10">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img id="img-full-receipt" src="" alt="Bukti Nota" class="max-h-[82vh] w-auto max-w-full rounded-xl object-contain">
                <p id="caption-full-receipt" class="text-xs text-slate-300 font-bold mt-2 text-center"></p>
            </div>
        `;
        document.body.appendChild(p);
    }
};

/**
 * Filter data pengeluaran operasional sesuai state aktif
 */
export const getFilteredExpenses = () => {
    const expenses = Array.isArray(appData.expenses) ? appData.expenses : [];
    
    return expenses.filter(exp => {
        if (!exp || !exp.date) return false;
        
        // Filter Tahun
        const [expYStr, expMStr] = exp.date.split('-');
        const expY = parseInt(expYStr, 10);
        const expM = parseInt(expMStr, 10);

        if (expSelectedYear && expY !== expSelectedYear) return false;

        // Filter Bulan (0 = Semua Bulan)
        if (expSelectedMonth !== 0 && expM !== expSelectedMonth) return false;

        // Filter Kategori
        if (expSelectedCategory !== 'all' && exp.category !== expSelectedCategory) return false;

        // Filter Sumber Pembayaran
        if (expSelectedSource !== 'all' && exp.source !== expSelectedSource) return false;

        // Filter Pencarian Teks
        if (expSearchQuery && expSearchQuery.trim()) {
            const q = expSearchQuery.toLowerCase().trim();
            const matchDesc = (exp.desc || '').toLowerCase().includes(q);
            const matchRecipient = (exp.recipient || '').toLowerCase().includes(q);
            const matchCategory = (exp.category || '').toLowerCase().includes(q);
            const matchAmount = (exp.amount || '').toString().includes(q);
            if (!matchDesc && !matchRecipient && !matchCategory && !matchAmount) return false;
        }

        return true;
    }).sort((a, b) => {
        if (expSortBy === 'highest') return (b.amount || 0) - (a.amount || 0);
        if (expSortBy === 'lowest') return (a.amount || 0) - (b.amount || 0);
        if (expSortBy === 'oldest') return (new Date(a.date).getTime() || 0) - (new Date(b.date).getTime() || 0);
        // Default 'newest'
        const dateDiff = (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0);
        if (dateDiff !== 0) return dateDiff;
        return (b.createdAt || 0) - (a.createdAt || 0);
    });
};

/**
 * Hitung Metrik Finansial Pengeluaran untuk Bento Stats
 */
export const getExpenseMetrics = () => {
    const list = getFilteredExpenses();
    let totalAmount = 0;
    const bySource = { cash: 0, bank: 0, owner: 0 };
    const byCategory = {};
    EXPENSE_CATEGORIES.forEach(c => { byCategory[c.key] = 0; });

    list.forEach(exp => {
        const amt = parseFloat(exp.amount) || 0;
        totalAmount += amt;

        const src = exp.source || 'cash';
        if (bySource[src] !== undefined) bySource[src] += amt;
        else bySource.cash += amt;

        const cat = exp.category || 'lainnya';
        if (byCategory[cat] !== undefined) byCategory[cat] += amt;
        else byCategory['lainnya'] += amt;
    });

    // Cari kategori dengan pengeluaran terbesar
    let topCategoryKey = 'lainnya';
    let topCategoryAmount = 0;
    Object.entries(byCategory).forEach(([catKey, catAmt]) => {
        if (catAmt > topCategoryAmount) {
            topCategoryAmount = catAmt;
            topCategoryKey = catKey;
        }
    });

    const topCategoryObj = EXPENSE_CATEGORIES.find(c => c.key === topCategoryKey) || EXPENSE_CATEGORIES[6];

    return {
        count: list.length,
        totalAmount,
        bySource,
        byCategory,
        topCategory: {
            ...topCategoryObj,
            amount: topCategoryAmount,
            percent: totalAmount > 0 ? ((topCategoryAmount / totalAmount) * 100).toFixed(0) : '0'
        }
    };
};

/**
 * Render Halaman Utama Biaya Operasional di CMS Admin
 */
export const renderExpensesAdminView = () => {
    ensureExpenseModals();

    const metrics = getExpenseMetrics();
    const filteredList = getFilteredExpenses();
    const periodLabel = expSelectedMonth === 0 
        ? `Tahun ${expSelectedYear}` 
        : `${MONTH_NAMES[expSelectedMonth - 1]} ${expSelectedYear}`;

    // Buat daftar opsi tahun (dari tahun saat ini - 2 sampai tahun + 1)
    const currentYear = new Date().getFullYear();
    const yearOptions = [currentYear - 2, currentYear - 1, currentYear, currentYear + 1];

    setH('admin-content', `
        <div class="space-y-6 pb-12">
            <!-- 1. TOP APP BAR & QUICK ACTION -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div class="flex items-center gap-3.5">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/25 text-xl shrink-0">
                        <i class="fa-solid fa-money-bill-transfer"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="text-base sm:text-lg font-black text-slate-800 dark:text-white">Buku Kas &amp; Biaya Operasional</h2>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60">
                                ${metrics.count} Transaksi
                            </span>
                        </div>
                        <p class="text-xs text-slate-400 font-medium mt-0.5">Pencatatan nota beban harian &amp; alokasi petty cash toko</p>
                    </div>
                </div>

                <!-- Tombol Aksi Utama -->
                <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                    <button type="button" onclick="window.exportExpensesToCsv()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95">
                        <i class="fa-solid fa-file-excel text-emerald-600"></i>
                        <span>Ekspor Excel</span>
                    </button>
                    <button type="button" onclick="openExpenseModal()" class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white text-xs font-black shadow-md shadow-rose-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- 2. BENTO STAT CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- Card 1: Total Beban Periode Ini -->
                <div class="p-4 sm:p-5 rounded-2xl border border-rose-200/80 dark:border-rose-950/50 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/30 dark:from-rose-950/20 dark:via-slate-900 dark:to-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400">Total Biaya Operasional</span>
                        <div class="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center text-xs"><i class="fa-solid fa-calculator"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400 truncate">${fCur(metrics.totalAmount)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">${periodLabel} (${metrics.count} nota)</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-rose-100 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                        <span>Mengurangi Laba Kotor</span>
                        <i class="fa-solid fa-arrow-trend-down text-rose-500"></i>
                    </div>
                </div>

                <!-- Card 2: Beban Terbesar -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Beban Terbesar</span>
                        <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs"><i class="fa-solid fa-crown"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-sm sm:text-base font-black text-slate-800 dark:text-white truncate">${metrics.topCategory.label}</p>
                        <p class="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 mt-0.5">${fCur(metrics.topCategory.amount)}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Alokasi</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${metrics.topCategory.percent}%</span>
                    </div>
                </div>

                <!-- Card 3: Kas Laci Toko (Tunai Petty Cash) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-emerald-200/70 dark:border-emerald-950/40 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Kas Laci Toko (Tunai)</span>
                        <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xs"><i class="fa-solid fa-money-bill-wave"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${fCur(metrics.bySource.cash)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Uang fisik dari kasir</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Porsi Tunai</span>
                        <span class="font-bold text-emerald-600">${metrics.totalAmount > 0 ? ((metrics.bySource.cash / metrics.totalAmount) * 100).toFixed(0) : '0'}%</span>
                    </div>
                </div>

                <!-- Card 4: Transfer Bank & Talangan Owner -->
                <div class="p-4 sm:p-5 rounded-2xl border border-blue-200/70 dark:border-blue-950/40 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Bank &amp; Dana Owner</span>
                        <div class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center text-xs"><i class="fa-solid fa-building-columns"></i></div>
                    </div>
                    <div class="my-1">
                        <p class="text-base sm:text-xl font-black text-slate-800 dark:text-white truncate">${fCur(metrics.bySource.bank + metrics.bySource.owner)}</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Bank: ${fCur(metrics.bySource.bank)} | Owner: ${fCur(metrics.bySource.owner)}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Non-Tunai</span>
                        <span class="font-bold text-blue-600">${metrics.totalAmount > 0 ? (((metrics.bySource.bank + metrics.bySource.owner) / metrics.totalAmount) * 100).toFixed(0) : '0'}%</span>
                    </div>
                </div>
            </div>

            <!-- 3. DISTRIBUSI KATEGORI BEBAN (HORIZONTAL MINI PROGRESS) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-chart-pie text-rose-500"></i> Alokasi Kategori Biaya Operasional
                    </h3>
                    <button type="button" onclick="openAdminTab('reports')" class="text-[11px] font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1">
                        <span>Lihat di Laba Rugi</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </button>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    ${EXPENSE_CATEGORIES.map(c => {
                        const val = metrics.byCategory[c.key] || 0;
                        const pct = metrics.totalAmount > 0 ? ((val / metrics.totalAmount) * 100).toFixed(0) : '0';
                        return `
                            <div class="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col justify-between">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase truncate">${c.label.split(' ')[0]}</span>
                                    <i class="fa-solid ${c.icon} text-[10px] text-slate-400"></i>
                                </div>
                                <p class="text-xs font-black text-slate-800 dark:text-white truncate">${fCur(val)}</p>
                                <div class="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="bg-rose-500 h-full rounded-full" style="width: ${pct}%"></div>
                                </div>
                                <span class="text-[9px] font-bold text-slate-400 mt-1 text-right">${pct}%</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- 4. FILTER BAR -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                    <!-- Filter Tahun -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tahun</label>
                        <select onchange="window.setExpenseFilter('year', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            ${yearOptions.map(y => `<option value="${y}" ${y === expSelectedYear ? 'selected' : ''}>${y}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Filter Bulan -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Bulan</label>
                        <select onchange="window.setExpenseFilter('month', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="0" ${expSelectedMonth === 0 ? 'selected' : ''}>Semua Bulan (Setahun)</option>
                            ${MONTH_NAMES.map((m, i) => `<option value="${i + 1}" ${(i + 1) === expSelectedMonth ? 'selected' : ''}>${m}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Kategori</label>
                        <select onchange="window.setExpenseFilter('category', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${expSelectedCategory === 'all' ? 'selected' : ''}>Semua Kategori</option>
                            ${EXPENSE_CATEGORIES.map(c => `<option value="${c.key}" ${c.key === expSelectedCategory ? 'selected' : ''}>${c.label}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Filter Sumber Pembayaran -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sumber Dana</label>
                        <select onchange="window.setExpenseFilter('source', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="all" ${expSelectedSource === 'all' ? 'selected' : ''}>Semua Sumber</option>
                            ${EXPENSE_SOURCES.map(s => `<option value="${s.key}" ${s.key === expSelectedSource ? 'selected' : ''}>${s.label}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Filter Urutan / Sort -->
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Urutkan</label>
                        <select onchange="window.setExpenseFilter('sort', this.value)" class="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-white focus:outline-hidden">
                            <option value="newest" ${expSortBy === 'newest' ? 'selected' : ''}>Tanggal Terbaru</option>
                            <option value="oldest" ${expSortBy === 'oldest' ? 'selected' : ''}>Tanggal Terlama</option>
                            <option value="highest" ${expSortBy === 'highest' ? 'selected' : ''}>Nominal Terbesar</option>
                            <option value="lowest" ${expSortBy === 'lowest' ? 'selected' : ''}>Nominal Terkecil</option>
                        </select>
                    </div>
                </div>

                <!-- Input Pencarian Bebas -->
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><i class="fa-solid fa-magnifying-glass text-xs"></i></span>
                    <input type="text" value="${esc(expSearchQuery)}" placeholder="Cari keterangan, keperluan, atau nama toko/vendor..." oninput="window.setExpenseFilter('search', this.value)" class="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-hidden">
                    ${expSearchQuery ? `<button type="button" onclick="window.setExpenseFilter('search', '')" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><i class="fa-solid fa-xmark text-xs"></i></button>` : ''}
                </div>
            </div>

            <!-- 5. DAFTAR BUKU KAS PENGELUARAN (LEDGER TABLE & CARDS) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
                <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">Buku Kas Pengeluaran Operasional</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Menampilkan ${filteredList.length} dari total ${(appData.expenses || []).length} catatan</p>
                    </div>
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${fCur(metrics.totalAmount)}</span>
                </div>

                ${filteredList.length === 0 ? `
                    <!-- Empty State -->
                    <div class="py-16 px-4 text-center flex flex-col items-center justify-center">
                        <div class="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-center text-2xl mb-3">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                        <h4 class="text-sm font-bold text-slate-700 dark:text-slate-200">Belum Ada Catatan Biaya Operasional</h4>
                        <p class="text-xs text-slate-400 max-w-sm mt-1">Belum ada transaksi pengeluaran operasional yang dicatat untuk filter periode ini.</p>
                        <button type="button" onclick="openExpenseModal()" class="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-rose-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-plus"></i>
                            <span>Catat Pengeluaran Pertama</span>
                        </button>
                    </div>
                ` : `
                    <!-- Desktop Table (>= 768px) -->
                    <div class="hidden md:block overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th class="py-3 px-4">Tanggal</th>
                                    <th class="py-3 px-4">Kategori Beban</th>
                                    <th class="py-3 px-4">Keperluan &amp; Penerima</th>
                                    <th class="py-3 px-4">Sumber Pembayaran</th>
                                    <th class="py-3 px-4 text-center">Bukti Nota</th>
                                    <th class="py-3 px-4 text-right">Nominal Keluar</th>
                                    <th class="py-3 px-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                ${filteredList.map(exp => {
                                    const catObj = EXPENSE_CATEGORIES.find(c => c.key === exp.category) || EXPENSE_CATEGORIES[6];
                                    const srcObj = EXPENSE_SOURCES.find(s => s.key === exp.source) || EXPENSE_SOURCES[0];
                                    const hasReceipt = Boolean(exp.receiptImg);

                                    return `
                                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                                            <td class="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                                <div class="flex items-center gap-2">
                                                    <i class="fa-regular fa-calendar text-slate-400"></i>
                                                    <span>${formatIndoDate(exp.date)}</span>
                                                </div>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                    <i class="fa-solid ${catObj.icon} text-rose-500"></i>
                                                    <span>${catObj.label}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <p class="font-bold text-slate-800 dark:text-white">${esc(exp.desc)}</p>
                                                ${exp.recipient ? `<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: <span class="font-semibold text-slate-600 dark:text-slate-300">${esc(exp.recipient)}</span></p>` : ''}
                                            </td>
                                            <td class="py-3.5 px-4">
                                                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                                    exp.source === 'cash' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50' :
                                                    exp.source === 'bank' ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 border border-blue-200 dark:border-blue-800/50' :
                                                    'bg-purple-50 dark:bg-purple-950/40 text-purple-600 border border-purple-200 dark:border-purple-800/50'
                                                }">
                                                    <i class="fa-solid ${srcObj.icon} text-[9px]"></i>
                                                    <span>${srcObj.shortLabel}</span>
                                                </span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center">
                                                ${hasReceipt ? `
                                                    <button type="button" onclick="window.previewExpenseReceipt('${exp.id}')" title="Lihat Foto Struk" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-image text-xs"></i>
                                                    </button>
                                                ` : `<span class="text-[10px] text-slate-300 dark:text-slate-600">-</span>`}
                                            </td>
                                            <td class="py-3.5 px-4 text-right whitespace-nowrap">
                                                <span class="font-black text-rose-600 dark:text-rose-400 text-sm">- ${fCur(exp.amount)}</span>
                                            </td>
                                            <td class="py-3.5 px-4 text-center whitespace-nowrap">
                                                <div class="inline-flex items-center gap-1.5">
                                                    <button type="button" onclick="window.printExpenseSlip('${exp.id}')" title="Cetak Bukti Kas Keluar (BKK)" class="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-print text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.openExpenseModal('${exp.id}')" title="Edit Pengeluaran" class="w-7 h-7 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-pen-to-square text-xs"></i>
                                                    </button>
                                                    <button type="button" onclick="window.confirmDeleteExpense('${exp.id}')" title="Hapus Pengeluaran" class="w-7 h-7 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center transition-colors cursor-pointer">
                                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- Mobile Cards (< 768px) -->
                    <div class="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                        ${filteredList.map(exp => {
                            const catObj = EXPENSE_CATEGORIES.find(c => c.key === exp.category) || EXPENSE_CATEGORIES[6];
                            const srcObj = EXPENSE_SOURCES.find(s => s.key === exp.source) || EXPENSE_SOURCES[0];
                            const hasReceipt = Boolean(exp.receiptImg);

                            return `
                                <div class="p-4 space-y-2.5">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                                <i class="fa-solid ${catObj.icon} text-rose-500 text-[9px]"></i>
                                                <span>${catObj.label}</span>
                                            </span>
                                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                                exp.source === 'cash' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600' :
                                                exp.source === 'bank' ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600' :
                                                'bg-purple-50 dark:bg-purple-950/40 text-purple-600'
                                            }">
                                                <i class="fa-solid ${srcObj.icon} text-[8px]"></i>
                                                <span>${srcObj.shortLabel}</span>
                                            </span>
                                        </div>
                                        <span class="text-[10px] text-slate-400 font-bold">${formatIndoDate(exp.date)}</span>
                                    </div>

                                    <div>
                                        <p class="text-xs font-black text-slate-800 dark:text-white leading-snug">${esc(exp.desc)}</p>
                                        ${exp.recipient ? `<p class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-store mr-1 text-slate-300"></i>Penerima: ${esc(exp.recipient)}</p>` : ''}
                                    </div>

                                    <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                        <div class="flex items-center gap-2">
                                            <span class="text-sm font-black text-rose-600 dark:text-rose-400">- ${fCur(exp.amount)}</span>
                                            ${hasReceipt ? `
                                                <button type="button" onclick="window.previewExpenseReceipt('${exp.id}')" class="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold flex items-center gap-1 cursor-pointer">
                                                    <i class="fa-solid fa-image text-[9px]"></i> Nota
                                                </button>
                                            ` : ''}
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <button type="button" onclick="window.printExpenseSlip('${exp.id}')" title="Cetak BKK" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-print text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.openExpenseModal('${exp.id}')" title="Edit" class="w-8 h-8 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-pen-to-square text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteExpense('${exp.id}')" title="Hapus" class="w-8 h-8 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center active:scale-90">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
        </div>
    `);
};

// ─── Modal Open & Close Handlers ─────────────────────────────
export const openExpenseModal = (expenseId = null) => {
    ensureExpenseModals();
    editingExpenseId = expenseId;

    const modal = el('modal-expense-form');
    const content = el('modal-expense-form-content');
    const titleEl = el('modal-expense-title');
    const btnSave = el('btn-save-expense');

    if (!modal) return;

    if (expenseId) {
        // Mode Edit
        const exp = (appData.expenses || []).find(e => e.id === expenseId);
        if (!exp) return showToast("Data pengeluaran tidak ditemukan!");

        if (titleEl) titleEl.innerText = "Edit Catatan Pengeluaran";
        if (btnSave) btnSave.querySelector('span').innerText = "Perbarui Pengeluaran";

        el('exp-input-id').value = exp.id;
        el('exp-input-date').value = exp.date || new Date().toISOString().split('T')[0];
        el('exp-input-category').value = exp.category || 'lainnya';
        el('exp-input-amount').value = new Intl.NumberFormat('id-ID').format(exp.amount || 0);
        el('exp-nominal-preview').innerText = fCur(exp.amount || 0);
        el('exp-input-desc').value = exp.desc || '';
        el('exp-input-recipient').value = exp.recipient || '';
        el('exp-input-createdby').value = exp.createdBy || '';
        el('exp-input-receipt-url').value = exp.receiptImg || '';
        el('exp-input-receipt-manual').value = exp.receiptImg || '';

        // Radio source
        const radios = document.querySelectorAll('input[name="exp_source"]');
        radios.forEach(r => { r.checked = (r.value === (exp.source || 'cash')); });

        // Preview nota jika ada
        updateReceiptPreviewUI(exp.receiptImg || '');
    } else {
        // Mode Tambah Baru
        if (titleEl) titleEl.innerText = "Catat Pengeluaran Baru";
        if (btnSave) btnSave.querySelector('span').innerText = "Simpan Pengeluaran";

        el('exp-input-id').value = '';
        el('exp-input-date').value = new Date().toISOString().split('T')[0];
        el('exp-input-category').value = 'kemasan';
        el('exp-input-amount').value = '';
        el('exp-nominal-preview').innerText = 'Rp 0';
        el('exp-input-desc').value = '';
        el('exp-input-recipient').value = '';
        el('exp-input-createdby').value = 'Owner';
        el('exp-input-receipt-url').value = '';
        el('exp-input-receipt-manual').value = '';

        const radios = document.querySelectorAll('input[name="exp_source"]');
        radios.forEach(r => { r.checked = (r.value === 'cash'); });

        updateReceiptPreviewUI('');
    }

    openModalAnim(modal, content);
};

export const closeExpenseModal = () => {
    const modal = el('modal-expense-form');
    const content = el('modal-expense-form-content');
    if (modal) {
        closeModalAnim(modal, content, () => {
            editingExpenseId = null;
        });
    }
};

// ─── Input Helper: Nominal Rupiah ────────────────────────────
export const handleExpenseAmountInput = (inputEl) => {
    let raw = inputEl.value.replace(/[^0-9]/g, '');
    const num = parseInt(raw, 10) || 0;
    inputEl.value = raw ? new Intl.NumberFormat('id-ID').format(num) : '';
    setIn('exp-nominal-preview', fCur(num));
};

export const addQuickExpenseAmount = (amountToAdd) => {
    const inp = el('exp-input-amount');
    if (!inp) return;
    let current = parseInt(inp.value.replace(/[^0-9]/g, ''), 10) || 0;
    current += amountToAdd;
    inp.value = new Intl.NumberFormat('id-ID').format(current);
    setIn('exp-nominal-preview', fCur(current));
};

// ─── Helper Upload & Preview Foto Nota ───────────────────────
const updateReceiptPreviewUI = (url) => {
    const box = el('exp-receipt-preview-box');
    const icon = el('exp-receipt-placeholder-icon');
    const img = el('exp-receipt-preview-img');
    const removeBtn = el('exp-receipt-remove-btn');

    if (url) {
        if (img) {
            img.src = fixD(url);
            img.classList.remove('hidden');
        }
        if (icon) icon.classList.add('hidden');
        if (removeBtn) removeBtn.classList.remove('hidden');
    } else {
        if (img) {
            img.src = '';
            img.classList.add('hidden');
        }
        if (icon) icon.classList.remove('hidden');
        if (removeBtn) removeBtn.classList.add('hidden');
    }
};

export const setExpenseReceiptUrl = (url) => {
    const trimmed = (url || '').trim();
    el('exp-input-receipt-url').value = trimmed;
    updateReceiptPreviewUI(trimmed);
};

export const removeExpenseReceiptPhoto = () => {
    el('exp-input-receipt-url').value = '';
    el('exp-input-receipt-manual').value = '';
    updateReceiptPreviewUI('');
    showToast("Foto struk dihapus");
};

/**
 * Handle upload foto struk dari kamera / file selector dengan kompresi cerdas
 */
export const handleExpenseReceiptUpload = async (fileInput) => {
    const file = fileInput.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        fileInput.value = '';
        return showToast("Hanya file gambar (JPG, PNG, WEBP) yang diperbolehkan!");
    }

    sLoad("Memproses foto nota...");

    try {
        // Kompresi di canvas (maksimal 1000px, quality 0.75) untuk efisiensi
        const compressedBase64 = await compressImageFile(file, 1000, 0.75);

        // Jika Google Apps Script URL tersedia, unggah ke Google Drive
        const uploadUrl = window.GAS_UPLOAD_URL || GAS_UPLOAD_URL;
        if (uploadUrl && !uploadUrl.includes("ISI_DENGAN")) {
            sLoad("Mengunggah foto nota ke Google Drive...");
            try {
                const payload = {
                    name: "EXP_NOTA_" + Date.now() + ".jpg",
                    mimeType: "image/jpeg",
                    data: compressedBase64.split(',')[1],
                    token: "B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p"
                };

                const res = await fetch(uploadUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(payload)
                });
                const resJson = await res.json();
                if (resJson && resJson.status === 'success' && resJson.url) {
                    hLoad();
                    setExpenseReceiptUrl(resJson.url);
                    el('exp-input-receipt-manual').value = resJson.url;
                    showToast("Foto nota berhasil diunggah!");
                    return;
                }
            } catch (gasErr) {
                console.warn("[Expenses] Gagal upload ke GAS, menggunakan kompresi lokal:", gasErr);
            }
        }

        // Fallback: gunakan data URL lokal terkompresi
        hLoad();
        setExpenseReceiptUrl(compressedBase64);
        showToast("Foto nota tersimpan!");
    } catch (e) {
        hLoad();
        showToast("Gagal memproses gambar: " + e.message);
    }
};

/**
 * Helper Kompresi Gambar di Canvas
 */
const compressImageFile = (file, maxDimension = 1000, quality = 0.75) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (width > maxDimension || height > maxDimension) {
                    if (width > height) {
                        height = Math.round((height * maxDimension) / width);
                        width = maxDimension;
                    } else {
                        width = Math.round((width * maxDimension) / height);
                        height = maxDimension;
                    }
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(dataUrl);
            };
            img.onerror = reject;
        };
        reader.onerror = reject;
    });
};

// ─── Modal Preview Nota Fullscreen ───────────────────────────
export const previewExpenseReceipt = (expenseId) => {
    const exp = (appData.expenses || []).find(e => e.id === expenseId);
    if (!exp || !exp.receiptImg) return showToast("Foto struk tidak tersedia");

    const modal = el('modal-expense-receipt-preview');
    const img = el('img-full-receipt');
    const cap = el('caption-full-receipt');

    if (img) img.src = fixD(exp.receiptImg);
    if (cap) cap.innerText = `${formatIndoDate(exp.date)} — ${exp.desc} (${fCur(exp.amount)})`;

    if (modal) {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => modal.classList.remove('opacity-0'));
    }
};

export const closeExpenseReceiptPreview = () => {
    const modal = el('modal-expense-receipt-preview');
    if (modal) {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 250);
    }
};

// ─── Submit Form: Create & Update ────────────────────────────
export const submitExpenseForm = async () => {
    const id = el('exp-input-id').value;
    const date = el('exp-input-date').value;
    const category = el('exp-input-category').value;
    const rawAmount = el('exp-input-amount').value.replace(/[^0-9]/g, '');
    const amount = parseInt(rawAmount, 10);
    const desc = el('exp-input-desc').value.trim();
    const recipient = el('exp-input-recipient').value.trim();
    const createdBy = el('exp-input-createdby').value.trim() || 'Owner';
    const receiptImg = el('exp-input-receipt-url').value.trim();

    // Ambil radio sumber dana
    const selectedRadio = document.querySelector('input[name="exp_source"]:checked');
    const source = selectedRadio ? selectedRadio.value : 'cash';

    if (!date) return showToast("Pilih tanggal transaksi!");
    if (!category) return showToast("Pilih kategori pengeluaran!");
    if (!amount || amount <= 0) return showToast("Masukkan nominal pengeluaran yang valid!");
    if (!desc) return showToast("Isi keperluan / uraian pengeluaran!");

    sLoad("Menyimpan pengeluaran...");

    if (!Array.isArray(appData.expenses)) appData.expenses = [];

    const now = Date.now();

    if (id) {
        // Update
        const idx = appData.expenses.findIndex(e => e.id === id);
        if (idx !== -1) {
            appData.expenses[idx] = {
                ...appData.expenses[idx],
                date,
                category,
                amount,
                desc,
                source,
                recipient,
                createdBy,
                receiptImg,
                updatedAt: now
            };
        }
    } else {
        // Create Baru
        const newExpense = {
            id: generateExpenseId(),
            date,
            category,
            amount,
            desc,
            source,
            recipient,
            createdBy,
            receiptImg,
            createdAt: now,
            updatedAt: now
        };
        appData.expenses.unshift(newExpense);
    }

    try {
        await saveApp(['expenses']);
        hLoad();
        closeExpenseModal();
        showToast(id ? "Pengeluaran berhasil diperbarui! 💸" : "Pengeluaran baru berhasil dicatat! 💸");
        renderExpensesAdminView();
    } catch (err) {
        hLoad();
        showToast("Gagal menyimpan ke server: " + err.message);
    }
};

// ─── Delete Handler ──────────────────────────────────────────
export const confirmDeleteExpense = (id) => {
    const exp = (appData.expenses || []).find(e => e.id === id);
    if (!exp) return;

    showConfirm(
        "Hapus Catatan Pengeluaran",
        `Apakah Anda yakin ingin menghapus catatan pengeluaran "${exp.desc}" sebesar ${fCur(exp.amount)}? Data tidak dapat dipulihkan.`,
        async () => {
            sLoad("Menghapus pengeluaran...");
            appData.expenses = (appData.expenses || []).filter(e => e.id !== id);
            try {
                await saveApp(['expenses']);
                hLoad();
                showToast("Catatan pengeluaran dihapus!");
                renderExpensesAdminView();
            } catch (err) {
                hLoad();
                showToast("Gagal menghapus: " + err.message);
            }
        }
    );
};

// ─── Filter State Setter ─────────────────────────────────────
export const setExpenseFilter = (type, val) => {
    if (type === 'year') expSelectedYear = parseInt(val, 10);
    else if (type === 'month') expSelectedMonth = parseInt(val, 10);
    else if (type === 'category') expSelectedCategory = val;
    else if (type === 'source') expSelectedSource = val;
    else if (type === 'sort') expSortBy = val;
    else if (type === 'search') expSearchQuery = val;

    renderExpensesAdminView();
};

// ─── Ekspor CSV Buku Kas Excel ───────────────────────────────
export const exportExpensesToCsv = () => {
    const list = getFilteredExpenses();
    if (list.length === 0) return showToast("Tidak ada data untuk diekspor!");

    const headers = ["ID", "Tanggal", "Kategori", "Keperluan", "Penerima", "Sumber Dana", "Nominal (Rp)", "Dicatat Oleh"];
    const rows = list.map(exp => {
        const catObj = EXPENSE_CATEGORIES.find(c => c.key === exp.category) || EXPENSE_CATEGORIES[6];
        const srcObj = EXPENSE_SOURCES.find(s => s.key === exp.source) || EXPENSE_SOURCES[0];

        return [
            `"${exp.id || ''}"`,
            `"${exp.date || ''}"`,
            `"${catObj.label.replace(/"/g, '""')}"`,
            `"${(exp.desc || '').replace(/"/g, '""')}"`,
            `"${(exp.recipient || '-').replace(/"/g, '""')}"`,
            `"${srcObj.label}"`,
            `"${exp.amount || 0}"`,
            `"${(exp.createdBy || 'Owner').replace(/"/g, '""')}"`
        ].join(',');
    });

    const csvContent = "\uFEFF" + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Buku_Kas_Pengeluaran_TokoPutri_${expSelectedYear}_${expSelectedMonth || 'Semua'}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("File Excel/CSV berhasil diunduh! 📊");
};

// ─── Cetak Bukti Kas Keluar (BKK) ────────────────────────────
export const printExpenseSlip = (expenseId) => {
    const exp = (appData.expenses || []).find(e => e.id === expenseId);
    if (!exp) return showToast("Data tidak ditemukan");

    const catObj = EXPENSE_CATEGORIES.find(c => c.key === exp.category) || EXPENSE_CATEGORIES[6];
    const srcObj = EXPENSE_SOURCES.find(s => s.key === exp.source) || EXPENSE_SOURCES[0];
    const store = appData.store || {};

    const slipWindow = window.open('', '_blank');
    if (!slipWindow) return showToast("Izinkan pop-up untuk mencetak Bukti Kas Keluar!");

    slipWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>BKK - ${exp.id}</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Courier New', Courier, monospace; }
                body { padding: 25px; color: #1e293b; background: #fff; font-size: 13px; line-height: 1.5; }
                .slip-box { max-width: 600px; margin: 0 auto; border: 2px solid #0f172a; padding: 20px; }
                .header { text-align: center; border-bottom: 2px dashed #0f172a; padding-bottom: 12px; margin-bottom: 15px; }
                .title { font-size: 18px; font-weight: 900; letter-spacing: 1px; }
                .sub { font-size: 11px; }
                .meta-table { width: 100%; margin-bottom: 15px; }
                .meta-table td { padding: 3px 0; vertical-align: top; }
                .amount-box { border: 2px solid #0f172a; background: #f8fafc; padding: 12px; margin: 15px 0; text-align: center; }
                .amount { font-size: 22px; font-weight: 900; }
                .terbilang { font-style: italic; font-size: 11px; margin-top: 4px; color: #475569; }
                .sig-grid { display: flex; justify-content: space-between; margin-top: 40px; text-align: center; }
                .sig-box { width: 30%; }
                .sig-line { margin-top: 55px; border-bottom: 1px solid #0f172a; font-weight: bold; }
                @media print {
                    body { padding: 0; }
                    .slip-box { border: 1px solid #000; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="slip-box">
                <div class="header">
                    <div class="title">${(store.name || 'TOKO PUTRI').toUpperCase()}</div>
                    <div class="sub">${store.address || 'Alamat Toko'} | WA: ${store.wa || '-'}</div>
                    <div style="font-weight: 900; margin-top: 6px; font-size: 15px;">BUKTI KAS KELUAR (BKK)</div>
                </div>

                <table class="meta-table">
                    <tr><td width="30%"><strong>No. Bukti</strong></td><td width="5%">:</td><td>${exp.id}</td></tr>
                    <tr><td><strong>Tanggal</strong></td><td>:</td><td>${formatIndoDate(exp.date)}</td></tr>
                    <tr><td><strong>Dibayarkan Kepada</strong></td><td>:</td><td>${exp.recipient || '-'}</td></tr>
                    <tr><td><strong>Kategori Beban</strong></td><td>:</td><td>${catObj.label}</td></tr>
                    <tr><td><strong>Sumber Dana</strong></td><td>:</td><td>${srcObj.label}</td></tr>
                    <tr><td><strong>Keperluan / Uraian</strong></td><td>:</td><td>${exp.desc}</td></tr>
                </table>

                <div class="amount-box">
                    <div class="amount">${fCur(exp.amount)}</div>
                    <div class="terbilang">Terbilang: ${terbilang(exp.amount)} Rupiah</div>
                </div>

                <div class="sig-grid">
                    <div class="sig-box">
                        <div>Dibukukan Oleh,</div>
                        <div class="sig-line">(${exp.createdBy || 'Kasir / Staf'})</div>
                    </div>
                    <div class="sig-box">
                        <div>Disetujui Oleh,</div>
                        <div class="sig-line">(Owner Toko)</div>
                    </div>
                    <div class="sig-box">
                        <div>Penerima Dana,</div>
                        <div class="sig-line">(${exp.recipient || '..................'})</div>
                    </div>
                </div>
            </div>

            <div class="no-print" style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()" style="padding: 8px 18px; font-weight: bold; cursor: pointer; background: #0f172a; color: #fff; border: none; border-radius: 8px;">Cetak Bukti Kas</button>
            </div>
            <script>
                window.onload = function() { setTimeout(function() { window.print(); }, 300); }
            </script>
        </body>
        </html>
    `);
    slipWindow.document.close();
};

// ─── Expose Global Functions ke Window ───────────────────────
window.renderExpensesAdminView = renderExpensesAdminView;
window.openExpenseModal = openExpenseModal;
window.closeExpenseModal = closeExpenseModal;
window.submitExpenseForm = submitExpenseForm;
window.confirmDeleteExpense = confirmDeleteExpense;
window.setExpenseFilter = setExpenseFilter;
window.handleExpenseAmountInput = handleExpenseAmountInput;
window.addQuickExpenseAmount = addQuickExpenseAmount;
window.handleExpenseReceiptUpload = handleExpenseReceiptUpload;
window.setExpenseReceiptUrl = setExpenseReceiptUrl;
window.removeExpenseReceiptPhoto = removeExpenseReceiptPhoto;
window.previewExpenseReceipt = previewExpenseReceipt;
window.closeExpenseReceiptPreview = closeExpenseReceiptPreview;
window.exportExpensesToCsv = exportExpensesToCsv;
window.printExpenseSlip = printExpenseSlip;

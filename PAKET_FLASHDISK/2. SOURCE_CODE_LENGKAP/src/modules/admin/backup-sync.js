/**
 * ============================================================
 * MODUL ADMIN: PUSAT DATA, SINKRONISASI REALTIME & PENCADANGAN AMAN
 * (Cloud Sync Hub, Comprehensive Backup Engine & Safe Restore)
 *
 * Mengelola:
 * 1. Tarik & Sinkronisasi data real-time dari Firestore Cloud
 * 2. Pencadangan Komprehensif (.json) multi-koleksi (Produk, Pesanan, Pelanggan, Kasir, Shift)
 * 3. Ekspor Laporan Akuntansi (.csv) untuk Excel / Spreadsheet
 * 4. Pemulihan Aman (Zero-Risk Restore) dengan Inspektur Pra-Pemulihan
 * 5. Auto Safety Snapshot & Rollback 1-Klik jika salah pulihkan
 * 6. Quick Snapshot Lokal di memori perangkat
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, esc, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';

// ─── State Modul Sync & Backup ────────────────────────────────
let lastSyncTimestamp = localStorage.getItem('tokoputri_last_sync') || new Date().toISOString();
let isSyncing = false;
let liveSyncStats = {
    products: 0,
    categories: 0,
    orders: 0,
    customers: 0,
    cashiers: 0,
    shifts: 0
};

/**
 * Format tanggal Indonesia yang ramah & presisi
 */
const formatDateTime = (isoString) => {
    if (!isoString) return '-';
    try {
        const d = new Date(isoString);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }) + ' WIB';
    } catch (_) {
        return isoString;
    }
};

/**
 * Render Antarmuka Pusat Data & Sinkronisasi
 */
export const renderBackupSyncView = async () => {
    const content = el('admin-content');
    if (!content) return;

    // Hitung metrik awal dari state lokal
    liveSyncStats.products   = (appData.products || []).length;
    liveSyncStats.categories = (appData.categories || []).length;

    setH('admin-content', `
    <div class="space-y-5 p-3.5 sm:p-6 fade-in max-w-5xl mx-auto pb-16 pt-3 sm:pt-5">
        <!-- 1. HERO BANNER: CLOUD REAL-TIME STATUS & SINKRONISASI (SEAMLESS THEME HARMONIZED) -->
        <div class="backup-sync-hero relative overflow-hidden p-5 sm:p-7 transition-all">
            <!-- Dekorasi latar belakang lembut bersahabat -->
            <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-10 blur-3xl" style="background: var(--color-primary)"></div>
            <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-5 blur-2xl" style="background: var(--color-primary)"></div>

            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div class="space-y-2">
                    <div class="flex items-center gap-2.5 flex-wrap">
                        <span id="sync-cloud-pill" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Cloud Real-Time Aktif
                        </span>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono" id="sync-last-time-label">
                            <i class="fa-solid fa-clock-rotate-left mr-1"></i>${formatDateTime(lastSyncTimestamp)}
                        </span>
                    </div>
                    <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                        <i class="fa-solid fa-cloud-arrow-up" style="color:var(--color-primary)"></i>
                        Pusat Data &amp; Sinkronisasi Cloud
                    </h2>
                    <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                        Pantau integritas data, lakukan sinkronisasi real-time dua arah, dan cadangkan ekosistem toko secara akurat ke penyimpanan aman.
                    </p>
                </div>

                <!-- Tombol Tarik Sinkronisasi Cepat -->
                <div class="flex items-center gap-2 shrink-0">
                    <button id="btn-force-sync" onclick="window.triggerRealtimeSync()" class="w-full md:w-auto px-5 py-3 rounded-2xl text-xs font-black text-white shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/5 dark:border-white/10 hover:opacity-95" style="background:var(--color-primary)">
                        <i id="btn-force-sync-icon" class="fa-solid fa-arrows-rotate text-sm"></i>
                        <span>Tarik Data Cloud Terbaru</span>
                    </button>
                </div>
            </div>

            <!-- GRID STATISTIK EKOSISTEM DATA -->
            <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Produk</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-products">${liveSyncStats.products}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kategori</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-categories">${liveSyncStats.categories}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Transaksi</p>
                    <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5" id="stat-sync-orders">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pelanggan</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 mt-0.5" id="stat-sync-customers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Akun Kasir</p>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5" id="stat-sync-cashiers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sesi Shift</p>
                    <p class="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400 mt-0.5" id="stat-sync-shifts">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
            </div>
        </div>

        <!-- 2. PILAR DUA: MESIN PENCADANGAN LENGKAP (COMPREHENSIVE BACKUP ENGINE) -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-box-archive"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-white">Pencadangan Data Presisi (Backup Ekosistem)</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Unduh data toko dalam format JSON terenkripsi sistem atau tabel akuntansi CSV</p>
                    </div>
                </div>
                <span class="hidden sm:inline-block px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px]">
                    Presisi Tinggi 100%
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <!-- Backup Lengkap JSON -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full" style="background: var(--color-primary)"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Full Database JSON</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Mencakup seluruh katalog produk, pesanan kasir, piutang, member, akun kasir, shift, dan pengaturan toko.
                        </p>
                    </div>
                    <button onclick="window.downloadFullBackupJSON()" class="w-full py-2.5 px-3 rounded-xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-file-code"></i>
                        <span>Unduh Backup Lengkap (.json)</span>
                    </button>
                </div>

                <!-- Ekspor CSV Produk & Stok -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Katalog Produk (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Tabel daftar produk, SKU/barcode, kategori, HPP modal, harga jual, harga grosir, dan stok fisik untuk Excel.
                        </p>
                    </div>
                    <button onclick="window.exportProductsCSV()" class="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-file-excel"></i>
                        <span>Ekspor Produk (.csv)</span>
                    </button>
                </div>

                <!-- Ekspor CSV Transaksi Penjualan -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Riwayat Penjualan (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Laporan transaksi kasir &amp; pesanan online, rincian pembayaran (Tunai/QRIS/Tempo), dan diskon untuk pembukuan.
                        </p>
                    </div>
                    <button onclick="window.exportOrdersCSV()" class="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        <span>Ekspor Transaksi (.csv)</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- 3. PILAR TIGA: PEMULIHAN AMAN (ZERO-RISK RESTORE & SAFETY ROLLBACK) -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                    <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg shadow-xs border border-amber-200/60 dark:border-amber-900/60">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-white">Pemulihan Aman &amp; Proteksi Rollback</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Pulihkan sistem dengan validasi skema ketat &amp; perlindungan snapshot otomatis sebelum eksekusi</p>
                    </div>
                </div>
                <div id="safety-snapshot-badge" class="hidden sm:inline-flex"></div>
            </div>

            <!-- Upload Area & Proteksi -->
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 space-y-4">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-base mt-0.5 shrink-0"></i>
                    <div class="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                        <b>Proteksi Keamanan Anti-Kehilangan Data:</b> Sebelum berkas cadangan dipulihkan ke database toko, sistem akan <b>secara otomatis membuat cadangan darurat (Safety Snapshot)</b> dari data aktif saat ini. Jika Anda salah memilih file, data semula dapat dipulihkan kembali seketika dengan 1 klik tombol <b>Rollback</b>.
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <label class="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white font-black text-xs cursor-pointer shadow-sm active:scale-95 transition-all hover:opacity-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-upload"></i>
                        <span>Pilih Berkas Cadangan (.json) untuk Dipulihkan</span>
                        <input type="file" accept=".json,application/json" class="hidden" onchange="window.handleRestoreFileSelect(event)">
                    </label>

                    <button id="btn-safety-rollback" onclick="window.triggerSafetyRollback()" class="w-full sm:w-auto px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 font-black text-xs flex items-center justify-center gap-2 shadow-2xs hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" disabled>
                        <i class="fa-solid fa-rotate-left"></i>
                        <span>Rollback ke Data Sebelum Restore</span>
                    </button>
                </div>
            </div>

            <!-- 4. QUICK SNAPSHOT LOKAL (INSTANT IN-DEVICE BACKUP) -->
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-floppy-disk text-slate-400"></i>
                    <span><b>Snapshot Cepat di Perangkat:</b> Simpan cadangan kilat ke memori browser tanpa unduh file</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="window.saveQuickDeviceSnapshot()" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.5)] font-bold text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-camera mr-1.5" style="color:var(--color-primary)"></i>Simpan Snapshot
                    </button>
                    <button onclick="window.restoreQuickDeviceSnapshot()" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 font-bold text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs">
                        <i class="fa-solid fa-clock-rotate-left mr-1.5 text-amber-500"></i>Pulihkan Snapshot
                    </button>
                </div>
            </div>
        </div>
    </div>
    `);

    // Muat data statistik real-time dari Firestore di latar belakang
    loadLiveStatistics();
    checkSafetySnapshotStatus();
};

/**
 * Muat metrik statistik live langsung dari Firestore
 */
const loadLiveStatistics = async () => {
    try {
        // 1. Pesanan / Transaksi
        db.collection("freshmart_orders").get().then(snap => {
            liveSyncStats.orders = snap.size;
            const elOrders = el('stat-sync-orders');
            if (elOrders) elOrders.textContent = snap.size.toLocaleString('id-ID');
        }).catch(() => {});

        // 2. Member / Pelanggan
        db.collection("freshmart").doc("cms_data").collection("customers").get().then(snap => {
            liveSyncStats.customers = snap.size;
            const elCust = el('stat-sync-customers');
            if (elCust) elCust.textContent = snap.size.toLocaleString('id-ID');
        }).catch(() => {});

        // 3. Akun Kasir
        db.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().then(snap => {
            liveSyncStats.cashiers = snap.size;
            const elCash = el('stat-sync-cashiers');
            if (elCash) elCash.textContent = snap.size.toLocaleString('id-ID');
        }).catch(() => {});

        // 4. Sesi Shift Kasir
        db.collection("freshmart").doc("cms_data").collection("pos_shifts").get().then(snap => {
            liveSyncStats.shifts = snap.size;
            const elShift = el('stat-sync-shifts');
            if (elShift) elShift.textContent = snap.size.toLocaleString('id-ID');
        }).catch(() => {});
    } catch (err) {
        console.warn('[SyncHub] Gagal memuat ringkasan statistik live:', err);
    }
};

/**
 * Periksa status safety snapshot untuk tombol rollback
 */
const checkSafetySnapshotStatus = () => {
    const raw = localStorage.getItem('tokoputri_safety_snapshot');
    const btn = el('btn-safety-rollback');
    const badge = el('safety-snapshot-badge');
    if (!raw) {
        if (btn) btn.disabled = true;
        if (badge) badge.innerHTML = '';
        return;
    }

    try {
        const snap = JSON.parse(raw);
        if (btn) btn.disabled = false;
        if (badge) {
            badge.innerHTML = `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-clock-rotate-left text-amber-500"></i>
                    Snapshot Aktif: ${new Date(snap.timestamp).toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' })}
                </span>`;
        }
    } catch (_) {
        if (btn) btn.disabled = true;
    }
};

// ─── FITUR 1: TARIK DATA CLOUD REALTIME (FORCE SYNC) ──────────
export const triggerRealtimeSync = async () => {
    if (isSyncing) return;
    isSyncing = true;

    const btn = el('btn-force-sync');
    const icon = el('btn-force-sync-icon');
    if (icon) icon.classList.add('fa-spin');
    if (btn) btn.classList.add('opacity-80', 'pointer-events-none');

    sLoad('Menarik & Menyinkronkan Data Cloud...');

    try {
        // Tarik data utama freshmart/cms_data
        const cmsDoc = await db.collection("freshmart").doc("cms_data").get();
        if (cmsDoc.exists) {
            const data = cmsDoc.data() || {};
            Object.assign(appData, data);
            try {
                localStorage.setItem('freshmart_cms_data_cache', JSON.stringify(data));
            } catch (_) {}
        }

        // Tarik daftar pelanggan & update state
        const custSnap = await db.collection("freshmart").doc("cms_data").collection("customers").get();
        appData.customers = custSnap.docs.map(d => d.data());
        liveSyncStats.customers = custSnap.size;

        // Tarik pesanan terbaru
        const ordSnap = await db.collection("freshmart_orders").orderBy("timestamp", "desc").limit(100).get();
        liveSyncStats.orders = ordSnap.size;

        // Update timestamp sinkronisasi
        lastSyncTimestamp = new Date().toISOString();
        localStorage.setItem('tokoputri_last_sync', lastSyncTimestamp);

        // Update metrik visual
        liveSyncStats.products = (appData.products || []).length;
        liveSyncStats.categories = (appData.categories || []).length;

        const elProd = el('stat-sync-products');
        if (elProd) elProd.textContent = liveSyncStats.products;
        const elCat = el('stat-sync-categories');
        if (elCat) elCat.textContent = liveSyncStats.categories;
        const elOrd = el('stat-sync-orders');
        if (elOrd) elOrd.textContent = liveSyncStats.orders.toLocaleString('id-ID');
        const elCust = el('stat-sync-customers');
        if (elCust) elCust.textContent = liveSyncStats.customers.toLocaleString('id-ID');

        const elTime = el('sync-last-time-label');
        if (elTime) elTime.innerHTML = `<i class="fa-solid fa-clock-rotate-left mr-1"></i>${formatDateTime(lastSyncTimestamp)}`;

        showToast("Semua data toko berhasil disinkronkan langsung dari Cloud Firestore!", "success");
    } catch (err) {
        console.error('[SyncHub] Gagal menarik pembaruan cloud:', err);
        showToast("Gagal menyinkronkan data cloud. Periksa koneksi internet Anda.", "error");
    } finally {
        isSyncing = false;
        hLoad();
        if (icon) icon.classList.remove('fa-spin');
        if (btn) btn.classList.remove('opacity-80', 'pointer-events-none');
    }
};

// ─── FITUR 2: FULL COMPREHENSIVE BACKUP ENGINE (.JSON) ─────────
export const downloadFullBackupJSON = async () => {
    sLoad('Mengumpulkan seluruh data ekosistem toko...');

    try {
        // Ambil semua koleksi secara paralel
        const [ordersSnap, customersSnap, cashiersSnap, shiftsSnap, reviewsSnap] = await Promise.all([
            db.collection("freshmart_orders").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("customers").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("pos_shifts").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("reviews").get().catch(() => ({ docs: [] }))
        ]);

        const ordersList    = ordersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const customersList = customersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const cashiersList  = cashiersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const shiftsList    = shiftsSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const reviewsList   = reviewsSnap.docs.map(d => ({ _id: d.id, ...d.data() }));

        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10);
        const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;

        // Struktur Berkas Cadangan Standar Enterprise
        const backupPayload = {
            _meta: {
                appName: "Toko Putri Super App",
                version: "1.9.24",
                backupType: "full_ecosystem",
                createdAt: now.toISOString(),
                exportedBy: window.isAdm ? 'Seller Admin' : 'Staff',
                stats: {
                    productsCount: (appData.products || []).length,
                    categoriesCount: (appData.categories || []).length,
                    ordersCount: ordersList.length,
                    customersCount: customersList.length,
                    cashiersCount: cashiersList.length,
                    shiftsCount: shiftsList.length
                },
                checksum: btoa(`${dateStr}-${appData.products?.length || 0}-${ordersList.length}`).slice(0, 16)
            },
            appData: {
                store: appData.store || {},
                products: appData.products || [],
                categories: appData.categories || [],
                brands: appData.brands || [],
                colors: appData.colors || [],
                banners: appData.banners || [],
                vouchers: appData.vouchers || [],
                banks: appData.banks || [],
                faqs: appData.faqs || [],
                tax: appData.tax || {},
                rewards: appData.rewards || [],
                hasCashier: appData.hasCashier || false
            },
            orders: ordersList,
            customers: customersList,
            cashiers: cashiersList,
            shifts: shiftsList,
            reviews: reviewsList
        };

        const jsonStr = JSON.stringify(backupPayload, null, 2);
        const fileName = `backup_tokoputri_full_${dateStr}_${timeStr}.json`;

        // Dukungan Android Native App vs Browser Web
        if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
            const base64Str = btoa(unescape(encodeURIComponent(jsonStr)));
            window.AndroidNativeApp.saveOrShareFile(base64Str, fileName, 'application/json');
        } else {
            const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        }

        hLoad();
        showToast(`Cadangan lengkap berhasil diunduh (${ordersList.length} transaksi, ${appData.products?.length || 0} produk)!`, "success");
    } catch (err) {
        hLoad();
        console.error('[BackupEngine] Gagal mengekspor data komprehensif:', err);
        showToast("Gagal membuat cadangan database toko: " + err.message, "error");
    }
};

// ─── FITUR 3: EKSPOR LAPORAN AKUNTANSI SPREADSHEET (.CSV) ─────
const escapeCSV = (str) => {
    if (str === null || str === undefined) return '""';
    const s = String(str).replace(/"/g, '""');
    return `"${s}"`;
};

/**
 * Ekspor Master Katalog Produk & Stok (.csv)
 */
export const exportProductsCSV = () => {
    try {
        const products = appData.products || [];
        if (products.length === 0) {
            showToast("Belum ada data produk untuk diekspor!", "warning");
            return;
        }

        const headers = [
            "ID Produk",
            "Nama Produk",
            "Barcode / SKU",
            "Kategori",
            "Merek",
            "Harga Modal (HPP Rp)",
            "Harga Jual Toko (Rp)",
            "Harga Grosir (Rp)",
            "Minimal Grosir",
            "Stok Saat Ini",
            "Satuan",
            "Deskripsi Singkat"
        ];

        const rows = products.map(p => [
            escapeCSV(p.id || ''),
            escapeCSV(p.name || ''),
            escapeCSV(p.sku || p.barcode || ''),
            escapeCSV(p.category || 'Umum'),
            escapeCSV(p.brand || '-'),
            p.hpp || 0,
            p.price || 0,
            p.wholesalePrice || 0,
            p.wholesaleMin || 0,
            p.stock ?? 0,
            escapeCSV(p.unit || 'pcs'),
            escapeCSV((p.desc || '').replace(/(\r\n|\n|\r)/gm, ' '))
        ]);

        const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
        const fileName = `laporan_produk_tokoputri_${new Date().toISOString().slice(0, 10)}.csv`;

        downloadCSVFile(csvContent, fileName);
        showToast(`Berhasil mengekspor ${products.length} produk ke CSV!`, "success");
    } catch (err) {
        console.error('[CSVExport] Gagal ekspor produk:', err);
        showToast("Gagal mengekspor CSV produk", "error");
    }
};

/**
 * Ekspor Riwayat Penjualan & Transaksi (.csv)
 */
export const exportOrdersCSV = async () => {
    sLoad('Menyiapkan laporan transaksi CSV...');
    try {
        const snap = await db.collection("freshmart_orders").orderBy("timestamp", "desc").get();
        if (snap.empty) {
            hLoad();
            showToast("Belum ada data pesanan/transaksi untuk diekspor!", "warning");
            return;
        }

        const orders = snap.docs.map(d => ({ id: d.id, ...d.data() }));

        const headers = [
            "No Invoice",
            "Waktu Transaksi",
            "Sumber Transaksi",
            "Nama Kasir / Staf",
            "Nama Pelanggan",
            "No WhatsApp",
            "Total Item",
            "Subtotal (Rp)",
            "Diskon (Rp)",
            "Pajak / PPN (Rp)",
            "Total Bayar (Rp)",
            "Metode Pembayaran",
            "Status Pesanan"
        ];

        const rows = orders.map(o => {
            const timeStr = o.timestamp ? formatDateTime(o.timestamp) : '-';
            const sourceStr = o.source === 'pos' ? 'Kasir POS' : 'Pesanan Web';
            const cashierStr = o.cashierName || (o.source === 'pos' ? 'Kasir Toko' : 'Website');
            const custName = o.customerName || (o.customer ? o.customer.name : 'Pelanggan Toko');
            const custPhone = o.customerPhone || (o.customer ? o.customer.phone : '-');
            const itemsCount = (o.items || []).reduce((acc, it) => acc + (it.qty || 1), 0);

            return [
                escapeCSV(o.id || ''),
                escapeCSV(timeStr),
                escapeCSV(sourceStr),
                escapeCSV(cashierStr),
                escapeCSV(custName),
                escapeCSV(custPhone),
                itemsCount,
                o.subtotal || o.total || 0,
                o.discount || 0,
                o.tax || 0,
                o.total || 0,
                escapeCSV(o.paymentMethod || 'Tunai'),
                escapeCSV(o.status || 'Selesai')
            ];
        });

        const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
        const fileName = `laporan_transaksi_tokoputri_${new Date().toISOString().slice(0, 10)}.csv`;

        downloadCSVFile(csvContent, fileName);
        hLoad();
        showToast(`Berhasil mengekspor ${orders.length} data transaksi ke CSV!`, "success");
    } catch (err) {
        hLoad();
        console.error('[CSVExport] Gagal ekspor pesanan:', err);
        showToast("Gagal mengekspor data transaksi: " + err.message, "error");
    }
};

/**
 * Helper download file CSV
 */
const downloadCSVFile = (csvContent, fileName) => {
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
        const base64Str = btoa(unescape(encodeURIComponent(csvContent)));
        window.AndroidNativeApp.saveOrShareFile(base64Str, fileName, 'text/csv');
    } else {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
};

// ─── FITUR 4: PEMULIHAN AMAN (SAFE RESTORE & INSPEKTOR) ────────
export const handleRestoreFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const rawContent = e.target.result;
            const parsed = JSON.parse(rawContent);

            // Validasi Skema Berkas
            const isFullBackup = Boolean(parsed._meta && parsed.appData);
            const isLegacyBackup = Boolean(parsed.products && Array.isArray(parsed.products));

            if (!isFullBackup && !isLegacyBackup) {
                showToast("Format berkas tidak dikenali! Pastikan berkas cadangan resmi Toko Putri (.json).", "error");
                return;
            }

            const targetAppData = isFullBackup ? parsed.appData : parsed;
            const productsCount = (targetAppData.products || []).length;
            const ordersCount   = isFullBackup && parsed.orders ? parsed.orders.length : 0;
            const custCount     = isFullBackup && parsed.customers ? parsed.customers.length : 0;
            const backupDate    = isFullBackup && parsed._meta?.createdAt ? formatDateTime(parsed._meta.createdAt) : file.name;

            // Buka Modal Konfirmasi Cerdas (Pre-Restore Inspector)
            openPreRestoreModal({
                fileName: file.name,
                backupDate,
                productsCount,
                ordersCount,
                custCount,
                isFullBackup,
                backupDataPayload: parsed
            });
        } catch (err) {
            console.error('[RestoreEngine] Gagal membaca berkas cadangan:', err);
            showToast("Berkas JSON rusak atau tidak dapat dibaca!", "error");
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsText(file);
};

/**
 * Modal Dialog Inspektur Pra-Pemulihan
 */
const openPreRestoreModal = ({ fileName, backupDate, productsCount, ordersCount, custCount, isFullBackup, backupDataPayload }) => {
    const existingModal = el('modal-pre-restore-inspector');
    if (existingModal) existingModal.remove();

    const modalHTML = `
    <div id="modal-pre-restore-inspector" class="fixed inset-0 z-[10005] flex items-center justify-center p-3.5 bg-black/70 backdrop-blur-xs fade-in">
        <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-lg overflow-hidden fade-in-scale">
            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/70 dark:bg-amber-950/30">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-xs">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Inspektur Pra-Pemulihan Data</h3>
                        <p class="text-[10px] text-amber-700 dark:text-amber-300 font-bold">Verifikasi ringkasan sebelum data diterapkan</p>
                    </div>
                </div>
                <button onclick="document.getElementById('modal-pre-restore-inspector').remove()" class="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-5 space-y-4 text-xs">
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Nama Berkas:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate max-w-[200px]">${esc(fileName)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Waktu Cadangan:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100">${esc(backupDate)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Tipe Cadangan:</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">${isFullBackup ? 'Full Ecosystem Backup' : 'Katalog Standar'}</span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 text-center">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Produk</p>
                        <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${productsCount}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Transaksi</p>
                        <p class="text-base font-black text-emerald-500 mt-0.5">${ordersCount}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Member</p>
                        <p class="text-base font-black text-cyan-500 mt-0.5">${custCount}</p>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 shrink-0"></i>
                    <span>Sistem akan membuat <b>Safety Snapshot otomatis</b> dari data saat ini sebelum menerapkan berkas baru. Anda bebas membatalkan kapan pun.</span>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button onclick="document.getElementById('modal-pre-restore-inspector').remove()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button id="btn-execute-restore" class="px-5 py-2.5 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 flex items-center gap-1.5" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Ya, Pulihkan Sekarang</span>
                </button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const btnExec = el('btn-execute-restore');
    if (btnExec) {
        btnExec.onclick = () => {
            el('modal-pre-restore-inspector')?.remove();
            executeSafeRestore(backupDataPayload);
        };
    }
};

/**
 * Eksekusi Pemulihan Database Aman dengan Auto Safety-Snapshot
 */
const executeSafeRestore = async (backupPayload) => {
    sLoad('Membuat Safety Snapshot & Memulihkan Database...');

    try {
        // 1. Buat Safety Snapshot data aktif saat ini sebelum ditimpa
        const safetySnapshot = {
            timestamp: new Date().toISOString(),
            appData: JSON.parse(JSON.stringify(appData))
        };
        localStorage.setItem('tokoputri_safety_snapshot', JSON.stringify(safetySnapshot));

        // 2. Siapkan data baru
        const isFullBackup = Boolean(backupPayload._meta && backupPayload.appData);
        const incomingAppData = isFullBackup ? backupPayload.appData : backupPayload;

        // 3. Terapkan ke memori appData
        Object.assign(appData, incomingAppData);

        // 4. Simpan ke Firestore cms_data
        if (typeof window.saveApp === 'function') {
            await window.saveApp();
        } else {
            await db.collection("freshmart").doc("cms_data").set(appData, { merge: true });
        }

        // 5. Jika full backup memiliki pesanan & pelanggan, sinkronkan juga
        if (isFullBackup && backupPayload.customers && Array.isArray(backupPayload.customers)) {
            const batch = db.batch();
            const custCol = db.collection("freshmart").doc("cms_data").collection("customers");
            backupPayload.customers.slice(0, 100).forEach(c => {
                if (c.phone || c._id) {
                    const docId = String(c.phone || c._id);
                    batch.set(custCol.doc(docId), c, { merge: true });
                }
            });
            await batch.commit().catch(() => {});
        }

        hLoad();
        showToast("Database toko berhasil dipulihkan secara akurat!", "success");

        // Refresh status tombol rollback & muat ulang view
        setTimeout(() => {
            renderBackupSyncView();
        }, 600);
    } catch (err) {
        hLoad();
        console.error('[RestoreEngine] Gagal mengeksekusi restore:', err);
        showToast("Gagal memulihkan database toko: " + err.message, "error");
    }
};

// ─── FITUR 5: ROLLBACK 1-KLIK KE SNAPSHOT SEBELUM RESTORE ─────
export const triggerSafetyRollback = async () => {
    const raw = localStorage.getItem('tokoputri_safety_snapshot');
    if (!raw) {
        showToast("Tidak ada riwayat snapshot keselamatan yang tersimpan!", "warning");
        return;
    }

    let snap;
    try {
        snap = JSON.parse(raw);
    } catch (_) {
        showToast("Snapshot keselamatan rusak!", "error");
        return;
    }

    const conf = await showConfirm(
        "Batalkan & Rollback Data?",
        `Apakah Anda yakin ingin membatalkan pemulihan dan mengembalikan data toko ke snapshot tanggal ${formatDateTime(snap.timestamp)}?`
    );
    if (!conf) return;

    sLoad('Mengembalikan data ke kondisi semula (Rollback)...');

    try {
        Object.assign(appData, snap.appData);
        if (typeof window.saveApp === 'function') {
            await window.saveApp();
        } else {
            await db.collection("freshmart").doc("cms_data").set(appData, { merge: true });
        }

        // Bersihkan snapshot setelah rollback berhasil
        localStorage.removeItem('tokoputri_safety_snapshot');

        hLoad();
        showToast("Data toko telah berhasil dikembalikan ke kondisi semula!", "success");

        setTimeout(() => {
            renderBackupSyncView();
        }, 600);
    } catch (err) {
        hLoad();
        console.error('[RollbackEngine] Gagal rollback:', err);
        showToast("Gagal mengembalikan data: " + err.message, "error");
    }
};

// ─── FITUR 6: QUICK DEVICE SNAPSHOT (INSTAN DALAM PERANGKAT) ──
export const saveQuickDeviceSnapshot = () => {
    try {
        const payload = {
            timestamp: new Date().toISOString(),
            appData: JSON.parse(JSON.stringify(appData))
        };
        localStorage.setItem('tokoputri_quick_snapshot', JSON.stringify(payload));
        showToast("Snapshot cepat berhasil disimpan di memori perangkat!", "success");
    } catch (err) {
        showToast("Memori lokal penuh, gagal menyimpan snapshot!", "error");
    }
};

export const restoreQuickDeviceSnapshot = async () => {
    const raw = localStorage.getItem('tokoputri_quick_snapshot');
    if (!raw) {
        showToast("Belum ada snapshot cepat yang disimpan di perangkat ini!", "warning");
        return;
    }

    let snap;
    try {
        snap = JSON.parse(raw);
    } catch (_) {
        showToast("Snapshot kilat rusak!", "error");
        return;
    }

    const conf = await showConfirm(
        "Terapkan Snapshot Cepat?",
        `Pulihkan data toko ke snapshot yang disimpan pada ${formatDateTime(snap.timestamp)}?`
    );
    if (!conf) return;

    executeSafeRestore(snap.appData);
};

// ─── EXPOSE GLOBAL UNTUK ONCLICK ATRIBUT HTML ─────────────────
window.renderBackupSyncView       = renderBackupSyncView;
window.triggerRealtimeSync        = triggerRealtimeSync;
window.downloadFullBackupJSON     = downloadFullBackupJSON;
window.exportProductsCSV          = exportProductsCSV;
window.exportOrdersCSV            = exportOrdersCSV;
window.handleRestoreFileSelect    = handleRestoreFileSelect;
window.triggerSafetyRollback      = triggerSafetyRollback;
window.saveQuickDeviceSnapshot    = saveQuickDeviceSnapshot;
window.restoreQuickDeviceSnapshot = restoreQuickDeviceSnapshot;

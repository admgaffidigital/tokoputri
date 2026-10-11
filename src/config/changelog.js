/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * 
 * ATURAN ROLLING 5-LOG TERBARU (ANTI-KODE SAMPAH & ANTI-SPAM):
 * DEFAULT_CHANGELOG dibatasi secara ketat HANYA menyimpan 5 entri rilis
 * terkini (${top5[0]?.version} s.d. ${top5[top5.length - 1]?.version}). Setiap rilis baru ditambahkan di posisi
 * teratas dan entri ke-6 dipangkas agar berkas tetap super ringan (~8KB vs ~425KB),
 * mengeliminasi kode sampah, dan mencegah spam riwayat di antarmuka website.
 * ============================================================
 */

export const MAX_CHANGELOG_LIMIT = 5;

export const DEFAULT_CHANGELOG = [
    {
        "id": "log-1-15-09",
        "version": "v1.15.9",
        "date": "2026-10-11",
        "title": "Harmonisasi Tata Letak Responsif Header POS Kasir (Tablet & Mobile), Proteksi Anti-Gepeng & Menu Aksi Cepat Universal",
        "category": "feature",
        "badge": "Responsive POS Header & Multi-Device Parity v1.15.9",
        "items": [
            "Proteksi Anti-Gepeng Sisi Kiri (Nama Toko & Kasir): Menerapkan batas lebar minimum (min-w-[130px] sm:min-w-[160px] flex-1) pada wadah nama toko dan kasir aktif di header POS Storefront, menjamin teks identitas kasir tidak akan pernah terhimpit menjadi 0px atau tertabrak oleh tombol toolbar di segala ukuran layar (smartphone 360px, tablet 768px-1024px, laptop, dan monitor desktop).",
            "Harmonisasi Breakpoint Toolbar Sisi Kanan: Mengalihkan tombol aksesoris (Estimator Material F3, Printer Thermal F7, Panduan Kasir, jam detik, dan badge Online) ke breakpoint xl: (1280px ke atas) sehingga layar tablet dan perangkat berskala resolusi 125% tidak lagi mengalami desak-desakan atau tombol Keluar terpotong di tepi kanan.",
            "Universal Quick Action Menu Popover [⋮]: Memperluas ketersediaan tombol menu opsi cepat titik tiga [⋮] (#pos-mobile-menu-btn) untuk seluruh perangkat berlayar < 1280px (< xl). Semua alat bantu kasir (Estimator, Printer Thermal, Catat Kas Laci F11, Ringkasan Shift X-Report, Panduan, dan Logout) tetap dapat diakses dalam 1 sentuhan cepat.",
            "Tombol Keluar Kasir & Parkir Antrean Adaptif: Tombol keluar kasir beradaptasi menjadi tombol ikon ringkas pada tablet (md:) dan tombol penuh pada desktop (xl:), sementara tombol antrean parkir (0) mempertahankan ukuran kompak 32px di tablet untuk efisiensi ruang maksimal.",
            "Rangkaian Pengujian Baru (test:posheader): Menambahkan test suite otomatis scripts/test-pos-header-responsive.mjs dengan 28 kasus uji lolos 100%, serta 13 test suite audit sistem lulus sempurna.",
            "Multi-Channel Distribution v1.15.9 (Android versionCode 11509)."
        ]
    },
    {
        "id": "log-1-15-08",
        "version": "v1.15.8",
        "date": "2026-10-11",
        "title": "Pelepasan Listener Realtime Terpusat (Anti-Permission Error Saat Logout) & Penguatan Guard Sesi Kasir POS",
        "category": "feature",
        "badge": "Centralized Realtime Listener Cleanup & Auth Guard v1.15.8",
        "items": [
            "Pelepasan Listener Kolektif Sebelum SignOut (detachAllAdminListenersBeforeSignOut): Memastikan seluruh listener realtime Firestore (pos_shifts, riwayat transaksi POS, data sensitif privat toko cms_private, pesanan admin, pelanggan, dan ulasan) terlepas secara sinkron dan tuntas sebelum Firebase auth.signOut() dieksekusi saat logout admin, kickout sesi ganda, maupun sesi kadaluarsa.",
            "Resolusi Paripurna Permission-Denied POS Shift: Mengeliminasi error konsol [POS Shift] Snapshot listener cms_data error: FirebaseError: Missing or insufficient permissions pada pos-shift.js dengan proteksi pendeteksian kode permission-denied serta pemutusan listener otomatis tanpa mencemari log konsol browser.",
            "Guard Otentikasi Sesi Sebelum Attach Listener Cloud: Menjaga fungsi listenActiveShiftCloud, findActiveShiftInCloud, dan syncActiveShiftFromCloud agar tidak memicu query cloud tanpa sesi staf atau kredensial yang valid.",
            "Test Suite Terpadu (test:authguard): Menambahkan rangkaian pengujian otomatis 17 skenario pada test audit suite (100% Passed).",
            "Multi-Channel Distribution v1.15.8 (Android versionCode 11508)."
        ]
    },
    {
        "id": "log-1-15-07",
        "version": "v1.15.7",
        "date": "2026-10-11",
        "title": "Tombol Hapus Kartu Returan (RMA Engine) & Rollback Persediaan Otomatis",
        "category": "feature",
        "badge": "RMA Return Deletion & Inventory Rollback v1.15.7",
        "items": [
            "Tombol Hapus Retur Penjualan (Customer RMA): Menghadirkan tombol hapus permanen pada kartu retur mobile dan tabel desktop dengan dialog konfirmasi aman (danger mode). Saat data retur dihapus, penyesuaian stok fisik dan lot FIFO dibatalkan/dikembalikan otomatis, serta pengeluaran buku kas laci dibersihkan.",
            "Tombol Hapus Retur Supplier (Vendor RMA): Menghadirkan tombol hapus permanen pada kartu retur supplier dan tabel desktop. Saat dihapus, barang dikembalikan ke lokasi asal persediaan (Rak Toko, Gudang Cadangan, atau Karantina), serta potongan hutang PO supplier dikembalikan normal.",
            "Arsitektur Rollback Bersih & Presisi: Mengimplementasikan rollbackSalesReturnStock dan rollbackVendorReturnStock pada engine FIFO terpadu (fifo-inventory.js) dengan penanganan varian dan integritas data tanpa kompromi.",
            "Rangkaian Pengujian Menyeluruh: 55 skenario pengujian RMA lolos 100% dan seluruh 11 test suite sistem audit lolos 100%.",
            "Multi-Channel Distribution v1.15.7 (Android versionCode 11507)."
        ]
    },
    {
        "id": "log-1-15-06",
        "version": "v1.15.6",
        "date": "2026-10-11",
        "title": "Redesain Header POS Kasir Mobile (Clean Native Single-Row), Ruang Nama Toko & Kasir Lega, Serta Quick Action Menu [⋮]",
        "category": "feature",
        "badge": "Clean Mobile POS Header & Quick Action Menu v1.15.6",
        "items": [
            "Header POS Kasir Ramah Smartphone (HP): Merestrukturisasi tata letak header POS kasir layar ponsel pintar (360–390px) dengan wadah judul toko & kasir fleksibel (flex-1 min-w-0 mr-1.5), mengeliminasi masalah teks sempit terpotong menjadi 'P...' dan tumpang tindih. Nama toko dan nama kasir aktif kini tampil 100% utuh, tegak, lapang, dan estetis.",
            "Quick Action Menu Popover [⋮] (Titik Tiga): Menghadirkan menu aksi cepat modern berdesain 100% Solid & Crisp (tanpa blur) khusus layar ponsel (sm:hidden). Menu ini memuat akses lengkap berikon dan rapi untuk Kalkulator Estimator Material [F3], Pengaturan Printer Thermal [F7], Catat Kas Laci (Kas ±) [F11], Ringkasan Shift (X-Report), Buku Panduan Kasir POS, dan Tombol Keluar Kasir.",
            "Ergonomi & Optimasi Tombol Esensial Mobile: Tombol status shift dan antrean parkir [⌛] dioptimasi ringkas di ponsel (w-8 h-8 saat 0 antrean dan badge pill saat aktif), membebaskan ruang horizontal maksimal untuk judul etalase toko.",
            "Desktop Parity Terjaga Penuh: Seluruh tombol aksi horizontal di layar laptop/desktop (sm: ke atas) tetap dipertahankan lengkap tanpa gangguan.",
            "Multi-Channel Distribution v1.15.6 (Android versionCode 11506)."
        ]
    },
    {
        "id": "log-1-15-05",
        "version": "v1.15.5",
        "date": "2026-10-11",
        "title": "Audit Sistem Menyeluruh, Optimasi Code-Splitting Bundle Admin, Harmonisasi Desain Tema Dinamis & Penguatan Guard Input",
        "category": "feature",
        "badge": "System Audit & Code-Splitting Optimization v1.15.5",
        "items": [
            "Optimasi Kinerja Bundling & Code-Splitting (Vite 5): Melepaskan re-export statis delivery.js pada barrel admin sehingga Surat Jalan DO terisolasi bersih menjadi lazy chunk mandiri (45.89 kB), mengeliminasi warning Vite 100%, memangkas bundle awal module-admin sebesar 46.24 kB, dan mempercepat waktu build kompilasi hingga 49% (10.33 detik).",
            "Harmonisasi Tema Toko Dinamis (Zero-Hardcode Color): Menyelaraskan seluruh elemen Tab Keramik pada Kalkulator Estimator Bahan Bangunan (material-estimator.js) mengadopsi token tema toko var(--color-primary) dan kartu Bento gradien cyan/slate modern, mengeliminasi warna hardcoded indigo peninggalan lawas.",
            "Penguatan Guard Input Focus & Multi-Lingkungan: Melengkapi active element guard pada sinkronisasi diskon kasir POS (.pos-disc-val-input) dengan pemeriksaan typeof document === 'undefined' untuk keandalan eksekusi lintas lingkungan (Browser & Node.js test runner).",
            "Audit Kesehatan Sistem & Verifikasi Test Suite 100% Passed: Seluruh 303 kasus uji unit (UOM, Flash Sale, Member VIP, Retur RMA, Delivery DO, Dual-Location Stock, FIFO, Estimator, Barcode Code 128, Lisensi SaaS, dan 78 Modal Sistem) terverifikasi 100% lulus tanpa kegagalan.",
            "Multi-Channel Distribution v1.15.5 (Android versionCode 11505)."
        ]
    }
];

/**
 * Mengurai string versi (misal 'v1.8.5' atau '1.8.5') menjadi tuple [major, minor, patch]
 * @param {String} vStr 
 * @returns {Array<number>}
 */
export const parseSemver = (vStr) => {
    if (!vStr) return [0, 0, 0];
    const match = String(vStr).match(/(\d+)\.(\d+)\.(\d+)/);
    if (!match) return [0, 0, 0];
    return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
};

/**
 * Pembanding semver descending untuk sort (versi lebih tinggi di depan)
 * @param {String} vA 
 * @param {String} vB 
 * @returns {number}
 */
export const compareSemverDesc = (vA, vB) => {
    const [majA, minA, patA] = parseSemver(vA);
    const [majB, minB, patB] = parseSemver(vB);
    if (majB !== majA) return majB - majA;
    if (minB !== minA) return minB - minA;
    return patB - patA;
};

/**
 * Menggabungkan changelog bawaan dengan changelog kustom dari Firestore
 * @param {Object} appData 
 * @param {number|null} maxLimit Batas maksimal log yang dikembalikan (default: 5)
 * @returns {Array} Daftar log terurut dari versi terbaru
 */
export const getCombinedChangelog = (appData, maxLimit = MAX_CHANGELOG_LIMIT) => {
    const dynamicLogs = (appData && Array.isArray(appData.changelog)) ? appData.changelog : [];
    const deletedIds = new Set((appData && Array.isArray(appData.deletedChangelogIds)) ? appData.deletedChangelogIds : []);
    
    // Gabungkan dinamis di atas, bawaan di bawah, cegah duplikat id & saring log yang telah dihapus
    const dynamicIds = new Set(dynamicLogs.map(l => l.id || l.version));
    const staticFiltered = DEFAULT_CHANGELOG.filter(l => 
        !dynamicIds.has(l.id) && 
        !dynamicIds.has(l.version) && 
        !deletedIds.has(l.id) && 
        !deletedIds.has(l.version)
    );
    
    const activeDynamicLogs = dynamicLogs.filter(l => 
        !deletedIds.has(l.id) && 
        !deletedIds.has(l.version)
    );
    
    const combined = [...activeDynamicLogs, ...staticFiltered];
    
    // Urutkan berdasarkan tanggal (terbaru di atas).
    // Jika tanggal sama, urutkan berdasarkan semver versi (versi lebih tinggi selalu di atas).
    const sorted = combined.sort((a, b) => {
        const da = new Date(a.date || '2026-01-01').getTime();
        const db = new Date(b.date || '2026-01-01').getTime();
        if (db !== da) return db - da;
        return compareSemverDesc(a.version, b.version);
    });

    // Batasi maksimum log (default: 5 rilis terbaru) untuk mencegah spam di UI
    return (typeof maxLimit === 'number' && maxLimit > 0) ? sorted.slice(0, maxLimit) : sorted;
};

/**
 * Mendapatkan nomor versi terbaru yang aktif
 * Menjamin tidak pernah tertahan pada versi lama meskipun ada log dinamis atau tanggal kembar
 * @param {Object} appData 
 * @returns {String} Contoh: 'v1.10.91'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.12.2';
    const logs = getCombinedChangelog(appData, null);
    if (!logs || logs.length === 0) return defaultLatest;
    
    // Cari versi tertinggi secara semver di antara seluruh log aktif
    let highest = logs[0].version || defaultLatest;
    for (const log of logs) {
        if (log.version && compareSemverDesc(log.version, highest) < 0) {
            highest = log.version;
        }
    }
    
    // Pastikan versi yang tampil minimal setara dengan rilis bawaan terbaru
    if (compareSemverDesc(defaultLatest, highest) < 0) {
        highest = defaultLatest;
    }
    return highest;
};

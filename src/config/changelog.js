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
        "id": "log-1-16-02",
        "version": "v1.16.2",
        "date": "2026-10-12",
        "title": "Resolusi Hierarki Z-Index Modal Estimator, Penayangan Layar Detail Produk & Drawer Varian Cepat On-Top",
        "category": "feature",
        "badge": "Estimator Variant Stacking & Modal Z-Index Precision v1.16.2",
        "items": [
            "Harmonisasi Z-Index Multi-Layer Modal: Meningkatkan z-index product-modal dari z-[70] menjadi z-[120] dan quick-variant-modal (Drawer Pilih Varian Cepat) dari z-[75] menjadi z-[125], menjamin keduanya selalu tampil di depan (on-top) Kalkulator Estimator Bahan Bangunan (z-[115]) tanpa terjebak di belakang layar estimator.",
            "Eliminasi Layar Detail Terjebak & Tombol Tertutup: Memperbaiki kendala di mana kartu produk varian (seperti No Drop) dan tombol navigasi panah (< dan >) mengintip di balik kalkulator estimator, kini modal detail produk dan drawer varian muncul secara utuh, bersih, dan interaktif di layar smartphone maupun desktop.",
            "Pembersihan Sub-Modal Yatim (Orphan Modal Cleanup): Menambahkan proteksi otomatis pada closeMaterialEstimatorModal untuk membersihkan quick-variant-modal jika masih terbuka saat estimator ditutup, mencegah modal yatim menggantung di layar.",
            "Prioritisasi LIFO Fallback Scan di Router: Memperbarui urutan allKnownModals pada router.js sehingga modal tingkat atas (variantPreview, quickVariant, product) selalu ditutup terlebih dahulu sebelum modal induknya (materialEstimator), menjamin sinkronisasi tombol Back Android 100% mulus.",
            "Rangkaian Pengujian Baru (test:estimatorzindex): Menambahkan unit test otomatis scripts/test-estimator-variant-zindex.mjs (15 Passed, 0 Failed) serta memverifikasi 16 suite pengujian audit sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.2 (Android versionCode 11602)."
        ]
    },
    {
        "id": "log-1-16-01",
        "version": "v1.16.1",
        "date": "2026-10-11",
        "title": "Integrasi Dinamis Produk Rekomendasi Kalkulator Estimator Bahan Bangunan & Multi-Channel Keranjang",
        "category": "feature",
        "badge": "Material Estimator Dynamic Cart & Channel Routing v1.16.1",
        "items": [
            "Integrasi Tambah ke Keranjang Universal (Add to Cart): Menghubungkan tombol aksi (+) pada kartu produk rekomendasi Kalkulator Estimator Material secara langsung ke keranjang belanja web (quickAddOrOpenProduct) dan deteksi modal varian produk otomatis.",
            "Deteksi Kanal Otomatis (Storefront Web vs Kasir POS): Sistem mendeteksi secara cerdas kanal aktif saat estimator dibuka. Tombol (+) langsung memasukkan produk rekomendasi ke kasir POS jika dibuka dari layar kasir, dan ke keranjang belanja web jika dibuka dari etalase pelanggan.",
            "Pencocokan Kata Kunci Kontekstual Dinamis 100%: Menghubungkan rekomendasi produk ke database inventori toko riil (appData.products) berbasis kata kunci bahan untuk Cat, Keramik, Pasangan Bata/Hebel, dan Atap/Seng.",
            "Tampilan Edukatif & Modal Spesifikasi Produk: Kartu produk rekomendasi kini interaktif dapat diklik untuk membuka foto rincian dan spesifikasi produk (openProductModal), serta dilengkapi panduan edukatif jika kategori produk belum diinput di inventori toko.",
            "Rangkaian Pengujian Otomatis (test:estimator): Menambahkan Bagian 6 Uji Rekomendasi Produk Dinamis & Tambah ke Keranjang (44 Passed) dan 15 suite pengujian audit sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.1 (Android versionCode 11601)."
        ]
    },
    {
        "id": "log-1-16-00",
        "version": "v1.16.0",
        "date": "2026-10-11",
        "title": "Ekspor Spreadsheet Excel/CSV, Grafik Tren Finansial 12 Bulan (Native SVG), Analitika Kategori & Cetak A4 Multi-Tab",
        "category": "feature",
        "badge": "Enterprise Financial Analytics & Spreadsheet Export v1.16.0",
        "items": [
            "Mesin Ekspor Spreadsheet Excel / CSV Terpadu (RFC 4180): Menghadirkan tombol aksi Ekspor Excel dengan menu dropdown cerdas untuk mengunduh berkas .csv ber-UTF-8 BOM (langsung terbuka rapi di Microsoft Excel, Google Sheets, dan LibreOffice tanpa teks berantakan) mencakup Laporan Penjualan Detail, Laporan Laba Rugi (P&L), Valuasi Stok Inventori Gudang, Buku Kas Beban Usaha, dan Rekap Utang Piutang (AP/AR).",
            "Visualisasi Grafik Tren Kinerja Finansial 12 Bulan (Native Responsive SVG): Menghadirkan grafik batang komparasi performa finansial tahunan (Omzet Penjualan dengan warna tema dinamis toko, Laba Kotor warna emerald, dan Beban Usaha warna amber) dengan skala Y dinamis, label bulan, interaksi klik filter bulan, serta tooltip melayang yang menyajikan data rincian finansial per bulan.",
            "Analitika Profitabilitas & Kontribusi Omset Per Kategori Material: Menyajikan analitika tingkat lanjut pada Tab Penjualan yang mengelompokkan omset, modal HPP, laba kotor, margin %, dan progress bar persentase kontribusi per kategori material (Bahan Bangunan, Cat, Pipa, dll) dengan tampilan kartu responsif di smartphone dan tabel analitis di desktop.",
            "Penerbitan Dokumen Lembar Resmi A4 untuk Seluruh Tab Laporan: Mengintegrasikan generator lembar resmi A4 standar Toko Putri (Kop Surat Resmi, logo toko, nomor dokumen resmi, rincian KPI, tanda tangan ganda pelaksana & pemilik toko, dan running footer) untuk Tab Valuasi Stok Gudang (DOC-STK), Analitika Penjualan (DOC-SALES), Rekap Utang Piutang (DOC-APAR), dan Rekapitulasi Beban Toko (DOC-EXP).",
            "Test Suite Terpadu (test:reports): Menambahkan rangkaian pengujian otomatis 22 skenario pengujian kalkulasi finansial, RFC 4180 CSV, agregasi kategori, dan dokumen A4 (100% Passed).",
            "Multi-Channel Distribution v1.16.0 (Android versionCode 11600)."
        ]
    },
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.10.91';
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

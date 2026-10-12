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
        "id": "log-1-16-04",
        "version": "v1.16.4",
        "date": "2026-10-12",
        "title": "Unifikasi Presisi Grid Kontainer Universal (1440px), Eliminasi Double-Padding Header, Banner Hero Adaptif & Harmonisasi Multi-Device",
        "category": "feature",
        "badge": "Universal 1440px Grid Alignment & Layout Precision v1.16.4",
        "items": [
            "Unifikasi Standar Grid Universal Seluruh Halaman (max-w-7xl 2xl:max-w-[1440px] px-3 sm:px-6 lg:px-8): Menyeragamkan lebar kontainer secara presisi di seluruh view web dan aplikasi (Katalog Storefront, Keranjang Belanja, Pengiriman, Pembayaran, Riwayat Pesanan, Favorit, Tanya Jawab FAQ, POS Kasir, Admin Backoffice, dan Footer Bento Hub) agar tampilan konsisten, simetris, dan lapang di Desktop, Tablet, dan Mobile.",
            "Eliminasi Padding Ganda di Seluruh Header (.glass-header): Membuang padding horizontal ganda luar sehingga tombol kembali, logo, dan judul header 100% tegak lurus sejajar satu garis vertikal dengan kartu di bawahnya tanpa offset atau pergeseran.",
            "Banner Hero Responsif & Proporsional Penuh: Banner hero storefront menggunakan w-full snap-start shrink-0 dengan rasio proporsional bebas terpotong di HP, tablet, maupun monitor desktop lebar.",
            "Harmonisasi Pengalaman Pengguna (UI/UX) Multi-Device: Memastikan seluruh elemen navigasi, bottom navigation bar mobile, stepper transaksi belanja, dan layout formulir tampil rapi, responsif, dan ergonomis di seluruh jenis perangkat.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.4 (Android versionCode 11604)."
        ]
    },
    {
        "id": "log-1-16-03",
        "version": "v1.16.3",
        "date": "2026-10-12",
        "title": "Harmonisasi Responsif Kartu Rekomendasi Estimator, Dukungan Multi-Varian Kasir POS, Perluasan Sinonim Material & Proteksi Matematis Input",
        "category": "feature",
        "badge": "Estimator Variant Routing & Mobile Ergonomics v1.16.3",
        "items": [
            "Harmonisasi Tata Letak Responsif Kartu Rekomendasi (Anti-Gepeng HP): Mengadopsi tata letak adaptif 1-kolom di smartphone dan 2-kolom di tablet/desktop (grid-cols-1 sm:grid-cols-2), memastikan thumbnail, badge varian, judul produk, harga, dan tombol aksi (+) memiliki ruang lega tanpa teks terhimpit di layar sempit.",
            "Dukungan Multi-Varian & Routing Pintar Kasir POS: Klik pada kartu produk atau tombol (+) produk bervarian dari dalam kalkulator estimator kasir POS otomatis membuka Drawer Varian Cepat (openPOSVariantSheet), memungkinkan kasir memilih ukuran atau warna produk secara presisi sebelum masuk ke keranjang belanja.",
            "Badge Multi-Varian & Rentang Harga Transparan: Menampilkan badge chip 'Varian' dan rentang harga otomatis (cth: Rp 65.000 - Rp 1.100.000) pada produk dengan beragam ukuran/kemasan sehingga staf dan pelanggan mendapatkan informasi harga yang jelas dan transparan.",
            "Perluasan Kosakata & Sinonim Material Bangunan Lokal: Memperkaya filter pencarian rekomendasi dengan kata kunci praktis toko material (plamur, cat tembok, bak cat, kuas rol, semen nat, tile grout, perekat keramik, bata merah, semen instan, acian, baut roofing SDS, genteng metal, talang, dll).",
            "Proteksi Matematis Input Zero-Safe (Anti-NaN): Menerapkan guard zero-safe pada seluruh formula kalkulasi (Cat, Keramik, Bata/Hebel, dan Atap), menjamin input kosong, tanda minus, atau karakter tak terduga tidak pernah menghasilkan nilai NaN atau kartu kalkulasi rusak.",
            "Peningkatan Test Suite (test:estimator): Menambah pengujian komprehensif pada scripts/test-material-estimator-and-decimal.mjs (59 Passed, 0 Failed) serta memverifikasi seluruh 16 test suite audit sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.3 (Android versionCode 11603)."
        ]
    },
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

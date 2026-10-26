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
        "id": "log-1-20-0",
        "version": "v1.20.0",
        "date": "2026-10-24",
        "title": "Industrial Neo-Brutalism & Full Native App Experience untuk Ekosistem Perkakas & Toko Bahan Bangunan",
        "category": "feature",
        "badge": "Industrial Neo-Brutalism & Full Native App Engine v1.20.0",
        "items": [
            "Industrial Neo-Brutalism & Full Native App Engine (v1.20.0): Penyelarasan identitas visual toko perkakas teknik & bahan bangunan (heavy-duty, kokoh, tahan banting, presisi) dengan 2px solid charcoal outlines, zero-blur hard offset shadows (2.5px), dan aksen safety K3 (kuning peringatan, oranye industri, hijau SNI).",
            "Sensasi Tekan Taktil Saklar Mekanikal (Mechanical Switch Feedback): Mengintegrasikan respon tekan instan (active: translate(2px, 2px)) pada tombol aksi utama, tuts kasir, dan kartu produk, memberikan rasa klik fisik seperti saklar mesin perkakas asli di layar sentuh smartphone.",
            "Integrasi Storefront & Etalase Pelanggan: Menghadirkan aksen pita proyek (hazard caution stripes) pada hero banner & promo kilat, kartu produk bento modular bergaris tebal 2px (.neo-card), serta stiker label rak gudang (.neo-badge) untuk varian, grosir, dan satuan barang.",
            "Penyempurnaan Layar POS Kasir & Transaksi Cepat: Tombol tipe pelanggan (Umum, Member, Tempo), tuts nominal pecahan cepat (Rp 10rb s.d. Uang Pas), kotak status kembalian (.neo-box), dan tombol proses transaksi F4 (.neo-btn) tampil tebal, kontras tinggi, dan nyaman dioperasikan satu jempol.",
            "Harmonisasi Menyeluruh CMS Owner & Dashboard: Menjamin seluruh kartu KPI Arus Kas, Welcome Banner Owner, kartu menu navigasi, dan tombol aksi header CMS mengadopsi 2px solid border, 2.5px hard shadow, dan sensasi tekan mekanikal tanpa tertimpa CSS spesifisitas lama.",
            "Integrasi Etalase & Chiclet Kategori/Brand: Menghadirkan aksen neo-brutalisme penuh pada chiclet kategori interaktif (#dynamic-categories-container), kartu brand terpercaya (#dynamic-brands-container), grid brand modal (#modal-brand-grid), tombol 'Lihat Semua', serta kartu aksi WhatsApp & unduh APK pada footer toko.",
            "Unit Stepper Kuantitas Terpadu & Varian Produk: Mengintegrasikan kontrol jumlah beli (#modal-qty-input) ke dalam blok mekanikal terpadu bebas anomali kotak terisolasi, serta standardisasi tombol varian produk dan swatch warna cat beraksen neo-brutalist tegas.",
            "Harmonisasi Modal Kalkulator Estimasi Bahan Bangunan & SOP Ekosistem: Menyelaraskan seluruh tab kategori, kartu hasil estimasi, tombol aksi Salin/WA, serta kartu-kartu panduan SOP ke standar border 2px solid dan hard shadow.",
            "Isolasi Keamanan Cetak Thermal & Dokumen A4 Resmi: Penjaminan mutlak bahwa hard shadow CSS diisolasi penuh (@media print) sehingga cetakan kertas struk thermal kasir dan PDF A4 tetap 100% putih bersih, pekat, dan hemat ribbon/kertas.",
            "Harmonisasi Produk Sejenis & Alternatif Pilihan (#product-modal-related-container) serta Modal Kategori (#category-modal): Menyelaraskan seluruh kartu rekomendasi produk dan daftar tombol kategori satu layar penuh ke standar outline 2px solid charcoal, hard shadow 2.5px, dan mekanikal switch taktil.",
            "Penyempurnaan Arsitektur Frame & Tata Letak Lapang (Zero Double-Boxing & Unboxed Text): Mengeliminasi total bingkai bertumpuk (kotak di dalam kotak) pada kontainer banner, kategori, dan brand etalase; membebaskan teks deskripsi produk dari kurungan garis kaku; serta menata kelapangan kartu metrik arus kas CMS Owner dengan link navigasi terpadu bebas tumpang-tindih border.",
            "Suite Unit Test test-industrial-neo-brutalism.mjs (42 pengujian arsitektural) 100% Passed dan terintegrasi otomatis ke pipeline audit kesehatan sistem.",
            "Multi-Channel Distribution v1.20.0 (Android versionCode 12000 & Windows x64)."
        ]
    },
    {
        "id": "log-1-19-7",
        "version": "v1.19.7",
        "date": "2026-10-21",
        "title": "Native App Harmony, Pratinjau Dokumen Presensi A4 & Eliminasi Warna Jomplang",
        "category": "feature",
        "badge": "Native App Harmony, Attendance Doc Preview & Zero Disparity v1.19.7",
        "items": [
            "Pratinjau Dokumen A4 Rekapitulasi Presensi Resmi (#doc-preview-modal): Mengintegrasikan dokumen rekap presensi tim bulanan ke dalam engine pratinjau A4 standar (openDocPreview) lengkap dengan kop surat resmi toko, 4 kartu ringkasan KPI eksekutif, tabel matriks kehadiran multi-halaman, tanda tangan pengesahan HR & Pemilik Toko, serta opsi cetak printer, ekspor gambar HD, dan simpan PDF A4.",
            "Redesain Native App Bento Modal Presensi Tim (#modal-attendance-rekap): Menata ulang 4 kartu KPI menjadi bento kompak (p-2 sm:p-2.5) dan mengintegrasikan selector periode bulan ke bilah header kanan sejajar tombol tutup, menghemat ~90px ruang vertikal sehingga tabel kehadiran staf langsung tampil lapang di layar smartphone.",
            "Harmonisasi Tema Toko & Eliminasi Header Tabel Pelangi: Menghilangkan pewarnaan teks pelangi acak pada header tabel (hijau, kuning, biru, ungu, pink) dan angka KPI, menggantinya dengan tipografi kontras tinggi slate korporat profesional dan wadah ikon beraksen tema toko var(--color-primary) selaras 100% dengan ekosistem bisnis hulu ke hilir Toko Putri.",
            "Eliminasi Pemotongan Placeholder Search Bar: Mengoptimalkan teks kolom isian pencarian di modal rekap presensi menjadi 'Cari nama / jabatan...' dengan padding proporsional pl-8 pr-2.5 anti-terpotong di mobile 360px.",
            "Hero Banner Line-Clamp-2 & Section Header Zero-Crushing: Proteksi flex-shrink: 0 !important dan white-space: nowrap !important pada tombol 'Lihat Semua' serta judul pemasaran multiline bebas terpotong elipsis di storefront.",
            "Multi-Channel Distribution v1.19.7 (Android versionCode 11907 & Windows x64)."
        ]
    },
    {
        "id": "log-1-19-6",
        "version": "v1.19.6",
        "date": "2026-10-21",
        "title": "Universal Native App Visual Harmony, Proportional Input & Button Consistency, dan Bottom Sheet Modal Precision",
        "category": "feature",
        "badge": "Universal Native App Visual Harmony & Proportional Engine v1.19.6",
        "items": [
            "Universal Native App Visual Harmony Engine (v1.19.6): Membangun arsitektur visual responsif terpadu di style.css dengan pembatasan hover frame desktop-only (@media (hover: hover) and (pointer: fine)), mengeliminasi efek hover lengket/stuck pada layar sentuh smartphone.",
            "Standardisasi Proporsional Input & Tombol: Menegakkan touch target minimum 44px (min-height: 2.75rem), squircle radius 14px (0.875rem), font 16px mobile anti-auto-zoom di iOS/Android, dan tactile active feedback scale(0.965) seragam pada seluruh tombol dan formulir.",
            "Penyelarasan Presisi Modal Bayar Kasir POS (#pos-pay-modal): Menjadikan modal bayar kasir sebagai native bottom sheet squircle rounded-t-[2rem] sm:rounded-3xl dengan pull-indicator, memindahkan kotak kembalian (#pos-change-box) tepat di bawah kolom input nominal untuk umpan balik instan kasir, memperkuat kontras teks input nominal, dan mengeliminasi tombol nominal cepat Rp 500.000 terpotong footer.",
            "Perapian Modal Cetak Label Barcode (#modal-product-barcode-label): Menjamin badge SKU produk anti-wrap pada karakter strip (-) dengan white-space: nowrap !important, memperbaiki pembatasan baris nama varian (line-clamp), menata stepper jumlah cetak responsif pada kartu item, dan merapikan label tombol aksi responsif.",
            "Harmonisasi Modal Rekapitulasi Presensi Tim (#modal-attendance-rekap): Mengeliminasi pemotongan judul header modal ('Reka...' dan 'PUTRI UT...') dengan menyediakan bilah pemilih periode bulan adaptif, mengganti tipografi serif Courier New pada kartu 'Hak Uang Makan' ke modern sans-serif Archivo/Barlow, membersihkan duplikasi bullet titik karyawan, dan merestrukturisasi tombol footer menjadi satu baris horizontal proporsional.",
            "Universal 100% Solid Flat Clean: Menjaga konsistensi estetika solid minimalis tanpa gradasi, tanpa backdrop-filter blur kaca, dan hairline border bersih di Light & Dark Mode.",
            "Multi-Channel Distribution v1.19.6 (Android versionCode 11906 & Windows x64)."
        ]
    },
    {
        "id": "log-1-19-5",
        "version": "v1.19.5",
        "date": "2026-10-20",
        "title": "Paket Aplikasi Windows Desktop (.exe), Mesin Cetak Thermal High-Density Deep Black & Dokumen A4 High-Contrast",
        "category": "feature",
        "badge": "Windows Desktop Installer .exe & High-Density Thermal Print Engine v1.19.5",
        "items": [
            "Aplikasi Mandiri Windows Desktop (.exe): Resmi merilis paket installer mandiri Windows NSIS ('Toko Putri Setup 1.19.5.exe') dan versi Portable ('Toko Putri 1.19.5.exe') bertenaga Electron dengan Single-Instance Lock, performa 60 FPS offline-first, dan bebas gangguan address bar browser.",
            "Mesin Cetak Thermal High-Density Deep Black: Mengganti font struk ke Consolas dengan penegakan font-weight 700 (teks biasa) dan font-weight 900 (judul toko & baris TOTAL) serta aksen text-stroke dan penonaktifan anti-aliasing abu-abu, menghasilkan cetakan struk kasir yang hitam pekat, tebal, dan anti-pudar.",
            "Kalibrasi Presisi Lebar Kertas Thermal (48mm / 72mm): Memperbarui printable width 58mm menjadi 48mm dan 80mm menjadi 72mm dengan padding simetris rata tengah, mengeliminasi margin kosong sebelah kanan secara tuntas.",
            "Peningkatan Kontras & Ketebalan Dokumen A4: Mengunci seluruh teks, border tabel, dan angka rupiah invoice, faktur, surat jalan, dan slip gaji ke solid black (#000000) berbobot tebal, menjamin cetakan dokumen kantor/toko tajam dan bebas dithering buram.",
            "Penajaman Kontras Dark Mode Kasir POS (WCAG AA/AAA): Mengoptimalkan total tagihan modal bayar, subtotal baris keranjang kasir, badge varian katalog, dan prefix diskon Rp ke warna Rose-300 cerah kontras tinggi.",
            "Penyelarasan Base Path Relatif (./) di Vite: Menjamin seluruh modul dan aset aplikasi dapat dibuka secara offline langsung dari sistem file komputer tanpa memerlukan web server lokal.",
            "Multi-Channel Distribution v1.19.5 (Android versionCode 11905 & Windows x64)."
        ]
    },
    {
        "id": "log-1-19-4",
        "version": "v1.19.4",
        "date": "2026-10-20",
        "title": "Persistensi Pustaka Database Bersama (Anti-Hilang saat Reload), Batch Import 'Salin Semua ke Toko' & Pemulihan Tampilan POS Kasir Multi-Device (Tablet & Desktop Split Screen)",
        "category": "feature",
        "badge": "Master Presets Persistence, Bulk Import All & Multi-Device POS Harmony v1.19.4",
        "items": [
            "Penyimpanan Permanen Master Presets ke Cloud Firestore Sub-Koleksi: Mengintegrasikan penulisan langsung setiap produk yang disalin dari Database Bersama ke sub-koleksi Firestore freshmart/cms_data/products/{id}, pendaftaran otomatis ke susunan produk productOrder, dan pembaruan seketika cache lokal freshmart_products, mengeliminasi produk hilang setelah reload secara permanen.",
            "Fitur Baru '⚡ Salin Semua ke Toko' (Batch Import All): Menyediakan tombol aksi cepat di toolbar Database Bersama dan kartu interaktif 'Tersedia utk Diimpor' untuk menyalin seluruh template produk, varian, dan spesifikasi sekaligus ke etalase & kasir POS dengan opsi penentuan stok awal massal.",
            "Batch Write Firestore Berkinerja Tinggi: Eksekusi impor massal diproses menggunakan db.batch() dalam batas aman Firestore (maks 450 dokumen per commit), mendaftarkan kategori & brand baru otomatis, dan menyiarkan sinyal sinkronisasi realtime product_bulk ke seluruh perangkat.",
            "Proteksi Ganda saveApp di storage.js: Memfilter key 'products' dari dokumen utama cms_data agar terhindar dari pembengkakan batas dokumen 1MB Firestore dan menyediakan mekanisme batch sync otomatis untuk updatedProductIds.",
            "Pemulihan Antarmuka POS Kasir Split-Screen di Tablet & Desktop: Menghidupkan kembali tata letak split screen kasir (katalog produk di kiri 58-65% dan panel keranjang & billing kasir di kanan 35-42%) melalui Responsive Display Engine di style.css, mengeliminasi konflik .hidden !important yang sebelumnya menimpa utilitas flex tablet/desktop.",
            "Harmonisasi Header Terminal Kasir Multi-Device: Menyesuaikan kontrol tombol kasir (Live Clock WIB, Tema Gelap/Terang, Estimator Material F3, Pengaturan Printer Thermal F7, Panduan POS, Status Jaringan Online, dan Tombol Keluar) agar tampil proporsional langsung di header tablet & desktop, menyembunyikan tombol mobile titik tiga [⋮] pada layar >= md, serta mempertahankan 100% kebersihan antarmuka Native App di smartphone.",
            "Universal Dark-Mode Contrast Engine (WCAG AA/AAA): Menajamkan seluruh elemen teks bertema toko di Dark Mode (harga jual produk POS, total akhir keranjang, tombol 'Lihat Semua' kategori/brand, tombol 'Laporan P&L', link 'Analisis', dan tombol Scan F9) ke aksen Rose-300/400 kontras tinggi, mengeliminasi teks gelap/tenggelam secara tuntas.",
            "Stabilisasi Jaringan Cloud Firestore (Anti-ERR_QUIC_PROTOCOL_ERROR): Mengunci komunikasi data Firestore WebChannel ke standard HTTPS TCP Port 443 via experimentalForceLongPolling, mengeliminasi pemutusan sesi UDP/QUIC dan HTTP 400 Bad Request pada jaringan internet ISP/WiFi lokal sehingga sinkronisasi kasir berjalan 100% hening dan stabil.",
            "Suite Unit Test test-master-presets-persistence.mjs, test-master-product-presets.mjs & test-pos-header-responsive.mjs (87 pengujian) 100% Passed.",
            "Multi-Channel Distribution v1.19.4 (Android versionCode 11904)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.20.0';
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

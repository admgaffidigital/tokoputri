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
        "id": "log-1-19-7",
        "version": "v1.19.7",
        "date": "2026-10-21",
        "title": "Storefront Zero-Truncation, Hero Banner Line-Clamp-2 & Section Header Zero-Crushing Engine",
        "category": "feature",
        "badge": "Native App Zero-Truncation & Proportional Consistency v1.19.7",
        "items": [
            "Eliminasi Pemotongan Placeholder Search Presensi Tim: Mengoptimalkan teks pencarian di modal rekap presensi tim menjadi 'Cari nama / jabatan...' dengan padding ikon responsif pl-8 pr-2.5, sehingga placeholder tampil utuh 100% tanpa terpotong di layar HP 360px.",
            "Hero Banner & Promo Banner Multi-Line (line-clamp-2): Mengubah batasan baris judul spanduk utama dari line-clamp-1 menjadi line-clamp-2 dengan ukuran teks responsif text-sm sm:text-lg md:text-2xl lg:text-3xl font-black, mengeliminasi teks terpotong menjadi 'PELANGGAN TOKO...' dan membiarkan teks melipat secara alami dua baris.",
            "Section Header Zero-Crushing (Kategori, Brand & Reward): Menerapkan proteksi flex-shrink: 0 !important dan white-space: nowrap !important pada tombol 'Lihat Semua', serta menyematkan judul adaptif 'BRAND RESMI' pada mobile dan 'BRAND RESMI & PRODUSEN TERPERCAYA' pada tablet/desktop agar bebas benturan dan tidak terpotong menjadi 'BRAND RESMI & PRO...' dan 'LIHAT...'.",
            "Universal Native App Visual Harmony & Ergonomics: Menjaga keselarasan seluruh elemen native app, touch target 44px, frame hover desktop-only, dan 0% horizontal overflow di seluruh resolusi.",
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
    },
    {
        "id": "log-1-19-3",
        "version": "v1.19.3",
        "date": "2026-10-20",
        "title": "Universal Harmony Engine: Penyelarasan Border Radius Tombol, Badge Anti-Wrap & Anti-Bloat, dan Konsistensi Wadah Ikon (Icon Pods)",
        "category": "optimization",
        "badge": "Universal UI Harmony & Consistency Engine v1.19.3",
        "items": [
            "Universal Badge Anti-Wrap & Anti-Bloat Engine: Menstandarkan seluruh badge status dan info pill di seluruh aplikasi (Pesanan, Supplier, Kulakan PO, Retur, dan Tempo) dengan white-space: nowrap !important, line-height: 1.15, max-height 26px, dan letter-spacing proporsional, mengeliminasi teks bertumpuk atau mekar menggembung secara tuntas.",
            "Hierarki Border Radius Tombol Selaras: Mengunci seluruh tombol aksi ke sistem squircle terstandar: Tombol Utama/CTA/Submit (1rem / 16px), Tombol Sekunder/Filter Chiclet/Tab (0.75rem / 12px), Tombol Aksi Kompak (0.75rem / 12px), dan Micro Action/Drag Handle (0.5rem / 8px).",
            "Standarisasi Wadah Ikon (Icon Pods): Menyelaraskan border radius seluruh wadah ikon berdasarkan dimensi (Large 56-64px ke 16px squircle, Medium 40-48px ke 14px, Compact/Stat 32-36px ke 12px, dan Small 24-28px ke 8px) dengan proteksi aspect-ratio 1:1 anti-gepeng.",
            "Penyelarasan Proporsional Tombol Sinkronasi (Segarkan) & Widget Arus Kas: Menetralkan aspect-ratio paksaan pada tombol yang memiliki teks responsif (w-auto / aspect-auto) dan mengunci ukuran tombol header CMS (#btn-admin-refresh) di mobile ke 32x32px (1:1 squircle) serasi sempurna dengan tombol theme toggle dan tombol aksi lainnya, serta menyelaraskan ikon Segarkan arus kas dengan fa-arrows-rotate text-xs terpusat anti-gepeng.",
            "Restrukturisasi Header POS Kasir Native Mobile App: Mengeliminasi kebocoran elemen desktop (Live Clock WIB, Badge Online, USB Scanner Aktif) pada layar HP (<xl) dengan proteksi display: none !important mutlak di CSS, menghadirkan tampilan header POS kasir yang 100% Native Mobile App: lapang, nama toko & kasir tampil utuh tanpa terpotong, serta tombol menu opsi kasir [ ⋮ ] dan antrean parkir tampil proporsional di sisi kanan.",
            "Pemulihan Presisi Antarmuka POS Kasir: Mengembalikan placeholder asli kasir 'Cari nama, SKU, barcode... [F2]' lengkap dengan shortcut, teks tombol scan kamera 'Scan (F9)' pada tablet/desktop, dan menetralkan aspect-ratio tombol parkir antrean serta stepper kuantitas keranjang sehingga antarmuka POS kasir kembali 100% identik dengan aslinya.",
            "Eliminasi Total White-on-White Icon Pods Pengaturan Toko: Memperbaiki selector penentralan gradient di style.css yang sebelumnya secara tidak sengaja menimpa wadah icon pod bertema toko menjadi latar abu-abu pudar (#f8fafc) di Light Mode, serta mengunci seluruh wadah ikon kartu Pengaturan Toko (Profil, Katalog, Pengiriman, Pembayaran, Sistem, Operasional, Printer, Backup) ke solid background-color: var(--color-primary) dengan ikon putih kontras tinggi yang tajam dan jelas.",
            "Suite Unit Test Baru test-button-badge-icon-harmony.mjs (42 pengujian) dan test-pos-header-responsive.mjs (28 pengujian) 100% Passed dan terintegrasi otomatis ke audit kesehatan sistem.",
            "Multi-Channel Distribution v1.19.3 (Android versionCode 11903)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.19.7';
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

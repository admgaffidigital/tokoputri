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
        "id": "log-1-17-08",
        "version": "v1.17.8",
        "date": "2026-10-15",
        "title": "Resolusi Komprehensif Tombol Kembali & Tutup Modal, Navigasi Deterministik Seketika & Stabilitas Keyboard Native Android",
        "category": "feature",
        "badge": "Navigasi Deterministik & Keyboard Native v1.17.8",
        "items": [
            "Navigasi Kembali In-App Deterministik Seketika (1-Klik Pasti Kembali): Mengeliminasi tombol kembali yang macet di web dan aplikasi Android dengan mengganti ketergantungan rapuh window.history.back() pada tombol in-app header (Keranjang, Checkout, Pembayaran, Pesanan, Favorit, FAQ, dan Admin Login) menjadi navigasi deterministik terstruktur changeView(targetView, true) seketika pada sentuhan pertama.",
            "Resolusi Konflik Double-Resize Keyboard Android (Native Window Resizing): Mengubah konfigurasi plugin Keyboard Capacitor dari 'resize: body' menjadi 'resize: native'. Eliminasi JavaScript layout thrashing pada document.body menuntaskan 100% masalah virtual keyboard Android (Gboard, Samsung Keyboard, Xiaomi) yang membuka-menutup sendiri (mental) saat pertama kali mengetik.",
            "Sanitasi Peta Modal & Resolusi False-Positive factoryReset: Membersihkan elemen modal-factory-reset-box dari MODAL_ELEMENT_MAP agar status modal tertutup tidak lagi salah dilaporkan sebagai terbuka (isModalOpenInDOM) yang sebelumnya memblokir tombol kembali di halaman web.",
            "Proteksi Sinkronisasi History URL Produk (Zero Navigation Lock): Menghapus eksekusi history.replaceState sinkron yang bertabrakan dengan in-flight history.back() saat menutup modal produk (closeProductModal) di engine Chromium/WebKit.",
            "Multi-Channel Distribution v1.17.8 (Android versionCode 11708)."
        ]
    },
    {
        "id": "log-1-17-07",
        "version": "v1.17.7",
        "date": "2026-10-15",
        "title": "Pusat Reset ke Setelan Awal (Clean Sweep & Data Purge), Triple-Guard Security, Auto-Backup Darurat & Opsi Pembersihan Transaksi",
        "category": "security",
        "badge": "Setelan Awal & Triple-Guard Security v1.17.7",
        "items": [
            "Fitur Reset ke Setelan Awal Eksklusif Pemilik Toko (Owner-Only): Menghadirkan pusat reset data dan pembersihan aplikasi terpadu di menu Pengaturan Toko dan Pusat Cadangan Data yang hanya dapat diakses oleh akun Pemilik (Owner).",
            "Dua Opsi Mode Pembersihan Data: Opsi 1 (Hanya Transaksi & Operasional) membersihkan order, transaksi kasir, log shift, kas laci, pengeluaran, piutang tempo, RMA, dan log opname dengan tetap mempertahankan master produk, stok, kategori, dan supplier; Opsi 2 (Reset Total ke Setelan Awal) membersihkan seluruh transaksi + katalog produk + varian + banner + data pelanggan menjadi fresh bersih seperti baru.",
            "Triple-Guard Security Anti-Kecelakaan Data: Proteksi tiga lapis mencakup: Unduh Otomatis Cadangan Darurat (Emergency Safety Backup JSON) sebelum penghapusan, konfirmasi ketik frasa rahasia 'RESET KE SETELAN AWAL', serta persetujuan risiko via checkbox interaktif.",
            "Proteksi Kedaulatan Lisensi & Kredensial Owner: Menjamin status langganan software (freshmart_licenses) dan akun login Pemilik Toko (ADMIN_UID) 100% aman dan tidak terhapus.",
            "Multi-Channel Distribution v1.17.7 (Android versionCode 11707)."
        ]
    },
    {
        "id": "log-1-17-06",
        "version": "v1.17.6",
        "date": "2026-10-15",
        "title": "Resolusi Bug Re-Aktivasi Flash Sale Selesai, Sinkronisasi Realtime Storefront, Auto-Extend Jadwal & Reset Kuota Terjual",
        "category": "feature",
        "badge": "Flash Sale Re-Activation & Realtime Storefront Sync v1.17.6",
        "items": [
            "Resolusi Bug Re-Aktivasi Sesi Flash Sale Selesai: Mengeliminasi kendala sesi flash sale yang telah selesai tidak muncul di etalase toko saat diaktifkan kembali. Sistem kini secara cerdas mendeteksi sesi kedaluwarsa dan otomatis memperpanjang jadwal mulai/berakhir dari waktu saat ini (+4 jam) serta menyegarkan kuota produk yang telah habis terjual.",
            "Tombol Aksi Cepat 'Naikkan Lagi' & Reset Kuota Produk di CMS: Menambahkan tombol aksi 1-sentuhan 'Naikkan Lagi' pada kartu sesi berstatus SELESAI di CMS Admin, serta tombol reset kuota keterjualan per-produk dan reset seluruh kuota draft agar produk promo siap langsung dinaikkan kembali ke flash sale.",
            "Sinkronisasi Realtime Storefront & doSync Storage Engine: Mengintegrasikan sinkronisasi realtime dokumen 'flashSales' pada listener 'attachRealtimeStockSync' (storage.js) sehingga perubahan status flash sale seketika ter-broadcast dan me-render panggung flash sale di seluruh perangkat tanpa perlu refresh manual.",
            "Proteksi Anti-Kandang Kosong Storefront: Menyempurnakan renderStorefrontFlashSale() dengan parser tanggal aman parseSafeTimestamp() dan validasi cardsHtml sehingga seksi flash sale hanya terbuka jika terdapat produk aktif yang valid dan otomatis tertutup jika sesi/produk telah berakhir.",
            "Multi-Channel Distribution v1.17.6 (Android versionCode 11706)."
        ]
    },
    {
        "id": "log-1-17-05",
        "version": "v1.17.5",
        "date": "2026-10-15",
        "title": "Resolusi Forensik Runtime Checkout Tempo, Standarisasi Flag Produk Habis & Guard Perhitungan Pajak",
        "category": "feature",
        "badge": "Tempo Checkout Runtime Fix & Inventory Flag v1.17.5",
        "items": [
            "Resolusi Bug Impor Pembayaran Tempo (Zero ReferenceError): Menambahkan impor resmi 'vouch' dari state.js serta helper 'getEffP' mandiri pada payment.js sehingga kalkulasi sisa saldo Tempo tidak lagi melempar ReferenceError saat pembeli mengetik nominal DP.",
            "Proteksi Anti-NaN Kalkulasi Pajak & Poin Member: Menambahkan fallback safe guard pada pemanggilan window.calcTaxDetails di fungsi calculateTempoBalance guna mencegah hasil kalkulasi menjadi 'Rp NaN'.",
            "Standarisasi Tipe Data Flag Produk Habis (Boolean false): Menyelaraskan status 'isActive' produk induk saat stok habis dari string 'false' menjadi boolean false murni, konsisten dengan seluruh varian produk di database Firestore.",
            "Multi-Channel Distribution v1.17.5 (Android versionCode 11705)."
        ]
    },
    {
        "id": "log-1-17-04",
        "version": "v1.17.4",
        "date": "2026-10-15",
        "title": "Stabilitas Fokus Keyboard Mobile Android: Eliminasi Keyboard Menutup Sendiri, SoftInputMode AdjustResize & Standar Input Anti Auto-Zoom",
        "category": "feature",
        "badge": "Android Keyboard Stability & SoftInputMode v1.17.4",
        "items": [
            "Eliminasi Konflik Input Android (captureInput: false): Mematikan override BaseInputConnection pada konfigurasi Capacitor Android agar WebView menggunakan koneksi input standar Chromium modern, menuntaskan masalah keyboard Gboard, Samsung Keyboard, dan Xiaomi yang sering menutup sendiri saat mulai mengetik.",
            "Integrasi windowSoftInputMode='adjustResize' Android: Mengonfigurasi mode penanganan keyboard pada MainActivity di AndroidManifest.xml sehingga layout aplikasi menyesuaikan tinggi viewport secara mulus saat keyboard muncul tanpa memicu reflow agresif atau kehilangan fokus (blur) pada elemen aktif.",
            "Optimasi Plugin Keyboard Capacitor: Menambahkan konfigurasi resmi resize body dan resizeOnFullScreen pada plugin Keyboard di capacitor.config.json guna menjamin stabilitas area ketik pada layar Android berponi (notch) dan edge-to-edge.",
            "Standardisasi Font Input Mobile Anti-Auto-Zoom (16px): Memastikan seluruh input, termasuk input-compact, stepper-input, dan member lookup form menggunakan font-size minimal 16px di viewport smartphone (<= 768px) untuk mencegah auto-zoom browser yang menggeser kursor kencang.",
            "Proteksi User-Select Text pada Form: Memastikan seleksi teks murni aktif pada elemen input, select, dan textarea guna menjamin kursor tetap persisten di kolom yang sedang diketik.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.17.4 (Android versionCode 11704)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.17.8';
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

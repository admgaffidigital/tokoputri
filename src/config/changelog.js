/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * 
 * ATURAN ROLLING 5-LOG TERBARU (ANTI-KODE SAMPAH & ANTI-SPAM):
 * DEFAULT_CHANGELOG dibatasi secara ketat HANYA menyimpan 5 entri rilis
 * terkini (v1.10.99 s.d. v1.10.95). Setiap rilis baru ditambahkan di posisi
 * teratas dan entri ke-6 dipangkas agar berkas tetap super ringan (~12KB vs ~425KB),
 * mengeliminasi kode sampah, dan mencegah spam riwayat di antarmuka website.
 * ============================================================
 */

export const MAX_CHANGELOG_LIMIT = 5;

export const DEFAULT_CHANGELOG = [
    {
        "id": "log-1-10-99",
        "version": "v1.10.99",
        "date": "2026-10-08",
        "title": "Resolusi Paripurna Bocor Tag HTML Badge Tier Member & Penyelarasan Desain Visual POS Kasir",
        "category": "feature",
        "badge": "Clean POS Member Tier Badge & Anti-HTML Leak v1.10.99",
        "items": [
            "Eliminasi Total Kebocoran Tag HTML Mentah (pos.js): Memperbaiki bug tampilan data member pada modal pembayaran POS Kasir di mana badge tingkatan loyalitas memunculkan teks mentah '<I CLASS=\"FA-SOLID FA-AWARD MR-1\"></I> BRONZE MEMBER' akibat pemanggilan fungsi escape pada string badge HTML.",
            "Desain Visual Badge Tier Multilevel Harmonis: Mengekstrak tierName dan tierIcon secara terpisah dan deterministik, merender ikon vektor FontAwesome asli (<i class=\"fa-solid ...\"></i>) berpadu teks nama tier yang terproteksi escape XSS. Dilengkapi palet warna bertingkat resmi (Bronze = Amber/Orange hangat, Silver = Slate perak elegan, Gold = Yellow/Amber berkilau, Platinum = Purple royal eksklusif) di light & dark mode.",
            "Integrasi Impor Langsung getMemberTier (reward.js & pos.js): Mengimpor helper tingkatan loyalitas getMemberTier secara terstruktur pada modul POS dengan fallback berlapis (getMemberTier -> window.getMemberTier -> fallback default) sehingga kalkulasi tier selalu presisi dan kebal gangguan siklus hidup pemuatan skrip.",
            "Penyelarasan Tata Letak & Keamanan Bar Info Member: Memastikan badge tingkatan member, saldo poin loyalitas (Star), dan plafon Putri PayLater tersusun sejajar rapi (inline-flex, gap-1.5, shadow-2xs) tanpa distorsi teks kapital.",
            "Multi-Channel Distribution v1.10.99 (Android versionCode 11099)."
        ]
    },
    {
        "id": "log-1-10-98",
        "version": "v1.10.98",
        "date": "2026-10-08",
        "title": "Resolusi Paripurna Layar Berkedip Pengaturan Toko & Arsitektur Single Scroll Container",
        "category": "feature",
        "badge": "Zero-Flicker Settings & Single Scroll Container Architecture v1.10.98",
        "items": [
            "Eliminasi Total Penyebab Layar Berkedip (flickering/jitter) di Pengaturan Toko: Mengganti elemen dekoratif blur GPU (filter: blur-xl) pada Kartu Lisensi SaaS dengan CSS Radial Gradient murni (radial-gradient) berkinerja tinggi, menghilangkan kalkulasi konvolusi blur dan tile clipping subpixel di batas bawah scroll.",
            "Pembersihan Konflik Layer GPU & Containment (style.css & subscription.js): Menghapus aturan berbahaya 'contain: layout paint;' pada scroll container admin (#view-admin .scroll-content) dan 'contain: paint;' pada kartu lisensi yang sebelumnya memicu loop invalidasi repaint tak terhingga pada Chromium/WebView.",
            "Arsitektur Single Dedicated Scroll Container: Mengembalikan kontainer isi (#admin-content-view dan #admin-content) ke 'overflow: visible !important' sehingga tidak memicu multi-level nested scroll container yang saling memicu pertempuran reflow dan overscroll bounce.",
            "Stabilisasi Animasi & Tombol Bento Menu (settings.js): Mengubah animasi mount halaman dari transform scale (fade-in-scale) ke fade-in berbasis opacity murni (0.95 ke 1.0) tanpa pergeseran koordinat transform, serta merapikan kelas 8 kartu bento pengaturan agar bebas benturan styling hover.",
            "Multi-Channel Distribution v1.10.98 (Android versionCode 11098)."
        ]
    },
    {
        "id": "log-1-10-97",
        "version": "v1.10.97",
        "date": "2026-10-08",
        "title": "Resolusi Tuntas Transisi Modal Cetak Label Barcode & Penutupan Otomatis Modal Induk (FIFO & PO)",
        "category": "feature",
        "badge": "Seamless Barcode Modal Transition & Parent Auto-Closing v1.10.97",
        "items": [
            "Auto-Closing & Resolusi Modal Menutupi (barcode-label-modal.js & fifo-modal.js): Memperbaiki bug di mana modal Cetak Label tidak muncul karena terhalang oleh modal Pelacak FIFO yang tidak mau menutup. Fungsi openProductBarcodeLabelModal kini secara otomatis mendeteksi dan menutup modal induk yang sedang aktif (modal-product-fifo dan modal-po-detail) secara mulus tanpa konflik history.back().",
            "Peningkatan Z-Index Prioritas Tertinggi (z-[200]): Mengangkat lapisan modal Cetak Label Barcode ke z-[200] dan menjamin posisinya selalu berada di urutan anak paling atas DOM body (document.body.appendChild), mengeliminasi risiko modal tertutup atau terperangkap di belakang dialog lain.",
            "Sinkronisasi Siklus Hidup Modal History API: Memperbaiki registrasi window.pushModalHistory('productBarcodeLabel') dan window.requestCloseModal('productBarcodeLabel') dengan animasi standar openModalAnim / closeModalAnim (double rAF GPU acceleration) untuk konsistensi penutupan tombol fisik Back Android.",
            "Integrasi Cetak Label Barang PO Kulakan (purchases.js): Tombol 'Cetak Label Barang' pada rincian Purchase Order kini juga otomatis menutup modal PO Detail secara elegan sebelum membuka antrean cetak label barcode.",
            "Multi-Channel Distribution v1.10.97 (Android versionCode 11097)."
        ]
    },
    {
        "id": "log-1-10-96",
        "version": "v1.10.96",
        "date": "2026-10-08",
        "title": "Anti-Flicker Pengaturan Toko, Harmonisasi Tombol Modal & Elevasi Dokumen Eksekutif PSAK A4",
        "category": "feature",
        "badge": "Anti-Flicker Settings, Button Harmony & Executive PSAK Documents v1.10.96",
        "items": [
            "Anti-Flicker & Stabilisasi Layout Pengaturan Toko (subscription.js & style.css): Membasmi layar berkedip-kedip (flickering/jitter) pada bagian bawah Pengaturan Toko CMS Seller dengan mengisolasi layer GPU kartu lisensi SaaS (isolation: isolate; contain: paint;), merestrukturisasi elemen dekoratif blur ke batas aman koordinat positif, menerapkan overflow-anchor: none dan scrollbar-gutter: stable, serta mengeliminasi scrollbar reflow oscillation loop pada Chromium/WebView.",
            "Harmonisasi & Standardisasi Ukuran Tombol Modal (barcode-label-modal.js & index.html): Menyelaraskan seluruh tombol aksi footer modal agar proporsional dan konsisten tinggi (h-11 sm:h-12 / min-h-[44px]). Tombol 'Batal' pada Modal Cetak Label Barcode kini sejajar simetris dengan tombol 'RawBT' dan 'Cetak Sekarang', serta tombol 'Gambar' dan 'PDF' pada Modal Preview Dokumen A4 kini memiliki label teks jelas dan berukuran ergonomis seimbang dengan 'Cetak Sekarang'.",
            "Elevasi Desain Dokumen Eksekutif PSAK A4 (finance.js & documents.js): Dokumen Laporan Laba Rugi A4 kini dibungkus lembar kertas fisik putih bersih resmi (.a4-page 794x1123px) berbayangan 3D realistis, dilengkapi Kop Resmi Toko Putri (Logo, NPWP, Alamat, Kontak), Badge Executive Statement, No. Registrasi Dokumen resmi, 4 KPI Cards Eksekutif lengkap rasio margin %, tabel Ledger Akuntansi bergaris tajam dengan garis ganda pada saldo akhir, serta kolom tanda tangan pengesahan ganda (Staf Keuangan & Pemilik Toko).",
            "Formatter Angka Akuntansi PSAK Deterministik (utils.js): Memperkenalkan fAccounting() untuk menyajikan angka finansial standar akuntansi resmi di mana nilai pengurang/negatif dibungkus kurung kurawal (Rp 35.800) dan nol tampil bersih (Rp 0), serta menyempurnakan fCur() dengan separator titik ASCII murni (code 46) yang 100% kebal dari distorsi locale browser/WebView Android.",
            "Multi-Channel Distribution v1.10.96 (Android versionCode 11096)."
        ]
    },
    {
        "id": "log-1-10-95",
        "version": "v1.10.95",
        "date": "2026-10-08",
        "title": "Universal Dual-Engine Scanner Kamera HP & Toleransi Presisi Barcode Label Anti Gagal Temukan",
        "category": "feature",
        "badge": "Universal Dual-Engine Camera Scanner & Barcode Matcher v1.10.95",
        "items": [
            "Universal Dual-Engine Barcode Scanner POS Kasir (pos.js): Mengintegrasikan engine Html5Qrcode (ZXing) lokal berkinerja tinggi sebagai pemindai utama yang kompatibel 100% di semua browser smartphone (Android Chrome, iOS Safari, WebView Capacitor, Firefox) dengan fallback otomatis ke native BarcodeDetector jika offline.",
            "Area Bidik Horizontal Optimal Barcode 1D (qrbox aspect 2.2:1): Viewfinder kamera HP dikalibrasi khusus untuk barcode memanjang (Code 128 / EAN-13) dengan reticle aspect-[2.2/1] dan resolusi dinamis, menghilangkan kendala kamera HP yang sebelumnya tidak bisa memindai atau terpotong area kubus sempit.",
            "Aset Lokal html5-qrcode.min.js Anti-Gagal Offline: Pustaka scanner kini tersimpan langsung di public/html5-qrcode.min.js sehingga kamera scanner dapat berjalan instan tanpa tergantung koneksi CDN internet.",
            "Engine Pencocokan Barcode Bertoleransi Tinggi (getBarcodeVariations & matchCodeAny): Mendukung pembersihan otomatis awalan nol scanner (leading zeroes 0899... vs 899...), padding format UPC-A/EAN-13 (12 digit ke 13 digit), barcode bertipe data numerik di database, serta toleransi variasi spasi dan tanda hubung SKU.",
            "Feedback Cerdas Kasir & Deteksi Produk Nonaktif: Jika barcode terbaca namun berstatus nonaktif di master admin, kasir mendapatkan notifikasi spesifik sehingga tidak bingung. Dilengkapi tombol kilat 'Cari Teks di POS' untuk mencari produk terdekat dalam 1 ketukan.",
            "Pencarian Etalase Storefront Bebas Hambat Kategori: Filter penelusuran katalog etalase (catalog.js) otomatis mengizinkan produk yang discan lewat kamera tampil seketika meskipun pembeli sedang berada di tab kategori yang berbeda.",
            "Multi-Channel Distribution v1.10.95 (Android versionCode 11095)."
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
 * @returns {String} Contoh: 'v1.10.92'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.10.98';
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

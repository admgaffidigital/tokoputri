/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * 
 * ATURAN ROLLING 5-LOG TERBARU (ANTI-KODE SAMPAH & ANTI-SPAM):
 * DEFAULT_CHANGELOG dibatasi secara ketat HANYA menyimpan 5 entri rilis
 * terkini (v1.10.96 s.d. v1.10.92). Setiap rilis baru ditambahkan di posisi
 * teratas dan entri ke-6 dipangkas agar berkas tetap super ringan (~12KB vs ~425KB),
 * mengeliminasi kode sampah, dan mencegah spam riwayat di antarmuka website.
 * ============================================================
 */

export const MAX_CHANGELOG_LIMIT = 5;

export const DEFAULT_CHANGELOG = [
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
    },
    {
        "id": "log-1-10-94",
        "version": "v1.10.94",
        "date": "2026-10-08",
        "title": "Resolusi Paripurna Keterbacaan Barcode Label & Penyatuan Engine Pencarian POS Kasir & Etalase Storefront",
        "category": "feature",
        "badge": "High-Readability Barcode & Unified Scanner Search v1.10.94",
        "items": [
            "Engine Barcode Code 128 Vektor Murni Generasi Baru (barcode-code128.js): Menambahkan kompresi otomatis Code 128 Subtipe C untuk digit angka genap (batang barcode 40-50% lebih lebar dan tebal), Quiet Zone standar ISO/IEC 15417 (>= 12 modul), background putih solid murni (#ffffff), dan tinggi batang default 58 untuk first-pass read rate 100% pada seluruh scanner laser USB, Bluetooth, maupun kamera HP.",
            "Desain Proporsional Label Stiker Thermal (barcode-label-modal.js): Mengalokasikan 60%+ area stiker untuk batang barcode (tinggi fisik 14-17mm), nama barang 1 baris terpotong rapi dengan elipsis, crisp edges rendering, serta peningkatan tinggi barcode RawBT ESC/POS ke 55 dots.",
            "Penyatuan Pencocokan Barcode POS Kasir (pos.js): Fungsi findProductOrVariantByBarcode kini membersihkan prefix AIM Symbology hardware (]C1, ]e0), karakter kontrol, serta mendukung pencocokan menyeluruh: barcode pabrik, SKU toko, ID produk, fallback label SKU-id, barcode varian, SKU varian, dan fallback varian.",
            "Auto-Add Enter Barcode pada Kotak Cari POS: Input pencarian kasir (#pos-search-input) kini dilengkapi event listener tombol Enter cerdas (handlePOSSearchKeydown) yang seketika mendeteksi tembakan barcode scanner, langsung memasukkan barang ke keranjang kasir dengan audio chime kasir, dan membersihkan kolom pencarian.",
            "Pencarian Barcode di Etalase Storefront & Admin Table: Filter penelusuran katalog etalase (rCat di catalog.js) dan direktori produk admin (table.js) kini mengenali kode barcode fisik, varian barcode, ID produk, dan fallback label cetak.",
            "Multi-Channel Distribution v1.10.94 (Android versionCode 11094)."
        ]
    },
    {
        "id": "log-1-10-93",
        "version": "v1.10.93",
        "date": "2026-10-08",
        "title": "Standardisasi Bahasa & Copywriting Profesional Enterprise (Storefront, Checkout, WhatsApp & POS)",
        "category": "feature",
        "badge": "Enterprise Copywriting & Tone of Voice v1.10.93",
        "items": [
            "Storefront & Etalase Material: Transformasi menyeluruh teks penelusuran, kategori alat teknik, empty state keranjang, dan formulir pengajuan Surat Penawaran Resmi (SPH) dengan diksi bisnis konstruksi yang meyakinkan kontraktor dan pemilik proyek.",
            "Alur Checkout Online 3 Langkah: Penyempurnaan opsi pengiriman langsung ke proyek/mandor dengan koordinasi titik bongkar muat armada, kejelasan termin pembayaran (Transfer, QRIS, COD, Cash Tempo VIP, Putri PayLater), serta pesan konfirmasi pesanan yang ramah dan formal.",
            "Otomasi Pesan WhatsApp Pelanggan & Logistik: Template notifikasi resmi berstruktur rapi (Kop Toko, No. Referensi, Status Pemrosesan, Alamat Proyek) untuk status Baru, Diproses, Selesai, dan Drop-Point Armada, menggantikan gaya percakapan kaku/bot.",
            "POS Kasir & Struk Termal Resmi: Penyelarasan notifikasi kasir (validasi stok persediaan, penahanan antrean, pengosongan keranjang) dan standarisasi teks penutup struk/nota retur resmi untuk membangun kepercayaan pelanggan ritel maupun grosir.",
            "Multi-Channel Distribution v1.10.93 (Android versionCode 11093)."
        ]
    },
    {
        "id": "log-1-10-92",
        "version": "v1.10.92",
        "date": "2026-10-08",
        "title": "Sistem Cetak Label Barcode & Harga Universal (Thermal Stiker Roll & Kertas A4)",
        "category": "feature",
        "badge": "Universal Barcode Label Printer v1.10.92",
        "items": [
            "Engine Barcode Code 128 Vektor Murni (barcode-code128.js): Menghadirkan generator barcode Code 128 native SVG beresolusi tinggi tanpa dependensi eksternal, menghasilkan garis barcode hitam pekat kristal yang 100% terbaca instan oleh seluruh pemindai laser kasir POS.",
            "Modal Pintar Cetak Label Universal (barcode-label-modal.js): Modal konfigurasi cetak stiker label dengan pratinjau live skala 1:1, dukungan multi-varian dengan input jumlah cetak mandiri per varian, opsi stepper (+1, +5, +10, Set Sesuai Stok Fisik), dan tombol toggle informasi stiker (Kop Toko, Harga, Satuan, Teks SKU).",
            "Multi-Printer & Preset Kertas Lengkap: Mendukung Printer Thermal Stiker Roll khusus (40x30mm, 50x30mm, continuous 58mm & 80mm) via isolasi CSS @page peramban maupun transmisi langsung ESC/POS Bluetooth / RawBT Android, serta format kisi Kertas Stiker A4 Lembaran (Grid 3x10 / 30 label & Grid 2x7 / 14 label) untuk printer inkjet/laser standar.",
            "Aksesibilitas 1-Klik di Katalog & PO: Tombol 'Label' pada baris produk admin table, chip SKU berkemampuan interaktif, tombol cetak di header modal Bento FIFO, serta tombol cetak kilat pada dokumen penerimaan barang PO kulakan.",
            "Multi-Channel Distribution v1.10.92 (Android versionCode 11092)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.10.96';
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

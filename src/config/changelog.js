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
    },
    {
        "id": "log-1-15-04",
        "version": "v1.15.4",
        "date": "2026-10-10",
        "title": "Arsitektur Zero-Flicker Partial DOM, Proteksi Fokus Input & Pengetikan Lancar Bebas Mental di Seluruh Modul",
        "category": "feature",
        "badge": "Zero-Flicker Partial DOM & Continuous Focus v1.15.4",
        "items": [
            "Resolusi Tuntas Input Mental-Mental & Hilang Fokus: Mengeliminasi masalah kolom input yang kehilangan fokus, berkedip, melompatkan kursor (caret), atau menutup keyboard virtual ponsel saat pengguna mengetik di seluruh aplikasi.",
            "Arsitektur Pembaruan Parsial DOM (Zero-Flicker Partial DOM): Memisahkan kontainer input filter/pencarian dari kontainer hasil data dinamis pada Estimator Material (Paint, Tile, Brick, Roof), Stock Opname Dua Lokasi, Beban Pengeluaran Toko, Laporan Valuasi Stok, Kulakan Pembelian (PO), Master Supplier, Retur RMA, Kartu Piutang Tempo, dan Katalog Master Produk.",
            "Proteksi Caret & Active Element Guard: Menerapkan pengecekan document.activeElement !== input pada sinkronisasi pencarian silang etalase & kasir POS, mencegah reset posisi caret IME saat pengetikan cepat atau penggunaan virtual keyboard Android/iOS.",
            "Tombol Bersihkan Instan Dinamis (Reactive Clear Buttons): Integrasi tombol hapus pencarian 1-klik yang responsif dan reaktif tanpa memicu render ulang template kontainer luar.",
            "Pencegahan Reflow Kartu Ringkasan: Mengoptimalkan pembaruan tabel katalog produk admin agar tidak merekonstruksi ulang 4 kartu ringkasan inventori di setiap ketukan tombol pencarian.",
            "Seluruh 78 Modal Sistem & Rangkaian Test Suite Lolos 100%: 36 pengujian estimator & desimal, 28 flash sale, 24 multi-satuan UOM, 52 member loyalitas, serta verifikasi modal sinkron 100%.",
            "Multi-Channel Distribution v1.15.4 (Android versionCode 11504)."
        ]
    },
    {
        "id": "log-1-15-03",
        "version": "v1.15.3",
        "date": "2026-10-10",
        "title": "Kalkulator Estimator Atap & Seng Interaktif (Spandek Galvalum, Seng Gelombang, Asbes Gelombang & Nok Bubungan)",
        "category": "feature",
        "badge": "Roof & Corrugated Sheet Material Estimator v1.15.3",
        "items": [
            "Penambahan Tab Estimator Atap & Seng: Menghadirkan kalkulator matematis presisi untuk menghitung kebutuhan Atap Spandek Galvalum (Zincalume), Seng Gelombang (BJLS), dan Asbes Gelombang (Fiber Semen).",
            "3 Mode Geometri Bidang Konstruksi: Mendukung perhitungan Model Pelana 2 Sisi Miring (Gable Roof), Model Kanopi 1 Sisi Miring (Monopitch / Carport), dan Mode Luas Bersih Langsung (m²).",
            "Presisi Sambungan & Overlap Lapangan: Memperhitungkan lebar efektif overlap samping (75 cm untuk Spandek & Seng, 95 cm untuk Asbes) serta end-lap sambungan ujung 20 cm sesuai pilihan panjang lembar (3m, 4m, 5m, 6m untuk Spandek; 1.5m s.d. 3.0m untuk Seng & Asbes).",
            "Perhitungan Otomatis Aksesoris & Pengencang: Menghitung kebutuhan Baut Roofing SDS 12-14x50mm (box isi 100), Paku Payung Seng Galvanis (kg isi ~70 pcs), Paku Asbes Berkaret (pack isi 50), serta Batang Nok Bubungan Puncak.",
            "Integrasi Omnichannel Lengkap: Salin rincian format WhatsApp, konsultasi langsung ke WA Toko Putri, integrasi tombol cepat kasir POS [F3], dan rekomendasi produk etalase toko.",
            "Rangkaian Pengujian Otomatis: 36 unit test estimator lolos 100% dan seluruh 78 modal sistem sinkron.",
            "Multi-Channel Distribution v1.15.3 (Android versionCode 11503)."
        ]
    },
    {
        "id": "log-1-15-02",
        "version": "v1.15.2",
        "date": "2026-10-10",
        "title": "Tipografi Industrial Hardware Depot (Archivo + Barlow) & Elevasi Visual Toko Bahan Bangunan & Alat Teknik",
        "category": "feature",
        "badge": "Industrial Hardware Depot Typography v1.15.2",
        "items": [
            "Duet Tipografi Industrial (Paket 3): Integrasi font 'Archivo' (Weight 600-900) untuk seluruh judul, nama barang, kategori, angka harga, dan tombol aksi berpadu 'Barlow' (Weight 400-600) untuk teks deskripsi & spesifikasi teknis.",
            "Karakter Visual Heavy-Duty & Berwibawa: Menghadirkan kesan kokoh, formal, dan meyakinkan bagi kontraktor proyek serta tetap bersih & modern bagi pembeli ritel rumah tangga.",
            "Proteksi Monospace Struk & Barcode: Menjaga format font 'Courier New' / monospace tetap murni pada struk thermal printer 58mm/80mm, kode barcode Code 128, dan nomor seri SKU.",
            "Resolusi Anti-Flicker & Kontras Lisensi SaaS: Mengeliminasi teks berkedip pada kartu lisensi toko dengan menghapus 'text-transparent bg-clip-text' menjadi warna solid tegas, serta menstandarkan badge status lisensi ke palet kontras tinggi independen dari tema toko.",
            "Verifikasi Presisi Member VIP & Barcode Code 128: Validasi 52 kasus uji logika loyalitas, klasifikasi tiering (Bronze, Silver, Gold, Platinum VIP), perhitungan limit kredit PayLater, serta adopsi engine barcode Code 128 ISO/IEC 15417 pada sisi belakang kartu digital untuk pemindaian scanner kasir fisik.",
            "Integrasi Google Fonts & Tailwind Config: Penambahan font-family 'heading' dan 'industrial' pada tailwind.config.js dan prefetch Google Fonts non-blocking di index.html.",
            "Multi-Channel Distribution v1.15.2 (Android versionCode 11502)."
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

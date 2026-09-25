/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * ============================================================
 */

export const DEFAULT_CHANGELOG = [
    {
        id: 'log-1-9-32',
        version: 'v1.9.32',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Keranjang POS Kasir Mobile: Eliminasi Pemotongan Judul (Anti-Truncation), Penyelarasan Tombol Tahan/Kosongkan & Preset Chips Bertema Toko',
        category: 'optimization',
        badge: 'POS Theme Harmonization & Zero Truncation v1.9.32',
        items: [
            'Eliminasi Pemotongan Judul Keranjang Mobile (Anti-Truncation): Menerapkan teks adaptif (Keranjang di mobile, Keranjang Transaksi di desktop) sehingga judul tidak lagi terpotong elipsis ("KERANJANG T...") pada layar ponsel sempit (<= 390px) dan tampil presisi bersama counter jumlah item belanja.',
            'Harmonisasi Tombol Tindakan Header Keranjang (Tahan, Kosongkan & Tutup): Merestrukturisasi tombol "Tahan" dan "Kosongkan" menjadi badge pill taktil semi-transparan dengan border lembut (amber-500/10 dan rose-500/10) serta tombol tutup yang proporsional, menggantikan teks raw yang kontras dan tidak selaras.',
            'Penyelarasan Penuh Pengalih Diskon Kasir (Rp / %): Memberikan aksen warna tema brand toko (var(--color-primary)) pada tombol pengalih aktif (Rp / %) dengan kontras teks putih bersih, menggantikan tombol abu-abu polos.',
            'Preset Chips Diskon Cerdas Beraksen Tema Toko: Merombak preset chips potongan harga (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb) dari tombol slate abu-abu kaku menjadi chips beraksen brand toko dengan indikator status aktif (solid primary) saat dipilih.',
            'Penyempurnaan Stepper Kuantitas & Tombol Bayar Berkilau: Menambahkan focus border tema pada kontrol kuantitas [− 1 +] serta elevasi bayangan bercahaya (box-shadow glow brand color) pada tombol Proses Pembayaran.'
        ]
    },
    {
        id: 'log-1-9-31',
        version: 'v1.9.31',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Tombol Pilih Berkas Cadangan & Presisi Sempurna Navigasi Header (Anti-Gepeng, Symmetrical 2-Column Grid & 1:1 Aspect-Square)',
        category: 'optimization',
        badge: 'Visual Precision & Native Alignment v1.9.31',
        items: [
            'Resolusi Tombol Gepeng & Penyelarasan Tombol Pilih Berkas Cadangan: Merestrukturisasi tombol Pilih Berkas Cadangan dan Rollback Data Toko menjadi grid 2-kolom berdampingan yang simetris (grid grid-cols-2 gap-2.5 sm:gap-3) dengan label teks adaptif, mengeliminasi tampilan tombol pipih memanjang selebar layar (gepeng) menjadi tombol taktil yang proporsional.',
            'Harmonisasi Penuh dengan Baris Snapshot Cepat: Menyelaraskan tinggi fisik (h-11 sm:h-12), radius sudut (rounded-xl sm:rounded-2xl), dan padding tombol pemulihan agar 100% selaras dan sejajar sempurna dengan baris tombol Simpan Cepat & Pulihkan di bawahnya.',
            'Presisi Sempurna Tombol Navigasi Header Admin: Menetapkan display flex, shrink-0, dan aspect-square pada tombol kembali panah kiri (#btn-admin-back), ikon preview, dan tombol keluar, menjamin bentuk bujur sangkar 1:1 yang rapi dan elegan tanpa distorsi melebar/lonjong di layar HP.',
            'Optimalisasi Ruang Kanvas Layar Ponsel (Anti-Squeeze Padding): Menghapus padding ganda yang menghimpit kontainer Pusat Data di HP dan memperlebar ruang bernapas bawah (pb-24) agar seluruh tombol tindakan tampil utuh dan bebas terpotong.'
        ]
    },
    {
        id: 'log-1-9-30',
        version: 'v1.9.30',
        date: '2026-09-25',
        title: 'Optimasi Ketahanan Koneksi Jaringan Cloud Firestore (Eliminasi ERR_QUIC_PROTOCOL_ERROR via Force Long Polling HTTPS)',
        category: 'optimization',
        badge: 'Network Resilience & Stable Cloud Sync v1.9.30',
        items: [
            'Eliminasi ERR_QUIC_PROTOCOL_ERROR.QUIC_TOO_MANY_RTOS: Mengaktifkan experimentalForceLongPolling pada konfigurasi Firestore SDK untuk memastikan transmisi data menggunakan protokol HTTPS berbasis TCP yang andal dan kebal terhadap packet loss atau pemblokiran UDP pada jaringan seluler (Telkomsel/Indosat/XL) maupun Wi-Fi publik.',
            'Pencegahan Kegagalan Stream Listen Channel: Menghindari kegagalan kanal sinkronisasi gRPC-Web/QUIC saat koneksi internet mengalami fluktuasi sementara atau timeout DNS (ERR_NAME_NOT_RESOLVED).',
            'Peningkatan Keandalan Real-time Sync Antar Perangkat: Menjamin aliran perubahan data pesanan, katalog produk, dan status shift laci kasir tetap terhubung secara stabil tanpa membanjiri konsol browser dengan error retry QUIC.'
        ]
    },
    {
        id: 'log-1-9-29',
        version: 'v1.9.29',
        date: '2026-09-25',
        title: 'Penyempurnaan Presisi Visual Pemulihan Data & Eliminasi Truncation (Ikon Proteksi Halved, Anti-Crop Judul & Tombol Simpan Cepat Natif)',
        category: 'optimization',
        badge: 'Zero Truncation & Visual Precision v1.9.29',
        items: [
            'Perbaikan Ikon Proteksi Blank (Font Awesome Free Compatibility): Mengganti fa-shield-check (ikon pro yang sebelumnya gagal tampil dan menyisakan kotak kosong) dengan fa-shield-halved yang didukung penuh bawaan sistem, memulihkan lencana perisai keselamatan secara presisi.',
            'Eliminasi Truncation Judul Pemulihan Data: Menghapus kelas truncate pada judul "Pemulihan Aman & Proteksi Rollback" dan deskripsinya sehingga teks membungkus alami (leading-snug) tanpa terpotong tanda titik-titik ("...") di layar ponsel.',
            'Penyederhanaan Label Tombol Rollback: Mengubah label menjadi "Rollback Data Toko" agar tampil rapi satu baris tanpa patah vertikal pada layar mobile sempit.',
            'Optimasi Tombol Snapshot Cepat Mobile (Anti-Crop): Mengganti label panjang yang terpotong ("Simpan Snap..." & "Pulihkan Sna...") menjadi "Simpan Cepat" dan "Pulihkan" dengan whitespace-nowrap dan font 11px yang tampil utuh dan proporsional.'
        ]
    },
    {
        id: 'log-1-9-28',
        version: 'v1.9.28',
        date: '2026-09-25',
        title: 'Audit Presisi UI/UX & Penyempurnaan Menyeluruh Tampilan Natif App (Anti-Overflow Aksi Produk, Harmonisasi Tombol POS & Headroom Kasir)',
        category: 'optimization',
        badge: 'Universal Native App Experience & Touch Polish v1.9.28',
        items: [
            'Audit & Penyempurnaan Responsivitas Kartu Produk Admin: Menerapkan flex-wrap gap-2 pada baris tombol aksi produk (Stok, Restock, Edit Harga, Duplikat, Edit, Hapus) dan padding presisi (p-3.5 sm:p-5) sehingga seluruh tombol tertata rapi tanpa risiko meluber (horizontal overflow) pada smartphone kecil.',
            'Harmonisasi Tombol Modal Swap POS Kasir: Mengganti warna tombol hijau statis pada konfirmasi tukar transaksi held cart dengan warna brand tema toko (var(--color-primary)) lengkap dengan feedback haptik/active touch.',
            'Penyelarasan Input & Tombol Tambah Barcode POS: Mengganti tombol hijau dan border focus scanner barcode manual ke identitas brand toko untuk konsistensi visual 100%.',
            'Optimalisasi Headroom Panel Kasir Admin: Menambahkan padding atas yang lega (pt-3 sm:pt-5 pb-16) pada halaman Manajemen Kasir agar segmented control tidak tertekan mepet di bawah header pada perangkat ponsel.',
            'Audit Kelancaran Layar Sentuh & Responsivitas Mobile: Memastikan seluruh komponen navigasi bawah (Bottom Nav), dialog konfirmasi, dan modal preview memiliki tap target ergonomis (minimum 40-48px) dan animasi native press yang responsif.'
        ]
    },
    {
        id: 'log-1-9-27',
        version: 'v1.9.27',
        date: '2026-09-25',
        title: 'Harmonisasi Visual UI/UX Total & Penyempurnaan Tampilan Natif App (Anti-Wrap Shift Z-Report, Segmented Control Kasir, & Restyling Pemulihan Data)',
        category: 'optimization',
        badge: 'Native Mobile App & Total UI Harmonization v1.9.27',
        items: [
            'Eliminasi Masalah Teks Patah/Wrapping pada Laporan Shift Z-Report: Memperbaiki string nomor shift (#SHF-20260925-860) dan lencana status (SEDANG BERJALAN) di layar mobile dengan whitespace-nowrap, font-mono, dan min-w-0 agar tidak lagi terpotong patah menjadi dua baris.',
            'Harmonisasi Ikon & Palet Tema Shift Kasir: Mengganti warna hijau kaku pada ikon cash register dengan sentuhan warna identitas toko (var(--color-primary)) dan restrukturisasi metrik shift (Modal Awal, Omset, Kas Fisik Laci) menjadi kartu pil modern yang bersih.',
            'Navigasi Segmented Control Natif App pada Manajemen Kasir: Mengubah tombol tab lama menjadi segmented control bergaya iOS/Pixel murni (grid 2 kolom, bg-slate-200/70, smooth pill transition) yang sangat ergonomis di layar ponsel.',
            'Penyelarasan Spanduk Info Kasir: Mengganti kotak biru Bootstrap yang jomplang dengan banner bergradien lembut beraksen warna brand toko (rgba(var(--color-primary-rgb), 0.05)) yang menyatu sempurna dengan tema.',
            'Restrukturisasi Tombol Aksi Kasir: Mengganti tombol kotak-kotak warna-warni (kuning, biru, pink) menjadi tombol tindakan natif app (rounded-xl 36x36px) dengan ikon jelas dan penegasan visual yang tenang.',
            'Restyling Total Area Pemulihan Data (Restore & Safety Rollback): Menghilangkan kotak amber/kuning kecokelatan yang mencolok dan tombol pink pudar, menggantikannya dengan kartu proteksi data natif app, tombol rollback dengan status disabled abu-abu netral yang bersih, serta tombol snapshot instan 2-kolom yang nyaman ditekan di HP.'
        ]
    },
    {
        id: 'log-1-9-26',
        version: 'v1.9.26',
        date: '2026-09-25',
        title: 'Pembersihan Duplikasi Menu & Pemusatan Utilitas Backup ke Pusat Data & Sinkronisasi (Eliminasi Kartu Redundan di Pengaturan Toko)',
        category: 'optimization',
        badge: 'Zero Redundancy & Clean Settings v1.9.26',
        items: [
            'Pembersihan Duplikasi Menu Pengaturan Toko: Menghapus kartu cadangan data (Backup & Restore) yang redundan di menu Pengaturan Toko agar antarmuka lebih bersih, fokus, dan tidak menimbulkan kebingungan bagi admin.',
            'Sentralisasi Penuh ke Pusat Data & Sinkronisasi: Seluruh fungsionalitas pencadangan ekosistem (.JSON), ekspor akuntansi (.CSV), sinkronisasi cloud real-time, validasi skema pra-restore, serta auto safety-snapshot kini 100% terpusat di modul mandiri yang canggih dan modern.',
            'Penyederhanaan Tata Letak Pengaturan Toko: Menjaga konsistensi grid Pengaturan Toko agar berfokus murni pada konfigurasi esensial gerai (Profil Toko, Desain & Katalog, Pengiriman & Radius, Rekening & Pembayaran, Konfigurasi Sistem, Jam Operasional, dan Printer Struk).'
        ]
    },
    {
        id: 'log-1-9-25',
        version: 'v1.9.25',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Total & Keselarasan Tema Pusat Data & Sinkronisasi (Eliminasi Dark Slab, Warm Brand-Tuned Card-Modern, & Headroom Lega)',
        category: 'optimization',
        badge: 'Visual & Theme Harmonization v1.9.25',
        items: [
            'Harmonisasi Penuh dengan Palet Tema Toko (Eliminasi Black Slate Slab): Merombak kontainer hero Pusat Data & Sinkronisasi dari kotak gradien hitam gelap (slate-900) yang jomplang menjadi kartu modern bergradien lembut hangat (.backup-sync-hero) dengan sentuhan warna identitas toko (var(--color-primary)) dan border elegan.',
            'Kartu Statistik Metrik Bersih & Kontras Alami: Merestrukturisasi 6 kartu indikator data (Total Produk, Kategori, Transaksi, Pelanggan, Akun Kasir, Sesi Shift) menjadi kartu putih modern (.card-modern) dengan border halus dan angka beraksen warna cerah yang sangat nyaman dibaca baik di mode terang (light mode) maupun mode gelap (dark mode).',
            'Penyelarasan Komponen Tombol Aksi: Mengganti tombol hitam kaku pada backup database JSON dan pengaturan toko menjadi tombol aksen brand toko yang serasi dengan header emas Toko Putri.',
            'Jarak Bernapas Lega dari Header (Headroom Optimization): Menambahkan padding vertikal atas (pt-3 sm:pt-5) agar kartu modul tidak menempel rapat dengan header navigasi pada perangkat layar ponsel (HP).',
            'Dukungan Adaptif Mode Gelap (Dark Mode Continuity): Menyelaraskan kartu dan metrik agar bertransisi secara mulus ke nuansa gelap berkelas tanpa kehilangan kontras teks dan hierarki visual.'
        ]
    },
    {
        id: 'log-1-9-24',
        version: 'v1.9.24',
        date: '2026-09-25',
        title: 'Pusat Data & Sinkronisasi Cloud (Cloud Sync Hub, Mesin Backup Ekosistem .JSON, Ekspor Akuntansi .CSV, & Pemulihan Aman Rollback 1-Klik)',
        category: 'feature',
        badge: 'Data Center, Cloud Sync & Safe Restore v1.9.24',
        items: [
            'Pusat Data & Sinkronisasi Cloud (Cloud Sync Hub): Tab menu khusus baru di CMS Admin untuk memonitor integritas ekosistem data toko secara real-time, mendeteksi koneksi awan, dan melakukan sinkronisasi paksa (Force Real-time Sync) langsung dari Cloud Firestore.',
            'Mesin Pencadangan Komprehensif (Full Ecosystem Backup .JSON): Menarik seluruh data lengkap secara paralel (Master Produk, Varian, Kategori, Transaksi Penjualan Kasir, Buku Piutang Tempo, Database Member Pelanggan, Akun Kasir, dan Log Shift Laci Kas) dalam satu berkas terenkripsi berstempel integritas metadata.',
            'Ekspor Laporan Akuntansi Spreadsheet (.CSV): Menyediakan fitur unduh tabel siap pakai untuk Microsoft Excel dan Google Sheets (Laporan Master Produk & Stok serta Laporan Riwayat Transaksi & Omset Penjualan).',
            'Inspektur Pra-Pemulihan (Pre-Restore Inspector Modal): Membaca dan memvalidasi berkas cadangan sebelum dieksekusi, menampilkan rincian jumlah produk, transaksi, dan tanggal backup agar tidak ada salah timpa.',
            'Perlindungan Auto Safety-Snapshot & Rollback 1-Klik: Sebelum berkas restore diterapkan, sistem otomatis membekukan data saat itu ke memori darurat sehingga admin bebas membatalkan pemulihan dan mengembalikan data semula kapan saja tanpa risiko kehilangan data.',
            'Snapshot Cepat di Perangkat (Instant Device Snapshot): Memungkinkan admin menyimpan dan memulihkan snapshot kilat langsung di memori browser tanpa harus mengunduh file fisik.'
        ]
    },
    {
        id: 'log-1-9-23',
        version: 'v1.9.23',
        date: '2026-09-25',
        title: 'Penyempurnaan Jarak Lega & Presisi Visual Admin POS Kasir Mobile (Floating Card Workspace, Eliminasi Kesan Mepet Header, & Optimasi Viewport HP)',
        category: 'optimization',
        badge: 'Mobile POS Breathing Room & Floating Card Workspace v1.9.23',
        items: [
            'Jarak Bernapas Lega di Bawah Header (.admin-pos-mode): Mengatasi kendala tampilan kasir yang terlalu mepet dengan header pada layar ponsel (HP) dengan memberikan padding atas (padding-top: 0.625rem / 10px-12px) dan margin samping yang nyaman pada kontainer konten admin.',
            'Arsitektur Floating Card Workspace: Terminal Kasir POS di CMS Admin kini dibungkus dalam kartu modern ber-rounded halus (rounded-2xl sm:rounded-3xl) dengan border lembut dan bayangan elegan (shadow-md), sehingga tampak melayang terpisah dengan indah dan tidak lagi menempel keras ke header toko.',
            'Restrukturisasi Action Strip & Search Bar Mobile: Merampingkan tinggi bilah aksi (min-h-[46px] py-1.5) serta search bar dengan latar belakang adaptif (bg-slate-50/80 dark:bg-slate-800/60) sehingga langsung membedakan kontrol kasir dari katalog produk dan menghemat ruang vertikal layar HP.',
            'Normalisasi Padding Glass Header: Menyeimbangkan kembali padding glass-header admin menjadi pb-2.5 sm:pb-3 agar tidak ada ruang kosong emas berlebih yang memakan area pandang produk pada ponsel.',
            'Optimalisasi Viewport Katalog HP: Mengakomodasi tampilan produk lebih banyak (hingga 3 baris kartu katalog terlihat langsung tanpa terpotong) dengan scrolling internal yang mulus dan bebas benturan double-scroll.'
        ]
    },
    {
        id: 'log-1-9-22',
        version: 'v1.9.22',
        date: '2026-09-25',
        title: 'Presisi Visual Admin POS Kasir Mobile (Anti-Wrap Action Strip, Tombol Shift & Parkir Responsif), Harmonisasi Tema Warna (Camera Scanner & Frosted Glass Header), & Mobile Precision',
        category: 'optimization',
        badge: 'Mobile Visual Precision & Theme Harmonization v1.9.22',
        items: [
            'Eliminasi Header Wrapping di Admin POS Action Strip: Mengatasi teks bertumpuk dua baris ("Terminal Kasir POS" dan "Rp 100.000") pada layar ponsel beresolusi sempit (<= 360px) dengan menerapkan whitespace-nowrap, shrink-0, dan label adaptif ("POS" di mobile, "Terminal POS" di desktop).',
            'Harmonisasi Tombol Shift & Parkir Kasir: Memperbarui tombol indikator shift kasir dan badge transaksi parkir (hold cart) agar selalu inline tanpa terpotong (single-line compact) dengan padding dan icon yang pas di semua ukuran layar.',
            'Sinkronisasi Warna Pemindai Kamera (Camera Scanner): Tombol scan barcode kamera F9 kini otomatis mengikuti identitas warna brand toko (var(--color-primary)) menggunakan tint lembut semi-transparan, menggantikan warna hijau statis yang sebelumnya jomplang dari palet tema.',
            'Header CMS Admin Frosted Glass Konsisten: Merombak tombol Preview dan Keluar di header Admin CMS menjadi pill frosted glass semi-transparan yang menyatu elegan dengan background brand toko, mengeliminasi warna abu-abu dan pink kontras yang tidak harmonis.',
            'Presisi Tipografi & Ruang Pandang Mobile: Mengoptimalkan tata letak header storefront dan admin strip agar tidak ada overflow horizontal maupun vertical clipping pada perangkat mobile.',
            'Jarak & Ruang Pandang Header Lebih Lega: Meningkatkan padding bawah glass-header (pb-4 sm:pb-5) serta mengelevasi tinggi dan padding Action Strip (min-h-[50px] py-2 sm:py-2.5) dengan tombol h-8 rounded-xl seragam, menciptakan ruang bernapas yang nyaman, elegan, dan bebas dari kesan mepet.'
        ]
    },
    {
        id: 'log-1-9-21',
        version: 'v1.9.21',
        date: '2026-09-25',
        title: 'Manajemen Shift Kasir & Rekap Tutup Kasir Cerdas (Shift Settlement, Rekonsiliasi Kas Laci, Denominasi, X/Z-Report & Slip Thermal ESC/POS)',
        category: 'feature',
        badge: 'POS Cashier Shift & Cash Settlement v1.9.21',
        items: [
            'Sistem Pembukaan Shift Kasir & Modal Awal (Cash Float): Kasir wajib/dapat mencatat uang modal awal di laci kasir saat mulai bertugas dengan chip preset cepat (Rp 0, 50rb, 100rb, 200rb, 500rb) dan catatan pembukaan shift, lengkap dengan konfirmasi audio chime Web Audio API yang elegan.',
            'Badge Status Shift Real-Time di Header POS: Header POS Storefront & Admin kini menampilkan indikator status shift aktif dengan modal awal kasir dan tombol akses cepat untuk melihat ringkasan shift berjalan.',
            'Laporan Shift Berjalan (X-Report): Memungkinkan kasir dan admin toko mengecek performa shift yang sedang berlangsung tanpa menutup shift, termasuk durasi kerja aktif, rincian omset per metode bayar (Tunai, QRIS, Bank, Tempo), diskon toko, poin member, dan estimasi uang kas yang seharusnya ada di laci.',
            'Rekonsiliasi Kas Laci & Rekap Tutup Kasir (Z-Report): Alur tutup kasir profesional dengan dua mode hitung fisik (Input Cepat atau Kalkulator Denominasi Lembaran: 100rb, 50rb, 20rb, 10rb, 5rb, 2rb, 1rb, koin), deteksi otomatis selisih kas (Pas/Seimbang, Surplus/Lebih, Defisit/Kurang), serta input catatan penutupan.',
            'Cetak Slip Rekap Shift Thermal POS (58mm / 80mm): Cetak bukti settlement shift kasir berstandar enterprise ke printer thermal kasir (ESC/POS, Bluetooth, RawBT Android, atau browser print) lengkap dengan ringkasan penjualan, rekonsiliasi kas, dan kolom tanda tangan kasir serta supervisor/owner toko.',
            'Laporan Shift Kasir Cloud di CMS Admin: Tab baru "Laporan Shift & Rekap Kas" di menu Manajemen Kasir CMS Admin untuk memantau, mengaudit riwayat shift seluruh kasir, dan mencetak ulang slip rekap kasir kapan saja.',
            'Pintasan Keyboard Shift (F10) & Proteksi Logout: Menambahkan shortcut F10 untuk membuka modal shift langsung dari keyboard kasir serta proteksi konfirmasi cerdas saat kasir logout agar tidak lupa menutup shift.'
        ]
    },
    {
        id: 'log-1-9-20',
        version: 'v1.9.20',
        date: '2026-09-24',
        title: 'Perbaikan Persistensi Toggle Icon POS Kasir Storefront Saat Muat Ulang Halaman (Anti-Disappearance & Zero-Latency Cache)',
        category: 'fix',
        badge: 'POS Header Icon Stability & Zero Latency v1.9.20',
        items: [
            'Penyelesaian Kendala Ikon Kasir Hilang Saat Reload: Memperbaiki masalah race condition dan pembatasan aturan keamanan Firestore (security rules) yang sebelumnya menyebabkan query akun kasir mengembalikan penolakan izin (permission denied) pada sesi awal reload sehingga tombol kasir disembunyikan secara keliru.',
            'Arsitektur Multi-Tier Detection & Fast Path 0ms: Pengecekan visibilitas ikon POS kini memanfaatkan cache instan localStorage (pos_has_cashier), sesi kasir aktif (pos_cashier_session), status admin aktif, dan konfigurasi publik cms_data tanpa memblokir perenderan UI.',
            'Sinkronisasi Otomatis Dokumen Toko (hasCashier): Admin CMS kini otomatis menyinkronkan penanda hasCashier ke dokumen utama cms_data setiap kali kasir ditambah, diubah, atau dihapus, sehingga storefront dapat membaca status secara instan tanpa query berlebih.',
            'Penghapusan Kelas Hidden Awal & Skrip Proteksi FOUC: Tombol kasir di header kini ditampilkan secara default dan diproteksi skrip inline instan sehingga tidak ada kedipan (flicker) atau hilangnya tombol saat koneksi lambat maupun offline.',
            'Reaktivasi Listener Auth: updatePOSHeaderIcon kini otomatis dipanggil kembali saat proses autentikasi Firebase selesai dipulihkan (onAuthStateChanged).'
        ]
    },
    {
        id: 'log-1-9-19',
        version: 'v1.9.19',
        date: '2026-09-24',
        title: 'Pemindai Barcode Kamera Interaktif, Kalkulator Diskon Kasir Pintar (Rp/%), Alert Stok Menipis & Integrasi Printer Thermal ESC/POS',
        category: 'feature',
        badge: 'POS Smart Scanner & Pro Cashier v1.9.19',
        items: [
            'Pemindai Barcode Kamera Interaktif Terintegrasi: Kasir dapat memindai barcode atau kode QR produk secara langsung menggunakan kamera HP, tablet, maupun webcam laptop via W3C BarcodeDetector API tanpa memerlukan scanner USB fisik.',
            'Reticle Pemindai Futuristik & Laser Animasi: Dilengkapi jendela bidik presisi, animasi garis laser pemindai (scanline laser), kontrol lampu senter/flash (torch), tombol putar kamera (depan/belakang), umpan balik audio beep instan, dan mode scan beruntun (continuous) vs sekali.',
            'Kalkulator Diskon Transaksi Cerdas (Dual Mode: Rp & %): Keranjang kasir kini mendukung pemberian diskon fleksibel baik dalam nominal Rupiah maupun persentase potongan harga dengan kalkulasi otomatis real-time, sinkronisasi desktop & mobile, serta chip preset cepat (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb).',
            'Peringatan Stok Menipis & Penanda Habis (Low Stock & Out of Stock Badges): Katalog kasir kini menampilkan status ketersediaan barang secara visual dengan lencana merah "HABIS" untuk stok 0 dan lencana peringatan oranye "SISA X" jika stok <= 5, disertai proteksi validasi kuantitas di keranjang kasir.',
            'Integrasi Universal Printer & Struk Thermal POS: Cetak struk kasir kini terhubung langsung ke preferensi printer toko (ukuran kertas 58mm/80mm, driver RawBT di Android, atau Bluetooth ESC/POS), menampilkan rincian diskon, poin member, serta tombol pintas akses cepat Pengaturan Printer.',
            'Pintasan Keyboard Kasir Lanjutan: Tambahan shortcut F4 untuk fokus langsung ke kolom pencarian katalog dan F9 untuk membuka/menutup pemindai barcode kamera.'
        ]
    },
    {
        id: 'log-1-9-18',
        version: 'v1.9.18',
        date: '2026-09-24',
        title: 'Perbaikan Penghapusan Transaksi Tertahan (Parkir) & Harmonisasi Z-Index Konfirmasi Kasir',
        category: 'fix',
        badge: 'Held Cart Deletion Fix v1.9.18',
        items: [
            'Perbaikan Tombol Hapus Antrean Parkir: Memperbaiki kendala tombol ikon tong sampah pada modal Transaksi Tertahan (Parkir) yang sebelumnya tidak merespon saat diklik akibat dialog konfirmasi global tertutup oleh backdrop modal (z-index mismatch).',
            'Dialog Konfirmasi Khusus In-Modal (z-[10005]): Menghadirkan dialog konfirmasi hapus antrean khusus dengan prioritas z-index tertinggi yang menampilkan nama label antrean, rincian jumlah item, serta total nominal belanjaan yang akan dihapus secara transparan.',
            'Sinkronisasi Realtime & Pembaruan Indikator: Penghapusan antrean secara otomatis memperbarui penyimpanan lokal (localStorage), menyegarkan daftar antrean secara instan tanpa tumpukan riwayat browser (history-safe), dan memperbarui lencana indikator antrean di bilah navigasi header kasir.',
            'Elevasi Z-Index Modal Konfirmasi Global: Menyesuaikan z-index custom-confirm-modal ke z-[10005] agar selalu tampil di lapisan terdepan saat dipanggil dari modal kasir, pemindai barcode, maupun panel admin tingkat tinggi.'
        ]
    },
    {
        id: 'log-1-9-17',
        version: 'v1.9.17',
        date: '2026-09-24',
        title: 'Fitur Parkir Transaksi & Antrean Fleksibel (Hold & Recall Cart), Pintasan Keyboard Kasir F6/F8, & Audio Chime Kasir',
        category: 'feature',
        badge: 'Pending Cart Hold & Recall v1.9.17',
        items: [
            'Sistem Parkir Transaksi / Hold & Recall Cart: Kasir dapat menahan transaksi belanjaan pembeli sementara saat antrean padat (misal pelanggan hendak mengambil barang tambahan atau dompet tertinggal) tanpa perlu membatalkan atau mengulang scan dari awal.',
            'Penyimpanan Antrean Persisten & Aman (Multi-Queue): Transaksi tertahan disimpan aman di penyimpanan lokal (pos_held_carts) lengkap dengan varian, harga grosir, diskon item & diskon global, serta data pelanggan, sehingga tidak akan hilang meskipun halaman kasir dimuat ulang atau beralih tab.',
            'Proteksi Anti Kehilangan Data (Zero Data Loss Protection): Saat kasir memanggil transaksi tertahan sementara keranjang saat ini sedang berisi item, sistem otomatis menawarkan opsi cerdas untuk menyimpan transaksi aktif ke antrean baru sebelum memuat antrean yang dipanggil.',
            'Indikator Antrean Dinamis (Live Pulsing Badge): Header Kasir Storefront dan Strip Kasir Admin dilengkapi tombol badge antrean interaktif yang berkedip jika terdapat transaksi tertahan yang siap dilanjutkan.',
            'Pintasan Keyboard Khusus Kasir (Keyboard Shortcuts): Tombol F6 / F7 untuk langsung Tahan Transaksi, dan tombol F8 untuk membuka Daftar Transaksi Tertahan secara instan tanpa perlu menyentuh mouse.',
            'Umpan Balik Suara Kasir (Synthetic Chime Web Audio API): Dilengkapi nada konfirmasi sintetis yang lembut dan elegan saat transaksi diparkir (ascending chime) dan saat transaksi dipanggil kembali (bright double chime).'
        ]
    },
    {
        id: 'log-1-9-16',
        version: 'v1.9.16',
        date: '2026-09-24',
        title: 'Sentralisasi Ekosistem Transaksi: Eliminasi Riwayat Terpisah POS Kasir, Otomasi Pemrosesan Pesanan, & Filter Multi-Channel CMS Admin',
        category: 'feature',
        badge: 'Centralized Orders Architecture v1.9.16',
        items: [
            'Sentralisasi 100% Pesanan ke CMS Admin (Single Source of Truth): Menegaskan CMS Admin sebagai pusat kendali tunggal seluruh pesanan bisnis. Menghapus antarmuka riwayat terpisah di POS Kasir (pos-history) sehingga alur kerja tidak lagi redundant dan membebani antarmuka kasir.',
            'Otomasi Pemrosesan Transaksi Kasir (Auto-Processed Orders): Transaksi yang dibuat oleh kasir/karyawan di POS langsung otomatis terproses dengan status Selesai (atau Diproses untuk Tempo) dan status bayar Lunas, tanpa perlu verifikasi manual selayaknya order online storefront.',
            'Pemisahan Peran yang Jelas (Storefront vs POS Kasir): Website Storefront difokuskan khusus untuk pelanggan umum belanja online secara mandiri, sedangkan POS Kasir difokuskan khusus untuk admin/kasir/karyawan melayani transaksi langsung di toko fisik secara cepat dan efisien.',
            'Filter Sumber Pesanan di CMS Admin: Menyediakan tombol filter instan (Semua Pesanan, Kasir POS, dan Storefront Web) di menu Pesanan CMS Admin serta badge identitas visual (Kasir vs Web Storefront) pada kartu dan detail pesanan.',
            'Ekspor Laporan Excel Lengkap dengan Sumber Transaksi: Menyertakan kolom Sumber Pesanan (Kasir POS beserta nama kasir vs Website Storefront) pada file unduhan Excel (.xlsx) untuk mempermudah audit dan perbandingan performa penjualan fisik toko vs online.',
            'Terminal Kasir Lebih Ramping & Cepat: Ukuran bundel modul kasir berkurang signifikan, waktu muat lebih instan, dan antarmuka header kasir tampil lebih bersih dan fokus melayani transaksi pelanggan di meja kasir.'
        ]
    },
    {
        id: 'log-1-9-15',
        version: 'v1.9.15',
        date: '2026-09-24',
        title: 'Integrasi Ekosistem Tunggal POS Kasir: Sinkronisasi Pesanan Toko (freshmart_orders), Pengaturan Stok Dinamis (useStock), & Resolusi Riwayat Kasir',
        category: 'feature',
        badge: 'Unified POS Ecosystem v1.9.15',
        items: [
            'Sinkronisasi Pesanan Terpadu (1 Ekosistem Kerja): Mengintegrasikan alur transaksi POS Kasir langsung ke koleksi pesanan utama toko (freshmart_orders). Setiap transaksi kasir (Tunai, QRIS, Bank, maupun Tempo) otomatis tercatat sebagai pesanan resmi dengan label source: "pos", langsung muncul di menu Pesanan CMS Admin, Laporan Penjualan (Dashboard Omset), Pajak & Keuangan, dan Piutang Tempo.',
            'Dukungan Pengaturan Stok Dinamis (useStock): Alur kasir kini 100% selaras dengan pengaturan toko di CMS. Jika useStock bernilai true, kasir secara cerdas memvalidasi stok produk/varian dan memotong stok otomatis di Firestore serta inventaris lokal. Jika useStock bernilai false, kasir dapat menjual barang tanpa hambatan batas stok (sama persis dengan alur belanja storefront).',
            'Resolusi Akses Riwayat Transaksi Kasir: Memperbaiki kendala riwayat kasir yang tidak bisa dibuka dengan menghubungkan pembacaan transaksi langsung ke data pesanan kasir di freshmart_orders (dengan fallback sub-koleksi pos_transactions) dan menghilangkan pemblokiran sesi kaku saat dibuka dari dashboard seller.',
            'Perbaikan Penanggalan Lokal (Timezone-Aware Date Filter): Mengganti generator tanggal UTC (yang meleset mundur 1 hari pada jam malam WIB) dengan penanggalan lokal presisi (getLocalDateStr()), menjamin rekap omset dan transaksi harian kasir selalu akurat.',
            'Penyelarasan Firestore Security Rules: Memperbarui aturan akses Firestore untuk freshmart_orders dan pos_transactions sehingga staf kasir dan admin toko dapat membaca dan mencatat transaksi secara instan tanpa error permission-denied.'
        ]
    },
    {
        id: 'log-1-9-14',
        version: 'v1.9.14',
        date: '2026-09-24',
        title: 'Penyempurnaan Antarmuka Keranjang Kasir POS: Display Varian Informatif, Harmonisasi Tema Warna, & Eliminasi Header Wrapping',
        category: 'polish',
        badge: 'POS Cart UI & Theme Polish v1.9.14',
        items: [
            'Display Varian Informatif (Anti-Clipped Title): Mengatasi judul produk yang terpotong menjadi elipsis (misal: "NO DROP 4 KG ANTI BOCOR —...") pada kartu keranjang transaksi kasir. Nama produk kini tampil bersih, dan detail varian disajikan dalam badge terdedikasi lengkap dengan ikon layer-group.',
            'Harmonisasi Tema Brand pada Badge Varian (Zero Hardcode): Mengganti warna hardcoded indigo (bg-indigo-600) pada badge varian keranjang dengan variabel tema toko var(--color-primary), memastikan keselarasan visual penuh di seluruh aplikasi.',
            'Eliminasi Header Wrapping pada Layar Sempit: Mengoptimasi struktur header drawer keranjang mobile (whitespace-nowrap & min-w-0) sehingga counter kuantitas (1) tidak melompat ke baris baru, serta tombol "Kosongkan" tampil sejajar rapi dengan ikon tong sampah.',
            'Penyelarasan Header Keranjang Desktop: Menerapkan perataan fleksibel yang sama pada panel keranjang kasir desktop untuk tampilan yang konsisten dan profesional.'
        ]
    },
    {
        id: 'log-1-9-13',
        version: 'v1.9.13',
        date: '2026-09-23',
        title: 'Solusi Definitif Tampilan Kasir POS Admin CMS Terpotong: Arsitektur Viewport Lock (.admin-pos-mode) & Eliminasi Tabrakan Double-Scroll',
        category: 'fix',
        badge: 'Admin POS Viewport Engine v1.9.13',
        items: [
            'Eliminasi Tabrakan Double-Scroll (Anti-Nested Scroll Collision): Mengatasi akar masalah kartu produk terpotong setengah layar dengan area kosong putih raksasa di bawahnya saat kasir POS dibuka melalui CMS Admin di smartphone. Masalah terjadi karena kontainer luar .scroll-content ikut tergeser saat kasir di-swipe, sehingga search bar dan strip aksi melorot ke balik header.',
            'Arsitektur Viewport Lock (.admin-pos-mode): Menerapkan mode viewport terisolasi saat tab Kasir POS aktif di CMS Admin, mengunci kontainer luar (#view-admin .scroll-content) ke overflow: hidden, padding: 0, dan tinggi 100% penuh.',
            'Pencarian & Kategori Tetap Terpaku (Sticky Action Strip & Search): Bilah pencarian nama/SKU/barcode dan chip kategori produk kini tetap terkunci rapi di posisi atas, tidak pernah terdorong hilang atau tertutup header saat kasir menggulir katalog.',
            'Pengguliran Katalog Internal Mulus: Kontainer katalog produk (#pos-catalog-grid) kini memegang kontrol pengguliran internal penuh dari batas bawah filter hingga dasar layar, memungkinkan kasir melihat seluruh produk hingga baris terakhir dengan lancar tanpa celah kosong.',
            'Tata Letak Responsif Leluasa (Mobile & Desktop): Pada layar desktop, kontainer POS kini membentang penuh 100% lebar layar (tidak lagi terjepit batas max-w-5xl), menghadirkan pengalaman terminal kasir split-panel 63:37 yang profesional.',
            'Konsistensi Tema Dinamis (Zero Hardcode): Seluruh elemen aksen, tombol, dan indikator tetap terikat murni pada variabel CSS var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-12',
        version: 'v1.9.12',
        date: '2026-09-23',
        title: 'Pelepasan Listener Realtime Terkelola Saat Logout & Navigasi (Zero Missing or Insufficient Permissions)',
        category: 'fix',
        badge: 'Firestore Security & Listener Lifecycle v1.9.12',
        items: [
            'Pelepasan Listener Terkelola (Graceful Listener Teardown): Menjamin seluruh snapshot realtime Firestore (riwayat transaksi POS histUnsubscribe, pesanan admin aOrdLst, pelanggan aCustLst, dan ulasan aRevLst) dicabut (detached) secara bersih sebelum auth.signOut() dieksekusi, melenyapkan error FirebaseError: Missing or insufficient permissions saat admin atau kasir keluar sesi.',
            'Silent Teardown Guard pada Riwayat Kasir: Listener riwayat transaksi kini secara otomatis mendeteksi pemutusan sesi unauthenticated dan membatalkan subscription secara instan tanpa memicu log peringatan maupun notifikasi toast error palsu di layar.',
            'Pembersihan Lintas Rute (Cross-Route Teardown): Fungsi detachPOSHistoryListener dipanggil otomatis saat berpindah tab CMS Admin, kembali ke halaman menu utama, berganti view router, maupun saat tombol kembali ke kasir ditekan.',
            'Penyelarasan Aturan Keamanan Firestore: Firestore Security Rules untuk pos_transactions dan orders diperkuat untuk mengizinkan seluruh staf toko yang terotentikasi (request.auth != null) mengakses dan mencatat transaksi kasir secara mulus tanpa batasan list query.',
            'Zero Hardcoded Theme: Mempertahankan 100% konsistensi tema dinamis var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-11',
        version: 'v1.9.11',
        date: '2026-09-23',
        title: 'Sinkronisasi Data Rekening Bank Toko pada Modal Pembayaran Transfer POS Kasir (Multi-Field Mapping & Auto-Fetch)',
        category: 'fix',
        badge: 'POS Bank Account Engine v1.9.11',
        items: [
            'Resolusi Data Rekening Bank Kosong: Memperbaiki mapping field rekening bank pada modal pembayaran transfer kasir POS yang sebelumnya mencari properti b.name, b.number, b.holder (sehingga selalu tampil "Rekening bank belum diatur"). Kini diselaraskan penuh dengan skema CMS Admin (b.bankName, b.bankAccount, b.bankOwner) serta fallback multi-properti.',
            'Auto-Prefetch & Reactive Bank Loader: Menambahkan fungsi ensureBanksLoaded() yang memuat data rekening toko langsung dari cms_data Firestore secara reaktif saat modal pembayaran dibuka atau saat metode Bank dipilih, menjamin pilihan rekening selalu muncul instan.',
            'Indikator & Petunjuk Transfer Elegan: Menambahkan kartu panduan transfer berwarna hijau emerald yang ramah kasir dan peringatan jika data rekening belum diisi di CMS Admin.',
            'Zero Hardcoded Aesthetics: Seluruh elemen input, select, dan indikator terintegrasi dengan variabel tema toko var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-10',
        version: 'v1.9.10',
        date: '2026-09-23',
        title: 'Resolusi Tuntas Izin Akses Firestore Pelanggan (Direct Document Get & Rules Auto-Sync) & Peningkatan Engine Pencarian Member POS',
        category: 'fix',
        badge: 'Firestore Security & Member Direct Get v1.9.10',
        items: [
            'Resolusi Error Firestore Security Rules: Mengatasi error Missing or insufficient permissions pada POS kasir saat mengakses koleksi customers. Query dioptimasi menggunakan metode paralel direct document get (.doc(phone).get()) yang 100% diizinkan oleh rule keamanan aktif (allow get: if true;), tanpa ketergantungan pada permission list admin.',
            'Pembaruan Firestore Security Rules: Memperbarui aturan akses Firestore untuk /customers/{phone} menjadi allow read: if true; dan allow create, update: if isAdmin() || isCashier();, memberikan izin penuh bagi kasir terdaftar untuk membaca dan mendaftarkan data pelanggan.',
            'Eliminasi Log Error Spam Console: Membungkus pemanggilan koleksi pelanggan dalam silent error handling sehingga konsol browser kasir bersih dari peringatan permission.',
            'Optimasi Input Nomor Telepon Kasir: Debounced lookup disesuaikan secara cerdas agar tidak memicu query premature saat kasir baru mengetikkan beberapa digit awal nomor HP, dan menyediakan petunjuk pencarian ramah kasir bila data tidak ditemukan.',
            'Zero Hardcoded Aesthetics: Menjaga 100% integritas visual dan keselarasan palet warna brand var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-9',
        version: 'v1.9.9',
        date: '2026-09-23',
        title: 'Penyempurnaan Posisi Icon Modal POS Kasir & Sistem Pencarian Terpadu Member VIP (Multi-Format HP, Firestore Direct Query, & Auto Poin)',
        category: 'fix',
        badge: 'POS Centering & Member VIP Engine v1.9.9',
        items: [
            'Presisi Posisi Icon Modal Bayar Kasir: Mengubah struktur tombol Tipe Pelanggan (Umum, Member, Tempo) dan Metode Pembayaran (Tunai, QRIS, Bank, Tempo) dengan flex-col dan items-center sehingga icon berada tepat di tengah (center) di atas teks label, tampil rapi, proporsional, dan elegan.',
            'Direct Firestore Query Fallback: Memperbaiki kegagalan pembacaan data member pada POS kasir dengan menambahkan mekanisme query langsung ke koleksi Firestore (freshmart/cms_data/customers) jika cache lokal appData.customers belum termuat, sehingga member terdaftar selalu langsung terbaca.',
            'Pencarian Fleksibel Multi-Format (Indonesian Phone Normalization): Sistem pencarian otomatis mengenali berbagai variasi penulisan nomor HP (08xxx, 628xxx, +62 8xxx, maupun 8xxx) dengan mencocokkan digit inti (core digits), serta mendukung pencarian instan berdasarkan Nama Lengkap maupun ID Member.',
            'Pencarian Dinamis (Live Debounced & Auto-Picker): Mendukung deteksi live saat mengetik (debounce 300ms) dan tombol Enter/Cek. Jika terdapat beberapa member dengan nama/nomor serupa, sistem menampilkan daftar pemilih interaktif (interactive picker) lengkap dengan saldo poin dan tingkatan VIP.',
            'Perlindungan Nama Member & Akumulasi Poin Loyalitas Kasir: Memperbaiki nama pembeli pada transaksi kasir agar tetap menyimpan nama asli member (tidak kembali ke Pelanggan Umum), serta secara otomatis menambahkan perolehan poin loyalitas pesanan ke saldo member di Firestore dan menampilkan rincian poin di struk thermal.',
            'Zero Hardcoded Theme: Seluruh tombol aktif, badge status, dan aksen warna terikat murni ke variabel CSS --color-primary tanpa ada nilai warna statis.'
        ]
    },
    {
        id: 'log-1-9-8',
        version: 'v1.9.8',
        date: '2026-09-23',
        title: 'Solusi Definitif Anti-Gepeng Grid POS Kasir: Eliminasi Flex-Collapse, Hard Min-Height 220px, & Dedicated Grid Engine',
        category: 'fix',
        badge: 'Definitive POS Anti-Collapse v1.9.8',
        items: [
            'Solusi Permanen Kartu Gepeng: Mengeliminasi fenomena circular dependency flex-collapse di Android WebView dan browser mobile dengan menerapkan batas tinggi minimum absolut 220px pada seluruh kartu produk POS (.pos-product-card) dan 120px pada kotak gambar (.pos-img-box) sehingga secara matematis tidak mungkin lagi menciut atau gepeng.',
            'Direct In-Flow Image Architecture: Mengganti trik pseudo-element out-of-flow dengan arsitektur direct in-flow gambar dan placeholder berasio 1:1 murni, memastikan dimensi foto produk terhitung instan oleh engine rendering sejak frame pertama.',
            'Dedicated POS Grid Engine: Mengganti utility class Tailwind pada kontainer katalog dengan engine CSS Grid terdedikasi (.pos-catalog-grid-mode & .pos-catalog-list-mode) tanpa perata min-content yang berisiko menekan track tinggi kartu.',
            'Konsistensi Tema Brand Otomatis: Seluruh elemen visual (border aktif keranjang, badge grosir, counter kuantitas, harga, tombol tambah) terhubung otomatis ke variabel tema --color-primary tanpa ada nilai warna hardcoded.',
            'Sinkronisasi Platform Native Penuh: Menjalankan pipeline build produksi, mirroring distribusi flashdisk dan update versi Android Capacitor demi kesiapan rilis langsung.'
        ]
    },
    {
        id: 'log-1-9-7',
        version: 'v1.9.7',
        date: '2026-09-23',
        title: 'Penyempurnaan Tampilan Grid POS Kasir: Sistem CSS Anti-Collapse Kotak Gambar, Konsistensi Warna Brand Tema, dan Dark Mode Penuh',
        category: 'fix',
        badge: 'POS Grid Fix & Theme Konsistensi v1.9.7',
        items: [
            'Perbaikan Definif Kartu Grid Tergencet (Anti-Collapse System): Mengganti strategi aspect-ratio CSS yang tidak stabil dengan teknik padding-top:100% pada pseudo-element ::before — teknik paling robust yang menjamin kotak gambar produk selalu berbentuk kotak sempurna 1:1 tanpa pernah collapse menjadi pil tipis, bahkan saat data gambar belum selesai dimuat.',
            'CSS Class System Terdedikasi untuk POS Katalog: Seluruh tampilan kartu produk (grid dan list) kini menggunakan sistem class CSS dedicated (.pos-product-card, .pos-img-box, .pos-img-inner, .pos-badge, .pos-card-footer, dll.) di src/style.css — bukan lagi campuran inline Tailwind yang sulit di-debug dan mudah bentrok dengan Purge CSS.',
            'Konsistensi Warna Brand pada Badge GROSIR: Badge label GROSIR yang sebelumnya hardcode warna amber kini menggunakan var(--color-primary) — otomatis mengikuti tema warna brand toko tanpa perlu diubah manual jika warna toko berganti.',
            'Dark Mode Penuh pada Komponen Kartu POS: Menambahkan aturan dark mode lengkap (.dark .pos-product-card, .dark .pos-img-box, .dark .pos-img-placeholder, dll.) agar tampilan POS Kasir tetap elegan dan terbaca saat mode gelap diaktifkan.',
            'Mode List Kompak Lebih Proporsional: Thumbnail 52px di mode list kini memiliki fixed height yang tidak bisa collapse, dengan placeholder fallback yang konsisten ukurannya menggunakan class yang sama (.pos-list-thumb) untuk semua kondisi ada/tidak ada gambar.',
            'Hover dan Active State Konsisten: Animasi hover (translateY-2px, shadow naik) dan active (scale 0.98) kini didefinisikan di CSS class sehingga konsisten di seluruh kartu dan tidak bergantung pada ketersediaan Tailwind class di bundle produksi.'
        ]
    },
    {
        id: 'log-1-9-6',
        version: 'v1.9.6',
        date: '2026-09-22',
        title: 'Pembaruan Tampilan Visual POS Kasir: Perbaikan Keruntuhan Kartu Produk, Aspek Rasio Gambar Anti-Gepeng, Mode Tampilan Grid & List, Placeholder Visual & Harmonisasi Tema Emas',
        category: 'feature',
        badge: 'Visual POS Kasir Upgrade v1.9.6',
        items: [
            'Perbaikan Total Keruntuhan Kartu Produk (Anti-Collapse): Memperbaiki masalah kartu produk yang menciut menjadi pil datar akibat hilangnya aturan aspect-ratio — kini dijamin rasio presisi 1:1 dengan batas ketinggian minimum 120px dan utilitas CSS eksplisit.',
            'Pemisahan Badge dari Teks & Judul: Badge VARIAN dan GROSIR kini ditempatkan rapi di dalam kotak foto/media dengan efek floating glassmorphism, tidak lagi menumpuk atau menutupi judul barang dan harga.',
            'Placeholder Visual Produk Tanpa Gambar: Produk tanpa foto (seperti paku, semen, dll) kini menampilkan bingkai placeholder elegan dengan ikon kotak dan kategori produk yang informatif, bukan lagi area kosong atau rusak.',
            'Pengalih Mode Tampilan (Grid vs List Kompak): Kasir kini dapat beralih antara Tampilan Grid Foto (2–5 kolom) dan Tampilan List Baris Kompak (dengan thumbnail 54px, kategori, harga jelas, dan tombol tambah cepat) yang sangat cepat dan nyaman di HP.',
            'Harmonisasi Header POS dengan Brand Toko: Menyelaraskan header POS Storefront dari warna gelap kaku ke warna tema keemasan Toko Putri (var(--color-primary)) yang elegan dan konsisten di seluruh aplikasi.',
            'Thumbnail Visual di Keranjang Kasir: Setiap item di keranjang transaksi kasir kini dilengkapi gambar thumbnail mini 40px untuk verifikasi barang yang lebih cepat dan bebas salah input.'
        ]
    },
    {
        id: 'log-1-9-5',
        version: 'v1.9.5',
        date: '2026-09-22',
        title: 'Redesain Modern POS Kasir Mobile-First: Floating Cart Bar, Bottom Sheet Keranjang, Quick-Cash Denomination, Audio Feedback Kasir & Integrasi Navigasi Back',
        category: 'feature',
        badge: 'Modern Mobile POS Redesign v1.9.5',
        items: [
            'Redesain Antarmuka Mobile-First Penuh: Menata ulang tata letak POS Kasir secara menyeluruh untuk kenyamanan layar sentuh smartphone dan tablet — katalog produk 2-kolom lega tanpa layout terjepit 60:40.',
            'Floating Sticky Cart Bar di HP: Bilah keranjang belanja mengambang di bagian bawah layar smartphone yang otomatis muncul secara mulus saat ada item di keranjang dengan informasi total belanja dan tombol akses 1-sentuhan.',
            'Bottom Sheet Keranjang (Slide-up Drawer): Membuka keranjang transaksi kasir dalam format lembar geser bawah yang lega, lengkap dengan penyesuaian kuantitas [−] qty [+], diskon per-item, dan tombol pembayaran.',
            'Tata Letak Desktop Split-Panel Leluasa: Di layar desktop/komputer kasir, layar terbagi proporsional 63% katalog produk dan 37% panel penagihan & keranjang aktif secara berdampingan tanpa scrollbar ganda.',
            'Tombol Uang Cepat (Quick-Cash Denominations): Tombol pecahan nominal uang tunai cepat (Uang Pas, Rp 10.000, 20.000, 50.000, 100.000, 200.000, 500.000) untuk input pembayaran instan sekali klik.',
            'Indikator Dinamis Kembalian / Kekurangan: Tampilan visual cerdas status kembalian (hijau jika cukup/kembalian, merah jika masih kurang) dengan proteksi tombol selesai transaksi.',
            'Audio Beep Sintetis Kasir (Web Audio API): Umpan balik suara beep kasir yang taktil dan responsif saat scan barcode, klik tambah produk, atau penambahan kuantitas tanpa membebani kuota aset eksternal.',
            'Penyelarasan Navigasi Hardware Back Button: Integrasi riwayat modal router untuk drawer keranjang dan popup pembayaran, sehingga tombol Back Android menutup dialog secara berurutan tanpa keluar dari mode kasir.'
        ]
    },
    {
        id: 'log-1-9-4',
        version: 'v1.9.4',
        date: '2026-09-22',
        title: 'Mode POS Kasir Mandiri Storefront, Autentikasi Kasir & Manajemen Akun CMS, Dukungan Multivarian & Harga Grosir, serta Desain Responsif Presisi',
        category: 'feature',
        badge: 'POS Kasir Storefront & Multi-Varian v1.9.4',
        items: [
            'Mode POS Kasir Mandiri di Storefront: Mode POS Kasir dipisahkan secara elegan dari menu pengaturan toko dan ditempatkan langsung di storefront pembeli melalui toggle ikon kasir (cash register) pada header aplikasi.',
            'Indikator & Visibilitas Otomatis: Ikon kasir di header storefront dilengkapi indikator status aktif (dot hijau berdenyut) dan otomatis tampil jika terdapat akun kasir yang aktif/terdaftar di toko.',
            'Sistem Autentikasi & Login Kasir Mandiri: Kasir masuk menggunakan modal login khusus kasir (Email/Username & Password). Sesi kasir terisolasi dari admin utama demi privasi dan keamanan sistem toko.',
            'Manajemen Akun Kasir di CMS Admin: Administrator toko memiliki kontrol penuh untuk membuat, mendaftarkan, mengaktifkan/menonaktifkan, dan menghapus akun akses kasir melalui menu khusus "Akun Kasir" di Admin CMS.',
            'Dukungan Penuh Multivarian di POS Kasir: Menjual produk dengan varian warna, ukuran, atau tipe kini sangat mudah. Kasir cukup mengklik produk bervarian, dan drawer/sheet pemilihan varian interaktif akan muncul dengan opsi pilihan, foto produk, harga varian dinamis, serta status stok real-time.',
            'Kalkulasi Harga Grosir Bertingkat Otomatis: Sistem kasir otomatis mendeteksi dan menerapkan potongan harga grosir bertingkat saat kuantitas pembelian di kasir memenuhi syarat minimum grosir, lengkap dengan label hemat harga grosir.',
            'UI/UX Responsif Presisi (Mobile, Tablet, Desktop): Tampilan kasir dirancang tanpa kompromi (anti-jomplang) — format split-panel leluasa di layar desktop/tablet serta navigasi tab fleksibel (Katalog & Keranjang Kasir) dengan bilah aksi bawah yang ramah sentuhan jempol di smartphone.',
            'Penguatan Keamanan Firestore Rules: Sub-koleksi cashier_accounts diproteksi ketat hanya bisa ditulis oleh Admin Toko (isAdmin()), dan pencatatan transaksi POS (pos_transactions) divalidasi khusus untuk admin serta kasir resmi yang terautentikasi.',
            'Arsitektur Kode Modular & Lazy-Loading: Modul pos-auth, pos-variant-sheet, dan pos-cashier-admin dimuat secara efisien (lazy-loading) tanpa membebani kecepatan pemuatan awal storefront bagi pelanggan umum.'
        ]
    },
    {
        id: 'log-1-9-3',
        version: 'v1.9.3',
        date: '2026-09-22',
        title: 'Fitur POS Kasir Sungguhan — Transaksi Langsung di Admin CMS (Tanpa Manajemen Stok)',
        category: 'feature',
        badge: 'POS Kasir v1.9.3',
        items: [
            'Kasir POS Sungguhan di Admin CMS: Admin toko kini dapat memproses transaksi jual-beli langsung dari dalam Admin CMS tanpa keluar ke halaman toko. Kasir mendukung semua produk katalog toko tanpa perlu manajemen stok (bebas pilih, bebas beli seperti di website).',
            'UI Split-Panel Kasir: Layar kasir terbagi dua panel — panel kiri menampilkan katalog produk grid (foto, nama, harga) yang bisa diklik langsung, panel kanan menampilkan keranjang transaksi aktif secara real-time.',
            'Scan Barcode via Scanner USB: Kasir mendukung input barcode fisik melalui scanner USB yang otomatis terbaca sebagai keyboard. Produk langsung ditambahkan ke keranjang jika ditemukan di katalog, atau muncul di field pencarian jika tidak ditemukan.',
            'Diskon Fleksibel Per Item + Global: Kasir dapat memberikan diskon dalam satuan Rupiah per item (misalnya diskon Rp 5.000 untuk semen saja) sekaligus diskon global keseluruhan untuk semua item dalam satu transaksi.',
            'Pilihan Pelanggan (Umum / Member / Tempo): Kasir dapat memilih tipe pelanggan — Umum (tanpa data), Member (lookup by nomor HP dari database member), atau Tempo (piutang, otomatis masuk modul Piutang Tempo).',
            'Metode Bayar Lengkap: Transaksi mendukung 4 metode pembayaran — Tunai (input nominal + hitung kembalian otomatis), QRIS (tampil QR code toko), Transfer Bank (pilih rekening dari daftar bank toko), dan Tempo/Piutang (input DP opsional).',
            'Integrasi Piutang Tempo Otomatis: Jika kasir memilih metode Tempo, transaksi otomatis tercatat sebagai piutang di modul Piutang Tempo CMS (tab terpisah). Jatuh tempo, cicilan, dan tagihan WhatsApp diatur dari sana seperti biasa.',
            'Cetak Struk Thermal Kasir: Setelah transaksi berhasil, kasir dapat mencetak struk thermal langsung dari browser (kompatibel printer thermal USB/Bluetooth via dialog cetak). Struk mencantumkan nama toko, tanggal, nomor transaksi, item, total, dan kembalian.',
            'Riwayat & Rekap Transaksi Kasir: Tab Riwayat POS menampilkan semua transaksi hari ini (default) lengkap dengan rekap total omset, jumlah transaksi, breakdown per metode bayar, dan produk terjual. Filter tanggal tersedia untuk melihat hari lain.',
            'Void Transaksi: Transaksi yang salah dapat di-void (dibatalkan) dari Riwayat POS. Transaksi void tidak dihitung dalam rekap omset dan ditampilkan dengan label VOID.',
            'Data Terpisah dari Order Online: Semua transaksi kasir tersimpan di koleksi Firestore pos_transactions yang terpisah dari pesanan online (orders), sehingga laporan kasir dan laporan online tidak bercampur.',
            'Modul Terpisah & Lazy-Loading: Modul Kasir POS dikemas sebagai chunk terpisah (module-pos, 38.89 KB) dan hanya dimuat saat admin membuka tab Kasir — tidak memengaruhi kecepatan storefront pelanggan.'
        ]
    },
    {
        id: 'log-1-9-2',

        version: 'v1.9.2',
        date: '2026-09-21',
        title: 'Geser & Atur Urutan Produk (Drag & Drop Reorder), Verifikasi Domain Google, Akselerasi Core Web Vitals, & Optimasi PageSpeed',
        category: 'feature',
        badge: 'Product Reorder, SEO & Performance v1.9.2',
        items: [
            'Geser Urutan Produk (Drag & Drop): Pemilik toko dapat langsung menahan dan menggeser kartu produk di halaman Admin CMS untuk mengatur urutan tampilan sesuka hati — mendukung sentuhan jari di HP (touch) maupun seret mouse di komputer.',
            'Tombol Panah ▲▼ Geser Cepat: Setiap kartu produk dilengkapi tombol naik/turun untuk menggeser produk satu posisi secara instan tanpa perlu drag jauh, sangat cocok untuk HP layar kecil.',
            'Badge Nomor Urut #1, #2, ... (Klik untuk Pindah Cepat): Nomor urutan produk ditampilkan di setiap kartu. Klik badge untuk langsung memindahkan produk ke nomor urut tertentu dengan cepat.',
            'Rapikan per Kategori Otomatis (1 Klik): Tombol "Rapikan per Kategori" mengelompokkan produk sejenis (paku dengan paku, semen dengan semen, cat dengan cat) secara otomatis dalam satu klik tanpa perlu geser manual satu-satu.',
            'Menu Urutkan Cepat: Dropdown "Urutkan Cepat" tersedia dengan pilihan: Nama A-Z, Nama Z-A, Harga Termurah, Harga Termahal, dan Reset ke Urutan Terbaru — semuanya tersimpan permanen ke cloud.',
            'Penyimpanan Otomatis & Sinkronisasi Real-Time: Setiap perubahan urutan langsung tersimpan ke database cloud (Firestore) dan otomatis tersinkron ke semua perangkat tanpa reload.',
            'Urutan Tercermin di Storefront Pembeli: Urutan produk yang diatur seller menjadi tampilan default halaman Beranda dan Katalog pembeli. Pembeli tetap bebas memilih filter sendiri (Termurah, Termahal, A-Z) sesuai keinginan.',
            'Manajemen Urutan Cerdas: Produk baru otomatis masuk posisi #1 (terdepan), produk dihapus otomatis bersih dari daftar urutan, dan produk duplikat otomatis muncul tepat di sebelah produk aslinya.',
            'Verifikasi Kepemilikan Domain Google Search Console: Penambahan file verifikasi HTML dan meta tag kepemilikan domain di root untuk pengindeksan SEO mesin pencari Google yang optimal.',
            'Eliminasi Total CLS (Cumulative Layout Shift): Mengatasi pergeseran tata letak (dari 0.835 menjadi stabil <0.05) dengan pre-rendered skeleton cards pada banner, kategori, brand, dan katalog produk, dimensi width/height eksplisit pada semua gambar, serta font-display: swap pada Font Awesome.',
            'Lazy-Loading Modul Admin Seller CMS: Pemisahan dinamis bundle modul Admin (510 KB) dari storefront pelanggan, sehingga pengunjung toko tidak perlu mendownload script admin, memangkas ukuran JS kritis dan mendongkrak skor PageSpeed Mobile.',
            'Akselerasi Core Web Vitals (FCP & LCP Instan): Penghapusan jeda splash screen, render skeleton instan pada kunjungan pertama (first-load), sinkronisasi paralel Firestore Promise.all(), banner LCP loading="eager" & fetchpriority="high".',
            'Penyempurnaan Stabilitas Banner & Aksesibilitas: Perbaikan referensi indeks slider banner agar interaksi video/audio dan slide berjalan mulus tanpa error, serta pemenuhan standar aksesibilitas a11y pada tautan footer.'
        ]
    },
    {
        id: 'log-1-9-1',
        version: 'v1.9.1',
        date: '2026-09-20',
        title: 'Sistem Proteksi Member Terkunci (Nama Permanen & Anti Duplikasi), Label Pembeda Member vs Umum di CMS & Piutang Tempo, Serta Penguatan Aturan Keamanan Database Firestore',
        category: 'feature',
        badge: 'Member Locking & Security Rules v1.9.1',
        items: [
            'Sistem Identitas Member Terkunci (Anti Duplikasi Akun): Data nama member resmi yang tersimpan di database terkunci secara permanen. Pelanggan maupun formulir pemesanan tidak dapat mengganti nama member saat bertransaksi dengan nomor HP yang sama, menjamin keaslian data akun member (hanya Admin toko yang dapat mengubah nama di CMS).',
            'Otomatisasi Nama Terdaftar pada Pesanan: Pesanan baru yang menggunakan nomor HP member secara otomatis disinkronkan ke nama resmi yang terdaftar di database toko, bukan nama acak yang diketik pelanggan saat checkout.',
            'Pemisahan Cerdas Konfirmasi Member di CMS: Tombol "+ Konfirmasi & Daftarkan Sebagai Member" kini eksklusif hanya muncul untuk Pelanggan Umum. Untuk pelanggan yang sudah terdaftar resmi, sistem langsung menyajikan badge hijau "Member Terdaftar (Terverifikasi)" tanpa tombol konfirmasi berulang.',
            'Pembeda Visual Label Member vs Umum pada Piutang Tempo: Menambahkan badge status [Member] dan [Umum] pada kartu nota Piutang Tempo dan riwayat pembayaran angsuran, memudahkan kasir/admin memverifikasi hak kelayakan transaksi tempo pelanggan.',
            'Ekspor Rekap Pesanan Excel Lebih Lengkap: Menambahkan kolom baru "Tipe Pelanggan" (Member Resmi / Pelanggan Umum) dan kolom "No. WhatsApp" pada ekspor berkas Excel (.xlsx) rekap pesanan toko.',
            'Penguatan Aturan Keamanan Cloud (Firestore Security Rules): Memperketat firestore.rules pada koleksi customers di mana pendaftaran member baru dibatasi khusus hak akses Admin (isAdmin()), sementara hak update saat checkout non-admin dibatasi hanya untuk penambahan saldo poin loyalty dan waktu pesanan terakhir.',
            'Penyempurnaan Banner Informasi Toko: Menghilangkan badge promo dan pemotongan teks deskripsi (line-clamp) pada banner, menampilkan seluruh teks informasi secara utuh, rapi, dan nyaman dibaca.'
        ]
    },
    {
        id: 'log-1-9-0',
        version: 'v1.9.0',
        date: '2026-09-20',
        title: 'Drop-Point Delivery: Kirim Pesanan ke Lokasi Berbeda (Proyek, Tukang, Mandor) dengan Kalkulasi Ongkir Presisi Toko-ke-Tujuan',
        category: 'feature',
        badge: 'Drop-Point Delivery v1.9.0',
        items: [
            'Fitur Kirim ke Lokasi Berbeda (Drop-Point): Pembeli dapat mengorder dari rumah namun menentukan lokasi pengiriman yang berbeda (contoh: ke lokasi proyek, tukang, atau mandor) dengan satu toggle mudah di halaman checkout.',
            'Kalkulasi Ongkir Presisi Toko-ke-Tujuan: Ongkos kirim dihitung akurat berdasarkan jarak dari Toko Putri ke lokasi tujuan (bukan lokasi pembeli), memastikan harga ongkir yang fair dan transparan untuk setiap order drop-point.',
            'Data Penerima di Lokasi: Kurir mendapat informasi lengkap penerima di lokasi: nama penerima (tukang/mandor/PIC), nomor WhatsApp aktif, dan alamat lokasi proyek yang detail.',
            'GPS / Link Maps Lokasi Tujuan: Tombol sematkan GPS otomatis atau input link/koordinat Google Maps untuk lokasi tujuan, memudahkan kurir menavigasi ke lokasi proyek dengan tepat.',
            'Panel Admin CMS Drop-Point: Halaman detail order di CMS Admin menampilkan badge "📍 Lokasi Berbeda", info lengkap penerima, dan tombol langsung buka Google Maps ke lokasi tujuan proyek.',
            'Konfirmasi Pembayaran Terstruktur: Halaman ringkasan pembayaran menampilkan section khusus "Dikirim ke Lokasi Berbeda" dengan detail nama penerima, WA penerima, dan alamat tujuan yang terpisah dari data pemesan.'
        ]
    },
    {
        id: 'log-1-8-9',
        version: 'v1.8.9',
        date: '2026-09-19',
        title: 'Sistem Cerdas Piutang Tempo (Smart Due Status, Filter Kategori, Metrik Statistik, & 1-Klik Tagih WhatsApp Otomatis) & Cetak Surat Penawaran Harga (SPH Proyek A4/PDF)',
        category: 'feature',
        badge: 'Smart Tempo CRM & Project Quotation SPH v1.8.9',
        items: [
            'Dashboard Metrik Statistik Piutang CMS: Menampilkan kartu ringkasan Total Piutang Aktif, Total Piutang Terlambat, dan Total Nota Tempo secara realtime di dashboard seller.',
            'Filter Cepat Keterlambatan & Pencarian Instan: Tab filter pintar [Semua], [🔴 Terlambat], [🟡 H-3 Segera Jatuh Tempo], dan [🟢 Berjalan] dengan badge counter dinamis, serta kolom pencarian cepat nama pelanggan, nomor WA, atau ID pesanan.',
            'Fitur 1-Klik Tagih WhatsApp Otomatis: Membuat template pesan penagihan profesional dan santun sesuai status tempo (pengingat ramah H-3 atau pemberitahuan jatuh tempo) lengkap dengan rincian nota, sisa pokok, denda, dan nomor rekening resmi toko.',
            'Cetak Surat Penawaran Harga (SPH Proyek): Menambahkan tombol "Cetak SPH" langsung di keranjang belanja toko dengan format resmi A4/PDF lengkap dengan KOP Toko Putri, masa berlaku penawaran 14 hari, rincian spesifikasi barang/harga, serta kolom tanda tangan/stempel rekanan dan toko.',
            'Ekspor Dokumen & Kompatibilitas Tinggi: Dokumen penawaran harga dapat langsung dicetak thermal/printer A4 atau disimpan dalam format PDF resolusi tinggi untuk pengajuan anggaran proyek.'
        ]
    },
    {
        id: 'log-1-8-8',
        version: 'v1.8.8',
        date: '2026-09-19',
        title: 'Penyempurnaan Navigasi Tombol Back Sistematis: Urutan Mundur Berurutan Halaman (Sequential Unwinding), Eliminasi Lompatan Layar, Proteksi Cascade Modal, & Stack Produk Terkait',
        category: 'enhancement',
        badge: 'Seamless Sequential Navigation v1.8.8',
        items: [
            'Urutan Mundur Halaman Berurutan (Sequential Unwinding): Navigasi tombol back (tombol panah header, tombol browser, maupun gesture hardware back Android) kini berjalan teratur satu demi satu (Pembayaran -> Pengiriman -> Keranjang -> Beranda) tanpa ada layar yang terlompati atau melompat langsung ke Beranda.',
            'Eliminasi Lompatan & Infinite Loop Back: Menghapus bypass langsung ke Beranda pada handleAppBackButton dan menyelaraskan penanganan popstate browser dengan stack riwayat tampilan aktif.',
            'Proteksi Penutupan Modal Terprogram (Prevent Cascade-Close): Menambahkan flag isProgrammaticModalClose sehingga saat modal ditutup via tombol silang (X) atau backdrop, sistem tidak memicu penutupan beruntun pada modal di bawahnya maupun mereset tampilan halaman.',
            'Penyelarasan Modal Lengkap: Menambahkan dukungan penutupan modal voucher, panduan belanja (guide), changelog, garansi kualitas, dan sertifikasi keamanan ke closeModalByName.',
            'Navigasi Mundur Produk Terkait (Related Products Stack): Memilih produk rekomendasi sejenis kini menyimpan riwayat produk sebelumnya, sehingga saat tombol back ditekan, pengguna kembali ke produk yang dilihat sebelumnya secara berurutan sebelum modal tertutup.',
            'Navigasi Kembali CMS Seller (Admin Tab to Menu Unwinding): Menekan tombol back (panah header maupun tombol back Android) saat berada di dalam tab menu CMS (Produk, Pesanan, Pengaturan, dsb) kini mengembalikan tampilan ke Menu Utama CMS terlebih dahulu secara rapi, tanpa langsung memunculkan dialog konfirmasi keluar seller.',
            'Dialog Konfirmasi Keluar Beranda: Tombol back pada halaman Beranda (saat tidak ada modal terbuka) secara konsisten memunculkan Dialog Konfirmasi Keluar Aplikasi yang rapi dan aman.'
        ]
    },
    {
        id: 'log-1-8-7',
        version: 'v1.8.7',
        date: '2026-09-19',
        title: 'Pemisahan Tegas Pelanggan Umum vs Member Resmi: Proteksi Poin Loyalty & Pembayaran Tempo (Wajib Verifikasi Database Admin CMS), Konfirmasi Registrasi Member Sekali Klik, & Dialog Edukasi Pelanggan',
        category: 'feature',
        badge: 'Membership Verification & Tempo Security v1.8.7',
        items: [
            'Pemisahan Hak Akses Pelanggan Umum & Member Resmi: Nomor HP baru yang dimasukkan saat pemesanan berstatus murni sebagai Pelanggan Umum. Sistem tidak lagi mendaftarkan pelanggan secara otomatis ke database member sebelum dikonfirmasi oleh Admin di CMS.',
            'Proteksi Ketat Pembayaran Cash Tempo: Opsi pembayaran Cash Tempo disembunyikan secara otomatis bagi pelanggan umum dan dilindungi ganda pada validasi transaksi database cloud. Pembayaran tempo eksklusif untuk member yang nomornya telah terdaftar resmi.',
            'Proteksi Akumulasi & Penukaran Poin Loyalty: Fitur perolehan poin belanja dan diskon penukaran poin hanya berlaku untuk member terverifikasi. Pelanggan umum tidak mendapatkan poin sebelum nomor HP disimpan ke database member CMS oleh Admin.',
            'Fitur Konfirmasi Member Cepat di CMS Pesanan Admin: Admin toko dapat langsung mendaftarkan nomor pelanggan umum menjadi Member Resmi dengan satu kali klik (+ Konfirmasi & Daftarkan Sebagai Member) pada panel detail pesanan.',
            'Dialog Edukasi Pelanggan & Bantuan WhatsApp: Saat pelanggan umum mengecek nomor HP di menu kartu member digital atau checkout, sistem menyajikan status ramah dan tombol kontak WhatsApp Admin untuk aktivasi membership resmi.'
        ]
    },
    {
        id: 'log-1-8-6',
        version: 'v1.8.6',
        date: '2026-09-19',
        title: 'Perbaikan Kendala Pembuatan Pesanan Member (ReferenceError memberPointsUpdated), Stabilitas Transaksi Checkout, & Sinkronisasi Saldo Poin Pelanggan',
        category: 'bugfix',
        badge: 'Order Processing & Loyalty Fix v1.8.6',
        items: [
            'Resolusi Kendala Pembuatan Pesanan: Memperbaiki kendala ReferenceError: memberPointsUpdated is not defined pada saat pelanggan menyelesaikan pesanan saat toko tidak mengaktifkan fitur pelacakan stok langsung.',
            'Penyelarasan Variabel Transaksi: Mendeklarasikan dan menyelaraskan variabel memberPointsUpdated secara konsisten di seluruh percabangan transaksi Firestore.',
            'Stabilitas Transaksi Checkout & Poin Member: Menjamin proses checkout, akumulasi poin reward, pemotongan poin hadiah, dan pencatatan pesanan ke database cloud berjalan 100% lancar tanpa hambatan.',
            'Sinkronisasi Total Sistem: Memperbarui kompilasi aset produksi web, paket flashdisk siap pakai, dan sinkronisasi platform native Android.'
        ]
    },
    {
        id: 'log-1-8-5',
        version: 'v1.8.5',
        date: '2026-09-18',
        title: 'Pengaturan Perangkat & Printer Kasir POS Universal (58mm/80mm, Bluetooth, USB, RawBT), Dialog Konfirmasi Keluar Aplikasi Native, & Navigasi Kembali WhatsApp Tanpa Reload',
        category: 'feature',
        badge: 'Universal POS & Native App v1.8.5',
        items: [
            'Pengaturan Perangkat Universal & Printer POS: Menyediakan panel konfigurasi koneksi printer kasir (Bluetooth Thermal ESC/POS, USB OTG, Jaringan LAN/WiFi IP, Android System PrintManager, dan Driver RawBT).',
            'Format Kertas Fleksibel 58mm & 80mm: Mendukung ukuran kertas mini portable 58mm (32 kolom) dan printer kasir meja 80mm (48 kolom) dengan perataan teks struk otomatis.',
            'Fitur Uji Coba Cetak (Test Print): Memungkinkan kasir menguji sambungan printer secara langsung dengan satu klik sebelum mulai melayani pelanggan.',
            'Opsi Kustomisasi Struk Kasir: Pengaturan teks header/footer, cetak barcode pesanan (Code128), saldo poin loyalty member, auto-cut kertas, dan perintah buka laci kasir (cash drawer).',
            'Dialog Konfirmasi Keluar Aplikasi (Exit Dialog): Menutup modal bertingkat saat tombol Hardware Back Android ditekan; jika sudah berada di Beranda tanpa modal terbuka, memunculkan dialog konfirmasi keluar elegan (Lanjut Belanja atau Keluar Aplikasi).',
            'Navigasi Kembali WhatsApp Tanpa Reload (External Intent Interception): Mengarahkan seluruh tautan WhatsApp (wa.me) ke intent aplikasi eksternal di Android sehingga WebView Toko Putri tidak pernah tergantikan. Saat pembeli menekan tombol Back di WhatsApp, aplikasi Toko Putri langsung kembali tampil di layar dengan keranjang dan data transaksi tetap utuh.',
            'Fitur Unduh & Pembaruan Aplikasi Real-Time (Play Store Style): Menambahkan modal unduhan APK resmi bergaya Google Play Store dengan badge Play Protect, verifikasi integritas, QR code untuk pemindaian instan di HP dari komputer desktop/laptop, dan tautan otomatis ke rilis GitHub terbaru.'
        ]
    },
    {
        id: 'log-1-8-4',
        version: 'v1.8.4',
        date: '2026-09-18',
        title: 'Antarmuka Kartu Member Digital VIP 3D (Digital Loyalty Pass), Barcode Kasir POS Vektor, Gamifikasi Tingkat Tier (Bronze, Silver, Gold, Platinum), & Ekspor Simpan ke Galeri Ponsel',
        category: 'feature',
        badge: 'Digital Loyalty Card v1.8.4',
        items: [
            'Kartu Member Digital Interaktif 3D (Apple/Google Wallet Style): Mentransformasi data loyalitas pelanggan menjadi kartu member fisik digital yang mewah, lengkap dengan EMV smart chip keemasan, logo resmi Toko Putri, efek emboss nama pelanggan, nomor virtual kartu PUTRI, dan saldo poin.',
            'Animasi 3D Flip (Bolak-Balik): Pelanggan dapat membalik kartu secara interaktif untuk melihat sisi belakang yang dilengkapi pita magnetik (magnetic stripe) dan barcode kasir.',
            'Barcode Kasir POS Vektor (Code128): Dilengkapi barcode presisi yang digenerate otomatis dari nomor pelanggan, siap discan oleh kasir toko fisik saat berbelanja langsung.',
            'Tingkatan Tier Dinamis (Bronze, Silver, Gold, Platinum VIP): Pengelompokan level pelanggan berdasarkan akumulasi poin belanja dengan indikator progress bar dan daftar hak istimewa eksklusif setiap level.',
            'Simpan Kartu ke Galeri HP: Fitur unduh kartu member resolusi tinggi (PNG HD) langsung ke galeri ponsel atau dibagikan ke WhatsApp dengan satu sentuhan.',
            'Deteksi Checkout & Akses Cepat: Form checkout otomatis menampilkan miniatur kartu member saat nomor pembeli terdeteksi, dan menu Tautan Cepat kini memiliki tombol langsung ke Kartu Member & Poin.',
            'Sinkronisasi Poin Otomatis & Persistensi Kartu: Menyelaraskan aturan keamanan Firestore pelanggan, mengkreditkan poin pesanan secara otomatis ke database cloud, menjaga kartu member tetap aktif secara persisten di HP pelanggan, dan mengaktifkan auto-reconciliation riwayat pesanan.'
        ]
    },
    {
        id: 'log-1-8-3',
        version: 'v1.8.3',
        date: '2026-09-18',
        title: 'Aktivasi Fitur Hardware Native: Logo Resmi Toko Putri (Launcher Icon & Splash HD), Izin Kamera Barcode Scanner, Geolokasi GPS Pelanggan, Cetak Printer Termal POS, & Ekspor Simpan Dokumen A4/PDF',
        category: 'feature',
        badge: 'Native Hardware & Icon v1.8.3',
        items: [
            'Ikon Aplikasi & Splash Screen Resmi Toko Putri: Mengganti seluruh ikon bawaan dengan logo resmi resolusi tinggi Toko Putri (PUTRI UTAMA TEKNIK) di seluruh varian layar (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi, dan adaptive icon) serta splash screen elegan saat aplikasi dibuka.',
            'Aktivasi Kamera & Pemindai Barcode: Mengaktifkan izin kamera Android dan WebChromeClient onPermissionRequest sehingga scan barcode produk via kamera HP dan ambil foto bukti transfer langsung berfungsi lancar.',
            'Geolokasi & Deteksi GPS Pelanggan: Memasang izin ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION beserta onGeolocationPermissionsShowPrompt, sehingga fitur ambil lokasi otomatis di halaman checkout dan pengaturan toko berjalan presisi.',
            'Pencetakan Printer Termal POS & Faktur A4: Menghubungkan fungsi cetak kasir langsung ke Android PrintManager native dan skema printer bluetooth thermal (RawBT), memungkinkan pencetakan struk 58mm/80mm tanpa hambatan.',
            'Simpan & Bagikan Dokumen (PDF/Gambar): Mengintegrasikan native bridge saveOrShareFile untuk menyimpan file invoice, faktur, dan surat jalan ke memori HP atau langsung dibagikan ke WhatsApp pelanggan.'
        ]
    },
    {
        id: 'log-1-8-2',
        version: 'v1.8.2',
        date: '2026-09-18',
        title: 'Aplikasi Android Live Cloud Auto-Sync: Pembaruan Website & Desain Otomatis Tersinkronisasi ke HP Tanpa Perlu Install Ulang APK, Optimasi Hardware Back Button, & Paket Intent WhatsApp',
        category: 'feature',
        badge: 'Android Live Cloud Sync v1.8.2',
        items: [
            'Arsitektur Live Cloud Auto-Sync: Menghubungkan aplikasi Android native secara langsung ke server hosting resmi Toko Putri (https://tokoputri-three.vercel.app). Seluruh pembaruan kode, tata letak antarmuka, dan fitur baru yang di-deploy ke website akan otomatis muncul di HP pelanggan seketika tanpa perlu mendownload atau menginstal ulang file APK.',
            'Penanganan Tombol Kembali Native (Hardware Back Button): Mengintegrasikan OnBackPressedDispatcher pada MainActivity Android, memungkinkan pelanggan menggunakan tombol kembali fisik atau gestur usap layar HP untuk menutup modal atau kembali ke halaman sebelumnya secara mulus tanpa keluar aplikasi secara tiba-tiba.',
            'Visibilitas Intent Eksternal Android 11+: Mendaftarkan skema WhatsApp (whatsapp:// & https://wa.me) serta panggilan telepon (tel:) pada manifest sistem, memastikan tombol kontak penjual dan pesan otomatis WhatsApp dapat langsung meluncurkan aplikasi WhatsApp di HP pelanggan tanpa hambatan keamanan OS.',
            'Kesiapan Hybrid Zero-Maintenance: Menggabungkan kecepatan runtime native dengan fleksibilitas web modern, memberikan pengalaman belanja full-screen setara aplikasi e-commerce papan atas.'
        ]
    },
    {
        id: 'log-1-8-1',
        version: 'v1.8.1',
        date: '2026-09-18',
        title: 'Transformasi Super-App Native Android (.APK), Integrasi Capacitor 8 Modern, & Alur Kompilasi Cloud Otomatis GitHub Actions',
        category: 'feature',
        badge: 'Android Native APK Release v1.8.1',
        items: [
            'Transformasi Aplikasi Native Android: Mengintegrasikan platform Capacitor 8 (@capacitor/android, @capacitor/core, @capacitor/cli) ke dalam fondasi sistem Toko Putri sehingga dapat dipasang langsung pada smartphone Android layaknya aplikasi komersial Play Store.',
            'Kompilasi Otomatis di Cloud (GitHub Actions CI/CD): Membangun alur kerja kompilasi otomatis di server cloud GitHub menggunakan Node.js 22 dan Java OpenJDK 21. Setiap ada pembaruan kode, server GitHub secara otomatis memproses, mengompilasi, dan merilis file TokoPutri.apk siap pasang tanpa membebani komputer.',
            'File Installer TokoPutri.apk Siap Pasang: Menyediakan file installer TokoPutri.apk (~4.8 MB) yang ringan, cepat, dan responsif langsung di folder aplikasi serta paket flashdisk siap salin ke HP.',
            'Integrasi SplashScreen & Desain Adaptif: Aplikasi Android Toko Putri berjalan dengan tampilan layar penuh native, animasi peluncuran elegan, safe-area inset yang pas untuk poni kamera HP kekinian, dan terhubung langsung secara realtime ke database cloud Firebase Firestore.'
        ]
    },
    {
        id: 'log-1-8-0',
        version: 'v1.8.0',
        date: '2026-09-18',
        title: 'Sinkronisasi Realtime Katalog Hadiah Multi-Perangkat (Desktop & Mobile), Eliminasi Deadlock Listener, & Integrasi Modal Hadiah Cepat',
        category: 'bugfix',
        badge: 'Multi-Device Reward Sync v1.8.0',
        items: [
            'Resolusi Deadlock Listener Katalog Hadiah: Menghapus kondisi pengunci pada fungsi renderRewardCatalog() yang sebelumnya memeriksa activeRewards.length > 0 sebelum memasang listener Firestore. Kini listener attachRewardsRealtime() selalu dipasang seketika saat fitur katalog hadiah aktif.',
            'Booting Listener Realtime Hadiah Otomatis: Mendaftarkan dan menjalankan listener attachRewardsRealtime() secara otomatis saat aplikasi dimuat di DOMContentLoaded sejajar dengan sinkronisasi produk dan pengaturan toko, menjamin setiap browser (komputer desktop, laptop, HP, dan tablet pelanggan) langsung terhubung secara live.',
            'Bootstrap Fetch Hadiah pada Kunjungan Pertama: Menyempurnakan fungsi loadAppData() agar secara instan mengambil data sub-koleksi rewards dari database server ketika browser baru membuka website tanpa cache lokal.',
            'Tombol CTA Cepat "Lihat Semua" di Beranda: Menambahkan tombol aksi cepat di samping judul Katalog Hadiah Poin Pelanggan yang langsung membuka modal daftar reward dan informasi poin belanja pelanggan.',
            'Penyelarasan Logika Filter Katalog Produk: Memperbaiki toggleCls pada modul katalog agar wadah hadiah hanya disembunyikan saat pengguna memfilter pencarian atau saat program hadiah memang dinonaktifkan oleh pemilik toko.',
            'Sinkronisasi Instan CMS Hadiah: Memastikan penyimpanan atau penghapusan hadiah dari panel CMS admin di HP langsung memperbarui cache lokal localStorage dan menyiarkan pembaruan ke seluruh layar desktop pelanggan secara instan (<200ms) tanpa perlu refresh.'
        ]
    },
    {
        id: 'log-1-7-9',
        version: 'v1.7.9',
        date: '2026-09-17',
        title: 'Desain Visual Native Super-App: Miniatur Layar HP 3D di CMS, Preset Background Modern & Ambient Canvas',
        category: 'feature',
        badge: 'Native Super-App Visuals v1.7.9',
        items: [
            'Miniatur Layar Smartphone 3D di CMS Admin: Mengganti ikon kotak kaku pada menu Pengaturan Toko dengan 5 miniatur live mockup layar HP yang interaktif, lengkap dengan frame bezel, dynamic island, dan visual miniature preview.',
            'Preset Visual Background Modern: Menghadirkan 5 gaya atmosferik (Hero Arch Kanopi Lengkung, Aurora Mesh Glow atmosferik iOS/Fintech, Tech Grid blueprint perkakas/teknik, Glass Studio kedalaman kaca es, dan Minimalis Clean Canvas).',
            'Live Zero-Reload Theme Preview: Memilih model gaya background di panel CMS langsung mengubah latar belakang halaman secara live seketika tanpa reload browser.',
            'Desktop & Tablet Ambient Backdrop Glow: Memberikan aura pencahayaan atmosferik dinamis pada sisi kiri-kanan kanvas monitor komputer dan tablet, menciptakan sensasi aplikasi desktop macOS/iPad melayang yang elegan.',
            'Penyempurnaan Header & Floating Elements: Header toko otomatis beradaptasi dengan model visual latar belakang aktif dengan bayangan glow lembut dan transisi mulus.'
        ]
    },
    {
        id: 'log-1-7-8',
        version: 'v1.7.8',
        date: '2026-09-17',
        title: 'Pemeliharaan & Perawatan Sistem: Audit Keamanan, Stabilitas Navigasi Mobile, & Sinkronisasi Distribusi',
        category: 'maintenance',
        badge: 'System Maintenance & Stability v1.7.8',
        items: [
            'Audit Keamanan & Penyelarasan Dependensi: Memeriksa integritas dependensi npm, menyelaraskan patch keamanan paket, dan mengaudit aturan keamanan Firestore Security Rules untuk proteksi optimal toko dan data pelanggan.',
            'Penguncian Bottom Navigation Bar Mobile: Mengintegrasikan utilitas bnav-hidden dan translate penuh pada bilah navigasi bawah saat di halaman Keranjang & Checkout agar tombol Beranda timbul tidak mengintip atau menghalangi transaksi.',
            'Stabilitas Alur Belanja & Quick Variant: Menyempurnakan transisi penutupan modal produk bebas race-condition dengan History API untuk eksekusi Beli Sekarang (Direct Checkout) yang mulus dan responsif.',
            'Kompilasi & Optimasi Build Produksi: Membangun ulang seluruh bundle produksi Vite (dist/) dengan pemisahan chunk terisolasi, CSS purge, dan performa tinggi.',
            'Sinkronisasi Total Seluruh Berkas Distribusi: Menyelaraskan seluruh paket offline pada folder 1. HASIL_BUILD_SIAP_PAKE dan PAKET_FLASHDISK (File Siap Pakai & Source Code Lengkap) sehingga 100% mutakhir dan siap pakai.'
        ]
    },
    {
        id: 'log-1-7-7',
        version: 'v1.7.7',
        date: '2026-09-17',
        title: 'Penyempurnaan UX Modal Produk: Drawer Pilih Varian Cepat (Quick Variant Sheet), Eliminasi Tombol Duplikat & Bilah Bawah Luas',
        category: 'feature',
        badge: 'Smart Variant Shopping v1.7.7',
        items: [
            'Drawer Khusus "Pilih Varian Cepat" (Quick Variant Bottom Sheet): Menekan tombol + belanja cepat pada produk bervarian kini membuka lembar ringkas (foto, harga dinamis, pilihan varian, kuantitas & tombol beli) tanpa membuka modal deskripsi raksasa.',
            'Smart Auto-Select Varian Pertama: Sistem secara cerdas memilih varian aktif pertama yang memiliki stok secara otomatis, menghapus kebingungan pembeli dan mencegah pesan error "Belum memilih varian".',
            'Eliminasi Redundansi & Tombol Duplikat: Menghapus kotak Subtotal besar dan tombol ganda di dalam isi modal produk sehingga layout sangat bersih, lega, dan tidak bertumpuk.',
            'Bilah Aksi Bawah Lega & Bebas Sesak: Menghilangkan ikon WhatsApp dari bilah transaksi bawah agar tombol + Keranjang dan Beli Sekarang memiliki ruang yang luas, proporsional, dan nyaman ditekan jempol tanpa teks terpotong.',
            'Tombol Konsultasi WhatsApp Bersih di Area Informasi: Akses tanya penjual via WhatsApp dipindahkan ke area informasi produk dengan tampilan rapi dan tidak mengganggu alur checkout cepat.'
        ]
    },
    {
        id: 'log-1-7-6',
        version: 'v1.7.6',
        date: '2026-09-17',
        title: 'Pengalaman Native Mobile App: Haptic Feedback, Animasi Fly-to-Cart, Sticky Action Bar Modal & Pull-to-Refresh',
        category: 'feature',
        badge: 'Native Mobile App Feel v1.7.6',
        items: [
            'Micro-Haptic Vibration Feedback: Sentuhan getaran taktil mikro 10ms saat menyentuh tab navigasi, tombol Beranda melayang, dan tombol aksi belanja di layar HP untuk sensasi fisik layaknya aplikasi native.',
            'Fly-to-Cart Micro-Animation: Efek animasi visual foto produk melayang melengkung (curved flight) langsung masuk ke ikon keranjang navigasi bawah saat tombol + Keranjang ditekan.',
            'Sticky Bottom Action Bar pada Detail Produk: Bilah belanja cepat menempel di bagian bawah modal detail produk (Subtotal, Qty, + Keranjang, Beli Sekarang & Chat WA) untuk kemudahan transaksi satu tangan.',
            'Tombol Beli Sekarang (Direct Checkout): Pembeli dapat langsung checkout instan hanya dalam satu ketukan tanpa harus membuka keranjang terlebih dahulu.',
            'Quick-Add Cart pada Kartu Katalog: Tombol + pada kartu katalog kini dapat langsung memasukkan produk tanpa varian ke keranjang disertai animasi terbang.',
            'Native Pull-to-Refresh & Skeleton Shimmer: Tarik layar ke bawah dari puncak katalog untuk sinkronisasi data toko secara hening dan tampilan kerangka berkilau saat memuat produk.'
        ]
    },
    {
        id: 'log-1-7-5',
        version: 'v1.7.5',
        date: '2026-09-17',
        title: 'Desain Navigasi Bawah Modern: Beranda Timbul Melayang di Tengah (Elevated Center Hub) & Tampilan 100% Aplikasi Mobile',
        category: 'feature',
        badge: 'Mobile App Navigation v1.7.5',
        items: [
            'Navigasi Bawah Mobile Modern (App-Like Bottom Navigation): Menghadirkan bilah navigasi bawah 5 tab simetris (Kategori, Keranjang, Beranda, Pesanan, Menu) yang intuitif untuk kemudahan pengoperasian satu tangan (Golden Thumb Zone) di layar ponsel.',
            'Tombol Beranda Timbul Melayang di Tengah (Elevated Center Hero Hub): Menempatkan tombol Beranda tepat di tengah dengan lingkaran 52px melayang timbul (offset -top-5) bergradien tema dinamis, ring cutout notch, dan drop-shadow lembut yang elegan.',
            'Solid Background Anti-Tembus & Bordered Cart Badge: Panel navigasi menggunakan latar belakang 100% solid (bg-white dark:bg-[#0b1120]) tanpa efek tembus pandang/blur residual saat menggulir halaman, dilengkapi badge keranjang belanja dengan outline kontras tinggi.',
            'Sinkronisasi Routing & Active State Cerdas: Status tab navigasi otomatis menyala aktif secara akurat mengikuti URL hash/halaman yang sedang dibuka (Beranda, Riwayat Pesanan, Kategori Modal, atau Menu Drawer).',
            'Manajemen Pruning Log Pembaruan di CMS: Administrator toko kini dapat menghapus catatan log pembaruan lama langsung dari panel CMS Admin agar riwayat changelog tetap rapi, ringkas, dan bebas spam seiring berjalannya waktu.'
        ]
    },
    {
        id: 'log-1-7-2',
        version: 'v1.7.2',
        date: '2026-09-17',
        title: 'Finalisasi & Audit Debugging Menyeluruh Sistem (Stabilitas Router Modal, Type Safety ID Produk & Akses Dev Lokal)',
        category: 'maintenance',
        badge: 'Final System Audit & Stability v1.7.2',
        items: [
            'Resolusi Import Router Modal Storefront: Mengimpor fungsi pushModalHistory dan requestCloseModal secara eksplisit pada modul dialog storefront (modals.js) untuk menjamin semua dialog (Tautan Cepat, Kategori, Brand Mitra, Syarat & Ketentuan, Kebijakan Privasi, Panduan Belanja) terbuka dan tertutup dengan mulus tanpa memicu ReferenceError.',
            'Safe String ID Handling pada Katalog & Rekomendasi: Mengenkapsulasi parameter ID produk pada atribut onclick kartu produk dan kartu rekomendasi slider (openProductModal), memastikan kompatibilitas penuh untuk ID numerik maupun string alfa-numerik tanpa risiko syntax error.',
            'Perbaikan Pencocokan Produk Target Voucher: Menyempurnakan pencocokan target produk voucher diskon dengan konversi string bertipe aman (String(item.id) === String(f.targetProduct)).',
            'Penyempurnaan Struk Tempo Admin: Menambahkan deklarasi aman helper pushModalHistory pada modul piutang & struk pembayaran tempo (tempo.js).',
            'Dukungan Host Lokalitas Lingkungan Pengujian: Menambahkan pengenalan host 127.0.0.1 secara setara dengan localhost pada pemeriksaan akses dev admin (checkAdminAccess).',
            'Audit Menyeluruh 200+ Inline Event Handler: Memverifikasi seluruh event handler di index.html dan template JS untuk memastikan 100% fungsi terdaftar resmi di window tanpa ada broken reference.'
        ]
    },
    {
        id: 'log-1-7-1',
        version: 'v1.7.1',
        date: '2026-09-17',
        title: 'Penyelarasan Desain Modal CMS Admin & Builder Komponen (Tabel Spesifikasi, Grosir, Varian & Eliminasi Scrollbar Native)',
        category: 'optimization',
        badge: 'Admin Modal & Theme Harmonization v1.7.1',
        items: [
            'Penyelarasan Builder Tabel Spesifikasi (Spec Table Builder): Mengganti warna hardcoded cyan pada tombol "Tambah Baris Spesifikasi" dan ikon placeholder dengan variabel warna tema aktif toko (--color-primary), sehingga menyatu sempurna dengan seluruh 19 preset tema (termasuk tema emas/olive Toko Putri).',
            'Eliminasi Scrollbar Native Abu-abu di Modal CMS: Mengintegrasikan utilitas hide-scrollbar pada kontainer formulir Admin Modal (#admin-modal-form), Modal Detail Pesanan (#admin-order-modal-content), Modal Edit Cepat Harga (#qp-body), dan Modal Restock Stok, sehingga scrollbar native yang tebal dan kaku hilang tanpa mengurangi kenyamanan scroll.',
            'Harmonisasi Builder Grosir & Varian Produk: Menyelaraskan kartu grosir, tombol tambah tingkatan grosir, kartu varian, serta dialog database warna ke standar border-radius rounded-2xl dan aksen tema aktif toko tanpa warna kontras yang jomplang (menghapus hardcoded amber, pink, dan violet).',
            'Penyempurnaan Visual Header & Tombol Modal Admin: Menstandarisasi radius modal utama ke rounded-2xl, menambahkan badge ikon tematik di samping judul, menyempurnakan tombol tutup melingkar (cursor-pointer), dan tombol solid simpan data dengan efek shadow-glow dan active scaling.',
            'Optimalisasi Modal Restock & Edit Cepat Harga: Menyelaraskan seluruh dialog popup operasional admin dengan warna aksen dinamis toko dan konsistensi interaksi penuh.'
        ]
    },
    {
        id: 'log-1-7-0',
        version: 'v1.7.0',
        date: '2026-09-17',
        title: 'Pengelompokan Produk Sejenis (Sub-Kategori Cerdas) & Rekomendasi Produk Alternatif di Modal Detail',
        category: 'feature',
        badge: 'Smart Sub-Category & Related Products v1.7.0',
        items: [
            'Sistem Sub-Kategori Cerdas (Smart Sub-Grouping): Mengelompokkan produk berdasarkan jenis yang lebih spesifik dalam kategori yang sama (contoh kategori Cat Bangunan: Cat Tembok, Cat Kayu & Besi, Waterproofing, Kuas & Rol) dengan kompatibilitas penuh tanpa merombak struktur database yang sudah ada.',
            'Bilah Filter Sub-Kategori Interaktif (Dynamic Chip Bar): Menampilkan bilah chip filter horizontal di etalase saat sebuah kategori dipilih, lengkap dengan indikator jumlah produk per jenis dan penanda aktif sesuai tema toko.',
            'Rekomendasi Produk Sejenis & Alternatif Pilihan di Modal: Menambahkan kartu slider horizontal "Produk Sejenis & Alternatif Pilihan" di dalam modal detail produk menggunakan algoritma pencocokan skor relevansi (jenis produk, kategori, dan brand) untuk memudahkan pembeli membandingkan pilihan dan mendorong cross-selling.',
            'Autocomplete Datalist di Form Produk Admin: Formulir penambahan/pengeditan produk di CMS Admin kini dilengkapi input cerdas yang otomatis menyarankan jenis/sub-kategori yang sudah pernah ada di toko untuk mencegah typo dan menjaga konsistensi penamaan.',
            'Badge Jenis Produk pada Kartu Katalog: Menampilkan label sub-kategori bernuansa tema toko pada kartu produk di tampilan grid maupun list etalase.',
            'Penyelarasan Desain Modal Detail Produk: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl) dan drag bar minimalis modern, serta memastikan perpindahan antar produk sejenis bergulir mulus ke posisi atas (scroll-to-top).'
        ]
    },
    {
        id: 'log-1-6-2',
        version: 'v1.6.2',
        date: '2026-09-17',
        title: 'Penyempurnaan Modal Syarat & Ketentuan, Kebijakan Privasi, dan Storefront Dialog (Modern Card Layout & Anti-Overlay Vercel Toolbar)',
        category: 'optimization',
        badge: 'Modal Card Layout v1.6.2',
        items: [
            'Restrukturisasi Visual Modal Syarat & Ketentuan serta Kebijakan Privasi: Mengubah tampilan modal teks polos menjadi format kartu interaktif bertingkat bernomor (Numbered Badges) dengan padding proporsional, border halus, dan kontras tinggi sesuai tema aktif.',
            'Eliminasi Glitch Format HTML Baris Baru: Memperbaiki parser teks di modals.js sehingga konten HTML dan default copy tidak lagi disusupi tag <br> yang menyebabkan spasi melompat/renggang tidak wajar.',
            'Penyelarasan Desain Modal Bottom Sheet: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl), menghapus drag bar abu-abu usang, mempercantik kotak ikon header dengan aksen tema resmi (w-10 h-10 rounded-2xl), serta melengkapi footer dengan tombol "Tutup" yang ramah mobile.',
            'Supresi Floating Toolbar Vercel Feedback: Menyuntikkan aturan CSS khusus untuk menyembunyikan widget floating Vercel live feedback/toolbar agar tidak lagi menutupi konten modal dan teks transaksi pelanggan pada layar mobile.',
            'Harmonisasi Modal Tautan Cepat, Kategori, Brand, Panduan Belanja & Q&A: Menyatukan gaya visual seluruh dialog storefront ke standar modern tanpa tampilan jomplang.'
        ]
    },
    {
        id: 'log-1-6-1',
        version: 'v1.6.1',
        date: '2026-09-17',
        title: 'Penyelarasan Desain Menyeluruh Storefront & CMS Modal (Visual Theme Consistency & Solid Design)',
        category: 'optimization',
        badge: 'Theme Consistency v1.6.1',
        items: [
            'Harmonisasi Penuh Storefront & CMS dengan Theme Engine: Menghapus seluruh kelas warna hardcoded (seperti emerald-*, teal-*, pink-*) sehingga seluruh antarmuka toko beradaptasi 100% mulus dengan 19 palet tema warna sistem.',
            'Penyelarasan Banner Progres Gratis Ongkir: Elemen pelacak progres gratis ongkir di keranjang belanja kini menggunakan variabel tema aktif (--color-primary) secara dinamis baik pada progress bar, ikon, teks, maupun badge.',
            'Standarisasi Modal Dialog & Bottom Sheet: Seluruh modal dialog (Ulasan Pelanggan, Poin Hadiah Member, Kupon Promo, Log Pembaruan Sistem, Jaminan Mutu, Keamanan & Privasi, Konfirmasi, Edit Harga Cepat, dan Restock) distandarisasi ke border-radius solid rounded-t-3xl sm:rounded-2xl dengan latar belakang bg-slate-900/80 yang tajam dan konsisten.',
            'Penghapusan Efek Blur Residual: Mengeliminasi sisa-sisa kelas backdrop-blur pada modal dan kontainer kartu storefront untuk memastikan antarmuka 100% solid, tajam, ringan diakses, dan bebas glitch grafis di semua browser.',
            'Penyelarasan Form Tempo VIP & Kartu Customer Support: Formulir pembayaran tempo VIP dan kartu kontak WhatsApp di footer kini menyatu secara harmonis dengan warna aksen tema aktif toko.',
            'Pembaruan Kompilasi & Optimalisasi Bundle Produksi: Memperbarui build produksi Vite v1.6.1 dengan ukuran bundle yang efisien dan sinkronisasi penuh.'
        ]
    },
    {
        id: 'log-1-6-0',
        version: 'v1.6.0',
        date: '2026-09-16',
        title: 'Program Poin Belanja Hibrida & Loyalitas Member Cerdas (Hybrid Loyalty Points System)',
        category: 'feature',
        badge: 'Hybrid Loyalty Points',
        items: [
            'Sistem Poin Belanja Hibrida (Hybrid Points Engine): Menghubungkan poin produk reward langsung dengan poin kelipatan minimal belanja untuk produk non-poin secara otomatis.',
            'Kombinasi Poin Akurat: Produk yang memiliki poin langsung tetap menyumbangkan poin per itemnya, sementara produk tanpa poin diakumulasikan total belanjanya untuk mendapatkan poin kelipatan (misal tiap Rp 100.000 = 1 poin).',
            'Pengaturan Fleksibel di Panel Admin: Administrator toko dapat mengaktifkan/menonaktifkan program poin belanja, menentukan nominal batas belanja (kelipatan Rp), serta jumlah poin yang diperoleh per kelipatan.',
            'Bilah Progres & Notifikasi Gamifikasi di Keranjang: Pembeli dapat melihat langsung kalkulasi perolehan poin dan progres nominal belanja yang dibutuhkan menuju poin berikutnya.',
            'Integrasi Checkout & Sinkronisasi Saldo Member: Total poin hibrida otomatis disimpan ke data pesanan (pointsEarned & pointsBreakdown) dan langsung mengkredit saldo akun member terdaftar saat transaksi selesai.'
        ]
    },
    {
        id: 'log-1-5-2',
        version: 'v1.5.2',
        date: '2026-09-16',
        title: 'Penyelarasan & Sinkronisasi Visual Seluruh Form Pengaturan Toko (Harmonious & Unified Settings UI)',
        category: 'optimization',
        badge: 'Unified Settings UI',
        items: [
            'Sinkronisasi Visual Menyeluruh (Anti-Jomplang): Menyelaraskan tata letak visual seluruh 6 kategori pengaturan toko (Profil, Kategori & Brand, Pengiriman & Lokasi, QRIS Pay, Sistem & API, dan Operasional) dengan standar container kartu modern dan tipografi yang harmonis.',
            'Struktur Kartu Berbasis Badge Ikon: Seluruh blok form kini memiliki header kartu tematik berbingkai rounded-xl lengkap dengan ikon representatif, judul tegas, dan deskripsi fungsi yang jelas.',
            'Tata Letak Kategori & Brand Lebih Lega: Mengelompokkan konfigurasi slider dan gaya tampilan (Grid/Pill/Logo) ke dalam sub-kartu tersendiri dilengkapi kotak tips pengalaman pengguna (UX).',
            'Form Pembayaran QRIS & Integrasi Cloud Dipercantik: Menambahkan kartu preview QRIS terverifikasi serta status koneksi endpoint Google Apps Script (GAS) dengan indikator aktif yang elegan.',
            'Harmonisasi Kontrol Operasional & PPN: Formulir pembatasan stok barang dan skema pajak PPN (Eksklusif/Inklusif) dikemas ke dalam kartu rapi dengan penjelasan skema perhitungan transaksi.',
            'Navigasi Atas & Tombol Simpan Ganda: Menghadirkan tombol kembali berlabel jelas beserta tombol simpan cepat di baris header atas untuk kenyamanan akses di layar desktop maupun mobile.'
        ]
    },
    {
        id: 'log-1-5-1',
        version: 'v1.5.1',
        date: '2026-09-16',
        title: 'Input Geolokasi Cerdas Google Maps (Tempel & Simpan Akurat Presisi Tinggi)',
        category: 'feature',
        badge: 'Smart Geolocation',
        items: [
            'Smart Auto-Extract Google Maps: Admin cukup menempel tautan (link) atau angka koordinat dari Google Maps langsung pada satu kotak input cerdas di Pengaturan Pengiriman & Lokasi.',
            'Presisi Tinggi Desimal Penuh: Sistem otomatis mengekstrak Latitude & Longitude dengan ketepatan presisi penuh (contoh: -7.82308507053985, 112.0988374794464) tanpa terpotong.',
            'Tombol Tempel Otomatis Clipboard: Fitur satu klik untuk membaca clipboard dan menempel koordinat secara instan tanpa perlu ketik manual.',
            'Verifikasi Titik Pin Google Maps: Tombol "Cek di Maps" untuk membuka koordinat di tab baru Google Maps dan memastikan letak toko 100% akurat.',
            'Dukungan Tempel Koordinat Pelanggan saat Checkout: Memudahkan pembeli di perangkat laptop/PC menyematkan link/koordinat Maps rumah mereka saat sensor GPS tidak aktif.'
        ]
    },
    {
        id: 'log-1-5-0',
        version: 'v1.5.0',
        date: '2026-09-16',
        title: 'Fitur Promo Gratis Ongkir Otomatis Minimal Belanja (Free Shipping Threshold) & Gamifikasi Keranjang',
        category: 'feature',
        badge: 'Free Shipping Promo',
        items: [
            'Fitur Promo Bebas Ongkir Otomatis: Admin dapat mengaktifkan promo dan menentukan nominal batas minimal belanja (misal Rp 1.000.000) melalui menu Pengaturan > Pengiriman & Lokasi.',
            'Bilah Kemajuan (Progress Bar) Interaktif di Keranjang Belanja: Menampilkan persentase pencapaian serta kalkulasi sisa belanja secara real-time yang memotivasi pelanggan untuk menambah belanja.',
            'Pemberitahuan Selebrasi Pencapaian: Banner ucapan selamat dengan efek visual cerah dan animasi saat subtotal keranjang berhasil mencapai syarat gratis ongkir.',
            'Kalkulasi Otomatis Tanpa Kode Voucher: Ongkos kirim delivery langsung terpotong 100% (Rp 0) di ringkasan pembayaran checkout tanpa mewajibkan pembeli mengklaim kode kupon manual.',
            'Integrasi Penuh Dokumen & Struk: Diskon ongkir tercatat rapi pada database pesanan Firestore, struk thermal kasir, rincian faktur belanja A4, dan histori pesanan pembeli.'
        ]
    },
    {
        id: 'log-1-4-1',
        version: 'v1.4.1',
        date: '2026-09-16',
        title: 'Penyempurnaan Tampilan Footer (Clean & Harmonious UI) & Maintenance Perawatan Sistem',
        category: 'optimization',
        badge: 'UI Refinement & Maintenance',
        items: [
            'Desain ulang layout footer toko agar harmonis dengan tema warna emas/mustard, mengeliminasi kontras warna putih yang menyilaukan pada kartu WhatsApp dengan konsep dark glassmorphism modern.',
            'Penyempurnaan tipografi dan spasi vertikal: menu navigasi bantuan & belanja cepat bebas dari simbol kaku, berganti interaksi hover dot dinamis yang lega.',
            'Pembersihan kalimat redundan pada profil toko serta penyelarasan badge metode pembayaran dan logistik pengiriman 50:50 yang simetris.',
            'Pemeriksaan integritas dependensi npm, audit keamanan dependensi, serta pemeliharaan cache storage multi-proyek.',
            'Pembersihan berkas build usang dan pemeliharaan sinkronisasi penuh pada folder paket distribusi flashdisk & siap pakai.'
        ]
    },
    {
        id: 'log-1-4-0',
        version: 'v1.4.0',
        date: '2026-09-16',
        title: 'Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules',
        category: 'feature',
        badge: 'Single Session Security',
        items: [
            'Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.',
            'Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.',
            'Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.',
            'Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.',
            'Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi.'
        ]
    },
    {
        id: 'log-1-3-1',
        version: 'v1.3.1',
        date: '2026-09-16',
        title: 'Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules',
        category: 'bugfix',
        badge: 'Realtime Multi-Device',
        items: [
            'Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.',
            'Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.',
            'Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.',
            'Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.',
            'Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout.'
        ]
    },
    {
        id: 'log-1-3-0',
        version: 'v1.3.0',
        date: '2026-09-15',
        title: 'Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync',
        category: 'bugfix',
        badge: 'Realtime Sync & Hotfix',
        items: [
            'Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.',
            'Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.',
            'Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.',
            'Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.',
            'Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.',
            'Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai.'
        ]
    },
    {
        id: 'log-1-2-0',
        version: 'v1.2.0',
        date: '2026-09-15',
        title: 'Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek',
        category: 'maintenance', // 'feature' | 'optimization' | 'maintenance' | 'bugfix'
        badge: 'Maintenance & Optimasi',
        items: [
            'Pembersihan celah keamanan dependensi melalui audit paket npm.',
            'Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).',
            'Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.',
            'Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.',
            'Pembaruan berkas siap pakai dan paket flashdisk installer.'
        ]
    },
    {
        id: 'log-1-1-0',
        version: 'v1.1.0',
        date: '2026-09-10',
        title: 'Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak',
        category: 'optimization',
        badge: 'Peningkatan Visual',
        items: [
            'Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.',
            'Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.',
            'Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.',
            'Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman.'
        ]
    },
    {
        id: 'log-1-0-0',
        version: 'v1.0.0',
        date: '2026-09-01',
        title: 'Peluncuran Sistem Web & POS Kasir Toko Putri Resmi',
        category: 'feature',
        badge: 'Rilis Perdana',
        items: [
            'Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.',
            'Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.',
            'Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.',
            'Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.',
            'Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.',
            'PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC.'
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
 * @returns {Array} Daftar log terurut dari versi terbaru
 */
export const getCombinedChangelog = (appData) => {
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
    return combined.sort((a, b) => {
        const da = new Date(a.date || '2026-01-01').getTime();
        const db = new Date(b.date || '2026-01-01').getTime();
        if (db !== da) return db - da;
        return compareSemverDesc(a.version, b.version);
    });
};

/**
 * Mendapatkan nomor versi terbaru yang aktif
 * Menjamin tidak pernah tertahan pada versi lama meskipun ada log dinamis atau tanggal kembar
 * @param {Object} appData 
 * @returns {String} Contoh: 'v1.8.5'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.8.5';
    const logs = getCombinedChangelog(appData);
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


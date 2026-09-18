/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * ============================================================
 */

export const DEFAULT_CHANGELOG = [
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
    
    // Urutkan berdasarkan tanggal (terbaru di atas)
    return combined.sort((a, b) => {
        const da = new Date(a.date || '2026-01-01').getTime();
        const db = new Date(b.date || '2026-01-01').getTime();
        return db - da;
    });
};

/**
 * Mendapatkan nomor versi terbaru yang aktif
 * @param {Object} appData 
 * @returns {String} Contoh: 'v1.2.0'
 */
export const getLatestVersion = (appData) => {
    const logs = getCombinedChangelog(appData);
    return logs.length > 0 ? (logs[0].version || 'v1.0.0') : 'v1.0.0';
};

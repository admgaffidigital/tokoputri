# TOKO PUTRI - APLIKASI WEB & POS E-COMMERCE

Aplikasi e-commerce dan manajemen kasir point-of-sales (POS) modern berkinerja tinggi untuk Toko Putri, dirancang khusus dengan antarmuka yang dinamis, kaya estetika, serta fitur lengkap (katalog produk, keranjang belanja, ulasan produk, sistem member poin/reward, nota kasir thermal, nota tempo/piutang, surat jalan, dan invoice A4).

---

## 🛠️ Informasi Pengembang & Hak Cipta
* **Nama Projek**: TOKO PUTRI
* **Versi Rilis**: **v1.9.43** (Android VersionCode: `10943`)
* **Dikembangkan & Ditandatangani Oleh**: **Novan Restu Utomo** (Selaku Pengembang Utama dan Developer Asli)

---

## 💰 Lisensi & Ketentuan Pembelian Kode Sumber (Source Code)
* **Status Produk**: Komersial (Diperjualbelikan).
* **Hak Cipta & Developer Asli**: **Novan Restu Utomo**.
* **Ketentuan Penggunaan**: Tema dan kode sumber (*source code*) asli aplikasi ini adalah produk komersial berlisensi. Siapa pun (klien, pemilik toko, maupun distributor bisnis) yang ingin menggunakan, meng-host, atau mendistribusikan aplikasi web ini **wajib membeli kode sumber aslinya secara resmi dan langsung melalui pengembang aslinya: Novan Restu Utomo**.
* **Keamanan & Dukungan**: Dukungan pengembangan, perbaikan bug (*debugging*), dan penambahan fitur lanjutan oleh agen AI Antigravity maupun tim pengembang hanya dijamin legalitasnya untuk pembeli resmi yang terdaftar langsung di bawah lisensi Novan Restu Utomo.

---

## 📁 Struktur Kode & Arsitektur Modular Projek

Projek ini telah dirancang dengan **arsitektur modular bersih** untuk menjaga kode tetap rapi, mudah dirawat, dan cepat saat pengembangan. Pengembang maupun agen AI Antigravity **WAJIB bekerja pada modul masing-masing di `src/modules/`**, bukan menumpuk markup monolitik di `index.html`.

```
├── dist/                          # Hasil kompilasi produksi Vite (siap deploy)
├── 1. HASIL_BUILD_SIAP_PAKE/      # Salinan build produksi bersih
├── PAKET_FLASHDISK/               # Paket distribusi untuk klien/pembeli
│   ├── 1. FILE_SIAP_PAKAI/        # File build siap pakai (drag & drop Netlify)
│   ├── 2. SOURCE_CODE_LENGKAP/    # Salinan source code lengkap
│   └── 3. PANDUAN_DAN_TUTORIAL/   # Panduan instalasi dan tutorial pemakaian
├── src/
│   ├── config/                    # Inisialisasi & konfigurasi (Firebase, db, auth, analytics)
│   │   └── firebase.js
│   ├── core/                      # Fondasi state, tema, router, dan utilitas global
│   │   ├── state.js               # Reactive app state & store defaults
│   │   ├── theme.js               # Palet tema dinamis, mode gelap, & background engine
│   │   ├── router.js              # SPA router & history navigation
│   │   ├── ui.js                  # Dialog UI (toast, confirm, prompt)
│   │   ├── pricing.js             # Logika hitung harga, diskon, & kalkulator ongkir
│   │   └── utils.js               # Helper functions stateless
│   ├── modules/                   # Komponen fitur modular independen
│   │   ├── home/                  # Beranda (banner slider, dynamic sections, footer component)
│   │   ├── catalog/               # Katalog produk, filter, sorting, & modal detail produk
│   │   ├── cart/                  # Keranjang belanja, wishlist, & checkout pesanan
│   │   ├── orders/                # Riwayat pesanan, lacak status, & ulasan produk
│   │   ├── member/                # Poin loyalitas, klaim reward, & voucher promo
│   │   ├── admin/                 # CMS Seller (produk, pesanan, tempo/piutang, keuangan, settings)
│   │   ├── faq/                   # Tanya jawab interaktif pelanggan & moderasi admin
│   │   ├── print/                 # Cetak thermal POS, invoice A4, & surat jalan
│   │   └── storefront/            # Modal cepat (kategori, brand, quick menu, syarat ketentuan)
│   ├── services/                  # Komunikasi data eksternal
│   │   ├── storage.js             # Cache IndexedDB, delta sync, & penghemat kuota Firestore
│   │   ├── upload.js              # Unggah media produk & bukti bayar (Google Apps Script / Drive)
│   │   └── gas.js                 # Endpoint Google Apps Script
│   ├── main.js                    # Entry point aplikasi (orquestrator modul & startup)
│   └── style.css                  # Desain CSS Tailwind & styling tema solid
├── index.html                     # Root mount shell (wadah mount point aplikasi SPA)
├── tailwind.config.js             # Konfigurasi utility classes Tailwind CSS
├── vite.config.js                 # Konfigurasi bundler Vite (port server dev: 3000)
├── postcss.config.js              # Konfigurasi pemrosesan CSS
├── package.json                   # Definisi dependencies & script CLI projek
└── README.md                      # Dokumentasi teknis & kredit pengembang (berkas ini)
```

### ⚠️ Aturan Penting Pengembang:
1. **`index.html` adalah Root Shell**: File `index.html` hanya berfungsi sebagai wadah mount point (misalnya `<div id="storefront-footer-container"></div>` atau `<div id="product-container"></div>`). **Dilarang keras menumpuk markup HTML monolitik ratusan baris di dalam `index.html`**.
2. **Bekerja pada Modul yang Tepat**: Seluruh logika, templat rendering, dan handler fitur harus dikerjakan di dalam sub-folder `src/modules/` yang bersesuaian.
3. **Penyimpanan Data & Quota-Friendly**: Gunakan `src/services/storage.js` untuk interaksi data Firestore agar kuota tetap hemat dan tidak boros get/read.

---

## 🎨 Panduan Konsistensi UI/UX & Tampilan

Aplikasi ini mengusung estetika premium modern yang responsif dan interaktif. Pengembang atau agen AI di masa depan wajib mematuhi panduan desain berikut untuk menjaga konsistensi tampilan:

### 1. Sistem Warna & Tema (Color Palette)
* **Warna Utama (Brand Colors)**:
  * **Emerald/Green (`emerald-500` / `emerald-600`)**: Digunakan untuk elemen bermakna positif, kesuksesan, harga total, dan status bayar **Lunas**.
  * **Slate/Gray (`slate-800` / `slate-900`)**: Digunakan untuk teks utama, judul, latar belakang gelap, header tabel, dan tombol sekunder.
  * **Amber/Yellow (`amber-500` / `amber-600`)**: Digunakan untuk peringatan, ulasan bintang, sistem poin member, dan status **Pre-Order (PO)**.
  * **Rose/Red (`rose-500` / `rose-600`)**: Digunakan untuk pesan eror, tombol hapus, dan status bayar **Belum Lunas/Tempo**.
  * **Pink/Rose Soft (`pink-500` / `pink-50)`)**: Digunakan khusus untuk aksen tema Nota/Transaksi Tempo.

### 2. Efek Visual & Glassmorphism
* **Modal Overlay Backdrop**: 
  Semua modal popup wajib menggunakan overlay blur transparan dengan kelas Tailwind:
  `fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm`
* **Transisi Dinamis**:
  Tombol interaktif harus memiliki transisi kehalusan dan efek pengecilan saat diklik:
  `transition-all active:scale-95 duration-200`
* **Shadow (Bayangan)**:
  Elemen penting diberikan bayangan berwarna halus sesuai aksennya (contoh: `shadow-md shadow-emerald-500/20`).

### 3. Dukungan Mode Gelap (Dark Mode)
* Aplikasi mendeteksi status dark mode dengan kelas `.dark` pada elemen `html` (`document.documentElement.classList.add('dark')`).
* Selalu gunakan kombinasi kelas utility `dark:` pada elemen UI baru (contoh: `bg-white dark:bg-slate-900 text-slate-800 dark:text-white`).

---

## 🧠 Arsitektur Logika & Aliran Data ("Mesin Otak")

Berikut adalah pemaparan logika dan alur data utama yang berjalan di balik layar aplikasi:

### 1. State Management Global
State aplikasi disimpan dalam satu objek utama di `src/main.js` yaitu `appData`. Properti penting:
* `appData.store`: Berisi detail nama toko, slogan, nomor WA, alamat, logo, serta flag pengaturan katalog (`showCategories` dan `showBrands`).
* `cart`: Array yang menampung item belanja aktif di kasir. Setiap item menyimpan informasi `id`, `name`, `qty`, `effectivePrice`, `poTime` (opsional), dan data varian.

### 2. Logika Validasi Pembayaran Kasir (Conditional Validation)
Aturan validasi pengiriman/upload bukti transaksi diatur secara dinamis berdasarkan metode pembayaran terpilih (`needsBukti`):
* **Wajib Upload Bukti Transfer**: Pembayaran melalui **Transfer Bank**, **QRIS**, dan **Tempo** (karena pembayaran uang muka/DP tempo wajib berupa transfer bank).
* **Opsional (Tanpa Bukti)**: Pembayaran melalui **Kasir (Cash)** dan **COD** (Cash on Delivery).
* Penayangan input upload dikendalikan oleh fungsi `togglePaymentDetails()`.

### 3. Logika Produk Pre-Order (PO) & Pengiriman Gabungan
* **Status Pre-Order**: Produk yang memiliki properti `poTime` terisi akan dianggap sebagai produk pre-order. Properti ini otomatis diikutkan saat item dimasukkan ke keranjang belanja (`cart.push`).
* **Pengiriman Gabungan (Split-Shipment)**: Pembeli diperbolehkan mencampur produk PO dan Non-PO dalam satu nota belanja.
* **Biaya Pengiriman**: Catatan sistem secara eksplisit menerangkan bahwa produk berlabel PO akan dikirimkan menyusul sesuai estimasi waktu di labelnya, **tanpa dikenakan biaya pengiriman tambahan**.
* **Integrasi Cetak**: Catatan aturan pengiriman PO ini secara dinamis disisipkan pada struk cetak thermal (`openReceiptPreview`), nota cicilan tempo (`previewTempoReceipt`), invoice A4, dan surat jalan (`openDocPreview`).

### 4. Sistem Kartu Member Digital VIP 3D & Gamifikasi (v1.8.4)
* **Visual Mewah Layaknya Kartu Fisik**: Dilengkapi EMV Smart Chip emas vektor SVG, logo resmi, efek *embossed text* timbul untuk nama & nomor kartu virtual, serta status keanggotaan aktif.
* **Animasi 3D Flip Dua Sisi**: Kartu dapat dibalik secara interaktif untuk melihat sisi belakang yang memuat pita magnetik (*magnetic stripe*), strip tanda tangan verifikasi, dan **Barcode Kasir Vektor (Code128)** yang dapat dipindai oleh scanner barcode fisik kasir toko.
* **Gamifikasi 4 Tingkat Tier**: Sistem otomatis mengelompokkan pelanggan berdasarkan perolehan poin:
  - 🥉 **Bronze Member** (0 - 99 Poin)
  - 🥈 **Silver Member** (100 - 499 Poin)
  - 🥇 **Gold Member** (500 - 999 Poin)
  - 💎 **Platinum VIP** (1000+ Poin)
* **Simpan ke Galeri HP (Download PNG HD)**: Pelanggan dapat mengunduh kartu member beresolusi tinggi (skala 3x Retina) ke galeri perangkat HP/komputer mereka.
* **Auto-Deteksi di Checkout**: Saat pelanggan menginput nomor WA di keranjang belanja, sistem otomatis memunculkan miniatur kartu member dengan saldo poin dan tier aktif.
* **Sinkronisasi Poin Otomatis & Persistensi Sesi**: Setiap pesanan otomatis mengkreditkan poin ke Firestore, memperbarui saldo kartu member seketika, menginvalidasi cache lama, dan memulihkan sesi pelanggan secara persisten.

---

## 🚀 Perintah CLI Pengembangan & Pemeliharaan

Gunakan perintah Node.js berikut dalam terminal projek untuk pemeliharaan harian, pengujian, dan rilis:

* **Menjalankan Dev Server (Lokal)**:
  ```bash
  npm run dev
  ```
  *Membuka server pengembangan lokal di browser.*

* **Melakukan Build Produksi Web**:
  ```bash
  npm run build
  ```
  *Mengompilasi dan meminifikasi semua aset ke dalam folder `/dist`.*

* **Sinkronisasi Total Seluruh Sistem (Rekomendasi Pemeliharaan)**:
  ```bash
  npm run sync
  ```
  *Perintah otomatis 1-langkah yang menjalankan build web, menyinkronkan folder `dist/` ke `1. HASIL_BUILD_SIAP_PAKE/`, menyinkronkan paket `PAKET_FLASHDISK/`, dan memperbarui platform `android/` secara instan.*

* **Sinkronisasi Platform Android**:
  ```bash
  npm run cap:sync
  ```
  *Menyinkronkan konfigurasi Capacitor dan aset web terbaru ke dalam proyek Android native.*

---

## 📱 Platform Android Native & Alur Kompilasi Otomatis (CI/CD)

Aplikasi telah dilengkapi dengan fondasi **Capacitor 8 Android Native**:
* **File Konfigurasi**: [capacitor.config.json](file:///c:/TOKO%20PUTRI/capacitor.config.json)
* **Paket ID**: `com.tokoputri.app`
* **Arsitektur**: *Live Cloud Auto-Sync* yang terhubung ke server produksi Vercel (`https://tokoputri-three.vercel.app`).
* **Kompilasi Cloud Otomatis (.github/workflows/build-apk.yml)**: Setiap kali ada kode yang di-push ke branch `main`, server GitHub Actions (Node.js 22 & Java 21) akan secara otomatis meracik file installer Android terbaru (`TokoPutri.apk`).
* **Fitur Hardware**: Dilengkapi integrasi kamera barcode scanner, GPS geolokasi, printer kasir thermal POS (RawBT & ESC/POS), serta ekspor/bagikan dokumen PDF.

---

## 📋 Riwayat Pembaruan (Changelog)

### v1.9.43 — Smart Dynamic Product Cover Engine: Visual Mewah & Otomatis untuk Produk Tanpa Gambar di Storefront, Modal & POS Kasir (26 Sep 2026)
- **Smart Dynamic Product Cover Engine**: Solusi visual grafis otomatis beresolusi tinggi bagi produk baru yang belum memiliki foto/gambar. Tanpa upload foto manual, sistem menghasilkan kartu grafis modern dengan gradien warna estetik, cincin geometris konsentris (*concentric rings*), dan efek *ambient radial glow*.
- **Deteksi Ikon & Palet Kategori Semantik Otomatis**: Mendeteksi kata kunci nama produk, kategori, dan subkategori untuk memilih ikon vektor presisi (Rol Cat untuk Cat/Pelapis, Palu & Obeng untuk Perkakas, Kran untuk Pipa/Sanitair, Cetok Semen untuk Bahan Bangunan, Petir untuk Kelistrikan, Pohon untuk Kayu, Gembok untuk Kunci, Perisai untuk Besi/Atap, dan Spray untuk Perekat).
- **Tipografi Monogram Inisial Huruf Besar**: Menampilkan 2 inisial huruf nama produk dengan tipografi tebal modern berbayang lembut (contoh: *"ND"* untuk No Drop, *"PS"* untuk Paku Super, *"SG"* untuk Semen Gresik) layaknya kemasan industri premium.
- **Eliminasi Ketergantungan Eksternal (100% Offline Ready)**: Menghapus total placeholder pihak ketiga (*placehold.co*) yang lambat dan rentan gagal saat offline/sinyal lemah. Smart Cover dirender instan 0ms murni menggunakan CSS dan SVG lokal.
- **Integrasi Menyeluruh di Seluruh Modul**: Diterapkan serempak pada Kartu Katalog Storefront (Grid & List), Modal Detail Produk (Hero Image & Rekomendasi Terkait), POS Kasir (Katalog Grid, List & Keranjang Belanja), Lembar Varian Kasir, Keranjang Belanja Pembeli, Halaman Favorit/Wishlist, serta Tabel & Form Produk CMS Admin.

---

### v1.9.42 — Tampilan Harga Modal HPP POS Kasir, Paritas Lencana Produk Lengkap & Proteksi Diskon Anti-Jual Rugi (Margin Guard) (26 Sep 2026)
- **Perapian Tata Letak Lencana (Badges) POS Kasir**: Menata ulang posisi badge agar kartu produk tidak berantakan atau tertutup tumpukan badge. Foto produk kini 100% bersih tanpa deretan badge vertikal (hanya maksimal 1 pill diskon/PO di sudut atas), Brand ditampilkan sebagai subtitle teks elegan mendampingi Kategori (contoh: `CAT TEMBOK · NO DROP`), chip operasional (Varian, Grosir, Sisa Stok) disajikan ringkas, dan Harga Modal (HPP) disematkan rapi tepat di samping harga jual.
- **Transparansi Harga Modal (HPP) Kasir**: Menampilkan badge *"HPP [nominal]"* dan info *"Modal: Rp [nominal]"* di kartu produk katalog kasir, lembar varian aktif, rincian per baris item di keranjang belanja, ringkasan belanja total, serta pop-up pembayaran kasir.
- **Proteksi Diskon Anti-Jual Rugi (Margin Guard)**: Diskon produk per item secara ketat dibatasi tidak boleh membuat harga jual jatuh di bawah harga pokok penjualan (HPP) produk/varian. Kasir disajikan batas maksimal diskon yang diizinkan (*"Maks: Rp ..."*) dan sistem menolak input diskon yang melampaui modal dengan peringatan toast dan haptic feedback.
- **Proteksi Diskon Global & Verifikasi Transaksi Akhir**: Diskon transaksi keranjang kasir (nominal Rp maupun %) otomatis dicek terhadap total HPP keranjang. Jika diskon global memicu total tagihan di bawah total modal, sistem otomatis menahan dan membatasi pada batas diskon maksimal aman.
- **Pencatatan HPP ke Dokumen Pesanan (Laporan Laba Rugi Akurat)**: Data item transaksi kasir (`orderData.items`) kini merekam atribut `hpp`, `totalHpp`, serta estimasi `grossProfit` ke Firestore `freshmart_orders` sehingga laporan keuangan dan margin laba bersih toko terintegrasi otomatis dan akurat.

---

### v1.9.41 — Penyelarasan Logika POS Kasir 1:1 dengan Storefront: Validasi Produk Non-Aktif, Indikator Produk Habis, Dukungan Penuh Pre-Order (PO) & Pengurangan Stok Terintegrasi (26 Sep 2026)
- **Penyelarasan Logika Stok 1:1 Storefront (`useStock` Engine)**: POS Kasir kini menerapkan saklar `useStock` yang persis sama dengan storefront pembeli (`appData.store.useStock === true`). Bila `useStock` aktif, ketersediaan dihitung dari varian aktif atau stok induk. Jika `useStock` nonaktif, produk diperlakukan sebagai stok tak terbatas (*unlimited stock*).
- **Proteksi Produk Non-Aktif (`isActive: false`)**: Produk dan varian yang dinonaktifkan di CMS Admin secara ketat disaring keluar dari katalog kasir, lembar varian, dan ditolak oleh pemindai barcode fisik/kamera dengan notifikasi *"Produk ini sedang tidak tersedia"*.
- **Indikator & Proteksi Produk Habis (`HABIS`)**: Produk dengan stok habis otomatis menampilkan overlay gelap elegan bertuliskan *"HABIS"*, tombol tambah dinonaktifkan dengan `cursor-not-allowed`, dan pemindai barcode memberikan umpan balik peringatan stok kosong tanpa menambahkannya ke keranjang.
- **Dukungan Penuh Produk Pre-Order (`PO`)**: Produk dengan estimasi waktu preorder (`poTime`) menampilkan lencana oranye *"PO [estimasi]"* di katalog grid & list, lembar varian, rincian keranjang kasir, serta membawa flag `orderData.hasPO = true` untuk keperluan cetak struk kasir, invoice, dan surat jalan.
- **Pengurangan Stok Akurat via `qtyMap` Aggregation**: Penyelesaian transaksi kasir kini mengagregasi kuantitas item keranjang terlebih dahulu (identik modul checkout storefront), memotong stok induk dan varian Firestore secara atomik, menambah akumulator `totalSold`, memperbarui `appData.products` di memori lokal seketika, serta menyegarkan katalog kasir tanpa perlu me-reload halaman.

---

### v1.9.40 — Solusi Tuntas Header POS Kasir Android: Proteksi Status Bar & Notch Kamera (Anti-Collision Safe-Area Inset) & Harmonisasi Tema Glass-Header (26 Sep 2026)
- **Proteksi Anti-Tabrakan Status Bar Android**: Mengganti kelas arbitrary value pada header POS kasir storefront dengan kelas terdedikasi `.pos-storefront-header` yang menerapkan `padding-top: max(1.25rem, env(safe-area-inset-top, 1.25rem))` dan proteksi khusus aplikasi native (`.is-native-app`) `max(1.5rem, env(safe-area-inset-top, 1.5rem))`, memastikan tombol kembali, nama toko, dan status kasir tidak pernah lagi tertimpa oleh bilah status jam/baterai maupun poni kamera (*punch hole/notch*) smartphone Android.
- **Harmonisasi Kelas .glass-header pada Terminal POS**: Mengadopsi arsitektur *glass-header* yang konsisten dengan halaman storefront lainnya, dilengkapi padding-bottom lega (`0.625rem`), touch target ergonomis (≥ 44px), serta safe padding sisi kiri dan kanan (`safe-area-inset-left/right`).
- **Proteksi Safe-Area pada Mobile Cart Drawer**: Memperbaiki kontainer header drawer keranjang belanja kasir mobile (`.pos-mobile-cart-header`) agar tetap memiliki jarak aman dari bilah atas sistem saat dibuka dalam mode layar penuh di ponsel.
- **Deteksi Runtime Native App Cerdas**: Menambahkan pendeteksian otomatis `window.AndroidNativeApp` dan `window.Capacitor` di level root DOM (`document.documentElement.classList.add("is-native-app")`) guna memastikan perangkat Android secara presisi mendapatkan jarak bernapas status bar yang pas dan presisi.

---

### v1.9.39 — Resolusi Tuntas Keranjang Belanja Beli Cepat: Isolasi Namespace window.renderCart POS, Auto Re-hydration Keranjang & Alur Navigasi Kembali Mulus (26 Sep 2026)
- **Resolusi Konflik Namespace window.renderCart**: Mengubah fungsi render internal kasir POS menjadi `window.posRenderCart` dan `window.posRenderCatalog`, memastikan fungsi render keranjang storefront pembeli tidak pernah tertimpa lagi oleh modul kasir.
- **Auto Re-hydration Keranjang Belanja**: Menambahkan pemulihan otomatis data keranjang dari penyimpanan lokal (`localStorage`) di awal `renderCart` jika memori sesi belum tersinkronisasi, sehingga isi keranjang selalu muncul seketika tanpa perlu me-reload website.
- **Navigasi Bertingkat Alur Belanja Cerdas (Smart Back Navigation)**: Menata kembali alur tombol kembali dari Checkout ke Keranjang (`view-checkout` -> `view-cart`) dan dari Keranjang ke Katalog (`view-cart` -> `view-catalog`) secara mulus dan konsisten.
- **Perbaikan Beli Cepat (Instant Buy Now)**: Menghapus manipulasi `replaceState` paksa pada Beli Sekarang dan Quick Variant Sheet, sehingga perpindahan ke checkout dan navigasi kembali berjalan konsisten 100% responsif di desktop maupun mobile.

---

### v1.9.38 — Standarisasi Wajib Preview Sebelum Cetak Universal, Peningkatan Ketahanan Cetak Thermal & Presisi UI/UX Mobile Friendly (26 Sep 2026)
- **Wajib Preview Sebelum Cetak (Universal Preview-First Printing)**: Seluruh sistem pencetakan (Struk Transaksi POS Kasir 58mm/80mm, Slip Rekap Shift X-Report & Z-Report, Faktur Invoice, dan Surat Jalan A4) kini wajib menampilkan modal preview visual in-page interaktif sebelum perintah cetak diteruskan ke printer fisik.
- **Auto-Create Thermal Print Section**: Penambahan inisialisasi otomatis kontainer DOM `#thermal-print-section` jika belum tersedia, menjamin seluruh pencetakan thermal kasir selalu terisolasi bersih dan bebas dari elemen latar belakang browser.
- **Smart Iframe Fallback Anti-Popup Blocker**: Pencetakan dokumen A4 kini dilengkapi fallback cerdas menggunakan hidden iframe tersembunyi yang langsung memicu dialog cetak printer jika pop-up tab baru diblokir oleh browser.
- **Presisi Responsivitas Mobile Friendly (Viewport 390x844px)**: Penataan header kasir anti-wrap, tombol mengambang keranjang kasir (*floating cart drawer*), touch target nyaman (≥ 44px), dan integrasi safe area notch smartphone.

---

### v1.9.37 — Penyempurnaan Visual CMS Kasir & Laporan Shift: Segmented Switcher Sticky, Auto-Reset Scroll & Eliminasi Clipping Header (25 Sep 2026)
- **Segmented Switcher Tab Sticky (Pinned Sub-Header)**: Bilah pengalih tab "Akun Kasir" dan "Laporan Shift" kini berposisi sticky tepat di bawah bilah emas CMS Admin dengan efek *backdrop-blur* elegan, sehingga kasir/admin dapat berpindah tab kapan pun tanpa harus menggulir balik ke atas.
- **Auto-Reset Scroll Top pada Pergantian Tab**: Memastikan scroll container otomatis melompat ke posisi teratas (`scrollTop = 0`) setiap kali tab "Akun Kasir" atau "Laporan Shift" diklik, mencegah konten terpotong atau tersembunyi di bawah bilah navigasi atas.
- **Eliminasi Teks Terpotong & Orphan Word (Anti-Clipping Header)**: Menghapus penumpukan padding ganda dan memangkas subjudul menjadi satu baris bersih dengan utilitas `truncate`, memastikan teks tidak pernah terputus canggung di batas header mobile.
- **Penyelarasan Horizontal Baris Judul & Tombol Segarkan**: Tombol "Segarkan Data" kini sejajar rapi di sisi kanan judul "Rekap Shift Kasir (Z-Report)" pada satu baris terpadu, simetris dan konsisten dengan tab Manajemen Kasir.
- **Standarisasi Wajib Preview Sebelum Cetak**: Mengintegrasikan modal preview in-page interaktif sebelum proses pencetakan fisik pada Struk Transaksi POS Kasir (58mm/80mm), Slip Rekap Shift Kasir (X-Report & Z-Report), Faktur Invoice, dan Surat Jalan A4.
- **Sinkronisasi Thermal Print Section & Isolasi Media Cetak**: Konten struk dan slip rekap shift otomatis disinkronkan ke elemen `#thermal-print-section` sehingga hasil cetak printer thermal bersih, tajam, dan tidak terganggu elemen latar belakang antarmuka.

---

### v1.9.36 — Arsitektur Single Shift Akun Kasir Terpusat & Sinkronisasi Multi-Perangkat Real-Time: Anti-Double Shift & Auto-Resume Multi-Device (25 Sep 2026)
- **Arsitektur 1 Akun Kasir 1 Shift Aktif (Single Active Shift per Account)**: Mengunci aturan kerja kasir di mana satu akun kasir (`cashierUid`) hanya dapat membuka 1 shift kerja aktif (`status: 'open'`) di seluruh toko dan tidak dapat diduplikasi.
- **Auto-Resume Lintas Perangkat Tanpa Buka Kas Baru**: Kasir dapat berpindah secara mulus dari komputer kasir meja (PC) ke smartphone Android atau tablet tanpa harus memasukkan modal awal atau membuka kas baru — sistem otomatis mendeteksi dan melanjutkan sesi shift aktif yang ada.
- **Proteksi Anti-Double Shift (Cloud Pre-Flight Guard)**: Melindungi kasir dari risiko pembukaan kas ganda secara tidak sengaja melalui tombol "Buka Shift" maupun pintasan keyboard F10 dengan verifikasi instan ke Cloud Firestore sebelum modal awal dibuka.
- **Sinkronisasi Real-Time Dua Arah (Firestore onSnapshot Listener)**: Transaksi penjualan, total omset, akumulasi kas laci, dan kuantitas item yang diinput pada perangkat kasir A langsung tersinkronisasi secara otomatis dan seketika pada perangkat kasir B yang membuka akun yang sama.
- **Penutupan Shift Serempak (Global Shift Settlement)**: Saat kasir melakukan tutup shift (Z-Report) di satu perangkat, semua perangkat lain yang terhubung secara otomatis merefleksikan penutupan shift, membersihkan sesi aktif lokal, dan memperbarui lencana indikator header kasir.

---

### v1.9.35 — Dukungan Kuantitas Desimal POS Kasir (Decimal QTY Support) Terpadu dengan Storefront (25 Sep 2026)
- **Dukungan Kuantitas Desimal Penuh (Decimal QTY Support)**: Kasir kini dapat memasukkan kuantitas pecahan desimal (seperti `0.5` kg telur, `1.25` meter kabel/pipa, `2.5` liter beras/minyak, dst.) pada transaksi POS kasir persis seperti yang telah didukung pada keranjang belanja *storefront* pelanggan.
- **Input Stepper Fleksibel & Anti-Truncation**: Memperluas input kuantitas keranjang kasir dengan atribut `step="any"`, `min="0.01"`, serta penyesuaian lebar input (`w-11`) sehingga angka desimal seperti `0.5` atau `1.25` tampil nyaman dan proporsional tanpa terpotong.
- **Pembersihan Format Angka Desimal (formatQty Helper)**: Menghilangkan angka nol berlebih di belakang desimal (menampilkan `1.5` bukan `1.500`, dan `2` bukan `2.000`) pada counter keranjang, badge katalog, daftar antrean parkir (*held cart*), nota struk thermal kasir, dan laporan pergantian shift kasir.
- **Dukungan Satuan Desimal pada Lembar Varian POS**: Membuka kunci input kuantitas di lembar pemilihan varian (`pos-variant-sheet`) agar kasir dapat langsung mengetik maupun menambah/mengurangi kuantitas desimal sebelum menambahkan varian ke keranjang.
- **Sinkronisasi Otomatis Pemotongan Stok & Tier Grosir**: Potongan stok produk/varian di Firestore serta evaluasi harga grosir (*wholesale tiers*) otomatis beroperasi dengan presisi nilai desimal tinggi tanpa pemotongan (*truncation*).

---

### v1.9.34 — Pembaruan Lembar Keranjang POS Kasir Mobile Full-Height & Eliminasi Total Background Hitam (25 Sep 2026)
- **Eliminasi Total Latar Belakang Hitam (Zero-Black-Backdrop)**: Mengubah lembar keranjang mobile (*bottom sheet*) menjadi tampilan lembar penuh (*full-height view*) tepat di bawah header kasir, menghapus tuntas celah overlay gelap (`rgba(15,23,42,0.65)`) yang sebelumnya menampakkan baris hitam di atas keranjang.
- **Pencegahan Pemotongan Judul Counter (Anti-Truncation Guarantee)**: Menerapkan `shrink-0` dan `tracking-tight` pada judul "Keranjang (X)" sehingga counter jumlah item belanja tidak akan terpotong meskipun diakses pada smartphone berlayar sempit (360px).
- **Penyempurnaan Ruang Vertikal Keranjang**: Area daftar item belanja kini mendapatkan ruang bernapas vertikal penuh yang lebih leluasa dan nyaman untuk menggulir daftar belanjaan pembeli dalam antrean panjang.
- **Integrasi Tombol Tutup & Back Button Native**: Menyediakan tombol silang taktil [×] di pojok kanan atas serta registrasi riwayat modal untuk menutup kembali keranjang dengan mulus via tombol Back fisik Android.

---

### v1.9.33 — Presisi Visual Keranjang POS Kasir Mobile: Eliminasi Gap Judul, Tombol Pill Terpadu & Pembersihan Diskon (25 Sep 2026)
- **Eliminasi Gap Spasi Judul Keranjang (Anti-Gap Spacing)**: Mengatasi efek flex gap yang memecah teks judul dan kurung (`KERANJANG ( 1 )`) menjadi format alami dan presisi (`KERANJANG (1)`) tanpa spasi berlebih pada counter item belanja.
- **Harmonisasi Tombol Header Keranjang Terpadu (Clean Unified Pills)**: Menyatukan tombol "Tahan", "Kosongkan", dan "Tutup" ke dalam sistem desain pill bernuansa bersih (`bg-white` / `dark:bg-slate-800` ber-border halus) dengan aksen warna proporsional pada ikonnya, mengeliminasi benturan visual kotak pastel di header keranjang.
- **Pembersihan Tampilan Diskon Transaksi (Zero-Value Cleanup)**: Menyembunyikan preview diskon saat nilai potongan bernilai 0 sehingga tidak memunculkan teks "Rp 0" redundan di samping input nominal kasir.
- **Penyempurnaan Chips Potongan Cepat Berkualitas Tinggi**: Merombak preset chips potongan harga menjadi pil netral modern (*high-contrast slate*) yang otomatis bertransformasi menjadi solid *brand primary* toko saat aktif.
- **Interaksi Tutup Lembar Geser Fleksibel (Backdrop Dismiss)**: Menambahkan kemampuan menutup drawer keranjang mobile secara instan cukup dengan mengetuk area redup latar belakang di luar lembar keranjang.

---

### v1.9.32 — Harmonisasi Visual Keranjang POS Kasir Mobile & Zero Truncation (25 Sep 2026)
- **Eliminasi Pemotongan Judul Keranjang Mobile (Anti-Truncation)**: Menerapkan teks adaptif (`Keranjang` di mobile, `Keranjang Transaksi` di desktop) sehingga judul tidak lagi terpotong elipsis (`KERANJANG T...`) pada layar ponsel sempit (<= 390px) dan tampil presisi bersama counter jumlah item belanja.
- **Harmonisasi Tombol Tindakan Header Keranjang (Tahan, Kosongkan & Tutup)**: Merestrukturisasi tombol "Tahan" dan "Kosongkan" menjadi badge pill taktil semi-transparan dengan border lembut (`amber-500/10` dan `rose-500/10`) serta tombol tutup yang proporsional, menggantikan teks raw yang kontras dan tidak selaras.
- **Penyelarasan Penuh Pengalih Diskon Kasir (Rp / %)**: Memberikan aksen warna tema brand toko (`var(--color-primary)`) pada tombol pengalih aktif (`Rp` / `%`) dengan kontras teks putih bersih, menggantikan tombol abu-abu polos.
- **Preset Chips Diskon Cerdas Beraksen Tema Toko**: Merombak preset chips potongan harga (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb) dari tombol slate abu-abu kaku menjadi chips beraksen brand toko dengan indikator status aktif (solid primary) saat dipilih.
- **Penyempurnaan Stepper Kuantitas & Tombol Bayar Berkilau**: Menambahkan focus border tema pada kontrol kuantitas `[− 1 +]` serta elevasi bayangan bercahaya (*box-shadow glow brand color*) pada tombol Proses Pembayaran.

---

### v1.9.31 — Harmonisasi Visual Tombol Pilih Berkas Cadangan & Presisi Sempurna Navigasi Header (25 Sep 2026)
- **Penyelarasan Penuh & Eliminasi Tombol Gepeng**: Mengubah tombol "Pilih Berkas Cadangan" dan "Rollback Data Toko" menjadi grid 2-kolom berdampingan (`grid grid-cols-2 gap-2.5 sm:gap-3`) yang simetris dengan teks label adaptif, mengeliminasi bentangan bilah panjang 1-kolom yang pipih/gepeng (rasio 7:1) menjadi tombol taktil yang proporsional.
- **Harmonisasi Simetris dengan Baris Snapshot Cepat**: Menyelaraskan tinggi fisik (`h-11 sm:h-12`), radius sudut (`rounded-xl sm:rounded-2xl`), dan padding tombol pemulihan agar 100% selaras dan sejajar sempurna dengan baris tombol Simpan Cepat & Pulihkan di bawahnya.
- **Presisi Sempurna Tombol Navigasi Header Admin**: Menetapkan `display: flex`, `shrink-0`, dan `aspect-square` pada tombol kembali panah kiri (`#btn-admin-back`), ikon preview, dan tombol keluar, menjamin bentuk bujur sangkar 1:1 yang rapi dan elegan tanpa distorsi melebar/lonjong di layar HP.
- **Optimalisasi Ruang Kanvas Layar Ponsel (Anti-Squeeze Padding)**: Menghapus padding ganda yang menghimpit kontainer Pusat Data di HP dan memperlebar ruang bernapas bawah (`pb-24`) agar seluruh tombol tindakan tampil utuh dan bebas terpotong.

---

### v1.9.30 — Optimasi Ketahanan Koneksi Jaringan Cloud Firestore & Eliminasi Error QUIC (25 Sep 2026)
- **Eliminasi ERR_QUIC_PROTOCOL_ERROR**: Mengaktifkan `experimentalForceLongPolling` pada Firestore SDK untuk memastikan transmisi data menggunakan protokol HTTPS berbasis TCP yang andal dan kebal terhadap packet loss atau pemblokiran UDP pada jaringan seluler (Telkomsel/Indosat/XL) maupun Wi-Fi publik.
- **Pencegahan Kegagalan Stream Listen Channel**: Menghindari kegagalan kanal sinkronisasi gRPC-Web/QUIC saat koneksi internet mengalami fluktuasi sementara atau timeout DNS (`ERR_NAME_NOT_RESOLVED`).
- **Peningkatan Keandalan Real-time Sync Antar Perangkat**: Menjamin aliran perubahan data pesanan, katalog produk, dan status shift laci kasir tetap terhubung secara stabil tanpa membanjiri konsol browser dengan error retry QUIC.

---

### v1.9.29 — Penyempurnaan Presisi Visual Pemulihan Data & Eliminasi Truncation (25 Sep 2026)
- **Perbaikan Ikon Proteksi Blank**: Mengganti `fa-shield-check` yang merupakan ikon Font Awesome Pro dengan `fa-shield-halved` standar, memulihkan tampilan lencana perisai keselamatan secara presisi.
- **Eliminasi Truncation Judul Pemulihan Data**: Menghapus truncation pada judul "Pemulihan Aman & Proteksi Rollback" sehingga teks membungkus alami (*leading-snug*) tanpa terpotong tanda titik-titik ("...") di HP.
- **Penyederhanaan Label Tombol Rollback**: Mengubah label menjadi "Rollback Data Toko" agar rapi satu baris tanpa patah vertikal.
- **Anti-Crop Tombol Snapshot Cepat Mobile**: Mengganti label panjang yang terpotong ("Simpan Snap..." & "Pulihkan Sna...") menjadi "Simpan Cepat" dan "Pulihkan" dengan `whitespace-nowrap` yang tampil utuh dan proporsional.

### v1.9.28 — Audit Presisi UI/UX & Penyempurnaan Menyeluruh Tampilan Natif App (25 Sep 2026)
- **Anti-Overflow Baris Aksi Produk**: Menambahkan `flex-wrap gap-2` pada baris tombol aksi produk di katalog admin dan memperhalus padding kartu menjadi `p-3.5 sm:p-5`, mencegah overflow horizontal pada smartphone ramping.
- **Harmonisasi Tombol Modal Swap POS**: Mengganti warna tombol hijau statis pada dialog tukar antrean kasir aktif dengan warna identitas toko (`var(--color-primary)`).
- **Penyelarasan Input Barcode Manual**: Menyelaraskan border focus dan tombol tambah barcode manual ke palet tema toko.
- **Headroom Lega Panel Kasir**: Memberikan padding atas `pt-3 sm:pt-5 pb-16` pada halaman Manajemen Kasir agar segmented control tampil proporsional tanpa mepet dengan header pada HP.
- **Audit Pengalaman Mobile & Layar Sentuh**: Memastikan seluruh kontrol navigasi, modal, dan kartu data memiliki respons sentuhan tactile (`active:scale-95`) yang natural.

### v1.9.27 — Harmonisasi Visual UI/UX Total & Penyempurnaan Tampilan Natif App (25 Sep 2026)
- **Anti-Wrap Laporan Shift Z-Report**: Mengatasi kendala teks nomor shift kasir (`#SHF-20260925-860`) dan badge status (`SEDANG BERJALAN`) yang patah menjadi 2 baris pada layar mobile dengan penerapan `whitespace-nowrap`, `font-mono`, `truncate`, dan `shrink-0`.
- **Harmonisasi Ikon & Metrik Shift**: Mengganti ikon kasir hijau statis dengan warna identitas tema toko (`var(--color-primary)`) serta merombak metrik Modal Awal, Omset, dan Kas Fisik Laci menjadi kartu pil modern yang bersih.
- **Segmented Control Natif App**: Mengganti tab navigasi Manajemen Kasir menjadi *native segmented control* 2-kolom bergaya iOS/Pixel (`p-1 bg-slate-200/70`) yang responsif dan ergonomis.
- **Harmonisasi Spanduk Panduan Kasir**: Mengeliminasi kotak biru bootstrap dan menggantikannya dengan banner aksen hangat bertema toko (`rgba(var(--color-primary-rgb), 0.05)`).
- **Restrukturisasi Tombol Aksi Kasir**: Menghilangkan tombol kubus warna-warni (kuning, biru, pink) menjadi tombol tindakan berdesain natif app yang seragam (`rounded-xl 36x36px`).
- **Restyling Total Area Pemulihan Data & Safety Rollback**: Menghilangkan kontainer amber mencolok dan tombol rollback pink pudar, menghadirkan kartu proteksi data natif app dengan tombol rollback berstatus disabled abu-abu netral serta tombol snapshot instan 2-kolom yang nyaman disentuh di HP.

### v1.9.26 — Pembersihan Duplikasi Menu & Pemusatan Utilitas Backup ke Pusat Data & Sinkronisasi (25 Sep 2026)
- **Pembersihan Duplikasi Menu di Pengaturan Toko**: Menghapus blok kartu cadangan data (*Backup & Restore*) yang redundan di menu Pengaturan Toko agar tampilan lebih bersih, fokus, dan tidak menimbulkan kebingungan bagi admin.
- **Sentralisasi Penuh ke Pusat Data & Sinkronisasi**: Seluruh fungsi pencadangan ekosistem (.JSON), ekspor akuntansi (.CSV), sinkronisasi cloud real-time, validasi skema pra-restore, serta auto safety-snapshot kini 100% terpusat di modul mandiri yang canggih dan modern.
- **Penyederhanaan Tata Letak Pengaturan Toko**: Menjaga konsistensi grid Pengaturan Toko agar berfokus murni pada konfigurasi esensial gerai (Profil Toko, Desain & Katalog, Pengiriman & Radius, Rekening & Pembayaran, Konfigurasi Sistem, Jam Operasional, dan Printer Struk).

---

### v1.9.25 — Harmonisasi Visual Total & Keselarasan Tema Pusat Data & Sinkronisasi (25 Sep 2026)
- **Harmonisasi Penuh dengan Palet Tema Toko (Eliminasi Black Slate Slab)**: Merombak kontainer hero Pusat Data & Sinkronisasi dari kotak gradien hitam pekat (`slate-900`) yang jomplang menjadi kartu modern bergradien lembut hangat (`.backup-sync-hero`) dengan sentuhan warna identitas toko (`var(--color-primary)`) dan border elegan.
- **Kartu Statistik Metrik Bersih & Kontras Alami**: Merestrukturisasi 6 kartu indikator data (Total Produk, Kategori, Transaksi, Pelanggan, Akun Kasir, Sesi Shift) menjadi kartu putih modern (`.card-modern`) dengan border halus dan angka beraksen warna cerah yang nyaman dibaca di mode terang maupun gelap.
- **Penyelarasan Komponen Tombol Aksi**: Mengganti tombol hitam kaku pada backup database JSON menjadi tombol aksen brand toko yang serasi dengan header emas Toko Putri.
- **Jarak Bernapas Lega dari Header (*Headroom Optimization*)**: Menambahkan padding vertikal atas (`pt-3 sm:pt-5`) agar kartu modul tidak menempel rapat dengan header navigasi pada perangkat layar ponsel (HP).
- **Dukungan Adaptif Mode Gelap (*Dark Mode Continuity*)**: Menyelaraskan kartu dan metrik agar bertransisi secara mulus ke nuansa gelap berkelas tanpa kehilangan kontras teks dan hierarki visual.

---

### v1.9.24 — Pusat Data & Sinkronisasi Cloud, Mesin Backup Ekosistem .JSON, Ekspor Akuntansi .CSV & Safe Rollback (25 Sep 2026)
- **Pusat Data & Sinkronisasi Cloud (Cloud Sync Hub)**: Tab menu khusus baru di CMS Admin untuk memonitor integritas ekosistem data toko secara real-time, mendeteksi koneksi awan, dan melakukan sinkronisasi paksa (Force Real-time Sync) langsung dari Cloud Firestore.
- **Mesin Pencadangan Komprehensif (Full Ecosystem Backup .JSON)**: Menarik seluruh data lengkap secara paralel (Master Produk, Varian, Kategori, Transaksi Penjualan Kasir, Buku Piutang Tempo, Database Member Pelanggan, Akun Kasir, dan Log Shift Laci Kas) dalam satu berkas terenkripsi berstempel integritas metadata.
- **Ekspor Laporan Akuntansi Spreadsheet (.CSV)**: Menyediakan fitur unduh tabel siap pakai untuk Microsoft Excel dan Google Sheets (Laporan Master Produk & Stok serta Laporan Riwayat Transaksi & Omset Penjualan).
- **Inspektur Pra-Pemulihan (Pre-Restore Inspector Modal)**: Membaca dan memvalidasi berkas cadangan sebelum dieksekusi, menampilkan rincian jumlah produk, transaksi, dan tanggal backup agar tidak ada salah timpa.
- **Perlindungan Auto Safety-Snapshot & Rollback 1-Klik**: Sebelum berkas restore diterapkan, sistem otomatis membekukan data saat itu ke memori darurat sehingga admin bebas membatalkan pemulihan dan mengembalikan data semula kapan saja tanpa risiko kehilangan data.
- **Snapshot Cepat di Perangkat (Instant Device Snapshot)**: Memungkinkan admin menyimpan dan memulihkan snapshot kilat langsung di memori browser tanpa harus mengunduh file fisik.

---

### v1.9.23 — Penyempurnaan Jarak Lega & Presisi Visual Admin POS Kasir Mobile (25 Sep 2026)
- **Jarak Bernapas Lega di Bawah Header (.admin-pos-mode)**: Mengatasi kendala tampilan kasir yang terlalu mepet dengan header pada layar ponsel (HP) dengan memberikan padding atas dan margin samping yang nyaman pada kontainer konten admin.
- **Arsitektur Floating Card Workspace**: Terminal Kasir POS di CMS Admin dibungkus dalam kartu modern ber-rounded halus (`rounded-2xl sm:rounded-3xl`) dengan border lembut dan bayangan elegan (`shadow-md`), sehingga tampak melayang terpisah dengan indah dan tidak lagi menempel keras ke header toko.
- **Restrukturisasi Action Strip & Search Bar Mobile**: Merampingkan tinggi bilah aksi serta search bar dengan latar belakang adaptif (`bg-slate-50/80 dark:bg-slate-800/60`).
- **Optimalisasi Viewport Katalog HP**: Mengakomodasi tampilan produk lebih banyak dengan scrolling internal yang mulus dan bebas benturan double-scroll.

---

### v1.9.22 — Presisi Visual Admin POS Kasir Mobile & Harmonisasi Tema Warna (25 Sep 2026)
- **Eliminasi Header Wrapping di Admin POS Action Strip**: Mengatasi teks bertumpuk dua baris pada layar ponsel beresolusi sempit (<= 360px) dengan menerapkan `whitespace-nowrap`, `shrink-0`, dan label adaptif ("POS" di mobile, "Terminal POS" di desktop).
- **Harmonisasi Tombol Shift & Parkir Kasir**: Memperbarui tombol status shift kasir dan badge transaksi parkir (hold cart) agar selalu inline tanpa terpotong (single-line compact).
- **Sinkronisasi Warna Pemindai Kamera (Camera Scanner)**: Tombol scan barcode kamera F9 kini otomatis mengikuti identitas warna brand toko (`var(--color-primary)`).
- **Header CMS Admin Frosted Glass Konsisten**: Merombak tombol Preview dan Keluar di header Admin CMS menjadi pill frosted glass semi-transparan yang menyatu elegan dengan background brand toko.

---

### v1.9.21 — Manajemen Shift Kasir & Rekap Tutup Kasir Cerdas (Shift Settlement, Rekonsiliasi Kas Laci, Denominasi, X/Z-Report & Slip Thermal ESC/POS) (25 Sep 2026)

#### 💼 Siklus Kerja Kasir & Rekap Settlement Terpadu
- **Pembukaan Shift Kasir & Modal Awal (Cash Float)**: Kasir dapat/diwajibkan menginput uang modal awal kembalian di laci kasir saat mulai bertugas dengan chip preset instan (Rp 0, 50rb, 100rb, 200rb, 500rb) dan catatan opsional. Disertai konfirmasi audio chime Web Audio API yang elegan.
- **Badge Shift Real-Time di Header POS**: Header POS Storefront dan Admin menampilkan badge status shift aktif dengan modal awal kasir dan tombol 1-klik untuk memantau ringkasan shift berjalan.
- **Ringkasan Shift Berjalan (X-Report)**: Memungkinkan kasir dan admin toko mengecek performa shift yang sedang berlangsung tanpa menutup shift, termasuk durasi kerja aktif, rincian omset per metode bayar (Tunai, QRIS, Bank, Tempo), diskon toko, poin member, dan estimasi uang kas yang seharusnya ada di laci.
- **Rekonsiliasi Kas Laci & Rekap Tutup Kasir (Z-Report)**: Alur tutup kasir profesional dengan dua mode hitung fisik (Input Cepat atau Kalkulator Denominasi Lembaran: 100rb, 50rb, 20rb, 10rb, 5rb, 2rb, 1rb, koin), deteksi otomatis selisih kas (Pas/Seimbang, Surplus/Lebih, Defisit/Kurang), serta input catatan penutupan.
- **Cetak Slip Rekap Shift Thermal POS (58mm / 80mm)**: Cetak bukti settlement shift kasir berstandar enterprise ke printer thermal kasir (ESC/POS, Bluetooth, RawBT Android, atau browser print) lengkap dengan ringkasan penjualan, rekonsiliasi kas, dan kolom tanda tangan kasir serta supervisor/owner toko.
- **Laporan Shift Kasir Cloud di CMS Admin**: Tab baru "Laporan Shift & Rekap Kas" di menu Manajemen Kasir CMS Admin untuk memantau, mengaudit riwayat shift seluruh kasir, dan mencetak ulang slip rekap kasir kapan saja.
- **Pintasan Keyboard Shift (F10) & Proteksi Logout**: Menambahkan shortcut F10 untuk membuka modal shift langsung dari keyboard kasir serta proteksi konfirmasi cerdas saat kasir logout agar tidak lupa menutup shift.

---

### v1.9.20 — Perbaikan Persistensi Toggle Icon POS Kasir Storefront Saat Muat Ulang Halaman (Anti-Disappearance & Zero-Latency Cache) (24 Sep 2026)
- **Penyelesaian Kendala Ikon Kasir Hilang Saat Reload**: Memperbaiki masalah race condition dan pembatasan aturan keamanan Firestore (security rules) yang sebelumnya menyebabkan query akun kasir mengembalikan penolakan izin (permission denied) pada sesi awal reload sehingga tombol kasir disembunyikan secara keliru.
- **Arsitektur Multi-Tier Detection & Fast Path 0ms**: Pengecekan visibilitas ikon POS kini memanfaatkan cache instan localStorage (pos_has_cashier), sesi kasir aktif (pos_cashier_session), status admin aktif, dan konfigurasi publik cms_data tanpa memblokir perenderan UI.
- **Sinkronisasi Otomatis Dokumen Toko (hasCashier)**: Admin CMS kini otomatis menyinkronkan penanda hasCashier ke dokumen utama cms_data setiap kali kasir ditambah, diubah, atau dihapus, sehingga storefront dapat membaca status secara instan tanpa query berlebih.

---

### v1.9.19 — Pemindai Barcode Kamera Interaktif, Kalkulator Diskon Kasir Pintar (Rp/%), Alert Stok Menipis & Integrasi Printer Thermal ESC/POS (24 Sep 2026)
- **Pemindai Barcode Kamera Interaktif Terintegrasi**: Kasir dapat memindai barcode atau kode QR produk secara langsung menggunakan kamera HP, tablet, maupun webcam laptop via W3C BarcodeDetector API tanpa memerlukan scanner USB fisik.
- **Reticle Pemindai Futuristik & Laser Animasi**: Dilengkapi jendela bidik presisi, animasi garis laser pemindai (scanline laser), kontrol lampu senter/flash (torch), tombol putar kamera (depan/belakang), umpan balik audio beep instan, dan mode scan beruntun (continuous) vs sekali.
- **Kalkulator Diskon Transaksi Cerdas (Dual Mode: Rp & %)**: Keranjang kasir kini mendukung pemberian diskon fleksibel baik dalam nominal Rupiah maupun persentase potongan harga dengan kalkulasi otomatis real-time, sinkronisasi desktop & mobile, serta chip preset cepat (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb).
- **Peringatan Stok Menipis & Penanda Habis (Low Stock & Out of Stock Badges)**: Katalog kasir kini menampilkan status ketersediaan barang secara visual dengan lencana merah "HABIS" untuk stok 0 dan lencana peringatan oranye "SISA X" jika stok <= 5, disertai proteksi validasi kuantitas di keranjang kasir.
- **Integrasi Universal Printer & Struk Thermal POS**: Cetak struk kasir kini terhubung langsung ke preferensi printer toko (ukuran kertas 58mm/80mm, driver RawBT di Android, atau Bluetooth ESC/POS), menampilkan rincian diskon, poin member, serta tombol pintas akses cepat Pengaturan Printer.
- **Pintasan Keyboard Kasir Lanjutan**: Tambahan shortcut F4 untuk fokus langsung ke kolom pencarian katalog dan F9 untuk membuka/menutup pemindai barcode kamera.

---

### v1.9.15 — Integrasi Ekosistem Tunggal POS Kasir: Sinkronisasi Pesanan Toko (freshmart_orders), Pengaturan Stok Dinamis (useStock), & Resolusi Riwayat Kasir (24 Sep 2026)

#### 🌐 Integrasi Ekosistem Tunggal (Storefront, CMS Admin & POS Kasir)
- **Sinkronisasi Pesanan Terpadu**: Mengintegrasikan alur transaksi POS Kasir langsung ke koleksi pesanan utama toko (`freshmart_orders`). Setiap transaksi kasir (Tunai, QRIS, Bank, maupun Tempo) otomatis tercatat sebagai pesanan resmi dengan label `source: "pos"`, langsung muncul di menu Pesanan CMS Admin, Laporan Penjualan (Dashboard Omset), Pajak & Keuangan, dan Piutang Tempo.
- **Dukungan Pengaturan Stok Dinamis (`appData.store.useStock`)**: Alur kasir kini 100% selaras dengan pengaturan toko di CMS. Jika `useStock` aktif (`true`), kasir secara cerdas memvalidasi stok produk/varian dan memotong stok otomatis di Firestore serta inventaris lokal. Jika `useStock` nonaktif (`false`), kasir dapat menjual barang tanpa hambatan batas stok (sama persis dengan alur belanja storefront).
- **Resolusi Akses Riwayat Transaksi Kasir**: Memperbaiki kendala riwayat kasir yang tidak bisa dibuka dengan menghubungkan pembacaan transaksi langsung ke data pesanan kasir di `freshmart_orders` (dengan fallback sub-koleksi `pos_transactions`) dan menghilangkan pemblokiran sesi kaku saat dibuka dari dashboard seller.
- **Perbaikan Penanggalan Lokal (Timezone-Aware Date Filter)**: Mengganti generator tanggal UTC (yang meleset mundur 1 hari pada jam malam WIB) dengan penanggalan lokal presisi (`getLocalDateStr()`), menjamin rekap omset dan transaksi harian kasir selalu akurat.
- **Penyelarasan Firestore Security Rules**: Memperbarui aturan akses Firestore untuk `freshmart_orders` dan `pos_transactions` sehingga staf kasir dan admin toko dapat membaca dan mencatat transaksi secara instan tanpa error permission-denied.

---

### v1.9.14 — Penyempurnaan Antarmuka Keranjang Kasir POS: Display Varian Informatif, Harmonisasi Tema Warna, & Eliminasi Header Wrapping (24 Sep 2026)

#### 🛒 Penyempurnaan Visual & Estetika Keranjang Transaksi Kasir
- **Display Varian Informatif (Anti-Clipped Title)**: Mengatasi judul produk ber-varian yang sebelumnya terpotong menjadi elipsis (`NO DROP 4 KG ANTI BOCOR —...`) pada kartu item keranjang belanja. Kini nama utama produk tampil bersih, dan detail varian yang dipilih ditampilkan jelas pada badge khusus dengan ikon layer-group.
- **Harmonisasi Tema Brand pada Badge Varian (Zero Hardcode)**: Mengganti warna hardcoded indigo (`bg-indigo-600`) pada badge varian keranjang dengan variabel tema dinamis toko `var(--color-primary)`, menjamin keharmonisan visual 100% dengan identitas toko.
- **Eliminasi Header Wrapping pada Layar Sempit**: Mengoptimasi struktur baris header drawer keranjang mobile (`whitespace-nowrap`, `min-w-0`, dan `shrink-0`), menjamin angka counter item `(1)` tidak melompat ke baris baru dan tombol "Kosongkan" tampil sejajar rapi dengan ikon tong sampah.
- **Penyelarasan Header Keranjang Desktop**: Menerapkan perataan fleksibel yang sama pada panel keranjang kasir desktop agar tata letak senantiasa presisi di seluruh resolusi layar.

---

### v1.9.13 — Solusi Definitif Tampilan Kasir POS Admin CMS Terpotong: Arsitektur Viewport Lock (.admin-pos-mode) & Eliminasi Tabrakan Double-Scroll (23 Sep 2026)

#### 📱 Eliminasi Tabrakan Double-Scroll (Anti-Nested Scroll Collision)
- **Akar Masalah Selesai Tuntas**: Mengatasi masalah tampilan kasir POS yang terpotong setengah layar dengan area kosong putih raksasa di bawahnya saat kasir POS dibuka melalui CMS Admin di smartphone. Masalah terjadi akibat konflik kontainer luar `.scroll-content` yang memiliki `overflow-y-auto` dan padding bawah area aman, sehingga gesture swipe menggulir kontainer luar dan mendorong bilah pencarian & chip kategori ke balik sticky header.
- **Arsitektur Viewport Lock (`.admin-pos-mode`)**: Menerapkan mode viewport terisolasi saat tab Kasir POS aktif di CMS Admin. Kontainer luar (`#view-admin .scroll-content`) dikunci secara ketat ke `overflow: hidden !important`, `padding: 0 !important`, dan tinggi 100% penuh.
- **Pencarian & Kategori Tetap Terpaku (Sticky Action Strip & Search)**: Bilah pencarian nama/SKU/barcode dan chip kategori produk kini tetap terkunci rapi di posisi atas, tidak pernah terdorong hilang atau tertutup header saat kasir menggulir katalog.
- **Pengguliran Katalog Internal Mulus**: Kontainer katalog produk (`#pos-catalog-grid`) kini memegang kontrol pengguliran internal penuh dari batas bawah filter hingga dasar layar, memungkinkan kasir melihat seluruh produk hingga baris terakhir dengan lancar tanpa celah kosong.
- **Tata Letak Responsif Leluasa (Mobile & Desktop)**: Pada layar desktop/komputer kasir, kontainer POS kini membentang penuh 100% lebar layar (tidak lagi terjepit batas `max-w-5xl`), menghadirkan pengalaman terminal kasir split-panel 63:37 yang profesional.
- **Konsistensi Tema Dinamis (Zero Hardcode)**: Seluruh elemen aksen, tombol, dan indikator tetap terikat murni pada variabel CSS `var(--color-primary)` toko.

---

### v1.9.12 — Pelepasan Listener Realtime Terkelola Saat Logout & Navigasi (Zero Missing or Insufficient Permissions) (23 Sep 2026)

#### 🛡️ Pelepasan Listener Terkelola (Graceful Listener Teardown)
- **Zero Console Permission Denied**: Menjamin seluruh snapshot realtime Firestore (`histUnsubscribe` pada riwayat transaksi POS, `aOrdLst` pesanan admin, `aCustLst` pelanggan, dan `aRevLst` ulasan) dicabut (*detached*) secara bersih sebelum perintah `auth.signOut()` dieksekusi. Hal ini mengeliminasi tuntas error `FirebaseError: Missing or insufficient permissions` saat pengguna keluar dari dashboard seller maupun kasir.
- **Silent Teardown Guard pada Riwayat Kasir**: Listener riwayat transaksi kini secara otomatis mendeteksi pemutusan sesi unauthenticated dan membatalkan subscription secara instan tanpa memicu log peringatan maupun notifikasi toast error palsu di layar kasir.
- **Pembersihan Lintas Rute (Cross-Route Teardown)**: Fungsi `detachPOSHistoryListener` dipanggil otomatis saat berpindah tab CMS Admin, kembali ke halaman menu utama, berganti view router, maupun saat tombol kembali ke kasir ditekan.
- **Penyelarasan Aturan Keamanan Firestore**: Aturan akses `pos_transactions` dan `orders` di `firestore.rules` diperkuat untuk mengizinkan seluruh staf toko yang login (`request.auth != null`) mengakses dan mencatat transaksi kasir secara mulus tanpa batasan list query.
- **Konsistensi Tema Dinamis (Zero Hardcode)**: Menjaga 100% konsistensi tema toko berbasis `var(--color-primary)`.

---

### v1.9.11 — Sinkronisasi Data Rekening Bank Toko pada Modal Pembayaran Transfer POS Kasir (23 Sep 2026)

#### 🏦 Resolusi Data Rekening Bank Kosong & Multi-Field Mapping
- **Koreksi Pemetaan Skema Database**: Memperbaiki mapping field rekening bank pada modal pembayaran transfer kasir POS yang sebelumnya mencari properti `b.name`, `b.number`, `b.holder` (sehingga selalu tampil *"Rekening bank belum diatur"*). Kini diselaraskan penuh dengan skema CMS Admin (`b.bankName`, `b.bankAccount`, `b.bankOwner`) serta dilengkapi fallback multi-properti.
- **Auto-Prefetch & Reactive Bank Loader**: Menambahkan fungsi `ensureBanksLoaded()` yang memuat data rekening toko langsung dari `freshmart/cms_data` Firestore secara reaktif saat modal pembayaran dibuka atau saat metode Bank dipilih, menjamin pilihan rekening selalu muncul instan.
- **Indikator & Petunjuk Transfer Elegan**: Menambahkan kartu panduan transfer berwarna hijau emerald yang ramah kasir dan peringatan jika data rekening belum diisi di CMS Admin.
- **Konsistensi Tema Dinamis (Zero Hardcode)**: Seluruh elemen input, select, dan indikator terintegrasi dengan variabel tema toko `var(--color-primary)`.

---

### v1.9.10 — Resolusi Tuntas Izin Akses Firestore Pelanggan & Peningkatan Engine Pencarian Member POS (23 Sep 2026)

#### 🔐 Resolusi Error Firestore Security Rules & Direct Document Get
- **Direct Document Get Tanpa Blokir Izin**: Mengatasi tuntas error `Missing or insufficient permissions` pada POS kasir saat mengakses koleksi `customers`. Query dioptimasi menggunakan metode paralel direct document get (`.doc(phone).get()`) yang 100% diizinkan oleh rule keamanan aktif (`allow get: if true;`), tanpa ketergantungan pada izin query list admin.
- **Pembaruan Firestore Security Rules**: Memperbarui aturan akses Firestore untuk `/customers/{phone}` menjadi `allow read: if true;` dan `allow create, update: if isAdmin() || isCashier();`, memberikan izin penuh bagi kasir terdaftar untuk membaca dan mendaftarkan data pelanggan.
- **Eliminasi Log Error Spam Console**: Membungkus pemanggilan koleksi pelanggan dalam silent error handling sehingga konsol browser kasir bersih dari peringatan permission.
- **Optimasi Input Nomor Telepon Kasir**: Debounced lookup disesuaikan secara cerdas agar tidak memicu query premature saat kasir baru mengetikkan beberapa digit awal nomor HP, dan menyediakan petunjuk pencarian ramah kasir bila data tidak ditemukan.
- **Konsistensi Tema Dinamis (Zero Hardcode)**: Menjaga 100% integritas visual dan keselarasan palet warna brand `var(--color-primary)`.

---

### v1.9.9 — Penyempurnaan Posisi Icon Modal POS Kasir & Sistem Pencarian Terpadu Member VIP (23 Sep 2026)

#### 🎯 Presisi Posisi Icon Modal Pembayaran Kasir
- **Icon Center Rapi & Simetris**: Mengubah struktur tombol Tipe Pelanggan (Umum, Member, Tempo) dan Metode Pembayaran (Tunai, QRIS, Bank, Tempo) menggunakan tata letak `flex flex-col items-center justify-center text-center`, menjamin posisi icon glyph berada tepat di tengah (center) di atas label teks dengan proporsi visual yang rapi dan elegan.
- **Konsistensi Tema Dinamis (Zero Hardcode)**: Seluruh tombol aktif (`pos-ctype-*` dan `pos-pay-*`) memanfaatkan `var(--color-primary)` toko secara otomatis.

#### 👥 Sistem Pencarian Terpadu Member VIP (Multi-Format HP, Firestore Direct Query & Auto Poin)
- **Direct Firestore Query Fallback**: Mengatasi kendala pembacaan member pada fitur POS kasir dengan menambahkan mekanisme query langsung ke Firestore (`freshmart/cms_data/customers`) dan prefetch otomatis saat kasir dibuka.
- **Normalisasi Nomor Telepon Indonesia Cerdas**: Mendukung pencarian nomor HP dalam berbagai format (`08xxx`, `628xxx`, `+62 8xxx`, maupun `8xxx`) melalui pencocokan digit inti (*core digits*), serta pencarian instan berdasarkan Nama Member atau ID Pelanggan.
- **Deteksi Live & Interactive Multi-Member Picker**: Dilengkapi pencarian otomatis saat mengetik (debounce 300ms) dan daftar pemilih interaktif jika terdapat beberapa member yang sesuai.
- **Perlindungan Nama & Akumulasi Poin Loyalitas**: Mempertahankan nama asli member terverifikasi pada struk transaksi serta menambahkan poin loyalitas belanja secara otomatis ke saldo member di cloud Firestore.

---

### v1.9.8 — Solusi Definitif Anti-Gepeng Grid POS Kasir: Eliminasi Flex-Collapse, Hard Min-Height 220px, & Dedicated Grid Engine (23 Sep 2026)

#### 🛡️ Solusi Definitif Kartu Produk Gepeng (Zero-Collapse Guarantee)
- **Eliminasi Circular Dependency Flex-Collapse**: Mengatasi akar masalah penyebab kartu produk menciut menjadi kapsul tipis di Android WebView dan browser mobile, di mana flex item kolom dengan kalkulasi `min-content` memaksa tinggi elemen ke angka 0.
- **Batas Tinggi Minimum Absolut (`min-height: 220px`)**: Menetapkan batas tinggi fisik minimum 220px pada setiap kartu produk (`.pos-product-card`) dan 120px pada kotak gambar (`.pos-img-box`), sehingga secara matematis tidak mungkin lagi menciut menjadi pil datar.
- **Arsitektur Gambar In-Flow Berasio 1:1 Murni**: Mengganti trik pseudo-element out-of-flow dengan arsitektur direct child `aspect-ratio: 1 / 1` in-flow, menjamin foto produk dan placeholder berdimensi seketika sejak rendering frame pertama.
- **Dedicated POS Grid Engine**: Kontainer katalog POS kini ditenagai class terdedikasi (`.pos-catalog-grid-mode` & `.pos-catalog-list-mode`) tanpa ketergantungan utility purge Tailwind maupun perata `content-start` yang menekan track tinggi grid.
- **Konsistensi Tema Dinamis Tanpa Hardcode**: Seluruh warna aksen (border aktif keranjang, badge grosir, counter kuantitas, harga, tombol tambah) terhubung otomatis ke variabel tema `var(--color-primary)` toko.

---

### v1.9.7 — Penyempurnaan Grid POS Kasir: CSS Anti-Collapse System, Konsistensi Brand Tema, Dark Mode Penuh (23 Sep 2026)

#### 🃏 Sistem CSS Anti-Collapse Kartu Grid (Solusi Definitif)
- **Teknik `padding-top:100%` Paling Robust**: Mengganti `aspect-ratio: 1/1` inline yang rentan di-override dengan teknik `::before { padding-top: 100% }` — standar industri tertua dan paling kompatibel yang menjamin kotak gambar selalu berbentuk 1:1 tanpa pernah collapse menjadi pil tipis, bahkan saat gambar belum dimuat.
- **CSS Class System Terdedikasi (`src/style.css`)**: Seluruh komponen kartu produk POS kini menggunakan class CSS dedicated (`.pos-product-card`, `.pos-img-box`, `.pos-img-inner`, `.pos-badge`, `.pos-card-footer`, dll.) — bukan campuran inline Tailwind yang mudah hilang saat Purge CSS.
- **Mode List Thumbnail Stabil**: Thumbnail 52px di mode list kini menggunakan `.pos-list-thumb` dengan `height: 52px` fixed — tidak bisa collapse dalam kondisi apapun.

#### 🎨 Konsistensi Warna Brand Tema (Zero Hardcode)
- **Badge GROSIR Pakai `var(--color-primary)`**: Badge GROSIR yang sebelumnya hardcode warna `amber-500` kini otomatis mengikuti warna tema brand toko (`var(--color-primary)`) — jika warna brand toko berganti, badge ikut berubah tanpa perlu edit manual.
- **Hover, Active, In-Cart State di CSS**: Animasi hover (`translateY(-2px)`, shadow naik) dan active state (`scale(0.98)`) kini terdefinisi di CSS class, tidak bergantung pada Tailwind class yang bisa tidak ter-generate di build produksi.

#### 🌙 Dark Mode Penuh Komponen Kartu POS
- **Aturan Dark Mode Lengkap**: Ditambahkan `.dark .pos-product-card`, `.dark .pos-img-box`, `.dark .pos-img-placeholder`, `.dark .pos-list-item`, dan seluruh turunannya — tampilan POS Kasir kini sepenuhnya elegan di mode gelap.

---

### v1.9.6 — Pembaruan Tampilan Visual POS Kasir: Perbaikan Keruntuhan Kartu Produk, Mode Grid & List, Placeholder Visual & Harmonisasi Tema (22 Sep 2026)

#### 🖼️ Perbaikan Visual Total Kartu Produk POS (Anti-Collapse)
- **Garansi Rasio Gambar Presisi 1:1**: Memperbaiki keruntuhan gambar dan kartu produk yang sebelumnya menciut menjadi kapsul datar tipis — kini dijamin rasio 1:1 (`aspect-ratio: 1 / 1`) dengan batas ketinggian minimum 120px dan utilitas CSS eksplisit di `src/style.css`.
- **Tata Letak Badge Rapi & Non-Overlapping**: Badge `VARIAN` dan `GROSIR` dipindahkan rapi ke dalam kotak foto dengan posisi floating glassmorphism, tidak lagi menumpuk dan menutupi nama barang atau harga produk.
- **Placeholder Visual Elegan untuk Produk Tanpa Gambar**: Produk tanpa foto (paku, semen, dll) kini menampilkan bingkai placeholder elegan dengan ikon kotak dan kategori produk yang informatif, bukan area kosong atau rusak.

#### 🎛️ Pengalih Mode Tampilan (Grid Foto vs List Baris Kompak)
- **Mode Grid Foto (⊞)**: Tampilan visual kartu foto produk lega (2 kolom di mobile, 3-5 di desktop) dengan tombol aksi cepat.
- **Mode List Baris Kompak (☰)**: Tampilan daftar baris ramping dengan thumbnail 54px, nama produk, kategori, harga jelas, dan tombol tambah cepat — sangat cepat dan efisien untuk kasir saat melayani antrean panjang.
- **Penyimpanan Preferensi Tampilan**: Pilihan mode Grid/List tersimpan otomatis di `localStorage` per-perangkat.

#### 🎨 Harmonisasi Header POS & Visual Keranjang
- **Harmonisasi Warna Brand Toko**: Header Storefront POS kini memakai warna tema keemasan Toko Putri (`var(--color-primary)`), selaras dengan tema keseluruhan aplikasi toko.
- **Thumbnail Visual di Keranjang**: Setiap item di keranjang kasir kini menampilkan gambar thumbnail mini 40px untuk verifikasi barang yang cepat dan akurat.

---

### v1.9.5 — Redesain Modern POS Kasir Mobile-First: Floating Cart Bar, Bottom Sheet Keranjang, Quick-Cash & Audio Feedback (22 Sep 2026)

#### 📱 Redesain Mobile-First & Pengalaman Layar Sentuh Presisi
- **Katalog 2-Kolom Lega di Smartphone**: Mengganti tata letak 60:40 yang sempit menjadi katalog grid 2-kolom yang luas di HP (`grid-cols-2`), 3-5 kolom di tablet dan desktop, dengan foto tajam, badge varian/grosir, dan tombol `+` sentuh melingkar.
- **Floating Sticky Cart Bar di HP**: Bilah keranjang mengambang cerdas di dasar layar HP yang otomatis muncul secara halus saat keranjang berisi barang, menampilkan jumlah item, total belanja, dan tombol akses cepat 1-sentuhan.
- **Bottom Sheet Keranjang (Slide-up Drawer)**: Membuka keranjang kasir dalam lembar geser bawah yang nyaman diakses jempol satu tangan, lengkap dengan kontrol kuantitas `[−] qty [+]`, input diskon per-item, dan tombol langsung ke proses pembayaran.
- **Tata Letak Split-Panel Desktop Leluasa**: Di layar desktop (komputer kasir), katalog produk menempati 63% ruang dan panel penagihan/keranjang menempati 37% ruang di samping kanan secara berdampingan tanpa scroll ganda.

#### 💵 Transaksi Cepat Kasir: Quick-Cash & Audio Sintetis
- **Tombol Uang Cepat (Quick-Cash)**: Tombol instan pecahan uang tunai (`Uang Pas`, `Rp 10.000`, `20.000`, `50.000`, `100.000`, `200.000`, `500.000`) untuk input pembayaran cepat 1-klik tanpa repot mengetik.
- **Indikator Visual Kembalian Cerdas**: Indikator status kembalian otomatis berubah hijau jika uang mencukupi atau merah jika uang masih kurang, dengan proteksi tombol selesai transaksi.
- **Audio Beep Sintetis Kasir**: Umpan balik audio beep kasir taktil menggunakan Web Audio API (zero external asset) saat scan barcode scanner USB, tambah produk, atau penambahan kuantitas.
- **Integrasi Hardware Back Button Android**: Dialog pembayaran dan drawer keranjang terdaftar di sistem riwayat modal, sehingga tombol Back fisik menutup dialog satu per satu secara aman tanpa keluar dari mode kasir.

### v1.9.4 — Mode POS Kasir Storefront Mandiri, Akun Kasir CMS, Multivarian & Harga Grosir (22 Sep 2026)

#### 🏪 Mode Kasir Mandiri di Storefront & Header Toggle
- **Akses Langsung dari Storefront**: Ikon register kasir (`fa-cash-register`) disematkan di header toko sebelah keranjang belanja dengan status online (dot hijau berdenyut).
- **Deteksi Akun Otomatis**: Ikon kasir hanya muncul jika terdapat akun kasir yang terdaftar di toko, menjaga antarmuka tetap bersih bagi pembeli biasa.
- **Sistem Login Kasir Mandiri**: Kasir masuk menggunakan modal dialog login khusus kasir (Email/Username & Password). Sesi kasir mandiri dan terisolasi dari login admin toko.

#### 👥 Manajemen Akun Kasir di Admin CMS
- **Menu Baru CMS "Akun Kasir"**: Administrator toko dapat menambah, mendaftarkan, mengaktifkan/menonaktifkan, dan menghapus akun akses kasir dengan mudah.
- **Kontrol Hak Akses**: Admin menentukan nama kasir, email login, dan password yang dienkripsi aman.

#### 🎨 Penjualan Multivarian & Harga Grosir di POS
- **Sheet Pilih Varian Interaktif**: Produk yang memiliki varian memunculkan drawer pilihan opsi varian lengkap dengan gambar, harga dinamis, status stok, dan tombol tambah cepat.
- **Kalkulasi Grosir Bertingkat Otomatis**: Sistem kasir otomatis menghitung dan menerapkan potongan harga grosir bertingkat saat kuantitas memenuhi syarat minimal.

#### 📱 UI/UX Responsif Anti-Jomplang (Mobile, Tablet, Desktop)
- **Split-Panel Layar Lebar**: Panel kiri katalog produk grid dan panel kanan keranjang transaksi aktif untuk monitor komputer & tablet.
- **Tab Navigasi Mobile Ergonomis**: Tab Katalog dan Tab Keranjang kasir dengan sticky footer yang ramah sentuhan jempol di smartphone.
- **Keamanan Firestore Rules**: Proteksi ketat sub-koleksi `cashier_accounts` (admin-only write) dan koleksi `pos_transactions` (admin + authenticated cashier).

---

### v1.9.3 — Fitur POS Kasir Terintegrasi (22 Sep 2026)
- **Modul Kasir POS**: Transaksi langsung, barcode USB scanner, diskon per item & global, pelanggan umum/member/tempo, cetak struk thermal, rekap omset harian, dan void transaksi.

---

### v1.9.2 — Geser Urutan Produk, Performa Core Web Vitals & SEO (21 Sep 2026)

#### 🔀 Geser & Atur Urutan Produk (Drag & Drop Reorder)
- **Geser Kartu Produk Fleksibel**: Admin dapat menahan dan menggeser (drag & drop) kartu produk untuk menentukan posisi tampil di etalase pembeli. Mendukung gesture sentuhan HP maupun mouse PC.
- **Tombol Naik/Turun ▲▼ & Pindah Cepat**: Setiap produk dilengkapi tombol panah naik/turun instan serta badge urutan yang dapat diklik untuk melompat langsung ke posisi nomor tertentu.
- **Rapikan per Kategori Otomatis**: Tombol 1-klik untuk mengelompokkan produk sejenis secara berdekatan tanpa perlu digeser manual satu per satu.
- **Menu Urutkan Cepat**: Pilihan pengurutan otomatis: Nama A-Z, Nama Z-A, Harga Termurah, Harga Termahal, dan Reset Urutan Terbaru.
- **Sinkronisasi Real-Time**: Perubahan urutan langsung tersimpan di Cloud Firestore dan tercermin ke storefront pembeli secara instan.

#### 🔐 Verifikasi Kepemilikan Domain Google Search Console
- Ditambahkan file verifikasi HTML `public/google1cca8652526fd3bf.html` di root domain.
- Ditambahkan meta tag `google-site-verification` di `index.html` sebagai verifikasi cadangan.
- `vercel.json` diperbarui: URL `google*.html` kini dikecualikan dari SPA rewrite agar dapat diakses langsung sebagai file statis.

#### ⚡ Optimasi Performa Core Web Vitals
- **FCP/LCP lebih cepat**: Splash screen delay dihapus — `hLoad()` kini dipanggil langsung tanpa `setTimeout`.
- **Firestore paralel**: `Promise.all()` digunakan untuk memuat `cms_data`, `products`, dan `rewards` secara bersamaan — menghemat waktu roundtrip jaringan.
- **Font Awesome non-blocking**: Tambah deklarasi `font-display: swap` di `style.css` agar teks tidak terblokir saat font ikon dimuat.
- **Banner pertama prioritas tinggi**: Banner `idx === 0` kini menggunakan `loading="eager"`, `fetchpriority="high"`, `decoding="sync"`, dan ukuran gambar dioptimalkan ke `w600-rw`.
- **Logo CDN sizing**: Logo toko dari Google Drive kini auto-append `=w200-rw` untuk penyajian gambar berukuran tepat.
- Hapus `setTimeout` redundan di blok `finally` Firestore.

#### 🐛 Perbaikan Bug & Stabilitas Banner
- **Banner `idx is not defined`**: Memperbaiki `ReferenceError: idx is not defined` pada rendering elemen banner dan kontrol video/audio banner di `src/modules/home/sections.js`.

#### 🚀 Optimasi PageSpeed Lanjutan
- **Modular Chunk Splitting**: Memisahkan bundle `module-member` (64KB) dan `module-faq` (30KB) secara dinamis, merampingkan ukuran bundle `index.js` dari 194KB menjadi 127KB (−34%).
- **Dukungan WebP CDN Menyeluruh**: Fungsi `getOptImg` diperluas untuk semua domain `googleusercontent.com` dengan parameter `-rw` untuk konversi format gambar WebP yang lebih ringan.
- **Preconnect CDN**: Menambahkan directive `preconnect` untuk `cdnjs.cloudflare.com` dan `dns-prefetch` untuk `googleapis.com` pada `index.html` guna mempercepat handshake TLS/DNS.
- **Responsive Image Sizes**: Gambar produk grid dan list kini dilengkapi atribut `sizes` (`(max-width: 640px) 45vw, 240px` dan `96px`) sehingga browser hanya memuat dimensi gambar sesuai kebutuhan layar.

#### ♿ Aksesibilitas (a11y)
- Link footer tanpa `href` kini dilengkapi `href="javascript:void(0)"` dan `role="button"` sesuai standar HTML aksesibilitas.

#### 🎯 Eliminasi Total CLS (Cumulative Layout Shift 0.835 → <0.05)
- **Pre-rendered Skeleton Layout**: Container banner, kategori, brand, dan produk kini memiliki skeleton `animate-pulse` dengan dimensi tetap (`min-h-[190px]`, `min-h-[44px]`, `min-h-[72px]`, `min-h-[400px]`) sehingga layout tidak melompat saat data Firestore masuk.
- **Dimensi Gambar Eksplisit**: Semua elemen `<img>` utama kini memiliki atribut `width` dan `height` (logo: 48×48, banner: 240×140, grid produk: 300×300, list produk: 96×96) agar browser dapat mengalokasikan ruang sebelum gambar terunduh.
- **Eliminasi Geseran Scrollbar**: Ditambahkan `html { overflow-y: scroll; }` di `style.css` agar lebar viewport tidak berubah saat halaman memanjang.

#### 🚀 Lazy-Loading Modul Admin Seller CMS
- **Dynamic Import Admin Bundle (510 KB)**: Modul admin CMS `module-admin` (dahulu di-import statis sejak awal) kini dimuat secara dinamis melalui `import()` hanya saat admin login atau membuka rute admin (`ensureAdminLoaded()`).
- **Bersih dari Preload Admin**: Dikonfigurasi `modulePreload.resolveDependencies` di `vite.config.js` sehingga `<link rel="modulepreload">` di `index.html` tidak lagi menyertakan chunk admin, cetak nota, member, FAQ, dan analytics — menghemat bandwidth awal pembeli.


---

## 📝 Catatan Pemeliharaan Agen AI & Developer
1. **Satu Perintah untuk Semua**: Setiap kali selesai memodifikasi kode atau modul, cukup jalankan `npm run sync` agar seluruh folder distribusi, flashdisk, dan Android langsung tersinkronisasi secara otomatis.
2. **Kompilasi Bersih**: Selalu pastikan `npm run build` berjalan tanpa eror sebelum melakukan git push.
3. **Konfigurasi Database Multi-Toko**: Penggantian kredensial Firebase dapat dilakukan langsung melalui `public/config.js` tanpa harus mengompilasi ulang kode sumber.
4. **Verifikasi Domain**: File `public/google1cca8652526fd3bf.html` wajib tetap ada — jangan dihapus atau di-exclude dari `.gitignore`. Diperlukan Google Search Console.

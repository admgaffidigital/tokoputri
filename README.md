# TOKO PUTRI - APLIKASI WEB & POS E-COMMERCE

Aplikasi e-commerce dan manajemen kasir point-of-sales (POS) modern berkinerja tinggi untuk Toko Putri, dirancang khusus dengan antarmuka yang dinamis, kaya estetika, serta fitur lengkap (katalog produk, keranjang belanja, ulasan produk, sistem member poin/reward, nota kasir thermal, nota tempo/piutang, surat jalan, dan invoice A4).

---

## 🛠️ Informasi Pengembang & Hak Cipta
* **Nama Projek**: TOKO PUTRI
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

---

## 🚀 Perintah CLI Pengembangan

Gunakan perintah Node.js berikut dalam terminal projek untuk menjalankan atau membangun website:

* **Menjalankan Dev Server (Lokal)**:
  ```bash
  npm run dev
  ```
  *Membuka aplikasi di browser pada port `3000` (atau port default Vite).*

* **Melakukan Build Produksi**:
  ```bash
  npm run build
  ```
  *Mengompilasi dan meminifikasi semua aset ke dalam folder `/dist` dengan hash baru untuk pencegahan caching.*

* **Menjalankan Pratinjau Hasil Build**:
  ```bash
  npm run preview
  ```
  *Menjalankan server pratinjau lokal untuk menguji performa berkas di folder `/dist` sebelum dipublish.*

---

## 📝 Catatan Pemeliharaan Agen AI & Developer
* Selalu jalankan `npm run build` sebelum mem-push perubahan terbaru ke GitHub untuk memastikan tidak ada kesalahan kompilasi JS/CSS.
* Konfigurasi Firestore bersifat reaktif, pastikan data schema pada dokumen Firestore disesuaikan jika menambah/mengubah struktur properti produk (misal: penambahan properti Pre-Order `poTime`).

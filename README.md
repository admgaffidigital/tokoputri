# WEBSITE TOKO BANGUNAN

Aplikasi e-commerce dan manajemen kasir point-of-sales (POS) modern berkinerja tinggi, dirancang khusus dengan antarmuka yang dinamis, kaya estetika, serta fitur lengkap (katalog, keranjang belanja, ulasan produk, sistem member poin/reward, nota kasir thermal, nota tempo/piutang, surat jalan, dan invoice A4).

---

## 🛠️ Informasi Pengembang & Hak Cipta
* **Nama Tema**: WEBSITE TOKO BANGUNAN
* **Dikembangkan & Ditandatangani Oleh**: **Novan Restu Utomo** (Selaku Pengembang Utama dan Developer Asli)

---

## 📁 Struktur Kode & Direktori Projek

Untuk mempermudah pemeliharaan (*maintenance*), pelacakan bug (*debugging*), dan penambahan fitur baru oleh pengembang atau agen AI Antigravity di masa depan, berikut adalah peta berkas penting dalam projek ini:

```
├── dist/                  # Folder hasil kompilasi produksi (siap dideploy ke hosting)
├── node_modules/          # Pustaka/dependencies Node.js (diabaikan oleh Git)
├── src/
│   ├── db.js              # Inisialisasi Firebase App dan modul Firestore
│   ├── main.js            # Inti logika aplikasi (event handler, state management, render view, POS logic)
│   └── style.css          # Kustomisasi CSS Tailwind dan override styling visual
├── _scripts/              # Skrip bantu & utilitas migrasi database (git-ignored)
├── index.html             # Dokumen HTML utama (kerangka UI, modal-modal, dan script tag entry point)
├── tailwind.config.js     # Konfigurasi utility classes Tailwind CSS
├── vite.config.js         # Konfigurasi bundler Vite (port server dev: 3000)
├── postcss.config.js      # Konfigurasi pemrosesan CSS
├── package.json           # Definisi dependencies & script CLI projek
└── README.md              # Dokumentasi teknis & kredit pengembang (berkas ini)
```

### Penjelasan Komponen Utama:
1. **`index.html`**: Berisi seluruh markup halaman utama, layout kasir, panel pengaturan admin, modal ulasan, struk belanja thermal, modal rincian transaksi tempo, serta preview A4 invoice/surat jalan.
2. **`src/main.js`**: Menyimpan seluruh state aplikasi (`appData.store`, `cart`, dll.), integrasi database Firestore, logika transaksi kasir & POS, aturan validasi pembayaran bukti transfer/tempo, penghitungan pajak/diskon member, serta form Kategori UI UX.
3. **`src/db.js`**: Mengonfigurasi koneksi ke database Firestore koleksi `freshmart` (untuk produk/kategori) dan `freshmart_orders` (untuk pesanan).

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

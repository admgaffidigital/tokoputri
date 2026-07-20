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

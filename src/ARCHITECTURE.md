# 🏗️ ARSITEKTUR KODE — Toko Putri Freshmart

> Baca file ini dulu sebelum mengedit kode. Ini adalah peta navigasi seluruh proyek.

---

## 📁 Struktur Folder

```
src/
├── config/
│   └── firebase.js         ← Inisialisasi Firebase (db, auth, ADMIN_UID)
│
├── core/                   ← Modul inti tanpa dependensi UI/bisnis
│   ├── state.js            ← 🔑 State global terpusat (appData, cart, dll)
│   ├── utils.js            ← Helper stateless (el, esc, fCur, sL, dll)
│   ├── theme.js            ← Engine warna, dark mode, background
│   ├── ui.js               ← Dialog: toast, confirm, prompt
│   ├── router.js           ← Navigasi view & History API
│   └── pricing.js          ← Kalkulasi harga, GPS, ongkir
│
├── services/
│   ├── storage.js          ← 🔑 loadAppData, saveApp, realtime sync
│   ├── upload.js           ← Upload gambar ke Google Drive (GAS)
│   └── gas.js              ← URL GAS endpoint
│
├── modules/
│   ├── admin/
│   │   ├── index.js        ← Entry point admin (inisialisasi semua tab)
│   │   ├── products/       ← CMS produk (terpecah per fitur)
│   │   │   ├── index.js    ← Entry point & shared state
│   │   │   ├── table.js    ← Tabel daftar produk & list item
│   │   │   ├── form.js     ← Form tambah/edit, simpan, hapus, duplikat
│   │   │   ├── variants.js ← Varian produk, spec builder, database warna
│   │   │   ├── stock.js    ← Restock cepat & toggle status stok
│   │   │   ├── scanner.js  ← Barcode scanner kamera (HTML5-QRCode)
│   │   │   └── pricing.js  ← Edit cepat harga & grosir builder
│   │   ├── products.js     ← Re-export shim untuk backward compatibility
│   │   ├── orders.js       ← Manajemen pesanan admin
│   │   ├── settings.js     ← Pengaturan toko, tema, bank, voucher
│   │   ├── finance.js      ← Laporan keuangan & pajak
│   │   ├── tempo.js        ← Fitur jadwal & waktu operasional
│   │   ├── reviews.js      ← Moderasi ulasan pelanggan
│   │   ├── schema.js       ← Skema data produk
│   │   ├── auth.js         ← Login/logout admin
│   │   └── router.js       ← Tab routing admin
│   │
│   ├── catalog/
│   │   ├── catalog.js      ← Render katalog produk (rCat)
│   │   └── product-modal.js← Modal detail produk
│   │
│   ├── cart/
│   │   ├── cart.js         ← Keranjang belanja
│   │   ├── checkout.js     ← Proses checkout & transaksi Firestore
│   │   ├── payment.js      ← Modal pembayaran QRIS/transfer
│   │   └── wishlist.js     ← Daftar keinginan
│   │
│   ├── orders/
│   │   ├── orders.js       ← Riwayat pesanan pelanggan (realtime)
│   │   └── reviews.js      ← Formulir ulasan pelanggan
│   │
│   ├── home/
│   │   ├── sections.js     ← Beranda dinamis (rDyn)
│   │   └── footer.js       ← Footer toko
│   │
│   ├── member/
│   │   ├── reward.js       ← Katalog & penukaran hadiah
│   │   └── voucher.js      ← Validasi & pemakaian voucher
│   │
│   ├── storefront/
│   │   └── modals.js       ← Modal kategori, brand, panduan belanja
│   │
│   ├── print/
│   │   └── documents.js    ← Struk thermal & invoice A4
│   │
│   └── faq/
│       └── faq.js          ← Tanya jawab (admin & storefront)
│
├── main.js                 ← 🔑 Entry point: inisialisasi & boot app
└── style.css               ← Global CSS (Tailwind + custom)
```

---

## 🔄 Alur Data Utama

```
Browser Buka Halaman
        │
        ▼
   main.js (boot)
        │
        ├─► core/state.js    → inisialisasi state (cart, wishlist dari localStorage)
        ├─► core/theme.js    → apply warna & dark mode dari localStorage
        └─► DOMContentLoaded
                │
                ▼
         storage.js: loadAppData()
                │
                ├─ Cache ada? ─YES─► render instan (0ms) dari localStorage
                │                    └─► rDyn() + rCat()
                │
                └─ Cache kosong? ──► fetch dari Firestore → render
                │
                ▼
         storage.js: attachRealtimeStockSync()
                │
                └─► onSnapshot(cms_data) → deteksi perubahan server
                        │
                        ├─ Hanya setting berubah? → update appData.store saja (HEMAT)
                        ├─ Beberapa produk berubah? → fetch per-id saja (HEMAT)
                        └─ Perubahan besar? → fetch semua produk
                                └─► rDyn() + rCat() → tampilan update otomatis
```

---

## 🌐 Daftar `window.*` Global

> Ini adalah daftar fungsi yang di-expose ke `window` agar bisa dipanggil dari
> atribut HTML `onclick`, `onchange`, dll di `index.html`.
> **Jangan hapus tanpa memeriksa index.html terlebih dahulu!**

| `window.*` | Sumber | Kegunaan |
|---|---|---|
| `window.db` | `config/firebase.js` via `main.js` | Instance Firestore |
| `window.firebase` | `main.js` | Instance Firebase SDK |
| `window.appData` | `core/state.js` via `bindProp` | Data toko saat ini |
| `window.cart` | `core/state.js` via `bindProp` | Keranjang belanja |
| `window.ADMIN_UID` | `main.js` | UID pemilik toko |
| `window.isAdm` | `main.js` | Status login admin |
| `window.loadAppData` | `services/storage.js` | Reload data dari Firestore |
| `window.saveApp` | `services/storage.js` | Simpan data ke Firestore |
| `window.attachRealtimeStockSync` | `services/storage.js` | Pasang listener realtime |
| `window.showToast` | `core/ui.js` | Notifikasi popup |
| `window.showConfirm` | `core/ui.js` | Dialog konfirmasi |
| `window.changeView` | `core/ui.js` | Navigasi antar halaman |
| `window.rDyn` | `modules/home/sections.js` | Render ulang beranda |
| `window.rCat` | `modules/catalog/catalog.js` | Render ulang katalog |
| `window.openProductModal` | `modules/catalog/product-modal.js` | Buka modal produk |
| `window.rAdmItms` | `modules/admin/products/table.js` | Render ulang tabel admin |
| `window.sanitizeCart` | `modules/cart/cart.js` | Bersihkan item keranjang |
| `window.applyUITheme` | `core/theme.js` | Ganti tema warna |
| `window.applyBackgroundStyle` | `core/theme.js` | Ganti gaya background |
| `window.getEffP` | `services/storage.js` | Ambil harga efektif produk/grosir |
| `window.getEffHpp` | `services/storage.js` | Ambil HPP efektif produk |
| `window.getEffPoin` | `services/storage.js` | Ambil poin efektif produk |
| `window.getDist` | `services/storage.js` | Hitung jarak GPS (km) |

---

## ⚡ Cara Menambah Fitur Baru

### 1. Fitur kecil (helper/utility)
→ Tambahkan ke `core/utils.js` dan `export`

### 2. Fitur di halaman tertentu
→ Tambahkan ke modul yang relevan (`modules/catalog/`, `modules/cart/`, dll)
→ Expose ke `window.*` di bagian bawah file jika perlu dipanggil dari HTML

### 3. Fitur data baru (field baru di Firestore)
→ Tambahkan default value di `core/state.js` → `defApp`
→ Tambahkan normalisasi di `storage.js` → `prepareAppData()`
→ Tambahkan field ke `saveApp()` jika perlu disimpan

### 4. Pengaturan admin baru
→ Tambahkan UI di `modules/admin/settings.js`
→ Simpan via `saveApp(['nama_field'])` untuk update parsial

### 5. Tab admin baru
→ Daftarkan di `modules/admin/router.js`
→ Tambahkan render function di file modul baru
→ Expose via `window.rAdmItms` handler

---

## 🚨 Hal-Hal Penting (Jangan Salah!)

1. **Jangan ubah `appData` langsung** dari luar `storage.js` tanpa `Object.assign(appData, ...)` — agar referensi tetap sama di semua modul
2. **Jangan panggil `loadAppData()` lebih dari sekali** — sudah ada guard di dalam fungsi
3. **`lastUpdate` pakai `FieldValue.increment(1)`** — JANGAN ganti ke `Date.now()` karena menyebabkan bug sync antar perangkat
4. **`saveApp(['key'])` bukan `saveApp()`** — selalu kirim array key yang berubah untuk update parsial; `saveApp()` tanpa argumen hanya untuk restore backup penuh!
5. **Semua route dikelola oleh History API** — jangan manipulasi `window.location.href` langsung, pakai `changeView()`
6. **Realtime listener hanya SATU** — `attachRealtimeStockSync()` ada guard `if (window.unsubCmsRealtime) return;` supaya tidak dobel. Jangan hapus guard ini!

---

## 📦 Build & Deploy

```bash
# Development (dengan hot-reload)
npm run dev

# Build produksi
npm run build

# Output ada di: dist/
# Push ke GitHub = auto-deploy ke Vercel/Netlify
git add -A && git commit -m "pesan" && git push
```

---

## 📋 Konvensi Kode

- **State global** → selalu via `core/state.js` (import setter-nya, jangan assign langsung ke `let` export)
- **DOM manipulation** → pakai `el()`, `setH()`, `show()`, `hide()` dari `utils.js`
- **Notifikasi** → pakai `showToast()` dari `utils.js` (akan forward ke `window.showToast`)
- **Firebase reads** → selalu batasi dengan kondisi / granular (hemat kuota)
- **Inline HTML** → escape user input dengan `esc()` dari `utils.js` untuk mencegah XSS

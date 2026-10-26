/**
 * ============================================================
 * MODUL ADMIN: DATABASE BERSAMA & PUSTAKA MASTER PRODUK (master-presets.js)
 * ============================================================
 * Menyediakan pustaka template produk bahan bangunan & alat teknik siap pakai
 * untuk mempercepat klien baru mengisi katalog toko (Zero Setup Effort).
 *
 * Fitur Utama:
 * 1. Pustaka Master Produk Multi-Kategori (Cat, Semen, Pipa, Besi, Perkakas, Sanitari, dll)
 * 2. Impor Selektif Per-Produk (Clone ke appData.products tanpa mengotori katalog toko)
 * 3. Seleksi Multi-Varian & Kustomisasi Harga Modal/Jual Toko Lokal
 * 4. Deteksi Cerdas Produk (Badge 'Sudah di Toko' vs 'Siap Diimpor')
 * 5. Pustaka Swatch Warna Cat (Kompatibilitas Penuh Database Warna Sebelumnya)
 * 6. Ekspor Produk Toko ke Pustaka Master (Two-Way Cloud Sharing)
 * ============================================================
 */

import { db } from '../../../config/firebase.js';
import { appData } from '../../../core/state.js';
import { saveApp } from '../../../services/storage.js';
import { setH, esc, sLoad, hLoad, showToast, showConfirm, el, fCur } from '../../../core/utils.js';
import { setCTab } from './index.js';

// ─── Filter & View State ───────────────────────────────────────────────────────
let activeSubTab = 'master'; // 'master' | 'colors'
let masterSearchQuery = '';
let activeMasterCategory = 'ALL';

// ─── Koleksi Preset Master Produk Bangunan & Teknik Standar Indonesia ─────────
export const BUILTIN_MASTER_PRESETS = [
    // ─── KATEGORI 1: CAT & PELAPIS ANTI BOCOR ──────────────────────────────────
    {
        id: 'preset-cat-nodrop',
        name: 'Cat Pelapis Anti Bocor No Drop',
        brand: 'Avian Brands',
        category: 'Cat & Pelapis',
        subCategory: 'Waterproofing',
        unit: 'Pail',
        tag: 'Best Seller',
        price: 65000,
        priceNormal: 72000,
        hpp: 52000,
        desc: 'Cat pelapis anti bocor nomor 1 di Indonesia dengan formula elastis kedap air serbaguna. Tahan cuaca ekstrem, anti jamur, dan menutup retak rambut pada dinding eksterior, atap seng/asbes, dak beton, dan talang air.',
        img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Daya Sebar', value: '1 - 2 m²/kg (2 lapis)' },
            { label: 'Kering Sentuh', value: '30 Menit' },
            { label: 'Kering Sempurna', value: '24 Jam' },
            { label: 'Aplikasi', value: 'Kuas, Rol Cat, Airless Spray' }
        ],
        variants: [
            { name: '1 Kg - Abu-Abu (002)', price: 65000, priceNormal: 72000, hpp: 52000, unit: 'Kaleng', colorCode: '#808080', sku: 'ND-1K-002', stock: 10, storeStock: 10, warehouseStock: 0, isActive: true },
            { name: '1 Kg - Putih (009)', price: 65000, priceNormal: 72000, hpp: 52000, unit: 'Kaleng', colorCode: '#FFFFFF', sku: 'ND-1K-009', stock: 10, storeStock: 10, warehouseStock: 0, isActive: true },
            { name: '1 Kg - Transparan (001)', price: 68000, priceNormal: 75000, hpp: 54000, unit: 'Kaleng', colorCode: '#F0F8FF', sku: 'ND-1K-001', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true },
            { name: '4 Kg - Abu-Abu (002)', price: 235000, priceNormal: 250000, hpp: 195000, unit: 'Galon', colorCode: '#808080', sku: 'ND-4K-002', stock: 8, storeStock: 8, warehouseStock: 0, isActive: true },
            { name: '4 Kg - Putih (009)', price: 235000, priceNormal: 250000, hpp: 195000, unit: 'Galon', colorCode: '#FFFFFF', sku: 'ND-4K-009', stock: 8, storeStock: 8, warehouseStock: 0, isActive: true },
            { name: '4 Kg - Hitam (003)', price: 235000, priceNormal: 250000, hpp: 195000, unit: 'Galon', colorCode: '#1A1A1A', sku: 'ND-4K-003', stock: 4, storeStock: 4, warehouseStock: 0, isActive: true },
            { name: '4 Kg - Coklat (006)', price: 235000, priceNormal: 250000, hpp: 195000, unit: 'Galon', colorCode: '#8B4513', sku: 'ND-4K-006', stock: 4, storeStock: 4, warehouseStock: 0, isActive: true },
            { name: '20 Kg (Pail) - Abu-Abu (002)', price: 1050000, priceNormal: 1150000, hpp: 910000, unit: 'Pail', colorCode: '#808080', sku: 'ND-20K-002', stock: 2, storeStock: 2, warehouseStock: 0, isActive: true },
            { name: '20 Kg (Pail) - Putih (009)', price: 1050000, priceNormal: 1150000, hpp: 910000, unit: 'Pail', colorCode: '#FFFFFF', sku: 'ND-20K-009', stock: 2, storeStock: 2, warehouseStock: 0, isActive: true }
        ]
    },
    {
        id: 'preset-cat-catylac',
        name: 'Cat Tembok Dulux Catylac Interior',
        brand: 'Dulux',
        category: 'Cat & Pelapis',
        subCategory: 'Cat Tembok',
        unit: 'Pail',
        tag: 'Interior',
        price: 155000,
        priceNormal: 170000,
        hpp: 128000,
        desc: 'Cat tembok interior berkualitas tinggi dengan teknologi Chroma Brite. Menghasilkan warna cerah menakjubkan, daya tutup maksimal, serta bau yang sangat rendah dan ramah lingkungan.',
        img: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Daya Sebar', value: '8 - 10 m²/kg' },
            { label: 'Hasil Akhir', value: 'Matt / Doff Halus' },
            { label: 'Pelarut', value: 'Air Bersih (10% - 20%)' }
        ],
        variants: [
            { name: '5 Kg - Putih Salju (1501)', price: 155000, priceNormal: 170000, hpp: 128000, unit: 'Galon', colorCode: '#F8F9FA', sku: 'DX-CAT-5K-1501', stock: 10, storeStock: 10, warehouseStock: 0, isActive: true },
            { name: '5 Kg - Barley White (44522)', price: 155000, priceNormal: 170000, hpp: 128000, unit: 'Galon', colorCode: '#FFF8DC', sku: 'DX-CAT-5K-44522', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true },
            { name: '5 Kg - Light Cream (44544)', price: 155000, priceNormal: 170000, hpp: 128000, unit: 'Galon', colorCode: '#FFFDD0', sku: 'DX-CAT-5K-44544', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true },
            { name: '25 Kg - Putih Salju (1501)', price: 710000, priceNormal: 760000, hpp: 615000, unit: 'Pail', colorCode: '#F8F9FA', sku: 'DX-CAT-25K-1501', stock: 3, storeStock: 3, warehouseStock: 0, isActive: true }
        ]
    },
    {
        id: 'preset-cat-avian-gloss',
        name: 'Cat Kayu & Besi Avian High Gloss Enamel',
        brand: 'Avian Brands',
        category: 'Cat & Pelapis',
        subCategory: 'Cat Minyak',
        unit: 'Kaleng',
        tag: 'Gloss',
        price: 72000,
        priceNormal: 78000,
        hpp: 59000,
        desc: 'Cat kayu dan besi berkilau tinggi tahan cuaca dan jamur. Cepat kering dan daya lekat sangat kuat untuk pagar besi, pintu kayu, kusen, dan perabotan.',
        img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Daya Sebar', value: '10 - 12 m²/liter' },
            { label: 'Pelarut', value: 'Thinner B / Thinner Enamel' }
        ],
        variants: [
            { name: '0.9 Liter - Super White (SW)', price: 72000, priceNormal: 78000, hpp: 59000, unit: 'Kaleng', colorCode: '#FFFFFF', sku: 'AV-09L-SW', stock: 12, storeStock: 12, warehouseStock: 0, isActive: true },
            { name: '0.9 Liter - Super Black (SB)', price: 72000, priceNormal: 78000, hpp: 59000, unit: 'Kaleng', colorCode: '#000000', sku: 'AV-09L-SB', stock: 12, storeStock: 12, warehouseStock: 0, isActive: true },
            { name: '0.9 Liter - Vermillion Red (VR)', price: 74000, priceNormal: 80000, hpp: 61000, unit: 'Kaleng', colorCode: '#DC2626', sku: 'AV-09L-VR', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true },
            { name: '0.9 Liter - Emerald Green (EG)', price: 74000, priceNormal: 80000, hpp: 61000, unit: 'Kaleng', colorCode: '#059669', sku: 'AV-09L-EG', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true },
            { name: '0.9 Liter - Royal Blue (RB)', price: 74000, priceNormal: 80000, hpp: 61000, unit: 'Kaleng', colorCode: '#2563EB', sku: 'AV-09L-RB', stock: 6, storeStock: 6, warehouseStock: 0, isActive: true }
        ]
    },

    // ─── KATEGORI 2: SEMEN & MORTAR INSTAN ──────────────────────────────────────
    {
        id: 'preset-semen-gresik',
        name: 'Semen Portland Composite Gresik (PCC)',
        brand: 'Semen Gresik',
        category: 'Semen & Mortar',
        subCategory: 'Semen Sak',
        unit: 'Sak',
        tag: 'SNI',
        price: 58000,
        priceNormal: 62000,
        hpp: 51000,
        desc: 'Semen PCC berkualitas SNI kuat tekan tinggi. Sangat cocok untuk struktur beton, pasangan bata, plesteran dinding, dan acian halus kedap air.',
        img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Standar Mutu', value: 'SNI 7064:2014' },
            { label: 'Waktu Ikat Awal', value: '120 - 180 Menit' }
        ],
        variants: [
            { name: '40 Kg (Sak Standar)', price: 58000, priceNormal: 62000, hpp: 51000, unit: 'Sak', sku: 'SG-PCC-40K', stock: 100, storeStock: 30, warehouseStock: 70, isActive: true },
            { name: '50 Kg (Sak Jumbo)', price: 71000, priceNormal: 75000, hpp: 63000, unit: 'Sak', sku: 'SG-PCC-50K', stock: 50, storeStock: 15, warehouseStock: 35, isActive: true }
        ]
    },
    {
        id: 'preset-semen-tigaroda',
        name: 'Semen Tiga Roda PCC',
        brand: 'Tiga Roda',
        category: 'Semen & Mortar',
        subCategory: 'Semen Sak',
        unit: 'Sak',
        tag: 'SNI',
        price: 59000,
        priceNormal: 63000,
        hpp: 52000,
        desc: 'Semen Portland Composite berkualitas tinggi dari Indocement. Daya rekat kuat, pengerjaan lebih mudah, dan hasil plesteran lebih halus serta minim retak.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Standar Mutu', value: 'SNI 7064:2014' },
            { label: 'Produsen', value: 'PT Indocement Tunggal Prakarsa' }
        ],
        variants: [
            { name: '40 Kg (Sak Standar)', price: 59000, priceNormal: 63000, hpp: 52000, unit: 'Sak', sku: 'TR-PCC-40K', stock: 80, storeStock: 25, warehouseStock: 55, isActive: true },
            { name: '50 Kg (Sak Jumbo)', price: 72000, priceNormal: 76000, hpp: 64000, unit: 'Sak', sku: 'TR-PCC-50K', stock: 40, storeStock: 10, warehouseStock: 30, isActive: true }
        ]
    },
    {
        id: 'preset-mortar-mu380',
        name: 'Semen Mortar MU-380 Perekat Bata Ringan',
        brand: 'Mortar Utama',
        category: 'Semen & Mortar',
        subCategory: 'Mortar Instan',
        unit: 'Sak',
        tag: 'ThinBed',
        price: 95000,
        priceNormal: 102000,
        hpp: 83000,
        desc: 'Semen instan siap pakai khusus perekat bata ringan (Autoclaved Aerated Concrete / AAC). Cukup ditambah air, memiliki daya rekat ekstra tinggi dengan ketebalan aplikasi tipis 3 mm.',
        img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Tebal Aplikasi', value: '3 mm' },
            { label: 'Kebutuhan Air', value: '9.0 - 9.5 Liter / Sak' },
            { label: 'Daya Sebar', value: '± 10 - 14 m² (bata tebal 7.5cm)' }
        ],
        variants: [
            { name: '40 Kg (Sak)', price: 95000, priceNormal: 102000, hpp: 83000, unit: 'Sak', sku: 'MU-380-40K', stock: 50, storeStock: 20, warehouseStock: 30, isActive: true }
        ]
    },
    {
        id: 'preset-mortar-mu200',
        name: 'Semen Mortar MU-200 Acian Plester & Beton',
        brand: 'Mortar Utama',
        category: 'Semen & Mortar',
        subCategory: 'Mortar Instan',
        unit: 'Sak',
        tag: 'Acian',
        price: 98000,
        priceNormal: 105000,
        hpp: 86000,
        desc: 'Semen instan acian halus siap pakai untuk plesteran dinding dan permukaan beton interior maupun eksterior. Anti retak rambut dan permukaan siap dicat setelah 7 hari.',
        img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Tebal Aplikasi', value: '1.5 - 3.0 mm' },
            { label: 'Kebutuhan Air', value: '13.0 - 14.0 Liter / Sak' }
        ],
        variants: [
            { name: '40 Kg (Sak)', price: 98000, priceNormal: 105000, hpp: 86000, unit: 'Sak', sku: 'MU-200-40K', stock: 40, storeStock: 15, warehouseStock: 25, isActive: true }
        ]
    },
    {
        id: 'preset-semen-am53',
        name: 'Semen Nat Keramik AM 53 Pengisi Nat Ubin',
        brand: 'AM',
        category: 'Semen & Mortar',
        subCategory: 'Semen Nat',
        unit: 'Bungkus',
        tag: 'Tile Grout',
        price: 18000,
        priceNormal: 20000,
        hpp: 14000,
        desc: 'Pengisi nat keramik, granit, dan mosaik dengan formula polimer anti jamur dan anti retak. Warna tahan pudar dan kedap air.',
        img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Lebar Nat', value: '1 - 3 mm' },
            { label: 'Daya Sebar', value: '6 - 8 m² (ubin 30x30 cm)' }
        ],
        variants: [
            { name: '1 Kg - White Crystal', price: 18000, priceNormal: 20000, hpp: 14000, unit: 'Bks', colorCode: '#FFFFFF', sku: 'AM-53-WHITE', stock: 20, storeStock: 20, warehouseStock: 0, isActive: true },
            { name: '1 Kg - Grey Basalt', price: 18000, priceNormal: 20000, hpp: 14000, unit: 'Bks', colorCode: '#6B7280', sku: 'AM-53-GREY', stock: 20, storeStock: 20, warehouseStock: 0, isActive: true },
            { name: '1 Kg - Cream Ivory', price: 18000, priceNormal: 20000, hpp: 14000, unit: 'Bks', colorCode: '#FEF3C7', sku: 'AM-53-CREAM', stock: 15, storeStock: 15, warehouseStock: 0, isActive: true },
            { name: '1 Kg - Black Onyx', price: 18000, priceNormal: 20000, hpp: 14000, unit: 'Bks', colorCode: '#1F2937', sku: 'AM-53-BLACK', stock: 10, storeStock: 10, warehouseStock: 0, isActive: true }
        ]
    },

    // ─── KATEGORI 3: PIPA PVC & SAMBUNGAN ───────────────────────────────────────
    {
        id: 'preset-pipa-rucika-aw',
        name: 'Pipa PVC Rucika Standar JIS Tipe AW (Tekanan Tinggi)',
        brand: 'Rucika',
        category: 'Pipa & Sambungan',
        subCategory: 'Pipa Air Bersih',
        unit: 'Batang',
        tag: 'JIS AW',
        price: 38000,
        priceNormal: 42000,
        hpp: 31000,
        desc: 'Pipa PVC standar Jepang JIS K-6741 tebal dan kuat untuk instalasi air bersih bertekanan kerja hingga 10 bar. Bebas timbal, higienis, dan tidak mudah pecah.',
        img: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Panjang Batang', value: '4.0 Meter' },
            { label: 'Ketahanan Tekanan', value: '10 kg/cm² (AW Class)' },
            { label: 'Bahan Baku', value: 'Unplasticized Polyvinyl Chloride (uPVC)' }
        ],
        variants: [
            { name: '1/2 Inch AW (4 Meter)', price: 38000, priceNormal: 42000, hpp: 31000, unit: 'Batang', sku: 'RCK-AW-050', stock: 60, storeStock: 20, warehouseStock: 40, isActive: true },
            { name: '3/4 Inch AW (4 Meter)', price: 52000, priceNormal: 58000, hpp: 43000, unit: 'Batang', sku: 'RCK-AW-075', stock: 60, storeStock: 20, warehouseStock: 40, isActive: true },
            { name: '1 Inch AW (4 Meter)', price: 76000, priceNormal: 84000, hpp: 63000, unit: 'Batang', sku: 'RCK-AW-100', stock: 40, storeStock: 15, warehouseStock: 25, isActive: true },
            { name: '1 1/4 Inch AW (4 Meter)', price: 110000, priceNormal: 120000, hpp: 92000, unit: 'Batang', sku: 'RCK-AW-125', stock: 20, storeStock: 10, warehouseStock: 10, isActive: true },
            { name: '1 1/2 Inch AW (4 Meter)', price: 135000, priceNormal: 148000, hpp: 112000, unit: 'Batang', sku: 'RCK-AW-150', stock: 20, storeStock: 10, warehouseStock: 10, isActive: true },
            { name: '2 Inch AW (4 Meter)', price: 185000, priceNormal: 200000, hpp: 154000, unit: 'Batang', sku: 'RCK-AW-200', stock: 20, storeStock: 8, warehouseStock: 12, isActive: true },
            { name: '3 Inch AW (4 Meter)', price: 340000, priceNormal: 370000, hpp: 285000, unit: 'Batang', sku: 'RCK-AW-300', stock: 10, storeStock: 4, warehouseStock: 6, isActive: true },
            { name: '4 Inch AW (4 Meter)', price: 530000, priceNormal: 575000, hpp: 445000, unit: 'Batang', sku: 'RCK-AW-400', stock: 10, storeStock: 4, warehouseStock: 6, isActive: true }
        ]
    },
    {
        id: 'preset-pipa-rucika-d',
        name: 'Pipa PVC Rucika Standar JIS Tipe D (Saluran Buang)',
        brand: 'Rucika',
        category: 'Pipa & Sambungan',
        subCategory: 'Pipa Saluran Pembuangan',
        unit: 'Batang',
        tag: 'JIS D',
        price: 85000,
        priceNormal: 92000,
        hpp: 71000,
        desc: 'Pipa PVC saluran pembuangan air kotor, limbah rumah tangga, dan talang hujan. Ringan, tahan bahan kimia rumah tangga, dan dinding dalam sangat licin mencegah endapan kotoran.',
        img: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Panjang Batang', value: '4.0 Meter' },
            { label: 'Ketahanan Tekanan', value: '5 kg/cm² (D Class)' }
        ],
        variants: [
            { name: '1 1/4 Inch D (4 Meter)', price: 62000, priceNormal: 68000, hpp: 52000, unit: 'Batang', sku: 'RCK-D-125', stock: 25, storeStock: 10, warehouseStock: 15, isActive: true },
            { name: '1 1/2 Inch D (4 Meter)', price: 74000, priceNormal: 80000, hpp: 62000, unit: 'Batang', sku: 'RCK-D-150', stock: 25, storeStock: 10, warehouseStock: 15, isActive: true },
            { name: '2 Inch D (4 Meter)', price: 95000, priceNormal: 104000, hpp: 80000, unit: 'Batang', sku: 'RCK-D-200', stock: 30, storeStock: 10, warehouseStock: 20, isActive: true },
            { name: '3 Inch D (4 Meter)', price: 165000, priceNormal: 180000, hpp: 138000, unit: 'Batang', sku: 'RCK-D-300', stock: 20, storeStock: 8, warehouseStock: 12, isActive: true },
            { name: '4 Inch D (4 Meter)', price: 260000, priceNormal: 285000, hpp: 218000, unit: 'Batang', sku: 'RCK-D-400', stock: 20, storeStock: 8, warehouseStock: 12, isActive: true }
        ]
    },
    {
        id: 'preset-knee-rucika-aw',
        name: 'Knee / Elbow PVC 90 Derajat Rucika AW',
        brand: 'Rucika',
        category: 'Pipa & Sambungan',
        subCategory: 'Sambungan Pipa',
        unit: 'Pcs',
        tag: 'Fitting AW',
        price: 4500,
        priceNormal: 5000,
        hpp: 3300,
        desc: 'Sambungan siku pipa PVC belokan 90 derajat tipe AW tebal standar JIS. Sambungan rapat anti bocor.',
        img: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Ukuran 1/2 Inch AW', price: 4500, priceNormal: 5000, hpp: 3300, unit: 'Pcs', sku: 'RCK-KNEE-050', stock: 150, storeStock: 50, warehouseStock: 100, isActive: true },
            { name: 'Ukuran 3/4 Inch AW', price: 6000, priceNormal: 7000, hpp: 4500, unit: 'Pcs', sku: 'RCK-KNEE-075', stock: 120, storeStock: 40, warehouseStock: 80, isActive: true },
            { name: 'Ukuran 1 Inch AW', price: 9500, priceNormal: 11000, hpp: 7200, unit: 'Pcs', sku: 'RCK-KNEE-100', stock: 80, storeStock: 30, warehouseStock: 50, isActive: true }
        ]
    },
    {
        id: 'preset-lem-pipa-isarplas',
        name: 'Lem Pipa PVC Isarplas / TruGlue',
        brand: 'Isarplas',
        category: 'Pipa & Sambungan',
        subCategory: 'Perekat Pipa',
        unit: 'Pcs',
        tag: 'Lem PVC',
        price: 8500,
        priceNormal: 10000,
        hpp: 6500,
        desc: 'Lem perekat khusus pipa dan sambungan PVC dengan senyawa kimia pelarut yang menyatukan dinding pipa secara homogen.',
        img: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Tube 45 Gram (Kecil)', price: 8500, priceNormal: 10000, hpp: 6500, unit: 'Tube', sku: 'LEM-ISR-45G', stock: 60, storeStock: 30, warehouseStock: 30, isActive: true },
            { name: 'Kaleng 400 Gram (Besar)', price: 46000, priceNormal: 50000, hpp: 37000, unit: 'Kaleng', sku: 'LEM-ISR-400G', stock: 20, storeStock: 10, warehouseStock: 10, isActive: true }
        ]
    },

    // ─── KATEGORI 4: BESI, BAJA RINGAN & KAWAT ──────────────────────────────────
    {
        id: 'preset-besi-beton-polos',
        name: 'Besi Beton Polos SNI (Panjang 12 Meter)',
        brand: 'Standar SNI',
        category: 'Besi & Baja',
        subCategory: 'Besi Konstruksi',
        unit: 'Batang',
        tag: 'SNI 12m',
        price: 52000,
        priceNormal: 56000,
        hpp: 46000,
        desc: 'Besi beton tulangan polos standar industri Indonesia (SNI) panjang utuh 12 meter. Digunakan untuk begel kolom, sloof, balok lantai, dan pondasi bangunan.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Panjang Standar', value: '12.0 Meter' },
            { label: 'Toleransi Mutu', value: 'SNI BJTP 280' }
        ],
        variants: [
            { name: 'Besi 6 mm Polos SNI (12m)', price: 32000, priceNormal: 35000, hpp: 28000, unit: 'Batang', sku: 'BESI-POL-06', stock: 100, storeStock: 40, warehouseStock: 60, isActive: true },
            { name: 'Besi 8 mm Polos SNI (12m)', price: 54000, priceNormal: 58000, hpp: 47500, unit: 'Batang', sku: 'BESI-POL-08', stock: 120, storeStock: 40, warehouseStock: 80, isActive: true },
            { name: 'Besi 10 mm Polos SNI (12m)', price: 84000, priceNormal: 90000, hpp: 74000, unit: 'Batang', sku: 'BESI-POL-10', stock: 100, storeStock: 30, warehouseStock: 70, isActive: true },
            { name: 'Besi 12 mm Polos SNI (12m)', price: 122000, priceNormal: 130000, hpp: 107000, unit: 'Batang', sku: 'BESI-POL-12', stock: 60, storeStock: 20, warehouseStock: 40, isActive: true }
        ]
    },
    {
        id: 'preset-baja-ringan-canal',
        name: 'Baja Ringan Canal C-75 Galvalum SNI',
        brand: 'Kencana / TASO',
        category: 'Besi & Baja',
        subCategory: 'Rangka Atap',
        unit: 'Batang',
        tag: 'Galvalum',
        price: 88000,
        priceNormal: 95000,
        hpp: 77000,
        desc: 'Truss profil C75 baja ringan mutu tinggi G-550 lapisan zinc-aluminium anti karat dan tahan rayap. Pilihan utama rangka atap genteng, asbes, dan kanopi.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Panjang Batang', value: '6.0 Meter' },
            { label: 'Lebar Profil', value: '75 mm' },
            { label: 'Kekuatan Bahan', value: 'Hi-Ten G550 (5500 kg/cm²)' }
        ],
        variants: [
            { name: 'C-75 x 0.75 mm (6 Meter)', price: 88000, priceNormal: 95000, hpp: 77000, unit: 'Batang', sku: 'BJ-C75-075', stock: 80, storeStock: 25, warehouseStock: 55, isActive: true },
            { name: 'C-75 x 0.70 mm (6 Meter)', price: 79000, priceNormal: 86000, hpp: 69000, unit: 'Batang', sku: 'BJ-C75-070', stock: 80, storeStock: 25, warehouseStock: 55, isActive: true },
            { name: 'C-75 x 0.65 mm (6 Meter)', price: 72000, priceNormal: 78000, hpp: 62000, unit: 'Batang', sku: 'BJ-C75-065', stock: 60, storeStock: 20, warehouseStock: 40, isActive: true }
        ]
    },
    {
        id: 'preset-kawat-bendrat',
        name: 'Kawat Bendrat / Kawat Ikat Tulangan Beton',
        brand: 'Standar SNI',
        category: 'Besi & Baja',
        subCategory: 'Kawat Bangunan',
        unit: 'Kg',
        tag: 'Kawat Ikat',
        price: 24000,
        priceNormal: 26000,
        hpp: 19500,
        desc: 'Kawat bendrat lunak elastis anti putus untuk mengikat tulangan besi beton sloof, kolom, dan cakar ayam.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Kuantitas 1 Kg (Eceran)', price: 24000, priceNormal: 26000, hpp: 19500, unit: 'Kg', sku: 'BND-01K', stock: 80, storeStock: 30, warehouseStock: 50, isActive: true },
            { name: 'Rol Utuh 20 Kg (Per Rol)', price: 440000, priceNormal: 470000, hpp: 375000, unit: 'Rol', sku: 'BND-20K', stock: 15, storeStock: 5, warehouseStock: 10, isActive: true }
        ]
    },

    // ─── KATEGORI 5: ALAT TEKNIK & PERKAKAS ──────────────────────────────────────
    {
        id: 'preset-mesin-gerinda-makita',
        name: 'Mesin Gerinda Tangan 4 Inch Maktec MT90 / Makita',
        brand: 'Makita',
        category: 'Alat Teknik',
        subCategory: 'Power Tools',
        unit: 'Unit',
        tag: 'Garansi Resmi',
        price: 365000,
        priceNormal: 395000,
        hpp: 310000,
        desc: 'Mesin gerinda listrik 4 inci handal bertenaga 540 Watt dengan putaran 12.000 RPM. Motor tahan panas dengan carbon brush awet untuk memotong besi, keramik, dan menghaluskan permukaan.',
        img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Daya Listrik', value: '540 Watt' },
            { label: 'Ukuran Batu', value: '100 mm (4 Inch)' },
            { label: 'Kecepatan Tanpa Beban', value: '12.000 RPM' },
            { label: 'Garansi', value: 'Resmi Makita 2 Tahun' }
        ],
        variants: [
            { name: 'Unit Standar Box (Mesin + Kunci + Pelindung)', price: 365000, priceNormal: 395000, hpp: 310000, unit: 'Unit', sku: 'MKT-MT90-STD', stock: 12, storeStock: 4, warehouseStock: 8, isActive: true }
        ]
    },
    {
        id: 'preset-mesin-bor-bosch',
        name: 'Mesin Bor Tembok Listrik 13mm Impact Drill Bosch GSB 550',
        brand: 'Bosch',
        category: 'Alat Teknik',
        subCategory: 'Power Tools',
        unit: 'Unit',
        tag: 'Impact Drill',
        price: 545000,
        priceNormal: 590000,
        hpp: 465000,
        desc: 'Mesin bor listrik impact multifungsi 550 Watt dengan mode putar dan tumbukan beton. Sanggup melubangi dinding bata/beton hingga 13mm, kayu 25mm, dan besi 10mm.',
        img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
        specTable: [
            { label: 'Daya Input', value: '550 Watt' },
            { label: 'Kapasitas Chuck', value: '1.5 - 13 mm' },
            { label: 'Fitur', value: 'Variable Speed & Reversible (Bolak-Balik)' }
        ],
        variants: [
            { name: 'Unit Standar Box', price: 545000, priceNormal: 590000, hpp: 465000, unit: 'Unit', sku: 'BSH-GSB550-BOX', stock: 8, storeStock: 3, warehouseStock: 5, isActive: true }
        ]
    },
    {
        id: 'preset-meteran-tekiro',
        name: 'Meteran Baja Roll Tancap / Auto Lock Tekiro',
        brand: 'Tekiro',
        category: 'Alat Teknik',
        subCategory: 'Alat Ukur',
        unit: 'Pcs',
        tag: 'Presisi',
        price: 28000,
        priceNormal: 32000,
        hpp: 21500,
        desc: 'Meteran gulung pita baja tebal berlapis nilon anti karat dengan bodi berlapis karet ergonomis tahan jatuh dan mekanisme auto lock presisi.',
        img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Panjang 3 Meter', price: 28000, priceNormal: 32000, hpp: 21500, unit: 'Pcs', sku: 'TKR-MET-3M', stock: 24, storeStock: 10, warehouseStock: 14, isActive: true },
            { name: 'Panjang 5 Meter', price: 42000, priceNormal: 48000, hpp: 32000, unit: 'Pcs', sku: 'TKR-MET-5M', stock: 30, storeStock: 12, warehouseStock: 18, isActive: true },
            { name: 'Panjang 7.5 Meter', price: 62000, priceNormal: 68000, hpp: 48000, unit: 'Pcs', sku: 'TKR-MET-75M', stock: 16, storeStock: 6, warehouseStock: 10, isActive: true }
        ]
    },
    {
        id: 'preset-kuas-eterna',
        name: 'Kuas Cat Tembok & Minyak Bulu Tebal Eterna',
        brand: 'Eterna',
        category: 'Alat Teknik',
        subCategory: 'Perkakas Cat',
        unit: 'Pcs',
        tag: 'Bulu Tebal',
        price: 6000,
        priceNormal: 7000,
        hpp: 4200,
        desc: 'Kuas cat bulu putih tebal premium dengan pegangan kayu halus kokoh. Bulu tidak mudah rontok menghasilkan sapuan cat halus rata.',
        img: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Kuas 1.5 Inch', price: 6000, priceNormal: 7000, hpp: 4200, unit: 'Pcs', sku: 'ETR-KUAS-15', stock: 50, storeStock: 25, warehouseStock: 25, isActive: true },
            { name: 'Kuas 2 Inch', price: 8500, priceNormal: 10000, hpp: 6200, unit: 'Pcs', sku: 'ETR-KUAS-20', stock: 50, storeStock: 25, warehouseStock: 25, isActive: true },
            { name: 'Kuas 2.5 Inch', price: 11000, priceNormal: 13000, hpp: 8200, unit: 'Pcs', sku: 'ETR-KUAS-25', stock: 40, storeStock: 20, warehouseStock: 20, isActive: true },
            { name: 'Kuas 3 Inch', price: 14000, priceNormal: 16000, hpp: 10500, unit: 'Pcs', sku: 'ETR-KUAS-30', stock: 40, storeStock: 20, warehouseStock: 20, isActive: true },
            { name: 'Kuas 4 Inch', price: 19000, priceNormal: 22000, hpp: 14500, unit: 'Pcs', sku: 'ETR-KUAS-40', stock: 30, storeStock: 15, warehouseStock: 15, isActive: true }
        ]
    },

    // ─── KATEGORI 6: BAUT, SEKRUP & PAKU ────────────────────────────────────────
    {
        id: 'preset-baut-roofing-sds',
        name: 'Baut Baja Ringan Roofing SDS (Self Drilling Screw)',
        brand: 'Moon Lion',
        category: 'Baut & Sekrup',
        subCategory: 'Sekrup Baja Ringan',
        unit: 'Bungkus',
        tag: 'Anti Karat',
        price: 32000,
        priceNormal: 36000,
        hpp: 24000,
        desc: 'Baut ulir tajam dengan mata bor self-drilling ujung runcing. Langsung menembus seng gelombang, spandek, dan canal baja ringan tanpa perlu dibor terlebih dahulu.',
        img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: '10 x 19 mm Truss Reng (Isi 100 Pcs)', price: 32000, priceNormal: 36000, hpp: 24000, unit: 'Bks', sku: 'SDS-1019-100', stock: 50, storeStock: 20, warehouseStock: 30, isActive: true },
            { name: '12 x 50 mm / 5 cm Karet (Isi 50 Pcs)', price: 42000, priceNormal: 48000, hpp: 32000, unit: 'Bks', sku: 'SDS-1250-50', stock: 40, storeStock: 15, warehouseStock: 25, isActive: true },
            { name: '12 x 70 mm / 7 cm Karet (Isi 50 Pcs)', price: 54000, priceNormal: 60000, hpp: 41000, unit: 'Bks', sku: 'SDS-1270-50', stock: 30, storeStock: 10, warehouseStock: 20, isActive: true }
        ]
    },
    {
        id: 'preset-paku-kayu-sni',
        name: 'Paku Kayu Konstruksi SNI',
        brand: 'Standar SNI',
        category: 'Baut & Sekrup',
        subCategory: 'Paku Besi',
        unit: 'Kg',
        tag: 'SNI',
        price: 22000,
        priceNormal: 24000,
        hpp: 18000,
        desc: 'Paku besi tempa baja padat lurus dengan kepala pipih rapi. Batang kokoh tidak mudah bengkok untuk bekisting, kaso, reng kayu, dan balok.',
        img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Paku 5 cm / 2 Inch (1 Kg)', price: 22000, priceNormal: 24000, hpp: 18000, unit: 'Kg', sku: 'PAKU-05-1K', stock: 50, storeStock: 20, warehouseStock: 30, isActive: true },
            { name: 'Paku 7 cm / 3 Inch (1 Kg)', price: 22000, priceNormal: 24000, hpp: 18000, unit: 'Kg', sku: 'PAKU-07-1K', stock: 50, storeStock: 20, warehouseStock: 30, isActive: true },
            { name: 'Paku 10 cm / 4 Inch (1 Kg)', price: 22000, priceNormal: 24000, hpp: 18000, unit: 'Kg', sku: 'PAKU-10-1K', stock: 40, storeStock: 15, warehouseStock: 25, isActive: true }
        ]
    },

    // ─── KATEGORI 7: SANITARI & KRAN ───────────────────────────────────────────
    {
        id: 'preset-kran-onda-sus304',
        name: 'Kran Air Tembok Stainless SUS 304 Onda',
        brand: 'Onda',
        category: 'Sanitari',
        subCategory: 'Kran Air',
        unit: 'Pcs',
        tag: 'Stainless 304',
        price: 48000,
        priceNormal: 55000,
        hpp: 38000,
        desc: 'Kran air tembok kamar mandi / taman bahan stainless steel SUS 304 murni anti karat dan anti patah. Jantung kran keramik presisi buka tutup hingga 100.000 kali putaran.',
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: '1/2 Inch Model Baling', price: 48000, priceNormal: 55000, hpp: 38000, unit: 'Pcs', sku: 'ONDA-KRN-BAL-05', stock: 25, storeStock: 10, warehouseStock: 15, isActive: true },
            { name: '1/2 Inch Model Engkol', price: 52000, priceNormal: 60000, hpp: 41000, unit: 'Pcs', sku: 'ONDA-KRN-ENG-05', stock: 25, storeStock: 10, warehouseStock: 15, isActive: true }
        ]
    },
    {
        id: 'preset-sealtape-onda',
        name: 'Seal Tape / Selotip Pipa Onda 1/2 Inch',
        brand: 'Onda',
        category: 'Sanitari',
        subCategory: 'Aksesoris Pipa',
        unit: 'Pcs',
        tag: 'Anti Bocor',
        price: 4500,
        priceNormal: 5500,
        hpp: 3200,
        desc: 'Isolasi pipa PTFE densitas tinggi untuk melapis ulir drat kran air dan sambungan fitting besi/PVC agar kedap air 100% tanpa bocor.',
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Eceran Per Pcs (10 Meter)', price: 4500, priceNormal: 5500, hpp: 3200, unit: 'Pcs', sku: 'ONDA-ST-1PC', stock: 100, storeStock: 40, warehouseStock: 60, isActive: true },
            { name: 'Box Pack (Isi 10 Pcs)', price: 42000, priceNormal: 50000, hpp: 30000, unit: 'Box', sku: 'ONDA-ST-10PC', stock: 20, storeStock: 8, warehouseStock: 12, isActive: true }
        ]
    },

    // ─── KATEGORI 8: KELISTRIKAN ───────────────────────────────────────────────
    {
        id: 'preset-kabel-nym-supreme',
        name: 'Kabel Listrik NYM Tembaga Murni SNI Supreme',
        brand: 'Supreme',
        category: 'Kelistrikan',
        subCategory: 'Kabel Instalasi',
        unit: 'Meter',
        tag: 'SNI Tembaga',
        price: 14000,
        priceNormal: 16000,
        hpp: 11500,
        desc: 'Kabel instalasi listrik rumah tangga berinti kawat tembaga pejal isolasi PVC ganda (putih). Standar PLN / LMK aman dari korsleting dan panas tinggi.',
        img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: '2 x 1.5 mm (Ecer Meteran)', price: 14000, priceNormal: 16000, hpp: 11500, unit: 'Meter', sku: 'KBL-NYM-215-M', stock: 150, storeStock: 50, warehouseStock: 100, isActive: true },
            { name: '2 x 1.5 mm (Roll Utuh 50m)', price: 650000, priceNormal: 700000, hpp: 550000, unit: 'Roll', sku: 'KBL-NYM-215-50M', stock: 8, storeStock: 3, warehouseStock: 5, isActive: true },
            { name: '2 x 2.5 mm (Ecer Meteran)', price: 21000, priceNormal: 24000, hpp: 17500, unit: 'Meter', sku: 'KBL-NYM-225-M', stock: 100, storeStock: 40, warehouseStock: 60, isActive: true },
            { name: '2 x 2.5 mm (Roll Utuh 50m)', price: 980000, priceNormal: 1050000, hpp: 840000, unit: 'Roll', sku: 'KBL-NYM-225-50M', stock: 6, storeStock: 2, warehouseStock: 4, isActive: true }
        ]
    },
    {
        id: 'preset-saklar-broco-gracio',
        name: 'Saklar & Stop Kontak Tanam Broco Gracio',
        brand: 'Broco',
        category: 'Kelistrikan',
        subCategory: 'Saklar & Stop Kontak',
        unit: 'Pcs',
        tag: 'SNI Broco',
        price: 24000,
        priceNormal: 28000,
        hpp: 19000,
        desc: 'Saklar dan colokan listrik tanam dinding tipe Gracio warna krem klasik. Kontak kuningan asli tebal dengan bodi tahan api (flame retardant).',
        img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80',
        variants: [
            { name: 'Stop Kontak Arde Tanam', price: 24000, priceNormal: 28000, hpp: 19000, unit: 'Pcs', sku: 'BRC-GRA-SK-ARDE', stock: 40, storeStock: 20, warehouseStock: 20, isActive: true },
            { name: 'Saklar Engkel (Tunggal)', price: 22000, priceNormal: 26000, hpp: 17500, unit: 'Pcs', sku: 'BRC-GRA-SW-ENG', stock: 40, storeStock: 20, warehouseStock: 20, isActive: true },
            { name: 'Saklar Seri (Ganda / Dobel)', price: 28000, priceNormal: 32000, hpp: 22000, unit: 'Pcs', sku: 'BRC-GRA-SW-SERI', stock: 30, storeStock: 15, warehouseStock: 15, isActive: true }
        ]
    }
];

/**
 * Gabungkan preset bawaan sistem dengan custom master preset yang disimpan user
 * (Menyaring preset yang telah dihapus oleh pengguna agar katalog mudah dikelola)
 */
export const getAllMasterPresets = () => {
    const deletedIds = new Set(appData.deleted_master_preset_ids || []);
    const custom = (appData.custom_master_presets || []).filter(p => !deletedIds.has(p.id));
    const builtin = BUILTIN_MASTER_PRESETS.filter(p => !deletedIds.has(p.id));
    return [...builtin, ...custom];
};

/**
 * Periksa apakah suatu preset sudah ada di katalog produk lokal toko
 */
export const checkPresetStoreStatus = (preset) => {
    const prods = appData.products || [];
    const pName = (preset.name || '').trim().toLowerCase();
    const existing = prods.find(p => (p.name || '').trim().toLowerCase() === pName);
    return {
        isImported: !!existing,
        storeProduct: existing || null
    };
};

/**
 * Render Tampilan Utama Pustaka Database Bersama (Bento Grid)
 */
export const renderMasterCatalogView = () => {
    setCTab('colors');
    window.cTab = 'colors';

    const allPresets = getAllMasterPresets();
    const storeProducts = appData.products || [];
    
    // Hitung statistik ringkasan
    let importedCount = 0;
    allPresets.forEach(p => {
        if (checkPresetStoreStatus(p).isImported) importedCount++;
    });
    const readyToImportCount = allPresets.length - importedCount;
    const deletedCount = (appData.deleted_master_preset_ids || []).length;
    const categories = ['ALL', ...new Set(allPresets.map(p => p.category).filter(Boolean))];

    // Filter data sesuai kategori aktif dan kata kunci pencarian
    const q = (masterSearchQuery || '').trim().toLowerCase();
    const filteredPresets = allPresets.filter(p => {
        const matchesCat = activeMasterCategory === 'ALL' || p.category === activeMasterCategory;
        if (!matchesCat) return false;
        if (!q) return true;
        const inName = (p.name || '').toLowerCase().includes(q);
        const inBrand = (p.brand || '').toLowerCase().includes(q);
        const inCat = (p.category || '').toLowerCase().includes(q);
        const inVars = (p.variants || []).some(v => (v.name || '').toLowerCase().includes(q) || (v.sku || '').toLowerCase().includes(q));
        return inName || inBrand || inCat || inVars;
    });

    const isColorsTab = activeSubTab === 'colors';

    const html = `
        <div class="max-w-6xl mx-auto pb-20 px-1 sm:px-2">
            <!-- HEADER TAMPILAN CMS & NAVIGASI DUA TAB -->
            <div class="mb-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest primary-bg-soft text-[var(--color-primary)] border primary-border">
                                <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Pustaka Induk Bersama
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                                <i class="fa-solid fa-users mr-1"></i> Siap Pakai Klien
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i>
                            Database Produk Bersama
                        </h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                            Pustaka master produk, multi-varian, dan katalog warna siap salin ke toko Anda. Klien baru dapat langsung mengimpor produk lengkap dengan 1-klik tanpa perlu mengetik dari awal!
                        </p>
                    </div>

                    <!-- SUB-TAB SWITCHER (BENTO PILL) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/80 w-full md:w-auto shrink-0 shadow-inner gap-1">
                        <button type="button" onclick="window.switchMasterCatalogSubTab('master')" class="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${!isColorsTab ? 'bg-white dark:bg-slate-700 text-[var(--color-primary)] shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'}">
                            <i class="fa-solid fa-boxes-stacked text-sm"></i>
                            <span>Master Produk &amp; Varian (${allPresets.length})</span>
                        </button>
                        <button type="button" onclick="window.switchMasterCatalogSubTab('colors')" class="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${isColorsTab ? 'bg-white dark:bg-slate-700 text-[var(--color-primary)] shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'}">
                            <i class="fa-solid fa-swatchbook text-sm"></i>
                            <span>Swatch Warna Cat (${(appData.colors || []).length})</span>
                        </button>
                    </div>
                </div>

                ${!isColorsTab ? `
                <!-- BENTO STATS ISLAND -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pustaka Master</span>
                            <div class="w-8 h-8 rounded-xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xs"><i class="fa-solid fa-database"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">${allPresets.length} <span class="text-xs font-semibold text-slate-400">Template</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Lengkap spesifikasi &amp; varian</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Kategori Material</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs"><i class="fa-solid fa-layer-group"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">${categories.length - 1} <span class="text-xs font-semibold text-slate-400">Sektor</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Cat, Semen, Pipa, Besi, dll</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sudah di Toko Anda</span>
                            <div class="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs"><i class="fa-solid fa-circle-check"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">${importedCount} <span class="text-xs font-semibold text-slate-400">Produk</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">Aktif di etalase &amp; Kasir POS</p>
                    </div>

                    <div class="bento-island-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs ${readyToImportCount > 0 ? 'cursor-pointer hover:border-[var(--color-primary)] transition-all group/impcard' : ''}" ${readyToImportCount > 0 ? 'onclick="window.confirmImportAllMasterPresets()" title="Klik untuk menyalin semua template yang tersedia ke toko Anda"' : ''}>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tersedia utk Diimpor</span>
                            <div class="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs group-hover/impcard:scale-110 transition-transform"><i class="fa-solid fa-cloud-arrow-down"></i></div>
                        </div>
                        <div class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">${readyToImportCount} <span class="text-xs font-semibold text-slate-400">Produk</span></div>
                        <p class="text-[10px] text-slate-400 mt-1">${readyToImportCount > 0 ? '<span class="text-[var(--color-primary)] font-bold">⚡ Salin semua sekaligus &rarr;</span>' : 'Semua template sudah ada di toko'}</p>
                    </div>
                </div>

                <!-- PENCARIAN & CHICLET FILTER KATEGORI -->
                <div class="space-y-3 mb-6">
                    <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <div class="relative flex-1">
                            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                            <input autocomplete="off" id="master-search-input" value="${esc(masterSearchQuery)}" placeholder="Cari produk master, merek, varian, pipa, semen, cat..." oninput="window.handleMasterSearch(this.value)" class="w-full h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-11 text-[16px] sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all">
                            <button type="button" id="master-search-clear-btn" onclick="window.clearMasterSearch()" class="${masterSearchQuery ? '' : 'hidden'} absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-xl transition-all cursor-pointer active:scale-90"><i class="fa-solid fa-circle-xmark text-sm"></i></button>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            ${readyToImportCount > 0 ? `
                                <button type="button" onclick="window.confirmImportAllMasterPresets()" class="h-12 min-h-[44px] px-4 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0" title="Salin semua ${readyToImportCount} template master sekaligus ke etalase & kasir toko">
                                    <i class="fa-solid fa-cloud-arrow-down text-white"></i>
                                    <span>Salin Semua ke Toko (${readyToImportCount})</span>
                                </button>
                            ` : ''}
                            ${deletedCount > 0 ? `
                                <button type="button" onclick="window.restoreDeletedMasterPresets()" class="h-12 min-h-[44px] px-3.5 sm:px-4 rounded-2xl border border-amber-300 dark:border-amber-700/80 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0" title="Pulihkan semua template master bawaan yang pernah dihapus">
                                    <i class="fa-solid fa-clock-rotate-left text-amber-600 dark:text-amber-400"></i>
                                    <span>Pulihkan Template (${deletedCount})</span>
                                </button>
                            ` : ''}
                            <button type="button" onclick="window.openExportStoreProductPicker()" class="h-12 min-h-[44px] px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0">
                                <i class="fa-solid fa-cloud-arrow-up text-[var(--color-primary)]"></i>
                                <span>Simpan Produk Toko ke Pustaka</span>
                            </button>
                        </div>
                    </div>

                    <!-- CHICLET KATEGORI -->
                    <div class="flex items-center gap-2 overflow-x-auto pb-1.5 custom-scrollbar text-xs -mx-1 px-1">
                        ${categories.map(cat => {
                            const isAct = activeMasterCategory === cat;
                            const count = cat === 'ALL' ? allPresets.length : allPresets.filter(p => p.category === cat).length;
                            return `
                                <button type="button" onclick="window.setMasterFilterCategory('${esc(cat)}')" class="shrink-0 min-h-[40px] px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all active:scale-95 cursor-pointer ${isAct ? 'primary-bg text-white shadow-xs' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]/50'}">
                                    ${cat === 'ALL' ? 'Semua Kategori' : esc(cat)} (${count})
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- DAFTAR KARTU BENTO MASTER PRODUK -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="master-products-grid">
                    ${filteredPresets.length === 0 ? `
                        <div class="col-span-full py-16 text-center bento-island-card rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div class="w-16 h-16 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-2xl mx-auto mb-3">
                                <i class="fa-solid fa-box-open"></i>
                            </div>
                            <h4 class="font-black text-base text-slate-800 dark:text-white">Tidak Ada Produk yang Cocok</h4>
                            <p class="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori lain.</p>
                            <button type="button" onclick="window.clearMasterSearch()" class="mt-4 px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs min-h-[40px] cursor-pointer active:scale-95">Reset Pencarian</button>
                        </div>
                    ` : filteredPresets.map(preset => {
                        const { isImported, storeProduct } = checkPresetStoreStatus(preset);
                        const variants = preset.variants || [];
                        const colorVariants = variants.filter(v => v.colorCode);
                        const hasColors = colorVariants.length > 0;

                        return `
                            <div class="bento-island-card flex flex-col justify-between p-4 sm:p-5 rounded-[1.75rem] bg-white dark:bg-slate-800/95 border ${isImported ? 'border-emerald-500/40 dark:border-emerald-500/30' : 'border-slate-200 dark:border-slate-700'} shadow-xs hover:shadow-md transition-all group">
                                <div>
                                    <!-- BADGES ATAS (Kategori + Merek + Status Toko) -->
                                    <div class="flex items-center justify-between gap-2 mb-3">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                                ${esc(preset.category)}
                                            </span>
                                            ${preset.brand ? `
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider primary-bg-soft text-[var(--color-primary)]">
                                                    ${esc(preset.brand)}
                                                </span>
                                            ` : ''}
                                        </div>

                                        <div class="flex items-center gap-1.5 shrink-0">
                                            ${isImported ? `
                                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1 shrink-0">
                                                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Ada di Toko
                                                </span>
                                            ` : `
                                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-300 dark:border-blue-700 flex items-center gap-1 shrink-0">
                                                    <i class="fa-solid fa-cloud-arrow-down text-blue-500"></i> Siap Impor
                                                </span>
                                            `}
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${esc(preset.id)}')" class="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-700/70 dark:hover:bg-rose-950/50 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- FOTO & NAMA PRODUK -->
                                    <div class="flex gap-3.5 items-start mb-3.5">
                                        <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shrink-0 relative flex items-center justify-center">
                                            ${preset.img ? `
                                                <img src="${esc(preset.img)}" alt="${esc(preset.name)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                                <div class="hidden w-full h-full items-center justify-center text-slate-400 text-xl"><i class="fa-solid fa-box"></i></div>
                                            ` : `
                                                <div class="w-full h-full flex items-center justify-center text-slate-400 text-xl"><i class="fa-solid fa-box"></i></div>
                                            `}
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <h4 class="font-black text-sm text-slate-800 dark:text-white leading-snug line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                                                ${esc(preset.name)}
                                            </h4>
                                            <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                                                <span class="text-xs font-black text-[var(--color-primary)]">
                                                    ${fCur(preset.price || (variants[0]?.price || 0))}
                                                </span>
                                                <span class="text-[10px] font-bold text-slate-400">/ ${esc(preset.unit || 'Unit')}</span>
                                            </div>
                                            ${preset.tag ? `
                                                <span class="inline-block mt-1 text-[8.5px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">
                                                    ★ ${esc(preset.tag)}
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>

                                    <!-- DESKRIPSI & RINGKASAN VARIAN -->
                                    <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                                        ${esc(preset.desc || 'Produk terstandar siap pakai dengan spesifikasi teknis lengkap.')}
                                    </p>

                                    <!-- SWATCH WARNA & CHIP VARIAN -->
                                    <div class="mb-4 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div class="flex items-center justify-between mb-1.5">
                                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">
                                                <i class="fa-solid fa-layer-group text-[var(--color-primary)] mr-1"></i> ${variants.length} Varian Tersedia
                                            </span>
                                            ${hasColors ? `
                                                <span class="text-[9px] font-bold text-slate-400">${colorVariants.length} Pilihan Warna</span>
                                            ` : ''}
                                        </div>

                                        ${hasColors ? `
                                            <div class="flex items-center gap-1.5 flex-wrap pt-0.5">
                                                ${colorVariants.slice(0, 8).map(v => `
                                                    <div class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 shadow-2xs shrink-0" style="background-color: ${esc(v.colorCode || '#ffffff')}" title="${esc(v.name)}"></div>
                                                `).join('')}
                                                ${colorVariants.length > 8 ? `
                                                    <span class="text-[9px] font-black text-slate-400">+${colorVariants.length - 8}</span>
                                                ` : ''}
                                            </div>
                                        ` : `
                                            <div class="flex items-center gap-1.5 flex-wrap pt-0.5">
                                                ${variants.slice(0, 4).map(v => `
                                                    <span class="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                        ${esc(v.name.split('(')[0].trim())}
                                                    </span>
                                                `).join('')}
                                                ${variants.length > 4 ? `
                                                    <span class="text-[9px] font-bold text-slate-400">+${variants.length - 4} ukuran lainnya</span>
                                                ` : ''}
                                            </div>
                                        `}
                                    </div>
                                </div>

                                <!-- TOMBOL AKSI NATIVE (TOUCH TARGET >= 40-44px) -->
                                <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                    ${!isImported ? `
                                        <div class="flex items-center gap-2">
                                            <button type="button" onclick="window.openMasterProductImportModal('${esc(preset.id)}')" class="flex-1 h-12 min-h-[44px] rounded-2xl primary-bg text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                                                <i class="fa-solid fa-cloud-arrow-down text-sm"></i>
                                                <span>Salin &amp; Impor ke Toko</span>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${esc(preset.id)}')" class="w-12 h-12 min-h-[44px] rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-sm"></i>
                                            </button>
                                        </div>
                                    ` : `
                                        <div class="flex items-center gap-2">
                                            <button type="button" onclick="openAdminTab('products'); setTimeout(() => window.handleAdminSearch?.('${esc(preset.name)}', 'products'), 100);" class="flex-1 h-12 min-h-[44px] rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                                <span>Buka di Toko</span>
                                            </button>
                                            <button type="button" onclick="window.openMasterProductImportModal('${esc(preset.id)}', true)" class="w-12 h-12 min-h-[44px] rounded-2xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs flex items-center justify-center gap-1.5 hover:primary-bg hover:text-white transition-all cursor-pointer shrink-0 active:scale-95" title="Perbarui varian / Impor ulang">
                                                <i class="fa-solid fa-rotate text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.confirmDeleteMasterPreset('${esc(preset.id)}')" class="w-12 h-12 min-h-[44px] rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95" title="Hapus template dari pustaka">
                                                <i class="fa-solid fa-trash-can text-sm"></i>
                                            </button>
                                        </div>
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                ` : `
                <!-- TAMPILAN SUB-TAB 2: DATABASE SWATCH WARNA CAT (FITUR SEBELUMNYA) -->
                <div class="bento-island-card p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs mb-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                        <div>
                            <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                                <i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i>
                                Katalog Kode Warna &amp; Swatch Cat
                            </h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Daftar kode HEX warna untuk swatch varian cat tembok, besi, dan waterproofing.</p>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <button type="button" onclick="openImportFromProductsModal()" class="h-12 min-h-[44px] px-4 rounded-xl primary-bg-soft border primary-border text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:primary-bg hover:text-white transition-all active:scale-95 shadow-2xs flex items-center gap-2 cursor-pointer">
                                <i class="fa-solid fa-box-archive"></i> Impor dari Produk Toko
                            </button>
                            <button type="button" onclick="window.openAddColorModal()" class="h-12 min-h-[44px] px-4 rounded-xl primary-bg text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all active:scale-95 shadow-md flex items-center gap-2 cursor-pointer">
                                <i class="fa-solid fa-plus"></i> Tambah Warna
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" id="admin-colors-grid">
                        ${(appData.colors || []).length === 0 ? `
                            <div class="col-span-full py-12 text-center">
                                <i class="fa-solid fa-palette text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                                <p class="text-xs font-bold text-slate-400">Database warna masih kosong.</p>
                                <button type="button" onclick="openImportFromProductsModal()" class="mt-3 text-xs font-bold text-[var(--color-primary)] underline">Impor dari varian produk toko</button>
                            </div>
                        ` : (appData.colors || []).map((c, i) => `
                            <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 flex flex-col justify-between hover:border-[var(--color-primary)]/50 transition-all group">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${esc(c.hex || '#ffffff')}"></div>
                                    <button type="button" onclick="window.deleteColorFromDB(${i})" class="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" title="Hapus"><i class="fa-solid fa-trash text-[11px]"></i></button>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate" title="${esc(c.name)}">${esc(c.name)}</h5>
                                    <p class="text-[10px] font-mono text-slate-400 uppercase mt-0.5">${esc(c.hex || '#------')}</p>
                                    ${c.catalog ? `<span class="inline-block mt-1 text-[8px] font-bold uppercase tracking-wider text-slate-400 truncate max-w-full">${esc(c.catalog)}</span>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                `}
            </div>
        </div>
    `;

    setH('admin-content', html);
};

// ─── Search & Category Handlers ──────────────────────────────────────────────
window.handleMasterSearch = (val) => {
    masterSearchQuery = val || '';
    const clearBtn = el('master-search-clear-btn');
    if (clearBtn) clearBtn.classList.toggle('hidden', !masterSearchQuery);
    renderMasterCatalogView();
};

window.clearMasterSearch = () => {
    masterSearchQuery = '';
    const inp = el('master-search-input');
    if (inp) { inp.value = ''; inp.focus(); }
    const clearBtn = el('master-search-clear-btn');
    if (clearBtn) clearBtn.classList.add('hidden');
    renderMasterCatalogView();
};

window.setMasterFilterCategory = (cat) => {
    activeMasterCategory = cat;
    renderMasterCatalogView();
};

window.switchMasterCatalogSubTab = (tab) => {
    activeSubTab = tab;
    renderMasterCatalogView();
};

// ─── Modal Pratinjau & Impor Selektif Per-Produk ──────────────────────────────
window.openMasterProductImportModal = (presetId, isUpdate = false) => {
    const allPresets = getAllMasterPresets();
    const preset = allPresets.find(p => p.id === presetId);
    if (!preset) {
        showToast('Data template master tidak ditemukan!');
        return;
    }

    const { isImported, storeProduct } = checkPresetStoreStatus(preset);
    const variants = preset.variants || [];
    const defaultPrice = storeProduct?.price || preset.price || variants[0]?.price || 0;
    const defaultHpp = storeProduct?.hpp || preset.hpp || variants[0]?.hpp || 0;
    const defaultStock = storeProduct?.stock || 10;
    const defaultUnit = storeProduct?.unit || preset.unit || 'Unit';

    const modalHtml = `
        <div class="p-5 sm:p-7 max-w-2xl">
            <!-- HEADER MODAL -->
            <div class="flex items-start justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div>
                        <h3 class="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                            ${isUpdate ? 'Perbarui Varian dari Master' : 'Salin &amp; Impor ke Toko Saya'}
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sesuaikan harga modal/jual dan centang varian yang ada di toko fisik Anda.</p>
                    </div>
                </div>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <!-- RINGKASAN PRODUK YANG DIIMPOR -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 flex items-center gap-3.5 mb-5">
                <div class="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    ${preset.img ? `
                        <img src="${esc(preset.img)}" alt="${esc(preset.name)}" class="w-full h-full object-cover" onerror="this.src='/putri_mascot_3d.jpg'">
                    ` : `
                        <i class="fa-solid fa-box text-slate-400 text-xl"></i>
                    `}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 mb-0.5">
                        <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${esc(preset.category)}</span>
                        ${preset.brand ? `<span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase primary-bg-soft text-[var(--color-primary)]">${esc(preset.brand)}</span>` : ''}
                    </div>
                    <h4 class="font-black text-xs sm:text-sm text-slate-800 dark:text-white truncate">${esc(preset.name)}</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Satuan: <b>${esc(defaultUnit)}</b> &bull; ${variants.length} Varian Tersedia di Database</p>
                </div>
            </div>

            <!-- FORM PENGATURAN HARGA & STOK LOKAL TOKO -->
            <div class="mb-5">
                <h5 class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> 1. Pengaturan Harga &amp; Stok Toko Anda
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Harga Jual Toko (Rp)</label>
                        <input type="number" id="imp-custom-price" value="${defaultPrice}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 65000">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Harga Modal / HPP (Rp)</label>
                        <input type="number" id="imp-custom-hpp" value="${defaultHpp}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 52000">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Stok Awal di Toko</label>
                        <input type="number" id="imp-custom-stock" value="${defaultStock}" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 10">
                    </div>
                </div>
            </div>

            <!-- SELEKSI VARIANT CHECKLIST -->
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h5 class="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> 2. Pilih Varian yang Dijual di Toko Anda
                    </h5>
                    <div class="flex items-center gap-2">
                        <button type="button" onclick="window.toggleAllImportVariants(true)" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">Pilih Semua</button>
                        <span class="text-slate-300">&bull;</span>
                        <button type="button" onclick="window.toggleAllImportVariants(false)" class="text-[10px] font-bold text-slate-400 hover:underline cursor-pointer">Batal Semua</button>
                    </div>
                </div>

                <div class="custom-scrollbar max-h-56 overflow-y-auto space-y-2 p-1 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                    ${variants.map((v, i) => `
                        <label class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all min-h-[48px]">
                            <div class="flex items-center gap-3 min-w-0">
                                <input type="checkbox" id="imp-var-chk-${i}" data-idx="${i}" checked class="w-5 h-5 rounded accent-[var(--color-primary)] shrink-0 cursor-pointer">
                                ${v.colorCode ? `
                                    <div class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 shadow-2xs shrink-0" style="background-color: ${esc(v.colorCode)}"></div>
                                ` : `
                                    <div class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-400 flex items-center justify-center text-[10px] shrink-0 font-black">
                                        <i class="fa-solid fa-tag"></i>
                                    </div>
                                `}
                                <div class="min-w-0">
                                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                                    <p class="text-[9.5px] text-slate-400 font-mono">${v.sku ? esc(v.sku) : 'Auto SKU'} &bull; Satuan: ${esc(v.unit || defaultUnit)}</p>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="text-xs font-black text-slate-700 dark:text-slate-200">${fCur(v.price || defaultPrice)}</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- CATATAN EDUKASI KLIEN -->
            <div class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-[10.5px] leading-relaxed mb-6 flex items-center gap-2.5">
                <i class="fa-solid fa-shield-halved text-base shrink-0 text-amber-500"></i>
                <span><b>Salinan Aman Mandiri:</b> Produk ini akan diduplikasi secara lokal ke katalog toko Anda. Pengubahan harga jual atau stok toko tidak akan memengaruhi toko atau klien lain.</span>
            </div>

            <!-- TOMBOL AKSI -->
            <div class="flex gap-3">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="button" onclick="window.confirmExecuteMasterProductImport('${esc(preset.id)}')" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <span>${isUpdate ? 'Simpan Pembaruan' : 'Konfirmasi Salin ke Toko'}</span>
                </button>
            </div>
        </div>
    `;

    window._openColorFloatModal(modalHtml);
};

window.toggleAllImportVariants = (checked) => {
    const checkboxes = document.querySelectorAll('[id^="imp-var-chk-"]');
    checkboxes.forEach(cb => { cb.checked = !!checked; });
};

// ─── Eksekusi Impor Produk Tunggal ke Katalog Toko (Anti-Hilang Saat Reload) ──
export const confirmExecuteMasterProductImport = async (presetId) => {
    const allPresets = getAllMasterPresets();
    const preset = allPresets.find(p => p.id === presetId);
    if (!preset) {
        showToast('Preset tidak ditemukan!');
        return;
    }

    const customPrice = parseFloat(el('imp-custom-price')?.value) || preset.price || 0;
    const customHpp = parseFloat(el('imp-custom-hpp')?.value) || preset.hpp || 0;
    const customStock = parseFloat(el('imp-custom-stock')?.value) || 0;

    // Ambil varian yang dicentang
    const selectedVariants = [];
    (preset.variants || []).forEach((v, i) => {
        const cb = el(`imp-var-chk-${i}`);
        if (cb && cb.checked) {
            selectedVariants.push({
                ...v,
                price: customPrice || v.price || 0,
                priceNormal: v.priceNormal || 0,
                hpp: customHpp || v.hpp || 0,
                stock: customStock,
                storeStock: customStock,
                warehouseStock: 0,
                isActive: true
            });
        }
    });

    if (selectedVariants.length === 0) {
        showToast('Pilih minimal 1 varian untuk diimpor ke toko!');
        return;
    }

    if (!appData.products) appData.products = [];

    // Cek apakah produk dengan nama yang sama sudah ada di toko
    const existingIndex = appData.products.findIndex(p => (p.name || '').trim().toLowerCase() === preset.name.trim().toLowerCase());
    const prodId = existingIndex > -1 ? appData.products[existingIndex].id : Date.now();
    const prodIdStr = String(prodId);

    const importedProduct = {
        id: prodId,
        name: preset.name,
        brand: preset.brand || '',
        category: preset.category || 'Bahan Bangunan',
        subCategory: preset.subCategory || '',
        unit: preset.unit || 'Unit',
        desc: preset.desc || '',
        img: preset.img || '',
        specTable: preset.specTable || [],
        price: customPrice,
        priceNormal: preset.priceNormal || 0,
        hpp: customHpp,
        stock: customStock * selectedVariants.length,
        storeStock: customStock * selectedVariants.length,
        warehouseStock: 0,
        poin: 5,
        tag: preset.tag || '',
        isActive: true,
        variants: selectedVariants
    };

    if (existingIndex > -1) {
        appData.products[existingIndex] = importedProduct;
    } else {
        appData.products.unshift(importedProduct);
    }

    // Pastikan kategori & brand otomatis terdaftar jika belum ada
    if (!appData.categories) appData.categories = [];
    if (preset.category && !appData.categories.some(c => (c.name || '').trim().toLowerCase() === preset.category.trim().toLowerCase())) {
        appData.categories.push({ id: Date.now() + 1, name: preset.category, subCategories: [] });
    }

    if (!appData.brands) appData.brands = [];
    if (preset.brand && !appData.brands.some(b => (b.name || '').trim().toLowerCase() === preset.brand.trim().toLowerCase())) {
        appData.brands.push({ id: Date.now() + 2, name: preset.brand, img: '' });
    }

    // Pastikan ID produk terdaftar di susunan urutan produk (productOrder)
    if (!appData.productOrder) appData.productOrder = [];
    if (!appData.productOrder.includes(prodIdStr)) {
        appData.productOrder.unshift(prodIdStr);
    }

    window._closeColorFloatModal();
    sLoad('Menyimpan produk ke database toko...');

    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;

        // 1. TULIS LANGSUNG KE SUB-KOLEKSI FIRESTORE PRODUCTS (Proteksi Anti-Hilang saat Reload)
        if (_db) {
            await _db.collection("freshmart").doc("cms_data").collection("products").doc(prodIdStr).set(importedProduct);
        }

        // 2. BROADCAST KE CMS_DATA & SIMPAN PENGATURAN TOKO (productOrder, categories, brands)
        await saveApp(['productOrder', 'categories', 'brands'], {
            updateType: 'product_single',
            updatedProductIds: [prodIdStr]
        });

        // 3. PERBARUI CACHE LOKAL SEGERA
        try {
            localStorage.setItem('freshmart_products', JSON.stringify(appData.products));
        } catch (_) {}

        // 4. REFRESH KATALOG KASIR POS & STOREFRONT REALTIME
        if (typeof window.refreshPOSCatalog === 'function') window.refreshPOSCatalog();
        if (typeof window.rDyn === 'function') window.rDyn();
        if (typeof window.rCat === 'function') window.rCat();

        showToast(`✅ "${preset.name}" berhasil ditambahkan ke katalog toko Anda! Data tersimpan permanen.`);
        renderMasterCatalogView();
    } catch (e) {
        console.error('[Master Preset] Gagal menyimpan:', e);
        showToast('Gagal menyimpan produk ke katalog toko: ' + (e.message || ''));
    } finally {
        hLoad();
    }
};

// ─── Fitur Salin Semua Produk Master ke Toko (Batch Import All) ───────────────
/**
 * Tampilkan dialog konfirmasi untuk menyalin semua template master sekaligus
 */
export const confirmImportAllMasterPresets = () => {
    const allPresets = getAllMasterPresets();
    const unimported = allPresets.filter(p => !checkPresetStoreStatus(p).isImported);
    if (unimported.length === 0) {
        showToast('Semua template produk dari Database Bersama sudah ada di katalog toko Anda!');
        return;
    }

    const totalVariants = unimported.reduce((acc, p) => acc + (p.variants?.length || 1), 0);
    const uniqueCategories = [...new Set(unimported.map(p => p.category).filter(Boolean))];

    const modalHtml = `
        <div class="p-5 sm:p-7 max-w-lg">
            <!-- HEADER MODAL -->
            <div class="flex items-start justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl primary-bg-soft text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div>
                        <h3 class="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                            Salin Semua ke Toko
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Impor massal template master produk langsung ke etalase &amp; kasir POS.</p>
                    </div>
                </div>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <!-- RINGKASAN IMPOR MASSAL -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 mb-5 space-y-2">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Total Produk Disalin:</span>
                    <span class="text-sm font-black text-[var(--color-primary)]">${unimported.length} Produk Master</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Total Varian Terbawa:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-200">${totalVariants} Varian Lengkap</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Cakupan Kategori:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-200">${uniqueCategories.length} Sektor (${uniqueCategories.slice(0, 3).join(', ')}${uniqueCategories.length > 3 ? '...' : ''})</span>
                </div>
            </div>

            <!-- FORM PENGATURAN CEPAT -->
            <div class="mb-5">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Stok Awal per Varian di Toko</label>
                <input type="number" id="imp-all-default-stock" value="10" min="0" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: 10">
                <p class="text-[10px] text-slate-400 mt-1">Stok ini otomatis dialokasikan ke masing-masing varian yang disalin.</p>
            </div>

            <!-- PROTEKSI KEAMANAN CLOUD & LOKAL -->
            <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10.5px] leading-relaxed mb-6 flex items-start gap-2.5">
                <i class="fa-solid fa-cloud-check text-base shrink-0 text-emerald-500 mt-0.5"></i>
                <span><b>Penyimpanan Permanen (Anti-Hilang):</b> Seluruh produk akan disimpan ke Cloud Firestore sub-koleksi dan Cache Lokal. Data tetap utuh dan tersimpan bahkan setelah halaman di-reload.</span>
            </div>

            <!-- TOMBOL AKSI -->
            <div class="flex gap-3">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="button" onclick="window.executeImportAllMasterPresets()" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 cursor-pointer transition-all">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <span>Salin Semua (${unimported.length})</span>
                </button>
            </div>
        </div>
    `;

    window._openColorFloatModal(modalHtml);
};

/**
 * Eksekusi Impor Massal Seluruh Preset Master ke Katalog Toko
 */
export const executeImportAllMasterPresets = async () => {
    const allPresets = getAllMasterPresets();
    const unimported = allPresets.filter(p => !checkPresetStoreStatus(p).isImported);
    if (unimported.length === 0) {
        window._closeColorFloatModal?.();
        showToast('Semua template produk dari Database Bersama sudah ada di toko Anda!');
        return;
    }

    const defaultStock = Math.max(0, parseInt(el('imp-all-default-stock')?.value || '10', 10) || 10);
    window._closeColorFloatModal?.();
    sLoad(`Menyimpan ${unimported.length} produk master ke database toko...`);

    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;

        if (!appData.products) appData.products = [];
        if (!appData.categories) appData.categories = [];
        if (!appData.brands) appData.brands = [];
        if (!appData.productOrder) appData.productOrder = [];

        const newProducts = [];
        const updatedProductIds = [];
        const baseTimestamp = Date.now();

        unimported.forEach((preset, idx) => {
            const newId = baseTimestamp + idx;
            const newIdStr = String(newId);

            const variants = (preset.variants || []).map(v => ({
                ...v,
                stock: defaultStock,
                storeStock: defaultStock,
                warehouseStock: 0,
                isActive: true
            }));

            const importedProd = {
                id: newId,
                name: preset.name,
                brand: preset.brand || '',
                category: preset.category || 'Bahan Bangunan',
                subCategory: preset.subCategory || '',
                unit: preset.unit || 'Unit',
                desc: preset.desc || '',
                img: preset.img || '',
                specTable: preset.specTable || [],
                price: preset.price || variants[0]?.price || 0,
                priceNormal: preset.priceNormal || 0,
                hpp: preset.hpp || variants[0]?.hpp || 0,
                stock: defaultStock * (variants.length || 1),
                storeStock: defaultStock * (variants.length || 1),
                warehouseStock: 0,
                poin: 5,
                tag: preset.tag || '',
                isActive: true,
                variants: variants
            };

            newProducts.push(importedProd);
            appData.products.unshift(importedProd);
            updatedProductIds.push(newIdStr);
            appData.productOrder.unshift(newIdStr);

            // Tambahkan kategori jika belum ada
            if (preset.category && !appData.categories.some(c => (c.name || '').trim().toLowerCase() === preset.category.trim().toLowerCase())) {
                appData.categories.push({ id: baseTimestamp + 1000 + idx, name: preset.category, subCategories: [] });
            }
            // Tambahkan brand jika belum ada
            if (preset.brand && !appData.brands.some(b => (b.name || '').trim().toLowerCase() === preset.brand.trim().toLowerCase())) {
                appData.brands.push({ id: baseTimestamp + 2000 + idx, name: preset.brand, img: '' });
            }
        });

        // 1. TULIS KE FIRESTORE SUB-KOLEKSI MENGGUNAKAN BATCH (Maks 450 per batch write)
        if (_db) {
            const CHUNK_SIZE = 450;
            for (let i = 0; i < newProducts.length; i += CHUNK_SIZE) {
                const chunk = newProducts.slice(i, i + CHUNK_SIZE);
                const batch = _db.batch();
                chunk.forEach(prod => {
                    const docRef = _db.collection("freshmart").doc("cms_data").collection("products").doc(prod.id.toString());
                    batch.set(docRef, prod);
                });
                await batch.commit();
            }
        }

        // 2. BROADCAST KE CMS_DATA & SIMPAN PENGATURAN TOKO
        await saveApp(['productOrder', 'categories', 'brands'], {
            updateType: 'product_bulk',
            updatedProductIds
        });

        // 3. SIMPAN CACHE LOKAL SEGERA
        try {
            localStorage.setItem('freshmart_products', JSON.stringify(appData.products));
        } catch (_) {}

        // 4. REFRESH KATALOG KASIR POS & STOREFRONT REALTIME
        if (typeof window.refreshPOSCatalog === 'function') window.refreshPOSCatalog();
        if (typeof window.rDyn === 'function') window.rDyn();
        if (typeof window.rCat === 'function') window.rCat();

        showToast(`✅ Berhasil menyalin ${newProducts.length} produk ke katalog toko! Data tersimpan permanen.`);
        renderMasterCatalogView();
    } catch (err) {
        console.error('[MasterPreset] Gagal impor semua produk:', err);
        showToast('Gagal menyalin semua produk: ' + (err.message || ''));
    } finally {
        hLoad();
    }
};

window.confirmExecuteMasterProductImport = confirmExecuteMasterProductImport;
window.confirmImportAllMasterPresets = confirmImportAllMasterPresets;
window.executeImportAllMasterPresets = executeImportAllMasterPresets;

// ─── Modal Ekspor Produk Toko ke Pustaka Master (Two-Way Sharing) ──────────────
window.openExportStoreProductPicker = () => {
    const prods = appData.products || [];
    if (prods.length === 0) {
        showToast('Katalog produk toko Anda masih kosong!');
        return;
    }

    const modalHtml = `
        <div class="p-5 sm:p-7 max-w-xl">
            <div class="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-cloud-arrow-up text-[var(--color-primary)]"></i> Simpan Produk ke Pustaka Master
                </h3>
                <button type="button" onclick="window._closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">Pilih produk dari katalog toko Anda untuk dijadikan master template bersama:</p>
            
            <div class="custom-scrollbar max-h-72 overflow-y-auto space-y-2.5 mb-5 p-1">
                ${prods.map(p => `
                    <div class="bento-island-card flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)] transition-all min-h-[52px]">
                        <div class="min-w-0">
                            <h5 class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(p.name)}</h5>
                            <p class="text-[10px] text-slate-400 mt-0.5">${esc(p.category || 'Tanpa Kategori')} &bull; ${(p.variants || []).length} Varian &bull; ${fCur(p.price || 0)}</p>
                        </div>
                        <button type="button" onclick="window.confirmExportProductToMaster('${esc(p.id)}')" class="h-10 min-h-[40px] px-4 rounded-xl primary-bg text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center">
                            Simpan
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    window._openColorFloatModal(modalHtml);
};

window.confirmExportProductToMaster = async (prodId) => {
    const prod = (appData.products || []).find(p => String(p.id) === String(prodId));
    if (!prod) {
        showToast('Produk tidak ditemukan!');
        return;
    }

    if (!appData.custom_master_presets) appData.custom_master_presets = [];

    const existingIdx = appData.custom_master_presets.findIndex(p => (p.name || '').toLowerCase() === (prod.name || '').toLowerCase());
    const masterObj = {
        id: 'custom-' + Date.now(),
        name: prod.name,
        brand: prod.brand || '',
        category: prod.category || 'Bahan Bangunan',
        subCategory: prod.subCategory || '',
        unit: prod.unit || 'Unit',
        desc: prod.desc || '',
        specTable: prod.specTable || [],
        price: prod.price || 0,
        priceNormal: prod.priceNormal || 0,
        hpp: prod.hpp || 0,
        img: prod.img || '',
        tag: 'Koleksi Toko',
        variants: (prod.variants || []).map(v => ({
            name: v.name,
            price: v.price || prod.price || 0,
            priceNormal: v.priceNormal || 0,
            hpp: v.hpp || prod.hpp || 0,
            unit: v.unit || prod.unit || 'Unit',
            colorCode: v.colorCode || '',
            sku: v.sku || '',
            stock: v.stock || 0,
            storeStock: v.storeStock || 0,
            warehouseStock: v.warehouseStock || 0,
            isActive: true
        }))
    };

    if (existingIdx > -1) {
        appData.custom_master_presets[existingIdx] = masterObj;
    } else {
        appData.custom_master_presets.push(masterObj);
    }

    window._closeColorFloatModal();
    sLoad('Menyimpan ke Pustaka Master...');

    try {
        await saveApp(['custom_master_presets']);
        showToast(`"${prod.name}" berhasil disimpan ke Database Bersama!`);
        renderMasterCatalogView();
    } catch (e) {
        showToast('Gagal menyimpan ke pustaka master!');
    } finally {
        hLoad();
    }
};

// ─── Fitur Tambah & Hapus Warna Cat (Sub-Tab 2) ────────────────────────────────
window.openAddColorModal = () => {
    const catalogs = [...new Set((appData.colors || []).map(c => c.catalog).filter(Boolean))];
    const catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');

    const html = `
        <div class="p-6">
            <h3 class="text-base font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <i class="fa-solid fa-plus text-[var(--color-primary)]"></i> Tambah Swatch Warna Baru
            </h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label>
                    <input id="new-color-name" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: Abu-Abu Muda">
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="new-color-picker" value="#3b82f6" class="w-12 h-12 rounded-xl cursor-pointer" onchange="document.getElementById('new-color-hex').value=this.value">
                        <input id="new-color-hex" class="flex-1 h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="#3B82F6" value="#3b82f6">
                    </div>
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="new-color-catalog" list="new-color-cat-list" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[16px] sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] shadow-2xs" placeholder="Contoh: No Drop, Dulux, Avian">
                    <datalist id="new-color-cat-list">${catalogOpts}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button type="button" onclick="window._closeColorFloatModal()" class="flex-1 h-12 min-h-[48px] rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm text-slate-500 cursor-pointer active:scale-95 transition-all">Batal</button>
                <button type="button" onclick="window.confirmSaveNewColor()" class="flex-1 h-12 min-h-[48px] rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm uppercase cursor-pointer shadow-md active:scale-95 transition-all">Simpan</button>
            </div>
        </div>
    `;

    window._openColorFloatModal(html);
};

window.confirmSaveNewColor = async () => {
    const name = (el('new-color-name')?.value || '').trim();
    const hex = (el('new-color-hex')?.value || '').trim();
    const catalog = (el('new-color-catalog')?.value || '').trim();

    if (!name) {
        showToast('Nama warna wajib diisi!');
        return;
    }

    if (!appData.colors) appData.colors = [];
    appData.colors.push({ id: Date.now(), name, hex, catalog });

    window._closeColorFloatModal();
    sLoad('Menyimpan warna...');
    try {
        await saveApp(['colors']);
        showToast(`Warna "${name}" berhasil ditambahkan!`);
        renderMasterCatalogView();
    } catch (e) {
        showToast('Gagal menyimpan warna!');
    } finally {
        hLoad();
    }
};

window.deleteColorFromDB = async (idx) => {
    if (!confirm('Hapus warna ini dari database swatch?')) return;
    if (!appData.colors || !appData.colors[idx]) return;

    appData.colors.splice(idx, 1);
    sLoad('Menghapus warna...');
    try {
        await saveApp(['colors']);
        showToast('Warna berhasil dihapus!');
        renderMasterCatalogView();
    } catch (e) {
        showToast('Gagal menghapus warna!');
    } finally {
        hLoad();
    }
};

// ─── Fitur Hapus & Pulihkan Master Preset (Database Bersama) ────────────────
/**
 * Konfirmasi dan Hapus Template Master Produk dari Database Bersama
 */
export const confirmDeleteMasterPreset = async (presetId) => {
    if (!presetId) return;
    const allPresets = [...BUILTIN_MASTER_PRESETS, ...(appData.custom_master_presets || [])];
    const preset = allPresets.find(p => p.id === presetId);
    const presetName = preset ? preset.name : 'Template Produk';

    const confirmed = await showConfirm(
        'Hapus Template Master?',
        `Apakah Anda yakin ingin menghapus template "${presetName}" dari Database Produk Bersama? Template ini tidak akan lagi muncul di daftar pustaka.${preset && !presetId.startsWith('custom-') ? ' Anda dapat memulihkannya kembali sewaktu-waktu melalui tombol Pulihkan Template.' : ''}`,
        null,
        'Ya, Hapus Template',
        true
    );

    if (confirmed) {
        await executeDeleteMasterPreset(presetId);
    }
};

/**
 * Eksekusi Penghapusan Preset Master
 */
export const executeDeleteMasterPreset = async (presetId) => {
    if (!presetId) return;
    sLoad('Menghapus template master...');

    try {
        let presetName = 'Template Produk';
        // Jika preset kustom dari toko
        if (appData.custom_master_presets && appData.custom_master_presets.some(p => p.id === presetId)) {
            const idx = appData.custom_master_presets.findIndex(p => p.id === presetId);
            if (idx > -1) {
                presetName = appData.custom_master_presets[idx].name || presetName;
                appData.custom_master_presets.splice(idx, 1);
                await saveApp(['custom_master_presets']);
            }
        } else {
            // Jika preset bawaan sistem
            if (!appData.deleted_master_preset_ids) appData.deleted_master_preset_ids = [];
            if (!appData.deleted_master_preset_ids.includes(presetId)) {
                appData.deleted_master_preset_ids.push(presetId);
                await saveApp(['deleted_master_preset_ids']);
            }
            const builtin = BUILTIN_MASTER_PRESETS.find(p => p.id === presetId);
            if (builtin) presetName = builtin.name;
        }

        showToast(`Template "${presetName}" berhasil dihapus dari pustaka.`);
        renderMasterCatalogView();
    } catch (err) {
        console.error('[MasterPresets] Error deleting preset:', err);
        showToast('Gagal menghapus template master produk!');
    } finally {
        hLoad();
    }
};

/**
 * Pulihkan Semua Template Master Bawaan yang Pernah Dihapus
 */
export const restoreDeletedMasterPresets = async () => {
    const deletedCount = (appData.deleted_master_preset_ids || []).length;
    if (deletedCount === 0) {
        showToast('Tidak ada template bawaan yang dihapus.');
        return;
    }

    const confirmed = await showConfirm(
        'Pulihkan Template Bawaan?',
        `Kembalikan ${deletedCount} template produk master bawaan sistem yang pernah dihapus ke Database Produk Bersama?`,
        null,
        'Ya, Pulihkan Semua',
        false
    );

    if (!confirmed) return;

    sLoad('Memulihkan template bawaan...');
    try {
        appData.deleted_master_preset_ids = [];
        await saveApp(['deleted_master_preset_ids']);
        showToast('Semua template master bawaan berhasil dipulihkan!');
        renderMasterCatalogView();
    } catch (err) {
        console.error('[MasterPresets] Error restoring presets:', err);
        showToast('Gagal memulihkan template bawaan!');
    } finally {
        hLoad();
    }
};

// ─── Expose Global Handler untuk Router & Inline Scripts ──────────────────────
window.rAdmMasterCatalogView = renderMasterCatalogView;
window.renderMasterCatalogView = renderMasterCatalogView;
window.confirmDeleteMasterPreset = confirmDeleteMasterPreset;
window.executeDeleteMasterPreset = executeDeleteMasterPreset;
window.restoreDeletedMasterPresets = restoreDeletedMasterPresets;
window.confirmImportAllMasterPresets = confirmImportAllMasterPresets;
window.executeImportAllMasterPresets = executeImportAllMasterPresets;

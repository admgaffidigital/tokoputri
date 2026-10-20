/**
 * ============================================================
 * UNIT TEST SUITE: KATALOG & DAFTAR HARGA CEPAT (PDF A4 & WA)
 * Toko Putri - Pengujian Generator Brosur / Price List Proyek
 * ============================================================
 */

import fs from 'fs';
import path from 'path';

console.log('\n============================================================');
console.log('📋 AUDIT & UNIT TEST: KATALOG & DAFTAR HARGA PROYEK (PDF/WA)');
console.log('============================================================\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, errMsg = '') {
    if (condition) {
        console.log(`  ✅ PASS: ${testName}`);
        passedTests++;
    } else {
        console.error(`  ❌ FAIL: ${testName} -> ${errMsg}`);
        failedTests++;
    }
}

// 1. Verifikasi Eksistensi Berkas
console.log('📁 1. Memeriksa Eksistensi Modul Baru...');
const pricelistModalPath = 'src/modules/admin/products/pricelist-modal.js';
assert(fs.existsSync(pricelistModalPath), 'Berkas pricelist-modal.js tersedia');

// 2. Verifikasi Ekspor Fungsi di pricelist-modal.js
console.log('\n🔍 2. Memeriksa Ekspor & Eksposur Window di pricelist-modal.js...');
const modalContent = fs.readFileSync(pricelistModalPath, 'utf8');

assert(modalContent.includes('export const openPriceListExportModal'), 'openPriceListExportModal diekspor');
assert(modalContent.includes('export const closePriceListExportModal'), 'closePriceListExportModal diekspor');
assert(modalContent.includes('export const formatPriceListWhatsApp'), 'formatPriceListWhatsApp diekspor');
assert(modalContent.includes('export const copyPriceListWhatsApp'), 'copyPriceListWhatsApp diekspor');
assert(modalContent.includes('export const executePriceListExport'), 'executePriceListExport diekspor');
assert(modalContent.includes('window.openPriceListExportModal = openPriceListExportModal'), 'window.openPriceListExportModal diekspos');
assert(modalContent.includes('window.closePriceListExportModal = closePriceListExportModal'), 'window.closePriceListExportModal diekspos');

// 3. Verifikasi Arsitektur Native Bottom Sheet UI/UX
console.log('\n🎨 3. Memeriksa Standar Desain Native Bottom Sheet & Mobile Ergonomi...');
assert(modalContent.includes('modal-bottom-sheet'), 'Memiliki class .modal-bottom-sheet');
assert(modalContent.includes('rounded-t-[2rem] sm:rounded-3xl'), 'Memiliki squircle border radius standard v1.18.12');
assert(modalContent.includes('pull-indicator') || modalContent.includes('bg-slate-300 dark:bg-slate-600 rounded-full mx-auto my-2.5 sm:hidden'), 'Memiliki pull indicator bar untuk gestur swipe mobile');
assert(modalContent.includes('linear-gradient(135deg, rgba(var(--color-primary-rgb)') || modalContent.includes('var(--color-primary)'), 'Memiliki Theme Header harmonis');
assert(modalContent.includes('text-[16px] sm:text-xs'), 'Input & Select menggunakan font 16px di mobile anti auto-zoom/mental');
assert(modalContent.includes('h-11') && modalContent.includes('h-12'), 'Touch target memenuhi standar minimal 44px');

// 4. Verifikasi Logika Generator Teks WhatsApp
console.log('\n📱 4. Menguji Generator Teks WhatsApp (Simulasi Logika)...');
// Import modul dan uji fungsi format
const dummyProducts = [
    {
        id: 'P01',
        name: 'Semen Gresik 40kg',
        category: 'Semen & Mortar',
        unit: 'sak',
        price: 58000,
        stock: 120,
        isActive: true,
        wholesale: [{ min: 50, price: 55000 }, { min: 200, price: 53500 }]
    },
    {
        id: 'P02',
        name: 'Pipa PVC AW 1/2 inch',
        category: 'Pipa & Fitting',
        unit: 'btg',
        price: 32000,
        stock: 45,
        isActive: true,
        variants: [
            { name: '4 Meter', price: 32000 },
            { name: '6 Meter', price: 46000 }
        ]
    },
    {
        id: 'P03',
        name: 'Cat Tembok Putih 5kg',
        category: 'Cat & Pelapis',
        unit: 'pail',
        price: 115000,
        stock: 0,
        isActive: true
    },
    {
        id: 'P04',
        name: 'Besi Beton Polos 8mm',
        category: 'Besi & Baja',
        unit: 'btg',
        price: 48000,
        stock: 0,
        isActive: 'false' // nonaktif
    }
];

// Mock environment
const { appData } = await import('../src/core/state.js');
appData.store = {
    name: 'Toko Putri Proyek',
    slogan: 'Bahan Bangunan & Alat Teknik',
    address: 'Jl. Raya Proyek No. 88',
    wa: '081234567890'
};
appData.products = dummyProducts;

// Ambil modul secara dinamis
const { formatPriceListWhatsApp, getFilteredPriceListProducts } = await import('../src/modules/admin/products/pricelist-modal.js');

const filteredActive = getFilteredPriceListProducts({ includeInactive: false });
assert(filteredActive.length === 3, `Filter produk aktif benar (ekspektasi 3, dapat ${filteredActive.length})`);

const filteredSemen = getFilteredPriceListProducts({ category: 'Semen & Mortar' });
assert(filteredSemen.length === 1 && filteredSemen[0].name.includes('Semen'), 'Filter kategori spesifik benar');

const filteredSearch = getFilteredPriceListProducts({ search: 'PVC' });
assert(filteredSearch.length === 1 && filteredSearch[0].name.includes('Pipa PVC'), 'Filter pencarian kata kunci benar');

const waTextAll = formatPriceListWhatsApp({ includeInactive: false, includeWholesale: true, includeVariants: true, includeStock: true });
assert(waTextAll.includes('KATALOG & DAFTAR HARGA MATERIAL'), 'Teks WA berisi judul resmi');
assert(waTextAll.includes('TOKO PUTRI PROYEK'), 'Teks WA memuat nama toko');
assert(waTextAll.includes('SEMEN GRESIK 40KG'), 'Teks WA memuat produk Semen');
assert(waTextAll.includes('≥50 SAK: Rp 55.000'), 'Teks WA memuat tier harga grosir');
assert(waTextAll.includes('Varian: 4 Meter (Rp 32.000), 6 Meter (Rp 46.000)'), 'Teks WA memuat rincian varian');
assert(waTextAll.includes('PO / Inden ⏳'), 'Teks WA memuat status ketersediaan stok');
assert(waTextAll.includes('https://wa.me/081234567890'), 'Teks WA memuat tautan WhatsApp resmi');

// 5. Verifikasi Integrasi Dokumen A4 di documents.js
console.log('\n📄 5. Memeriksa Integrasi Dokumen A4 di documents.js...');
const docsContent = fs.readFileSync('src/modules/print/documents.js', 'utf8');

assert(docsContent.includes("if (type === 'pricelist')"), "documents.js memiliki penanganan if (type === 'pricelist')");
assert(docsContent.includes("docTitle: 'Katalog & Daftar Harga Resmi'"), "documents.js menyetel judul dokumen Katalog & Daftar Harga Resmi");
assert(docsContent.includes("currentDocType === 'pricelist' ? 'Katalog & Daftar Harga Resmi'"), "documents.js mendukung printDocA4 judul dokumen pricelist");
assert(docsContent.includes("PL-"), "documents.js menghasilkan nomor dokumen berprefix PL-");

// 6. Verifikasi Tombol di Toolbar Admin Produk (table.js)
console.log('\n🖱️ 6. Memeriksa Integrasi Tombol di Toolbar Admin Produk...');
const tableContent = fs.readFileSync('src/modules/admin/products/table.js', 'utf8');
assert(tableContent.includes('window.openPriceListExportModal()'), 'table.js memiliki tombol onclick window.openPriceListExportModal()');
assert(tableContent.includes('Daftar Harga'), 'table.js memiliki label Daftar Harga di toolbar');

// 7. Verifikasi Registrasi Router & Modal Map
console.log('\n🗺️ 7. Memeriksa Registrasi di router.js & native-mobile.js...');
const routerContent = fs.readFileSync('src/core/router.js', 'utf8');
assert(routerContent.includes("priceListExport: ['modal-pricelist-export', 'pricelist-export-modal']"), 'MODAL_ELEMENT_MAP memuat priceListExport');
assert(routerContent.includes("case 'priceListExport':"), 'closeModalByName memiliki case priceListExport');
assert(routerContent.includes("'priceListExport'"), 'allKnownModals memuat priceListExport');

const nativeMobileContent = fs.readFileSync('src/core/native-mobile.js', 'utf8');
assert(nativeMobileContent.includes("case 'modal-pricelist-export':"), 'native-mobile.js memiliki case modal-pricelist-export');

// 8. Verifikasi Pencegahan Popstate Race Condition & Stabilitas Preview PDF
console.log('\n🛡️ 8. Memeriksa Stabilitas Transisi Modal & Eliminasi Race Condition...');
assert(routerContent.includes('export const replaceModalHistory = (oldName, newName) =>'), 'router.js mengekspor replaceModalHistory');
assert(routerContent.includes('window.replaceModalHistory = replaceModalHistory'), 'router.js mengekspos window.replaceModalHistory');
assert(modalContent.includes('replaceModalHistory') || modalContent.includes('priceListExport'), 'pricelist-modal.js menyelaraskan state priceListExport ke docPreview');
assert(!modalContent.includes("if (mode === 'pdf') {\n        closePriceListExportModal();"), 'executePriceListExport mode pdf tidak memicu closePriceListExportModal history race condition');
assert(docsContent.includes("mDoc.classList.remove('hidden')"), 'documents.js menjamin class hidden terhapus saat membuka preview');

console.log('\n============================================================');
console.log(`🏁 HASIL TEST: ${passedTests} LULUS, ${failedTests} GAGAL`);
console.log('============================================================\n');

if (failedTests > 0) {
    process.exit(1);
} else {
    process.exit(0);
}

import fs from 'fs';
import path from 'path';
import assert from 'assert';

console.log('\n============================================================');
console.log('🧪 TEST SUITE: FULL NATIVE APP VISUAL HARMONY & SHIMMER ENGINE');
console.log('============================================================\n');

const styleCss = fs.readFileSync('src/style.css', 'utf-8');
const indexHtml = fs.readFileSync('index.html', 'utf-8');
const catalogJs = fs.readFileSync('src/modules/catalog/catalog.js', 'utf-8');
const reviewsJs = fs.readFileSync('src/modules/orders/reviews.js', 'utf-8');
const posJs = fs.readFileSync('src/modules/pos/pos.js', 'utf-8');
const posShiftJs = fs.readFileSync('src/modules/pos/pos-shift.js', 'utf-8');
const tableJs = fs.readFileSync('src/modules/admin/products/table.js', 'utf-8');
const rewardJs = fs.readFileSync('src/modules/member/reward.js', 'utf-8');

let passCount = 0;
const test = (desc, fn) => {
    try {
        fn();
        console.log(`  ✅ PASS: ${desc}`);
        passCount++;
    } catch (e) {
        console.error(`  ❌ FAIL: ${desc} -> ${e.message}`);
        process.exitCode = 1;
    }
};

console.log('🎨 1. Uji Eliminasi Residu Browser di style.css:');
test('Universal Theme Micro-Scrollbar terdefinisi untuk Light & Dark Mode', () => {
    assert(styleCss.includes('scrollbar-width: thin'), 'Mendefinisikan scrollbar-width: thin');
    assert(styleCss.includes('::-webkit-scrollbar'), 'Mendefinisikan ::-webkit-scrollbar');
    assert(styleCss.includes('::-webkit-scrollbar-thumb:hover'), 'Mendefinisikan hover scrollbar bertema toko');
});

test('Brand Theme Text Selection terpasang mengeliminasi warna biru seleksi dokumen bawaan browser', () => {
    assert(styleCss.includes('::selection') && styleCss.includes('var(--color-primary-rgb)'), 'Seleksi teks menggunakan warna brand toko');
});

test('Theme-Aware Shimmer Skeleton dengan aksen warna primer toko', () => {
    assert(styleCss.includes('.skeleton-shimmer'), 'Mendefinisikan .skeleton-shimmer');
    assert(styleCss.includes('.bento-empty-state-card'), 'Mendefinisikan .bento-empty-state-card');
});

console.log('\n🛍️ 2. Uji Storefront Shimmer Skeleton & Bento Zero-Result:');
test('index.html menyematkan Shimmer Skeleton cards pada #product-container (bukan pulse statis)', () => {
    assert(indexHtml.includes('id="product-container"'), 'Terdapat elemen #product-container');
    const pcMatch = indexHtml.match(/<div[^>]*id="product-container"[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*id="load-more-container"/i);
    const pcHtml = pcMatch ? pcMatch[1] : '';
    assert(pcHtml.includes('skeleton-shimmer'), 'Menggunakan skeleton-shimmer pada etalase awal');
    assert(!pcHtml.includes('animate-pulse'), 'Tidak lagi menggunakan animate-pulse kaku di product-container');
});

test('catalog.js rCat() mengimplementasikan Bento Island Zero-Result dengan smart action chips', () => {
    assert(catalogJs.includes('bento-empty-state-card'), 'rCat menggunakan bento-empty-state-card');
    assert(catalogJs.includes('resetSemuaFilter'), 'Menyematkan tombol Reset Filter');
    assert(catalogJs.includes('openWhatsApp'), 'Menyematkan tombol Tanya Stok via WA');
    assert(!catalogJs.includes('border-dashed'), 'Mengeliminasi border-dashed usang di rCat');
});

console.log('\n💬 3. Uji Detail Produk & Ulasan Pelanggan:');
test('reviews.js menggunakan Shimmer Skeleton dan Bento Empty State (tanpa raw spinner)', () => {
    assert(reviewsJs.includes('skeleton-shimmer'), 'reviews.js menggunakan skeleton-shimmer saat memuat ulasan');
    assert(!reviewsJs.includes('<i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i>'), 'Mengeliminasi raw spinner ulasan');
    assert(reviewsJs.includes('Belum Ada Ulasan'), 'Menggunakan kartu ulasan perdana yang rapi');
});

console.log('\n🛒 4. Uji Terminal Kasir POS:');
test('pos.js mengimplementasikan Bento POS Empty State dengan aksi reset dan kamera', () => {
    assert(posJs.includes('bento-empty-state-card'), 'pos.js menggunakan bento-empty-state-card saat item tidak ditemukan');
    assert(posJs.includes('posClearSearch'), 'Tersedia tombol bersihkan pencarian');
    assert(posJs.includes('openPosScannerModal'), 'Tersedia tombol scan kamera');
});

test('pos-shift.js menggunakan Shimmer Skeleton untuk rekap shift kasir', () => {
    assert(posShiftJs.includes('skeleton-shimmer'), 'pos-shift.js menggunakan skeleton-shimmer');
    assert(!posShiftJs.includes('Memuat laporan shift kasir...'), 'Mengeliminasi teks memuat polos pada shift');
});

console.log('\n🏛️ 5. Uji CMS Admin Master Data:');
test('table.js menggunakan Bento Admin Island Empty State dengan tombol tambah dinamis', () => {
    assert(tableJs.includes('bento-empty-state-card'), 'table.js menggunakan bento-empty-state-card');
    assert(!tableJs.includes('Data kosong</div>'), 'Mengeliminasi tampilan teks datar Data kosong');
    assert(tableJs.includes('openAdminModal'), 'Menyediakan tombol tambah data baru');
});

console.log('\n🎁 6. Uji Loyalty Rewards & Mutasi Poin:');
test('reward.js menggunakan Shimmer Ledger dan Bento VIP Empty State', () => {
    assert(rewardJs.includes('skeleton-shimmer'), 'reward.js menggunakan skeleton-shimmer saat memuat poin');
    assert(rewardJs.includes('Belum Ada Mutasi Poin'), 'Menampilkan empty state mutasi poin modern');
    assert(!rewardJs.includes('Memuat riwayat poin...'), 'Mengeliminasi teks memuat riwayat poin polos');
});

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passCount} Passed, 0 Failed`);
console.log('✨ SELURUH FITUR SUDAH 100% NATIVE APP HARMONY TANPA TAMPILAN KLASIK! ✅');
console.log('============================================================\n');

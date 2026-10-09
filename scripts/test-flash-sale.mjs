/**
 * Test Suite: Flash Sale Engine (Promo Kilat Berbatas Waktu & Kuota)
 * Validasi status sesi, evaluasi harga efektif, pembatasan kuota,
 * rekonsiliasi penjualan multi-channel, dan perlindungan Margin Guard (HPP).
 */

import { appData, cart } from '../src/core/state.js';
import { 
    checkFlashSaleStatus, 
    getActiveFlashSaleSession, 
    getFlashSaleItem, 
    recordFlashSaleSale, 
    getEffP,
    getEffHpp
} from '../src/core/pricing.js';

console.log('\n============================================================');
console.log('⚡ MENJALANKAN TEST SUITE FLASH SALE ENGINE (PROMO KILAT)');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

const assert = (condition, desc) => {
    if (condition) {
        console.log(`  ✅ PASS: ${desc}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${desc}`);
        failed++;
    }
};

const now = Date.now();
const oneHourAgo = new Date(now - 3600 * 1000).toISOString();
const oneHourLater = new Date(now + 3600 * 1000).toISOString();
const twoHoursAgo = new Date(now - 7200 * 1000).toISOString();
const tomorrow = new Date(now + 86400 * 1000).toISOString();

// Setup mock products
appData.products = [
    {
        id: 'PROD-001',
        name: 'Semen Gresik 40kg',
        price: 65000,
        hpp: 54000,
        stock: 50,
        wholesale: [
            { minQty: 10, price: 62000 }
        ]
    },
    {
        id: 'PROD-002',
        name: 'Cat Tembok Catylac 5kg',
        price: 135000,
        hpp: 110000,
        stock: 20,
        variants: [
            { name: 'Putih Salju', price: 135000, hpp: 110000, stock: 10 },
            { name: 'Abu Modern', price: 140000, hpp: 115000, stock: 10 }
        ]
    },
    {
        id: 'PROD-003',
        name: 'Paku Kayu 5cm (kg)',
        price: 22000,
        hpp: 17000,
        stock: 100
    }
];

// ─── 1. UJI STATUS SESI FLASH SALE ─────────────────────────
console.log('⏱️ 1. Uji Status Sesi Flash Sale:');

const upcomingSession = {
    id: 'FS-UPCOMING',
    title: 'Flash Sale Malam Nanti',
    startTime: oneHourLater,
    endTime: tomorrow,
    isActive: true
};
assert(checkFlashSaleStatus(upcomingSession) === 'upcoming', 'Sesi di masa mendatang terdeteksi "upcoming"');

const activeSession = {
    id: 'FS-ACTIVE',
    title: 'Flash Sale Siang Hari',
    startTime: oneHourAgo,
    endTime: oneHourLater,
    isActive: true
};
assert(checkFlashSaleStatus(activeSession) === 'active', 'Sesi dalam rentang waktu terdeteksi "active"');

const endedSession = {
    id: 'FS-ENDED',
    title: 'Flash Sale Kemarin',
    startTime: twoHoursAgo,
    endTime: oneHourAgo,
    isActive: true
};
assert(checkFlashSaleStatus(endedSession) === 'ended', 'Sesi yang telah lewat waktu terdeteksi "ended"');

const disabledSession = {
    id: 'FS-DISABLED',
    title: 'Flash Sale Nonaktif',
    startTime: oneHourAgo,
    endTime: oneHourLater,
    isActive: false
};
assert(checkFlashSaleStatus(disabledSession) === 'ended', 'Sesi dengan isActive=false terdeteksi "ended"');


// ─── 2. UJI FILTER SESI BERDASARKAN KANAL (CHANNEL) ────────
console.log('\n🌐 2. Uji Filter Sesi Multi-Channel:');

appData.flashSales = [
    {
        id: 'FS-WEB-ONLY',
        title: 'Promo Kilat Website',
        startTime: oneHourAgo,
        endTime: oneHourLater,
        channel: 'web',
        isActive: true,
        items: []
    }
];
assert(getActiveFlashSaleSession('web')?.id === 'FS-WEB-ONLY', 'Kanal web menemukan sesi khusus web');
assert(getActiveFlashSaleSession('pos') === null, 'Kanal pos mengabaikan sesi khusus web');

appData.flashSales = [
    {
        id: 'FS-OMNICHANNEL',
        title: 'Promo Kilat Toko & Web',
        startTime: oneHourAgo,
        endTime: oneHourLater,
        channel: 'both',
        isActive: true,
        items: []
    }
];
assert(getActiveFlashSaleSession('web')?.id === 'FS-OMNICHANNEL', 'Kanal web menemukan sesi multichannel (both)');
assert(getActiveFlashSaleSession('pos')?.id === 'FS-OMNICHANNEL', 'Kanal pos menemukan sesi multichannel (both)');


// ─── 3. UJI DETEKSI ITEM FLASH SALE & PERHITUNGAN KUOTA ─────
console.log('\n📦 3. Uji Deteksi Item & Perhitungan Kuota:');

const fsItemMock = {
    productId: 'PROD-001',
    normalPrice: 65000,
    flashSalePrice: 49000,
    quota: 10,
    soldCount: 3,
    discountPercent: 25
};

const fsVariantMock = {
    productId: 'PROD-002',
    variantName: 'Putih Salju',
    normalPrice: 135000,
    flashSalePrice: 119000,
    quota: 5,
    soldCount: 5,
    discountPercent: 12
};

appData.flashSales[0].items = [fsItemMock, fsVariantMock];

const foundItem = getFlashSaleItem('PROD-001', null, 'web');
assert(foundItem !== null, 'Item Flash Sale PROD-001 berhasil ditemukan');
assert(foundItem.flashSalePrice === 49000, `Harga Flash Sale Rp 49.000 (didapat: ${foundItem.flashSalePrice})`);
assert(foundItem.remainingQuota === 7, `Sisa kuota terhitung 7 unit (didapat: ${foundItem.remainingQuota})`);
assert(foundItem.isSoldOut === false, 'Status isSoldOut bernilai false karena kuota masih ada');
assert(foundItem.discountPercent === 25, `Persentase diskon terhitung 25% (didapat: ${foundItem.discountPercent}%)`);

const foundVariant = getFlashSaleItem('PROD-002', 'Putih Salju', 'web');
assert(foundVariant !== null, 'Varian Putih Salju terdaftar dalam Flash Sale');
assert(foundVariant.isSoldOut === true, 'Varian terdeteksi habis kuota (isSoldOut: true) karena soldCount >= quota');
assert(foundVariant.remainingQuota === 0, 'Sisa kuota varian adalah 0');


// ─── 4. UJI EVALUASI HARGA EFEKTIF (getEffP) ─────────────────
console.log('\n💰 4. Uji Evaluasi Harga Efektif (getEffP Prioritas):');

// A. Produk dengan Flash Sale aktif & kuota tersedia
const effPriceFS = getEffP({ id: 'PROD-001' }, 'web');
assert(effPriceFS === 49000, `Harga efektif PROD-001 adalah harga Flash Sale Rp 49.000 (didapat: ${effPriceFS})`);

// B. Produk dengan kuota habis -> kembali ke harga reguler
const effPriceSoldOut = getEffP({ id: 'PROD-002', variantName: 'Putih Salju' }, 'web');
assert(effPriceSoldOut === 135000, `Harga varian yang habis kuota Flash Sale kembali ke harga reguler Rp 135.000 (didapat: ${effPriceSoldOut})`);

// C. Produk tanpa Flash Sale tapi memenuhi syarat grosir
cart.length = 0; // reset cart
cart.push({ id: 'PROD-001', qty: 15 }); // masuk kategori grosir (min 10)
// Sementara ubah kuota PROD-001 jadi habis untuk menguji fallback grosir
fsItemMock.soldCount = 10;
const effPriceWholesale = getEffP({ id: 'PROD-001' }, 'web');
assert(effPriceWholesale === 62000, `Setelah Flash Sale habis, harga otomatis jatuh ke harga grosir Rp 62.000 (didapat: ${effPriceWholesale})`);
fsItemMock.soldCount = 3; // kembalikan soldCount
cart.length = 0;


// ─── 5. UJI PENCATATAN PENJUALAN (recordFlashSaleSale) ──────
console.log('\n📝 5. Uji Pencatatan Penjualan Flash Sale (recordFlashSaleSale):');

const initialSold = fsItemMock.soldCount; // 3
const recordSuccess = recordFlashSaleSale('PROD-001', null, 2);
assert(recordSuccess === true, 'Pencatatan penjualan Flash Sale mengembalikan true');
assert(fsItemMock.soldCount === initialSold + 2, `soldCount bertambah 2 unit (${initialSold} -> ${fsItemMock.soldCount})`);

// Beli lagi hingga memenuhi kuota
recordFlashSaleSale('PROD-001', null, 5); // total sold = 3 + 2 + 5 = 10
assert(fsItemMock.soldCount === 10, `soldCount kini mencapai batas kuota 10 (didapat: ${fsItemMock.soldCount})`);
const updatedItem = getFlashSaleItem('PROD-001', null, 'web');
assert(updatedItem.isSoldOut === true, 'Status item kini otomatis menjadi isSoldOut = true setelah penjualan dicatat');
assert(getEffP({ id: 'PROD-001' }, 'web') === 65000, 'Harga efektif kembali ke normal Rp 65.000 setelah kuota ludes terjual');


// ─── 6. UJI PROTEKSI MARGIN GUARD (HPP MODAL) ───────────────
console.log('\n🛡️ 6. Uji Proteksi Margin Guard (HPP):');

const checkMarginGuard = (flashPrice, hpp) => {
    const fPrice = parseFloat(flashPrice) || 0;
    const hPrice = parseFloat(hpp) || 0;
    const isBelowHpp = hPrice > 0 && fPrice < hPrice;
    const profit = fPrice - hPrice;
    const marginPercent = fPrice > 0 ? ((profit / fPrice) * 100).toFixed(1) : 0;
    return { isBelowHpp, profit, marginPercent };
};

const hppSemen = getEffHpp({ id: 'PROD-001' }); // 54000
const guardNormal = checkMarginGuard(59000, hppSemen);
assert(guardNormal.isBelowHpp === false, 'Harga Flash Sale Rp 59.000 di atas HPP Rp 54.000 tidak terdeteksi jual rugi');
assert(parseFloat(guardNormal.profit) === 5000, `Keuntungan kotor Rp 5.000 per sak terhitung akurat (didapat: ${guardNormal.profit})`);

const guardDanger = checkMarginGuard(48000, hppSemen);
assert(guardDanger.isBelowHpp === true, 'Harga Flash Sale Rp 48.000 di bawah HPP Rp 54.000 terdeteksi jual rugi (isBelowHpp = true)');
assert(parseFloat(guardDanger.profit) === -6000, `Potensi kerugian -Rp 6.000 terdeteksi presisi (didapat: ${guardDanger.profit})`);


console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('⚡ ENGINE FLASH SALE (PROMO KILAT) 100% TERVERIFIKASI VALID! ✅\n');
    process.exit(0);
} else {
    process.exit(1);
}

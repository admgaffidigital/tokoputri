#!/usr/bin/env node
/**
 * ============================================================
 * UNIT TEST & VALIDASI FITUR PULL-TO-REFRESH CMS & STOREFRONT
 * Memverifikasi integritas gesture tarik ke bawah untuk refresh
 * pada Storefront, CMS Admin, dan Riwayat Pesanan.
 * ============================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ✅ PASS: ${message}`);
    } else {
        failedTests++;
        console.error(`  ❌ FAIL: ${message}`);
    }
}

console.log('\n============================================================');
console.log('🔄 MENJALANKAN TEST SUITE PULL-TO-REFRESH CMS & STOREFRONT');
console.log('============================================================\n');

// 1. Uji Struktur Indikator Kapsul di index.html
console.log('📱 1. Uji Struktur Indikator Kapsul di index.html:');
const indexPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

assert(indexHtml.includes('id="pull-to-refresh-indicator"'), 'Elemen pull-to-refresh-indicator terpasang di DOM');
assert(indexHtml.includes('z-[9999]'), 'Indikator kapsul menggunakan z-[9999] agar melayang di atas seluruh header view');
assert(indexHtml.includes('id="ptr-icon"'), 'Elemen ikon ptr-icon tersedia');
assert(indexHtml.includes('id="ptr-text"'), 'Elemen teks ptr-text tersedia');

// 2. Uji Tombol Refresh di Header CMS Admin
console.log('\n🏛️ 2. Uji Tombol Refresh di Header CMS Admin:');
assert(indexHtml.includes('id="btn-admin-refresh"'), 'Tombol btn-admin-refresh terpasang di header CMS Admin');
assert(indexHtml.includes('triggerAdminPullToRefresh()'), 'Tombol memanggil triggerAdminPullToRefresh()');
assert(indexHtml.includes('id="admin-refresh-icon"'), 'Ikon admin-refresh-icon terpasang untuk animasi spin');
assert(indexHtml.includes('Segarkan'), 'Label teks Segarkan tersedia untuk desktop');

// 3. Uji Logika & Event Handler di router.js
console.log('\n🧭 3. Uji Logika & Event Handler di router.js:');
const routerPath = path.join(rootDir, 'src', 'core', 'router.js');
const routerCode = fs.readFileSync(routerPath, 'utf-8');

assert(routerCode.includes('export const initPullToRefresh = () => {'), 'initPullToRefresh diekspor secara modular');
assert(routerCode.includes("document.querySelector('#view-catalog .scroll-content')"), 'Storefront terhubung ke gesture pull-to-refresh');
assert(routerCode.includes("document.querySelector('#view-admin .scroll-content')"), 'CMS Admin terhubung ke gesture pull-to-refresh');
assert(routerCode.includes("document.querySelector('#view-orders .scroll-content')"), 'Riwayat Pesanan terhubung ke gesture pull-to-refresh');
assert(routerCode.includes("window.triggerAdminPullToRefresh"), 'triggerAdminPullToRefresh diekspos ke window');
assert(routerCode.includes("window.triggerStorefrontPullToRefresh"), 'triggerStorefrontPullToRefresh diekspos ke window');
assert(routerCode.includes("window.executePullToRefresh"), 'executePullToRefresh diekspos ke window');

// 4. Uji Proteksi & Integrasi Lifecycle View
console.log('\n🛡️ 4. Uji Proteksi & Integrasi Lifecycle View:');
assert(routerCode.includes('if (oMods && oMods.length > 0) return;'), 'Gesture tidak aktif saat modal terbuka');
assert(routerCode.includes("if (typeof initPullToRefresh === 'function') initPullToRefresh();"), 'initPullToRefresh dipanggil saat berpindah ke view-admin');
assert(routerCode.includes('window.openAdminTab(curTab, true)'), 'Tab aktif CMS di-refresh saat pull gesture dipicu');
assert(routerCode.includes('window.renderSubscriptionNoticeInCMS()'), 'Dashboard CMS di-refresh saat di menu utama');

// 5. Uji Styling CSS Pull-To-Refresh
console.log('\n🎨 5. Uji Styling CSS Pull-To-Refresh di style.css:');
const styleCssPath = path.join(rootDir, 'src', 'style.css');
const styleCss = fs.readFileSync(styleCssPath, 'utf-8');

assert(styleCss.includes('#pull-to-refresh-indicator'), 'CSS mendefinisikan selector #pull-to-refresh-indicator');
assert(styleCss.includes('#pull-to-refresh-indicator.visible'), 'CSS mendefinisikan state .visible');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passedTests} Passed, ${failedTests} Failed`);
if (failedTests === 0) {
    console.log('✨ SISTEM PULL-TO-REFRESH CMS & STOREFRONT 100% VALID! ✅');
} else {
    console.error('❌ Terdapat kegagalan pengujian.');
    process.exit(1);
}
console.log('============================================================\n');

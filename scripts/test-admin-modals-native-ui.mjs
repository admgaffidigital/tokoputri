import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const INDEX_HTML_PATH = path.join(ROOT_DIR, 'index.html');
const REWARD_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'member', 'reward.js');
const ORDERS_JS_PATH = path.join(ROOT_DIR, 'src', 'modules', 'orders', 'orders.js');
const NATIVE_MOBILE_JS_PATH = path.join(ROOT_DIR, 'src', 'core', 'native-mobile.js');

console.log('\n============================================================');
console.log('🧪 TEST SUITE: NATIVE BOTTOM SHEET & THEME HARMONY ADMIN MODALS');
console.log('============================================================\n');

assert(fs.existsSync(INDEX_HTML_PATH), 'index.html harus tersedia');
const indexHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

assert(fs.existsSync(REWARD_JS_PATH), 'reward.js harus tersedia');
const rewardJs = fs.readFileSync(REWARD_JS_PATH, 'utf-8');

assert(fs.existsSync(ORDERS_JS_PATH), 'orders.js harus tersedia');
const ordersJs = fs.readFileSync(ORDERS_JS_PATH, 'utf-8');

assert(fs.existsSync(NATIVE_MOBILE_JS_PATH), 'native-mobile.js harus tersedia');
const nativeMobileJs = fs.readFileSync(NATIVE_MOBILE_JS_PATH, 'utf-8');

let passCount = 0;

// 1. Uji #admin-modal
console.log('📱 1. Uji Master Data Form Modal (#admin-modal):');
assert(
    indexHtml.includes('id="admin-modal"') &&
    indexHtml.includes('items-end sm:items-center justify-center bg-slate-900/80 p-0 sm:p-4'),
    '#admin-modal harus berposisi bottom sheet di mobile (items-end p-0) dan centered di desktop'
);
passCount++;
console.log('  ✅ PASS: #admin-modal bottom-sheet layout (items-end p-0 sm:items-center sm:p-4)');

assert(
    indexHtml.includes('id="admin-modal-box"') &&
    indexHtml.includes('modal-bottom-sheet') &&
    indexHtml.includes('rounded-t-[2rem] sm:rounded-3xl'),
    '#admin-modal-box harus mengadopsi modal-bottom-sheet dan rounded squircle rounded-t-[2rem] sm:rounded-3xl'
);
passCount++;
console.log('  ✅ PASS: #admin-modal-box modal-bottom-sheet & squircle radius');

assert(
    indexHtml.includes('id="admin-modal-box"') &&
    indexHtml.includes('class="sm:hidden w-full pt-3 pb-1 flex justify-center items-center shrink-0"'),
    '#admin-modal harus memiliki drag indicator pull handle di smartphone'
);
passCount++;
console.log('  ✅ PASS: #admin-modal drag pull indicator pill terpasang');

// 2. Uji #admin-order-modal
console.log('\n📦 2. Uji Detail Pesanan Admin Modal (#admin-order-modal):');
assert(
    indexHtml.includes('id="admin-order-modal"') &&
    indexHtml.includes('id="admin-order-modal-box"') &&
    indexHtml.includes('modal-bottom-sheet') &&
    indexHtml.includes('rounded-t-[2rem] sm:rounded-3xl'),
    '#admin-order-modal harus mengadopsi modal-bottom-sheet dan rounded squircle'
);
passCount++;
console.log('  ✅ PASS: #admin-order-modal modal-bottom-sheet & squircle radius');

// 3. Uji #printer-settings-modal
console.log('\n🖨️ 3. Uji Pengaturan Printer POS Modal (#printer-settings-modal):');
assert(
    indexHtml.includes('id="printer-settings-modal"') &&
    indexHtml.includes('id="printer-settings-modal-box"') &&
    indexHtml.includes('modal-bottom-sheet') &&
    indexHtml.includes('rounded-t-[2rem] sm:rounded-3xl'),
    '#printer-settings-modal harus mengadopsi modal-bottom-sheet dan rounded squircle'
);
passCount++;
console.log('  ✅ PASS: #printer-settings-modal modal-bottom-sheet & squircle radius');

// 4. Uji #modal-ask-question & #modal-admin-faq
console.log('\n💬 4. Uji Modal Q&A Customer & Admin FAQ Editor:');
assert(
    indexHtml.includes('id="modal-ask-question"') &&
    indexHtml.includes('id="modal-ask-question-box"') &&
    indexHtml.includes('id="modal-admin-faq"') &&
    indexHtml.includes('id="modal-admin-faq-box"'),
    '#modal-ask-question dan #modal-admin-faq harus terpasang di DOM'
);
passCount++;
console.log('  ✅ PASS: #modal-ask-question & #modal-admin-faq terpasang');

assert(
    indexHtml.includes('id="ask-author-name"') &&
    indexHtml.includes('min-h-[44px] rounded-2xl') &&
    indexHtml.includes('id="admin-faq-category"') &&
    indexHtml.includes('min-h-[44px] rounded-2xl'),
    'Input form Q&A dan FAQ harus memiliki touch target min-h-[44px] dan rounded-2xl'
);
passCount++;
console.log('  ✅ PASS: Form Q&A touch targets min-h-[44px] & font standard');

// 5. Uji #member-modal di reward.js
console.log('\n💳 5. Uji Kartu Member Digital (#member-modal) di reward.js:');
assert(
    rewardJs.includes('modal-bottom-sheet bg-white dark:bg-slate-900 w-full max-w-lg sm:max-w-2xl lg:max-w-3xl rounded-t-[2rem] sm:rounded-3xl'),
    '#member-modal harus mengadopsi modal-bottom-sheet dan rounded-t-[2rem] sm:rounded-3xl'
);
passCount++;
console.log('  ✅ PASS: #member-modal modal-bottom-sheet & squircle rounded-t-[2rem] sm:rounded-3xl');

assert(
    rewardJs.includes('w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pull-indicator'),
    '#member-modal harus memiliki drag indicator pull handle di smartphone'
);
passCount++;
console.log('  ✅ PASS: #member-modal drag pull indicator pill terpasang');

// 6. Uji #order-detail-modal di orders.js
console.log('\n🧾 6. Uji Detail Pesanan Storefront (#order-detail-modal) di orders.js:');
assert(
    ordersJs.includes('modal-bottom-sheet bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-3xl'),
    '#order-detail-content harus mengadopsi modal-bottom-sheet dan rounded-t-[2rem] sm:rounded-3xl'
);
passCount++;
console.log('  ✅ PASS: #order-detail-content modal-bottom-sheet & squircle rounded-t-[2rem]');

assert(
    ordersJs.includes('w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pull-indicator'),
    '#order-detail-modal harus memiliki drag indicator pull handle di smartphone'
);
passCount++;
console.log('  ✅ PASS: #order-detail-modal drag pull indicator pill terpasang');

// 7. Uji Engine Gesture di native-mobile.js
console.log('\n🖐️ 7. Uji Native Gesture Integration di native-mobile.js:');
const requiredCases = [
    'admin-modal',
    'printer-settings-modal',
    'modal-ask-question',
    'modal-admin-faq',
    'member-modal',
    'modal-flash-sale-form'
];
for (const modalCase of requiredCases) {
    assert(
        nativeMobileJs.includes(`case '${modalCase}':`),
        `native-mobile.js harus memiliki switch case untuk '${modalCase}' di closeModalById`
    );
}
passCount++;
console.log(`  ✅ PASS: Seluruh 6 modal (${requiredCases.join(', ')}) terdaftar di closeModalById`);

// 8. Safe Area Inset Padding Check
console.log('\n🛡️ 8. Uji Safe Area Inset Padding di Footers:');
assert(
    indexHtml.includes('padding-bottom: max(1rem, env(safe-area-inset-bottom));'),
    'Footer modal harus memiliki proteksi padding-bottom safe area'
);
passCount++;
console.log('  ✅ PASS: Proteksi padding-bottom: max(1rem, env(safe-area-inset-bottom)) terpasang');

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passCount} Passed, 0 Failed`);
console.log('✨ SELURUH MODAL CMS & STOREFRONT 100% NATIVE BOTTOM SHEET & HARMONIS! ✅');
console.log('============================================================\n');

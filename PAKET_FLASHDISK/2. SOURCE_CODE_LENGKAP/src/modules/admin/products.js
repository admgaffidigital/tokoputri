/**
 * ============================================================
 * MODUL ADMIN: PRODUK & MANAJEMEN CRUD (INVENTORY)
 * Mengatur pengelolaan produk, variasi warna/ukuran, harga grosir,
 * spesifikasi, manajemen stok restock cepat, ubah harga massal,
 * scanner barcode kamera HTML5-QRCode, dan penghapusan item.
 * ============================================================
 */

import { 
    appData 
} from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, getV, esc, fixD, fCur, 
    showToast, showConfirm, sLoad, hLoad, ensureScriptLoaded 
} from '../../core/utils.js';
import { computeInventoryStats } from './auth.js';
import { aF } from './schema.js';

let isSaving = false;
let cTab = 'products';
let aSq = '';
let eId = null;
let tVars = [];
let tWhol = [];
let tSpec = [];

window.rAdmL = t => {
    // FITUR BARU: laporan produk/varian/aset khusus ditaruh di sini (tab Produk saja),
    // tepat di atas kolom cari -- lebih relevan di tempat pengelolaan produknya langsung.
    const statsContainer = t === 'products' ? `<div id="admin-product-stats" class="mb-5"></div>` : '';
    // FITUR BARU: tombol khusus untuk tab Database Warna
    const colorActions = t === 'colors' ? `
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-900/30 dark:border-emerald-800 font-bold text-[11px] uppercase tracking-widest hover:bg-emerald-100 transition-all active:scale-95 shadow-sm"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>` : '';
    setH('admin-content', `
        <div class="max-w-5xl mx-auto">
        ${statsContainer}
        <div class="mb-6">
            ${colorActions}
            <div class="flex gap-2 items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="aSq=this.value.toLowerCase();rAdmItms('${t}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl primary-bg font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `);
    rAdmItms(t);
};

window.rAdmItms = t => {
    // FIX: simpan posisi scroll SEBELUM daftar dirender ulang, lalu kembalikan setelahnya.
    // Sebelumnya, tiap kali ada update (restock, realtime sync, dst), daftar di-render ulang
    // dan scroll otomatis lompat ke atas -- membuat produk yang baru saja diubah terasa
    // "hilang" dari layar padahal cuma tertutup scroll-reset, bukan hilang sungguhan.
    const listContainerForScroll = el('admin-list-container');
    const scrollParent = listContainerForScroll ? listContainerForScroll.closest('.scroll-content') : null;
    const savedScrollTop = scrollParent ? scrollParent.scrollTop : 0;

    // FITUR BARU: render ulang laporan produk/varian/aset tiap kali daftar produk disegarkan
    // (restock, edit, realtime sync, dst) -- HANYA update kontainernya sendiri, TIDAK
    // menyentuh riwayat modal/back-button sama sekali, jadi tombol back tetap aman.
    if (t === 'products' && el('admin-product-stats')) {
        const st = computeInventoryStats();
        setH('admin-product-stats', `
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-box mr-1"></i>Produk Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeProd}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-layer-group mr-1"></i>Varian Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeVar}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kosong / Nonaktif</p>
                    <p class="text-lg sm:text-xl font-bold text-amber-500">${st.inactiveProd + st.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${st.inactiveProd} produk, ${st.inactiveVar} varian</p>
                </div>
                <div class="card-modern p-5 sm:p-5 bg-slate-50 dark:bg-slate-800/40">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-warehouse mr-1"></i>Total Aset Gudang</p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetJual)}</b></p>
                </div>
            </div>
        `);
    }

    let rawList = [...(appData[t]||[])]; rawList.sort((a,b) => (b.id||0)-(a.id||0));
    let i = rawList.filter(x => {
        let m = (x.name||x.title||x.bankName||x.code||x.sku||x.phone||'').toLowerCase().includes(aSq);
        if(t==='products' && !m && x.variants) { m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(aSq)); }
        return m;
    });
    
    if(!i.length){ return setH('admin-list-container', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>`); }
    
    setH('admin-list-container', i.map(x => {
        let isP = t==='products', isOff = isP && (x.isActive==='false'||x.isActive===false);
        let bC = isOff ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800';
        let tC = isOff ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100';
        
        let img = x.img 
            ? `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${isOff?'grayscale opacity-50':''}"></div>`
            : `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>`;
        
        let tglBtn = isP ? (isOff 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`
            : `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`
        ) : '';
        
        let dupBtn = isP 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct(${x.id})" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>` 
            : '';

        // FIX #1: cek useStock dengan cara yang konsisten (sama dengan logika di seluruh codebase)
        const useStockEnabled = appData.store.useStock === true || appData.store.useStock === 'true';
        let restockBtn = (isP && useStockEnabled) 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal(${x.id})" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`
            : '';

        // FITUR BARU: tombol Edit Cepat Harga (HPP, harga jual, harga coret, grosir, varian)
        let qPriceBtn = isP
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal(${x.id})" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`
            : '';

        let editBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${t}',${x.id})" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`;
        
        let delBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${t}',${x.id})" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;

        return `
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${bC}" onclick="oAEd('${t}',${x.id})">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${img}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${tC} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${esc(x.name||x.title||x.bankName||x.code||'Item')}</p>
                    ${isP ? `<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${fCur(x.price)}</p>` : ''}
                    ${isP && window.isAdm && useStockEnabled ? `<p class="text-[10px] font-bold mt-1 ${(x.variants&&x.variants.length?x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0):parseFloat(x.stock)||0) === 0 ? 'text-rose-500 animate-pulse' : 'text-blue-500'}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${x.variants&&x.variants.length ? x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0).toFixed(2).replace(/\.?0+$/,'') : (parseFloat(x.stock)||0)}</p>` : ''}
                    ${isP && window.isAdm && x.hpp ? `<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${fCur(x.hpp)}</p>` : ''}
                    ${isP ? (() => {
                        const sold = x.variants && x.variants.length ? x.variants.reduce((s,vv)=>s+(parseFloat(vv.totalSold)||0),0) : (parseFloat(x.totalSold)||0);
                        return sold > 0 ? `<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${sold}</p>` : '';
                    })() : ''}
                    ${t==='colors' ? `<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${esc(x.hex||'transparent')}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${esc(x.catalog||'Tanpa Katalog')}</p></div>` : ''}
                    ${t==='customers' ? `<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${esc(x.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.points)||0)} Poin</p>` : ''}
                    ${t==='rewards' ? `<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.pointsCost)||0)} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(x.stock)||0}</p>` : ''}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${tglBtn}
                ${restockBtn}
                ${qPriceBtn}
                ${dupBtn}
                ${editBtn}
                ${delBtn}
            </div>
        </div>`;
    }).join(''));

    // FIX: kembalikan posisi scroll seperti semula (lihat catatan di awal fungsi)
    if (scrollParent) requestAnimationFrame(() => { scrollParent.scrollTop = savedScrollTop; });
};

// =====================================================================
// PANEL ADMIN -- MODERASI ULASAN PELANGGAN
// Note: Logika moderasi ulasan admin (filterReviews, rAdmReviews, replyToReview, toggleReviewVisibility, deleteReview)
// telah dipindahkan ke modul: src/modules/admin/reviews.js
const rAdmReviews = () => window.rAdmReviews();

// =====================================================================
// MENU PAJAK & KEUANGAN (ADMIN)
// Note: Logika keuangan & pajak admin (fetchTaxPeriodData, getTaxPeriodTotals, getTaxPeriodExpenses, rTaxPanel, rTaxRenderShell, switchTaxTab, changeTaxYear, changeTaxMonth, rTaxSubContent, rTaxSummary, rTaxIncome, saveMonthlyExpense, rTaxBalance, saveBalanceField, rTaxSettingsPanel, toggleCustomTaxRateInput, saveTaxSettingsPanel, openTaxDocPreview)
// telah dipindahkan ke modul: src/modules/admin/finance.js
const rTaxPanel = () => window.rTaxPanel();

window.oAAdd = () => { oAEd(cTab, null); };
window.oAEd = (t, id) => {
    eId = id; let d = id ? appData[t].find(x=>x.id===id) : null;
    setIn('admin-modal-title', id ? 'Edit Data' : 'Tambah Data');
    let f = aF[t]||[], h = '';
    
    if(t==='products'){
        tVars = d&&d.variants ? JSON.parse(JSON.stringify(d.variants)) : [];
        tWhol = d&&d.wholesale ? JSON.parse(JSON.stringify(d.wholesale)) : [];
        tSpec = d&&d.specTable ? JSON.parse(JSON.stringify(d.specTable)) : [];
    }
    
    // REDESIGN: Kelompokkan field produk dalam grid 2-kolom di lg
    const FULL_WIDTH_TYPES = ['textarea','richtext','variants_builder','wholesale_builder','spec_table_builder'];
    const FULL_WIDTH_KEYS  = ['img','desc','name','isActive','tag','poTime','video'];
    const isFullWidth = k => FULL_WIDTH_TYPES.includes(k.type) || FULL_WIDTH_KEYS.includes(k.key);

    f.forEach(k => {
        let v = d ? (k.type === 'number' && d[k.key] !== undefined ? d[k.key] : (d[k.key]||'')) : '';
        const spanClass = isFullWidth(k) ? 'lg:col-span-2' : '';
        h += `<div class="flex flex-col gap-1.5 ${spanClass}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${k.label}</label>`;
        if(k.type === 'textarea') {
            h += `<textarea autocomplete='off' id="af-${k.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${esc(v)}</textarea>`;
        } else if(k.type === 'select') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`;
            k.options.forEach(o => { h += `<option value="${o.val}" ${v==o.val||(v==='true'&&o.val==='true')||(v==='false'&&o.val==='false')?'selected':''} class="font-bold">${o.text}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_category') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`;
            appData.categories.forEach(c => { h += `<option value="${esc(c.name)}" ${v===c.name?'selected':''} class="font-bold">${esc(c.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_brand') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`;
            (appData.brands||[]).forEach(c => { h += `<option value="${esc(c.name)}" ${v===c.name?'selected':''} class="font-bold">${esc(c.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_products') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold text-emerald-600">-- Semua Produk (Tanpa Batasan) --</option>`;
            (appData.products||[]).forEach(p => { h += `<option value="${p.id}" ${v==p.id?'selected':''} class="font-bold">${esc(p.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'variants_builder') {
            h += `<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.type === 'wholesale_builder') {
            h += `<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.type === 'spec_table_builder') {
            h += `<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.key === 'sku') {
            h += `<div class="relative flex items-center"><input autocomplete='off' type="${k.type}" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ></i><button type="button" onclick="openCameraScanner('af-${k.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-emerald-500 rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;
        } else if(k.key === 'img') {
            h += `<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ></i><label class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></i></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></i></label></div>`;
        } else if(k.key === 'videoUrl') {
            // FITUR BARU: tombol upload video ke Google Drive via GAS
            h += `<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-violet-100 transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${k.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-violet-400"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play & loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${v ? `<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${esc(fixDriveVideo(v))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>` : ''}
            </div>`;
        } else if(k.type === 'richtext') {
            h += `
            <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                <div class="bg-slate-100 dark:bg-slate-800 p-2 border-b border-slate-200 dark:border-slate-700 flex gap-1 flex-wrap items-center">
                    <button type="button" onclick="document.execCommand('bold',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors" title="Cetak Tebal">B</button>
                    <button type="button" onclick="document.execCommand('insertOrderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Angka"><i class="fa-solid fa-list-ol"></i></button>
                    <button type="button" onclick="document.execCommand('insertUnorderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Titik"><i class="fa-solid fa-list-ul"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button type="button" onclick="document.execCommand('justifyLeft',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kiri"><i class="fa-solid fa-align-left"></i></button>
                    <button type="button" onclick="document.execCommand('justifyCenter',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Tengah"><i class="fa-solid fa-align-center"></i></button>
                    <button type="button" onclick="document.execCommand('justifyRight',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kanan"><i class="fa-solid fa-align-right"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <label class="w-8 h-8 rounded hover:bg-emerald-100 dark:hover:bg-emerald-900/30 flex items-center justify-center cursor-pointer text-emerald-600 transition-colors" title="Upload & Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${k.key}-editor')" ></i>
                    </label>
                </div>
                <div id="af-${k.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${v}
                </div>
            </div>`;
        } else {
            h += `<input autocomplete='off' type="${k.type}" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 transition-all" 
    ${k.key==='price'?'min="0" step="1" placeholder="0"':''} 
    ${k.key==='priceNormal'?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':''} 
    ${k.key==='hpp'?'min="0" step="1" placeholder="0"':''} 
    ${k.key==='stock'?'min="0" step="0.01" placeholder="0"':''}
></i>`;
        }
        h += `</div>`;
    });
    // REDESIGN: bungkus semua field dalam grid 2-kolom responsive
    h = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${h}</div>`;
    
    setH('admin-modal-form', h);
    if(t==='products') { rVarsB(); rWholB(); rSpecB(); }
    
    const mAd = el('admin-modal');
    if (mAd && mAd.classList.contains('hidden')) pushModalHistory('admin');
    show('admin-modal');
    setTimeout(() => { el('admin-modal').classList.remove('opacity-0'); el('admin-modal-box').classList.remove('scale-95'); }, 10);
};

window.rVarsB = () => {
    const catEl = document.getElementById('af-category');
    const isCatCategory = catEl ? /\bcat\b/i.test(catEl.value) : false;
    let h = `<div class="space-y-5 mb-5">${tVars.map((v,i) => {
        let isAct = v.isActive !== false && v.isActive !== 'false';
        return `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            
            <!-- Header varian: nomor + tombol hapus selalu terlihat -->
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl primary-bg text-[11px] font-bold flex items-center justify-center shadow-sm">${i+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${v.name || 'Varian Baru'}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${i})" class="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${i})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Varian (Warna/Ukuran)</label>
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.name)}" onchange="uVar(${i},'name',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.unit||'')}" onchange="uVar(${i},'unit',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.price}" onchange="uVar(${i},'price',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.priceNormal||''}" onchange="uVar(${i},'priceNormal',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${v.colorCode || '#ffffff'}" 
                                onchange="uVar(${i},'colorCode',this.value); document.getElementById('var-hex-${i}').value = this.value;" 
                                title="Klik untuk pilih warna"></i>
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${i}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${esc(v.colorCode||'')}" onchange="uVar(${i},'colorCode',this.value)"></i>
                        </div>
                        ${v.colorCode ? `<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${esc(v.colorCode)}"></div>` : ''}
                    </div>
                </div>
                
                ${!isCatCategory ? `
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${v.img ? `<img src="${esc(v.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">` : ''}
                        <input autocomplete='off' id="var-img-${i}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.img||'')}" onchange="uVar(${i},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${i}')"></label>
                        <label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${i}')"></label>
                    </div>
                </div>
                ` : ''}

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${i}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${esc(v.sku||'')}" onchange="uVar(${i},'sku',this.value)"></i>
                        <button type="button" onclick="openCameraScanner('var-sku-${i}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="tVars[${i}].isActive = ${!isAct}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${isAct ? 'primary-bg border-[var(--color-primary-dark)] shadow-md' : 'bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800'}">
                        ${isAct ? '<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA' : '<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.hpp||0}" onchange="uVar(${i},'hpp',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.stock !== undefined ? v.stock : ''}" onchange="uVar(${i},'stock',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-violet-500 mb-2 uppercase tracking-widest"><i class="fa-solid fa-star mr-1"></i>Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.poin||0}" onchange="uVar(${i},'poin',this.value)"></i>
                </div>
            </div>
        </div>`;
    }).join('')}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-pink-600 font-bold rounded-2xl text-sm border-2 border-pink-200 bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-swatchbook"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-violet-600 font-bold rounded-2xl text-sm border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/30 dark:border-violet-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-upload"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-2xl text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;
    setH('variants-builder-container', h);
};

window.addVar = () => { tVars.push({name:'', price:0, priceNormal:0, hpp:0, stock:0, sku:'', img:'', unit:'', colorCode:'', poin:0, isActive: true}); rVarsB(); };
window.rmVar = i => { tVars.splice(i,1); rVarsB(); };
window.uVar = (i,k,v) => { tVars[i][k] = (k==='price' || k==='priceNormal' || k==='hpp' || k==='stock' || k==='poin') ? parseFloat(v)||0 : (k==='img' ? fixD(v) : v); };

// FITUR BARU: Impor dari Database Warna
window.openColorImportModal = () => {
    let colors = appData.colors || [];
    if (!colors.length) {
        showToast("Database Warna masih kosong!");
        return;
    }
    // Kelompokkan berdasarkan katalog
    let grouped = {};
    colors.forEach(c => {
        let cat = c.catalog || 'Tanpa Katalog';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(c);
    });
    
    let html = `<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-pink-500"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
    `;
    
    for (let cat in grouped) {
        html += `<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${esc(cat)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${grouped[cat].map(c => `
                    <button type="button" onclick="importColorToVariant('${esc(c.name)}', '${esc(c.hex||'')}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-1 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${esc(c.hex||'transparent')}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${esc(c.name)}</span>
                    </button>
                `).join('')}
            </div>
        </div>`;
    }
    html += `</div></div>`;
    
    _openColorFloatModal(html);
};

// FIX ROOT CAUSE: Helper modal dinamis untuk semua fitur warna.
// Sebelumnya semua fungsi warna mencari 'confirm-modal' dan 'confirm-box'
// yang TIDAK ADA di DOM (yang ada hanya 'custom-confirm-modal'), sehingga
// cm selalu null dan fungsi langsung return tanpa melakukan apa-apa.
// Sekarang kita buat modal sendiri yang di-inject langsung ke body.
window._openColorFloatModal = (innerHtml) => {
    _closeColorFloatModal(); // tutup yang lama jika ada
    const overlay = document.createElement('div');
    overlay.id = 'color-float-modal';
    overlay.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300';
    overlay.onclick = (e) => { if (e.target === overlay) _closeColorFloatModal(); };
    const box = document.createElement('div');
    box.id = 'color-float-box';
    box.className = 'relative w-full max-w-sm scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]';
    box.innerHTML = innerHtml;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
        box.classList.remove('scale-95');
    });
};

window._closeColorFloatModal = () => {
    const overlay = document.getElementById('color-float-modal');
    if (!overlay) return;
    const box = document.getElementById('color-float-box');
    overlay.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 300);
};

window.importColorToVariant = (name, hex) => {
    tVars.push({
        name: name,
        price: 0, priceNormal: 0, hpp: 0, stock: 0, sku: '', img: '', unit: '',
        colorCode: hex || '', poin: 0, isActive: true
    });
    rVarsB();
    _closeColorFloatModal();
    showToast("Warna ditambahkan!");
};

// FITUR BARU: Ekspor varian (per-item) ke Database Warna
window.exportVariantToColorDB = async (idx) => {
    const v = tVars[idx];
    if (!v || !v.name.trim()) { showToast('Nama varian kosong!'); return; }
    const existing = (appData.colors||[]).find(c => c.name.toLowerCase() === v.name.trim().toLowerCase());
    if (existing) { showToast(`"${v.name}" sudah ada di Database Warna.`); return; }
    
    // Prompt untuk pilih katalog
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-pink-500"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label>
                    <input id="exp-name" class="admin-input" value="${esc(v.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${esc(v.colorCode||'#ffffff')}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${esc(v.colorCode||'')}">
                    </div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="exp-catalog" list="exp-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                    <datalist id="exp-catalog-list">${catalogOpts}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportVariantToColorDB()" class="flex-1 py-3 rounded-xl bg-pink-500 text-white font-bold text-sm hover:bg-pink-600 transition-all active:scale-95"><i class="fa-solid fa-floppy-disk mr-2"></i>Simpan</button>
            </div>
        </div>`);
};

window.confirmExportVariantToColorDB = async () => {
    const name = (document.getElementById('exp-name')?.value || '').trim();
    const hex  = (document.getElementById('exp-hex')?.value  || '').trim();
    const catalog = (document.getElementById('exp-catalog')?.value || '').trim();
    if (!name) { showToast('Nama warna wajib diisi!'); return; }
    const newColor = { id: Date.now(), name, hex, catalog };
    if (!appData.colors) appData.colors = [];
    appData.colors.push(newColor);
    _closeColorFloatModal();
    sLoad('Menyimpan ke Database Warna...');
    try {
        await saveApp(['colors']);
        showToast(`"${name}" berhasil disimpan ke Database Warna! 🎨`);
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

// FITUR BARU: Ekspor SEMUA varian yang punya nama ke Database Warna (skip duplikat)
window.exportAllVariantsToColorDB = async () => {
    const toExport = tVars.filter(v => v.name.trim());
    if (!toExport.length) { showToast('Tidak ada varian untuk diekspor!'); return; }
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    
    const catalogs = [...new Set(appData.colors.map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-violet-500"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${toExport.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${catalogOpts}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl bg-violet-500 text-white font-bold text-sm hover:bg-violet-600 transition-all active:scale-95"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`);
};

window.confirmExportAllVariants = async () => {
    const catalog = (document.getElementById('expall-catalog')?.value || '').trim();
    const toExport = tVars.filter(v => v.name.trim());
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    let added = 0;
    toExport.forEach(v => {
        if (!existingNames.has(v.name.trim().toLowerCase())) {
            appData.colors.push({ id: Date.now() + added, name: v.name.trim(), hex: v.colorCode||'', catalog });
            existingNames.add(v.name.trim().toLowerCase());
            added++;
        }
    });
    _closeColorFloatModal();
    if (!added) { showToast('Semua varian sudah ada di Database Warna!'); return; }
    sLoad('Menyimpan...');
    try {
        await saveApp(['colors']);
        showToast(`${added} warna berhasil diekspor ke Database Warna! 🎨`);
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

// FITUR BARU: Panel impor warna dari semua varian produk yang ada (di tab Database Warna)
window.openImportFromProductsModal = async () => {
    const allVariants = [];
    (appData.products||[]).forEach(p => {
        (p.variants||[]).forEach(v => {
            if (v.name && v.name.trim()) {
                allVariants.push({ varName: v.name.trim(), hex: v.colorCode||'', prodName: p.name||'' });
            }
        });
    });
    if (!allVariants.length) { showToast('Tidak ada varian produk yang ditemukan!'); return; }
    const existingNames = new Set((appData.colors||[]).map(c => c.name.toLowerCase()));
    const newOnes = allVariants.filter(v => !existingNames.has(v.varName.toLowerCase()));
    
    if (!newOnes.length) { showToast('Semua varian produk sudah ada di Database Warna!'); return; }
    
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    // Simpan newOnes ke variabel window agar tidak perlu di-serialize ke HTML
    window._pendingImportVariants = newOnes;
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-emerald-500"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${newOnes.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="max-h-48 overflow-y-auto mb-4 space-y-2">
                ${newOnes.map((v,i) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-300 transition-all">
                        <input type="checkbox" id="imp-chk-${i}" checked class="w-4 h-4 rounded accent-emerald-500">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${esc(v.hex||'transparent')}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${esc(v.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${esc(v.prodName)}</p>
                        </div>
                    </label>
                `).join('')}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${catalogOpts}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl primary-bg font-bold text-sm transition-all active:scale-95"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`);
};

window.confirmImportFromProducts = async () => {
    // Baca data dari variabel sementara (aman dari karakter khusus)
    const variants = window._pendingImportVariants || [];
    window._pendingImportVariants = null;
    const catalog = (document.getElementById('impprod-catalog')?.value||'').trim();
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    let added = 0;
    variants.forEach((v, i) => {
        const chk = document.getElementById(`imp-chk-${i}`);
        if (chk && chk.checked && !existingNames.has(v.varName.toLowerCase())) {
            appData.colors.push({ id: Date.now() + added, name: v.varName, hex: v.hex||'', catalog });
            existingNames.add(v.varName.toLowerCase());
            added++;
        }
    });
    _closeColorFloatModal();
    if (!added) { showToast('Tidak ada warna baru yang ditambahkan!'); return; }
    sLoad('Menyimpan...');
    try {
        await saveApp(['colors']);
        showToast(`${added} warna berhasil diimpor ke Database Warna! 🎨`);
        if (typeof cTab !== 'undefined' && cTab === 'colors') rAdmItms('colors');
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};


// --- RENDER GROSIR (SUPER LEGA 2 KOLOM) ---
window.rWholB = () => {
    let h = `<div class="space-y-4 mb-4">${tWhol.map((w,i) => `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-600">
            <button onclick="rmWhol(${i})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.minQty}" onchange="uWhol(${i},'minQty',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.price}" onchange="uWhol(${i},'price',this.value)"></i>
                </div>
            </div>
        </div>`).join('')}</div>
        <button onclick="addWhol()" class="w-full py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-bold rounded-[1.5rem] text-sm border-2 border-amber-200 border-dashed hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-tags"></i> Tambah Tingkatan Grosir</button>`;
    setH('wholesale-builder-container', h);
};

window.addWhol = () => { tWhol.push({minQty:2, price:0}); rWholB(); };
window.rmWhol = i => { tWhol.splice(i,1); rWholB(); };
window.uWhol = (i,k,v) => { tWhol[i][k] = parseFloat(v) || 0; };

// FITUR BARU: Spec Table Builder — Tabel Spesifikasi Produk
window.rSpecB = () => {
    const container = el('spec-table-builder-container');
    if (!container) return;
    let h = '';
    if (tSpec.length > 0) {
        h += `<div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${tSpec.map((s,i) => `
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3">
                            <input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${esc(s.key)}" oninput="uSpec(${i},'key',this.value)">
                        </td>
                        <td class="py-2 px-3">
                            <input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${esc(s.val)}" oninput="uSpec(${i},'val',this.value)">
                        </td>
                        <td class="py-2 px-2 text-center">
                            <button type="button" onclick="rmSpec(${i})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button>
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    } else {
        h += `<div class="text-center py-6 text-slate-400 dark:text-slate-600 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>`;
    }
    h += `<button type="button" onclick="addSpec()" class="w-full py-4 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 font-bold rounded-[1.5rem] text-sm border-2 border-cyan-200 dark:border-cyan-800 border-dashed hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-plus-circle"></i> Tambah Baris Spesifikasi</button>`;
    setH('spec-table-builder-container', h);
};

window.addSpec = () => { tSpec.push({key:'', val:''}); rSpecB(); };
window.rmSpec = i => { tSpec.splice(i,1); rSpecB(); };
window.uSpec = (i,field,v) => { if(tSpec[i]) tSpec[i][field] = v; };

window.submitAdminForm = async () => {
    if(isSaving) return; isSaving = true;
    let d = {}, f = aF[cTab] || [];
    for (let k of f) {
        if (k.type === 'variants_builder') {
            d.variants = tVars.filter(v => v.name.trim() !== '');
        } else if (k.type === 'wholesale_builder') {
            d.wholesale = tWhol.filter(w => parseFloat(w.minQty) > 0.01 && w.price > 0);
        } else if (k.type === 'spec_table_builder') {
            d.specTable = tSpec.filter(s => s.key.trim() !== '');
        } else {
            let v = '';
            if (k.type === 'richtext') {
                const ed = el(`af-${k.key}-editor`);
                v = ed ? ed.innerHTML : '';
            } else {
                v = getV(`af-${k.key}`);
            }
            if (typeof v === 'string') {
                if(v.startsWith('data:image/') && v.length > 300000){ isSaving = false; return showToast("Gambar Base64 terlalu besar! Upload file."); }
                if(k.key === 'img') v = fixD(v);
            }
            d[k.key] = k.type === 'number' ? parseFloat(v) || 0 : v;
        }
    }
    
    if (!d.name && !d.title && !d.bankName && !d.code) { isSaving = false; return showToast("Judul/Nama/Kode wajib diisi!"); }
    if (cTab === 'products' && !d.sku) d.sku = 'SKU' + Date.now().toString().slice(-6);

    // FITUR BARU: validasi & normalisasi khusus data pelanggan (member)
    if (cTab === 'customers') {
        const normPhone = window.normalizeWA(d.phone);
        if (!normPhone || normPhone.length < 10) { isSaving = false; return showToast("Nomor WhatsApp tidak valid!"); }
        d.phone = normPhone;
        d.points = parseFloat(d.points) || 0;
        // id numerik (dari digit nomor WA) supaya kompatibel dengan sistem admin generik (oAEd/oADel/dst)
        d.id = parseInt(normPhone, 10);
    }
    
    let oldCustomerId = null; // dipakai untuk migrasi jika nomor WA pelanggan diubah saat edit
    if (cTab === 'customers') {
        // Untuk data pelanggan, ID SELALU mengikuti nomor WA (bukan eId/Date.now()),
        // karena dokumen di Firestore memang disimpan dengan key nomor WA.
        if (eId) {
            oldCustomerId = eId;
            let i = appData.customers.findIndex(x => x.id === eId);
            if (i > -1) appData.customers[i] = d; else appData.customers.unshift(d);
        } else {
            appData.customers.unshift(d);
        }
    } else if (cTab === 'rewards') {
        // FITUR BARU (REFACTOR KEAMANAN): hadiah disimpan sebagai sub-collection
        // TERSENDIRI (persis seperti produk), BUKAN sebagai array di dalam dokumen
        // utama -- supaya rule keamanan Firestore bisa memvalidasi field 'stock'
        // per-hadiah secara individual (sama seperti pola stok produk).
        if (eId) { d.id = eId; let i = appData.rewards.findIndex(x => x.id === eId); if(i > -1) appData.rewards[i] = d; }
        else { d.id = Date.now(); appData.rewards.unshift(d); }
    } else if (eId) {
        d.id = eId;
        let i = appData[cTab].findIndex(x => x.id === eId);
        // FIX BUG: field yang TIDAK ada di form edit (seperti 'totalSold' -- total
        // terjual) akan HILANG kalau tidak sengaja dipertahankan di sini, karena
        // penyimpanan produk pakai .set() yang MENIMPA SELURUH dokumen, bukan
        // menggabungkan. Jadi field-field "system" (bukan input form) WAJIB
        // disalin dulu dari data lama sebelum ditimpa.
        if (cTab === 'products' && i > -1) {
            const oldProd = appData[cTab][i];
            d.totalSold = oldProd.totalSold || 0;
            if (d.variants && d.variants.length && oldProd.variants) {
                d.variants.forEach(nv => {
                    const oldVar = oldProd.variants.find(ov => ov.name === nv.name);
                    if (oldVar && oldVar.totalSold) nv.totalSold = oldVar.totalSold;
                });
            }
        }
        if(i > -1) appData[cTab][i] = d;
    } else {
        d.id = Date.now();
        appData[cTab].unshift(d);
    }
    
    sLoad('Menyimpan...');
    try {
        if (cTab === 'products') {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(d.id.toString()).set(d);
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp) // FIX: produk sudah tersimpan di sub-collection sendiri, cukup bump lastUpdate saja, jangan timpa field lain
        } else if (cTab === 'customers') {
            const custCol = db.collection("freshmart").doc("cms_data").collection("customers");
            // Kalau nomor WA diganti saat edit, dokumen lama (key = nomor lama) dihapus,
            // lalu dibuat dokumen baru dengan key nomor yang baru -- supaya lookup checkout tetap akurat.
            if (oldCustomerId !== null && oldCustomerId !== d.id) {
                const oldPhoneStr = oldCustomerId.toString();
                await custCol.doc(oldPhoneStr).delete().catch(()=>{});
            }
            await custCol.doc(d.phone).set(d, { merge: true });
            // Data pelanggan TIDAK ikut termuat untuk semua pengunjung (privasi), jadi tidak perlu saveApp([])
        } else if (cTab === 'rewards') {
            await db.collection("freshmart").doc("cms_data").collection("rewards").doc(d.id.toString()).set(d);
            // Katalog hadiah publik & realtime lewat listener sendiri (lihat attachRewardsRealtime) -- tidak perlu saveApp([])
        } else {
            await saveApp([cTab]); // FIX: hanya kirim field yang benar-benar berubah (categories/vouchers/banners/brands/banks)
        }
        closeAdminModal(); rAdmItms(cTab); showToast("Tersimpan!");
    } catch(e) { showToast("Gagal menyimpan!"); }
    finally { isSaving = false; hLoad(); }
};

window.oADel = async (t, id) => {
    showConfirm("Hapus Data", "Data yang dihapus tidak bisa dikembalikan lagi.", async () => {
        if (isSaving) return; isSaving = true;
        const target = appData[t] && appData[t].find(x => x.id === id);
        appData[t] = appData[t].filter(x => x.id !== id);
        sLoad('Menghapus...');
        try {
            if (t === 'products') {
                await db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).delete();
                await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
            } else if (t === 'customers') {
                const phoneKey = target ? target.phone : id.toString();
                await db.collection("freshmart").doc("cms_data").collection("customers").doc(phoneKey).delete();
            } else if (t === 'rewards') {
                await db.collection("freshmart").doc("cms_data").collection("rewards").doc(id.toString()).delete();
            } else { await saveApp([t]); }
            rAdmItms(t); showToast("Berhasil Dihapus!");
        } catch(e) { showToast("Gagal menghapus!"); }
        finally { isSaving = false; hLoad(); }
    });
};

window.duplicateProduct = async (id) => {
    showConfirm("Duplikat Produk", "Menyalin data produk ini ke item baru?", async () => {
        if(isSaving) return; isSaving = true;
        const original = appData.products.find(x => x.id === id);
        if(!original) { isSaving = false; return; }
        
        let duplicated = JSON.parse(JSON.stringify(original));
        duplicated.id = Date.now() + Math.floor(Math.random() * 1000);
        duplicated.name = duplicated.name + " COPY";
        duplicated.sku = "";
        duplicated.totalSold = 0; // FIX: produk hasil duplikat belum pernah terjual, jangan ikut angka produk asal
        if(duplicated.variants && duplicated.variants.length > 0) {
            duplicated.variants = duplicated.variants.map(v => { v.sku = ""; v.totalSold = 0; return v; });
        }
        appData.products.unshift(duplicated);
        
        sLoad('Menyalin...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(duplicated.id.toString()).set(duplicated);
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
            rAdmItms('products'); showToast("Produk berhasil disalin!");
        } catch(e) { showToast("Gagal menyalin!"); }
        finally { isSaving = false; hLoad(); }
    }, "Ya, Salin", false);
};

// ==========================================
// FITUR RESTOCK PRODUK
// ==========================================
window.openRestockModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;
    
    const hasVariants = p.variants && p.variants.length > 0;
    let variantsHtml = '';
    
    if (hasVariants) {
        variantsHtml = p.variants.map((v, i) => `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${v.colorCode ? `<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(v.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${i}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`
        ).join('');
    } else {
        variantsHtml = `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(p.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(p.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;
    }

    let m = document.getElementById('restock-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'restock-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        // FIX #7: tutup saat klik backdrop (area di luar card)
        m.onclick = (e) => { if (e.target === m) closeRestockModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-indigo-500"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-3 rounded-xl"><i class="fa-solid fa-circle-info text-indigo-500 mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${variantsHtml}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`;
    // FIX #4a: animasi buka
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    // FIX #4b: daftarkan ke History API & oMods agar back button berfungsi
    pushModalHistory('restock');
};

window.closeRestockModal = (fH=false) => {
    requestCloseModal('restock', fH, () => {
        const m = document.getElementById('restock-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};

window.processRestock = async (id) => {
    if (isSaving) return; isSaving = true;
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { isSaving = false; return; }
    
    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;
    let updated = JSON.parse(JSON.stringify(p));
    
    let totalAdded = 0;
    if (hasVariants) {
        updated.variants = updated.variants.map((v, i) => {
            const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
            if (addVal > 0) {
                v.stock = (parseFloat(v.stock)||0) + addVal;
                totalAdded += addVal;
                // FIX #6a: auto-aktifkan varian jika stok sudah > 0
                if (v.stock > 0 && (v.isActive === false || v.isActive === 'false')) {
                    v.isActive = true;
                }
            }
            return v;
        });
        // FIX #6b: auto-aktifkan produk induk jika minimal 1 varian aktif & stok > 0
        const anyActiveVariant = updated.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
        if (anyActiveVariant && (updated.isActive === false || updated.isActive === 'false')) {
            updated.isActive = 'true';
        }
    } else {
        const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
        if (addVal > 0) {
            updated.stock = (parseFloat(updated.stock)||0) + addVal;
            totalAdded += addVal;
            // FIX #6c: auto-aktifkan produk jika stok sudah > 0
            if (updated.stock > 0 && (updated.isActive === false || updated.isActive === 'false')) {
                updated.isActive = 'true';
            }
        }
    }
    // FIX #6d: jika tidak ada yang diisi → tolak lebih awal
    if (totalAdded <= 0) { isSaving = false; return showToast("Masukkan jumlah restock terlebih dahulu!"); }
    
    sLoad('Menyimpan Restock...');
    try {
        // FIX RACE CONDITION: gunakan Firestore transaction agar dua admin
        // yang restock bersamaan tidak saling menimpa — stok dibaca LANGSUNG
        // dari server lalu ditambah atomically, bukan dari cache lokal.
        const prodRef = db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let finalStock = 0;
        await db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                // FIX: cocokkan varian berdasarkan NAMA, bukan index posisi,
                // karena urutan varian di server bisa berbeda dengan cache lokal.
                p.variants.forEach((localVar, i) => {
                    const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
                    if (addVal <= 0) return;
                    // Cari varian di server berdasarkan nama
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx > -1) {
                        serverProd.variants[sIdx].stock = (parseFloat(serverProd.variants[sIdx].stock)||0) + addVal;
                        if (serverProd.variants[sIdx].stock > 0 &&
                            (serverProd.variants[sIdx].isActive === false || serverProd.variants[sIdx].isActive === 'false')) {
                            serverProd.variants[sIdx].isActive = true;
                        }
                    }
                });
                const anyActive = serverProd.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
                if (anyActive && (serverProd.isActive === false || serverProd.isActive === 'false')) {
                    serverProd.isActive = 'true';
                }
                finalStock = serverProd.variants.reduce((s,v) => s+(parseFloat(v.stock)||0), 0);
            } else {
                const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
                serverProd.stock = (parseFloat(serverProd.stock)||0) + addVal;
                if (serverProd.stock > 0 && (serverProd.isActive === false || serverProd.isActive === 'false')) {
                    serverProd.isActive = 'true';
                }
                finalStock = serverProd.stock;
            }
            transaction.set(prodRef, serverProd);
            // Perbarui updated ke data server agar disimpan ke cache lokal
            Object.assign(updated, serverProd);
        });
        appData.products[idx] = updated;
        await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
        closeRestockModal();
        rAdmItms('products');
        setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
        showToast(`✅ Restock +${totalAdded} berhasil! Total stok: ${finalStock}`);
    } catch(e) { showToast("Gagal restock: " + (e.message || '')); }
    finally { isSaving = false; hLoad(); }
};

window.closeAdminModal = (fH=false) => {
    requestCloseModal('admin', fH, () => {
        el('admin-modal').classList.add('opacity-0');
        el('admin-modal-box').classList.add('scale-95');
        setTimeout(() => hide('admin-modal'), 300);
    });
};

// =====================================================================
// FITUR BARU: EDIT CEPAT HARGA (HPP, Harga Jual, Harga Coret, Grosir & Varian)
// Modal ringan supaya admin bisa update harga tanpa perlu buka form edit
// produk lengkap (yang isinya banyak field lain seperti nama, gambar,
// deskripsi, dll). Mengikuti pola yang sama dengan modal Restock:
// - Kalau produk PUNYA varian: setiap varian ditampilkan sendiri-sendiri
//   dengan HPP/Harga Jual/Harga Coret masing-masing (grosir disembunyikan,
//   konsisten dengan aturan bisnis yang sudah ada: grosir produk dasar
//   tidak berlaku kalau produk itu punya varian).
// - Kalau TIDAK punya varian: tampil HPP/Harga Jual/Harga Coret produk
//   utama, plus editor tabel harga Grosir (tambah/hapus baris).
// Penyimpanan pakai Firestore transaction (baca data server dulu, baru
// timpa field harga-nya saja) supaya tidak menabrak perubahan stok/data
// lain yang mungkin sedang disimpan admin/perangkat lain di saat bersamaan.
// =====================================================================
let qpWhol = [];

window.openQuickPriceModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;
    const hasVariants = p.variants && p.variants.length > 0;
    qpWhol = (!hasVariants && p.wholesale) ? JSON.parse(JSON.stringify(p.wholesale)) : [];

    let body = '';
    if (hasVariants) {
        body = p.variants.map((v, i) => `
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${v.colorCode ? `<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${i}" value="${v.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-emerald-500 mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${i}" value="${v.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${i}" value="${v.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${v.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                </div>
            </div>`
        ).join('');
    } else {
        body = `
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${p.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-emerald-500 mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${p.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${p.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${p.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-emerald-500 hover:text-emerald-600 flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;
    }

    let m = document.getElementById('quickprice-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'quickprice-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeQuickPriceModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-emerald-500"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${body}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`;
    if (!hasVariants) rQpWhol();
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    pushModalHistory('quickprice');
};

// Render ulang daftar baris harga grosir di dalam modal edit cepat
window.rQpWhol = () => {
    setH('qp-whol-container', qpWhol.length ? qpWhol.map((w, i) => `
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${w.minQty||''}" onchange="qpWhol[${i}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <input type="number" min="0" placeholder="Harga/Unit" value="${w.price||''}" onchange="qpWhol[${i}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <button type="button" onclick="qpWhol.splice(${i},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>`);
};
window.qpAddWhol = () => { qpWhol.push({minQty:0, price:0}); rQpWhol(); };

window.closeQuickPriceModal = (fH=false) => {
    requestCloseModal('quickprice', fH, () => {
        const m = document.getElementById('quickprice-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};

window.processQuickPrice = async (id) => {
    if (isSaving) return; isSaving = true;
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { isSaving = false; return; }
    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;

    sLoad('Menyimpan Harga...');
    try {
        const prodRef = db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let updated = null;
        await db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                // FIX: cocokkan varian berdasarkan NAMA (bukan index), sama seperti processRestock,
                // karena urutan varian di server bisa berbeda dari cache lokal admin ini.
                p.variants.forEach((localVar, i) => {
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx < 0) return;
                    const hpp = parseFloat(document.getElementById('qp-var-hpp-' + i)?.value) || 0;
                    const price = parseFloat(document.getElementById('qp-var-price-' + i)?.value) || 0;
                    const normal = parseFloat(document.getElementById('qp-var-normal-' + i)?.value) || 0;
                    const poin = parseFloat(document.getElementById('qp-var-poin-' + i)?.value) || 0;
                    serverProd.variants[sIdx].hpp = hpp;
                    serverProd.variants[sIdx].price = price;
                    serverProd.variants[sIdx].priceNormal = normal;
                    serverProd.variants[sIdx].poin = poin;
                });
            } else {
                serverProd.hpp = parseFloat(document.getElementById('qp-hpp')?.value) || 0;
                serverProd.price = parseFloat(document.getElementById('qp-price')?.value) || 0;
                serverProd.priceNormal = parseFloat(document.getElementById('qp-normal')?.value) || 0;
                serverProd.poin = parseFloat(document.getElementById('qp-poin')?.value) || 0;
                serverProd.wholesale = qpWhol.filter(w => parseFloat(w.minQty) > 0.01 && w.price > 0);
            }
            transaction.set(prodRef, serverProd);
            updated = serverProd;
        });
        appData.products[idx] = updated;
        await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
        closeQuickPriceModal();
        rAdmItms('products');
        showToast("✅ Harga berhasil diperbarui!");
    } catch(e) { showToast("Gagal simpan harga: " + (e.message || '')); }
    finally { isSaving = false; hLoad(); }
};

// --- 15. BARCODE SCANNER SETUP & NAVIGASI ROOT ---
let html5QrCode;
window.openCameraScanner = async (targetId='search-input') => {
    const mScan = el('scanner-modal');
    if (mScan && mScan.classList.contains('hidden')) pushModalHistory('scanner');
    show('scanner-modal');
    setTimeout(() => { el('scanner-modal').classList.remove('opacity-0') }, 10);
    
    // FITUR BARU (PERFORMA): muat library scanner cuma saat ikon scan benar-benar diklik
    try {
        await ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js', () => typeof Html5Qrcode !== 'undefined');
    } catch(e) {
        showToast('Gagal memuat modul kamera. Cek koneksi internet Anda.');
        closeCameraScanner();
        return;
    }
    
    if(!html5QrCode) html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    setTimeout(() => {
        if(html5QrCode){
            html5QrCode.start({facingMode:"environment"}, config, (decodedText) => {
                let tEl = el(targetId);
                if(tEl){
                    tEl.value = decodedText;
                    if(targetId === 'search-input') handleSearch(decodedText);
                    else {
                        tEl.dispatchEvent(new Event('input',{bubbles:true}));
                        tEl.dispatchEvent(new Event('change',{bubbles:true}));
                    }
                }
                showToast("Barcode discan!");
                closeCameraScanner();
            },(err)=>{}).catch(err => {
                showToast("Akses kamera ditolak/gagal!");
                closeCameraScanner();
            });
        }
    }, 100);
};

// FIX: kamera SELALU dimatikan dengan benar (stop+clear) baik saat ditutup lewat tombol X
// di UI maupun lewat tombol back fisik/browser, karena kedua jalur sama-sama berakhir di
// blok penutupan ini (lihat requestCloseModal). Mencegah kamera tetap menyala di latar
// belakang (resource leak) saat user menekan tombol back.
window.closeCameraScanner = (fH=false) => {
    requestCloseModal('scanner', fH, () => {
        el('scanner-modal').classList.add('opacity-0');
        if(html5QrCode){
            try {
                if(html5QrCode.getState() === 2 /* SCANNING */ || html5QrCode.getState() === 3 /* PAUSED */){
                    html5QrCode.stop().then(() => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    }).catch(e => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    });
                } else {
                    html5QrCode.clear();
                    html5QrCode = null;
                }
            } catch(err) {
                html5QrCode = null;
            }
        }
        setTimeout(() => hide('scanner-modal'), 300);
    });
};

window.toggleProductStatus = async (id, toActive) => {
    if(isSaving) return; isSaving = true;
    const i = appData.products.findIndex(x => x.id === id);
    if(i > -1){
        appData.products[i].isActive = toActive ? 'true' : 'false';
        sLoad(toActive ? 'Mengaktifkan...' : 'Menonaktifkan...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).update({isActive: toActive ? 'true' : 'false'});
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp) rAdmItms('products');
            setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length); // FIX: sync badge
        showToast(toActive ? "Produk Aktif!" : "Stok Dikosongkan!");
        } catch(e) { showToast("Gagal update status!"); }
        finally { isSaving = false; hLoad(); }
    }
};


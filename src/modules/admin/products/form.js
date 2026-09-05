/**
 * ============================================================
 * ADMIN PRODUCTS — FORM TAMBAH/EDIT, SIMPAN & HAPUS (form.js)
 * Mengatur pembukaan form produk (oAEd/oAAdd), render field dinamis,
 * submitAdminForm (dengan logika khusus produk/pelanggan/reward),
 * penghapusan (oADel), dan duplikasi produk.
 * ============================================================
 */

import { db } from '../../../config/firebase.js';
import { saveApp } from '../../../services/storage.js';
import { appData } from '../../../core/state.js';
import { el, show, setIn, setH, getV, esc, fixD, sLoad, hLoad, showToast } from '../../../core/utils.js';
import { aF } from '../schema.js';
import {
    cTab, setCTab,
    eId, setEId,
    isSaving, setIsSaving,
    tVars, setTVars,
    tWhol, setTWhol,
    tSpec, setTSpec,
} from './index.js';

/** Fungsi lokal untuk konversi URL embed video (drive → preview) */
function fixDriveVideo(url) {
    if (!url) return '';
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    return url;
}

const pushModalHistory = (id) => window.pushModalHistory?.(id);

// ─── Buka Form Tambah / Edit ──────────────────────────────────────────────────

window.oAAdd = () => { window.oAEd(cTab || window.cTab || 'products', null); };

window.oAEd = (t, id) => {
    setCTab(t);
    if (typeof window.setCTab === 'function') window.setCTab(t);
    window.cTab = t;
    setEId(id);
    if (typeof window.setEId === 'function') window.setEId(id);
    window.eId = id;
    let d = id ? (appData[t] || []).find(x => x.id === id) : null;
    setIn('admin-modal-title', id ? 'Edit Data' : 'Tambah Data');
    let f = aF[t]||[], h = '';

    if(t==='products'){
        setTVars(d && d.variants ? JSON.parse(JSON.stringify(d.variants)) : []);
        setTWhol(d && d.wholesale ? JSON.parse(JSON.stringify(d.wholesale)) : []);
        setTSpec(d && d.specTable ? JSON.parse(JSON.stringify(d.specTable)) : []);
    }

    // Kelompokkan field dalam grid 2-kolom responsive
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
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`;
            (appData.products||[]).forEach(p => { h += `<option value="${p.id}" ${v==p.id?'selected':''} class="font-bold">${esc(p.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'variants_builder') {
            h += `<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.type === 'wholesale_builder') {
            h += `<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.type === 'spec_table_builder') {
            h += `<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.key === 'sku') {
            h += `<div class="relative flex items-center"><input autocomplete='off' type="${k.type}" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${k.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;
        } else if(k.key === 'img') {
            h += `<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ><label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></label></div>`;
        } else if(k.key === 'videoUrl') {
            h += `<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-violet-100 transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${k.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-violet-400"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
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
                    <label class="w-8 h-8 rounded hover:bg-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center cursor-pointer text-[var(--color-primary)] transition-colors" title="Upload &amp; Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${k.key}-editor')" >
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
>`;
        }
        h += `</div>`;
    });
    // Bungkus dalam grid 2-kolom responsive
    h = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${h}</div>`;

    setH('admin-modal-form', h);
    if(t==='products') { window.rVarsB?.(); window.rWholB?.(); window.rSpecB?.(); }

    const mAd = el('admin-modal');
    if (mAd && mAd.classList.contains('hidden')) pushModalHistory('admin');
    show('admin-modal');
    setTimeout(() => { el('admin-modal').classList.remove('opacity-0'); el('admin-modal-box').classList.remove('scale-95'); }, 10);
};

// ─── Submit Form (Simpan) ─────────────────────────────────────────────────────

window.submitAdminForm = async () => {
    if(isSaving) return; setIsSaving(true);
    const curTab = cTab || window.cTab || 'products';
    let d = {}, f = aF[curTab] || [];
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
                if(v.startsWith('data:image/') && v.length > 300000){ setIsSaving(false); return showToast("Gambar Base64 terlalu besar! Upload file."); }
                if(k.key === 'img') v = fixD(v);
            }
            d[k.key] = k.type === 'number' ? parseFloat(v) || 0 : v;
        }
    }

    if (!d.name && !d.title && !d.bankName && !d.code) { setIsSaving(false); return showToast("Judul/Nama/Kode wajib diisi!"); }
    if (curTab === 'products' && !d.sku) d.sku = 'SKU' + Date.now().toString().slice(-6);

    if (curTab === 'customers') {
        const normPhone = window.normalizeWA ? window.normalizeWA(d.phone) : (d.phone || '').replace(/\D/g, '').replace(/^0/, '62');
        if (!normPhone || normPhone.length < 10) { setIsSaving(false); return showToast("Nomor WhatsApp tidak valid!"); }
        d.phone = normPhone;
        d.points = parseFloat(d.points) || 0;
        d.id = parseInt(normPhone, 10);
    }

    let oldCustomerId = null;
    if (curTab === 'customers') {
        if (!appData.customers) appData.customers = [];
        if (eId) {
            oldCustomerId = eId;
            let i = appData.customers.findIndex(x => x.id === eId);
            if (i > -1) appData.customers[i] = d; else appData.customers.unshift(d);
        } else {
            appData.customers.unshift(d);
        }
    } else if (curTab === 'rewards') {
        if (!appData.rewards) appData.rewards = [];
        if (eId) { d.id = eId; let i = appData.rewards.findIndex(x => x.id === eId); if(i > -1) appData.rewards[i] = d; }
        else { d.id = Date.now(); appData.rewards.unshift(d); }
    } else if (eId) {
        d.id = eId;
        if (!appData[curTab]) appData[curTab] = [];
        let i = appData[curTab].findIndex(x => x.id === eId);
        if (curTab === 'products' && i > -1) {
            const oldProd = appData[curTab][i];
            d.totalSold = oldProd.totalSold || 0;
            if (d.variants && d.variants.length && oldProd.variants) {
                d.variants.forEach(nv => {
                    const oldVar = oldProd.variants.find(ov => ov.name === nv.name);
                    if (oldVar && oldVar.totalSold) nv.totalSold = oldVar.totalSold;
                });
            }
        }
        if(i > -1) appData[curTab][i] = d;
    } else {
        d.id = Date.now();
        if (!appData[curTab]) appData[curTab] = [];
        appData[curTab].unshift(d);
    }

    sLoad('Menyimpan...');
    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        if (!_db) throw new Error("Database Firebase belum terhubung");

        if (curTab === 'products') {
            await _db.collection("freshmart").doc("cms_data").collection("products").doc(d.id.toString()).set(d);
            await _save([], { updateType: 'product_single', updatedProductIds: [d.id.toString()] });
        } else if (curTab === 'customers') {
            const custCol = _db.collection("freshmart").doc("cms_data").collection("customers");
            if (oldCustomerId !== null && oldCustomerId !== d.id) {
                await custCol.doc(oldCustomerId.toString()).delete().catch(()=>{});
            }
            await custCol.doc(d.phone).set(d, { merge: true });
        } else if (curTab === 'rewards') {
            await _db.collection("freshmart").doc("cms_data").collection("rewards").doc(d.id.toString()).set(d);
        } else {
            await _save([curTab]);
        }
        window.closeAdminModal?.(); window.rAdmItms?.(curTab); showToast("Tersimpan!");
    } catch(e) {
        console.error("Gagal simpan admin data:", e);
        showToast("Gagal menyimpan: " + (e.message || ''));
    }
    finally { setIsSaving(false); hLoad(); }
};

// ─── Hapus Data ───────────────────────────────────────────────────────────────

window.oADel = async (t, id) => {
    window.showConfirm?.("Hapus Data", "Data yang dihapus tidak bisa dikembalikan lagi.", async () => {
        if (isSaving) return; setIsSaving(true);
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        const target = appData[t] && appData[t].find(x => x.id === id);
        appData[t] = appData[t].filter(x => x.id !== id);
        sLoad('Menghapus...');
        try {
            if (!_db) throw new Error("Database Firebase belum terhubung");
            if (t === 'products') {
                await _db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).delete();
                await _save([]);
            } else if (t === 'customers') {
                const phoneKey = target ? target.phone : id.toString();
                await _db.collection("freshmart").doc("cms_data").collection("customers").doc(phoneKey).delete();
            } else if (t === 'rewards') {
                await _db.collection("freshmart").doc("cms_data").collection("rewards").doc(id.toString()).delete();
            } else { await _save([t]); }
            window.rAdmItms?.(t); showToast("Berhasil Dihapus!");
        } catch(e) { showToast("Gagal menghapus: " + (e.message || '')); }
        finally { setIsSaving(false); hLoad(); }
    });
};

// ─── Duplikasi Produk ─────────────────────────────────────────────────────────

window.duplicateProduct = async (id) => {
    window.showConfirm?.("Duplikat Produk", "Menyalin data produk ini ke item baru?", async () => {
        if(isSaving) return; setIsSaving(true);
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        const _save = typeof saveApp === 'function' ? saveApp : (window.saveApp || (async () => {}));
        const original = appData.products.find(x => x.id === id);
        if(!original) { setIsSaving(false); return; }

        let duplicated = JSON.parse(JSON.stringify(original));
        duplicated.id = Date.now() + Math.floor(Math.random() * 1000);
        duplicated.name = duplicated.name + " COPY";
        duplicated.sku = "";
        duplicated.totalSold = 0;
        if(duplicated.variants && duplicated.variants.length > 0) {
            duplicated.variants = duplicated.variants.map(v => { v.sku = ""; v.totalSold = 0; return v; });
        }
        appData.products.unshift(duplicated);

        sLoad('Menyalin...');
        try {
            if (!_db) throw new Error("Database Firebase belum terhubung");
            await _db.collection("freshmart").doc("cms_data").collection("products").doc(duplicated.id.toString()).set(duplicated);
            await _save([], { updateType: 'product_single', updatedProductIds: [duplicated.id.toString()] });
            window.rAdmItms?.('products'); showToast("Produk berhasil disalin!");
        } catch(e) { showToast("Gagal menyalin: " + (e.message || '')); }
        finally { setIsSaving(false); hLoad(); }
    }, "Ya, Salin", false);
};

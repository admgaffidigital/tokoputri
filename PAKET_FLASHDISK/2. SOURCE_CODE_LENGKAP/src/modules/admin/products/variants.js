/**
 * ============================================================
 * ADMIN PRODUCTS — VARIAN & DATABASE WARNA (variants.js)
 * Mengatur UI builder varian (nama, harga, stok, foto, SKU, poin),
 * serta seluruh fitur database warna: impor dari DB, ekspor per-varian,
 * ekspor semua, dan impor dari semua produk.
 * ============================================================
 */

import { saveApp } from '../../../services/storage.js';
import { appData } from '../../../core/state.js';
import { setH, esc, fixD, sLoad, hLoad, showToast } from '../../../core/utils.js';
import { tVars, setTVars } from './index.js';

// ─── Spec Table Builder ───────────────────────────────────────────────────────
// (dipindahkan ke sini karena hanya dipakai dalam konteks form produk)

import { tSpec, setTSpec } from './index.js';

window.rSpecB = () => {
    const container = document.getElementById('spec-table-builder-container');
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
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${esc(s.key)}" oninput="uSpec(${i},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${esc(s.val)}" oninput="uSpec(${i},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${i})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    } else {
        h += `<div class="text-center py-6 text-slate-400 dark:text-slate-600 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>`;
    }
    h += `<button type="button" onclick="addSpec()" class="w-full py-4 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 font-bold rounded-[1.5rem] text-sm border-2 border-cyan-200 dark:border-cyan-800 border-dashed hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-plus-circle"></i> Tambah Baris Spesifikasi</button>`;
    container.innerHTML = h;
};

window.addSpec  = () => { tSpec.push({key:'', val:''}); setTSpec(tSpec); window.rSpecB(); };
window.rmSpec   = (i) => { tSpec.splice(i,1); setTSpec(tSpec); window.rSpecB(); };
window.uSpec    = (i,field,v) => { if(tSpec[i]) tSpec[i][field] = v; };

// ─── Varian Builder ───────────────────────────────────────────────────────────

window.rVarsB = () => {
    const catEl = document.getElementById('af-category');
    const isCatCategory = catEl ? /\bcat\b/i.test(catEl.value) : false;
    let h = `<div class="space-y-5 mb-5">${tVars.map((v,i) => {
        let isAct = v.isActive !== false && v.isActive !== 'false';
        return `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
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
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.name)}" onchange="uVar(${i},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.unit||'')}" onchange="uVar(${i},'unit',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.price}" onchange="uVar(${i},'price',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.priceNormal||''}" onchange="uVar(${i},'priceNormal',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${v.colorCode || '#ffffff'}"
                                onchange="uVar(${i},'colorCode',this.value); document.getElementById('var-hex-${i}').value = this.value;" title="Klik untuk pilih warna">
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${i}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${esc(v.colorCode||'')}" onchange="uVar(${i},'colorCode',this.value)">
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
                        <input autocomplete='off' id="var-sku-${i}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${esc(v.sku||'')}" onchange="uVar(${i},'sku',this.value)">
                        <button type="button" onclick="openCameraScanner('var-sku-${i}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
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
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.hpp||0}" onchange="uVar(${i},'hpp',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.stock !== undefined ? v.stock : ''}" onchange="uVar(${i},'stock',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-violet-500 mb-2 uppercase tracking-widest"><i class="fa-solid fa-star mr-1"></i>Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.poin||0}" onchange="uVar(${i},'poin',this.value)">
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

window.addVar = () => { tVars.push({name:'', price:0, priceNormal:0, hpp:0, stock:0, sku:'', img:'', unit:'', colorCode:'', poin:0, isActive: true}); setTVars(tVars); window.rVarsB(); };
window.rmVar  = (i) => { tVars.splice(i,1); setTVars(tVars); window.rVarsB(); };
window.uVar   = (i,k,v) => { tVars[i][k] = (k==='price'||k==='priceNormal'||k==='hpp'||k==='stock'||k==='poin') ? parseFloat(v)||0 : (k==='img' ? fixD(v) : v); };

// ─── Database Warna — Helper modal dinamis ────────────────────────────────────

/**
 * Buat dan tampilkan modal warna dinamis (di-inject ke body).
 * Solusi untuk mencegah bug saat mencari elemen modal yang tidak ada di DOM.
 */
window._openColorFloatModal = (innerHtml) => {
    _closeColorFloatModal();
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

// ─── Impor Warna dari Database ────────────────────────────────────────────────

window.openColorImportModal = () => {
    let colors = appData.colors || [];
    if (!colors.length) { showToast("Database Warna masih kosong!"); return; }
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
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">`;
    for (let cat in grouped) {
        html += `<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${esc(cat)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${grouped[cat].map(c => `
                    <button type="button" onclick="importColorToVariant('${esc(c.name)}', '${esc(c.hex||'')}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-1 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${esc(c.hex||'transparent')}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${esc(c.name)}</span>
                    </button>`).join('')}
            </div>
        </div>`;
    }
    html += `</div></div>`;
    _openColorFloatModal(html);
};

window.importColorToVariant = (name, hex) => {
    tVars.push({ name, price: 0, priceNormal: 0, hpp: 0, stock: 0, sku: '', img: '', unit: '', colorCode: hex || '', poin: 0, isActive: true });
    setTVars(tVars);
    window.rVarsB();
    _closeColorFloatModal();
    showToast("Warna ditambahkan!");
};

// ─── Ekspor Varian ke Database Warna ─────────────────────────────────────────

window.exportVariantToColorDB = async (idx) => {
    const v = tVars[idx];
    if (!v || !v.name.trim()) { showToast('Nama varian kosong!'); return; }
    const existing = (appData.colors||[]).find(c => c.name.toLowerCase() === v.name.trim().toLowerCase());
    if (existing) { showToast(`"${v.name}" sudah ada di Database Warna.`); return; }
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-pink-500"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${esc(v.name)}"></div>
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
    const name    = (document.getElementById('exp-name')?.value || '').trim();
    const hex     = (document.getElementById('exp-hex')?.value  || '').trim();
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

window.exportAllVariantsToColorDB = async () => {
    const toExport = tVars.filter(v => v.name.trim());
    if (!toExport.length) { showToast('Tidak ada varian untuk diekspor!'); return; }
    if (!appData.colors) appData.colors = [];
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
    try { await saveApp(['colors']); showToast(`${added} warna berhasil diekspor ke Database Warna! 🎨`); }
    catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

// ─── Impor Warna dari Semua Produk ───────────────────────────────────────────

window.openImportFromProductsModal = async () => {
    const allVariants = [];
    (appData.products||[]).forEach(p => {
        (p.variants||[]).forEach(v => {
            if (v.name && v.name.trim()) allVariants.push({ varName: v.name.trim(), hex: v.colorCode||'', prodName: p.name||'' });
        });
    });
    if (!allVariants.length) { showToast('Tidak ada varian produk yang ditemukan!'); return; }
    const existingNames = new Set((appData.colors||[]).map(c => c.name.toLowerCase()));
    const newOnes = allVariants.filter(v => !existingNames.has(v.varName.toLowerCase()));
    if (!newOnes.length) { showToast('Semua varian produk sudah ada di Database Warna!'); return; }
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    window._pendingImportVariants = newOnes;
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${newOnes.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="max-h-48 overflow-y-auto mb-4 space-y-2">
                ${newOnes.map((v,i) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${i}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${esc(v.hex||'transparent')}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${esc(v.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${esc(v.prodName)}</p>
                        </div>
                    </label>`).join('')}
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
        if (window.cTab === 'colors') window.rAdmItms?.('colors');
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

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
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-all active:scale-95"><i class="fa-solid fa-download mr-2"></i>Impor</button>
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

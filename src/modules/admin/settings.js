/**
 * ============================================================
 * MODUL ADMIN: PENGATURAN TOKO & PROFIL
 * Mengatur profil toko, branding tema PWA, konfigurasi background,
 * metode kirim & pickup, QRIS payment, sistem GAS/API, operasional
 * stok/PPN, serta backup/restore database JSON toko.
 * ============================================================
 */

import { appData, isSaving, setIsSaving } from '../../core/state.js';
import { 
    el, setH, getV, esc, fixD, 
    showToast, sLoad, hLoad 
} from '../../core/utils.js';
import { uiPalettes, applyUITheme, applyBackgroundStyle } from '../../core/theme.js';
import { toggleTaxMenuVisibility } from './auth.js';

export { syncAppMeta } from '../../core/theme.js';

/**
 * Render menu grid utama pengaturan toko
 */
export const rAdmSet = () => {
    let h = `
    <div class="max-w-full pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pengaturan Toko</h2>
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Kelola konfigurasi profil, katalog, pengiriman, pembayaran, dan operasional</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-5 mb-6">
            <button onclick="openSettingForm('profile')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-[rgba(var(--color-primary-rgb),0.4)] hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300 z-10" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background='rgba(var(--color-primary-rgb),0.1)'"><i class="fa-solid fa-store text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Profil Toko</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Branding & Tema</span>
                </div>
            </button>
            <button onclick="openSettingForm('catalog')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-palette text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Kategori & Brand</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Layout & Navigasi</span>
                </div>
            </button>
            <button onclick="openSettingForm('shipping')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-motorcycle text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Pengiriman</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Ongkir & Lokasi</span>
                </div>
            </button>
            <button onclick="openSettingForm('payment')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-qrcode text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">QRIS Pay</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Metode Non-Tunai</span>
                </div>
            </button>
            <button onclick="openSettingForm('config')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-laptop-code text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Sistem & API</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Google Apps Script</span>
                </div>
            </button>
            <button onclick="openSettingForm('operasional')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-sliders text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Operasional</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Stok, Pajak & Poin</span>
                </div>
            </button>
            <button onclick="openPrinterSettingsModal()" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-print text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Printer Struk</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Bluetooth &amp; Thermal</span>
                </div>
            </button>
        </div>

        <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-database"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Pencadangan Data Toko (Backup &amp; Restore)</h3>
                    <p class="text-[10px] text-slate-500 dark:text-slate-400">Amankan database toko ke file lokal .json atau pulihkan data riwayat dari file cadangan</p>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button onclick="openAdminTab('backup_sync')" class="flex-1 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 hover:opacity-90 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-cloud-arrow-up"></i> Buka Pusat Data &amp; Cloud Sync</button>
                <button onclick="typeof window.downloadFullBackupJSON === 'function' ? window.downloadFullBackupJSON() : backupData()" class="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90 cursor-pointer"><i class="fa-solid fa-download text-emerald-400"></i> Backup Ekosistem (.json)</button>
            </div>
        </div>
    </div>
    `;
    setH('admin-content', h);
};

/**
 * Pemilihan preset tema warna
 */
export const selectPresetTheme = (themeName) => {
    const hex = uiPalettes[themeName][500];
    const uiThemeInp = document.getElementById('set-ui-theme');
    const themeColorInp = document.getElementById('set-theme-color');
    const colorPicker = document.getElementById('set-theme-color-picker');
    if (uiThemeInp) uiThemeInp.value = themeName;
    if (themeColorInp) themeColorInp.value = hex;
    if (colorPicker) colorPicker.value = hex;
    
    document.querySelectorAll('.preset-color-chip').forEach(el => {
        el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
        el.querySelector('.check-icon')?.classList.add('hidden');
    });
    
    const activeChip = document.getElementById(`preset-chip-${themeName}`);
    if (activeChip) {
        activeChip.classList.add('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
        activeChip.querySelector('.check-icon')?.classList.remove('hidden');
    }

    const customChip = document.getElementById('custom-color-chip');
    if (customChip) {
        customChip.style.background = '';
        const icon = customChip.querySelector('i');
        if (icon) icon.style.color = '';
    }
    
    applyUITheme(themeName, hex);
};

/**
 * Pemilihan gaya visual latar belakang
 */
export const selectBgStyle = (styleName) => {
    let normalized = styleName;
    if (normalized === 'dual_tone') normalized = 'aurora_glow';
    if (normalized === 'geometric_3d') normalized = 'tech_grid';
    if (normalized === 'diagonal_skew') normalized = 'glass_studio';

    const input = document.getElementById('set-bg-style');
    if (input) input.value = normalized;

    const customUrl = document.getElementById('set-bg-custom-url')?.value || '';

    document.querySelectorAll('.bg-mockup-card').forEach(card => {
        card.classList.remove('active', 'border-[var(--color-primary)]', 'shadow-md', 'ring-2', 'ring-[var(--color-primary)]/20');
        card.classList.add('border-slate-200', 'dark:border-slate-700/80');
        const badge = card.querySelector('.active-check-badge');
        if (badge) badge.classList.add('hidden');
    });

    const activeCard = document.getElementById(`bg-opt-${normalized}`);
    if (activeCard) {
        activeCard.classList.add('active', 'border-[var(--color-primary)]', 'shadow-md', 'ring-2', 'ring-[var(--color-primary)]/20');
        activeCard.classList.remove('border-slate-200', 'dark:border-slate-700/80');
        const badge = activeCard.querySelector('.active-check-badge');
        if (badge) badge.classList.remove('hidden');
    }

    applyBackgroundStyle(normalized, customUrl);
};

/**
 * Buka formulir pengaturan spesifik
 */
export const openSettingForm = (type) => {
    let title, subtitle, icon, colorTheme, formContent;

    if (type === 'profile') {
        title = "Profil Toko & Tampilan Visual"; 
        subtitle = "Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal";
        icon = "fa-store"; 
        colorTheme = { line: "bg-[var(--color-primary)]", box: "bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]" };
        
        const currentTheme = appData.store.uiTheme || 'emerald';
        let currentBgStyle = appData.store.bgStyle || localStorage.getItem('freshmart_bg_style') || 'minimalist';
        if (currentBgStyle === 'dual_tone') currentBgStyle = 'aurora_glow';
        if (currentBgStyle === 'geometric_3d') currentBgStyle = 'tech_grid';
        if (currentBgStyle === 'diagonal_skew') currentBgStyle = 'glass_studio';
        const presetNames = {
            emerald: "Emerald", teal: "Teal", lime: "Lime", cyan: "Cyan", sky: "Sky",
            blue: "Blue", indigo: "Indigo", violet: "Violet", purple: "Purple",
            fuchsia: "Fuchsia", pink: "Pink", rose: "Rose", red: "Red",
            orange: "Orange", amber: "Amber", yellow: "Yellow", green: "Green",
            slate: "Slate", stone: "Stone"
        };
        
        const presetHtml = Object.keys(uiPalettes).map(key => {
            const hex = uiPalettes[key][500];
            const name = presetNames[key] || key;
            const isActive = currentTheme === key;
            const ringCls = isActive ? 'ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110' : '';
            const checkCls = isActive ? '' : 'hidden';
            return `
                <button type="button" id="preset-chip-${key}" onclick="selectPresetTheme('${key}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${ringCls}" 
                        style="background-color: ${hex}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${name}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${checkCls}"></i>
                </button>
            `;
        }).join('');

        formContent = `
            <!-- KARTU 1: IDENTITAS UTAMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shop"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Identitas Pokok &amp; Branding Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nama toko, slogan, logo aplikasi, dan deskripsi publik</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nama Toko (Nama Aplikasi)</label>
                        <input autocomplete='off' id="set-name" value="${esc(appData.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${esc(appData.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${esc(appData.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${esc(appData.store.email || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${esc(appData.store.description)}</textarea>
                </div>
            </div>
            
            <!-- KARTU 2: WARNA TEMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-palette"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Warna Tema &amp; Header PWA</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih palet warna khas toko atau gunakan pemilih warna bebas</p>
                    </div>
                </div>

                <input type="hidden" id="set-ui-theme" value="${currentTheme}">
                <input type="hidden" id="set-theme-color" value="${esc(appData.store.themeColor || '#10b981')}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${presetHtml}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${esc(appData.store.themeColor || '#10b981')}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                            oninput="
                                const hex = this.value;
                                document.getElementById('set-theme-color').value = hex;
                                document.getElementById('custom-color-chip').style.background = hex;
                                document.getElementById('custom-color-chip').querySelector('i').style.color = '#fff';
                                document.querySelectorAll('.preset-color-chip').forEach(el => {
                                    el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
                                    el.querySelector('.check-icon')?.classList.add('hidden');
                                });
                                document.getElementById('set-ui-theme').value = 'custom';
                                applyUITheme('custom', hex);
                            ">
                    </div>
                </div>
            </div>

            <!-- KARTU 3: MODEL GAYA VISUAL BACKGROUND TOKO & WALLPAPER KUSTOM -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Model Gaya Visual Background Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih tata letak grafis latar belakang halaman utama dan wallpaper kustom</p>
                    </div>
                </div>

                <input type="hidden" id="set-bg-style" value="${currentBgStyle}">
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
                    <!-- 1. Hero Arch -->
                    <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'hero_arch' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'hero_arch' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-arch">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] text-[8px] font-bold mb-1 tracking-wider uppercase">Super-App</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Kanopi dome lengkung</span>
                        </div>
                    </button>

                    <!-- 2. Aurora Glow -->
                    <button type="button" onclick="selectBgStyle('aurora_glow')" id="bg-opt-aurora_glow"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'aurora_glow' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'aurora_glow' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-aurora">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header">
                                    <div class="mini-aura-orb -top-2 -left-2"></div>
                                    <div class="mini-aura-orb -top-2 -right-2"></div>
                                </div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Modern iOS</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Aurora Glow</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Mesh aura dinamis</span>
                        </div>
                    </button>

                    <!-- 3. Tech Grid -->
                    <button type="button" onclick="selectBgStyle('tech_grid')" id="bg-opt-tech_grid"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'tech_grid' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'tech_grid' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-tech">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Pro Teknik</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Tech Grid</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Dot-matrix blueprint</span>
                        </div>
                    </button>

                    <!-- 4. Glass Studio -->
                    <button type="button" onclick="selectBgStyle('glass_studio')" id="bg-opt-glass_studio"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'glass_studio' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'glass_studio' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-glass">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Frosted Lux</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Glass Studio</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Kedalaman bias kaca</span>
                        </div>
                    </button>

                    <!-- 5. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer col-span-2 sm:col-span-1 ${currentBgStyle === 'minimalist' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'minimalist' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-minimal">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-slate-500/10 text-slate-600 dark:text-slate-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Studio Clean</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                        </div>
                    </button>
                </div>

                <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> Gambar / Wallpaper Background Kustom (Opsional)
                    </label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-bg-custom-url" value="${esc(appData.store.bgCustomUrl || '')}"
                               class="admin-input !py-3 bg-white dark:bg-slate-900 flex-1 shadow-sm text-xs"
                               placeholder="URL Gambar Background (Opsional, contoh: https://...)"
                               oninput="if(typeof window.applyBackgroundStyle==='function') window.applyBackgroundStyle(document.getElementById('set-bg-style').value, this.value)">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up sm:mr-1.5"></i> <span class="hidden sm:inline">Upload</span>
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-bg-custom-url')">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                        Jika diisi, gambar otomatis dipasang sebagai wallpaper latar belakang aplikasi dan halaman toko.
                    </p>
                </div>
            </div>

            <!-- KARTU 4: WAKTU OPERASIONAL, FOOTER & HADIAH -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Operasional Publik &amp; Fitur Tambahan</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jam buka toko, teks hak cipta footer, dan katalog tukar reward</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Jam Operasional Toko</label>
                        <input autocomplete='off' id="set-hours" value="${esc(appData.store.operationalHours || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${esc(appData.store.footerCredit || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${appData.store.showRewardCatalog !== false ? 'selected' : ''}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${appData.store.showRewardCatalog === false ? 'selected' : ''}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `;
    } else if (type === 'catalog') {
        title = "Tampilan Kategori & Merek"; 
        subtitle = "Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda";
        icon = "fa-palette"; 
        colorTheme = { line: "bg-blue-500", box: "bg-blue-50 dark:bg-blue-900/30 text-blue-500" };
        formContent = `
            <!-- KARTU 1: TATA LETAK KATEGORI -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Kategori</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur model navigasi kategori produk untuk memudahkan pencarian barang oleh pelanggan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Kategori</label>
                        <select id="set-category-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="grid" ${appData.store.categoryStyle === 'grid' ? 'selected' : ''}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${appData.store.categoryStyle === 'pill' ? 'selected' : ''}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${appData.store.showCategories !== false ? 'selected' : ''}>Tampilkan Slider Kategori</option>
                            <option value="false" ${appData.store.showCategories === false ? 'selected' : ''}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-xl text-[11px] text-blue-700 dark:text-blue-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500 mt-0.5"></i>
                    <span><b>Tips Desain:</b> Model <i>Pill Horizontal Scroll</i> sangat hemat ruang di layar HP, sedangkan <i>Grid Ikon</i> mempermudah pelanggan melihat seluruh kategori sekaligus.</span>
                </div>
            </div>

            <!-- KARTU 2: TATA LETAK MEREK (BRAND) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Merek / Brand</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur visualisasi merek mitra dagang resmi pada halaman depan toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Merek</label>
                        <select id="set-brand-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="logo" ${appData.store.brandStyle === 'logo' || !appData.store.brandStyle ? 'selected' : ''}>Logo Kotak (Grid Visual)</option>
                            <option value="text" ${appData.store.brandStyle === 'text' ? 'selected' : ''}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${appData.store.showBrands !== false ? 'selected' : ''}>Tampilkan Slider Merek</option>
                            <option value="false" ${appData.store.showBrands === false ? 'selected' : ''}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>
        `;
    } else if (type === 'shipping') {
        title = "Pengiriman & Lokasi Toko"; 
        subtitle = "Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko";
        icon = "fa-motorcycle"; 
        colorTheme = { line: "bg-amber-500", box: "bg-amber-50 dark:bg-amber-900/30 text-amber-500" };
        formContent = `
            <!-- KARTU 1: KONTAK & METODE PENGANTARAN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Kontak Admin &amp; Metode Pengantaran</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nomor WhatsApp konfirmasi, tarif dasar ongkir kurir, dan alamat fisik toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nomor WhatsApp Admin</label>
                        <input autocomplete='off' id="set-wa" value="${esc(appData.store.wa || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${esc(appData.store.costPerKm || 0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${esc(appData.store.address || '')}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${appData.store.isDeliveryEnabled !== false ? 'selected' : ''}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${appData.store.isDeliveryEnabled === false ? 'selected' : ''}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${appData.store.isPickupEnabled !== false ? 'selected' : ''}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${appData.store.isPickupEnabled === false ? 'selected' : ''}>Nonaktif</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- KARTU 2: PROMO GRATIS ONGKIR MINIMAL BELANJA -->
            <div class="p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">Promo Gratis Ongkir Otomatis</h4>
                        <p class="text-[10px] text-emerald-700 dark:text-emerald-400">Otomatis bebas ongkir saat total belanja pelanggan mencapai nominal batas minimal</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Promo</label>
                        <select id="set-free-shipping-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${(appData.store.freeShippingMinSpendEnabled === true || appData.store.freeShippingMinSpendEnabled === 'true') ? 'selected' : ''}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${(appData.store.freeShippingMinSpendEnabled !== true && appData.store.freeShippingMinSpendEnabled !== 'true') ? 'selected' : ''}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${esc(appData.store.freeShippingMinSpendAmount || 0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Contoh: 1000000 (Rp 1.000.000). Bilah progres belanja akan tampil di keranjang.</span>
                    </div>
                </div>
            </div>

            <!-- KARTU 3: KOTAK GEOLOKASI GPS CERDAS TOKO -->
            <div class="p-4 sm:p-5 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-indigo-50/50 dark:from-blue-950/30 dark:via-sky-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-md shadow-blue-500/20 shrink-0">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-blue-950 dark:text-blue-200 uppercase tracking-wider">Lokasi Toko &amp; Pin Google Maps</h4>
                            <p class="text-[10px] text-blue-700 dark:text-blue-400">Tinggal tempel link atau angka koordinat dari Google Maps — sistem langsung mengekstrak titik presisi</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="btn-preview-maps" onclick="previewStoreOnMaps()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95" title="Buka dan Cek Titik di Google Maps">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Cek di Maps
                        </button>
                        <button type="button" onclick="detectAdminGPS()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95" title="Ambil GPS Perangkat Saat Ini">
                            <i class="fa-solid fa-crosshairs"></i> GPS Saya
                        </button>
                    </div>
                </div>

                <!-- Input Cerdas Tempel Link / Koordinat -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                        <span>Tempel Link / Koordinat Google Maps</span>
                        <span class="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-100/70 dark:bg-blue-900/50 px-2 py-0.5 rounded-md">Smart Auto-Extract</span>
                    </label>
                    <div class="relative flex items-center">
                        <input autocomplete='off' id="set-maps-smart-input" 
                            value="${esc(appData.store.lat && appData.store.lng ? `${appData.store.lat}, ${appData.store.lng}` : '-7.82308507053985, 112.0988374794464')}"
                            placeholder="Tempel di sini: -7.823085, 112.098837 atau link Google Maps" 
                            class="admin-input !py-3 !pr-24 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs text-slate-800 dark:text-slate-100"
                            oninput="handleSmartMapsInput(this.value)"
                            onpaste="setTimeout(() => handleSmartMapsInput(this.value), 50)">
                        <button type="button" onclick="pasteFromClipboardToMapsInput()" class="absolute right-2 px-3 py-1.5 text-[10px] font-bold rounded-lg bg-blue-50 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 active:scale-95 transition-all flex items-center gap-1">
                            <i class="fa-solid fa-paste"></i> Tempel
                        </button>
                    </div>
                    <div id="maps-smart-feedback" class="text-[10px] mt-1.5 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> <span>Koordinat aktif: Presisi tinggi terhubung ke kalkulator ongkir kurir</span>
                    </div>
                </div>

                <!-- Kolom Terpisah Latitude & Longitude Presisi Tinggi -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-blue-100 dark:border-blue-900/40">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Latitude Toko (Garis Lintang)</label>
                        <input autocomplete='off' id="set-lat" value="${esc(appData.store.lat || '-7.82308507053985')}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${esc(appData.store.lng || '112.0988374794464')}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'payment') {
        title = "Metode Pembayaran QRIS"; 
        subtitle = "Konfigurasi barcode QRIS resmi toko untuk penerimaan pembayaran instan via e-wallet dan m-banking";
        icon = "fa-qrcode"; 
        colorTheme = { line: "bg-indigo-500", box: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500" };
        formContent = `
            <!-- KARTU 1: INTEGRASI BARCODE QRIS TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-qrcode"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Barcode Pembayaran QRIS Nasional</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Mendukung scan dari GoPay, OVO, DANA, ShopeePay, BCA, Mandiri, BRI, BNI, dan seluruh bank</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">URL Gambar Barcode QRIS</label>
                    <div class="flex gap-2">
                        <input autocomplete='off' id="set-qris-url" value="${esc(appData.payment?.qrisUrl || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                        <label class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                        </label>
                    </div>
                </div>

                <!-- PREVIEW BOX QRIS -->
                ${appData.payment?.qrisUrl ? `
                    <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                        <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                            <img src="${esc(appData.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
                        </div>
                        <div class="text-center sm:text-left space-y-1">
                            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold">
                                <i class="fa-solid fa-circle-check"></i> QRIS Siap Digunakan
                            </div>
                            <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100">Barcode QRIS Aktif di Halaman Checkout</h5>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400">Gambar barcode di atas akan otomatis ditampilkan dengan jelas saat pembeli memilih opsi pembayaran QRIS.</p>
                        </div>
                    </div>
                ` : `
                    <div class="p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-2">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 mx-auto flex items-center justify-center text-xl">
                            <i class="fa-solid fa-qrcode"></i>
                        </div>
                        <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200">Belum Ada Barcode QRIS</h5>
                        <p class="text-[11px] text-slate-400 max-w-sm mx-auto">Klik tombol <b>Upload QRIS</b> di atas untuk mengunggah gambar barcode QRIS toko Anda agar pembeli bisa membayar secara digital.</p>
                    </div>
                `}

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-shield-halved text-indigo-500 mt-0.5"></i>
                    <span><b>Keamanan Transaksi:</b> Pastikan barcode QRIS yang diunggah memiliki nama toko Anda yang terdaftar resmi di penyedia jasa pembayaran (PJSP).</span>
                </div>
            </div>
        `;
    } else if (type === 'config') {
        title = "Sistem & Integrasi Cloud"; 
        subtitle = "Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive";
        icon = "fa-laptop-code"; 
        colorTheme = { line: "bg-rose-500", box: "bg-rose-50 dark:bg-rose-900/30 text-rose-500" };
        formContent = `
            <!-- KARTU 1: INTEGRASI GOOGLE APPS SCRIPT (GAS) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Google Apps Script Endpoint (Media Drive)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jalur serverless gratis untuk upload foto produk & bukti transfer langsung ke Google Drive toko</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Web App URL Endpoint</label>
                    <input autocomplete='off' id="set-gas-url" value="${esc(appData.config?.gasUrl || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${appData.config?.gasUrl ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${appData.config?.gasUrl ? 'Integrasi Cloud Storage Aktif' : 'Endpoint Belum Dikonfigurasi'}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `;
    } else if (type === 'operasional') {
        title = "Operasional & Perpajakan"; 
        subtitle = "Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member";
        icon = "fa-sliders"; 
        colorTheme = { line: "bg-violet-500", box: "bg-violet-50 dark:bg-violet-900/30 text-violet-500" };
        formContent = `
            <!-- KARTU 1: MANAJEMEN STOK PRODUK -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-violet-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-boxes-stacked"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Manajemen Inventaris &amp; Kontrol Stok</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur perilaku katalog toko saat kuantitas stok produk mencapai angka 0</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Mode Pengurangan &amp; Pembatasan Stok</label>
                    <select id="set-use-stock" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${appData.store.useStock === true ? 'selected' : ''}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${appData.store.useStock !== true ? 'selected' : ''}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
                    </select>
                </div>

                <div class="p-3 bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40 rounded-xl text-[11px] text-violet-700 dark:text-violet-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-violet-500 mt-0.5"></i>
                    <span>Saat mode aktif, setiap transaksi kasir atau checkout online akan otomatis memotong stok barang secara real-time.</span>
                </div>
            </div>

            <!-- KARTU 2: PERHITUNGAN PAJAK PPN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Konfigurasi Pajak Pertambahan Nilai (PPN)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur skema perpajakan resmi pada kalkulasi struk kasir, invoice A4, dan checkout belanja</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                        <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${appData.store.ppnEnabled === true ? 'selected' : ''}>Aktif (Kalkulasi PPN Dihitung)</option>
                            <option value="false" ${appData.store.ppnEnabled !== true ? 'selected' : ''}>Nonaktif (Bebas PPN)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                        <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="exclusive" ${appData.store.ppnType !== 'inclusive' ? 'selected' : ''}>Eksklusif (Ditambah di checkout)</option>
                            <option value="inclusive" ${appData.store.ppnType === 'inclusive' ? 'selected' : ''}>Inklusif (Sudah termasuk di harga)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                        <input autocomplete='off' type="number" id="set-ppn-rate" value="${esc(appData.store.ppnRate || 11)}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="11">
                    </div>
                </div>

                <div class="p-3 bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 rounded-xl text-[11px] text-purple-700 dark:text-purple-300 flex items-start gap-2">
                    <i class="fa-solid fa-file-invoice-dollar text-purple-500 mt-0.5"></i>
                    <span><b>Penjelasan Skema:</b> <i>Eksklusif</i> akan menambahkan nilai pajak di atas subtotal belanja pelanggan. <i>Inklusif</i> akan menguraikan nilai pajak tanpa menambah total yang harus dibayar pembeli.</span>
                </div>
            </div>

            <!-- KARTU 3: PROGRAM POIN BELANJA & LOYALITAS MEMBER -->
            <div class="p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">Program Poin Belanja &amp; Loyalitas Member</h4>
                        <p class="text-[10px] text-amber-700 dark:text-amber-400">Berikan poin belanja otomatis pada produk yang tidak memiliki poin langsung dengan kelipatan nominal belanja</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Program Poin</label>
                        <select id="set-spend-points-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${(appData.store.spendPointsEnabled === true || appData.store.spendPointsEnabled === 'true') ? 'selected' : ''}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${(appData.store.spendPointsEnabled !== true && appData.store.spendPointsEnabled !== 'true') ? 'selected' : ''}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${esc(appData.store.spendPointsThreshold || 100000)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${esc(appData.store.spendPointsPerThreshold || 1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
                    </div>
                </div>

                <div class="p-3 bg-white/80 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-800/40 rounded-xl text-[11px] text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-amber-500 mt-0.5 shrink-0"></i>
                    <span><b>Sistem Hibrida Cerdas:</b> Produk yang sudah memiliki poin reward langsung akan tetap memberikan poin per item. Untuk produk tanpa poin, nilai total belanjanya akan diakumulasikan dan dihitung poinnya sesuai kelipatan minimal belanja di atas (contoh: Belanja Rp 100.000 = 1 poin, Rp 200.000 = 2 poin).</span>
                </div>
            </div>
        `;
    }

    let h = `
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex items-center justify-between">
            <button onclick="rAdmSet()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-xs shadow-sm transition-all active:scale-95">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Menu Pengaturan
            </button>
            <button onclick="saveAdminSettings('${type}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-sm transition-all active:scale-95 hover:opacity-95" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5 ${colorTheme.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-700/80">
                    <div class="w-12 h-12 rounded-2xl ${colorTheme.box} flex items-center justify-center shrink-0 text-xl shadow-sm"><i class="fa-solid ${icon}"></i></div> 
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base tracking-wide leading-tight">${title}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${subtitle || 'Konfigurasi pengaturan toko'}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${formContent}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${type}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;
    setH('admin-content', h);

    if (type === 'profile') {
        const savedTheme = appData.store.uiTheme || '';
        const savedColor = appData.store.themeColor || '#10b981';
        const isCustom = savedTheme === 'custom' || !uiPalettes?.[savedTheme];
        if (isCustom) {
            setTimeout(() => {
                const chip = document.getElementById('custom-color-chip');
                if (chip) { 
                    chip.style.background = savedColor; 
                    const ic = chip.querySelector('i'); 
                    if (ic) ic.style.color = '#fff'; 
                }
            }, 50);
        }
    }
};

export const saveAdminSettings = async (type) => {
    if (isSaving) return; 
    setIsSaving(true); 
    sLoad('Menyimpan...');
    try {
        if (type === 'profile') {
            appData.store.name = getV('set-name'); 
            appData.store.slogan = getV('set-slogan'); 
            appData.store.logo = fixD(getV('set-logo')); 
            appData.store.description = getV('set-description'); 
            appData.store.email = getV('set-email');
            appData.store.showRewardCatalog = getV('set-show-reward-catalog') === 'true';
            appData.store.operationalHours = getV('set-hours');
            appData.store.footerCredit = getV('set-credit');
            appData.store.themeColor = getV('set-theme-color'); 
            appData.store.uiTheme = getV('set-ui-theme');
            appData.store.bgStyle = getV('set-bg-style') || 'minimalist';
            appData.store.bgCustomUrl = fixD(getV('set-bg-custom-url'));
            
            localStorage.setItem('freshmart_theme_color', appData.store.themeColor);
            localStorage.setItem('freshmart_ui_theme', appData.store.uiTheme);
            localStorage.setItem('freshmart_bg_style', appData.store.bgStyle);
            localStorage.setItem('freshmart_bg_custom_url', appData.store.bgCustomUrl || '');
            
            applyUITheme(appData.store.uiTheme, appData.store.themeColor);
            applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
        } else if (type === 'catalog') {
            appData.store.categoryStyle = getV('set-category-style'); 
            appData.store.brandStyle = getV('set-brand-style'); 
            appData.store.showCategories = getV('set-show-categories') === 'true';
            appData.store.showBrands = getV('set-show-brands') === 'true';
        } else if (type === 'shipping') {
            appData.store.wa = getV('set-wa').replace(/\D/g, ''); 
            appData.store.address = getV('set-address'); 
            appData.store.costPerKm = getV('set-cost'); 
            appData.store.isDeliveryEnabled = getV('set-delivery-enabled') === 'true'; 
            appData.store.isPickupEnabled = getV('set-pickup-enabled') === 'true'; 
            appData.store.freeShippingMinSpendEnabled = getV('set-free-shipping-enabled') === 'true';
            appData.store.freeShippingMinSpendAmount = Math.max(0, parseFloat(getV('set-free-shipping-amount')) || 0);

            let latVal = (getV('set-lat') || '').trim();
            let lngVal = (getV('set-lng') || '').trim();
            const smartVal = (getV('set-maps-smart-input') || '').trim();

            if (smartVal && typeof window.parseGeoCoordinates === 'function') {
                const parsed = window.parseGeoCoordinates(smartVal);
                if (parsed) {
                    latVal = parsed.lat;
                    lngVal = parsed.lng;
                }
            }
            if (!latVal || !lngVal) {
                latVal = "-7.82308507053985";
                lngVal = "112.0988374794464";
            }
            appData.store.lat = latVal; 
            appData.store.lng = lngVal; 
        } else if (type === 'payment') {
            if (!appData.payment) appData.payment = {};
            appData.payment.qrisUrl = fixD(getV('set-qris-url')); 
        } else if (type === 'config') {
            if (!appData.config) appData.config = {};
            appData.config.gasUrl = getV('set-gas-url');
            showToast("Pengaturan GAS URL tersimpan.");
        } else if (type === 'operasional') {
            appData.store.useStock   = getV('set-use-stock') === 'true';
            appData.store.ppnEnabled = getV('set-ppn-enabled') === 'true';
            appData.store.ppnType    = getV('set-ppn-type') || 'exclusive';
            appData.store.ppnRate    = parseFloat(getV('set-ppn-rate')) || 11;
            appData.store.spendPointsEnabled = getV('set-spend-points-enabled') === 'true';
            appData.store.spendPointsThreshold = Math.max(1, parseFloat(getV('set-spend-points-threshold')) || 100000);
            appData.store.spendPointsPerThreshold = Math.max(1, parseFloat(getV('set-spend-points-per-threshold')) || 1);
            toggleTaxMenuVisibility();
        }
        
        const settingsKeyMap = { profile: 'store', catalog: 'store', shipping: 'store', operasional: 'store', payment: 'payment', config: 'config' };
        if (typeof window.saveApp === 'function') {
            await window.saveApp([settingsKeyMap[type] || 'store']);
        }
        
        if (type === 'profile' || type === 'config') {
            showToast(type === 'config' ? "Sistem Diperbarui! Memuat Ulang..." : "Warna Berubah! Memuat Ulang...");
            setTimeout(() => location.reload(), 1500); 
        } else {
            showToast("Tersimpan!");
            rAdmSet(); 
        }
    } catch(e) { 
        showToast("Gagal menyimpan pengaturan"); 
    } finally { 
        setIsSaving(false); 
        hLoad(); 
    }
};

/**
 * Handler input cerdas tautan / koordinat Google Maps
 */
export const handleSmartMapsInput = (val) => {
    const parseFn = typeof window.parseGeoCoordinates === 'function' ? window.parseGeoCoordinates : null;
    const result = parseFn ? parseFn(val) : null;
    const fb = document.getElementById('maps-smart-feedback');
    const latInp = document.getElementById('set-lat');
    const lngInp = document.getElementById('set-lng');
    
    if (result) {
        if (latInp) latInp.value = result.lat;
        if (lngInp) lngInp.value = result.lng;
        if (fb) {
            fb.className = "text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5";
            fb.innerHTML = `<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${result.lat}, ${result.lng}</b></span>`;
        }
    } else if (val && val.trim().length > 3) {
        if (fb) {
            fb.className = "text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5";
            fb.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>`;
        }
    } else {
        if (fb) {
            fb.className = "text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5";
            fb.innerHTML = `<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>`;
        }
    }
};

export const handleManualCoordChange = () => {
    const latInp = document.getElementById('set-lat');
    const lngInp = document.getElementById('set-lng');
    const smartInp = document.getElementById('set-maps-smart-input');
    if (latInp && lngInp && smartInp && latInp.value && lngInp.value) {
        smartInp.value = `${latInp.value.trim()}, ${lngInp.value.trim()}`;
    }
};

export const pasteFromClipboardToMapsInput = async () => {
    const smartInp = document.getElementById('set-maps-smart-input');
    if (!smartInp) return;
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            if (text) {
                smartInp.value = text;
                handleSmartMapsInput(text);
                showToast("Teks berhasil ditempel dari clipboard!");
                return;
            }
        }
    } catch(e) {}
    smartInp.focus();
    showToast("Silakan tekan Ctrl+V atau tahan untuk menempel");
};

export const previewStoreOnMaps = () => {
    const latInp = document.getElementById('set-lat');
    const lngInp = document.getElementById('set-lng');
    let lat = latInp ? latInp.value.trim() : '';
    let lng = lngInp ? lngInp.value.trim() : '';
    
    if (!lat || !lng) {
        const smartInp = document.getElementById('set-maps-smart-input');
        if (smartInp && smartInp.value && typeof window.parseGeoCoordinates === 'function') {
            const res = window.parseGeoCoordinates(smartInp.value);
            if (res) { lat = res.lat; lng = res.lng; }
        }
    }
    
    if (lat && lng) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lat},${lng}`)}`, '_blank');
    } else {
        showToast("Masukkan koordinat toko terlebih dahulu");
    }
};

export const detectAdminGPS = () => {
    if (!navigator.geolocation) {
        showToast("Browser tidak mendukung sensor GPS");
        return;
    }
    showToast("Sedang mendeteksi lokasi GPS...");
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude.toString();
        const lng = pos.coords.longitude.toString();
        const smartInp = document.getElementById('set-maps-smart-input');
        if (smartInp) smartInp.value = `${lat}, ${lng}`;
        handleSmartMapsInput(`${lat}, ${lng}`);
        showToast("Lokasi GPS berhasil didapatkan!");
    }, () => {
        showToast("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.");
    }, { enableHighAccuracy: true, timeout: 15000 });
};

/**
 * Backup seluruh data JSON toko ke file lokal
 */
export const backupData = () => { 
    const jsonStr = JSON.stringify(appData, null, 2);
    const fileName = `backup_tokoputri_${new Date().toISOString().slice(0, 10)}.json`; 
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
        const base64Str = btoa(unescape(encodeURIComponent(jsonStr)));
        window.AndroidNativeApp.saveOrShareFile(base64Str, fileName, 'application/json');
    } else {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonStr);
        const a = document.createElement('a'); 
        a.href = dataStr; 
        a.download = fileName; 
        document.body.appendChild(a); 
        a.click(); 
        a.remove(); 
    }
    showToast("Backup berhasil disimpan!"); 
};

/**
 * Restore data toko dari file JSON lokal
 */
export const restoreData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = async (v) => {
        try {
            const parsed = JSON.parse(v.target.result);
            Object.assign(appData, parsed);
            if (typeof window.saveApp === 'function') {
                await window.saveApp(); 
            }
            showToast("Data dipulihkan!"); 
            setTimeout(() => location.reload(), 1000);
        } catch(x) { 
            showToast("Gagal memulihkan data!"); 
        }
    };
    r.readAsText(file);
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.syncAppMeta = syncAppMeta;
window.rAdmSet = rAdmSet;
window.selectPresetTheme = selectPresetTheme;
window.selectBgStyle = selectBgStyle;
window.openSettingForm = openSettingForm;
window.saveAdminSettings = saveAdminSettings;
window.backupData = backupData;
window.restoreData = restoreData;
window.handleSmartMapsInput = handleSmartMapsInput;
window.handleManualCoordChange = handleManualCoordChange;
window.pasteFromClipboardToMapsInput = pasteFromClipboardToMapsInput;
window.previewStoreOnMaps = previewStoreOnMaps;
window.detectAdminGPS = detectAdminGPS;

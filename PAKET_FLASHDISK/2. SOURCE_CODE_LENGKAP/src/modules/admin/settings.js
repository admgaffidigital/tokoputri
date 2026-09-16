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

/**
 * Sinkronisasi metadata PWA & title browser
 */
export const syncAppMeta = () => {
    const sName = appData.store.name || 'Toko Grosir';
    const sColor = appData.store.themeColor || '#10b981';

    const setM = (n, c, isProp = false) => { 
        let m = document.querySelector(`meta[${isProp ? 'property' : 'name'}="${n}"]`); 
        if (!m) { 
            m = document.createElement('meta'); 
            isProp ? m.setAttribute('property', n) : m.setAttribute('name', n); 
            document.head.appendChild(m); 
        } 
        m.setAttribute('content', c); 
    };

    setM('theme-color', sColor); 
    setM('mobile-web-app-capable', 'yes'); 
    setM('apple-mobile-web-app-capable', 'yes');
    setM('apple-mobile-web-app-status-bar-style', 'black-translucent'); 
    setM('apple-mobile-web-app-title', sName);
    setM('application-name', sName); 
    setM('msapplication-TileColor', sColor);
    document.title = sName;

    localStorage.setItem('freshmart_theme_color', sColor);

    if (appData.store.uiTheme && appData.store.uiTheme !== localStorage.getItem('freshmart_ui_theme')) {
        localStorage.setItem('freshmart_ui_theme', appData.store.uiTheme);
        applyUITheme(appData.store.uiTheme);
    }

    const sBgStyle = appData.store.bgStyle || localStorage.getItem('freshmart_bg_style') || 'minimalist';
    const sBgCustom = appData.store.bgCustomUrl !== undefined ? appData.store.bgCustomUrl : (localStorage.getItem('freshmart_bg_custom_url') || '');
    applyBackgroundStyle(sBgStyle, sBgCustom);
};

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
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pilih menu konfigurasi di bawah</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-6">
            <button onclick="openSettingForm('profile')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[rgba(var(--color-primary-rgb),0.4)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300 z-10" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background='rgba(var(--color-primary-rgb),0.1)'"><i class="fa-solid fa-store text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Profil Toko</span>
            </button>
            <button onclick="openSettingForm('catalog')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-palette text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Kategori UI UX</span>
            </button>
            <button onclick="openSettingForm('shipping')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-motorcycle text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Pengiriman</span>
            </button>
            <button onclick="openSettingForm('payment')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-qrcode text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">QRIS Pay</span>
            </button>
            <button onclick="openSettingForm('config')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-laptop-code text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Sistem & API</span>
            </button>
            <button onclick="openSettingForm('operasional')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary-dark)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-sliders text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Operasional</span>
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 class="font-bold text-slate-700 dark:text-white mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2"><i class="fa-solid fa-database" style="color: var(--color-primary)"></i> Pencadangan Data</h3>
            <div class="flex flex-col sm:flex-row gap-3">
                <button onclick="backupData()" class="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90"><i class="fa-solid fa-download"></i> Backup Lokal (.json)</button>
                <button onclick="el('restore-file').click()" class="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95"><i class="fa-solid fa-upload"></i> Restore Data</button>
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
    const input = document.getElementById('set-bg-style');
    if (input) input.value = styleName;

    const customUrl = document.getElementById('set-bg-custom-url')?.value || '';

    document.querySelectorAll('.bg-style-card').forEach(card => {
        card.classList.remove('border-[var(--color-primary)]', 'shadow-md', 'ring-2', 'ring-[var(--color-primary)]/20');
        card.classList.add('border-slate-200', 'dark:border-slate-700');
        const iconWrap = card.querySelector('.bg-icon-wrap');
        if (iconWrap) {
            iconWrap.className = 'bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
        }
    });

    const activeCard = document.getElementById(`bg-opt-${styleName}`);
    if (activeCard) {
        activeCard.classList.add('border-[var(--color-primary)]', 'shadow-md', 'ring-2', 'ring-[var(--color-primary)]/20');
        activeCard.classList.remove('border-slate-200', 'dark:border-slate-700');
        const iconWrap = activeCard.querySelector('.bg-icon-wrap');
        if (iconWrap) {
            iconWrap.className = 'bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-[var(--color-primary)] text-white shadow-sm';
        }
    }

    applyBackgroundStyle(styleName, customUrl);
};

/**
 * Buka formulir pengaturan spesifik
 */
export const openSettingForm = (type) => {
    let title, icon, colorTheme, formContent;

    if (type === 'profile') {
        title = "Profil Toko & Tampilan Visual"; 
        icon = "fa-store"; 
        colorTheme = { line: "bg-[var(--color-primary)]", box: "bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]" };
        
        const currentTheme = appData.store.uiTheme || 'emerald';
        const currentBgStyle = appData.store.bgStyle || localStorage.getItem('freshmart_bg_style') || 'minimalist';
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Toko (Nama Aplikasi)</label>
                    <input autocomplete='off' id="set-name" value="${esc(appData.store.name)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Slogan Toko</label>
                    <input autocomplete='off' id="set-slogan" value="${esc(appData.store.slogan)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            
            <!-- Warna Tema Toko -->
            <div class="grid grid-cols-1 gap-3">
                <div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <i class="fa-solid fa-palette" style="color:var(--color-primary)"></i> Warna Tema &amp; Header PWA
                    </label>
                    <input type="hidden" id="set-ui-theme" value="${currentTheme}">
                    <input type="hidden" id="set-theme-color" value="${esc(appData.store.themeColor || '#10b981')}">
                    <div class="flex flex-wrap gap-3">
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
            </div>

            <!-- Model Gaya Visual Background Toko & Wallpaper Kustom -->
            <div class="grid grid-cols-1 gap-3">
                <div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <i class="fa-solid fa-shapes" style="color:var(--color-primary)"></i> MODEL GAYA VISUAL BACKGROUND TOKO
                    </label>
                    <input type="hidden" id="set-bg-style" value="${currentBgStyle}">
                    
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
                        <!-- 1. Hero Arch -->
                        <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'hero_arch' ? 'border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${currentBgStyle === 'hero_arch' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                                <i class="fa-solid fa-circle-half-stroke"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header lengkung solid</span>
                        </button>

                        <!-- 2. Geometris 3D -->
                        <button type="button" onclick="selectBgStyle('geometric_3d')" id="bg-opt-geometric_3d"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'geometric_3d' ? 'border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${currentBgStyle === 'geometric_3d' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                                <i class="fa-solid fa-cube"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Geometris 3D</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Vektor sudut presisi</span>
                        </button>

                        <!-- 3. Diagonal Skew -->
                        <button type="button" onclick="selectBgStyle('diagonal_skew')" id="bg-opt-diagonal_skew"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'diagonal_skew' ? 'border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${currentBgStyle === 'diagonal_skew' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                                <i class="fa-solid fa-slash"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Diagonal Skew</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Aksen garis tegas</span>
                        </button>

                        <!-- 4. Dual-Tone -->
                        <button type="button" onclick="selectBgStyle('dual_tone')" id="bg-opt-dual_tone"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'dual_tone' ? 'border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${currentBgStyle === 'dual_tone' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Dual-Tone</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header solid 2 warna</span>
                        </button>

                        <!-- 5. Minimalis -->
                        <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer col-span-2 sm:col-span-1 ${currentBgStyle === 'minimalist' ? 'border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${currentBgStyle === 'minimalist' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">
                                <i class="fa-solid fa-square"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                        </button>
                    </div>

                    <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                    <div class="pt-4 border-t border-slate-200 dark:border-slate-700/80">
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> GAMBAR / WALLPAPER BACKGROUND KUSTOM (OPSIONAL)
                        </label>
                        <div class="flex gap-3">
                            <input autocomplete="off" id="set-bg-custom-url" value="${esc(appData.store.bgCustomUrl || '')}"
                                   class="admin-input !py-3.5 bg-white dark:bg-slate-800 flex-1 shadow-sm"
                                   placeholder="URL Gambar Background (Opsional, contoh: https://...)"
                                   oninput="if(typeof window.applyBackgroundStyle==='function') window.applyBackgroundStyle(document.getElementById('set-bg-style').value, this.value)">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold">
                                <i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span>
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-bg-custom-url')">
                            </label>
                        </div>
                        <p class="text-[9px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                            Jika diisi, gambar akan otomatis terpasang tajam dan jernih sebagai wallpaper latar belakang toko dan CMS.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Logo Toko (Ikon Aplikasi)</label>
                    <div class="flex gap-2">
                        <input autocomplete='off' id="set-logo" value="${esc(appData.store.logo)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                        </label>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Toko</label>
                    <input autocomplete='off' id="set-email" value="${esc(appData.store.email || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Deskripsi Toko</label>
                <textarea id="set-description" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${esc(appData.store.description)}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Jam Operasional</label>
                    <input autocomplete='off' id="set-hours" value="${esc(appData.store.operationalHours || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Teks Hak Cipta Footer</label>
                    <input autocomplete='off' id="set-credit" value="${esc(appData.store.footerCredit || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                <select id="set-show-reward-catalog" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                    <option value="true" ${appData.store.showRewardCatalog !== false ? 'selected' : ''}>Ya, Tampilkan Hadiah</option>
                    <option value="false" ${appData.store.showRewardCatalog === false ? 'selected' : ''}>Sembunyikan</option>
                </select>
            </div>
        `;
    } else if (type === 'catalog') {
        title = "Tampilan Kategori & Merek"; 
        icon = "fa-palette"; 
        colorTheme = { line: "bg-blue-500", box: "bg-blue-50 text-blue-500" };
        formContent = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Kategori</label>
                    <select id="set-category-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="grid" ${appData.store.categoryStyle === 'grid' ? 'selected' : ''}>Grid Ikon</option>
                        <option value="pill" ${appData.store.categoryStyle === 'pill' ? 'selected' : ''}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Merek</label>
                    <select id="set-brand-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="logo" ${appData.store.brandStyle === 'logo' || !appData.store.brandStyle ? 'selected' : ''}>Logo Kotak (Grid)</option>
                        <option value="text" ${appData.store.brandStyle === 'text' ? 'selected' : ''}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Kategori di Beranda</label>
                    <select id="set-show-categories" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.showCategories !== false ? 'selected' : ''}>Tampilkan</option>
                        <option value="false" ${appData.store.showCategories === false ? 'selected' : ''}>Sembunyikan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Merek di Beranda</label>
                    <select id="set-show-brands" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.showBrands !== false ? 'selected' : ''}>Tampilkan</option>
                        <option value="false" ${appData.store.showBrands === false ? 'selected' : ''}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `;
    } else if (type === 'shipping') {
        title = "Pengiriman & Lokasi Toko"; 
        icon = "fa-motorcycle"; 
        colorTheme = { line: "bg-amber-500", box: "bg-amber-50 text-amber-500" };
        formContent = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nomor WhatsApp Admin</label>
                    <input autocomplete='off' id="set-wa" value="${esc(appData.store.wa || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="Contoh: 08123456789">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ongkir per Kilometer (Rp)</label>
                    <input autocomplete='off' type="number" id="set-cost" value="${esc(appData.store.costPerKm || 0)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Alamat Lengkap Toko</label>
                <textarea id="set-address" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${esc(appData.store.address || '')}</textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Kirim ke Alamat</label>
                    <select id="set-delivery-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.isDeliveryEnabled !== false ? 'selected' : ''}>Aktif</option>
                        <option value="false" ${appData.store.isDeliveryEnabled === false ? 'selected' : ''}>Nonaktif</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Ambil di Toko</label>
                    <select id="set-pickup-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.isPickupEnabled !== false ? 'selected' : ''}>Aktif</option>
                        <option value="false" ${appData.store.isPickupEnabled === false ? 'selected' : ''}>Nonaktif</option>
                    </select>
                </div>
            </div>
            
            <!-- PROMO GRATIS ONGKIR MINIMAL BELANJA -->
            <div class="p-4 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl">
                <div class="flex items-center gap-2 mb-3">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xs shadow-sm">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">Promo Gratis Ongkir Otomatis</h4>
                        <p class="text-[10px] text-emerald-700 dark:text-emerald-400">Otomatis bebas ongkir saat total belanja pelanggan mencapai nominal minimal</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Promo</label>
                        <select id="set-free-shipping-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full">
                            <option value="true" ${(appData.store.freeShippingMinSpendEnabled === true || appData.store.freeShippingMinSpendEnabled === 'true') ? 'selected' : ''}>Aktif</option>
                            <option value="false" ${(appData.store.freeShippingMinSpendEnabled !== true && appData.store.freeShippingMinSpendEnabled !== 'true') ? 'selected' : ''}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${esc(appData.store.freeShippingMinSpendAmount || 0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Contoh: 1000000 (Rp 1.000.000). Otomatis ongkir jadi Rp 0 saat checkout.</span>
                    </div>
                </div>
            </div>
            <!-- KOTAK GEOLOKASI GPS CERDAS TOKO -->
            <div class="p-4 sm:p-5 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-indigo-50/50 dark:from-blue-950/30 dark:via-sky-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-base shadow-md shadow-blue-500/20 shrink-0">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-blue-950 dark:text-blue-200 uppercase tracking-wider">Lokasi Toko & Pin Google Maps</h4>
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
                            class="admin-input !py-3.5 !pr-24 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs text-slate-800 dark:text-slate-100"
                            oninput="handleSmartMapsInput(this.value)"
                            onpaste="setTimeout(() => handleSmartMapsInput(this.value), 50)">
                        <button type="button" onclick="pasteFromClipboardToMapsInput()" class="absolute right-2 px-3 py-2 text-[10px] font-bold rounded-xl bg-blue-50 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 active:scale-95 transition-all flex items-center gap-1">
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
        icon = "fa-qrcode"; 
        colorTheme = { line: "bg-indigo-500", box: "bg-indigo-50 text-indigo-500" };
        formContent = `
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">URL Gambar Barcode QRIS</label>
                <div class="flex gap-2">
                    <input autocomplete='off' id="set-qris-url" value="${esc(appData.payment?.qrisUrl || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1" placeholder="URL QRIS Image (atau klik Upload)">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                        <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                    </label>
                </div>
                ${appData.payment?.qrisUrl ? `
                    <div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center gap-4">
                        <img src="${esc(appData.payment.qrisUrl)}" alt="Preview QRIS" class="w-20 h-20 object-contain rounded-xl bg-white border border-slate-200 dark:border-slate-600 p-1">
                        <div>
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-200 block">Preview Barcode QRIS Aktif</span>
                            <span class="text-[10px] text-slate-400">Gambar ini akan tampil otomatis saat pelanggan checkout menggunakan QRIS.</span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    } else if (type === 'config') {
        title = "Sistem & Integrasi Cloud"; 
        icon = "fa-laptop-code"; 
        colorTheme = { line: "bg-rose-500", box: "bg-rose-50 text-rose-500" };
        formContent = `
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Google Apps Script URL (Media Drive)</label>
                <input autocomplete='off' id="set-gas-url" value="${esc(appData.config?.gasUrl || '')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="https://script.google.com/macros/s/.../exec">
                <p class="text-[9px] text-slate-500 dark:text-slate-400 mt-2">Digunakan untuk upload gambar produk & video promosi langsung ke Google Drive.</p>
            </div>
        `;
    } else if (type === 'operasional') {
        title = "Operasional & Pajak"; 
        icon = "fa-sliders"; 
        colorTheme = { line: "bg-violet-500", box: "bg-violet-50 text-violet-500" };
        formContent = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Manajemen Stok Produk</label>
                    <select id="set-use-stock" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.useStock === true ? 'selected' : ''}>Aktif (Produk otomatis habis jika stok 0)</option>
                        <option value="false" ${appData.store.useStock !== true ? 'selected' : ''}>Nonaktif (Stok tak terbatas)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Perhitungan Pajak PPN</label>
                    <select id="set-ppn-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${appData.store.ppnEnabled === true ? 'selected' : ''}>Aktif</option>
                        <option value="false" ${appData.store.ppnEnabled !== true ? 'selected' : ''}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tipe PPN</label>
                    <select id="set-ppn-type" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="exclusive" ${appData.store.ppnType !== 'inclusive' ? 'selected' : ''}>Eksklusif (Ditambah di checkout)</option>
                        <option value="inclusive" ${appData.store.ppnType === 'inclusive' ? 'selected' : ''}>Inklusif (Sudah termasuk di harga)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif PPN (%)</label>
                    <input autocomplete='off' type="number" id="set-ppn-rate" value="${esc(appData.store.ppnRate || 11)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
        `;
    }

    let h = `
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <button onclick="rAdmSet()" class="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all shadow-sm"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5 ${colorTheme.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <h3 class="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3 text-base">
                    <div class="w-10 h-10 rounded-xl ${colorTheme.box} flex items-center justify-center shrink-0"><i class="fa-solid ${icon}"></i></div> 
                    ${title}
                </h3>
                <div class="space-y-5">
                    ${formContent}
                </div>
            </div>
        </div>
        <button onclick="saveAdminSettings('${type}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Pengaturan</button>
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
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const a = document.createElement('a'); 
    a.href = dataStr; 
    a.download = `backup_freshmart_${new Date().toISOString().slice(0, 10)}.json`; 
    document.body.appendChild(a); 
    a.click(); 
    a.remove(); 
    showToast("Backup diunduh!"); 
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

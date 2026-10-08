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
    el, setH, getV, esc, fixD, fCur,
    showToast, sLoad, hLoad 
} from '../../core/utils.js';
import { uiPalettes, applyUITheme, applyBackgroundStyle } from '../../core/theme.js';
import { toggleTaxMenuVisibility } from './auth.js';
import { getPaylaterConfig, calculateInstallmentBreakdown, calculateAllPaylaterTenors } from '../../core/paylater.js';
import { getSubscriptionBentoHtml } from '../../core/subscription.js';

export { syncAppMeta } from '../../core/theme.js';

/**
 * Render menu grid utama pengaturan toko (Bento Grid Flagship - Screen 4 Aligned)
 */
export const rAdmSet = () => {
    let h = `
    <div class="max-w-full pb-6 sm:pb-8 text-sm fade-in-scale">
        <!-- Header Banner Bento -->
        <div class="mb-5 flex items-center justify-between bg-white/95 dark:bg-slate-900/80 p-4 sm:p-5 rounded-[1.5rem] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl text-white flex items-center justify-center text-xl shrink-0 shadow-md" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-sliders"></i>
                </div>
                <div>
                    <h2 class="font-black text-sm sm:text-base text-slate-800 dark:text-white uppercase tracking-wider leading-tight">Pengaturan Toko</h2>
                    <p class="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Kelola konfigurasi profil, katalog, pengiriman, pembayaran, dan operasional</p>
                </div>
            </div>
            <div class="hidden sm:flex items-center gap-2">
                <span class="px-3 py-1 rounded-xl border text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">
                    <i class="fa-solid fa-palette"></i> ${esc(appData.store.uiTheme || 'gold')}
                </span>
            </div>
        </div>

        <!-- 8-Card Symmetrical Bento Grid (2x4 on Desktop, 4x2 on Mobile) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-6">
            <!-- 1. Profil Toko -->
            <button onclick="openSettingForm('profile')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-store text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Profil Toko</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Branding &amp; Tema</span>
                </div>
            </button>

            <!-- 2. Kategori & Brand -->
            <button onclick="openSettingForm('catalog')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-palette text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Kategori &amp; Brand</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Layout &amp; Navigasi</span>
                </div>
            </button>

            <!-- 3. Pengiriman & Lokasi -->
            <button onclick="openSettingForm('shipping')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-motorcycle text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pengiriman</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Ongkir &amp; Lokasi</span>
                </div>
            </button>

            <!-- 4. Pembayaran (QRIS & Putri PayLater) -->
            <button onclick="openSettingForm('payment')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-wallet text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Pembayaran</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">QRIS &amp; Putri PayLater</span>
                </div>
            </button>

            <!-- 5. Sistem & API -->
            <button onclick="openSettingForm('config')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-laptop-code text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Sistem &amp; API</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Google Apps Script</span>
                </div>
            </button>

            <!-- 6. Operasional -->
            <button onclick="openSettingForm('operasional')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-sliders text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Operasional</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Stok, Pajak &amp; Poin</span>
                </div>
            </button>

            <!-- 7. Printer Struk -->
            <button onclick="openPrinterSettingsModal()" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-print text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Printer Struk</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Bluetooth &amp; Thermal</span>
                </div>
            </button>

            <!-- 8. Backup & Data (Cloud Sync Hub) -->
            <button onclick="openAdminTab('backup_sync')" class="card-modern group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] hover:shadow-xl dark:hover:bg-slate-800/60 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/60 shadow-xs cursor-pointer active:scale-95">
                <div class="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 50%, var(--color-primary-dark, #a87f1b) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.28);">
                    <i class="fa-solid fa-cloud-arrow-up text-2xl sm:text-3xl"></i>
                </div>
                <div class="relative z-10">
                    <span class="block text-[10px] font-black uppercase leading-tight tracking-widest text-slate-800 dark:text-white sm:text-[11px]">Backup &amp; Data</span>
                    <span class="mt-0.5 block text-[9px] font-bold text-slate-400 dark:text-slate-500">Pusat Cadangan Cloud</span>
                </div>
            </button>
        </div>

        <!-- 9. Bento Status Lisensi & Layanan Terkelola (SaaS Engine) -->
        ${getSubscriptionBentoHtml()}
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
    if (normalized === 'diagonal_skew' || normalized === 'glass_studio') normalized = 'minimalist';

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
        if (currentBgStyle === 'diagonal_skew' || currentBgStyle === 'glass_studio') currentBgStyle = 'minimalist';
        const presetNames = {
            gold: "Putri Gold", burgundy: "Burgundy", industrial: "Industrial CAT", emerald: "Emerald", teal: "Teal", lime: "Lime", cyan: "Cyan", sky: "Sky",
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
                    <!-- 1. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'minimalist' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
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

                    <!-- 2. Hero Arch -->
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

                    <!-- 3. Aurora Glow -->
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
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Modern iOS</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Aurora Glow</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Mesh aura dinamis</span>
                        </div>
                    </button>

                    <!-- 4. Tech Grid -->
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
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Pro Teknik</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Tech Grid</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Arsitektur modern &amp; rapi</span>
                        </div>
                    </button>

                    <!-- 5. Industrial Heavy-Duty -->
                    <button type="button" onclick="selectBgStyle('industrial')" id="bg-opt-industrial"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${currentBgStyle === 'industrial' ? 'active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20' : 'border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'}">
                        <span class="active-check-badge ${currentBgStyle === 'industrial' ? '' : 'hidden'} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-industrial">
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
                            <div class="inline-block px-1.5 py-0.5 rounded-md text-[8px] font-bold mb-1 tracking-wider uppercase" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Heavy-Duty</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Industrial</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Solid kuat &amp; berkarakter</span>
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

            <!-- KARTU 4: BANNER HERO SAMBUTAN & MASKOT 3D (SLIDE #0) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Banner Sambutan &amp; Maskot 3D (Slide #0)</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur foto maskot/karakter, status badge 'Siap Melayani', teks sambutan, atau sembunyikan slide utama</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tayang Slide Sambutan</label>
                        <select id="set-show-hero-slide" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-bold">
                            <option value="true" ${appData.store.showHeroSlide !== false && appData.store.showHeroSlide !== 'false' ? 'selected' : ''}>Ya, Tampilkan Slide Hero Sambutan (Default)</option>
                            <option value="false" ${appData.store.showHeroSlide === false || appData.store.showHeroSlide === 'false' ? 'selected' : ''}>Sembunyikan (Hanya Tampilkan Banner Promosi Produk)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Badge Status (Di Bawah Foto)</label>
                        <input autocomplete="off" id="set-hero-badge-text" value="${esc(appData.store.heroBadgeText || 'Siap Melayani')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Siap Melayani">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-hero-mascot-img" value="${esc(appData.store.heroMascotImg || '')}"
                               class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs"
                               placeholder="URL gambar/GIF atau klik Upload (Kosong = Maskot 3D Asli)"
                               oninput="const p=document.getElementById('card-preview-mascot'); if(p) p.src = this.value || '/putri_mascot_3d.jpg';">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/gif,image/jpeg,image/png,image/webp" class="hidden" onchange="handleImageUpload(this, 'set-hero-mascot-img'); setTimeout(() => { const v=document.getElementById('set-hero-mascot-img')?.value; const p=document.getElementById('card-preview-mascot'); if(p && v) p.src=v; }, 800);">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 ml-0.5"><i class="fa-solid fa-circle-info mr-1"></i>Mendukung GIF animasi (maks 8MB) · JPG/PNG/WEBP maks 3MB · URL langsung dari internet juga bisa</p>
                    <div class="flex items-center justify-between gap-2 mt-2 flex-wrap">
                        <div class="flex gap-2 flex-wrap">
                            <button type="button" onclick="document.getElementById('set-hero-mascot-img').value='/putri_mascot_anim.gif'; const p=document.getElementById('card-preview-mascot'); if(p) p.src='/putri_mascot_anim.gif'; showToast('Animasi GIF dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 cursor-pointer inline-flex items-center" style="background: rgba(var(--color-primary-rgb),0.08); border-color: rgba(var(--color-primary-rgb),0.25); color: var(--color-primary);">
                                <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Animasi GIF Maskot
                            </button>
                            <button type="button" onclick="document.getElementById('set-hero-mascot-img').value='/putri_mascot_3d.jpg'; const p=document.getElementById('card-preview-mascot'); if(p) p.src='/putri_mascot_3d.jpg'; showToast('Maskot 3D asli dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-rotate-left mr-1"></i> Maskot 3D Statis
                            </button>
                            ${appData.store.logo ? `
                            <button type="button" onclick="const l='${esc(appData.store.logo)}'; document.getElementById('set-hero-mascot-img').value=l; const p=document.getElementById('card-preview-mascot'); if(p) p.src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                            </button>` : ''}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-400">Preview:</span>
                            <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600 bg-black/10 shadow-sm shrink-0">
                                <img id="card-preview-mascot" src="${esc(appData.store.heroMascotImg || '/putri_mascot_anim.gif')}" class="w-full h-full object-contain" onerror="this.src='/putri_mascot_3d.jpg';" style="image-rendering: auto;">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tag Sambutan</label>
                        <input autocomplete="off" id="set-hero-welcome-tag" value="${esc(appData.store.heroWelcomeTag || 'SELAMAT DATANG')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: SELAMAT DATANG">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Judul Sambutan Banner</label>
                        <input autocomplete="off" id="set-hero-title" value="${esc(appData.store.heroTitle || appData.store.name || '')}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: PUTRI UTAMA TEKNIK (Kosong = Nama Toko)">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan / Deskripsi Sambutan Banner</label>
                    <textarea id="set-hero-subtitle" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi sambutan yang tampil di kartu banner utama...">${esc(appData.store.heroSubtitle || appData.store.slogan || '')}</textarea>
                </div>
            </div>

            <!-- KARTU 5: WAKTU OPERASIONAL, FOOTER & HADIAH -->
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
        formContent = `
            <!-- KARTU 1: TATA LETAK KATEGORI -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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
                            <option value="pill" ${(appData.store.categoryStyle === 'pill' || appData.store.categoryStyle === 'text' || !appData.store.categoryStyle) ? 'selected' : ''}>Pill Horizontal Scroll (Kapsul geser)</option>
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

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Tips Desain:</b> Model <i>Pill Horizontal Scroll</i> sangat hemat ruang di layar HP, sedangkan <i>Grid Ikon</i> mempermudah pelanggan melihat seluruh kategori sekaligus.</span>
                </div>
            </div>

            <!-- KARTU 2: TATA LETAK MEREK (BRAND) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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
                            <option value="logo" ${appData.store.brandStyle === 'logo' || appData.store.brandStyle === 'image' || !appData.store.brandStyle ? 'selected' : ''}>Logo Kotak (Grid Visual)</option>
                            <option value="pill" ${(appData.store.brandStyle === 'pill' || appData.store.brandStyle === 'text') ? 'selected' : ''}>Pill Horizontal Scroll (Kapsul teks)</option>
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

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-check mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>

            <!-- KARTU 3: TOMBOL PULL UP / SCROLL TO TOP -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Tombol Melayang Kembali ke Atas (Scroll-to-Top)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Tombol bulat panah atas otomatis melayang saat pelanggan menggulir panjang daftar produk di etalase toko</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tombol Scroll-to-Top</label>
                    <select id="set-show-scroll-top" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${appData.store.showScrollTopButton !== false ? 'selected' : ''}>Aktif (Hanya tampil di etalase belanja &amp; riwayat belanja pelanggan)</option>
                        <option value="false" ${appData.store.showScrollTopButton === false ? 'selected' : ''}>Nonaktifkan Seluruhnya</option>
                    </select>
                </div>

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-shield-halved mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Proteksi Khusus:</b> Tombol ini secara otomatis dilindungi dan <u>tidak akan pernah muncul</u> di dashboard CMS Admin, Kasir POS, formulir checkout, maupun saat jendela modal sedang terbuka.</span>
                </div>
            </div>
        `;
    } else if (type === 'shipping') {
        title = "Pengiriman & Lokasi Toko"; 
        subtitle = "Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko";
        icon = "fa-motorcycle"; 
        formContent = `
            <!-- KARTU 1: KONTAK & METODE PENGANTARAN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Promo Gratis Ongkir Otomatis</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Otomatis bebas ongkir saat total belanja pelanggan mencapai nominal batas minimal</p>
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
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Lokasi Toko &amp; Pin Google Maps</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Tinggal tempel link atau angka koordinat dari Google Maps — sistem langsung mengekstrak titik presisi</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="btn-preview-maps" onclick="previewStoreOnMaps()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer" title="Buka dan Cek Titik di Google Maps">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Cek di Maps
                        </button>
                        <button type="button" onclick="detectAdminGPS()" class="text-[11px] font-bold px-3.5 py-1.5 rounded-xl text-white shadow-sm transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer" style="background: var(--color-primary)" title="Ambil GPS Perangkat Saat Ini">
                            <i class="fa-solid fa-crosshairs"></i> GPS Saya
                        </button>
                    </div>
                </div>

                <!-- Input Cerdas Tempel Link / Koordinat -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                        <span>Tempel Link / Koordinat Google Maps</span>
                        <span class="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">Smart Auto-Extract</span>
                    </label>
                    <div class="relative flex items-center">
                        <input autocomplete='off' id="set-maps-smart-input" 
                            value="${esc(appData.store.lat && appData.store.lng ? `${appData.store.lat}, ${appData.store.lng}` : '-7.82308507053985, 112.0988374794464')}"
                            placeholder="Tempel di sini: -7.823085, 112.098837 atau link Google Maps" 
                            class="admin-input !py-3 !pr-24 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs text-slate-800 dark:text-slate-100"
                            oninput="handleSmartMapsInput(this.value)"
                            onpaste="setTimeout(() => handleSmartMapsInput(this.value), 50)">
                        <button type="button" onclick="pasteFromClipboardToMapsInput()" class="absolute right-2 px-3 py-1.5 text-[10px] font-bold rounded-lg border active:scale-95 transition-all flex items-center gap-1 cursor-pointer" style="background: rgba(var(--color-primary-rgb),0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb),0.2);">
                            <i class="fa-solid fa-paste"></i> Tempel
                        </button>
                    </div>
                    <div id="maps-smart-feedback" class="text-[10px] mt-1.5 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> <span>Koordinat aktif: Presisi tinggi terhubung ke kalkulator ongkir kurir</span>
                    </div>
                </div>

                <!-- Kolom Terpisah Latitude & Longitude Presisi Tinggi -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200 dark:border-slate-700/80">
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
        title = "Metode Pembayaran (QRIS & Putri PayLater)"; 
        subtitle = "Konfigurasi penerimaan digital QRIS dan pengaturan cicilan Putri PayLater 30 hari hingga 3 bulan transparan";
        icon = "fa-wallet"; 
        
        const pl = getPaylaterConfig();
        const curTab = window.currentPaymentSubtab || 'paylater';

        formContent = `
            <!-- SUB-NAV TAB SELECTION -->
            <div class="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 border border-slate-200/80 dark:border-slate-700/80">
                <button type="button" onclick="window.switchPaymentSubtab('paylater')" id="subtab-btn-paylater"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${curTab === 'paylater' ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                    <i class="fa-solid fa-bolt text-[var(--color-primary)]"></i> Putri PayLater &amp; Cicilan 3 Bulan
                </button>
                <button type="button" onclick="window.switchPaymentSubtab('qris')" id="subtab-btn-qris"
                        class="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${curTab === 'qris' ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                    <i class="fa-solid fa-qrcode text-[var(--color-primary)]"></i> Barcode QRIS Nasional
                </button>
            </div>

            <!-- TAB 1: PUTRI PAYLATER & CICILAN 3 BULAN -->
            <div id="payment-subtab-paylater" class="${curTab === 'paylater' ? '' : 'hidden'} space-y-4">
                <!-- KARTU 1: KONTROL MASTER & MINIMAL BELANJA -->
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Kontrol Utama Putri PayLater</h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Aktifkan layanan kredit toko & cicilan 30 hari hingga 3 bulan dengan rincian biaya transparan</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Layanan PayLater</label>
                            <select id="set-paylater-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-bold cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                <option value="true" ${pl.enabled ? 'selected' : ''}>Aktif (Bisa Digunakan Pelanggan)</option>
                                <option value="false" ${!pl.enabled ? 'selected' : ''}>Nonaktif</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Minimal Belanja Cicilan (Rp)</label>
                            <input type="number" id="set-paylater-min-order" value="${pl.minOrder}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono font-bold" placeholder="20000" min="0" oninput="window.updateAdminPaylaterSim()">
                            <p class="text-[9.5px] text-slate-400 mt-1">Pembelian di bawah nominal ini belum dapat mencicil.</p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Catatan Transparansi &amp; Ketentuan Toko</label>
                        <input id="set-paylater-notice-text" value="${esc(pl.noticeText)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.">
                    </div>
                </div>

                <!-- KARTU 2: PENGATURAN TENOR 30 HARI, 2 BULAN, 3 BULAN -->
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                <i class="fa-solid fa-calendar-week"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Skema Biaya Tenor Cicilan (Zero Hidden Fees)</h4>
                                <p class="text-[10px] text-slate-500 dark:text-slate-400">Tentukan biaya admin dan biaya penanganan/layanan per tenor (bisa nominal tetap Rp atau persentase %)</p>
                            </div>
                        </div>
                        <span class="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">100% Transparan</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                        <!-- TENOR 1: 30 HARI -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 30 Hari</span>
                                </div>
                                <select id="set-paylater-30d-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${pl.tenors['30d'].enabled ? 'selected' : ''}>Aktif</option>
                                    <option value="false" ${!pl.tenors['30d'].enabled ? 'selected' : ''}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['30d'].adminFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['30d'].adminFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-admin-val" value="${pl.tenors['30d'].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-30d-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['30d'].serviceFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['30d'].serviceFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-30d-service-val" value="${pl.tenors['30d'].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>

                        <!-- TENOR 2: 2 BULAN -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 2 Bulan</span>
                                </div>
                                <select id="set-paylater-2m-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${pl.tenors['2m'].enabled ? 'selected' : ''}>Aktif</option>
                                    <option value="false" ${!pl.tenors['2m'].enabled ? 'selected' : ''}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['2m'].adminFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['2m'].adminFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-admin-val" value="${pl.tenors['2m'].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-2m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['2m'].serviceFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['2m'].serviceFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-2m-service-val" value="${pl.tenors['2m'].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>

                        <!-- TENOR 3: 3 BULAN -->
                        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span class="text-xs font-black uppercase text-slate-800 dark:text-white">Tenor 3 Bulan</span>
                                </div>
                                <select id="set-paylater-3m-enabled" class="text-[10px] font-bold py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer" onchange="window.updateAdminPaylaterSim()">
                                    <option value="true" ${pl.tenors['3m'].enabled ? 'selected' : ''}>Aktif</option>
                                    <option value="false" ${!pl.tenors['3m'].enabled ? 'selected' : ''}>Nonaktif</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Admin</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-admin-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['3m'].adminFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['3m'].adminFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-admin-val" value="${pl.tenors['3m'].adminFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Biaya Penanganan</label>
                                <div class="flex gap-1.5">
                                    <select id="set-paylater-3m-service-type" class="w-20 text-[11px] font-bold py-2 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" onchange="window.updateAdminPaylaterSim()">
                                        <option value="flat" ${pl.tenors['3m'].serviceFeeType === 'flat' ? 'selected' : ''}>Rp</option>
                                        <option value="percent" ${pl.tenors['3m'].serviceFeeType === 'percent' ? 'selected' : ''}>%</option>
                                    </select>
                                    <input type="number" id="set-paylater-3m-service-val" value="${pl.tenors['3m'].serviceFeeValue}" min="0" step="any" class="admin-input !py-2 bg-white dark:bg-slate-900 flex-1 text-xs font-mono font-bold" placeholder="0" oninput="window.updateAdminPaylaterSim()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KARTU 3: LIVE SIMULATOR REAL-TIME -->
                <div class="p-4 sm:p-5 rounded-2xl shadow-sm space-y-4 border transition-all" style="border-color: rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.03);">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0 text-white" style="background: var(--color-primary);">
                                <i class="fa-solid fa-calculator"></i>
                            </div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Simulasi Rumus Langsung (Live Preview)</h4>
                                <p class="text-[10px] text-slate-500 dark:text-slate-400">Uji coba simulasi otomatis sebelum menyimpan ke sistem</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] font-bold text-slate-500">Tes Belanja:</span>
                            <div class="relative flex items-center">
                                <span class="absolute left-2.5 text-[11px] font-bold text-slate-400">Rp</span>
                                <input type="number" id="set-paylater-sim-amount" value="300000" min="1000" step="1000"
                                       class="w-32 py-1.5 pl-8 pr-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-right"
                                       oninput="window.updateAdminPaylaterSim()">
                            </div>
                        </div>
                    </div>

                    <div id="paylater-admin-sim-container" class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <!-- Diisi dinamis oleh updateAdminPaylaterSim -->
                    </div>
                </div>
            </div>

            <!-- TAB 2: BARCODE QRIS NASIONAL -->
            <div id="payment-subtab-qris" class="${curTab === 'qris' ? '' : 'hidden'} space-y-4">
                <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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
                            <label class="text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs hover:opacity-90" style="background: var(--color-primary)">
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
                                <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary);">
                                    <i class="fa-solid fa-circle-check"></i> QRIS Siap Digunakan
                                </div>
                                <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100">Barcode QRIS Aktif di Halaman Checkout</h5>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400">Gambar barcode di atas akan otomatis ditampilkan dengan jelas saat pembeli memilih opsi pembayaran QRIS.</p>
                            </div>
                        </div>
                    ` : `
                        <div class="p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-2">
                            <div class="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-xl shadow-xs" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                                <i class="fa-solid fa-qrcode"></i>
                            </div>
                            <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200">Belum Ada Barcode QRIS</h5>
                            <p class="text-[11px] text-slate-400 max-w-sm mx-auto">Klik tombol <b>Upload QRIS</b> di atas untuk mengunggah gambar barcode QRIS toko Anda agar pembeli bisa membayar secara digital.</p>
                        </div>
                    `}

                    <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                        <i class="fa-solid fa-shield-halved mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                        <span><b>Keamanan Transaksi:</b> Pastikan barcode QRIS yang diunggah memiliki nama toko Anda yang terdaftar resmi di penyedia jasa pembayaran (PJSP).</span>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'config') {
        title = "Sistem & Integrasi Cloud"; 
        subtitle = "Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive";
        icon = "fa-laptop-code"; 
        formContent = `
            <!-- KARTU 1: INTEGRASI GOOGLE APPS SCRIPT (GAS) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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
        formContent = `
            <!-- KARTU 1: MANAJEMEN STOK PRODUK -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
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

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span>Saat mode aktif, setiap transaksi kasir atau checkout online akan otomatis memotong stok barang secara real-time.</span>
                </div>
            </div>

            <!-- KARTU 2: KONFIGURASI SMART PERPAJAKAN REPUBLIK INDONESIA 2026 -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                                <span>Konfigurasi PPN &amp; Smart Perpajakan RI 2026</span>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-black border" style="background: rgba(var(--color-primary-rgb),0.1); border-color: rgba(var(--color-primary-rgb),0.22); color: var(--color-primary);">UU HPP &bull; PP 55/2022</span>
                            </h4>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur skema perpajakan resmi pada struk kasir, invoice A4, laporan keuangan, dan checkout belanja</p>
                        </div>
                    </div>
                </div>

                <!-- PRESET 1-KLIK SMART PERPAJAKAN INDONESIA 2026 -->
                <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--color-primary)"></i><span>Pilih Preset Cepat Smart Perpajakan RI 2026:</span>
                    </label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        <!-- PRESET A: BADAN NON-PKP (0% TRANSPARAN) -->
                        <button type="button" onclick="window.applyTaxPresetRI('badan_non_pkp')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-building" style="color: var(--color-primary)"></i> Badan Non-PKP
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary);">0%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Bebas PPN Rp 0 ke pembeli. Baris PPN 0% tetap tercetak di struk &amp; faktur A4 resmi.</p>
                        </button>

                        <!-- PRESET B: HARGA INKLUSIF TOKO (11% UU HPP) -->
                        <button type="button" onclick="window.applyTaxPresetRI('inklusif_11')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-tags text-slate-600 dark:text-slate-400"></i> Harga Inklusif
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">11%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Pajak sudah di dalam harga. Pembeli tidak nambah bayar, DPP &amp; PPN diurai di struk.</p>
                        </button>

                        <!-- PRESET C: PKP STANDAR (11% UU HPP) -->
                        <button type="button" onclick="window.applyTaxPresetRI('pkp_11')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-landmark text-slate-600 dark:text-slate-400"></i> PKP Standar
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">11%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Eksklusif: PPN 11% ditambahkan di atas subtotal saat checkout dan kasir POS.</p>
                        </button>

                        <!-- PRESET D: PKP PENYESUAIAN 12% (UU HPP 2026) -->
                        <button type="button" onclick="window.applyTaxPresetRI('pkp_12')" class="p-3 text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.03)] transition-all cursor-pointer group active:scale-98">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                    <i class="fa-solid fa-bolt text-slate-600 dark:text-slate-400"></i> PKP Transisi
                                </span>
                                <span class="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">12%</span>
                            </div>
                            <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Penyesuaian tarif PPN 12% sesuai tahapan regulasi UU Harmonisasi Perpajakan.</p>
                        </button>
                    </div>
                </div>

                <!-- FORM KONTROL GRANULAR PERPAJAKAN -->
                ${(() => {
                    const safeRate = (appData.store.ppnRate !== undefined && appData.store.ppnRate !== null && !isNaN(parseFloat(appData.store.ppnRate))) ? parseFloat(appData.store.ppnRate) : 11;
                    const showZero = appData.store.ppnShowZero !== false;
                    const taxLabel = appData.store.ppnTaxLabel || '';
                    const npwpVal = appData.store.taxNpwp || appData.taxSettings?.npwp || '';

                    return `
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                            <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${appData.store.ppnEnabled === true ? 'selected' : ''}>Aktif (Kalkulasi PPN Dihitung)</option>
                                <option value="false" ${appData.store.ppnEnabled !== true ? 'selected' : ''}>Nonaktif (Tanpa Baris PPN)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                            <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="inclusive" ${appData.store.ppnType === 'inclusive' ? 'selected' : ''}>Inklusif (Pajak dalam harga &bull; Pembeli Rp 0 Tambahan)</option>
                                <option value="exclusive" ${appData.store.ppnType !== 'inclusive' ? 'selected' : ''}>Eksklusif (Pajak ditambah di atas subtotal)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                            <input autocomplete='off' type="number" id="set-ppn-rate" value="${safeRate}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="0 atau 11">
                            <span class="text-[10px] text-slate-400 mt-1 block">Ketik <b>0</b> jika Wajib Pajak Badan Non-PKP / Bebas PPN.</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilan PPN 0% di Struk / Faktur</label>
                            <select id="set-ppn-show-zero" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                                <option value="true" ${showZero ? 'selected' : ''}>Tetap Tampilkan Baris Pajak (Walau Rp 0)</option>
                                <option value="false" ${!showZero ? 'selected' : ''}>Sembunyikan Baris Pajak jika Rp 0</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Label Pajak di Struk/Invoice</label>
                            <input autocomplete='off' type="text" id="set-ppn-tax-label" value="${esc(taxLabel)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Cth: PPN Badan (0%) atau PPN">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">NPWP Toko / 16-Digit CTAS DJP</label>
                            <input autocomplete='off' type="text" id="set-tax-npwp" value="${esc(npwpVal)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs font-mono" placeholder="16 digit format Coretax DJP">
                        </div>
                    </div>
                    `;
                })()}

                <div class="p-3.5 rounded-xl text-[11px] space-y-1.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18);">
                    <div class="flex items-center gap-2 font-bold" style="color: var(--color-primary-dark, #a87f1b)">
                        <i class="fa-solid fa-circle-info text-sm" style="color: var(--color-primary)"></i>
                        <span>Pedoman Praktis Wajib Pajak Badan di Toko Putri:</span>
                    </div>
                    <ul class="list-disc pl-5 space-y-1 text-[10px] text-slate-600 dark:text-slate-400">
                        <li><b>Wajib Pajak Badan Non-PKP / Bebas PPN (0%):</b> Pilih Status <i>Aktif</i>, Tipe <i>Inklusif</i>, Tarif <i>0%</i>, dan Tampilan PPN 0% <i>Tetap Tampilkan</i>. Pelanggan <b>tidak ditarik uang tambahan sepeser pun (Rp 0)</b>, sementara pada struk kasir, invoice A4, dan riwayat pesanan tetap tercantum baris DPP dan PPN 0% secara transparan.</li>
                        <li><b>PPh Final 0,5% Badan UMKM (PP 55/2022):</b> Wajib Pajak Badan dengan omset &lt; Rp 4,8 Miliar berhak memanfaatkan tarif PPh Final 0,5% dari omset bulanan yang dapat dipantau di menu <b>Pajak &amp; Keuangan</b>.</li>
                    </ul>
                </div>
            </div>

            <!-- KARTU 3: PROGRAM POIN BELANJA & LOYALITAS MEMBER -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Program Poin Belanja &amp; Loyalitas Member</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Berikan poin belanja otomatis pada produk yang tidak memiliki poin langsung dengan kelipatan nominal belanja</p>
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

                <div class="p-3 rounded-xl text-[11px] flex items-start gap-2.5 border" style="background: rgba(var(--color-primary-rgb),0.06); border-color: rgba(var(--color-primary-rgb),0.18); color: var(--color-primary-dark, #a87f1b);">
                    <i class="fa-solid fa-circle-info mt-0.5 shrink-0" style="color: var(--color-primary)"></i>
                    <span><b>Sistem Hibrida Cerdas:</b> Produk yang sudah memiliki poin reward langsung akan tetap memberikan poin per item. Untuk produk tanpa poin, nilai total belanjanya akan diakumulasikan dan dihitung poinnya sesuai kelipatan minimal belanja di atas (contoh: Belanja Rp 100.000 = 1 poin, Rp 200.000 = 2 poin).</span>
                </div>
            </div>
        `;
    }

    let h = `
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex items-center justify-between">
            <button onclick="rAdmSet()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Menu Pengaturan
            </button>
            <button onclick="saveAdminSettings('${type}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white font-bold text-xs shadow-md transition-all active:scale-95 hover:opacity-95 cursor-pointer" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white/95 dark:bg-slate-900/90 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5" style="background: linear-gradient(90deg, var(--color-primary-light, #e1b858), var(--color-primary, #c59b27), var(--color-primary-dark, #a87f1b))"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div class="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-sm" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)"><i class="fa-solid ${icon}"></i></div> 
                    <div>
                        <h3 class="font-extrabold text-slate-800 dark:text-white text-base sm:text-lg tracking-wide leading-tight">${title}</h3>
                        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">${subtitle || 'Konfigurasi pengaturan toko'}</p>
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

    if (type === 'payment') {
        setTimeout(() => {
            if (typeof window.updateAdminPaylaterSim === 'function') {
                window.updateAdminPaylaterSim();
            }
        }, 50);
    }
};

window.currentPaymentSubtab = window.currentPaymentSubtab || 'paylater';

export const switchPaymentSubtab = (tab) => {
    window.currentPaymentSubtab = tab;
    const tabPL = document.getElementById('payment-subtab-paylater');
    const tabQR = document.getElementById('payment-subtab-qris');
    const btnPL = document.getElementById('subtab-btn-paylater');
    const btnQR = document.getElementById('subtab-btn-qris');

    if (tabPL) tabPL.classList.toggle('hidden', tab !== 'paylater');
    if (tabQR) tabQR.classList.toggle('hidden', tab !== 'qris');

    if (btnPL) {
        btnPL.className = `flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'paylater' ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`;
    }
    if (btnQR) {
        btnQR.className = `flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${tab === 'qris' ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`;
    }
    if (tab === 'paylater') {
        setTimeout(() => {
            if (typeof window.updateAdminPaylaterSim === 'function') {
                window.updateAdminPaylaterSim();
            }
        }, 20);
    }
};
window.switchPaymentSubtab = switchPaymentSubtab;

export const updateAdminPaylaterSim = () => {
    const container = document.getElementById('paylater-admin-sim-container');
    if (!container) return;

    const amountInput = document.getElementById('set-paylater-sim-amount');
    const testAmount = Math.max(1000, parseFloat(amountInput?.value) || 300000);

    const tempConfig = {
        enabled: (document.getElementById('set-paylater-enabled')?.value || 'true') === 'true',
        minOrder: Math.max(0, parseFloat(document.getElementById('set-paylater-min-order')?.value) || 20000),
        maxOrder: 10000000,
        noticeText: document.getElementById('set-paylater-notice-text')?.value || '',
        tenors: {
            '30d': {
                enabled: (document.getElementById('set-paylater-30d-enabled')?.value || 'true') === 'true',
                label: '30 Hari (1x Bayar)', shortLabel: '30 Hari', months: 1, days: 30,
                adminFeeType: document.getElementById('set-paylater-30d-admin-type')?.value || 'flat',
                adminFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-30d-admin-val')?.value) || 0),
                serviceFeeType: document.getElementById('set-paylater-30d-service-type')?.value || 'flat',
                serviceFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-30d-service-val')?.value) || 0)
            },
            '2m': {
                enabled: (document.getElementById('set-paylater-2m-enabled')?.value || 'true') === 'true',
                label: '2 Bulan (Cicilan 2x)', shortLabel: '2 Bulan', months: 2, days: 60,
                adminFeeType: document.getElementById('set-paylater-2m-admin-type')?.value || 'flat',
                adminFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-2m-admin-val')?.value) || 0),
                serviceFeeType: document.getElementById('set-paylater-2m-service-type')?.value || 'percent',
                serviceFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-2m-service-val')?.value) || 0)
            },
            '3m': {
                enabled: (document.getElementById('set-paylater-3m-enabled')?.value || 'true') === 'true',
                label: '3 Bulan (Cicilan 3x)', shortLabel: '3 Bulan', months: 3, days: 90,
                adminFeeType: document.getElementById('set-paylater-3m-admin-type')?.value || 'flat',
                adminFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-3m-admin-val')?.value) || 0),
                serviceFeeType: document.getElementById('set-paylater-3m-service-type')?.value || 'percent',
                serviceFeeValue: Math.max(0, parseFloat(document.getElementById('set-paylater-3m-service-val')?.value) || 0)
            }
        }
    };

    const sim = calculateAllPaylaterTenors(testAmount, tempConfig);
    const tenors = sim.results;
    const keys = ['30d', '2m', '3m'];

    container.innerHTML = keys.map(k => {
        const t = tenors[k];
        if (!t) return '';
        const isOff = !t.enabled;
        return `
            <div class="p-3.5 rounded-2xl border ${isOff ? 'border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 opacity-60' : 'border-[var(--color-primary)]/40 bg-white dark:bg-slate-900 shadow-2xs'} space-y-2">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">${esc(t.label)}</span>
                    <span class="text-[8.5px] font-bold px-1.5 py-0.5 rounded ${isOff ? 'bg-slate-200 text-slate-500' : ''}" ${!isOff ? 'style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"' : ''}>${isOff ? 'Nonaktif' : 'Aktif'}</span>
                </div>
                <div class="space-y-1 text-[11px]">
                    <div class="flex justify-between text-slate-500">
                        <span>Pokok / bln:</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300">${fCur(t.pokokPerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Biaya Admin:</span>
                        <span class="font-bold ${t.adminFeePerMonth === 0 ? 'text-emerald-500' : 'text-slate-700 dark:text-slate-300'}">${t.adminFeePerMonth === 0 ? 'Rp 0' : fCur(t.adminFeePerMonth)}</span>
                    </div>
                    <div class="flex justify-between text-slate-500">
                        <span>Penanganan:</span>
                        <span class="font-bold ${t.serviceFeePerMonth === 0 ? 'text-emerald-500' : 'text-slate-700 dark:text-slate-300'}">${t.serviceFeePerMonth === 0 ? 'Rp 0' : fCur(t.serviceFeePerMonth)}</span>
                    </div>
                </div>
                <div class="pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[10px] font-bold uppercase text-slate-500">Cicilan / bln:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${fCur(t.totalPerMonth)}</span>
                </div>
                <div class="text-[9.5px] text-slate-400 text-right">
                    Total: <b>${fCur(t.grandTotal)}</b>
                </div>
            </div>
        `;
    }).join('');
};
window.updateAdminPaylaterSim = updateAdminPaylaterSim;

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
            appData.store.showHeroSlide = getV('set-show-hero-slide') === 'true';
            appData.store.heroMascotImg = fixD(getV('set-hero-mascot-img'));
            appData.store.heroBadgeText = getV('set-hero-badge-text') || 'Siap Melayani';
            appData.store.heroWelcomeTag = getV('set-hero-welcome-tag') || 'SELAMAT DATANG';
            appData.store.heroTitle = getV('set-hero-title');
            appData.store.heroSubtitle = getV('set-hero-subtitle');
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
            appData.store.showScrollTopButton = getV('set-show-scroll-top') === 'true';
            if (appData.store.showScrollTopButton === false && typeof window.hideFloatingScrollTop === 'function') {
                window.hideFloatingScrollTop();
            }
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

            if (!appData.store.paylater) appData.store.paylater = {};
            appData.store.paylater = {
                enabled: getV('set-paylater-enabled') === 'true',
                minOrder: Math.max(0, parseFloat(getV('set-paylater-min-order')) || 20000),
                maxOrder: 10000000,
                noticeText: getV('set-paylater-notice-text') || 'Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.',
                tenors: {
                    '30d': {
                        enabled: getV('set-paylater-30d-enabled') === 'true',
                        label: '30 Hari (1x Bayar)',
                        shortLabel: '30 Hari',
                        months: 1,
                        days: 30,
                        adminFeeType: getV('set-paylater-30d-admin-type') || 'flat',
                        adminFeeValue: Math.max(0, parseFloat(getV('set-paylater-30d-admin-val')) || 0),
                        serviceFeeType: getV('set-paylater-30d-service-type') || 'flat',
                        serviceFeeValue: Math.max(0, parseFloat(getV('set-paylater-30d-service-val')) || 0)
                    },
                    '2m': {
                        enabled: getV('set-paylater-2m-enabled') === 'true',
                        label: '2 Bulan (Cicilan 2x)',
                        shortLabel: '2 Bulan',
                        months: 2,
                        days: 60,
                        adminFeeType: getV('set-paylater-2m-admin-type') || 'flat',
                        adminFeeValue: Math.max(0, parseFloat(getV('set-paylater-2m-admin-val')) || 0),
                        serviceFeeType: getV('set-paylater-2m-service-type') || 'percent',
                        serviceFeeValue: Math.max(0, parseFloat(getV('set-paylater-2m-service-val')) || 0)
                    },
                    '3m': {
                        enabled: getV('set-paylater-3m-enabled') === 'true',
                        label: '3 Bulan (Cicilan 3x)',
                        shortLabel: '3 Bulan',
                        months: 3,
                        days: 90,
                        adminFeeType: getV('set-paylater-3m-admin-type') || 'flat',
                        adminFeeValue: Math.max(0, parseFloat(getV('set-paylater-3m-admin-val')) || 0),
                        serviceFeeType: getV('set-paylater-3m-service-type') || 'percent',
                        serviceFeeValue: Math.max(0, parseFloat(getV('set-paylater-3m-service-val')) || 0)
                    }
                }
            };
        } else if (type === 'config') {
            if (!appData.config) appData.config = {};
            appData.config.gasUrl = getV('set-gas-url');
            showToast("Pengaturan GAS URL tersimpan.");
        } else if (type === 'operasional') {
            appData.store.useStock   = getV('set-use-stock') === 'true';
            appData.store.ppnEnabled = getV('set-ppn-enabled') === 'true';
            appData.store.ppnType    = getV('set-ppn-type') || 'exclusive';
            
            const rawRate = getV('set-ppn-rate');
            const parsedRate = parseFloat(rawRate);
            appData.store.ppnRate = (!isNaN(parsedRate) && parsedRate >= 0) ? parsedRate : 11;
            
            appData.store.ppnShowZero = getV('set-ppn-show-zero') === 'true';
            appData.store.ppnTaxLabel = (getV('set-ppn-tax-label') || '').trim();
            
            const npwpVal = (getV('set-tax-npwp') || '').trim();
            appData.store.taxNpwp = npwpVal;
            if (!appData.taxSettings) appData.taxSettings = {};
            if (npwpVal) appData.taxSettings.npwp = npwpVal;
            
            appData.store.spendPointsEnabled = getV('set-spend-points-enabled') === 'true';
            appData.store.spendPointsThreshold = Math.max(1, parseFloat(getV('set-spend-points-threshold')) || 100000);
            appData.store.spendPointsPerThreshold = Math.max(1, parseFloat(getV('set-spend-points-per-threshold')) || 1);
            toggleTaxMenuVisibility();
        }
        
        const settingsKeyMap = { profile: 'store', catalog: 'store', shipping: 'store', operasional: ['store', 'taxSettings'], payment: ['payment', 'store'], config: 'config' };
        if (typeof window.saveApp === 'function') {
            const keysToSave = Array.isArray(settingsKeyMap[type]) ? settingsKeyMap[type] : [settingsKeyMap[type] || 'store'];
            await window.saveApp(keysToSave);
        }
        
        if (type === 'profile' || type === 'config') {
            showToast(type === 'config' ? "Sistem Diperbarui! Memuat Ulang..." : "Warna Berubah! Memuat Ulang...");
            setTimeout(() => location.reload(), 1500); 
        } else {
            showToast("Tersimpan!");
            rAdmSet(); 
            if (typeof rDyn === 'function') rDyn(); else if (typeof window.rDyn === 'function') window.rDyn();
            if (typeof rCat === 'function') rCat(); else if (typeof window.rCat === 'function') window.rCat();
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

// ─── Modal Cepat Kelola Banner Hero Sambutan & Maskot 3D ──────
export const openHeroBannerModal = () => {
    let modal = document.getElementById('admin-hero-banner-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'admin-hero-banner-modal';
        document.body.appendChild(modal);
    }
    
    const showHeroVal = appData.store.showHeroSlide !== false && appData.store.showHeroSlide !== 'false';
    const currentMascot = appData.store.heroMascotImg || '/putri_mascot_anim.gif';
    
    modal.className = "fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity duration-300";
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('heroBanner');
    }
    modal.innerHTML = `
        <div class="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div>
                        <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white leading-tight">Kelola Banner Sambutan &amp; Maskot</h3>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Kustomisasi foto/karakter dan teks Slide #0 Beranda</p>
                    </div>
                </div>
                <button type="button" onclick="closeHeroBannerModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div class="p-5 overflow-y-auto custom-scrollbar space-y-4 text-xs">
                <!-- Preview Live Box -->
                <div class="p-4 rounded-2xl text-white shadow-md relative overflow-hidden flex items-center justify-between"
                     style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                    <div class="w-[62%] pr-2">
                        <span class="inline-block px-2 py-0.5 rounded-full bg-black/25 text-[8.5px] font-black uppercase tracking-wider mb-1" id="m-preview-tag">
                            <i class="fa-solid fa-sparkles text-amber-300"></i> ${esc(appData.store.heroWelcomeTag || 'SELAMAT DATANG')}
                        </span>
                        <h4 class="font-black text-sm text-white line-clamp-1" id="m-preview-title">${esc(appData.store.heroTitle || appData.store.name || 'TOKO PUTRI')}</h4>
                        <p class="text-[9.5px] text-white/90 line-clamp-2 mt-0.5 font-medium" id="m-preview-sub">${esc(appData.store.heroSubtitle || appData.store.slogan || 'Pusat Solusi Bangunan & Cat Terlengkap')}</p>
                    </div>
                    <div class="w-[35%] flex flex-col items-center">
                        <div class="w-18 h-18 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 bg-black/20 flex items-center justify-center">
                            <img id="m-preview-img" src="${esc(currentMascot)}" class="w-full h-full object-cover" onerror="this.src='/putri_mascot_3d.jpg';">
                        </div>
                        <div class="mt-1 bg-slate-950/80 text-[7.5px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/20 whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span id="m-preview-badge">${esc(appData.store.heroBadgeText || 'Siap Melayani')}</span>
                        </div>
                    </div>
                </div>

                <!-- Tampilkan Toggle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Tayang Slide Sambutan</label>
                    <select id="quick-set-show-hero-slide" class="admin-input !py-3 bg-white dark:bg-slate-800 shadow-sm w-full text-xs font-bold">
                        <option value="true" ${showHeroVal ? 'selected' : ''}>Ya, Tampilkan Slide Hero Sambutan (Rekomendasi)</option>
                        <option value="false" ${!showHeroVal ? 'selected' : ''}>Sembunyikan Slide Sambutan (Hanya Promo Produk)</option>
                    </select>
                </div>

                <!-- Ganti Foto / GIF Maskot / Avatar -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Foto / Animasi Maskot (JPG · PNG · GIF Bergerak <i class="fa-solid fa-wand-magic-sparkles text-amber-500 ml-1"></i>)</label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="quick-set-hero-mascot-img" value="${esc(appData.store.heroMascotImg || '')}"
                               class="admin-input !py-3 bg-white dark:bg-slate-800 shadow-sm flex-1 text-xs"
                               placeholder="URL gambar/GIF atau klik Upload (Kosong = Maskot Asli)"
                               oninput="document.getElementById('m-preview-img').src = this.value || '/putri_mascot_3d.jpg';">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/gif,image/jpeg,image/png,image/webp" class="hidden" onchange="handleImageUpload(this, 'quick-set-hero-mascot-img'); setTimeout(() => { const v=document.getElementById('quick-set-hero-mascot-img')?.value; if(v) document.getElementById('m-preview-img').src=v; }, 800);">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1"><i class="fa-solid fa-circle-info mr-1"></i>GIF animasi maks 8MB · JPG/PNG maks 3MB · URL internet langsung juga bisa</p>
                    <div class="flex gap-2 mt-1.5 flex-wrap">
                        <button type="button" onclick="document.getElementById('quick-set-hero-mascot-img').value='/putri_mascot_anim.gif'; document.getElementById('m-preview-img').src='/putri_mascot_anim.gif'; showToast('Animasi GIF dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 cursor-pointer inline-flex items-center" style="background: rgba(var(--color-primary-rgb),0.08); border-color: rgba(var(--color-primary-rgb),0.25); color: var(--color-primary);">
                            <i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Animasi GIF Maskot
                        </button>
                        <button type="button" onclick="document.getElementById('quick-set-hero-mascot-img').value='/putri_mascot_3d.jpg'; document.getElementById('m-preview-img').src='/putri_mascot_3d.jpg'; showToast('Maskot 3D asli dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-rotate-left mr-1"></i> Maskot 3D Statis
                        </button>
                        ${appData.store.logo ? `
                        <button type="button" onclick="const l='${esc(appData.store.logo)}'; document.getElementById('quick-set-hero-mascot-img').value=l; document.getElementById('m-preview-img').src=l; showToast('Logo toko dipilih');" class="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-store mr-1"></i> Pakai Logo Toko
                        </button>` : ''}
                    </div>
                </div>

                <!-- Teks Status Badge & Tag -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Teks Badge Status</label>
                        <input autocomplete="off" id="quick-set-hero-badge-text" value="${esc(appData.store.heroBadgeText || 'Siap Melayani')}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Siap Melayani" oninput="document.getElementById('m-preview-badge').innerText = this.value || 'Siap Melayani';">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Tag Ucapan</label>
                        <input autocomplete="off" id="quick-set-hero-welcome-tag" value="${esc(appData.store.heroWelcomeTag || 'SELAMAT DATANG')}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="SELAMAT DATANG" oninput="document.getElementById('m-preview-tag').innerHTML = '<i class=\\'fa-solid fa-sparkles text-amber-300\\'></i> ' + (this.value || 'SELAMAT DATANG');">
                    </div>
                </div>

                <!-- Judul & Subtitle -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Judul Banner (Kosong = Nama Toko)</label>
                    <input autocomplete="off" id="quick-set-hero-title" value="${esc(appData.store.heroTitle || appData.store.name || '')}" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="${esc(appData.store.name || 'TOKO PUTRI')}" oninput="document.getElementById('m-preview-title').innerText = this.value || '${esc(appData.store.name || 'TOKO PUTRI')}';">
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Slogan / Deskripsi Banner</label>
                    <textarea id="quick-set-hero-subtitle" rows="2" class="admin-input !py-2.5 bg-white dark:bg-slate-800 shadow-sm w-full text-xs" placeholder="Deskripsi ringkas..." oninput="document.getElementById('m-preview-sub').innerText = this.value || '';">${esc(appData.store.heroSubtitle || appData.store.slogan || '')}</textarea>
                </div>
            </div>

            <!-- Footer Modal -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/50 flex items-center justify-end gap-2 shrink-0">
                <button type="button" onclick="closeHeroBannerModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="button" onclick="saveHeroBannerModal()" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    `;
};

export const closeHeroBannerModal = (fH = false) => {
    const doClose = () => {
        const modal = document.getElementById('admin-hero-banner-modal');
        if (modal) modal.remove();
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('heroBanner', fH, doClose);
    } else {
        doClose();
    }
};

export const saveHeroBannerModal = async () => {
    sLoad('Menyimpan banner...');
    try {
        appData.store.showHeroSlide = getV('quick-set-show-hero-slide') === 'true';
        appData.store.heroMascotImg = fixD(getV('quick-set-hero-mascot-img'));
        appData.store.heroBadgeText = getV('quick-set-hero-badge-text') || 'Siap Melayani';
        appData.store.heroWelcomeTag = getV('quick-set-hero-welcome-tag') || 'SELAMAT DATANG';
        appData.store.heroTitle = getV('quick-set-hero-title');
        appData.store.heroSubtitle = getV('quick-set-hero-subtitle');
        
        if (typeof window.saveApp === 'function') {
            await window.saveApp(['store']);
        }
        
        closeHeroBannerModal();
        showToast("Banner sambutan & maskot berhasil diperbarui!");
        
        // Re-render modul tabel banner jika sedang di tab banners
        if (window.cTab === 'banners' && typeof window.rAdmL === 'function') {
            window.rAdmL('banners');
        }
        // Re-render beranda storefront
        if (typeof window.rDyn === 'function') window.rDyn();
    } catch(e) {
        showToast("Gagal menyimpan banner sambutan");
    } finally {
        hLoad();
    }
};

// ─── Terapkan Preset Cepat Smart Perpajakan Republik Indonesia 2026 ───
export const applyTaxPresetRI = (preset) => {
    const elEnabled = el('set-ppn-enabled');
    const elType = el('set-ppn-type');
    const elRate = el('set-ppn-rate');
    const elShowZero = el('set-ppn-show-zero');
    const elLabel = el('set-ppn-tax-label');

    if (!elEnabled || !elType || !elRate) return;

    if (preset === 'badan_non_pkp') {
        elEnabled.value = 'true';
        elType.value = 'inclusive';
        elRate.value = '0';
        if (elShowZero) elShowZero.value = 'true';
        if (elLabel) elLabel.value = 'PPN Badan (0% Bebas PPN)';
        showToast('Preset Badan Non-PKP diterapkan! (Tarif 0%, Bebas PPN Rp 0, Baris Pajak tercetak)');
    } else if (preset === 'inklusif_11') {
        elEnabled.value = 'true';
        elType.value = 'inclusive';
        elRate.value = '11';
        if (elShowZero) elShowZero.value = 'true';
        if (elLabel) elLabel.value = 'PPN (11%)';
        showToast('Preset Harga Inklusif 11% diterapkan! (Pajak di dalam harga produk)');
    } else if (preset === 'pkp_11') {
        elEnabled.value = 'true';
        elType.value = 'exclusive';
        elRate.value = '11';
        if (elShowZero) elShowZero.value = 'false';
        if (elLabel) elLabel.value = 'PPN (11%)';
        showToast('Preset PKP Standar 11% diterapkan! (Pajak ditambahkan di checkout)');
    } else if (preset === 'pkp_12') {
        elEnabled.value = 'true';
        elType.value = 'exclusive';
        elRate.value = '12';
        if (elShowZero) elShowZero.value = 'false';
        if (elLabel) elLabel.value = 'PPN (12%)';
        showToast('Preset Penyesuaian PKP 12% diterapkan! (UU Harmonisasi Perpajakan)');
    }

    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('medium');
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.syncAppMeta = syncAppMeta;
window.rAdmSet = rAdmSet;
window.selectPresetTheme = selectPresetTheme;
window.selectBgStyle = selectBgStyle;
window.openSettingForm = openSettingForm;
window.saveAdminSettings = saveAdminSettings;
window.applyTaxPresetRI = applyTaxPresetRI;
window.backupData = backupData;
window.restoreData = restoreData;
window.handleSmartMapsInput = handleSmartMapsInput;
window.handleManualCoordChange = handleManualCoordChange;
window.pasteFromClipboardToMapsInput = pasteFromClipboardToMapsInput;
window.previewStoreOnMaps = previewStoreOnMaps;
window.detectAdminGPS = detectAdminGPS;
window.openHeroBannerModal = openHeroBannerModal;
window.closeHeroBannerModal = closeHeroBannerModal;
window.saveHeroBannerModal = saveHeroBannerModal;

/**
 * ============================================================
 * THEME ENGINE
 * Mengelola tema warna (color palette), dark mode, dan CSS variables.
 * Dijalankan PERTAMA KALI sebelum modul lain agar tidak ada FOUC
 * (Flash Of Unstyled Content / kilatan warna salah saat load).
 * ============================================================
 */

// ─── Palet Warna Lengkap ─────────────────────────────────────
// Setiap palet berisi 10 shade (50–900) sesuai skala Tailwind.
export const uiPalettes = {
    'emerald' : { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b' },
    'teal'    : { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
    'cyan'    : { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
    'sky'     : { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
    'blue'    : { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
    'indigo'  : { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
    'violet'  : { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
    'purple'  : { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
    'fuchsia' : { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
    'pink'    : { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
    'rose'    : { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' },
    'red'     : { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#dc2626', 600: '#b91c1c', 700: '#991b1b', 800: '#7f1d1d', 900: '#450a0a' },
    'orange'  : { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#ea580c', 600: '#c2410c', 700: '#9a3412', 800: '#7c2d12', 900: '#431407' },
    'amber'   : { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#d97706', 600: '#b45309', 700: '#92400e', 800: '#78350f', 900: '#451a03' },
    'yellow'  : { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#eab308', 500: '#d97706', 600: '#b45309', 700: '#854d0e', 800: '#713f12', 900: '#3f1d0b' },
    'lime'    : { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#65a30d', 600: '#4d7c0f', 700: '#3f6212', 800: '#365314', 900: '#1a2e05' },
    'green'   : { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#16a34a', 600: '#15803d', 700: '#166534', 800: '#14532d', 900: '#052e16' },
    'slate'   : { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#475569', 600: '#334155', 700: '#1e293b', 800: '#0f172a', 900: '#020617' },
    'stone'   : { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#57534e', 600: '#44403c', 700: '#292524', 800: '#1c1917', 900: '#0c0a09' }
};

// ─── Helper ──────────────────────────────────────────────────
/**
 * Konversi warna HEX ke format "R,G,B" untuk dipakai di rgba().
 */
export const hexToRgb = hex => {
    let bigint = parseInt(hex.replace('#', ''), 16);
    return ((bigint >> 16) & 255) + ',' + ((bigint >> 8) & 255) + ',' + (bigint & 255);
};

/**
 * Gelapkan atau terangkan warna HEX secara matematis.
 * @param {string} h - warna HEX (#rrggbb)
 * @param {number} amt - jumlah adjustment (-255 s/d 255)
 */
export const adjustHex = (h, amt) => {
    let r = parseInt(h.slice(1,3),16), g = parseInt(h.slice(3,5),16), b = parseInt(h.slice(5,7),16);
    r = Math.max(0, Math.min(255, r + amt));
    g = Math.max(0, Math.min(255, g + amt));
    b = Math.max(0, Math.min(255, b + amt));
    return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
};

// ─── Apply Theme ─────────────────────────────────────────────
/**
 * Terapkan tema warna ke seluruh halaman via CSS custom properties.
 * Dipanggil saat app pertama load DAN setiap kali admin mengubah tema.
 *
 * @param {string} themeName - nama palet (misal 'emerald', 'blue', dll)
 * @param {string} customHex - warna HEX kustom (opsional, override palet)
 * @returns {object} - objek colors palet yang aktif
 */
/**
 * Sinkronkan seluruh tag meta PWA dan status bar browser ke warna tema aktif
 * @param {string} hex - warna HEX utama
 */
export const updatePwaThemeMeta = (hex) => {
    if (!hex) return;
    
    // 1. Meta theme-color (Browser standar & PWA Android/Windows)
    let m = document.querySelector('meta[name="theme-color"]');
    if (!m) { 
        m = document.createElement('meta'); 
        m.setAttribute('name', 'theme-color'); 
        document.head.appendChild(m); 
    }
    m.setAttribute('content', hex);

    // 2. Windows Phone / IE / Edge navbutton & Tile color
    let msNav = document.querySelector('meta[name="msapplication-navbutton-color"]');
    if (!msNav) {
        msNav = document.createElement('meta');
        msNav.setAttribute('name', 'msapplication-navbutton-color');
        document.head.appendChild(msNav);
    }
    msNav.setAttribute('content', hex);

    let msTile = document.querySelector('meta[name="msapplication-TileColor"]');
    if (!msTile) {
        msTile = document.createElement('meta');
        msTile.setAttribute('name', 'msapplication-TileColor');
        document.head.appendChild(msTile);
    }
    msTile.setAttribute('content', hex);

    // 3. Apple iOS Web App Status Bar
    let appleCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleCapable) {
        appleCapable = document.createElement('meta');
        appleCapable.setAttribute('name', 'apple-mobile-web-app-capable');
        document.head.appendChild(appleCapable);
    }
    appleCapable.setAttribute('content', 'yes');

    let mobileCapable = document.querySelector('meta[name="mobile-web-app-capable"]');
    if (!mobileCapable) {
        mobileCapable = document.createElement('meta');
        mobileCapable.setAttribute('name', 'mobile-web-app-capable');
        document.head.appendChild(mobileCapable);
    }
    mobileCapable.setAttribute('content', 'yes');

    let appleStatus = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatus) {
        appleStatus = document.createElement('meta');
        appleStatus.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
        document.head.appendChild(appleStatus);
    }
    appleStatus.setAttribute('content', 'default');

    // 4. Update Dynamic Web App Manifest Blob jika sudah tersedia
    if (typeof window.updatePwaManifest === 'function') {
        window.updatePwaManifest(hex);
    }
};

export const applyUITheme = (themeName, customHex) => {
    const uiTheme = themeName || localStorage.getItem('freshmart_ui_theme') || 'emerald';
    const colors  = uiPalettes[uiTheme] || uiPalettes['emerald'];

    if (themeName) localStorage.setItem('freshmart_ui_theme', uiTheme);

    // Jika ada customHex pakai itu, kalau tidak ambil dari palet atau cache
    const hex = customHex || localStorage.getItem('freshmart_theme_color') || colors[500];
    if (customHex) localStorage.setItem('freshmart_theme_color', hex);

    const primaryRgb = hexToRgb(hex);
    const darkHex    = adjustHex(hex, -30);   // lebih gelap ~12%
    const lightHex   = adjustHex(hex, 150);   // sangat terang untuk background subtle

    document.documentElement.style.setProperty('--color-primary',       hex);
    document.documentElement.style.setProperty('--color-primary-dark',  darkHex);
    document.documentElement.style.setProperty('--color-primary-light', lightHex);
    document.documentElement.style.setProperty('--color-primary-rgb',   primaryRgb);

    // Update warna header browser, status bar PWA, dan Dynamic Manifest Blob
    updatePwaThemeMeta(hex);

    return colors;
};

// ─── Dark Mode ───────────────────────────────────────────────
/**
 * Terapkan dark mode dari preferensi yang tersimpan atau setting OS.
 * Harus dipanggil SEAWAL MUNGKIN (sebelum render) untuk menghindari FOUC.
 */
export const initDarkMode = () => {
    const savedTheme = localStorage.getItem('freshmart_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
};

/**
 * Toggle dark/light mode dan simpan preferensi ke localStorage.
 */
export const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('freshmart_theme', isDark ? 'dark' : 'light');
    const icon = document.getElementById('icon-theme') || document.getElementById('theme-toggle-icon');
    if (icon) icon.className = isDark
        ? 'fa-solid fa-sun text-sm text-amber-400'
        : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
};

/**
 * Sinkronkan ikon tombol dark mode sesuai status saat ini.
 */
export const initThemeIcon = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('icon-theme') || document.getElementById('theme-toggle-icon');
    if (icon) icon.className = isDark
        ? 'fa-solid fa-sun text-sm text-amber-400'
        : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
};

// ─── Background Style Engine ─────────────────────────────────
/**
 * Terapkan gaya visual latar belakang toko & CMS.
 * Default ke 'minimalist' (polos bersih elegan solid tanpa corak ramai).
 *
 * @param {string} bgStyle - 'minimalist' | 'hero_arch' | 'geometric_3d' | 'diagonal_skew' | 'dual_tone'
 * @param {string} customBgUrl - URL gambar wallpaper kustom opsional
 */
export const applyBackgroundStyle = (bgStyle = 'minimalist', customBgUrl = '') => {
    const style = bgStyle || localStorage.getItem('freshmart_bg_style') || 'minimalist';
    const rawBgUrl = customBgUrl !== undefined && customBgUrl !== null
        ? customBgUrl
        : (localStorage.getItem('freshmart_bg_custom_url') || '');

    if (bgStyle) localStorage.setItem('freshmart_bg_style', style);
    if (customBgUrl !== undefined && customBgUrl !== null) {
        localStorage.setItem('freshmart_bg_custom_url', rawBgUrl);
    }

    // Helper konversi URL Google Drive ke direct streamable image URL
    const fixDUrl = (url) => {
        if (!url || typeof url !== 'string') return '';
        const m = url.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
        return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : url.trim();
    };

    const finalBgUrl = fixDUrl(rawBgUrl);

    // Set attribute data-bg-style ke HTML root & app container agar CSS aktif serentak di seluruh website
    document.documentElement.setAttribute('data-bg-style', style);
    document.body?.setAttribute('data-bg-style', style);
    const appCont = document.getElementById('app-container');
    if (appCont) {
        appCont.setAttribute('data-bg-style', style);
        if (finalBgUrl) {
            appCont.setAttribute('data-has-custom-bg', 'true');
        } else {
            appCont.removeAttribute('data-has-custom-bg');
        }
    }

    const container = document.getElementById('dynamic-bg-container');
    if (!container) return;

    // Kosongkan container lama
    container.innerHTML = '';
    container.className = "pointer-events-none fixed inset-0 z-0 overflow-hidden";

    // 1. Wallpaper Gambar Kustom jika diisi
    if (finalBgUrl) {
        const customImgDiv = document.createElement('div');
        customImgDiv.className = "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500";
        customImgDiv.style.backgroundImage = `url('${finalBgUrl}')`;
        container.appendChild(customImgDiv);

        const overlay = document.createElement('div');
        overlay.className = "absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none backdrop-blur-[0.5px]";
        container.appendChild(overlay);
    }

    // 2. Vector Shapes sesuai Model Gaya Visual
    let shapesHtml = '';

    if (style === 'hero_arch') {
        shapesHtml = `
            <!-- Hero Arch Glow & Vector Curve -->
            <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] max-w-[1500px] h-80 rounded-b-[100%] bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.18)] to-transparent pointer-events-none blur-sm"></div>
            <div class="absolute top-28 left-1/2 -translate-x-1/2 w-[110%] max-w-[1300px] h-52 rounded-b-[100%] border-b-2 border-[rgba(var(--color-primary-rgb),0.2)] pointer-events-none"></div>
        `;
    } else if (style === 'geometric_3d') {
        shapesHtml = `
            <!-- Geometris 3D Matrix Grid & Isometric Vector -->
            <div class="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20" style="background-image: linear-gradient(30deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(150deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(30deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(150deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(60deg, rgba(var(--color-primary-rgb),0.2) 25%, transparent 25.5%, transparent 75%, rgba(var(--color-primary-rgb),0.2) 75%, rgba(var(--color-primary-rgb),0.2)), linear-gradient(60deg, rgba(var(--color-primary-rgb),0.2) 25%, transparent 25.5%, transparent 75%, rgba(var(--color-primary-rgb),0.2) 75%, rgba(var(--color-primary-rgb),0.2)); background-size: 40px 70px; background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;"></div>
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-[rgba(var(--color-primary-rgb),0.15)] rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute top-1/3 -right-24 w-96 h-96 bg-[rgba(var(--color-primary-rgb),0.1)] rounded-full blur-3xl pointer-events-none"></div>
        `;
    } else if (style === 'diagonal_skew') {
        shapesHtml = `
            <!-- Diagonal Skew Linear Grid & Glow -->
            <div class="absolute inset-0 pointer-events-none opacity-25 dark:opacity-20" style="background: repeating-linear-gradient(45deg, rgba(var(--color-primary-rgb),0.12), rgba(var(--color-primary-rgb),0.12) 2px, transparent 2px, transparent 24px);"></div>
            <div class="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.2)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
        `;
    } else if (style === 'dual_tone') {
        shapesHtml = `
            <!-- Dual-Tone Split Atmosphere -->
            <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.16)] via-[rgba(var(--color-primary-rgb),0.05)] to-transparent pointer-events-none"></div>
            <div class="absolute top-0 right-0 w-2/3 h-80 bg-[rgba(var(--color-primary-rgb),0.08)] -skew-y-6 pointer-events-none blur-2xl"></div>
        `;
    } else {
        // Minimalis: Polos bersih, elegan, solid
        shapesHtml = ``;
    }

    if (shapesHtml) {
        const vectorDiv = document.createElement('div');
        vectorDiv.className = "absolute inset-0 z-0 pointer-events-none";
        vectorDiv.innerHTML = shapesHtml;
        container.appendChild(vectorDiv);
    }
};


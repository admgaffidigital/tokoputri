/**
 * ============================================================
 * SMART DYNAMIC PRODUCT COVER ENGINE (product-cover.js)
 * Menghasilkan visual cover kartu produk otomatis, estetik,
 * dan bermerek saat produk tidak memiliki gambar/foto.
 * 100% Offline, tanpa dependensi eksternal, performa instan.
 * ============================================================
 */

import { esc } from './utils.js';

// ─── Palet Tema & Ikon Kategori Toko Bahan Bangunan & Retail ─────────
const THEMES = [
    {
        id: 'paint',
        keywords: ['cat', 'paint', 'politur', 'thinner', 'kuas', 'roll', 'vernis', 'woodstain', 'pewarna', 'bocor', 'waterproof', 'pelapis', 'nodrop', 'no drop', 'aquaproof', 'avian', 'dulux', 'jotun'],
        icon: 'fa-paint-roller',
        subIcon: 'fa-fill-drip',
        label: 'Cat & Pelapis',
        bg: 'linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #312e81 100%)',
        accent: '#c7d2fe',
        badgeBg: 'rgba(99, 102, 241, 0.35)'
    },
    {
        id: 'tools',
        keywords: ['paku', 'baut', 'sekrup', 'mur', 'nail', 'screw', 'bolt', 'alat', 'perkakas', 'tang', 'obeng', 'palu', 'gergaji', 'kunci pas', 'meteran', 'waterpass', 'tool', 'amplas', 'mata bor', 'bor', 'gerinda'],
        icon: 'fa-screwdriver-wrench',
        subIcon: 'fa-hammer',
        label: 'Paku & Perkakas',
        bg: 'linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)',
        accent: '#cbd5e1',
        badgeBg: 'rgba(148, 163, 184, 0.25)'
    },
    {
        id: 'plumbing',
        keywords: ['pipa', 'pvc', 'paralon', 'sambungan', 'knee', 'tee', 'socket', 'faucet', 'kran', 'sanitair', 'water', 'air', 'selang', 'talang', 'toren', 'drat', 'rucika', 'onda', 'saringan', 'afur', 'siphon'],
        icon: 'fa-faucet-drip',
        subIcon: 'fa-droplet',
        label: 'Pipa & Sanitair',
        bg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e3a8a 100%)',
        accent: '#bae6fd',
        badgeBg: 'rgba(56, 189, 248, 0.3)'
    },
    {
        id: 'building',
        keywords: ['semen', 'mortar', 'pasir', 'bata', 'hebel', 'plester', 'acian', 'beton', 'cor', 'batu', 'keramik', 'granit', 'nat', 'semen putih', 'gypsum', 'tiga roda', 'gresik', 'holcim', 'dynamix'],
        icon: 'fa-trowel-bricks',
        subIcon: 'fa-cubes',
        label: 'Bahan Bangunan',
        bg: 'linear-gradient(135deg, #78716c 0%, #57534e 50%, #292524 100%)',
        accent: '#e7e5e4',
        badgeBg: 'rgba(168, 162, 158, 0.3)'
    },
    {
        id: 'electric',
        keywords: ['listrik', 'kabel', 'lampu', 'saklar', 'stop kontak', 'steker', 'fitting', 'mcb', 'led', 'bohlam', 'elektronik', 'kawat', 'electric', 'isolasi', 'broco', 'panasonic', 'philips', 'kabel supreme'],
        icon: 'fa-bolt',
        subIcon: 'fa-lightbulb',
        label: 'Kelistrikan',
        bg: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #7c2d12 100%)',
        accent: '#fef08a',
        badgeBg: 'rgba(245, 158, 11, 0.35)'
    },
    {
        id: 'wood',
        keywords: ['kayu', 'papan', 'triplek', 'plywood', 'kasau', 'reng', 'bambu', 'balok', 'rotan', 'mdf', 'multiplek', 'lis', 'profil'],
        icon: 'fa-tree',
        subIcon: 'fa-ruler-combined',
        label: 'Kayu & Papan',
        bg: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
        accent: '#a7f3d0',
        badgeBg: 'rgba(16, 185, 129, 0.3)'
    },
    {
        id: 'lock',
        keywords: ['kunci', 'gembok', 'handle', 'engsel', 'slot', 'hak angin', 'tarikan', 'door', 'lock', 'silinder', 'dekson', 'solid', 'paloma'],
        icon: 'fa-lock',
        subIcon: 'fa-key',
        label: 'Kunci & Engsel',
        bg: 'linear-gradient(135deg, #ca8a04 0%, #a16207 50%, #713f12 100%)',
        accent: '#fef08a',
        badgeBg: 'rgba(234, 179, 8, 0.35)'
    },
    {
        id: 'roof',
        keywords: ['besi', 'baja', 'hollow', 'seng', 'atap', 'galvalum', 'spandek', 'wiremesh', 'plat', 'pipa besi', 'asbes', 'genteng', 'nok', 'alderon'],
        icon: 'fa-shield-halved',
        subIcon: 'fa-bars',
        label: 'Besi & Atap',
        bg: 'linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #164e63 100%)',
        accent: '#a5f3fc',
        badgeBg: 'rgba(6, 182, 212, 0.3)'
    },
    {
        id: 'adhesive',
        keywords: ['lem', 'silikon', 'sealant', 'perekat', 'lakban', 'solasi', 'tape', 'glue', 'fox', 'alteco', 'dextone', 'sika'],
        icon: 'fa-spray-can',
        subIcon: 'fa-vial',
        label: 'Lem & Perekat',
        bg: 'linear-gradient(135deg, #e11d48 0%, #be123c 50%, #881337 100%)',
        accent: '#fecdd3',
        badgeBg: 'rgba(244, 63, 94, 0.35)'
    }
];

// Tema Default (Emas Royal Toko Putri)
const DEFAULT_THEME = {
    id: 'default',
    icon: 'fa-box-open',
    subIcon: 'fa-cube',
    label: 'Produk Toko',
    bg: 'linear-gradient(135deg, #a16207 0%, #854d0e 50%, #422006 100%)',
    accent: '#fde047',
    badgeBg: 'rgba(234, 179, 8, 0.35)'
};

/**
 * Deteksi tema & ikon visual berdasarkan nama, kategori, atau brand produk.
 */
export const getProductTheme = (productOrName, category = '', brand = '') => {
    let nameStr = '';
    let catStr = '';
    let brandStr = '';

    if (typeof productOrName === 'object' && productOrName !== null) {
        nameStr = String(productOrName.name || '');
        catStr = String(productOrName.category || productOrName.subCategory || '');
        brandStr = String(productOrName.brand || '');
    } else {
        nameStr = String(productOrName || '');
        catStr = String(category || '');
        brandStr = String(brand || '');
    }

    const query = `${nameStr} ${catStr} ${brandStr}`.toLowerCase();

    for (const theme of THEMES) {
        for (const kw of theme.keywords) {
            if (query.includes(kw)) {
                return theme;
            }
        }
    }

    return DEFAULT_THEME;
};

/**
 * Ekstraksi 2 huruf inisial (Monogram) yang elegan dan bermakna dari nama produk.
 * Contoh: "NO DROP 1 KG" -> "ND", "PAKU 11/2 SUPER Q" -> "PS", "SEMEN GRESIK" -> "SG"
 */
export const getMonogram = (name) => {
    if (!name || typeof name !== 'string') return 'TP';
    
    // Bersihkan karakter selain alfanumerik dan spasi
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, ' ').trim();
    // Pisahkan kata dan utamakan kata alfabet (abaikan kata yang murni angka bila ada pilihan alfabet)
    const allWords = clean.split(/\s+/).filter(w => w.length > 0);
    const alphaWords = allWords.filter(w => /[a-zA-Z]/.test(w));
    
    const wordsToUse = alphaWords.length > 0 ? alphaWords : allWords;
    
    if (wordsToUse.length >= 2) {
        return (wordsToUse[0][0] + wordsToUse[1][0]).toUpperCase();
    }
    if (wordsToUse.length === 1) {
        const w = wordsToUse[0];
        return (w.length >= 2 ? w.slice(0, 2) : w + 'P').toUpperCase();
    }
    return 'TP';
};

/**
 * Render elemen HTML Smart Dynamic Cover lengkap.
 * @param {Object|string} product - Objek produk atau nama produk
 * @param {Object} options - Pengaturan render { size: 'lg'|'md'|'sm'|'thumb', showBadge: boolean, className: string }
 */
export const renderProductCoverHtml = (product, options = {}) => {
    const size = options.size || 'md'; // 'lg', 'md', 'sm', 'thumb'
    const showBadge = options.showBadge !== undefined ? options.showBadge : (size === 'lg' || size === 'md');
    const customClass = options.className || '';

    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const pCat  = typeof product === 'object' && product !== null ? (product.category || product.subCategory || '') : '';
    const pBrand = typeof product === 'object' && product !== null ? (product.brand || '') : '';

    const theme = getProductTheme(product, pCat, pBrand);
    const monogram = getMonogram(pName);
    const labelText = pCat ? esc(pCat) : theme.label;

    return `
    <div class="pos-smart-cover cover-${size} ${customClass}" style="background: ${theme.bg};" title="${esc(pName)}">
        <!-- Ambient Radial Glow -->
        <div class="cover-glow" style="background: radial-gradient(circle, ${theme.accent}33 0%, transparent 70%);"></div>
        <!-- Decorative Geometric Rings -->
        <div class="cover-ring cover-ring-1"></div>
        <div class="cover-ring cover-ring-2"></div>
        
        <!-- Central Icon & Monogram -->
        <div class="cover-center">
            <div class="cover-icon-circle" style="border-color: ${theme.accent}4d; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
                <i class="fa-solid ${theme.icon}" style="color: ${theme.accent};"></i>
            </div>
            <div class="cover-monogram">
                ${monogram}
            </div>
        </div>
        
        <!-- Category Pill & Store Watermark (untuk ukuran md & lg) -->
        ${showBadge ? `
        <div class="cover-pill" style="border-color: ${theme.accent}33; background: ${theme.badgeBg};">
            <i class="fa-solid ${theme.subIcon || theme.icon} text-[7px]" style="color: ${theme.accent};"></i>
            <span>${labelText}</span>
        </div>` : ''}

        ${(size === 'lg' || size === 'md') ? `
        <div class="cover-watermark">PUTRI UTAMA TEKNIK</div>` : ''}
    </div>`;
};

/**
 * Helper untuk membuat data URI SVG ringkas bila diperlukan sebagai fallback img.src langsung.
 */
export const getProductCoverSvgDataUri = (product) => {
    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const theme = getProductTheme(product);
    const mono = getMonogram(pName);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="130" r="45" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <text x="150" y="210" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="3">${mono}</text>
        <text x="150" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

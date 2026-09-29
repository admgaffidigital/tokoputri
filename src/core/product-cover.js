/**
 * ============================================================
 * SMART 3D CLAYMORPHIC PRODUCT COVER ENGINE (product-cover.js)
 * Menghasilkan visual cover kartu produk otomatis, estetik, cerah,
 * dan bermerek saat produk tidak memiliki gambar/foto asli.
 * Mengusung gaya Modern 3D Studio Claymorphism dengan ambient lighting
 * hangat, floating squircle pod, dan ikon visual ekspresif.
 * 100% Offline, tanpa dependensi eksternal, performa instan (0ms).
 * ============================================================
 */

import { esc } from './utils.js';

// ─── Palet Tema & Ikon Kategori Toko Bahan Bangunan & Retail ─────────
const THEMES = [
    {
        id: 'household',
        keywords: ['minyak', 'bimoli', 'filma', 'sunco', 'tropical', 'goreng', 'sembako', 'beras', 'gula', 'kopi', 'teh', 'sabun', 'deterjen', 'dapur', 'pel', 'pembersih', 'wipol', 'so-klin', 'rinso', 'mama'],
        icon: 'fa-bottle-droplet',
        subIcon: 'fa-kitchen-set',
        label: 'Kebutuhan & Rumah Tangga',
        podGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)',
        accent: '#fef3c7',
        aura: 'rgba(245, 158, 11, 0.28)',
        shadowColor: 'rgba(217, 119, 6, 0.35)'
    },
    {
        id: 'paint',
        keywords: ['cat', 'paint', 'politur', 'thinner', 'kuas', 'roll', 'vernis', 'woodstain', 'pewarna', 'bocor', 'waterproof', 'pelapis', 'nodrop', 'no drop', 'aquaproof', 'avian', 'dulux', 'jotun'],
        icon: 'fa-paint-roller',
        subIcon: 'fa-fill-drip',
        label: 'Cat & Pelapis',
        podGradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 60%, #3730a3 100%)',
        accent: '#e0e7ff',
        aura: 'rgba(99, 102, 241, 0.28)',
        shadowColor: 'rgba(79, 70, 229, 0.35)'
    },
    {
        id: 'tools',
        keywords: ['paku', 'baut', 'sekrup', 'mur', 'nail', 'screw', 'bolt', 'alat', 'perkakas', 'tang', 'obeng', 'palu', 'gergaji', 'kunci pas', 'meteran', 'waterpass', 'tool', 'amplas', 'mata bor', 'bor', 'gerinda'],
        icon: 'fa-screwdriver-wrench',
        subIcon: 'fa-hammer',
        label: 'Paku & Perkakas',
        podGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)',
        accent: '#dbeafe',
        aura: 'rgba(37, 99, 235, 0.28)',
        shadowColor: 'rgba(37, 99, 235, 0.35)'
    },
    {
        id: 'plumbing',
        keywords: ['pipa', 'pvc', 'paralon', 'sambungan', 'knee', 'tee', 'socket', 'faucet', 'kran', 'sanitair', 'water', 'air', 'selang', 'talang', 'toren', 'drat', 'rucika', 'onda', 'saringan', 'afur', 'siphon'],
        icon: 'fa-faucet-drip',
        subIcon: 'fa-droplet',
        label: 'Pipa & Sanitair',
        podGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 60%, #0e7490 100%)',
        accent: '#cffafe',
        aura: 'rgba(6, 182, 212, 0.28)',
        shadowColor: 'rgba(8, 145, 178, 0.35)'
    },
    {
        id: 'building',
        keywords: ['semen', 'mortar', 'pasir', 'bata', 'hebel', 'plester', 'acian', 'beton', 'cor', 'batu', 'keramik', 'granit', 'nat', 'semen putih', 'gypsum', 'tiga roda', 'gresik', 'holcim', 'dynamix'],
        icon: 'fa-trowel-bricks',
        subIcon: 'fa-cubes',
        label: 'Bahan Bangunan',
        podGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 60%, #c2410c 100%)',
        accent: '#ffedd5',
        aura: 'rgba(234, 88, 12, 0.28)',
        shadowColor: 'rgba(234, 88, 12, 0.35)'
    },
    {
        id: 'electric',
        keywords: ['listrik', 'kabel', 'lampu', 'saklar', 'stop kontak', 'steker', 'fitting', 'mcb', 'led', 'bohlam', 'elektronik', 'kawat', 'electric', 'isolasi', 'broco', 'panasonic', 'philips', 'kabel supreme'],
        icon: 'fa-bolt',
        subIcon: 'fa-lightbulb',
        label: 'Kelistrikan',
        podGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 60%, #d97706 100%)',
        accent: '#fef3c7',
        aura: 'rgba(245, 158, 11, 0.28)',
        shadowColor: 'rgba(217, 119, 6, 0.35)'
    },
    {
        id: 'wood',
        keywords: ['kayu', 'papan', 'triplek', 'plywood', 'kasau', 'reng', 'bambu', 'balok', 'rotan', 'mdf', 'multiplek', 'lis', 'profil'],
        icon: 'fa-tree',
        subIcon: 'fa-ruler-combined',
        label: 'Kayu & Papan',
        podGradient: 'linear-gradient(135deg, #10b981 0%, #059669 60%, #047857 100%)',
        accent: '#d1fae5',
        aura: 'rgba(16, 185, 129, 0.28)',
        shadowColor: 'rgba(5, 150, 105, 0.35)'
    },
    {
        id: 'lock',
        keywords: ['kunci', 'gembok', 'handle', 'engsel', 'slot', 'hak angin', 'tarikan', 'door', 'lock', 'silinder', 'dekson', 'solid', 'paloma'],
        icon: 'fa-lock',
        subIcon: 'fa-key',
        label: 'Kunci & Gembok',
        podGradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 60%, #a16207 100%)',
        accent: '#fef9c3',
        aura: 'rgba(234, 179, 8, 0.28)',
        shadowColor: 'rgba(202, 138, 4, 0.35)'
    },
    {
        id: 'roof',
        keywords: ['besi', 'baja', 'hollow', 'seng', 'atap', 'galvalum', 'spandek', 'wiremesh', 'plat', 'pipa besi', 'asbes', 'genteng', 'nok', 'alderon'],
        icon: 'fa-shield-halved',
        subIcon: 'fa-bars',
        label: 'Besi & Atap',
        podGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 60%, #075985 100%)',
        accent: '#e0f2fe',
        aura: 'rgba(2, 132, 199, 0.28)',
        shadowColor: 'rgba(3, 105, 161, 0.35)'
    },
    {
        id: 'adhesive',
        keywords: ['lem', 'silikon', 'sealant', 'perekat', 'lakban', 'solasi', 'tape', 'glue', 'fox', 'alteco', 'dextone', 'sika'],
        icon: 'fa-spray-can',
        subIcon: 'fa-vial',
        label: 'Lem & Perekat',
        podGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 60%, #be123c 100%)',
        accent: '#ffe4e6',
        aura: 'rgba(244, 63, 94, 0.28)',
        shadowColor: 'rgba(225, 29, 72, 0.35)'
    }
];

// Tema Default: Radiant Warm Luxury Gold khas Toko Putri
const DEFAULT_THEME = {
    id: 'default',
    icon: 'fa-box-archive',
    subIcon: 'fa-cube',
    label: 'Produk Resmi',
    podGradient: 'linear-gradient(135deg, #e1b858 0%, #c59b27 50%, #a87f1b 100%)',
    accent: '#fef08a',
    aura: 'rgba(197, 155, 39, 0.28)',
    shadowColor: 'rgba(168, 127, 27, 0.35)'
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
 * Helper ekstraksi monogram (tetap dipertahankan untuk backward compatibility).
 */
export const getMonogram = (name) => {
    if (!name || typeof name !== 'string') return 'TP';
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, ' ').trim();
    const allWords = clean.split(/\s+/).filter(w => w.length > 0);
    const alphaWords = allWords.filter(w => /[a-zA-Z]/.test(w));
    const wordsToUse = alphaWords.length > 0 ? alphaWords : allWords;
    if (wordsToUse.length >= 2) return (wordsToUse[0][0] + wordsToUse[1][0]).toUpperCase();
    if (wordsToUse.length === 1) return (wordsToUse[0].length >= 2 ? wordsToUse[0].slice(0, 2) : wordsToUse[0] + 'P').toUpperCase();
    return 'TP';
};

/**
 * Render elemen HTML Smart 3D Claymorphic Cover.
 * Menggantikan visual kusam dengan wadah 3D melayang cerah dan ambient studio mewah.
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
    const labelText = pCat ? esc(pCat) : esc(theme.label);

    return `
    <div class="pos-smart-cover cover-${size} ${customClass}" data-theme="${theme.id}" title="${esc(pName)}">
        <!-- Subtle Architectural Studio Grid Background -->
        <div class="cover-studio-grid"></div>

        <!-- Ambient Volumetric Glow -->
        <div class="cover-glow" style="background: radial-gradient(circle, ${theme.aura} 0%, transparent 70%);"></div>

        <!-- Decorative Floating Rings -->
        <div class="cover-ring cover-ring-1"></div>
        <div class="cover-ring cover-ring-2"></div>

        <!-- Floating 3D Claymorphic Pod with Large Hero Icon -->
        <div class="cover-center">
            <div class="cover-pod-wrap">
                <div class="cover-3d-pod" style="background: ${theme.podGradient}; box-shadow: 0 14px 28px -6px ${theme.shadowColor}, 0 6px 14px -2px rgba(0,0,0,0.08), inset 0 2.5px 5px rgba(255,255,255,0.7), inset 0 -2.5px 5px rgba(0,0,0,0.15);">
                    <i class="fa-solid ${theme.icon} cover-hero-icon" style="color: #ffffff; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.22));"></i>
                </div>
            </div>
        </div>

        <!-- Category Capsule Pill (Floating below pod) -->
        ${showBadge ? `
        <div class="cover-pill">
            <i class="fa-solid ${theme.subIcon || theme.icon}"></i>
            <span>${labelText}</span>
        </div>` : ''}

        <!-- Branded Watermark -->
        ${(size === 'lg' || size === 'md') ? `
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[6.5px] opacity-70"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>` : ''}
    </div>`;
};

/**
 * Helper untuk membuat data URI SVG ringkas bila diperlukan sebagai fallback img.src langsung.
 */
export const getProductCoverSvgDataUri = (product) => {
    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const theme = getProductTheme(product);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fdfcf9"/>
                <stop offset="100%" stop-color="#eee6d8"/>
            </linearGradient>
            <radialGradient id="aura" cx="50%" cy="45%" r="45%">
                <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="135" r="95" fill="url(#aura)"/>
        <rect x="95" y="80" width="110" height="110" rx="32" fill="#c59b27" filter="drop-shadow(0 14px 20px rgba(0,0,0,0.18))"/>
        <text x="150" y="245" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="11" fill="#475569" text-anchor="middle" letter-spacing="1">${esc(pName.slice(0, 24))}</text>
        <text x="150" y="278" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="8.5" fill="#94a3b8" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

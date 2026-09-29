/**
 * ============================================================
 * MINIMALIST CLEAN BRAND PRODUCT COVER (product-cover.js)
 * Menghasilkan visual cover kartu produk yang sederhana, rapi,
 * tenang, dan 100% harmonis dengan tema aktif toko.
 * Menggunakan ikon paket / shopping bag universal & watermark resmi toko.
 * 100% Offline, tanpa dependensi eksternal, performa instan (0ms).
 * ============================================================
 */

import { esc } from './utils.js';

/**
 * Deteksi ikon representatif: Paket Box (fa-box-open) vs Shopping Bag (fa-bag-shopping)
 */
export const getCoverIcon = (productOrName) => {
    let query = '';
    if (typeof productOrName === 'object' && productOrName !== null) {
        query = `${productOrName.name || ''} ${productOrName.category || ''} ${productOrName.subCategory || ''}`.toLowerCase();
    } else {
        query = String(productOrName || '').toLowerCase();
    }

    const BOX_KEYWORDS = [
        'paku', 'baut', 'sekrup', 'mur', 'pipa', 'pvc', 'paralon', 'semen', 'pasir', 
        'bata', 'mortar', 'hebel', 'besi', 'baja', 'hollow', 'seng', 'atap', 'kawat', 
        'cat', 'paint', 'roll', 'kuas', 'thinner', 'amplas', 'alat', 'perkakas', 
        'tang', 'obeng', 'palu', 'kunci', 'gembok', 'meteran', 'bor', 'gerinda', 'paket', 'box'
    ];

    const isBox = BOX_KEYWORDS.some(kw => query.includes(kw));
    return isBox ? 'fa-box-open' : 'fa-bag-shopping';
};

/**
 * Backward compatibility getProductTheme
 */
export const getProductTheme = (productOrName, category = '', brand = '') => {
    const icon = getCoverIcon(productOrName);
    return {
        id: 'brand',
        icon: icon,
        subIcon: icon,
        label: 'Produk Resmi',
        podGradient: 'linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)',
        accent: 'rgba(var(--color-primary-rgb),0.1)',
        aura: 'rgba(var(--color-primary-rgb),0.08)',
        shadowColor: 'rgba(var(--color-primary-rgb),0.15)'
    };
};

/**
 * Helper ekstraksi monogram (backward compatibility)
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
 * Render elemen HTML Minimalist Clean Brand Cover.
 * Sederhana, rapi, tidak jomplang dengan theme, ikon paket / bag shopping, dan watermark resmi toko.
 * @param {Object|string} product - Objek produk atau nama produk
 * @param {Object} options - Pengaturan render { size: 'lg'|'md'|'sm'|'thumb', className: string }
 */
export const renderProductCoverHtml = (product, options = {}) => {
    const size = options.size || 'md'; // 'lg', 'md', 'sm', 'thumb'
    const customClass = options.className || '';

    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const iconClass = getCoverIcon(product);
    const storeName = 'PUTRI UTAMA TEKNIK';

    return `
    <div class="pos-smart-cover cover-${size} ${customClass}" title="${esc(pName)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${iconClass} cover-icon"></i>
            </div>
        </div>

        <!-- Official Store Watermark -->
        ${size !== 'thumb' ? `
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>${storeName}</span>
        </div>` : ''}
    </div>`;
};

/**
 * Helper SVG Data URI untuk fallback img.src langsung
 */
export const getProductCoverSvgDataUri = (product) => {
    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#faf8f5"/>
                <stop offset="100%" stop-color="#eee8dc"/>
            </linearGradient>
            <radialGradient id="aura" cx="50%" cy="48%" r="40%">
                <stop offset="0%" stop-color="#c59b27" stop-opacity="0.12"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="135" r="85" fill="url(#aura)"/>
        <rect x="105" y="90" width="90" height="90" rx="24" fill="#ffffff" stroke="#c59b27" stroke-width="2" stroke-opacity="0.4"/>
        <text x="150" y="272" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="8.5" fill="#94a3b8" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

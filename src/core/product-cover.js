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
export const getCoverCategoryMeta = (productOrName) => {
    let query = '';
    if (typeof productOrName === 'object' && productOrName !== null) {
        query = `${productOrName.name || ''} ${productOrName.category || ''} ${productOrName.subCategory || ''}`.toLowerCase();
    } else {
        query = String(productOrName || '').toLowerCase();
    }

    // 1. Cat & Finishing
    if (query.includes('cat') || query.includes('paint') || query.includes('politur') || query.includes('thinner') || query.includes('no drop') || query.includes('kuas') || query.includes('roll')) {
        return {
            icon: 'fa-paint-roller',
            gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)',
            textColor: '#e11d48'
        };
    }
    // 2. Gembok & Kunci Pengaman
    if (query.includes('gembok') || query.includes('kunci') || query.includes('grendel') || query.includes('slot') || query.includes('silinder')) {
        return {
            icon: 'fa-lock',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            textColor: '#d97706'
        };
    }
    // 3. Paku, Baut & Fastener
    if (query.includes('paku') || query.includes('baut') || query.includes('sekrup') || query.includes('mur') || query.includes('kawat')) {
        return {
            icon: 'fa-hammer',
            gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)',
            textColor: '#475569'
        };
    }
    // 4. Pipa & Sambungan Sanitair
    if (query.includes('pipa') || query.includes('pvc') || query.includes('paralon') || query.includes('kran') || query.includes('sambungan') || query.includes('fitting') || query.includes('knee') || query.includes('tee')) {
        return {
            icon: 'fa-faucet-drip',
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            textColor: '#0891b2'
        };
    }
    // 5. Semen & Bahan Bangunan
    if (query.includes('semen') || query.includes('mortar') || query.includes('pasir') || query.includes('bata') || query.includes('hebel')) {
        return {
            icon: 'fa-trowel-bricks',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)',
            textColor: '#c2410c'
        };
    }
    // 6. Perkakas & Alat Pertukangan
    if (query.includes('perkakas') || query.includes('tang') || query.includes('obeng') || query.includes('palu') || query.includes('bor') || query.includes('gerinda') || query.includes('meteran') || query.includes('gergaji')) {
        return {
            icon: 'fa-toolbox',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
            bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
            textColor: '#4f46e5'
        };
    }

    // Default Brand Theme
    return {
        icon: 'fa-box-open',
        gradient: 'linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)',
        bgGlow: 'radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)',
        textColor: 'var(--color-primary)'
    };
};

/**
 * Deteksi ikon representatif: Menggunakan meta kategori semantik
 */
export const getCoverIcon = (productOrName) => {
    return getCoverCategoryMeta(productOrName).icon;
};

/**
 * Backward compatibility getProductTheme
 */
export const getProductTheme = (productOrName, category = '', brand = '') => {
    const meta = getCoverCategoryMeta(productOrName);
    return {
        id: 'brand',
        icon: meta.icon,
        subIcon: meta.icon,
        label: 'Produk Resmi',
        podGradient: meta.gradient,
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
 * Sederhana, rapi, tidak jomplang dengan theme, ikon semantik kategori + monogram resmi toko.
 * @param {Object|string} product - Objek produk atau nama produk
 * @param {Object} options - Pengaturan render { size: 'lg'|'md'|'sm'|'thumb', className: string }
 */
export const renderProductCoverHtml = (product, options = {}) => {
    const size = options.size || 'md'; // 'lg', 'md', 'sm', 'thumb'
    const customClass = options.className || '';

    const pName = typeof product === 'object' && product !== null ? (product.name || 'Produk') : String(product || 'Produk');
    const meta = getCoverCategoryMeta(product);
    const monogram = getMonogram(pName);
    const storeName = 'PUTRI UTAMA TEKNIK';

    return `
    <div class="pos-smart-cover cover-${size} ${customClass}" title="${esc(pName)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow" style="background:${meta.bgGlow}"></div>

        <!-- Center Content: Icon Pod + Monogram -->
        <div class="cover-center">
            <div class="cover-icon-pod" style="background:${meta.gradient}">
                <i class="fa-solid ${meta.icon} cover-icon text-white"></i>
            </div>
            ${size === 'md' || size === 'lg' ? `<span class="cover-monogram" style="color:${meta.textColor}">${esc(monogram)}</span>` : ''}
        </div>

        <!-- Official Store Watermark -->
        ${size !== 'thumb' && size !== 'sm' ? `
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

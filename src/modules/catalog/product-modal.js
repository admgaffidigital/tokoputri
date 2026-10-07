/**
 * ============================================================
 * MODUL MODAL DETAIL PRODUK & INTERAKSI VARIAN
 * Menangani modal pop-up produk, galeri gambar & video,
 * pilihan varian (warna jumbo, stok per varian), tabel grosir,
 * spesifikasi teknis, review produk, SEO dinamis & share.
 * ============================================================
 */

import { 
    appData, cart, wishlist, 
    cProd, setCProd, 
    cQty, setCQty, 
    cVar, setCVar, 
    oMods 
} from '../../core/state.js';


import { 
    el, show, hide, setIn, setH, setV, 
    esc, fCur, getOptImg, showToast, 
    getYouTubeId, ssL, openModalAnim, closeModalAnim,
    renderProductCoverHtml, isPlaceholderImg
} from '../../core/utils.js';

import { updCart } from '../cart/cart.js';
import { curViewName } from '../../core/router.js';
import { calculateAllPaylaterTenors, getPaylaterConfig } from '../../core/paylater.js';

window.cSlideIdx = 0;
let productNavStack = [];

/**
 * Buka modal detail produk berdasarkan ID produk
 */
export const openProductModal = (i, isFromNavStack = false) => {
    window.cSlideIdx = 0;
    const p = appData.products.find(x => x && x.id != null && String(x.id) === String(i));
    if (!p) return;
    
    // Validasi produk aktif dan stok tersedia
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    const isPreorder = Boolean(p.poTime && String(p.poTime).trim());
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let totalAvail = Infinity;
    if (useStk) {
        totalAvail = (p.variants && p.variants.length)
            ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s, v) => {
                const rawV = (v.stock != null && v.stock !== '') ? v.stock : (v.stok != null && v.stok !== '' ? v.stok : null);
                return s + (rawV != null ? (parseFloat(rawV) || 0) : 0);
            }, 0)
            : (parseFloat(p.stock != null && p.stock !== '' ? p.stock : (p.stok != null && p.stok !== '' ? p.stok : 0)) || 0);
    }
    if (!pActive) {
        showToast('Produk ini sedang tidak tersedia');
        return;
    }
    if (useStk && !isPreorder && totalAvail <= 0) {
        showToast('Maaf, stok produk ini sedang kosong');
        return;
    }

    const m = el('product-modal'), c = el('product-modal-content');
    const isModalCurrentlyVisible = m && !m.classList.contains('hidden');

    // Jika berpindah ke produk lain saat modal sudah terbuka (misal klik Produk Sejenis),
    // simpan produk sebelumnya ke stack navigasi produk agar tombol back dapat kembali berurutan
    if (!isFromNavStack && isModalCurrentlyVisible && cProd && cProd.id && String(cProd.id) !== String(p.id)) {
        productNavStack.push(cProd.id);
        if (typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('product');
        } else {
            oMods.push('product');
        }
    }
    
    setCProd(p);
    setCQty(1);
    
    // Jika punya varian, otomatis pilih varian aktif pertama yang memiliki stok (smart auto-select)
    if (p.variants && p.variants.length > 0) {
        const found = p.variants.findIndex(v => {
            const isActive = v.isActive !== false && v.isActive !== 'false';
            const rawV = (v.stock != null && v.stock !== '') ? v.stock : (v.stok != null && v.stok !== '' ? v.stok : null);
            const stock = rawV != null ? (parseFloat(rawV) || 0) : 0;
            return isActive && (!useStk || isPreorder || stock > 0);
        });
        setCVar(found >= 0 ? found : 0);
    } else {
        setCVar(0);
    }
    
    setV('modal-qty-input', 1);
    rProdMod();

    // SEO: Update Title dan Meta description & OpenGraph
    const pDesc = p.desc ? p.desc.replace(/<[^>]*>/g, '').substring(0, 160) : `Beli ${p.name} berkualitas dengan harga terbaik hanya di Toko Putri.`;
    const prodUrl = window.location.origin + window.location.pathname + "?p=" + p.id;
    if (typeof window.updateSEO === 'function') {
        window.updateSEO(`${p.name} - Toko Putri`, pDesc, getOptImg(p.img, 'w500-rw'), prodUrl);
    }

    // Inject Product JSON-LD
    const offerPrice = (p.variants && p.variants.length > 0) 
        ? Math.min(...p.variants.map(v => parseFloat(v.price) || p.price))
        : p.price;
    const isAvail = totalAvail > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
    
    const prodJSON = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": p.name,
        "image": [
            getOptImg(p.img, 'w500-rw')
        ],
        "description": pDesc,
        "sku": `PROD-${p.id}`,
        "category": p.category || '',
        "brand": {
            "@type": "Brand",
            "name": p.brand || "Toko Putri"
        },
        "offers": {
            "@type": "Offer",
            "url": prodUrl,
            "priceCurrency": "IDR",
            "price": offerPrice,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": isAvail,
            "priceValidUntil": "2030-12-31"
        }
    };
    
    if (p.variants && p.variants.length > 0) {
        prodJSON.offers = p.variants.map(v => ({
            "@type": "Offer",
            "name": v.name,
            "priceCurrency": "IDR",
            "price": parseFloat(v.price) || p.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": (parseFloat(v.stock) || 0) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        }));
    }
    
    if (typeof window.injectJSONLD === 'function') {
        window.injectJSONLD('seo-product', prodJSON);
    }
    
    // Iklan in-article di dalam modal produk
    try {
        const adBox = el('product-modal-ad-container');
        if (adBox) {
            const adsOn = appData.store.adsEnabled === true || appData.store.adsEnabled === 'true';
            if (adsOn) {
                adBox.classList.remove('hidden');
                adBox.innerHTML = `<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2636322336243340" data-ad-slot="8219064079"></ins>`;
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } else {
                adBox.classList.add('hidden');
                adBox.innerHTML = '';
            }
        }
    } catch(e) { console.error('Gagal render iklan in-article:', e); }
    
    // Muat ulasan pelanggan untuk produk ini
    if (typeof window.loadProductReviews === 'function') {
        window.loadProductReviews(p.id);
    }
    
    // Render produk sejenis / alternatif pilihan
    renderRelatedProducts(p);
    
    if (m && c) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('p') !== String(p.id)) {
            urlParams.set('p', p.id);
            if (!isFromNavStack && !isModalCurrentlyVisible) {
                window.history.pushState({modal: 'product'}, p.name, window.location.pathname + '?' + urlParams.toString());
                if (m.classList.contains('hidden')) {
                    oMods.push('product');
                }
            } else {
                window.history.replaceState({modal: 'product'}, p.name, window.location.pathname + '?' + urlParams.toString());
            }
        }
        if (m.classList.contains('hidden')) {
            c.scrollTo(0,0);
            openModalAnim(m, c);
        } else {
            c.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};

/**
 * Tutup modal detail produk
 */
export const closeProductModal = (fH = false) => {
    const m = el('product-modal'), c = el('product-modal-content');
    if (!m || !c) return;

    // Jika back ditekan dan ada riwayat navigasi produk sejenis (related products stack):
    // Kembali ke produk sebelumnya secara berurutan
    if (fH && productNavStack.length > 0) {
        const prevId = productNavStack.pop();
        openProductModal(prevId, true);
        return;
    }

    // Jika tombol 'X' ditekan langsung, tutup seluruh stack modal produk secara bersih
    if (!fH && productNavStack.length > 0) {
        const extraPops = productNavStack.length;
        productNavStack = [];
        for (let i = 0; i < extraPops; i++) {
            const idx = oMods.lastIndexOf('product');
            if (idx > -1) oMods.splice(idx, 1);
        }
    }

    const doClose = () => {
        closeModalAnim(m, c);
        const vc = el('product-modal-video-container');
        if (vc) {
            vc.innerHTML = '';
            vc.classList.add('hidden');
        }
        const cp = el('product-modal-cover-placeholder');
        if (cp) {
            cp.innerHTML = '';
            cp.classList.add('hidden');
        }

        // Restore URL, Meta Tags, & JSON-LD
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.delete('p');
        let newUrl = window.location.pathname;
        if (urlParams.toString()) newUrl += '?' + urlParams.toString();
        
        // Pertahankan history state aktif agar tidak merusak state view
        const curState = (window.history.state && typeof window.history.state === 'object') ? { ...window.history.state } : {};
        delete curState.modal;
        if (!curState.view) curState.view = curViewName || 'view-catalog';
        try {
            window.history.replaceState(curState, "Toko Putri", newUrl);
        } catch(e) {}
        
        if (typeof window.updateSEO === 'function') {
            window.updateSEO(
                "Toko Putri", 
                "Toko Putri - Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas dengan harga terbaik.",
                getOptImg(appData.store.logo, 'w300-rw'),
                window.location.origin + newUrl
            );
        }
        
        const pScript = document.getElementById('seo-product');
        if (pScript) pScript.remove();
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('product', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Preview zoom varian / warna
 */
export const previewVariant = (idx) => {
    const targetProd = cProd || qvProd;
    if (!targetProd || !targetProd.variants || !targetProd.variants[idx]) return;
    const v = targetProd.variants[idx];
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (!m || !c) return;

    let html = '';
    const nameStr = `${esc(targetProd.name)} - ${esc(v.name)}`;
    const priceStr = fCur(v.price || targetProd.price);

    if (v.img) {
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${getOptImg(v.img, 'w800-rw')}" alt="${esc(v.name)}">
                ${v.colorCode ? `<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden" style="background-color: ${esc(v.colorCode)};"><div class="paint-sheen-overlay"></div></div>` : ''}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(v.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(targetProd.name)}</p>
            </div>
        `;
    } else if (v.colorCode) {
        html = `
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${esc(v.colorCode)};">
                <div class="paint-sheen-overlay"></div>
                <div class="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50 z-10">
                    <span class="text-slate-900 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${esc(v.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${esc(v.colorCode)}</span>
                    <span class="text-[var(--color-primary)] font-extrabold text-lg mt-1">${priceStr}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(targetProd.name)}</p>
            </div>
        `;
    } else {
        const coverLg = renderProductCoverHtml(cProd, { size: 'lg' });
        const prodImg = (cProd.img && !isPlaceholderImg(cProd.img)) ? cProd.img : '';
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                ${prodImg 
                    ? `<img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${getOptImg(prodImg, 'w800-rw')}" alt="${esc(cProd.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${coverLg}</div>`
                    : coverLg}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(v.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    }

    c.innerHTML = html;
    if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('variantPreview');
    }
    show('variant-preview-modal');
    setTimeout(() => {
        m.classList.remove('opacity-0');
        c.classList.remove('scale-95');
    }, 10);
};

export const previewProductImage = () => {
    if (!cProd) return;
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (!m || !c) return;

    const v = (cProd.variants && cVar !== null) ? cProd.variants[cVar] : null;
    const rawImg = v?.img || cProd.img || '';
    const imgSrc = isPlaceholderImg(rawImg) ? '' : rawImg;
    const titleStr = v ? `${esc(cProd.name)} - ${esc(v.name)}` : esc(cProd.name);
    const priceStr = fCur(v?.price ?? cProd.price);
    const coverLg = renderProductCoverHtml(cProd, { size: 'lg' });

    let html = `
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            ${imgSrc 
                ? `<img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${getOptImg(imgSrc, 'w800-rw')}" alt="${titleStr}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${coverLg}</div>`
                : coverLg}
            ${v?.colorCode ? `<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${esc(v.colorCode)};"></div>` : ''}
        </div>
        <div class="mt-5 text-center px-4 w-full">
            <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(cProd.name)}</h4>
            ${v ? `<p class="text-slate-300 font-bold text-sm mt-1 uppercase tracking-wide">Varian: ${esc(v.name)}</p>` : ''}
            <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
        </div>
    `;

    c.innerHTML = html;
    if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('variantPreview');
    }
    show('variant-preview-modal');
    setTimeout(() => {
        m.classList.remove('opacity-0');
        c.classList.remove('scale-95');
    }, 10);
};

export const closeVariantPreviewModal = (fH = false) => {
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (m && c) {
        const doClose = () => {
            m.classList.add('opacity-0');
            c.classList.add('scale-95');
            setTimeout(() => {
                hide('variant-preview-modal');
                c.innerHTML = '';
            }, 300);
        };
        if (typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('variantPreview', fH, doClose);
        } else {
            doClose();
        }
    }
};

export const changeSlide = (dir) => {
    let p = cProd;
    let yId = getYouTubeId(p?.video);
    if (!yId) return;
    window.cSlideIdx += dir;
    if (window.cSlideIdx > 1) window.cSlideIdx = 0;
    if (window.cSlideIdx < 0) window.cSlideIdx = 1;
    rProdMod();
};

// ─── UTILITAS WARNA & KATALOG KARTU WARNA CAT (PAINT SWATCH SYSTEM) ──────
export const hexToRgb = (hex) => {
    if (!hex) return null;
    let clean = String(hex).replace('#', '').trim();
    if (clean.length === 3) {
        clean = clean.split('').map(c => c + c).join('');
    }
    if (clean.length !== 6) return null;
    const num = parseInt(clean, 16);
    if (isNaN(num)) return null;
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    };
};

export const isDarkColor = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    return yiq < 145;
};

export const parsePaintColorInfo = (v) => {
    const rawName = (v?.name || '').trim();
    const hex = (v?.colorCode && typeof v.colorCode === 'string' && v.colorCode.trim()) ? v.colorCode.trim() : '';
    
    // Deteksi kode warna di depan nama (misal "035 Champagne", "BW Broken White", "9102 Black")
    let codeStamp = (v?.code || '').trim();
    let displayName = rawName;
    
    if (!codeStamp) {
        const match = rawName.match(/^([A-Za-z0-9\-\/]{1,6})\s+[-–]?\s*(.+)$/);
        if (match && match[1] && match[2]) {
            codeStamp = match[1].toUpperCase();
            displayName = match[2];
        } else if (hex) {
            codeStamp = hex.replace('#', '').toUpperCase();
        }
    }
    
    return {
        codeStamp: codeStamp || 'CAT',
        displayName: displayName || rawName,
        hex: hex || '#FFFFFF',
        isDark: isDarkColor(hex)
    };
};

export const getPaintColorFamily = (hex, name = '') => {
    const lowerName = String(name).toLowerCase();
    if (/(putih|white|snow|ivory|mutiara|pearl|bone|krim|cream|vanilla)/i.test(lowerName)) {
        if (/(krim|cream|vanilla)/i.test(lowerName)) return 'yellow';
        return 'white';
    }
    if (/(hitam|black|anthracite|charcoal|ebony)/i.test(lowerName)) return 'gray';
    if (/(abu|grey|gray|silver|slate|semen|smoke|ash)/i.test(lowerName)) return 'gray';
    if (/(kuning|yellow|lemon|mustard|canary|gold|emas|amber)/i.test(lowerName)) return 'yellow';
    if (/(oranye|orange|jingga|peach|apricot|salmon|coral|tangerine)/i.test(lowerName)) return 'orange';
    if (/(merah|red|maroon|crimson|ruby|rose|pink|merah muda|magenta)/i.test(lowerName)) return 'red';
    if (/(cokelat|coklat|brown|earth|wood|kayu|coffee|kopi|tan|khaki|terracotta|beige)/i.test(lowerName)) return 'brown';
    if (/(biru|blue|navy|aqua|cyan|sky|langit|indigo|ocean|denim|teal|toska|tosca)/i.test(lowerName)) return 'blue';
    if (/(hijau|green|lime|olive|mint|daun|lumut|emerald|jade|army)/i.test(lowerName)) return 'green';

    const rgb = hexToRgb(hex);
    if (!rgb) return 'all';
    const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    const hue = h * 360;
    const sat = s * 100;
    const lum = l * 100;

    if (lum >= 88 && sat <= 22) return 'white';
    if (lum <= 18 || sat <= 12) return 'gray';
    if (hue >= 15 && hue < 45) return lum < 45 && sat < 60 ? 'brown' : 'orange';
    if (hue >= 45 && hue < 70) return 'yellow';
    if (hue >= 70 && hue < 165) return 'green';
    if (hue >= 165 && hue < 260) return 'blue';
    if (hue >= 260 && hue < 340) return 'red';
    if (hue >= 340 || hue < 15) return 'red';

    return 'all';
};

export const PAINT_FAMILIES = [
    { id: 'all', label: 'Semua', icon: 'fa-layer-group' },
    { id: 'white', label: 'Putih & Netral', dot: '#F8FAFC' },
    { id: 'yellow', label: 'Kuning & Krem', dot: '#FDE047' },
    { id: 'orange', label: 'Oranye & Peach', dot: '#FB923C' },
    { id: 'red', label: 'Merah & Pink', dot: '#F43F5E' },
    { id: 'brown', label: 'Cokelat & Earthy', dot: '#A16207' },
    { id: 'blue', label: 'Biru & Toska', dot: '#38BDF8' },
    { id: 'green', label: 'Hijau Segar', dot: '#4ADE80' },
    { id: 'gray', label: 'Abu & Gelap', dot: '#94A3B8' }
];

/**
 * Render elemen internal modal detail produk
 */
export const rProdMod = () => {
    if (!cProd) return;
    let p = cProd;
    let a = p.isActive !== 'false' && p.isActive !== false;
    let hV = p.variants?.length > 0;
    
    // Check if interior/exterior wall paint product to show return warning
    const nameLower = (p.name || '').toLowerCase();
    const catLower = (p.category || '').toLowerCase();
    const tagLower = (p.tag || '').toLowerCase();

    const PAINT_COLOR_KEYWORDS = [
        'cat', 'paint', 'warna', 'colour', 'color',
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'orange', 'abu',
        'coklat', 'cream', 'krem', 'beige', 'ivory', 'mocca', 'rose', 'tosca',
        'lavender', 'salmon', 'broken white', 'off white', 'natural', 'magnolia',
        'primer', 'dasar', 'eksterior', 'exterior', 'interior', 'tembok',
        'duco', 'gloss', 'matte', 'satin', 'semi gloss'
    ];

    const isPaintByProduct = (
        nameLower.includes('cat') && (
            nameLower.includes('tembok') ||
            nameLower.includes('interior') ||
            nameLower.includes('eksterior') ||
            nameLower.includes('exterior')
        )
    ) || (
        catLower.includes('cat') || catLower.includes('paint')
    ) || (
        tagLower.includes('cat') || tagLower.includes('paint')
    );

    const isPaintByVariant = hV && p.variants.some(v => {
        const vName = (v.name || '').toLowerCase();
        return PAINT_COLOR_KEYWORDS.some(kw => vName.includes(kw));
    });

    const isPaint = isPaintByProduct || isPaintByVariant;

    const warnEl = el('product-modal-paint-warning');
    if (warnEl) {
        if (isPaint) {
            warnEl.classList.remove('hidden');
        } else {
            warnEl.classList.add('hidden');
        }
    }
    
    let v = (hV && cVar !== null) ? p.variants[cVar] : null;
    let unt = v?.unit || p.unit || 'Pcs';
    
    const i = el('product-modal-img');
    const vc = el('product-modal-video-container');
    const yId = getYouTubeId(p.video);
    const showVarImg = v && v.img;

    const btnPrev = el('slide-prev');
    const btnNext = el('slide-next');
    const dotsContainer = el('slide-dots');

    if (yId && !showVarImg) {
        if (btnPrev) btnPrev.classList.remove('hidden');
        if (btnNext) btnNext.classList.remove('hidden');
        if (dotsContainer) {
            dotsContainer.classList.remove('hidden');
            dotsContainer.innerHTML = `
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx === 0 ? 'bg-[var(--color-primary)] scale-125' : 'bg-slate-300 dark:bg-slate-600'} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=0; rProdMod()"></div>
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx === 1 ? 'bg-[var(--color-primary)] scale-125' : 'bg-slate-300 dark:bg-slate-600'} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=1; rProdMod()"></div>
            `;
        }

        if (window.cSlideIdx === 1) {
            if (i) i.style.display = 'none';
            if (vc) {
                vc.classList.remove('hidden');
                if (!vc.innerHTML) {
                    vc.innerHTML = `<iframe class="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/${yId}?autoplay=1&mute=1&loop=1&playlist=${yId}&enablejsapi=1&modestbranding=1&controls=0&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"></iframe>`;
                }
            }
            const zoomInd = el('zoom-indicator');
            if (zoomInd) zoomInd.classList.add('hidden');
        } else {
            if (vc) vc.classList.add('hidden');
            const rawTargetImg = v?.img || p.img || '';
            const targetImg = isPlaceholderImg(rawTargetImg) ? '' : rawTargetImg;
            const coverPlaceholder = el('product-modal-cover-placeholder');
            if (!targetImg) {
                if (i) i.style.display = 'none';
                if (coverPlaceholder) {
                    coverPlaceholder.innerHTML = renderProductCoverHtml(p, { size: 'lg' });
                    coverPlaceholder.classList.remove('hidden');
                }
            } else {
                if (coverPlaceholder) coverPlaceholder.classList.add('hidden');
                if (i) {
                    i.style.display = 'block';
                    i.src = getOptImg(targetImg, 'w600-rw');
                    i.style.opacity = 1;
                }
            }
            const zoomInd = el('zoom-indicator');
            if (zoomInd) zoomInd.classList.remove('hidden');
        }
    } else {
        if (btnPrev) btnPrev.classList.add('hidden');
        if (btnNext) btnNext.classList.add('hidden');
        if (dotsContainer) dotsContainer.classList.add('hidden');

        if (vc) {
            vc.innerHTML = '';
            vc.classList.add('hidden');
        }
        const rawTargetImg = v?.img || p.img || '';
        const targetImg = isPlaceholderImg(rawTargetImg) ? '' : rawTargetImg;
        const coverPlaceholder = el('product-modal-cover-placeholder');
        if (!targetImg) {
            if (i) i.style.display = 'none';
            if (coverPlaceholder) {
                coverPlaceholder.innerHTML = renderProductCoverHtml(p, { size: 'lg' });
                coverPlaceholder.classList.remove('hidden');
            }
        } else {
            if (coverPlaceholder) coverPlaceholder.classList.add('hidden');
            if (i) {
                i.style.display = 'block';
                i.style.opacity = 0;
                setTimeout(() => { i.src = getOptImg(targetImg, 'w600-rw'); i.style.opacity = 1; }, 150);
            }
        }
        const zoomInd = el('zoom-indicator');
        if (zoomInd) zoomInd.classList.remove('hidden');
    }
    
    setIn('product-modal-title', p.name);
    
    const ppnEl = el('product-modal-ppn-badge');
    if (hV && cVar === null) {
        setH('product-modal-price', '<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');
        if (ppnEl) {
            ppnEl.className = 'hidden';
            ppnEl.innerHTML = '';
            ppnEl.style.display = 'none';
        }
    } else {
        let actPrice = v?.price ?? p.price;
        let actNormal = v?.priceNormal ?? p.priceNormal;
        
        const isIncPpn = (appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true') && appData.store.ppnType === 'inclusive';
        
        let pHtml = '';
        if (actNormal && actNormal > actPrice) {
            let pct = Math.round(((actNormal - actPrice) / actNormal) * 100);
            pHtml = `<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${fCur(actNormal)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${pct}%</span></span><span>${fCur(actPrice)}</span></div>`;
        } else {
            pHtml = `<span>${fCur(actPrice)}</span>`;
        }
        setH('product-modal-price', pHtml);

        if (ppnEl) {
            if (isIncPpn) {
                ppnEl.className = 'accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 whitespace-nowrap shadow-2xs';
                ppnEl.innerHTML = '<i class="fa-solid fa-receipt text-[8.5px]"></i> Inc. PPN';
                ppnEl.style.display = 'inline-flex';
            } else {
                ppnEl.className = 'hidden';
                ppnEl.innerHTML = '';
                ppnEl.style.display = 'none';
            }
        } else if (isIncPpn) {
            // Fallback inline jika container badge belum ada di DOM
            const fallbackBadge = `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 whitespace-nowrap shadow-2xs ml-2 align-middle"><i class="fa-solid fa-receipt text-[8.5px]"></i> Inc. PPN</span>`;
            pHtml += ` ${fallbackBadge}`;
            setH('product-modal-price', pHtml);
        }
    }
    
    const descEl = el('product-modal-desc');
    if (descEl) {
        descEl.className = 'text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_div]:my-1';
        const rawDesc = p.desc || '-';
        descEl.innerHTML = (typeof DOMPurify !== 'undefined')
            ? DOMPurify.sanitize(rawDesc, {
                ALLOWED_TAGS: ['p','br','b','strong','i','em','u','s','span','div',
                    'h1','h2','h3','h4','ul','ol','li','a','img','table',
                    'thead','tbody','tr','th','td','blockquote','code','pre','hr'],
                ALLOWED_ATTR: ['href','src','alt','title','class','style','target',
                    'rel','width','height','loading'],
                FORBID_TAGS: ['script','iframe','object','embed','form','input'],
                FORBID_ATTR: ['onclick','oninput','onload','onmouseover','onsubmit','onerror']
              })
            : rawDesc;
    }
    
    // Spesifikasi Produk
    const specTableEl = el('product-modal-spec-table');
    if (specTableEl) {
        if (p.specTable && p.specTable.length > 0) {
            let specHtml = `
            <div class="mt-5">
                <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-table-cells-large text-[var(--color-primary)] opacity-80"></i> Spesifikasi Produk
                </p>
                <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-[13px] spec-product-table">
                        <tbody>`;
            p.specTable.forEach((row, idx) => {
                const rowBg = idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/80 dark:bg-slate-800/60';
                specHtml += `<tr class="${rowBg}">
                    <td class="py-2.5 px-4 font-semibold text-slate-600 dark:text-slate-300 w-5/12 border-r border-slate-100 dark:border-slate-700/60 align-top">${esc(row.key)}</td>
                    <td class="py-2.5 px-4 text-slate-700 dark:text-slate-200 align-top">${esc(row.val)}</td>
                </tr>`;
            });
            specHtml += `</tbody></table></div></div>`;
            specTableEl.innerHTML = (typeof DOMPurify !== 'undefined')
                ? DOMPurify.sanitize(specHtml, {
                    ALLOWED_TAGS: ['div','p','i','table','tbody','tr','td','th','thead','br','span'],
                    ALLOWED_ATTR: ['class','style']
                  })
                : specHtml;
            specTableEl.style.display = '';
        } else {
            specTableEl.innerHTML = '';
            specTableEl.style.display = 'none';
        }
    }
    setIn('modal-unit-label', unt);
    
    // Header Badge
    let bH = ``;
    const activeSku = (hV && cVar !== null && v && v.sku) ? v.sku : (p.sku || '');
    if (activeSku) bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${esc(activeSku)}</span>`;
    if (p.tag) bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${esc(p.tag)}</span>`;
    
    bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>`;
    
    if (p.brand) bH += `<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${esc(p.brand)}</span>`;
    
    if (p.poTime) bH += `<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>`;

    const activeStockVal = hV && cVar !== null
        ? ((v?.stock != null && v?.stock !== '') ? parseFloat(v.stock) : ((v?.stok != null && v?.stok !== '') ? parseFloat(v.stok) : null))
        : ((p?.stock != null && p?.stock !== '') ? parseFloat(p.stock) : ((p?.stok != null && p?.stok !== '') ? parseFloat(p.stok) : null));
    if (activeStockVal !== null && !isNaN(activeStockVal)) {
        if (activeStockVal <= 0) {
            bH += `<span class="bg-rose-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-ban"></i> Habis</span>`;
        } else if (activeStockVal <= 5) {
            bH += `<span class="bg-rose-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-fire"></i> Sisa ${activeStockVal}</span>`;
        } else {
            bH += `<span class="bg-slate-700 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-box"></i> Stok ${activeStockVal}</span>`;
        }
    }

    const activePoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(p.poin) || 0);
    if (activePoin > 0 && (!hV || cVar !== null)) {
        bH += `<span class="bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${activePoin} Poin</span>`;
    }

    const totalSoldAll = (hV && p.variants && p.variants.length)
        ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0)
        : (parseFloat(p.totalSold) || 0);
    const totalSoldVar = (hV && cVar !== null && v && (parseFloat(v.totalSold) || 0) > 0)
        ? (parseFloat(v.totalSold) || 0)
        : totalSoldAll;
    const totalSoldDisplay = totalSoldVar > 0 ? totalSoldVar : totalSoldAll;
    if (totalSoldDisplay > 0) {
        bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500"></i> ${totalSoldDisplay} Terjual</span>`;
    }

    setH('product-modal-badges', bH);
    
    // Wholesale Section
    setH('product-modal-wholesale-container', (p.wholesale?.length && !p.variants?.length) ? `
        <div class="mb-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/50 shadow-inner">
            <p class="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Harga Grosir</p>
            <div class="space-y-2">${p.wholesale.slice().sort((a, b) => a.minQty - b.minQty).map(w => `
                <div class="flex justify-between items-center text-sm font-bold bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-amber-100 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300">≥ ${parseFloat(w.minQty)} <span class="text-[10px] uppercase tracking-wider">${esc(unt)}</span></span>
                    <span class="text-[var(--color-primary)] font-bold">${fCur(w.price)}</span>
                </div>`).join('')}
            </div>
        </div>` : '');
    
    // Info Seller (HPP & Stok khusus admin)
    const adminInfoEl = el('product-modal-admin-info');
    if (adminInfoEl) {
        if (window.isAdm && window.curViewName === 'view-admin') {
            const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
            const hV2 = p.variants?.length > 0;
            const currHpp = v ? (v.hpp || 0) : (p.hpp || 0);
            const currStock = v ? (v.stock !== undefined ? v.stock : '—') : (p.stock !== undefined ? p.stock : '—');
            const currPrice = v ? (v.price || p.price || 0) : (p.price || 0);
            const margin = currHpp > 0 ? Math.round(((currPrice - currHpp) / currPrice) * 100) : null;
            
            let stockRows = '';
            if (useStk) {
                if (hV2) {
                    stockRows = `<div class="col-span-2 space-y-1.5">${(p.variants || []).map(vr => {
                        const s = parseFloat(vr.stock) || 0;
                        return `<div class="flex justify-between items-center text-[11px] font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-slate-500 flex items-center gap-1.5">${vr.colorCode ? `<span class="w-3 h-3 rounded-full inline-block" style="background:${esc(vr.colorCode)}"></span>` : ''}${esc(vr.name)}</span>
                            <span class="${s === 0 ? 'text-rose-500' : s <= 5 ? 'text-amber-500' : 'text-emerald-500'} font-bold">${s} ${esc(vr.unit || p.unit || 'pcs')}</span>
                        </div>`;
                    }).join('')}</div>`;
                } else {
                    const s = parseFloat(p.stock) || 0;
                    stockRows = `<div class="flex flex-col gap-1"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sisa Stok</p><p class="font-bold text-xl ${s === 0 ? 'text-rose-500' : s <= 5 ? 'text-amber-500' : 'text-blue-500'}">${s} <span class="text-sm font-bold">${esc(p.unit || 'pcs')}</span></p></div>`;
                }
            }
            
            adminInfoEl.innerHTML = `
            <div class="mb-6 bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-2xl p-4 border border-[var(--color-primary)]/20">
                <p class="text-[10px] font-bold text-[var(--color-primary)] mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Info Seller</p>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HPP / Modal</p>
                        <p class="font-bold text-lg text-amber-500">${fCur(currHpp)}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Margin</p>
                        <p class="font-bold text-lg ${margin === null ? 'text-slate-400' : margin >= 30 ? 'text-emerald-500' : margin >= 10 ? 'text-amber-500' : 'text-rose-500'}">${margin !== null ? margin + '%' : '—'}</p>
                    </div>
                    ${stockRows}
                </div>
                <button onclick="closeProductModal(); setTimeout(()=>{ if(window.openAdminTab) openAdminTab('products'); setTimeout(()=> { if(window.oAEd) oAEd('products', ${p.id}); }, 200); }, 400);" class="mt-3 w-full py-2.5 rounded-xl border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 bg-white dark:bg-slate-800 text-[var(--color-primary)] font-bold text-[11px] uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                </button>
            </div>`;
        } else {
            adminInfoEl.innerHTML = '';
        }
    }
    
    // Variants Section
    if (a) {
        if (hV && cVar === null) {
            hide('modal-active-controls'); 
            hide('modal-inactive-controls');
        } else {
            let vActive = hV ? (v.isActive !== false && v.isActive !== 'false') : true;
            if (vActive) {
                show('modal-active-controls'); 
                hide('modal-inactive-controls');
            } else {
                hide('modal-active-controls'); 
                show('modal-inactive-controls');
            }
        }

        if (hV) {
            show('product-modal-options-container');
            
            const isColorCatalog = p.variants.some(v => v.colorCode && typeof v.colorCode === 'string' && v.colorCode.trim() !== '');

            const titleEl = el('product-modal-options-title');
            if (titleEl) {
                titleEl.innerHTML = isColorCatalog 
                    ? '<i class="fa-solid fa-palette text-[var(--color-primary)] mr-1"></i> Pilih Warna Cat' 
                    : '<i class="fa-solid fa-sliders text-[var(--color-primary)] mr-1"></i> Pilih Varian';
            }

            let optHTML = '';
            if (isColorCatalog) {
                // MODEL 1: KATALOG WARNA CAT KHUSUS (Grid Swatch Fan Deck & Chip System)
                optHTML = `<div class="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full">`;
                optHTML += p.variants.map((r, x) => {
                    const isVarActive = r.isActive !== false && r.isActive !== 'false';
                    const useStkV = appData.store.useStock === true || appData.store.useStock === 'true';
                    const rawVarStock = (r.stock != null && r.stock !== '') ? r.stock : (r.stok != null && r.stok !== '' ? r.stok : null);
                    const hasVStock = rawVarStock !== null && !isNaN(parseFloat(rawVarStock));
                    const varStock = hasVStock ? parseFloat(rawVarStock) : 0;
                    const isVarOutOfStock = useStkV && varStock <= 0;
                    const isVarSelectable = isVarActive && !isVarOutOfStock;
                    const isSelected = x === cVar;

                    const info = parsePaintColorInfo(r);
                    const hex = info.hex;
                    const isDark = info.isDark;

                    const zoomBtn = isVarSelectable 
                        ? `<span onclick="event.stopPropagation(); previewVariant(${x})" class="paint-swatch-zoom ${isDark ? 'is-dark-bg' : 'is-light-bg'}" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus"></i></span>` 
                        : '';

                    const selectedBadge = isSelected
                        ? `<div class="paint-selected-badge"><span class="paint-selected-badge-inner ${isDark ? 'is-dark-bg' : 'is-light-bg'}"><i class="fa-solid fa-check"></i></span></div>`
                        : '';

                    const hasDiffPrice = r.price && parseFloat(r.price) !== parseFloat(p.price);
                    const metaRight = hasDiffPrice 
                        ? `<span class="paint-swatch-stock font-bold ${isSelected ? 'text-[var(--color-primary)]' : ''}">${fCur(r.price)}</span>`
                        : (hasVStock && !isVarOutOfStock ? `<span class="paint-swatch-stock ${varStock <= 5 ? 'is-low' : ''}">Stok ${varStock}</span>` : `<span class="paint-swatch-stock">${esc(r.unit || p.unit || '')}</span>`);

                    return `
                        <button type="button" ${!isVarSelectable ? 'disabled' : ''} class="paint-swatch-card ${isSelected ? 'is-selected' : ''} ${!isVarSelectable ? 'is-disabled' : ''}" ${isVarSelectable ? `onclick="selectVariant(${x})"` : ''}>
                            <div class="paint-swatch-block" style="background-color: ${esc(hex)};">
                                <div class="paint-sheen-overlay"></div>
                                <span class="paint-code-stamp ${isDark ? 'is-dark-bg' : 'is-light-bg'}">${esc(info.codeStamp)}</span>
                                ${zoomBtn}
                                ${selectedBadge}
                            </div>
                            <div class="paint-swatch-info">
                                <span class="paint-swatch-name ${!isVarSelectable ? 'line-through opacity-60' : ''}">${esc(info.displayName)}</span>
                                <div class="paint-swatch-meta">
                                    <span class="paint-swatch-hex">${esc(hex)}</span>
                                    ${metaRight}
                                </div>
                            </div>
                            ${isVarOutOfStock && isVarActive ? '<span class="paint-oos-badge">Habis</span>' : ''}
                        </button>
                    `;
                }).join('');
                optHTML += `</div>`;
            } else {
                // MODEL 2: VARIAN STANDAR / UMUM (NON-CAT, TANPA KODE HEX)
                // Flex-wrap horizontal chips/pills, tanpa bulatan warna palsu
                // Jika memiliki gambar, tampilkan gambar varian
                optHTML = `<div class="flex flex-wrap gap-2 sm:gap-2.5 w-full">`;
                optHTML += p.variants.map((r, x) => {
                    let isVarActive = r.isActive !== false && r.isActive !== 'false';
                    const useStkV = appData.store.useStock === true || appData.store.useStock === 'true';
                    const rawVarStock = (r.stock != null && r.stock !== '') ? r.stock : (r.stok != null && r.stok !== '' ? r.stok : null);
                    const hasVStock = rawVarStock !== null && !isNaN(parseFloat(rawVarStock));
                    const varStock = hasVStock ? parseFloat(rawVarStock) : 0;
                    const isVarOutOfStock = useStkV && varStock <= 0;
                    let isVarSelectable = isVarActive && !isVarOutOfStock;
                    const isSelected = x === cVar;
                    
                    let chipClass = "";
                    if (!isVarSelectable) {
                        chipClass = "bg-slate-100/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 text-slate-400 opacity-50 cursor-not-allowed";
                    } else if (isSelected) {
                        chipClass = "border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] ring-2 ring-[var(--color-primary)]/25 shadow-xs text-slate-900 dark:text-white font-black";
                    } else {
                        chipClass = "bg-white dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50";
                    }

                    const thumbImg = (r.img && r.img.trim())
                        ? `<img src="${getOptImg(r.img, 'w100-rw')}" alt="${esc(r.name)}" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-slate-700 shadow-2xs">`
                        : '';

                    const hasDiffPrice = r.price && parseFloat(r.price) !== parseFloat(p.price);
                    const priceBadge = hasDiffPrice 
                        ? `<span class="text-[10px] font-bold ${isSelected ? 'text-[var(--color-primary)]' : 'text-slate-500 dark:text-slate-400'}">${fCur(r.price)}</span>`
                        : '';

                    return `<button ${!isVarSelectable ? 'disabled' : ''} class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${chipClass}" ${isVarSelectable ? `onclick="selectVariant(${x})"` : ''}>
                        ${thumbImg}
                        <div class="flex flex-col text-left min-w-0">
                            <span class="truncate max-w-[150px] sm:max-w-[200px] leading-tight ${!isVarSelectable ? 'line-through' : ''}">${esc(r.name)}</span>
                            <div class="flex items-center gap-1.5 flex-wrap">
                                ${priceBadge}
                                ${hasVStock && !isVarOutOfStock ? `<span class="text-[9px] font-bold ${varStock <= 5 ? 'text-rose-500' : 'text-slate-400 dark:text-slate-500'}">Stok ${varStock}</span>` : ''}
                            </div>
                        </div>
                        ${isVarOutOfStock && isVarActive ? '<span class="ml-1 px-1.5 py-0.5 rounded text-[8px] bg-rose-500 text-white font-bold leading-none">Habis</span>' : ''}
                    </button>`;
                }).join('');
                optHTML += `</div>`;
            }
            
            setH('product-modal-options', optHTML);
            
        } else { 
            hide('product-modal-options-container'); 
        }
    } else {
        hide('modal-active-controls'); 
        show('modal-inactive-controls'); 
        hide('product-modal-options-container');
    }
    uMPP();
};

/**
 * Update pratinjau harga total tombol beli di modal produk
 */
export const uMPP = () => {
    if (!cProd) return;
    
    if (cProd.variants?.length > 0 && cVar === null) {
        setIn('btn-modal-price-preview', 'Rp 0');
        const stickyEl = el('sticky-modal-price');
        if (stickyEl) stickyEl.innerText = 'Pilih Varian';
        return;
    }
    
    let v = (cProd.variants || [])[cVar];
    let p = v?.price ?? cProd.price;
    let e = p;
    const vN = v?.name || null;
    let eQ = 0;
    if (vN) {
        eQ = parseFloat(cart.find(c => c.id === cProd.id && c.variantName === vN)?.qty || 0);
    } else {
        eQ = cart.filter(c => c.id === cProd.id).reduce((s, c) => s + (parseFloat(c.qty) || 0), 0);
    }
    let tQ = cQty + eQ;
    if (cProd.wholesale?.length) {
        for (let w of cProd.wholesale.slice().sort((a, b) => b.minQty - a.minQty)) {
            if (tQ >= parseFloat(w.minQty)) { e = w.price; break; }
        }
    }
    const finalSubtotal = fCur(e * cQty);
    setIn('btn-modal-price-preview', finalSubtotal);
    const stickyEl = el('sticky-modal-price');
    if (stickyEl) stickyEl.innerText = finalSubtotal;
    
    // Perbarui kalkulator simulasi Putri PayLater secara real-time
    renderProductPaylaterWidget(e, cQty);
};

window.selectedProductModalTenor = window.selectedProductModalTenor || '3m';
window.isPaylaterBreakdownOpen = window.isPaylaterBreakdownOpen !== undefined ? window.isPaylaterBreakdownOpen : true;

export const selectProductPaylaterTenor = (tenorKey) => {
    window.selectedProductModalTenor = tenorKey;
    uMPP();
};
window.selectProductPaylaterTenor = selectProductPaylaterTenor;

export const togglePaylaterBreakdown = () => {
    window.isPaylaterBreakdownOpen = !window.isPaylaterBreakdownOpen;
    uMPP();
};
window.togglePaylaterBreakdown = togglePaylaterBreakdown;

/**
 * Render widget simulasi Putri PayLater & Cicilan (30 Hari - 3 Bulan) transparan di detail produk
 */
export const renderProductPaylaterWidget = (effectiveUnitPrice = null, currentQty = 1) => {
    const container = el('product-modal-paylater-container');
    if (!container) return;

    if (!cProd) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const config = getPaylaterConfig();
    if (!config.enabled) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    // Hitung nominal harga produk saat ini
    let unitP = effectiveUnitPrice;
    if (unitP === null) {
        let v = (cProd.variants && cVar !== null) ? cProd.variants[cVar] : null;
        unitP = v?.price ?? cProd.price;
        if (cProd.wholesale?.length) {
            for (let w of cProd.wholesale.slice().sort((a, b) => b.minQty - a.minQty)) {
                if (currentQty >= parseFloat(w.minQty)) { unitP = w.price; break; }
            }
        }
    }

    const cleanUnit = (typeof unitP === 'number') 
        ? (isNaN(unitP) ? 0 : Math.max(0, unitP)) 
        : Math.max(0, parseFloat(String(unitP || '').replace(/[^0-9.-]/g, '')) || 0);
    const cleanQty = Math.max(1, parseFloat(currentQty) || 1);
    const totalAmount = cleanUnit * cleanQty;
    const sim = calculateAllPaylaterTenors(totalAmount, config);
    const tenors = sim.results;

    // Tentukan tenor yang aktif terpilih
    let activeKey = window.selectedProductModalTenor || '3m';
    if (!tenors[activeKey] || !tenors[activeKey].enabled) {
        const firstEnabled = Object.keys(tenors).find(k => tenors[k].enabled);
        activeKey = firstEnabled || '30d';
        window.selectedProductModalTenor = activeKey;
    }

    const activeBreakdown = tenors[activeKey];
    container.classList.remove('hidden');

    // Jika harga di bawah minimal belanja PayLater
    if (totalAmount < config.minOrder) {
        container.innerHTML = `
            <div class="rounded-2xl border p-3.5 sm:p-4 shadow-2xs transition-all" style="border-color: rgba(var(--color-primary-rgb),0.22); background: rgba(var(--color-primary-rgb),0.035);">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary);">
                        <i class="fa-solid fa-bolt"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">Putri PayLater</span>
                            <span class="text-[8.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb),0.25);">Cicil s/d 3 Bulan</span>
                        </div>
                        <p class="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            Tersedia cicilan 30 hari hingga 3 bulan untuk belanja minimal <b>${fCur(config.minOrder)}</b> (tambah ${fCur(config.minOrder - totalAmount)} lagi).
                        </p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // Tombol Segmented Tabs Tenor (30 Hari, 2 Bulan, 3 Bulan)
    const tenorKeys = ['30d', '2m', '3m'];
    const tenorButtonsHtml = tenorKeys.map(k => {
        const t = tenors[k];
        if (!t || !t.enabled) return '';
        const isSelected = k === activeKey;
        const btnCls = isSelected 
            ? 'font-black shadow-xs' 
            : 'border border-slate-200/90 dark:border-slate-700/80 bg-white/95 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-bold hover:border-[var(--color-primary)]/40 active:scale-95';
        const inlineStyle = isSelected 
            ? 'border: 2px solid var(--color-primary); background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb),0.15);' 
            : '';
        return `
            <button type="button" onclick="window.selectProductPaylaterTenor('${k}')" 
                    class="py-2.5 px-1.5 sm:px-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation ${btnCls}"
                    style="${inlineStyle}">
                <span class="text-[9.5px] sm:text-[10px] uppercase tracking-wider leading-none">${esc(t.shortLabel)}</span>
                <span class="text-[11px] sm:text-xs font-black" ${isSelected ? 'style="color: var(--color-primary);"' : ''}>${fCur(t.totalPerMonth)}<span class="text-[8px] font-normal opacity-70">/bln</span></span>
            </button>
        `;
    }).filter(Boolean).join('');

    // Kotak Rincian Biaya Transparan (Zero Hidden Fees)
    const isOpen = window.isPaylaterBreakdownOpen;
    const adminFeeText = activeBreakdown.adminFeePerMonth === 0 
        ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">Rp 0 (Gratis)</span>' 
        : `<span class="font-bold text-slate-800 dark:text-slate-200">${fCur(activeBreakdown.adminFeePerMonth)} / bln</span>`;

    const serviceFeeText = activeBreakdown.serviceFeePerMonth === 0 
        ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">Rp 0 (Gratis)</span>' 
        : `<span class="font-bold text-slate-800 dark:text-slate-200">${fCur(activeBreakdown.serviceFeePerMonth)} / bln</span>`;

    const breakdownContentHtml = `
        <div class="mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-700/70 space-y-2 text-xs">
            <div class="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span class="text-[11px]">Harga Pokok (${activeBreakdown.months}x bulan)</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${fCur(activeBreakdown.pokokPerMonth)} / bln</span>
            </div>
            <div class="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span class="text-[11px] flex items-center gap-1.5">
                    <span>Biaya Administrasi</span>
                    ${activeBreakdown.adminFeeType === 'percent' && activeBreakdown.adminFeeValue > 0 ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 font-mono">${activeBreakdown.adminFeeValue}%</span>` : ''}
                </span>
                ${adminFeeText}
            </div>
            <div class="flex justify-between items-center text-slate-600 dark:text-slate-400">
                <span class="text-[11px] flex items-center gap-1.5">
                    <span>Biaya Penanganan &amp; Layanan</span>
                    ${activeBreakdown.serviceFeeType === 'percent' && activeBreakdown.serviceFeeValue > 0 ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 font-mono">${activeBreakdown.serviceFeeValue}%</span>` : ''}
                </span>
                ${serviceFeeText}
            </div>
            <div class="pt-2 mt-2 border-t border-dashed border-slate-200/80 dark:border-slate-700/80 flex justify-between items-baseline">
                <div>
                    <span class="block text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white">Total Angsuran per Bulan</span>
                    <span class="block text-[9px] text-slate-400 font-medium">Total seluruhnya: ${fCur(activeBreakdown.grandTotal)} (${activeBreakdown.months} bulan)</span>
                </div>
                <div class="text-right">
                    <span class="text-sm sm:text-base font-black font-mono" style="color: var(--color-primary);">${fCur(activeBreakdown.totalPerMonth)}</span>
                    <span class="text-[10px] font-bold text-slate-500"> / bulan</span>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="rounded-2xl border p-3.5 sm:p-4 shadow-xs transition-all" style="border-color: rgba(var(--color-primary-rgb),0.22); background: rgba(var(--color-primary-rgb),0.03);">
            <!-- Header Widget -->
            <div class="flex items-center justify-between gap-2 mb-2.5">
                <div class="flex items-center gap-2 min-w-0">
                    <span class="w-6 h-6 rounded-lg text-white flex items-center justify-center text-xs shadow-xs shrink-0" style="background: var(--color-primary);">
                        <i class="fa-solid fa-bolt"></i>
                    </span>
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white truncate">Putri PayLater</h4>
                    <span class="px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider shrink-0" style="background: rgba(var(--color-primary-rgb),0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb),0.25);">Cicil s/d 3 Bulan</span>
                </div>
                <button type="button" onclick="window.togglePaylaterBreakdown()" class="text-[10px] font-bold hover:underline flex items-center gap-1 cursor-pointer shrink-0" style="color: var(--color-primary);">
                    <span>${isOpen ? 'Sembunyikan' : 'Rincian'}</span>
                    <i class="fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-[9px]"></i>
                </button>
            </div>

            <!-- Segmented Tenor Buttons -->
            <div class="grid grid-cols-3 gap-1.5 sm:gap-2">
                ${tenorButtonsHtml}
            </div>

            <!-- Rincian Biaya Transparan -->
            ${isOpen ? breakdownContentHtml : ''}

            <!-- Trust Badge -->
            <div class="mt-2.5 flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 font-semibold pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-emerald-500"></i> Rincian 100% Transparan</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-check text-emerald-500"></i> Tanpa Biaya Tersembunyi</span>
            </div>
        </div>
    `;
};
window.renderProductPaylaterWidget = renderProductPaylaterWidget;

export const updateModalQty = c => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const isPreorder = Boolean(cProd?.poTime && String(cProd.poTime).trim());
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const rawStk = vN2 ? (v2?.stock != null && v2?.stock !== '' ? v2.stock : (v2?.stok != null && v2?.stok !== '' ? v2.stok : null)) : (cProd?.stock != null && cProd?.stock !== '' ? cProd.stock : (cProd?.stok != null && cProd?.stok !== '' ? cProd.stok : null));
    const parsedStk = rawStk != null && !isNaN(parseFloat(rawStk)) ? parseFloat(rawStk) : 0;
    const maxStk = (useStk && !isPreorder) ? parsedStk : Infinity;
    const newQty = parseFloat(Math.min(maxStk, Math.max(0.01, cQty + c)).toFixed(2));
    setCQty(newQty);
    setV('modal-qty-input', cQty); 
    uMPP();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    if (useStk && !isPreorder && maxStk !== Infinity && cQty >= maxStk) showToast(`Maks stok: ${maxStk}`);
};

export const handleModalQtyChange = v => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const isPreorder = Boolean(cProd?.poTime && String(cProd.poTime).trim());
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const rawStk = vN2 ? (v2?.stock != null && v2?.stock !== '' ? v2.stock : (v2?.stok != null && v2?.stok !== '' ? v2.stok : null)) : (cProd?.stock != null && cProd?.stock !== '' ? cProd.stock : (cProd?.stok != null && cProd?.stok !== '' ? cProd.stok : null));
    const parsedStk = rawStk != null && !isNaN(parseFloat(rawStk)) ? parseFloat(rawStk) : 0;
    const maxStk = (useStk && !isPreorder) ? parsedStk : Infinity;
    let nv = parseFloat(v); 
    if (isNaN(nv) || nv <= 0) nv = 0.01;
    nv = Math.min(maxStk, nv);
    const newQty = parseFloat(nv.toFixed(2));
    setCQty(newQty);
    setV('modal-qty-input', cQty); 
    uMPP();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const selectVariant = i => { 
    setCVar(i); 
    rProdMod(); 
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

/**
 * Konfirmasi menambahkan produk dari modal ke keranjang belanja (dengan animasi terbang & haptic)
 */
export const confirmAddProductToCart = (sourceEl = null) => {
    if (cProd.variants?.length > 0 && cVar === null) return showToast("Pilih varian / warna terlebih dahulu!");
    
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    if (useStk) {
        const v2 = cProd.variants?.[cVar];
        const vN2 = v2?.name || null;
        const avail = vN2 ? (parseFloat(v2.stock) || 0) : (parseFloat(cProd.stock) || 0);
        const inCart = cart.find(i => i.id === cProd.id && i.variantName === vN2);
        const alreadyInCart = inCart ? parseFloat(inCart.qty) || 0 : 0;
        if (cQty + alreadyInCart > avail) {
            return showToast(`Stok tidak cukup! Tersisa: ${avail}`);
        }
    }
    
    const v = cProd.variants?.[cVar], vN = v?.name || null, e = cart.find(i => i.id === cProd.id && i.variantName === vN), unt = v?.unit || cProd.unit || 'pcs';
    const prodImg = v?.img || cProd.img;
    if (e) {
        e.qty = parseFloat((e.qty + cQty).toFixed(2)); 
        e.unit = unt;
    } else {
        const itemPoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(cProd.poin) || 0);
        cart.push({
            id: cProd.id, 
            name: cProd.name, 
            variantName: vN, 
            price: v?.price ?? cProd.price, 
            img: prodImg, 
            qty: cQty, 
            unit: unt, 
            poTime: cProd.poTime || '', 
            colorCode: v?.colorCode || '', 
            poin: itemPoin
        });
    }
    updCart();
    if (typeof analytics !== 'undefined') analytics.logEvent('add_to_cart', { item_id: cProd.id, item_name: cProd.name, quantity: cQty });
    
    // Trigger Animasi Terbang & Haptic
    const startElem = (sourceEl instanceof HTMLElement) ? sourceEl : (el('product-modal-img') || sourceEl);
    if (typeof window.flyToCartAnimation === 'function') {
        window.flyToCartAnimation(startElem, '#bnav-cart', prodImg);
    } else if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('medium');
    }

    closeProductModal(); 
    showToast("Berhasil Masuk Keranjang", "success");
};

/**
 * Beli Sekarang langsung (Instan Checkout)
 */
export const buyNowProduct = () => {
    if (cProd.variants?.length > 0 && cVar === null) return showToast("Pilih varian / warna terlebih dahulu!");

    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    if (useStk) {
        const v2 = cProd.variants?.[cVar];
        const vN2 = v2?.name || null;
        const avail = vN2 ? (parseFloat(v2.stock) || 0) : (parseFloat(cProd.stock) || 0);
        const inCart = cart.find(i => i.id === cProd.id && i.variantName === vN2);
        const alreadyInCart = inCart ? parseFloat(inCart.qty) || 0 : 0;
        if (cQty + alreadyInCart > avail) {
            return showToast(`Stok tidak cukup! Tersisa: ${avail}`);
        }
    }

    const v = cProd.variants?.[cVar], vN = v?.name || null, e = cart.find(i => i.id === cProd.id && i.variantName === vN), unt = v?.unit || cProd.unit || 'pcs';
    const prodImg = v?.img || cProd.img;
    if (e) {
        e.qty = parseFloat((e.qty + cQty).toFixed(2)); 
        e.unit = unt;
    } else {
        const itemPoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(cProd.poin) || 0);
        cart.push({
            id: cProd.id, 
            name: cProd.name, 
            variantName: vN, 
            price: v?.price ?? cProd.price, 
            img: prodImg, 
            qty: cQty, 
            unit: unt, 
            poTime: cProd.poTime || '', 
            colorCode: v?.colorCode || '', 
            poin: itemPoin
        });
    }
    updCart();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('success');
    // Gunakan fH=true agar modal ditutup paksa tanpa memanggil history.back().
    // Jika history.back() dipanggil, popstate-nya akan tiba *setelah* changeView('view-checkout')
    // dan me-reset tampilan kembali ke view-catalog (beranda). Bug terpental ini dihindari
    // dengan melewati manipulasi History API saat kita langsung berpindah view.
    closeProductModal(true);
    if (typeof window.changeView === 'function') {
        window.changeView('view-checkout');
    }
};

/**
 * Konsultasi produk langsung via WhatsApp
 */
export const chatWAAboutProduct = () => {
    if (!cProd) return;
    const phone = (appData.store.wa || '').replace(/\D/g, '');
    if (!phone) return showToast('Nomor WhatsApp toko belum diatur admin.');
    
    let targetWa = phone;
    if (targetWa.startsWith('0')) targetWa = '62' + targetWa.slice(1);
    else if (!targetWa.startsWith('62')) targetWa = '62' + targetWa;

    const v = cProd.variants?.[cVar];
    const vN = v?.name ? ` (Varian: ${v.name})` : '';
    const price = v?.price ?? cProd.price;
    const msg = `Halo ${appData.store.name || 'Toko Putri'}, saya ingin bertanya tentang produk *${cProd.name}*${vN} seharga ${fCur(price)}. Apakah produk ini siap kirim?`;
    
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    if (typeof window.openWhatsApp === 'function') {
        window.openWhatsApp(targetWa, msg);
    } else {
        window.open(`https://wa.me/${targetWa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }
};

/**
 * Simpan produk ke daftar wishlist/favorit
 */
export const confirmAddToWishlist = () => {
    if (cProd.variants?.length > 0 && cVar === null) return showToast("Pilih varian / warna terlebih dahulu!");

    const v = cProd.variants?.[cVar], vN = v?.name || null;
    if (wishlist.find(i => i.id === cProd.id && i.variantName === vN)) return showToast("Sudah di Favorit!");
    wishlist.push({
        id: cProd.id, 
        name: cProd.name, 
        variantName: vN, 
        price: v?.price ?? cProd.price, 
        img: v?.img || cProd.img, 
        colorCode: v?.colorCode || ''
    });
    ssL('freshmart_wishlist', JSON.stringify(wishlist));
    if (typeof window.updWish === 'function') window.updWish(); 
    closeProductModal(); 
    showToast("Masuk Favorit");
};

/**
 * Bagikan produk via Web Share API atau copy link ke clipboard
 */
export const shareProduct = () => {
    if (!cProd) return;
    
    const productUrl = window.location.origin + window.location.pathname + '?p=' + cProd.id;
    const shareTitle = cProd.name;
    const shareText = `Cek produk ${cProd.name} di ${appData.store.name} sekarang!`;

    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: productUrl
        }).catch(err => {
            console.log('User membatalkan share', err);
        });
    } else {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(productUrl)
                .then(() => showToast("Link produk berhasil disalin!"))
                .catch(() => showToast("Gagal menyalin link."));
        } else {
            const e = document.createElement('textarea');
            e.value = productUrl;
            e.style.position = 'fixed';
            e.style.opacity = '0';
            document.body.appendChild(e);
            e.select();
            document.execCommand('copy');
            document.body.removeChild(e);
            showToast("Link produk berhasil disalin!");
        }
    }
};

/**
 * Render produk sejenis / rekomendasi terkait pada bagian bawah modal produk
 */
export const renderRelatedProducts = p => {
    const container = el('product-modal-related-container');
    if (!container) return;

    if (!p || !appData.products || !appData.products.length) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const currentId = String(p.id);
    const subCat = (p.subCategory || '').trim().toLowerCase();
    const cat = (p.category || '').trim().toLowerCase();
    const brand = (p.brand || '').trim().toLowerCase();

    // Ambil produk aktif selain produk saat ini
    const candidates = appData.products.filter(item => {
        if (!item || item.id == null || String(item.id) === currentId) return false;
        if (item.isActive === false || item.isActive === 'false') return false;
        return true;
    });

    // Beri skor relevansi berdasarkan kesamaan sub-kategori, kategori, dan brand
    const scored = candidates.map(item => {
        let score = 0;
        const iSubCat = (item.subCategory || '').trim().toLowerCase();
        const iCat = (item.category || '').trim().toLowerCase();
        const iBrand = (item.brand || '').trim().toLowerCase();

        if (subCat && iSubCat && subCat === iSubCat) score += 6;
        if (cat && iCat && cat === iCat) score += 3;
        if (brand && iBrand && brand === iBrand) score += 2;

        return { item, score };
    }).filter(x => x.score > 0);

    scored.sort((a, b) => b.score - a.score || (b.item.id || 0) - (a.item.id || 0));
    const relatedList = scored.slice(0, 8).map(x => x.item);

    if (!relatedList.length) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');

    const cardsHtml = relatedList.map(item => {
        const itemImg = getOptImg(item.img, 'w300-rw');
        const itemPrice = (item.variants && item.variants.length > 0)
            ? Math.min(...item.variants.map(v => parseFloat(v.price) || item.price))
            : (item.price || 0);

        let badgeText = item.subCategory || item.brand || item.category || '';

        const hasItemImg = Boolean(item.img && typeof item.img === 'string' && item.img.trim());
        const coverItemHtml = renderProductCoverHtml(item, { size: 'sm' });

        return `
        <div onclick="openProductModal('${esc(item.id)}')" class="group cursor-pointer shrink-0 w-[145px] sm:w-[165px] bg-slate-50 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2.5 flex flex-col transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/40 hover:-translate-y-1 snap-start">
            <!-- Kotak Gambar Bersih Murni -->
            <div class="relative aspect-square w-full rounded-xl bg-white dark:bg-slate-900 overflow-hidden mb-2 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center">
                ${hasItemImg
                    ? `<img loading="lazy" decoding="async" src="${esc(itemImg)}" alt="${esc(item.name)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';">
                       <div class="w-full h-full" style="display:none">${coverItemHtml}</div>`
                    : coverItemHtml}
            </div>
            ${badgeText ? `<p class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1">${esc(badgeText)}</p>` : ''}
            <h5 class="text-[11px] font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-tight mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${esc(item.name)}</h5>
            <div class="mt-auto flex items-baseline justify-between pt-1">
                <span class="text-xs font-extrabold text-[var(--color-primary)] tracking-tight">${fCur(itemPrice)}</span>
                <span class="text-[9px] font-bold text-slate-400 group-hover:text-[var(--color-primary)] uppercase transition-colors">Lihat <i class="fa-solid fa-arrow-right text-[8px] ml-0.5"></i></span>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shapes text-sm"></i>
            </div>
            <div>
                <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white leading-tight">Produk Sejenis & Alternatif Pilihan</h4>
                <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Pilihan rekomendasi dengan spesifikasi sejenis</p>
            </div>
        </div>
        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">${relatedList.length} Pilihan</span>
    </div>
    <div class="flex gap-2.5 overflow-x-auto pb-2 pt-1 hide-scrollbar -mx-1 px-1 snap-x snap-mandatory">
        ${cardsHtml}
    </div>`;
};

// ─── BOTTOM SHEET PILIH VARIAN CEPAT (QUICK VARIANT DRAWER) ──────
let qvProd = null;
let qvVar = 0;
let qvQty = 1;
let qvSearch = '';
let qvFamily = 'all';

export const filterQuickPaintFamily = (famId) => {
    qvFamily = famId;
    renderQuickVariantSheet(false);
};

export const searchQuickPaintColor = (val) => {
    qvSearch = val || '';
    renderQuickVariantSheet(false);
};

export const clearQuickPaintSearch = () => {
    qvSearch = '';
    const input = el('quick-variant-search-input');
    if (input) input.value = '';
    renderQuickVariantSheet(false);
};

export const openQuickVariantSheet = (productId) => {
    const p = appData.products.find(x => String(x.id) === String(productId));
    if (!p) return;
    qvProd = p;
    qvQty = 1;
    qvSearch = '';
    qvFamily = 'all';

    // Smart Auto-Select: Pilih varian aktif pertama yang memiliki stok
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let defaultIdx = 0;
    if (p.variants && p.variants.length > 0) {
        const found = p.variants.findIndex(v => {
            const isActive = v.isActive !== false && v.isActive !== 'false';
            const stock = parseFloat(v.stock) || 0;
            return isActive && (!useStk || stock > 0);
        });
        defaultIdx = found >= 0 ? found : 0;
    }
    qvVar = defaultIdx;

    renderQuickVariantSheet(true);

    const m = el('quick-variant-modal'), c = el('quick-variant-content');
    if (m && c) {
        if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('quickVariant');
        }
        openModalAnim(m, c);
    }
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const closeQuickVariantSheet = (fH = false) => {
    const m = el('quick-variant-modal'), c = el('quick-variant-content');
    if (m && c) {
        const doClose = () => {
            closeModalAnim(m, c);
        };
        if (typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('quickVariant', fH, doClose);
        } else {
            doClose();
        }
    }
};

export const selectQuickVariant = (idx) => {
    if (!qvProd || !qvProd.variants || !qvProd.variants[idx]) return;
    qvVar = idx;
    renderQuickVariantSheet();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const updateQuickVariantQty = (delta) => {
    if (!qvProd) return;
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const isPreorder = Boolean(qvProd.poTime && String(qvProd.poTime).trim());
    const v = qvProd.variants?.[qvVar];
    const rawStk = v ? ((v.stock != null && v.stock !== '') ? v.stock : ((v.stok != null && v.stok !== '') ? v.stok : null)) : null;
    const parsedStk = rawStk != null && !isNaN(parseFloat(rawStk)) ? parseFloat(rawStk) : 0;
    const maxStk = (useStk && !isPreorder) ? parsedStk : Infinity;
    const newQty = Math.min(maxStk, Math.max(1, qvQty + delta));
    qvQty = newQty;
    const input = el('quick-variant-qty-input');
    if (input) input.value = qvQty;
    
    // Update live subtotal
    const priceVal = v?.price ?? qvProd.price;
    setIn('quick-variant-subtotal', fCur(priceVal * qvQty));

    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const updateQuickVariantWishUI = () => {
    if (!qvProd) return;
    const v = qvProd.variants?.[qvVar];
    const vN = v?.name || null;
    const isWished = wishlist.some(i => String(i.id) === String(qvProd.id) && i.variantName === vN);
    const icon = el('quick-variant-wish-icon');
    const btn = el('quick-variant-btn-wish');
    if (icon) {
        icon.className = isWished ? 'fa-solid fa-heart text-base text-rose-500' : 'fa-regular fa-heart text-base text-slate-400 dark:text-slate-500';
    }
    if (btn) {
        btn.classList.toggle('border-rose-300', isWished);
        btn.classList.toggle('bg-rose-50/70', isWished);
    }
};

export const toggleQuickVariantWishlist = () => {
    if (!qvProd) return;
    const v = qvProd.variants?.[qvVar];
    const vN = v?.name || null;
    const existingIdx = wishlist.findIndex(i => String(i.id) === String(qvProd.id) && i.variantName === vN);
    if (existingIdx >= 0) {
        wishlist.splice(existingIdx, 1);
        ssL('freshmart_wishlist', JSON.stringify(wishlist));
        if (typeof window.updWish === 'function') window.updWish();
        updateQuickVariantWishUI();
        showToast("Dihapus dari Favorit");
    } else {
        wishlist.push({
            id: qvProd.id,
            name: qvProd.name,
            variantName: vN,
            price: v?.price ?? qvProd.price,
            img: v?.img || qvProd.img,
            colorCode: v?.colorCode || ''
        });
        ssL('freshmart_wishlist', JSON.stringify(wishlist));
        if (typeof window.updWish === 'function') window.updWish();
        updateQuickVariantWishUI();
        showToast("Masuk Favorit");
    }
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const renderQuickVariantSheet = (resetFilters = false) => {
    if (!qvProd) return;
    const p = qvProd;
    const v = p.variants?.[qvVar];
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';

    if (resetFilters) {
        qvSearch = '';
        qvFamily = 'all';
    }

    // Mini Header Update
    const imgEl = el('quick-variant-img');
    const targetImg = v?.img || p.img || '';
    if (imgEl) {
        if (targetImg) {
            imgEl.src = getOptImg(targetImg, 'w300-rw');
            imgEl.style.display = 'block';
            if (imgEl.nextElementSibling) imgEl.nextElementSibling.style.display = 'none';
        } else {
            imgEl.style.display = 'none';
            let ph = imgEl.nextElementSibling;
            if (!ph) {
                ph = document.createElement('div');
                ph.className = 'w-full h-full flex items-center justify-center';
                imgEl.parentNode.appendChild(ph);
            }
            ph.innerHTML = renderProductCoverHtml(p, { size: 'thumb' });
            ph.style.display = 'flex';
        }
    }
    setIn('quick-variant-title', p.name);

    const priceVal = v?.price ?? p.price;
    setIn('quick-variant-price', fCur(priceVal));

    // Live Subtotal Calculator
    setIn('quick-variant-subtotal', fCur(priceVal * qvQty));

    const rawVStock = v ? ((v.stock != null && v.stock !== '') ? v.stock : ((v.stok != null && v.stok !== '') ? v.stok : null)) : null;
    const hasVStock = rawVStock != null && !isNaN(parseFloat(rawVStock));
    const varStock = hasVStock ? parseFloat(rawVStock) : 0;
    const stockEl = el('quick-variant-stock');
    if (stockEl) {
        if (useStk || hasVStock) {
            stockEl.innerText = varStock > 0 ? `Sisa: ${varStock} ${v?.unit || p.unit || 'pcs'}` : 'Stok Habis';
            stockEl.className = `text-[10px] font-bold ${varStock > 0 ? 'text-slate-400 dark:text-slate-500' : 'text-rose-500'}`;
        } else {
            stockEl.innerText = 'Tersedia';
            stockEl.className = 'text-[10px] font-bold text-emerald-500';
        }
    }

    const selNameEl = el('quick-variant-selected-name');
    if (selNameEl) {
        selNameEl.innerText = v ? `Varian: ${v.name}` : 'Pilih Varian';
    }

    // Input Qty
    const input = el('quick-variant-qty-input');
    if (input) input.value = qvQty;

    // Render Options: 2 Model cerdas (Katalog Warna vs Varian Biasa)
    const optContainer = el('quick-variant-options');
    if (optContainer && p.variants) {
        const isColorCatalog = p.variants.some(vr => vr.colorCode && typeof vr.colorCode === 'string' && vr.colorCode.trim() !== '');

        const titleSectionEl = el('quick-variant-section-title');
        if (titleSectionEl) {
            titleSectionEl.innerHTML = isColorCatalog 
                ? `<i class="fa-solid fa-palette text-[var(--color-primary)]"></i> Pilih Warna Cat` 
                : `<i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian`;
        }

        // SPOTLIGHT BAR (Preview Warna Terpilih dengan Gloss & Code Stamp)
        const spotEl = el('quick-variant-spotlight');
        if (spotEl) {
            if (isColorCatalog && v) {
                const spotInfo = parsePaintColorInfo(v);
                const spotHex = spotInfo.hex;
                const isSpotDark = spotInfo.isDark;
                spotEl.className = 'paint-spotlight-bar flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl mb-3';
                spotEl.innerHTML = `
                    <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl relative overflow-hidden shrink-0 border border-black/15 shadow-sm" style="background-color: ${esc(spotHex)};">
                        <div class="paint-sheen-overlay"></div>
                        <span class="paint-code-stamp ${isSpotDark ? 'is-dark-bg' : 'is-light-bg'}">${esc(spotInfo.codeStamp)}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-md">Warna Terpilih</span>
                            <span class="font-mono text-[9.5px] font-bold text-slate-400 dark:text-slate-400 uppercase">${esc(spotHex)}</span>
                        </div>
                        <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">${esc(spotInfo.displayName)}</h5>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">${fCur(priceVal)}</span>
                        <span class="block text-[9px] font-bold ${varStock > 0 ? 'text-slate-400 dark:text-slate-500' : 'text-rose-500'}">${varStock > 0 ? `Sisa ${varStock} ${v?.unit || p.unit || 'pcs'}` : 'Habis'}</span>
                    </div>
                `;
            } else {
                spotEl.className = 'hidden';
                spotEl.innerHTML = '';
            }
        }

        // FILTER WRAP & SEARCH BAR
        const filterWrap = el('quick-variant-filter-wrap');
        const countBadge = el('quick-variant-count-badge');

        if (isColorCatalog) {
            // Hitung distribusi keluarga warna
            const familyCounts = { all: p.variants.length };
            p.variants.forEach(vr => {
                const fam = getPaintColorFamily(vr.colorCode, vr.name);
                familyCounts[fam] = (familyCounts[fam] || 0) + 1;
            });

            const availableFamilies = PAINT_FAMILIES.filter(f => f.id === 'all' || (familyCounts[f.id] && familyCounts[f.id] > 0));

            if (filterWrap) {
                if (availableFamilies.length > 2 || p.variants.length >= 6) {
                    filterWrap.className = 'mb-2.5 space-y-2 block';

                    const searchHtml = p.variants.length >= 6 ? `
                        <div class="relative">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400"></i>
                            <input id="quick-variant-search-input" type="text" placeholder="Cari warna atau kode hex..." value="${esc(qvSearch)}" oninput="window.searchQuickPaintColor(this.value)" class="w-full h-8 pl-8 pr-7 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                            ${qvSearch ? `<button type="button" onclick="window.clearQuickPaintSearch()" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><i class="fa-solid fa-xmark text-xs"></i></button>` : ''}
                        </div>
                    ` : '';

                    const tabsHtml = `
                        <div class="paint-family-nav hide-scrollbar">
                            ${availableFamilies.map(f => {
                                const isActive = qvFamily === f.id;
                                const cnt = familyCounts[f.id] || 0;
                                const iconHtml = f.icon 
                                    ? `<i class="fa-solid ${f.icon} text-[9px]"></i>` 
                                    : `<span class="w-2.5 h-2.5 rounded-full inline-block shrink-0 border border-black/10" style="background:${f.dot}"></span>`;
                                return `<button type="button" onclick="window.filterQuickPaintFamily('${f.id}')" class="paint-family-tab ${isActive ? 'is-active' : ''}">${iconHtml}<span>${f.label} (${cnt})</span></button>`;
                            }).join('')}
                        </div>
                    `;

                    filterWrap.innerHTML = searchHtml + tabsHtml;
                } else {
                    filterWrap.className = 'hidden';
                    filterWrap.innerHTML = '';
                }
            }

            // Filter variants
            let displayed = p.variants.map((vr, origIdx) => ({ vr, origIdx }));
            if (qvFamily !== 'all') {
                displayed = displayed.filter(item => getPaintColorFamily(item.vr.colorCode, item.vr.name) === qvFamily);
            }
            if (qvSearch && qvSearch.trim()) {
                const q = qvSearch.trim().toLowerCase();
                displayed = displayed.filter(item => {
                    const n = (item.vr.name || '').toLowerCase();
                    const h = (item.vr.colorCode || '').toLowerCase();
                    const c = (item.vr.code || '').toLowerCase();
                    return n.includes(q) || h.includes(q) || c.includes(q);
                });
            }

            if (countBadge) {
                countBadge.innerText = `${displayed.length} Warna`;
                countBadge.classList.remove('hidden');
            }

            // MODEL 1: KATALOG WARNA CAT KHUSUS
            optContainer.className = "grid grid-cols-3 gap-2 sm:gap-2.5 max-h-60 sm:max-h-72 overflow-y-auto custom-scrollbar p-0.5";

            if (displayed.length === 0) {
                optContainer.innerHTML = `
                    <div class="col-span-3 py-8 text-center text-slate-400 dark:text-slate-500">
                        <i class="fa-solid fa-palette text-2xl mb-1.5 opacity-50 block"></i>
                        <p class="text-xs font-bold">Tidak ada warna yang cocok</p>
                        <button type="button" onclick="window.clearQuickPaintSearch(); window.filterQuickPaintFamily('all');" class="mt-2.5 px-3 py-1 text-[11px] font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] hover:bg-slate-200 transition-colors">
                            Tampilkan Semua Warna
                        </button>
                    </div>
                `;
            } else {
                optContainer.innerHTML = displayed.map(({ vr: r, origIdx: idx }) => {
                    const isVarActive = r.isActive !== false && r.isActive !== 'false';
                    const rawS = (r.stock != null && r.stock !== '') ? r.stock : ((r.stok != null && r.stok !== '') ? r.stok : null);
                    const hasS = rawS != null && !isNaN(parseFloat(rawS));
                    const s = hasS ? parseFloat(rawS) : 0;
                    const isOOS = useStk && s <= 0;
                    const isSelectable = isVarActive && !isOOS;
                    const isSelected = idx === qvVar;

                    const info = parsePaintColorInfo(r);
                    const hex = info.hex;
                    const isDark = info.isDark;

                    const zoomBtn = isSelectable 
                        ? `<span onclick="event.stopPropagation(); previewVariant(${idx})" class="paint-swatch-zoom ${isDark ? 'is-dark-bg' : 'is-light-bg'}" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus"></i></span>` 
                        : '';

                    const selectedBadge = isSelected
                        ? `<div class="paint-selected-badge"><span class="paint-selected-badge-inner ${isDark ? 'is-dark-bg' : 'is-light-bg'}"><i class="fa-solid fa-check"></i></span></div>`
                        : '';

                    const hasDiffPrice = r.price && parseFloat(r.price) !== parseFloat(p.price);
                    const metaRight = hasDiffPrice 
                        ? `<span class="paint-swatch-stock font-bold ${isSelected ? 'text-[var(--color-primary)]' : ''}">${fCur(r.price)}</span>`
                        : (hasS && !isOOS ? `<span class="paint-swatch-stock ${s <= 5 ? 'is-low' : ''}">Stok ${s}</span>` : `<span class="paint-swatch-stock">${esc(r.unit || p.unit || '')}</span>`);

                    return `
                        <button type="button" ${!isSelectable ? 'disabled' : ''} onclick="selectQuickVariant(${idx})" class="paint-swatch-card ${isSelected ? 'is-selected' : ''} ${!isSelectable ? 'is-disabled' : ''}">
                            <div class="paint-swatch-block" style="background-color: ${esc(hex)};">
                                <div class="paint-sheen-overlay"></div>
                                <span class="paint-code-stamp ${isDark ? 'is-dark-bg' : 'is-light-bg'}">${esc(info.codeStamp)}</span>
                                ${zoomBtn}
                                ${selectedBadge}
                            </div>
                            <div class="paint-swatch-info">
                                <span class="paint-swatch-name ${!isSelectable ? 'line-through opacity-60' : ''}">${esc(info.displayName)}</span>
                                <div class="paint-swatch-meta">
                                    <span class="paint-swatch-hex">${esc(hex)}</span>
                                    ${metaRight}
                                </div>
                            </div>
                            ${isOOS ? '<span class="paint-oos-badge">Habis</span>' : ''}
                        </button>
                    `;
                }).join('');
            }
        } else {
            // MODEL 2: VARIAN STANDAR / UMUM (NON-CAT, TANPA KODE HEX)
            optContainer.className = "flex flex-wrap gap-2 max-h-56 overflow-y-auto custom-scrollbar p-0.5";
            optContainer.innerHTML = p.variants.map((r, idx) => {
                const isVarActive = r.isActive !== false && r.isActive !== 'false';
                const rawS = (r.stock != null && r.stock !== '') ? r.stock : ((r.stok != null && r.stok !== '') ? r.stok : null);
                const hasS = rawS != null && !isNaN(parseFloat(rawS));
                const s = hasS ? parseFloat(rawS) : 0;
                const isOOS = useStk && s <= 0;
                const isSelectable = isVarActive && !isOOS;
                const isSelected = idx === qvVar;

                let chipClass = "";
                if (!isSelectable) {
                    chipClass = "bg-slate-100/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 text-slate-400 opacity-50 cursor-not-allowed";
                } else if (isSelected) {
                    chipClass = "border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] ring-2 ring-[var(--color-primary)]/25 shadow-xs text-slate-900 dark:text-white font-black";
                } else {
                    chipClass = "bg-white dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50";
                }

                // Tampilkan gambar jika varian memiliki foto (pengecualian gambar)
                const thumbImg = (r.img && r.img.trim())
                    ? `<img src="${getOptImg(r.img, 'w100-rw')}" alt="${esc(r.name)}" class="w-7 h-7 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-slate-700 shadow-2xs">`
                    : '';

                const hasDiffPrice = r.price && parseFloat(r.price) !== parseFloat(p.price);
                const priceBadge = hasDiffPrice 
                    ? `<span class="text-[10px] font-bold ${isSelected ? 'text-[var(--color-primary)]' : 'text-slate-500 dark:text-slate-400'}">${fCur(r.price)}</span>`
                    : '';

                return `
                    <button ${!isSelectable ? 'disabled' : ''} onclick="selectQuickVariant(${idx})" class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${chipClass}">
                        ${thumbImg}
                        <div class="flex flex-col text-left min-w-0">
                            <span class="truncate max-w-[150px] leading-tight ${!isSelectable ? 'line-through' : ''}">${esc(r.name)}</span>
                            <div class="flex items-center gap-1.5 flex-wrap">
                                ${priceBadge}
                                ${hasS && !isOOS ? `<span class="text-[9px] font-bold ${s <= 5 ? 'text-rose-500' : 'text-slate-400 dark:text-slate-500'}">Stok ${s}</span>` : ''}
                            </div>
                        </div>
                        ${isOOS ? '<span class="ml-1 px-1.5 py-0.5 rounded text-[8px] bg-rose-500 text-white font-bold leading-none">Habis</span>' : ''}
                    </button>
                `;
            }).join('');
        }
    }

    // Wishlist UI State
    updateQuickVariantWishUI();

    // Button states
    const isOutOfStock = useStk && varStock <= 0;
    const btnCart = el('quick-variant-btn-cart');
    const btnBuy = el('quick-variant-btn-buy');
    if (btnCart && btnBuy) {
        if (isOutOfStock) {
            btnCart.disabled = true;
            btnBuy.disabled = true;
            btnCart.classList.add('opacity-50', 'cursor-not-allowed');
            btnBuy.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            btnCart.disabled = false;
            btnBuy.disabled = false;
            btnCart.classList.remove('opacity-50', 'cursor-not-allowed');
            btnBuy.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
};

export const quickVariantAddToCart = (btn = null) => {
    if (!qvProd) return;
    const p = qvProd;
    const v = p.variants?.[qvVar];
    if (!v) return showToast('Pilih varian terlebih dahulu');

    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const avail = parseFloat(v.stock) || 0;
    const vN = v.name;
    const existing = cart.find(i => i.id === p.id && i.variantName === vN);
    const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;

    if (useStk && (qvQty + inCartQty) > avail) {
        return showToast(`Stok tidak cukup! Tersisa: ${avail}`);
    }

    const unt = v.unit || p.unit || 'pcs';
    const prodImg = v.img || p.img;
    if (existing) {
        existing.qty = parseFloat((existing.qty + qvQty).toFixed(2));
        existing.unit = unt;
    } else {
        const itemPoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(p.poin) || 0);
        cart.push({
            id: p.id,
            name: p.name,
            variantName: vN,
            price: v.price || p.price,
            img: prodImg,
            qty: qvQty,
            unit: unt,
            poTime: p.poTime || '',
            colorCode: v.colorCode || '',
            poin: itemPoin
        });
    }
    updCart();
    if (typeof analytics !== 'undefined') analytics.logEvent('add_to_cart', { item_id: p.id, item_name: p.name, quantity: qvQty });

    // Fly to cart animation
    const startElem = (btn instanceof HTMLElement) ? btn : el('quick-variant-img');
    if (typeof window.flyToCartAnimation === 'function') {
        window.flyToCartAnimation(startElem, '#bnav-cart', prodImg);
    } else if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('medium');
    }

    closeQuickVariantSheet();
    showToast(`"${p.name} (${vN})" masuk ke keranjang`, "success");
};

export const quickVariantBuyNow = () => {
    if (!qvProd) return;
    const p = qvProd;
    const v = p.variants?.[qvVar];
    if (!v) return showToast('Pilih varian terlebih dahulu');

    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const avail = parseFloat(v.stock) || 0;
    const vN = v.name;
    const existing = cart.find(i => i.id === p.id && i.variantName === vN);
    const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;

    if (useStk && (qvQty + inCartQty) > avail) {
        return showToast(`Stok tidak cukup! Tersisa: ${avail}`);
    }

    const unt = v.unit || p.unit || 'pcs';
    const prodImg = v.img || p.img;
    if (existing) {
        existing.qty = parseFloat((existing.qty + qvQty).toFixed(2));
        existing.unit = unt;
    } else {
        const itemPoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(p.poin) || 0);
        cart.push({
            id: p.id,
            name: p.name,
            variantName: vN,
            price: v.price || p.price,
            img: prodImg,
            qty: qvQty,
            unit: unt,
            poTime: p.poTime || '',
            colorCode: v.colorCode || '',
            poin: itemPoin
        });
    }
    updCart();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
    closeQuickVariantSheet(true);

    if (typeof window.changeView === 'function') {
        window.changeView('view-checkout');
    }
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.renderRelatedProducts = renderRelatedProducts;
window.previewVariant = previewVariant;
window.previewProductImage = previewProductImage;
window.closeVariantPreviewModal = closeVariantPreviewModal;
window.changeSlide = changeSlide;
window.rProdMod = rProdMod;
window.uMPP = uMPP;
window.updateModalQty = updateModalQty;
window.handleModalQtyChange = handleModalQtyChange;
window.selectVariant = selectVariant;
window.confirmAddProductToCart = confirmAddProductToCart;
window.confirmAddToWishlist = confirmAddToWishlist;
window.shareProduct = shareProduct;
window.buyNowProduct = buyNowProduct;
window.chatWAAboutProduct = chatWAAboutProduct;
window.openQuickVariantSheet = openQuickVariantSheet;
window.closeQuickVariantSheet = closeQuickVariantSheet;
window.selectQuickVariant = selectQuickVariant;
window.updateQuickVariantQty = updateQuickVariantQty;
window.quickVariantAddToCart = quickVariantAddToCart;
window.quickVariantBuyNow = quickVariantBuyNow;
window.toggleQuickVariantWishlist = toggleQuickVariantWishlist;
window.updateQuickVariantWishUI = updateQuickVariantWishUI;
window.filterQuickPaintFamily = filterQuickPaintFamily;
window.searchQuickPaintColor = searchQuickPaintColor;
window.clearQuickPaintSearch = clearQuickPaintSearch;


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
    getYouTubeId, ssL, openModalAnim, closeModalAnim 
} from '../../core/utils.js';

import { updCart } from '../cart/cart.js';
import { curViewName } from '../../core/router.js';

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
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let totalAvail = Infinity;
    if (useStk) {
        totalAvail = (p.variants && p.variants.length)
            ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s, v) => s + (parseFloat(v.stock) || 0), 0)
            : (parseFloat(p.stock) || 0);
    }
    if (!pActive) {
        showToast('Produk ini sedang tidak tersedia');
        return;
    }
    if (useStk && totalAvail <= 0) {
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
            const stock = parseFloat(v.stock) || 0;
            return isActive && (!useStk || stock > 0);
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
    if (!cProd || !cProd.variants || !cProd.variants[idx]) return;
    const v = cProd.variants[idx];
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (!m || !c) return;

    let html = '';
    const nameStr = `${esc(cProd.name)} - ${esc(v.name)}`;
    const priceStr = fCur(v.price || cProd.price);

    if (v.img) {
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${getOptImg(v.img, 'w800-rw')}" alt="${esc(v.name)}">
                ${v.colorCode ? `<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${esc(v.colorCode)};"></div>` : ''}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(v.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    } else if (v.colorCode) {
        html = `
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${esc(v.colorCode)};">
                <div class="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50">
                    <span class="text-slate-900 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${esc(v.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${esc(v.colorCode)}</span>
                    <span class="text-[var(--color-primary)] font-extrabold text-lg mt-1">${priceStr}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    } else {
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${getOptImg(cProd.img || '', 'w800-rw')}" alt="${esc(cProd.name)}">
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
    const imgSrc = v?.img || cProd.img || '';
    const titleStr = v ? `${esc(cProd.name)} - ${esc(v.name)}` : esc(cProd.name);
    const priceStr = fCur(v?.price ?? cProd.price);

    let html = `
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${getOptImg(imgSrc, 'w800-rw')}" alt="${titleStr}">
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
            if (i) {
                i.style.display = 'block';
                i.src = getOptImg(v?.img || p.img || '', 'w600-rw');
                i.style.opacity = 1;
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
        if (i) {
            i.style.display = 'block';
            i.style.opacity = 0;
            setTimeout(() => { i.src = getOptImg(v?.img || p.img || '', 'w600-rw'); i.style.opacity = 1; }, 150);
        }
        const zoomInd = el('zoom-indicator');
        if (zoomInd) zoomInd.classList.remove('hidden');
    }
    
    setIn('product-modal-title', p.name);
    
    if (hV && cVar === null) {
        setH('product-modal-price', '<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');
    } else {
        let actPrice = v?.price ?? p.price;
        let actNormal = v?.priceNormal ?? p.priceNormal;
        
        const isIncPpn = (appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true') && appData.store.ppnType === 'inclusive';
        const ppnBadge = isIncPpn ? `<span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest ml-2 align-middle inline-block">Inc. PPN</span>` : '';
        
        let pHtml = '';
        if (actNormal && actNormal > actPrice) {
            let pct = Math.round(((actNormal - actPrice) / actNormal) * 100);
            pHtml = `<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${fCur(actNormal)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${pct}%</span></span><span>${fCur(actPrice)} ${ppnBadge}</span></div>`;
        } else {
            pHtml = `<span>${fCur(actPrice)} ${ppnBadge}</span>`;
        }
        setH('product-modal-price', pHtml);
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
    if (p.sku) bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${esc(p.sku)}</span>`;
    if (p.tag) bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${esc(p.tag)}</span>`;
    
    bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>`;
    
    if (p.brand) bH += `<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${esc(p.brand)}</span>`;
    
    if (p.poTime) bH += `<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>`;

    const activePoin = (v && parseFloat(v.poin) > 0) ? parseFloat(v.poin) : (parseFloat(p.poin) || 0);
    if (activePoin > 0 && (!hV || cVar !== null)) {
        bH += `<span class="bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${activePoin} Poin</span>`;
    }

    const totalSoldDisplay = hV && cVar !== null
        ? (parseFloat(v ? v.totalSold : 0) || 0)
        : (hV ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0) : (parseFloat(p.totalSold) || 0));
    if (totalSoldDisplay > 0) {
        bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${totalSoldDisplay} Terjual</span>`;
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
            
            let gridHTML = `<div class="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-2 sm:gap-3 w-full">`;
            
            gridHTML += p.variants.map((r, x) => {
                let isVarActive = r.isActive !== false && r.isActive !== 'false';
                const useStkV = appData.store.useStock === true || appData.store.useStock === 'true';
                const varStock = parseFloat(r.stock) || 0;
                const isVarOutOfStock = useStkV && varStock <= 0;
                let isVarSelectable = isVarActive && !isVarOutOfStock;
                
                let colorCircle = r.colorCode ? `<span class="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 mb-2 shrink-0" style="background-color: ${esc(r.colorCode)};"></span>` : '';
                
                let btnClass = "";
                if (!isVarSelectable) {
                    btnClass = "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed";
                } else if (x === cVar) {
                    btnClass = "bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] text-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:text-[var(--color-primary)] shadow-sm";
                } else {
                    btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-[var(--color-primary)]/40 hover:shadow-sm";
                }

                const zoomBtn = isVarSelectable && (r.colorCode || r.img) ? `<span onclick="event.stopPropagation(); previewVariant(${x})" class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-slate-700/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:scale-110 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-600/50" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i></span>` : '';

                return `<button ${!isVarSelectable ? 'disabled' : ''} class="relative p-2.5 sm:p-3 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border-2 transition-all active:scale-95 flex flex-col items-center justify-start text-center h-full ${btnClass}" ${isVarSelectable ? `onclick="selectVariant(${x})"` : ''}>
                    ${zoomBtn}
                    ${colorCircle} 
                    <span class="${!isVarSelectable ? 'line-through' : ''} leading-snug break-words w-full ${!r.colorCode ? 'my-auto' : ''}">${esc(r.name)}</span>
                    ${isVarOutOfStock && isVarActive ? '<span class="text-[8px] font-bold text-rose-500 normal-case mt-0.5">Stok Habis</span>' : ''}
                </button>`;
            }).join('');
            
            gridHTML += `</div>`;
            setH('product-modal-options', gridHTML);
            
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
};

export const updateModalQty = c => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const maxStk = useStk ? (vN2 ? (parseFloat(v2?.stock) || 0) : (parseFloat(cProd?.stock) || 0)) : Infinity;
    const newQty = parseFloat(Math.min(maxStk, Math.max(0.01, cQty + c)).toFixed(2));
    setCQty(newQty);
    setV('modal-qty-input', cQty); 
    uMPP();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    if (useStk && maxStk !== Infinity && cQty >= maxStk) showToast(`Maks stok: ${maxStk}`);
};

export const handleModalQtyChange = v => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const maxStk = useStk ? (vN2 ? (parseFloat(v2?.stock) || 0) : (parseFloat(cProd?.stock) || 0)) : Infinity;
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
    showToast("Masuk Favorit ❤️");
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

        return `
        <div onclick="openProductModal('${esc(item.id)}')" class="group cursor-pointer shrink-0 w-[145px] sm:w-[165px] bg-slate-50 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2.5 flex flex-col transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/40 hover:-translate-y-1 snap-start">
            <div class="relative aspect-square w-full rounded-xl bg-white overflow-hidden mb-2 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center">
                <img loading="lazy" decoding="async" src="${esc(itemImg)}" alt="${esc(item.name)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/300?text=No+Image'">
                ${badgeText ? `<span class="absolute top-1.5 left-1.5 bg-slate-900/80 backdrop-blur-xs text-white text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md truncate max-w-[85%] uppercase tracking-wider">${esc(badgeText)}</span>` : ''}
            </div>
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

export const openQuickVariantSheet = (productId) => {
    const p = appData.products.find(x => String(x.id) === String(productId));
    if (!p) return;
    qvProd = p;
    qvQty = 1;

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

    renderQuickVariantSheet();

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
    const v = qvProd.variants?.[qvVar];
    const maxStk = useStk ? (parseFloat(v?.stock) || 0) : Infinity;
    const newQty = Math.min(maxStk, Math.max(1, qvQty + delta));
    qvQty = newQty;
    const input = el('quick-variant-qty-input');
    if (input) input.value = qvQty;
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const renderQuickVariantSheet = () => {
    if (!qvProd) return;
    const p = qvProd;
    const v = p.variants?.[qvVar];
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';

    // Mini Header Update
    const imgEl = el('quick-variant-img');
    if (imgEl) imgEl.src = getOptImg(v?.img || p.img || '', 'w300-rw');
    setIn('quick-variant-title', p.name);

    const priceVal = v?.price ?? p.price;
    setIn('quick-variant-price', fCur(priceVal));

    const varStock = parseFloat(v?.stock) || 0;
    const stockEl = el('quick-variant-stock');
    if (stockEl) {
        if (useStk) {
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

    // Render Options
    const optContainer = el('quick-variant-options');
    if (optContainer && p.variants) {
        optContainer.innerHTML = p.variants.map((r, idx) => {
            const isVarActive = r.isActive !== false && r.isActive !== 'false';
            const s = parseFloat(r.stock) || 0;
            const isOOS = useStk && s <= 0;
            const isSelectable = isVarActive && !isOOS;
            const isSelected = idx === qvVar;

            let btnClass = "";
            if (!isSelectable) {
                btnClass = "bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 opacity-50 cursor-not-allowed";
            } else if (isSelected) {
                btnClass = "bg-[rgba(var(--color-primary-rgb),0.1)] border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-xs ring-1 ring-[var(--color-primary)]/40";
            } else {
                btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/40";
            }

            const colorDot = r.colorCode ? `<span class="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10 shadow-xs" style="background-color: ${esc(r.colorCode)}"></span>` : '';

            return `
                <button ${!isSelectable ? 'disabled' : ''} onclick="selectQuickVariant(${idx})" class="px-3 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${btnClass}">
                    ${colorDot}
                    <span class="${!isSelectable ? 'line-through' : ''}">${esc(r.name)}</span>
                    ${isOOS ? '<span class="text-[9px] text-rose-500 font-bold ml-1">Habis</span>' : ''}
                </button>
            `;
        }).join('');
    }

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

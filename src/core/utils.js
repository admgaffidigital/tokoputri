/**
 * ============================================================
 * CORE UTILITIES
 * Kumpulan fungsi helper stateless yang dipakai di seluruh app.
 * Tidak boleh mengimpor dari modul lain (kecuali tidak ada dep).
 * ============================================================
 */

// ─── DOM Shortcuts ──────────────────────────────────────────
export const el        = id => document.getElementById(id);
export const show      = id => { const e = el(id); if(e) e.classList.remove('hidden'); };
export const hide      = id => { const e = el(id); if(e) e.classList.add('hidden'); };
export const toggleCls = (id, c, f) => { const e = el(id); if(e) e.classList.toggle(c, f); };
export const setIn     = (id, t) => { const e = el(id); if(e) e.innerText = t; };
export const setH      = (id, h) => { const e = el(id); if(e) e.innerHTML = h; };
export const setV      = (id, v) => { const e = el(id); if(e) e.value = v; };
export const getV      = id => { const e = el(id); return e ? e.value : ''; };

// ─── LocalStorage Wrappers ───────────────────────────────────
export const sL  = k      => { try { return localStorage.getItem(k); }    catch(e) { return null; } };
export const ssL = (k, v) => { try { localStorage.setItem(k, v); }        catch(e) {} };

// ─── String / XSS ───────────────────────────────────────────
/**
 * Escape karakter HTML berbahaya untuk mencegah XSS.
 * Aman untuk null, undefined, atau non-string.
 */
export const esc = s => {
    if (s === null || s === undefined) return '';
    return s.toString().replace(/[&<>'"]/g, t => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[t]));
};

// ─── Currency ───────────────────────────────────────────────
/**
 * Format angka ke format Rupiah (Rp 1.000.000).
 */
export const fCur = a => {
    const n = Number(a);
    return (isNaN(n) || a === null) ? 'Rp 0' : new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    }).format(Math.abs(n)).replace(/^/, n < 0 ? '-' : '');
};

// ─── Media / URL Helpers ─────────────────────────────────────
/**
 * Konversi URL Google Drive (berbagai format) ke URL thumbnail langsung
 * yang bisa ditampilkan di tag <img>.
 */
export const fixD = v => {
    if (typeof v !== 'string') return v;
    const m = v.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
    return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : v;
};

/**
 * Ambil ID video YouTube dari berbagai format URL
 * (youtube.com, youtu.be, Shorts, embed, dll).
 */
export const getYouTubeId = (url) => {
    if (!url || typeof url !== 'string') return null;
    const u = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(u)) return u;
    const match = u.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    return match ? match[1] : null;
};

/**
 * Parser URL video cerdas: mendeteksi YouTube, Google Drive, atau file langsung.
 * Mengembalikan objek dengan type, id, dan berbagai URL embed/stream.
 */
export const parseVideoUrl = (url) => {
    if (typeof url !== 'string' || !url.trim()) return null;
    const u = url.trim();

    // YouTube / Shorts / Share Links
    const ytId = getYouTubeId(u);
    if (ytId) {
        return {
            type: 'youtube',
            id: ytId,
            embedUrl: `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&muted=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`
        };
    }

    // Google Drive Video
    const driveMatch = u.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
        const id = driveMatch[1];
        return {
            type: 'gdrive',
            id: id,
            streamUrl:  `https://drive.google.com/uc?export=download&id=${id}`,
            streamUrl2: `https://docs.google.com/uc?export=download&id=${id}`,
            directUrl:  `https://drive.google.com/uc?export=download&id=${id}`,
            embedUrl:   `https://drive.google.com/file/d/${id}/preview?autoplay=1`
        };
    }

    // Direct Video File (MP4, WebM, MOV, dll)
    return { type: 'direct', directUrl: u, embedUrl: u };
};

export const fixDriveVideo        = v => { const p = parseVideoUrl(v); return p ? p.embedUrl : v; };
export const fixDriveVideoPreview = v => { const p = parseVideoUrl(v); return p ? p.embedUrl : v; };

/**
 * Optimizer URL gambar Google User Content.
 * @param {string} url - URL gambar
 * @param {string} sizeOpt - misal 'w300-rw', 's400', dll
 */
export const getOptImg = (url, sizeOpt) => {
    if (typeof url !== 'string') return url;
    if (url.includes('lh3.googleusercontent.com/d/')) {
        const cleanUrl = url.split('=')[0];
        return `${cleanUrl}=${sizeOpt}`;
    }
    return url;
};

// ─── Reward Status ───────────────────────────────────────────
/**
 * Label singkat status klaim hadiah untuk tampilan riwayat pesanan pelanggan.
 */
export const rewardStatusLabel = (cr) => {
    if (!cr) return '';
    if (cr.status === 'ready')         return '(Dikirim Bersama Pesanan)';
    if (cr.status === 'waiting_stock') return '(Stok Kosong - Ditunda)';
    return '(Menunggu Konfirmasi)';
};

// ─── SEO Helpers ─────────────────────────────────────────────
/**
 * Update meta tags SEO (title, description, og:*) secara dinamis.
 */
export const updateSEO = (title, desc, image, url) => {
    document.title = title || "Toko Putri";
    const setMeta = (name, content, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let elM = document.querySelector(`meta[${attr}="${name}"]`);
        if (!elM) { elM = document.createElement('meta'); elM.setAttribute(attr, name); document.head.appendChild(elM); }
        elM.setAttribute('content', content);
    };
    if (desc)  setMeta('description', desc);
    if (title) setMeta('og:title', title, true);
    if (desc)  setMeta('og:description', desc, true);
    if (image) setMeta('og:image', image, true);
    if (url)   setMeta('og:url', url, true);
};

/**
 * Inject atau update JSON-LD Structured Data di <head>.
 */
export const injectJSONLD = (id, data) => {
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
};

// ─── Loading Overlay Helpers ─────────────────────────────────
export const sLoad = t => { if(t) setIn('loader-text', t); const gl = el('global-loader'); if(gl) { gl.style.display = 'flex'; } };
export const hLoad = () => { const gl = el('global-loader'); if(gl) gl.style.display = 'none'; };

export const showToast = (m, type, title, duration) => {
    if (typeof window.showToast === 'function') {
        window.showToast(m, type, title, duration);
    }
};

export const showConfirm = (t, m, y, n) => {
    if (typeof window.showConfirm === 'function') {
        window.showConfirm(t, m, y, n);
    }
};

export const loadedScripts = {};
window.loadedScripts = loadedScripts;
export const ensureScriptLoaded = (src, checkFn) => {
    if (checkFn && checkFn()) return Promise.resolve();
    if (loadedScripts[src]) return loadedScripts[src];
    loadedScripts[src] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve();
        s.onerror = () => { delete loadedScripts[src]; reject(new Error('Gagal memuat: ' + src)); };
        document.head.appendChild(s);
    });
    return loadedScripts[src];
};
export const normalizeWA = (raw) => {
    let n = (raw || '').toString().replace(/\D/g, '');
    if (!n) return '';
    if (n.startsWith('0')) n = '62' + n.substring(1);
    else if (!n.startsWith('62')) n = '62' + n;
    return n;
};

// ─── Native App Feel Helpers ─────────────────────────────────
/**
 * Haptic Vibration Feedback (Sentuhan Taktil Bergetar)
 * @param {'light'|'medium'|'success'|'warning'} type
 */
export const triggerHaptic = (type = 'light') => {
    try {
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
            if (type === 'light') navigator.vibrate(10);
            else if (type === 'medium') navigator.vibrate(25);
            else if (type === 'success') navigator.vibrate([15, 30, 20]);
            else if (type === 'warning') navigator.vibrate([30, 40, 30]);
        }
    } catch (e) {}
};

/**
 * Animasi Terbang Masuk Keranjang (Fly to Cart)
 * @param {HTMLElement|EventTarget} startEl - Elemen asal tombol / gambar
 * @param {HTMLElement|string} targetEl - Elemen tujuan (icon keranjang)
 * @param {string} imgUrl - URL gambar produk
 */
export const flyToCartAnimation = (startEl, targetEl = null, imgUrl = null) => {
    try {
        const dest = (typeof targetEl === 'string' ? document.querySelector(targetEl) : targetEl) 
            || document.getElementById('bnav-cart') 
            || document.getElementById('bottom-nav-tab-cart') 
            || document.getElementById('floating-cart-container')
            || document.querySelector('[onclick*="changeView(\'view-cart\')"]');
            
        if (!startEl || !dest) return;

        const startRect = startEl.getBoundingClientRect();
        const destRect = dest.getBoundingClientRect();

        const flyer = document.createElement('div');
        flyer.className = 'flying-cart-item';
        
        if (imgUrl) {
            flyer.innerHTML = `<img src="${imgUrl}" alt="Product" class="w-full h-full object-cover rounded-full" />`;
        } else {
            flyer.innerHTML = `<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>`;
        }

        const startX = startRect.left + (startRect.width / 2) - 20;
        const startY = startRect.top + (startRect.height / 2) - 20;
        const destX = destRect.left + (destRect.width / 2) - 20;
        const destY = destRect.top + (destRect.height / 2) - 20;

        flyer.style.cssText = `
            position: fixed;
            left: ${startX}px;
            top: ${startY}px;
            width: 42px;
            height: 42px;
            border-radius: 9999px;
            z-index: 99999;
            pointer-events: none;
            box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.25);
            border: 2px solid white;
            transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease-in, scale 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
        `;

        document.body.appendChild(flyer);

        requestAnimationFrame(() => {
            const deltaX = destX - startX;
            const deltaY = destY - startY;
            flyer.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.25) rotate(18deg)`;
            flyer.style.opacity = '0.4';
        });

        setTimeout(() => {
            if (flyer && flyer.parentNode) flyer.parentNode.removeChild(flyer);
            
            // Trigger haptic & cart bump
            triggerHaptic('medium');
            
            const badge = document.getElementById('bottom-nav-cart-badge') || dest.querySelector('.cart-count-badge');
            if (badge) {
                badge.classList.remove('cart-bounce-pop');
                void badge.offsetWidth;
                badge.classList.add('cart-bounce-pop');
            }
            dest.classList.remove('cart-bounce-pop');
            void dest.offsetWidth;
            dest.classList.add('cart-bounce-pop');
            setTimeout(() => {
                if (badge) badge.classList.remove('cart-bounce-pop');
                dest.classList.remove('cart-bounce-pop');
            }, 600);
        }, 500);
    } catch (e) {
        console.error('flyToCart error', e);
    }
};

window.normalizeWA = normalizeWA;
window.sLoad = sLoad;
window.hLoad = hLoad;
window.el = el;
window.show = show;
window.hide = hide;
window.toggleCls = toggleCls;
window.setIn = setIn;
window.setH = setH;
window.setV = setV;
window.getV = getV;
window.esc = esc;
window.fixD = fixD;
window.fCur = fCur;
window.sL = sL;
window.ssL = ssL;
window.triggerHaptic = triggerHaptic;
window.flyToCartAnimation = flyToCartAnimation;

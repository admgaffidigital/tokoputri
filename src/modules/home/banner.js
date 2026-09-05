/**
 * ============================================================
 * MODUL BERANDA: BANNER SLIDER & VIDEO CAROUSEL
 * Mengatur slider banner beranda 3D, auto-play video banner
 * (Google Drive, YouTube, MP4), toggle mute/unmute suara video,
 * navigasi dot, auto slide interval, dan touch/scroll gesture.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el } from '../../core/utils.js';

// bannerTmr disimpan di window agar bisa diakses dari atribut HTML inline
// (onmouseenter="clearInterval(bannerTmr)" dll) dan dari modul ini secara serentak.
if (typeof window.bannerTmr === 'undefined') window.bannerTmr = null;
export let bannerScrollDebounce = null;

/**
 * Pastikan semua elemen video banner otomatis berputar
 */
export const forcePlayBannerVideos = () => {
    document.querySelectorAll('#banner-slider video.banner-video-element').forEach(vid => {
        if (!vid.dataset.init) {
            vid.dataset.init = "true";
            vid.muted = true;
            vid.loop = true;
            vid.playsInline = true;
            vid.setAttribute('playsinline', '');
            vid.setAttribute('loop', '');
            vid.setAttribute('autoplay', '');
        }
        
        if (!vid.dataset.loopAttached) {
            vid.dataset.loopAttached = "true";
            vid.addEventListener('ended', () => {
                vid.currentTime = 0;
                vid.play().catch(() => {});
            });
        }
        
        if (vid.dataset.userUnmuted === "true") {
            vid.muted = false;
        }
        
        vid.play().catch(() => {});
    });
};

/**
 * Toggle Suara Video Banner (Mute / Unmute)
 */
export const toggleBannerVideoSound = (btn, slideIdx) => {
    const slide = el(`banner-slide-${slideIdx}`) || (btn && btn.closest('.banner-slide-item'));
    if (!slide) return;

    // 1. Cek HTML5 <video>
    const vid = slide.querySelector('video.banner-video-element');
    if (vid) {
        if (vid.muted) {
            vid.muted = false;
            vid.volume = 1.0;
            vid.dataset.userUnmuted = "true";
            vid.play().catch(() => {});
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        } else {
            vid.muted = true;
            vid.dataset.userUnmuted = "false";
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        }
        return;
    }

    // 2. Cek YouTube Iframe
    const ytIframe = slide.querySelector('iframe.banner-video-iframe');
    if (ytIframe) {
        const isMuted = ytIframe.dataset.muted !== "false";
        if (isMuted) {
            ytIframe.dataset.muted = "false";
            ytIframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            ytIframe.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}', '*');
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        } else {
            ytIframe.dataset.muted = "true";
            ytIframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        }
    }
};

/**
 * Update active dot indicator pada banner carousel
 */
export const updateBannerDots = (activeIdx) => {
    const dotsContainer = el('banner-dots-container');
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.banner-dot-item');
    dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
            dot.className = 'banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm';
        } else {
            dot.className = 'banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400';
        }
    });
};

/**
 * Event scroll pada banner slider
 */
export const onBannerScroll = () => {
    if (bannerScrollDebounce) clearTimeout(bannerScrollDebounce);
    bannerScrollDebounce = setTimeout(() => {
        const sl = el('banner-slider');
        if (!sl) return;
        const items = sl.querySelectorAll('.banner-slide-item');
        if (!items || !items.length) return;
        let currentIndex = 0;
        let minDiff = Infinity;
        items.forEach((item, idx) => {
            const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
            if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
        });
        updateBannerDots(currentIndex);
    }, 100);
};

export const scrollToBanner = (index) => {
    clearInterval(window.bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (items && items[index]) {
        sl.scrollTo({ left: items[index].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
        updateBannerDots(index);
    }
    setTimeout(startBannerAutoSlide, 8000);
};

export const scrollBannerPrev = () => {
    clearInterval(window.bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (!items || !items.length) return;
    let currentIndex = 0;
    let minDiff = Infinity;
    items.forEach((item, idx) => {
        const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
        if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
    });
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    sl.scrollTo({ left: items[prevIndex].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
    updateBannerDots(prevIndex);
    setTimeout(startBannerAutoSlide, 8000);
};

export const scrollBannerNext = () => {
    clearInterval(window.bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (!items || !items.length) return;
    let currentIndex = 0;
    let minDiff = Infinity;
    items.forEach((item, idx) => {
        const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
        if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
    });
    const nextIndex = (currentIndex + 1) % items.length;
    sl.scrollTo({ left: items[nextIndex].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
    updateBannerDots(nextIndex);
    setTimeout(startBannerAutoSlide, 8000);
};

export const startBannerAutoSlide = () => {
    clearInterval(window.bannerTmr);
    const s = el('banner-slider');
    if (!s || !appData.banners || appData.banners.length <= 1) return;

    const syncBannerVideos = () => {
        forcePlayBannerVideos();
    };

    syncBannerVideos();
    forcePlayBannerVideos();

    window.bannerTmr = setInterval(() => {
        const sl = el('banner-slider');
        if (!sl) return clearInterval(window.bannerTmr);
        const items = sl.querySelectorAll('.banner-slide-item');
        if (!items || items.length <= 1) {
            const m = sl.scrollWidth - sl.clientWidth;
            if (sl.scrollLeft >= m - 10) sl.scrollTo({ left: 0, behavior: 'smooth' });
            else sl.scrollBy({ left: sl.clientWidth, behavior: 'smooth' });
        } else {
            let currentIndex = 0;
            let minDiff = Infinity;
            items.forEach((item, idx) => {
                const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    currentIndex = idx;
                }
            });
            const nextIndex = (currentIndex + 1) % items.length;
            const targetItem = items[nextIndex];
            sl.scrollTo({ left: targetItem.offsetLeft - sl.offsetLeft, behavior: 'smooth' });
            updateBannerDots(nextIndex);
        }
        setTimeout(syncBannerVideos, 400);
    }, 8000);
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.forcePlayBannerVideos = forcePlayBannerVideos;
window.toggleBannerVideoSound = toggleBannerVideoSound;
window.updateBannerDots = updateBannerDots;
window.onBannerScroll = onBannerScroll;
window.scrollToBanner = scrollToBanner;
window.scrollBannerPrev = scrollBannerPrev;
window.scrollBannerNext = scrollBannerNext;
window.startBannerAutoSlide = startBannerAutoSlide;

/**
 * ============================================================
 * MODUL ROUTER & HISTORY API (CORE NAVIGATION ROUTER)
 * Mengatur pergantian view halaman, penyimpanan posisi scroll,
 * navigasi tombol back Android/browser (popstate), serta stack
 * modal terpusat (oMods) agar tidak ada modal yang macet/nyangkut.
 * ============================================================
 */

import { oMods } from './state.js';
import { el } from './utils.js';

export let viewScrollPos = {};
export let curViewName = 'view-catalog';

/**
 * Mendaftarkan modal yang dibuka ke riwayat browser
 */
export const pushModalHistory = (name) => {
    history.pushState({ modal: name }, '', window.location.href);
    oMods.push(name);
};

/**
 * Menutup modal dengan aman sesuai navigasi History API
 */
export const requestCloseModal = (name, fH, doClose) => {
    if (!fH) {
        const idx = oMods.lastIndexOf(name);
        if (idx > -1) {
            oMods.splice(idx, 1);
            try { history.back(); } catch(e) {}
        }
    }
    doClose();
};

/**
 * Berpindah tampilan layar (View Switching)
 */
export const changeView = (v, fH = false) => {
    if (!fH) history.pushState({ view: v }, '', window.location.href);
    
    // Simpan posisi scroll tampilan sebelumnya
    const prevT = el(curViewName);
    if (prevT) {
        const prevS = prevT.querySelector('.scroll-content');
        if (prevS) viewScrollPos[curViewName] = prevS.scrollTop;
    }

    if (curViewName === 'view-orders' && v !== 'view-orders' && typeof window.detachMyOrdersRealtime === 'function') {
        window.detachMyOrdersRealtime();
    }
    
    document.querySelectorAll('.view-section').forEach(e => {
        e.classList.add('hidden');
        e.classList.remove('flex');
    });
    
    const t = el(v);
    if (t) {
        t.classList.remove('hidden');
        t.classList.add('flex');
        
        if (v === 'view-cart' && typeof window.renderCart === 'function') window.renderCart();
        else if (v === 'view-checkout' && typeof window.rChck === 'function') window.rChck();
        else if (v === 'view-payment' && typeof window.rPay === 'function') window.rPay();
        else if (v === 'view-wishlist' && typeof window.renderWish === 'function') window.renderWish();
        else if (v === 'view-orders' && typeof window.renderMyOrders === 'function') window.renderMyOrders();
        else if (v === 'view-faq' && typeof window.renderStorefrontFAQ === 'function') window.renderStorefrontFAQ();
        
        const s = t.querySelector('.scroll-content');
        if (s) {
            if (fH) {
                const targetPos = viewScrollPos[v] || 0;
                requestAnimationFrame(() => requestAnimationFrame(() => { s.scrollTop = targetPos; }));
            } else {
                s.scrollTo(0, 0);
            }
        }
    }
    curViewName = v;
    updateBottomNav(v);
};

/**
 * Perbarui indikator tab aktif dan visibilitas Bottom Navigation Bar
 */
export const updateBottomNav = (v = curViewName) => {
    const bNav = el('bottom-nav-bar');
    if (!bNav) return;

    // Sembunyikan bilah navigasi di view checkout, pembayaran, login admin, dan dashboard admin
    const hiddenViews = ['view-cart', 'view-checkout', 'view-payment', 'view-admin-login', 'view-admin'];
    if (hiddenViews.includes(v)) {
        bNav.classList.add('translate-y-full', 'pointer-events-none');
        bNav.classList.remove('translate-y-0');
        return;
    }

    bNav.classList.remove('translate-y-full', 'pointer-events-none');
    bNav.classList.add('translate-y-0');

    // Reset status aktif semua item
    document.querySelectorAll('.bnav-item').forEach(item => item.classList.remove('active'));

    if (v === 'view-catalog') {
        const homeTab = el('bnav-home');
        if (homeTab) homeTab.classList.add('active');
    } else if (v === 'view-orders') {
        const ordersTab = el('bnav-orders');
        if (ordersTab) ordersTab.classList.add('active');
    } else if (v === 'view-wishlist' || v === 'view-faq') {
        const menuTab = el('bnav-menu');
        if (menuTab) menuTab.classList.add('active');
    }
};

/**
 * Handler aksi klik tombol pada Bottom Navigation Bar
 */
export const onBottomNavClick = (tab) => {
    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic(tab === 'home' ? 'medium' : 'light');
    }
    if (tab === 'home') {
        if (curViewName === 'view-catalog') {
            const sc = document.querySelector('#view-catalog .scroll-content');
            if (sc) sc.scrollTo({ top: 0, behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            changeView('view-catalog');
        }
    } else if (tab === 'categories') {
        if (typeof window.openCategoryModal === 'function') {
            window.openCategoryModal();
        }
    } else if (tab === 'cart') {
        changeView('view-cart');
    } else if (tab === 'orders') {
        changeView('view-orders');
    } else if (tab === 'menu') {
        if (typeof window.openQuickMenuModal === 'function') {
            window.openQuickMenuModal();
        }
    }
};

/**
 * Inisialisasi Native Pull-to-Refresh untuk layar mobile
 */
export const initPullToRefresh = () => {
    const sc = document.querySelector('#view-catalog .scroll-content');
    const indicator = el('pull-to-refresh-indicator');
    const icon = el('ptr-icon');
    const text = el('ptr-text');
    if (!sc || !indicator) return;

    let startY = 0;
    let currentY = 0;
    let isPulling = false;
    let isRefreshing = false;
    const threshold = 65;

    sc.addEventListener('touchstart', e => {
        if (sc.scrollTop <= 5 && !isRefreshing) {
            startY = e.touches[0].pageY;
            isPulling = true;
        }
    }, { passive: true });

    sc.addEventListener('touchmove', e => {
        if (!isPulling || isRefreshing) return;
        currentY = e.touches[0].pageY;
        const diff = currentY - startY;

        if (diff > 15 && sc.scrollTop <= 5) {
            indicator.classList.add('visible');
            const progress = Math.min(diff / threshold, 1.5);
            if (icon) icon.style.transform = `rotate(${progress * 240}deg)`;
            if (text) {
                text.innerText = diff >= threshold ? 'Lepaskan untuk segarkan' : 'Tarik ke bawah untuk refresh';
            }
        } else {
            indicator.classList.remove('visible');
        }
    }, { passive: true });

    sc.addEventListener('touchend', async () => {
        if (!isPulling || isRefreshing) return;
        isPulling = false;
        const diff = currentY - startY;

        if (diff >= threshold && sc.scrollTop <= 5) {
            isRefreshing = true;
            if (typeof window.triggerHaptic === 'function') window.triggerHaptic('medium');
            if (icon) {
                icon.className = 'fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]';
                icon.style.transform = '';
            }
            if (text) text.innerText = 'Menyinkronkan katalog...';

            try {
                if (typeof window.syncAppMeta === 'function') {
                    await window.syncAppMeta();
                } else if (typeof window.loadAppData === 'function') {
                    await window.loadAppData();
                }
                if (typeof window.rCat === 'function') window.rCat();
                if (typeof window.rDyn === 'function') window.rDyn();
                
                if (text) text.innerText = 'Katalog Terkini Disinkron!';
                if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-500';
                if (typeof window.triggerHaptic === 'function') window.triggerHaptic('success');
            } catch(e) {
                if (text) text.innerText = 'Gagal sinkron data';
            }

            setTimeout(() => {
                indicator.classList.remove('visible');
                setTimeout(() => {
                    isRefreshing = false;
                    if (icon) {
                        icon.className = 'fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300';
                        icon.style.transform = '';
                    }
                    if (text) text.innerText = 'Tarik ke bawah untuk refresh';
                }, 300);
            }, 600);
        } else {
            indicator.classList.remove('visible');
            if (icon) icon.style.transform = '';
        }
    });
};

/**
 * Pasang router listener popstate
 */
export const setupHistoryRouter = () => {
    initPullToRefresh();
    window.addEventListener('popstate', e => {
        if (oMods.length) {
            const m = oMods.pop();
            if (m === 'product' && typeof window.closeProductModal === 'function') window.closeProductModal(true);
            else if (m === 'category' && typeof window.closeCategoryModal === 'function') window.closeCategoryModal(true);
            else if (m === 'brand' && typeof window.closeBrandModal === 'function') window.closeBrandModal(true);
            else if (m === 'admin' && typeof window.closeAdminModal === 'function') window.closeAdminModal(true);
            else if (m === 'adminOrder' && typeof window.closeOrderDetailModal === 'function') window.closeOrderDetailModal(true);
            else if (m === 'receipt' && typeof window.closeReceiptPreviewModal === 'function') window.closeReceiptPreviewModal(true);
            else if (m === 'docPreview' && typeof window.closeDocPreviewModal === 'function') window.closeDocPreviewModal(true);
            else if (m === 'scanner' && typeof window.closeCameraScanner === 'function') window.closeCameraScanner(true);
            else if (m === 'confirm' && typeof window.closeConfirm === 'function') window.closeConfirm(true);
            else if (m === 'customerOrder' && typeof window.closeCustomerOrderDetailModal === 'function') window.closeCustomerOrderDetailModal(true);
            else if (m === 'restock' && typeof window.closeRestockModal === 'function') window.closeRestockModal(true);
            else if (m === 'quickprice' && typeof window.closeQuickPriceModal === 'function') window.closeQuickPriceModal(true);
            else if (m === 'member' && typeof window.closeMemberModal === 'function') window.closeMemberModal(true);
            else if (m === 'prompt' && typeof window.closePrompt === 'function') window.closePrompt(true);
            else if (m === 'review' && typeof window.closeReviewModal === 'function') window.closeReviewModal(true);
            else if (m === 'quickmenu' && typeof window.closeQuickMenuModal === 'function') window.closeQuickMenuModal(true);
            else if (m === 'variantPreview' && typeof window.closeVariantPreviewModal === 'function') window.closeVariantPreviewModal(true);
            else if (m === 'terms' && typeof window.closeTermsModal === 'function') window.closeTermsModal(true);
            else if (m === 'privacy' && typeof window.closePrivacyModal === 'function') window.closePrivacyModal(true);
            else if (m === 'askQuestion' && typeof window.closeAskQuestionModal === 'function') window.closeAskQuestionModal(true);
            else if (m === 'quickVariant' && typeof window.closeQuickVariantSheet === 'function') window.closeQuickVariantSheet(true);
            else if (m === 'adminFAQ' && typeof window.closeAdminFAQModal === 'function') window.closeAdminFAQModal(true);
        } else {
            const state = e.state || {};
            const v = state.view || null;
            const isAdminLoggedIn = window.isAdm || window.__localIsAdm;

            if (isAdminLoggedIn) {
                if (v === 'view-admin') {
                    changeView('view-admin', true);
                    if (state.tab && typeof window.openAdminTab === 'function') window.openAdminTab(state.tab, true);
                    else if (typeof window.openAdminMenu === 'function') window.openAdminMenu();
                } else {
                    history.pushState({ view: 'view-admin' }, '', window.location.href);
                    if (typeof window.showConfirm === 'function') {
                        window.showConfirm(
                            "Keluar Seller",
                            "Apakah anda akan keluar dari dashboard seller?",
                            () => { if (typeof window.logoutAdmin === 'function') window.logoutAdmin(); },
                            "Ya, Keluar",
                            true
                        );
                    }
                }
            } else {
                if (v) {
                    let targetView = v;
                    if (v === 'view-admin') targetView = 'view-admin-login';
                    changeView(targetView, true);
                } else {
                    changeView('view-catalog', true);
                }
            }
        }
    });
};

// ─── Expose ke window untuk navigasi inline HTML ──────
window.pushModalHistory = pushModalHistory;
window.requestCloseModal = requestCloseModal;
window.changeView = changeView;
window.setupHistoryRouter = setupHistoryRouter;
window.onBottomNavClick = onBottomNavClick;
window.updateBottomNav = updateBottomNav;
window.initPullToRefresh = initPullToRefresh;
try {
    Object.defineProperty(window, 'curViewName', {
        get: () => curViewName,
        set: (v) => { curViewName = v; },
        configurable: true
    });
} catch(e) {}

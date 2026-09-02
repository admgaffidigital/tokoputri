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
};

/**
 * Pasang router listener popstate
 */
export const setupHistoryRouter = () => {
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

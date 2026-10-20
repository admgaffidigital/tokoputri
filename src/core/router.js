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
export let isProgrammaticModalClose = false;
let programmaticCloseTimer = null;
export let viewHistoryStack = ['view-catalog'];

/**
 * Mendaftarkan modal yang dibuka ke riwayat browser
 */
export const pushModalHistory = (name) => {
    if (oMods.length > 0 && oMods[oMods.length - 1] === name) {
        return; // Sudah terdaftar sebagai modal aktif teratas
    }
    if (typeof history !== 'undefined' && typeof window !== 'undefined') {
        if (history.state && history.state.modal === name) {
            if (!oMods.includes(name)) oMods.push(name);
            return;
        }
        history.pushState({ modal: name }, '', window.location.href);
    }
    oMods.push(name);
};

/**
 * Mengganti modal aktif di stack dan riwayat tanpa memicu race-condition history.back()
 */
export const replaceModalHistory = (oldName, newName) => {
    const idx = oMods.lastIndexOf(oldName);
    if (idx > -1) {
        oMods[idx] = newName;
    } else if (!oMods.includes(newName)) {
        oMods.push(newName);
    }
    if (typeof history !== 'undefined' && typeof window !== 'undefined') {
        try {
            history.replaceState({ modal: newName }, '', window.location.href);
        } catch (e) {}
    }
};

/**
 * Menutup modal dengan aman sesuai navigasi History API
 */
export const requestCloseModal = (name, fH, doClose) => {
    const idx = oMods.lastIndexOf(name);
    if (idx > -1) {
        oMods.splice(idx, 1);
    }
    if (!fH) {
        isProgrammaticModalClose = true;
        if (programmaticCloseTimer) clearTimeout(programmaticCloseTimer);
        programmaticCloseTimer = setTimeout(() => {
            isProgrammaticModalClose = false;
        }, 300);
        try { 
            if (typeof history !== 'undefined') history.back(); 
        } catch(e) {
            isProgrammaticModalClose = false;
        }
    }
    if (typeof doClose === 'function') doClose();
};

/**
 * Berpindah tampilan layar (View Switching)
 */
export const changeView = (v, fH = false) => {
    if (!v) return;
    if (v === curViewName) return; // Hindari duplikasi ke view yang sama
    
    if (!fH) {
        if (typeof history !== 'undefined' && typeof window !== 'undefined') {
            history.pushState({ view: v }, '', window.location.href);
        }
        if (v === 'view-catalog') {
            viewHistoryStack = ['view-catalog'];
        } else {
            viewHistoryStack.push(v);
        }
    } else {
        const lastIdx = viewHistoryStack.lastIndexOf(v);
        if (lastIdx > -1) {
            viewHistoryStack = viewHistoryStack.slice(0, lastIdx + 1);
        } else {
            viewHistoryStack = ['view-catalog', v];
        }
    }
    
    // Simpan posisi scroll tampilan sebelumnya
    const prevT = el(curViewName);
    if (prevT) {
        const prevS = prevT.querySelector('.scroll-content');
        if (prevS) viewScrollPos[curViewName] = prevS.scrollTop;
    }

    if (curViewName === 'view-orders' && v !== 'view-orders' && typeof window.detachMyOrdersRealtime === 'function') {
        window.detachMyOrdersRealtime();
    }
    if (curViewName === 'view-pos-cashier' && v !== 'view-pos-cashier') {
        if (typeof window.destroyBarcodeListener === 'function') window.destroyBarcodeListener();
        if (typeof window.detachPOSHistoryListener === 'function') window.detachPOSHistoryListener();
        if (typeof window.releaseScreenWakeLock === 'function') window.releaseScreenWakeLock('pos_cashier');
    }
    if (curViewName === 'view-admin' && v !== 'view-admin') {
        const adminView = el('view-admin');
        if (adminView) adminView.classList.remove('admin-pos-mode');
        if (typeof window.detachPOSHistoryListener === 'function') window.detachPOSHistoryListener();
    }
    if (curViewName === 'view-admin-login' && v !== 'view-admin-login') {
        const u = el('login-username');
        const p = el('login-password');
        if (u) u.value = '';
        if (p) p.value = '';
    }
    if (v === 'view-pos-cashier') {
        if (typeof window.requestScreenWakeLock === 'function') window.requestScreenWakeLock('pos_cashier');
    }
    
    const t = el(v);
    if (t) {
        // Tentukan animasi transisi native app cerdas
        const isBack = Boolean(fH);
        const isModalLike = (v === 'view-pos-cashier' || v === 'view-admin-login');
        const animClass = isModalLike ? 'view-transition-scale' : (isBack ? 'view-transition-backward' : 'view-transition-forward');

        t.classList.remove('hidden', 'view-transition-forward', 'view-transition-backward', 'view-transition-scale', 'fade-in');
        t.classList.add('flex', animClass);

        const cleanAnim = () => {
            t.classList.remove('view-transition-forward', 'view-transition-backward', 'view-transition-scale');
            t.removeEventListener('animationend', cleanAnim);
        };
        t.addEventListener('animationend', cleanAnim, { once: true });
        setTimeout(cleanAnim, 260);
    }
    
    document.querySelectorAll('.view-section').forEach(e => {
        if (e !== t) {
            e.classList.add('hidden');
            e.classList.remove('flex', 'view-transition-forward', 'view-transition-backward', 'view-transition-scale');
        }
    });

    // Sembunyikan FAB Scroll-to-Top seketika saat berpindah tampilan layar
    if (typeof window.hideFloatingScrollTop === 'function') {
        window.hideFloatingScrollTop();
    } else {
        const stBtn = document.getElementById('native-scroll-top-btn');
        if (stBtn) {
            stBtn.classList.add('opacity-0', 'translate-y-3');
            stBtn.classList.add('hidden');
        }
    }
        
    if (t) {
        if (v === 'view-cart' && typeof window.renderCart === 'function') window.renderCart();
        else if (v === 'view-checkout' && typeof window.rChck === 'function') window.rChck();
        else if (v === 'view-payment' && typeof window.rPay === 'function') window.rPay();
        else if (v === 'view-wishlist' && typeof window.renderWish === 'function') window.renderWish();
        else if (v === 'view-orders' && typeof window.renderMyOrders === 'function') window.renderMyOrders();
        else if (v === 'view-faq' && typeof window.renderStorefrontFAQ === 'function') window.renderStorefrontFAQ();
        else if (v === 'view-pos-cashier') {
            // Lazy-load modul POS storefront saat pertama kali dibuka
            import('../modules/pos/pos.js').then(m => {
                if (typeof m.renderPOSStorefront === 'function') m.renderPOSStorefront();
            }).catch(e => console.error('[POS] Gagal memuat storefront:', e));
        } else if (v === 'view-admin') {
            if (typeof window.renderSubscriptionNoticeInCMS === 'function') window.renderSubscriptionNoticeInCMS();
            if (typeof initPullToRefresh === 'function') initPullToRefresh();
        } else if (v === 'view-admin-login') {
            const u = el('login-username');
            const p = el('login-password');
            if (u && document.activeElement !== u) u.value = '';
            if (p && document.activeElement !== p) p.value = '';
        }
        
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

    // Sembunyikan bilah navigasi di view checkout, pembayaran, login admin, dashboard admin, dan POS kasir
    const hiddenViews = ['view-cart', 'view-checkout', 'view-payment', 'view-admin-login', 'view-admin', 'view-pos-cashier'];
    if (hiddenViews.includes(v)) {
        bNav.classList.add('bnav-hidden', 'translate-y-[250%]', 'opacity-0', 'pointer-events-none');
        bNav.classList.remove('translate-y-0', 'opacity-100');
        return;
    }

    bNav.classList.remove('bnav-hidden', 'translate-y-[250%]', 'opacity-0', 'pointer-events-none');
    bNav.classList.add('translate-y-0', 'opacity-100');

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
 * Inisialisasi Native Pull-to-Refresh untuk layar mobile & CMS Admin
 * Mendukung Storefront (#view-catalog), CMS Admin (#view-admin), dan Riwayat Pesanan (#view-orders)
 */
export const initPullToRefresh = () => {
    const indicator = el('pull-to-refresh-indicator');
    const icon = el('ptr-icon');
    const text = el('ptr-text');
    if (!indicator) return;

    let isRefreshing = false;
    const threshold = 65;

    // Fungsi eksekusi sinkronisasi terpadu
    const executeRefresh = async (type = 'catalog') => {
        if (isRefreshing) return;
        isRefreshing = true;

        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('medium');
        indicator.classList.add('visible');

        if (icon) {
            icon.className = 'fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]';
            icon.style.transform = '';
        }

        const adminRefreshBtnIcon = document.getElementById('admin-refresh-icon');
        if (adminRefreshBtnIcon) adminRefreshBtnIcon.classList.add('fa-spin');

        if (text) {
            text.innerText = type === 'admin' 
                ? 'Menyinkronkan data CMS...' 
                : (type === 'orders' ? 'Menyinkronkan riwayat pesanan...' : 'Menyinkronkan katalog...');
        }

        try {
            // 1. Sinkronisasi metadata toko / cloud data
            if (typeof window.syncAppMeta === 'function') {
                await window.syncAppMeta();
            } else if (typeof window.loadAppData === 'function') {
                await window.loadAppData();
            }

            if (type === 'admin') {
                // Refresh modul / tab CMS yang aktif
                const adminContent = el('admin-content-view');
                const isContentActive = adminContent && !adminContent.classList.contains('hidden');
                const curTab = window.cTab;

                if (isContentActive && curTab) {
                    if (typeof window.openAdminTab === 'function') {
                        window.openAdminTab(curTab, true);
                    }
                } else {
                    if (typeof window.renderSubscriptionNoticeInCMS === 'function') {
                        window.renderSubscriptionNoticeInCMS();
                    }
                    if (typeof window.openAdminMenu === 'function') {
                        window.openAdminMenu();
                    }
                }
                if (typeof window.rDyn === 'function') window.rDyn();

                if (text) text.innerText = 'Data CMS Berhasil Disinkron!';
            } else if (type === 'orders') {
                if (typeof window.renderMyOrders === 'function') window.renderMyOrders();
                if (text) text.innerText = 'Riwayat Pesanan Diperbarui!';
            } else {
                if (typeof window.rCat === 'function') window.rCat();
                if (typeof window.rDyn === 'function') window.rDyn();
                if (text) text.innerText = 'Katalog Terkini Disinkron!';
            }

            if (icon) icon.className = 'fa-solid fa-circle-check text-emerald-500';
            if (typeof window.triggerHaptic === 'function') window.triggerHaptic('success');
        } catch (e) {
            console.error('[PullToRefresh] Error refreshing data:', e);
            if (text) text.innerText = 'Gagal sinkron data';
            if (icon) icon.className = 'fa-solid fa-circle-exclamation text-rose-500';
        } finally {
            if (adminRefreshBtnIcon) adminRefreshBtnIcon.classList.remove('fa-spin');
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
    };

    // Helper untuk memasang event pull gesture ke kontainer scroll
    const attachPullEvents = (sc, type) => {
        if (!sc || sc.__hasPtrAttached) return;
        sc.__hasPtrAttached = true;

        let startY = 0;
        let currentY = 0;
        let isPulling = false;

        sc.addEventListener('touchstart', e => {
            // Jika ada modal aktif yang terbuka di stack, jangan aktifkan pull-to-refresh latar belakang
            if (oMods && oMods.length > 0) return;
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
                    text.innerText = diff >= threshold 
                        ? 'Lepaskan untuk segarkan' 
                        : (type === 'admin' ? 'Tarik ke bawah untuk refresh CMS' : 'Tarik ke bawah untuk refresh');
                }
            } else if (diff <= 15) {
                indicator.classList.remove('visible');
            }
        }, { passive: true });

        sc.addEventListener('touchend', async () => {
            if (!isPulling || isRefreshing) return;
            isPulling = false;
            const diff = currentY - startY;

            if (diff >= threshold && sc.scrollTop <= 5) {
                await executeRefresh(type);
            } else {
                indicator.classList.remove('visible');
                if (icon) icon.style.transform = '';
            }
        });
    };

    // Pasang pada Storefront, CMS Admin, dan Riwayat Pesanan
    const catalogSc = document.querySelector('#view-catalog .scroll-content');
    if (catalogSc) attachPullEvents(catalogSc, 'catalog');

    const adminSc = document.querySelector('#view-admin .scroll-content');
    if (adminSc) attachPullEvents(adminSc, 'admin');

    const ordersSc = document.querySelector('#view-orders .scroll-content');
    if (ordersSc) attachPullEvents(ordersSc, 'orders');

    // Ekspos method pemanggilan programatis
    window.triggerAdminPullToRefresh = () => executeRefresh('admin');
    window.triggerStorefrontPullToRefresh = () => executeRefresh('catalog');
    window.executePullToRefresh = executeRefresh;
};

/**
 * Peta Elemen Modal Sistem (Multi-ID & Dual-Naming Tolerant)
 * Menampung seluruh nama modal dan kandidat ID elemen di DOM
 */
export const MODAL_ELEMENT_MAP = {
    product: ['product-modal'],
    category: ['category-modal'],
    brand: ['brand-modal'],
    admin: ['admin-modal'],
    adminOrder: ['admin-order-modal'],
    receipt: ['receipt-preview-modal'],
    docPreview: ['doc-preview-modal'],
    scanner: ['scanner-modal'],
    confirm: ['custom-confirm-modal'],
    customerOrder: ['order-detail-modal', 'customer-order-detail-modal'],
    restock: ['restock-modal'],
    quickprice: ['quickprice-modal'],
    member: ['member-modal'],
    prompt: ['custom-prompt-container', 'custom-prompt-modal'],
    review: ['review-modal'],
    quickmenu: ['quickmenu-modal'],
    variantPreview: ['variant-preview-modal'],
    terms: ['terms-modal'],
    privacy: ['privacy-modal'],
    askQuestion: ['modal-ask-question', 'ask-question-modal'],
    quickVariant: ['quick-variant-modal'],
    adminFAQ: ['modal-admin-faq', 'admin-faq-modal'],
    printerSettings: ['printer-settings-modal'],
    exitConfirm: ['exit-confirm-modal'],
    appDownload: ['app-download-modal'],
    voucher: ['voucher-modal'],
    guide: ['shopping-guide-modal'],
    changelog: ['changelog-modal'],
    guarantee: ['guarantee-modal', 'quality-guarantee-modal'],
    security: ['security-modal'],
    posVariantSheet: ['pos-variant-sheet'],
    posLogin: ['pos-login-modal'],
    posCartDrawer: ['pos-mobile-cart-drawer', 'pos-cart-drawer'],
    posPayment: ['pos-pay-modal', 'pos-payment-modal'],
    posOpenShift: ['pos-open-shift-modal', 'modal-pos-open-shift'],
    posCloseShift: ['pos-close-shift-modal', 'modal-pos-close-shift'],
    posShiftSummary: ['pos-shift-summary-modal', 'modal-pos-shift-summary'],
    posCashMovement: ['pos-cash-movement-modal', 'modal-pos-cash-movement'],
    clientTempoPay: ['modal-client-tempo-pay'],
    clientPaySuccess: ['modal-client-pay-success'],
    tempoConfirmations: ['modal-tempo-confirmations'],
    thermalPreview: ['utp-thermal-modal'],
    htmlPreview: ['utp-html-modal'],
    addStaff: ['add-staff-modal', 'modal-add-staff'],
    permissions: ['permissions-modal', 'modal-permissions'],
    editStaff: ['edit-staff-modal', 'modal-edit-staff'],
    soFinalize: ['modal-so-finalize', 'so-finalize-modal'],
    soHistory: ['modal-so-history-detail', 'modal-so-history', 'so-history-modal'],
    preRestore: ['modal-pre-restore-inspector'],
    heroBanner: ['admin-hero-banner-modal', 'hero-banner-modal'],
    renewal: ['renewal-input-modal'],
    purchaseForm: ['modal-po-form', 'po-form-modal'],
    purchasePicker: ['modal-po-product-picker', 'po-product-picker-modal'],
    purchaseDetail: ['modal-po-detail', 'po-detail-modal'],
    purchasePayment: ['modal-po-payment', 'po-payment-modal'],
    supplierForm: ['modal-supplier-form', 'supplier-form-modal'],
    supplierDetail: ['modal-supplier-detail', 'supplier-detail-modal'],
    posHoldPrompt: ['pos-hold-prompt-modal', 'pos-hold-prompt'],
    posHeldModal: ['pos-held-list-modal', 'pos-held-modal'],
    posCameraScanner: ['pos-camera-scanner-modal', 'pos-camera-scanner'],
    posReceiptFallback: ['pos-receipt-fallback-modal'],
    posShiftReceipt: ['pos-shift-receipt-modal'],
    posLogoutShift: ['pos-logout-shift-modal'],
    colorFloat: ['color-float-modal'],
    tempoDetail: ['modal-tempo-detail', 'tempo-detail-modal'],
    tempoPayment: ['modal-tempo-payment', 'tempo-payment-modal'],
    tempoPenalty: ['modal-tempo-penalty', 'tempo-penalty-modal'],
    expenseForm: ['modal-expense-form', 'expense-modal'],
    expenseReceipt: ['modal-expense-receipt-preview'],
    sessionKicked: ['session-kicked-modal'],
    productFifo: ['modal-product-fifo', 'product-fifo-modal'],
    productBarcodeLabel: ['modal-product-barcode-label', 'product-barcode-label-modal'],
    materialEstimator: ['modal-material-estimator', 'material-estimator-modal'],
    salesReturn: ['modal-sales-return', 'sales-return-modal'],
    vendorReturn: ['modal-vendor-return', 'vendor-return-modal'],
    deliveryOrder: ['modal-delivery-order', 'delivery-order-modal'],
    deliverySignature: ['modal-delivery-signature', 'delivery-signature-modal'],
    flashSaleForm: ['modal-flash-sale-form', 'flash-sale-form-modal'],
    factoryReset: ['modal-factory-reset', 'factory-reset-modal'],
    priceListExport: ['modal-pricelist-export', 'pricelist-export-modal'],
    ownerHr: ['modal-owner-hr', 'owner-hr-modal'],
    advanceForm: ['modal-salary-advance-form', 'salary-advance-modal'],
    advanceDetail: ['modal-salary-advance-detail'],
    payrollItemForm: ['modal-payroll-item-form', 'payroll-item-modal'],
    payslipPreview: ['modal-payslip-preview', 'payslip-preview-modal']
};

/**
 * Periksa apakah modal tertentu sedang aktif & terlihat di DOM
 */
export const isModalOpenInDOM = (name) => {
    const targets = MODAL_ELEMENT_MAP[name];
    if (!targets) return false;
    const targetIds = Array.isArray(targets) ? targets : [targets];

    for (const targetId of targetIds) {
        const domEl = document.getElementById(targetId);
        if (!domEl) continue;

        if (domEl.classList.contains('hidden') || domEl.classList.contains('pointer-events-none')) continue;
        if (domEl.style.display === 'none' || domEl.style.visibility === 'hidden') continue;

        try {
            const comp = window.getComputedStyle(domEl);
            if (comp.display === 'none' || comp.visibility === 'hidden') continue;
        } catch (e) {}

        return true;
    }

    return false;
};

/**
 * Tutup modal spesifik berdasarkan nama registrasinya (LIFO Stack)
 */
export const closeModalByName = (m) => {
    switch (m) {
        case 'product':
            if (typeof window.closeProductModal === 'function') { window.closeProductModal(true); return true; }
            break;
        case 'category':
            if (typeof window.closeCategoryModal === 'function') { window.closeCategoryModal(true); return true; }
            break;
        case 'brand':
            if (typeof window.closeBrandModal === 'function') { window.closeBrandModal(true); return true; }
            break;
        case 'admin':
            if (typeof window.closeAdminModal === 'function') { window.closeAdminModal(true); return true; }
            break;
        case 'adminOrder':
            if (typeof window.closeOrderDetailModal === 'function') { window.closeOrderDetailModal(true); return true; }
            break;
        case 'receipt':
            if (typeof window.closeReceiptPreviewModal === 'function') { window.closeReceiptPreviewModal(true); return true; }
            break;
        case 'docPreview':
            if (typeof window.closeDocPreviewModal === 'function') { window.closeDocPreviewModal(true); return true; }
            break;
        case 'scanner':
            if (typeof window.closeCameraScanner === 'function') { window.closeCameraScanner(true); return true; }
            break;
        case 'confirm':
            if (typeof window.closeConfirm === 'function') { window.closeConfirm(true); return true; }
            break;
        case 'customerOrder':
            if (typeof window.closeCustomerOrderDetailModal === 'function') { window.closeCustomerOrderDetailModal(true); return true; }
            break;
        case 'restock':
            if (typeof window.closeRestockModal === 'function') { window.closeRestockModal(true); return true; }
            break;
        case 'quickprice':
            if (typeof window.closeQuickPriceModal === 'function') { window.closeQuickPriceModal(true); return true; }
            break;
        case 'member':
            if (typeof window.closeMemberModal === 'function') { window.closeMemberModal(true); return true; }
            break;
        case 'prompt':
            if (typeof window.closePrompt === 'function') { window.closePrompt(true); return true; }
            break;
        case 'review':
            if (typeof window.closeReviewModal === 'function') { window.closeReviewModal(true); return true; }
            break;
        case 'quickmenu':
            if (typeof window.closeQuickMenuModal === 'function') { window.closeQuickMenuModal(true); return true; }
            break;
        case 'variantPreview':
            if (typeof window.closeVariantPreviewModal === 'function') { window.closeVariantPreviewModal(true); return true; }
            break;
        case 'terms':
            if (typeof window.closeTermsModal === 'function') { window.closeTermsModal(true); return true; }
            break;
        case 'privacy':
            if (typeof window.closePrivacyModal === 'function') { window.closePrivacyModal(true); return true; }
            break;
        case 'askQuestion':
            if (typeof window.closeAskQuestionModal === 'function') { window.closeAskQuestionModal(true); return true; }
            break;
        case 'quickVariant':
            if (typeof window.closeQuickVariantSheet === 'function') { window.closeQuickVariantSheet(true); return true; }
            break;
        case 'adminFAQ':
            if (typeof window.closeAdminFAQModal === 'function') { window.closeAdminFAQModal(true); return true; }
            break;
        case 'printerSettings':
            if (typeof window.closePrinterSettingsModal === 'function') { window.closePrinterSettingsModal(true); return true; }
            break;
        case 'exitConfirm':
            if (typeof window.closeExitConfirmModal === 'function') { window.closeExitConfirmModal(true); return true; }
            break;
        case 'appDownload':
            if (typeof window.closeAppDownloadModal === 'function') { window.closeAppDownloadModal(true); return true; }
            break;
        case 'voucher':
            if (typeof window.closeVoucherModal === 'function') { window.closeVoucherModal(true); return true; }
            break;
        case 'guide':
            if (typeof window.closeShoppingGuideModal === 'function') { window.closeShoppingGuideModal(true); return true; }
            break;
        case 'changelog':
            if (typeof window.closeChangelogModal === 'function') { window.closeChangelogModal(true); return true; }
            break;
        case 'guarantee':
            if (typeof window.closeQualityGuaranteeModal === 'function') { window.closeQualityGuaranteeModal(true); return true; }
            break;
        case 'security':
            if (typeof window.closeSecurityModal === 'function') { window.closeSecurityModal(true); return true; }
            break;
        case 'posVariantSheet':
            if (typeof window.closePOSVariantSheet === 'function') { window.closePOSVariantSheet(true); return true; }
            break;
        case 'posLogin':
            if (typeof window.closePOSLoginModal === 'function') { window.closePOSLoginModal(true); return true; }
            break;
        case 'posCartDrawer':
            if (typeof window.closePOSCartDrawer === 'function') { window.closePOSCartDrawer(true); return true; }
            break;
        case 'posPayment':
            if (typeof window.closePayModal === 'function') { window.closePayModal(true); return true; }
            break;
        case 'posOpenShift':
            if (typeof window.closePOSOpenShiftModal === 'function') { window.closePOSOpenShiftModal(true); return true; }
            break;
        case 'posCloseShift':
            if (typeof window.closePOSCloseShiftModal === 'function') { window.closePOSCloseShiftModal(true); return true; }
            break;
        case 'posShiftSummary':
            if (typeof window.closePOSShiftSummaryModal === 'function') { window.closePOSShiftSummaryModal(true); return true; }
            break;
        case 'posCashMovement':
            if (typeof window.closePOSCashMovementModal === 'function') { window.closePOSCashMovementModal(true); return true; }
            break;
        case 'clientTempoPay':
            if (typeof window.closeClientTempoPayModal === 'function') { window.closeClientTempoPayModal(true); return true; }
            if (typeof window.closeClientPaymentModal === 'function') { window.closeClientPaymentModal(true); return true; }
            break;
        case 'clientPaySuccess':
            if (typeof window.closeClientPaymentSuccessModal === 'function') { window.closeClientPaymentSuccessModal(true); return true; }
            break;
        case 'tempoConfirmations':
            if (typeof window.closeTempoConfirmationsModal === 'function') { window.closeTempoConfirmationsModal(true); return true; }
            break;
        case 'thermalPreview':
            if (typeof window.closeThermalPrintPreview === 'function') { window.closeThermalPrintPreview(true); return true; }
            if (typeof window.closeThermalPreviewModal === 'function') { window.closeThermalPreviewModal(true); return true; }
            document.getElementById('utp-thermal-modal')?.remove();
            return true;
        case 'htmlPreview':
            if (typeof window.closeHtmlPrintPreview === 'function') { window.closeHtmlPrintPreview(true); return true; }
            if (typeof window.closeHtmlPreviewModal === 'function') { window.closeHtmlPreviewModal(true); return true; }
            document.getElementById('utp-html-modal')?.remove();
            return true;
        case 'posReceiptFallback':
            if (typeof window.closePOSReceiptFallbackModal === 'function') { window.closePOSReceiptFallbackModal(true); return true; }
            document.getElementById('pos-receipt-fallback-modal')?.remove();
            return true;
        case 'posShiftReceipt':
            if (typeof window.closePOSShiftReceiptModal === 'function') { window.closePOSShiftReceiptModal(true); return true; }
            document.getElementById('pos-shift-receipt-modal')?.remove();
            return true;
        case 'addStaff':
            if (typeof window.closeAddStaffModal === 'function') { window.closeAddStaffModal(true); return true; }
            break;
        case 'permissions':
            if (typeof window.closePermissionsModal === 'function') { window.closePermissionsModal(true); return true; }
            break;
        case 'editStaff':
            if (typeof window.closeEditStaffModal === 'function') { window.closeEditStaffModal(true); return true; }
            break;
        case 'ownerHr':
            if (typeof window.closeOwnerHrModal === 'function') { window.closeOwnerHrModal(true); return true; }
            break;
        case 'advanceForm':
            if (typeof window.closeSalaryAdvanceFormModal === 'function') { window.closeSalaryAdvanceFormModal(true); return true; }
            break;
        case 'advanceDetail':
            if (typeof window.closeAdvanceDetailModal === 'function') { window.closeAdvanceDetailModal(true); return true; }
            break;
        case 'payrollItemForm':
            if (typeof window.closePayrollItemModal === 'function') { window.closePayrollItemModal(true); return true; }
            break;
        case 'payslipPreview':
            if (typeof window.closePayslipPreviewModal === 'function') { window.closePayslipPreviewModal(true); return true; }
            break;
        case 'soFinalize':
            if (typeof window.closeSOFinalizeModal === 'function') { window.closeSOFinalizeModal(true); return true; }
            if (typeof window.closeFinalizeModal === 'function') { window.closeFinalizeModal(true); return true; }
            break;
        case 'soHistory':
            if (typeof window.closeSOHistoryModal === 'function') { window.closeSOHistoryModal(true); return true; }
            if (typeof window.closeSoHistoryModal === 'function') { window.closeSoHistoryModal(true); return true; }
            break;
        case 'preRestore':
            if (typeof window.closePreRestoreModal === 'function') { window.closePreRestoreModal(true); return true; }
            break;
        case 'heroBanner':
            if (typeof window.closeHeroBannerModal === 'function') { window.closeHeroBannerModal(true); return true; }
            break;
        case 'renewal':
            if (typeof window.closeRenewalModal === 'function') { window.closeRenewalModal(true); return true; }
            break;
        case 'purchaseForm':
            if (typeof window.closeCreatePOModal === 'function') { window.closeCreatePOModal(true); return true; }
            break;
        case 'purchasePicker':
            if (typeof window.closePOProductPicker === 'function') { window.closePOProductPicker(true); return true; }
            break;
        case 'purchaseDetail':
            if (typeof window.closePurchaseDetailModal === 'function') { window.closePurchaseDetailModal(true); return true; }
            break;
        case 'purchasePayment':
            if (typeof window.closePurchasePaymentModal === 'function') { window.closePurchasePaymentModal(true); return true; }
            break;
        case 'supplierForm':
            if (typeof window.closeSupplierFormModal === 'function') { window.closeSupplierFormModal(true); return true; }
            break;
        case 'supplierDetail':
            if (typeof window.closeSupplierDetailModal === 'function') { window.closeSupplierDetailModal(true); return true; }
            break;
        case 'posHoldPrompt':
            if (typeof window.closePOSHoldPrompt === 'function') { window.closePOSHoldPrompt(true); return true; }
            break;
        case 'posHeldModal':
            if (typeof window.closePOSHeldModal === 'function') { window.closePOSHeldModal(true); return true; }
            break;
        case 'posCameraScanner':
            if (typeof window.closePOSCameraScanner === 'function') { window.closePOSCameraScanner(true); return true; }
            break;
        case 'tempoDetail':
            if (typeof window.closeTempoDetailModal === 'function') { window.closeTempoDetailModal(true); return true; }
            break;
        case 'tempoPayment':
            if (typeof window.closeTempoPaymentModal === 'function') { window.closeTempoPaymentModal(true); return true; }
            break;
        case 'tempoPenalty':
            if (typeof window.closeTempoPenaltyModal === 'function') { window.closeTempoPenaltyModal(true); return true; }
            break;
        case 'expenseForm':
            if (typeof window.closeExpenseModal === 'function') { window.closeExpenseModal(true); return true; }
            break;
        case 'expenseReceipt':
            if (typeof window.closeExpenseReceiptPreview === 'function') { window.closeExpenseReceiptPreview(true); return true; }
            break;
        case 'colorFloat':
            if (typeof window._closeColorFloatModal === 'function') { window._closeColorFloatModal(true); return true; }
            document.getElementById('color-float-modal')?.remove();
            return true;
        case 'posLogoutShift':
            document.getElementById('pos-logout-shift-modal')?.remove();
            return true;
        case 'sessionKicked':
            if (typeof window.closeSessionKickedModal === 'function') { window.closeSessionKickedModal(true); return true; }
            document.getElementById('session-kicked-modal')?.remove();
            return true;
        case 'productFifo':
            if (typeof window.closeProductFifoModal === 'function') { window.closeProductFifoModal(true); return true; }
            break;
        case 'productBarcodeLabel':
            if (typeof window.closeProductBarcodeLabelModal === 'function') { window.closeProductBarcodeLabelModal(true); return true; }
            break;
        case 'materialEstimator':
            if (typeof window.closeMaterialEstimatorModal === 'function') { window.closeMaterialEstimatorModal(true); return true; }
            break;
        case 'salesReturn':
            if (typeof window.closeSalesReturnModal === 'function') { window.closeSalesReturnModal(true); return true; }
            break;
        case 'vendorReturn':
            if (typeof window.closeVendorReturnModal === 'function') { window.closeVendorReturnModal(true); return true; }
            break;
        case 'deliveryOrder':
            if (typeof window.closeDeliveryModal === 'function') { window.closeDeliveryModal(true); return true; }
            break;
        case 'deliverySignature':
            if (typeof window.closeDeliverySignatureModal === 'function') { window.closeDeliverySignatureModal(true); return true; }
            break;
        case 'flashSaleForm':
            if (typeof window.closeFlashSaleModal === 'function') { window.closeFlashSaleModal(true); return true; }
            break;
        case 'factoryReset':
            if (typeof window.closeFactoryResetModal === 'function') { window.closeFactoryResetModal(true); return true; }
            break;
        case 'priceListExport':
            if (typeof window.closePriceListExportModal === 'function') { window.closePriceListExportModal(true); return true; }
            break;
        default:
            break;
    }

    // Fail-safe DOM fallback jika fungsi spesifik modul belum siap
    const targetCandidates = MODAL_ELEMENT_MAP[m] || [];
    const idList = Array.isArray(targetCandidates) ? targetCandidates : [targetCandidates];
    for (const targetId of idList) {
        const domEl = document.getElementById(targetId);
        if (domEl) {
            const removeImmediately = [
                'utp-thermal-modal', 'utp-html-modal', 'pos-receipt-fallback-modal',
                'pos-shift-receipt-modal', 'pos-hold-prompt-modal', 'pos-held-list-modal',
                'pos-camera-scanner-modal', 'color-float-modal', 'pos-logout-shift-modal',
                'custom-prompt-container'
            ];
            if (removeImmediately.includes(targetId)) {
                domEl.remove();
                return true;
            }
            if (!domEl.classList.contains('hidden')) {
                domEl.classList.add('hidden');
                domEl.style.display = 'none';
                return true;
            }
        }
    }

    return false;
};

/**
 * Universal LIFO Modal Closer & Fallback Active DOM Scanner
 * Menutup modal paling atas secara berurutan dan mengeliminasi modal yatim/macet.
 * @param {boolean} fromPopState - true jika dipicu dari event popstate browser
 */
export const closeTopmostOpenModal = (fromPopState = false) => {
    // Sinkronkan riwayat browser/webview jika penutupan dipicu dari hardware back button (bukan popstate)
    const syncHistoryAfterClose = () => {
        if (!fromPopState && typeof history !== 'undefined' && history.state && history.state.modal) {
            isProgrammaticModalClose = true;
            if (programmaticCloseTimer) clearTimeout(programmaticCloseTimer);
            programmaticCloseTimer = setTimeout(() => {
                isProgrammaticModalClose = false;
            }, 300);
            try { history.back(); } catch (e) { isProgrammaticModalClose = false; }
        }
    };

    // 0a. PRIORITAS UTAMA: Deteksi & Tutup Tampilan Preview Nota, Struk & Dokumen Aktif
    // Menjamin jika preview struk/nota/dokumen terbuka, tombol back HP langsung menutupnya seketika tanpa perlu menekan tombol Batal.
    const previewModalCheckers = [
        {
            id: 'utp-thermal-modal',
            close: () => {
                if (typeof window.closeThermalPrintPreview === 'function') window.closeThermalPrintPreview(true);
                else if (typeof window.closeThermalPreviewModal === 'function') window.closeThermalPreviewModal(true);
                else document.getElementById('utp-thermal-modal')?.remove();
            }
        },
        {
            id: 'utp-html-modal',
            close: () => {
                if (typeof window.closeHtmlPrintPreview === 'function') window.closeHtmlPrintPreview(true);
                else if (typeof window.closeHtmlPreviewModal === 'function') window.closeHtmlPreviewModal(true);
                else document.getElementById('utp-html-modal')?.remove();
            }
        },
        {
            id: 'pos-receipt-fallback-modal',
            close: () => {
                if (typeof window.closePOSReceiptFallbackModal === 'function') window.closePOSReceiptFallbackModal(true);
                else document.getElementById('pos-receipt-fallback-modal')?.remove();
            }
        },
        {
            id: 'pos-shift-receipt-modal',
            close: () => {
                if (typeof window.closePOSShiftReceiptModal === 'function') window.closePOSShiftReceiptModal(true);
                else document.getElementById('pos-shift-receipt-modal')?.remove();
            }
        },
        {
            id: 'receipt-preview-modal',
            isOpen: (el) => !el.classList.contains('hidden'),
            close: () => {
                if (typeof window.closeReceiptPreviewModal === 'function') window.closeReceiptPreviewModal(true);
                else document.getElementById('receipt-preview-modal')?.classList.add('hidden');
            }
        },
        {
            id: 'doc-preview-modal',
            isOpen: (el) => !el.classList.contains('hidden'),
            close: () => {
                if (typeof window.closeDocPreviewModal === 'function') window.closeDocPreviewModal(true);
                else document.getElementById('doc-preview-modal')?.classList.add('hidden');
            }
        },
        {
            id: 'modal-expense-receipt-preview',
            isOpen: (el) => !el.classList.contains('hidden'),
            close: () => {
                if (typeof window.closeExpenseReceiptPreview === 'function') window.closeExpenseReceiptPreview(true);
                else document.getElementById('modal-expense-receipt-preview')?.classList.add('hidden');
            }
        }
    ];

    for (const p of previewModalCheckers) {
        const pEl = document.getElementById(p.id);
        if (pEl && (p.isOpen ? p.isOpen(pEl) : true)) {
            const mappedName = {
                'utp-thermal-modal': 'thermalPreview',
                'utp-html-modal': 'htmlPreview',
                'pos-receipt-fallback-modal': 'posReceiptFallback',
                'pos-shift-receipt-modal': 'posShiftReceipt',
                'receipt-preview-modal': 'receipt',
                'doc-preview-modal': 'docPreview',
                'modal-expense-receipt-preview': 'expenseReceipt'
            }[p.id];
            if (mappedName) {
                const idx = oMods.lastIndexOf(mappedName);
                if (idx > -1) oMods.splice(idx, 1);
            }
            p.close();
            syncHistoryAfterClose();
            return true;
        }
    }

    // 0b. Tutup dialog overlay / modal transien yang aktif di DOM segera
    const transientIds = [
        'pos-success-modal',
        'pos-recall-confirm-modal',
        'pos-delete-confirm-modal',
        'pos-closed-success-modal',
        'pos-logout-shift-modal',
        'session-kicked-modal'
    ];
    for (const id of transientIds) {
        const tEl = document.getElementById(id);
        if (tEl) {
            tEl.remove();
            syncHistoryAfterClose();
            return true;
        }
    }

    // 1. Periksa stack oMods secara LIFO (hanya modal yang benar-benar terbuka di DOM)
    while (oMods.length > 0) {
        const topModal = oMods.pop();
        if (isModalOpenInDOM(topModal)) {
            closeModalByName(topModal);
            syncHistoryAfterClose();
            return true;
        }
    }

    // 2. Fallback scan jika ada modal di DOM yang terbuka tapi luput dari oMods
    const allKnownModals = [
        'variantPreview', 'quickVariant', 'product',
        'priceListExport',
        'factoryReset',
        'flashSaleForm',
        'deliverySignature', 'deliveryOrder',
        'salesReturn', 'vendorReturn',
        'materialEstimator', 'productBarcodeLabel', 'productFifo', 'sessionKicked', 'exitConfirm',
        'colorFloat', 'posLogoutShift',
        'posReceiptFallback', 'posShiftReceipt',
        'clientPaySuccess', 'clientTempoPay', 'tempoConfirmations',
        'posVariantSheet', 'posLogin', 'posCartDrawer', 'posPayment',
        'posOpenShift', 'posCloseShift', 'posShiftSummary', 'posCashMovement',
        'thermalPreview', 'htmlPreview', 'addStaff', 'permissions', 'editStaff', 'ownerHr',
        'advanceForm', 'advanceDetail',
        'payrollItemForm', 'payslipPreview',
        'soFinalize', 'soHistory', 'preRestore', 'heroBanner', 'renewal',
        'purchasePayment', 'purchaseDetail', 'purchasePicker', 'purchaseForm',
        'supplierDetail', 'supplierForm', 'posHoldPrompt', 'posHeldModal',
        'posCameraScanner', 'tempoPenalty', 'tempoPayment', 'tempoDetail',
        'expenseReceipt', 'expenseForm', 'customerOrder', 'restock', 'quickprice',
        'member', 'review', 'voucher', 'changelog', 'appDownload', 'guarantee',
        'security', 'confirm', 'prompt',
        'printerSettings', 'docPreview', 'receipt', 'adminFAQ', 'adminOrder',
        'admin', 'brand', 'category', 'quickmenu', 'guide', 'terms', 'privacy',
        'scanner', 'askQuestion'
    ];
    for (const name of allKnownModals) {
        if (isModalOpenInDOM(name)) {
            closeModalByName(name);
            syncHistoryAfterClose();
            return true;
        }
    }

    return false;
};

/**
 * Buka Dialog Konfirmasi Keluar Aplikasi (Exit Confirmation Dialog)
 */
export const openExitConfirmModal = () => {
    const m = el('exit-confirm-modal');
    if (!m) return;
    if (m.classList.contains('hidden')) {
        pushModalHistory('exitConfirm');
    }
    m.classList.remove('hidden');
    setTimeout(() => {
        m.classList.remove('opacity-0');
        const box = el('exit-confirm-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

/**
 * Tutup Dialog Konfirmasi Keluar Aplikasi
 */
export const closeExitConfirmModal = (fH = false) => {
    requestCloseModal('exitConfirm', fH, () => {
        const m = el('exit-confirm-modal');
        const box = el('exit-confirm-modal-box');
        if (m) m.classList.add('opacity-0');
        if (box) box.classList.add('scale-95');
        setTimeout(() => {
            if (m) m.classList.add('hidden');
        }, 250);
    });
};

/**
 * Konfirmasi Keluar Aplikasi Native Android / Browser
 */
export const confirmExitApp = () => {
    closeExitConfirmModal(true);
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.exitApp === 'function') {
        window.AndroidNativeApp.exitApp();
    } else if (navigator.app && typeof navigator.app.exitApp === 'function') {
        navigator.app.exitApp();
    } else {
        if (typeof window.showToast === 'function') window.showToast('Sampai jumpa kembali di Toko Putri!');
        setTimeout(() => {
            try { window.close(); } catch(e) {}
        }, 400);
    }
};

/**
 * Penanganan Hardware Back Button Cerdas untuk Android & PWA
 */
export const handleAppBackButton = () => {
    // 1. Jika ada modal yang aktif (baik di stack oMods maupun scanner DOM), tutup segera
    if (closeTopmostOpenModal(false)) {
        return;
    }

    // 2. Jika sedang di dashboard admin (view-admin)
    const isAdminLoggedIn = window.isAdm || window.__localIsAdm;
    if (curViewName === 'view-admin') {
        const adminContentView = el('admin-content-view');
        const adminDashboardView = el('admin-dashboard-view');
        const isInsideAdminTab = Boolean(
            (adminContentView && !adminContentView.classList.contains('hidden')) ||
            (adminDashboardView && adminDashboardView.classList.contains('hidden')) ||
            (window.history.state && window.history.state.tab) ||
            (typeof window.cTab !== 'undefined' && window.cTab)
        );

        if (isInsideAdminTab) {
            // Pengguna sedang berada di dalam tab konten (Produk, Pesanan, Kategori, dll).
            // Kembalikan ke Menu Utama CMS Seller (openAdminMenu):
            if (window.history.state && window.history.state.tab && window.history.length > 1) {
                try {
                    window.history.back();
                    return;
                } catch(e) {}
            }
            if (typeof window.openAdminMenu === 'function') {
                window.openAdminMenu();
            }
            try {
                window.history.replaceState({ view: 'view-admin' }, '', window.location.href);
            } catch(e) {}
            return;
        }

        // Pengguna sudah berada di Menu Utama CMS (bukan di dalam tab konten), konfirmasi keluar CMS
        if (typeof window.showConfirm === 'function') {
            const isOwner = typeof window.isOwnerUser === 'function' && window.isOwnerUser();
            const title = isOwner ? "Keluar Panel Owner" : "Keluar CMS Toko";
            const msg = isOwner ? "Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?" : "Apakah Anda yakin ingin keluar dari halaman admin?";
            window.showConfirm(
                title,
                msg,
                () => { if (typeof window.logoutAdmin === 'function') window.logoutAdmin(); },
                "Ya, Keluar",
                true
            );
        }
        return;
    }

    // 2b. Jika sedang di mode POS Kasir, konfirmasi keluar mode kasir
    if (curViewName === 'view-pos-cashier') {
        if (typeof window.showConfirm === 'function') {
            window.showConfirm(
                'Keluar Mode Kasir',
                'Yakin keluar dari mode POS kasir?',
                () => {
                    if (typeof window.exitPOSMode === 'function') window.exitPOSMode();
                    else changeView('view-catalog');
                },
                'Ya, Keluar',
                true
            );
        } else {
            changeView('view-catalog');
        }
        return;
    }

    // 3. Jika sedang di view selain view-catalog (beranda), kembali berurutan secara terstruktur
    if (curViewName !== 'view-catalog') {
        let targetView = 'view-catalog';
        if (curViewName === 'view-payment') {
            targetView = 'view-checkout';
        } else if (curViewName === 'view-checkout') {
            targetView = 'view-cart';
        } else if (curViewName === 'view-cart') {
            targetView = 'view-catalog';
        } else if (curViewName === 'view-orders' || curViewName === 'view-wishlist' || curViewName === 'view-faq' || curViewName === 'view-admin-login') {
            targetView = 'view-catalog';
        } else if (Array.isArray(viewHistoryStack) && viewHistoryStack.length > 1) {
            const prevInStack = viewHistoryStack[viewHistoryStack.length - 2];
            if (prevInStack && prevInStack !== curViewName) {
                targetView = prevInStack;
            }
        }

        // Transisi tampilan deterministik seketika (100% responsif pada sentuhan pertama)
        changeView(targetView, true);

        // Selaraskan riwayat browser secara aman
        try {
            if (typeof history !== 'undefined') {
                if (window.history.length > 1 && window.history.state && window.history.state.view) {
                    window.history.replaceState({ view: targetView }, '', window.location.href);
                }
            }
        } catch(e) {}
        return;
    }

    // 4. Pengguna sudah berada di Beranda dan tidak ada modal yang terbuka:
    // Tampilkan Dialog Konfirmasi Keluar Aplikasi
    const exitModal = el('exit-confirm-modal');
    if (exitModal && !exitModal.classList.contains('hidden')) {
        closeExitConfirmModal();
    } else {
        openExitConfirmModal();
    }
};

/**
 * Pasang router listener popstate
 */
export const setupHistoryRouter = () => {
    initPullToRefresh();
    
    // Pastikan root history entry selalu memiliki state { view: 'view-catalog' }
    try {
        if (!history.state || !history.state.view) {
            history.replaceState({ view: 'view-catalog' }, '', window.location.href);
        }
    } catch(e) {}

    window.addEventListener('popstate', e => {
        // Jika penutupan modal dipicu secara terprogram (klik tombol X/backdrop), lewati event popstate
        if (isProgrammaticModalClose) {
            isProgrammaticModalClose = false;
            if (programmaticCloseTimer) clearTimeout(programmaticCloseTimer);
            return;
        }

        // 1. Jika ada modal yang terbuka, tutup modal teratas (LIFO)
        if (closeTopmostOpenModal(true)) {
            return;
        }

        // 2. Sinkronkan stack view dan navigasi halaman berurutan
        const state = e.state || {};
        const v = state.view || null;
        const isAdminLoggedIn = window.isAdm || window.__localIsAdm;

        if (isAdminLoggedIn) {
            if (v === 'view-admin') {
                changeView('view-admin', true);
                if (state.tab && typeof window.openAdminTab === 'function') window.openAdminTab(state.tab, true);
                else if (typeof window.openAdminMenu === 'function') window.openAdminMenu();
            } else {
                // Periksa apakah admin sebelumnya sedang membuka tab konten di dalam CMS:
                // Jika iya, jangan langsung konfirmasi logout, tetapi kembalikan dulu ke Menu Utama CMS!
                const adminContentView = el('admin-content-view');
                if (adminContentView && !adminContentView.classList.contains('hidden')) {
                    history.pushState({ view: 'view-admin' }, '', window.location.href);
                    changeView('view-admin', true);
                    if (typeof window.openAdminMenu === 'function') window.openAdminMenu();
                    return;
                }

                history.pushState({ view: 'view-admin' }, '', window.location.href);
                if (typeof window.showConfirm === 'function') {
                    const isOwner = typeof window.isOwnerUser === 'function' && window.isOwnerUser();
                    const title = isOwner ? "Keluar Panel Owner" : "Keluar CMS Toko";
                    const msg = isOwner ? "Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?" : "Apakah Anda yakin ingin keluar dari halaman admin?";
                    window.showConfirm(
                        title,
                        msg,
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
    });
};

// ─── Expose ke window untuk navigasi inline HTML ──────
if (typeof window !== 'undefined') {
    window.pushModalHistory = pushModalHistory;
    window.replaceModalHistory = replaceModalHistory;
    window.requestCloseModal = requestCloseModal;
    window.changeView = changeView;
    window.setupHistoryRouter = setupHistoryRouter;
    window.onBottomNavClick = onBottomNavClick;
    window.updateBottomNav = updateBottomNav;
    window.initPullToRefresh = initPullToRefresh;
    window.triggerAdminPullToRefresh = window.triggerAdminPullToRefresh;
    window.triggerStorefrontPullToRefresh = window.triggerStorefrontPullToRefresh;
    window.executePullToRefresh = window.executePullToRefresh;
    window.handleAppBackButton = handleAppBackButton;
    window.closeTopmostOpenModal = closeTopmostOpenModal;
    window.isModalOpenInDOM = isModalOpenInDOM;
    window.closeModalByName = closeModalByName;
    window.openExitConfirmModal = openExitConfirmModal;
    window.closeExitConfirmModal = closeExitConfirmModal;
    window.confirmExitApp = confirmExitApp;
    window.isProgrammaticModalClose = isProgrammaticModalClose;
    window.viewHistoryStack = viewHistoryStack;
    try {
        Object.defineProperty(window, 'curViewName', {
            get: () => curViewName,
            set: (v) => { curViewName = v; },
            configurable: true
        });
    } catch(e) {}
}



/**
 * ============================================================
 * NATIVE MOBILE EXPERIENCE ENGINE — Toko Putri v1.9.69
 * Menghadirkan rasa aplikasi native murni (iOS & Android):
 * 1. Hardware & Software Haptic Engine (Capacitor Haptics + Web Vibrate)
 * 2. Gesture Swipe-to-Dismiss / Drag-Down pada Bottom Sheet
 * 3. Smart Touch Feedback Delegation (Tombol, Navigasi, Stepper)
 * 4. Safe Area Insets & Edge-to-Edge Adaptive Integration
 * ============================================================
 */

// Pelacak gesture interaksi pertama pengguna untuk memenuhi kebijakan keamanan browser modern
let hasUserInteracted = false;
if (typeof window !== 'undefined') {
    const markInteraction = () => {
        hasUserInteracted = true;
        window.__hasUserInteracted = true;
    };
    ['pointerdown', 'touchstart', 'mousedown', 'keydown'].forEach(evt => {
        window.addEventListener(evt, markInteraction, { capture: true, once: true });
    });
    window.__hasUserInteracted = false;
}

export const checkUserGesture = () => {
    if (typeof navigator !== 'undefined' && navigator.userActivation) {
        return navigator.userActivation.hasBeenActive;
    }
    return Boolean(hasUserInteracted || (typeof window !== 'undefined' && window.__hasUserInteracted));
};

if (typeof window !== 'undefined') {
    window.checkUserGesture = checkUserGesture;
}

/**
 * Trigger getaran haptic feedback mikro pada perangkat.
 * Mendukung Capacitor native hardware taptics dan fallback HTML5 vibration API.
 * @param {'light'|'medium'|'heavy'|'selection'|'success'|'warning'|'error'} type 
 */
export const triggerHaptic = (type = 'light') => {
    try {
        // 1. Cek Plugin Capacitor Haptics Resmi (Hardware Level pada APK Android)
        const CapHaptics = window.Capacitor?.Plugins?.Haptics;
        if (CapHaptics) {
            if (type === 'light' || type === 'selection') {
                CapHaptics.impact({ style: 'LIGHT' }).catch(() => {});
            } else if (type === 'medium') {
                CapHaptics.impact({ style: 'MEDIUM' }).catch(() => {});
            } else if (type === 'heavy') {
                CapHaptics.impact({ style: 'HEAVY' }).catch(() => {});
            } else if (type === 'success') {
                CapHaptics.notification({ type: 'SUCCESS' }).catch(() => {});
            } else if (type === 'warning') {
                CapHaptics.notification({ type: 'WARNING' }).catch(() => {});
            } else if (type === 'error') {
                CapHaptics.notification({ type: 'ERROR' }).catch(() => {});
            }
            return;
        }

        // 2. Fallback Web Vibration API (Browser HP Android / PWA)
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
            // Mencegah intervensi browser jika belum ada interaksi pengguna
            if (!checkUserGesture()) return;
            if (type === 'light' || type === 'selection') navigator.vibrate(10);
            else if (type === 'medium') navigator.vibrate(25);
            else if (type === 'heavy') navigator.vibrate(45);
            else if (type === 'success') navigator.vibrate([15, 30, 20]);
            else if (type === 'warning') navigator.vibrate([30, 40, 30]);
            else if (type === 'error') navigator.vibrate([40, 50, 40, 50, 40]);
        }
    } catch (_) {}
};

// Expose ke global window
if (typeof window !== 'undefined') {
    window.triggerHaptic = triggerHaptic;
}

/**
 * Tutup modal berdasarkan ID secara aman & terpusat
 */
export const closeModalById = (id) => {
    if (!id) return;
    switch (id) {
        case 'product-modal':
            if (typeof window.closeProductModal === 'function') window.closeProductModal();
            break;
        case 'pos-variant-sheet':
            if (typeof window.closePOSVariantSheet === 'function') window.closePOSVariantSheet();
            break;
        case 'variant-preview-modal':
            if (typeof window.closeVariantPreviewModal === 'function') window.closeVariantPreviewModal();
            break;
        case 'custom-confirm-modal':
            if (typeof window.closeConfirm === 'function') window.closeConfirm();
            break;
        case 'scanner-modal':
            if (typeof window.closeCameraScanner === 'function') window.closeCameraScanner();
            break;
        case 'modal-tempo-detail':
            if (typeof window.closeTempoDetailModal === 'function') window.closeTempoDetailModal();
            break;
        case 'modal-tempo-payment':
            if (typeof window.closeTempoPaymentModal === 'function') window.closeTempoPaymentModal();
            break;
        case 'modal-tempo-penalty':
            if (typeof window.closeTempoPenaltyModal === 'function') window.closeTempoPenaltyModal();
            break;
        case 'modal-supplier-detail':
            if (typeof window.closeSupplierDetailModal === 'function') window.closeSupplierDetailModal();
            break;
        case 'modal-supplier-form':
            if (typeof window.closeSupplierFormModal === 'function') window.closeSupplierFormModal();
            break;
        case 'modal-po-form':
            if (typeof window.closePurchaseFormModal === 'function') window.closePurchaseFormModal();
            break;
        case 'modal-po-detail':
            if (typeof window.closePurchaseDetailModal === 'function') window.closePurchaseDetailModal();
            break;
        case 'modal-po-payment':
            if (typeof window.closePurchasePaymentModal === 'function') window.closePurchasePaymentModal();
            break;
        case 'modal-po-product-picker':
            if (typeof window.closePurchasePickerModal === 'function') window.closePurchasePickerModal();
            break;
        case 'quick-menu-modal':
        case 'quickmenu-modal':
            if (typeof window.closeQuickMenuModal === 'function') window.closeQuickMenuModal();
            break;
        case 'category-modal':
            if (typeof window.closeCategoryModal === 'function') window.closeCategoryModal();
            break;
        case 'brand-modal':
            if (typeof window.closeBrandModal === 'function') window.closeBrandModal();
            break;
        case 'quick-variant-modal':
            if (typeof window.closeQuickVariantSheet === 'function') window.closeQuickVariantSheet();
            break;
        case 'shopping-guide-modal':
            if (typeof window.closeShoppingGuideModal === 'function') window.closeShoppingGuideModal();
            break;
        case 'pos-login-modal':
            if (typeof window.closePOSLoginModal === 'function') window.closePOSLoginModal();
            break;
        case 'admin-order-modal':
            if (typeof window.closeOrderDetailModal === 'function') window.closeOrderDetailModal();
            break;
        case 'order-detail-modal':
            if (typeof window.closeCustomerOrderDetailModal === 'function') window.closeCustomerOrderDetailModal();
            break;
        case 'modal-client-tempo-pay':
            if (typeof window.closeClientPaymentModal === 'function') window.closeClientPaymentModal();
            break;
        default: {
            const m = document.getElementById(id);
            if (m) {
                const closeBtn = m.querySelector('button[onclick*="close"], .fa-xmark')?.closest('button');
                if (closeBtn) closeBtn.click();
                else if (typeof window.closeModalAnim === 'function') {
                    const box = m.querySelector('.modal-bottom-sheet, [id$="-box"]') || m.firstElementChild;
                    window.closeModalAnim(m, box);
                } else {
                    m.classList.add('hidden', 'opacity-0');
                }
            }
        }
    }
};

/**
 * Engine Gesture Sentuhan Native (Swipe-to-Dismiss) untuk Bottom Sheet
 */
let activeDragSheet = null;
let activeDragModal = null;
let startY = 0;
let startX = 0;
let currentY = 0;
let isDraggingSheet = false;
let startTime = 0;

export const initNativeSheetGestures = () => {
    if (typeof document === 'undefined') return;

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const touch = e.touches[0];

        // Pastikan sentuhan berada di dalam modal/sheet container yang sedang terbuka
        const modalContainer = touch.target.closest('[id*="modal"], [id*="sheet"]');
        if (!modalContainer || modalContainer.classList.contains('hidden') || modalContainer.classList.contains('opacity-0')) return;

        // ── GUARD KRUSIAL: Gesture Swipe-to-Dismiss HANYA untuk elemen Bottom Sheet murni ──
        // Centered modal / dialog biasa (seperti admin-order-modal, admin-modal, preview struk) 
        // TIDAK BOLEH terkena gesture swipe-to-dismiss agar scroll rincian data bebas leluasa!
        const isBottomSheet = modalContainer.classList.contains('items-end') || 
                              Boolean(touch.target.closest('.modal-bottom-sheet')) ||
                              modalContainer.classList.contains('modal-bottom-sheet');
        if (!isBottomSheet) return;

        // Cari elemen container sheet utama (prioritaskan .modal-bottom-sheet atau [id$="-box"])
        // Jangan pernah memilih sub-elemen konten jika berada di dalam kotak sheet!
        let sheetBox = touch.target.closest('.modal-bottom-sheet') || touch.target.closest('[id$="-box"]');
        if (!sheetBox) {
            sheetBox = touch.target.closest('[id$="-content"]');
        }
        if (!sheetBox) return;

        // ── GUARD KRUSIAL 1: Jangan pernah aktifkan sheet drag jika menyentuh kontrol interaktif/form ──
        if (touch.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag')) {
            return;
        }

        // ── GUARD KRUSIAL 2: Area Konten Scrollable Bebas Hambatan ──
        // Sentuhan di dalam area scrollable (.overflow-y-auto, .custom-scrollbar, dll) HARUS bebas scroll 100%
        // tanpa di-hijack oleh sheet drag gesture!
        // Sheet drag HANYA boleh dipicu jika pengguna benar-benar menyentuh handle bar (.pull-indicator) 
        // atau area drag header paling atas sheet (<= 55px dari puncak kartu sheet).
        const insideScrollable = Boolean(touch.target.closest('.overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar'));
        const rect = sheetBox.getBoundingClientRect();
        const touchOffsetTop = touch.clientY - rect.top;
        const isNearHandle = Boolean(touch.target.closest('.pull-indicator')) || (!insideScrollable && touchOffsetTop <= 55);

        if (!isNearHandle) return;

        activeDragSheet = sheetBox;
        activeDragModal = modalContainer;
        startY = touch.clientY;
        startX = touch.clientX;
        currentY = startY;
        isDraggingSheet = false;
        startTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!activeDragSheet || e.touches.length !== 1) return;
        const touch = e.touches[0];
        currentY = touch.clientY;
        const deltaY = currentY - startY;
        const deltaX = Math.abs(touch.clientX - startX);

        // Jika gerakan lebih horizontal (misal geser foto/carousel), abaikan sheet drag
        if (!isDraggingSheet && deltaX > Math.abs(deltaY)) {
            activeDragSheet = null;
            return;
        }

        const scrollEl = activeDragSheet.classList.contains('overflow-y-auto') 
            ? activeDragSheet 
            : activeDragSheet.querySelector('.overflow-y-auto, .scroll-content, .custom-scrollbar');
        if (scrollEl && scrollEl.scrollTop > 5 && !isDraggingSheet) {
            return;
        }

        if (deltaY > 0) {
            // Drag ke bawah: ikuti jari secara presisi 1:1
            isDraggingSheet = true;
            if (e.cancelable) e.preventDefault();
            activeDragSheet.style.transform = `translateY(${deltaY}px)`;
            activeDragSheet.style.transition = 'none';

            if (activeDragModal) {
                const opacity = Math.max(0.2, 1 - (deltaY / 400));
                activeDragModal.style.backgroundColor = `rgba(15, 23, 42, ${0.8 * opacity})`;
            }
        } else if (deltaY < 0 && isDraggingSheet) {
            // Rubberband damping saat ditarik ke atas
            const damped = deltaY * 0.2;
            activeDragSheet.style.transform = `translateY(${damped}px)`;
            activeDragSheet.style.transition = 'none';
        }
    }, { passive: false });

    const finishDrag = () => {
        if (!activeDragSheet) return;
        const sheet = activeDragSheet;
        const modal = activeDragModal;
        const deltaY = currentY - startY;
        const elapsed = Math.max(1, Date.now() - startTime);
        const velocity = deltaY / elapsed;

        activeDragSheet = null;
        activeDragModal = null;

        if (isDraggingSheet && (deltaY > 80 || (velocity > 0.45 && deltaY > 30))) {
            // ── Tutup Sheet (Swipe Down Terpenuhi) ──
            triggerHaptic('light');
            sheet.style.transition = 'transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)';
            sheet.style.transform = 'translateY(100%)';
            if (modal) {
                modal.style.transition = 'opacity 0.25s ease';
                modal.style.opacity = '0';
            }

            setTimeout(() => {
                sheet.style.transform = '';
                sheet.style.transition = '';
                if (modal) {
                    modal.style.backgroundColor = '';
                    modal.style.opacity = '';
                }
                closeModalById(modal ? modal.id : '');
            }, 250);
        } else if (isDraggingSheet) {
            // ── Batal / Balik ke Posisi Awal (Spring Snap Back) ──
            sheet.style.transition = 'transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            sheet.style.transform = '';
            if (modal) {
                modal.style.transition = 'background-color 0.28s ease';
                modal.style.backgroundColor = '';
            }
            setTimeout(() => {
                sheet.style.transition = '';
            }, 300);
        }
        isDraggingSheet = false;
    };

    document.addEventListener('touchend', finishDrag, { passive: true });
    document.addEventListener('touchcancel', finishDrag, { passive: true });
};

/**
 * Otomatisasi Umpan Balik Taktil (Auto Haptics) pada Elemen Interaktif
 */
let lastHapticTap = 0;
export const initAutoHapticFeedback = () => {
    if (typeof document === 'undefined') return;

    document.addEventListener('click', (e) => {
        const now = Date.now();
        if (now - lastHapticTap < 50) return; // Debounce 50ms

        const btn = e.target.closest(
            'button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap'
        );
        if (btn && !btn.disabled && !btn.classList.contains('disabled')) {
            lastHapticTap = now;
            triggerHaptic('light');
        }
    }, { passive: true, capture: true });
};

/**
 * ============================================================
 * NATIVE SOUND EFFECTS ENGINE (Web Audio API Synthesizer)
 * 100% offline, 0ms latency, tanpa unduh file eksternal.
 * ============================================================
 */
let nativeAudioCtx = null;
export const playNativeSound = (type = 'pop') => {
    try {
        if (typeof window === 'undefined') return;
        // Mencegah error "The AudioContext was not allowed to start" jika belum ada interaksi pengguna
        if (!checkUserGesture()) return;

        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioClass) return;

        if (!nativeAudioCtx) {
            nativeAudioCtx = new AudioClass();
        }
        if (nativeAudioCtx.state === 'suspended') {
            nativeAudioCtx.resume().catch(() => {});
        }
        const now = nativeAudioCtx.currentTime;

        if (type === 'pop') {
            // Soft pleasant bubble pop on add-to-cart
            const osc = nativeAudioCtx.createOscillator();
            const gain = nativeAudioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(340, now);
            osc.frequency.exponentialRampToValueAtTime(560, now + 0.07);
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain);
            gain.connect(nativeAudioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'success') {
            // Harmonious two-tone chime (C5 -> E5)
            const osc1 = nativeAudioCtx.createOscillator();
            const osc2 = nativeAudioCtx.createOscillator();
            const gain1 = nativeAudioCtx.createGain();
            const gain2 = nativeAudioCtx.createGain();
            osc1.type = 'triangle';
            osc2.type = 'triangle';
            osc1.frequency.setValueAtTime(523.25, now);
            osc2.frequency.setValueAtTime(659.25, now + 0.09);
            gain1.gain.setValueAtTime(0.12, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
            gain2.gain.setValueAtTime(0.14, now + 0.09);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
            osc1.connect(gain1);
            gain1.connect(nativeAudioCtx.destination);
            osc2.connect(gain2);
            gain2.connect(nativeAudioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.22);
            osc2.start(now + 0.09);
            osc2.stop(now + 0.32);
        } else if (type === 'beep') {
            // Crisp barcode scanner beep
            const osc = nativeAudioCtx.createOscillator();
            const gain = nativeAudioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(1040, now);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
            osc.connect(gain);
            gain.connect(nativeAudioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.07);
        }
    } catch (_) {}
};

if (typeof window !== 'undefined') {
    window.playNativeSound = playNativeSound;
}

/**
 * ============================================================
 * FLOATING SCROLL-TO-TOP BUTTON (Auto-Fade FAB)
 * ============================================================
 */
export const hideFloatingScrollTop = () => {
    if (typeof document === 'undefined') return;
    const btn = document.getElementById('native-scroll-top-btn');
    if (btn) {
        btn.classList.add('opacity-0', 'translate-y-3');
        btn.classList.add('hidden');
    }
};

if (typeof window !== 'undefined') {
    window.hideFloatingScrollTop = hideFloatingScrollTop;
}

export const initFloatingScrollTop = () => {
    if (typeof document === 'undefined') return;
    let btn = document.getElementById('native-scroll-top-btn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'native-scroll-top-btn';
        document.body.appendChild(btn);
    }
    btn.setAttribute('aria-label', 'Kembali ke Atas');
    btn.setAttribute('title', 'Kembali ke Atas');
    btn.className = 'fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>';

    if (!btn._hasClickListener) {
        btn._hasClickListener = true;
        btn.addEventListener('click', () => {
            triggerHaptic('light');
            const activeSection = document.querySelector('.view-section:not(.hidden)');
            if (activeSection) {
                const sc = activeSection.querySelector('.scroll-content');
                if (sc && sc.scrollTop > 10) {
                    sc.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const checkScroll = (scrollTop, targetElement = null) => {
        if (!btn) return;

        // 1. Guard Pengaturan Toko: Jika dinonaktifkan pemilik toko via CMS Settings
        if (typeof window !== 'undefined' && window.appData?.store?.showScrollTopButton === false) {
            hideFloatingScrollTop();
            return;
        }

        // 2. Strict Whitelist: HANYA izinkan di etalase katalog (#view-catalog) dan riwayat belanja pelanggan (#view-orders)
        // DILARANG KERAS muncul di CMS Seller (#view-admin), POS Kasir (#view-pos-cashier), Checkout, Cart, dll.
        const activeSection = document.querySelector('.view-section:not(.hidden)');
        if (!activeSection || (activeSection.id !== 'view-catalog' && activeSection.id !== 'view-orders')) {
            hideFloatingScrollTop();
            return;
        }

        // 3. Jika scroll dipicu oleh elemen container (.scroll-content), pastikan kontainer tersebut milik katalog/orders
        if (targetElement) {
            const parentSection = targetElement.closest('.view-section');
            if (!parentSection || (parentSection.id !== 'view-catalog' && parentSection.id !== 'view-orders')) {
                hideFloatingScrollTop();
                return;
            }
        }

        // 4. Guard Modal / Bottom Sheet / Dialog: Sembunyikan jika ada jendela modal aktif yang sedang terbuka
        const hasOpenModal = document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)');
        if (hasOpenModal) {
            hideFloatingScrollTop();
            return;
        }

        // 5. Threshold: Tampilkan tombol jika sudah discroll melebihi 450px
        if (scrollTop > 450) {
            btn.classList.remove('hidden');
            requestAnimationFrame(() => {
                btn.classList.remove('opacity-0', 'translate-y-3');
            });
        } else {
            btn.classList.add('opacity-0', 'translate-y-3');
            setTimeout(() => {
                if (btn && btn.classList.contains('opacity-0')) btn.classList.add('hidden');
            }, 300);
        }
    };

    window.addEventListener('scroll', () => {
        checkScroll(window.scrollY || document.documentElement.scrollTop);
    }, { passive: true });

    document.addEventListener('scroll', (e) => {
        if (e.target && e.target.classList && e.target.classList.contains('scroll-content')) {
            checkScroll(e.target.scrollTop, e.target);
        }
    }, { passive: true, capture: true });
};

/**
 * ============================================================
 * NATIVE CONNECTIVITY BANNER (Online & Offline Capsule)
 * ============================================================
 */
export const initConnectivityBanner = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    let banner = document.getElementById('native-connectivity-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'native-connectivity-banner';
        banner.className = 'fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl';
        document.body.appendChild(banner);
    }

    let hideTimer = null;
    const showBanner = (isOnline) => {
        clearTimeout(hideTimer);
        triggerHaptic(isOnline ? 'success' : 'warning');
        if (isOnline) {
            banner.className = 'fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40';
            banner.innerHTML = '<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>';
            hideTimer = setTimeout(() => {
                banner.classList.add('-translate-y-16', 'opacity-0');
            }, 2500);
        } else {
            banner.className = 'fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60';
            banner.innerHTML = '<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>';
        }
    };

    window.addEventListener('online', () => showBanner(true));
    window.addEventListener('offline', () => showBanner(false));
};

/**
 * Inisialisasi Seluruh Mesin Native Mobile Toko Putri
 */
export const initNativeMobileEngine = () => {
    initNativeSheetGestures();
    initAutoHapticFeedback();
    initFloatingScrollTop();
    initConnectivityBanner();
};

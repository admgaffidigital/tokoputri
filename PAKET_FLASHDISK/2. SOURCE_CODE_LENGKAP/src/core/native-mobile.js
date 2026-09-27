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
            if (typeof window.closeQuickMenuModal === 'function') window.closeQuickMenuModal();
            break;
        case 'pos-login-modal':
            if (typeof window.closePOSLoginModal === 'function') window.closePOSLoginModal();
            break;
        default: {
            const m = document.getElementById(id);
            if (m) {
                const closeBtn = m.querySelector('button[onclick*="close"], .fa-xmark')?.closest('button');
                if (closeBtn) closeBtn.click();
                else if (typeof window.closeModalAnim === 'function') {
                    const box = m.querySelector('.modal-bottom-sheet, [id$="-box"], [id$="-content"]') || m.firstElementChild;
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

        // Cari apakah sentuhan berada di dalam modal/bottom sheet yang sedang terbuka
        const sheetBox = touch.target.closest('.modal-bottom-sheet, [id$="-box"], [id$="-content"]');
        if (!sheetBox) return;

        // Pastikan modal pembungkusnya tidak hidden
        const modalContainer = sheetBox.closest('[id*="modal"], [id*="sheet"]');
        if (!modalContainer || modalContainer.classList.contains('hidden') || modalContainer.classList.contains('opacity-0')) return;

        // Dapatkan elemen scroll di dalam sheet (jika ada)
        const scrollEl = sheetBox.classList.contains('overflow-y-auto') 
            ? sheetBox 
            : sheetBox.querySelector('.overflow-y-auto, .scroll-content, .custom-scrollbar');
        const sheetScrollTop = scrollEl ? scrollEl.scrollTop : 0;

        // Dapatkan posisi sentuhan relatif terhadap header sheet
        const rect = sheetBox.getBoundingClientRect();
        const touchOffsetTop = touch.clientY - rect.top;
        const isNearHandle = touchOffsetTop <= 80 || Boolean(touch.target.closest('.pull-indicator'));

        // Jika disentuh di tengah teks/list saat scroll > 5, jangan aktifkan drag
        if (!isNearHandle && sheetScrollTop > 5) return;

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
 * Inisialisasi Seluruh Mesin Native Mobile Toko Putri
 */
export const initNativeMobileEngine = () => {
    initNativeSheetGestures();
    initAutoHapticFeedback();
};

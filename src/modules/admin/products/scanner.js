/**
 * ============================================================
 * ADMIN PRODUCTS — BARCODE SCANNER (KAMERA HTML5-QRCode)
 * Mengatur scanner kamera HTML5-QRCode yang di-load secara lazy
 * (hanya saat tombol scan diklik), dan memastikan kamera
 * dimatikan dengan benar saat modal ditutup via tombol atau back button.
 * ============================================================
 */

import { el, show, hide, showToast, ensureScriptLoaded, openModalAnim } from '../../../core/utils.js';

const pushModalHistory  = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => window.requestCloseModal?.(id, fH, cb);

/** Instance Html5Qrcode — di-null setelah scanner ditutup */
let html5QrCode;

window.openCameraScanner = async (targetId='search-input') => {
    const mScan = el('scanner-modal');
    if (mScan && mScan.classList.contains('hidden')) pushModalHistory('scanner');
    openModalAnim(mScan, mScan?.firstElementChild);

    // Muat library scanner secara lazy — utamakan aset lokal dengan fallback ke CDN
    try {
        await ensureScriptLoaded(
            '/html5-qrcode.min.js',
            () => typeof Html5Qrcode !== 'undefined'
        ).catch(() => ensureScriptLoaded(
            'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
            () => typeof Html5Qrcode !== 'undefined'
        ));
    } catch(e) {
        showToast('Gagal memuat modul kamera. Cek koneksi atau izin kamera.');
        closeCameraScanner();
        return;
    }

    if(!html5QrCode) html5QrCode = new Html5Qrcode("reader");

    const formats = typeof Html5QrcodeSupportedFormats !== 'undefined' ? [
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
        Html5QrcodeSupportedFormats.CODE_39,
        Html5QrcodeSupportedFormats.UPC_A,
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.QR_CODE
    ] : undefined;

    const config = {
        fps: 15,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
            const width = Math.min(Math.floor(viewfinderWidth * 0.88), 340);
            const height = Math.min(Math.floor(viewfinderHeight * 0.45), 150);
            return { width: Math.max(width, 220), height: Math.max(height, 90) };
        },
        ...(formats ? { formatsToSupport: formats } : {}),
        experimentalFeatures: {
            useBarCodeDetectorIfSupported: true
        }
    };

    setTimeout(() => {
        if(html5QrCode){
            html5QrCode.start({facingMode:"environment"}, config, (decodedText) => {
                const cleanCode = typeof window.cleanBarcodeRaw === 'function' ? window.cleanBarcodeRaw(decodedText) : (decodedText || '').trim();
                let tEl = el(targetId);
                if(tEl){
                    tEl.value = cleanCode;
                    if(targetId === 'search-input' || targetId === 'mobile-header-search') {
                        window.handleSearch?.(cleanCode);
                    } else {
                        tEl.dispatchEvent(new Event('input',{bubbles:true}));
                        tEl.dispatchEvent(new Event('change',{bubbles:true}));
                    }
                }
                showToast("Barcode terbaca!");
                closeCameraScanner();
            },(err)=>{}).catch(err => {
                showToast("Akses kamera ditolak/gagal!");
                closeCameraScanner();
            });
        }
    }, 100);
};

// FIX: kamera SELALU dimatikan dengan benar (stop+clear) baik saat ditutup
// lewat tombol X maupun lewat back button, mencegah resource leak kamera.
window.closeCameraScanner = (fH=false) => {
    requestCloseModal('scanner', fH, () => {
        el('scanner-modal').classList.add('opacity-0');
        if(html5QrCode){
            try {
                if(html5QrCode.getState() === 2 /* SCANNING */ || html5QrCode.getState() === 3 /* PAUSED */){
                    html5QrCode.stop().then(() => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    }).catch(e => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    });
                } else {
                    html5QrCode.clear();
                    html5QrCode = null;
                }
            } catch(err) {
                html5QrCode = null;
            }
        }
        setTimeout(() => hide('scanner-modal'), 300);
    });
};

/**
 * ============================================================
 * ADMIN PRODUCTS — BARCODE SCANNER (KAMERA HTML5-QRCode)
 * Mengatur scanner kamera HTML5-QRCode yang di-load secara lazy
 * (hanya saat tombol scan diklik), dan memastikan kamera
 * dimatikan dengan benar saat modal ditutup via tombol atau back button.
 * ============================================================
 */

import { el, show, hide, showToast, ensureScriptLoaded } from '../../../core/utils.js';

const pushModalHistory  = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => window.requestCloseModal?.(id, fH, cb);

/** Instance Html5Qrcode — di-null setelah scanner ditutup */
let html5QrCode;

window.openCameraScanner = async (targetId='search-input') => {
    const mScan = el('scanner-modal');
    if (mScan && mScan.classList.contains('hidden')) pushModalHistory('scanner');
    show('scanner-modal');
    setTimeout(() => { el('scanner-modal').classList.remove('opacity-0'); }, 10);

    // Muat library scanner secara lazy — hanya saat benar-benar diperlukan
    try {
        await ensureScriptLoaded(
            'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
            () => typeof Html5Qrcode !== 'undefined'
        );
    } catch(e) {
        showToast('Gagal memuat modul kamera. Cek koneksi internet Anda.');
        closeCameraScanner();
        return;
    }

    if(!html5QrCode) html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    setTimeout(() => {
        if(html5QrCode){
            html5QrCode.start({facingMode:"environment"}, config, (decodedText) => {
                let tEl = el(targetId);
                if(tEl){
                    tEl.value = decodedText;
                    if(targetId === 'search-input') {
                        window.handleSearch?.(decodedText);
                    } else {
                        tEl.dispatchEvent(new Event('input',{bubbles:true}));
                        tEl.dispatchEvent(new Event('change',{bubbles:true}));
                    }
                }
                showToast("Barcode discan!");
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

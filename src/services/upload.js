/**
 * ============================================================
 * SERVICE UPLOAD MEDIA (GOOGLE APPS SCRIPT DRIVE INTEGRATION)
 * Mengatur upload gambar produk, video presentasi banner ke Drive,
 * dan penyisipan gambar rich text editor ke Google Apps Script (GAS).
 * ============================================================
 */

import { GAS_UPLOAD_URL } from './gas.js';
import { el, showToast, sLoad, hLoad, fixD } from '../core/utils.js';

export const GAS_SECRET_TOKEN = "B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p";
export const VIDEO_MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20MB
export const ALLOWED_VIDEO_MIMES  = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo', 'video/3gpp'];
export const ALLOWED_IMAGE_MIMES  = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

/**
 * Handle upload gambar (JPG/PNG/WEBP/GIF)
 */
export const handleImageUpload = async (inputElement, targetInputId, varIndex = null) => {
    const file = inputElement.files[0];
    if (!file) return;
    
    if (!ALLOWED_IMAGE_MIMES.includes(file.type)) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    
    if (file.size > 3 * 1024 * 1024) {
        inputElement.value = '';
        return showToast("Maksimal gambar 3MB!");
    }
    
    const uploadUrl = window.GAS_UPLOAD_URL || GAS_UPLOAD_URL;
    if (!uploadUrl || uploadUrl.includes("ISI_DENGAN")) {
        inputElement.value = '';
        return showToast("URL Script Google belum diisi!");
    }
    
    sLoad('Upload Gambar...');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const payload = { 
                name: "POS_" + Date.now() + "_" + safeName, 
                mimeType: file.type, 
                data: base64Data, 
                token: GAS_SECRET_TOKEN 
            };
            
            const res = await fetch(uploadUrl, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                redirect: 'follow'
            });
            const textRes = await res.text();
            
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast("Error Server!"); }
            
            if (responseData.status === 'success') {
                const finalUrl = fixD(responseData.url);
                const targetInput = el(targetInputId);
                if (targetInput) {
                    targetInput.value = finalUrl;
                    targetInput.dispatchEvent(new Event('input', { bubbles: true }));
                    targetInput.dispatchEvent(new Event('change', { bubbles: true }));
                    if (varIndex !== null && typeof window.uVar === 'function') {
                        window.uVar(varIndex, 'img', finalUrl);
                    }
                    showToast("Gambar diupload!");
                }
            } else {
                showToast("Gagal: " + (responseData.message || "Error"));
            }
        } catch(e) {
            showToast("Koneksi terputus saat upload.");
        } finally {
            hLoad();
            inputElement.value = '';
        }
    };
    reader.onerror = () => { 
        showToast("Gagal membaca file!"); 
        hLoad(); 
        inputElement.value = ''; 
    };
};

/**
 * Handle upload video banner ke Google Drive via GAS
 */
export const handleVideoUpload = async (inputElement, targetInputId) => {
    const file = inputElement.files[0];
    if (!file) return;

    if (!ALLOWED_VIDEO_MIMES.includes(file.type)) {
        inputElement.value = '';
        return showToast('Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!');
    }
    if (file.size > VIDEO_MAX_SIZE_BYTES) {
        inputElement.value = '';
        return showToast('Video terlalu besar! Maksimal 20MB.');
    }
    
    const uploadUrl = window.GAS_UPLOAD_URL || GAS_UPLOAD_URL;
    if (!uploadUrl || uploadUrl.includes('ISI_DENGAN')) {
        inputElement.value = '';
        return showToast('URL Script Google belum diisi di Pengaturan!');
    }

    sLoad('Upload Video... (harap tunggu)');
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const payload = {
                name: 'VID_' + Date.now() + '_' + safeName,
                mimeType: file.type,
                data: base64Data,
                token: GAS_SECRET_TOKEN
            };

            const res = await fetch(uploadUrl, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                redirect: 'follow'
            });
            const textRes = await res.text();
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast('Error Server GAS!'); }

            if (responseData.status === 'success') {
                const embedUrl = 'https://drive.google.com/file/d/' + responseData.fileId + '/preview';
                const targetInput = el(targetInputId);
                if (targetInput) {
                    targetInput.value = embedUrl;
                    targetInput.dispatchEvent(new Event('input', { bubbles: true }));
                    targetInput.dispatchEvent(new Event('change', { bubbles: true }));
                    showToast('Video berhasil diupload ke Drive!');
                }
            } else {
                showToast('Gagal upload: ' + (responseData.message || 'Error'));
            }
        } catch(e) {
            showToast('Koneksi terputus saat upload video.');
        } finally {
            hLoad();
            inputElement.value = '';
        }
    };
    reader.onerror = () => { 
        showToast('Gagal membaca file video!'); 
        hLoad(); 
        inputElement.value = ''; 
    };
};

/**
 * Handle upload gambar langsung ke Rich Text Editor
 */
export const handleRTEditorImage = async (inputElement, editorId) => {
    const file = inputElement.files[0];
    if (!file) return;

    if (!ALLOWED_IMAGE_MIMES.includes(file.type)) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    if (file.size > 3 * 1024 * 1024) { 
        inputElement.value = ''; 
        return showToast("Maksimal gambar 3MB!"); 
    }
    
    const uploadUrl = window.GAS_UPLOAD_URL || GAS_UPLOAD_URL;
    if (!uploadUrl || uploadUrl.includes("ISI_DENGAN")) { 
        inputElement.value = ''; 
        return showToast("URL Script Google belum diisi!"); 
    }
    
    sLoad('Menyisipkan Gambar...');
    const reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const payload = { 
                name: "RTE_" + Date.now() + "_" + safeName, 
                mimeType: file.type, 
                data: base64Data, 
                token: GAS_SECRET_TOKEN 
            };
            
            const res = await fetch(uploadUrl, { 
                method: 'POST', 
                body: JSON.stringify(payload), 
                headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
                redirect: 'follow' 
            });
            const textRes = await res.text();
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast("Error Server!"); }

            if (responseData.status === 'success') {
                const finalUrl = fixD(responseData.url);
                const ed = el(editorId);
                if (ed) {
                    ed.focus();
                    document.execCommand('insertHTML', false, `<br><img loading="lazy" src="${finalUrl}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`);
                }
                showToast("Gambar berhasil disisipkan!");
            } else {
                showToast("Gagal upload gambar.");
            }
        } catch(e) { 
            showToast("Gagal koneksi."); 
        } finally { 
            hLoad(); 
            inputElement.value = ''; 
        }
    };
    reader.onerror = () => { 
        showToast("Gagal membaca file!"); 
        hLoad(); 
        inputElement.value = ''; 
    };
};

// ─── Expose ke window untuk atribut inline HTML ──────
window.GAS_SECRET_TOKEN = GAS_SECRET_TOKEN;
window.handleImageUpload = handleImageUpload;
window.handleVideoUpload = handleVideoUpload;
window.handleRTEditorImage = handleRTEditorImage;

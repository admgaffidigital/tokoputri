/**
 * ============================================================
 * SERVICE UPLOAD MEDIA (GOOGLE APPS SCRIPT DRIVE INTEGRATION)
 * Mengatur upload gambar produk, video presentasi banner ke Drive,
 * dan penyisipan gambar rich text editor ke Google Apps Script (GAS).
 * ============================================================
 */

import { GAS_UPLOAD_URL } from './gas.js';
import { el, showToast, sLoad, hLoad, fixD } from '../core/utils.js';
import { appData } from '../core/state.js';

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
    
    const isGif = file.type === 'image/gif' || /\.gif$/i.test(file.name || '');
    const mimeType = isGif ? 'image/gif' : (file.type || 'image/jpeg');
    
    if (!ALLOWED_IMAGE_MIMES.includes(mimeType) && !isGif) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    
    // GIF animasi maskot diperbolehkan hingga 8MB
    const maxSize = isGif ? 8 * 1024 * 1024 : 3 * 1024 * 1024;
    const maxLabel = isGif ? '8MB' : '3MB';
    if (file.size > maxSize) {
        inputElement.value = '';
        return showToast(`Maksimal ukuran file ${maxLabel} (GIF animasi maks 8MB)!`);
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
                mimeType: mimeType, 
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
                const finalUrl = fixD(responseData.url, mimeType);
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

    const isGif = file.type === 'image/gif' || /\.gif$/i.test(file.name || '');
    const mimeType = isGif ? 'image/gif' : (file.type || 'image/jpeg');

    if (!ALLOWED_IMAGE_MIMES.includes(mimeType) && !isGif) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    const maxEditorSize = isGif ? 8 * 1024 * 1024 : 3 * 1024 * 1024;
    if (file.size > maxEditorSize) { 
        inputElement.value = ''; 
        return showToast(`Maksimal gambar ${isGif ? '8MB (GIF)' : '3MB'}!`); 
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

/**
 * Upload file gambar ke Google Drive via endpoint Google Apps Script (GAS).
 * Mengompresi gambar otomatis (max 1200px, JPEG 0.82) dan mengembalikan direct view URL Google Drive.
 * @param {File|Blob} file 
 * @param {string} prefix 
 * @returns {Promise<string|null>} URL Google Drive yang sudah dinormalisasi (fixD)
 */
export const uploadImageFileToDrive = async (file, prefix = 'BUKTI') => {
    if (!file) return null;
    
    const uploadUrl = window.GAS_UPLOAD_URL || (appData && appData.config && appData.config.gasUrl) || GAS_UPLOAD_URL;
    if (!uploadUrl || uploadUrl.includes("ISI_DENGAN")) {
        console.warn("[GAS Upload] GAS_UPLOAD_URL belum dikonfigurasi.");
        return null;
    }

    try {
        // Kompresi sebelum upload untuk efisiensi transfer & kuota Google Drive
        const base64Data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const img = new Image();
                img.onload = () => {
                    const maxDim = 1200;
                    let { width, height } = img;
                    if (width > maxDim || height > maxDim) {
                        if (width > height) {
                            height = Math.round((height * maxDim) / width);
                            width = maxDim;
                        } else {
                            width = Math.round((width * maxDim) / height);
                            height = maxDim;
                        }
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
                    resolve(dataUrl.split(',')[1]);
                };
                img.onerror = () => {
                    const raw = (ev.target.result || '').toString();
                    resolve(raw.split(',')[1] || '');
                };
                img.src = ev.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        if (!base64Data) return null;

        const safeName = (file.name || 'bukti.jpg').replace(/[^a-zA-Z0-9.]/g, '_');
        const payload = {
            name: `${prefix}_${Date.now()}_${safeName}`,
            mimeType: 'image/jpeg',
            data: base64Data,
            token: GAS_SECRET_TOKEN
        };

        const res = await fetch(uploadUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            redirect: 'follow'
        });

        if (!res.ok) {
            console.warn(`[GAS Upload] HTTP error: ${res.status}`);
            return null;
        }

        const textRes = await res.text();
        let responseData;
        try {
            responseData = JSON.parse(textRes);
        } catch(e) {
            console.warn("[GAS Upload] Parse response error:", textRes);
            return null;
        }

        if (responseData && responseData.status === 'success' && responseData.url) {
            return fixD(responseData.url);
        } else {
            console.warn("[GAS Upload] Server message:", responseData && responseData.message);
            return null;
        }
    } catch(err) {
        console.warn("[GAS Upload] Upload exception:", err);
        return null;
    }
};

// ─── Expose ke window untuk atribut inline HTML ──────
window.GAS_SECRET_TOKEN = GAS_SECRET_TOKEN;
window.handleImageUpload = handleImageUpload;
window.handleVideoUpload = handleVideoUpload;
window.handleRTEditorImage = handleRTEditorImage;
window.uploadImageFileToDrive = uploadImageFileToDrive;
window.uploadBuktiToGDrive = uploadImageFileToDrive;


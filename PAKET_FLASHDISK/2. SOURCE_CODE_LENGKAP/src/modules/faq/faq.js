/**
 * ============================================================
 * MODUL FAQ & TANYA JAWAB (STOREFRONT & ADMIN)
 * Mengatur sinkronisasi real-time Firestore untuk Q&A,
 * tampilan accordion tanya jawab pelanggan, form pengajuan
 * pertanyaan baru, moderasi FAQ admin, publikasi, dan hapus Q&A.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { 
    el, show, hide, setIn, setV, getV, esc, 
    showToast, showConfirm, sLoad, hLoad 
} from '../../core/utils.js';

let unsubFAQRealtime = null;

/**
 * Listener real-time Firestore untuk koleksi FAQs
 */
export const attachFAQRealtime = () => {
    if (unsubFAQRealtime) return;
    try {
        unsubFAQRealtime = db.collection("freshmart").doc("cms_data").collection("faqs")
            .onSnapshot(snap => {
                if (snap && snap.docs) {
                    appData.faqs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                }
                if (typeof window.curViewName !== 'undefined' && window.curViewName === 'view-faq') {
                    renderStorefrontFAQ();
                }
                if (window.isAdm && typeof window.cTab !== 'undefined' && window.cTab === 'faqs' && typeof window.rAdmFAQ === 'function') {
                    window.rAdmFAQ();
                }
            }, err => {
                console.warn('Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:', err.message);
                if (typeof window.curViewName !== 'undefined' && window.curViewName === 'view-faq') {
                    renderStorefrontFAQ();
                }
                if (window.isAdm && typeof window.cTab !== 'undefined' && window.cTab === 'faqs' && typeof window.rAdmFAQ === 'function') {
                    window.rAdmFAQ();
                }
            });
    } catch (e) {
        console.warn('Fallback sync Q&A dari cms_data aktif');
    }
};

export let currentFAQCategory = 'Semua';

/**
 * Render FAQ di halaman depan pembeli (Storefront)
 */
export const renderStorefrontFAQ = () => {
    attachFAQRealtime();
    const container = document.getElementById('storefront-faq-container');
    const pillsContainer = document.getElementById('faq-category-pills');
    if (!container) return;

    const allFaqs = (appData.faqs || []).filter(f => f.status === 'published');
    const categories = ['Semua', 'Pemesanan', 'Pengiriman', 'Pembayaran', 'Garansi', 'Lainnya'];

    if (pillsContainer) {
        pillsContainer.innerHTML = categories.map(cat => `
            <button onclick="selectFAQCategory('${cat}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${currentFAQCategory === cat ? 'primary-bg text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'}">
                ${cat}
            </button>
        `).join('');
    }

    const searchQuery = (document.getElementById('faq-search-input')?.value || '').toLowerCase().trim();
    const filtered = allFaqs.filter(f => {
        const matchCat = (currentFAQCategory === 'Semua' || f.category === currentFAQCategory);
        const matchSearch = !searchQuery || (f.question || '').toLowerCase().includes(searchQuery) || (f.answer || '').toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (!filtered.length) {
        container.innerHTML = `
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-500 mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(f => `
        <div class="bg-white dark:bg-slate-800/95 rounded-[1.5rem] border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${f.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${esc(f.category || 'Umum')}</span>
                            ${f.authorName ? `<span class="text-[10px] font-medium text-slate-400">Oleh: ${esc(f.authorName)}</span>` : ''}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${esc(f.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${f.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${f.id}">
                <div class="flex items-start gap-3 bg-white/90 dark:bg-slate-800/90 p-3.5 sm:p-4 rounded-2xl border primary-border shadow-sm">
                    <div class="w-8 h-8 rounded-xl primary-bg text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-reply text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-2 mb-1">
                            <span class="text-[10px] font-extrabold uppercase tracking-wider primary-text flex items-center gap-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Tim Admin Toko
                            </span>
                        </div>
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${esc(f.answer || 'Belum ada jawaban.')}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
};

export const selectFAQCategory = (cat) => {
    currentFAQCategory = cat;
    renderStorefrontFAQ();
};

export const filterStorefrontFAQ = () => {
    renderStorefrontFAQ();
};

export const toggleFAQAccordion = (id) => {
    const body = document.getElementById(`faq-body-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (!body || !icon) return;
    const isHidden = body.classList.contains('hidden');
    if (isHidden) {
        body.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        body.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
};

export const openAskQuestionModal = () => {
    const m = el('modal-ask-question');
    if (!m) return;
    if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('askQuestion');
    }
    show('modal-ask-question');
    setTimeout(() => {
        if (el('modal-ask-question')) el('modal-ask-question').classList.remove('opacity-0');
        if (el('modal-ask-question-box')) el('modal-ask-question-box').classList.remove('translate-y-full');
    }, 10);
};

export const closeAskQuestionModal = (fH = false) => {
    const doClose = () => {
        if (el('modal-ask-question')) el('modal-ask-question').classList.add('opacity-0');
        if (el('modal-ask-question-box')) el('modal-ask-question-box').classList.add('translate-y-full');
        setTimeout(() => hide('modal-ask-question'), 300);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('askQuestion', fH, doClose);
    } else {
        doClose();
    }
};

export const submitCustomerQuestion = async () => {
    const name = (getV('ask-author-name') || '').trim() || 'Pelanggan';
    const category = getV('ask-category') || 'Pemesanan';
    const question = (getV('ask-question-text') || '').trim();

    if (!question) return showToast('Tuliskan pertanyaan Anda terlebih dahulu!');

    sLoad('Mengirim pertanyaan...');
    const faqId = 'faq-' + Date.now().toString(36);
    const faqDoc = {
        id: faqId,
        question: question,
        answer: '',
        category: category,
        authorName: name,
        status: 'pending_answer',
        createdAt: new Date().toISOString()
    };

    let saved = false;
    try {
        await db.collection("freshmart").doc("cms_data").collection("faqs").doc(faqId).set(faqDoc);
        saved = true;
    } catch (e) {
        console.warn('Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:', e);
    }

    // Fallback: simpan ke array faqs di dokumen cms_data
    if (!saved) {
        try {
            const updatedFaqs = [faqDoc, ...(appData.faqs || []).filter(x => x.id !== faqId)];
            await db.collection("freshmart").doc("cms_data").set({ faqs: updatedFaqs }, { merge: true });
            appData.faqs = updatedFaqs;
            saved = true;
        } catch (err2) {
            console.warn('Fallback cms_data.faqs juga gagal:', err2);
        }
    }

    hLoad();
    if (saved) {
        closeAskQuestionModal();
        setV('ask-question-text', '');
        showToast('Pertanyaan terkirim! Admin akan menjawabnya segera.');
        renderStorefrontFAQ();
    } else {
        showToast('Gagal mengirim pertanyaan. Coba lagi!');
    }
};

export let adminFAQFilter = 'all';

/**
 * Render FAQ di panel manajemen admin
 */
export const rAdmFAQ = () => {
    attachFAQRealtime();
    const faqs = appData.faqs || [];
    const filtered = faqs.filter(f => {
        if (adminFAQFilter === 'pending') return f.status === 'pending_answer';
        if (adminFAQFilter === 'published') return f.status === 'published';
        return true;
    });

    const pendingCount = faqs.filter(f => f.status === 'pending_answer').length;

    let h = `
        <div class="space-y-5 pb-12">
            <!-- Header Card -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div>
                    <h2 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-circle-question primary-text text-lg"></i> Kelola Tanya Jawab (Q&A / FAQ)
                    </h2>
                    <p class="text-xs font-medium text-slate-500 mt-0.5">Sunting FAQ toko & jawab pertanyaan yang diajukan pelanggan.</p>
                </div>
                <button onclick="openFAQModal('')" class="w-full sm:w-auto primary-bg text-white shadow-glow px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <i class="fa-solid fa-plus"></i> Tambah Q&A Baru
                </button>
            </div>

            <!-- Filter Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar border-b border-slate-200 dark:border-slate-700">
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${adminFAQFilter === 'all' ? 'primary-bg text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                    Semua (${faqs.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${adminFAQFilter === 'pending' ? 'primary-bg text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                    <span>Belum Dijawab</span>
                    ${pendingCount > 0 ? `<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${pendingCount}</span>` : ''}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${adminFAQFilter === 'published' ? 'primary-bg text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${!filtered.length ? `
                    <div class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                        <i class="fa-solid fa-inbox text-3xl text-slate-300 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Tidak ada Q&A ditemukan pada kategori filter ini.</p>
                    </div>
                ` : filtered.map(f => `
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${f.status === 'pending_answer' ? 'border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10' : 'border-slate-200/80 dark:border-slate-700/80'} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${f.status === 'published' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : f.status === 'pending_answer' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}">
                                    ${f.status === 'published' ? 'Terpublikasi' : f.status === 'pending_answer' ? 'Menunggu Jawaban' : 'Disembunyikan'}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${esc(f.category || 'Umum')}</span>
                                ${f.authorName ? `<span class="text-[10px] text-slate-400 italic">Oleh: ${esc(f.authorName)}</span>` : ''}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${f.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${f.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${esc(f.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${f.answer ? esc(f.answer) : '<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    setH('admin-content', h);
};

export const setAdminFAQFilter = (status) => {
    adminFAQFilter = status;
    rAdmFAQ();
};

export const openFAQModal = (id) => {
    const f = (appData.faqs || []).find(x => x.id === id) || {
        id: '', question: '', answer: '', category: 'Pemesanan', authorName: 'Admin', status: 'published'
    };

    setV('admin-faq-id', f.id);
    setV('admin-faq-category', f.category || 'Pemesanan');
    setV('admin-faq-author', f.authorName || 'Admin');
    setV('admin-faq-question', f.question || '');
    setV('admin-faq-answer', f.answer || '');
    setV('admin-faq-status', f.status || 'published');
    setIn('admin-faq-modal-title', id ? 'Edit Q&A' : 'Tambah Q&A Baru');

    const m = el('modal-admin-faq');
    if (!m) return;
    if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('adminFAQ');
    }
    show('modal-admin-faq');
    setTimeout(() => {
        if (el('modal-admin-faq')) el('modal-admin-faq').classList.remove('opacity-0');
        if (el('modal-admin-faq-box')) el('modal-admin-faq-box').classList.remove('translate-y-full');
    }, 10);
};

export const closeAdminFAQModal = (fH = false) => {
    const doClose = () => {
        if (el('modal-admin-faq')) el('modal-admin-faq').classList.add('opacity-0');
        if (el('modal-admin-faq-box')) el('modal-admin-faq-box').classList.add('translate-y-full');
        setTimeout(() => hide('modal-admin-faq'), 300);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('adminFAQ', fH, doClose);
    } else {
        doClose();
    }
};

export const saveAdminFAQ = async () => {
    const id = getV('admin-faq-id') || ('faq-' + Date.now().toString(36));
    const category = getV('admin-faq-category');
    const authorName = (getV('admin-faq-author') || '').trim() || 'Admin';
    const question = (getV('admin-faq-question') || '').trim();
    const answer = (getV('admin-faq-answer') || '').trim();
    let status = getV('admin-faq-status');

    if (!question) return showToast('Pertanyaan tidak boleh kosong!');
    if (answer && status === 'pending_answer') status = 'published';

    sLoad('Menyimpan Q&A...');
    const faqDoc = {
        id,
        question,
        answer,
        category,
        authorName,
        status,
        updatedAt: new Date().toISOString()
    };

    let currentFaqs = [...(appData.faqs || [])];
    const idx = currentFaqs.findIndex(x => x.id === id);
    if (idx > -1) currentFaqs[idx] = { ...currentFaqs[idx], ...faqDoc };
    else currentFaqs.unshift(faqDoc);
    appData.faqs = currentFaqs;

    try {
        await db.collection("freshmart").doc("cms_data").collection("faqs").doc(id).set(faqDoc, { merge: true });
    } catch (e) {
        console.warn('Gagal set ke sub-koleksi faqs:', e);
    }

    try {
        await db.collection("freshmart").doc("cms_data").set({ faqs: currentFaqs }, { merge: true });
    } catch (e) {
        console.warn('Gagal update cms_data.faqs:', e);
    }

    hLoad();
    closeAdminFAQModal();
    showToast('Q&A Berhasil Disimpan!');
    rAdmFAQ();
};

export const deleteAdminFAQ = (id) => {
    showConfirm("Hapus Q&A", "Yakin ingin menghapus pertanyaan ini?", async () => {
        sLoad('Menghapus Q&A...');
        let currentFaqs = (appData.faqs || []).filter(x => x.id !== id);
        appData.faqs = currentFaqs;

        try {
            await db.collection("freshmart").doc("cms_data").collection("faqs").doc(id).delete();
        } catch (e) {
            console.warn('Gagal delete dari sub-koleksi faqs:', e);
        }

        try {
            await db.collection("freshmart").doc("cms_data").set({ faqs: currentFaqs }, { merge: true });
        } catch (e) {
            console.warn('Gagal update cms_data.faqs:', e);
        }

        hLoad();
        showToast('Q&A Berhasil Dihapus!');
        rAdmFAQ();
    });
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.attachFAQRealtime = attachFAQRealtime;
window.renderStorefrontFAQ = renderStorefrontFAQ;
window.selectFAQCategory = selectFAQCategory;
window.filterStorefrontFAQ = filterStorefrontFAQ;
window.toggleFAQAccordion = toggleFAQAccordion;
window.openAskQuestionModal = openAskQuestionModal;
window.closeAskQuestionModal = closeAskQuestionModal;
window.submitCustomerQuestion = submitCustomerQuestion;
window.rAdmFAQ = rAdmFAQ;
window.setAdminFAQFilter = setAdminFAQFilter;
window.openFAQModal = openFAQModal;
window.closeAdminFAQModal = closeAdminFAQModal;
window.saveAdminFAQ = saveAdminFAQ;
window.deleteAdminFAQ = deleteAdminFAQ;

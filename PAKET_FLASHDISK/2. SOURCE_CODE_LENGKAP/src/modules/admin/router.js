/**
 * ============================================================
 * MODUL ADMIN: TAB ROUTER & NAVIGATION
 * Mengatur pergantian tab admin (pesanan, pengaturan, produk,
 * kategori, merek, bank, banner, voucher, database pelanggan,
 * program hadiah, ulasan pelanggan, FAQ, pajak, dan piutang).
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { 
    appData, cTab, setCTab, aSq, setASq, 
    aOrdLst, setAOrdLst, aCustLst, setACustLst, 
    aRevLst, setARevLst, gReviews, setGReviews 
} from '../../core/state.js';
import { el, show, hide, setIn, setH, showToast } from '../../core/utils.js';

export const openAdminTab = (t, fH = false) => {
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    
    setCTab(t);
    setASq('');
    
    if (!fH) {
        const curState = history.state;
        if (curState && curState.view === 'view-admin' && curState.tab) {
            history.replaceState({ view: 'view-admin', tab: t }, '', window.location.href);
        } else {
            history.pushState({ view: 'view-admin', tab: t }, '', window.location.href);
        }
    }

    hide('admin-dashboard-view');
    show('admin-content-view');
    show('btn-admin-back');
    hide('admin-logo-box');
    
    const titles = {
        'orders': 'Pesanan',
        'settings': 'Toko',
        'products': 'Produk',
        'categories': 'Kategori',
        'brands': 'Merek',
        'banks': 'Rekening',
        'banners': 'Banner',
        'vouchers': 'Voucher',
        'customers': 'Database Pelanggan',
        'rewards': 'Program Hadiah',
        'reviews': 'Ulasan Pelanggan',
        'faqs': 'Tanya Jawab / Q&A',
        'tax': 'Pajak & Keuangan',
        'piutang': 'Piutang Tempo',
        'colors': 'Database Warna'
    };
    
    setIn('admin-header-title', titles[t] || 'CMS');
    
    if (t !== 'orders' && aOrdLst) { aOrdLst(); setAOrdLst(null); }
    if (t !== 'customers' && aCustLst) { aCustLst(); setACustLst(null); }
    if (t !== 'reviews' && aRevLst) { aRevLst(); setARevLst(null); }

    if (t === 'settings') {
        if (typeof window.rAdmSet === 'function') window.rAdmSet();
    } else if (t === 'orders') {
        if (typeof window.rAdmOrd === 'function') window.rAdmOrd();
    } else if (t === 'tax') {
        if (typeof window.rTaxPanel === 'function') window.rTaxPanel();
    } else if (t === 'piutang') {
        if (typeof window.rAdmPiutang === 'function') window.rAdmPiutang();
    } else if (t === 'customers') {
        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aCustLst) { aCustLst(); setACustLst(null); }
        const unsubCust = db.collection("freshmart").doc("cms_data").collection("customers")
            .onSnapshot(snap => {
                appData.customers = snap.docs.map(d => d.data());
                if (typeof window.rAdmL === 'function') window.rAdmL('customers');
            }, () => { 
                showToast("Gagal memuat data pelanggan!"); 
                if (typeof window.rAdmL === 'function') window.rAdmL('customers'); 
            });
        setACustLst(unsubCust);
    } else if (t === 'reviews') {
        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aRevLst) { aRevLst(); setARevLst(null); }
        const unsubRev = db.collection("freshmart").doc("cms_data").collection("reviews")
            .onSnapshot(snap => {
                const reviews = snap.docs.map(d => d.data());
                reviews.sort((a, b) => {
                    const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
                    const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
                    return tb - ta;
                });
                setGReviews(reviews);
                if (typeof window.rAdmReviews === 'function') window.rAdmReviews();
            }, () => { showToast("Gagal memuat ulasan!"); });
        setARevLst(unsubRev);
    } else if (t === 'faqs') {
        if (typeof window.rAdmFAQ === 'function') window.rAdmFAQ();
    } else {
        if (typeof window.rAdmL === 'function') window.rAdmL(t);
    }
};

// ─── Expose ke window untuk navigasi inline HTML ──────
window.openAdminTab = openAdminTab;

import React, { useState, useEffect, useRef, useMemo } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import DOMPurify from 'dompurify';
import { db, auth, analytics, ADMIN_UID, GAS_UPLOAD_URL } from './db';

// ==========================================
// CONSTANTS & DEFAULT STATE
// ==========================================
const GAS_SECRET_TOKEN = "B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p";

const uiPalettes = {
  'emerald' : { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b' },
  'teal'    : { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
  'cyan'    : { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
  'sky'     : { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
  'blue'    : { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
  'indigo'  : { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
  'violet'  : { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
  'purple'  : { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
  'fuchsia' : { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
  'pink'    : { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
  'rose'    : { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' },
  'red'     : { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
  'orange'  : { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12' },
  'amber'   : { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' },
  'yellow'  : { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12' },
  'lime'    : { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314' },
  'green'   : { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
  'slate'   : { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
  'stone'   : { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917' }
};

const defApp = { 
  store: { 
    name: "Toko Putri", slogan: "Solusi Grosir & Alat Teknik", logo: "fa-store", 
    wa: "", address: "", lat: "", lng: "", costPerKm: 0, 
    isDeliveryEnabled: true, isPickupEnabled: true, 
    allProductsIcon: "", allBrandsIcon: "", 
    categoryStyle: "text", brandStyle: "image",
    showCategories: true, showBrands: true,
    themeColor: "#10b981", uiTheme: "emerald",
    useStock: false, ppnEnabled: false, ppnRate: 11
  }, 
  payment: { qrisUrl: "" }, 
  config: { gasUrl: "" }, 
  banks: [], banners: [], categories: [], brands: [], products: [], vouchers: [], rewards: [], customers: [],
  taxSettings: {
    companyName: "", npwp: "", taxScheme: "umkm_final", customTaxRate: 0.5,
    monthlyExpenses: {}, balanceSheet: { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 }
  }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
const esc = s => (s === null || s === undefined) ? '' : s.toString().replace(/[&<>'"]/g, t => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[t]));

const fixD = v => {
  if (typeof v !== 'string') return v;
  const m = v.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : v;
};

const getOptImg = (url, sizeOpt) => {
  if (typeof url !== 'string') return url;
  if (url.includes('lh3.googleusercontent.com/d/')) {
    return `${url.split('=')[0]}=${sizeOpt}`;
  }
  return url;
};

const fCur = a => {
  const n = Number(a);
  return (isNaN(n) || a === null) ? 'Rp 0' : new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
  }).format(Math.abs(n)).replace(/^/, n < 0 ? '-' : '');
};

const normalizeWA = (raw) => {
  let n = (raw||'').toString().replace(/\D/g,'');
  if (!n) return '';
  if (n.startsWith('0')) n = '62' + n.substring(1);
  else if (!n.startsWith('62')) n = '62' + n;
  return n;
};

const getYouTubeId = (url) => {
  if (!url) return null;
  url = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const Footer = ({ appData, setCurrentView }) => {
  return (
    <div className="w-full mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 relative overflow-hidden pb-24 sm:pb-12 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-[var(--color-primary)]"></div>
      <div className="w-full xl:max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 text-center md:text-left">
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-start">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-2.5 border border-slate-100 dark:border-slate-700 shadow-sm shrink-0 overflow-hidden">
                {appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) ? (
                  <img src={appData.store.logo} alt="Logo" className="w-full h-full object-contain" />
                ) : (
                  <i className="fa-solid fa-store text-3xl text-[var(--color-primary)]"></i>
                )}
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start mt-2 sm:mt-0">
                <h3 className="font-black text-xl text-slate-800 dark:text-white leading-tight mb-1.5">{appData.store?.name || 'Toko Putri'}</h3>
                <span className="inline-flex px-2.5 py-0.5 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-[9px] font-black rounded border border-indigo-100 dark:border-indigo-800/50 uppercase tracking-widest w-max items-center gap-1.5"><i className="fa-solid fa-circle-check"></i> Official Store</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 font-semibold pr-0 lg:pr-6 max-w-sm md:max-w-none mx-auto md:mx-0">{appData.store?.description || 'Deskripsi usaha belum diatur.'}</p>
            <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/80 w-full">
              <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Mendukung Pembayaran &amp; Pengiriman</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl text-slate-300 dark:text-slate-600">
                <i className="fa-brands fa-cc-visa hover:text-blue-500 transition-colors cursor-pointer" title="Visa"></i>
                <i className="fa-brands fa-cc-mastercard hover:text-orange-500 transition-colors cursor-pointer" title="Mastercard"></i>
                <i className="fa-solid fa-qrcode hover:text-rose-500 transition-colors cursor-pointer" title="QRIS"></i>
                <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <i className="fa-solid fa-truck-fast hover:text-emerald-500 transition-colors cursor-pointer" title="Ekspedisi Cepat"></i>
                <i className="fa-solid fa-box hover:text-amber-500 transition-colors cursor-pointer" title="Kargo"></i>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="font-black text-slate-800 dark:text-white mb-5 uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 w-full">
              <div className="w-7 h-7 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]/30 flex items-center justify-center"><i className="fa-solid fa-link text-xs"></i></div> Tautan Cepat
            </h4>
            <ul className="space-y-1.5 w-full max-w-[200px] md:max-w-none text-left">
              <li><button className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 px-3 py-2.5 md:-ml-3 rounded-xl flex items-center justify-center md:justify-start gap-3 group transition-all w-full text-left" onClick={() => setCurrentView('catalog')}>
                <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)] transition-colors hidden md:block"></i> Halaman Utama
              </button></li>
              <li><button className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 px-3 py-2.5 md:-ml-3 rounded-xl flex items-center justify-center md:justify-start gap-3 group transition-all w-full text-left" onClick={() => setCurrentView('cart')}>
                <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)] transition-colors hidden md:block"></i> Keranjang Belanja
              </button></li>
              <li><button className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 px-3 py-2.5 md:-ml-3 rounded-xl flex items-center justify-center md:justify-start gap-3 group transition-all w-full text-left" onClick={() => setCurrentView('wishlist')}>                      
                <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)] transition-colors hidden md:block"></i> Produk Favorit
              </button></li>
              <li><button className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 px-3 py-2.5 md:-ml-3 rounded-xl flex items-center justify-center md:justify-start gap-3 group transition-all w-full text-left" onClick={() => setCurrentView('orders')}>                     
                <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)] transition-colors hidden md:block"></i> Riwayat Pesanan
              </button></li>
              <li><button className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 px-3 py-2.5 md:-ml-3 rounded-xl flex items-center justify-center md:justify-start gap-3 group transition-all w-full text-left" onClick={() => setCurrentView('admin-login')}>
                <i className="fa-solid fa-shield-halved text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)] transition-colors hidden md:block"></i> Akses Admin
              </button></li>
            </ul>
          </div>
          <div className="md:col-span-7 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-slate-800 dark:text-white mb-5 uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 w-full">
              <div className="w-7 h-7 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]/30 flex items-center justify-center"><i className="fa-solid fa-headset text-xs"></i></div> Hubungi Kami
            </h4>
            <div className="space-y-4 w-full max-w-sm md:max-w-none mx-auto">
              {appData.store?.wa && (
                <a className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all group cursor-pointer shadow-sm" href={`https://wa.me/${appData.store.wa}`} target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0">
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                  </div>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-0.5">Customer Service</p>
                    <p className="text-sm font-black text-slate-900 dark:text-slate-100 truncate">Konsultasi via WhatsApp</p>
                  </div>
                </a>
              )}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50 space-y-4 shadow-sm text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-3.5 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700"><i className="fa-solid fa-envelope text-slate-400"></i></div>
                  <span className="font-bold truncate tracking-wide mt-1 sm:mt-1.5">support@restukaryautama.com</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-3.5 text-sm text-slate-500 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700"><i className="fa-solid fa-clock text-slate-400"></i></div>
                  <div className="min-w-0 text-center sm:text-left mt-1 sm:mt-0">
                    <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[9px] font-black rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest mb-1.5">Operasional</span>
                    <p className="font-bold text-slate-600 dark:text-slate-300 truncate tracking-wide">Buka Setiap Hari (08:00 - 17:00)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
        <div className="w-full xl:max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
            &#169; 2026 <span className="font-black text-slate-700 dark:text-slate-200">{appData.store?.name || 'Toko'}</span>. All rights reserved.
          </p>
          <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest flex items-center justify-center gap-1.5">
            Powered by <i className="fa-solid fa-bolt text-[var(--color-primary)]"></i> Blogger PWA System
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  // App states
  const [appData, setAppData] = useState(() => {
    try {
      const cached = localStorage.getItem('freshmart_cms_data');
      return cached ? { ...defApp, ...JSON.parse(cached) } : defApp;
    } catch(e) {
      return defApp;
    }
  });

  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('freshmart_cart')) || []; } catch(e) { return []; }
  });

  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('freshmart_wishlist')) || []; } catch(e) { return []; }
  });

  const [myOrders, setMyOrders] = useState(() => {
    try { return JSON.parse(localStorage.getItem('freshmart_my_orders')) || []; } catch(e) { return []; }
  });

  const [currentView, setCurrentView] = useState('catalog'); // catalog, cart, checkout, payment, orders, wishlist, admin-login, admin
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  // Filters & Page settings
  const [aCat, setACat] = useState('Semua Produk');
  const [aBrand, setABrand] = useState('Semua Merek');
  const [sQ, setSQ] = useState('');
  const [cSort, setCSort] = useState('newest');
  const [cView, setCView] = useState('grid');
  const [cPage, setCPage] = useState(1);
  const iPP = 12;

  // Checkout inputs
  const [cust, setCust] = useState({
    name: '', address: '', lat: null, lng: null,
    deliveryMethod: 'delivery', distance: 0, note: '', wa: ''
  });
  const [currentMember, setCurrentMember] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);
  const [vouch, setVouch] = useState(null);
  const [voucherCodeInput, setVoucherCodeInput] = useState('');
  const [voucherError, setVoucherError] = useState('');
  const [useMemberPoints, setUseMemberPoints] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [tempoDp, setTempoDp] = useState(0);

  // Bukti Upload
  const [buktiFile, setBuktiFile] = useState(null);
  const [buktiUrl, setBuktiUrl] = useState(null);
  const [buktiUploading, setBuktiUploading] = useState(false);
  const [buktiUploaded, setBuktiUploaded] = useState(false);
  const [buktiError, setBuktiError] = useState(false);
  const [buktiUploadingText, setBuktiUploadingText] = useState('');

  // Modals & Popups states
  const [toast, setToast] = useState({ show: false, message: '', type: 'info', title: '' });
  const [confirm, setConfirm] = useState({ show: false, title: '', message: '', onConfirm: null, btnText: 'Ya', isDanger: true });
  const [scannerOpen, setScannerOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [brandModalOpen, setBrandModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(null);
  const [cQty, setCQty] = useState(1);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0); // 0 = image, 1 = video
  const [productReviews, setProductReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  // Member Modal
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  // Admin states
  const [activeAdminTab, setActiveAdminTab] = useState('orders');
  const [adminSearch, setAdminSearch] = useState('');
  const [adminReportPeriod, setAdminReportPeriod] = useState('today');
  const [adminReports, setAdminReports] = useState(null);
  const [adminOrders, setAdminOrders] = useState([]);
  const [adminCustomers, setAdminCustomers] = useState([]);
  const [adminReviews, setAdminReviews] = useState([]);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [adminFormType, setAdminFormType] = useState(''); // products, categories, brands, vouchers, banks, banners, rewards
  const [adminFormItem, setAdminFormItem] = useState(null);
  const [selectedAdminOrder, setSelectedAdminOrder] = useState(null);
  const [adminOrderModalOpen, setAdminOrderModalOpen] = useState(false);
  const [receiptPreviewOpen, setReceiptPreviewOpen] = useState(false);
  const [docPreviewOpen, setDocPreviewOpen] = useState(false);
  const [docPreviewType, setDocPreviewType] = useState('invoice'); // invoice, proforma, surat_jalan

  // Temp variables for wholesale/variants CRUD
  const [tempWholesale, setTempWholesale] = useState([]);
  const [tempVariants, setTempVariants] = useState([]);

  // Admin extra states
  const [reviewFilterMode, setReviewFilterMode] = useState('all'); // all, visible, hidden
  const [adminReplyTarget, setAdminReplyTarget] = useState(null); // { id, currentReply }
  const [adminReplyText, setAdminReplyText] = useState('');
  const [adminImgUploading, setAdminImgUploading] = useState(false);
  const [adminSettings, setAdminSettings] = useState(null); // for settings tab edit
  const [adminRestockItem, setAdminRestockItem] = useState(null);
  const [adminRestockQty, setAdminRestockQty] = useState(0);
  const [adminRestockVariantIdx, setAdminRestockVariantIdx] = useState(0);
  const [piutangOrders, setPiutangOrders] = useState([]);
  const [piutangSearch, setPiutangSearch] = useState('');

  // Auto-slide banner ref
  const bannerSliderRef = useRef(null);

  // Toast handler
  const showToast = (message, type = null, title = '', duration = 3000) => {
    if (!type) {
      const low = message.toLowerCase();
      if (/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(low)) type = 'success';
      else if (/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(low)) type = 'error';
      else if (/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(low)) type = 'warning';
      else if (/upload|proses|memuat|loading|sedang/.test(low)) type = 'loading';
      else type = 'info';
    }
    setToast({ show: true, message, type, title });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, duration);
  };

  // Confirm Modal
  const showConfirm = (title, message, onConfirm, btnText = "Ya, Hapus", isDanger = true) => {
    setConfirm({ show: true, title, message, onConfirm, btnText, isDanger });
  };
  const closeConfirm = () => {
    setConfirm(prev => ({ ...prev, show: false }));
  };

  // Sync and Theme setup
  useEffect(() => {
    const gl = document.getElementById('global-loader');
    if (gl) gl.style.display = 'none';

    // Check auth
    const unsubAuth = auth.onAuthStateChanged(usr => {
      setUser(usr);
      if (usr && usr.uid === ADMIN_UID) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    // Load initial data
    const loadData = async () => {
      try {
        const d = await db.collection("freshmart").doc("cms_data").get();
        if (d.exists) {
          const f = d.data();
          const serverUpdate = f.lastUpdate || 0;
          const localUpdate = parseInt(localStorage.getItem('freshmart_last_update') || '0');

          let loadedProducts = [];
          if (localStorage.getItem('freshmart_products') && localUpdate >= serverUpdate) {
            loadedProducts = JSON.parse(localStorage.getItem('freshmart_products'));
          } else {
            const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
            loadedProducts = pSnap.docs.map(doc => doc.data()).sort((a,b) => (b.id||0) - (a.id||0));
            localStorage.setItem('freshmart_products', JSON.stringify(loadedProducts));
            localStorage.setItem('freshmart_last_update', serverUpdate.toString());
          }

          const merged = { ...defApp, ...f, products: loadedProducts };
          setAppData(merged);
          localStorage.setItem('freshmart_cms_data', JSON.stringify(f));
        }
      } catch(e) {
        showToast("Mode Offline (Data Lokal)");
      }
    };
    loadData();

    // Listeners for realtime sync
    const unsubCms = db.collection("freshmart").doc("cms_data").onSnapshot(async doc => {
      if (!doc.exists) return;
      const f = doc.data();
      const serverUpdate = f.lastUpdate || 0;
      const localUpdate = parseInt(localStorage.getItem('freshmart_last_update') || '0');
      if (serverUpdate <= localUpdate) return;

      try {
        const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
        const serverProducts = pSnap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
        setAppData(prev => ({
          ...prev,
          ...f,
          products: serverProducts
        }));
        localStorage.setItem('freshmart_products', JSON.stringify(serverProducts));
        localStorage.setItem('freshmart_last_update', serverUpdate.toString());
      } catch(err) {
        console.warn(err);
      }
    });

    const unsubRewards = db.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(snap => {
      const serverRewards = snap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
      setAppData(prev => ({ ...prev, rewards: serverRewards }));
    });

    return () => {
      unsubAuth();
      unsubCms();
      unsubRewards();
    };
  }, []);

  // Theme variable injector
  const activeColors = useMemo(() => {
    const themeName = appData.store.uiTheme || 'emerald';
    const colors = uiPalettes[themeName] || uiPalettes['emerald'];
    const brandColor = appData.store.themeColor || colors[500];

    const hexToRgb = (hex) => {
      let bigint = parseInt(hex.replace('#', ''), 16);
      return ((bigint >> 16) & 255) + ',' + ((bigint >> 8) & 255) + ',' + (bigint & 255);
    };

    document.documentElement.style.setProperty('--color-primary', brandColor);
    document.documentElement.style.setProperty('--color-primary-dark', colors[600]);
    document.documentElement.style.setProperty('--color-primary-light', colors[50]);
    document.documentElement.style.setProperty('--color-primary-rgb', hexToRgb(brandColor));

    Object.keys(colors).forEach(shade => {
      document.documentElement.style.setProperty(`--color-emerald-${shade}`, colors[shade]);
    });

    // Update meta theme-color tag for mobile browsers
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', brandColor);

    return colors;
  }, [appData.store?.uiTheme, appData.store?.themeColor]);

  // Listen to User Orders status realtime
  useEffect(() => {
    if (currentView !== 'orders' || !myOrders.length) return;
    const MAX_LIVE_ORDERS = 15;
    const unsubs = myOrders.slice(0, MAX_LIVE_ORDERS).map((o, idx) => {
      return db.collection("freshmart_orders").doc(o.orderId).onSnapshot(doc => {
        if (!doc.exists) return;
        const data = doc.data();
        const newStatus = data.status;
        const newRewardStatus = data.claimedReward ? data.claimedReward.status : null;
        const newRewardNote = data.claimedReward ? (data.claimedReward.note || '') : '';

        setMyOrders(prev => {
          const updated = [...prev];
          if (updated[idx]) {
            let changed = false;
            if (updated[idx].status !== newStatus) {
              updated[idx].status = newStatus;
              changed = true;
            }
            if (updated[idx].claimedReward && newRewardStatus) {
              if (updated[idx].claimedReward.status !== newRewardStatus || updated[idx].claimedReward.note !== newRewardNote) {
                updated[idx].claimedReward.status = newRewardStatus;
                updated[idx].claimedReward.note = newRewardNote;
                changed = true;
              }
            }
            if (changed) {
              localStorage.setItem('freshmart_my_orders', JSON.stringify(updated));
              showToast(`Status pesanan #${o.orderId.split('-').pop()} diperbarui!`);
            }
          }
          return updated;
        });
      });
    });
    return () => unsubs.forEach(unsub => unsub());
  }, [currentView, myOrders.length]);

  // Auto-slide banner slider
  useEffect(() => {
    if (currentView !== 'catalog' || !appData.banners?.length) return;
    const slideInterval = setInterval(() => {
      const slider = bannerSliderRef.current;
      if (!slider) return;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [currentView, appData.banners]);

  // Load reviews for product modal
  const loadProductReviews = async (productId) => {
    setReviewsLoading(true);
    try {
      const snap = await db.collection("freshmart").doc("cms_data").collection("reviews").where("productId", "==", productId).get();
      const list = snap.docs.map(doc => doc.data()).filter(r => r.isVisible === true || r.isVisible === 'true');
      setProductReviews(list);
    } catch(e) {
      console.error(e);
    } finally {
      setReviewsLoading(false);
    }
  };

  // Image compression and upload helpers
  const compressImageForUpload = (file, maxSizePx = 1600, quality = 0.82) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > maxSizePx || height > maxSizePx) {
            if (width > height) { height = Math.round(height * maxSizePx / width); width = maxSizePx; }
            else { width = Math.round(width * maxSizePx / height); height = maxSizePx; }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width; canvas.height = height;
          canvas.getContext('2d').drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (!blob) return resolve(file);
            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
          }, 'image/jpeg', quality);
        };
        img.onerror = () => resolve(file);
        img.src = ev.target.result;
      };
      reader.onerror = () => resolve(file);
    });
  };

  const doSingleGDriveUpload = async (file, orderId) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsDataURL(file);
      reader.onload = async () => {
        try {
          const base64Data = reader.result.split(',')[1];
          const safeName = (file.name || 'bukti.jpg').replace(/[^a-zA-Z0-9.]/g, '_');
          const payload = {
            name: 'BUKTI_' + orderId + '_' + Date.now() + '_' + safeName,
            mimeType: file.type || 'image/jpeg',
            data: base64Data,
            token: GAS_SECRET_TOKEN
          };
          const res = await fetch(GAS_UPLOAD_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            redirect: 'follow'
          });
          if (!res.ok) return resolve(null);
          const text = await res.ok ? await res.text() : '';
          let data;
          try { data = JSON.parse(text); } catch(e) { return resolve(null); }
          if (data && data.status === 'success' && data.url) {
            resolve(fixD(data.url));
          } else {
            resolve(null);
          }
        } catch(e) {
          resolve(null);
        }
      };
      reader.onerror = () => resolve(null);
    });
  };

  const uploadBuktiToGDrive = async (file, orderId) => {
    if (!file) return null;
    let fileToUpload = file;
    try { fileToUpload = await compressImageForUpload(file); } catch(e) {}
    const MAX_RETRY = 2;
    const TIMEOUT_MS = 30000;

    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
      setBuktiUploadingText(attempt > 1 ? `Retry ${attempt}/${MAX_RETRY} to Drive...` : 'Uploading to Drive...');
      try {
        const url = await Promise.race([
          doSingleGDriveUpload(fileToUpload, orderId),
          new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT_MS))
        ]);
        if (url) return url;
      } catch(e) {
        console.warn(`Attempt ${attempt} failed:`, e.message);
      }
      if (attempt < MAX_RETRY) await new Promise(r => setTimeout(r, 1500 * attempt));
    }
    return null;
  };

  const handleBuktiUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return showToast('Hanya gambar yang diizinkan!');
    if (file.size > 5 * 1024 * 1024) return showToast('Max file size 5MB!');

    setBuktiFile(file);
    setBuktiUrl(null);
    setBuktiUploading(true);
    setBuktiUploaded(false);
    setBuktiError(false);

    const tempOrderId = 'TEMP_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await uploadBuktiToGDrive(file, tempOrderId);

    setBuktiUploading(false);
    if (gDriveUrl) {
      setBuktiUrl(gDriveUrl);
      setBuktiUploaded(true);
      showToast('Bukti berhasil diupload!');
    } else {
      setBuktiError(true);
      showToast('Upload gagal! Silakan coba lagi.');
    }
  };

  const retryBuktiUpload = async () => {
    if (!buktiFile) return showToast('Pilih file gambar dulu!');
    setBuktiUploading(true);
    setBuktiError(false);
    const tempOrderId = 'RETRY_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await uploadBuktiToGDrive(buktiFile, tempOrderId);
    setBuktiUploading(false);
    if (gDriveUrl) {
      setBuktiUrl(gDriveUrl);
      setBuktiUploaded(true);
      showToast('Upload berhasil!');
    } else {
      setBuktiError(true);
      showToast('Upload masih gagal.');
    }
  };

  // GPS coordinates semat
  const getLocation = () => {
    showToast("Mengakses GPS...", "loading");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCust(prev => ({ ...prev, lat, lng }));

          // Geocode / distance calculation from store coordinates
          const storeLat = parseFloat(appData.store.lat);
          const storeLng = parseFloat(appData.store.lng);
          if (!isNaN(storeLat) && !isNaN(storeLng)) {
            const dist = getDistance(storeLat, storeLng, lat, lng);
            setCust(prev => ({ ...prev, distance: dist }));
          }
          showToast("Lokasi berhasil disematkan!");
        },
        (error) => {
          showToast("Gagal mengakses lokasi. Masukkan koordinat manual.");
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      showToast("Browser tidak mendukung geolokasi.");
    }
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = (lat2-lat1)*Math.PI/180;
    const dLon = (lon2-lon1)*Math.PI/180;
    const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R*c;
  };

  // Cart helper functions
  const getEffP = (item) => {
    const p = appData.products.find(x => x.id === item.id);
    let basePrice = item.price || 0;
    if (item.variantName && p?.variants) {
      const v = p.variants.find(vv => vv.name === item.variantName);
      if (v && v.price != null) basePrice = v.price;
    }
    // Grosir calculation (only applies if no variants)
    if (p && p.wholesale?.length && !p.variants?.length) {
      // Find eligible wholesale tier based on quantity
      const tier = p.wholesale.slice().sort((a,b) => b.minQty - a.minQty).find(w => item.qty >= parseFloat(w.minQty));
      if (tier) basePrice = tier.price;
    }
    return basePrice;
  };

  const getEffHpp = (item) => {
    const p = appData.products.find(x => x.id === item.id);
    if (!p) return 0;
    if (item.variantName && p.variants) {
      const v = p.variants.find(vv => vv.name === item.variantName);
      return v?.hpp || p.hpp || 0;
    }
    return p.hpp || 0;
  };

  const subtotalCart = useMemo(() => {
    return cart.reduce((sum, item) => sum + getEffP(item) * item.qty, 0);
  }, [cart, appData.products]);

  const shippingCost = useMemo(() => {
    if (cust.deliveryMethod !== 'delivery') return 0;
    return Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
  }, [cust.deliveryMethod, cust.distance, appData.store.costPerKm]);

  // Discount calculation
  const discounts = useMemo(() => {
    let pDisc = 0;
    let sDisc = 0;
    if (vouch) {
      let eligibleSubtotal = subtotalCart;
      if (vouch.targetProduct) {
        const targetId = parseInt(vouch.targetProduct);
        const eligibleItems = cart.filter(i => i.id === targetId);
        eligibleSubtotal = eligibleItems.reduce((sum, item) => sum + getEffP(item) * item.qty, 0);
      }
      if (vouch.type === 'shipping_free') {
        sDisc = shippingCost;
      } else if (vouch.type === 'percent') {
        let calc = eligibleSubtotal * (parseFloat(vouch.value) / 100);
        if (vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calc = Math.min(calc, parseFloat(vouch.maxDiscount));
        pDisc = calc;
      } else {
        pDisc = Math.min(parseFloat(vouch.value) || 0, eligibleSubtotal);
      }
    }
    return { productDiscount: pDisc, shippingDiscount: Math.min(sDisc, shippingCost) };
  }, [vouch, cart, subtotalCart, shippingCost]);

  // PPN calculation
  const ppnAmount = useMemo(() => {
    if (!appData.store.ppnEnabled) return 0;
    const baseVal = Math.max(0, (subtotalCart - discounts.productDiscount) + (shippingCost - discounts.shippingDiscount));
    const rate = parseFloat(appData.store.ppnRate) || 11;
    return Math.round(baseVal * rate / 100);
  }, [appData.store.ppnEnabled, appData.store.ppnRate, subtotalCart, shippingCost, discounts]);

  // Points claim reward point discount
  const pointsDiscount = useMemo(() => {
    if (!useMemberPoints || !currentMember) return 0;
    const maxPayable = (subtotalCart - discounts.productDiscount) + (shippingCost - discounts.shippingDiscount) + ppnAmount;
    return Math.min(maxPayable, parseFloat(currentMember.points) || 0);
  }, [useMemberPoints, currentMember, subtotalCart, discounts, shippingCost, ppnAmount]);

  const grandTotal = useMemo(() => {
    const val = (subtotalCart - discounts.productDiscount) + (shippingCost - discounts.shippingDiscount) + ppnAmount - pointsDiscount;
    return Math.max(0, val);
  }, [subtotalCart, discounts, shippingCost, ppnAmount, pointsDiscount]);

  // Check member status on phone change
  const checkMemberStatus = async (phoneInput) => {
    const rawWa = phoneInput.trim();
    if (!rawWa) {
      setCurrentMember(null);
      return;
    }
    const normalized = normalizeWA(rawWa);
    setCust(prev => ({ ...prev, wa: normalized }));
    try {
      const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(normalized).get();
      if (doc.exists) {
        setCurrentMember({ phone: normalized, ...doc.data() });
      } else {
        setCurrentMember(null);
      }
    } catch(e) {
      setCurrentMember(null);
    }
  };

  // Apply Coupon / Voucher
  const handleApplyVoucher = () => {
    setVoucherError('');
    if (!voucherCodeInput.trim()) return;
    const code = voucherCodeInput.trim().toUpperCase();
    const found = appData.vouchers.find(v => v.code === code && (v.isShow === true || v.isShow === 'true'));
    if (!found) {
      setVoucherError('Kode Tidak Valid');
      setVouch(null);
      return;
    }

    // Validation checks
    if (found.minPurchase && subtotalCart < parseFloat(found.minPurchase)) {
      setVoucherError(`Minimal belanja ${fCur(found.minPurchase)}`);
      setVouch(null);
      return;
    }
    if (found.targetProduct) {
      const targetId = parseInt(found.targetProduct);
      if (!cart.some(item => item.id === targetId)) {
        setVoucherError('Khusus Produk Tertentu!');
        setVouch(null);
        return;
      }
    }
    if (found.type.includes('shipping') && cust.deliveryMethod !== 'delivery') {
      setVoucherError('Khusus pesanan dikirim kurir!');
      setVouch(null);
      return;
    }

    setVouch(found);
    showToast('Voucher Diterapkan!', 'success');
  };

  // Remove voucher
  const handleRemoveVoucher = () => {
    setVouch(null);
    setVoucherCodeInput('');
    setVoucherError('');
  };

  // Process checkout order
  const handleProcessOrder = async () => {
    if (isAdmin) {
      showToast("Anda login sebagai Admin. Silakan logout terlebih dahulu.");
      return;
    }

    const lastOrderTime = localStorage.getItem('freshmart_last_order');
    if (lastOrderTime && (Date.now() - parseInt(lastOrderTime)) < 60000) {
      showToast("Mohon tunggu 1 menit untuk pesanan baru.");
      return;
    }

    // Price verification check (anti-tamper)
    let priceWasTampered = false;
    const updatedCart = cart.map(cartItem => {
      const serverProd = appData.products.find(p => p.id === cartItem.id);
      if (!serverProd) return cartItem;
      const serverPrice = cartItem.variantName
        ? ((serverProd.variants||[]).find(v => v.name === cartItem.variantName)||{}).price ?? serverProd.price
        : serverProd.price;
      if (serverPrice !== undefined && Math.abs(cartItem.price - serverPrice) > 1) {
        priceWasTampered = true;
        return { ...cartItem, price: serverPrice };
      }
      return cartItem;
    });

    if (priceWasTampered) {
      setCart(updatedCart);
      localStorage.setItem('freshmart_cart', JSON.stringify(updatedCart));
      showToast("Harga produk diperbarui. Periksa kembali keranjang belanja Anda.");
      return;
    }

    // Check payment requirements
    const needsBukti = (paymentMethod === 'transfer' || paymentMethod === 'qris' || paymentMethod === 'tempo');
    if (needsBukti && !buktiUploaded) {
      showToast('Silakan upload bukti pembayaran terlebih dahulu!');
      return;
    }

    showToast('Memproses pesanan...', 'loading');

    try {
      const orderId = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2,6).toUpperCase();
      const pointsEarned = cart.reduce((sum, item) => sum + ((parseFloat(item.poin)||0) * item.qty), 0);

      const orderDoc = {
        orderId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        dateString: new Date().toISOString(),
        customer: cust,
        items: cart.map(i => ({
          ...i,
          effectivePrice: getEffP(i),
          hpp: getEffHpp(i)
        })),
        payment: {
          method: paymentMethod,
          subtotal: subtotalCart,
          shippingCost: shippingCost,
          shippingDiscount: discounts.shippingDiscount,
          productDiscount: discounts.productDiscount,
          ppnAmount,
          ppnRate: appData.store.ppnEnabled ? appData.store.ppnRate : 0,
          grandTotal
        },
        status: 'Baru',
        buktiPayment: buktiUrl || null
      };

      if (paymentMethod === 'tempo') {
        orderDoc.payment.tempoDp = tempoDp;
        orderDoc.payment.tempoBalance = grandTotal - tempoDp;
        orderDoc.payment.tempoDueDate = Date.now() + (30 * 24 * 60 * 60 * 1000);
        orderDoc.payment.paymentStatus = 'hutang';
      }

      const orderRef = db.collection("freshmart_orders").doc(orderId);
      const cmsDataRef = db.collection("freshmart").doc("cms_data");
      const memberRef = cust.wa ? cmsDataRef.collection("customers").doc(cust.wa) : null;
      let finalMemberPoints = null;

      // Transaction execution for atomic stock decrements and loyalty updates
      await db.runTransaction(async (transaction) => {
        // Read Phase
        const memberDoc = memberRef ? await transaction.get(memberRef) : null;
        let rewardDoc = null;
        if (selectedReward) {
          const rewardRef = db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString());
          rewardDoc = await transaction.get(rewardRef);
        }

        // Validate stock
        if (appData.store.useStock) {
          for (const item of cart) {
            const productRef = db.collection("freshmart").doc("cms_data").collection("products").doc(item.id.toString());
            const productSnap = await transaction.get(productRef);
            if (!productSnap.exists) throw new Error('PRODUK_TIDAK_DITEMUKAN');
            const pData = productSnap.data();

            if (item.variantName) {
              const variant = (pData.variants || []).find(v => v.name === item.variantName);
              const stk = parseFloat(variant?.stock || 0);
              if (stk < item.qty) throw new Error(`Stok ${item.name} (${item.variantName}) tidak cukup!`);
            } else {
              const stk = parseFloat(pData.stock || 0);
              if (stk < item.qty) throw new Error(`Stok ${item.name} tidak cukup!`);
            }
          }
        }

        // Validate rewards
        let rewardStockUpdated = null;
        if (selectedReward) {
          if (!rewardDoc || !rewardDoc.exists) throw new Error('HADIAH_TIDAK_DITEMUKAN');
          const rew = rewardDoc.data();
          if ((parseFloat(rew.stock)||0) <= 0) throw new Error('STOK_HADIAH_HABIS');
          rewardStockUpdated = (parseFloat(rew.stock)||0) - 1;
        }

        // Points update
        if (memberDoc && memberDoc.exists) {
          let points = parseFloat(memberDoc.data().points) || 0;
          if (selectedReward) {
            const cost = selectedReward.pointsCost;
            if (points < cost) throw new Error('POIN_TIDAK_CUKUP');
            points -= cost;
            orderDoc.claimedReward = { id: selectedReward.id, name: selectedReward.name, pointsCost: cost, status: 'pending', note: '' };
          }
          points += pointsEarned;
          finalMemberPoints = points;
          orderDoc.pointsEarned = pointsEarned;
          orderDoc.customerPhone = cust.wa;
          orderDoc.finalMemberPoints = points;
        }

        // Write Phase (Deductions)
        if (appData.store.useStock) {
          for (const item of cart) {
            const productRef = db.collection("freshmart").doc("cms_data").collection("products").doc(item.id.toString());
            const pSnap = await transaction.get(productRef);
            const pData = JSON.parse(JSON.stringify(pSnap.data()));

            if (item.variantName) {
              const vIdx = (pData.variants || []).findIndex(v => v.name === item.variantName);
              if (vIdx > -1) {
                pData.variants[vIdx].stock = Math.max(0, (parseFloat(pData.variants[vIdx].stock)||0) - item.qty);
                if (pData.variants[vIdx].stock === 0) pData.variants[vIdx].isActive = false;
                pData.variants[vIdx].totalSold = (parseFloat(pData.variants[vIdx].totalSold)||0) + item.qty;
              }
            } else {
              pData.stock = Math.max(0, (parseFloat(pData.stock)||0) - item.qty);
              if (pData.stock === 0) pData.isActive = 'false';
              pData.totalSold = (parseFloat(pData.totalSold)||0) + item.qty;
            }
            transaction.set(productRef, pData);
          }
        }

        transaction.set(orderRef, orderDoc);

        if (memberRef && finalMemberPoints !== null) {
          transaction.set(memberRef, { points: finalMemberPoints }, { merge: true });
        }
        if (rewardStockUpdated !== null && selectedReward) {
          const rewardRef = db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString());
          transaction.set(rewardRef, { stock: rewardStockUpdated }, { merge: true });
        }

        transaction.update(cmsDataRef, { lastUpdate: firebase.firestore.FieldValue.increment(1) });
      });

      // Clear local states
      const updatedOrders = [
        {
          orderId,
          date: new Date().toISOString(),
          total: grandTotal,
          itemCount: cart.reduce((sum, item) => sum + item.qty, 0),
          status: 'Baru',
          pointsEarned: orderDoc.pointsEarned || 0,
          claimedReward: orderDoc.claimedReward || null,
          finalMemberPoints: finalMemberPoints
        },
        ...myOrders
      ];
      setMyOrders(updatedOrders);
      localStorage.setItem('freshmart_my_orders', JSON.stringify(updatedOrders));
      localStorage.setItem('freshmart_last_order', Date.now().toString());

      setCart([]);
      localStorage.removeItem('freshmart_cart');
      setCust({
        name: '', address: '', lat: null, lng: null,
        deliveryMethod: 'delivery', distance: 0, note: '', wa: ''
      });
      setVouch(null);
      setVoucherCodeInput('');
      setSelectedReward(null);
      setUseMemberPoints(false);
      setBuktiFile(null);
      setBuktiUrl(null);
      setBuktiUploaded(false);

      showToast('Pesanan berhasil dibuat!', 'success');
      setCurrentView('catalog');

    } catch(err) {
      showToast(`Gagal: ${err.message}`, 'error');
    }
  };

  // Catalog item listing
  const filteredProducts = useMemo(() => {
    let result = [...(appData.products || [])].filter(p => p.isActive !== 'false' && p.isActive !== false);

    if (aCat !== 'Semua Produk') {
      result = result.filter(p => p.category === aCat);
    }
    if (aBrand !== 'Semua Merek') {
      result = result.filter(p => p.brand === aBrand);
    }
    if (sQ) {
      result = result.filter(p => p.name.toLowerCase().includes(sQ.toLowerCase()));
    }

    // Sort options
    if (cSort === 'cheapest') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (cSort === 'expensive') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (cSort === 'az') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // newest
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    }

    return result;
  }, [appData.products, aCat, aBrand, sQ, cSort]);

  // Pagination for catalog products
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, cPage * iPP);
  }, [filteredProducts, cPage]);

  // Wishlist toggle
  const toggleWishlist = (product, variantName = null) => {
    const isExist = wishlist.some(i => i.id === product.id && i.variantName === variantName);
    let updated = [];
    if (isExist) {
      updated = wishlist.filter(i => !(i.id === product.id && i.variantName === variantName));
      showToast("Dihapus dari Favorit");
    } else {
      const v = variantName ? product.variants.find(vv => vv.name === variantName) : null;
      updated = [...wishlist, {
        id: product.id,
        name: product.name,
        variantName,
        price: v ? v.price : product.price,
        img: v?.img || product.img
      }];
      showToast("Masuk Favorit ❤️", "success");
    }
    setWishlist(updated);
    localStorage.setItem('freshmart_wishlist', JSON.stringify(updated));
  };

  // Add item to cart
  const handleAddToCart = (product, variantIdx = null, quantity = 1) => {
    // Check stock
    const useStk = appData.store.useStock;
    const v = variantIdx !== null ? product.variants[variantIdx] : null;
    const variantName = v ? v.name : null;

    if (useStk) {
      const stockVal = v ? parseFloat(v.stock || 0) : parseFloat(product.stock || 0);
      const currentInCart = cart.find(i => i.id === product.id && i.variantName === variantName)?.qty || 0;
      if (currentInCart + quantity > stockVal) {
        showToast(`Stok tidak cukup! Tersisa: ${stockVal}`, 'warning');
        return;
      }
    }

    const priceVal = v ? v.price : product.price;
    const unitVal = v?.unit || product.unit || 'pcs';

    setCart(prev => {
      const updated = [...prev];
      const foundIdx = updated.findIndex(i => i.id === product.id && i.variantName === variantName);
      if (foundIdx > -1) {
        updated[foundIdx].qty = parseFloat((updated[foundIdx].qty + quantity).toFixed(2));
      } else {
        updated.push({
          id: product.id,
          name: product.name,
          variantName,
          price: priceVal,
          img: v?.img || product.img,
          qty: quantity,
          unit: unitVal,
          poTime: product.poTime || '',
          colorCode: v?.colorCode || '',
          poin: parseFloat(v ? v.poin : product.poin) || 0
        });
      }
      localStorage.setItem('freshmart_cart', JSON.stringify(updated));
      return updated;
    });

    showToast("Berhasil Masuk Keranjang", "success");
  };

  // Admin CRUD actions
  const loadAdminTabList = async (tab) => {
    if (tab === 'orders') {
      const snap = await db.collection("freshmart_orders").orderBy("timestamp", "desc").limit(100).get();
      setAdminOrders(snap.docs.map(doc => doc.data()));
    } else if (tab === 'customers') {
      const snap = await db.collection("freshmart").doc("cms_data").collection("customers").get();
      setAdminCustomers(snap.docs.map(doc => ({ phone: doc.id, ...doc.data() })));
    } else if (tab === 'reviews') {
      const snap = await db.collection("freshmart").doc("cms_data").collection("reviews").get();
      setAdminReviews(snap.docs.map(doc => doc.data()));
    } else if (tab === 'piutang') {
      const snap = await db.collection("freshmart_orders").where("payment.method", "==", "tempo").orderBy("timestamp", "desc").get();
      setPiutangOrders(snap.docs.map(doc => doc.data()));
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    loadAdminTabList(activeAdminTab);
  }, [activeAdminTab, isAdmin]);

  const handleBase64ImageUpload = async (base64) => {
    const parts = base64.split(',');
    const mimeType = parts[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const base64Data = parts[1];
    const payload = {
      name: 'SETTING_IMG_' + Date.now(),
      mimeType: mimeType,
      data: base64Data,
      token: GAS_SECRET_TOKEN
    };
    const res = await fetch(GAS_UPLOAD_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow'
    });
    const data = await res.json().catch(() => null);
    if (data?.status === 'success' && data?.url) {
      return fixD(data.url);
    } else {
      throw new Error(data?.message || 'Server did not return a valid URL.');
    }
  };

  // Admin image upload to GDrive
  const handleAdminImgUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return showToast('Hanya file gambar!');
    setAdminImgUploading(true);
    showToast('Mengupload gambar...', 'loading');
    const compressed = await compressImageForUpload(file, 1200, 0.80).catch(() => file);
    const reader = new FileReader();
    reader.readAsDataURL(compressed);
    reader.onload = async () => {
      try {
        const base64Data = reader.result.split(',')[1];
        const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
        const payload = { name: 'ADMIN_IMG_' + Date.now() + '_' + safeName, mimeType: file.type || 'image/jpeg', data: base64Data, token: GAS_SECRET_TOKEN };
        const res = await fetch(GAS_UPLOAD_URL, { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, redirect: 'follow' });
        const data = await res.json().catch(() => null);
        setAdminImgUploading(false);
        if (data?.status === 'success' && data?.url) {
          const imgUrl = fixD(data.url);
          setAdminFormItem(prev => ({ ...prev, [field]: imgUrl }));
          showToast('Gambar berhasil diupload!', 'success');
        } else {
          showToast('Upload gagal, coba lagi.', 'error');
        }
      } catch(err) {
        setAdminImgUploading(false);
        showToast('Upload error: ' + err.message, 'error');
      }
    };
    reader.onerror = () => { setAdminImgUploading(false); showToast('Gagal baca file.', 'error'); };
  };

  // Toggle review visibility
  const handleToggleReviewVisibility = async (review) => {
    const newVisible = review.isVisible === false;
    try {
      await db.collection("freshmart").doc("cms_data").collection("reviews").doc(review.id?.toString()).update({ isVisible: newVisible });
      setAdminReviews(prev => prev.map(r => r.id === review.id ? { ...r, isVisible: newVisible } : r));
      showToast(newVisible ? 'Ulasan ditampilkan!' : 'Ulasan disembunyikan!', 'success');
    } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
  };

  const handleDeleteReview = async (review) => {
    showConfirm("Hapus Ulasan", "Yakin ingin menghapus ulasan ini?", async () => {
      try {
        await db.collection("freshmart").doc("cms_data").collection("reviews").doc(review.id?.toString()).delete();
        setAdminReviews(prev => prev.filter(r => r.id !== review.id));
        showToast('Ulasan dihapus!', 'success');
      } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
    });
  };

  const handleSaveAdminReply = async () => {
    if (!adminReplyTarget) return;
    try {
      await db.collection("freshmart").doc("cms_data").collection("reviews").doc(adminReplyTarget.id?.toString()).update({ adminReply: adminReplyText });
      setAdminReviews(prev => prev.map(r => r.id === adminReplyTarget.id ? { ...r, adminReply: adminReplyText } : r));
      setAdminReplyTarget(null);
      setAdminReplyText('');
      showToast('Balasan tersimpan!', 'success');
    } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
  };

  // Restock product
  const handleProcessRestock = async () => {
    if (!adminRestockItem) return;
    const qty = parseFloat(adminRestockQty) || 0;
    if (qty <= 0) return showToast('Jumlah restock harus lebih dari 0!');
    showToast('Menyimpan restock...', 'loading');
    try {
      const productRef = db.collection("freshmart").doc("cms_data").collection("products").doc(adminRestockItem.id?.toString());
      const snap = await productRef.get();
      if (!snap.exists) throw new Error('Produk tidak ditemukan!');
      const pData = snap.data();
      let updatedData = {};
      if (pData.variants?.length && adminRestockVariantIdx >= 0) {
        const variants = [...pData.variants];
        variants[adminRestockVariantIdx] = { ...variants[adminRestockVariantIdx], stock: (parseFloat(variants[adminRestockVariantIdx].stock) || 0) + qty };
        updatedData = { variants };
      } else {
        updatedData = { stock: (parseFloat(pData.stock) || 0) + qty };
      }
      await productRef.update(updatedData);
      // Also update appData locally
      setAppData(prev => {
        const prods = prev.products.map(p => {
          if (p.id !== adminRestockItem.id) return p;
          if (p.variants?.length && adminRestockVariantIdx >= 0) {
            const vars = [...p.variants];
            vars[adminRestockVariantIdx] = { ...vars[adminRestockVariantIdx], stock: (parseFloat(vars[adminRestockVariantIdx].stock) || 0) + qty };
            return { ...p, variants: vars };
          }
          return { ...p, stock: (parseFloat(p.stock) || 0) + qty };
        });
        return { ...prev, products: prods };
      });
      setAdminRestockItem(null);
      showToast('Restock berhasil!', 'success');
    } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
  };

  // Save settings
  const handleSaveSettings = async () => {
    if (!adminSettings) return;
    showToast('Menyimpan pengaturan...', 'loading');
    try {
      await db.collection("freshmart").doc("cms_data").set({ store: adminSettings, lastUpdate: firebase.firestore.FieldValue.increment(1) }, { merge: true });
      setAppData(prev => ({ ...prev, store: adminSettings }));
      showToast('Pengaturan toko disimpan!', 'success');
    } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
  };

  // Pay tempo installment
  const handlePayTempoInstallment = async (order, amount) => {
    const amtNum = parseFloat(amount) || 0;
    if (amtNum <= 0) return showToast('Masukkan jumlah cicilan yang valid!');
    const currentBalance = parseFloat(order.payment?.tempoBalance) || 0;
    if (amtNum > currentBalance) return showToast('Cicilan melebihi sisa tagihan!');
    const newBalance = Math.max(0, currentBalance - amtNum);
    const isPaid = newBalance <= 0;
    const installment = { amount: amtNum, date: new Date().toISOString(), note: 'Cicilan' };
    const installments = [...(order.payment?.installments || []), installment];
    showToast('Menyimpan cicilan...', 'loading');
    try {
      await db.collection("freshmart_orders").doc(order.orderId).update({
        'payment.tempoBalance': newBalance,
        'payment.paymentStatus': isPaid ? 'lunas' : 'hutang',
        'payment.installments': installments,
        ...(isPaid ? { status: 'Selesai' } : {})
      });
      setPiutangOrders(prev => prev.map(o => o.orderId === order.orderId ? { ...o, payment: { ...o.payment, tempoBalance: newBalance, paymentStatus: isPaid ? 'lunas' : 'hutang', installments } } : o));
      showToast(isPaid ? 'Piutang LUNAS! ✅' : `Cicilan Rp${amtNum.toLocaleString('id-ID')} tercatat!`, 'success');
    } catch(err) { showToast('Gagal: ' + err.message, 'error'); }
  };


  const loadAdminReport = async (period = 'today') => {
    setAdminReportPeriod(period);
    // Calculation stats report matching Vanilla POS stats calculation
    let q = db.collection("freshmart_orders");
    if (period === 'today') {
      const start = new Date(); start.setHours(0,0,0,0);
      q = q.where("timestamp", ">=", start);
    } else if (period === 'week') {
      const start = new Date(); start.setDate(start.getDate() - 7);
      q = q.where("timestamp", ">=", start);
    } else if (period === 'month') {
      const start = new Date(); start.setDate(1); start.setHours(0,0,0,0);
      q = q.where("timestamp", ">=", start);
    }

    try {
      const snap = await q.get();
      const list = snap.docs.map(doc => doc.data());
      let omset = 0;
      let ppnCollected = 0;
      let costTotal = 0;
      let orderCount = list.length;
      let successCount = 0;
      let tempoCount = 0;
      let tempoBalance = 0;

      list.forEach(o => {
        if (o.status !== 'Dibatalkan') {
          omset += parseFloat(o.payment.grandTotal || 0);
          ppnCollected += parseFloat(o.payment.ppnAmount || 0);
          successCount++;
          // HPP calculation
          const itemsCost = (o.items || []).reduce((sum, item) => sum + (parseFloat(item.hpp || 0) * (item.qty || 0)), 0);
          costTotal += itemsCost;

          if (o.payment.method === 'tempo') {
            tempoCount++;
            tempoBalance += parseFloat(o.payment.tempoBalance || 0);
          }
        }
      });

      // Asset calculation from catalog
      let assetHpp = 0;
      let assetJual = 0;
      appData.products.forEach(p => {
        if (p.variants?.length) {
          p.variants.forEach(v => {
            const st = parseFloat(v.stock) || 0;
            assetHpp += (parseFloat(v.hpp) || 0) * st;
            assetJual += (parseFloat(v.price) || 0) * st;
          });
        } else {
          const st = parseFloat(p.stock) || 0;
          assetHpp += (parseFloat(p.hpp) || 0) * st;
          assetJual += (parseFloat(p.price) || 0) * st;
        }
      });

      setAdminReports({
        omset,
        ppnCollected,
        profit: omset - costTotal - ppnCollected,
        costTotal,
        orderCount,
        successCount,
        tempoCount,
        tempoBalance,
        assetHpp,
        assetJual
      });
    } catch(e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAdmin && activeAdminTab === 'orders') {
      loadAdminReport(adminReportPeriod);
    }
  }, [isAdmin, activeAdminTab, adminReportPeriod, appData.products]);


  const rewardStatusLabel = (cr) => {
    if (!cr) return '';
    if (cr.status === 'ready') return '(Dikirim Bersama Pesanan)';
    if (cr.status === 'waiting_stock') return '(Stok Kosong - Ditunda)';
    return '(Menunggu Konfirmasi)';
  };

  const konfirmasiKeWA = (orderId) => {
    if (!orderId) return;
    const d = adminOrders.find(x => x.orderId === orderId) || myOrders.find(x => x.orderId === orderId);
    if (!d) return showToast('Data pesanan tidak ditemukan!', 'error');
    const waNum = d.customer && d.customer.wa;
    if (!waNum) return showToast('Nomor WhatsApp pelanggan tidak tersedia!', 'warning');
    
    const storeName = appData.store?.name || 'Toko Kami';
    const cName = d.customer?.name || 'Pelanggan';
    const status = d.status || 'Baru';
    const grandTotal = d.payment?.grandTotal ? fCur(d.payment.grandTotal) : '-';
    const method = d.payment?.method ? d.payment.method.toUpperCase() : '-';
    
    const msg = `Halo *${cName}*! 👋\n\n`
        + `Terima kasih telah berbelanja di *${storeName}*. 🛒\n\n`
        + `*Detail Pesanan Anda:*\n`
        + `📋 ID: *${orderId.split('-').pop()}*\n`
        + `💰 Total: *${grandTotal}*\n`
        + `💳 Pembayaran: *${method}*\n`
        + `📦 Status: *${status}*\n\n`
        + `Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;
    
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const ensureScriptLoaded = (src, checkFn) => {
    if (checkFn && checkFn()) return Promise.resolve();
    if (window.loadedScripts = window.loadedScripts || {}, window.loadedScripts[src]) return window.loadedScripts[src];
    window.loadedScripts[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => { delete window.loadedScripts[src]; reject(new Error('Gagal memuat: ' + src)); };
      document.head.appendChild(s);
    });
    return window.loadedScripts[src];
  };

  const handlePrintReceipt = () => {
    if (!selectedAdminOrder) return;
    const printSection = document.getElementById('thermal-print-section') || document.createElement('div');
    printSection.id = 'thermal-print-section';
    printSection.innerHTML = document.getElementById('receipt-paper-content')?.innerHTML || '';
    if (!document.getElementById('thermal-print-section')) {
      document.body.appendChild(printSection);
    }
    window.print();
  };

  const handlePrintDocA4 = () => {
    if (!selectedAdminOrder) return;
    const p = document.getElementById('doc-paper-content')?.innerHTML || '';
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!", "error");
      return;
    }
    printWindow.document.write(`
      <html>
      <head>
          <title>Cetak Dokumen</title>
          <script src="https://cdn.tailwindcss.com"><` + `/script>
          <style>
              @page { size: A4 portrait; margin: 10mm; }
              body { font-family: 'Arial', sans-serif; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          </style>
      </head>
      <body onload="setTimeout(() => { window.print(); }, 800)">
          <div class="w-full max-w-[794px] mx-auto p-4 text-sm leading-relaxed text-slate-900">
              ${p}
          </div>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const exportDocFile = async (mode) => {
    if (!selectedAdminOrder) return;
    showToast(mode === 'image' ? 'Membuat Gambar HD...' : 'Menyusun PDF...', 'loading');
    try {
      await Promise.all([
        ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => typeof html2canvas !== 'undefined'),
        ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => typeof window.jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined')
      ]);
    } catch(e) {
      showToast('Gagal memuat modul export. Cek koneksi internet Anda.', 'error');
      return;
    }

    try {
      const originalPaper = document.getElementById('doc-paper-content');
      if (!originalPaper) throw new Error("Elemen dokumen tidak ditemukan!");

      const cloneWrapper = document.createElement('div');
      cloneWrapper.style.position = 'absolute';
      cloneWrapper.style.top = '-9999px'; 
      cloneWrapper.style.left = '-9999px'; 
      cloneWrapper.style.width = originalPaper.offsetWidth + 'px'; 
      cloneWrapper.style.height = 'max-content';
      cloneWrapper.style.backgroundColor = '#ffffff';
      cloneWrapper.style.overflow = 'visible';
      
      const clone = originalPaper.cloneNode(true);
      clone.id = 'doc-clone-printing';
      clone.style.margin = '0 auto';
      clone.style.boxShadow = 'none'; 
      clone.classList.remove('absolute', 'top-0', 'left-1/2');
      clone.style.position = 'static';
      clone.style.left = 'auto';
      clone.style.top = 'auto';
      clone.style.transform = 'none';
      clone.style.height = 'max-content'; 
      clone.style.maxHeight = 'none'; 
      clone.style.overflow = 'visible';
      clone.classList.add('h-max');
      
      cloneWrapper.appendChild(clone);
      document.body.appendChild(cloneWrapper);

      const imgsInClone = Array.from(clone.querySelectorAll('img'));
      await Promise.all(imgsInClone.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      }));

      await new Promise(r => setTimeout(r, 300));

      if (cloneWrapper.offsetWidth === 0 || cloneWrapper.offsetHeight === 0) {
        throw new Error(`Dokumen belum sepenuhnya ter-render. Coba lagi.`);
      }

      const options = { 
        scale: 2, 
        useCORS: true, 
        backgroundColor: "#ffffff",
        width: cloneWrapper.offsetWidth,
        height: cloneWrapper.offsetHeight, 
        windowWidth: cloneWrapper.offsetWidth,
        windowHeight: cloneWrapper.offsetHeight
      };
      
      const canvas = await html2canvas(cloneWrapper, options);
      document.body.removeChild(cloneWrapper);

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error('Gagal menangkap gambar dokumen.');
      }

      const fileName = `${docPreviewType.toUpperCase()}_${selectedAdminOrder.orderId}`;
      
      if (mode === 'image') {
        const link = document.createElement('a');
        link.download = `${fileName}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
        showToast("Gambar Berhasil Disimpan!", "success");
      } else {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        if (!imgData || !imgData.startsWith('data:image/jpeg;base64,')) {
          throw new Error('Data gambar tidak valid.');
        }
        
        const jsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
        const pdfWidth = 210; 
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (!isFinite(pdfHeight) || pdfHeight <= 0) {
          throw new Error('Ukuran halaman PDF tidak valid.');
        }
        
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: [pdfWidth, pdfHeight]
        });
        
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${fileName}.pdf`);
        showToast("File PDF Berhasil Disimpan!", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Gagal memproses dokumen: " + err.message, "error");
    }
  };

  const handleAdminFormSubmit = async (e) => {
    e.preventDefault();
    if (!adminFormItem) return;

    showToast('Menyimpan Data...', 'loading');
    try {
      const type = adminFormType;
      const item = { ...adminFormItem };

      if (type === 'products') {
        item.id = item.id || Date.now();
        item.wholesale = tempWholesale;
        item.variants = tempVariants;
        await db.collection("freshmart").doc("cms_data").collection("products").doc(item.id.toString()).set(item);
      } else if (type === 'rewards') {
        item.id = item.id || Date.now();
        await db.collection("freshmart").doc("cms_data").collection("rewards").doc(item.id.toString()).set(item);
      } else if (type === 'customers') {
        const docId = item.phone.toString();
        await db.collection("freshmart").doc("cms_data").collection("customers").doc(docId).set(item);
      } else if (type === 'settings' || type === 'settings_profile' || type === 'settings_catalog' || type === 'settings_shipping' || type === 'settings_operasional' || type === 'settings_theme') {
        const newStore = { ...appData.store, ...item };
        await db.collection("freshmart").doc("cms_data").update({ store: newStore, lastUpdate: firebase.firestore.FieldValue.increment(1) });
        setAppData(prev => ({ ...prev, store: newStore }));
      } else if (type === 'settings_payment') {
        const newPayment = { ...appData.payment, ...item };
        await db.collection("freshmart").doc("cms_data").update({ payment: newPayment, lastUpdate: firebase.firestore.FieldValue.increment(1) });
        setAppData(prev => ({ ...prev, payment: newPayment }));
      } else if (type === 'settings_config') {
        const newConfig = { ...appData.config, ...item };
        await db.collection("freshmart").doc("cms_data").update({ config: newConfig, lastUpdate: firebase.firestore.FieldValue.increment(1) });
        setAppData(prev => ({ ...prev, config: newConfig }));
      } else {
        // categories, brands, vouchers, banks, banners
        const updatedList = [...(appData[type] || [])];
        const idx = updatedList.findIndex(x => x.id === item.id || (x.code && x.code === item.code));
        if (idx > -1) {
          updatedList[idx] = item;
        } else {
          item.id = item.id || Date.now();
          updatedList.push(item);
        }
        const updatedData = { ...appData, [type]: updatedList };
        await db.collection("freshmart").doc("cms_data").set({ [type]: updatedList, lastUpdate: firebase.firestore.FieldValue.increment(1) }, { merge: true });
        setAppData(updatedData);
      }

      showToast('Data berhasil disimpan!', 'success');
      setAdminModalOpen(false);
      // Reload lists
      loadAdminTabList(activeAdminTab);
    } catch(err) {
      showToast(`Gagal menyimpan: ${err.message}`, 'error');
    }
  };

  const handleAdminDelete = (type, item) => {
    showConfirm("Konfirmasi Hapus", "Yakin ingin menghapus item ini?", async () => {
      showToast('Menghapus data...', 'loading');
      try {
        if (type === 'products') {
          await db.collection("freshmart").doc("cms_data").collection("products").doc(item.id.toString()).delete();
        } else if (type === 'rewards') {
          await db.collection("freshmart").doc("cms_data").collection("rewards").doc(item.id.toString()).delete();
        } else if (type === 'customers') {
          await db.collection("freshmart").doc("cms_data").collection("customers").doc(item.phone.toString()).delete();
        } else {
          const updatedList = [...(appData[type] || [])].filter(x => x.id !== item.id && (!item.code || x.code !== item.code));
          await db.collection("freshmart").doc("cms_data").set({ [type]: updatedList, lastUpdate: firebase.firestore.FieldValue.increment(1) }, { merge: true });
          setAppData(prev => ({ ...prev, [type]: updatedList }));
        }
        showToast('Data terhapus!', 'success');
        loadAdminTabList(activeAdminTab);
      } catch(err) {
        showToast(`Gagal menghapus: ${err.message}`, 'error');
      }
    });
  };

  // Google Sheet backup/restore
  const exportDataJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `toko-putri-backup-${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
    showToast("Backup data diunduh!");
  };

  // Admin login flow
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    showToast("Mengotorisasi Admin...", "loading");
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      if (res.user.uid === ADMIN_UID) {
        setIsAdmin(true);
        setCurrentView('admin');
        showToast("Login Berhasil!", "success");
      } else {
        await auth.signOut();
        showToast("Akses Ditolak! Bukan UID owner.", "error");
      }
    } catch(err) {
      showToast("Email/Password salah!", "error");
    }
  };

  // Format dynamic badge options inside catalog card
  const discPill = (p) => {
    let price = p.price || 0;
    let normal = p.priceNormal || 0;
    if (p.variants?.length) {
      const discounted = p.variants.filter(v => v.priceNormal && v.priceNormal > v.price);
      if (discounted.length) {
        const pcts = discounted.map(v => Math.round(((v.priceNormal - v.price)/v.priceNormal)*100));
        return `<span class="bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap border border-rose-200 dark:border-rose-800 uppercase tracking-wider"><i class="fa-solid fa-percent"></i> HEMAT ${Math.max(...pcts)}%</span>`;
      }
    } else if (normal && normal > price) {
      const pct = Math.round(((normal - price)/normal)*100);
      return `<span class="bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap border border-rose-200 dark:border-rose-800 uppercase tracking-wider"><i class="fa-solid fa-percent"></i> HEMAT ${pct}%</span>`;
    }
    return '';
  };

  return (
    <div className="w-full relative bg-slate-50 dark:bg-[#0f172a]" id="app-container">
      {/* Toast Notification */}
      {toast.show && (
        <div id="toast" style={{ top: 'calc(max(env(safe-area-inset-top), 16px) + 8px)', display: 'flex' }}>
          <div id="toast-icon-wrap"><i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-xmark' : toast.type === 'success' ? 'fa-circle-check' : 'fa-bell'}`}></i></div>
          <div id="toast-body">
            <span id="toast-title" style={{ display: 'block' }}>{toast.title || toast.type?.toUpperCase()}</span>
            <span id="toast-message">{toast.message}</span>
          </div>
          <button id="toast-close" onClick={() => setToast({ show: false, message: '', type: 'info' })}><i className="fa-solid fa-xmark"></i></button>
        </div>
      )}

      {/* Confirm Modal */}
      {confirm.show && (
        <div className="fixed inset-0 z-[120] bg-slate-900/80 flex items-center justify-center p-4 transition-all duration-300" style={{ display: 'flex' }}>
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-8 shadow-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col">
            <div className={`w-16 h-16 ${confirm.isDanger ? 'bg-rose-50 dark:bg-rose-900/30 text-rose-500' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-505'} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 border`}>
              <i className={`fa-solid ${confirm.isDanger ? 'fa-triangle-exclamation' : 'fa-info-circle'}`}></i>
            </div>
            <h3 className="font-black text-slate-900 dark:text-white text-xl mb-2">{confirm.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8">{confirm.message}</p>
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-sm" onClick={closeConfirm}>Batal</button>
              <button className={`flex-1 py-3 ${confirm.isDanger ? 'bg-rose-600 hover:bg-rose-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold rounded-xl text-sm shadow-md`} onClick={() => { confirm.onConfirm(); closeConfirm(); }}>{confirm.btnText}</button>
            </div>
          </div>
        </div>
      )}

      {/* Scanner Modal */}
      {scannerOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-900/90 flex flex-col items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <h3 className="font-black text-slate-900 dark:text-white text-sm flex items-center gap-2"><i className="fa-solid fa-qrcode text-emerald-500"></i> Scan Barcode Produk</h3>
              <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-rose-600 flex items-center justify-center" onClick={() => setScannerOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="p-5 flex flex-col items-center space-y-4">
              <div className="w-full bg-slate-900 rounded-2xl overflow-hidden min-h-[240px] flex items-center justify-center relative border border-slate-700" id="html5-qr-reader">
                <div className="text-center p-6 text-slate-400 space-y-3">
                  <i className="fa-solid fa-camera text-4xl text-emerald-500 animate-pulse"></i>
                  <p className="text-xs font-bold text-slate-300">Arahkan kamera ke Barcode / QR Code Produk</p>
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-black shadow-md" onClick={() => {
                    ensureScriptLoaded('https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js', () => typeof window.Html5QrcodeScanner !== 'undefined' || typeof window.Html5Qrcode !== 'undefined').then(() => {
                      try {
                        const html5QrCode = new window.Html5Qrcode("html5-qr-reader");
                        html5QrCode.start(
                          { facingMode: "environment" },
                          { fps: 10, qrbox: { width: 220, height: 180 } },
                          (decodedText) => {
                            html5QrCode.stop().catch(() => {});
                            setScannerOpen(false);
                            setSQ(decodedText);
                            showToast(`Barcode terdeteksi: ${decodedText}`, "success");
                          },
                          () => {}
                        ).catch(err => {
                          showToast("Akses kamera ditolak atau tidak tersedia: " + err.message, "warning");
                        });
                      } catch(e) {
                        showToast("Modul kamera gagal: " + e.message, "error");
                      }
                    }).catch(() => showToast("Gagal memuat pustaka scanner kamera.", "error"));
                  }}><i className="fa-solid fa-video mr-1"></i> Aktifkan Kamera Live</button>
                </div>
              </div>

              <div className="w-full pt-3 border-t border-slate-100 dark:border-slate-700">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Input Barcode / SKU Manual</label>
                <form className="flex gap-2" onSubmit={(e) => {
                  e.preventDefault();
                  const val = e.target.manualSku.value.trim();
                  if (val) {
                    setSQ(val);
                    setScannerOpen(false);
                    showToast(`Mencari kode: ${val}`, "info");
                  }
                }}>
                  <input name="manualSku" className="admin-input flex-1 text-xs" placeholder="Ketik nomor barcode..." autoFocus />
                  <button className="btn-primary !w-auto px-5 text-xs rounded-xl" type="submit">Cari</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Modal Overlay */}
      {categoryModalOpen && (
        <div className="fixed inset-0 z-[75] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5" onClick={() => setCategoryModalOpen(false)}>
          <div className="w-full max-w-md sm:max-w-lg bg-white dark:bg-[#0f172a] sm:rounded-[2rem] rounded-t-[2rem] max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative border border-slate-200 dark:border-slate-800" onClick={e => e.stopPropagation()}>
            <div className="px-6 pb-4 pt-5 border-b border-slate-100 dark:border-slate-800/60 flex justify-between items-center shrink-0">
              <h3 className="font-black text-base text-slate-900 dark:text-white flex items-center gap-3"><i className="fa-solid fa-layer-group text-emerald-500"></i> KATEGORI PRODUK</h3>
              <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center" onClick={() => setCategoryModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 hide-scrollbar">
              <div className="flex flex-col gap-2.5 pb-6 w-full">
                <button onClick={() => { setACat('Semua Produk'); setCategoryModalOpen(false); }} className={`w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${aCat === 'Semua Produk' ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50'}`}>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm"><i className="fa-solid fa-layer-group"></i></div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-left flex-1">SEMUA KATEGORI</span>
                </button>
                {appData.categories.map((c, idx) => (
                  <button key={idx} onClick={() => { setACat(c.name); setCategoryModalOpen(false); }} className={`w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${aCat === c.name ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50'}`}>
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm overflow-hidden">
                      {c.img ? <img src={c.img} alt={c.name} className="w-full h-full object-cover" /> : <i className="fa-solid fa-box text-slate-400"></i>}
                    </div>
                    <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-left flex-1 line-clamp-1">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brand Modal Overlay */}
      {brandModalOpen && (
        <div className="fixed inset-0 z-[75] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5" onClick={() => setBrandModalOpen(false)}>
          <div className="w-full max-w-md sm:max-w-lg bg-white dark:bg-[#0f172a] sm:rounded-[2rem] rounded-t-[2rem] max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative border border-slate-200 dark:border-slate-800" onClick={e => e.stopPropagation()}>
            <div className="px-6 pb-4 pt-5 border-b border-slate-100 dark:border-slate-800/60 flex justify-between items-center shrink-0">
              <h3 className="font-black text-base text-slate-900 dark:text-white flex items-center gap-3"><i className="fa-solid fa-copyright text-blue-500"></i> BRAND MITRA</h3>
              <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-50 hover:text-rose-500 flex items-center justify-center" onClick={() => setBrandModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 hide-scrollbar">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
                <button onClick={() => { setABrand('Semua Merek'); setBrandModalOpen(false); }} className={`flex flex-col items-center justify-start p-2.5 rounded-[1.25rem] border transition-all ${aBrand === 'Semua Merek' ? 'bg-blue-50/80 border-blue-500' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-sm mb-2.5"><i className="fa-solid fa-copyright"></i></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-center w-full">SEMUA MEREK</span>
                </button>
                {appData.brands.map((b, idx) => (
                  <button key={idx} onClick={() => { setABrand(b.name); setBrandModalOpen(false); }} className={`flex flex-col items-center justify-start p-2.5 rounded-[1.25rem] border transition-all ${aBrand === b.name ? 'bg-blue-50/80 border-blue-500' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-2.5 overflow-hidden border border-slate-200">
                      {b.img ? <img src={b.img} alt={b.name} className="w-full h-full object-contain" /> : <i className="fa-solid fa-tag text-slate-400"></i>}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-center w-full line-clamp-2">{b.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main App Layout */}
      {currentView === 'catalog' && (
        <div className="view-section flex flex-col fade-in">
          {/* Header */}
          <div className="glass-header shrink-0 px-5 flex items-center justify-center sticky top-0 pb-3 z-30">
            <div className="flex items-center justify-between w-full xl:max-w-[1200px] mx-auto px-4 lg:px-10 gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-50 to-white rounded-2xl flex items-center justify-center shadow-soft border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0 cursor-pointer" onDoubleClick={() => setCurrentView('admin-login')}>
                  {appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) ? (
                    <img src={appData.store.logo} alt="Logo" className="w-full h-full object-cover" />
                  ) : (
                    <i className={`fa-solid ${appData.store.logo || 'fa-store'} text-xl text-emerald-500`}></i>
                  )}
                </div>
                <div className="flex flex-col min-w-0 flex-1 justify-center">
                  <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight uppercase">{appData.store.name}</h1>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-snug mt-0.5">{appData.store.slogan}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center" onClick={() => {
                  const isDark = document.documentElement.classList.toggle('dark');
                  localStorage.setItem('freshmart_theme', isDark ? 'dark' : 'light');
                }}><i className="fa-solid fa-moon text-sm"></i></button>
                <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center hover:text-violet-500 relative" onClick={() => setCurrentView('orders')}>
                  <i className="fa-solid fa-box-open text-sm"></i>
                  {myOrders.length > 0 && <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-[9px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shadow-sm">{myOrders.length}</span>}
                </button>
                <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center hover:text-rose-500 relative" onClick={() => setCurrentView('wishlist')}>
                  <i className="fa-solid fa-heart text-sm"></i>
                  {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shadow-sm">{wishlist.length}</span>}
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="scroll-content hide-scrollbar pb-[calc(7rem+env(safe-area-inset-bottom))]">
            {/* Banners Auto-slide */}
            {appData.banners && appData.banners.length > 0 && (
              <div className="w-full max-w-full xl:max-w-[1200px] px-4 lg:px-10 mx-auto mt-6">
                <div ref={bannerSliderRef} className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 snap-x hide-scrollbar scroll-smooth">
                  {appData.banners.map((b, i) => (
                    <div key={i} onClick={() => b.link && window.open(b.link, '_self')} className="w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-[2rem] relative overflow-hidden group cursor-pointer bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-glow border border-white/20 flex flex-col">
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
                      <div className="absolute -right-10 -top-10 w-40 h-40 border-[24px] border-white/10 rounded-full pointer-events-none"></div>
                      <div className="absolute right-20 -bottom-12 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="absolute -left-12 top-10 w-24 h-24 bg-gradient-to-tr from-white/5 to-white/20 rounded-full backdrop-blur-sm border border-white/10 pointer-events-none"></div>
                      <div className="flex flex-1 w-full relative z-10">
                        <div className="w-[60%] p-5 sm:p-6 flex flex-col justify-center z-20 text-white">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest w-max mb-2.5"><i className="fa-solid fa-star text-yellow-300 mr-1"></i> Promo</span>
                          <h2 className="text-[15px] sm:text-xl font-black leading-snug mb-1.5 drop-shadow-md line-clamp-2">{b.title}</h2>
                          <p className="text-[10px] sm:text-[11px] text-white/90 font-medium line-clamp-2 leading-relaxed">{b.desc}</p>
                        </div>
                        <div className="w-[40%] relative z-10 flex items-center justify-center p-2">
                          {b.img ? <img src={b.img} alt="Promo" className="w-full h-full object-contain drop-shadow-2xl" /> : <i className="fa-solid fa-gift text-6xl text-white/50"></i>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vouchers Promo */}
            {appData.vouchers && appData.vouchers.filter(v => v.isShow === 'true' || v.isShow === true).length > 0 && (
              <div className="w-full max-w-full xl:max-w-[1200px] px-4 lg:px-10 mx-auto mt-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white shadow-md">
                      <i className="fa-solid fa-ticket-simple text-sm -rotate-45"></i>
                    </div> VOUCHER TOKO
                  </h3>
                </div>
                <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
                  {appData.vouchers.filter(v => v.isShow === 'true' || v.isShow === true).map((v, i) => (
                    <div key={i} onClick={() => {
                      navigator.clipboard.writeText(v.code);
                      showToast(`Kode voucher ${v.code} disalin!`, 'success');
                    }} className="w-[280px] sm:w-[320px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all">
                      <div className="w-full h-[110px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-[1.25rem] flex relative overflow-hidden border border-white/20 shadow-md">
                        <div className="flex-1 px-5 py-3 flex flex-col justify-center text-white">
                          <h4 className="font-black text-sm sm:text-base leading-tight mb-1 drop-shadow-md truncate">{v.type === 'shipping_free' ? 'Gratis Ongkir' : v.type === 'percent' ? `Diskon ${v.value}%` : `Diskon ${fCur(v.value)}`}</h4>
                          <p className="text-[8px] sm:text-[9px] font-bold text-white/90 mb-2.5 truncate uppercase">Min. belanja {fCur(v.minPurchase)}</p>
                          <div className="inline-flex"><span className="bg-black/20 backdrop-blur-md text-[10px] font-black px-3 py-1.5 rounded-xl border border-white/30 tracking-widest">{v.code}</span></div>
                        </div>
                        <div className="w-[28%] flex flex-col items-center justify-center bg-white/5 text-white">
                          <i className="fa-regular fa-copy text-lg mb-1"></i>
                          <span className="text-[9px] font-black uppercase">Salin</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {appData.store.showCategories && (
              <div className="w-full max-w-full xl:max-w-[1200px] px-4 lg:px-10 mx-auto mt-6">
                <div className="bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm p-5">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/50">
                    <h3 className="font-black text-slate-800 dark:text-white text-sm sm:text-base tracking-tight uppercase flex items-center gap-2"><i className="fa-solid fa-layer-group text-emerald-500"></i> Kategori Produk</h3>
                    <button className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/40 px-4 py-2 rounded-xl transition-all" onClick={() => setCategoryModalOpen(true)}>Lihat Semua</button>
                  </div>
                  <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x pb-2 pt-1">
                    {/* Semua Kategori Option */}
                    <div onClick={() => setACat('Semua Produk')} className="cursor-pointer shrink-0 snap-start group">
                      <div className={`px-4 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-2.5 ${aCat === 'Semua Produk' ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] border-transparent text-white shadow-md' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${aCat === 'Semua Produk' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}><i className="fa-solid fa-layer-group text-[10px]"></i></div>
                        <span className="font-black text-xs uppercase tracking-wider whitespace-nowrap">Semua</span>
                      </div>
                    </div>

                    {appData.categories.map((c, idx) => {
                      const isSel = aCat === c.name;
                      if (appData.store.categoryStyle === 'image' && c.img) {
                        return (
                          <div key={idx} onClick={() => setACat(c.name)} className="flex flex-col items-center gap-2 cursor-pointer shrink-0 snap-start">
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center border ${isSel ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30' : 'border-slate-200 dark:border-slate-800'}`}>
                              <img src={c.img} alt={c.name} className="w-10 h-10 object-cover rounded-xl" />
                            </div>
                            <span className="text-[9px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center truncate w-[75px]">{c.name}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={idx} onClick={() => setACat(c.name)} className="cursor-pointer shrink-0 snap-start group">
                          <div className={`px-4 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-2.5 ${isSel ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] border-transparent text-white shadow-md' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]'}`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}><i className="fa-solid fa-tags text-[10px]"></i></div>
                            <span className="font-black text-xs uppercase tracking-wider whitespace-nowrap">{c.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Products Search & List */}
            <div className="px-4 pt-6 w-full max-w-full xl:max-w-[1200px] lg:px-8 mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-6 items-center justify-between card-modern p-3">
                <div className="relative w-full sm:w-80 flex items-center bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <i className="fa-solid fa-search absolute left-4 text-slate-400 text-sm"></i>
                  <input className="w-full pl-11 pr-12 py-3 bg-transparent rounded-xl text-sm font-semibold focus:outline-none text-slate-800 dark:text-white" value={sQ} onChange={e => setSQ(e.target.value)} placeholder="Cari nama produk..." type="text" />
                  <button className="absolute right-2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-emerald-500" onClick={() => setScannerOpen(true)}><i className="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer" value={cSort} onChange={e => setCSort(e.target.value)}>
                    <option value="newest">Terbaru</option>
                    <option value="cheapest">Termurah</option>
                    <option value="expensive">Termahal</option>
                    <option value="az">Nama A-Z</option>
                  </select>
                  <div className="flex bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-1 shrink-0">
                    <button className={`w-8 h-8 rounded-xl flex items-center justify-center ${cView === 'grid' ? 'text-emerald-600 bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-400'}`} onClick={() => setCView('grid')}><i className="fa-solid fa-border-all text-sm"></i></button>
                    <button className={`w-8 h-8 rounded-xl flex items-center justify-center ${cView === 'list' ? 'text-emerald-600 bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-400'}`} onClick={() => setCView('list')}><i className="fa-solid fa-list text-sm"></i></button>
                  </div>
                </div>
              </div>

              {/* Product Grid / List */}
              <div className={cView === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8" : "flex flex-col gap-4"}>
                {paginatedProducts.map((p, idx) => {
                  // Determine variables and display price
                  const minPrice = p.variants?.length ? Math.min(...p.variants.map(v => v.price || 0)) : p.price;
                  const maxPrice = p.variants?.length ? Math.max(...p.variants.map(v => v.price || 0)) : p.price;

                  return (
                    <div key={idx} className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-[1.25rem] shadow-sm transition-all duration-300 flex ${cView === 'grid' ? 'flex-col' : 'items-stretch gap-4 p-3'} group relative overflow-hidden cursor-pointer`} onClick={() => {
                      setSelectedProduct(p);
                      setSelectedVariantIdx(p.variants?.length ? null : 0);
                      setCQty(1);
                      setActiveSlideIdx(0);
                      loadProductReviews(p.id);
                    }}>
                      {/* Favorite Button */}
                      <button className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/80 dark:bg-slate-800/80 rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-sm transition-colors" onClick={(e) => { e.stopPropagation(); toggleWishlist(p); }}>
                        <i className={`fa-heart ${wishlist.some(w => w.id === p.id) ? 'fa-solid text-rose-500' : 'fa-regular'}`}></i>
                      </button>

                      {/* Image */}
                      <div className={`relative bg-white flex items-center justify-center border-b border-slate-100 dark:border-slate-700/50 overflow-hidden ${cView === 'grid' ? 'aspect-square w-full shrink-0' : 'w-24 h-24 shrink-0 rounded-xl'}`}>
                        {p.img ? (
                          <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <i className="fa-solid fa-image text-slate-300 text-3xl"></i>
                        )}
                        {/* Stock Badge Overlay */}
                        {(() => {
                          const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
                          if (!useStk) return null;
                          const totalStock = p.variants && p.variants.length
                            ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s, v) => s + (parseFloat(v.stock) || 0), 0)
                            : (parseFloat(p.stock) || 0);

                          if (totalStock <= 0) {
                            return <span className="absolute inset-0 bg-slate-900/60 text-white flex items-center justify-center text-xs font-black uppercase"><i className="fa-solid fa-ban mr-1"></i> Habis</span>;
                          } else if (totalStock <= 5) {
                            return <span className="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-black px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i className="fa-solid fa-fire mr-1"></i> Sisa {totalStock}</span>;
                          } else {
                            return <span className="absolute top-2 left-2 z-10 bg-slate-800/80 text-white text-[8px] font-black px-2 py-1 rounded-xl shadow uppercase tracking-wider backdrop-blur-sm"><i className="fa-solid fa-box mr-1"></i> Stok {totalStock}</span>;
                          }
                        })()}
                      </div>

                      {/* Description / Actions */}
                      <div className="flex-1 flex flex-col p-3 min-w-0">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5 items-center mb-2.5 overflow-hidden shrink-0">
                          {/* Discount tag */}
                          {Boolean(p.priceNormal && parseFloat(p.priceNormal) > parseFloat(p.price)) && (
                            <span className="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm">
                              <i className="fa-solid fa-tags"></i> -{Math.round(((p.priceNormal - p.price) / p.priceNormal) * 100)}%
                            </span>
                          )}
                          {/* PO Pill */}
                          {Boolean(p.poTime) && (
                            <span className="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm">
                              <i className="fa-solid fa-clock"></i> PO {p.poTime}
                            </span>
                          )}
                          {/* Points badge */}
                          {(() => {
                            if (p.variants && p.variants.length) {
                              const poinVals = p.variants.map(v => parseFloat(v.poin) || 0).filter(x => x > 0);
                              if (poinVals.length) {
                                const uniq = [...new Set(poinVals)];
                                return uniq.length === 1 ? (
                                  <span className="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-star"></i> +{uniq[0]} Poin</span>
                                ) : (
                                  <span className="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-star"></i> Dapat Poin</span>
                                );
                              }
                            } else if (parseFloat(p.poin) > 0) {
                              return <span className="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-star"></i> +{parseFloat(p.poin)} Poin</span>;
                            }
                            return null;
                          })()}
                          {/* Sold badge */}
                          {(() => {
                            const totalSoldCard = p.variants && p.variants.length
                              ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0)
                              : (parseFloat(p.totalSold) || 0);
                            return totalSoldCard > 0 ? (
                              <span className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-fire-flame-curved text-orange-400"></i> {totalSoldCard} Terjual</span>
                            ) : null;
                          })()}
                          {/* Tag */}
                          {Boolean(p.tag) && (
                            <span className="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider">
                              <i className="fa-solid fa-hashtag"></i> {p.tag}
                            </span>
                          )}
                          {/* Official Store Badge */}
                          <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-circle-check"></i> Official</span>
                          {/* Brand badge */}
                          {Boolean(p.brand) && (
                            <span className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-tag"></i> {p.brand}</span>
                          )}
                          {/* Wholesale badge */}
                          {Boolean(p.wholesale && p.wholesale.length > 0 && (!p.variants || p.variants.length === 0)) && (
                            <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 px-2 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i className="fa-solid fa-layer-group"></i> Grosir</span>
                          )}
                        </div>

                        <h4 className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 uppercase leading-snug mb-2 flex-1 group-hover:text-[var(--color-primary)] transition-colors">{p.name}</h4>

                        <div className="flex items-end justify-between mt-auto pt-1">
                          <div>
                            {Boolean(p.priceNormal && parseFloat(p.priceNormal) > parseFloat(p.price) && (!p.variants || p.variants.length === 0)) && (
                              <p className="text-[10px] text-rose-500 font-bold line-through">{fCur(p.priceNormal)}</p>
                            )}
                            <p className="text-[var(--color-primary)] font-black text-sm leading-none tracking-tight">
                              {p.variants?.length ? (
                                `Rp ${minPrice.toLocaleString('id-ID')} - ${maxPrice.toLocaleString('id-ID')}`
                              ) : (
                                fCur(p.price)
                              )}
                            </p>
                            <span className="text-[9px] text-slate-500 uppercase">/{p.unit || 'pcs'}</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-sm">
                            <i className="fa-solid fa-plus text-sm"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredProducts.length > paginatedProducts.length && (
                <div className="mt-10 mb-6 text-center">
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all" onClick={() => setCPage(prev => prev + 1)}>Muat Lebih Banyak <i className="fa-solid fa-chevron-down text-[10px]"></i></button>
                </div>
              )}
              <Footer appData={appData} setCurrentView={setCurrentView} />
            </div>
          </div>

          {/* Floating Cart Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-40 pointer-events-none" style={{ bottom: 'calc(max(1.25rem, env(safe-area-inset-bottom)) + 0.5rem)' }}>
            <button className="w-full bg-slate-900 dark:bg-slate-800 text-white px-4 py-3 rounded-[1.25rem] shadow-lg flex justify-between items-center transition-all pointer-events-auto border border-white/8 hover:border-emerald-500/30 group active:scale-[0.97]" onClick={() => setCurrentView('cart')}>
              <div className="flex items-center gap-3.5">
                <div className="relative bg-emerald-500 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                  <i className="fa-solid fa-bag-shopping text-white text-base"></i>
                  {cart.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[9px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-black border-2 border-slate-900 shadow-sm">{cart.length}</span>}
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-0.5">Keranjang Belanja</p>
                  <span className="font-black text-sm text-white">{fCur(subtotalCart)}</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-sm text-slate-400 group-hover:text-white group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all bg-white/5 shrink-0"><i className="fa-solid fa-arrow-right text-xs"></i></div>
            </button>
          </div>
        </div>
      )}

      {/* Cart View */}
      {currentView === 'cart' && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900">
          <div className="glass-header shrink-0 px-5 flex justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:scale-95 transition-all shadow-sm" onClick={() => setCurrentView('catalog')}><i className="fa-solid fa-arrow-left text-sm"></i></button>
              <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Keranjang Belanja</h1>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-100 active:scale-95 transition-all" onClick={() => {
                showConfirm("Kosongkan Keranjang", "Yakin ingin menghapus semua item di keranjang?", () => {
                  setCart([]);
                  localStorage.removeItem('freshmart_cart');
                  showToast('Keranjang dikosongkan!');
                });
              }}><i className="fa-solid fa-trash-can text-sm"></i></button>
            </div>
          </div>
          <div className="scroll-content flex-1 overflow-y-auto z-10 pt-6 pb-[calc(8rem+env(safe-area-inset-bottom))]">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] px-5 text-center max-w-xs mx-auto">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-5 text-slate-300 dark:text-slate-600 shadow-inner"><i className="fa-solid fa-bag-shopping text-5xl"></i></div>
                <h3 className="font-black text-slate-900 dark:text-white text-xl mb-2">Keranjang Kosong</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">Belum ada produk yang dipilih.</p>
                <button className="btn-primary px-8 py-3.5 text-sm shadow-glow rounded-xl" onClick={() => setCurrentView('catalog')}>Belanja Sekarang</button>
              </div>
            ) : (
              <div className="px-4 space-y-4 max-w-[1200px] lg:px-8 mx-auto w-full">
                {cart.map((item, idx) => {
                  const p = appData.products.find(x => x.id === item.id);
                  const effectivePrice = getEffP(item);
                  const isWholesaleApplied = p && p.wholesale?.length && !p.variants?.length && effectivePrice < item.price;
                  const itemStock = item.variantName && p?.variants
                    ? (p.variants.find(v => v.name === item.variantName)?.stock)
                    : p?.stock;

                  return (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-2xl object-cover border border-slate-100 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                          <h4 className="text-sm font-black text-slate-800 dark:text-white truncate uppercase">{item.name}</h4>
                          {isWholesaleApplied && (
                            <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider flex items-center gap-1"><i className="fa-solid fa-layer-group"></i> Harga Grosir</span>
                          )}
                        </div>
                        {item.variantName && <p className="text-xs text-slate-500">Varian: {item.variantName}</p>}
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">{fCur(effectivePrice)} <span className="text-[10px] text-slate-400">/{item.unit || 'pcs'}</span></p>
                          {appData.store.useStock && itemStock !== undefined && itemStock !== null && (
                            <span className="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">Stok: {itemStock}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 h-10 overflow-hidden shrink-0">
                        <button className="w-8 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100" onClick={() => {
                          const newQty = parseFloat((item.qty - 1).toFixed(2));
                          if (newQty <= 0) {
                            setCart(prev => prev.filter((_, i) => i !== idx));
                          } else {
                            setCart(prev => {
                              const updated = [...prev];
                              updated[idx].qty = newQty;
                              return updated;
                            });
                          }
                        }}><i className="fa-solid fa-minus text-xs"></i></button>
                        <input
                          type="number"
                          min="0.01"
                          step="0.01"
                          className="w-14 text-center text-xs font-black bg-transparent focus:outline-none dark:text-white border-x border-slate-200 dark:border-slate-700"
                          value={item.qty}
                          onChange={(e) => {
                            const val = parseFloat(parseFloat(e.target.value).toFixed(2));
                            if (isNaN(val) || val <= 0) {
                              setCart(prev => prev.filter((_, i) => i !== idx));
                            } else {
                              setCart(prev => {
                                const updated = [...prev];
                                updated[idx].qty = val;
                                return updated;
                              });
                            }
                          }}
                        />
                        <button className="w-8 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100" onClick={() => {
                          const newQty = parseFloat((item.qty + 1).toFixed(2));
                          setCart(prev => {
                            const updated = [...prev];
                            updated[idx].qty = newQty;
                            return updated;
                          });
                        }}><i className="fa-solid fa-plus text-xs"></i></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className="absolute bottom-0 left-0 w-full glass-nav px-4 pt-3 z-30">
              <div className="max-w-[1200px] px-4 lg:px-10 mx-auto flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase tracking-widest mb-0.5">Total Belanja</p>
                  <p className="font-black text-slate-900 dark:text-white text-xl leading-none">{fCur(subtotalCart)}</p>
                </div>
                <button className="btn-primary !w-auto px-7 py-3.5 text-sm shadow-glow rounded-2xl shrink-0" onClick={() => setCurrentView('checkout')}>Checkout <i className="fa-solid fa-arrow-right ml-1.5 text-xs"></i></button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Checkout view */}
      {currentView === 'checkout' && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900">
          <div className="glass-header shrink-0 px-5 flex justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:scale-95 transition-all shadow-sm" onClick={() => setCurrentView('cart')}><i className="fa-solid fa-arrow-left text-sm"></i></button>
              <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Data Pengiriman</h1>
              <div className="w-10"></div>
            </div>
          </div>
          <div className="scroll-content flex-1 overflow-y-auto z-10 pt-4 pb-[calc(8rem+env(safe-area-inset-bottom))]">
            <div className="px-4 space-y-5 max-w-[1200px] lg:px-8 mx-auto w-full">
              {/* Delivery method selection */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-black text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2"><i className="fa-solid fa-truck-fast text-blue-500"></i> Opsi Pengiriman</h3>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer relative">
                    <input checked={cust.deliveryMethod === 'delivery'} className="peer sr-only" name="delivery-method" onChange={() => setCust(prev => ({ ...prev, deliveryMethod: 'delivery' }))} type="radio" value="delivery" />
                    <div className={`border p-4 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${cust.deliveryMethod === 'delivery' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-1"><i className="fa-solid fa-motorcycle text-lg text-slate-400"></i></div>
                      <span className="font-black text-[11px] uppercase tracking-wide">Diantar Kurir</span>
                    </div>
                  </label>
                  <label className="cursor-pointer relative">
                    <input checked={cust.deliveryMethod === 'pickup'} className="peer sr-only" name="delivery-method" onChange={() => setCust(prev => ({ ...prev, deliveryMethod: 'pickup' }))} type="radio" value="pickup" />
                    <div className={`border p-4 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${cust.deliveryMethod === 'pickup' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-1"><i className="fa-solid fa-store text-lg text-slate-400"></i></div>
                      <span className="font-black text-[11px] uppercase tracking-wide">Ambil di Toko</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-black text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2"><i className="fa-solid fa-address-card text-emerald-500"></i> Informasi Kontak</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Lengkap</label>
                    <input className="admin-input bg-slate-50 border-slate-200 text-sm font-bold shadow-inner" value={cust.name} onChange={e => setCust(prev => ({ ...prev, name: e.target.value }))} placeholder="Masukkan nama Anda..." type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nomor WhatsApp Aktif</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-500">+62</span>
                      <input className="admin-input bg-slate-50 border-slate-200 text-sm font-bold shadow-inner !pl-14" value={cust.wa.replace(/^62/, '')} onChange={e => checkMemberStatus(e.target.value)} placeholder="81234567890" type="tel" />
                    </div>
                    {currentMember && (
                      <div className="mt-3 bg-violet-100 border border-violet-200 rounded-xl p-3 flex items-center gap-2 text-violet-700">
                        <i className="fa-solid fa-star text-lg"></i>
                        <div>
                          <p className="text-[10px] font-black uppercase">Member Terdaftar! 🎉</p>
                          <p className="text-xs font-bold">{currentMember.name} • Saldo Poin: {currentMember.points}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Catatan Tambahan (Opsional)</label>
                    <textarea className="admin-input bg-slate-50 border-slate-200 text-sm font-bold shadow-inner resize-none" value={cust.note} onChange={e => setCust(prev => ({ ...prev, note: e.target.value }))} placeholder="Patokan lokasi, warna cadangan, dll." rows="2"></textarea>
                  </div>
                </div>
              </div>

              {/* Delivery Address (only for shipping) */}
              {cust.deliveryMethod === 'delivery' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-black text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2"><i className="fa-solid fa-map-location-dot text-amber-500"></i> Alamat Pengiriman</h3>
                  <div className="space-y-4">
                    <textarea className="admin-input resize-none bg-slate-50 border-slate-200 text-sm font-bold shadow-inner" value={cust.address} onChange={e => setCust(prev => ({ ...prev, address: e.target.value }))} placeholder="Detail jalan, nomor rumah, RT/RW, kelurahan..." rows="3"></textarea>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-sm dark:bg-amber-950/20">
                      <p className="text-[11px] text-amber-700 mb-3.5">Sematkan koordinat lokasi Anda via GPS agar kalkulasi ongkir akurat.</p>
                      <button className="w-full py-3 bg-white dark:bg-slate-800 border border-amber-300 text-amber-700 font-black rounded-xl text-xs flex items-center justify-center gap-2" onClick={getLocation}><i className="fa-solid fa-location-crosshairs"></i> {cust.lat ? 'Perbarui Lokasi' : 'Sematkan Titik Lokasi'}</button>
                      {cust.lat && (
                        <div className="mt-3 bg-emerald-100 border border-emerald-300 rounded-xl p-3 flex items-center gap-2 text-emerald-700 w-full justify-center">
                          <i className="fa-solid fa-circle-check text-lg"></i>
                          <span className="text-[10px] font-black uppercase">Lokasi disematkan ({cust.distance.toFixed(1)} km)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full glass-nav px-4 pt-3 z-30">
            <div className="max-w-[1200px] px-4 lg:px-10 mx-auto">
              <button className="btn-primary shadow-glow rounded-2xl py-4" onClick={() => {
                if (!cust.name || !cust.wa) {
                  showToast("Mohon lengkapi data Nama & WhatsApp!", "warning");
                  return;
                }
                if (cust.deliveryMethod === 'delivery' && !cust.address) {
                  showToast("Mohon masukkan alamat pengiriman!", "warning");
                  return;
                }
                setCurrentView('payment');
              }}>Lanjut ke Pembayaran <i className="fa-solid fa-arrow-right ml-1.5 text-xs"></i></button>
            </div>
          </div>
        </div>
      )}

      {/* Payment view */}
      {currentView === 'payment' && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900">
          <div className="glass-header shrink-0 px-5 flex justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:scale-95 transition-all shadow-sm" onClick={() => setCurrentView('checkout')}><i className="fa-solid fa-arrow-left text-sm"></i></button>
              <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Pembayaran</h1>
              <div className="w-10"></div>
            </div>
          </div>
          <div className="scroll-content flex-1 overflow-y-auto z-10 pt-4 pb-[calc(11rem+env(safe-area-inset-bottom))]">
            <div className="px-4 space-y-5 max-w-[1200px] lg:px-8 mx-auto w-full">
              {/* Payment methods */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-black text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2"><i className="fa-solid fa-wallet text-blue-500"></i> Pilih Pembayaran</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <label className="block cursor-pointer">
                    <input checked={paymentMethod === 'transfer'} className="peer sr-only" name="payment" onChange={() => setPaymentMethod('transfer')} type="radio" value="transfer" />
                    <div className={`border p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${paymentMethod === 'transfer' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                      <i className="fa-solid fa-building-columns text-lg mb-1"></i>
                      <span className="font-black text-[10px] uppercase">Transfer Bank</span>
                    </div>
                  </label>
                  <label className="block cursor-pointer">
                    <input checked={paymentMethod === 'qris'} className="peer sr-only" name="payment" onChange={() => setPaymentMethod('qris')} type="radio" value="qris" />
                    <div className={`border p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${paymentMethod === 'qris' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                      <i className="fa-solid fa-qrcode text-lg mb-1"></i>
                      <span className="font-black text-[10px] uppercase">QRIS</span>
                    </div>
                  </label>
                  <label className="block cursor-pointer">
                    <input checked={paymentMethod === 'tempo'} className="peer sr-only" name="payment" onChange={() => setPaymentMethod('tempo')} type="radio" value="tempo" />
                    <div className={`border p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${paymentMethod === 'tempo' ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                      <i className="fa-solid fa-clock-rotate-left text-lg mb-1"></i>
                      <span className="font-black text-[10px] uppercase">Bayar Tempo</span>
                    </div>
                  </label>
                  {cust.deliveryMethod === 'delivery' ? (
                    <label className="block cursor-pointer">
                      <input checked={paymentMethod === 'cod'} className="peer sr-only" name="payment" onChange={() => setPaymentMethod('cod')} type="radio" value="cod" />
                      <div className={`border p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${paymentMethod === 'cod' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                        <i className="fa-solid fa-hand-holding-dollar text-lg mb-1"></i>
                        <span className="font-black text-[10px] uppercase">COD (Bayar di Tempat)</span>
                      </div>
                    </label>
                  ) : (
                    <label className="block cursor-pointer">
                      <input checked={paymentMethod === 'cashier'} className="peer sr-only" name="payment" onChange={() => setPaymentMethod('cashier')} type="radio" value="cashier" />
                      <div className={`border p-3.5 rounded-2xl transition-all flex flex-col items-center text-center gap-2 ${paymentMethod === 'cashier' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}`}>
                        <i className="fa-solid fa-cash-register text-lg mb-1"></i>
                        <span className="font-black text-[10px] uppercase">Kasir</span>
                      </div>
                    </label>
                  )}
                </div>

                {/* Information for Tempo Payment */}
                {paymentMethod === 'tempo' && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-2xl">
                    <p className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wide flex items-center gap-1.5 mb-1"><i className="fa-solid fa-circle-info"></i> Pembayaran Tempo (Hutang Langganan)</p>
                    <p className="text-[11px] font-medium text-amber-800 dark:text-amber-300">Pesanan ini akan dicatat ke dalam buku piutang pelanggan dan wajib dilunasi sesuai batas waktu tempo (30 Hari).</p>
                  </div>
                )}

                {/* Bank account list */}
                {paymentMethod === 'transfer' && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3">
                    {appData.banks && appData.banks.length > 0 ? (
                      appData.banks.map((b, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Bank {b.bankName}</p>
                          <p className="text-lg font-black text-[var(--color-primary)] tracking-wide">{b.bankAccount}</p>
                          <p className="text-xs text-slate-500 font-medium mt-1">a.n <span className="font-bold text-slate-700 dark:text-white">{b.bankOwner}</span></p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-rose-500 font-bold text-center">Rekening pembayaran belum diatur admin.</p>
                    )}
                  </div>
                )}

                {/* QRIS preview */}
                {paymentMethod === 'qris' && appData.payment?.qrisUrl && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                    <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-widest">Scan QRIS Berikut</p>
                    <img src={appData.payment.qrisUrl} alt="QRIS" className="w-56 h-56 object-contain border border-slate-200 rounded-2xl p-2 bg-white" />
                  </div>
                )}
              </div>

              {/* Promo & Voucher Input */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-black text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Gunakan Voucher Diskon</h3>
                <div className="flex gap-2">
                  <input className="admin-input flex-1 bg-slate-50 border-slate-200 text-sm font-bold shadow-inner" value={voucherCodeInput} onChange={e => setVoucherCodeInput(e.target.value.toUpperCase())} placeholder="Masukkan kode voucher..." type="text" />
                  {vouch ? (
                    <button className="bg-rose-500 text-white font-bold px-4 rounded-xl text-xs active:scale-95" onClick={handleRemoveVoucher}>Hapus</button>
                  ) : (
                    <button className="btn-primary !w-auto px-5 text-xs shadow-glow rounded-xl" onClick={handleApplyVoucher}>Terapkan</button>
                  )}
                </div>
                {voucherError && <p className="text-[10px] text-rose-500 font-bold mt-1.5"><i className="fa-solid fa-circle-exclamation mr-1"></i> {voucherError}</p>}
                {vouch && <p className="text-[10px] text-emerald-600 font-bold mt-1.5"><i className="fa-solid fa-circle-check mr-1"></i> Voucher diterapkan: {vouch.code}</p>}
              </div>

              {/* Loyalty program member claim & Reward redemption */}
              {currentMember && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <h3 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3"><i className="fa-solid fa-star text-violet-500"></i> Poin Member ({currentMember.points || 0} Poin)</h3>
                  
                  {/* Option 1: Potongan Harga */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Gunakan {Math.min(currentMember.points, grandTotal)} poin untuk diskon belanja?</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">1 Poin = Rp 1 (Dipotong langsung dari total tagihan)</p>
                    </div>
                    <button className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${useMemberPoints ? 'bg-violet-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`} onClick={() => setUseMemberPoints(prev => !prev)}>{useMemberPoints ? 'Gunakan ✓' : 'Pakai Poin'}</button>
                  </div>

                  {/* Option 2: Tukar Hadiah */}
                  {appData.rewards && appData.rewards.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i className="fa-solid fa-gift text-amber-500"></i> Tukar Poin dengan Hadiah</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {appData.rewards.map((rw, rIdx) => {
                          const isEligible = (currentMember.points || 0) >= (parseFloat(rw.points) || 0);
                          const isSelected = claimedReward?.name === rw.name;
                          return (
                            <div key={rIdx} className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${isSelected ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900'}`}>
                              {rw.img ? <img src={rw.img} alt={rw.name} className="w-10 h-10 rounded-xl object-cover shrink-0" /> : <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0"><i className="fa-solid fa-gift text-sm"></i></div>}
                              <div className="flex-1 min-w-0">
                                <h5 className="text-xs font-black text-slate-800 dark:text-white truncate">{rw.name}</h5>
                                <p className="text-[10px] font-bold text-amber-600">{rw.points} Poin</p>
                              </div>
                              <button
                                disabled={!isEligible}
                                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all ${
                                  isSelected
                                    ? 'bg-rose-500 text-white'
                                    : isEligible
                                    ? 'bg-amber-500 text-white hover:bg-amber-600 active:scale-95'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                                onClick={() => {
                                  if (isSelected) {
                                    setClaimedReward(null);
                                    showToast("Klaim hadiah dibatalkan");
                                  } else {
                                    setClaimedReward({ name: rw.name, pointsCost: parseFloat(rw.points) || 0 });
                                    showToast(`Klaim hadiah ${rw.name} dipilih!`, "success");
                                  }
                                }}
                              >
                                {isSelected ? 'Batal' : isEligible ? 'Tukar' : 'Kurang'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Proof Upload (if required) */}
              {(paymentMethod === 'transfer' || paymentMethod === 'qris' || paymentMethod === 'tempo') && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-black text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2"><i className="fa-solid fa-cloud-arrow-up text-indigo-500"></i> Bukti Pembayaran</h3>
                  <div className="flex flex-col items-center">
                    <input accept="image/*" className="hidden" id="bukti-file" onChange={handleBuktiUpload} type="file" />
                    <label className="cursor-pointer w-full py-6 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-900" htmlFor="bukti-file">
                      <i className="fa-solid fa-image text-4xl text-slate-300 mb-2"></i>
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Pilih / Ambil Foto Bukti</span>
                      <span className="text-[9px] text-slate-400 mt-1">Format: JPG, PNG (Max 5MB)</span>
                    </label>

                    {buktiUploading && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-bold">
                        <i className="fa-solid fa-spinner fa-spin text-emerald-500"></i>
                        <span>{buktiUploadingText}</span>
                      </div>
                    )}
                    {buktiUploaded && (
                      <div className="mt-3 bg-emerald-100 border border-emerald-300 rounded-xl p-3 flex items-center gap-2 text-emerald-700 w-full justify-center">
                        <i className="fa-solid fa-circle-check text-lg"></i>
                        <span className="text-xs font-black uppercase">Bukti Berhasil Disimpan!</span>
                      </div>
                    )}
                    {buktiError && (
                      <button className="mt-3 w-full py-2 bg-rose-50 border border-rose-200 text-rose-600 font-bold rounded-xl text-xs" onClick={retryBuktiUpload}>Gagal upload. Coba lagi!</button>
                    )}
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3.5">
                <h3 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-wider border-b border-slate-100 pb-3">Ringkasan Tagihan</h3>
                <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                  <span>Subtotal Belanja</span>
                  <span className="text-slate-800 dark:text-white">{fCur(subtotalCart)}</span>
                </div>
                {cust.deliveryMethod === 'delivery' && (
                  <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                    <span>Ongkos Kirim kurir ({cust.distance.toFixed(1)} km)</span>
                    <span className="text-slate-800 dark:text-white">{fCur(shippingCost)}</span>
                  </div>
                )}
                {(discounts.productDiscount > 0 || discounts.shippingDiscount > 0) && (
                  <div className="flex flex-col gap-2 pt-2 border-t border-dashed border-slate-100">
                    {discounts.productDiscount > 0 && (
                      <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                        <span>Diskon Belanja</span>
                        <span className="text-rose-500">-{fCur(discounts.productDiscount)}</span>
                      </div>
                    )}
                    {discounts.shippingDiscount > 0 && (
                      <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                        <span>Diskon Ongkir</span>
                        <span className="text-rose-500">-{fCur(discounts.shippingDiscount)}</span>
                      </div>
                    )}
                  </div>
                )}
                {appData.store.ppnEnabled && (
                  <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                    <span>PPN ({appData.store.ppnRate || 11}%)</span>
                    <span className="text-slate-800 dark:text-white">{fCur(ppnAmount)}</span>
                  </div>
                )}
                {useMemberPoints && pointsDiscount > 0 && (
                  <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                    <span>Potongan Poin Member</span>
                    <span className="text-violet-500">-{fCur(pointsDiscount)}</span>
                  </div>
                )}
                {claimedReward && (
                  <div className="flex justify-between items-center text-sm font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 p-2.5 rounded-xl border border-amber-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-gift"></i> Hadiah Ditukar: {claimedReward.name}</span>
                    <span className="font-black">-{claimedReward.pointsCost} Poin</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700 text-base font-black">
                  <span className="text-slate-900 dark:text-white uppercase tracking-wider">Total Pembayaran</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{fCur(grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full glass-nav px-4 pt-3 z-30">
            <div className="max-w-[1200px] px-4 lg:px-10 mx-auto">
              <button className="btn-primary shadow-glow rounded-2xl py-4" onClick={handleProcessOrder}>Proses Pesanan Sekarang <i className="fa-solid fa-paper-plane ml-1.5"></i></button>
            </div>
          </div>
        </div>
      )}

      
      {/* Orders View — Daftar Pesanan Saya */}
      {currentView === 'orders' && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900">
          {/* Header */}
          <div className="glass-header shrink-0 px-5 flex justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:scale-95 transition-all shadow-sm" onClick={() => setCurrentView('catalog')}><i className="fa-solid fa-arrow-left text-sm"></i></button>
              <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Pesanan Saya</h1>
              <div className="w-10 h-10"></div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-4 py-5 hide-scrollbar">
            <div className="max-w-[640px] mx-auto space-y-4">
              {myOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 shadow-inner">
                    <i className="fa-solid fa-box-open text-3xl text-slate-300 dark:text-slate-600"></i>
                  </div>
                  <h3 className="font-black text-slate-800 dark:text-white text-base mb-2">Belum Ada Pesanan</h3>
                  <p className="text-xs font-bold text-slate-400 mb-6">Pesanan kamu akan muncul di sini setelah checkout.</p>
                  <button className="btn-primary !w-auto px-8 py-3 text-sm shadow-glow rounded-2xl" onClick={() => setCurrentView('catalog')}>
                    <i className="fa-solid fa-bag-shopping mr-2"></i>Mulai Belanja
                  </button>
                </div>
              ) : (
                myOrders.map((order, idx) => {
                  const statusColor = {
                    'Baru': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
                    'Diproses': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
                    'Dikirim': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
                    'Selesai': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
                    'Dibatalkan': 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400',
                  }[order.status] || 'bg-slate-100 text-slate-600';

                  const statusIcon = {
                    'Baru': 'fa-hourglass-start',
                    'Diproses': 'fa-gear',
                    'Dikirim': 'fa-truck-fast',
                    'Selesai': 'fa-circle-check',
                    'Dibatalkan': 'fa-circle-xmark',
                  }[order.status] || 'fa-circle-dot';

                  const isSelesai = order.status === 'Selesai';
                  const isDiterima = order.status === 'Diterima';
                  const canConfirm = isSelesai && !isDiterima;

                  return (
                    <div key={idx} className={`bg-white dark:bg-slate-800 rounded-[1.5rem] border shadow-sm overflow-hidden transition-all ${isSelesai ? 'border-emerald-200 dark:border-emerald-800' : 'border-slate-200 dark:border-slate-700'}`}>
                      {/* Order Header */}
                      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700/60 flex justify-between items-center gap-3">
                        <div className="min-w-0">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">ID Pesanan</p>
                          <p className="font-black text-slate-900 dark:text-white text-sm tracking-wide truncate">#{order.orderId}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-0.5">{order.date ? new Date(order.date).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''}</p>
                        </div>
                        <span className={`shrink-0 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest flex items-center gap-1.5 ${statusColor}`}>
                          <i className={`fa-solid ${statusIcon} text-[10px]`}></i>
                          {order.status || 'Baru'}
                        </span>
                      </div>

                      {/* Order Summary */}
                      <div className="px-5 py-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <i className="fa-solid fa-box mr-1.5"></i>{order.itemCount || 1} item
                          </span>
                          <span className="font-black text-[var(--color-primary)] text-base tracking-tight">{fCur(order.total || 0)}</span>
                        </div>

                        {/* Points earned */}
                        {order.pointsEarned > 0 && (
                          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/40 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
                            <i className="fa-solid fa-star text-amber-500 text-xs"></i>
                            <span className="text-[11px] font-black text-amber-700 dark:text-amber-400">+{order.pointsEarned} Poin Member diperoleh</span>
                          </div>
                        )}

                        {/* Claimed reward */}
                        {order.claimedReward && (
                          <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/40 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
                            <i className="fa-solid fa-gift text-violet-500 text-xs"></i>
                            <div className="min-w-0">
                              <span className="text-[10px] font-black text-violet-700 dark:text-violet-400 uppercase tracking-wider block">Klaim Hadiah: {order.claimedReward.name}</span>
                              <span className="text-[9px] font-bold text-violet-500">
                                {order.claimedReward.status === 'ready' ? '✅ Sertakan bersama pengiriman' : order.claimedReward.status === 'waiting_stock' ? '⏳ Stok kosong, dikirim susulan' : '⏳ Menunggu konfirmasi toko'}
                                {order.claimedReward.note ? ` — ${order.claimedReward.note}` : ''}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Progress Steps */}
                        <div className="flex items-center gap-1 my-4 overflow-x-auto hide-scrollbar pb-1">
                          {['Baru', 'Diproses', 'Dikirim', 'Selesai'].map((step, si) => {
                            const steps = ['Baru', 'Diproses', 'Dikirim', 'Selesai', 'Diterima'];
                            const curIdx = steps.indexOf(order.status || 'Baru');
                            const stepIdx = si;
                            const isActive = curIdx >= stepIdx;
                            const isCur = curIdx === stepIdx;
                            return (
                              <div key={step} className="flex items-center gap-1 shrink-0">
                                <div className={`flex flex-col items-center gap-1 ${isCur ? 'scale-110' : ''}`}>
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all ${isActive ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}>
                                    <i className={`fa-solid ${['fa-plus', 'fa-gear', 'fa-truck-fast', 'fa-check'][si]}`}></i>
                                  </div>
                                  <span className={`text-[8px] font-black whitespace-nowrap ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-400'}`}>{step}</span>
                                </div>
                                {si < 3 && <div className={`w-8 h-0.5 rounded mb-4 shrink-0 ${curIdx > si ? 'bg-[var(--color-primary)]' : 'bg-slate-200 dark:bg-slate-700'}`}></div>}
                              </div>
                            );
                          })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 mt-3">
                          {/* Pesanan Diterima Button — only when status Selesai */}
                          {canConfirm && (
                            <button
                              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all"
                              onClick={async () => {
                                showConfirm(
                                  'Konfirmasi Pesanan Diterima',
                                  `Apakah pesanan #${order.orderId.split('-').pop()} sudah kamu terima dengan lengkap dan dalam kondisi baik?`,
                                  async () => {
                                    showToast('Menyimpan konfirmasi...', 'loading');
                                    try {
                                      await db.collection('freshmart_orders').doc(order.orderId).update({ status: 'Diterima' });
                                      const updated = myOrders.map(o => o.orderId === order.orderId ? { ...o, status: 'Diterima' } : o);
                                      setMyOrders(updated);
                                      localStorage.setItem('freshmart_my_orders', JSON.stringify(updated));
                                      showToast('Terima kasih! Pesanan dikonfirmasi diterima. 🎉', 'success');
                                    } catch (e) {
                                      showToast('Gagal konfirmasi: ' + e.message, 'error');
                                    }
                                  },
                                  'Ya, Sudah Diterima',
                                  false
                                );
                              }}
                            >
                              <i className="fa-solid fa-box-open text-lg"></i>
                              Pesanan Diterima
                            </button>
                          )}

                          {/* Already confirmed */}
                          {isDiterima && (
                            <div className="w-full py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-black text-xs rounded-2xl flex items-center justify-center gap-2">
                              <i className="fa-solid fa-circle-check"></i> Pesanan Telah Dikonfirmasi Diterima
                            </div>
                          )}

                          {/* Preview Struk */}
                          <div className="flex gap-2">
                            <button
                              className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:bg-slate-200 dark:hover:bg-slate-600"
                              onClick={() => {
                                // Load full order from firebase to preview receipt
                                showToast('Memuat struk...', 'loading');
                                db.collection('freshmart_orders').doc(order.orderId).get().then(doc => {
                                  if (doc.exists) {
                                    setSelectedAdminOrder(doc.data());
                                    setReceiptPreviewOpen(true);
                                  } else {
                                    showToast('Data pesanan tidak ditemukan', 'error');
                                  }
                                }).catch(e => showToast('Gagal memuat: ' + e.message, 'error'));
                              }}
                            >
                              <i className="fa-solid fa-receipt"></i> Struk
                            </button>
                            {order.status !== 'Dibatalkan' && (
                              <button
                                className="flex-1 py-2.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all hover:bg-green-100"
                                onClick={() => {
                                  const phone = appData.store?.wa || '';
                                  if (!phone) return showToast('Nomor WA toko belum dikonfigurasi', 'warning');
                                  const msg = encodeURIComponent(`Halo ${appData.store?.name || 'Toko'}, saya ingin menanyakan status pesanan saya:\nID: #${order.orderId}\nStatus: ${order.status || 'Baru'}\nTotal: ${fCur(order.total || 0)}`);
                                  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
                                }}
                              >
                                <i className="fa-brands fa-whatsapp"></i> Tanya WA
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wishlist View */}
      {currentView === 'wishlist' && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900">
          <div className="glass-header shrink-0 px-5 flex justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:scale-95 transition-all shadow-sm" onClick={() => setCurrentView('catalog')}><i className="fa-solid fa-arrow-left text-sm"></i></button>
              <h1 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Favorit Saya</h1>
              {wishlist.length > 0 ? (
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-100 active:scale-95 transition-all" onClick={() => {
                  showConfirm("Kosongkan Favorit", "Yakin ingin menghapus semua item favorit Anda?", () => {
                    setWishlist([]);
                    localStorage.removeItem('freshmart_wishlist');
                    showToast('Favorit dikosongkan!');
                  });
                }}><i className="fa-solid fa-trash-can text-sm"></i></button>
              ) : <div className="w-10"></div>}
            </div>
          </div>
          <div className="scroll-content flex-1 overflow-y-auto z-10 pt-6 pb-[calc(4rem+env(safe-area-inset-bottom))]">
            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] px-5 text-center max-w-xs mx-auto">
                <div className="w-24 h-24 bg-rose-50 border border-rose-200 rounded-full flex items-center justify-center mb-5 text-rose-400 dark:bg-rose-900/20 dark:border-rose-800 shadow-inner"><i className="fa-solid fa-heart text-5xl"></i></div>
                <h3 className="font-black text-slate-800 dark:text-white text-xl mb-2">Belum Ada Favorit</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Kumpulkan produk impianmu di sini.</p>
              </div>
            ) : (
              <div className="px-4 space-y-4 max-w-[1200px] lg:px-8 mx-auto w-full">
                {wishlist.map((item, idx) => {
                  const original = appData.products.find(p => p.id === item.id);
                  return (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4 cursor-pointer" onClick={() => {
                      if (original) {
                        setSelectedProduct(original);
                        setSelectedVariantIdx(original.variants?.length ? null : 0);
                        setCQty(1);
                        setActiveSlideIdx(0);
                        loadProductReviews(original.id);
                      }
                    }}>
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-2xl object-cover border border-slate-100 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black text-slate-800 dark:text-white truncate uppercase">{item.name}</h4>
                        {item.variantName && <p className="text-xs text-slate-500 mt-0.5">Varian: {item.variantName}</p>}
                        <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-1">{fCur(item.price)}</p>
                      </div>
                      <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors shrink-0" onClick={(e) => { e.stopPropagation(); toggleWishlist(original || { id: item.id }, item.variantName); }}><i className="fa-solid fa-heart text-rose-500 text-lg"></i></button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Admin Panel Login */}
      {currentView === 'admin-login' && (
        <div className="view-section flex items-center justify-center bg-slate-900 relative overflow-hidden">
          <div className="absolute top-4 right-4 z-50">
            <button className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center" onClick={() => setCurrentView('catalog')}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className="w-full max-w-sm p-5 relative z-10 mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/15 p-8 shadow-2xl flex flex-col items-center text-center">
              <div className="w-[72px] h-[72px] bg-[var(--color-primary)] text-white rounded-2xl flex items-center justify-center mb-5 text-3xl border border-white/15"><i className="fa-solid fa-shield-halved"></i></div>
              <h2 className="text-2xl font-black tracking-tight text-white mb-1">Admin Panel</h2>
              <p className="text-[10px] font-black text-slate-400 mb-7 uppercase tracking-widest">Otorisasi Superadmin</p>
              <form className="space-y-4 w-full text-left" onSubmit={handleAdminLogin}>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                  <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder:text-slate-400 text-sm font-semibold focus:outline-none" name="email" placeholder="Email Admin" type="email" required />
                </div>
                <div className="relative">
                  <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                  <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder:text-slate-400 text-sm font-semibold focus:outline-none" name="password" placeholder="Password" type="password" required />
                </div>
                <button className="btn-solid shadow-glow mt-4" type="submit">Masuk Sekarang <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel Dashboard */}
      {currentView === 'admin' && isAdmin && (
        <div className="view-section flex flex-col fade-in bg-slate-50 dark:bg-slate-900 z-50">
          <div className="glass-header shrink-0 px-4 flex items-center justify-center z-30 sticky top-0 pb-3">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-4 lg:px-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md shrink-0"><i className="fa-solid fa-layer-group text-sm"></i></div>
                <div>
                  <h1 className="text-sm font-black tracking-tight text-slate-900 dark:text-white leading-none">CMS Toko</h1>
                  <span className="text-[9px] font-black text-[var(--color-primary)] uppercase tracking-widest bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-xl inline-block mt-0.5 leading-none">Superadmin</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="h-8 px-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-[11px] font-black" onClick={() => setCurrentView('catalog')}><i className="fa-solid fa-eye text-blue-500 mr-1"></i> Preview</button>
                <button className="h-8 px-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 rounded-xl text-[11px] font-black" onClick={async () => {
                  await auth.signOut();
                  setIsAdmin(false);
                  setCurrentView('catalog');
                  showToast("Logout Berhasil!");
                }}><i className="fa-solid fa-power-off mr-1"></i> Keluar</button>
              </div>
            </div>
          </div>

          <div className="scroll-content flex-1 overflow-y-auto w-full pb-[calc(5rem+env(safe-area-inset-bottom))]">
            <div className="max-w-[1200px] mx-auto pt-6 px-4 w-full">
              {/* Dashboard Report Periods */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 mb-7 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-800 dark:text-white leading-none">Laporan Toko</h2>
                    <p className="text-xs text-slate-400 mt-1 font-bold">Ringkasan penjualan dan margin terkini.</p>
                  </div>
                  <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
                    {['today', 'week', 'month', 'all'].map((p) => (
                      <button key={p} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${adminReportPeriod === p ? 'bg-[var(--color-primary)] text-white' : 'text-slate-500'}`} onClick={() => loadAdminReport(p)}>{p === 'today' ? 'Hari Ini' : p === 'week' ? 'Mgu Ini' : p === 'month' ? 'Bln Ini' : 'Semua'}</button>
                    ))}
                  </div>
                </div>

                {adminReports ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Omset Penjualan</p>
                      <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{fCur(adminReports.omset)}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Laba Bersih</p>
                      <p className="text-xl font-black text-blue-600 dark:text-blue-400 mt-1">{fCur(adminReports.profit)}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Modal Aset</p>
                      <p className="text-xl font-black text-slate-700 dark:text-slate-300 mt-1">{fCur(adminReports.assetHpp)}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Transaksi</p>
                      <p className="text-xl font-black text-slate-800 dark:text-white mt-1">{adminReports.successCount} Pesanan</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6"><i className="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>
                )}
              </div>

              {/* Admin Section Tabs Navigation */}
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 gap-2.5 mb-6">
                {[
                  { id: 'orders', name: 'Orders', icon: 'fa-receipt' },
                  { id: 'products', name: 'Produk', icon: 'fa-box-open' },
                  { id: 'categories', name: 'Kategori', icon: 'fa-tags' },
                  { id: 'brands', name: 'Merek', icon: 'fa-copyright' },
                  { id: 'vouchers', name: 'Voucher', icon: 'fa-ticket-simple' },
                  { id: 'banks', name: 'Rekening', icon: 'fa-building-columns' },
                  { id: 'banners', name: 'Banner', icon: 'fa-images' },
                  { id: 'rewards', name: 'Hadiah', icon: 'fa-gift' },
                  { id: 'customers', name: 'Pelanggan', icon: 'fa-address-book' },
                  { id: 'reviews', name: 'Ulasan', icon: 'fa-star' },
                  { id: 'piutang', name: 'Piutang', icon: 'fa-clock-rotate-left' },
                  { id: 'pajak', name: 'Pajak & Keuangan', icon: 'fa-calculator' },
                  { id: 'settings', name: 'Pengaturan', icon: 'fa-gear' },
                ].map((tab) => {
                  const isActive = activeAdminTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-200 active:scale-95 ${
                        isActive
                          ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white border-transparent shadow-glow -translate-y-0.5'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)] hover:shadow-sm'
                      }`}
                      onClick={() => setActiveAdminTab(tab.id)}
                    >
                      <i className={`fa-solid ${tab.icon} text-lg ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}></i>
                      <span className="text-[9px] font-black uppercase tracking-wider leading-tight">{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab: Orders List */}
              {activeAdminTab === 'orders' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Daftar Transaksi</h3>
                    <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold" onClick={exportDataJson}><i className="fa-solid fa-download mr-1"></i> Backup JSON</button>
                  </div>
                  <div className="space-y-3">
                    {adminOrders.map((o, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between" onClick={() => {
                        setSelectedAdminOrder(o);
                        setAdminOrderModalOpen(true);
                      }}>
                        <div>
                          <p className="font-black text-sm text-slate-800 dark:text-white">#{o.orderId.split('-').pop()}</p>
                          <p className="text-[10px] text-slate-400 font-bold">{o.customer.name} • {o.payment.method.toUpperCase()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-sm text-emerald-600">{fCur(o.payment.grandTotal)}</p>
                          <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase ${o.status === 'Baru' ? 'bg-rose-100 text-rose-600' : o.status === 'Diproses' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>{o.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Categories */}
              {activeAdminTab === 'categories' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Manajemen Kategori</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('categories');
                      setAdminFormItem({ name: '', img: '' });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Kategori</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.categories || []).map((c, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={c.img} alt={c.name} className="w-10 h-10 object-cover rounded-xl border" onError={e => { e.target.src = 'https://placehold.co/100'; }} />
                          <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{c.name}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('categories');
                            setAdminFormItem(c);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('categories', c)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Brands */}
              {activeAdminTab === 'brands' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Manajemen Merek</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('brands');
                      setAdminFormItem({ name: '', img: '' });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Merek</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.brands || []).map((b, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={b.img} alt={b.name} className="w-10 h-10 object-cover rounded-xl border" onError={e => { e.target.src = 'https://placehold.co/100'; }} />
                          <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{b.name}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('brands');
                            setAdminFormItem(b);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('brands', b)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Vouchers */}
              {activeAdminTab === 'vouchers' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Manajemen Voucher</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('vouchers');
                      setAdminFormItem({ code: '', type: 'percent', value: 0, minPurchase: 0, maxDiscount: 0, targetProduct: '', isShow: true });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Voucher</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.vouchers || []).map((v, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="font-black text-sm text-slate-800 dark:text-white">{v.code}</p>
                          <p className="text-[10px] text-slate-400 font-bold">
                            {v.type === 'percent' ? `Diskon ${v.value}%` : v.type === 'flat' ? `Diskon Rp ${v.value.toLocaleString('id-ID')}` : v.type === 'shipping_free' ? 'Gratis Ongkir' : `Diskon Ongkir Rp ${v.value.toLocaleString('id-ID')}`}
                            {v.minPurchase > 0 && ` • Min Belanja: ${fCur(v.minPurchase)}`}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('vouchers');
                            setAdminFormItem(v);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('vouchers', v)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Banks */}
              {activeAdminTab === 'banks' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Rekening Bank</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('banks');
                      setAdminFormItem({ bankName: '', bankAccount: '', bankOwner: '' });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Rekening</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.banks || []).map((b, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{b.bankName}</p>
                          <p className="text-[10px] text-slate-400 font-bold">{b.bankAccount} a.n {b.bankOwner}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('banks');
                            setAdminFormItem(b);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('banks', b)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Banners */}
              {activeAdminTab === 'banners' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Banner Promo</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('banners');
                      setAdminFormItem({ title: '', desc: '', img: '', link: '' });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Banner</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.banners || []).map((bn, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={bn.img} alt={bn.title} className="w-16 h-10 object-cover rounded-lg border" />
                          <div>
                            <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{bn.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold truncate max-w-[200px]">{bn.desc}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('banners');
                            setAdminFormItem(bn);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('banners', bn)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Rewards */}
              {activeAdminTab === 'rewards' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Rewards Member</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('rewards');
                      setAdminFormItem({ name: '', img: '', pointsCost: 100, stock: 5, isActive: true });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Reward</button>
                  </div>
                  <div className="space-y-3">
                    {(appData.rewards || []).map((r, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={r.img} alt={r.name} className="w-10 h-10 object-cover rounded-xl border" />
                          <div>
                            <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{r.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold">{r.pointsCost} Poin • Stok: {r.stock}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('rewards');
                            setAdminFormItem(r);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('rewards', r)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Customers */}
              {activeAdminTab === 'customers' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Database Pelanggan</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('customers');
                      setAdminFormItem({ name: '', phone: '', points: 0 });
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Pelanggan</button>
                  </div>
                  <div className="space-y-3">
                    {(adminCustomers || []).map((c, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{c.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold">+{c.phone} • {c.points || 0} Poin</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" onClick={() => {
                            setAdminFormType('customers');
                            setAdminFormItem(c);
                            setAdminModalOpen(true);
                          }}><i className="fa-solid fa-pen"></i></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" onClick={() => handleAdminDelete('customers', c)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Reviews */}
              {activeAdminTab === 'reviews' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Moderasi Ulasan</h3>
                    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
                      {['all', 'visible', 'hidden'].map((f) => (
                        <button key={f} className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider ${reviewFilterMode === f ? 'bg-[var(--color-primary)] text-white' : 'text-slate-500'}`} onClick={() => setReviewFilterMode(f)}>
                          {f === 'all' ? 'Semua' : f === 'visible' ? 'Tampil' : 'Sembunyi'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {adminReviews
                      .filter(r => {
                        if (reviewFilterMode === 'visible') return r.isVisible !== false;
                        if (reviewFilterMode === 'hidden') return r.isVisible === false;
                        return true;
                      })
                      .map((r, idx) => {
                        const stars = Array.from({ length: 5 }, (_, i) => (
                          <i key={i} className={`fa-solid fa-star ${i < r.rating ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}`}></i>
                        ));
                        return (
                          <div key={idx} className={`p-4 rounded-2xl border ${r.isVisible === false ? 'border-rose-200 bg-rose-50/40 dark:border-rose-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/30'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{r.customerName || 'Pelanggan'}</p>
                                <p className="text-[9px] text-slate-400 font-bold mt-0.5">{r.productName}</p>
                              </div>
                              <div className="flex text-xs">{stars}</div>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal mb-3">{r.text}</p>
                            {r.photoUrl && (
                              <img src={r.photoUrl} alt="Review" className="w-16 h-16 object-cover rounded-lg border mb-3 cursor-pointer" onClick={() => window.open(r.photoUrl, '_blank')} />
                            )}
                            {r.adminReply && (
                              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mb-3">
                                <p className="text-[9px] font-black text-[var(--color-primary)] uppercase mb-1">Balasan Anda:</p>
                                <p className="text-xs text-slate-700 dark:text-slate-300">{r.adminReply}</p>
                              </div>
                            )}
                            <div className="flex gap-2 border-t pt-2.5">
                              <button className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-black uppercase hover:bg-blue-100" onClick={() => {
                                setAdminReplyTarget(r);
                                setAdminReplyText(r.adminReply || '');
                              }}><i className="fa-solid fa-reply"></i> {r.adminReply ? 'Edit Balasan' : 'Balas'}</button>
                              <button className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase ${r.isVisible === false ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'}`} onClick={() => handleToggleReviewVisibility(r)}>
                                <i className={`fa-solid ${r.isVisible === false ? 'fa-eye' : 'fa-eye-slash'}`}></i> {r.isVisible === false ? 'Tampilkan' : 'Sembunyikan'}
                              </button>
                              <button className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-500 text-[10px] font-black uppercase hover:bg-rose-100 ml-auto" onClick={() => handleDeleteReview(r)}><i className="fa-solid fa-trash"></i> Hapus</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Tab: Piutang */}
              {activeAdminTab === 'piutang' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Piutang Pembayaran Tempo</h3>
                    <input className="admin-input !w-48 text-xs" placeholder="Cari pelanggan..." value={piutangSearch} onChange={e => setPiutangSearch(e.target.value)} />
                  </div>
                  <div className="space-y-4">
                    {piutangOrders
                      .filter(o => !piutangSearch || (o.customer?.name || '').toLowerCase().includes(piutangSearch.toLowerCase()))
                      .map((o, idx) => {
                        const totalKredit = o.payment?.grandTotal || 0;
                        const sisaPokok = o.payment?.tempoBalance || 0;
                        const dueDate = o.payment?.tempoDueDate || 0;
                        const isLunas = o.payment?.paymentStatus === 'lunas' || sisaPokok <= 0;
                        
                        let lateDays = 0;
                        let denda = 0;
                        if (!isLunas && Date.now() > dueDate) {
                          lateDays = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                          if (o.payment?.tempoPenaltyStopped !== true) {
                            const rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
                            denda = (rate / 100 * sisaPokok) * lateDays;
                          } else {
                            denda = parseFloat(o.payment?.tempoFixedPenalty) || 0;
                          }
                        }

                        return (
                          <div key={idx} className={`p-4 rounded-2xl border ${isLunas ? 'border-emerald-200 bg-emerald-50/20 dark:border-emerald-950/20' : 'border-rose-200 bg-rose-50/20 dark:border-rose-950/20'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-black text-xs text-slate-800 dark:text-white">#{o.orderId.split('-').pop()}</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">{o.customer?.name} • WhatsApp: +{o.customer?.wa}</p>
                              </div>
                              <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${isLunas ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                                {isLunas ? 'Lunas' : 'Hutang'}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3 text-xs bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                              <div>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase">Total Kredit</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300">{fCur(totalKredit)}</span>
                              </div>
                              <div>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase">Sisa Pokok</span>
                                <span className="font-black text-rose-500">{fCur(sisaPokok)}</span>
                              </div>
                              {!isLunas && (
                                <div>
                                  <span className="block text-[8px] font-bold text-slate-400 uppercase">Jatuh Tempo</span>
                                  <span className="font-bold text-slate-600 dark:text-slate-400">{new Date(dueDate).toLocaleDateString('id-ID')}</span>
                                </div>
                              )}
                              {!isLunas && lateDays > 0 && (
                                <div className="col-span-2 sm:col-span-1">
                                  <span className="block text-[8px] font-bold text-rose-400 uppercase">Keterlambatan</span>
                                  <span className="font-black text-rose-600">{lateDays} Hari (Denda: {fCur(denda)})</span>
                                </div>
                              )}
                            </div>
                            {!isLunas && (
                              <div className="flex gap-2.5 border-t pt-2.5">
                                <button className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-black uppercase" onClick={() => {
                                  const amt = window.prompt(`Masukkan nominal cicilan (Sisa pokok: ${fCur(sisaPokok)}):`);
                                  if (amt) handlePayTempoInstallment(o, amt);
                                }}><i className="fa-solid fa-money-bill-wave"></i> Bayar Cicilan</button>
                                <button className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 text-[10px] font-black uppercase" onClick={() => {
                                  showConfirm("Bayar Lunas", "Yakin ingin melunasi seluruh sisa piutang ini?", () => {
                                    handlePayTempoInstallment(o, sisaPokok);
                                  }, "Ya, Lunasi");
                                }}><i className="fa-solid fa-check-double"></i> Bayar Lunas</button>
                                <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-black uppercase ml-auto" onClick={() => {
                                  setSelectedAdminOrder(o);
                                  setReceiptPreviewOpen(true);
                                }}><i className="fa-solid fa-print"></i> Struk</button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Tab: Pajak & Keuangan */}
              {activeAdminTab === 'pajak' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-1">Simulasi Pajak UMKM &amp; PPN</h3>
                    <p className="text-xs text-slate-400">Ringkasan kewajiban PPN (11%) dan PPh Final UMKM (0.5%) dari total omset toko.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Omset Bruto</p>
                      <p className="text-xl font-black text-slate-800 dark:text-white mt-1">{fCur(adminReports?.omset || 0)}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimasi PPh Final UMKM (0.5%)</p>
                      <p className="text-xl font-black text-amber-600 dark:text-amber-400 mt-1">{fCur((adminReports?.omset || 0) * 0.005)}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total PPN Terkumpul</p>
                      <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{fCur(adminReports?.ppnCollected || 0)}</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 p-4 rounded-2xl flex items-start gap-3">
                    <i className="fa-solid fa-circle-info text-amber-500 text-lg mt-0.5"></i>
                    <div className="text-xs font-bold text-amber-800 dark:text-amber-300 space-y-1">
                      <p className="font-black uppercase">Pengaturan PPN Toko</p>
                      <p>Sistem PPN Toko: <span className="underline">{appData.store.ppnEnabled ? `Aktif (${appData.store.ppnRate || 11}%)` : 'Nonaktif'}</span>. Anda dapat mengaktifkan/mengubah tarif PPN di <button className="font-black underline text-amber-900 dark:text-amber-200" onClick={() => setActiveAdminTab('settings')}>Menu Pengaturan</button>.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Settings */}
              {activeAdminTab === 'settings' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-2">Pengaturan Toko</h3>
                    <p className="text-xs text-slate-400">Sesuaikan profil, warna tema, tarif pengiriman, dan operasional toko.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_profile');
                      setAdminFormItem({ ...appData.store });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-store text-xl text-emerald-500"></i>
                      <span className="text-[10px] font-black uppercase">Profil Toko</span>
                    </button>
                    
                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_catalog');
                      setAdminFormItem({ ...appData.store });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-palette text-xl text-blue-500"></i>
                      <span className="text-[10px] font-black uppercase">Kategori UI UX</span>
                    </button>

                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_shipping');
                      setAdminFormItem({ ...appData.store });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-motorcycle text-xl text-amber-500"></i>
                      <span className="text-[10px] font-black uppercase">Pengiriman</span>
                    </button>

                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_payment');
                      setAdminFormItem({ qrisUrl: appData.payment?.qrisUrl || '' });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-qrcode text-xl text-indigo-500"></i>
                      <span className="text-[10px] font-black uppercase">QRIS Pay</span>
                    </button>

                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_config');
                      setAdminFormItem({ gasUrl: appData.config?.gasUrl || '' });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-laptop-code text-xl text-rose-500"></i>
                      <span className="text-[10px] font-black uppercase">Sistem &amp; API</span>
                    </button>

                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_theme');
                      setAdminFormItem({ uiTheme: appData.store.uiTheme || 'emerald', themeColor: appData.store.themeColor || '#10b981' });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-paintbrush text-xl text-violet-500"></i>
                      <span className="text-[10px] font-black uppercase">Warna Tema UI</span>
                    </button>

                    <button className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-all" onClick={() => {
                      setAdminFormType('settings_operasional');
                      setAdminFormItem({ useStock: appData.store.useStock, ppnEnabled: appData.store.ppnEnabled, ppnRate: appData.store.ppnRate });
                      setAdminModalOpen(true);
                    }}>
                      <i className="fa-solid fa-sliders text-xl text-violet-500"></i>
                      <span className="text-[10px] font-black uppercase">Operasional</span>
                    </button>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mt-6">
                    <h3 className="font-black text-slate-700 dark:text-white mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2"><i className="fa-solid fa-database text-[var(--color-primary)]"></i> Pencadangan Data</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button onClick={exportDataJson} className="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-black py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90"><i className="fa-solid fa-download"></i> Backup Lokal (.json)</button>
                      <label className="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-black py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer text-center">
                        <i className="fa-solid fa-upload"></i> Restore Data
                        <input type="file" accept=".json" className="hidden" onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.readAsText(file);
                            reader.onload = async () => {
                              try {
                                const parsed = JSON.parse(reader.result);
                                if (parsed && (parsed.products || parsed.store)) {
                                  showToast("Merestore data...", "loading");
                                  await db.collection("freshmart").doc("cms_data").set(parsed);
                                  showToast("Restore berhasil! Memuat ulang...", "success");
                                  setTimeout(() => window.location.reload(), 1500);
                                } else {
                                  showToast("Format JSON tidak valid!", "error");
                                }
                              } catch(err) {
                                showToast("Gagal membaca file JSON: " + err.message, "error");
                              }
                            };
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                </div>
              )}


              {/* Tab: Products List */}
              {activeAdminTab === 'products' && (
                <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Manajemen Produk</h3>
                    <button className="btn-primary !w-auto px-5 py-2 text-xs shadow-glow rounded-xl" onClick={() => {
                      setAdminFormType('products');
                      setAdminFormItem({ name: '', price: 0, stock: 10, category: appData.categories[0]?.name || '', brand: appData.brands[0]?.name || '', sku: '', desc: '', isActive: true });
                      setTempWholesale([]);
                      setTempVariants([]);
                      setAdminModalOpen(true);
                    }}><i className="fa-solid fa-plus mr-1"></i> Tambah Produk</button>
                  </div>
                  <div className="space-y-3">
                    {appData.products.map((p, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={p.img} alt={p.name} className="w-12 h-12 object-cover rounded-xl border" />
                          <div>
                            <p className="font-black text-xs text-slate-800 dark:text-white uppercase">{p.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold">Harga: {fCur(p.price)} • Stok: {p.stock}</p>
                          </div>
                        </div>
                          <div className="flex gap-1.5 flex-wrap justify-end">
                            <button className="p-2 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-100 text-xs font-black flex items-center gap-1" title="Restock Cepat" onClick={() => {
                              const addStk = window.prompt(`Tambah stok untuk ${p.name} (Stok saat ini: ${p.stock}):`, "10");
                              if (addStk && !isNaN(parseFloat(addStk))) {
                                const newStk = (parseFloat(p.stock) || 0) + parseFloat(addStk);
                                showToast("Memperbarui stok...", "loading");
                                db.collection('freshmart').doc('cms_data').collection('products').doc(String(p.id)).update({ stock: newStk }).then(() => {
                                  showToast(`Stok ${p.name} diperbarui menjadi ${newStk}!`, "success");
                                }).catch(e => showToast("Gagal restock: " + e.message, "error"));
                              }
                            }}><i className="fa-solid fa-boxes-stacked"></i> <span className="hidden sm:inline">Restock</span></button>
                            <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-xs" title="Edit Produk" onClick={() => {
                              setAdminFormType('products');
                              setAdminFormItem(p);
                              setTempWholesale(p.wholesale || []);
                              setTempVariants(p.variants || []);
                              setAdminModalOpen(true);
                            }}><i className="fa-solid fa-pen"></i></button>
                            <button className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 text-xs" title="Duplikat Produk" onClick={async () => {
                              showToast('Menduplikat produk...', 'loading');
                              try {
                                const newId = Date.now();
                                const duplicate = { ...p, id: newId, name: p.name + ' (Copy)', sku: (p.sku || '') + '-COPY-' + newId, stock: p.stock || 0 };
                                const newProducts = [duplicate, ...appData.products];
                                setAppData(prev => ({ ...prev, products: newProducts }));
                                await db.collection('freshmart').doc('cms_data').collection('products').doc(String(newId)).set(duplicate);
                                await db.collection('freshmart').doc('cms_data').update({ lastUpdate: firebase.firestore.FieldValue.increment(1) });
                                localStorage.setItem('freshmart_products', JSON.stringify(newProducts));
                                showToast('Produk berhasil diduplikat!', 'success');
                              } catch(e) { showToast('Gagal duplikat: ' + e.message, 'error'); }
                            }}><i className="fa-solid fa-copy"></i></button>
                            <button className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 text-xs" title="Hapus Produk" onClick={() => handleAdminDelete('products', p)}><i className="fa-solid fa-trash-can"></i></button>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Admin CRUD Modal */}
      {adminModalOpen && adminFormItem && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-3">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-md max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            <h3 className="font-black text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider">{adminFormItem.id ? 'Edit Item' : 'Tambah Item'}</h3>
            <form onSubmit={handleAdminFormSubmit} className="space-y-4">
              
              {adminFormType === 'products' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="lg:col-span-2">
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Produk</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Barcode / SKU</label>
                    <input className="admin-input" value={adminFormItem.sku || ''} onChange={e => setAdminFormItem({ ...adminFormItem, sku: e.target.value })} placeholder="Kosongkan untuk auto" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Harga Jual Promo (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.price || 0} onChange={e => setAdminFormItem({ ...adminFormItem, price: parseFloat(e.target.value) || 0 })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Harga Coret / Normal (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.priceNormal || 0} onChange={e => setAdminFormItem({ ...adminFormItem, priceNormal: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Harga Modal / HPP (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.hpp || 0} onChange={e => setAdminFormItem({ ...adminFormItem, hpp: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Poin Member</label>
                    <input className="admin-input" type="number" value={adminFormItem.poin || 0} onChange={e => setAdminFormItem({ ...adminFormItem, poin: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Stok Awal</label>
                    <input className="admin-input" type="number" value={adminFormItem.stock || 0} onChange={e => setAdminFormItem({ ...adminFormItem, stock: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Satuan Dasar</label>
                    <input className="admin-input" value={adminFormItem.unit || 'pcs'} onChange={e => setAdminFormItem({ ...adminFormItem, unit: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Estimasi Pre-Order</label>
                    <input className="admin-input" value={adminFormItem.poTime || ''} onChange={e => setAdminFormItem({ ...adminFormItem, poTime: e.target.value })} placeholder="Cth: 3 Hari (Kosongkan jika ready)" />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Link Video YouTube</label>
                    <input className="admin-input" value={adminFormItem.video || ''} onChange={e => setAdminFormItem({ ...adminFormItem, video: e.target.value })} placeholder="Cth: https://youtube.com/watch?v=..." />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">URL Gambar</label>
                    <div className="flex gap-2">
                      <input className="admin-input flex-1" value={adminFormItem.img || ''} onChange={e => setAdminFormItem({ ...adminFormItem, img: e.target.value })} required />
                      <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminImgUpload(e, 'img')} />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Kategori</label>
                    <select className="admin-input" value={adminFormItem.category || ''} onChange={e => setAdminFormItem({ ...adminFormItem, category: e.target.value })}>
                      <option value="">Pilih Kategori</option>
                      {appData.categories.map((c, i) => (
                        <option key={i} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Merek / Brand</label>
                    <select className="admin-input" value={adminFormItem.brand || ''} onChange={e => setAdminFormItem({ ...adminFormItem, brand: e.target.value })}>
                      <option value="">Tanpa Merek</option>
                      {appData.brands.map((b, i) => (
                        <option key={i} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Label / Tag</label>
                    <input className="admin-input" value={adminFormItem.tag || ''} onChange={e => setAdminFormItem({ ...adminFormItem, tag: e.target.value })} placeholder="Cth: Best Seller, Promo" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Status</label>
                    <select className="admin-input" value={adminFormItem.isActive !== false && adminFormItem.isActive !== 'false' ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, isActive: e.target.value === 'true' })}>
                      <option value="true">Tersedia</option>
                      <option value="false">Habis / Nonaktif</option>
                    </select>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Deskripsi Lengkap</label>
                    <textarea className="admin-input resize-none" value={adminFormItem.desc || ''} onChange={e => setAdminFormItem({ ...adminFormItem, desc: e.target.value })} rows="3"></textarea>
                  </div>

                  {/* Wholesale Pricing Builder */}
                  <div className="lg:col-span-2 border-t pt-4 mt-2">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[10px] font-black uppercase text-slate-500">Harga Grosir (Wholesale)</label>
                      <button type="button" onClick={() => setTempWholesale(prev => [...prev, { minQty: 12, price: 0 }])} className="text-xs text-emerald-500 font-bold"><i className="fa-solid fa-plus mr-1"></i> Tambah</button>
                    </div>
                    <div className="space-y-2">
                      {tempWholesale.map((w, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input type="number" placeholder="Min Qty" value={w.minQty} onChange={e => {
                            const updated = [...tempWholesale];
                            updated[idx].minQty = parseFloat(e.target.value) || 0;
                            setTempWholesale(updated);
                          }} className="admin-input text-xs w-24 text-center" />
                          <span className="text-xs text-slate-400">Harga Satuan</span>
                          <input type="number" placeholder="Harga Rp" value={w.price} onChange={e => {
                            const updated = [...tempWholesale];
                            updated[idx].price = parseFloat(e.target.value) || 0;
                            setTempWholesale(updated);
                          }} className="admin-input text-xs flex-1 text-center" />
                          <button type="button" onClick={() => setTempWholesale(prev => prev.filter((_, i) => i !== idx))} className="text-rose-500"><i className="fa-solid fa-trash"></i></button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Variants Builder */}
                  <div className="lg:col-span-2 border-t pt-4 mt-2">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[10px] font-black uppercase text-slate-500">Varian Produk</label>
                      <button type="button" onClick={() => setTempVariants(prev => [...prev, { name: '', price: 0, hpp: 0, stock: 10, img: '', colorCode: '', sku: '', poin: 0, isActive: true }])} className="text-xs text-emerald-500 font-bold"><i className="fa-solid fa-plus mr-1"></i> Tambah</button>
                    </div>
                    <div className="space-y-4">
                      {tempVariants.map((v, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 border rounded-2xl relative space-y-3">
                          <button type="button" onClick={() => setTempVariants(prev => prev.filter((_, i) => i !== idx))} className="absolute right-3 top-3 text-rose-500 text-sm"><i className="fa-solid fa-trash"></i></button>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="col-span-2">
                              <label className="block font-black text-slate-500 mb-1">Nama Varian</label>
                              <input placeholder="Cth: Hijau Tosca" value={v.name || ''} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].name = e.target.value;
                                setTempVariants(updated);
                              }} className="admin-input" required />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Barcode / SKU Varian</label>
                              <input placeholder="Scan / Kode Barcode Varian" value={v.sku || ''} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].sku = e.target.value;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Harga Jual</label>
                              <input type="number" placeholder="0" value={v.price || 0} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].price = parseFloat(e.target.value) || 0;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Harga Coret</label>
                              <input type="number" placeholder="0" value={v.priceNormal || 0} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].priceNormal = parseFloat(e.target.value) || 0;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Harga Modal (HPP)</label>
                              <input type="number" placeholder="0" value={v.hpp || 0} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].hpp = parseFloat(e.target.value) || 0;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Stok Varian</label>
                              <input type="number" placeholder="0" value={v.stock || 0} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].stock = parseFloat(e.target.value) || 0;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Kode Warna HEX</label>
                              <div className="flex gap-2">
                                <input type="color" value={v.colorCode || '#ffffff'} onChange={e => {
                                  const updated = [...tempVariants];
                                  updated[idx].colorCode = e.target.value;
                                  setTempVariants(updated);
                                }} className="w-8 h-8 rounded border p-0.5 cursor-pointer" />
                                <input placeholder="#ffffff" value={v.colorCode || ''} onChange={e => {
                                  const updated = [...tempVariants];
                                  updated[idx].colorCode = e.target.value;
                                  setTempVariants(updated);
                                }} className="admin-input flex-1 !py-1 text-center" />
                              </div>
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Poin Member</label>
                              <input type="number" placeholder="0" value={v.poin || 0} onChange={e => {
                                const updated = [...tempVariants];
                                updated[idx].poin = parseFloat(e.target.value) || 0;
                                setTempVariants(updated);
                              }} className="admin-input" />
                            </div>
                            <div className="col-span-2">
                              <label className="block font-black text-slate-500 mb-1">URL Gambar Varian</label>
                              <div className="flex gap-2">
                                <input placeholder="Gambar URL" value={v.img || ''} onChange={e => {
                                  const updated = [...tempVariants];
                                  updated[idx].img = e.target.value;
                                  setTempVariants(updated);
                                }} className="admin-input flex-1" />
                                <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                                  <i className="fa-solid fa-cloud-arrow-up"></i>
                                  <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                      const compressed = await compressImageForUpload(file, 1200, 0.80).catch(() => file);
                                      const reader = new FileReader();
                                      reader.readAsDataURL(compressed);
                                      reader.onload = async () => {
                                        const base64Data = reader.result.split(',')[1];
                                        const payload = { name: 'VAR_IMG_' + Date.now(), mimeType: file.type, data: base64Data, token: GAS_SECRET_TOKEN };
                                        const res = await fetch(GAS_UPLOAD_URL, { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
                                        const rData = await res.json().catch(() => null);
                                        if (rData?.status === 'success') {
                                          const updated = [...tempVariants];
                                          updated[idx].img = fixD(rData.url);
                                          setTempVariants(updated);
                                          showToast('Gambar varian terupload!');
                                        }
                                      };
                                    }
                                  }} />
                                </label>
                              </div>
                            </div>
                            <div>
                              <label className="block font-black text-slate-500 mb-1">Status Varian</label>
                              <button type="button" onClick={() => {
                                const updated = [...tempVariants];
                                updated[idx].isActive = v.isActive === false ? true : false;
                                setTempVariants(updated);
                              }} className={`w-full py-2 px-3 rounded-xl font-black text-[10px] text-center border ${v.isActive !== false ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-slate-100 text-rose-500 border-rose-200 dark:bg-slate-800'}`}>
                                {v.isActive !== false ? 'Tersedia' : 'Habis'}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Category Form */}
              {adminFormType === 'categories' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Kategori</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">URL Ikon / Gambar</label>
                    <div className="flex gap-2">
                      <input className="admin-input flex-1" value={adminFormItem.img || ''} onChange={e => setAdminFormItem({ ...adminFormItem, img: e.target.value })} required />
                      <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminImgUpload(e, 'img')} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Brands Form */}
              {adminFormType === 'brands' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Merek</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">URL Logo Merek</label>
                    <div className="flex gap-2">
                      <input className="admin-input flex-1" value={adminFormItem.img || ''} onChange={e => setAdminFormItem({ ...adminFormItem, img: e.target.value })} />
                      <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminImgUpload(e, 'img')} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Vouchers Form */}
              {adminFormType === 'vouchers' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Kode Voucher</label>
                    <input className="admin-input" value={adminFormItem.code || ''} onChange={e => setAdminFormItem({ ...adminFormItem, code: e.target.value.toUpperCase() })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Jenis Diskon</label>
                    <select className="admin-input" value={adminFormItem.type || 'percent'} onChange={e => setAdminFormItem({ ...adminFormItem, type: e.target.value })}>
                      <option value="percent">Potongan Persen (%)</option>
                      <option value="flat">Potongan Rupiah (Rp)</option>
                      <option value="shipping_free">Gratis Ongkir (100%)</option>
                      <option value="shipping_flat">Potongan Ongkir (Rp)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nilai Potongan</label>
                    <input className="admin-input" type="number" value={adminFormItem.value || 0} onChange={e => setAdminFormItem({ ...adminFormItem, value: parseFloat(e.target.value) || 0 })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Syarat Minimal Belanja (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.minPurchase || 0} onChange={e => setAdminFormItem({ ...adminFormItem, minPurchase: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Maksimal Nominal Potongan (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.maxDiscount || 0} onChange={e => setAdminFormItem({ ...adminFormItem, maxDiscount: parseFloat(e.target.value) || 0 })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Target Produk Spesifik</label>
                    <select className="admin-input" value={adminFormItem.targetProduct || ''} onChange={e => setAdminFormItem({ ...adminFormItem, targetProduct: e.target.value })}>
                      <option value="">-- Semua Produk --</option>
                      {appData.products.map((p, i) => (
                        <option key={i} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Tampilkan di Beranda?</label>
                    <select className="admin-input" value={adminFormItem.isShow !== false && adminFormItem.isShow !== 'false' ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, isShow: e.target.value === 'true' })}>
                      <option value="true">Ya, Tampilkan Promo</option>
                      <option value="false">Sembunyikan</option>
                    </select>
                  </div>
                </>
              )}

              {/* Banks Form */}
              {adminFormType === 'banks' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Bank</label>
                    <input className="admin-input" value={adminFormItem.bankName || ''} onChange={e => setAdminFormItem({ ...adminFormItem, bankName: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">No. Rekening</label>
                    <input className="admin-input" value={adminFormItem.bankAccount || ''} onChange={e => setAdminFormItem({ ...adminFormItem, bankAccount: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Atas Nama</label>
                    <input className="admin-input" value={adminFormItem.bankOwner || ''} onChange={e => setAdminFormItem({ ...adminFormItem, bankOwner: e.target.value })} required />
                  </div>
                </>
              )}

              {/* Banners Form */}
              {adminFormType === 'banners' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Judul Banner</label>
                    <input className="admin-input" value={adminFormItem.title || ''} onChange={e => setAdminFormItem({ ...adminFormItem, title: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Deskripsi Pendek</label>
                    <textarea className="admin-input resize-none" value={adminFormItem.desc || ''} onChange={e => setAdminFormItem({ ...adminFormItem, desc: e.target.value })} rows="2"></textarea>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">URL Gambar</label>
                    <div className="flex gap-2">
                      <input className="admin-input flex-1" value={adminFormItem.img || ''} onChange={e => setAdminFormItem({ ...adminFormItem, img: e.target.value })} required />
                      <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminImgUpload(e, 'img')} />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Link Tujuan</label>
                    <input className="admin-input" value={adminFormItem.link || ''} onChange={e => setAdminFormItem({ ...adminFormItem, link: e.target.value })} placeholder="Cth: https://wa.me/62... atau link produk" />
                  </div>
                </>
              )}

              {/* Customers Form */}
              {adminFormType === 'customers' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Lengkap</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">No. WhatsApp Aktif</label>
                    <input className="admin-input" value={adminFormItem.phone || ''} onChange={e => setAdminFormItem({ ...adminFormItem, phone: e.target.value })} placeholder="Cth: 081234567890" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Poin Member</label>
                    <input className="admin-input" type="number" value={adminFormItem.points || 0} onChange={e => setAdminFormItem({ ...adminFormItem, points: parseFloat(e.target.value) || 0 })} />
                  </div>
                </>
              )}

              {/* Rewards Form */}
              {adminFormType === 'rewards' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Hadiah</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">URL Gambar Hadiah</label>
                    <div className="flex gap-2">
                      <input className="admin-input flex-1" value={adminFormItem.img || ''} onChange={e => setAdminFormItem({ ...adminFormItem, img: e.target.value })} required />
                      <label className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 text-emerald-600 rounded-xl px-3 flex items-center justify-center cursor-pointer hover:bg-emerald-100 text-xs shrink-0 active:scale-95">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminImgUpload(e, 'img')} />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Poin yang Dibutuhkan</label>
                    <input className="admin-input" type="number" value={adminFormItem.pointsCost || 0} onChange={e => setAdminFormItem({ ...adminFormItem, pointsCost: parseFloat(e.target.value) || 0 })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Stok Hadiah Tersedia</label>
                    <input className="admin-input" type="number" value={adminFormItem.stock || 0} onChange={e => setAdminFormItem({ ...adminFormItem, stock: parseFloat(e.target.value) || 0 })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Status</label>
                    <select className="admin-input" value={adminFormItem.isActive !== false && adminFormItem.isActive !== 'false' ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, isActive: e.target.value === 'true' })}>
                      <option value="true">Aktif</option>
                      <option value="false">Nonaktif</option>
                    </select>
                  </div>
                </>
              )}

              {/* Settings Profile Form */}
              {adminFormType === 'settings_profile' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Nama Toko</label>
                    <input className="admin-input" value={adminFormItem.name || ''} onChange={e => setAdminFormItem({ ...adminFormItem, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Slogan Toko</label>
                    <input className="admin-input" value={adminFormItem.slogan || ''} onChange={e => setAdminFormItem({ ...adminFormItem, slogan: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">WhatsApp Admin</label>
                    <input className="admin-input" value={adminFormItem.wa || ''} onChange={e => setAdminFormItem({ ...adminFormItem, wa: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Alamat Fisik Toko</label>
                    <textarea className="admin-input resize-none" value={adminFormItem.address || ''} onChange={e => setAdminFormItem({ ...adminFormItem, address: e.target.value })} rows="2"></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Latitude Toko</label>
                      <input className="admin-input" value={adminFormItem.lat || ''} onChange={e => setAdminFormItem({ ...adminFormItem, lat: e.target.value })} placeholder="-6.12345" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Longitude Toko</label>
                      <input className="admin-input" value={adminFormItem.lng || ''} onChange={e => setAdminFormItem({ ...adminFormItem, lng: e.target.value })} placeholder="106.12345" />
                    </div>
                  </div>
                  <div>
                    <button type="button" className="w-full py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-600 hover:bg-slate-200" onClick={() => {
                      showToast("Mengakses GPS Toko...", "loading");
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((pos) => {
                          setAdminFormItem(prev => ({ ...prev, lat: pos.coords.latitude.toString(), lng: pos.coords.longitude.toString() }));
                          showToast("Koordinat Toko berhasil diambil!", "success");
                        }, () => showToast("Gagal mengambil posisi GPS toko.", "error"));
                      }
                    }}><i className="fa-solid fa-location-crosshairs text-emerald-500"></i> Ambil Koordinat GPS Toko Saat Ini</button>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Logo Toko (URL)</label>
                    <div className="flex gap-2">
                      <input className="admin-input" value={adminFormItem.logo || ''} onChange={e => setAdminFormItem({ ...adminFormItem, logo: e.target.value })} />
                      <label className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 rounded-xl flex items-center justify-center cursor-pointer font-bold text-xs shrink-0 active:scale-95">
                        Upload
                        <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            showToast("Mengupload...", "loading");
                            try {
                              const base64 = await new Promise((resolve) => {
                                const r = new FileReader();
                                r.readAsDataURL(file);
                                r.onload = () => resolve(r.result);
                              });
                              const uploadedUrl = await handleBase64ImageUpload(base64);
                              setAdminFormItem({ ...adminFormItem, logo: uploadedUrl });
                              showToast("Logo berhasil diupload!", "success");
                            } catch(err) {
                              showToast("Upload gagal: " + err.message, "error");
                            }
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Settings Catalog Form */}
              {adminFormType === 'settings_catalog' && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Manajemen Stok</label>
                      <select className="admin-input" value={adminFormItem.useStock === true || adminFormItem.useStock === 'true' ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, useStock: e.target.value === 'true' })}>
                        <option value="true">Aktifkan Stok</option>
                        <option value="false">Nonaktifkan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Fitur Kategori</label>
                      <select className="admin-input" value={adminFormItem.showCategories !== false ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, showCategories: e.target.value === 'true' })}>
                        <option value="true">Tampilkan</option>
                        <option value="false">Sembunyikan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Fitur Merek</label>
                      <select className="admin-input" value={adminFormItem.showBrands !== false ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, showBrands: e.target.value === 'true' })}>
                        <option value="true">Tampilkan</option>
                        <option value="false">Sembunyikan</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Gaya Kategori</label>
                      <select className="admin-input" value={adminFormItem.categoryStyle !== 'text' ? 'image' : 'text'} onChange={e => setAdminFormItem({ ...adminFormItem, categoryStyle: e.target.value })}>
                        <option value="image">Kartu Gambar</option>
                        <option value="text">Pill Text</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Gaya Merek</label>
                      <select className="admin-input" value={adminFormItem.brandStyle !== 'text' ? 'image' : 'text'} onChange={e => setAdminFormItem({ ...adminFormItem, brandStyle: e.target.value })}>
                        <option value="image">Kartu Gambar</option>
                        <option value="text">Pill Text</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Ikon Semua Kategori (URL)</label>
                    <div className="flex gap-2">
                      <input className="admin-input" value={adminFormItem.allProductsIcon || ''} onChange={e => setAdminFormItem({ ...adminFormItem, allProductsIcon: e.target.value })} />
                      <label className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 rounded-xl flex items-center justify-center cursor-pointer font-bold text-xs shrink-0 active:scale-95">
                        Upload
                        <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            showToast("Mengupload...", "loading");
                            try {
                              const base64 = await new Promise((resolve) => {
                                const r = new FileReader();
                                r.readAsDataURL(file);
                                r.onload = () => resolve(r.result);
                              });
                              const uploadedUrl = await handleBase64ImageUpload(base64);
                              setAdminFormItem({ ...adminFormItem, allProductsIcon: uploadedUrl });
                              showToast("Ikon diupload!", "success");
                            } catch(err) {
                              showToast("Upload gagal: " + err.message, "error");
                            }
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Ikon Semua Merek (URL)</label>
                    <div className="flex gap-2">
                      <input className="admin-input" value={adminFormItem.allBrandsIcon || ''} onChange={e => setAdminFormItem({ ...adminFormItem, allBrandsIcon: e.target.value })} />
                      <label className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 rounded-xl flex items-center justify-center cursor-pointer font-bold text-xs shrink-0 active:scale-95">
                        Upload
                        <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            showToast("Mengupload...", "loading");
                            try {
                              const base64 = await new Promise((resolve) => {
                                const r = new FileReader();
                                r.readAsDataURL(file);
                                r.onload = () => resolve(r.result);
                              });
                              const uploadedUrl = await handleBase64ImageUpload(base64);
                              setAdminFormItem({ ...adminFormItem, allBrandsIcon: uploadedUrl });
                              showToast("Ikon diupload!", "success");
                            } catch(err) {
                              showToast("Upload gagal: " + err.message, "error");
                            }
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Settings Shipping Form */}
              {adminFormType === 'settings_shipping' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Sistem Kurir</label>
                      <select className="admin-input" value={adminFormItem.isDeliveryEnabled !== false ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, isDeliveryEnabled: e.target.value === 'true' })}>
                        <option value="true">Aktif</option>
                        <option value="false">Nonaktif</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Ambil Sendiri</label>
                      <select className="admin-input" value={adminFormItem.isPickupEnabled !== false ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, isPickupEnabled: e.target.value === 'true' })}>
                        <option value="true">Aktif</option>
                        <option value="false">Nonaktif</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Tarif Kurir per km (Rp)</label>
                    <input className="admin-input" type="number" value={adminFormItem.costPerKm || 0} onChange={e => setAdminFormItem({ ...adminFormItem, costPerKm: parseFloat(e.target.value) || 0 })} />
                  </div>
                </>
              )}

              {/* Settings Payment Form */}
              {adminFormType === 'settings_payment' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">QRIS URL Gambar</label>
                    <div className="flex gap-2">
                      <input className="admin-input" value={adminFormItem.qrisUrl || ''} onChange={e => setAdminFormItem({ ...adminFormItem, qrisUrl: e.target.value })} />
                      <label className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 rounded-xl flex items-center justify-center cursor-pointer font-bold text-xs shrink-0 active:scale-95">
                        Upload
                        <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            showToast("Mengupload...", "loading");
                            try {
                              const base64 = await new Promise((resolve) => {
                                const r = new FileReader();
                                r.readAsDataURL(file);
                                r.onload = () => resolve(r.result);
                              });
                              const uploadedUrl = await handleBase64ImageUpload(base64);
                              setAdminFormItem({ ...adminFormItem, qrisUrl: uploadedUrl });
                              showToast("QRIS diupload!", "success");
                            } catch(err) {
                              showToast("Upload gagal: " + err.message, "error");
                            }
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Settings Config Form */}
              {adminFormType === 'settings_config' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Google Apps Script API URL</label>
                    <input className="admin-input" value={adminFormItem.gasUrl || ''} onChange={e => setAdminFormItem({ ...adminFormItem, gasUrl: e.target.value })} />
                    <p className="text-[9px] text-slate-400 font-bold mt-1.5">* Digunakan sebagai endpoint untuk sistem upload gambar.</p>
                  </div>
                </>
              )}

              {/* Settings Theme Form */}
              {adminFormType === 'settings_theme' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">Palet Warna Utama</label>
                    <select className="admin-input" value={adminFormItem.uiTheme || 'emerald'} onChange={e => {
                      const selectedTheme = e.target.value;
                      const palette = uiPalettes[selectedTheme] || uiPalettes['emerald'];
                      setAdminFormItem({ ...adminFormItem, uiTheme: selectedTheme, themeColor: palette[500] });
                    }}>
                      <option value="emerald">Emerald (Hijau Zamrud)</option>
                      <option value="teal">Teal (Hijau Tosca)</option>
                      <option value="cyan">Cyan (Biru Cyan)</option>
                      <option value="sky">Sky (Biru Langit)</option>
                      <option value="blue">Blue (Biru Utama)</option>
                      <option value="indigo">Indigo (Nila)</option>
                      <option value="violet">Violet (Ungu Muda)</option>
                      <option value="purple">Purple (Ungu)</option>
                      <option value="fuchsia">Fuchsia (Merah Muda Terang)</option>
                      <option value="pink">Pink (Merah Muda)</option>
                      <option value="rose">Rose (Mawar)</option>
                      <option value="red">Red (Merah)</option>
                      <option value="orange">Orange (Jingga)</option>
                      <option value="amber">Amber (Kuning Kunyit)</option>
                      <option value="yellow">Yellow (Kuning)</option>
                      <option value="lime">Lime (Hijau Lemon)</option>
                      <option value="green">Green (Hijau)</option>
                      <option value="slate">Slate (Abu-abu Modern)</option>
                      <option value="stone">Stone (Batu Industri)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">Kode Warna Custom (HEX)</label>
                    <div className="flex gap-2">
                      <input type="color" value={adminFormItem.themeColor || '#10b981'} onChange={e => setAdminFormItem({ ...adminFormItem, themeColor: e.target.value })} className="w-12 h-10 rounded-xl border border-slate-200 p-1 cursor-pointer" />
                      <input className="admin-input flex-1" value={adminFormItem.themeColor || '#10b981'} onChange={e => setAdminFormItem({ ...adminFormItem, themeColor: e.target.value })} placeholder="#10b981" />
                    </div>
                  </div>
                </>
              )}

              {/* Settings Operasional Form */}
              {adminFormType === 'settings_operasional' && (
                <>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Sistem Validasi Stok</label>
                    <select className="admin-input" value={adminFormItem.useStock ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, useStock: e.target.value === 'true' })}>
                      <option value="true">Ya, Batasi Sesuai Stok</option>
                      <option value="false">Tidak, Bebas Beli</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">PPN Pajak</label>
                      <select className="admin-input" value={adminFormItem.ppnEnabled ? 'true' : 'false'} onChange={e => setAdminFormItem({ ...adminFormItem, ppnEnabled: e.target.value === 'true' })}>
                        <option value="true">Aktif</option>
                        <option value="false">Nonaktif</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Tarif PPN (%)</label>
                      <input className="admin-input" type="number" value={adminFormItem.ppnRate || 11} onChange={e => setAdminFormItem({ ...adminFormItem, ppnRate: parseFloat(e.target.value) || 11 })} />
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-3 mt-6">
                <button className="flex-1 py-3 bg-slate-100 font-bold rounded-xl text-xs" type="button" onClick={() => setAdminModalOpen(false)}>Batal</button>
                <button className="flex-1 py-3 btn-primary text-xs shadow-glow rounded-xl" type="submit">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Order Detail Modal */}
      {adminOrderModalOpen && selectedAdminOrder && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-3" onClick={(e) => { if(e.target.id === 'admin-order-modal-bg') setAdminOrderModalOpen(false); }} id="admin-order-modal-bg">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-700 relative flex flex-col hide-scrollbar">
            <div className="sticky top-0 bg-white dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-20 rounded-t-[2rem]">
              <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2"><i className="fa-solid fa-file-invoice text-emerald-500"></i> Detail Pesanan</h3>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-rose-500 transition-all" onClick={() => setAdminOrderModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-8 space-y-4 flex-1 bg-slate-50 dark:bg-slate-900 overflow-y-auto">
              <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i className="fa-solid fa-crosshairs text-emerald-500"></i> Status</p>
                  <div className="relative w-full sm:w-40 mt-1">
                    <select value={selectedAdminOrder.status} onChange={async (e) => {
                      const nextStatus = e.target.value;
                      showToast("Mengubah status...", "loading");
                      try {
                        await db.collection("freshmart_orders").doc(selectedAdminOrder.orderId).update({ status: nextStatus });
                        setSelectedAdminOrder(prev => ({ ...prev, status: nextStatus }));
                        showToast("Status diperbarui!", "success");
                        loadAdminTabList(activeAdminTab);
                      } catch(err) {
                        showToast("Gagal update status: " + err.message, "error");
                      }
                    }} className="w-full text-sm font-black border px-4 py-2.5 rounded-xl appearance-none cursor-pointer focus:outline-none bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700">
                      <option value="Baru">Baru (Pending)</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Dibatalkan">Dibatalkan</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-slate-400"></i>
                  </div>
                </div>
                <div className="text-left sm:text-right flex flex-col justify-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                  <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white break-all tracking-wide">#{selectedAdminOrder.orderId}</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1.5">{selectedAdminOrder.dateString ? new Date(selectedAdminOrder.dateString).toLocaleString('id-ID') : ''}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
                <div className="flex flex-col gap-4">
                  {/* Data Pemesan */}
                  <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white text-sm border-b dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i className="fa-solid fa-user"></i></div> Data Pemesan</h4>
                    <div className="space-y-4 text-xs font-bold text-slate-600 dark:text-slate-300">
                      <div className="flex justify-between items-center"><span className="text-slate-500 font-bold">Nama</span><span className="font-black text-slate-900 dark:text-white text-base">{selectedAdminOrder.customer?.name || '-'}</span></div>
                      {selectedAdminOrder.customer?.wa && (
                        <div className="flex justify-between items-center"><span className="text-slate-500 font-bold flex items-center gap-1.5"><i className="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href={`https://wa.me/${selectedAdminOrder.customer.wa}`} target="_blank" rel="noopener noreferrer" className="font-black text-green-600 dark:text-green-400 hover:underline">+{selectedAdminOrder.customer.wa}</a></div>
                      )}
                      {selectedAdminOrder.customer?.wa && (
                        <button type="button" onClick={() => {
                          const phone = normalizeWA(selectedAdminOrder.customer.wa);
                          if (!phone || phone.length < 10) return showToast("Nomor WA tidak valid!", "warning");
                          showToast('Menyimpan...', 'loading');
                          db.collection("freshmart").doc("cms_data").collection("customers").doc(phone).get().then(doc => {
                            if (doc.exists) {
                              doc.ref.set({ name: selectedAdminOrder.customer.name || doc.data().name }, { merge: true }).then(() => {
                                showToast("Nama pelanggan diperbarui!", "success");
                                loadAdminTabList(activeAdminTab);
                              });
                            } else {
                              doc.ref.set({ id: parseInt(phone, 10), name: selectedAdminOrder.customer.name || '-', phone: phone, points: 0 }).then(() => {
                                showToast("✅ Pelanggan baru disimpan!", "success");
                                loadAdminTabList(activeAdminTab);
                              });
                            }
                          });
                        }} className="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-100 transition-all active:scale-95">
                          <i className="fa-solid fa-address-book"></i> Simpan ke Pelanggan
                        </button>
                      )}
                      <div className="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span className="text-slate-500 font-bold flex items-center gap-2 mb-2.5"><i className="fa-solid fa-map-location-dot"></i> Alamat ({selectedAdminOrder.customer?.deliveryMethod === 'delivery' ? 'Kurir' : 'Ambil Sendiri'})</span>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold leading-relaxed shadow-inner text-sm">{selectedAdminOrder.customer?.address || '-'}</div>
                        {selectedAdminOrder.customer?.lat && selectedAdminOrder.customer?.deliveryMethod === 'delivery' && (
                          <a href={`https://www.google.com/maps?q=${selectedAdminOrder.customer.lat},${selectedAdminOrder.customer.lng}`} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-black text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100">
                            <i className="fa-solid fa-location-dot"></i> Buka Lokasi di Google Maps
                          </a>
                        )}
                      </div>
                      {selectedAdminOrder.customer?.note && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2">
                          <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1.5"><i className="fa-solid fa-note-sticky"></i> Catatan Pembeli</p>
                          <p className="text-sm text-amber-900 dark:text-amber-100 font-bold">{selectedAdminOrder.customer.note}</p>
                        </div>
                      )}
                      {selectedAdminOrder.buktiPayment && (
                        <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2">
                          <p className="text-[10px] font-black text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i className="fa-solid fa-image"></i> Bukti Pembayaran</p>
                          <a href={selectedAdminOrder.buktiPayment} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800">
                            <img src={selectedAdminOrder.buktiPayment} alt="Bukti Pembayaran" className="w-full max-h-48 object-cover" />
                            <div className="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-black text-violet-600 dark:text-violet-400"><i className="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Rincian Item */}
                  <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white text-sm border-b dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center border border-emerald-100 dark:border-emerald-800"><i className="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                    <div className="space-y-3">
                      {selectedAdminOrder.items.map((t, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i className="fa-solid fa-tag text-sm"></i></div>
                            <div className="min-w-0">
                              <p className="font-black text-sm text-slate-900 dark:text-white truncate">
                                {t.name}
                                {t.variantName && <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-xl border border-slate-300 dark:border-slate-600 text-[9px] ml-1.5">{t.variantName}</span>}
                                {t.poTime && <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-xl text-[8px] font-bold border border-amber-200 dark:border-amber-800 uppercase ml-1.5 whitespace-nowrap">PO {t.poTime}</span>}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold mt-1">{parseFloat(t.qty)} {t.unit || 'pcs'} x {fCur(t.effectivePrice)}</p>
                            </div>
                          </div>
                          <div className="font-black text-sm text-slate-900 dark:text-white ml-3 shrink-0">{fCur(t.effectivePrice * parseFloat(t.qty))}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Klaim Hadiah */}
                  {selectedAdminOrder.claimedReward && (
                    <div className="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                      <h4 className="font-black text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div className="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i className="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                      <div className="space-y-3 text-xs font-bold">
                        <div className="flex justify-between items-center"><span className="text-slate-500">Hadiah</span><span className="font-black text-violet-700 dark:text-violet-400 text-sm">{selectedAdminOrder.claimedReward.name}</span></div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Poin Ditukar</span><span className="font-black text-slate-800 dark:text-white text-sm">{selectedAdminOrder.claimedReward.pointsCost} Poin</span></div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Status</span><span className={`font-black text-xs px-2 py-1 rounded-xl ${selectedAdminOrder.claimedReward.status === 'ready' ? 'bg-emerald-100 text-emerald-600' : selectedAdminOrder.claimedReward.status === 'waiting_stock' ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-600'}`}>{rewardStatusLabel(selectedAdminOrder.claimedReward)}</span></div>
                        {selectedAdminOrder.claimedReward.note && <div className="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"{selectedAdminOrder.claimedReward.note}"</div>}
                        <div className="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                          <button type="button" onClick={async () => {
                            showToast("Menyimpan...", "loading");
                            await db.collection("freshmart_orders").doc(selectedAdminOrder.orderId).update({ 'claimedReward.status': 'ready', 'claimedReward.note': '' });
                            setSelectedAdminOrder(prev => ({ ...prev, claimedReward: { ...prev.claimedReward, status: 'ready', note: '' } }));
                            showToast('Status klaim hadiah diperbarui!', 'success');
                            loadAdminTabList(activeAdminTab);
                          }} className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i className="fa-solid fa-check"></i> Stok Ada — Kirim Bersama</button>
                          <button type="button" onClick={async () => {
                            const note = window.prompt("Catatan untuk pelanggan:", "Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.");
                            if (note !== null) {
                              showToast("Menyimpan...", "loading");
                              await db.collection("freshmart_orders").doc(selectedAdminOrder.orderId).update({ 'claimedReward.status': 'waiting_stock', 'claimedReward.note': note });
                              setSelectedAdminOrder(prev => ({ ...prev, claimedReward: { ...prev.claimedReward, status: 'waiting_stock', note } }));
                              showToast('Status klaim hadiah diperbarui!', 'success');
                              loadAdminTabList(activeAdminTab);
                            }
                          }} className="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i className="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ringkasan Bayar */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl border border-slate-700/60 relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>
                    
                    <div className="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                      <h4 className="font-black text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i className="fa-solid fa-wallet text-emerald-400 text-sm"></i> Ringkasan Bayar</h4>
                      <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black tracking-widest border border-white/10 uppercase shadow-inner text-white">{selectedAdminOrder.payment?.method?.toUpperCase()}</span>
                    </div>
                    
                    <div className="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                      <div className="flex justify-between items-center"><span>Subtotal Produk</span><span className="font-bold text-white">{fCur(selectedAdminOrder.payment?.subtotal)}</span></div>
                      {selectedAdminOrder.customer?.deliveryMethod === 'delivery' && (
                        <div className="flex justify-between items-center"><span>Ongkos Kirim</span><span className="font-bold text-white">{fCur(selectedAdminOrder.payment?.shippingCost)}</span></div>
                      )}
                      {selectedAdminOrder.payment?.shippingDiscount > 0 && (
                        <div className="flex justify-between items-center text-emerald-400 bg-emerald-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span className="font-bold">-{fCur(selectedAdminOrder.payment.shippingDiscount)}</span></div>
                      )}
                      {selectedAdminOrder.payment?.productDiscount > 0 && (
                        <div className="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span className="font-bold">-{fCur(selectedAdminOrder.payment.productDiscount)}</span></div>
                      )}
                      {selectedAdminOrder.payment?.ppnAmount > 0 && (
                        <div className="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>PPN ({selectedAdminOrder.payment.ppnRate || 11}%)</span><span className="font-bold">+{fCur(selectedAdminOrder.payment.ppnAmount)}</span></div>
                      )}
                    </div>
                    
                    <div className="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                    
                    <div className="flex justify-between items-end relative z-10">
                      <span className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight drop-shadow-md">{fCur(selectedAdminOrder.payment?.grandTotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 lg:px-8 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-b-[2rem] flex flex-col gap-3 shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-4 gap-2 w-full">
                <button className="py-3 bg-emerald-50 text-emerald-600 border border-emerald-100 font-black rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-emerald-100 transition-all shadow-sm active:scale-95 dark:bg-emerald-900/20 dark:border-emerald-800" onClick={() => setReceiptPreviewOpen(true)}><i className="fa-solid fa-print"></i> Struk</button>
                <button className="py-3 bg-blue-50 text-blue-600 border border-blue-100 font-black rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-blue-100 transition-all shadow-sm active:scale-95 dark:bg-blue-900/20 dark:border-blue-800" onClick={() => { setDocPreviewType('invoice'); setDocPreviewOpen(true); }}><i className="fa-solid fa-file-invoice-dollar"></i> Invoice</button>
                <button className="py-3 bg-violet-50 text-violet-600 border border-violet-100 font-black rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-violet-100 transition-all shadow-sm active:scale-95 dark:bg-violet-900/20 dark:border-violet-800" onClick={() => { setDocPreviewType('proforma'); setDocPreviewOpen(true); }}><i className="fa-solid fa-file-lines"></i> Proforma</button>
                <button className="py-3 bg-amber-50 text-amber-600 border border-amber-100 font-black rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-amber-100 transition-all shadow-sm active:scale-95 dark:bg-amber-900/20 dark:border-amber-800" onClick={() => { setDocPreviewType('surat_jalan'); setDocPreviewOpen(true); }}><i className="fa-solid fa-truck-ramp-box"></i> Srt Jalan</button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:flex-1 py-3 bg-green-50 text-green-600 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 border border-green-100 dark:bg-green-900/20 dark:border-green-800 hover:bg-green-500 hover:text-white transition-all shadow-sm active:scale-95" onClick={() => konfirmasiKeWA(selectedAdminOrder.orderId)}><i className="fa-brands fa-whatsapp"></i> Konfirmasi ke WA</button>
                <button className="w-full sm:flex-1 py-3 bg-rose-50 text-rose-600 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 border border-rose-100 dark:bg-rose-900/20 dark:border-rose-800 hover:bg-rose-500 hover:text-white transition-all shadow-sm active:scale-95" onClick={() => {
                  showConfirm("Hapus Pesanan", "Yakin ingin hapus permanen?", async () => {
                    showToast("Menghapus...", "loading");
                    try {
                      await db.collection("freshmart_orders").doc(selectedAdminOrder.orderId).delete();
                      showToast("Terhapus!", "success");
                      setAdminOrderModalOpen(false);
                      loadAdminTabList(activeAdminTab);
                    } catch(e) {
                      showToast("Gagal hapus: " + e.message, "error");
                    }
                  });
                }}><i className="fa-solid fa-trash"></i> Hapus Pesanan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Preview Modal */}
      {receiptPreviewOpen && selectedAdminOrder && (
        <div className="fixed inset-0 z-[110] bg-slate-900/80 flex items-center justify-center p-3" onClick={(e) => { if(e.target.id === 'receipt-modal-bg') setReceiptPreviewOpen(false); }} id="receipt-modal-bg">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
            <div className="sticky top-0 bg-white dark:bg-slate-800 px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-20">
              <h3 className="font-black text-slate-900 dark:text-white text-sm">Preview Struk</h3>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-rose-500 transition-all" onClick={() => setReceiptPreviewOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            
            <div className="p-5 flex justify-center items-start bg-slate-200 dark:bg-slate-900 overflow-y-auto hide-scrollbar flex-1">
              <div id="receipt-paper-content" className="bg-white shadow-md p-4 font-mono text-[11px] font-bold text-black border border-slate-300 rounded w-[260px] leading-tight shrink-0 h-max" style={{ fontFamily: '"Courier New",Courier,monospace', minHeight: '300px', backgroundColor: '#fff', color: '#000' }}>
                <div className="text-center font-bold mb-[2px] text-[13px]">{appData.store?.name || 'Toko Putri'}</div>
                {appData.store?.wa && <div className="text-center mb-[4px]">WA: {appData.store.wa}</div>}
                <div className="border-b border-dashed border-black my-2"></div>
                <div style={{ whiteSpace: 'pre' }}>Order: #{selectedAdminOrder.orderId}</div>
                <div style={{ whiteSpace: 'pre' }}>Tgl  : {selectedAdminOrder.dateString ? new Date(selectedAdminOrder.dateString).toLocaleString('id-ID') : ''}</div>
                <div style={{ whiteSpace: 'pre' }}>Plg  : {(selectedAdminOrder.customer?.name || 'Guest').substring(0, 20)}</div>
                <div style={{ whiteSpace: 'pre' }}>Tipe : {selectedAdminOrder.customer?.deliveryMethod === 'delivery' ? 'Kurir' : 'Toko'}</div>
                <div className="border-b border-dashed border-black my-2"></div>
                {selectedAdminOrder.customer?.note && (
                  <>
                    <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>Cat: {selectedAdminOrder.customer.note}</div>
                    <div className="border-b border-dashed border-black my-2"></div>
                  </>
                )}
                
                {selectedAdminOrder.items.map((i, idx) => {
                  let vText = i.variantName ? ` (${i.variantName}${i.colorCode ? ' ' + i.colorCode : ''})` : '';
                  const nameStr = (i.name + vText + (i.poTime ? ' [PO]' : '')).substring(0, 32);
                  const qtyStr = `${parseFloat(i.qty)} ${i.unit || 'pcs'} x ${(i.effectivePrice || 0).toLocaleString('id-ID')}`;
                  const totalStr = (parseFloat(i.qty) * (i.effectivePrice || 0)).toLocaleString('id-ID');
                  const spaces = ' '.repeat(Math.max(1, 32 - qtyStr.length - totalStr.length));
                  return (
                    <div key={idx} className="mb-2">
                      <div style={{ whiteSpace: 'pre-wrap', fontWeight: 'bold', wordBreak: 'break-all' }}>{nameStr}</div>
                      <div style={{ whiteSpace: 'pre', fontSize: '11px' }}>{qtyStr}{spaces}{totalStr}</div>
                      {i.poTime && <div style={{ whiteSpace: 'pre', fontSize: '10px', fontStyle: 'italic', color: '#4b5563' }}>* Estimasi PO: {i.poTime}</div>}
                    </div>
                  );
                })}

                <div className="border-b border-dashed border-black my-2"></div>
                <div className="flex justify-between" style={{ whiteSpace: 'pre' }}>
                  <span>Subtotal</span>
                  <span>{(selectedAdminOrder.payment?.subtotal || 0).toLocaleString('id-ID')}</span>
                </div>
                {selectedAdminOrder.customer?.deliveryMethod === 'delivery' && (
                  <div className="flex justify-between" style={{ whiteSpace: 'pre' }}>
                    <span>Ongkir</span>
                    <span>{(selectedAdminOrder.payment?.shippingCost || 0).toLocaleString('id-ID')}</span>
                  </div>
                )}
                {selectedAdminOrder.payment?.shippingDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600" style={{ whiteSpace: 'pre' }}>
                    <span>Pot.Ongkir</span>
                    <span>-{(selectedAdminOrder.payment.shippingDiscount).toLocaleString('id-ID')}</span>
                  </div>
                )}
                {selectedAdminOrder.payment?.productDiscount > 0 && (
                  <div className="flex justify-between text-rose-600" style={{ whiteSpace: 'pre' }}>
                    <span>Pot.Harga</span>
                    <span>-{(selectedAdminOrder.payment.productDiscount).toLocaleString('id-ID')}</span>
                  </div>
                )}
                {selectedAdminOrder.payment?.ppnAmount > 0 && (
                  <div className="flex justify-between" style={{ whiteSpace: 'pre' }}>
                    <span>PPN ({selectedAdminOrder.payment.ppnRate || 11}%)</span>
                    <span>{(selectedAdminOrder.payment.ppnAmount).toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="border-b border-dashed border-black my-2"></div>
                <div className="flex justify-between font-bold text-xs" style={{ whiteSpace: 'pre' }}>
                  <span>TOTAL</span>
                  <span>Rp {(selectedAdminOrder.payment?.grandTotal || 0).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between" style={{ whiteSpace: 'pre' }}>
                  <span>Bayar:</span>
                  <span className="uppercase">{selectedAdminOrder.payment?.method || 'CASH'}</span>
                </div>

                {(selectedAdminOrder.pointsEarned > 0 || (selectedAdminOrder.finalMemberPoints !== undefined && selectedAdminOrder.finalMemberPoints !== null)) && (
                  <>
                    <div className="border-b border-dashed border-black my-2"></div>
                    {selectedAdminOrder.pointsEarned > 0 && (
                      <div className="flex justify-between" style={{ whiteSpace: 'pre' }}>
                        <span>Poin Didapat:</span>
                        <span>+{selectedAdminOrder.pointsEarned}</span>
                      </div>
                    )}
                    {selectedAdminOrder.finalMemberPoints !== undefined && selectedAdminOrder.finalMemberPoints !== null && (
                      <div className="flex justify-between font-bold" style={{ whiteSpace: 'pre' }}>
                        <span>Saldo Poin:</span>
                        <span>{selectedAdminOrder.finalMemberPoints}</span>
                      </div>
                    )}
                    {selectedAdminOrder.claimedReward && (
                      <div style={{ whiteSpace: 'pre-wrap', fontWeight: 'bold', wordBreak: 'break-all', marginTop: '2px' }}>HADIAH: {selectedAdminOrder.claimedReward.name} ({selectedAdminOrder.claimedReward.status === 'ready' ? 'Kirim bersama pesanan' : 'Stok kosong-ditunda'})</div>
                    )}
                  </>
                )}

                {selectedAdminOrder.items.some(i => i.poTime) && (
                  <>
                    <div className="border-b border-dashed border-black my-2"></div>
                    <div className="text-center text-[9px] leading-tight italic text-slate-500 mb-1" style={{ whiteSpace: 'pre-wrap' }}>
                      * Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.
                    </div>
                  </>
                )}

                <div className="border-b border-dashed border-black my-2"></div>
                <div className="text-center my-2 text-[10px]">Terima Kasih</div>
                <div className="border-b border-dashed border-black my-2"></div>
                <div style={{ height: '15px' }}></div>
              </div>
            </div>
            
            <div className="p-5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-20">
              <button className="btn-primary w-full py-4 text-sm rounded-xl shadow-glow flex items-center justify-center font-bold" onClick={handlePrintReceipt}><i className="fa-solid fa-print mr-2"></i> Print Thermal</button>
            </div>
          </div>
        </div>
      )}

      {/* Document (Invoice/Surat Jalan) Preview Modal */}
      {docPreviewOpen && selectedAdminOrder && (
        <div className="fixed inset-0 z-[115] bg-slate-900/80 flex items-center justify-center p-2 sm:p-5" onClick={(e) => { if(e.target.id === 'doc-preview-modal-bg') setDocPreviewOpen(false); }} id="doc-preview-modal-bg">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-[2rem] w-full max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-100 transition-all duration-300 flex flex-col">
            <div className="sticky top-0 bg-white dark:bg-slate-800 px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-20 shadow-sm shrink-0">
              <div>
                <h3 className="font-black text-slate-900 dark:text-white text-base">
                  {docPreviewType === 'invoice' ? 'Preview Faktur Invoice' : docPreviewType === 'proforma' ? 'Preview Proforma Invoice' : 'Preview Surat Jalan'}
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Format Kertas Standar A4</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-rose-500 flex items-center justify-center transition-all shrink-0" onClick={() => setDocPreviewOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            
            <div className="p-3 sm:p-8 bg-slate-200 dark:bg-slate-900 overflow-auto flex-1 hide-scrollbar">
              <div className="relative w-full min-h-[1123px]">
                <div id="doc-paper-content" className="bg-white text-slate-900 shadow-xl p-8 sm:p-12 rounded-sm border border-slate-300 w-[794px] leading-relaxed flex flex-col absolute top-0 left-1/2 -translate-x-1/2 h-max" style={{ minHeight: '1123px', fontSize: '13px', transformOrigin: 'top center' }}>
                  
                  {/* Header */}
                  <div className="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
                    <div className="flex items-center gap-4">
                      {appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) ? (
                        <img src={appData.store.logo} className="w-16 h-16 object-contain" alt="Logo" />
                      ) : (
                        <div className="w-16 h-16 bg-emerald-500 text-white flex items-center justify-center rounded-xl"><i className="fa-solid fa-store text-3xl"></i></div>
                      )}
                      <div>
                        <h1 className="font-black text-2xl tracking-tight text-slate-900 uppercase">{appData.store?.name || 'Toko Putri'}</h1>
                        <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">{appData.store?.slogan || 'General Supplier'}</p>
                        <p className="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">{appData.store?.address || 'Alamat fisik toko belum diatur.'}</p>
                        <p className="text-xs font-medium text-slate-500 mt-0.5"><i className="fa-brands fa-whatsapp text-emerald-500"></i> {appData.store?.wa || '-'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h2 className={`font-black text-3xl tracking-widest uppercase ${docPreviewType === 'invoice' ? 'text-blue-600' : docPreviewType === 'proforma' ? 'text-violet-600' : 'text-amber-600'}`}>
                        {docPreviewType === 'invoice' ? 'INVOICE' : docPreviewType === 'proforma' ? 'PROFORMA INVOICE' : 'SURAT JALAN'}
                      </h2>
                      <p className="text-sm font-bold text-slate-600 mt-2 font-mono">#{selectedAdminOrder.orderId}</p>
                      <p className="text-xs font-semibold text-slate-500 mt-1">Tanggal: {selectedAdminOrder.dateString ? new Date(selectedAdminOrder.dateString).toLocaleDateString('id-ID', {day: '2-digit', month: '2-digit', year: 'numeric'}) : ''}</p>
                    </div>
                  </div>

                  {/* Customer & Info */}
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan / Dikirim Kepada:</h3>
                      <p className="font-black text-base text-slate-900 uppercase mb-1">{selectedAdminOrder.customer?.name || 'Guest'}</p>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed mb-3">{selectedAdminOrder.customer?.address || '-'}</p>
                      {selectedAdminOrder.customer?.note && (
                        <p className="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"><i className="fa-solid fa-note-sticky"></i> Catatan: {selectedAdminOrder.customer.note}</p>
                      )}
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                        <span className="text-sm font-black text-slate-800 uppercase">{selectedAdminOrder.customer?.deliveryMethod === 'delivery' ? 'Kurir Toko' : 'Ambil Sendiri'}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                        <span className="text-sm font-black text-slate-800 uppercase">{selectedAdminOrder.payment?.method || 'cash'}</span>
                      </div>
                      <div className="flex justify-between items-center pb-1">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                        <span className={`text-sm font-black uppercase ${selectedAdminOrder.status === 'Selesai' ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {selectedAdminOrder.status === 'Selesai' ? 'LUNAS' : 'BELUM LUNAS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Items Table */}
                  {(docPreviewType === 'invoice' || docPreviewType === 'proforma') ? (
                    <>
                      <table className="w-full text-left text-sm text-slate-900 border-collapse mb-6">
                        <thead>
                          <tr className="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                            <th className="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                            <th className="py-3 px-4 border-r border-slate-700">Deskripsi Produk & Varian</th>
                            <th className="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                            <th className="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Sat.</th>
                            <th className="py-3 px-4 rounded-tr-xl text-right w-32">Total</th>
                          </tr>
                        </thead>
                        <tbody className="border-b-2 border-slate-800 divide-y divide-slate-200">
                          {selectedAdminOrder.items.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="py-4 px-4 text-center font-mono text-slate-500">{idx+1}</td>
                              <td className="py-4 px-4 font-bold flex items-center gap-2">
                                <span>{item.name}</span>
                                {item.variantName && <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">{item.variantName}</span>}
                                {item.colorCode && <span className="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style={{ backgroundColor: item.colorCode }}></span>}
                                {item.poTime && <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO {item.poTime}</span>}
                              </td>
                              <td className="py-4 px-4 text-center font-black text-slate-700">{parseFloat(item.qty)} <span className="text-[10px] font-bold text-slate-400 uppercase">{item.unit || 'pcs'}</span></td>
                              <td className="py-4 px-4 text-right font-mono font-medium">{fCur(item.effectivePrice)}</td>
                              <td className="py-4 px-4 text-right font-mono font-black">{fCur(item.effectivePrice * parseFloat(item.qty))}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="flex justify-end mb-10">
                        <div className="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                          <div className="flex justify-between px-4"><span>Subtotal Produk</span><span className="font-mono">{fCur(selectedAdminOrder.payment?.subtotal)}</span></div>
                          {selectedAdminOrder.payment?.shippingCost > 0 && <div className="flex justify-between px-4"><span>Ongkos Kirim</span><span className="font-mono">{fCur(selectedAdminOrder.payment.shippingCost)}</span></div>}
                          {selectedAdminOrder.payment?.shippingDiscount > 0 && <div className="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span className="font-mono">-{fCur(selectedAdminOrder.payment.shippingDiscount)}</span></div>}
                          {selectedAdminOrder.payment?.productDiscount > 0 && <div className="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span className="font-mono">-{fCur(selectedAdminOrder.payment.productDiscount)}</span></div>}
                          {selectedAdminOrder.payment?.ppnAmount > 0 && <div className="flex justify-between px-4 text-amber-600"><span>PPN ({selectedAdminOrder.payment.ppnRate || 11}%)</span><span className="font-mono">+{fCur(selectedAdminOrder.payment.ppnAmount)}</span></div>}
                          
                          <div className="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                            <span className="font-black text-base uppercase tracking-widest">Grand Total</span>
                            <span className="font-mono text-xl text-emerald-400 font-black tracking-tight">{fCur(selectedAdminOrder.payment?.grandTotal)}</span>
                          </div>
                          
                          {selectedAdminOrder.payment?.method === 'tempo' && (
                            <>
                              <div className="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span className="font-mono">{fCur(selectedAdminOrder.payment?.tempoDp || 0)}</span></div>
                              <div className="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                                <span className="font-black text-base uppercase tracking-widest">Sisa Tagihan</span>
                                <span className="font-mono text-xl font-black tracking-tight">{fCur(selectedAdminOrder.payment?.tempoBalance || 0)}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <table className="w-full text-left text-sm text-slate-900 border-collapse mb-10">
                      <thead>
                        <tr className="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                          <th className="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                          <th className="py-3 px-4 border-r border-slate-700">Nama & Spesifikasi Barang</th>
                          <th className="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                          <th className="py-3 px-4 text-center w-24 border-r border-slate-700">Satuan</th>
                          <th className="py-3 px-4 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
                        </tr>
                      </thead>
                      <tbody className="border-b-2 border-slate-800 divide-y divide-slate-200">
                        {selectedAdminOrder.items.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-4 text-center font-mono text-slate-500">{idx+1}</td>
                            <td className="py-4 px-4 font-bold uppercase flex items-center gap-2">
                              <span>{item.name}</span>
                              {item.variantName && <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">{item.variantName}</span>}
                              {item.colorCode && <span className="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style={{ backgroundColor: item.colorCode }}></span>}
                              {item.poTime && <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO {item.poTime}</span>}
                            </td>
                            <td className="py-4 px-4 text-center font-black text-lg text-slate-800">{parseFloat(item.qty)}</td>
                            <td className="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">{item.unit || 'pcs'}</td>
                            <td className="py-4 px-4 text-center"><div className="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Poin & Hadiah Info */}
                  {(selectedAdminOrder.pointsEarned > 0 || (selectedAdminOrder.finalMemberPoints !== undefined && selectedAdminOrder.finalMemberPoints !== null)) && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i className="fa-solid fa-star"></i></div>
                      {selectedAdminOrder.pointsEarned > 0 && (
                        <div>
                          <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Poin Didapat</p>
                          <p className="font-black text-lg text-amber-700">+{selectedAdminOrder.pointsEarned}</p>
                        </div>
                      )}
                      {selectedAdminOrder.finalMemberPoints !== undefined && selectedAdminOrder.finalMemberPoints !== null && (
                        <div>
                          <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p>
                          <p className="font-black text-lg text-amber-700">{selectedAdminOrder.finalMemberPoints}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedAdminOrder.claimedReward && (
                    <div className="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i className="fa-solid fa-gift"></i></div>
                        <div>
                          <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest">Klaim Hadiah Member ({selectedAdminOrder.claimedReward.pointsCost} Poin)</p>
                          <p className="font-black text-base text-violet-800 uppercase">{selectedAdminOrder.claimedReward.name}</p>
                          {selectedAdminOrder.claimedReward.note && <p className="text-xs italic text-violet-600 mt-1">"{selectedAdminOrder.claimedReward.note}"</p>}
                        </div>
                      </div>
                      <span className="text-[10px] font-black px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">
                        {selectedAdminOrder.claimedReward.status === 'ready' ? 'SERTAKAN BERSAMA PENGIRIMAN INI' : selectedAdminOrder.claimedReward.status === 'waiting_stock' ? 'STOK KOSONG — KIRIM SUSULAN' : 'MENUNGGU KONFIRMASI'}
                      </span>
                    </div>
                  )}

                  {/* T&C Tempo */}
                  {selectedAdminOrder.payment?.method === 'tempo' && (
                    <div className="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
                      <h4 className="font-black text-pink-700 text-xs uppercase tracking-widest mb-1"><i className="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
                      <p className="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: {selectedAdminOrder.payment.tempoDueDate ? new Date(selectedAdminOrder.payment.tempoDueDate).toLocaleDateString('id-ID') : '-'}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
                    </div>
                  )}

                  {/* Pre-Order Info */}
                  {selectedAdminOrder.items.some(i => i.poTime) && (
                    <div className="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
                      <i className="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                      <div>
                        <h4 className="font-black text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                        <p className="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</p>
                      </div>
                    </div>
                  )}

                  {/* Signatures */}
                  <div className="grid grid-cols-3 gap-8 text-center text-sm mt-auto pt-8">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima / Klien</span>
                      <div className="w-48 border-b-2 border-slate-800 mb-2"></div>
                      <span className="font-black text-slate-900">{selectedAdminOrder.customer?.name || 'Nama Terang & TTD'}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
                      <div className="w-48 border-b-2 border-slate-800 mb-2"></div>
                      <span className="font-black text-slate-900">Nama Terang & TTD</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
                      <div className="w-48 border-b-2 border-slate-800 mb-2"></div>
                      <span className="font-black text-slate-900 uppercase">{appData.store?.name || 'Toko'}</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-20 grid grid-cols-3 gap-3 shrink-0">
              <button className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-[10px] sm:text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-500/20" onClick={() => exportDocFile('image')}><i className="fa-solid fa-image text-sm sm:text-base"></i> <span className="hidden sm:inline">Simpan Gambar</span></button>
              <button className="py-3 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl text-[10px] sm:text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-rose-500/20" onClick={() => exportDocFile('pdf')}><i className="fa-solid fa-file-pdf text-sm sm:text-base"></i> <span className="hidden sm:inline">Cetak PDF</span></button>
              <button className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-[10px] sm:text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-emerald-500/20" onClick={handlePrintDocA4}><i className="fa-solid fa-print text-sm sm:text-base"></i> <span className="hidden sm:inline">Print Langsung</span></button>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5" onClick={(e) => { if (e.target.id === 'prod-modal-bg') setSelectedProduct(null); }} id="prod-modal-bg">
          <div className="bg-white dark:bg-[#0f172a] w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl border-t sm:border border-slate-200 dark:border-slate-800 relative hide-scrollbar">
            <div className="absolute top-3 right-3 z-20 flex gap-1.5">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all" title="Bagikan Produk" onClick={() => {
                const pUrl = window.location.href;
                const pName = selectedProduct.name;
                const pPrice = selectedProduct.variants?.length ? `Rp ${Math.min(...selectedProduct.variants.map(v => v.price || 0)).toLocaleString('id-ID')}` : fCur(selectedProduct.price);
                const text = `Lihat produk *${pName}* (${pPrice}) di ${appData.store?.name || 'Toko Kami'}:\n${pUrl}`;
                
                if (navigator.share) {
                  navigator.share({ title: pName, text, url: pUrl }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(`${text}`);
                  showToast("Link & info produk disalin ke clipboard!", "success");
                }
              }}><i className="fa-solid fa-share-nodes text-sm"></i></button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all" onClick={() => setSelectedProduct(null)}><i className="fa-solid fa-xmark text-sm"></i></button>
            </div>
            
            {/* Image & Video Carousel */}
            <div className="w-full aspect-square bg-white flex items-center justify-center relative overflow-hidden shrink-0 border-b dark:border-slate-800">
              {(() => {
                const ytId = getYouTubeId(selectedProduct.video);
                if (ytId && activeSlideIdx === 1) {
                  return (
                    <div className="absolute inset-0 bg-black flex items-center justify-center w-full h-full">
                      <iframe src={`https://www.youtube.com/embed/${ytId}?autoplay=1`} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  );
                }
                const activeImg = selectedVariantIdx !== null && selectedProduct.variants?.[selectedVariantIdx]?.img ? selectedProduct.variants[selectedVariantIdx].img : selectedProduct.img;
                return (
                  <img src={activeImg} alt={selectedProduct.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                );
              })()}
              
              {/* Media selection controls */}
              {getYouTubeId(selectedProduct.video) && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <button className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white ${activeSlideIdx === 0 ? 'bg-[var(--color-primary)]' : 'opacity-60'}`} onClick={() => setActiveSlideIdx(0)}>Gambar</button>
                  <button className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white ${activeSlideIdx === 1 ? 'bg-red-600' : 'opacity-60'}`} onClick={() => setActiveSlideIdx(1)}><i className="fa-brands fa-youtube mr-1"></i> Video</button>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-7">
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {selectedProduct.poTime && <span className="bg-amber-100 text-amber-600 dark:bg-amber-900/40 px-2 py-0.5 rounded-full text-[8px] font-black uppercase">PO {selectedProduct.poTime}</span>}
                {parseFloat(selectedProduct.poin) > 0 && <span className="bg-violet-100 text-violet-700 dark:bg-violet-900/40 px-2 py-0.5 rounded-full text-[8px] font-black uppercase"><i className="fa-solid fa-star"></i> +{selectedProduct.poin} Poin</span>}
                {selectedProduct.tag && <span className="bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full text-[8px] font-black uppercase">{selectedProduct.tag}</span>}
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight uppercase">{selectedProduct.name}</h3>
              <div className="flex items-end gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-emerald-600 dark:text-emerald-400 font-black text-3xl tracking-tight">
                  {(() => {
                    if (selectedVariantIdx !== null && selectedProduct.variants?.[selectedVariantIdx]) {
                      return fCur(selectedProduct.variants[selectedVariantIdx].price);
                    }
                    if (selectedProduct.variants?.length) {
                      const minPrice = Math.min(...selectedProduct.variants.map(v => v.price || 0));
                      const maxPrice = Math.max(...selectedProduct.variants.map(v => v.price || 0));
                      return `Rp ${minPrice.toLocaleString('id-ID')} - ${maxPrice.toLocaleString('id-ID')}`;
                    }
                    return fCur(selectedProduct.price);
                  })()}
                </span>
                <span className="text-[9px] bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-black px-2 py-1 rounded-full border border-emerald-100 dark:border-emerald-800 uppercase tracking-widest mb-1.5">Harga Terbaik</span>
              </div>

              {/* Description */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700/50">
                  <i className="fa-solid fa-circle-info text-emerald-500 text-sm"></i>
                  <h4 className="font-black text-slate-800 dark:text-slate-200 text-[10px] tracking-widest uppercase">Informasi &amp; Deskripsi</h4>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 font-semibold leading-relaxed whitespace-pre-wrap">{selectedProduct.desc || 'Tidak ada deskripsi produk.'}</p>
              </div>

              {/* Wholesale Pricing Table preview */}
              {selectedProduct.wholesale?.length > 0 && (
                <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/40 mb-6">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-200 dark:border-emerald-800/40">
                    <i className="fa-solid fa-tags text-emerald-600"></i>
                    <h4 className="font-black text-emerald-800 dark:text-emerald-400 text-[10px] tracking-widest uppercase">Promo Grosir (Wholesale)</h4>
                  </div>
                  <div className="space-y-2">
                    {selectedProduct.wholesale.map((w, i) => (
                      <div key={i} className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-400">
                        <span>Beli minimal {w.minQty} {selectedProduct.unit || 'pcs'}</span>
                        <span className="font-black text-emerald-600">{fCur(w.price)} / pcs</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant Selector */}
              {selectedProduct.variants?.length > 0 && (
                <div className="mb-6">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Pilih Varian / Warna</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.variants.map((v, i) => (
                      <button key={i} className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${selectedVariantIdx === i ? 'bg-[var(--color-primary)] text-white border-transparent shadow-md' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 text-slate-700 dark:text-slate-300 hover:bg-slate-100'}`} onClick={() => setSelectedVariantIdx(i)}>
                        {v.colorCode && (
                          <span className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" style={{ backgroundColor: v.colorCode }}></span>
                        )}
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Active controls: Quantity & Add to Cart */}
              <div className="pt-5 mt-1 border-t border-slate-100 dark:border-slate-800/60">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center">Jumlah <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/40 dark:text-emerald-400 px-1.5 py-0.5 rounded ml-1.5 uppercase tracking-widest border border-emerald-200 dark:border-emerald-800">{selectedProduct.variants?.[selectedVariantIdx]?.unit || selectedProduct.unit || 'pcs'}</span></span>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl h-11 overflow-hidden shadow-sm">
                      <button className="w-11 h-full flex items-center justify-center font-black text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" onClick={() => setCQty(prev => parseFloat(Math.max(0.01, prev - 1).toFixed(2)))}><i className="fa-solid fa-minus text-xs"></i></button>
                      <input className="w-14 text-center text-sm font-black bg-transparent focus:outline-none dark:text-white border-x border-slate-200 dark:border-slate-700" type="number" min="0.01" step="0.01" value={cQty} onChange={e => setCQty(parseFloat(parseFloat(e.target.value).toFixed(2)) || 1)} />
                      <button className="w-11 h-full flex items-center justify-center font-black text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors" onClick={() => setCQty(prev => parseFloat((prev + 1).toFixed(2)))}><i className="fa-solid fa-plus text-xs"></i></button>
                    </div>
                  </div>
                  
                  {/* Dynamic subtotal preview */}
                  <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 shadow-inner">
                    <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">Subtotal</span>
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                      {(() => {
                        let activePrice = selectedProduct.price;
                        if (selectedVariantIdx !== null && selectedProduct.variants?.[selectedVariantIdx]) {
                          activePrice = selectedProduct.variants[selectedVariantIdx].price;
                        }
                        // Grosir check (only applies if no variants)
                        if (selectedProduct.wholesale?.length && !selectedProduct.variants?.length) {
                          const tier = selectedProduct.wholesale.slice().sort((a,b) => b.minQty - a.minQty).find(w => cQty >= parseFloat(w.minQty));
                          if (tier) activePrice = tier.price;
                        }
                        return fCur(activePrice * cQty);
                      })()}
                    </span>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button className="w-14 h-14 shrink-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-400 rounded-2xl flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 active:scale-95 transition-all" onClick={() => toggleWishlist(selectedProduct, selectedProduct.variants?.[selectedVariantIdx]?.name || null)}><i className="fa-solid fa-heart text-xl text-rose-500"></i></button>
                    <button className="btn-primary flex-1 text-sm uppercase tracking-wider shadow-glow active:scale-[0.98]" onClick={() => {
                      if (selectedProduct.variants?.length > 0 && selectedVariantIdx === null) {
                        showToast("Pilih varian / warna terlebih dahulu!", "warning");
                        return;
                      }
                      handleAddToCart(selectedProduct, selectedVariantIdx, cQty);
                      setSelectedProduct(null);
                    }}><i className="fa-solid fa-cart-plus mr-2 text-lg"></i> Keranjang</button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-7 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-black text-xs text-slate-800 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-1.5"><i className="fa-solid fa-comments text-amber-500"></i> Ulasan Pembeli ({productReviews.length})</h4>
                {reviewsLoading ? (
                  <div className="text-center py-4"><i className="fa-solid fa-spinner fa-spin text-slate-300 text-xl"></i></div>
                ) : productReviews.length === 0 ? (
                  <p className="text-xs text-slate-400 font-bold italic py-2 text-center">Belum ada ulasan untuk produk ini.</p>
                ) : (
                  <div className="space-y-3.5">
                    {productReviews.map((r, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                        <div className="flex justify-between items-start mb-1.5">
                          <p className="font-black text-[11px] text-slate-800 dark:text-slate-200 uppercase truncate">{r.customerName || 'Pelanggan'}</p>
                          <div className="flex text-[10px]">
                            {Array.from({ length: 5 }, (_, idx) => (
                              <i key={idx} className={`fa-solid fa-star ${idx < r.rating ? 'text-amber-400' : 'text-slate-200'}`}></i>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{r.text}</p>
                        {(r.photo || r.img) && (
                          <div className="mt-2 flex gap-2 overflow-x-auto">
                            <img
                              src={r.photo || r.img}
                              alt="Foto Ulasan"
                              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-90 transition-opacity shadow-sm shrink-0"
                              onClick={() => window.open(r.photo || r.img, '_blank')}
                              title="Klik untuk lihat ukuran penuh"
                            />
                          </div>
                        )}
                        {r.adminReply && (
                          <div className="mt-2.5 pt-2.5 border-t border-slate-200/50 dark:border-slate-800/60">
                            <p className="text-[9px] font-black text-[var(--color-primary)] uppercase tracking-wider mb-0.5"><i className="fa-solid fa-store mr-1"></i> Balasan Toko:</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 italic">"{r.adminReply}"</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Restock Product Modal */}
      {adminRestockItem && (
        <div className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5" onClick={(e) => { if (e.target.id === 'restock-modal-bg') setAdminRestockItem(null); }} id="restock-modal-bg">
          <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-black text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider">Restock Produk</h3>
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500">{adminRestockItem.name}</p>
              {adminRestockItem.variants?.length > 0 && (
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Pilih Varian</label>
                  <select className="admin-input" value={adminRestockVariantIdx} onChange={e => setAdminRestockVariantIdx(parseInt(e.target.value) || 0)}>
                    {adminRestockItem.variants.map((v, i) => (
                      <option key={i} value={i}>{v.name} (Stok: {v.stock})</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Jumlah Tambahan Stok</label>
                <input className="admin-input" type="number" value={adminRestockQty} onChange={e => setAdminRestockQty(parseFloat(e.target.value) || 0)} required />
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-slate-100 font-bold rounded-xl text-xs" type="button" onClick={() => setAdminRestockItem(null)}>Batal</button>
                <button className="flex-1 py-3 btn-primary text-xs shadow-glow rounded-xl" type="button" onClick={handleProcessRestock}>Simpan Restock</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Reply Modal */}
      {adminReplyTarget && (
        <div className="fixed inset-0 z-[110] bg-slate-900/80 flex items-center justify-center p-3">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-md p-6 shadow-2xl border border-slate-200">
            <h3 className="font-black text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider">Balas Ulasan</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border">
                <p className="text-xs font-bold text-slate-500">{adminReplyTarget.customerName} :</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 italic">"${adminReplyTarget.text}"</p>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Pesan Balasan</label>
                <textarea className="admin-input resize-none" value={adminReplyText} onChange={e => setAdminReplyText(e.target.value)} rows="3" placeholder="Tulis balasan..."></textarea>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-slate-100 font-bold rounded-xl text-xs" type="button" onClick={() => setAdminReplyTarget(null)}>Batal</button>
                <button className="flex-1 py-3 btn-primary text-xs shadow-glow rounded-xl" type="button" onClick={handleSaveAdminReply}>Kirim Balasan</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

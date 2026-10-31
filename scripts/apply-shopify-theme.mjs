import fs from 'fs';
import path from 'path';

console.log('✨ Applying Shopify Polaris & Clean Minimalist Design Engine to Toko Putri...');

const cssPath = path.resolve('src/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Normalize POS Product Card (lines ~264-336)
const oldPosCardRegex = /\/\* Container kartu produk POS grid[\s\S]*?\.pos-img-box img \{/m;
const newPosCardReplacement = `/* Container kartu produk POS grid (Shopify Clean Minimalist - Harmonis dengan Storefront) */
.pos-product-card {
    display: flex !important;
    flex-direction: column !important;
    background: #ffffff;
    border-radius: 1rem !important; /* 16px modern squircle */
    padding: 0 !important; /* Flush cover header, identik Storefront */
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03) !important;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease;
    user-select: none;
    overflow: hidden !important;
    position: relative;
    width: 100% !important;
    min-width: 0 !important;
    min-height: 270px !important; /* HARD PROTECT: Anti-Gepeng & Anti-Collapse matematis */
    height: 100% !important;
    box-sizing: border-box !important;
}

html.dark .pos-product-card {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.35) !important;
    background: #0f172a !important;
}

@media (hover: hover) and (pointer: fine) {
    .pos-product-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04) !important;
        border-color: #cbd5e1 !important;
    }
    html.dark .pos-product-card:hover {
        box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.5) !important;
        border-color: #475569 !important;
    }
}

.pos-product-card:active {
    transform: scale(0.98) !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04) !important;
}
html.dark .pos-product-card:active {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}

.pos-product-card.in-cart {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25), 0 4px 12px rgba(var(--color-primary-rgb), 0.15) !important;
}
html.dark .pos-product-card.in-cart {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35), 0 4px 12px rgba(var(--color-primary-rgb), 0.2) !important;
}

/* Kotak gambar produk: rasio 1:1 flush cover atas & hard min-height */
.pos-img-box {
    position: relative !important;
    width: 100% !important;
    aspect-ratio: 1 / 1 !important;
    min-height: 120px !important;
    border-radius: 0 !important;
    overflow: hidden;
    background: #f8fafc;
    flex-shrink: 0 !important;
    margin-bottom: 0 !important;
    border-bottom: 1px solid #f1f5f9 !important;
}
html.dark .pos-img-box {
    border-bottom-color: #1e293b !important;
    background: #0b1120;
}

/* Gambar presisi di dalam kotak — absolute fill penuh */
.pos-img-box img {`;

css = css.replace(oldPosCardRegex, newPosCardReplacement);

// 2. Normalize POS List Item (lines ~1000-1090)
const oldPosListRegex = /\/\* ── MODE LIST — Layout Sleek Native App 1:1 Harmonis dengan Storefront ── \*\/[\s\S]*?\.pos-list-item\.in-cart \{[\s\S]*?\}/m;
const newPosListReplacement = `/* ── MODE LIST — Layout Sleek Shopify Clean 1:1 Harmonis dengan Storefront ── */
.pos-list-item {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 12px !important;
    background: white;
    border-radius: 1rem !important; /* 16px modern squircle */
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease;
    user-select: none;
    position: relative;
    overflow: hidden !important;
    flex-shrink: 0 !important;
    width: 100% !important;
    min-height: 96px !important;
    box-sizing: border-box !important;
}

html.dark .pos-list-item {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.35) !important;
    background: #0f172a !important;
}

@media (min-width: 640px) {
    .pos-list-item {
        gap: 16px !important;
        padding: 14px !important;
        min-height: 104px !important;
    }
}

/* Thumbnail Kiri List Mode — Presisi Bujursangkar 80px/96px Anti-Distorsi */
.pos-list-thumb {
    position: relative !important;
    width: 80px !important;
    height: 80px !important;
    min-width: 80px !important;
    min-height: 80px !important;
    border-radius: 0.875rem !important;
    overflow: hidden !important;
    flex-shrink: 0 !important;
    background: #f8fafc;
    border: 1px solid #e2e8f0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
html.dark .pos-list-thumb {
    border-color: #334155 !important;
    background: #0b1120;
}

@media (min-width: 640px) {
    .pos-list-thumb {
        width: 96px !important;
        height: 96px !important;
        min-width: 96px !important;
        min-height: 96px !important;
        border-radius: 1rem !important;
    }
}

@media (hover: hover) and (pointer: fine) {
    .pos-list-item:hover {
        transform: translateY(-1.5px);
        box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.08) !important;
        border-color: #cbd5e1 !important;
    }
    html.dark .pos-list-item:hover {
        box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.5) !important;
        border-color: #475569 !important;
    }
}

.pos-list-item:active {
    transform: scale(0.98) !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
}
html.dark .pos-list-item:active {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}

.pos-list-item.in-cart {
    border-color: var(--color-primary) !important;
    background: rgba(var(--color-primary-rgb), 0.04);
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25), 0 4px 12px rgba(var(--color-primary-rgb), 0.12) !important;
}`;

css = css.replace(oldPosListRegex, newPosListReplacement);

// 3. Normalize Catalog & Promo Buttons (lines ~4172-4250)
const oldBtnCatalogRegex = /\/\* Tombol Tambah \(\+\) — Solid Flat Clean Theme, Industrial Neo-Brutalism \*\/[\s\S]*?\.btn-reward-redeem,[\s\S]*?max-height: 32px !important;/m;
const newBtnCatalogReplacement = `/* Tombol Tambah (+) — Shopify Clean Minimalist */
.btn-catalog-add {
    background: var(--color-primary) !important;
    color: #ffffff !important;
    border: 1px solid transparent !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.28) !important;
    border-radius: 0.875rem !important;
}
.dark .btn-catalog-add {
    background: var(--color-primary) !important;
    border: 1px solid transparent !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.38) !important;
}
.btn-catalog-add:hover {
    filter: brightness(1.08) !important;
    transform: scale(1.05) !important;
    box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.38) !important;
}
.btn-catalog-add:active {
    transform: scale(0.92) !important;
    box-shadow: 0 1px 4px rgba(var(--color-primary-rgb), 0.2) !important;
}

/* Tombol Varian — Shopify Clean Indigo Royale */
.btn-catalog-variant {
    background: #4f46e5 !important;
    color: #ffffff !important;
    border: 1px solid transparent !important;
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.28) !important;
    border-radius: 0.875rem !important;
}
.dark .btn-catalog-variant {
    background: #6366f1 !important;
    border: 1px solid transparent !important;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.38) !important;
}
.btn-catalog-variant:hover {
    filter: brightness(1.08) !important;
    transform: scale(1.05) !important;
    box-shadow: 0 4px 14px rgba(79, 70, 229, 0.38) !important;
}
.btn-catalog-variant:active {
    transform: scale(0.92) !important;
    box-shadow: 0 1px 4px rgba(79, 70, 229, 0.2) !important;
}

/* ============================================================
   TOMBOL AKSI KOMPAK KATALOG PROMOSI (FLASH SALE & REWARD POIN)
   Proporsional, Anti-Gepeng, Single-Line, dan Selaras Tema
   ============================================================ */
.btn-reward-redeem,
.btn-flash-buy {
    height: 32px !important;
    min-height: 32px !important;
    max-height: 32px !important;
    padding: 0 0.65rem !important;
    border-radius: 0.625rem !important; /* 10px modern squircle */
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 0.01em !important;
    white-space: nowrap !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.375rem !important;
    color: #ffffff !important;
    background: var(--color-primary) !important;
    border: 1px solid transparent !important;
    box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25) !important;
    cursor: pointer !important;
    user-select: none !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease !important;
    box-sizing: border-box !important;
}
.btn-reward-redeem:hover,
.btn-flash-buy:hover {
    filter: brightness(1.08) !important;
    box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35) !important;
}
.btn-reward-redeem:active,
.btn-flash-buy:active {
    transform: scale(0.95) !important;
    box-shadow: 0 1px 3px rgba(var(--color-primary-rgb), 0.2) !important;
}`;

css = css.replace(oldBtnCatalogRegex, newBtnCatalogReplacement);

// 4. Now transform Section 6649 to the end of style.css into the Master Shopify Polaris Clean Minimalist Engine!
const oldMasterSectionRegex = /\/\* ============================================================\s*INDUSTRIAL NEO-BRUTALISM & FULL NATIVE APP ENGINE — v1\.20\.0[\s\S]*$/m;

const newMasterCleanSystem = `/* ============================================================
   SHOPIFY POLARIS & CLEAN MINIMALIST DESIGN ENGINE — v1.21.0
   Filosofi Desain Modern E-Commerce Kelas Dunia:
   1. Crisp 1px Borders (Halus, Bernapas & Elegan)
   2. Soft Diffused Ambient Shadows (Mengambang Ringan, Anti-Fatigue)
   3. Smooth Tactile Spring Scaling (active: scale(0.97) - iOS/Shopify Feel)
   4. Harmonized Pastel Status Pills & Clean Minimalist Badges
   5. Luxurious Focus Rings (Shopify Polaris 3.5px Focus Halo)
   6. 100% Thermal Print & A4 Isolation Guarantee
   ============================================================ */

:root {
    --clean-border-width: 1px;
    --clean-border-color: #e2e8f0;
    --clean-border-color-dark: #334155;
    --clean-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    --clean-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
    --clean-shadow-md: 0 4px 14px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
    --clean-shadow-lg: 0 10px 25px -4px rgba(15, 23, 42, 0.07), 0 6px 10px -3px rgba(15, 23, 42, 0.03);
    --clean-shadow-xl: 0 20px 35px -6px rgba(15, 23, 42, 0.1), 0 8px 12px -4px rgba(15, 23, 42, 0.05);
    --clean-shadow-hover: 0 12px 28px -5px rgba(15, 23, 42, 0.08), 0 6px 12px -4px rgba(15, 23, 42, 0.04);
    
    /* Backward compatibility token aliases (Menjamin integritas modul lama) */
    --neo-border-width: 1px;
    --neo-border-color: #e2e8f0;
    --neo-border-color-dark: #334155;
    --neo-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    --neo-shadow-md: 0 4px 14px -2px rgba(15, 23, 42, 0.05);
    --neo-shadow-lg: 0 10px 25px -4px rgba(15, 23, 42, 0.07);
    --neo-shadow-dark-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    --neo-shadow-dark-md: 0 4px 14px -2px rgba(0, 0, 0, 0.35);
    --neo-shadow-dark-lg: 0 10px 25px -4px rgba(0, 0, 0, 0.45);
    --neo-hazard-yellow: #f59e0b;
    --neo-hazard-orange: #f97316;
    --neo-safety-green: #10b981;
}

/* 1. Universal Clean Minimalist Box, Cards & Island Surfaces */
.neo-box {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important; /* 16px modern squircle */
    background-color: #ffffff;
    box-sizing: border-box !important;
}
html.dark .neo-box {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.35) !important;
    background-color: #1e293b;
}

.neo-card,
.catalog-product-card,
.bento-island-card,
.card-modern,
.card-native,
.product-admin-card,
.category-admin-card,
.bento-empty-state-card,
.storefront-card,
.option-select-card,
.footer-bento-hub,
#quickmenu-modal-content button,
#admin-dashboard-view .grid button,
#admin-dashboard-cashflow-slot .bento-island-card,
#admin-dashboard-view > .bento-island-card,
.table-container,
.admin-table-card,
.stat-card-neo,
.kpi-card,
.bento-stat-card,
#address-container,
#cust-info-card,
.checkout-stepper-bar,
#cart-items-container > div,
#orders-items-container > div,
#wishlist-items-container > div,
#storefront-faq-container > div,
#dynamic-flashsale-container .snap-start > div,
#reward-catalog-container .snap-start > div,
#dynamic-vouchers-container .snap-start > div,
#cart-sph-card > div,
#address-container [class*="border-amber-200"],
#droppoint-form > div,
#droppoint-form [class*="border-"],
#detail-transfer #dynamic-banks-container > div,
#detail-qris > div,
#detail-tempo > div,
#detail-paylater > div,
#detail-paylater [class*="bg-white/95"],
#paylater-status-box,
#bukti-payment-section,
#bukti-upload-label,
#payment-items-preview > div,
#supplier-cards-list > div,
#purchase-cards-list > div,
#tempo-cards-container > div,
#expense-ledger-container > div,
#expenses-cards-container > div,
#stock-opname-list > div,
#return-cards-container > div,
#delivery-cards-container > div,
#pos-hold-cart-list > div,
#customer-cards-list > div,
#staff-cards-list > div,
.pos-product-card,
.pos-list-item,
#pos-mobile-quick-menu,
#pos-open-shift-box,
#pos-cash-movement-box,
#pos-shift-summary-box,
#pos-close-shift-box,
#pos-held-modal-box,
[id^="pos-item-"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03) !important;
    border-radius: 1rem !important;
    background-color: #ffffff;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.2s ease,
                border-color 0.2s ease !important;
    box-sizing: border-box !important;
}

/* Isolasi internal kartu Flash Sale & Reward agar gambar & detail tetap utuh dan seamless */
#dynamic-flashsale-container .flash-sale-card > div,
#dynamic-flashsale-container .flash-sale-card > div > div {
    border: none !important;
    box-shadow: none !important;
}
#dynamic-flashsale-container .flash-sale-card .aspect-square {
    border-bottom: 1px solid #f1f5f9 !important;
}
html.dark #dynamic-flashsale-container .flash-sale-card .aspect-square {
    border-bottom: 1px solid #1e293b !important;
}

html.dark .neo-card,
html.dark .catalog-product-card,
html.dark .bento-island-card,
html.dark .card-modern,
html.dark .card-native,
html.dark .product-admin-card,
html.dark .category-admin-card,
html.dark .bento-empty-state-card,
html.dark .storefront-card,
html.dark .option-select-card,
html.dark .footer-bento-hub,
html.dark #quickmenu-modal-content button,
html.dark #admin-dashboard-view .grid button,
html.dark #admin-dashboard-cashflow-slot .bento-island-card,
html.dark #admin-dashboard-view > .bento-island-card,
html.dark .table-container,
html.dark .admin-table-card,
html.dark .stat-card-neo,
html.dark .kpi-card,
html.dark .bento-stat-card,
html.dark #address-container,
html.dark #cust-info-card,
html.dark .checkout-stepper-bar,
html.dark #cart-items-container > div,
html.dark #orders-items-container > div,
html.dark #wishlist-items-container > div,
html.dark #storefront-faq-container > div,
html.dark #dynamic-flashsale-container .snap-start > div,
html.dark #reward-catalog-container .snap-start > div,
html.dark #dynamic-vouchers-container .snap-start > div,
html.dark #cart-sph-card > div,
html.dark #address-container [class*="border-amber-200"],
html.dark #droppoint-form > div,
html.dark #droppoint-form [class*="border-"],
html.dark #detail-transfer #dynamic-banks-container > div,
html.dark #detail-qris > div,
html.dark #detail-tempo > div,
html.dark #detail-paylater > div,
html.dark #detail-paylater [class*="bg-white/95"],
html.dark #paylater-status-box,
html.dark #bukti-payment-section,
html.dark #bukti-upload-label,
html.dark #payment-items-preview > div,
html.dark #supplier-cards-list > div,
html.dark #purchase-cards-list > div,
html.dark #tempo-cards-container > div,
html.dark #expense-ledger-container > div,
html.dark #expenses-cards-container > div,
html.dark #stock-opname-list > div,
html.dark #return-cards-container > div,
html.dark #delivery-cards-container > div,
html.dark #pos-hold-cart-list > div,
html.dark #customer-cards-list > div,
html.dark #staff-cards-list > div,
html.dark .pos-product-card,
html.dark .pos-list-item,
html.dark #pos-mobile-quick-menu,
html.dark #pos-open-shift-box,
html.dark #pos-cash-movement-box,
html.dark #pos-shift-summary-box,
html.dark #pos-close-shift-box,
html.dark #pos-held-modal-box,
html.dark [id^="pos-item-"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.35) !important;
    background-color: #1e293b;
}

/* Zero Double-Boxing: Kontainer Seksi Storefront Flat & Bersih */
#sec-categories > div,
#sec-brands > div,
#dynamic-banners-container,
#dynamic-banners-container > div {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    box-sizing: border-box !important;
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
}

@media (hover: hover) and (pointer: fine) {
    .neo-card:hover,
    .catalog-product-card:hover,
    .bento-island-card:hover,
    .card-modern:hover,
    .card-native:hover,
    .product-admin-card:hover,
    .category-admin-card:hover,
    .option-select-card:hover,
    .pos-product-card:hover,
    .pos-list-item:hover,
    #quickmenu-modal-content button:hover,
    #admin-dashboard-view .grid button:hover,
    #cart-items-container > div:hover,
    #orders-items-container > div:hover,
    #wishlist-items-container > div:hover,
    #dynamic-flashsale-container .snap-start > div:hover,
    #reward-catalog-container .snap-start > div:hover,
    #dynamic-vouchers-container .snap-start > div:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.07), 0 6px 10px -3px rgba(15, 23, 42, 0.03) !important;
        border-color: #cbd5e1 !important;
    }
    html.dark .neo-card:hover,
    html.dark .catalog-product-card:hover,
    html.dark .bento-island-card:hover,
    html.dark .card-modern:hover,
    html.dark .card-native:hover,
    html.dark .product-admin-card:hover,
    html.dark .category-admin-card:hover,
    html.dark .option-select-card:hover,
    html.dark .pos-product-card:hover,
    html.dark .pos-list-item:hover,
    html.dark #quickmenu-modal-content button:hover,
    html.dark #admin-dashboard-view .grid button:hover,
    html.dark #cart-items-container > div:hover,
    html.dark #orders-items-container > div:hover,
    html.dark #wishlist-items-container > div:hover,
    html.dark #dynamic-flashsale-container .snap-start > div:hover,
    html.dark #reward-catalog-container .snap-start > div:hover,
    html.dark #dynamic-vouchers-container .snap-start > div:hover {
        box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.5) !important;
        border-color: #475569 !important;
    }
}

@media (hover: none) {
    .neo-card:hover,
    .catalog-product-card:hover,
    .bento-island-card:hover,
    .card-modern:hover,
    .card-native:hover,
    .product-admin-card:hover,
    .category-admin-card:hover,
    .option-select-card:hover,
    #quickmenu-modal-content button:hover,
    #admin-dashboard-view .grid button:hover,
    #cart-items-container > div:hover,
    #orders-items-container > div:hover,
    #wishlist-items-container > div:hover,
    #dynamic-flashsale-container .snap-start > div:hover,
    #reward-catalog-container .snap-start > div:hover,
    #dynamic-vouchers-container .snap-start > div:hover {
        transform: none !important;
    }
}

/* 1b. Dynamic Storefront Category & Brand Chiclets and POS Filters */
#dynamic-categories-container [onclick*="filterCategory"] > div,
#dynamic-categories-container .snap-start > div,
#pos-cat-filter button,
#pos-subcat-filter button,
.pos-preset-chip,
.pos-shortcut-chiclet {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background-color 0.15s ease, border-color 0.15s ease !important;
    background-color: #ffffff;
    box-sizing: border-box !important;
}
#dynamic-categories-container [onclick*="filterCategory"] > div:active,
#dynamic-categories-container .snap-start > div:active,
#pos-cat-filter button:active,
#pos-subcat-filter button:active,
.pos-preset-chip:active,
.pos-shortcut-chiclet:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #dynamic-categories-container [onclick*="filterCategory"] > div,
html.dark #dynamic-categories-container .snap-start > div,
html.dark #pos-cat-filter button,
html.dark #pos-subcat-filter button,
html.dark .pos-preset-chip,
html.dark .pos-shortcut-chiclet {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}

#pos-cat-filter button.pos-cat-active,
#pos-cat-filter button[class*="bg-[var(--color-primary)"],
#pos-subcat-filter button.pos-subcat-active,
#pos-subcat-filter button[class*="bg-[var(--color-primary)"] {
    background-color: var(--color-primary) !important;
    color: #ffffff !important;
    border-color: var(--color-primary) !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.25) !important;
}

#dynamic-brands-container [onclick*="filterBrand"] > div,
#dynamic-brands-container .snap-start > div,
#modal-brand-grid button {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background-color 0.15s ease !important;
    background-color: #ffffff;
    box-sizing: border-box !important;
}
#dynamic-brands-container [onclick*="filterBrand"] > div:active,
#dynamic-brands-container .snap-start > div:active,
#modal-brand-grid button:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #dynamic-brands-container [onclick*="filterBrand"] > div,
html.dark #dynamic-brands-container .snap-start > div,
html.dark #modal-brand-grid button {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}

#dynamic-brands-container [onclick*="filterBrand"] > div > div,
#dynamic-brands-container .snap-start > div > div {
    border: none !important;
    box-shadow: none !important;
}

#sec-categories button[onclick*="openCategoryModal"],
#sec-brands button[onclick*="openBrandModal"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.625rem !important;
    font-weight: 700 !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
}
#sec-categories button[onclick*="openCategoryModal"]:hover,
#sec-brands button[onclick*="openBrandModal"]:hover {
    border-color: #cbd5e1 !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
}
#sec-categories button[onclick*="openCategoryModal"]:active,
#sec-brands button[onclick*="openBrandModal"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #sec-categories button[onclick*="openCategoryModal"],
html.dark #sec-brands button[onclick*="openBrandModal"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}

/* 1c. Storefront Footer Action Cards & Service Tiles */
.footer-bento-hub a[onclick*="sendWhatsAppCustomerService"],
.footer-bento-hub a[href="javascript:void(0)"],
.footer-bento-hub div[onclick*="openAppDownloadModal"],
.footer-bento-hub .grid button,
.footer-bento-hub button[onclick*="changeView('view-orders')"],
.footer-bento-hub button[onclick*="openVoucherModal"],
.footer-bento-hub button[onclick*="openFaqModal"],
.footer-bento-hub button[onclick*="openQualityGuaranteeModal"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease !important;
}
.footer-bento-hub a[onclick*="sendWhatsAppCustomerService"]:active,
.footer-bento-hub a[href="javascript:void(0)"]:active,
.footer-bento-hub div[onclick*="openAppDownloadModal"]:active,
.footer-bento-hub .grid button:active {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}
html.dark .footer-bento-hub a[onclick*="sendWhatsAppCustomerService"],
html.dark .footer-bento-hub a[href="javascript:void(0)"],
html.dark .footer-bento-hub div[onclick*="openAppDownloadModal"],
html.dark .footer-bento-hub .grid button {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
}

/* Storefront Footer Badges: Verification, Shipping, Operational */
.footer-bento-hub [class*="rounded-xl"][class*="border"],
.footer-bento-hub .flex-wrap > div,
.footer-bento-hub span[class*="rounded-full"][class*="border"],
#footer-container button {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.625rem !important;
    box-sizing: border-box !important;
}
html.dark .footer-bento-hub [class*="rounded-xl"][class*="border"],
html.dark .footer-bento-hub .flex-wrap > div,
html.dark .footer-bento-hub span[class*="rounded-full"][class*="border"],
html.dark #footer-container button {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 1d. CMS & Header Action Buttons & Icon Pods */
#view-admin .glass-header button,
#view-catalog .glass-header button,
#dashboard-cashflow-refresh-btn,
#admin-dashboard-cashflow-slot button[onclick*="openAdminTab('reports')"],
.banner-slide-item a,
.banner-slide-item button,
.banner-slide-item [role="button"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.75rem !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background-color 0.15s ease !important;
}
#view-admin .glass-header button:active,
#view-catalog .glass-header button:active,
#dashboard-cashflow-refresh-btn:active,
#admin-dashboard-cashflow-slot button[onclick*="openAdminTab('reports')"]:active,
.banner-slide-item a:active,
.banner-slide-item button:active,
.banner-slide-item [role="button"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #view-admin .glass-header button,
html.dark #view-catalog .glass-header button,
html.dark #dashboard-cashflow-refresh-btn,
html.dark #admin-dashboard-cashflow-slot button[onclick*="openAdminTab('reports')"],
html.dark .banner-slide-item a,
html.dark .banner-slide-item button,
html.dark .banner-slide-item [role="button"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* Cashflow Cards: Lapang, Bebas Sempit, & Unbox Link Navigasi Cepat */
#admin-dashboard-cashflow-slot .bento-island-card {
    padding: 1.125rem 1.25rem !important;
    min-height: 125px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    box-sizing: border-box !important;
}
#admin-dashboard-cashflow-slot .bento-island-card button {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    min-height: unset !important;
}

/* Compact Tool Buttons & Micro Actions */
button.h-8.w-8:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
button.h-9.w-9:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
button.h-10.w-10:not(.btn-primary):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
.btn-compact,
.btn-micro,
.btn-catalog-action,
#btn-admin-refresh,
#btn-admin-theme-toggle,
#btn-view-grid,
#btn-view-list {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04) !important;
    box-sizing: border-box !important;
    min-height: unset !important;
    transition: transform 0.12s ease-out, box-shadow 0.12s ease-out !important;
}
html.dark button.h-8.w-8:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark button.h-9.w-9:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark button.h-10.w-10:not(.btn-primary):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark .btn-compact,
html.dark .btn-micro,
html.dark .btn-catalog-action,
html.dark #btn-admin-refresh,
html.dark #btn-admin-theme-toggle,
html.dark #btn-view-grid,
html.dark #btn-view-list {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}
button.h-8.w-8:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]):active:not(:disabled),
button.h-9.w-9:not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]):active:not(:disabled),
button.h-10.w-10:not(.btn-primary):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]):active:not(:disabled),
.btn-compact:active:not(:disabled),
.btn-micro:active:not(:disabled),
.btn-catalog-action:active:not(:disabled),
#btn-admin-refresh:active:not(:disabled),
#btn-admin-theme-toggle:active:not(:disabled),
#btn-view-grid:active:not(:disabled),
#btn-view-list:active:not(:disabled) {
    transform: scale(0.95) !important;
    box-shadow: none !important;
}

/* 3. Universal Clean Badges & Status Pills (Pastel, Ramping & Bersih) */
.neo-badge,
span.badge,
.status-pill,
[class*="status-badge"],
span[class*="rounded-md"][class*="uppercase"]:not([class*="cart-badge"]):not(.flash-variant-badge),
span[class*="rounded-lg"][class*="uppercase"]:not([class*="cart-badge"]):not(.flash-variant-badge),
span[class*="rounded-full"][class*="uppercase"]:not([class*="cart-badge"]):not(#bottom-nav-cart-badge):not(#wishlist-badge):not(.flash-variant-badge) {
    border: 1px solid rgba(15, 23, 42, 0.08) !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
    border-radius: 9999px !important; /* Elegant pill */
    font-weight: 600 !important;
    letter-spacing: 0.02em !important;
    white-space: nowrap !important;
    word-break: keep-all !important;
    line-height: 1.25 !important;
    min-height: 18px !important;
    max-height: 24px !important;
    padding: 1px 8px !important;
    box-sizing: border-box !important;
}
html.dark .neo-badge,
html.dark span.badge,
html.dark .status-pill,
html.dark [class*="status-badge"],
html.dark span[class*="rounded-md"][class*="uppercase"]:not([class*="cart-badge"]):not(.flash-variant-badge),
html.dark span[class*="rounded-lg"][class*="uppercase"]:not([class*="cart-badge"]):not(.flash-variant-badge),
html.dark span[class*="rounded-full"][class*="uppercase"]:not([class*="cart-badge"]):not(#bottom-nav-cart-badge):not(#wishlist-badge):not(.flash-variant-badge) {
    border-color: rgba(255, 255, 255, 0.12) !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}

/* Flash Sale & Promo Card Badge Harmony */
.flash-variant-badge,
.flash-sale-card .neo-badge,
.flash-sale-card .flash-variant-badge,
.flash-sale-card span[class*="rounded"] {
    border-width: 1px !important;
    border-color: rgba(15, 23, 42, 0.1) !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03) !important;
    min-height: 18px !important;
    max-height: 22px !important;
    padding: 1px 6px !important;
    font-size: 9px !important;
    border-radius: 9999px !important;
}

/* Guard: Pastikan badge counter bulat tetap bulat */
#bottom-nav-cart-badge,
#wishlist-badge,
span[id$="-badge"][class*="min-w-"] {
    border-radius: 9999px !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid #ffffff !important;
    min-height: 18px !important;
    padding: 0 5px !important;
}

/* 4. Universal Clean Input Form Fields (Shopify Polaris Focus Ring) */
.neo-input,
.admin-input,
input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not(#modal-qty-input):not(#pos-variant-qty-input):not(#quick-variant-qty-input):not(.cart-qty-input):not(.stepper-input):not(.so-phys-store):not(.so-phys-warehouse):not(.input-compact):not(.search-clean-input):not(#mobile-header-search):not(#search-input):not(textarea),
select:not(.report-period-select-raw),
textarea,
.header-search-capsule {
    border: 1px solid #cbd5e1 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.75rem !important;
    min-height: 2.75rem !important;
    box-sizing: border-box !important;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease !important;
}
.neo-input:focus,
.admin-input:focus,
input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not(#modal-qty-input):not(#pos-variant-qty-input):not(#quick-variant-qty-input):not(.cart-qty-input):not(.stepper-input):not(.so-phys-store):not(.so-phys-warehouse):not(.input-compact):not(.search-clean-input):not(#mobile-header-search):not(#search-input):focus,
select:not(.report-period-select-raw):focus,
textarea:focus,
.header-search-capsule:focus-within {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 3.5px rgba(var(--color-primary-rgb), 0.15) !important;
    outline: none !important;
}
html.dark .neo-input,
html.dark .admin-input,
html.dark input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not(#modal-qty-input):not(#pos-variant-qty-input):not(#quick-variant-qty-input):not(.cart-qty-input):not(.stepper-input):not(.so-phys-store):not(.so-phys-warehouse):not(.input-compact):not(.search-clean-input):not(#mobile-header-search):not(#search-input),
html.dark select:not(.report-period-select-raw),
html.dark textarea,
html.dark .header-search-capsule {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
}
html.dark .neo-input:focus,
html.dark .admin-input:focus,
html.dark input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="hidden"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not(#modal-qty-input):not(#pos-variant-qty-input):not(#quick-variant-qty-input):not(.cart-qty-input):not(.stepper-input):not(.so-phys-store):not(.so-phys-warehouse):not(.input-compact):not(.search-clean-input):not(#mobile-header-search):not(#search-input):focus,
html.dark select:not(.report-period-select-raw):focus,
html.dark textarea:focus,
html.dark .header-search-capsule:focus-within {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 3.5px rgba(var(--color-primary-rgb), 0.28) !important;
}

textarea.admin-input,
textarea.neo-input,
textarea {
    min-height: 5.5rem !important;
    padding: 0.625rem 0.875rem !important;
    font-size: 0.875rem !important;
    line-height: 1.4 !important;
}

/* Search Capsule & Scanner Chiclet */
.header-search-capsule {
    border-radius: 9999px !important;
    min-height: 2.75rem !important;
    height: 2.75rem !important;
    padding-left: 1rem !important;
    padding-right: 0.35rem !important;
    display: flex !important;
    align-items: center !important;
}
.header-search-capsule button[onclick*="openCameraScanner"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03) !important;
    border-radius: 9999px !important;
    height: 32px !important;
    min-height: 32px !important;
    padding: 0 0.75rem !important;
    margin-right: 2px !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.35rem !important;
    box-sizing: border-box !important;
}
html.dark .header-search-capsule button[onclick*="openCameraScanner"] {
    border-color: #334155 !important;
}

/* Clean Search Inputs */
.search-clean-input,
.header-search-capsule input,
#mobile-header-search,
#search-input {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    outline: none !important;
    min-height: unset !important;
    height: 100% !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
html.dark .search-clean-input,
html.dark .header-search-capsule input,
html.dark #mobile-header-search,
html.dark #search-input {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    outline: none !important;
}

/* 4b. Stepper Kuantitas Terpadu */
#modal-active-controls .overflow-hidden.rounded-xl,
.product-stepper-control {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    box-sizing: border-box !important;
    background: #ffffff !important;
    display: inline-flex !important;
    align-items: center !important;
    overflow: hidden !important;
}
html.dark #modal-active-controls .overflow-hidden.rounded-xl,
html.dark .product-stepper-control,
html.dark .cart-stepper-control {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) !important;
    background: #1e293b !important;
}

#modal-qty-input {
    border-top: none !important;
    border-bottom: none !important;
    border-left: 1px solid #e2e8f0 !important;
    border-right: 1px solid #e2e8f0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    min-height: 2.75rem !important;
    height: 100% !important;
    background: transparent !important;
    text-align: center !important;
    font-weight: 700 !important;
    box-sizing: border-box !important;
}
html.dark #modal-qty-input {
    border-left-color: #334155 !important;
    border-right-color: #334155 !important;
    color: #ffffff !important;
}

.stepper-input,
#pos-variant-qty-input,
#quick-variant-qty-input,
.cart-qty-input,
.cart-stepper-control input,
#cart-items-container input[type="number"],
.pos-stepper-control input,
.pos-cart-items-target input[type="number"] {
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    outline: none !important;
    min-height: unset !important;
    height: 100% !important;
    background: transparent !important;
    text-align: center !important;
    font-weight: 700 !important;
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    -moz-appearance: textfield !important;
}
html.dark .stepper-input,
html.dark #pos-variant-qty-input,
html.dark #quick-variant-qty-input,
html.dark .cart-qty-input,
html.dark .cart-stepper-control input,
html.dark #cart-items-container input[type="number"],
html.dark .pos-stepper-control input,
html.dark .pos-cart-items-target input[type="number"] {
    border: none !important;
    box-shadow: none !important;
    color: #ffffff !important;
    background: transparent !important;
}

#modal-active-controls button {
    transition: background-color 0.15s ease, transform 0.1s ease !important;
    min-width: 2.75rem !important;
}
#modal-active-controls button:active {
    transform: scale(0.92) !important;
}

/* 4c. Modal Detail Produk: Varian, Deskripsi, Action Bar */
#product-modal-options button,
.paint-swatch-card {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    box-sizing: border-box !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
}
#product-modal-options button[class*="border-[var(--color-primary)]"],
#product-modal-options button[class*="ring-2"],
.paint-swatch-card.is-selected {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25) !important;
}
#product-modal-options button:active:not(:disabled),
.paint-swatch-card:active:not(:disabled) {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #product-modal-options button,
html.dark .paint-swatch-card {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}
html.dark #product-modal-options button[class*="border-[var(--color-primary)]"],
html.dark #product-modal-options button[class*="ring-2"],
html.dark .paint-swatch-card.is-selected {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35) !important;
}

#product-modal-content .mb-6.rounded-2xl.border,
#product-modal-paylater-container > div,
#product-modal-paint-warning {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    padding: 1.25rem 1.5rem !important;
    box-sizing: border-box !important;
}
html.dark #product-modal-content .mb-6.rounded-2xl.border,
html.dark #product-modal-paylater-container > div,
html.dark #product-modal-paint-warning {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
}

/* Deskripsi Produk: Bersih, Terbuka, & Tipografi Bernapas Lapang */
#product-modal-desc {
    font-size: 0.875rem !important;
    line-height: 1.75 !important;
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    padding: 0.35rem 0 !important;
    margin-top: 0.25rem !important;
}
#product-modal-desc,
#product-modal-desc * {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
}

#product-modal-content button[onclick*="chatWAAboutProduct"] {
    border: 1px solid #059669 !important;
    box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25) !important;
    border-radius: 0.75rem !important;
    font-weight: 700 !important;
    min-height: 2.75rem !important;
    margin-top: 1.25rem !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#product-modal-content button[onclick*="chatWAAboutProduct"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}

#product-modal-spec-table .overflow-hidden.rounded-2xl.border {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
}
html.dark #product-modal-spec-table .overflow-hidden.rounded-2xl.border {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
}

#modal-active-controls .rounded-2xl.border {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
}
html.dark #modal-active-controls .rounded-2xl.border {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

#product-modal-sticky-bar button,
#product-modal-content > .absolute.right-3.top-3 button {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    font-weight: 700 !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#product-modal-sticky-bar button[onclick*="confirmAddProductToCart"] {
    border-color: transparent !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3) !important;
}
#product-modal-sticky-bar button:active,
#product-modal-content > .absolute.right-3.top-3 button:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #product-modal-sticky-bar button,
html.dark #product-modal-content > .absolute.right-3.top-3 button {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
}

/* 4e. Shopping Guide & SOP Modal Harmonization */
#shopping-guide-modal .p-4.rounded-2xl.border,
#shopping-guide-modal .rounded-2xl.border,
#shopping-guide-modal [id^="guide-section-"] > div {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
}
html.dark #shopping-guide-modal .p-4.rounded-2xl.border,
html.dark #shopping-guide-modal .rounded-2xl.border,
html.dark #shopping-guide-modal [id^="guide-section-"] > div {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

#shopping-guide-modal [id^="guide-tab-btn-"],
#shopping-guide-modal button[onclick*="closeShoppingGuideModal"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    font-weight: 700 !important;
    box-sizing: border-box !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#shopping-guide-modal [id^="guide-tab-btn-"]:active,
#shopping-guide-modal button[onclick*="closeShoppingGuideModal"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #shopping-guide-modal [id^="guide-tab-btn-"],
html.dark #shopping-guide-modal button[onclick*="closeShoppingGuideModal"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 4f. Produk Sejenis & Alternatif Pilihan */
#product-modal-related-container [onclick*="openProductModal"],
#product-modal-related-container .group {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
    background-color: #ffffff;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease !important;
}
#product-modal-related-container [onclick*="openProductModal"]:hover,
#product-modal-related-container .group:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.07) !important;
    border-color: #cbd5e1 !important;
}
#product-modal-related-container [onclick*="openProductModal"]:active,
#product-modal-related-container .group:active {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}
html.dark #product-modal-related-container [onclick*="openProductModal"],
html.dark #product-modal-related-container .group {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
    background-color: #1e293b;
}

#product-modal-related-container .relative.aspect-square {
    border: 1px solid #f1f5f9 !important;
    border-radius: 0.75rem !important;
    overflow: hidden !important;
}
html.dark #product-modal-related-container .relative.aspect-square {
    border-color: #334155 !important;
}

/* 4g. Category & Brand Storefront Modals */
#modal-category-list button,
#modal-brand-grid button {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
    background-color: #ffffff;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
}
#modal-category-list button[class*="border-[var(--color-primary)]"],
#modal-brand-grid button[class*="border-[var(--color-primary)]"] {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.2) !important;
    background-color: rgba(var(--color-primary-rgb), 0.05) !important;
}
#modal-category-list button:active,
#modal-brand-grid button:active {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}
html.dark #modal-category-list button,
html.dark #modal-brand-grid button {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}

#modal-category-list button > div:first-child,
#modal-brand-grid button > div:first-child {
    border: 1px solid #e2e8f0 !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
}
html.dark #modal-category-list button > div:first-child,
html.dark #modal-brand-grid button > div:first-child {
    border-color: #334155 !important;
}

#category-modal button[onclick*="closeCategoryModal"],
#brand-modal button[onclick*="closeBrandModal"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.875rem !important;
    font-weight: 700 !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#category-modal button[onclick*="closeCategoryModal"]:active,
#brand-modal button[onclick*="closeBrandModal"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #category-modal button[onclick*="closeCategoryModal"],
html.dark #brand-modal button[onclick*="closeBrandModal"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 4h. CMS Settings Bento Hub & Menu Cards */
#admin-content button[onclick*="openSettingForm"],
#admin-content button[onclick*="openPrinterSettingsModal"],
#admin-content button[onclick*="openAdminTab('backup_sync')"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    background-color: #ffffff;
    box-sizing: border-box !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease !important;
}
#admin-content button[onclick*="openSettingForm"]:hover,
#admin-content button[onclick*="openPrinterSettingsModal"]:hover,
#admin-content button[onclick*="openAdminTab('backup_sync')"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.07) !important;
    border-color: #cbd5e1 !important;
}
#admin-content button[onclick*="openSettingForm"]:active,
#admin-content button[onclick*="openPrinterSettingsModal"]:active,
#admin-content button[onclick*="openAdminTab('backup_sync')"]:active {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}
html.dark #admin-content button[onclick*="openSettingForm"],
html.dark #admin-content button[onclick*="openPrinterSettingsModal"],
html.dark #admin-content button[onclick*="openAdminTab('backup_sync')"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
    background-color: #1e293b;
}

#admin-content button[onclick*="openSettingForm"] .h-14,
#admin-content button[onclick*="openSettingForm"] .h-16,
#admin-content button[onclick*="openPrinterSettingsModal"] .h-14,
#admin-content button[onclick*="openPrinterSettingsModal"] .h-16,
#admin-content button[onclick*="openAdminTab('backup_sync')"] .h-14,
#admin-content button[onclick*="openAdminTab('backup_sync')"] .h-16 {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
}
html.dark #admin-content button[onclick*="openSettingForm"] .h-14,
html.dark #admin-content button[onclick*="openSettingForm"] .h-16,
html.dark #admin-content button[onclick*="openPrinterSettingsModal"] .h-14,
html.dark #admin-content button[onclick*="openPrinterSettingsModal"] .h-16,
html.dark #admin-content button[onclick*="openAdminTab('backup_sync')"] .h-14,
html.dark #admin-content button[onclick*="openAdminTab('backup_sync')"] .h-16 {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

#admin-content > div > .mb-5.flex.items-center.justify-between {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    box-sizing: border-box !important;
}
html.dark #admin-content > div > .mb-5.flex.items-center.justify-between {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

/* 4i. Universal CMS KPI Stat Cards */
#admin-product-stats .grid > div,
#admin-content .grid-cols-2.lg\:grid-cols-4 > div,
#admin-content .grid-cols-1.sm\:grid-cols-2.lg\:grid-cols-4 > div,
#admin-content .grid-cols-2.sm\:grid-cols-2.md\:grid-cols-4 > div,
#admin-content .grid-cols-2.md\:grid-cols-4 > div,
#admin-content .grid-cols-1.sm\:grid-cols-3 > div,
#admin-content .grid.grid-cols-2 > div.flex.flex-col.justify-between,
#admin-content .grid.grid-cols-4 > div.flex.flex-col.justify-between {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    background-color: #ffffff;
    box-sizing: border-box !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease !important;
}
#admin-product-stats .grid > div:hover,
#admin-content .grid-cols-2.lg\:grid-cols-4 > div:hover,
#admin-content .grid-cols-1.sm\:grid-cols-2.lg\:grid-cols-4 > div:hover,
#admin-content .grid-cols-2.sm\:grid-cols-2.md\:grid-cols-4 > div:hover,
#admin-content .grid-cols-2.md\:grid-cols-4 > div:hover,
#admin-content .grid-cols-1.sm\:grid-cols-3 > div:hover {
    transform: translateY(-1.5px);
    box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.07) !important;
}
html.dark #admin-product-stats .grid > div,
html.dark #admin-content .grid-cols-2.lg\:grid-cols-4 > div,
html.dark #admin-content .grid-cols-1.sm\:grid-cols-2.lg\:grid-cols-4 > div,
html.dark #admin-content .grid-cols-2.sm\:grid-cols-2.md\:grid-cols-4 > div,
html.dark #admin-content .grid-cols-2.md\:grid-cols-4 > div,
html.dark #admin-content .grid-cols-1.sm\:grid-cols-3 > div,
html.dark #admin-content .grid.grid-cols-2 > div.flex.flex-col.justify-between,
html.dark #admin-content .grid.grid-cols-4 > div.flex.flex-col.justify-between {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
    background-color: #1e293b;
}

#admin-product-stats .grid > div .w-9.h-9,
#admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-9.h-9,
#admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-8.h-8,
#admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-7.h-7,
#admin-content .grid-cols-1.sm\:grid-cols-3 > div .w-12.h-12 {
    border: 1px solid rgba(226, 232, 240, 0.8) !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    box-sizing: border-box !important;
}
html.dark #admin-product-stats .grid > div .w-9.h-9,
html.dark #admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-9.h-9,
html.dark #admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-8.h-8,
html.dark #admin-content .grid-cols-2.lg\:grid-cols-4 > div .w-7.h-7,
html.dark #admin-content .grid-cols-1.sm\:grid-cols-3 > div .w-12.h-12 {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* Admin Module Top Hero Banners */
#admin-content > div > .relative.overflow-hidden.p-5,
#admin-content > div > .relative.overflow-hidden.p-7,
#admin-content > div > .mb-5.p-4[class*="rounded-"],
#admin-content > div > .mb-5.p-5[class*="rounded-"],
#admin-content #subscription-bento-card,
#admin-content #subscription-bento-card > div {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    box-sizing: border-box !important;
}
html.dark #admin-content > div > .relative.overflow-hidden.p-5,
html.dark #admin-content > div > .relative.overflow-hidden.p-7,
html.dark #admin-content > div > .mb-5.p-4[class*="rounded-"],
html.dark #admin-content > div > .mb-5.p-5[class*="rounded-"],
html.dark #admin-content #subscription-bento-card,
html.dark #admin-content #subscription-bento-card > div {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

/* 4j. Admin Toolbar Action Buttons & Select Controls */
button[onclick*="openPriceListExportModal"],
button[onclick*="openAdminTab('stock_opname')"],
button[onclick*="oAAdd()"],
button[onclick*="autoGroupProductsByCategory"],
button[onclick*="toggleProductOrderMenu"],
button[onclick*="openSupplierFormModal"],
button[onclick*="openAdminTab('purchases')"],
#admin-content button[onclick*="hasDebt"],
#admin-content button[onclick*="filter"],
#admin-product-order-dropdown,
#admin-product-order-dropdown button {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    box-sizing: border-box !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
button[onclick*="openPriceListExportModal"]:active,
button[onclick*="openAdminTab('stock_opname')"]:active,
button[onclick*="oAAdd()"]:active,
button[onclick*="autoGroupProductsByCategory"]:active,
button[onclick*="toggleProductOrderMenu"]:active,
button[onclick*="openSupplierFormModal"]:active,
button[onclick*="openAdminTab('purchases')"]:active,
#admin-content button[onclick*="hasDebt"]:active,
#admin-content button[onclick*="filter"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark button[onclick*="openPriceListExportModal"],
html.dark button[onclick*="openAdminTab('stock_opname')"],
html.dark button[onclick*="oAAdd()"],
html.dark button[onclick*="autoGroupProductsByCategory"],
html.dark button[onclick*="toggleProductOrderMenu"],
html.dark button[onclick*="openSupplierFormModal"],
html.dark button[onclick*="openAdminTab('purchases')"],
html.dark #admin-content button[onclick*="hasDebt"],
html.dark #admin-content button[onclick*="filter"],
html.dark #admin-product-order-dropdown,
html.dark #admin-product-order-dropdown button {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* Product & Data Item Action Buttons (Row Actions) */
#admin-list-container button[onclick*="toggleProductStatus"],
#admin-list-container button[onclick*="openRestockModal"],
#admin-list-container button[onclick*="openQuickPriceModal"],
#admin-list-container button[onclick*="openProductBarcodeLabelModal"],
#admin-list-container button[onclick*="confirmExportProductToMaster"],
#admin-list-container button[onclick*="duplicateProduct"],
#admin-list-container button[onclick*="oAEd"],
#admin-list-container button[onclick*="oADel"],
#admin-list-container button[onclick*="openMemberModal"],
#admin-list-container button[onclick*="adminResetMemberPin"],
#admin-list-container .btn-native-action {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    box-sizing: border-box !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#admin-list-container button[onclick*="toggleProductStatus"]:active,
#admin-list-container button[onclick*="openRestockModal"]:active,
#admin-list-container button[onclick*="openQuickPriceModal"]:active,
#admin-list-container button[onclick*="openProductBarcodeLabelModal"]:active,
#admin-list-container button[onclick*="confirmExportProductToMaster"]:active,
#admin-list-container button[onclick*="duplicateProduct"]:active,
#admin-list-container button[onclick*="oAEd"]:active,
#admin-list-container button[onclick*="oADel"]:active,
#admin-list-container button[onclick*="openMemberModal"]:active,
#admin-list-container button[onclick*="adminResetMemberPin"]:active,
#admin-list-container .btn-native-action:active {
    transform: scale(0.95) !important;
    box-shadow: none !important;
}
html.dark #admin-list-container button[onclick*="toggleProductStatus"],
html.dark #admin-list-container button[onclick*="openRestockModal"],
html.dark #admin-list-container button[onclick*="openQuickPriceModal"],
html.dark #admin-list-container button[onclick*="openProductBarcodeLabelModal"],
html.dark #admin-list-container button[onclick*="confirmExportProductToMaster"],
html.dark #admin-list-container button[onclick*="duplicateProduct"],
html.dark #admin-list-container button[onclick*="oAEd"],
html.dark #admin-list-container button[onclick*="oADel"],
html.dark #admin-list-container button[onclick*="openMemberModal"],
html.dark #admin-list-container button[onclick*="adminResetMemberPin"],
html.dark #admin-list-container .btn-native-action {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 4k. Supplier Detail & Admin Entity Modals */
[id*="modal-"][id$="-box"],
[id^="modal-"][class*="max-w-"],
#modal-supplier-detail-box,
#modal-po-detail-box,
#modal-tempo-detail-box,
#modal-attendance-rekap-box {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25) !important;
    border-radius: 1.5rem !important;
    box-sizing: border-box !important;
}
html.dark [id*="modal-"][id$="-box"],
html.dark [id^="modal-"][class*="max-w-"],
html.dark #modal-supplier-detail-box,
html.dark #modal-po-detail-box,
html.dark #modal-tempo-detail-box,
html.dark #modal-attendance-rekap-box {
    border-color: #334155 !important;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6) !important;
}

#modal-supplier-detail-box .w-13.h-13,
#modal-supplier-detail-box .w-16.h-16,
#modal-supplier-detail-box .w-14.h-14 {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    box-sizing: border-box !important;
}
html.dark #modal-supplier-detail-box .w-13.h-13,
html.dark #modal-supplier-detail-box .w-16.h-16,
html.dark #modal-supplier-detail-box .w-14.h-14 {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
}

#modal-supplier-detail button[onclick*="switchSupplierDetailTab"] {
    border: 1px solid transparent !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
}
#modal-supplier-detail button[onclick*="switchSupplierDetailTab"].bg-white,
#modal-supplier-detail button[onclick*="switchSupplierDetailTab"].dark\:bg-slate-700 {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
}
html.dark #modal-supplier-detail button[onclick*="switchSupplierDetailTab"].bg-white,
html.dark #modal-supplier-detail button[onclick*="switchSupplierDetailTab"].dark\:bg-slate-700 {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
}

#modal-supplier-detail button[onclick*="closeSupplierDetailModal"],
#modal-supplier-detail button[onclick*="quickCreatePOForSupplier"],
#modal-supplier-detail button[onclick*="openAdminTab('products')"] {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    font-weight: 700 !important;
    transition: transform 0.12s ease, box-shadow 0.12s ease !important;
}
#modal-supplier-detail button[onclick*="closeSupplierDetailModal"]:active,
#modal-supplier-detail button[onclick*="quickCreatePOForSupplier"]:active,
#modal-supplier-detail button[onclick*="openAdminTab('products')"]:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
html.dark #modal-supplier-detail button[onclick*="closeSupplierDetailModal"],
html.dark #modal-supplier-detail button[onclick*="quickCreatePOForSupplier"],
html.dark #modal-supplier-detail button[onclick*="openAdminTab('products')"] {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

#modal-supplier-detail [class*="rounded-3xl"].bg-white,
#modal-supplier-detail [class*="rounded-3xl"].dark\:bg-slate-800\/90 {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
}
html.dark #modal-supplier-detail [class*="rounded-3xl"].bg-white,
html.dark #modal-supplier-detail [class*="rounded-3xl"].dark\:bg-slate-800\/90 {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

/* 5. Universal Clean Modals & Dialogs */
@media (min-width: 640px) {
    .modal-bottom-sheet,
    [id*="modal-"][id$="-box"],
    [id^="modal-"][id$="-box"],
    [id$="-modal-box"],
    [id$="-modal-content"],
    [id*="modal-"][class*="max-w-"],
    [id^="modal-"][class*="max-w-"],
    #pos-open-shift-box,
    #pos-cash-movement-box,
    #pos-shift-summary-box,
    #pos-close-shift-box,
    #pos-held-modal-box,
    #pos-held-list-modal > div,
    #pos-recall-confirm-modal > div,
    [id^="pos-"][id$="-box"],
    #custom-confirm-box,
    #exit-confirm-modal-box,
    #doc-preview-modal-box,
    #pos-login-modal-box,
    #pos-variant-sheet-box,
    .swal2-popup {
        border: 1px solid #e2e8f0 !important;
        box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25) !important;
        border-radius: 1.5rem !important;
        box-sizing: border-box !important;
    }
    html.dark .modal-bottom-sheet,
    html.dark [id*="modal-"][id$="-box"],
    html.dark [id^="modal-"][id$="-box"],
    html.dark [id$="-modal-box"],
    html.dark [id$="-modal-content"],
    html.dark [id*="modal-"][class*="max-w-"],
    html.dark [id^="modal-"][class*="max-w-"],
    html.dark #pos-open-shift-box,
    html.dark #pos-cash-movement-box,
    html.dark #pos-shift-summary-box,
    html.dark #pos-close-shift-box,
    html.dark #pos-held-modal-box,
    html.dark #pos-held-list-modal > div,
    html.dark #pos-recall-confirm-modal > div,
    html.dark [id^="pos-"][id$="-box"],
    html.dark #custom-confirm-box,
    html.dark #exit-confirm-modal-box,
    html.dark #doc-preview-modal-box,
    html.dark #pos-login-modal-box,
    html.dark #pos-variant-sheet-box,
    html.dark .swal2-popup {
        border-color: #334155 !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6) !important;
    }
}

@media (max-width: 639.98px) {
    .modal-bottom-sheet,
    [id*="modal-"][id$="-box"],
    [id^="modal-"][id$="-box"],
    [id$="-modal-box"],
    [id$="-modal-content"],
    #pos-login-modal-box,
    #pos-variant-sheet-box {
        border-top: 1px solid #e2e8f0 !important;
        border-left: 1px solid #e2e8f0 !important;
        border-right: 1px solid #e2e8f0 !important;
        border-bottom: none !important;
        box-shadow: 0 -10px 25px -5px rgba(15, 23, 42, 0.15) !important;
        box-sizing: border-box !important;
    }
    html.dark .modal-bottom-sheet,
    html.dark [id*="modal-"][id$="-box"],
    html.dark [id^="modal-"][id$="-box"],
    html.dark [id$="-modal-box"],
    html.dark [id$="-modal-content"],
    html.dark #pos-login-modal-box,
    html.dark #pos-variant-sheet-box {
        border-top-color: #334155 !important;
        border-left-color: #334155 !important;
        border-right-color: #334155 !important;
        box-shadow: 0 -10px 25px -5px rgba(0, 0, 0, 0.5) !important;
    }

    #custom-confirm-box,
    #exit-confirm-modal-box,
    #pos-open-shift-box,
    #pos-cash-movement-box,
    #pos-shift-summary-box,
    #pos-close-shift-box,
    #pos-held-modal-box,
    #pos-held-list-modal > div,
    #pos-recall-confirm-modal > div,
    [id^="pos-"][id$="-box"] {
        border: 1px solid #e2e8f0 !important;
        box-shadow: 0 20px 35px -8px rgba(15, 23, 42, 0.2) !important;
        border-radius: 1.5rem !important;
    }
    html.dark #custom-confirm-box,
    html.dark #exit-confirm-modal-box,
    html.dark #pos-open-shift-box,
    html.dark #pos-cash-movement-box,
    html.dark #pos-shift-summary-box,
    html.dark #pos-close-shift-box,
    html.dark #pos-held-modal-box,
    html.dark #pos-held-list-modal > div,
    html.dark #pos-recall-confirm-modal > div,
    html.dark [id^="pos-"][id$="-box"] {
        border-color: #334155 !important;
        box-shadow: 0 20px 35px -8px rgba(0, 0, 0, 0.5) !important;
    }
}

/* Modal Inner Section Dividers */
.modal-bottom-sheet > div:first-child [class*="border-b"],
[id*="modal-box"] [class*="border-b"]:first-of-type,
[id*="modal-content"] [class*="border-b"]:first-of-type,
[id^="pos-"][id$="-box"] [class*="border-b"]:first-of-type,
#pos-held-modal-box [class*="border-b"]:first-of-type {
    border-bottom: 1px solid #e2e8f0 !important;
}
html.dark .modal-bottom-sheet > div:first-child [class*="border-b"],
html.dark [id*="modal-box"] [class*="border-b"]:first-of-type,
html.dark [id*="modal-content"] [class*="border-b"]:first-of-type,
html.dark [id^="pos-"][id$="-box"] [class*="border-b"]:first-of-type,
html.dark #pos-held-modal-box [class*="border-b"]:first-of-type {
    border-bottom-color: #334155 !important;
}

.modal-bottom-sheet [class*="border-t"]:last-child,
[id*="modal-box"] [class*="border-t"]:last-child,
[id*="modal-content"] [class*="border-t"]:last-child,
[id^="pos-"][id$="-box"] [class*="border-t"]:last-child,
#pos-held-modal-box [class*="border-t"]:last-child {
    border-top: 1px solid #e2e8f0 !important;
}
html.dark .modal-bottom-sheet [class*="border-t"]:last-child,
html.dark [id*="modal-box"] [class*="border-t"]:last-child,
html.dark [id*="modal-content"] [class*="border-t"]:last-child,
html.dark [id^="pos-"][id$="-box"] [class*="border-t"]:last-child,
html.dark #pos-held-modal-box [class*="border-t"]:last-child {
    border-top-color: #334155 !important;
}

/* 6. Universal Clean Data Tables */
.admin-table-container,
.table-container {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.875rem !important;
    overflow-x: auto !important;
    box-sizing: border-box !important;
}
html.dark .admin-table-container,
html.dark .table-container {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
}

table thead th {
    border-bottom: 1px solid #e2e8f0 !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    color: #475569;
}
html.dark table thead th {
    border-bottom-color: #334155 !important;
    color: #94a3b8;
}

table tbody tr {
    border-bottom: 1px solid #f1f5f9;
}
html.dark table tbody tr {
    border-bottom-color: #1e293b;
}
table tbody tr:last-child {
    border-bottom: none !important;
}

/* 7. Universal Clean Navigation & Floating Elements */
#bottom-nav-bar {
    border-top: 1px solid #e2e8f0 !important;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03) !important;
}
html.dark #bottom-nav-bar {
    border-top-color: #334155 !important;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.35) !important;
}

#bnav-home .bnav-hero-button {
    border: 2px solid #ffffff !important;
    box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35) !important;
}
html.dark #bnav-home .bnav-hero-button {
    border-color: #1e293b !important;
    box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.45) !important;
}

.glass-header {
    border-bottom: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
}
html.dark .glass-header {
    border-bottom-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
}

#btn-floating-wa,
#btn-floating-action,
#btn-scroll-top {
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 8px 25px -4px rgba(0, 0, 0, 0.2) !important;
}

/* 8. Toast & Notifications */
#toast {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12) !important;
    border-radius: 0.875rem !important;
}
html.dark #toast {
    border-color: #334155 !important;
    box-shadow: 0 10px 25px -4px rgba(0, 0, 0, 0.5) !important;
}

/* 9. Elegant Clean Subtle Accent Gradients */
.neo-hazard-stripe {
    background: linear-gradient(135deg, #f59e0b, #f97316) !important;
}
.neo-hazard-stripe-subtle {
    background: linear-gradient(90deg, rgba(var(--color-primary-rgb), 0.35), rgba(var(--color-primary-rgb), 0.08)) !important;
}

/* ==========================================================================
   11. UNIVERSAL SHOPIFY POLARIS & CLEAN MINIMALIST INTERACTION ENGINE
   Standarisasi menyeluruh hingga detail terkecil di seluruh aplikasi:
   - Eliminasi mutlak hard offset shadows menjadi soft diffuse elevation
   - Garis batas halus 1px solid neutral (#e2e8f0 / dark: #334155)
   - Spring scaling halus pada sentuhan/klik (scale(0.97) - anti-fatigue)
   - Universal badge pill styling yang bersih & ramah di mata
   - Isolasi cetak thermal & preview dokumen A4 tetap 100% terlindungi
   ========================================================================== */

/* 11a. Netralisasi Universal Segala Tombol Aksi */
button:not(#thermal-receipt *):not(.receipt-content *):not(#doc-preview-modal *):not(.a4-sheet *):not(#receipt-paper-content):not(.cart-stepper-control button):not(.pos-stepper-control button):not(#modal-active-controls button):not(.swatch-circle):not(#bottom-nav-bar *):not(#admin-dashboard-cashflow-slot .bento-island-card button):not(#admin-product-stats button):not(button[class*="hover:underline"]):not(.footer-sub-btn):not(.btn-input-icon):not(button[onclick*="toggleStaffPassVisibility"]):not(button[onclick*="login-password"]):not(button[onclick*="pos-login-password"]),
[role="button"]:not(#thermal-receipt *):not(.receipt-content *):not(#doc-preview-modal *):not(.a4-sheet *):not(.swatch-circle):not(#bottom-nav-bar *):not(.btn-input-icon),
.neo-btn,
.btn-primary,
.btn-secondary,
.btn-native-action {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04) !important;
    transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease !important;
}
html.dark button:not(#thermal-receipt *):not(.receipt-content *):not(#doc-preview-modal *):not(.a4-sheet *):not(#receipt-paper-content):not(.cart-stepper-control button):not(.pos-stepper-control button):not(#modal-active-controls button):not(.swatch-circle):not(#bottom-nav-bar *):not(#admin-dashboard-cashflow-slot .bento-island-card button):not(#admin-product-stats button):not(button[class*="hover:underline"]):not(.footer-sub-btn):not(.btn-input-icon):not(button[onclick*="toggleStaffPassVisibility"]):not(button[onclick*="login-password"]):not(button[onclick*="pos-login-password"]),
html.dark [role="button"]:not(#thermal-receipt *):not(.receipt-content *):not(#doc-preview-modal *):not(.a4-sheet *):not(.swatch-circle):not(#bottom-nav-bar *):not(.btn-input-icon),
html.dark .neo-btn,
html.dark .btn-primary,
html.dark .btn-secondary,
html.dark .btn-native-action {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
}

/* Tombol Utama (Primary) Berlatar Brand Toko */
button.btn-primary,
.btn-primary,
button[style*="var(--color-primary)"],
.neo-btn[style*="var(--color-primary)"] {
    border: 1px solid transparent !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.28) !important;
}
button.btn-primary:hover,
.btn-primary:hover,
button[style*="var(--color-primary)"]:hover,
.neo-btn[style*="var(--color-primary)"]:hover {
    filter: brightness(1.06) !important;
    box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.38) !important;
}

/* 11b. Tombol Aksi Kompak / Ikon */
button.h-8:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
button.h-9:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
button.h-10:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
button[class*="px-3"][class*="py-1"]:not(#bottom-nav-bar *):not(.btn-input-icon),
button[class*="px-2"][class*="py-1"]:not(#bottom-nav-bar *):not(.btn-input-icon) {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
}
html.dark button.h-8:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark button.h-9:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark button.h-10:not(#bottom-nav-bar *):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
html.dark button[class*="px-3"][class*="py-1"]:not(#bottom-nav-bar *):not(.btn-input-icon),
html.dark button[class*="px-2"][class*="py-1"]:not(#bottom-nav-bar *):not(.btn-input-icon) {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 11c. Efek Tekan Lembut (Spring Scale Damping) */
button:active:not(:disabled):not(#thermal-receipt *):not(#doc-preview-modal *):not(.cart-stepper-control button):not(.pos-stepper-control button):not(#modal-active-controls button):not(.swatch-circle):not(#bottom-nav-bar *):not(button[class*="hover:underline"]):not(.btn-input-icon):not([onclick*="toggleStaffPassVisibility"]):not([onclick*="login-password"]):not([onclick*="pos-login-password"]),
[role="button"]:active:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *) {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}

/* 11d. Standarisasi Wadah Ikon (Icon Pods) Bersih & Ringan */
div[class*="w-8"][class*="h-8"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-9"][class*="h-9"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-10"][class*="h-10"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-11"][class*="h-11"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-12"][class*="h-12"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-13"][class*="h-13"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-14"][class*="h-14"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
div[class*="w-16"][class*="h-16"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *) {
    border: 1px solid rgba(226, 232, 240, 0.8) !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.75rem !important;
    box-sizing: border-box !important;
}
html.dark div[class*="w-8"][class*="h-8"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-9"][class*="h-9"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-10"][class*="h-10"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-11"][class*="h-11"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-12"][class*="h-12"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-13"][class*="h-13"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-14"][class*="h-14"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *),
html.dark div[class*="w-16"][class*="h-16"]:not(#thermal-receipt *):not(#doc-preview-modal *):not(.swatch-circle):not(#bottom-nav-bar *) {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* 11e. Pengecualian Khusus & Stepper Controls */
.flash-variant-badge,
.flash-variant-badge * {
    border: none !important;
    box-shadow: none !important;
}
.cart-stepper-control button,
.pos-stepper-control button,
#modal-active-controls button {
    border: none !important;
    box-shadow: none !important;
}

/* Bottom Navigation Bar Items: Clean Native App Dock */
#bottom-nav-bar button,
#bottom-nav-bar .bnav-item,
#bottom-nav-bar button.bnav-item,
#bottom-nav-bar .bnav-item:hover,
#bottom-nav-bar .bnav-item:active,
#bottom-nav-bar button.bnav-item:active {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    transform: none !important;
}

/* Cashflow Widget & KPI Inline Navigation Links */
#admin-dashboard-cashflow-slot .bento-island-card button,
#admin-dashboard-cashflow-slot .bento-island-card button:hover,
#admin-dashboard-cashflow-slot .bento-island-card button:active,
#admin-product-stats button,
#admin-product-stats button:hover,
#admin-product-stats button:active,
button[class*="hover:underline"] {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    transform: none !important;
}

/* Password Eye Toggle Buttons & Form Input Internal Action Buttons */
button.btn-input-icon,
.btn-input-icon,
.relative > button.btn-input-icon,
button[onclick*="toggleStaffPassVisibility"],
button[onclick*="toggleCashierPassVisibility"],
button[onclick*="login-password"],
button[onclick*="pos-login-password"] {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    min-height: unset !important;
    min-width: unset !important;
    height: auto !important;
    width: auto !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    outline: none !important;
}
button.btn-input-icon:hover,
.btn-input-icon:hover,
.relative > button.btn-input-icon:hover,
button[onclick*="toggleStaffPassVisibility"]:hover,
button[onclick*="toggleCashierPassVisibility"]:hover,
button[onclick*="login-password"]:hover,
button[onclick*="pos-login-password"]:hover {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
}
button.btn-input-icon:active,
.btn-input-icon:active,
.relative > button.btn-input-icon:active,
button[onclick*="toggleStaffPassVisibility"]:active,
button[onclick*="toggleCashierPassVisibility"]:active,
button[onclick*="login-password"]:active,
button[onclick*="pos-login-password"]:active {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    top: 50% !important;
    transform: translateY(-50%) scale(0.92) !important;
}

/* Form Input Login */
#login-username,
#login-password {
    background-color: #f8fafc !important;
    color: #0f172a !important;
    border: 1px solid #cbd5e1 !important;
}
html.dark #login-username,
html.dark #login-password {
    background-color: #1e293b !important;
    color: #f8fafc !important;
    border-color: #475569 !important;
}
#login-username:focus,
#login-password:focus {
    background-color: #ffffff !important;
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.15) !important;
    outline: none !important;
}
html.dark #login-username:focus,
html.dark #login-password:focus {
    background-color: #0f172a !important;
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.28) !important;
    outline: none !important;
}

/* Sub-footer Micro-Badges */
.footer-sub-btn {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.5rem !important;
    transform: none !important;
    min-height: unset !important;
}
html.dark .footer-sub-btn {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
}

/* Expense Source Selector Cards */
.expense-source-card {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 0.75rem !important;
    background-color: #ffffff;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
    box-sizing: border-box !important;
}
html.dark .expense-source-card {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}
.expense-source-card:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
.expense-source-card.is-source-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25) !important;
    background-color: rgba(var(--color-primary-rgb), 0.06) !important;
}
html.dark .expense-source-card.is-source-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35) !important;
    background-color: rgba(var(--color-primary-rgb), 0.15) !important;
}

/* Staff Role Selection Cards */
.staff-role-card {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    background-color: #ffffff;
    transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.15s ease !important;
    box-sizing: border-box !important;
}
html.dark .staff-role-card {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}
.staff-role-card:active {
    transform: scale(0.96) !important;
    box-shadow: none !important;
}
.staff-role-card.is-role-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25) !important;
    background-color: rgba(var(--color-primary-rgb), 0.06) !important;
}
html.dark .staff-role-card.is-role-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35) !important;
    background-color: rgba(var(--color-primary-rgb), 0.15) !important;
}

/* 11f. Standarisasi Modal Pengaturan Printer POS (#printer-settings-modal-box) & Driver Cards */
#printer-settings-modal-box {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25) !important;
    border-radius: 1.5rem !important;
}
html.dark #printer-settings-modal-box {
    border-color: #334155 !important;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6) !important;
}

.printer-type-card {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    background-color: #ffffff;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease !important;
    box-sizing: border-box !important;
}
html.dark .printer-type-card {
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) !important;
    background-color: #1e293b;
}
.printer-type-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.07) !important;
}
.printer-type-card:active {
    transform: scale(0.97) !important;
    box-shadow: none !important;
}
.printer-type-card.printer-card-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.25) !important;
    background-color: rgba(var(--color-primary-rgb), 0.06) !important;
}
html.dark .printer-type-card.printer-card-active {
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35) !important;
    background-color: rgba(var(--color-primary-rgb), 0.15) !important;
}

/* 11g. Standarisasi Segmented Tabs Bar Horisontal (Staf & Akses, Kasir, Laporan) */
.segmented-tabs-bar,
#cashier-admin-tabs-bar {
    overflow-x: auto !important;
    overflow-y: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    touch-action: pan-x !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.875rem !important;
    background-color: #f8fafc !important;
}
html.dark .segmented-tabs-bar,
html.dark #cashier-admin-tabs-bar {
    border-color: #334155 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;
    background-color: #0f172a !important;
}
.segmented-tabs-bar::-webkit-scrollbar,
#cashier-admin-tabs-bar::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
}

/* POS Quick Discount Chips */
.pos-discount-chip {
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
    border-radius: 0.625rem !important;
    font-weight: 700 !important;
    transition: all 0.15s ease;
}
.pos-discount-chip:active {
    transform: scale(0.95) !important;
    box-shadow: none !important;
}
.pos-discount-chip.active {
    background-color: var(--color-primary, #800020) !important;
    color: #ffffff !important;
    border-color: var(--color-primary, #800020) !important;
    box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.28) !important;
}

/* Isolasi Khusus Child Reward Card */
#reward-catalog-container .reward-card > div:not(.reward-thumb),
#reward-catalog-container .snap-start > div > div:not(.reward-thumb) {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
}

/* Tombol Tukar Hadiah Kompak */
#reward-catalog-container .reward-tukar-btn {
    min-height: 26px !important;
    height: 26px !important;
    padding: 0 10px !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    letter-spacing: 0.02em !important;
    line-height: 1 !important;
    border-radius: 0.5rem !important;
    border: 1px solid transparent !important;
    background: var(--color-primary) !important;
    color: #ffffff !important;
    box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25) !important;
    transition: transform 0.12s ease-out, box-shadow 0.12s ease-out !important;
}
#reward-catalog-container .reward-tukar-btn:hover {
    filter: brightness(1.08) !important;
    box-shadow: 0 3px 8px rgba(var(--color-primary-rgb), 0.35) !important;
}
#reward-catalog-container .reward-tukar-btn:active {
    transform: scale(0.94) !important;
    box-shadow: none !important;
}

/* Isolasi Menu Dropdown Ekspor Laporan */
#report-export-dropdown-menu button {
    border: none !important;
    box-shadow: none !important;
    min-height: auto !important;
    height: auto !important;
    border-radius: 0.625rem !important;
    padding: 0.5rem 0.75rem !important;
    font-size: 0.75rem !important;
    line-height: 1.25rem !important;
    font-weight: 600 !important;
    background-color: transparent !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    width: 100% !important;
    transition: background-color 0.15s ease, color 0.15s ease !important;
    transform: none !important;
}
#report-export-dropdown-menu button:hover {
    background-color: rgba(var(--color-primary-rgb, 128, 0, 32), 0.08) !important;
    color: var(--color-primary, #800020) !important;
    transform: none !important;
    box-shadow: none !important;
    border: none !important;
}
html.dark #report-export-dropdown-menu button {
    color: #e2e8f0 !important;
    border: none !important;
    box-shadow: none !important;
}
html.dark #report-export-dropdown-menu button:hover {
    background-color: rgba(255, 255, 255, 0.08) !important;
    color: #ffffff !important;
}
#report-export-dropdown-menu button:active {
    transform: scale(0.98) !important;
    box-shadow: none !important;
}

/* 12. Universal Normalizer: Netralisasi Otomatis Segala Inline Hard Shadows & Outlines */
[class*="shadow-["][class*="0f172a"],
[class*="shadow-["][class*="000000"] {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03) !important;
}
html.dark [class*="shadow-["][class*="0f172a"],
html.dark [class*="shadow-["][class*="000000"] {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) !important;
}

[class*="border-2 border-slate-900"],
[class*="border-2 border-slate-950"],
[class*="border-2 border-[#0f172a]"] {
    border-width: 1px !important;
    border-color: #e2e8f0 !important;
}
html.dark [class*="border-2 border-slate-900"],
html.dark [class*="border-2 border-slate-950"],
html.dark [class*="border-2 border-[#0f172a]"] {
    border-color: #334155 !important;
}

/* 10. Thermal Print & A4 Document Shadow Isolation Engine (Absolute Zero Leak Guarantee) */
@media print {
    .neo-box,
    .neo-card,
    .neo-btn,
    .neo-badge,
    .neo-input,
    .catalog-product-card,
    .bento-island-card,
    .card-modern,
    .card-native,
    .product-admin-card,
    .category-admin-card,
    .storefront-card,
    .btn-catalog-action,
    .btn-primary,
    .utp-btn-primary,
    .btn-solid,
    .btn-secondary,
    .btn-native-action,
    .admin-input,
    .table-container,
    .footer-bento-hub,
    .footer-bento-hub *,
    #dynamic-categories-container *,
    #dynamic-brands-container *,
    #admin-dashboard-view *,
    #admin-dashboard-cashflow-slot *,
    #bottom-nav-bar,
    .glass-header,
    #product-modal,
    #product-modal *,
    #category-modal,
    #category-modal *,
    #brand-modal,
    #brand-modal *,
    #shopping-guide-modal,
    #shopping-guide-modal *,
    #admin-content,
    #admin-content *,
    #modal-supplier-detail,
    #modal-supplier-detail *,
    [id*="modal-"],
    [id*="modal-"] *,
    #thermal-receipt,
    #thermal-receipt *,
    .receipt-content,
    .receipt-content *,
    #doc-preview-modal,
    #doc-preview-modal *,
    .a4-sheet,
    .a4-sheet *,
    .print-area,
    .print-area * {
        box-shadow: none !important;
        text-shadow: none !important;
        filter: none !important;
    }
}
`;

css = css.replace(oldMasterSectionRegex, newMasterCleanSystem);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('✅ src/style.css successfully upgraded to Shopify Polaris Clean Minimalist!');


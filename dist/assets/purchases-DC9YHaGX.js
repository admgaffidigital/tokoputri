import{a as u,e as d,b as F,f as x,i as p,a4 as Z,k as y,H as Y,l as G,q as Q,n as S,o as V,v as N,a9 as q,a5 as te}from"./module-print-D7ZGPnsx.js";import{r as ae,k as H}from"./module-pos-YAlbR-NC.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-CsDpojBF.js";import"./module-faq-DvQovEFv.js";const K=()=>{if(["modal-po-form","modal-po-detail","modal-po-payment","modal-po-product-picker"].forEach(t=>{const o=document.querySelector(`#admin-content #${t}`);o&&o.remove()}),!d("modal-po-form")){const t=document.createElement("div");t.id="modal-po-form",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=o=>{o.target===t&&window.closePOFormModal?.()},t.innerHTML=`
            <div id="modal-po-form-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[92dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(t)}if(!d("modal-po-detail")){const t=document.createElement("div");t.id="modal-po-detail",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=o=>{o.target===t&&window.closePODetailModal?.()},t.innerHTML=`
            <div id="modal-po-detail-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!d("modal-po-payment")){const t=document.createElement("div");t.id="modal-po-payment",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=o=>{o.target===t&&window.closePurchasePaymentModal?.()},t.innerHTML=`
            <div id="modal-po-payment-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!d("modal-po-product-picker")){const t=document.createElement("div");t.id="modal-po-product-picker",t.className="fixed inset-0 z-[160] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=o=>{o.target===t&&window.closePOProductPicker?.()},t.innerHTML=`
            <div id="modal-po-product-picker-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-product-picker-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(t)}};let w="all",U="",f=[],R=null,D="",A=!0,B="all";const I=t=>{const o=parseFloat(t)||0;return parseFloat(o.toFixed(3)).toString()},M=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return t}},re=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return t}},X=()=>{if(!Array.isArray(u.purchases)||u.purchases.length===0||!Array.isArray(u.suppliers)||u.suppliers.length===0)try{const i=localStorage.getItem("freshmart_cms_private");if(i){const n=JSON.parse(i);(!Array.isArray(u.purchases)||u.purchases.length===0)&&Array.isArray(n.purchases)&&n.purchases.length>0&&(u.purchases=n.purchases),(!Array.isArray(u.suppliers)||u.suppliers.length===0)&&Array.isArray(n.suppliers)&&n.suppliers.length>0&&(u.suppliers=n.suppliers)}}catch{}const t=u.purchases||[],o=new Date,e=o.getMonth(),a=o.getFullYear();let r=0,s=0,l=0,b=0;return t.forEach(i=>{const n=new Date(i.date||i.createdAt||0),c=parseFloat(i.total)||0,g=parseFloat(i.amountPaid)||0,P=c-g;n.getMonth()===e&&n.getFullYear()===a&&i.status!=="cancelled"&&(r+=c),i.paymentType==="tempo"&&i.paymentStatus!=="lunas"&&i.status!=="cancelled"&&P>0&&(s+=P),i.status==="ordered"?l++:(i.status==="completed"||i.status==="received"&&i.paymentStatus==="lunas")&&b++}),{monthPurchasesTotal:r,totalUnpaidDebt:s,pendingArrivalCount:l,completedCount:b}},E=()=>{if(K(),!d("admin-content"))return;if(!Array.isArray(u.purchases)||u.purchases.length===0)try{const s=localStorage.getItem("freshmart_cms_private");if(s){const l=JSON.parse(s);Array.isArray(l.purchases)&&l.purchases.length>0&&(u.purchases=l.purchases)}}catch{}const o=X(),e=u.purchases||[];e.sort((s,l)=>new Date(l.date||l.createdAt||0)-new Date(s.date||s.createdAt||0));const a=U.toLowerCase().trim();let r=e.filter(s=>{if(!(!a||(s.poNumber||"").toLowerCase().includes(a)||(s.supplierName||"").toLowerCase().includes(a)||(s.notes||"").toLowerCase().includes(a)||(s.items||[]).some(b=>(b.name||"").toLowerCase().includes(a))))return!1;if(w==="ordered")return s.status==="ordered";if(w==="received")return s.status==="received";if(w==="unpaid"){const b=(parseFloat(s.total)||0)-(parseFloat(s.amountPaid)||0);return s.paymentType==="tempo"&&b>0&&s.paymentStatus!=="lunas"}else if(w==="completed")return s.status==="completed"||s.status==="received"&&s.paymentStatus==="lunas";return!0});F("admin-content",`
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 0. HERO BANNER PENGADAAN & ORDER KULAKAN (PO) — THEME HARMONIZED -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5 max-w-xl">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-cart-flatbed"></i> Pengadaan &amp; Purchase Order (PO)
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Order Kulakan &amp; Restock Barang Toko
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Kelola pesanan barang kulakan ke supplier rekanan, otomatisasi penerimaan stok masuk gudang, dan pantau jatuh tempo hutang usaha.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" class="px-3.5 sm:px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                            <span>Data Supplier</span>
                        </button>
                        <button onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('debts'), 100);}" class="px-3.5 sm:px-4 py-3 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-bold text-xs shadow-2xs hover:bg-amber-100 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-chart-pie text-amber-600 dark:text-amber-400"></i>
                            <span>Laporan Utang</span>
                        </button>
                        <button onclick="window.openCreatePOModal()" class="px-4 sm:px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Buat Order PO</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 1. SUMMARY METRICS CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kulakan Bulan Ini</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${x(o.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('debts'), 100);}" title="Buka analisis laporan hutang supplier" class="w-7 h-7 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs cursor-pointer transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${x(o.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black tracking-tight" style="color:var(--color-primary)">${o.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-500">PO Selesai / Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${o.completedCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Stok Masuk &amp; Lunas</p>
                </div>
            </div>

            <!-- 2. TOOLBAR: PENCARIAN & TOMBOL AKSI -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div class="relative flex-1 max-w-xl">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input 
                        type="text" 
                        id="purchase-search-input" 
                        value="${p(U)}" 
                        placeholder="Cari no PO, nama supplier, atau nama barang..." 
                        oninput="window.handlePurchaseSearch(this.value)"
                        class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                    >
                </div>

                <div class="flex items-center gap-2">
                    <button 
                        onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" 
                        class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200/90 dark:border-slate-700/80 transition-all active:scale-95 shadow-2xs cursor-pointer hover:bg-white dark:hover:bg-slate-700"
                        title="Buka Master Database Rekanan &amp; Asal-Usul Barang"
                    >
                        <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                        <span>Data Supplier</span>
                    </button>

                    <button 
                        onclick="window.openCreatePOModal()" 
                        class="px-4 sm:px-5 py-3 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow transition-all active:scale-95 shrink-0 cursor-pointer"
                        style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                    >
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                        <span>Buat Order PO</span>
                    </button>
                </div>
            </div>

            <!-- 3. TAB FILTER STATUS PO -->
            <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 text-xs font-bold">
                <button 
                    onclick="window.setPurchaseFilter('all')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer ${w==="all"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    Semua PO (${e.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="ordered"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="ordered"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan (${e.filter(s=>s.status==="ordered").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="received"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="received"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${e.filter(s=>s.status==="received").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="unpaid"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="unpaid"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Tempo
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="completed"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="completed"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-4">
                ${r.length===0?`
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Order Pembelian (PO)</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Buat order pembelian kulakan ke supplier untuk mencatat barang masuk, memperbarui stok toko otomatis, dan melacak jatuh tempo hutang.</p>
                        <button onclick="window.openCreatePOModal()" class="mt-4 px-6 py-3 rounded-2xl text-white font-bold text-xs shadow-glow cursor-pointer transition-all active:scale-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-cart-plus mr-1.5"></i> Buat Order PO Pertama
                        </button>
                    </div>
                `:r.map(s=>ee(s)).join("")}
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `)},ee=t=>{const o=parseFloat(t.total)||0,e=parseFloat(t.amountPaid)||0,a=Math.max(0,o-e);let r="";t.status==="ordered"?r='<span class="px-3 py-1 rounded-full text-[11px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-clock mr-1.5"></i>Dipesan</span>':t.status==="received"?r='<span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-boxes-stacked mr-1.5"></i>Barang Diterima</span>':t.status==="completed"?r='<span class="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-2xs"><i class="fa-solid fa-check-double mr-1.5"></i>Selesai &amp; Lunas</span>':t.status==="cancelled"&&(r='<span class="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[11px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1.5"></i>Dibatalkan</span>');let s="";t.paymentType==="cash"?s='<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Tunai / Cash</span>':t.paymentType==="konsinyasi"?s='<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Konsinyasi</span>':t.paymentStatus==="lunas"||a<=0?s='<span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>':s=`<span class="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${x(a)}</span>`;const l=(t.items||[]).length,b=t.supplierPhone?Z(t.supplierPhone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-6 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/50 transition-all rounded-3xl shadow-2xs group space-y-4">
            <!-- 1. HEADER KARTU: NO PO, STATUS, TANGGAL & SUPPLIER -->
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 font-black shadow-xs transition-transform group-hover:scale-105" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                        <i class="fa-solid ${t.status==="received"||t.status==="completed"?"fa-boxes-stacked":"fa-cart-flatbed"}"></i>
                    </div>

                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${p(t.poNumber||t.id)}</h4>
                            ${r}
                            ${s}
                        </div>

                        <div class="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i> ${p(t.supplierName||"Supplier Rekanan")}
                            </span>
                            <span>•</span>
                            <span class="flex items-center gap-1">
                                <i class="fa-regular fa-calendar text-slate-400"></i> ${M(t.date||t.createdAt)}
                            </span>
                            <span>•</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${l} Macam Barang</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. KOTAK INFORMASI BARANG & FINANSIAL -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                <!-- Rincian Singkat Barang (Col 7) -->
                <div class="md:col-span-7 space-y-1.5 min-w-0">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400">Cuplikan Barang Dipesan:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${(t.items||[]).slice(0,4).map(i=>`
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 text-slate-700 dark:text-slate-200">
                                <span>${p(i.name)}</span>
                                ${i.variantName?`<span class="opacity-75 font-normal text-[10px]">[${p(i.variantName)}]</span>`:""}
                                <span class="px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-700 text-[10px] font-black" style="color:var(--color-primary)">${I(i.qty)} ${p(i.unit||"pcs")}</span>
                            </span>
                        `).join("")}
                        ${l>4?`
                            <span class="inline-flex items-center px-2 py-1 rounded-xl text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800">
                                +${l-4} barang lainnya
                            </span>
                        `:""}
                    </div>

                    ${t.notes?`
                        <p class="text-xs text-slate-500 dark:text-slate-400 italic line-clamp-1 pt-1">
                            <i class="fa-regular fa-note-sticky mr-1 text-slate-400"></i>"${p(t.notes)}"
                        </p>
                    `:""}
                </div>

                <!-- Total Tagihan & Sisa Tempo (Col 5) -->
                <div class="md:col-span-5 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 pt-2.5 md:pt-0 border-slate-200/80 dark:border-slate-700/80">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Nilai Kulakan</span>
                    <span class="text-lg sm:text-xl font-black tracking-tight" style="color:var(--color-primary)">${x(o)}</span>
                    
                    ${t.paymentType==="tempo"?`
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs text-slate-400">Sisa Hutang:</span>
                            <span class="text-xs font-black ${a>0?"text-amber-500":"text-emerald-500"}">
                                ${a>0?x(a):"Lunas"}
                            </span>
                            ${t.tempoDueDate&&a>0?`
                                <span class="text-[10px] px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-800">
                                    Tempo: ${M(t.tempoDueDate)}
                                </span>
                            `:""}
                        </div>
                    `:`
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            Dibayar: <b class="text-emerald-600 dark:text-emerald-400">${x(e)}</b>
                        </span>
                    `}
                </div>
            </div>

            <!-- 3. ACTION BAR ERGONOMIS: TOUCH-FRIENDLY & ANTI-SESAK -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <!-- Aksi Utama Berukuran Lega (Mobile First) -->
                <div class="flex items-center gap-2 flex-1">
                    ${t.status==="ordered"?`
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.receiveAndRestockPO('${t.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                            style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);"
                            title="Barang Telah Tiba: Tambah Stok ke Gudang &amp; Etalase Otomatis"
                        >
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Terima Barang &amp; Restock</span>
                        </button>
                    `:t.paymentType==="tempo"&&a>0?`
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.openPurchasePaymentModal('${t.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                            style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);"
                            title="Catat Pembayaran Cicilan Hutang Tempo"
                        >
                            <i class="fa-solid fa-money-bill-wave text-xs"></i>
                            <span>Bayar Hutang Supplier</span>
                        </button>
                    `:`
                        <button 
                            type="button"
                            onclick="window.openPurchaseDetailModal('${t.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border cursor-pointer"
                            style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"
                        >
                            <i class="fa-solid fa-receipt text-xs"></i>
                            <span>Rincian Nota PO</span>
                        </button>
                    `}

                    <button 
                        type="button"
                        onclick="window.openPurchaseDetailModal('${t.id}')" 
                        class="h-11 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${t.status!=="ordered"&&!(t.paymentType==="tempo"&&a>0)?"hidden":""}"
                        title="Buka Rincian Nota &amp; Histori Pembayaran"
                    >
                        <span>Rincian</span>
                    </button>
                </div>

                <!-- Aksi Sekunder: Touch-Targets Lega 44px untuk Jempol HP -->
                <div class="${b?"grid grid-cols-3":"grid grid-cols-2"} gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-2 justify-end shrink-0">
                    ${b?`
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.sendPOToSupplierWA('${t.id}')" 
                            class="h-11 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                            title="Kirim Surat Pesanan PO ke WhatsApp Sales"
                            aria-label="WhatsApp Sales"
                        >
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span class="sm:hidden">WA Sales</span>
                        </button>
                    `:""}

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.printPurchaseOrder('${t.id}')" 
                        class="h-11 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                        title="Cetak Surat Pesanan (Print / PDF)"
                        aria-label="Cetak Surat Pesanan"
                    >
                        <i class="fa-solid fa-print text-sm"></i>
                        <span class="sm:hidden">Cetak</span>
                    </button>

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.deletePurchaseOrder('${t.id}')" 
                        class="h-11 px-3 rounded-2xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                        title="Hapus Order PO"
                        aria-label="Hapus Order PO"
                    >
                        <i class="fa-solid fa-trash-can text-sm"></i>
                        <span class="sm:hidden">Hapus</span>
                    </button>
                </div>
            </div>
        </div>
    `},se=()=>{const t=d("purchase-cards-list");if(!t){E();return}let e=u.purchases||[];w!=="all"&&(e=e.filter(r=>r.status===w));const a=(U||"").toLowerCase().trim();a&&(e=e.filter(r=>{const s=(r.poNumber||"").toLowerCase().includes(a),l=(r.supplierName||"").toLowerCase().includes(a),b=Array.isArray(r.items)&&r.items.some(i=>(i.name||"").toLowerCase().includes(a));return s||l||b})),t.innerHTML=e.length===0?`
        <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                <i class="fa-solid fa-cart-flatbed"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Tidak ada pesanan pembelian yang cocok</p>
            <p class="text-xs text-slate-400 mt-1 max-w-sm">Coba kata kunci pencarian lain atau kosongkan filter pencarian.</p>
        </div>
    `:e.map(r=>ee(r)).join("")};window.handlePurchaseSearch=t=>{U=t||"",se()};window.setPurchaseFilter=t=>{w=t,E()};window.receiveAndRestockPO=t=>{const e=(u.purchases||[]).find(r=>String(r.id)===String(t));if(!e)return y("Data PO tidak ditemukan!");if(e.stockRestocked)return y("Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.");const a=(e.items||[]).map(r=>`• <b>${p(r.name)}${r.variantName?` [${p(r.variantName)}]`:""}</b>: +${I(r.qty)} ${p(r.unit||"pcs")} (Modal HPP: ${x(r.unitPrice)})`).join("<br>");Y("Terima Barang & Restock Otomatis",`Konfirmasi barang kulakan dari <b>${p(e.supplierName)}</b> (${e.poNumber}) telah tiba di toko / gudang?<br><br>
        <div class="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-left text-xs space-y-1">
            <p class="font-bold text-teal-800 dark:text-teal-300"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok produk berikut akan otomatis bertambah:</p>
            <div class="text-slate-700 dark:text-slate-300 mt-1">${a}</div>
        </div>
        <div class="mt-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-left">
            <p class="text-xs font-black text-slate-700 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-location-dot text-[var(--color-primary)]"></i>
                <span>Tujuan Penyimpanan Barang:</span>
            </p>
            <div class="grid grid-cols-2 gap-2 text-xs">
                <label class="flex items-center gap-2 p-2.5 rounded-xl border border-teal-500 bg-teal-50/70 dark:bg-teal-950/40 cursor-pointer font-bold text-teal-800 dark:text-teal-200">
                    <input type="radio" name="po_target_location" value="store" checked class="accent-teal-600">
                    <span class="inline-flex items-center gap-1.5"><i class="fa-solid fa-store text-teal-600"></i> Rak Toko (Display)</span>
                </label>
                <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer font-bold text-slate-700 dark:text-slate-300">
                    <input type="radio" name="po_target_location" value="warehouse" class="accent-amber-500">
                    <span class="inline-flex items-center gap-1.5"><i class="fa-solid fa-warehouse text-amber-500"></i> Gudang Cadangan</span>
                </label>
            </div>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,async()=>{const r=document.querySelector('input[name="po_target_location"]:checked')?.value||"store";G(r==="warehouse"?"Menambahkan Stok ke Gudang Cadangan...":"Menambahkan Stok ke Rak Toko...");try{let s=!1;const l=u.products||[];(e.items||[]).forEach(n=>{if(!n.productId)return;const c=l.find(g=>String(g.id)===String(n.productId));if(c){const g=parseFloat(n.qty)||0,P=parseFloat(n.unitPrice)||0;if(ae(c,{poId:e.id,poNumber:e.poNumber,supplierId:e.supplierId,supplierName:e.supplierName,qty:g,unitPrice:P,variantName:n.variantName||"",receivedAt:e.receivedAt||new Date().toISOString(),targetLocation:r}),n.variantName&&Array.isArray(c.variants)&&c.variants.length>0){const h=c.variants.find(m=>m.name===n.variantName);h&&(h.isActive===!1||h.isActive==="false")&&(h.isActive=!0)}(c.isActive===!1||c.isActive==="false")&&(c.isActive=!0),s=!0}}),e.status="received",e.stockRestocked=!0,e.receivedAt=new Date().toISOString();const b=parseFloat(e.total)||0;if((parseFloat(e.amountPaid)||0)>=b&&(e.status="completed",e.paymentStatus="lunas"),s){const n=Q.batch(),c=[],g=new Set;(e.items||[]).forEach(P=>{if(!P.productId)return;const h=String(P.productId);if(g.has(h))return;g.add(h);const m=(u.products||[]).find(v=>String(v.id)===h);if(m){const v=Q.collection("freshmart").doc("cms_data").collection("products").doc(m.id.toString());n.set(v,m),c.push(m.id.toString())}}),await n.commit(),await H(["purchases"],{updateType:"restock_received",updatedProductIds:c})}else await H(["purchases"]);try{localStorage.setItem("freshmart_products",JSON.stringify(u.products))}catch{}S(),y("Barang berhasil diterima & stok toko bertambah!"),E()}catch(s){S(),console.error("Gagal restock produk:",s),y("Gagal memproses restock: "+s.message)}},"Ya, Terima & Restock")};window.openCreatePOModal=(t=null,o=null)=>{K();const e=!!o,a=u.purchases||[],r=u.suppliers||[];if(r.length===0){Y("Belum Ada Rekanan","Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.",()=>{window.openAdminTab&&(window.openAdminTab("suppliers"),setTimeout(()=>{window.openSupplierFormModal?.()},200))},"Tambah Supplier");return}let s={};if(e)s=a.find(i=>String(i.id)===String(o))||{},f=JSON.parse(JSON.stringify(s.items||[]));else{const i=new Date().toISOString().split("T")[0],n=i.replace(/-/g,""),c=Math.floor(100+Math.random()*900);s={poNumber:`PO-${n}-${c}`,date:i,supplierId:t||(r[0]?r[0].id:""),paymentType:"tempo",tempoDays:14,items:[],discount:0,shippingFee:0,amountPaid:0,notes:""},f=[]}oe(s,e);const l=d("modal-po-form"),b=d("modal-po-form-box");l&&(l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchaseForm"),V(l,b),requestAnimationFrame(()=>{const i=d("po-form-scroll-container");i&&(i.scrollTop=0)}))};const oe=(t,o)=>{if(!d("modal-po-form-content"))return;const a=u.suppliers||[];u.products,F("modal-po-form-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${o?"Edit Order Pembelian (PO)":"Buat Order Pembelian Baru (Kulakan)"}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-500 dark:text-slate-400 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-95">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${o?t.id:""}')" class="flex-1 flex flex-col overflow-hidden">
            <div id="po-form-scroll-container" class="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 overflow-y-auto custom-scrollbar">
            
            <!-- 1. IDENTITAS HEADER PO -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3.5">
                <span class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-file-lines text-[var(--color-primary)] mr-1"></i> Data Utama Order Kulakan
                </span>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Pilih Supplier Rekanan *</label>
                        <select id="pof-supplierId" required class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all cursor-pointer" onchange="window.handlePOSupplierChange(this.value)">
                            ${a.map(r=>`
                                <option value="${r.id}" ${String(r.id)===String(t.supplierId)?"selected":""} class="font-bold">
                                    ${p(r.name)}${r.code?` (${p(r.code)})`:""}
                                </option>
                            `).join("")}
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Purchase Order *</label>
                        <input type="text" id="pof-poNumber" required value="${p(t.poNumber||"")}" placeholder="PO-202609-001" class="w-full text-xs font-mono font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Tanggal Order *</label>
                        <input type="date" id="pof-date" required value="${p(t.date||new Date().toISOString().split("T")[0])}" class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>
                </div>
            </div>

            <!-- 2. PEMILIHAN TERMIN PEMBAYARAN (NATIVE SEGMENTED PILLS) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3.5">
                <div class="flex items-center justify-between">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        <i class="fa-solid fa-wallet text-[var(--color-primary)] mr-1"></i> Termin &amp; Skema Pembayaran
                    </span>
                    <span class="text-[10px] font-bold text-slate-400" id="pof-payment-badge-desc">
                        ${t.paymentType==="cash"?"Bayar Penuh Saat Kirim":t.paymentType==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"}
                    </span>
                </div>

                <!-- Hidden native input agar kompatibel dengan form submit -->
                <input type="hidden" id="pof-paymentType" value="${t.paymentType||"tempo"}">

                <!-- Segmented Control Touch Pills -->
                <div class="flex items-center gap-2 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl">
                    <button 
                        type="button" 
                        id="pof-type-btn-cash" 
                        onclick="window.setPOPaymentType('cash')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${t.paymentType==="cash"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${t.paymentType==="cash"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-money-bill-wave text-xs"></i>
                        <span>Tunai / Cash</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-tempo" 
                        onclick="window.setPOPaymentType('tempo')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${!t.paymentType||t.paymentType==="tempo"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${!t.paymentType||t.paymentType==="tempo"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-clock text-xs"></i>
                        <span>Tempo (Hutang)</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-konsinyasi" 
                        onclick="window.setPOPaymentType('konsinyasi')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${t.paymentType==="konsinyasi"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${t.paymentType==="konsinyasi"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-handshake text-xs"></i>
                        <span>Konsinyasi</span>
                    </button>
                </div>

                <!-- Opsi Tambahan untuk Tempo -->
                <div id="pof-tempo-options-box" class="${!t.paymentType||t.paymentType==="tempo"?"space-y-3 pt-1":"hidden"}">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-[9px] font-black uppercase text-slate-400 mr-1">Preset Durasi:</span>
                        ${[7,14,30,45,60].map(r=>`
                            <button 
                                type="button" 
                                id="pof-tempo-chip-${r}" 
                                onclick="window.setPOTempoPresetDays(${r})" 
                                class="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all active:scale-95 cursor-pointer ${(t.tempoDays||14)===r?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                                style="${(t.tempoDays||14)===r?"background: var(--color-primary);":""}"
                            >
                                ${r} Hari
                            </button>
                        `).join("")}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Durasi Kustom (Hari)</label>
                            <input 
                                type="number" 
                                id="pof-tempoDays" 
                                min="1" 
                                max="365" 
                                value="${t.tempoDays||14}" 
                                placeholder="14" 
                                class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold focus:border-[var(--color-primary)] focus:outline-none" 
                                oninput="window.recalcPOTempoDueDate()"
                            >
                        </div>

                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Estimasi Tanggal Jatuh Tempo</label>
                            <div class="relative">
                                <i class="fa-regular fa-calendar-check absolute left-3 top-1/2 -translate-y-1/2 text-sm" style="color:var(--color-primary)"></i>
                                <input 
                                    type="text" 
                                    id="pof-tempoDueDate" 
                                    readonly 
                                    class="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. ITEM BUILDER (DAFTAR BARANG YANG DIPESAN) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-black text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i>
                            <span>Daftar Barang yang Dipesan</span>
                        </h4>
                        <p class="text-[10px] text-slate-400">Pilih dari katalog produk atau masukkan kuantitas dan harga beli modal baru</p>
                    </div>
                    <button 
                        type="button" 
                        onclick="window.openPOProductPicker(null)" 
                        class="px-3.5 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
                        style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.25);"
                    >
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                        <span>+ Tambah Barang</span>
                    </button>
                </div>

                <div id="po-items-table-container">
                    <!-- Item PO di-render oleh renderPOItemsTable() dalam format Native App Cards -->
                </div>
            </div>

            <!-- 4. RINGKASAN BIAYA & CATATAN PENGIRIMAN -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                            <i class="fa-solid fa-note-sticky text-[var(--color-primary)] mr-1"></i> Catatan Tambahan / Nomor Surat Jalan
                        </label>
                        <textarea 
                            id="pof-notes" 
                            rows="4" 
                            placeholder="Catatan pengiriman, armada truk, nomor invoice supplier..." 
                            class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs resize-none focus:border-[var(--color-primary)] focus:outline-none"
                        >${p(t.notes||"")}</textarea>
                    </div>

                    <div class="space-y-2.5 text-xs bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-500 font-medium">Subtotal Barang:</span>
                            <span class="font-bold text-slate-800 dark:text-white" id="pof-calc-subtotal">Rp 0</span>
                        </div>

                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500 font-medium">Diskon Potongan Nota:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-discount" 
                                    min="0" 
                                    value="${t.discount||0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-[var(--color-primary)] focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500 font-medium">Ongkos Kirim / Ekspedisi:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-shippingFee" 
                                    min="0" 
                                    value="${t.shippingFee||0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-[var(--color-primary)] focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm sm:text-base font-black">
                            <span class="text-slate-800 dark:text-white">Total Tagihan PO:</span>
                            <span class="text-lg font-black" style="color:var(--color-primary)" id="pof-calc-grandtotal">Rp 0</span>
                        </div>

                        <div class="flex items-center justify-between gap-3 pt-1">
                            <span class="text-slate-500 font-bold" id="pof-dp-label">Pembayaran Awal / DP:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-emerald-500">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-amountPaid" 
                                    min="0" 
                                    value="${t.amountPaid||0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-black text-right bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-lg focus:border-emerald-500 focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700">
                            <span class="text-amber-500">Sisa Hutang Tempo:</span>
                            <span class="text-amber-600 dark:text-amber-400 font-black text-sm" id="pof-calc-balance">Rp 0</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <!-- TOMBOL SIMPAN STICKY FOOTER (NATIVE MOBILE TOUCH ACTION) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-white dark:bg-slate-900 sticky bottom-0 z-20 shrink-0" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button 
                    type="button" 
                    onclick="window.closePOFormModal()" 
                    class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                >
                    Batal
                </button>
                <button 
                    type="submit" 
                    class="flex-1 sm:flex-initial h-12 px-8 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                >
                    <i class="fa-solid fa-floppy-disk text-sm"></i>
                    <span>Simpan Order PO</span>
                </button>
            </div>
        </form>
    `),j(),window.recalcPOTempoDueDate(),window.recalcPOTotals()};window.closePOFormModal=(t=!1)=>{const o=d("modal-po-form"),e=d("modal-po-form-box");o&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchaseForm",!1,()=>N(o,e)):N(o,e))};window.closeCreatePOModal=window.closePOFormModal;window.setPOPaymentType=t=>{const o=d("pof-paymentType");o&&(o.value=t),["cash","tempo","konsinyasi"].forEach(r=>{const s=d(`pof-type-btn-${r}`);s&&(r===t?(s.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-white shadow-sm",s.style.background="var(--color-primary)",s.style.boxShadow="0 2px 8px rgba(var(--color-primary-rgb), 0.3)"):(s.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",s.style.background="",s.style.boxShadow=""))});const e=d("pof-tempo-options-box"),a=d("pof-payment-badge-desc");e&&(t==="tempo"?e.classList.remove("hidden"):e.classList.add("hidden")),a&&(a.textContent=t==="cash"?"Bayar Penuh Saat Kirim":t==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"),window.handlePOPaymentTypeChange(t)};window.setPOTempoPresetDays=t=>{const o=d("pof-tempoDays");o&&(o.value=t,window.recalcPOTempoDueDate()),[7,14,30,45,60].forEach(e=>{const a=d(`pof-tempo-chip-${e}`);a&&(e===t?(a.style.background="var(--color-primary)",a.style.color="#fff",a.style.borderColor="transparent"):(a.style.background="",a.style.color="",a.style.borderColor=""))})};window.openPOProductPicker=(t=null)=>{K(),R=t,D="";const o=d("pof-supplierId")?.value||"",a=(u.products||[]).some(l=>String(l.supplierId)===String(o)||Array.isArray(l.suppliers)&&l.suppliers.some(b=>String(b.supplierId)===String(o)));A=!!(o&&a),B="all",z();const r=d("modal-po-product-picker"),s=d("modal-po-product-picker-box");r&&(r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchasePicker"),V(r,s),requestAnimationFrame(()=>{const l=d("po-picker-scroll-container");l&&(l.scrollTop=0)}),setTimeout(()=>{const l=d("po-picker-search-input");l&&l.focus()},250))};window.closePOProductPicker=(t=!1)=>{const o=d("modal-po-product-picker"),e=d("modal-po-product-picker-box");o&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchasePicker",!1,()=>N(o,e)):N(o,e))};window.handlePOPickerSearch=t=>{D=t||"";const o=d("po-picker-search-input");o&&o.value!==D&&document.activeElement!==o&&(o.value=D),z(!1)};window.setPOPickerSupplierFilter=t=>{A=!!t,z(!0)};window.setPOPickerCategory=t=>{B=t||"all",z(!0)};window.selectProductForPO=(t,o=null)=>{const a=(u.products||[]).find(b=>String(b.id)===String(t));if(!a)return;let r=null;o!==null&&Array.isArray(a.variants)&&a.variants[o]?r=a.variants[o]:Array.isArray(a.variants)&&a.variants.length>0&&(r=a.variants[0]);const s=r?parseFloat(r.hpp)||parseFloat(r.price)||0:parseFloat(a.hpp)||parseFloat(a.price)||0,l={productId:a.id,name:a.name,sku:r?.sku||a.sku||"",variantName:r?r.name:"",variantKey:r?r.name:"",variantSku:r&&r.sku||"",qty:1,unit:r?.unit||a.unit||"Pcs",unitPrice:s,subtotal:s};R!==null&&f[R]?(f[R]=l,y(`Barang diubah: ${a.name}${l.variantName?` (${l.variantName})`:""}`)):(f.push(l),y(`Ditambahkan: ${a.name}${l.variantName?` (${l.variantName})`:""}`)),j(),window.recalcPOTotals(),window.closePOProductPicker()};window.addAllVariantsForPO=t=>{const e=(u.products||[]).find(r=>String(r.id)===String(t));if(!e||!Array.isArray(e.variants)||e.variants.length===0)return;let a=0;e.variants.forEach(r=>{const s=parseFloat(r.hpp)||parseFloat(r.price)||0,l={productId:e.id,name:e.name,sku:r.sku||e.sku||"",variantName:r.name||"",variantKey:r.name||"",variantSku:r.sku||"",qty:1,unit:r.unit||e.unit||"Pcs",unitPrice:s,subtotal:s};f.push(l),a++}),j(),window.recalcPOTotals(),window.closePOProductPicker(),y(`${a} varian ${e.name} berhasil ditambahkan ke PO!`)};window.addManualPOItemRow=()=>{f.push({productId:"",name:"Barang Kulakan Manual",sku:"",variantName:"",variantKey:"",variantSku:"",qty:1,unit:"Pcs",unitPrice:0,subtotal:0}),j(),window.recalcPOTotals(),y("Item manual ditambahkan. Silakan ketik nama dan harga modal.")};window.removePOItemRow=t=>{f.splice(t,1),j(),window.recalcPOTotals()};window.selectPOItemVariant=(t,o)=>{const e=f[t];if(!e)return;const r=(u.products||[]).find(b=>String(b.id)===String(e.productId));if(!r||!Array.isArray(r.variants)||!r.variants[o])return;const s=r.variants[o];e.variantName=s.name||"",e.variantKey=s.name||"",e.variantSku=s.sku||"",s.unit&&(e.unit=s.unit);const l=parseFloat(s.hpp)||parseFloat(s.price)||0;(l>0||!e.unitPrice)&&(e.unitPrice=l),e.subtotal=Math.round((parseFloat(e.qty)||0)*(parseFloat(e.unitPrice)||0)),j(),window.recalcPOTotals()};window.stepPOItemQty=(t,o)=>{if(!f[t])return;const e=parseFloat(f[t].qty)||0;let a;e<=1&&o<0?a=Math.max(.1,parseFloat((e-.1).toFixed(3))):a=Math.max(.1,parseFloat((e+o).toFixed(3))),f[t].qty=a,f[t].subtotal=Math.round(a*(parseFloat(f[t].unitPrice)||0)),j(),window.recalcPOTotals()};window.updatePOItemField=(t,o,e)=>{if(f[t]){if(o==="qty"){const a=typeof e=="string"?e.replace(",","."):e,r=parseFloat(a)||0;f[t].qty=a,f[t].subtotal=Math.round(r*(parseFloat(f[t].unitPrice)||0));const s=d(`po-item-subtotal-card-${t}`);s&&(s.textContent=x(f[t].subtotal))}else if(o==="unitPrice"){const a=typeof e=="string"?e.replace(",","."):e,r=parseFloat(a)||0;f[t].unitPrice=r;const s=parseFloat(f[t].qty)||0;f[t].subtotal=Math.round(s*r);const l=d(`po-item-subtotal-card-${t}`);l&&(l.textContent=x(f[t].subtotal))}else f[t][o]=e;window.recalcPOTotals()}};const j=()=>{if(!d("po-items-table-container"))return;const o=d("po-form-scroll-container"),e=o?o.scrollTop:null,a=u.products||[],r=d("pof-supplierId")?.value||"";if(f.length===0){F("po-items-table-container",`
            <div class="p-8 text-center flex flex-col items-center justify-center text-slate-400 bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 space-y-3">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <div>
                    <p class="font-black text-sm sm:text-base text-slate-700 dark:text-slate-200">Belum Ada Barang yang Dipesan</p>
                    <p class="text-xs text-slate-400 mt-0.5 max-w-sm">Ambil data barang langsung dari katalog toko dengan antarmuka cepat &amp; modern.</p>
                </div>
                <div class="flex items-center gap-2 pt-1 flex-wrap justify-center">
                    <button type="button" onclick="window.openPOProductPicker(null)" class="px-5 py-2.5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>+ Ambil Barang dari Katalog Toko</span>
                    </button>
                    <button type="button" onclick="window.addManualPOItemRow()" class="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                        Input Manual
                    </button>
                </div>
            </div>
        `);return}F("po-items-table-container",`
        <div class="space-y-3.5">
            ${f.map((s,l)=>{const b=parseFloat(s.qty)||0,i=parseFloat(s.unitPrice)||0,n=Math.round(b*i),c=a.find(v=>String(v.id)===String(s.productId)),g=c?c.img?`<img src="${p(c.img)}" alt="${p(s.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${q(c,{size:"thumb"})}</div>`:q(c,{size:"thumb"}):`<div class="w-full h-full flex items-center justify-center font-black text-xs text-slate-400">#${l+1}</div>`,P=c&&(String(c.supplierId)===String(r)||Array.isArray(c.suppliers)&&c.suppliers.some(v=>String(v.supplierId)===String(r))),h=c?parseFloat(c.stock)||0:null,m=c&&Array.isArray(c.variants)&&c.variants.length>0;return`
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-4 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-md relative group">
                        <!-- Baris 1: Nomor Urut, Thumbnail, Info Produk, Tombol Ganti Produk & Hapus -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5" style="width: 56px; height: 56px; min-width: 56px; min-height: 56px;">
                                    ${g}
                                </div>

                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">#${l+1}</span>
                                        
                                        ${c?`
                                            <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">${p(s.name)}</h5>
                                        `:`
                                            <input 
                                                type="text" 
                                                value="${p(s.name)}" 
                                                placeholder="Nama barang kulakan manual..."
                                                class="font-black text-sm text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 focus:border-[var(--color-primary)] focus:outline-none flex-1"
                                                oninput="window.updatePOItemField(${l}, 'name', this.value)"
                                            >
                                        `}

                                        ${P?`
                                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
                                                <i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih
                                            </span>
                                        `:""}

                                        ${s.variantName?`
                                            <span class="px-3 py-0.5 rounded-full text-[11px] font-black text-white shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25);">
                                                Varian: ${p(s.variantName)}
                                            </span>
                                        `:""}
                                    </div>

                                    <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                        ${s.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${p(s.sku)}</b></span> •`:""}
                                        ${h!==null?`<span>Stok Toko: <b class="${h>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${I(h)} ${p(s.unit||"Pcs")}</b></span>`:""}
                                        ${c?.category?`• <span class="text-slate-500 dark:text-slate-400 font-medium">${p(c.category)}</span>`:""}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center gap-1.5 shrink-0">
                                <button 
                                    type="button" 
                                    onclick="window.openPOProductPicker(${l})" 
                                    class="h-11 px-3 sm:px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" 
                                    title="Ganti Produk dari Katalog"
                                >
                                    <i class="fa-solid fa-arrows-rotate text-xs"></i>
                                    <span class="hidden sm:inline">Ganti</span>
                                </button>
                                <button 
                                    type="button" 
                                    onclick="window.removePOItemRow(${l})" 
                                    class="w-11 h-11 rounded-2xl text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:hover:bg-rose-600 transition-all flex items-center justify-center shrink-0 active:scale-90 cursor-pointer shadow-2xs" 
                                    title="Hapus Baris Ini"
                                    aria-label="Hapus Baris"
                                >
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Baris 2: Pemilihan Varian (Interactive Chips) -->
                        ${m?`
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Kulakan:
                                    </span>
                                    <span class="text-[11px] font-bold text-slate-400">${c.variants.length} Varian Tersedia</span>
                                </div>

                                <div class="max-h-36 sm:max-h-44 overflow-y-auto custom-scrollbar p-1.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 flex-wrap">
                                    ${c.variants.map((v,O)=>{const C=s.variantName&&s.variantName===v.name||!s.variantName&&O===0;return`
                                            <button 
                                                type="button" 
                                                onclick="window.selectPOItemVariant(${l}, ${O})" 
                                                class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${C?"text-white border-transparent shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                                                style="${C?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                                            >
                                                ${C?'<i class="fa-solid fa-circle-check text-xs"></i>':""}
                                                <span>${p(v.name)}</span>
                                                <span class="text-[11px] opacity-85 font-normal">(${v.hpp?x(v.hpp):x(v.price||0)})</span>
                                            </button>
                                        `}).join("")}
                                </div>
                            </div>
                        `:""}

                        <!-- Baris 3: Dual-Row Controls (Kuantitas & Satuan Lega di Baris 1, Modal & Subtotal di Baris 2) -->
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-1">
                            <!-- Sisi Kiri: Stepper Kuantitas 44px & Satuan (Col 6) -->
                            <div class="md:col-span-6 grid grid-cols-12 gap-2.5 items-end">
                                <div class="col-span-8">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Kuantitas (Dukung Desimal) *
                                    </label>
                                    <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-2xl p-1 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)]">
                                        <button 
                                            type="button" 
                                            onclick="window.stepPOItemQty(${l}, -1)" 
                                            class="w-11 h-11 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-lg flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                            aria-label="Kurangi"
                                        >
                                            −
                                        </button>
                                        <input 
                                            type="number" 
                                            min="0.001" 
                                            step="any" 
                                            value="${s.qty}" 
                                            class="w-full text-center text-sm font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-2" 
                                            oninput="window.updatePOItemField(${l}, 'qty', this.value)"
                                            placeholder="1"
                                        >
                                        <button 
                                            type="button" 
                                            onclick="window.stepPOItemQty(${l}, 1)" 
                                            class="w-11 h-11 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-lg flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                            aria-label="Tambah"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div class="col-span-4">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Satuan
                                    </label>
                                    <input 
                                        type="text" 
                                        value="${p(s.unit||"Pcs")}" 
                                        placeholder="Pcs" 
                                        class="w-full text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-2 focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${l}, 'unit', this.value)"
                                    >
                                </div>
                            </div>

                            <!-- Sisi Kanan: Harga Modal HPP & Strip Subtotal (Col 6) -->
                            <div class="md:col-span-6 grid grid-cols-12 gap-2.5 items-end">
                                <div class="col-span-7">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Harga Modal HPP (Rp) *
                                    </label>
                                    <div class="relative">
                                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Rp</span>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            step="any" 
                                            value="${s.unitPrice}" 
                                            class="w-full pl-9 pr-3 h-12 text-xs sm:text-sm font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none" 
                                            oninput="window.updatePOItemField(${l}, 'unitPrice', this.value)"
                                        >
                                    </div>
                                </div>

                                <div class="col-span-5">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 text-right">
                                        Subtotal
                                    </label>
                                    <div class="h-12 px-3 rounded-2xl flex flex-col justify-center items-end border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.2);">
                                        <span class="font-black text-xs sm:text-sm tracking-tight" style="color:var(--color-primary)" id="po-item-subtotal-card-${l}">
                                            ${x(n)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `}).join("")}
        </div>

        <!-- Tombol Aksi Tambah Barang di Bagian Bawah -->
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mt-3">
            <button 
                type="button" 
                onclick="window.openPOProductPicker(null)" 
                class="sm:col-span-3 py-3.5 px-4 rounded-2xl border-2 border-dashed border-[rgba(var(--color-primary-rgb),0.4)] bg-[rgba(var(--color-primary-rgb),0.05)] hover:bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
            >
                <i class="fa-solid fa-cart-plus text-base"></i>
                <span>+ Ambil Barang dari Katalog Toko</span>
            </button>

            <button 
                type="button" 
                onclick="window.addManualPOItemRow()" 
                class="sm:col-span-1 py-3.5 px-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs"
                title="Input nama barang dan harga manual tanpa katalog"
            >
                <i class="fa-solid fa-pen-to-square text-xs"></i>
                <span>Input Manual</span>
            </button>
        </div>
    `),o&&e!==null&&requestAnimationFrame(()=>{o.scrollTop=e})},J=(t,o)=>t.length===0?`
            <div class="p-10 text-center flex flex-col items-center justify-center text-slate-400 space-y-3 bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Tidak ada produk yang cocok</p>
                    <p class="text-xs text-slate-400 mt-0.5 max-w-xs">Ganti kata kunci pencarian atau gunakan tombol Input Manual di bawah.</p>
                </div>
                <button type="button" onclick="window.addManualPOItemRow(); window.closePOProductPicker();" class="mt-1 px-5 py-2.5 rounded-2xl text-white font-bold text-xs flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm" style="background: var(--color-primary);">
                    <i class="fa-solid fa-plus"></i>
                    <span>Input Barang Manual</span>
                </button>
            </div>
        `:t.map(e=>{const a=e.img?`<img src="${p(e.img)}" alt="${p(e.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${q(e,{size:"thumb"})}</div>`:q(e,{size:"thumb"}),r=String(e.supplierId)===String(o)||Array.isArray(e.suppliers)&&e.suppliers.some(i=>String(i.supplierId)===String(o)),s=parseFloat(e.stock)||0,l=Array.isArray(e.variants)&&e.variants.length>0,b=parseFloat(e.hpp)||parseFloat(e.price)||0;return`
            <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all space-y-3.5 group">
                <div class="flex items-start justify-between gap-3.5">
                    <div class="flex items-start gap-3.5 min-w-0 flex-1">
                        <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                            ${a}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors">${p(e.name)}</h5>
                                ${r?'<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih</span>':""}
                            </div>
                            <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                ${e.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${p(e.sku)}</b></span> •`:""}
                                <span>Stok Gudang: <b class="${s>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${I(s)} ${p(e.unit||"Pcs")}</b></span>
                                ${e.category?`• <span class="text-slate-500 dark:text-slate-400 font-medium">${p(e.category)}</span>`:""}
                            </div>
                            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-2">
                                <span>Modal HPP Terakhir: <b class="text-slate-800 dark:text-slate-200 font-bold">${x(b)}</b></span>
                                ${e.price?`<span>• Jual: <b>${x(e.price)}</b></span>`:""}
                            </div>
                        </div>
                    </div>

                    ${l?"":`
                        <button 
                            type="button" 
                            onclick="window.selectProductForPO('${e.id}')" 
                            class="h-10 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 mt-1"
                            style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.25);"
                        >
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Pilih</span>
                        </button>
                    `}
                </div>

                ${l?`
                    <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Barang:
                            </span>
                            ${R===null?`
                                <button 
                                    type="button" 
                                    onclick="window.addAllVariantsForPO('${e.id}')" 
                                    class="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                    <i class="fa-solid fa-list-check"></i>
                                    <span>+ Ambil Semua Varian (${e.variants.length})</span>
                                </button>
                            `:""}
                        </div>

                        <div class="max-h-44 sm:max-h-52 overflow-y-auto custom-scrollbar p-2 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 flex-wrap">
                            ${e.variants.map((i,n)=>`
                                <button 
                                    type="button" 
                                    onclick="window.selectProductForPO('${e.id}', ${n})" 
                                    class="h-10 px-3.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-[var(--color-primary)] hover:text-white dark:bg-slate-900/70 dark:hover:bg-[var(--color-primary)] border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs group/var"
                                >
                                    <i class="fa-solid fa-plus text-[10px] opacity-60 group-hover/var:opacity-100"></i>
                                    <span>${p(i.name)}</span>
                                    <span class="text-[11px] opacity-80 font-normal">(${i.hpp?x(i.hpp):x(i.price||0)})</span>
                                </button>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>
        `}).join(""),z=(t=!1)=>{if(!d("modal-po-product-picker-content"))return;const e=u.products||[],a=d("pof-supplierId")?.value||"",s=(u.suppliers||[]).find(m=>String(m.id)===String(a)),l=e.filter(m=>String(m.supplierId)===String(a)||Array.isArray(m.suppliers)&&m.suppliers.some(v=>String(v.supplierId)===String(a))),b=e.length,i=l.length;let n=A&&i>0?l:e;B!=="all"&&(n=n.filter(m=>(m.category||"").toLowerCase()===B.toLowerCase()));const c=(D||"").toLowerCase().trim();c&&(n=n.filter(m=>{const v=(m.name||"").toLowerCase().includes(c),O=(m.sku||"").toLowerCase().includes(c),C=(m.category||"").toLowerCase().includes(c),L=Array.isArray(m.variants)&&m.variants.some(_=>(_.name||"").toLowerCase().includes(c)||(_.sku||"").toLowerCase().includes(c));return v||O||C||L}));const g=d("po-picker-scroll-container"),P=d("po-picker-search-input");if(!t&&g&&P){g.innerHTML=J(n,a);const m=d("po-picker-clear-search-btn");m&&(m.style.display=D?"block":"none");return}const h=["all",...new Set(e.map(m=>m.category).filter(Boolean))];F("modal-po-product-picker-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER PICKER -->
        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-boxes-stacked"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">
                        ${R!==null?`Ganti Barang #${R+1}`:"Ambil Barang dari Katalog Toko"}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        ${s?`Rekanan: <b class="text-slate-800 dark:text-slate-200">${p(s.name)}</b>`:"Pilih produk untuk order kulakan toko"}
                    </p>
                </div>
            </div>
            <button onclick="window.closePOProductPicker()" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <!-- BILAH PENCARIAN & FILTER SEGMENTED -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900 shrink-0">
            <!-- Search Bar Lega 48px -->
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                <input 
                    type="text" 
                    id="po-picker-search-input" 
                    placeholder="Cari nama barang, varian, atau barcode..." 
                    value="${p(D)}"
                    oninput="window.handlePOPickerSearch(this.value)"
                    class="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-10 h-12 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                >
                <button id="po-picker-clear-search-btn" onclick="window.handlePOPickerSearch('')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer" style="${D?"":"display: none;"}">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>
            </div>

            <!-- Tab Segmented Control 2-Kolom Full Width (Anti-Tumpang Tindih) -->
            <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
                ${a&&i>0?`
                    <button 
                        type="button" 
                        onclick="window.setPOPickerSupplierFilter(true)" 
                        class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${A?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${A?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-star text-[10px] ${A?"text-amber-300":"text-amber-500"}"></i>
                        <span class="truncate">Barang Rekanan (${i})</span>
                    </button>
                `:""}

                <button 
                    type="button" 
                    onclick="window.setPOPickerSupplierFilter(false)" 
                    class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${!A||i===0?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                    style="${!A||i===0?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    <span class="truncate">Semua Katalog Toko (${b})</span>
                </button>
            </div>

            <!-- Chips Kategori Horizontal Scrollable -->
            ${h.length>2?`
                <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pt-0.5">
                    ${h.map(m=>`
                        <button 
                            type="button" 
                            onclick="window.setPOPickerCategory('${p(m)}')" 
                            class="px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${B===m?"text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}"
                            style="${B===m?"background: var(--color-primary);":""}"
                        >
                            ${m==="all"?"Semua Kategori":p(m)}
                        </button>
                    `).join("")}
                </div>
            `:""}
        </div>

        <!-- LIST PRODUK LEGA & NYAMAN -->
        <div id="po-picker-scroll-container" class="p-4 sm:p-5 overflow-y-auto flex-1 custom-scrollbar space-y-3.5">
            ${J(n,a)}
        </div>

        <!-- FOOTER PICKER DENGAN TOMBOL INPUT MANUAL ELEGAN -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 shrink-0">
            <button 
                type="button" 
                onclick="window.addManualPOItemRow(); window.closePOProductPicker();" 
                class="w-full h-11 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-2xs"
            >
                <i class="fa-solid fa-pen-to-square text-sm"></i>
                <span>Barang Tidak Ada di Katalog? Ketik Manual Non-Katalog</span>
            </button>
        </div>
    `)};window.recalcPOTempoDueDate=()=>{const t=d("pof-date")?.value||new Date().toISOString().split("T")[0],o=parseInt(d("pof-tempoDays")?.value,10)||14,e=new Date(t);e.setDate(e.getDate()+o);const a=e.toISOString().split("T")[0],r=d("pof-tempoDueDate");r&&(r.value=M(a),r.setAttribute("data-due-iso",a))};window.handlePOSupplierChange=t=>{const e=(u.suppliers||[]).find(a=>String(a.id)===String(t));if(e&&e.defaultTerms)if(e.defaultTerms.startsWith("tempo")){const a=parseInt(e.defaultTerms.split("_")[1],10)||14;window.setPOTempoPresetDays(a),window.setPOPaymentType("tempo")}else e.defaultTerms==="konsinyasi"?window.setPOPaymentType("konsinyasi"):window.setPOPaymentType("cash");j()};window.handlePOPaymentTypeChange=t=>{const o=d("pof-dp-label"),e=d("pof-amountPaid");if(t==="tempo")o&&(o.innerText="Uang Muka / DP:"),window.recalcPOTempoDueDate();else if(o&&(o.innerText="Pembayaran:"),t==="cash"&&e){const a=window.computePOGrandTotal();e.value=a}window.recalcPOTotals()};window.computePOGrandTotal=()=>{const t=f.reduce((a,r)=>a+(parseFloat(r.qty)||0)*(parseFloat(r.unitPrice)||0),0),o=parseFloat(d("pof-discount")?.value)||0,e=parseFloat(d("pof-shippingFee")?.value)||0;return Math.max(0,Math.round(t-o+e))};window.recalcPOTotals=()=>{const t=f.reduce((n,c)=>n+(parseFloat(c.qty)||0)*(parseFloat(c.unitPrice)||0),0),o=parseFloat(d("pof-discount")?.value)||0,e=parseFloat(d("pof-shippingFee")?.value)||0,a=Math.max(0,Math.round(t-o+e)),r=parseFloat(d("pof-amountPaid")?.value)||0,s=Math.max(0,a-r),l=d("pof-calc-subtotal"),b=d("pof-calc-grandtotal"),i=d("pof-calc-balance");l&&(l.innerText=x(Math.round(t))),b&&(b.innerText=x(a)),i&&(i.innerText=x(s))};window.savePOForm=async(t,o)=>{t.preventDefault(),G("Menyimpan Order Pembelian...");try{const e=u.suppliers||[],a=d("pof-supplierId")?.value,r=e.find(k=>String(k.id)===String(a))||{},s=(d("pof-poNumber")?.value||"").trim(),l=d("pof-date")?.value||new Date().toISOString().split("T")[0],b=d("pof-paymentType")?.value||"tempo",i=parseInt(d("pof-tempoDays")?.value,10)||14,n=d("pof-tempoDueDate")?.getAttribute("data-due-iso")||"",c=(d("pof-notes")?.value||"").trim(),g=parseFloat(d("pof-discount")?.value)||0,P=parseFloat(d("pof-shippingFee")?.value)||0,h=parseFloat(d("pof-amountPaid")?.value)||0;if(f.length===0)return S(),y("Minimal harus ada 1 barang dalam order pembelian!");const m=f.filter(k=>k.name&&(parseFloat(k.qty)||0)>0).map(k=>{const T=parseFloat(k.qty)||0,W=parseFloat(k.unitPrice)||0;return{productId:k.productId||"",name:k.name||"",sku:k.sku||"",variantName:k.variantName||"",variantKey:k.variantKey||k.variantName||"",variantSku:k.variantSku||"",qty:T,unit:k.unit||"Pcs",unitPrice:W,subtotal:Math.round(T*W)}});if(m.length===0)return S(),y("Pastikan produk dan kuantitas order telah diisi dengan benar!");const v=m.reduce((k,T)=>k+T.subtotal,0),O=Math.max(0,Math.round(v-g+P)),C=Math.max(0,O-h);let L="belum_bayar";h>=O&&O>0?L="lunas":h>0&&(L="sebagian"),u.purchases||(u.purchases=[]);const $={id:o||"po_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),poNumber:s,date:l,supplierId:a,supplierName:r.name||"Supplier",supplierPhone:r.phone||"",paymentType:b,tempoDays:b==="tempo"?i:0,tempoDueDate:b==="tempo"?n:null,items:m,subtotal:v,discount:g,shippingFee:P,total:O,amountPaid:h,balance:C,paymentStatus:L,notes:c,updatedAt:new Date().toISOString()};if(!o)$.status="ordered",$.stockRestocked=!1,$.createdAt=new Date().toISOString(),$.paymentHistory=h>0?[{date:new Date().toISOString(),amount:h,note:b==="cash"?"Pembayaran Tunai Lunas":"Uang Muka / DP Awal",method:b==="cash"?"Tunai":"Transfer"}]:[],u.purchases.unshift($);else{const k=u.purchases.findIndex(T=>String(T.id)===String(o));if(k>-1){const T=u.purchases[k];$.status=T.status||"ordered",$.stockRestocked=T.stockRestocked||!1,$.createdAt=T.createdAt,$.paymentHistory=T.paymentHistory||[],h>(T.amountPaid||0)&&$.paymentHistory.push({date:new Date().toISOString(),amount:h-(T.amountPaid||0),note:"Penyesuaian Bayar via Edit PO",method:"Transfer / Kas"}),u.purchases[k]=$}}await H(["purchases"]),S(),window.closePOFormModal(),y(o?"Order PO diperbarui!":"Order PO kulakan berhasil dibuat!"),E()}catch(e){S(),console.error("Gagal menyimpan PO:",e),y("Gagal menyimpan PO: "+e.message)}};window.deletePurchaseOrder=t=>{const e=(u.purchases||[]).find(r=>String(r.id)===String(t));if(!e)return;let a=`Hapus pesanan kulakan <b>${p(e.poNumber||e.id)}</b> ke <b>${p(e.supplierName)}</b>?`;e.stockRestocked&&(a+='<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>'),Y("Hapus Purchase Order",a,async()=>{G("Menghapus PO...");try{u.purchases=(u.purchases||[]).filter(r=>String(r.id)!==String(t)),await H(["purchases"]),S(),y("Purchase Order berhasil dihapus."),E()}catch(r){S(),y("Gagal menghapus: "+r.message)}},"Hapus Permanen")};window.closePODetailModal=()=>{window.closePurchaseDetailModal()};window.openPurchaseDetailModal=t=>{K();const e=(u.purchases||[]).find(n=>String(n.id)===String(t));if(!e)return y("Data PO tidak ditemukan!");const a=d("modal-po-detail"),r=d("modal-po-detail-box"),s=d("modal-po-detail-content");if(!a||!s)return;const l=parseFloat(e.total)||0,b=parseFloat(e.amountPaid)||0,i=Math.max(0,l-b);F("modal-po-detail-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${p(e.poNumber||e.id)}</h3>
                        <span class="px-3 py-0.5 rounded-full text-[11px] font-black" style="${e.status==="received"||e.status==="completed"?"background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25);":"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);"}">
                            ${e.status==="ordered"?"Dipesan":e.status==="received"?"Barang Diterima":e.status==="completed"?"Selesai / Lunas":"Dibatalkan"}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Supplier: <b class="text-slate-800 dark:text-slate-200">${p(e.supplierName)}</b> • Tanggal: ${M(e.date||e.createdAt)}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.printPurchaseOrder('${e.id}')" class="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs" title="Cetak PO" aria-label="Cetak Surat PO">
                    <i class="fa-solid fa-print text-sm"></i>
                </button>
                <button onclick="window.closePurchaseDetailModal()" class="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup Modal">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
            <!-- DAFTAR BARANG YANG DIPESAN (DUAL MODE: MOBILE CARDS & DESKTOP TABLE) -->
            <div>
                <div class="flex items-center justify-between mb-3">
                    <h4 class="font-black text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked" style="color:var(--color-primary)"></i>
                        <span>Item Barang Dipesan (${(e.items||[]).length})</span>
                    </h4>
                </div>

                <!-- ═══ TAMPILAN MOBILE (NATIVE APP CARDS LEGA) ═══ -->
                <div class="sm:hidden space-y-3">
                    ${(e.items||[]).map((n,c)=>{const g=Math.round((parseFloat(n.qty)||0)*(parseFloat(n.unitPrice)||0));return`
                            <div class="p-4 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-2.5">
                                <div class="flex items-start justify-between gap-2.5">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="w-5 h-5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">#${c+1}</span>
                                            <p class="font-black text-sm text-slate-800 dark:text-slate-100">${p(n.name)}</p>
                                            ${n.variantName?`<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${p(n.variantName)}</span>`:""}
                                        </div>
                                        ${n.sku?`<span class="text-[11px] font-mono text-slate-400 ml-6 block mt-0.5">SKU: ${p(n.sku)}</span>`:""}
                                    </div>
                                    <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-slate-200 text-xs font-black shrink-0">
                                        ${I(n.qty)} ${p(n.unit||"pcs")}
                                    </span>
                                </div>
                                <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                                    <span class="text-slate-400">Modal HPP: <b class="text-slate-700 dark:text-slate-200">${x(n.unitPrice)}</b></span>
                                    <span class="font-black text-sm" style="color:var(--color-primary)">${x(g)}</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>

                <!-- ═══ TAMPILAN DESKTOP (MODERN CLEAN TABLE) ═══ -->
                <div class="hidden sm:block border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xs">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                                <th class="py-3 px-4 w-10 text-center">#</th>
                                <th class="py-3 px-4">Nama Produk &amp; Varian</th>
                                <th class="py-3 px-4 text-center">Jumlah</th>
                                <th class="py-3 px-4 text-right">Harga Modal (HPP)</th>
                                <th class="py-3 px-4 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${(e.items||[]).map((n,c)=>`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 text-center font-bold text-slate-400 text-xs">${c+1}</td>
                                    <td class="py-3 px-4">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${p(n.name)}</p>
                                            ${n.variantName?`<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${p(n.variantName)}</span>`:""}
                                        </div>
                                        ${n.sku?`<span class="text-[11px] font-mono text-slate-400">SKU: ${p(n.sku)}</span>`:""}
                                    </td>
                                    <td class="py-3 px-4 text-center font-black text-slate-700 dark:text-slate-200 text-xs">
                                        ${I(n.qty)} ${p(n.unit||"pcs")}
                                    </td>
                                    <td class="py-3 px-4 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${x(n.unitPrice)}
                                    </td>
                                    <td class="py-3 px-4 text-right font-black text-slate-800 dark:text-slate-100 text-xs sm:text-sm" style="color:var(--color-primary)">
                                        ${x(Math.round((parseFloat(n.qty)||0)*(parseFloat(n.unitPrice)||0)))}
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- RINGKASAN PEMBAYARAN & SISA HUTANG -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 sm:p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400">Informasi Tagihan &amp; Biaya</span>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Subtotal Nota:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${x(e.subtotal)}</span>
                    </div>
                    ${e.discount>0?`
                        <div class="flex justify-between text-emerald-500 font-bold">
                            <span>Diskon Pembelian:</span>
                            <span>-${x(e.discount)}</span>
                        </div>
                    `:""}
                    ${e.shippingFee>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim Armada:</span>
                            <span>+${x(e.shippingFee)}</span>
                        </div>
                    `:""}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total Tagihan PO:</span>
                        <span style="color:var(--color-primary)">${x(l)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${x(b)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700">
                        <span class="text-slate-600 dark:text-slate-400">Sisa Hutang Tempo:</span>
                        <span class="${i>0?"text-rose-500 dark:text-rose-400":"text-emerald-500"} font-black text-sm">${i>0?x(i):"Lunas (Rp 0)"}</span>
                    </div>
                </div>

                <!-- RIWAYAT CICILAN & STATUS -->
                <div class="p-4 sm:p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Histori Pembayaran Cicilan</span>
                        <span class="text-[10px] font-bold text-slate-400">${(e.paymentHistory||[]).length} Transaksi</span>
                    </div>

                    ${(e.paymentHistory||[]).length===0?`
                        <div class="text-center py-6 text-slate-400 flex flex-col items-center justify-center">
                            <div class="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-base mb-2 shadow-2xs">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Belum ada catatan pembayaran cicilan.</p>
                        </div>
                    `:`
                        <div class="space-y-2 max-h-52 overflow-y-auto custom-scrollbar">
                            ${e.paymentHistory.map(n=>`
                                <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 flex items-center justify-between text-xs shadow-2xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">${x(n.amount)}</span>
                                        <p class="text-[10px] text-slate-400 mt-0.5">${re(n.date)} • ${p(n.method||"Transfer")}</p>
                                    </div>
                                    <span class="text-xs text-slate-600 dark:text-slate-300 font-bold">${p(n.note||"-")}</span>
                                </div>
                            `).join("")}
                        </div>
                    `}
                </div>
            </div>
        </div>

        <!-- STICKY NATIVE ACTION FOOTER (RESPONSIF MOBILE & DESKTOP) -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <!-- Aksi Utama di Mobile (Baris 1) -->
            ${e.status==="ordered"?`
                <button 
                    type="button" 
                    onclick="window.closePurchaseDetailModal(); window.receiveAndRestockPO('${e.id}');" 
                    class="w-full sm:w-auto sm:order-2 h-12 px-6 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                >
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Terima Barang &amp; Restock</span>
                </button>
            `:i>0&&e.paymentType==="tempo"?`
                <button 
                    type="button" 
                    onclick="window.closePurchaseDetailModal(); window.openPurchasePaymentModal('${e.id}');" 
                    class="w-full sm:w-auto sm:order-2 h-12 px-6 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                >
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>+ Bayar Cicilan Hutang</span>
                </button>
            `:""}

            <!-- Tombol Sekunder di Mobile (Baris 2) -->
            <div class="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto sm:order-1">
                <button type="button" onclick="window.closePurchaseDetailModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center">
                    Tutup
                </button>
                <button type="button" onclick="window.printPurchaseOrder('${e.id}')" class="h-12 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2">
                    <i class="fa-solid fa-print"></i>
                    <span>Cetak Surat PO</span>
                </button>
                ${e.items&&e.items.length>0?`
                    <button type="button" onclick="window.printPOLabels?.('${e.id}')" class="h-12 px-4 rounded-2xl border font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 shadow-2xs hover:opacity-90" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                        <i class="fa-solid fa-barcode text-xs"></i>
                        <span>Cetak Label Barang</span>
                    </button>
                `:""}
            </div>
        </div>
    `),a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchaseDetail"),V(a,r)};window.closePurchaseDetailModal=(t=!1)=>{const o=d("modal-po-detail"),e=d("modal-po-detail-box");o&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchaseDetail",!1,()=>N(o,e)):N(o,e))};window.openPurchasePaymentModal=t=>{K();const e=(u.purchases||[]).find(n=>String(n.id)===String(t));if(!e)return y("Data PO tidak ditemukan!");const a=parseFloat(e.total)||0,r=parseFloat(e.amountPaid)||0,s=Math.max(0,a-r),l=d("modal-po-payment"),b=d("modal-po-payment-box"),i=d("modal-po-payment-content");!l||!i||(F("modal-po-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar Cicilan Hutang Supplier</h3>
                    <p class="text-xs text-slate-400 mt-0.5">${p(e.supplierName)} • <b class="font-mono text-slate-600 dark:text-slate-300">${p(e.poNumber||e.id)}</b></p>
                </div>
            </div>
            <button onclick="window.closePurchasePaymentModal()" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-pay-form" onsubmit="window.submitPurchasePayment(event, '${e.id}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Ringkasan Hutang -->
                <div class="p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-2 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Total Tagihan PO:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${x(a)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sudah Pernah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${x(r)}</span>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 font-black">
                        <span class="text-slate-700 dark:text-slate-200">Sisa Hutang Wajib Bayar:</span>
                        <span class="text-rose-500 dark:text-rose-400 text-base font-black" id="pop-unpaid-base" data-unpaid="${s}">${x(s)}</span>
                    </div>
                </div>

                <!-- Input Nominal & Quick-Pay Chips -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Nominal Pembayaran (Rp) *
                        </label>
                        <span class="text-[11px] font-bold text-slate-400" id="pop-remaining-preview">
                            Sisa Setelah Bayar: <b>Rp 0</b>
                        </span>
                    </div>

                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                        <input 
                            type="number" 
                            id="pop-amount" 
                            required 
                            min="1" 
                            max="${s}" 
                            value="${s}" 
                            class="w-full bg-slate-50 dark:bg-slate-900 font-black text-lg pl-11 pr-4 h-12 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                            style="color: var(--color-primary)"
                            oninput="window.recalcPOPaymentPreview(${s})"
                        >
                    </div>

                    <!-- Quick-Pay Chips (25%, 50%, 75%, 100% LUNAS) -->
                    <div class="grid grid-cols-4 gap-2 pt-1">
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.25, ${s})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            25%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.50, ${s})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            50%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.75, ${s})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            75%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(1.00, ${s})" 
                            class="py-2.5 rounded-xl text-xs font-black text-white shadow-xs active:scale-95 transition-all cursor-pointer"
                            style="background: var(--color-primary);"
                        >
                            100% LUNAS
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Bayar *</label>
                        <input type="date" id="pop-date" required value="${new Date().toISOString().split("T")[0]}" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3 text-xs font-bold text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none">
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Metode Bayar</label>
                        <select id="pop-method" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3 text-xs font-bold text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none cursor-pointer">
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="Kas Tunai">Kas Tunai Toko</option>
                            <option value="Giro / Cek">Giro / Cek Mundur</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan / No. Bukti Transfer</label>
                    <input type="text" id="pop-note" placeholder="Contoh: Transfer via BCA No Ref 123456" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3.5 text-xs font-medium text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none">
                </div>
            </div>

            <!-- STICKY ACTION FOOTER -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closePurchasePaymentModal()" class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="flex-1 sm:flex-initial h-12 px-8 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-glow transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `),window.recalcPOPaymentPreview(s),l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchasePayment"),V(l,b))};window.setPOPaymentQuickPercent=(t,o)=>{const e=d("pop-amount");if(!e)return;const a=Math.round(o*t);e.value=a,window.recalcPOPaymentPreview(o)};window.recalcPOPaymentPreview=t=>{const o=parseFloat(d("pop-amount")?.value)||0,e=d("pop-remaining-preview");if(!e)return;const a=Math.max(0,t-o);a===0?e.innerHTML='<span class="text-emerald-500 font-bold"><i class="fa-solid fa-circle-check mr-1"></i>Lunas Penuh</span>':e.innerHTML=`Sisa Setelah Bayar: <b class="text-amber-500">${x(a)}</b>`};window.closePurchasePaymentModal=(t=!1)=>{const o=d("modal-po-payment"),e=d("modal-po-payment-box");o&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchasePayment",!1,()=>N(o,e)):N(o,e))};window.submitPurchasePayment=async(t,o)=>{t.preventDefault(),G("Mencatat Pembayaran...");try{const a=(u.purchases||[]).find(P=>String(P.id)===String(o));if(!a)throw new Error("Data PO tidak ditemukan!");const r=parseFloat(d("pop-amount")?.value)||0,s=d("pop-date")?.value||new Date().toISOString(),l=d("pop-method")?.value||"Transfer Bank",b=(d("pop-note")?.value||"").trim();if(r<=0)return S(),y("Nominal pembayaran harus lebih besar dari 0!");const i=parseFloat(a.total)||0,c=(parseFloat(a.amountPaid)||0)+r,g=Math.max(0,i-c);a.amountPaid=c,a.balance=g,c>=i?(a.paymentStatus="lunas",a.status==="received"&&(a.status="completed")):a.paymentStatus="sebagian",a.paymentHistory||(a.paymentHistory=[]),a.paymentHistory.push({date:s,amount:r,method:l,note:b||`Pembayaran cicilan tempo (${l})`}),a.updatedAt=new Date().toISOString(),await H(["purchases"]),S(),window.closePurchasePaymentModal(),y("Pembayaran hutang supplier berhasil dicatat!"),E()}catch(e){S(),console.error("Gagal simpan pembayaran:",e),y("Gagal memproses: "+e.message)}};window.sendPOToSupplierWA=t=>{const e=(u.purchases||[]).find(n=>String(n.id)===String(t));if(!e)return y("Data PO tidak ditemukan!");const a=e.supplierPhone?Z(e.supplierPhone):"";if(!a)return y("Nomor WhatsApp supplier belum tercatat di data supplier!");const r=u.store?.name||"Toko Putri Utama Teknik",s=u.store?.address||"",l=u.store?.phone||"";let b=(e.items||[]).map((n,c)=>{const g=n.variantName?` [Varian: ${n.variantName}]`:"";return`${c+1}. *${n.name}${g}* - ${I(n.qty)} ${n.unit||"pcs"} @ Rp ${Number(n.unitPrice||0).toLocaleString("id-ID")}`}).join(`
`),i=`*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*
Dari: *${r}*
`+(s?`Alamat: ${s}
`:"")+(l?`Telp Toko: ${l}
`:"")+`-----------------------------------------
Kepada Yth: *${e.supplierName}*
Nomor PO: *${e.poNumber||e.id}*
Tanggal: ${M(e.date||e.createdAt)}
Termin: ${e.paymentType==="tempo"?`Tempo ${e.tempoDays||14} Hari (Jatuh Tempo: ${M(e.tempoDueDate)})`:e.paymentType==="konsinyasi"?"Konsinyasi":"Cash Saat Kirim"}
-----------------------------------------
*DAFTAR BARANG YANG DIPESAN:*
${b}
-----------------------------------------
*Subtotal:* Rp ${Number(e.subtotal||0).toLocaleString("id-ID")}
`+(e.discount>0?`*Diskon:* -Rp ${Number(e.discount).toLocaleString("id-ID")}
`:"")+(e.shippingFee>0?`*Ongkir:* +Rp ${Number(e.shippingFee).toLocaleString("id-ID")}
`:"")+`*TOTAL NILAI PO:* *Rp ${Number(e.total||0).toLocaleString("id-ID")}*
`+(e.notes?`
*Catatan:* ${e.notes}
`:"")+`
Mohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya!`;te(a,i)};window.printPurchaseOrder=t=>{if(typeof window.openDocPreview=="function"){window.openDocPreview("po",t);return}const e=(u.purchases||[]).find(c=>String(c.id)===String(t));if(!e)return y("Data PO tidak ditemukan!");const a=u.store||{};if(!d("po-print-container"))return;const s=e.paymentType==="tempo"?`Tempo ${e.tempoDays||14} Hari (Jatuh Tempo: ${M(e.tempoDueDate)})`:e.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",l=`
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${p(a.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${p(a.address||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${p(a.phone||"-")}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${p(e.poNumber||e.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${M(e.date||e.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${p(e.supplierName)}</p>
                    ${e.supplierPhone?`<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${p(e.supplierPhone)}</p>`:""}
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Syarat &amp; Ketentuan:</span>
                    <p style="margin: 0; font-weight: bold;">Termin: ${s}</p>
                    <p style="margin: 3px 0 0; color: #64748b;">Status PO: ${e.status==="ordered"?"Dipesan":e.status==="received"?"Diterima":"Selesai"}</p>
                </div>
            </div>

            <!-- TABEL ITEM PO -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px;">
                <thead>
                    <tr style="background: #0f172a; color: white;">
                        <th style="padding: 8px 10px; text-align: center; width: 30px;">No</th>
                        <th style="padding: 8px 10px; text-align: left;">Nama Barang &amp; Deskripsi</th>
                        <th style="padding: 8px 10px; text-align: center; width: 80px;">Kuantitas</th>
                        <th style="padding: 8px 10px; text-align: right; width: 120px;">Harga Satuan</th>
                        <th style="padding: 8px 10px; text-align: right; width: 130px;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${(e.items||[]).map((c,g)=>`
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 8px 10px; text-align: center;">${g+1}</td>
                            <td style="padding: 8px 10px;">
                                <b style="color: #0f172a;">${p(c.name)}</b>
                                ${c.variantName?`<br><span style="display: inline-block; font-size: 10px; font-weight: 700; color: #0f172a; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 2px 7px; border-radius: 4px; margin-top: 3px;">Varian: ${p(c.variantName)}</span>`:""}
                                ${c.sku?`<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${p(c.sku)}</span>`:""}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold; color: #0f172a;">${I(c.qty)} ${p(c.unit||"pcs")}</td>
                            <td style="padding: 8px 10px; text-align: right; color: #334155;">${x(c.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold; color: #0f172a;">${x(Math.round((parseFloat(c.qty)||0)*(parseFloat(c.unitPrice)||0)))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${p(e.notes||"Harap barang dikirim sesuai spesifikasi & packing aman.")}</p>
                </div>
                <div style="width: 250px;">
                    <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                        <span>Subtotal:</span>
                        <span style="font-weight: bold; color: #0f172a;">${x(e.subtotal)}</span>
                    </div>
                    ${e.discount>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #16a34a;">
                            <span>Diskon:</span>
                            <span>-${x(e.discount)}</span>
                        </div>
                    `:""}
                    ${e.shippingFee>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                            <span>Ongkos Kirim:</span>
                            <span>+${x(e.shippingFee)}</span>
                        </div>
                    `:""}
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 2px solid #0f172a; margin-top: 4px; font-size: 14px; font-weight: 900;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color: #0f172a;">${x(e.total)}</span>
                    </div>
                </div>
            </div>

            <!-- TANDA TANGAN -->
            <div style="display: flex; justify-content: space-between; text-align: center; font-size: 12px; margin-top: 50px;">
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Dipesan Oleh (Purchasing):</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${p(a.name||"Toko Putri")}</div>
                </div>
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Diterima &amp; Disetujui Oleh:</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${p(e.supplierName)}</div>
                </div>
            </div>
        </div>
    `,b=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${p(e.poNumber||e.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${l}
        </body>
        </html>
    `;if(typeof window.openHtmlPrintPreview=="function"){window.openHtmlPrintPreview({title:`Purchase Order #${e.poNumber||e.id}`,html:b,paper:"a4"});return}let i=d("po-print-iframe");i||(i=document.createElement("iframe"),i.id="po-print-iframe",i.style.position="fixed",i.style.right="0",i.style.bottom="0",i.style.width="0",i.style.height="0",i.style.border="0",document.body.appendChild(i));const n=i.contentWindow.document;n.open(),n.write(b),n.close(),setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print()},300)};window.renderPurchasesView=E;window.computePurchaseMetrics=X;window.printPOLabels=t=>{const o=(u.purchases||[]).find(r=>String(r.id)===String(t));if(!o||!o.items||!o.items.length){typeof y=="function"&&y("Tidak ada item pada PO ini!");return}const e=o.items[0],a={};e.variantName?a[e.variantName]=e.qty:a[e.productId]=e.qty,window.closePurchaseDetailModal?.(),window.openProductBarcodeLabelModal?.(e.productId,a)};export{X as computePurchaseMetrics,K as ensurePurchaseModals,I as formatQty,se as renderPurchaseCardsOnly,E as renderPurchasesView};

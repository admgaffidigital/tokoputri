import{a as b,e as i,b as R,f as m,i as u,a3 as Q,k as h,G as _,l as G,q as W,n as A,o as U,v as N,a8 as q,a4 as Z}from"./module-print-igI_4G3A.js";import{r as X,k as H}from"./module-pos-jaA-W5rW.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-D7UMfg1W.js";import"./module-faq-BPK0sXir.js";const K=()=>{if(["modal-po-form","modal-po-detail","modal-po-payment","modal-po-product-picker"].forEach(t=>{const s=document.querySelector(`#admin-content #${t}`);s&&s.remove()}),!i("modal-po-form")){const t=document.createElement("div");t.id="modal-po-form",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&window.closePOFormModal?.()},t.innerHTML=`
            <div id="modal-po-form-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[92dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(t)}if(!i("modal-po-detail")){const t=document.createElement("div");t.id="modal-po-detail",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&window.closePODetailModal?.()},t.innerHTML=`
            <div id="modal-po-detail-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!i("modal-po-payment")){const t=document.createElement("div");t.id="modal-po-payment",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&window.closePurchasePaymentModal?.()},t.innerHTML=`
            <div id="modal-po-payment-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(t)}if(!i("modal-po-product-picker")){const t=document.createElement("div");t.id="modal-po-product-picker",t.className="fixed inset-0 z-[160] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&window.closePOProductPicker?.()},t.innerHTML=`
            <div id="modal-po-product-picker-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-product-picker-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(t)}};let P="all",z="",f=[],C=null,L="",D=!0,E="all";const I=t=>{const s=parseFloat(t)||0;return parseFloat(s.toFixed(3)).toString()},M=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return t}},ee=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return t}},J=()=>{if(!Array.isArray(b.purchases)||b.purchases.length===0||!Array.isArray(b.suppliers)||b.suppliers.length===0)try{const d=localStorage.getItem("freshmart_cms_private");if(d){const l=JSON.parse(d);(!Array.isArray(b.purchases)||b.purchases.length===0)&&Array.isArray(l.purchases)&&l.purchases.length>0&&(b.purchases=l.purchases),(!Array.isArray(b.suppliers)||b.suppliers.length===0)&&Array.isArray(l.suppliers)&&l.suppliers.length>0&&(b.suppliers=l.suppliers)}}catch{}const t=b.purchases||[],s=new Date,e=s.getMonth(),a=s.getFullYear();let o=0,r=0,n=0,x=0;return t.forEach(d=>{const l=new Date(d.date||d.createdAt||0),p=parseFloat(d.total)||0,c=parseFloat(d.amountPaid)||0,v=p-c;l.getMonth()===e&&l.getFullYear()===a&&d.status!=="cancelled"&&(o+=p),d.paymentType==="tempo"&&d.paymentStatus!=="lunas"&&d.status!=="cancelled"&&v>0&&(r+=v),d.status==="ordered"?n++:(d.status==="completed"||d.status==="received"&&d.paymentStatus==="lunas")&&x++}),{monthPurchasesTotal:o,totalUnpaidDebt:r,pendingArrivalCount:n,completedCount:x}},F=()=>{if(K(),!i("admin-content"))return;if(!Array.isArray(b.purchases)||b.purchases.length===0)try{const r=localStorage.getItem("freshmart_cms_private");if(r){const n=JSON.parse(r);Array.isArray(n.purchases)&&n.purchases.length>0&&(b.purchases=n.purchases)}}catch{}const s=J(),e=b.purchases||[];e.sort((r,n)=>new Date(n.date||n.createdAt||0)-new Date(r.date||r.createdAt||0));const a=z.toLowerCase().trim();let o=e.filter(r=>{if(!(!a||(r.poNumber||"").toLowerCase().includes(a)||(r.supplierName||"").toLowerCase().includes(a)||(r.notes||"").toLowerCase().includes(a)||(r.items||[]).some(x=>(x.name||"").toLowerCase().includes(a))))return!1;if(P==="ordered")return r.status==="ordered";if(P==="received")return r.status==="received";if(P==="unpaid"){const x=(parseFloat(r.total)||0)-(parseFloat(r.amountPaid)||0);return r.paymentType==="tempo"&&x>0&&r.paymentStatus!=="lunas"}else if(P==="completed")return r.status==="completed"||r.status==="received"&&r.paymentStatus==="lunas";return!0});R("admin-content",`
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
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${m(s.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <button type="button" onclick="if(window.openAdminTab){window.openAdminTab('reports'); setTimeout(() => window.switchReportTab && window.switchReportTab('debts'), 100);}" title="Buka analisis laporan hutang supplier" class="w-7 h-7 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs cursor-pointer transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${m(s.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black tracking-tight" style="color:var(--color-primary)">${s.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-500">PO Selesai / Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${s.completedCount}</p>
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
                        value="${u(z)}" 
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
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer ${P==="all"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${P==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    Semua PO (${e.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${P==="ordered"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${P==="ordered"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan (${e.filter(r=>r.status==="ordered").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${P==="received"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${P==="received"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${e.filter(r=>r.status==="received").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${P==="unpaid"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${P==="unpaid"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Tempo
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${P==="completed"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${P==="completed"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-4">
                ${o.length===0?`
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
                `:o.map(r=>te(r)).join("")}
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `)},te=t=>{const s=parseFloat(t.total)||0,e=parseFloat(t.amountPaid)||0,a=Math.max(0,s-e);let o="";t.status==="ordered"?o='<span class="px-3 py-1 rounded-full text-[11px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-clock mr-1.5"></i>Dipesan</span>':t.status==="received"?o='<span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-boxes-stacked mr-1.5"></i>Barang Diterima</span>':t.status==="completed"?o='<span class="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-2xs"><i class="fa-solid fa-check-double mr-1.5"></i>Selesai &amp; Lunas</span>':t.status==="cancelled"&&(o='<span class="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[11px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1.5"></i>Dibatalkan</span>');let r="";t.paymentType==="cash"?r='<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Tunai / Cash</span>':t.paymentType==="konsinyasi"?r='<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Konsinyasi</span>':t.paymentStatus==="lunas"||a<=0?r='<span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>':r=`<span class="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${m(a)}</span>`;const n=(t.items||[]).length,x=t.supplierPhone?Q(t.supplierPhone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-6 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/50 transition-all rounded-3xl shadow-2xs group space-y-4">
            <!-- 1. HEADER KARTU: NO PO, STATUS, TANGGAL & SUPPLIER -->
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 font-black shadow-xs transition-transform group-hover:scale-105" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                        <i class="fa-solid ${t.status==="received"||t.status==="completed"?"fa-boxes-stacked":"fa-cart-flatbed"}"></i>
                    </div>

                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${u(t.poNumber||t.id)}</h4>
                            ${o}
                            ${r}
                        </div>

                        <div class="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i> ${u(t.supplierName||"Supplier Rekanan")}
                            </span>
                            <span>•</span>
                            <span class="flex items-center gap-1">
                                <i class="fa-regular fa-calendar text-slate-400"></i> ${M(t.date||t.createdAt)}
                            </span>
                            <span>•</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${n} Macam Barang</span>
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
                        ${(t.items||[]).slice(0,4).map(d=>`
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 text-slate-700 dark:text-slate-200">
                                <span>${u(d.name)}</span>
                                ${d.variantName?`<span class="opacity-75 font-normal text-[10px]">[${u(d.variantName)}]</span>`:""}
                                <span class="px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-700 text-[10px] font-black" style="color:var(--color-primary)">${I(d.qty)} ${u(d.unit||"pcs")}</span>
                            </span>
                        `).join("")}
                        ${n>4?`
                            <span class="inline-flex items-center px-2 py-1 rounded-xl text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800">
                                +${n-4} barang lainnya
                            </span>
                        `:""}
                    </div>

                    ${t.notes?`
                        <p class="text-xs text-slate-500 dark:text-slate-400 italic line-clamp-1 pt-1">
                            <i class="fa-regular fa-note-sticky mr-1 text-slate-400"></i>"${u(t.notes)}"
                        </p>
                    `:""}
                </div>

                <!-- Total Tagihan & Sisa Tempo (Col 5) -->
                <div class="md:col-span-5 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 pt-2.5 md:pt-0 border-slate-200/80 dark:border-slate-700/80">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Nilai Kulakan</span>
                    <span class="text-lg sm:text-xl font-black tracking-tight" style="color:var(--color-primary)">${m(s)}</span>
                    
                    ${t.paymentType==="tempo"?`
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs text-slate-400">Sisa Hutang:</span>
                            <span class="text-xs font-black ${a>0?"text-amber-500":"text-emerald-500"}">
                                ${a>0?m(a):"Lunas"}
                            </span>
                            ${t.tempoDueDate&&a>0?`
                                <span class="text-[10px] px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-800">
                                    Tempo: ${M(t.tempoDueDate)}
                                </span>
                            `:""}
                        </div>
                    `:`
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            Dibayar: <b class="text-emerald-600 dark:text-emerald-400">${m(e)}</b>
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
                <div class="${x?"grid grid-cols-3":"grid grid-cols-2"} gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-2 justify-end shrink-0">
                    ${x?`
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
    `};window.handlePurchaseSearch=t=>{z=t||"",F()};window.setPurchaseFilter=t=>{P=t,F()};window.receiveAndRestockPO=t=>{const e=(b.purchases||[]).find(o=>String(o.id)===String(t));if(!e)return h("Data PO tidak ditemukan!");if(e.stockRestocked)return h("Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.");const a=(e.items||[]).map(o=>`• <b>${u(o.name)}${o.variantName?` [${u(o.variantName)}]`:""}</b>: +${I(o.qty)} ${u(o.unit||"pcs")} (Modal HPP: ${m(o.unitPrice)})`).join("<br>");_("Terima Barang & Restock Otomatis",`Konfirmasi barang kulakan dari <b>${u(e.supplierName)}</b> (${e.poNumber}) telah tiba di toko / gudang?<br><br>
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
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,async()=>{const o=document.querySelector('input[name="po_target_location"]:checked')?.value||"store";G(o==="warehouse"?"Menambahkan Stok ke Gudang Cadangan...":"Menambahkan Stok ke Rak Toko...");try{let r=!1;const n=b.products||[];(e.items||[]).forEach(l=>{if(!l.productId)return;const p=n.find(c=>String(c.id)===String(l.productId));if(p){const c=parseFloat(l.qty)||0,v=parseFloat(l.unitPrice)||0;if(X(p,{poId:e.id,poNumber:e.poNumber,supplierId:e.supplierId,supplierName:e.supplierName,qty:c,unitPrice:v,variantName:l.variantName||"",receivedAt:e.receivedAt||new Date().toISOString(),targetLocation:o}),l.variantName&&Array.isArray(p.variants)&&p.variants.length>0){const g=p.variants.find(w=>w.name===l.variantName);g&&(g.isActive===!1||g.isActive==="false")&&(g.isActive=!0)}(p.isActive===!1||p.isActive==="false")&&(p.isActive=!0),r=!0}}),e.status="received",e.stockRestocked=!0,e.receivedAt=new Date().toISOString();const x=parseFloat(e.total)||0;if((parseFloat(e.amountPaid)||0)>=x&&(e.status="completed",e.paymentStatus="lunas"),r){const l=W.batch(),p=[],c=new Set;(e.items||[]).forEach(v=>{if(!v.productId)return;const g=String(v.productId);if(c.has(g))return;c.add(g);const w=(b.products||[]).find(y=>String(y.id)===g);if(w){const y=W.collection("freshmart").doc("cms_data").collection("products").doc(w.id.toString());l.set(y,w),p.push(w.id.toString())}}),await l.commit(),await H(["purchases"],{updateType:"restock_received",updatedProductIds:p})}else await H(["purchases"]);try{localStorage.setItem("freshmart_products",JSON.stringify(b.products))}catch{}A(),h("Barang berhasil diterima & stok toko bertambah!"),F()}catch(r){A(),console.error("Gagal restock produk:",r),h("Gagal memproses restock: "+r.message)}},"Ya, Terima & Restock")};window.openCreatePOModal=(t=null,s=null)=>{K();const e=!!s,a=b.purchases||[],o=b.suppliers||[];if(o.length===0){_("Belum Ada Rekanan","Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.",()=>{window.openAdminTab&&(window.openAdminTab("suppliers"),setTimeout(()=>{window.openSupplierFormModal?.()},200))},"Tambah Supplier");return}let r={};if(e)r=a.find(d=>String(d.id)===String(s))||{},f=JSON.parse(JSON.stringify(r.items||[]));else{const d=new Date().toISOString().split("T")[0],l=d.replace(/-/g,""),p=Math.floor(100+Math.random()*900);r={poNumber:`PO-${l}-${p}`,date:d,supplierId:t||(o[0]?o[0].id:""),paymentType:"tempo",tempoDays:14,items:[],discount:0,shippingFee:0,amountPaid:0,notes:""},f=[]}ae(r,e);const n=i("modal-po-form"),x=i("modal-po-form-box");n&&(n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchaseForm"),U(n,x),requestAnimationFrame(()=>{const d=i("po-form-scroll-container");d&&(d.scrollTop=0)}))};const ae=(t,s)=>{if(!i("modal-po-form-content"))return;const a=b.suppliers||[];b.products,R("modal-po-form-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${s?"Edit Order Pembelian (PO)":"Buat Order Pembelian Baru (Kulakan)"}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-500 dark:text-slate-400 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-95">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${s?t.id:""}')" class="flex-1 flex flex-col overflow-hidden">
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
                            ${a.map(o=>`
                                <option value="${o.id}" ${String(o.id)===String(t.supplierId)?"selected":""} class="font-bold">
                                    ${u(o.name)}${o.code?` (${u(o.code)})`:""}
                                </option>
                            `).join("")}
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Purchase Order *</label>
                        <input type="text" id="pof-poNumber" required value="${u(t.poNumber||"")}" placeholder="PO-202609-001" class="w-full text-xs font-mono font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Tanggal Order *</label>
                        <input type="date" id="pof-date" required value="${u(t.date||new Date().toISOString().split("T")[0])}" class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
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
                        ${[7,14,30,45,60].map(o=>`
                            <button 
                                type="button" 
                                id="pof-tempo-chip-${o}" 
                                onclick="window.setPOTempoPresetDays(${o})" 
                                class="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all active:scale-95 cursor-pointer ${(t.tempoDays||14)===o?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                                style="${(t.tempoDays||14)===o?"background: var(--color-primary);":""}"
                            >
                                ${o} Hari
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
                        >${u(t.notes||"")}</textarea>
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
    `),j(),window.recalcPOTempoDueDate(),window.recalcPOTotals()};window.closePOFormModal=(t=!1)=>{const s=i("modal-po-form"),e=i("modal-po-form-box");s&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchaseForm",!1,()=>N(s,e)):N(s,e))};window.closeCreatePOModal=window.closePOFormModal;window.setPOPaymentType=t=>{const s=i("pof-paymentType");s&&(s.value=t),["cash","tempo","konsinyasi"].forEach(o=>{const r=i(`pof-type-btn-${o}`);r&&(o===t?(r.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-white shadow-sm",r.style.background="var(--color-primary)",r.style.boxShadow="0 2px 8px rgba(var(--color-primary-rgb), 0.3)"):(r.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",r.style.background="",r.style.boxShadow=""))});const e=i("pof-tempo-options-box"),a=i("pof-payment-badge-desc");e&&(t==="tempo"?e.classList.remove("hidden"):e.classList.add("hidden")),a&&(a.textContent=t==="cash"?"Bayar Penuh Saat Kirim":t==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"),window.handlePOPaymentTypeChange(t)};window.setPOTempoPresetDays=t=>{const s=i("pof-tempoDays");s&&(s.value=t,window.recalcPOTempoDueDate()),[7,14,30,45,60].forEach(e=>{const a=i(`pof-tempo-chip-${e}`);a&&(e===t?(a.style.background="var(--color-primary)",a.style.color="#fff",a.style.borderColor="transparent"):(a.style.background="",a.style.color="",a.style.borderColor=""))})};window.openPOProductPicker=(t=null)=>{K(),C=t,L="";const s=i("pof-supplierId")?.value||"",a=(b.products||[]).some(n=>String(n.supplierId)===String(s)||Array.isArray(n.suppliers)&&n.suppliers.some(x=>String(x.supplierId)===String(s)));D=!!(s&&a),E="all",V();const o=i("modal-po-product-picker"),r=i("modal-po-product-picker-box");o&&(o.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchasePicker"),U(o,r),requestAnimationFrame(()=>{const n=i("po-picker-scroll-container");n&&(n.scrollTop=0)}),setTimeout(()=>{const n=i("po-picker-search-input");n&&n.focus()},250))};window.closePOProductPicker=(t=!1)=>{const s=i("modal-po-product-picker"),e=i("modal-po-product-picker-box");s&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchasePicker",!1,()=>N(s,e)):N(s,e))};window.handlePOPickerSearch=t=>{L=t||"",V()};window.setPOPickerSupplierFilter=t=>{D=!!t,V()};window.setPOPickerCategory=t=>{E=t||"all",V()};window.selectProductForPO=(t,s=null)=>{const a=(b.products||[]).find(x=>String(x.id)===String(t));if(!a)return;let o=null;s!==null&&Array.isArray(a.variants)&&a.variants[s]?o=a.variants[s]:Array.isArray(a.variants)&&a.variants.length>0&&(o=a.variants[0]);const r=o?parseFloat(o.hpp)||parseFloat(o.price)||0:parseFloat(a.hpp)||parseFloat(a.price)||0,n={productId:a.id,name:a.name,sku:o?.sku||a.sku||"",variantName:o?o.name:"",variantKey:o?o.name:"",variantSku:o&&o.sku||"",qty:1,unit:o?.unit||a.unit||"Pcs",unitPrice:r,subtotal:r};C!==null&&f[C]?(f[C]=n,h(`Barang diubah: ${a.name}${n.variantName?` (${n.variantName})`:""}`)):(f.push(n),h(`Ditambahkan: ${a.name}${n.variantName?` (${n.variantName})`:""}`)),j(),window.recalcPOTotals(),window.closePOProductPicker()};window.addAllVariantsForPO=t=>{const e=(b.products||[]).find(o=>String(o.id)===String(t));if(!e||!Array.isArray(e.variants)||e.variants.length===0)return;let a=0;e.variants.forEach(o=>{const r=parseFloat(o.hpp)||parseFloat(o.price)||0,n={productId:e.id,name:e.name,sku:o.sku||e.sku||"",variantName:o.name||"",variantKey:o.name||"",variantSku:o.sku||"",qty:1,unit:o.unit||e.unit||"Pcs",unitPrice:r,subtotal:r};f.push(n),a++}),j(),window.recalcPOTotals(),window.closePOProductPicker(),h(`${a} varian ${e.name} berhasil ditambahkan ke PO!`)};window.addManualPOItemRow=()=>{f.push({productId:"",name:"Barang Kulakan Manual",sku:"",variantName:"",variantKey:"",variantSku:"",qty:1,unit:"Pcs",unitPrice:0,subtotal:0}),j(),window.recalcPOTotals(),h("Item manual ditambahkan. Silakan ketik nama dan harga modal.")};window.removePOItemRow=t=>{f.splice(t,1),j(),window.recalcPOTotals()};window.selectPOItemVariant=(t,s)=>{const e=f[t];if(!e)return;const o=(b.products||[]).find(x=>String(x.id)===String(e.productId));if(!o||!Array.isArray(o.variants)||!o.variants[s])return;const r=o.variants[s];e.variantName=r.name||"",e.variantKey=r.name||"",e.variantSku=r.sku||"",r.unit&&(e.unit=r.unit);const n=parseFloat(r.hpp)||parseFloat(r.price)||0;(n>0||!e.unitPrice)&&(e.unitPrice=n),e.subtotal=Math.round((parseFloat(e.qty)||0)*(parseFloat(e.unitPrice)||0)),j(),window.recalcPOTotals()};window.stepPOItemQty=(t,s)=>{if(!f[t])return;const e=parseFloat(f[t].qty)||0;let a;e<=1&&s<0?a=Math.max(.1,parseFloat((e-.1).toFixed(3))):a=Math.max(.1,parseFloat((e+s).toFixed(3))),f[t].qty=a,f[t].subtotal=Math.round(a*(parseFloat(f[t].unitPrice)||0)),j(),window.recalcPOTotals()};window.updatePOItemField=(t,s,e)=>{if(f[t]){if(s==="qty"){const a=typeof e=="string"?e.replace(",","."):e,o=parseFloat(a)||0;f[t].qty=a,f[t].subtotal=Math.round(o*(parseFloat(f[t].unitPrice)||0));const r=i(`po-item-subtotal-card-${t}`);r&&(r.textContent=m(f[t].subtotal))}else if(s==="unitPrice"){const a=typeof e=="string"?e.replace(",","."):e,o=parseFloat(a)||0;f[t].unitPrice=o;const r=parseFloat(f[t].qty)||0;f[t].subtotal=Math.round(r*o);const n=i(`po-item-subtotal-card-${t}`);n&&(n.textContent=m(f[t].subtotal))}else f[t][s]=e;window.recalcPOTotals()}};const j=()=>{if(!i("po-items-table-container"))return;const s=i("po-form-scroll-container"),e=s?s.scrollTop:null,a=b.products||[],o=i("pof-supplierId")?.value||"";if(f.length===0){R("po-items-table-container",`
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
        `);return}R("po-items-table-container",`
        <div class="space-y-3.5">
            ${f.map((r,n)=>{const x=parseFloat(r.qty)||0,d=parseFloat(r.unitPrice)||0,l=Math.round(x*d),p=a.find(y=>String(y.id)===String(r.productId)),c=p?p.img?`<img src="${u(p.img)}" alt="${u(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${q(p,{size:"thumb"})}</div>`:q(p,{size:"thumb"}):`<div class="w-full h-full flex items-center justify-center font-black text-xs text-slate-400">#${n+1}</div>`,v=p&&(String(p.supplierId)===String(o)||Array.isArray(p.suppliers)&&p.suppliers.some(y=>String(y.supplierId)===String(o))),g=p?parseFloat(p.stock)||0:null,w=p&&Array.isArray(p.variants)&&p.variants.length>0;return`
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-4 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-md relative group">
                        <!-- Baris 1: Nomor Urut, Thumbnail, Info Produk, Tombol Ganti Produk & Hapus -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5" style="width: 56px; height: 56px; min-width: 56px; min-height: 56px;">
                                    ${c}
                                </div>

                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">#${n+1}</span>
                                        
                                        ${p?`
                                            <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">${u(r.name)}</h5>
                                        `:`
                                            <input 
                                                type="text" 
                                                value="${u(r.name)}" 
                                                placeholder="Nama barang kulakan manual..."
                                                class="font-black text-sm text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 focus:border-[var(--color-primary)] focus:outline-none flex-1"
                                                oninput="window.updatePOItemField(${n}, 'name', this.value)"
                                            >
                                        `}

                                        ${v?`
                                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
                                                <i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih
                                            </span>
                                        `:""}

                                        ${r.variantName?`
                                            <span class="px-3 py-0.5 rounded-full text-[11px] font-black text-white shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25);">
                                                Varian: ${u(r.variantName)}
                                            </span>
                                        `:""}
                                    </div>

                                    <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                        ${r.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${u(r.sku)}</b></span> •`:""}
                                        ${g!==null?`<span>Stok Toko: <b class="${g>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${I(g)} ${u(r.unit||"Pcs")}</b></span>`:""}
                                        ${p?.category?`• <span class="text-slate-500 dark:text-slate-400 font-medium">${u(p.category)}</span>`:""}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center gap-1.5 shrink-0">
                                <button 
                                    type="button" 
                                    onclick="window.openPOProductPicker(${n})" 
                                    class="h-11 px-3 sm:px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" 
                                    title="Ganti Produk dari Katalog"
                                >
                                    <i class="fa-solid fa-arrows-rotate text-xs"></i>
                                    <span class="hidden sm:inline">Ganti</span>
                                </button>
                                <button 
                                    type="button" 
                                    onclick="window.removePOItemRow(${n})" 
                                    class="w-11 h-11 rounded-2xl text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:hover:bg-rose-600 transition-all flex items-center justify-center shrink-0 active:scale-90 cursor-pointer shadow-2xs" 
                                    title="Hapus Baris Ini"
                                    aria-label="Hapus Baris"
                                >
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Baris 2: Pemilihan Varian (Interactive Chips) -->
                        ${w?`
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Kulakan:
                                    </span>
                                    <span class="text-[11px] font-bold text-slate-400">${p.variants.length} Varian Tersedia</span>
                                </div>

                                <div class="max-h-36 sm:max-h-44 overflow-y-auto custom-scrollbar p-1.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 flex-wrap">
                                    ${p.variants.map((y,T)=>{const S=r.variantName&&r.variantName===y.name||!r.variantName&&T===0;return`
                                            <button 
                                                type="button" 
                                                onclick="window.selectPOItemVariant(${n}, ${T})" 
                                                class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${S?"text-white border-transparent shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                                                style="${S?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                                            >
                                                ${S?'<i class="fa-solid fa-circle-check text-xs"></i>':""}
                                                <span>${u(y.name)}</span>
                                                <span class="text-[11px] opacity-85 font-normal">(${y.hpp?m(y.hpp):m(y.price||0)})</span>
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
                                            onclick="window.stepPOItemQty(${n}, -1)" 
                                            class="w-11 h-11 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-lg flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                            aria-label="Kurangi"
                                        >
                                            −
                                        </button>
                                        <input 
                                            type="number" 
                                            min="0.001" 
                                            step="any" 
                                            value="${r.qty}" 
                                            class="w-full text-center text-sm font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-2" 
                                            oninput="window.updatePOItemField(${n}, 'qty', this.value)"
                                            placeholder="1"
                                        >
                                        <button 
                                            type="button" 
                                            onclick="window.stepPOItemQty(${n}, 1)" 
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
                                        value="${u(r.unit||"Pcs")}" 
                                        placeholder="Pcs" 
                                        class="w-full text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-2 focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${n}, 'unit', this.value)"
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
                                            value="${r.unitPrice}" 
                                            class="w-full pl-9 pr-3 h-12 text-xs sm:text-sm font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none" 
                                            oninput="window.updatePOItemField(${n}, 'unitPrice', this.value)"
                                        >
                                    </div>
                                </div>

                                <div class="col-span-5">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 text-right">
                                        Subtotal
                                    </label>
                                    <div class="h-12 px-3 rounded-2xl flex flex-col justify-center items-end border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.2);">
                                        <span class="font-black text-xs sm:text-sm tracking-tight" style="color:var(--color-primary)" id="po-item-subtotal-card-${n}">
                                            ${m(l)}
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
    `),s&&e!==null&&requestAnimationFrame(()=>{s.scrollTop=e})},V=()=>{if(!i("modal-po-product-picker-content"))return;const s=b.products||[],e=i("pof-supplierId")?.value||"",o=(b.suppliers||[]).find(c=>String(c.id)===String(e)),r=s.filter(c=>String(c.supplierId)===String(e)||Array.isArray(c.suppliers)&&c.suppliers.some(v=>String(v.supplierId)===String(e))),n=s.length,x=r.length;let d=D&&x>0?r:s;E!=="all"&&(d=d.filter(c=>(c.category||"").toLowerCase()===E.toLowerCase()));const l=(L||"").toLowerCase().trim();l&&(d=d.filter(c=>{const v=(c.name||"").toLowerCase().includes(l),g=(c.sku||"").toLowerCase().includes(l),w=(c.category||"").toLowerCase().includes(l),y=Array.isArray(c.variants)&&c.variants.some(T=>(T.name||"").toLowerCase().includes(l)||(T.sku||"").toLowerCase().includes(l));return v||g||w||y}));const p=["all",...new Set(s.map(c=>c.category).filter(Boolean))];R("modal-po-product-picker-content",`
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
                        ${C!==null?`Ganti Barang #${C+1}`:"Ambil Barang dari Katalog Toko"}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        ${o?`Rekanan: <b class="text-slate-800 dark:text-slate-200">${u(o.name)}</b>`:"Pilih produk untuk order kulakan toko"}
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
                    value="${u(L)}"
                    oninput="window.handlePOPickerSearch(this.value)"
                    class="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-10 h-12 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                >
                ${L?`
                    <button onclick="window.handlePOPickerSearch('')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer">
                        <i class="fa-solid fa-circle-xmark text-sm"></i>
                    </button>
                `:""}
            </div>

            <!-- Tab Segmented Control 2-Kolom Full Width (Anti-Tumpang Tindih) -->
            <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
                ${e&&x>0?`
                    <button 
                        type="button" 
                        onclick="window.setPOPickerSupplierFilter(true)" 
                        class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${D?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${D?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-star text-[10px] ${D?"text-amber-300":"text-amber-500"}"></i>
                        <span class="truncate">Barang Rekanan (${x})</span>
                    </button>
                `:""}

                <button 
                    type="button" 
                    onclick="window.setPOPickerSupplierFilter(false)" 
                    class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${!D||x===0?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                    style="${!D||x===0?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    <span class="truncate">Semua Katalog Toko (${n})</span>
                </button>
            </div>

            <!-- Chips Kategori Horizontal Scrollable -->
            ${p.length>2?`
                <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pt-0.5">
                    ${p.map(c=>`
                        <button 
                            type="button" 
                            onclick="window.setPOPickerCategory('${u(c)}')" 
                            class="px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${E===c?"text-white shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}"
                            style="${E===c?"background: var(--color-primary);":""}"
                        >
                            ${c==="all"?"Semua Kategori":u(c)}
                        </button>
                    `).join("")}
                </div>
            `:""}
        </div>

        <!-- LIST PRODUK LEGA & NYAMAN -->
        <div id="po-picker-scroll-container" class="p-4 sm:p-5 overflow-y-auto flex-1 custom-scrollbar space-y-3.5">
            ${d.length===0?`
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
            `:d.map(c=>{const v=c.img?`<img src="${u(c.img)}" alt="${u(c.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${q(c,{size:"thumb"})}</div>`:q(c,{size:"thumb"}),g=String(c.supplierId)===String(e)||Array.isArray(c.suppliers)&&c.suppliers.some(S=>String(S.supplierId)===String(e)),w=parseFloat(c.stock)||0,y=Array.isArray(c.variants)&&c.variants.length>0,T=parseFloat(c.hpp)||parseFloat(c.price)||0;return`
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all space-y-3.5 group">
                        <div class="flex items-start justify-between gap-3.5">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                                    ${v}
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors">${u(c.name)}</h5>
                                        ${g?'<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih</span>':""}
                                    </div>
                                    <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                        ${c.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${u(c.sku)}</b></span> •`:""}
                                        <span>Stok Gudang: <b class="${w>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${I(w)} ${u(c.unit||"Pcs")}</b></span>
                                        ${c.category?`• <span class="text-slate-500 dark:text-slate-400 font-medium">${u(c.category)}</span>`:""}
                                    </div>
                                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-2">
                                        <span>Modal HPP Terakhir: <b class="text-slate-800 dark:text-slate-200 font-bold">${m(T)}</b></span>
                                        ${c.price?`<span>• Jual: <b>${m(c.price)}</b></span>`:""}
                                    </div>
                                </div>
                            </div>

                            ${y?"":`
                                <button 
                                    type="button" 
                                    onclick="window.selectProductForPO('${c.id}')" 
                                    class="h-10 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 mt-1"
                                    style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.25);"
                                >
                                    <i class="fa-solid fa-plus text-xs"></i>
                                    <span>Pilih</span>
                                </button>
                            `}
                        </div>

                        ${y?`
                            <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Barang:
                                    </span>
                                    ${C===null?`
                                        <button 
                                            type="button" 
                                            onclick="window.addAllVariantsForPO('${c.id}')" 
                                            class="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                            <i class="fa-solid fa-list-check"></i>
                                            <span>+ Ambil Semua Varian (${c.variants.length})</span>
                                        </button>
                                    `:""}
                                </div>

                                <div class="max-h-44 sm:max-h-52 overflow-y-auto custom-scrollbar p-2 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2 flex-wrap">
                                    ${c.variants.map((S,B)=>`
                                        <button 
                                            type="button" 
                                            onclick="window.selectProductForPO('${c.id}', ${B})" 
                                            class="h-10 px-3.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-[var(--color-primary)] hover:text-white dark:bg-slate-900/70 dark:hover:bg-[var(--color-primary)] border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs group/var"
                                        >
                                            <i class="fa-solid fa-plus text-[10px] opacity-60 group-hover/var:opacity-100"></i>
                                            <span>${u(S.name)}</span>
                                            <span class="text-[11px] opacity-80 font-normal">(${S.hpp?m(S.hpp):m(S.price||0)})</span>
                                        </button>
                                    `).join("")}
                                </div>
                            </div>
                        `:""}
                    </div>
                `}).join("")}
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
    `)};window.recalcPOTempoDueDate=()=>{const t=i("pof-date")?.value||new Date().toISOString().split("T")[0],s=parseInt(i("pof-tempoDays")?.value,10)||14,e=new Date(t);e.setDate(e.getDate()+s);const a=e.toISOString().split("T")[0],o=i("pof-tempoDueDate");o&&(o.value=M(a),o.setAttribute("data-due-iso",a))};window.handlePOSupplierChange=t=>{const e=(b.suppliers||[]).find(a=>String(a.id)===String(t));if(e&&e.defaultTerms)if(e.defaultTerms.startsWith("tempo")){const a=parseInt(e.defaultTerms.split("_")[1],10)||14;window.setPOTempoPresetDays(a),window.setPOPaymentType("tempo")}else e.defaultTerms==="konsinyasi"?window.setPOPaymentType("konsinyasi"):window.setPOPaymentType("cash");j()};window.handlePOPaymentTypeChange=t=>{const s=i("pof-dp-label"),e=i("pof-amountPaid");if(t==="tempo")s&&(s.innerText="Uang Muka / DP:"),window.recalcPOTempoDueDate();else if(s&&(s.innerText="Pembayaran:"),t==="cash"&&e){const a=window.computePOGrandTotal();e.value=a}window.recalcPOTotals()};window.computePOGrandTotal=()=>{const t=f.reduce((a,o)=>a+(parseFloat(o.qty)||0)*(parseFloat(o.unitPrice)||0),0),s=parseFloat(i("pof-discount")?.value)||0,e=parseFloat(i("pof-shippingFee")?.value)||0;return Math.max(0,Math.round(t-s+e))};window.recalcPOTotals=()=>{const t=f.reduce((l,p)=>l+(parseFloat(p.qty)||0)*(parseFloat(p.unitPrice)||0),0),s=parseFloat(i("pof-discount")?.value)||0,e=parseFloat(i("pof-shippingFee")?.value)||0,a=Math.max(0,Math.round(t-s+e)),o=parseFloat(i("pof-amountPaid")?.value)||0,r=Math.max(0,a-o),n=i("pof-calc-subtotal"),x=i("pof-calc-grandtotal"),d=i("pof-calc-balance");n&&(n.innerText=m(Math.round(t))),x&&(x.innerText=m(a)),d&&(d.innerText=m(r))};window.savePOForm=async(t,s)=>{t.preventDefault(),G("Menyimpan Order Pembelian...");try{const e=b.suppliers||[],a=i("pof-supplierId")?.value,o=e.find(k=>String(k.id)===String(a))||{},r=(i("pof-poNumber")?.value||"").trim(),n=i("pof-date")?.value||new Date().toISOString().split("T")[0],x=i("pof-paymentType")?.value||"tempo",d=parseInt(i("pof-tempoDays")?.value,10)||14,l=i("pof-tempoDueDate")?.getAttribute("data-due-iso")||"",p=(i("pof-notes")?.value||"").trim(),c=parseFloat(i("pof-discount")?.value)||0,v=parseFloat(i("pof-shippingFee")?.value)||0,g=parseFloat(i("pof-amountPaid")?.value)||0;if(f.length===0)return A(),h("Minimal harus ada 1 barang dalam order pembelian!");const w=f.filter(k=>k.name&&(parseFloat(k.qty)||0)>0).map(k=>{const $=parseFloat(k.qty)||0,Y=parseFloat(k.unitPrice)||0;return{productId:k.productId||"",name:k.name||"",sku:k.sku||"",variantName:k.variantName||"",variantKey:k.variantKey||k.variantName||"",variantSku:k.variantSku||"",qty:$,unit:k.unit||"Pcs",unitPrice:Y,subtotal:Math.round($*Y)}});if(w.length===0)return A(),h("Pastikan produk dan kuantitas order telah diisi dengan benar!");const y=w.reduce((k,$)=>k+$.subtotal,0),T=Math.max(0,Math.round(y-c+v)),S=Math.max(0,T-g);let B="belum_bayar";g>=T&&T>0?B="lunas":g>0&&(B="sebagian"),b.purchases||(b.purchases=[]);const O={id:s||"po_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),poNumber:r,date:n,supplierId:a,supplierName:o.name||"Supplier",supplierPhone:o.phone||"",paymentType:x,tempoDays:x==="tempo"?d:0,tempoDueDate:x==="tempo"?l:null,items:w,subtotal:y,discount:c,shippingFee:v,total:T,amountPaid:g,balance:S,paymentStatus:B,notes:p,updatedAt:new Date().toISOString()};if(!s)O.status="ordered",O.stockRestocked=!1,O.createdAt=new Date().toISOString(),O.paymentHistory=g>0?[{date:new Date().toISOString(),amount:g,note:x==="cash"?"Pembayaran Tunai Lunas":"Uang Muka / DP Awal",method:x==="cash"?"Tunai":"Transfer"}]:[],b.purchases.unshift(O);else{const k=b.purchases.findIndex($=>String($.id)===String(s));if(k>-1){const $=b.purchases[k];O.status=$.status||"ordered",O.stockRestocked=$.stockRestocked||!1,O.createdAt=$.createdAt,O.paymentHistory=$.paymentHistory||[],g>($.amountPaid||0)&&O.paymentHistory.push({date:new Date().toISOString(),amount:g-($.amountPaid||0),note:"Penyesuaian Bayar via Edit PO",method:"Transfer / Kas"}),b.purchases[k]=O}}await H(["purchases"]),A(),window.closePOFormModal(),h(s?"Order PO diperbarui!":"Order PO kulakan berhasil dibuat!"),F()}catch(e){A(),console.error("Gagal menyimpan PO:",e),h("Gagal menyimpan PO: "+e.message)}};window.deletePurchaseOrder=t=>{const e=(b.purchases||[]).find(o=>String(o.id)===String(t));if(!e)return;let a=`Hapus pesanan kulakan <b>${u(e.poNumber||e.id)}</b> ke <b>${u(e.supplierName)}</b>?`;e.stockRestocked&&(a+='<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>'),_("Hapus Purchase Order",a,async()=>{G("Menghapus PO...");try{b.purchases=(b.purchases||[]).filter(o=>String(o.id)!==String(t)),await H(["purchases"]),A(),h("Purchase Order berhasil dihapus."),F()}catch(o){A(),h("Gagal menghapus: "+o.message)}},"Hapus Permanen")};window.closePODetailModal=()=>{window.closePurchaseDetailModal()};window.openPurchaseDetailModal=t=>{K();const e=(b.purchases||[]).find(l=>String(l.id)===String(t));if(!e)return h("Data PO tidak ditemukan!");const a=i("modal-po-detail"),o=i("modal-po-detail-box"),r=i("modal-po-detail-content");if(!a||!r)return;const n=parseFloat(e.total)||0,x=parseFloat(e.amountPaid)||0,d=Math.max(0,n-x);R("modal-po-detail-content",`
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
                        <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${u(e.poNumber||e.id)}</h3>
                        <span class="px-3 py-0.5 rounded-full text-[11px] font-black" style="${e.status==="received"||e.status==="completed"?"background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25);":"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);"}">
                            ${e.status==="ordered"?"Dipesan":e.status==="received"?"Barang Diterima":e.status==="completed"?"Selesai / Lunas":"Dibatalkan"}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Supplier: <b class="text-slate-800 dark:text-slate-200">${u(e.supplierName)}</b> • Tanggal: ${M(e.date||e.createdAt)}</p>
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
                    ${(e.items||[]).map((l,p)=>{const c=Math.round((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0));return`
                            <div class="p-4 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-2.5">
                                <div class="flex items-start justify-between gap-2.5">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="w-5 h-5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">#${p+1}</span>
                                            <p class="font-black text-sm text-slate-800 dark:text-slate-100">${u(l.name)}</p>
                                            ${l.variantName?`<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${u(l.variantName)}</span>`:""}
                                        </div>
                                        ${l.sku?`<span class="text-[11px] font-mono text-slate-400 ml-6 block mt-0.5">SKU: ${u(l.sku)}</span>`:""}
                                    </div>
                                    <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-slate-200 text-xs font-black shrink-0">
                                        ${I(l.qty)} ${u(l.unit||"pcs")}
                                    </span>
                                </div>
                                <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                                    <span class="text-slate-400">Modal HPP: <b class="text-slate-700 dark:text-slate-200">${m(l.unitPrice)}</b></span>
                                    <span class="font-black text-sm" style="color:var(--color-primary)">${m(c)}</span>
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
                            ${(e.items||[]).map((l,p)=>`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 text-center font-bold text-slate-400 text-xs">${p+1}</td>
                                    <td class="py-3 px-4">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${u(l.name)}</p>
                                            ${l.variantName?`<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${u(l.variantName)}</span>`:""}
                                        </div>
                                        ${l.sku?`<span class="text-[11px] font-mono text-slate-400">SKU: ${u(l.sku)}</span>`:""}
                                    </td>
                                    <td class="py-3 px-4 text-center font-black text-slate-700 dark:text-slate-200 text-xs">
                                        ${I(l.qty)} ${u(l.unit||"pcs")}
                                    </td>
                                    <td class="py-3 px-4 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${m(l.unitPrice)}
                                    </td>
                                    <td class="py-3 px-4 text-right font-black text-slate-800 dark:text-slate-100 text-xs sm:text-sm" style="color:var(--color-primary)">
                                        ${m(Math.round((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0)))}
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
                        <span class="font-bold text-slate-800 dark:text-white">${m(e.subtotal)}</span>
                    </div>
                    ${e.discount>0?`
                        <div class="flex justify-between text-emerald-500 font-bold">
                            <span>Diskon Pembelian:</span>
                            <span>-${m(e.discount)}</span>
                        </div>
                    `:""}
                    ${e.shippingFee>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim Armada:</span>
                            <span>+${m(e.shippingFee)}</span>
                        </div>
                    `:""}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total Tagihan PO:</span>
                        <span style="color:var(--color-primary)">${m(n)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${m(x)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700">
                        <span class="text-slate-600 dark:text-slate-400">Sisa Hutang Tempo:</span>
                        <span class="${d>0?"text-rose-500 dark:text-rose-400":"text-emerald-500"} font-black text-sm">${d>0?m(d):"Lunas (Rp 0)"}</span>
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
                            ${e.paymentHistory.map(l=>`
                                <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 flex items-center justify-between text-xs shadow-2xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">${m(l.amount)}</span>
                                        <p class="text-[10px] text-slate-400 mt-0.5">${ee(l.date)} • ${u(l.method||"Transfer")}</p>
                                    </div>
                                    <span class="text-xs text-slate-600 dark:text-slate-300 font-bold">${u(l.note||"-")}</span>
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
            `:d>0&&e.paymentType==="tempo"?`
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
    `),a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchaseDetail"),U(a,o)};window.closePurchaseDetailModal=(t=!1)=>{const s=i("modal-po-detail"),e=i("modal-po-detail-box");s&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchaseDetail",!1,()=>N(s,e)):N(s,e))};window.openPurchasePaymentModal=t=>{K();const e=(b.purchases||[]).find(l=>String(l.id)===String(t));if(!e)return h("Data PO tidak ditemukan!");const a=parseFloat(e.total)||0,o=parseFloat(e.amountPaid)||0,r=Math.max(0,a-o),n=i("modal-po-payment"),x=i("modal-po-payment-box"),d=i("modal-po-payment-content");!n||!d||(R("modal-po-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar Cicilan Hutang Supplier</h3>
                    <p class="text-xs text-slate-400 mt-0.5">${u(e.supplierName)} • <b class="font-mono text-slate-600 dark:text-slate-300">${u(e.poNumber||e.id)}</b></p>
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
                        <span class="font-bold text-slate-800 dark:text-white">${m(a)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sudah Pernah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${m(o)}</span>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 font-black">
                        <span class="text-slate-700 dark:text-slate-200">Sisa Hutang Wajib Bayar:</span>
                        <span class="text-rose-500 dark:text-rose-400 text-base font-black" id="pop-unpaid-base" data-unpaid="${r}">${m(r)}</span>
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
                            max="${r}" 
                            value="${r}" 
                            class="w-full bg-slate-50 dark:bg-slate-900 font-black text-lg pl-11 pr-4 h-12 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                            style="color: var(--color-primary)"
                            oninput="window.recalcPOPaymentPreview(${r})"
                        >
                    </div>

                    <!-- Quick-Pay Chips (25%, 50%, 75%, 100% LUNAS) -->
                    <div class="grid grid-cols-4 gap-2 pt-1">
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.25, ${r})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            25%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.50, ${r})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            50%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.75, ${r})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            75%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(1.00, ${r})" 
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
    `),window.recalcPOPaymentPreview(r),n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("purchasePayment"),U(n,x))};window.setPOPaymentQuickPercent=(t,s)=>{const e=i("pop-amount");if(!e)return;const a=Math.round(s*t);e.value=a,window.recalcPOPaymentPreview(s)};window.recalcPOPaymentPreview=t=>{const s=parseFloat(i("pop-amount")?.value)||0,e=i("pop-remaining-preview");if(!e)return;const a=Math.max(0,t-s);a===0?e.innerHTML='<span class="text-emerald-500 font-bold"><i class="fa-solid fa-circle-check mr-1"></i>Lunas Penuh</span>':e.innerHTML=`Sisa Setelah Bayar: <b class="text-amber-500">${m(a)}</b>`};window.closePurchasePaymentModal=(t=!1)=>{const s=i("modal-po-payment"),e=i("modal-po-payment-box");s&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("purchasePayment",!1,()=>N(s,e)):N(s,e))};window.submitPurchasePayment=async(t,s)=>{t.preventDefault(),G("Mencatat Pembayaran...");try{const a=(b.purchases||[]).find(v=>String(v.id)===String(s));if(!a)throw new Error("Data PO tidak ditemukan!");const o=parseFloat(i("pop-amount")?.value)||0,r=i("pop-date")?.value||new Date().toISOString(),n=i("pop-method")?.value||"Transfer Bank",x=(i("pop-note")?.value||"").trim();if(o<=0)return A(),h("Nominal pembayaran harus lebih besar dari 0!");const d=parseFloat(a.total)||0,p=(parseFloat(a.amountPaid)||0)+o,c=Math.max(0,d-p);a.amountPaid=p,a.balance=c,p>=d?(a.paymentStatus="lunas",a.status==="received"&&(a.status="completed")):a.paymentStatus="sebagian",a.paymentHistory||(a.paymentHistory=[]),a.paymentHistory.push({date:r,amount:o,method:n,note:x||`Pembayaran cicilan tempo (${n})`}),a.updatedAt=new Date().toISOString(),await H(["purchases"]),A(),window.closePurchasePaymentModal(),h("Pembayaran hutang supplier berhasil dicatat!"),F()}catch(e){A(),console.error("Gagal simpan pembayaran:",e),h("Gagal memproses: "+e.message)}};window.sendPOToSupplierWA=t=>{const e=(b.purchases||[]).find(l=>String(l.id)===String(t));if(!e)return h("Data PO tidak ditemukan!");const a=e.supplierPhone?Q(e.supplierPhone):"";if(!a)return h("Nomor WhatsApp supplier belum tercatat di data supplier!");const o=b.store?.name||"Toko Putri Utama Teknik",r=b.store?.address||"",n=b.store?.phone||"";let x=(e.items||[]).map((l,p)=>{const c=l.variantName?` [Varian: ${l.variantName}]`:"";return`${p+1}. *${l.name}${c}* - ${I(l.qty)} ${l.unit||"pcs"} @ Rp ${Number(l.unitPrice||0).toLocaleString("id-ID")}`}).join(`
`),d=`*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*
Dari: *${o}*
`+(r?`Alamat: ${r}
`:"")+(n?`Telp Toko: ${n}
`:"")+`-----------------------------------------
Kepada Yth: *${e.supplierName}*
Nomor PO: *${e.poNumber||e.id}*
Tanggal: ${M(e.date||e.createdAt)}
Termin: ${e.paymentType==="tempo"?`Tempo ${e.tempoDays||14} Hari (Jatuh Tempo: ${M(e.tempoDueDate)})`:e.paymentType==="konsinyasi"?"Konsinyasi":"Cash Saat Kirim"}
-----------------------------------------
*DAFTAR BARANG YANG DIPESAN:*
${x}
-----------------------------------------
*Subtotal:* Rp ${Number(e.subtotal||0).toLocaleString("id-ID")}
`+(e.discount>0?`*Diskon:* -Rp ${Number(e.discount).toLocaleString("id-ID")}
`:"")+(e.shippingFee>0?`*Ongkir:* +Rp ${Number(e.shippingFee).toLocaleString("id-ID")}
`:"")+`*TOTAL NILAI PO:* *Rp ${Number(e.total||0).toLocaleString("id-ID")}*
`+(e.notes?`
*Catatan:* ${e.notes}
`:"")+`
Mohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya!`;Z(a,d)};window.printPurchaseOrder=t=>{if(typeof window.openDocPreview=="function"){window.openDocPreview("po",t);return}const e=(b.purchases||[]).find(p=>String(p.id)===String(t));if(!e)return h("Data PO tidak ditemukan!");const a=b.store||{};if(!i("po-print-container"))return;const r=e.paymentType==="tempo"?`Tempo ${e.tempoDays||14} Hari (Jatuh Tempo: ${M(e.tempoDueDate)})`:e.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",n=`
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${u(a.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${u(a.address||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${u(a.phone||"-")}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${u(e.poNumber||e.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${M(e.date||e.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${u(e.supplierName)}</p>
                    ${e.supplierPhone?`<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${u(e.supplierPhone)}</p>`:""}
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Syarat &amp; Ketentuan:</span>
                    <p style="margin: 0; font-weight: bold;">Termin: ${r}</p>
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
                    ${(e.items||[]).map((p,c)=>`
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 8px 10px; text-align: center;">${c+1}</td>
                            <td style="padding: 8px 10px;">
                                <b style="color: #0f172a;">${u(p.name)}</b>
                                ${p.variantName?`<br><span style="display: inline-block; font-size: 10px; font-weight: 700; color: #0f172a; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 2px 7px; border-radius: 4px; margin-top: 3px;">Varian: ${u(p.variantName)}</span>`:""}
                                ${p.sku?`<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${u(p.sku)}</span>`:""}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold; color: #0f172a;">${I(p.qty)} ${u(p.unit||"pcs")}</td>
                            <td style="padding: 8px 10px; text-align: right; color: #334155;">${m(p.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold; color: #0f172a;">${m(Math.round((parseFloat(p.qty)||0)*(parseFloat(p.unitPrice)||0)))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${u(e.notes||"Harap barang dikirim sesuai spesifikasi & packing aman.")}</p>
                </div>
                <div style="width: 250px;">
                    <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                        <span>Subtotal:</span>
                        <span style="font-weight: bold; color: #0f172a;">${m(e.subtotal)}</span>
                    </div>
                    ${e.discount>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #16a34a;">
                            <span>Diskon:</span>
                            <span>-${m(e.discount)}</span>
                        </div>
                    `:""}
                    ${e.shippingFee>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                            <span>Ongkos Kirim:</span>
                            <span>+${m(e.shippingFee)}</span>
                        </div>
                    `:""}
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 2px solid #0f172a; margin-top: 4px; font-size: 14px; font-weight: 900;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color: #0f172a;">${m(e.total)}</span>
                    </div>
                </div>
            </div>

            <!-- TANDA TANGAN -->
            <div style="display: flex; justify-content: space-between; text-align: center; font-size: 12px; margin-top: 50px;">
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Dipesan Oleh (Purchasing):</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${u(a.name||"Toko Putri")}</div>
                </div>
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Diterima &amp; Disetujui Oleh:</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${u(e.supplierName)}</div>
                </div>
            </div>
        </div>
    `,x=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${u(e.poNumber||e.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${n}
        </body>
        </html>
    `;if(typeof window.openHtmlPrintPreview=="function"){window.openHtmlPrintPreview({title:`Purchase Order #${e.poNumber||e.id}`,html:x,paper:"a4"});return}let d=i("po-print-iframe");d||(d=document.createElement("iframe"),d.id="po-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",document.body.appendChild(d));const l=d.contentWindow.document;l.open(),l.write(x),l.close(),setTimeout(()=>{d.contentWindow.focus(),d.contentWindow.print()},300)};window.renderPurchasesView=F;window.computePurchaseMetrics=J;window.printPOLabels=t=>{const s=(b.purchases||[]).find(o=>String(o.id)===String(t));if(!s||!s.items||!s.items.length){typeof h=="function"&&h("Tidak ada item pada PO ini!");return}const e=s.items[0],a={};e.variantName?a[e.variantName]=e.qty:a[e.productId]=e.qty,window.closePurchaseDetailModal?.(),window.openProductBarcodeLabelModal?.(e.productId,a)};export{J as computePurchaseMetrics,K as ensurePurchaseModals,I as formatQty,F as renderPurchasesView};

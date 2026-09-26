import"./module-member-BivWSgSm.js";import{a as x,e as n,b as S,f as u,i as p,al as H,u as f,v as F,a3 as I,a1 as v,z as B,G as C,t as G,am as q}from"./module-print-DdyfBoO_.js";import{o as N}from"./module-admin-pz9AEe5x.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-Dl-opoDC.js";const M=()=>{if(["modal-po-form","modal-po-detail","modal-po-payment"].forEach(e=>{const r=document.querySelector(`#admin-content #${e}`);r&&r.remove()}),!n("modal-po-form")){const e=document.createElement("div");e.id="modal-po-form",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&window.closePOFormModal?.()},e.innerHTML=`
            <div id="modal-po-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(e)}if(!n("modal-po-detail")){const e=document.createElement("div");e.id="modal-po-detail",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&window.closePODetailModal?.()},e.innerHTML=`
            <div id="modal-po-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!n("modal-po-payment")){const e=document.createElement("div");e.id="modal-po-payment",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&window.closePurchasePaymentModal?.()},e.innerHTML=`
            <div id="modal-po-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}};let g="all",R="",b=[];const $=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return e}},z=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return e}},K=()=>{const e=x.purchases||[],r=new Date,t=r.getMonth(),a=r.getFullYear();let s=0,o=0,c=0,d=0;return e.forEach(i=>{const l=new Date(i.date||i.createdAt||0),m=parseFloat(i.total)||0,h=parseFloat(i.amountPaid)||0,P=m-h;l.getMonth()===t&&l.getFullYear()===a&&i.status!=="cancelled"&&(s+=m),i.paymentType==="tempo"&&i.paymentStatus!=="lunas"&&i.status!=="cancelled"&&P>0&&(o+=P),i.status==="ordered"?c++:(i.status==="completed"||i.status==="received"&&i.paymentStatus==="lunas")&&d++}),{monthPurchasesTotal:s,totalUnpaidDebt:o,pendingArrivalCount:c,completedCount:d}},O=()=>{if(M(),!n("admin-content"))return;const r=K(),t=x.purchases||[];t.sort((o,c)=>new Date(c.date||c.createdAt||0)-new Date(o.date||o.createdAt||0));const a=R.toLowerCase().trim();let s=t.filter(o=>{if(!(!a||(o.poNumber||"").toLowerCase().includes(a)||(o.supplierName||"").toLowerCase().includes(a)||(o.notes||"").toLowerCase().includes(a)||(o.items||[]).some(d=>(d.name||"").toLowerCase().includes(a))))return!1;if(g==="ordered")return o.status==="ordered";if(g==="received")return o.status==="received";if(g==="unpaid"){const d=(parseFloat(o.total)||0)-(parseFloat(o.amountPaid)||0);return o.paymentType==="tempo"&&d>0&&o.paymentStatus!=="lunas"}else if(g==="completed")return o.status==="completed"||o.status==="received"&&o.paymentStatus==="lunas";return!0});S("admin-content",`
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 0. HERO BANNER PENGADAAN & ORDER KULAKAN (PO) — THEME HARMONIZED -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.05)] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 shadow-xs">
                <!-- Ambient Glow Dekorasi -->
                <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-15 blur-3xl" style="background: var(--color-primary)"></div>
                <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10 blur-2xl" style="background: var(--color-primary)"></div>

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
                        <button onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                            <span>Data Supplier</span>
                        </button>
                        <button onclick="window.openCreatePOModal()" class="px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Buat Order PO</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 1. SUMMARY METRICS CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kulakan Bulan Ini</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${u(r.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${u(r.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-blue-500">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">${r.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-500">PO Selesai / Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${r.completedCount}</p>
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
                        value="${p(R)}" 
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
                    class="px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${g==="all"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${g==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    Semua PO (${t.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${g==="ordered"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${g==="ordered"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan / Dikirim (${t.filter(o=>o.status==="ordered").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${g==="received"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${g==="received"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${t.filter(o=>o.status==="received").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${g==="unpaid"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${g==="unpaid"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Belum Lunas
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${g==="completed"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${g==="completed"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-3">
                ${s.length===0?`
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Order Pembelian (PO)</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Buat order pembelian kulakan ke supplier untuk mencatat barang masuk, memperbarui stok toko otomatis, dan melacak jatuh tempo hutang.</p>
                        <button onclick="window.openCreatePOModal()" class="mt-4 px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-glow cursor-pointer transition-all active:scale-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-cart-plus mr-1.5"></i> Buat Order PO Pertama
                        </button>
                    </div>
                `:s.map(o=>Y(o)).join("")}
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `)},Y=e=>{const r=parseFloat(e.total)||0,t=parseFloat(e.amountPaid)||0,a=r-t;let s="";e.status==="ordered"?s='<span class="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-200 dark:border-indigo-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan (Kirim)</span>':e.status==="received"?s='<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-[10px] font-black border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>':e.status==="completed"?s='<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>':e.status==="cancelled"&&(s='<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[10px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Batal</span>');let o="";e.paymentType==="cash"?o='<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Tunai / Cash</span>':e.paymentType==="konsinyasi"?o='<span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-[10px] font-bold">Konsinyasi (Titipan)</span>':e.paymentStatus==="lunas"||a<=0?o='<span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>':o=`<span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${u(a)}</span>`;const c=(e.items||[]).length,d=e.supplierPhone?H(e.supplierPhone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl shadow-2xs group">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas PO & Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl ${e.status==="received"||e.status==="completed"?"border shadow-inner":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-inner"} flex items-center justify-center text-xl shrink-0 font-black" style="${e.status==="received"||e.status==="completed"?"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);":""}">
                        <i class="fa-solid ${e.status==="received"||e.status==="completed"?"fa-boxes-stacked":"fa-cart-flatbed"}"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${p(e.poNumber||e.id)}</h4>
                            ${s}
                            ${o}
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-700 dark:text-slate-300">
                                <i class="fa-solid fa-truck-field text-[var(--color-primary)] mr-1"></i>${p(e.supplierName||"Supplier")}
                            </span>
                            <span><i class="fa-regular fa-calendar text-slate-400 mr-1"></i>${$(e.date||e.createdAt)}</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${c} Macam Barang</span>
                            ${e.tempoDueDate&&e.paymentType==="tempo"?`<span><i class="fa-solid fa-calendar-xmark text-amber-500 mr-1"></i>Jatuh Tempo: <b>${$(e.tempoDueDate)}</b></span>`:""}
                        </div>

                        <!-- Snippet preview item barang -->
                        <div class="text-[11px] text-slate-400 mt-1.5 truncate max-w-xl">
                            ${(e.items||[]).map(i=>`${p(i.name)} (${i.qty} ${p(i.unit||"pcs")})`).join(" • ")}
                        </div>
                    </div>
                </div>

                <!-- Sisi Kanan: Nilai Total & Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                    <div class="text-left lg:text-right">
                        <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Total Nilai PO</span>
                        <span class="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight">${u(r)}</span>
                        ${e.paymentType==="tempo"&&a>0?`
                            <span class="block text-[10px] font-bold text-amber-500">Sisa: ${u(a)}</span>
                        `:""}
                    </div>

                    <div class="flex items-center gap-1.5 ml-auto lg:ml-2 flex-wrap sm:flex-nowrap">
                        <!-- AKSI 1: TERIMA BARANG & AUTO-RESTOCK (JIKA MASIH DIPESAN) -->
                        ${e.status==="ordered"?`
                            <button 
                                onclick="event.stopPropagation(); window.receiveAndRestockPO('${e.id}')" 
                                class="px-3 h-9 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                                style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);"
                                title="Barang Telah Tiba: Tambah Stok ke Gudang &amp; Etalase Otomatis"
                            >
                                <i class="fa-solid fa-boxes-stacked text-xs"></i>
                                <span>Terima Barang</span>
                            </button>
                        `:""}

                        <!-- AKSI 2: BAYAR / CICIL HUTANG (JIKA TEMPO & BELUM LUNAS) -->
                        ${e.paymentType==="tempo"&&a>0?`
                            <button 
                                onclick="event.stopPropagation(); window.openPurchasePaymentModal('${e.id}')" 
                                class="px-3 h-9 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
                                title="Catat Pembayaran Cicilan Hutang Tempo"
                            >
                                <i class="fa-solid fa-money-bill-wave text-xs"></i>
                                <span>Bayar Hutang</span>
                            </button>
                        `:""}

                        <!-- AKSI 3: KIRIM WA SALES -->
                        ${d?`
                            <button 
                                onclick="event.stopPropagation(); window.sendPOToSupplierWA('${e.id}')" 
                                class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer"
                                title="Kirim Surat Pesanan PO ke WhatsApp Sales"
                            >
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        `:""}

                        <!-- AKSI 4: CETAK DOKUMEN PO -->
                        <button 
                            onclick="event.stopPropagation(); window.printPurchaseOrder('${e.id}')" 
                            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer"
                            title="Cetak Surat Pesanan (Print / PDF)"
                        >
                            <i class="fa-solid fa-print text-xs"></i>
                        </button>

                        <!-- AKSI 5: DETAIL PO -->
                        <button 
                            onclick="window.openPurchaseDetailModal('${e.id}')" 
                            class="px-3.5 h-9 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-2xs border cursor-pointer"
                            style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.3);"
                            title="Buka Rincian Nota &amp; Histori Pembayaran"
                        >
                            Rincian
                        </button>

                        <!-- AKSI 6: HAPUS PO -->
                        <button 
                            onclick="event.stopPropagation(); window.deletePurchaseOrder('${e.id}')" 
                            class="w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                            title="Hapus Order PO"
                        >
                            <i class="fa-solid fa-trash text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `};window.handlePurchaseSearch=e=>{R=e||"",O()};window.setPurchaseFilter=e=>{g=e,O()};window.receiveAndRestockPO=e=>{const t=(x.purchases||[]).find(s=>String(s.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");if(t.stockRestocked)return f("Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.");const a=(t.items||[]).map(s=>`• <b>${p(s.name)}</b>: +${s.qty} ${p(s.unit||"pcs")} (Modal HPP: ${u(s.unitPrice)})`).join("<br>");F("Terima Barang & Restock Otomatis",`Konfirmasi barang kulakan dari <b>${p(t.supplierName)}</b> (${t.poNumber}) telah tiba di toko / gudang?<br><br>
        <div class="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-left text-xs space-y-1">
            <p class="font-bold text-teal-800 dark:text-teal-300"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok produk berikut akan otomatis bertambah:</p>
            <div class="text-slate-700 dark:text-slate-300 mt-1">${a}</div>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,async()=>{I("Menambahkan Stok ke Gudang...");try{let s=!1;const o=x.products||[];(t.items||[]).forEach(i=>{if(!i.productId)return;const l=o.find(m=>String(m.id)===String(i.productId));if(l){const m=parseFloat(i.qty)||0,h=parseFloat(i.unitPrice)||0,P=parseFloat(l.stock)||0;l.stock=P+m,h>0&&(l.hpp=h),(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0),s=!0}}),t.status="received",t.stockRestocked=!0,t.receivedAt=new Date().toISOString();const c=parseFloat(t.total)||0;(parseFloat(t.amountPaid)||0)>=c&&(t.status="completed",t.paymentStatus="lunas"),await N(s?["purchases","products"]:["purchases"]),v(),f("Barang berhasil diterima & stok toko bertambah! 📦✨"),O()}catch(s){v(),console.error("Gagal restock produk:",s),f("Gagal memproses restock: "+s.message)}},"Ya, Terima & Restock")};window.openCreatePOModal=(e=null,r=null)=>{M();const t=!!r,a=x.purchases||[],s=x.suppliers||[];if(s.length===0){F("Belum Ada Rekanan","Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.",()=>{window.openAdminTab&&(window.openAdminTab("suppliers"),setTimeout(()=>{window.openSupplierFormModal?.()},200))},"Tambah Supplier");return}let o={};if(t)o=a.find(i=>String(i.id)===String(r))||{},b=JSON.parse(JSON.stringify(o.items||[]));else{const i=new Date().toISOString().split("T")[0],l=i.replace(/-/g,""),m=Math.floor(100+Math.random()*900);o={poNumber:`PO-${l}-${m}`,date:i,supplierId:e||(s[0]?s[0].id:""),paymentType:"tempo",tempoDays:14,items:[],discount:0,shippingFee:0,amountPaid:0,notes:""},b=[]}W(o,t);const c=n("modal-po-form"),d=n("modal-po-form-box");c&&B(c,d)};const W=(e,r)=>{if(!n("modal-po-form-content"))return;const a=x.suppliers||[];x.products,S("modal-po-form-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${r?"Edit Order Pembelian (PO)":"Buat Order Pembelian Baru (Kulakan)"}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-500 dark:text-slate-400 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-95">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${r?e.id:""}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 overflow-y-auto hide-scrollbar">
            
            <!-- 1. IDENTITAS HEADER PO -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3.5">
                <span class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-file-lines text-[var(--color-primary)] mr-1"></i> Data Utama Order Kulakan
                </span>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Pilih Supplier Rekanan *</label>
                        <select id="pof-supplierId" required class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all cursor-pointer" onchange="window.handlePOSupplierChange(this.value)">
                            ${a.map(s=>`
                                <option value="${s.id}" ${String(s.id)===String(e.supplierId)?"selected":""} class="font-bold">
                                    ${p(s.name)}${s.code?` (${p(s.code)})`:""}
                                </option>
                            `).join("")}
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Purchase Order *</label>
                        <input type="text" id="pof-poNumber" required value="${p(e.poNumber||"")}" placeholder="PO-202609-001" class="w-full text-xs font-mono font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Tanggal Order *</label>
                        <input type="date" id="pof-date" required value="${p(e.date||new Date().toISOString().split("T")[0])}" class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
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
                        ${e.paymentType==="cash"?"Bayar Penuh Saat Kirim":e.paymentType==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"}
                    </span>
                </div>

                <!-- Hidden native input agar kompatibel dengan form submit -->
                <input type="hidden" id="pof-paymentType" value="${e.paymentType||"tempo"}">

                <!-- Segmented Control Touch Pills -->
                <div class="flex items-center gap-2 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl">
                    <button 
                        type="button" 
                        id="pof-type-btn-cash" 
                        onclick="window.setPOPaymentType('cash')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${e.paymentType==="cash"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${e.paymentType==="cash"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-money-bill-wave text-xs"></i>
                        <span>Tunai / Cash</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-tempo" 
                        onclick="window.setPOPaymentType('tempo')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${!e.paymentType||e.paymentType==="tempo"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${!e.paymentType||e.paymentType==="tempo"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-clock text-xs"></i>
                        <span>Tempo (Hutang)</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-konsinyasi" 
                        onclick="window.setPOPaymentType('konsinyasi')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${e.paymentType==="konsinyasi"?"text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}"
                        style="${e.paymentType==="konsinyasi"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-handshake text-xs"></i>
                        <span>Konsinyasi</span>
                    </button>
                </div>

                <!-- Opsi Tambahan untuk Tempo -->
                <div id="pof-tempo-options-box" class="${!e.paymentType||e.paymentType==="tempo"?"space-y-3 pt-1":"hidden"}">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-[9px] font-black uppercase text-slate-400 mr-1">Preset Durasi:</span>
                        ${[7,14,30,45,60].map(s=>`
                            <button 
                                type="button" 
                                id="pof-tempo-chip-${s}" 
                                onclick="window.setPOTempoPresetDays(${s})" 
                                class="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all active:scale-95 cursor-pointer ${(e.tempoDays||14)===s?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                                style="${(e.tempoDays||14)===s?"background: var(--color-primary);":""}"
                            >
                                ${s} Hari
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
                                value="${e.tempoDays||14}" 
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
                        onclick="window.addPOItemRow()" 
                        class="px-3.5 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
                        style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.25);"
                    >
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah Barang</span>
                    </button>
                </div>

                <div id="po-items-table-container">
                    <!-- Item PO di-render oleh renderPOItemsTable() dalam format Adaptive Mobile Cards + Desktop Table -->
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
                        >${p(e.notes||"")}</textarea>
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
                                    value="${e.discount||0}" 
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
                                    value="${e.shippingFee||0}" 
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
                                    value="${e.amountPaid||0}" 
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
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-white/95 dark:bg-slate-900/95 sticky bottom-0 z-20 shrink-0 backdrop-blur-md" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
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
    `),b.length===0?window.addPOItemRow():A(),window.recalcPOTempoDueDate(),window.recalcPOTotals()};window.closePOFormModal=()=>{const e=n("modal-po-form"),r=n("modal-po-form-box");e&&C(e,r)};window.setPOPaymentType=e=>{const r=n("pof-paymentType");r&&(r.value=e),["cash","tempo","konsinyasi"].forEach(s=>{const o=n(`pof-type-btn-${s}`);o&&(s===e?(o.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-white shadow-sm",o.style.background="var(--color-primary)",o.style.boxShadow="0 2px 8px rgba(var(--color-primary-rgb), 0.3)"):(o.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",o.style.background="",o.style.boxShadow=""))});const t=n("pof-tempo-options-box"),a=n("pof-payment-badge-desc");t&&(e==="tempo"?t.classList.remove("hidden"):t.classList.add("hidden")),a&&(a.textContent=e==="cash"?"Bayar Penuh Saat Kirim":e==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"),window.handlePOPaymentTypeChange(e)};window.setPOTempoPresetDays=e=>{const r=n("pof-tempoDays");r&&(r.value=e,window.recalcPOTempoDueDate()),[7,14,30,45,60].forEach(t=>{const a=n(`pof-tempo-chip-${t}`);a&&(t===e?(a.style.background="var(--color-primary)",a.style.color="#fff",a.style.borderColor="transparent"):(a.style.background="",a.style.color="",a.style.borderColor=""))})};window.addPOItemRow=()=>{const e=x.products||[],r=n("pof-supplierId")?.value||"",a=e.filter(s=>String(s.supplierId)===String(r))[0]||e[0]||null;b.push({productId:a?a.id:"",name:a?a.name:"",sku:a&&a.sku||"",qty:1,unit:"Pcs",unitPrice:a&&(parseFloat(a.hpp)||parseFloat(a.price))||0,subtotal:a&&(parseFloat(a.hpp)||parseFloat(a.price))||0}),A(),window.recalcPOTotals()};window.removePOItemRow=e=>{b.splice(e,1),A(),window.recalcPOTotals()};window.stepPOItemQty=(e,r)=>{if(!b[e])return;const t=parseFloat(b[e].qty)||0,a=Math.max(1,t+r);b[e].qty=a,b[e].subtotal=a*(parseFloat(b[e].unitPrice)||0),A(),window.recalcPOTotals()};const A=()=>{if(!n("po-items-table-container"))return;const r=x.products||[],t=n("pof-supplierId")?.value||"";if(b.length===0){S("po-items-table-container",`
            <div class="p-8 text-center flex flex-col items-center justify-center text-slate-400 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2.5" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <p class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200">Belum Ada Barang yang Ditambahkan</p>
                <p class="text-[11px] text-slate-400 mt-0.5 max-w-xs">Tambahkan produk dari katalog toko untuk memesan kulakan ke supplier.</p>
                <button type="button" onclick="window.addPOItemRow()" class="mt-3.5 px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-plus text-xs"></i>
                    <span>+ Tambah Barang Pertama</span>
                </button>
            </div>
        `);return}S("po-items-table-container",`
        <!-- ═══ TAMPILAN MOBILE (NATIVE APP CARDS) ═══ -->
        <div class="space-y-3 sm:hidden">
            ${b.map((a,s)=>{const o=(parseFloat(a.qty)||0)*(parseFloat(a.unitPrice)||0),c=r.find(i=>String(i.id)===String(a.productId)),d=c?G(c,{size:"thumb"}):"";return`
                    <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-xs space-y-3 relative group">
                        <!-- Baris 1: Nomor Urut, Thumbnail, Dropdown Produk, & Tombol Hapus -->
                        <div class="flex items-start gap-2.5">
                            <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-200/70 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 mt-0.5">
                                ${c?.img?`<img src="${p(c.img)}" alt="${p(a.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${d}</div>`:d||`<div class="w-full h-full flex items-center justify-center font-black text-xs" style="color:var(--color-primary)">#${s+1}</div>`}
                            </div>

                            <div class="flex-1 min-w-0">
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                    Item #${s+1} — Pilih Produk Toko
                                </label>
                                <select 
                                    class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2 focus:border-[var(--color-primary)] focus:outline-none transition-all cursor-pointer"
                                    onchange="window.updatePOItemProduct(${s}, this.value)"
                                >
                                    <option value="" class="text-slate-400">-- Pilih Produk Toko --</option>
                                    ${r.map(i=>{const l=String(i.id)===String(a.productId),m=String(i.supplierId)===String(t);return`
                                            <option value="${i.id}" ${l?"selected":""} class="${m?"font-black":""}">
                                                ${m?"★ ":""}${p(i.name)}${i.sku?` (${i.sku})`:""}
                                            </option>
                                        `}).join("")}
                                </select>
                            </div>

                            <button 
                                type="button" 
                                onclick="window.removePOItemRow(${s})" 
                                class="w-9 h-9 rounded-xl text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:hover:bg-rose-600 transition-all flex items-center justify-center shrink-0 active:scale-90 cursor-pointer shadow-2xs mt-0.5" 
                                title="Hapus Baris Ini"
                            >
                                <i class="fa-solid fa-trash-can text-xs"></i>
                            </button>
                        </div>

                        <!-- Baris 2: Kuantitas (Stepper) & Harga Beli Modal (HPP) -->
                        <div class="grid grid-cols-2 gap-2.5 pt-1">
                            <div>
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Kuantitas &amp; Satuan</label>
                                <div class="flex items-center gap-1.5">
                                    <div class="flex-1 flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-xl p-1 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)]">
                                        <button type="button" onclick="window.stepPOItemQty(${s}, -1)" class="w-7 h-7 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer">−</button>
                                        <input 
                                            type="number" 
                                            min="0.01" 
                                            step="any" 
                                            value="${a.qty}" 
                                            class="w-full text-center text-xs font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none" 
                                            oninput="window.updatePOItemField(${s}, 'qty', this.value)"
                                        >
                                        <button type="button" onclick="window.stepPOItemQty(${s}, 1)" class="w-7 h-7 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer">+</button>
                                    </div>
                                    <input 
                                        type="text" 
                                        value="${p(a.unit||"Pcs")}" 
                                        placeholder="Pcs" 
                                        class="w-16 text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-1 focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${s}, 'unit', this.value)"
                                    >
                                </div>
                            </div>

                            <div>
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Harga Beli Modal (HPP)</label>
                                <div class="relative">
                                    <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        step="1" 
                                        value="${a.unitPrice}" 
                                        class="w-full pl-8 pr-2.5 py-2 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${s}, 'unitPrice', this.value)"
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- Baris 3: Subtotal Strip -->
                        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs">
                            <span class="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Subtotal Item:</span>
                            <span class="font-black text-sm" style="color:var(--color-primary)" id="po-item-subtotal-card-${s}">
                                ${u(o)}
                            </span>
                        </div>
                    </div>
                `}).join("")}
        </div>

        <!-- ═══ TAMPILAN DESKTOP / TABLET (MODERN CLEAN TABLE) ═══ -->
        <div class="hidden sm:block border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
            <table class="w-full text-left border-collapse text-xs">
                <thead>
                    <tr class="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th class="py-3 px-3 w-10 text-center">#</th>
                        <th class="py-3 px-3">Produk Toko</th>
                        <th class="py-3 px-3 w-32 text-center">Jumlah</th>
                        <th class="py-3 px-3 w-20 text-center">Satuan</th>
                        <th class="py-3 px-3 w-40 text-right">Harga Modal (HPP)</th>
                        <th class="py-3 px-3 w-36 text-right">Subtotal</th>
                        <th class="py-3 px-2 w-12 text-center"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${b.map((a,s)=>{const o=(parseFloat(a.qty)||0)*(parseFloat(a.unitPrice)||0);return`
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/40 transition-colors">
                                <td class="py-2.5 px-3 text-center font-bold text-slate-400 text-[11px]">${s+1}</td>
                                <td class="py-2.5 px-3">
                                    <select 
                                        class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2 focus:border-[var(--color-primary)] focus:outline-none transition-all cursor-pointer"
                                        onchange="window.updatePOItemProduct(${s}, this.value)"
                                    >
                                        <option value="" class="text-slate-400">-- Pilih Produk Toko --</option>
                                        ${r.map(c=>{const d=String(c.id)===String(a.productId),i=String(c.supplierId)===String(t);return`
                                                <option value="${c.id}" ${d?"selected":""} class="${i?"font-black":""}">
                                                    ${i?"★ ":""}${p(c.name)}${c.sku?` (${c.sku})`:""}
                                                </option>
                                            `}).join("")}
                                    </select>
                                </td>
                                <td class="py-2.5 px-3">
                                    <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-xl p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)]">
                                        <button type="button" onclick="window.stepPOItemQty(${s}, -1)" class="w-6 h-6 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center active:scale-90 transition-all cursor-pointer">−</button>
                                        <input 
                                            type="number" 
                                            min="0.01" 
                                            step="any" 
                                            value="${a.qty}" 
                                            class="w-full text-center text-xs font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-1" 
                                            oninput="window.updatePOItemField(${s}, 'qty', this.value)"
                                        >
                                        <button type="button" onclick="window.stepPOItemQty(${s}, 1)" class="w-6 h-6 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center active:scale-90 transition-all cursor-pointer">+</button>
                                    </div>
                                </td>
                                <td class="py-2.5 px-3">
                                    <input 
                                        type="text" 
                                        value="${p(a.unit||"Pcs")}" 
                                        placeholder="Pcs" 
                                        class="w-full text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-1.5 px-1 focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${s}, 'unit', this.value)"
                                    >
                                </td>
                                <td class="py-2.5 px-3">
                                    <div class="relative">
                                        <span class="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            step="1" 
                                            value="${a.unitPrice}" 
                                            class="w-full pl-7 pr-2 py-1.5 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] focus:outline-none" 
                                            oninput="window.updatePOItemField(${s}, 'unitPrice', this.value)"
                                        >
                                    </div>
                                </td>
                                <td class="py-2.5 px-3 text-right font-black text-xs text-slate-800 dark:text-slate-100" id="po-item-subtotal-row-${s}">
                                    ${u(o)}
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <button 
                                        type="button" 
                                        onclick="window.removePOItemRow(${s})" 
                                        class="w-8 h-8 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all flex items-center justify-center mx-auto active:scale-90 cursor-pointer" 
                                        title="Hapus Baris"
                                    >
                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                    </button>
                                </td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>

        <!-- Tombol Tambah Barang Mengambang Penuh -->
        <button 
            type="button" 
            onclick="window.addPOItemRow()" 
            class="w-full py-3.5 rounded-2xl border-2 border-dashed border-[rgba(var(--color-primary-rgb),0.35)] bg-[rgba(var(--color-primary-rgb),0.04)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-2xs mt-2"
        >
            <i class="fa-solid fa-circle-plus text-base"></i>
            <span>+ Tambah Barang Kulakan</span>
        </button>
    `)};window.updatePOItemProduct=(e,r)=>{const a=(x.products||[]).find(s=>String(s.id)===String(r));a&&b[e]&&(b[e].productId=a.id,b[e].name=a.name,b[e].sku=a.sku||"",b[e].unitPrice=parseFloat(a.hpp)||parseFloat(a.price)||0,b[e].subtotal=(parseFloat(b[e].qty)||1)*b[e].unitPrice),A(),window.recalcPOTotals()};window.updatePOItemField=(e,r,t)=>{if(b[e]){if(r==="qty"||r==="unitPrice"){b[e][r]=parseFloat(t)||0,b[e].subtotal=(parseFloat(b[e].qty)||0)*(parseFloat(b[e].unitPrice)||0);const a=n(`po-item-subtotal-card-${e}`),s=n(`po-item-subtotal-row-${e}`);a&&(a.textContent=u(b[e].subtotal)),s&&(s.textContent=u(b[e].subtotal))}else b[e][r]=t;window.recalcPOTotals()}};window.recalcPOTempoDueDate=()=>{const e=n("pof-date")?.value||new Date().toISOString().split("T")[0],r=parseInt(n("pof-tempoDays")?.value,10)||14,t=new Date(e);t.setDate(t.getDate()+r);const a=t.toISOString().split("T")[0],s=n("pof-tempoDueDate");s&&(s.value=$(a),s.setAttribute("data-due-iso",a))};window.handlePOSupplierChange=e=>{const t=(x.suppliers||[]).find(a=>String(a.id)===String(e));if(t&&t.defaultTerms)if(t.defaultTerms.startsWith("tempo")){const a=parseInt(t.defaultTerms.split("_")[1],10)||14;window.setPOTempoPresetDays(a),window.setPOPaymentType("tempo")}else t.defaultTerms==="konsinyasi"?window.setPOPaymentType("konsinyasi"):window.setPOPaymentType("cash");A()};window.handlePOPaymentTypeChange=e=>{const r=n("pof-dp-label"),t=n("pof-amountPaid");if(e==="tempo")r&&(r.innerText="Uang Muka / DP:"),window.recalcPOTempoDueDate();else if(r&&(r.innerText="Pembayaran:"),e==="cash"&&t){const a=window.computePOGrandTotal();t.value=a}window.recalcPOTotals()};window.computePOGrandTotal=()=>{const e=b.reduce((s,o)=>s+(parseFloat(o.qty)||0)*(parseFloat(o.unitPrice)||0),0),r=parseFloat(n("pof-discount")?.value)||0,t=parseFloat(n("pof-shippingFee")?.value)||0;return Math.max(0,e-r+t)};window.recalcPOTotals=()=>{const e=b.reduce((l,m)=>l+(parseFloat(m.qty)||0)*(parseFloat(m.unitPrice)||0),0),r=parseFloat(n("pof-discount")?.value)||0,t=parseFloat(n("pof-shippingFee")?.value)||0,a=Math.max(0,e-r+t),s=parseFloat(n("pof-amountPaid")?.value)||0,o=Math.max(0,a-s),c=n("pof-calc-subtotal"),d=n("pof-calc-grandtotal"),i=n("pof-calc-balance");c&&(c.innerText=u(e)),d&&(d.innerText=u(a)),i&&(i.innerText=u(o))};window.savePOForm=async(e,r)=>{e.preventDefault(),I("Menyimpan Order Pembelian...");try{const t=x.suppliers||[],a=n("pof-supplierId")?.value,s=t.find(w=>String(w.id)===String(a))||{},o=(n("pof-poNumber")?.value||"").trim(),c=n("pof-date")?.value||new Date().toISOString().split("T")[0],d=n("pof-paymentType")?.value||"tempo",i=parseInt(n("pof-tempoDays")?.value,10)||14,l=n("pof-tempoDueDate")?.getAttribute("data-due-iso")||"",m=(n("pof-notes")?.value||"").trim(),h=parseFloat(n("pof-discount")?.value)||0,P=parseFloat(n("pof-shippingFee")?.value)||0,T=parseFloat(n("pof-amountPaid")?.value)||0;if(b.length===0)return v(),f("Minimal harus ada 1 barang dalam order pembelian!");const j=b.filter(w=>w.name&&(parseFloat(w.qty)||0)>0);if(j.length===0)return v(),f("Pastikan produk dan kuantitas order telah diisi dengan benar!");const L=j.reduce((w,k)=>w+(parseFloat(k.qty)||0)*(parseFloat(k.unitPrice)||0),0),D=Math.max(0,L-h+P),U=Math.max(0,D-T);let E="belum_bayar";T>=D&&D>0?E="lunas":T>0&&(E="sebagian"),x.purchases||(x.purchases=[]);const y={id:r||"po_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),poNumber:o,date:c,supplierId:a,supplierName:s.name||"Supplier",supplierPhone:s.phone||"",paymentType:d,tempoDays:d==="tempo"?i:0,tempoDueDate:d==="tempo"?l:null,items:j,subtotal:L,discount:h,shippingFee:P,total:D,amountPaid:T,balance:U,paymentStatus:E,notes:m,updatedAt:new Date().toISOString()};if(!r)y.status="ordered",y.stockRestocked=!1,y.createdAt=new Date().toISOString(),y.paymentHistory=T>0?[{date:new Date().toISOString(),amount:T,note:d==="cash"?"Pembayaran Tunai Lunas":"Uang Muka / DP Awal",method:d==="cash"?"Tunai":"Transfer"}]:[],x.purchases.unshift(y);else{const w=x.purchases.findIndex(k=>String(k.id)===String(r));if(w>-1){const k=x.purchases[w];y.status=k.status||"ordered",y.stockRestocked=k.stockRestocked||!1,y.createdAt=k.createdAt,y.paymentHistory=k.paymentHistory||[],T>(k.amountPaid||0)&&y.paymentHistory.push({date:new Date().toISOString(),amount:T-(k.amountPaid||0),note:"Penyesuaian Bayar via Edit PO",method:"Transfer / Kas"}),x.purchases[w]=y}}await N(["purchases"]),v(),window.closePOFormModal(),f(r?"Order PO diperbarui! ✨":"Order PO kulakan berhasil dibuat! 🛒"),O()}catch(t){v(),console.error("Gagal menyimpan PO:",t),f("Gagal menyimpan PO: "+t.message)}};window.deletePurchaseOrder=e=>{const t=(x.purchases||[]).find(s=>String(s.id)===String(e));if(!t)return;let a=`Hapus pesanan kulakan <b>${p(t.poNumber||t.id)}</b> ke <b>${p(t.supplierName)}</b>?`;t.stockRestocked&&(a+='<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>'),F("Hapus Purchase Order",a,async()=>{I("Menghapus PO...");try{x.purchases=(x.purchases||[]).filter(s=>String(s.id)!==String(e)),await N(["purchases"]),v(),f("Purchase Order berhasil dihapus."),O()}catch(s){v(),f("Gagal menghapus: "+s.message)}},"Hapus Permanen")};window.closePODetailModal=()=>{window.closePurchaseDetailModal()};window.openPurchaseDetailModal=e=>{M();const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=n("modal-po-detail"),s=n("modal-po-detail-box"),o=n("modal-po-detail-content");if(!a||!o)return;const c=parseFloat(t.total)||0,d=parseFloat(t.amountPaid)||0,i=c-d;S("modal-po-detail-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${p(t.poNumber||t.id)}</h3>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold" style="${t.status==="received"||t.status==="completed"?"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);":"background: rgba(59, 130, 246, 0.12); color: #2563eb; border: 1px solid rgba(59, 130, 246, 0.25);"}">
                            ${t.status==="ordered"?"Dipesan":t.status==="received"?"Barang Diterima":t.status==="completed"?"Selesai / Lunas":"Dibatalkan"}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Supplier: <b class="text-slate-700 dark:text-slate-200">${p(t.supplierName)}</b> • Tanggal: ${$(t.date||t.createdAt)}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.printPurchaseOrder('${t.id}')" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer" title="Cetak PO">
                    <i class="fa-solid fa-print text-xs"></i>
                </button>
                <button onclick="window.closePurchaseDetailModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 hide-scrollbar">
            <!-- DAFTAR BARANG YANG DIPESAN (DUAL MODE: MOBILE CARDS & DESKTOP TABLE) -->
            <div>
                <div class="flex items-center justify-between mb-2.5">
                    <h4 class="font-black text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked" style="color:var(--color-primary)"></i>
                        <span>Item Barang Dipesan (${(t.items||[]).length})</span>
                    </h4>
                </div>

                <!-- ═══ TAMPILAN MOBILE (NATIVE APP CARDS) ═══ -->
                <div class="sm:hidden space-y-2.5">
                    ${(t.items||[]).map((l,m)=>{const h=(parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0);return`
                            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-2">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5">
                                            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">${m+1}</span>
                                            <p class="font-bold text-xs text-slate-800 dark:text-slate-100 truncate">${p(l.name)}</p>
                                        </div>
                                        ${l.sku?`<span class="text-[10px] font-mono text-slate-400 ml-6 block">SKU: ${p(l.sku)}</span>`:""}
                                    </div>
                                    <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200 text-xs font-black shrink-0">
                                        ${l.qty} ${p(l.unit||"pcs")}
                                    </span>
                                </div>
                                <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                                    <span class="text-[11px] text-slate-400">Modal: <b>${u(l.unitPrice)}</b></span>
                                    <span class="font-black text-slate-800 dark:text-white" style="color:var(--color-primary)">${u(h)}</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>

                <!-- ═══ TAMPILAN DESKTOP (MODERN CLEAN TABLE) ═══ -->
                <div class="hidden sm:block border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xs">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                                <th class="py-2.5 px-3 w-10 text-center">#</th>
                                <th class="py-2.5 px-3">Nama Produk</th>
                                <th class="py-2.5 px-3 text-center">Jumlah</th>
                                <th class="py-2.5 px-3 text-right">Harga Modal (HPP)</th>
                                <th class="py-2.5 px-3 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${(t.items||[]).map((l,m)=>`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-2.5 px-3 text-center font-bold text-slate-400 text-[11px]">${m+1}</td>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-slate-100">${p(l.name)}</p>
                                        ${l.sku?`<span class="text-[10px] font-mono text-slate-400">SKU: ${p(l.sku)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 text-center font-bold text-slate-700 dark:text-slate-200">
                                        ${l.qty} ${p(l.unit||"pcs")}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${u(l.unitPrice)}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                        ${u((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0))}
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- RINGKASAN PEMBAYARAN & SISA HUTANG -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Informasi Tagihan</span>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Subtotal Nota:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${u(t.subtotal)}</span>
                    </div>
                    ${t.discount>0?`
                        <div class="flex justify-between text-emerald-500">
                            <span>Diskon Pembelian:</span>
                            <span>-${u(t.discount)}</span>
                        </div>
                    `:""}
                    ${t.shippingFee>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim Armada:</span>
                            <span>+${u(t.shippingFee)}</span>
                        </div>
                    `:""}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total Tagihan PO:</span>
                        <span style="color:var(--color-primary)">${u(c)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${u(d)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1">
                        <span class="text-amber-500">Sisa Hutang Tempo:</span>
                        <span class="text-amber-600 dark:text-amber-400 font-black">${i>0?u(i):"Lunas (Rp 0)"}</span>
                    </div>
                </div>

                <!-- RIWAYAT CICILAN & STATUS -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Histori Pembayaran Cicilan</span>
                    </div>

                    ${(t.paymentHistory||[]).length===0?`
                        <div class="text-center py-6 text-slate-400">
                            <i class="fa-regular fa-clock text-xl mb-1 text-slate-300 dark:text-slate-600 block"></i>
                            <p class="text-xs">Belum ada catatan pembayaran cicilan.</p>
                        </div>
                    `:`
                        <div class="space-y-2 max-h-48 overflow-y-auto hide-scrollbar">
                            ${t.paymentHistory.map(l=>`
                                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs shadow-2xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400">${u(l.amount)}</span>
                                        <p class="text-[10px] text-slate-400">${z(l.date)} • ${p(l.method||"Transfer")}</p>
                                    </div>
                                    <span class="text-[11px] text-slate-500 dark:text-slate-300 font-bold">${p(l.note||"-")}</span>
                                </div>
                            `).join("")}
                        </div>
                    `}
                </div>
            </div>
        </div>

        <!-- STICKY NATIVE ACTION FOOTER -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <div class="flex items-center gap-2 w-full sm:w-auto">
                <button type="button" onclick="window.closePurchaseDetailModal()" class="flex-1 sm:flex-initial h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Tutup
                </button>
                <button type="button" onclick="window.printPurchaseOrder('${t.id}')" class="h-12 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 font-bold text-xs transition-all cursor-pointer flex items-center gap-2">
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Cetak Surat PO</span>
                </button>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                ${t.status==="ordered"?`
                    <button 
                        type="button" 
                        onclick="window.closePurchaseDetailModal(); window.receiveAndRestockPO('${t.id}');" 
                        class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                        style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                    >
                        <i class="fa-solid fa-boxes-stacked"></i>
                        <span>Terima Barang &amp; Restock</span>
                    </button>
                `:""}

                ${i>0&&t.paymentType==="tempo"?`
                    <button 
                        type="button" 
                        onclick="window.closePurchaseDetailModal(); window.openPurchasePaymentModal('${t.id}');" 
                        class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-2xs active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                        <i class="fa-solid fa-money-bill-wave"></i>
                        <span>+ Bayar Cicilan Hutang</span>
                    </button>
                `:""}
            </div>
        </div>
    `),B(a,s)};window.closePurchaseDetailModal=()=>{const e=n("modal-po-detail"),r=n("modal-po-detail-box");e&&C(e,r)};window.openPurchasePaymentModal=e=>{M();const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=parseFloat(t.total)||0,s=parseFloat(t.amountPaid)||0,o=Math.max(0,a-s),c=n("modal-po-payment"),d=n("modal-po-payment-box"),i=n("modal-po-payment-content");!c||!i||(S("modal-po-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar / Cicil Hutang Supplier</h3>
                    <p class="text-xs text-slate-400">${p(t.supplierName)} • ${p(t.poNumber||t.id)}</p>
                </div>
            </div>
            <button onclick="window.closePurchasePaymentModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-pay-form" onsubmit="window.submitPurchasePayment(event, '${t.id}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 hide-scrollbar">
                <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1.5 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Total Tagihan PO:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${u(a)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600">${u(s)}</span>
                    </div>
                    <div class="flex justify-between pt-1.5 border-t border-amber-200 dark:border-amber-800 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Sisa Hutang Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base">${u(o)}</span>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nominal Pembayaran (Rp) *</label>
                    <div class="relative">
                        <input type="number" id="pop-amount" required min="1" max="${o}" value="${o}" class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg pr-24 text-emerald-600 rounded-2xl">
                        <button type="button" onclick="document.getElementById('pop-amount').value = ${o}" class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-white font-black text-[11px] shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                            Lunas
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Bayar *</label>
                        <input type="date" id="pop-date" required value="${new Date().toISOString().split("T")[0]}" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Metode Bayar</label>
                        <select id="pop-method" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl cursor-pointer">
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="Kas Tunai">Kas Tunai Toko</option>
                            <option value="Giro / Cek">Giro / Cek Mundur</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan / No. Bukti Transfer</label>
                    <input type="text" id="pop-note" placeholder="Contoh: Transfer via BCA No Ref 123456" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs rounded-2xl">
                </div>
            </div>

            <!-- STICKY ACTION FOOTER -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closePurchasePaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `),B(c,d))};window.closePurchasePaymentModal=()=>{const e=n("modal-po-payment"),r=n("modal-po-payment-box");e&&C(e,r)};window.submitPurchasePayment=async(e,r)=>{e.preventDefault(),I("Mencatat Pembayaran...");try{const a=(x.purchases||[]).find(P=>String(P.id)===String(r));if(!a)throw new Error("Data PO tidak ditemukan!");const s=parseFloat(n("pop-amount")?.value)||0,o=n("pop-date")?.value||new Date().toISOString(),c=n("pop-method")?.value||"Transfer Bank",d=(n("pop-note")?.value||"").trim();if(s<=0)return v(),f("Nominal pembayaran harus lebih besar dari 0!");const i=parseFloat(a.total)||0,m=(parseFloat(a.amountPaid)||0)+s,h=Math.max(0,i-m);a.amountPaid=m,a.balance=h,m>=i?(a.paymentStatus="lunas",a.status==="received"&&(a.status="completed")):a.paymentStatus="sebagian",a.paymentHistory||(a.paymentHistory=[]),a.paymentHistory.push({date:o,amount:s,method:c,note:d||`Pembayaran cicilan tempo (${c})`}),a.updatedAt=new Date().toISOString(),await N(["purchases"]),v(),window.closePurchasePaymentModal(),f("Pembayaran hutang supplier berhasil dicatat! 💰"),O()}catch(t){v(),console.error("Gagal simpan pembayaran:",t),f("Gagal memproses: "+t.message)}};window.sendPOToSupplierWA=e=>{const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=t.supplierPhone?H(t.supplierPhone):"";if(!a)return f("Nomor WhatsApp supplier belum tercatat di data supplier!");const s=x.store?.name||"Toko Putri Utama Teknik",o=x.store?.address||"",c=x.store?.phone||"";let d=(t.items||[]).map((l,m)=>`${m+1}. *${l.name}* - ${l.qty} ${l.unit||"pcs"} @ Rp ${Number(l.unitPrice).toLocaleString("id-ID")}`).join(`
`),i=`*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*
Dari: *${s}*
`+(o?`Alamat: ${o}
`:"")+(c?`Telp Toko: ${c}
`:"")+`-----------------------------------------
Kepada Yth: *${t.supplierName}*
Nomor PO: *${t.poNumber||t.id}*
Tanggal: ${$(t.date||t.createdAt)}
Termin: ${t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${$(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash Saat Kirim"}
-----------------------------------------
*DAFTAR BARANG YANG DIPESAN:*
${d}
-----------------------------------------
*Subtotal:* Rp ${Number(t.subtotal||0).toLocaleString("id-ID")}
`+(t.discount>0?`*Diskon:* -Rp ${Number(t.discount).toLocaleString("id-ID")}
`:"")+(t.shippingFee>0?`*Ongkir:* +Rp ${Number(t.shippingFee).toLocaleString("id-ID")}
`:"")+`*TOTAL NILAI PO:* *Rp ${Number(t.total||0).toLocaleString("id-ID")}*
`+(t.notes?`
*Catatan:* ${t.notes}
`:"")+`
Mohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya! 🙏`;q(a,i)};window.printPurchaseOrder=e=>{const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=x.store||{};if(!n("po-print-container"))return;const o=t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${$(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",c=`
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${p(a.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${p(a.address||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${p(a.phone||"-")}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #2563eb; text-transform: uppercase;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${p(t.poNumber||t.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${$(t.date||t.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${p(t.supplierName)}</p>
                    ${t.supplierPhone?`<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${p(t.supplierPhone)}</p>`:""}
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Syarat &amp; Ketentuan:</span>
                    <p style="margin: 0; font-weight: bold;">Termin: ${o}</p>
                    <p style="margin: 3px 0 0; color: #64748b;">Status PO: ${t.status==="ordered"?"Dipesan":t.status==="received"?"Diterima":"Selesai"}</p>
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
                    ${(t.items||[]).map((l,m)=>`
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 8px 10px; text-align: center;">${m+1}</td>
                            <td style="padding: 8px 10px;">
                                <b>${p(l.name)}</b>
                                ${l.sku?`<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${p(l.sku)}</span>`:""}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold;">${l.qty} ${p(l.unit||"pcs")}</td>
                            <td style="padding: 8px 10px; text-align: right;">${u(l.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold;">${u((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${p(t.notes||"Harap barang dikirim sesuai spesifikasi & packing aman.")}</p>
                </div>
                <div style="width: 250px;">
                    <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                        <span>Subtotal:</span>
                        <span style="font-weight: bold; color: #0f172a;">${u(t.subtotal)}</span>
                    </div>
                    ${t.discount>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #16a34a;">
                            <span>Diskon:</span>
                            <span>-${u(t.discount)}</span>
                        </div>
                    `:""}
                    ${t.shippingFee>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                            <span>Ongkos Kirim:</span>
                            <span>+${u(t.shippingFee)}</span>
                        </div>
                    `:""}
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 2px solid #0f172a; margin-top: 4px; font-size: 14px; font-weight: 900;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color: #2563eb;">${u(t.total)}</span>
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
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${p(t.supplierName)}</div>
                </div>
            </div>
        </div>
    `;let d=n("po-print-iframe");d||(d=document.createElement("iframe"),d.id="po-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",document.body.appendChild(d));const i=d.contentWindow.document;i.open(),i.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${p(t.poNumber||t.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${c}
        </body>
        </html>
    `),i.close(),setTimeout(()=>{d.contentWindow.focus(),d.contentWindow.print()},300)};window.renderPurchasesView=O;window.computePurchaseMetrics=K;export{K as computePurchaseMetrics,M as ensurePurchaseModals,O as renderPurchasesView};

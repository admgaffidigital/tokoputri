import"./module-member-BivWSgSm.js";import{a as x,e as i,b as j,f as b,i as d,al as J,u as k,v as Y,a3 as K,a1 as S,z as U,G,t as H,am as _}from"./module-print-DdyfBoO_.js";import{o as q}from"./module-admin-tF56Oc9M.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-DIYhW5fV.js";const L=()=>{if(["modal-po-form","modal-po-detail","modal-po-payment","modal-po-product-picker"].forEach(e=>{const s=document.querySelector(`#admin-content #${e}`);s&&s.remove()}),!i("modal-po-form")){const e=document.createElement("div");e.id="modal-po-form",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=s=>{s.target===e&&window.closePOFormModal?.()},e.innerHTML=`
            <div id="modal-po-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(e)}if(!i("modal-po-detail")){const e=document.createElement("div");e.id="modal-po-detail",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=s=>{s.target===e&&window.closePODetailModal?.()},e.innerHTML=`
            <div id="modal-po-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!i("modal-po-payment")){const e=document.createElement("div");e.id="modal-po-payment",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=s=>{s.target===e&&window.closePurchasePaymentModal?.()},e.innerHTML=`
            <div id="modal-po-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `,document.body.appendChild(e)}if(!i("modal-po-product-picker")){const e=document.createElement("div");e.id="modal-po-product-picker",e.className="fixed inset-0 z-[160] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=s=>{s.target===e&&window.closePOProductPicker?.()},e.innerHTML=`
            <div id="modal-po-product-picker-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[85dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-product-picker-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(e)}};let w="all",V="",f=[],M=null,B="",A=!0,E="all";const D=e=>{const s=parseFloat(e)||0;return parseFloat(s.toFixed(3)).toString()},I=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return e}},Z=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return e}},Q=()=>{const e=x.purchases||[],s=new Date,t=s.getMonth(),a=s.getFullYear();let r=0,o=0,p=0,u=0;return e.forEach(n=>{const l=new Date(n.date||n.createdAt||0),m=parseFloat(n.total)||0,c=parseFloat(n.amountPaid)||0,v=m-c;l.getMonth()===t&&l.getFullYear()===a&&n.status!=="cancelled"&&(r+=m),n.paymentType==="tempo"&&n.paymentStatus!=="lunas"&&n.status!=="cancelled"&&v>0&&(o+=v),n.status==="ordered"?p++:(n.status==="completed"||n.status==="received"&&n.paymentStatus==="lunas")&&u++}),{monthPurchasesTotal:r,totalUnpaidDebt:o,pendingArrivalCount:p,completedCount:u}},F=()=>{if(L(),!i("admin-content"))return;const s=Q(),t=x.purchases||[];t.sort((o,p)=>new Date(p.date||p.createdAt||0)-new Date(o.date||o.createdAt||0));const a=V.toLowerCase().trim();let r=t.filter(o=>{if(!(!a||(o.poNumber||"").toLowerCase().includes(a)||(o.supplierName||"").toLowerCase().includes(a)||(o.notes||"").toLowerCase().includes(a)||(o.items||[]).some(u=>(u.name||"").toLowerCase().includes(a))))return!1;if(w==="ordered")return o.status==="ordered";if(w==="received")return o.status==="received";if(w==="unpaid"){const u=(parseFloat(o.total)||0)-(parseFloat(o.amountPaid)||0);return o.paymentType==="tempo"&&u>0&&o.paymentStatus!=="lunas"}else if(w==="completed")return o.status==="completed"||o.status==="received"&&o.paymentStatus==="lunas";return!0});j("admin-content",`
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
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${b(s.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${b(s.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-blue-500">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">${s.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
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
                        value="${d(V)}" 
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
                    class="px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${w==="all"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="all"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    Semua PO (${t.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="ordered"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="ordered"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan / Dikirim (${t.filter(o=>o.status==="ordered").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="received"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="received"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${t.filter(o=>o.status==="received").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="unpaid"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="unpaid"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Belum Lunas
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="completed"?"text-white shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                    style="${w==="completed"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-3">
                ${r.length===0?`
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
                `:r.map(o=>X(o)).join("")}
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `)},X=e=>{const s=parseFloat(e.total)||0,t=parseFloat(e.amountPaid)||0,a=s-t;let r="";e.status==="ordered"?r='<span class="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-200 dark:border-indigo-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan (Kirim)</span>':e.status==="received"?r='<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-[10px] font-black border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>':e.status==="completed"?r='<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>':e.status==="cancelled"&&(r='<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[10px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Batal</span>');let o="";e.paymentType==="cash"?o='<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Tunai / Cash</span>':e.paymentType==="konsinyasi"?o='<span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-[10px] font-bold">Konsinyasi (Titipan)</span>':e.paymentStatus==="lunas"||a<=0?o='<span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>':o=`<span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${b(a)}</span>`;const p=(e.items||[]).length,u=e.supplierPhone?J(e.supplierPhone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl shadow-2xs group">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas PO & Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl ${e.status==="received"||e.status==="completed"?"border shadow-inner":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-inner"} flex items-center justify-center text-xl shrink-0 font-black" style="${e.status==="received"||e.status==="completed"?"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);":""}">
                        <i class="fa-solid ${e.status==="received"||e.status==="completed"?"fa-boxes-stacked":"fa-cart-flatbed"}"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${d(e.poNumber||e.id)}</h4>
                            ${r}
                            ${o}
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-700 dark:text-slate-300">
                                <i class="fa-solid fa-truck-field text-[var(--color-primary)] mr-1"></i>${d(e.supplierName||"Supplier")}
                            </span>
                            <span><i class="fa-regular fa-calendar text-slate-400 mr-1"></i>${I(e.date||e.createdAt)}</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${p} Macam Barang</span>
                            ${e.tempoDueDate&&e.paymentType==="tempo"?`<span><i class="fa-solid fa-calendar-xmark text-amber-500 mr-1"></i>Jatuh Tempo: <b>${I(e.tempoDueDate)}</b></span>`:""}
                        </div>

                        <!-- Snippet preview item barang -->
                        <div class="text-[11px] text-slate-400 mt-1.5 truncate max-w-xl">
                            ${(e.items||[]).map(n=>`${d(n.name)}${n.variantName?` [${d(n.variantName)}]`:""} (${D(n.qty)} ${d(n.unit||"pcs")})`).join(" • ")}
                        </div>
                    </div>
                </div>

                <!-- Sisi Kanan: Nilai Total & Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                    <div class="text-left lg:text-right">
                        <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Total Nilai PO</span>
                        <span class="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight">${b(s)}</span>
                        ${e.paymentType==="tempo"&&a>0?`
                            <span class="block text-[10px] font-bold text-amber-500">Sisa: ${b(a)}</span>
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
                        ${u?`
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
    `};window.handlePurchaseSearch=e=>{V=e||"",F()};window.setPurchaseFilter=e=>{w=e,F()};window.receiveAndRestockPO=e=>{const t=(x.purchases||[]).find(r=>String(r.id)===String(e));if(!t)return k("Data PO tidak ditemukan!");if(t.stockRestocked)return k("Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.");const a=(t.items||[]).map(r=>`• <b>${d(r.name)}${r.variantName?` [${d(r.variantName)}]`:""}</b>: +${D(r.qty)} ${d(r.unit||"pcs")} (Modal HPP: ${b(r.unitPrice)})`).join("<br>");Y("Terima Barang & Restock Otomatis",`Konfirmasi barang kulakan dari <b>${d(t.supplierName)}</b> (${t.poNumber}) telah tiba di toko / gudang?<br><br>
        <div class="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-left text-xs space-y-1">
            <p class="font-bold text-teal-800 dark:text-teal-300"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok produk berikut akan otomatis bertambah:</p>
            <div class="text-slate-700 dark:text-slate-300 mt-1">${a}</div>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,async()=>{K("Menambahkan Stok ke Gudang...");try{let r=!1;const o=x.products||[];(t.items||[]).forEach(n=>{if(!n.productId)return;const l=o.find(m=>String(m.id)===String(n.productId));if(l){const m=parseFloat(n.qty)||0,c=parseFloat(n.unitPrice)||0;if(n.variantName&&Array.isArray(l.variants)&&l.variants.length>0){const g=l.variants.find(y=>y.name===n.variantName);if(g){const y=parseFloat(g.stock)||0;g.stock=parseFloat((y+m).toFixed(3)),c>0&&(g.hpp=c),(g.isActive===!1||g.isActive==="false")&&(g.isActive=!0)}}const v=parseFloat(l.stock)||0;l.stock=parseFloat((v+m).toFixed(3)),c>0&&(l.hpp=c),(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0),r=!0}}),t.status="received",t.stockRestocked=!0,t.receivedAt=new Date().toISOString();const p=parseFloat(t.total)||0;(parseFloat(t.amountPaid)||0)>=p&&(t.status="completed",t.paymentStatus="lunas"),await q(r?["purchases","products"]:["purchases"]),S(),k("Barang berhasil diterima & stok toko bertambah! 📦✨"),F()}catch(r){S(),console.error("Gagal restock produk:",r),k("Gagal memproses restock: "+r.message)}},"Ya, Terima & Restock")};window.openCreatePOModal=(e=null,s=null)=>{L();const t=!!s,a=x.purchases||[],r=x.suppliers||[];if(r.length===0){Y("Belum Ada Rekanan","Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.",()=>{window.openAdminTab&&(window.openAdminTab("suppliers"),setTimeout(()=>{window.openSupplierFormModal?.()},200))},"Tambah Supplier");return}let o={};if(t)o=a.find(n=>String(n.id)===String(s))||{},f=JSON.parse(JSON.stringify(o.items||[]));else{const n=new Date().toISOString().split("T")[0],l=n.replace(/-/g,""),m=Math.floor(100+Math.random()*900);o={poNumber:`PO-${l}-${m}`,date:n,supplierId:e||(r[0]?r[0].id:""),paymentType:"tempo",tempoDays:14,items:[],discount:0,shippingFee:0,amountPaid:0,notes:""},f=[]}ee(o,t);const p=i("modal-po-form"),u=i("modal-po-form-box");p&&U(p,u)};const ee=(e,s)=>{if(!i("modal-po-form-content"))return;const a=x.suppliers||[];x.products,j("modal-po-form-content",`
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

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${s?e.id:""}')" class="flex-1 flex flex-col overflow-hidden">
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
                            ${a.map(r=>`
                                <option value="${r.id}" ${String(r.id)===String(e.supplierId)?"selected":""} class="font-bold">
                                    ${d(r.name)}${r.code?` (${d(r.code)})`:""}
                                </option>
                            `).join("")}
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Purchase Order *</label>
                        <input type="text" id="pof-poNumber" required value="${d(e.poNumber||"")}" placeholder="PO-202609-001" class="w-full text-xs font-mono font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Tanggal Order *</label>
                        <input type="date" id="pof-date" required value="${d(e.date||new Date().toISOString().split("T")[0])}" class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
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
                        ${[7,14,30,45,60].map(r=>`
                            <button 
                                type="button" 
                                id="pof-tempo-chip-${r}" 
                                onclick="window.setPOTempoPresetDays(${r})" 
                                class="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all active:scale-95 cursor-pointer ${(e.tempoDays||14)===r?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                                style="${(e.tempoDays||14)===r?"background: var(--color-primary);":""}"
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
                        >${d(e.notes||"")}</textarea>
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
    `),N(),window.recalcPOTempoDueDate(),window.recalcPOTotals()};window.closePOFormModal=()=>{const e=i("modal-po-form"),s=i("modal-po-form-box");e&&G(e,s)};window.setPOPaymentType=e=>{const s=i("pof-paymentType");s&&(s.value=e),["cash","tempo","konsinyasi"].forEach(r=>{const o=i(`pof-type-btn-${r}`);o&&(r===e?(o.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-white shadow-sm",o.style.background="var(--color-primary)",o.style.boxShadow="0 2px 8px rgba(var(--color-primary-rgb), 0.3)"):(o.className="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",o.style.background="",o.style.boxShadow=""))});const t=i("pof-tempo-options-box"),a=i("pof-payment-badge-desc");t&&(e==="tempo"?t.classList.remove("hidden"):t.classList.add("hidden")),a&&(a.textContent=e==="cash"?"Bayar Penuh Saat Kirim":e==="konsinyasi"?"Titip Jual Laku Bayar":"Hutang Usaha Bertempo"),window.handlePOPaymentTypeChange(e)};window.setPOTempoPresetDays=e=>{const s=i("pof-tempoDays");s&&(s.value=e,window.recalcPOTempoDueDate()),[7,14,30,45,60].forEach(t=>{const a=i(`pof-tempo-chip-${t}`);a&&(t===e?(a.style.background="var(--color-primary)",a.style.color="#fff",a.style.borderColor="transparent"):(a.style.background="",a.style.color="",a.style.borderColor=""))})};window.openPOProductPicker=(e=null)=>{L(),M=e,B="";const s=i("pof-supplierId")?.value||"",a=(x.products||[]).some(p=>String(p.supplierId)===String(s));A=!!(s&&a),E="all",z();const r=i("modal-po-product-picker"),o=i("modal-po-product-picker-box");r&&(U(r,o),setTimeout(()=>{const p=i("po-picker-search-input");p&&p.focus()},250))};window.closePOProductPicker=()=>{const e=i("modal-po-product-picker"),s=i("modal-po-product-picker-box");e&&G(e,s)};window.handlePOPickerSearch=e=>{B=e||"",z()};window.setPOPickerSupplierFilter=e=>{A=!!e,z()};window.setPOPickerCategory=e=>{E=e||"all",z()};window.selectProductForPO=(e,s=null)=>{const a=(x.products||[]).find(u=>String(u.id)===String(e));if(!a)return;let r=null;s!==null&&Array.isArray(a.variants)&&a.variants[s]?r=a.variants[s]:Array.isArray(a.variants)&&a.variants.length>0&&(r=a.variants[0]);const o=r?parseFloat(r.hpp)||parseFloat(r.price)||0:parseFloat(a.hpp)||parseFloat(a.price)||0,p={productId:a.id,name:a.name,sku:r?.sku||a.sku||"",variantName:r?r.name:"",variantKey:r?r.name:"",variantSku:r&&r.sku||"",qty:1,unit:r?.unit||a.unit||"Pcs",unitPrice:o,subtotal:o};M!==null&&f[M]?(f[M]=p,k(`Barang diubah: ${a.name}${p.variantName?` (${p.variantName})`:""} ✨`)):(f.push(p),k(`Ditambahkan: ${a.name}${p.variantName?` (${p.variantName})`:""} 🛒`)),N(),window.recalcPOTotals(),window.closePOProductPicker()};window.addAllVariantsForPO=e=>{const t=(x.products||[]).find(r=>String(r.id)===String(e));if(!t||!Array.isArray(t.variants)||t.variants.length===0)return;let a=0;t.variants.forEach(r=>{const o=parseFloat(r.hpp)||parseFloat(r.price)||0,p={productId:t.id,name:t.name,sku:r.sku||t.sku||"",variantName:r.name||"",variantKey:r.name||"",variantSku:r.sku||"",qty:1,unit:r.unit||t.unit||"Pcs",unitPrice:o,subtotal:o};f.push(p),a++}),N(),window.recalcPOTotals(),window.closePOProductPicker(),k(`${a} varian ${t.name} berhasil ditambahkan ke PO! 📦✨`)};window.addManualPOItemRow=()=>{f.push({productId:"",name:"Barang Kulakan Manual",sku:"",variantName:"",variantKey:"",variantSku:"",qty:1,unit:"Pcs",unitPrice:0,subtotal:0}),N(),window.recalcPOTotals(),k("Item manual ditambahkan. Silakan ketik nama dan harga modal.")};window.removePOItemRow=e=>{f.splice(e,1),N(),window.recalcPOTotals()};window.selectPOItemVariant=(e,s)=>{const t=f[e];if(!t)return;const r=(x.products||[]).find(u=>String(u.id)===String(t.productId));if(!r||!Array.isArray(r.variants)||!r.variants[s])return;const o=r.variants[s];t.variantName=o.name||"",t.variantKey=o.name||"",t.variantSku=o.sku||"",o.unit&&(t.unit=o.unit);const p=parseFloat(o.hpp)||parseFloat(o.price)||0;(p>0||!t.unitPrice)&&(t.unitPrice=p),t.subtotal=Math.round((parseFloat(t.qty)||0)*(parseFloat(t.unitPrice)||0)),N(),window.recalcPOTotals()};window.stepPOItemQty=(e,s)=>{if(!f[e])return;const t=parseFloat(f[e].qty)||0;let a;t<=1&&s<0?a=Math.max(.1,parseFloat((t-.1).toFixed(3))):a=Math.max(.1,parseFloat((t+s).toFixed(3))),f[e].qty=a,f[e].subtotal=Math.round(a*(parseFloat(f[e].unitPrice)||0)),N(),window.recalcPOTotals()};window.updatePOItemField=(e,s,t)=>{if(f[e]){if(s==="qty"){const a=typeof t=="string"?t.replace(",","."):t,r=parseFloat(a)||0;f[e].qty=a,f[e].subtotal=Math.round(r*(parseFloat(f[e].unitPrice)||0));const o=i(`po-item-subtotal-card-${e}`);o&&(o.textContent=b(f[e].subtotal))}else if(s==="unitPrice"){const a=typeof t=="string"?t.replace(",","."):t,r=parseFloat(a)||0;f[e].unitPrice=r;const o=parseFloat(f[e].qty)||0;f[e].subtotal=Math.round(o*r);const p=i(`po-item-subtotal-card-${e}`);p&&(p.textContent=b(f[e].subtotal))}else f[e][s]=t;window.recalcPOTotals()}};const N=()=>{if(!i("po-items-table-container"))return;const s=x.products||[],t=i("pof-supplierId")?.value||"";if(f.length===0){j("po-items-table-container",`
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
        `);return}j("po-items-table-container",`
        <div class="space-y-3.5">
            ${f.map((a,r)=>{const o=parseFloat(a.qty)||0,p=parseFloat(a.unitPrice)||0,u=Math.round(o*p),n=s.find(g=>String(g.id)===String(a.productId)),l=n?n.img?`<img src="${d(n.img)}" alt="${d(a.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${H(n,{size:"thumb"})}</div>`:H(n,{size:"thumb"}):`<div class="w-full h-full flex items-center justify-center font-black text-xs text-slate-400">#${r+1}</div>`,m=n&&String(n.supplierId)===String(t),c=n?parseFloat(n.stock)||0:null,v=n&&Array.isArray(n.variants)&&n.variants.length>0;return`
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-3.5 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md relative group">
                        <!-- Baris 1: Nomor Urut, Thumbnail, Info Produk, Tombol Ganti Produk & Hapus -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0 flex-1">
                                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                                    ${l}
                                </div>

                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">#${r+1}</span>
                                        
                                        ${n?`
                                            <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight truncate">${d(a.name)}</h5>
                                        `:`
                                            <input 
                                                type="text" 
                                                value="${d(a.name)}" 
                                                placeholder="Nama barang kulakan manual..."
                                                class="font-black text-sm text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1 focus:border-[var(--color-primary)] focus:outline-none flex-1"
                                                oninput="window.updatePOItemField(${r}, 'name', this.value)"
                                            >
                                        `}

                                        ${m?`
                                            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
                                                <i class="fa-solid fa-star text-[8px] mr-0.5"></i>Supplier Terpilih
                                            </span>
                                        `:""}

                                        ${a.variantName?`
                                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25);">
                                                Varian: ${d(a.variantName)}
                                            </span>
                                        `:""}
                                    </div>

                                    <div class="flex items-center gap-2 text-[11px] text-slate-400 mt-1 flex-wrap">
                                        ${a.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${d(a.sku)}</b></span> •`:""}
                                        ${c!==null?`<span>Stok Toko: <b class="${c>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${D(c)} ${d(a.unit||"Pcs")}</b></span>`:""}
                                        ${n?.category?`• <span>${d(n.category)}</span>`:""}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center gap-1.5 shrink-0">
                                <button 
                                    type="button" 
                                    onclick="window.openPOProductPicker(${r})" 
                                    class="h-9 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" 
                                    title="Ganti Produk dari Katalog"
                                >
                                    <i class="fa-solid fa-arrows-rotate text-xs"></i>
                                    <span class="hidden sm:inline">Ganti Barang</span>
                                </button>
                                <button 
                                    type="button" 
                                    onclick="window.removePOItemRow(${r})" 
                                    class="w-9 h-9 rounded-xl text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:hover:bg-rose-600 transition-all flex items-center justify-center shrink-0 active:scale-90 cursor-pointer shadow-2xs" 
                                    title="Hapus Baris Ini"
                                >
                                    <i class="fa-solid fa-trash-can text-xs"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Baris 2: Pemilihan Varian (jika produk memiliki varian) -->
                        ${v?`
                            <div class="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Kulakan:
                                    </span>
                                    <span class="text-[10px] font-bold text-slate-400">${n.variants.length} Varian Tersedia</span>
                                </div>

                                <div class="flex items-center gap-2 flex-wrap">
                                    ${n.variants.map((g,y)=>{const $=a.variantName&&a.variantName===g.name||!a.variantName&&y===0;return`
                                            <button 
                                                type="button" 
                                                onclick="window.selectPOItemVariant(${r}, ${y})" 
                                                class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${$?"text-white border-transparent shadow-sm":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}"
                                                style="${$?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                                            >
                                                ${$?'<i class="fa-solid fa-circle-check text-[10px]"></i>':""}
                                                <span>${d(g.name)}</span>
                                                <span class="text-[10px] opacity-80 font-normal">(${g.hpp?b(g.hpp):b(g.price||0)})</span>
                                            </button>
                                        `}).join("")}
                                </div>
                            </div>
                        `:""}

                        <!-- Baris 3: Kuantitas Desimal, Satuan, Harga Modal HPP, dan Subtotal -->
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1 items-end">
                            <!-- Kuantitas Stepper Desimal (Col 4) -->
                            <div class="sm:col-span-4">
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                    Kuantitas (Dukung Desimal) *
                                </label>
                                <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-xl p-1 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)]">
                                    <button type="button" onclick="window.stepPOItemQty(${r}, -1)" class="w-8 h-8 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer">
                                        −
                                    </button>
                                    <input 
                                        type="number" 
                                        min="0.001" 
                                        step="any" 
                                        value="${a.qty}" 
                                        class="w-full text-center text-xs font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-1" 
                                        oninput="window.updatePOItemField(${r}, 'qty', this.value)"
                                        placeholder="1"
                                    >
                                    <button type="button" onclick="window.stepPOItemQty(${r}, 1)" class="w-8 h-8 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer">
                                        +
                                    </button>
                                </div>
                            </div>

                            <!-- Satuan Unit (Col 2) -->
                            <div class="sm:col-span-2">
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                    Satuan
                                </label>
                                <input 
                                    type="text" 
                                    value="${d(a.unit||"Pcs")}" 
                                    placeholder="Pcs" 
                                    class="w-full text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-1 focus:border-[var(--color-primary)] focus:outline-none" 
                                    oninput="window.updatePOItemField(${r}, 'unit', this.value)"
                                >
                            </div>

                            <!-- Harga Modal HPP (Col 3) -->
                            <div class="sm:col-span-3">
                                <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                    Harga Modal HPP (Rp) *
                                </label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        step="any" 
                                        value="${a.unitPrice}" 
                                        class="w-full pl-8 pr-2.5 py-2 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${r}, 'unitPrice', this.value)"
                                    >
                                </div>
                            </div>

                            <!-- Subtotal Item (Col 3) -->
                            <div class="sm:col-span-3 text-right bg-slate-50 dark:bg-slate-900/60 p-2 sm:p-2.5 rounded-xl border border-slate-200/70 dark:border-slate-700/60">
                                <span class="block text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Subtotal Item</span>
                                <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white" style="color:var(--color-primary)" id="po-item-subtotal-card-${r}">
                                    ${b(u)}
                                </span>
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
    `)},z=()=>{if(!i("modal-po-product-picker-content"))return;const s=x.products||[],t=i("pof-supplierId")?.value||"",r=(x.suppliers||[]).find(c=>String(c.id)===String(t)),o=s.filter(c=>String(c.supplierId)===String(t)),p=s.length,u=o.length;let n=A&&u>0?o:s;E!=="all"&&(n=n.filter(c=>(c.category||"").toLowerCase()===E.toLowerCase()));const l=(B||"").toLowerCase().trim();l&&(n=n.filter(c=>{const v=(c.name||"").toLowerCase().includes(l),g=(c.sku||"").toLowerCase().includes(l),y=(c.category||"").toLowerCase().includes(l),$=Array.isArray(c.variants)&&c.variants.some(O=>(O.name||"").toLowerCase().includes(l)||(O.sku||"").toLowerCase().includes(l));return v||g||y||$}));const m=["all",...new Set(s.map(c=>c.category).filter(Boolean))];j("modal-po-product-picker-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER PICKER -->
        <div class="px-5 sm:px-6 pt-4 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-boxes-stacked"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">
                        ${M!==null?`Ganti Barang #${M+1}`:"Ambil Barang dari Katalog Toko"}
                    </h3>
                    <p class="text-xs text-slate-400">
                        ${r?`Supplier: <b class="text-slate-700 dark:text-slate-200">${d(r.name)}</b>`:"Pilih produk untuk dimasukkan ke daftar order kulakan"}
                    </p>
                </div>
            </div>
            <button onclick="window.closePOProductPicker()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <!-- BILAH PENCARIAN & FILTER -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900 shrink-0">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input 
                    type="text" 
                    id="po-picker-search-input" 
                    placeholder="Cari nama barang, varian, atau SKU barcode..." 
                    value="${d(B)}"
                    oninput="window.handlePOPickerSearch(this.value)"
                    class="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl pl-9 pr-9 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none transition-all"
                >
                ${B?`
                    <button onclick="window.handlePOPickerSearch('')" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer">
                        <i class="fa-solid fa-circle-xmark text-xs"></i>
                    </button>
                `:""}
            </div>

            <!-- Tab Segmented Supplier / All -->
            <div class="flex items-center gap-2 flex-wrap">
                ${t&&u>0?`
                    <button 
                        type="button" 
                        onclick="window.setPOPickerSupplierFilter(true)" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${A?"text-white border-transparent shadow-sm":"bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                        style="${A?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-star text-[10px] ${A?"text-amber-300":"text-amber-500"}"></i>
                        <span>Produk Supplier Ini (${u})</span>
                    </button>
                `:""}

                <button 
                    type="button" 
                    onclick="window.setPOPickerSupplierFilter(false)" 
                    class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${!A||u===0?"text-white border-transparent shadow-sm":"bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}"
                    style="${!A||u===0?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    <span>Semua Katalog (${p})</span>
                </button>

                <button 
                    type="button" 
                    onclick="window.addManualPOItemRow(); window.closePOProductPicker();" 
                    class="ml-auto px-3 py-1.5 rounded-xl text-xs font-bold border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
                    title="Tambah baris tanpa memilih produk dari katalog"
                >
                    <i class="fa-solid fa-plus text-[10px]"></i>
                    <span>Input Manual</span>
                </button>
            </div>

            <!-- Chips Kategori Horizontal Scrollable -->
            ${m.length>2?`
                <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-0.5">
                    ${m.map(c=>`
                        <button 
                            type="button" 
                            onclick="window.setPOPickerCategory('${d(c)}')" 
                            class="px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 transition-all cursor-pointer ${E===c?"text-white":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}"
                            style="${E===c?"background: var(--color-primary);":""}"
                        >
                            ${c==="all"?"Semua Kategori":d(c)}
                        </button>
                    `).join("")}
                </div>
            `:""}
        </div>

        <!-- LIST PRODUK -->
        <div class="p-4 sm:p-5 overflow-y-auto flex-1 hide-scrollbar space-y-3">
            ${n.length===0?`
                <div class="p-8 text-center flex flex-col items-center justify-center text-slate-400 space-y-2">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-slate-100 dark:bg-slate-800 text-slate-400">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <p class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200">Tidak ada produk yang cocok</p>
                    <p class="text-[11px] text-slate-400 max-w-xs">Coba ganti kata kunci pencarian atau gunakan tombol Input Manual untuk memasukkan barang baru.</p>
                    <button type="button" onclick="window.addManualPOItemRow(); window.closePOProductPicker();" class="mt-2 px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer active:scale-95" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Input Barang Manual</span>
                    </button>
                </div>
            `:n.map(c=>{const v=c.img?`<img src="${d(c.img)}" alt="${d(c.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${H(c,{size:"thumb"})}</div>`:H(c,{size:"thumb"}),g=String(c.supplierId)===String(t),y=parseFloat(c.stock)||0,$=Array.isArray(c.variants)&&c.variants.length>0,O=parseFloat(c.hpp)||parseFloat(c.price)||0;return`
                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all space-y-3 group">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0 flex-1">
                                <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                                    ${v}
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-1.5 flex-wrap">
                                        <h5 class="font-black text-sm text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors">${d(c.name)}</h5>
                                        ${g?'<span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-star text-[8px] mr-1"></i>Supplier Terpilih</span>':""}
                                    </div>
                                    <div class="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5 flex-wrap">
                                        ${c.sku?`<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${d(c.sku)}</b></span> •`:""}
                                        <span>Stok Toko: <b class="${y>0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"}">${D(y)} ${d(c.unit||"Pcs")}</b></span>
                                        ${c.category?`• <span>${d(c.category)}</span>`:""}
                                    </div>
                                    <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                        Modal HPP: <b class="text-slate-700 dark:text-slate-200">${b(O)}</b>
                                        ${c.price?` • Harga Jual: <span>${b(c.price)}</span>`:""}
                                    </div>
                                </div>
                            </div>

                            ${$?"":`
                                <button 
                                    type="button" 
                                    onclick="window.selectProductForPO('${c.id}')" 
                                    class="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-sm active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-1.5"
                                    style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.25);"
                                >
                                    <i class="fa-solid fa-plus text-xs"></i>
                                    <span>Pilih</span>
                                </button>
                            `}
                        </div>

                        ${$?`
                            <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian:
                                    </span>
                                    ${M===null?`
                                        <button 
                                            type="button" 
                                            onclick="window.addAllVariantsForPO('${c.id}')" 
                                            class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                            <i class="fa-solid fa-list-check"></i>
                                            <span>+ Ambil Semua Varian (${c.variants.length})</span>
                                        </button>
                                    `:""}
                                </div>

                                <div class="flex items-center gap-1.5 flex-wrap">
                                    ${c.variants.map((C,R)=>`
                                        <button 
                                            type="button" 
                                            onclick="window.selectProductForPO('${c.id}', ${R})" 
                                            class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-[var(--color-primary)] hover:text-white dark:bg-slate-900/60 dark:hover:bg-[var(--color-primary)] border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs group/var"
                                        >
                                            <i class="fa-solid fa-plus text-[9px] opacity-60 group-hover/var:opacity-100"></i>
                                            <span>${d(C.name)}</span>
                                            <span class="text-[10px] opacity-75 font-normal">(${C.hpp?b(C.hpp):b(C.price||0)})</span>
                                        </button>
                                    `).join("")}
                                </div>
                            </div>
                        `:""}
                    </div>
                `}).join("")}
        </div>
    `)};window.recalcPOTempoDueDate=()=>{const e=i("pof-date")?.value||new Date().toISOString().split("T")[0],s=parseInt(i("pof-tempoDays")?.value,10)||14,t=new Date(e);t.setDate(t.getDate()+s);const a=t.toISOString().split("T")[0],r=i("pof-tempoDueDate");r&&(r.value=I(a),r.setAttribute("data-due-iso",a))};window.handlePOSupplierChange=e=>{const t=(x.suppliers||[]).find(a=>String(a.id)===String(e));if(t&&t.defaultTerms)if(t.defaultTerms.startsWith("tempo")){const a=parseInt(t.defaultTerms.split("_")[1],10)||14;window.setPOTempoPresetDays(a),window.setPOPaymentType("tempo")}else t.defaultTerms==="konsinyasi"?window.setPOPaymentType("konsinyasi"):window.setPOPaymentType("cash");N()};window.handlePOPaymentTypeChange=e=>{const s=i("pof-dp-label"),t=i("pof-amountPaid");if(e==="tempo")s&&(s.innerText="Uang Muka / DP:"),window.recalcPOTempoDueDate();else if(s&&(s.innerText="Pembayaran:"),e==="cash"&&t){const a=window.computePOGrandTotal();t.value=a}window.recalcPOTotals()};window.computePOGrandTotal=()=>{const e=f.reduce((a,r)=>a+(parseFloat(r.qty)||0)*(parseFloat(r.unitPrice)||0),0),s=parseFloat(i("pof-discount")?.value)||0,t=parseFloat(i("pof-shippingFee")?.value)||0;return Math.max(0,Math.round(e-s+t))};window.recalcPOTotals=()=>{const e=f.reduce((l,m)=>l+(parseFloat(m.qty)||0)*(parseFloat(m.unitPrice)||0),0),s=parseFloat(i("pof-discount")?.value)||0,t=parseFloat(i("pof-shippingFee")?.value)||0,a=Math.max(0,Math.round(e-s+t)),r=parseFloat(i("pof-amountPaid")?.value)||0,o=Math.max(0,a-r),p=i("pof-calc-subtotal"),u=i("pof-calc-grandtotal"),n=i("pof-calc-balance");p&&(p.innerText=b(Math.round(e))),u&&(u.innerText=b(a)),n&&(n.innerText=b(o))};window.savePOForm=async(e,s)=>{e.preventDefault(),K("Menyimpan Order Pembelian...");try{const t=x.suppliers||[],a=i("pof-supplierId")?.value,r=t.find(h=>String(h.id)===String(a))||{},o=(i("pof-poNumber")?.value||"").trim(),p=i("pof-date")?.value||new Date().toISOString().split("T")[0],u=i("pof-paymentType")?.value||"tempo",n=parseInt(i("pof-tempoDays")?.value,10)||14,l=i("pof-tempoDueDate")?.getAttribute("data-due-iso")||"",m=(i("pof-notes")?.value||"").trim(),c=parseFloat(i("pof-discount")?.value)||0,v=parseFloat(i("pof-shippingFee")?.value)||0,g=parseFloat(i("pof-amountPaid")?.value)||0;if(f.length===0)return S(),k("Minimal harus ada 1 barang dalam order pembelian!");const y=f.filter(h=>h.name&&(parseFloat(h.qty)||0)>0).map(h=>{const P=parseFloat(h.qty)||0,W=parseFloat(h.unitPrice)||0;return{productId:h.productId||"",name:h.name||"",sku:h.sku||"",variantName:h.variantName||"",variantKey:h.variantKey||h.variantName||"",variantSku:h.variantSku||"",qty:P,unit:h.unit||"Pcs",unitPrice:W,subtotal:Math.round(P*W)}});if(y.length===0)return S(),k("Pastikan produk dan kuantitas order telah diisi dengan benar!");const $=y.reduce((h,P)=>h+P.subtotal,0),O=Math.max(0,Math.round($-c+v)),C=Math.max(0,O-g);let R="belum_bayar";g>=O&&O>0?R="lunas":g>0&&(R="sebagian"),x.purchases||(x.purchases=[]);const T={id:s||"po_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),poNumber:o,date:p,supplierId:a,supplierName:r.name||"Supplier",supplierPhone:r.phone||"",paymentType:u,tempoDays:u==="tempo"?n:0,tempoDueDate:u==="tempo"?l:null,items:y,subtotal:$,discount:c,shippingFee:v,total:O,amountPaid:g,balance:C,paymentStatus:R,notes:m,updatedAt:new Date().toISOString()};if(!s)T.status="ordered",T.stockRestocked=!1,T.createdAt=new Date().toISOString(),T.paymentHistory=g>0?[{date:new Date().toISOString(),amount:g,note:u==="cash"?"Pembayaran Tunai Lunas":"Uang Muka / DP Awal",method:u==="cash"?"Tunai":"Transfer"}]:[],x.purchases.unshift(T);else{const h=x.purchases.findIndex(P=>String(P.id)===String(s));if(h>-1){const P=x.purchases[h];T.status=P.status||"ordered",T.stockRestocked=P.stockRestocked||!1,T.createdAt=P.createdAt,T.paymentHistory=P.paymentHistory||[],g>(P.amountPaid||0)&&T.paymentHistory.push({date:new Date().toISOString(),amount:g-(P.amountPaid||0),note:"Penyesuaian Bayar via Edit PO",method:"Transfer / Kas"}),x.purchases[h]=T}}await q(["purchases"]),S(),window.closePOFormModal(),k(s?"Order PO diperbarui! ✨":"Order PO kulakan berhasil dibuat! 🛒"),F()}catch(t){S(),console.error("Gagal menyimpan PO:",t),k("Gagal menyimpan PO: "+t.message)}};window.deletePurchaseOrder=e=>{const t=(x.purchases||[]).find(r=>String(r.id)===String(e));if(!t)return;let a=`Hapus pesanan kulakan <b>${d(t.poNumber||t.id)}</b> ke <b>${d(t.supplierName)}</b>?`;t.stockRestocked&&(a+='<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>'),Y("Hapus Purchase Order",a,async()=>{K("Menghapus PO...");try{x.purchases=(x.purchases||[]).filter(r=>String(r.id)!==String(e)),await q(["purchases"]),S(),k("Purchase Order berhasil dihapus."),F()}catch(r){S(),k("Gagal menghapus: "+r.message)}},"Hapus Permanen")};window.closePODetailModal=()=>{window.closePurchaseDetailModal()};window.openPurchaseDetailModal=e=>{L();const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return k("Data PO tidak ditemukan!");const a=i("modal-po-detail"),r=i("modal-po-detail-box"),o=i("modal-po-detail-content");if(!a||!o)return;const p=parseFloat(t.total)||0,u=parseFloat(t.amountPaid)||0,n=p-u;j("modal-po-detail-content",`
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
                        <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${d(t.poNumber||t.id)}</h3>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold" style="${t.status==="received"||t.status==="completed"?"background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);":"background: rgba(59, 130, 246, 0.12); color: #2563eb; border: 1px solid rgba(59, 130, 246, 0.25);"}">
                            ${t.status==="ordered"?"Dipesan":t.status==="received"?"Barang Diterima":t.status==="completed"?"Selesai / Lunas":"Dibatalkan"}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Supplier: <b class="text-slate-700 dark:text-slate-200">${d(t.supplierName)}</b> • Tanggal: ${I(t.date||t.createdAt)}</p>
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
                    ${(t.items||[]).map((l,m)=>{const c=Math.round((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0));return`
                            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-2">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">${m+1}</span>
                                            <p class="font-bold text-xs text-slate-800 dark:text-slate-100">${d(l.name)}</p>
                                            ${l.variantName?`<span class="px-2 py-0.5 rounded-md text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${d(l.variantName)}</span>`:""}
                                        </div>
                                        ${l.sku?`<span class="text-[10px] font-mono text-slate-400 ml-6 block">SKU: ${d(l.sku)}</span>`:""}
                                    </div>
                                    <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200 text-xs font-black shrink-0">
                                        ${D(l.qty)} ${d(l.unit||"pcs")}
                                    </span>
                                </div>
                                <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                                    <span class="text-[11px] text-slate-400">Modal: <b>${b(l.unitPrice)}</b></span>
                                    <span class="font-black text-slate-800 dark:text-white" style="color:var(--color-primary)">${b(c)}</span>
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
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <p class="font-bold text-slate-800 dark:text-slate-100">${d(l.name)}</p>
                                            ${l.variantName?`<span class="px-2 py-0.5 rounded-md text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${d(l.variantName)}</span>`:""}
                                        </div>
                                        ${l.sku?`<span class="text-[10px] font-mono text-slate-400">SKU: ${d(l.sku)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 text-center font-bold text-slate-700 dark:text-slate-200">
                                        ${D(l.qty)} ${d(l.unit||"pcs")}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${b(l.unitPrice)}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                        ${b(Math.round((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0)))}
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
                        <span class="font-bold text-slate-800 dark:text-white">${b(t.subtotal)}</span>
                    </div>
                    ${t.discount>0?`
                        <div class="flex justify-between text-emerald-500">
                            <span>Diskon Pembelian:</span>
                            <span>-${b(t.discount)}</span>
                        </div>
                    `:""}
                    ${t.shippingFee>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim Armada:</span>
                            <span>+${b(t.shippingFee)}</span>
                        </div>
                    `:""}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total Tagihan PO:</span>
                        <span style="color:var(--color-primary)">${b(p)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${b(u)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1">
                        <span class="text-amber-500">Sisa Hutang Tempo:</span>
                        <span class="text-amber-600 dark:text-amber-400 font-black">${n>0?b(n):"Lunas (Rp 0)"}</span>
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
                                        <span class="font-black text-emerald-600 dark:text-emerald-400">${b(l.amount)}</span>
                                        <p class="text-[10px] text-slate-400">${Z(l.date)} • ${d(l.method||"Transfer")}</p>
                                    </div>
                                    <span class="text-[11px] text-slate-500 dark:text-slate-300 font-bold">${d(l.note||"-")}</span>
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

                ${n>0&&t.paymentType==="tempo"?`
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
    `),U(a,r)};window.closePurchaseDetailModal=()=>{const e=i("modal-po-detail"),s=i("modal-po-detail-box");e&&G(e,s)};window.openPurchasePaymentModal=e=>{L();const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return k("Data PO tidak ditemukan!");const a=parseFloat(t.total)||0,r=parseFloat(t.amountPaid)||0,o=Math.max(0,a-r),p=i("modal-po-payment"),u=i("modal-po-payment-box"),n=i("modal-po-payment-content");!p||!n||(j("modal-po-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar / Cicil Hutang Supplier</h3>
                    <p class="text-xs text-slate-400">${d(t.supplierName)} • ${d(t.poNumber||t.id)}</p>
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
                        <span class="font-bold text-slate-800 dark:text-white">${b(a)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600">${b(r)}</span>
                    </div>
                    <div class="flex justify-between pt-1.5 border-t border-amber-200 dark:border-amber-800 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Sisa Hutang Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base">${b(o)}</span>
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
    `),U(p,u))};window.closePurchasePaymentModal=()=>{const e=i("modal-po-payment"),s=i("modal-po-payment-box");e&&G(e,s)};window.submitPurchasePayment=async(e,s)=>{e.preventDefault(),K("Mencatat Pembayaran...");try{const a=(x.purchases||[]).find(v=>String(v.id)===String(s));if(!a)throw new Error("Data PO tidak ditemukan!");const r=parseFloat(i("pop-amount")?.value)||0,o=i("pop-date")?.value||new Date().toISOString(),p=i("pop-method")?.value||"Transfer Bank",u=(i("pop-note")?.value||"").trim();if(r<=0)return S(),k("Nominal pembayaran harus lebih besar dari 0!");const n=parseFloat(a.total)||0,m=(parseFloat(a.amountPaid)||0)+r,c=Math.max(0,n-m);a.amountPaid=m,a.balance=c,m>=n?(a.paymentStatus="lunas",a.status==="received"&&(a.status="completed")):a.paymentStatus="sebagian",a.paymentHistory||(a.paymentHistory=[]),a.paymentHistory.push({date:o,amount:r,method:p,note:u||`Pembayaran cicilan tempo (${p})`}),a.updatedAt=new Date().toISOString(),await q(["purchases"]),S(),window.closePurchasePaymentModal(),k("Pembayaran hutang supplier berhasil dicatat! 💰"),F()}catch(t){S(),console.error("Gagal simpan pembayaran:",t),k("Gagal memproses: "+t.message)}};window.sendPOToSupplierWA=e=>{const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return k("Data PO tidak ditemukan!");const a=t.supplierPhone?J(t.supplierPhone):"";if(!a)return k("Nomor WhatsApp supplier belum tercatat di data supplier!");const r=x.store?.name||"Toko Putri Utama Teknik",o=x.store?.address||"",p=x.store?.phone||"";let u=(t.items||[]).map((l,m)=>{const c=l.variantName?` [Varian: ${l.variantName}]`:"";return`${m+1}. *${l.name}${c}* - ${D(l.qty)} ${l.unit||"pcs"} @ Rp ${Number(l.unitPrice||0).toLocaleString("id-ID")}`}).join(`
`),n=`*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*
Dari: *${r}*
`+(o?`Alamat: ${o}
`:"")+(p?`Telp Toko: ${p}
`:"")+`-----------------------------------------
Kepada Yth: *${t.supplierName}*
Nomor PO: *${t.poNumber||t.id}*
Tanggal: ${I(t.date||t.createdAt)}
Termin: ${t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${I(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash Saat Kirim"}
-----------------------------------------
*DAFTAR BARANG YANG DIPESAN:*
${u}
-----------------------------------------
*Subtotal:* Rp ${Number(t.subtotal||0).toLocaleString("id-ID")}
`+(t.discount>0?`*Diskon:* -Rp ${Number(t.discount).toLocaleString("id-ID")}
`:"")+(t.shippingFee>0?`*Ongkir:* +Rp ${Number(t.shippingFee).toLocaleString("id-ID")}
`:"")+`*TOTAL NILAI PO:* *Rp ${Number(t.total||0).toLocaleString("id-ID")}*
`+(t.notes?`
*Catatan:* ${t.notes}
`:"")+`
Mohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya! 🙏`;_(a,n)};window.printPurchaseOrder=e=>{const t=(x.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return k("Data PO tidak ditemukan!");const a=x.store||{};if(!i("po-print-container"))return;const o=t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${I(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",p=`
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${d(a.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${d(a.address||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${d(a.phone||"-")}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #2563eb; text-transform: uppercase;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${d(t.poNumber||t.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${I(t.date||t.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${d(t.supplierName)}</p>
                    ${t.supplierPhone?`<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${d(t.supplierPhone)}</p>`:""}
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
                                <b style="color: #0f172a;">${d(l.name)}</b>
                                ${l.variantName?`<br><span style="display: inline-block; font-size: 10px; font-weight: 700; color: #4338ca; background: #e0e7ff; padding: 2px 7px; border-radius: 4px; margin-top: 3px;">Varian: ${d(l.variantName)}</span>`:""}
                                ${l.sku?`<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${d(l.sku)}</span>`:""}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold; color: #0f172a;">${D(l.qty)} ${d(l.unit||"pcs")}</td>
                            <td style="padding: 8px 10px; text-align: right; color: #334155;">${b(l.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold; color: #0f172a;">${b(Math.round((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0)))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${d(t.notes||"Harap barang dikirim sesuai spesifikasi & packing aman.")}</p>
                </div>
                <div style="width: 250px;">
                    <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                        <span>Subtotal:</span>
                        <span style="font-weight: bold; color: #0f172a;">${b(t.subtotal)}</span>
                    </div>
                    ${t.discount>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #16a34a;">
                            <span>Diskon:</span>
                            <span>-${b(t.discount)}</span>
                        </div>
                    `:""}
                    ${t.shippingFee>0?`
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                            <span>Ongkos Kirim:</span>
                            <span>+${b(t.shippingFee)}</span>
                        </div>
                    `:""}
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 2px solid #0f172a; margin-top: 4px; font-size: 14px; font-weight: 900;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color: #2563eb;">${b(t.total)}</span>
                    </div>
                </div>
            </div>

            <!-- TANDA TANGAN -->
            <div style="display: flex; justify-content: space-between; text-align: center; font-size: 12px; margin-top: 50px;">
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Dipesan Oleh (Purchasing):</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${d(a.name||"Toko Putri")}</div>
                </div>
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Diterima &amp; Disetujui Oleh:</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${d(t.supplierName)}</div>
                </div>
            </div>
        </div>
    `;let u=i("po-print-iframe");u||(u=document.createElement("iframe"),u.id="po-print-iframe",u.style.position="fixed",u.style.right="0",u.style.bottom="0",u.style.width="0",u.style.height="0",u.style.border="0",document.body.appendChild(u));const n=u.contentWindow.document;n.open(),n.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${d(t.poNumber||t.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${p}
        </body>
        </html>
    `),n.close(),setTimeout(()=>{u.contentWindow.focus(),u.contentWindow.print()},300)};window.renderPurchasesView=F;window.computePurchaseMetrics=Q;export{Q as computePurchaseMetrics,L as ensurePurchaseModals,D as formatQty,F as renderPurchasesView};

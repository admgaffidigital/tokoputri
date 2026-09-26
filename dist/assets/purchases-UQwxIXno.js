import"./module-member-HotrGCGL.js";import{a as u,e as i,b as A,f as b,i as c,al as L,u as f,v as M,a3 as I,a1 as k,am as H}from"./module-print-DdyfBoO_.js";import{o as N}from"./module-admin-CuSXLFGd.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-BWGK4gig.js";let w="all",F="",m=[];const O=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return e}},K=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB"}catch{return e}},j=()=>{const e=u.purchases||[],o=new Date,t=o.getMonth(),a=o.getFullYear();let s=0,r=0,p=0,d=0;return e.forEach(n=>{const l=new Date(n.date||n.createdAt||0),x=parseFloat(n.total)||0,v=parseFloat(n.amountPaid)||0,P=x-v;l.getMonth()===t&&l.getFullYear()===a&&n.status!=="cancelled"&&(s+=x),n.paymentType==="tempo"&&n.paymentStatus!=="lunas"&&n.status!=="cancelled"&&P>0&&(r+=P),n.status==="ordered"?p++:(n.status==="completed"||n.status==="received"&&n.paymentStatus==="lunas")&&d++}),{monthPurchasesTotal:s,totalUnpaidDebt:r,pendingArrivalCount:p,completedCount:d}},S=()=>{if(!i("admin-content"))return;const o=j(),t=u.purchases||[];t.sort((r,p)=>new Date(p.date||p.createdAt||0)-new Date(r.date||r.createdAt||0));const a=F.toLowerCase().trim();let s=t.filter(r=>{if(!(!a||(r.poNumber||"").toLowerCase().includes(a)||(r.supplierName||"").toLowerCase().includes(a)||(r.notes||"").toLowerCase().includes(a)||(r.items||[]).some(d=>(d.name||"").toLowerCase().includes(a))))return!1;if(w==="ordered")return r.status==="ordered";if(w==="received")return r.status==="received";if(w==="unpaid"){const d=(parseFloat(r.total)||0)-(parseFloat(r.amountPaid)||0);return r.paymentType==="tempo"&&d>0&&r.paymentStatus!=="lunas"}else if(w==="completed")return r.status==="completed"||r.status==="received"&&r.paymentStatus==="lunas";return!0});A("admin-content",`
        <div class="space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-2">
            <!-- 0. HERO BANNER PENGADAAN & ORDER KULAKAN (PO) -->
            <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 sm:p-7 text-white shadow-xl border border-slate-700/60">
                <div class="absolute -right-12 -top-12 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-25" style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);"></div>
                <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div class="space-y-1.5 max-w-xl">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/15">
                            <i class="fa-solid fa-cart-flatbed" style="color:var(--color-primary)"></i>
                            <span>Pengadaan &amp; Purchase Order (PO)</span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white">
                            Order Kulakan &amp; Restock Barang Toko
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300/90 font-medium leading-relaxed">
                            Kelola pesanan barang kulakan ke supplier rekanan, otomatisasi penerimaan stok masuk, dan pantau jatuh tempo hutang usaha.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" class="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold text-xs shadow-2xs transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                            <span>Data Supplier</span>
                        </button>
                        <button onclick="window.openCreatePOModal()" class="px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer primary-bg hover:opacity-95">
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
                        <div class="w-7 h-7 rounded-xl primary-bg-soft primary-text flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${b(o.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${b(o.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-blue-500">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">${o.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
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
                        value="${c(F)}" 
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
                        class="px-4 sm:px-5 py-3 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow hover:opacity-95 transition-all active:scale-95 shrink-0 cursor-pointer"
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
                    class="px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${w==="all"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                >
                    Semua PO (${t.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="ordered"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan / Dikirim (${t.filter(r=>r.status==="ordered").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="received"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${t.filter(r=>r.status==="received").length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="unpaid"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Belum Lunas
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${w==="completed"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-3">
                ${s.length===0?`
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl primary-bg-soft primary-text flex items-center justify-center text-3xl mb-3 shadow-xs">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Order Pembelian (PO)</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Buat order pembelian kulakan ke supplier untuk mencatat barang masuk, memperbarui stok toko otomatis, dan melacak jatuh tempo hutang.</p>
                        <button onclick="window.openCreatePOModal()" class="mt-4 px-5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow cursor-pointer">
                            <i class="fa-solid fa-cart-plus mr-1.5"></i> Buat Order PO Pertama
                        </button>
                    </div>
                `:s.map(r=>U(r)).join("")}
            </div>
        </div>

        <!-- MODAL FORM PEMBUATAN / EDIT PURCHASE ORDER (PO) (NATIVE BOTTOM SHEET) -->
        <div id="modal-po-form" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-form-box" class="modal-bottom-sheet bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        </div>

        <!-- MODAL DETAIL & REVIEW PURCHASE ORDER (NATIVE BOTTOM SHEET) -->
        <div id="modal-po-detail" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-detail-box" class="modal-bottom-sheet bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        </div>

        <!-- MODAL BAYAR / CICIL HUTANG TEMPO PO (NATIVE BOTTOM SHEET) -->
        <div id="modal-po-payment" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-payment-box" class="modal-bottom-sheet bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl w-full max-w-md max-h-[92vh] sm:max-h-[88vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `)},U=e=>{const o=parseFloat(e.total)||0,t=parseFloat(e.amountPaid)||0,a=o-t;let s="";e.status==="ordered"?s='<span class="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-200 dark:border-indigo-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan (Kirim)</span>':e.status==="received"?s='<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-[10px] font-black border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>':e.status==="completed"?s='<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>':e.status==="cancelled"&&(s='<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[10px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Batal</span>');let r="";e.paymentType==="cash"?r='<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Tunai / Cash</span>':e.paymentType==="konsinyasi"?r='<span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-[10px] font-bold">Konsinyasi (Titipan)</span>':e.paymentStatus==="lunas"||a<=0?r='<span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>':r=`<span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${b(a)}</span>`;const p=(e.items||[]).length,d=e.supplierPhone?L(e.supplierPhone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl shadow-2xs group">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas PO & Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl ${e.status==="received"||e.status==="completed"?"primary-bg-soft primary-text border primary-border":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"} flex items-center justify-center text-xl shrink-0 font-black shadow-inner">
                        <i class="fa-solid ${e.status==="received"||e.status==="completed"?"fa-boxes-stacked":"fa-cart-flatbed"}"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${c(e.poNumber||e.id)}</h4>
                            ${s}
                            ${r}
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-700 dark:text-slate-300">
                                <i class="fa-solid fa-truck-field text-[var(--color-primary)] mr-1"></i>${c(e.supplierName||"Supplier")}
                            </span>
                            <span><i class="fa-regular fa-calendar text-slate-400 mr-1"></i>${O(e.date||e.createdAt)}</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${p} Macam Barang</span>
                            ${e.tempoDueDate&&e.paymentType==="tempo"?`<span><i class="fa-solid fa-calendar-xmark text-amber-500 mr-1"></i>Jatuh Tempo: <b>${O(e.tempoDueDate)}</b></span>`:""}
                        </div>

                        <!-- Snippet preview item barang -->
                        <div class="text-[11px] text-slate-400 mt-1.5 truncate max-w-xl">
                            ${(e.items||[]).map(n=>`${c(n.name)} (${n.qty} ${c(n.unit||"pcs")})`).join(" • ")}
                        </div>
                    </div>
                </div>

                <!-- Sisi Kanan: Nilai Total & Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                    <div class="text-left lg:text-right">
                        <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Total Nilai PO</span>
                        <span class="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight">${b(o)}</span>
                        ${e.paymentType==="tempo"&&a>0?`
                            <span class="block text-[10px] font-bold text-amber-500">Sisa: ${b(a)}</span>
                        `:""}
                    </div>

                    <div class="flex items-center gap-1.5 ml-auto lg:ml-2 flex-wrap sm:flex-nowrap">
                        <!-- AKSI 1: TERIMA BARANG & AUTO-RESTOCK (JIKA MASIH DIPESAN) -->
                        ${e.status==="ordered"?`
                            <button 
                                onclick="event.stopPropagation(); window.receiveAndRestockPO('${e.id}')" 
                                class="px-3 h-9 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-glow active:scale-95 transition-all"
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
                                class="px-3 h-9 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all"
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
                                class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                                title="Kirim Surat Pesanan PO ke WhatsApp Sales"
                            >
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        `:""}

                        <!-- AKSI 4: CETAK DOKUMEN PO -->
                        <button 
                            onclick="event.stopPropagation(); window.printPurchaseOrder('${e.id}')" 
                            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                            title="Cetak Surat Pesanan (Print / PDF)"
                        >
                            <i class="fa-solid fa-print text-xs"></i>
                        </button>

                        <!-- AKSI 5: DETAIL PO -->
                        <button 
                            onclick="window.openPurchaseDetailModal('${e.id}')" 
                            class="px-3 h-9 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-xs hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-2xs"
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
    `};window.handlePurchaseSearch=e=>{F=e||"",S()};window.setPurchaseFilter=e=>{w=e,S()};window.receiveAndRestockPO=e=>{const t=(u.purchases||[]).find(s=>String(s.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");if(t.stockRestocked)return f("Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.");const a=(t.items||[]).map(s=>`• <b>${c(s.name)}</b>: +${s.qty} ${c(s.unit||"pcs")} (Modal HPP: ${b(s.unitPrice)})`).join("<br>");M("Terima Barang & Restock Otomatis",`Konfirmasi barang kulakan dari <b>${c(t.supplierName)}</b> (${t.poNumber}) telah tiba di toko / gudang?<br><br>
        <div class="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-left text-xs space-y-1">
            <p class="font-bold text-teal-800 dark:text-teal-300"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok produk berikut akan otomatis bertambah:</p>
            <div class="text-slate-700 dark:text-slate-300 mt-1">${a}</div>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,async()=>{I("Menambahkan Stok ke Gudang...");try{let s=!1;const r=u.products||[];(t.items||[]).forEach(n=>{if(!n.productId)return;const l=r.find(x=>String(x.id)===String(n.productId));if(l){const x=parseFloat(n.qty)||0,v=parseFloat(n.unitPrice)||0,P=parseFloat(l.stock)||0;l.stock=P+x,v>0&&(l.hpp=v),(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0),s=!0}}),t.status="received",t.stockRestocked=!0,t.receivedAt=new Date().toISOString();const p=parseFloat(t.total)||0;(parseFloat(t.amountPaid)||0)>=p&&(t.status="completed",t.paymentStatus="lunas"),await N(s?["purchases","products"]:["purchases"]),k(),f("Barang berhasil diterima & stok toko bertambah! 📦✨"),S()}catch(s){k(),console.error("Gagal restock produk:",s),f("Gagal memproses restock: "+s.message)}},"Ya, Terima & Restock")};window.openCreatePOModal=(e=null,o=null)=>{const t=!!o,a=u.purchases||[],s=u.suppliers||[];if(s.length===0){M("Belum Ada Rekanan","Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.",()=>{window.openAdminTab&&(window.openAdminTab("suppliers"),setTimeout(()=>{window.openSupplierFormModal?.()},200))},"Tambah Supplier");return}let r={};if(t)r=a.find(n=>String(n.id)===String(o))||{},m=JSON.parse(JSON.stringify(r.items||[]));else{const n=new Date().toISOString().split("T")[0],l=n.replace(/-/g,""),x=Math.floor(100+Math.random()*900);r={poNumber:`PO-${l}-${x}`,date:n,supplierId:e||(s[0]?s[0].id:""),paymentType:"tempo",tempoDays:14,items:[],discount:0,shippingFee:0,amountPaid:0,notes:""},m=[]}G(r,t);const p=i("modal-po-form"),d=i("modal-po-form-box");p&&(p.classList.remove("hidden"),setTimeout(()=>{p.classList.remove("opacity-0"),d&&d.classList.remove("scale-95")},10))};const G=(e,o)=>{if(!i("modal-po-form-content"))return;const a=u.suppliers||[];u.products,A("modal-po-form-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl primary-bg-soft primary-text border primary-border flex items-center justify-center text-lg shrink-0">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${o?"Edit Order Pembelian (PO)":"Buat Order Pembelian Baru (Kulakan)"}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${o?e.id:""}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-5 sm:p-6 space-y-5 flex-1 overflow-y-auto hide-scrollbar">
            <!-- 1. IDENTITAS HEADER PO -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Pilih Supplier Rekanan *</label>
                    <select id="pof-supplierId" required class="admin-input bg-slate-50 dark:bg-slate-900 font-bold cursor-pointer" onchange="window.handlePOSupplierChange(this.value)">
                        ${a.map(s=>`
                            <option value="${s.id}" ${String(s.id)===String(e.supplierId)?"selected":""} class="font-bold">
                                ${c(s.name)}${s.code?` (${c(s.code)})`:""}
                            </option>
                        `).join("")}
                    </select>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Nomor Purchase Order *</label>
                    <input type="text" id="pof-poNumber" required value="${c(e.poNumber||"")}" placeholder="PO-202609-001" class="admin-input bg-slate-50 dark:bg-slate-900 font-mono font-bold">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Order *</label>
                    <input type="date" id="pof-date" required value="${c(e.date||new Date().toISOString().split("T")[0])}" class="admin-input bg-slate-50 dark:bg-slate-900 font-bold">
                </div>
            </div>

            <!-- 2. PEMILIHAN TERMIN PEMBAYARAN -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                <span class="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Termin &amp; Skema Pembayaran Kulakan</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Metode Pembayaran</label>
                        <select id="pof-paymentType" class="admin-input bg-white dark:bg-slate-800 font-bold cursor-pointer" onchange="window.handlePOPaymentTypeChange(this.value)">
                            <option value="cash" ${e.paymentType==="cash"?"selected":""}>Cash / Tunai Saat Kirim</option>
                            <option value="tempo" ${e.paymentType==="tempo"?"selected":""}>Tempo (Hutang Usaha)</option>
                            <option value="konsinyasi" ${e.paymentType==="konsinyasi"?"selected":""}>Konsinyasi (Titipan Laku Bayar)</option>
                        </select>
                    </div>

                    <div id="pof-tempo-days-box" class="${e.paymentType==="tempo"?"":"hidden"}">
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Durasi Tempo (Hari)</label>
                        <input type="number" id="pof-tempoDays" min="1" max="180" value="${e.tempoDays||14}" placeholder="14" class="admin-input bg-white dark:bg-slate-800 font-bold" oninput="window.recalcPOTempoDueDate()">
                    </div>

                    <div id="pof-tempo-due-box" class="${e.paymentType==="tempo"?"":"hidden"}">
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Estimasi Jatuh Tempo</label>
                        <input type="text" id="pof-tempoDueDate" readonly class="admin-input bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                    </div>
                </div>
            </div>

            <!-- 3. ITEM BUILDER (DAFTAR BARANG YANG DIPESAN) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300">Daftar Barang yang Dipesan</h4>
                        <p class="text-[10px] text-slate-400">Pilih dari katalog produk atau masukkan kuantitas dan harga beli modal baru</p>
                    </div>
                    <button type="button" onclick="window.addPOItemRow()" class="px-3.5 py-1.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah Barang</span>
                    </button>
                </div>

                <div id="po-items-table-container" class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <!-- Tabel Item PO di-render oleh renderPOItemsTable() -->
                </div>
            </div>

            <!-- 4. RINGKASAN BIAYA & DISKON -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Catatan Tambahan / Nomor Surat Jalan</label>
                        <textarea id="pof-notes" rows="3" placeholder="Catatan pengiriman, armada truk, nomor invoice supplier..." class="admin-input bg-white dark:bg-slate-800 resize-none text-xs">${c(e.notes||"")}</textarea>
                    </div>

                    <div class="space-y-2 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-500">Subtotal Barang:</span>
                            <span class="font-bold text-slate-800 dark:text-white" id="pof-calc-subtotal">Rp 0</span>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500">Diskon Potongan Nota:</span>
                            <input type="number" id="pof-discount" min="0" value="${e.discount||0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500">Ongkos Kirim / Ekspedisi:</span>
                            <input type="number" id="pof-shippingFee" min="0" value="${e.shippingFee||0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm sm:text-base font-black">
                            <span class="text-slate-800 dark:text-white">Total Tagihan PO:</span>
                            <span class="text-[var(--color-primary)] text-lg" id="pof-calc-grandtotal">Rp 0</span>
                        </div>
                        <div class="flex items-center justify-between gap-3 pt-1">
                            <span class="text-slate-500 font-bold" id="pof-dp-label">Pembayaran Awal / DP:</span>
                            <input type="number" id="pof-amountPaid" min="0" value="${e.amountPaid||0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold text-emerald-600" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="flex items-center justify-between text-xs font-bold pt-1">
                            <span class="text-amber-500">Sisa Hutang Tempo:</span>
                            <span class="text-amber-600 dark:text-amber-400" id="pof-calc-balance">Rp 0</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <!-- TOMBOL SIMPAN STICKY FOOTER -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5 bg-white/95 dark:bg-slate-900/95 sticky bottom-0 z-10 shrink-0 backdrop-blur-xs">
                <button type="button" onclick="window.closePOFormModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-floppy-disk mr-1.5"></i> Simpan Order PO
                </button>
            </div>
        </form>
    `),m.length===0?window.addPOItemRow():$(),window.recalcPOTempoDueDate(),window.recalcPOTotals()};window.closePOFormModal=()=>{const e=i("modal-po-form"),o=i("modal-po-form-box");e&&(e.classList.add("opacity-0"),o&&o.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden")},200))};window.addPOItemRow=()=>{const e=u.products||[],o=i("pof-supplierId")?.value||"",a=e.filter(s=>String(s.supplierId)===String(o))[0]||e[0]||null;m.push({productId:a?a.id:"",name:a?a.name:"",sku:a&&a.sku||"",qty:1,unit:"Pcs",unitPrice:a&&(parseFloat(a.hpp)||parseFloat(a.price))||0,subtotal:a&&(parseFloat(a.hpp)||parseFloat(a.price))||0}),$(),window.recalcPOTotals()};window.removePOItemRow=e=>{m.splice(e,1),$(),window.recalcPOTotals()};const $=()=>{if(!i("po-items-table-container"))return;const o=u.products||[],t=i("pof-supplierId")?.value||"";if(m.length===0){A("po-items-table-container",`
            <div class="p-6 text-center text-slate-400 text-xs font-bold">
                Belum ada barang di dalam daftar order ini. Klik "+ Tambah Barang" di atas.
            </div>
        `);return}A("po-items-table-container",`
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
                <thead>
                    <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th class="py-2.5 px-3">Produk Toko</th>
                        <th class="py-2.5 px-3 w-24">Jumlah</th>
                        <th class="py-2.5 px-3 w-24">Satuan</th>
                        <th class="py-2.5 px-3 w-36">Harga Modal (HPP)</th>
                        <th class="py-2.5 px-3 w-36 text-right">Subtotal</th>
                        <th class="py-2.5 px-2 w-10 text-center"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${m.map((a,s)=>{const r=(parseFloat(a.qty)||0)*(parseFloat(a.unitPrice)||0);return`
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                <td class="py-2.5 px-3">
                                    <select class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold w-full" onchange="window.updatePOItemProduct(${s}, this.value)">
                                        <option value="" class="text-slate-400">-- Pilih Produk --</option>
                                        ${o.map(p=>{const d=String(p.id)===String(a.productId),n=String(p.supplierId)===String(t);return`
                                                <option value="${p.id}" ${d?"selected":""} class="${n?"font-black text-teal-600":""}">
                                                    ${n?"★ ":""}${c(p.name)} (${p.sku||"-"})
                                                </option>
                                            `}).join("")}
                                    </select>
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="number" min="0.01" step="any" value="${a.qty}" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-center w-full" oninput="window.updatePOItemField(${s}, 'qty', this.value)">
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="text" value="${c(a.unit||"Pcs")}" placeholder="Pcs/Sak" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-center w-full" oninput="window.updatePOItemField(${s}, 'unit', this.value)">
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="number" min="0" step="1" value="${a.unitPrice}" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-right w-full" oninput="window.updatePOItemField(${s}, 'unitPrice', this.value)">
                                </td>
                                <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                    ${b(r)}
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <button type="button" onclick="window.removePOItemRow(${s})" class="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Hapus Baris">
                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                    </button>
                                </td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `)};window.updatePOItemProduct=(e,o)=>{const a=(u.products||[]).find(s=>String(s.id)===String(o));a&&m[e]&&(m[e].productId=a.id,m[e].name=a.name,m[e].sku=a.sku||"",m[e].unitPrice=parseFloat(a.hpp)||parseFloat(a.price)||0,m[e].subtotal=(parseFloat(m[e].qty)||1)*m[e].unitPrice),$(),window.recalcPOTotals()};window.updatePOItemField=(e,o,t)=>{m[e]&&(o==="qty"||o==="unitPrice"?(m[e][o]=parseFloat(t)||0,m[e].subtotal=(parseFloat(m[e].qty)||0)*(parseFloat(m[e].unitPrice)||0)):m[e][o]=t,window.recalcPOTotals())};window.recalcPOTempoDueDate=()=>{const e=i("pof-date")?.value||new Date().toISOString().split("T")[0],o=parseInt(i("pof-tempoDays")?.value,10)||14,t=new Date(e);t.setDate(t.getDate()+o);const a=t.toISOString().split("T")[0],s=i("pof-tempoDueDate");s&&(s.value=O(a),s.setAttribute("data-due-iso",a))};window.handlePOSupplierChange=e=>{const t=(u.suppliers||[]).find(a=>String(a.id)===String(e));if(t&&t.defaultTerms){const a=i("pof-paymentType");if(a){if(t.defaultTerms.startsWith("tempo")){a.value="tempo";const s=parseInt(t.defaultTerms.split("_")[1],10)||14,r=i("pof-tempoDays");r&&(r.value=s)}else t.defaultTerms==="konsinyasi"?a.value="konsinyasi":a.value="cash";window.handlePOPaymentTypeChange(a.value)}}$()};window.handlePOPaymentTypeChange=e=>{const o=i("pof-tempo-days-box"),t=i("pof-tempo-due-box"),a=i("pof-dp-label"),s=i("pof-amountPaid");if(e==="tempo")o&&o.classList.remove("hidden"),t&&t.classList.remove("hidden"),a&&(a.innerText="Uang Muka / DP:"),window.recalcPOTempoDueDate();else if(o&&o.classList.add("hidden"),t&&t.classList.add("hidden"),a&&(a.innerText="Nomor Bayar:"),e==="cash"&&s){const r=window.computePOGrandTotal();s.value=r}window.recalcPOTotals()};window.computePOGrandTotal=()=>{const e=m.reduce((s,r)=>s+(parseFloat(r.qty)||0)*(parseFloat(r.unitPrice)||0),0),o=parseFloat(i("pof-discount")?.value)||0,t=parseFloat(i("pof-shippingFee")?.value)||0;return Math.max(0,e-o+t)};window.recalcPOTotals=()=>{const e=m.reduce((l,x)=>l+(parseFloat(x.qty)||0)*(parseFloat(x.unitPrice)||0),0),o=parseFloat(i("pof-discount")?.value)||0,t=parseFloat(i("pof-shippingFee")?.value)||0,a=Math.max(0,e-o+t),s=parseFloat(i("pof-amountPaid")?.value)||0,r=Math.max(0,a-s),p=i("pof-calc-subtotal"),d=i("pof-calc-grandtotal"),n=i("pof-calc-balance");p&&(p.innerText=b(e)),d&&(d.innerText=b(a)),n&&(n.innerText=b(r))};window.savePOForm=async(e,o)=>{e.preventDefault(),I("Menyimpan Order Pembelian...");try{const t=u.suppliers||[],a=i("pof-supplierId")?.value,s=t.find(y=>String(y.id)===String(a))||{},r=(i("pof-poNumber")?.value||"").trim(),p=i("pof-date")?.value||new Date().toISOString().split("T")[0],d=i("pof-paymentType")?.value||"tempo",n=parseInt(i("pof-tempoDays")?.value,10)||14,l=i("pof-tempoDueDate")?.getAttribute("data-due-iso")||"",x=(i("pof-notes")?.value||"").trim(),v=parseFloat(i("pof-discount")?.value)||0,P=parseFloat(i("pof-shippingFee")?.value)||0,T=parseFloat(i("pof-amountPaid")?.value)||0;if(m.length===0)return k(),f("Minimal harus ada 1 barang dalam order pembelian!");const R=m.filter(y=>y.name&&(parseFloat(y.qty)||0)>0);if(R.length===0)return k(),f("Pastikan produk dan kuantitas order telah diisi dengan benar!");const B=R.reduce((y,h)=>y+(parseFloat(h.qty)||0)*(parseFloat(h.unitPrice)||0),0),D=Math.max(0,B-v+P),C=Math.max(0,D-T);let E="belum_bayar";T>=D&&D>0?E="lunas":T>0&&(E="sebagian"),u.purchases||(u.purchases=[]);const g={id:o||"po_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),poNumber:r,date:p,supplierId:a,supplierName:s.name||"Supplier",supplierPhone:s.phone||"",paymentType:d,tempoDays:d==="tempo"?n:0,tempoDueDate:d==="tempo"?l:null,items:R,subtotal:B,discount:v,shippingFee:P,total:D,amountPaid:T,balance:C,paymentStatus:E,notes:x,updatedAt:new Date().toISOString()};if(!o)g.status="ordered",g.stockRestocked=!1,g.createdAt=new Date().toISOString(),g.paymentHistory=T>0?[{date:new Date().toISOString(),amount:T,note:d==="cash"?"Pembayaran Tunai Lunas":"Uang Muka / DP Awal",method:d==="cash"?"Tunai":"Transfer"}]:[],u.purchases.unshift(g);else{const y=u.purchases.findIndex(h=>String(h.id)===String(o));if(y>-1){const h=u.purchases[y];g.status=h.status||"ordered",g.stockRestocked=h.stockRestocked||!1,g.createdAt=h.createdAt,g.paymentHistory=h.paymentHistory||[],T>(h.amountPaid||0)&&g.paymentHistory.push({date:new Date().toISOString(),amount:T-(h.amountPaid||0),note:"Penyesuaian Bayar via Edit PO",method:"Transfer / Kas"}),u.purchases[y]=g}}await N(["purchases"]),k(),window.closePOFormModal(),f(o?"Order PO diperbarui! ✨":"Order PO kulakan berhasil dibuat! 🛒"),S()}catch(t){k(),console.error("Gagal menyimpan PO:",t),f("Gagal menyimpan PO: "+t.message)}};window.deletePurchaseOrder=e=>{const t=(u.purchases||[]).find(s=>String(s.id)===String(e));if(!t)return;let a=`Hapus pesanan kulakan <b>${c(t.poNumber||t.id)}</b> ke <b>${c(t.supplierName)}</b>?`;t.stockRestocked&&(a+='<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>'),M("Hapus Purchase Order",a,async()=>{I("Menghapus PO...");try{u.purchases=(u.purchases||[]).filter(s=>String(s.id)!==String(e)),await N(["purchases"]),k(),f("Purchase Order berhasil dihapus."),S()}catch(s){k(),f("Gagal menghapus: "+s.message)}},"Hapus Permanen")};window.openPurchaseDetailModal=e=>{const t=(u.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=i("modal-po-detail"),s=i("modal-po-detail-box"),r=i("modal-po-detail-content");if(!a||!r)return;const p=parseFloat(t.total)||0,d=parseFloat(t.amountPaid)||0,n=p-d;A("modal-po-detail-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40">
            <div>
                <div class="flex items-center gap-2">
                    <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${c(t.poNumber||t.id)}</h3>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${t.status==="received"||t.status==="completed"?"primary-bg-soft primary-text border primary-border":"bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"}">
                        ${t.status==="ordered"?"Dipesan":t.status==="received"?"Barang Diterima":"Selesai"}
                    </span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5">Supplier: <b>${c(t.supplierName)}</b> • Tanggal: ${O(t.date||t.createdAt)}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.printPurchaseOrder('${t.id}')" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer" title="Cetak PO">
                    <i class="fa-solid fa-print text-xs"></i>
                </button>
                <button onclick="window.closePurchaseDetailModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>

        <div class="p-5 sm:p-6 space-y-5">
            <!-- TABEL DAFTAR BARANG PO -->
            <div>
                <h4 class="font-bold text-xs uppercase tracking-widest text-slate-500 mb-2">Item Barang Dipesan</h4>
                <div class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                                <th class="py-2.5 px-3">Nama Produk</th>
                                <th class="py-2.5 px-3 text-center">Jumlah</th>
                                <th class="py-2.5 px-3 text-right">Harga Modal</th>
                                <th class="py-2.5 px-3 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${(t.items||[]).map(l=>`
                                <tr>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-slate-100">${c(l.name)}</p>
                                        ${l.sku?`<span class="text-[10px] font-mono text-slate-400">SKU: ${c(l.sku)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 text-center font-bold text-slate-700 dark:text-slate-200">
                                        ${l.qty} ${c(l.unit||"pcs")}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${b(l.unitPrice)}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                        ${b((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0))}
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
                        <span class="text-slate-500">Subtotal:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${b(t.subtotal)}</span>
                    </div>
                    ${t.discount>0?`
                        <div class="flex justify-between text-emerald-500">
                            <span>Diskon Nota:</span>
                            <span>-${b(t.discount)}</span>
                        </div>
                    `:""}
                    ${t.shippingFee>0?`
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim:</span>
                            <span>+${b(t.shippingFee)}</span>
                        </div>
                    `:""}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total PO:</span>
                        <span class="text-[var(--color-primary)]">${b(p)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${b(d)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1">
                        <span class="text-amber-500">Sisa Hutang Tempo:</span>
                        <span class="text-amber-600 dark:text-amber-400 font-black">${n>0?b(n):"Lunas (Rp 0)"}</span>
                    </div>
                </div>

                <!-- RIWAYAT CICILAN & TOMBOL BAYAR -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Histori Pembayaran Cicilan</span>
                        ${n>0&&t.paymentType==="tempo"?`
                            <button onclick="window.closePurchaseDetailModal(); window.openPurchasePaymentModal('${t.id}')" class="px-3 py-1 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-2xs hover:bg-amber-600 transition-all">
                                + Bayar Cicilan
                            </button>
                        `:""}
                    </div>

                    ${(t.paymentHistory||[]).length===0?`
                        <p class="text-xs text-slate-400 text-center py-4">Belum ada catatan pembayaran.</p>
                    `:`
                        <div class="space-y-2 max-h-48 overflow-y-auto">
                            ${t.paymentHistory.map(l=>`
                                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400">${b(l.amount)}</span>
                                        <p class="text-[10px] text-slate-400">${K(l.date)} • ${c(l.method||"Transfer")}</p>
                                    </div>
                                    <span class="text-[11px] text-slate-500 dark:text-slate-300 font-bold">${c(l.note||"-")}</span>
                                </div>
                            `).join("")}
                        </div>
                    `}
                </div>
            </div>
        </div>
    `),a.classList.remove("hidden"),setTimeout(()=>{a.classList.remove("opacity-0"),s&&s.classList.remove("scale-95")},10)};window.closePurchaseDetailModal=()=>{const e=i("modal-po-detail"),o=i("modal-po-detail-box");e&&(e.classList.add("opacity-0"),o&&o.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden")},200))};window.openPurchasePaymentModal=e=>{const t=(u.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=parseFloat(t.total)||0,s=parseFloat(t.amountPaid)||0,r=Math.max(0,a-s),p=i("modal-po-payment"),d=i("modal-po-payment-box"),n=i("modal-po-payment-content");!p||!n||(A("modal-po-payment-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg border border-amber-200 dark:border-amber-800">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar / Cicil Hutang Supplier</h3>
                    <p class="text-xs text-slate-400">${c(t.supplierName)} • ${c(t.poNumber||t.id)}</p>
                </div>
            </div>
            <button onclick="window.closePurchasePaymentModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <form id="po-pay-form" onsubmit="window.submitPurchasePayment(event, '${t.id}')" class="p-5 space-y-4">
            <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1">
                <div class="flex justify-between">
                    <span class="text-slate-500">Total Tagihan PO:</span>
                    <span class="font-bold text-slate-800 dark:text-white">${b(a)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">Sudah Dibayar:</span>
                    <span class="font-bold text-emerald-600">${b(s)}</span>
                </div>
                <div class="flex justify-between pt-1 border-t border-amber-200 dark:border-amber-800 font-black">
                    <span class="text-amber-600 dark:text-amber-400">Sisa Hutang Wajib Bayar:</span>
                    <span class="text-amber-600 dark:text-amber-400 text-sm">${b(r)}</span>
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Nominal Pembayaran (Rp) *</label>
                <div class="relative">
                    <input type="number" id="pop-amount" required min="1" max="${r}" value="${r}" class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-base pr-20 text-emerald-600">
                    <button type="button" onclick="document.getElementById('pop-amount').value = ${r}" class="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg primary-bg text-white font-bold text-[10px] shadow-2xs">
                        Lunas
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Tanggal Bayar *</label>
                    <input type="date" id="pop-date" required value="${new Date().toISOString().split("T")[0]}" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Metode Bayar</label>
                    <select id="pop-method" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold cursor-pointer">
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="Kas Tunai">Kas Tunai</option>
                        <option value="Giro / Cek">Giro / Cek</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Catatan / Bukti Transfer</label>
                <input type="text" id="pop-note" placeholder="Contoh: Transfer via BCA No Ref 123456" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs">
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button type="button" onclick="window.closePurchasePaymentModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs">
                    Batal
                </button>
                <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-2xs transition-all active:scale-95">
                    <i class="fa-solid fa-check mr-1.5"></i> Simpan Pembayaran
                </button>
            </div>
        </form>
    `),p.classList.remove("hidden"),setTimeout(()=>{p.classList.remove("opacity-0"),d&&d.classList.remove("scale-95")},10))};window.closePurchasePaymentModal=()=>{const e=i("modal-po-payment"),o=i("modal-po-payment-box");e&&(e.classList.add("opacity-0"),o&&o.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden")},200))};window.submitPurchasePayment=async(e,o)=>{e.preventDefault(),I("Mencatat Pembayaran...");try{const a=(u.purchases||[]).find(P=>String(P.id)===String(o));if(!a)throw new Error("Data PO tidak ditemukan!");const s=parseFloat(i("pop-amount")?.value)||0,r=i("pop-date")?.value||new Date().toISOString(),p=i("pop-method")?.value||"Transfer Bank",d=(i("pop-note")?.value||"").trim();if(s<=0)return k(),f("Nominal pembayaran harus lebih besar dari 0!");const n=parseFloat(a.total)||0,x=(parseFloat(a.amountPaid)||0)+s,v=Math.max(0,n-x);a.amountPaid=x,a.balance=v,x>=n?(a.paymentStatus="lunas",a.status==="received"&&(a.status="completed")):a.paymentStatus="sebagian",a.paymentHistory||(a.paymentHistory=[]),a.paymentHistory.push({date:r,amount:s,method:p,note:d||`Pembayaran cicilan tempo (${p})`}),a.updatedAt=new Date().toISOString(),await N(["purchases"]),k(),window.closePurchasePaymentModal(),f("Pembayaran hutang supplier berhasil dicatat! 💰"),S()}catch(t){k(),console.error("Gagal simpan pembayaran:",t),f("Gagal memproses: "+t.message)}};window.sendPOToSupplierWA=e=>{const t=(u.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=t.supplierPhone?L(t.supplierPhone):"";if(!a)return f("Nomor WhatsApp supplier belum tercatat di data supplier!");const s=u.store?.name||"Toko Putri Utama Teknik",r=u.store?.address||"",p=u.store?.phone||"";let d=(t.items||[]).map((l,x)=>`${x+1}. *${l.name}* - ${l.qty} ${l.unit||"pcs"} @ Rp ${Number(l.unitPrice).toLocaleString("id-ID")}`).join(`
`),n=`*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*
Dari: *${s}*
`+(r?`Alamat: ${r}
`:"")+(p?`Telp Toko: ${p}
`:"")+`-----------------------------------------
Kepada Yth: *${t.supplierName}*
Nomor PO: *${t.poNumber||t.id}*
Tanggal: ${O(t.date||t.createdAt)}
Termin: ${t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${O(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash Saat Kirim"}
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
Mohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya! 🙏`;H(a,n)};window.printPurchaseOrder=e=>{const t=(u.purchases||[]).find(l=>String(l.id)===String(e));if(!t)return f("Data PO tidak ditemukan!");const a=u.store||{};if(!i("po-print-container"))return;const r=t.paymentType==="tempo"?`Tempo ${t.tempoDays||14} Hari (Jatuh Tempo: ${O(t.tempoDueDate)})`:t.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",p=`
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${c(a.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${c(a.address||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${c(a.phone||"-")}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #2563eb; text-transform: uppercase;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${c(t.poNumber||t.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${O(t.date||t.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${c(t.supplierName)}</p>
                    ${t.supplierPhone?`<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${c(t.supplierPhone)}</p>`:""}
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Syarat &amp; Ketentuan:</span>
                    <p style="margin: 0; font-weight: bold;">Termin: ${r}</p>
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
                    ${(t.items||[]).map((l,x)=>`
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 8px 10px; text-align: center;">${x+1}</td>
                            <td style="padding: 8px 10px;">
                                <b>${c(l.name)}</b>
                                ${l.sku?`<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${c(l.sku)}</span>`:""}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold;">${l.qty} ${c(l.unit||"pcs")}</td>
                            <td style="padding: 8px 10px; text-align: right;">${b(l.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold;">${b((parseFloat(l.qty)||0)*(parseFloat(l.unitPrice)||0))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${c(t.notes||"Harap barang dikirim sesuai spesifikasi & packing aman.")}</p>
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
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${c(a.name||"Toko Putri")}</div>
                </div>
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Diterima &amp; Disetujui Oleh:</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${c(t.supplierName)}</div>
                </div>
            </div>
        </div>
    `;let d=i("po-print-iframe");d||(d=document.createElement("iframe"),d.id="po-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",document.body.appendChild(d));const n=d.contentWindow.document;n.open(),n.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${c(t.poNumber||t.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${p}
        </body>
        </html>
    `),n.close(),setTimeout(()=>{d.contentWindow.focus(),d.contentWindow.print()},300)};window.renderPurchasesView=S;window.computePurchaseMetrics=j;export{j as computePurchaseMetrics,S as renderPurchasesView};

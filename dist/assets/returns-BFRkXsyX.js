import{e as u,a as c,i as l,k as g,H as $,l as N,n as R,f as k,o as V,b as U,v as L}from"./module-print-3zgqBWlS.js";import{Q as G,s as C,R as Y,S as W,T as z}from"./module-pos-DpaFV9Av.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-BA-IM1Mt.js";import"./module-faq-CQvxrQUs.js";let y="sales",A="",P="card",h=null,f=[];const E=t=>{if(!t)return"PL";const a=t.trim().split(/\s+/).filter(Boolean);return a.length===1?a[0].substring(0,2).toUpperCase():(a[0][0]+a[a.length-1][0]).toUpperCase()},M=()=>{if(!u("admin-content"))return;Array.isArray(c.salesReturns)||(c.salesReturns=[]),Array.isArray(c.vendorReturns)||(c.vendorReturns=[]);const a=c.salesReturns.reduce((d,o)=>d+(parseFloat(o.totalRefund)||0),0),e=c.salesReturns.length,r=c.vendorReturns.reduce((d,o)=>d+(parseFloat(o.totalClaim)||0),0),n=(c.products||[]).reduce((d,o)=>{let p=parseFloat(o.damagedStock)||0;return Array.isArray(o.variants)&&(p+=o.variants.reduce((m,i)=>m+(parseFloat(i.damagedStock)||0),0)),d+p},0),s=`
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 1. HERO BANNER: PUSAT RETUR & REKONSILIASI RMA (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs card-native">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5 max-w-xl">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-right-left"></i> Modul Rekonsiliasi RMA
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Retur Barang &amp; Rekonsiliasi
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Rekonsiliasi pengembalian barang konsumen, klaim cacat distributor pabrik, restorasi tiket FIFO, dan kontrol persediaan karantina.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0 flex-wrap">
                        <button type="button" onclick="window.openVendorReturnModal()" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-ramp-box text-amber-500"></i>
                            <span>+ Retur Supplier</span>
                        </button>
                        <button type="button" onclick="window.openSalesReturnModal()" class="btn-native-action px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-cart-arrow-down text-xs"></i>
                            <span>+ Retur Penjualan</span>
                        </button>
                    </div>
                </div>

                <!-- 2. METRIK BENTO STAT CARDS (4 KPI SELARAS TEMA TOKO) -->
                <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Retur Konsumen</span>
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 tracking-tight font-mono">${k(a)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Pengembalian Dana / Kredit</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasus Retur Nota</span>
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-receipt"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${e} <span class="text-xs font-bold text-slate-400">Nota</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Transaksi Terselesaikan</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Klaim Supplier</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-center text-xs shadow-2xs shrink-0">
                                <i class="fa-solid fa-truck-ramp-box"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight font-mono">${k(r)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Potong Hutang / Refund PO</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-rose-500 dark:text-rose-400">Karantina Rusak</span>
                            <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40 flex items-center justify-center text-xs shadow-2xs shrink-0">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 tracking-tight">${n} <span class="text-xs font-bold text-slate-400">Unit</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Menunggu Klaim Distributor</p>
                    </div>
                </div>
            </div>

            <!-- 3. TOOLBAR: TAB SWITCHER, LIVE SEARCH BAR & VIEW MODE SWITCHER -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between card-native p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Segmented Tab Pills Switcher -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                    <button 
                        type="button" 
                        onclick="window.switchReturnsTab('sales')" 
                        class="px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${y==="sales"?"shadow-sm":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                        style="${y==="sales"?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-basket-shopping"></i>
                        <span>Retur Penjualan</span>
                        <span class="px-1.5 py-0.5 rounded-full text-[10px] font-bold ${y==="sales"?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}">
                            ${c.salesReturns.length}
                        </span>
                    </button>
                    <button 
                        type="button" 
                        onclick="window.switchReturnsTab('vendor')" 
                        class="px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${y==="vendor"?"shadow-sm":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                        style="${y==="vendor"?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-truck-ramp-box"></i>
                        <span>Retur Supplier</span>
                        <span class="px-1.5 py-0.5 rounded-full text-[10px] font-bold ${y==="vendor"?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}">
                            ${c.vendorReturns.length}
                        </span>
                    </button>
                </div>

                <div class="flex items-center gap-2 flex-1 justify-end">
                    <!-- Live Search Box -->
                    <div class="relative flex-1 sm:max-w-md">
                        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                        <input 
                            type="text" 
                            id="returns-search-input" 
                            value="${l(A)}" 
                            oninput="window.handleReturnsSearch(this.value)" 
                            placeholder="${y==="sales"?"Cari no retur, no nota, nama pelanggan...":"Cari no retur, supplier, rujukan PO..."}" 
                            class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-2.5 pl-10 pr-9 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                        >
                        <button type="button" id="returns-search-clear-btn" onclick="window.handleReturnsSearch(''); const ri=el('returns-search-input'); if(ri){ri.value='';ri.focus();}" class="${A?"":"hidden"} absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian">
                            <i class="fa-solid fa-circle-xmark text-sm"></i>
                        </button>
                    </div>

                    <!-- View Mode Toggle Switcher (Card vs Table) -->
                    <div class="hidden sm:flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                        <button 
                            type="button" 
                            id="btn-returns-view-card" 
                            onclick="window.switchReturnsViewMode('card')" 
                            title="Tampilan Kartu Native App" 
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer ${P==="card"?"shadow-xs text-white":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}" 
                            style="${P==="card"?"background: var(--color-primary); color: #fff;":""}"
                        >
                            <i class="fa-solid fa-table-cells-large"></i>
                        </button>
                        <button 
                            type="button" 
                            id="btn-returns-view-table" 
                            onclick="window.switchReturnsViewMode('table')" 
                            title="Tampilan Tabel Analitis" 
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer ${P==="table"?"shadow-xs text-white":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}" 
                            style="${P==="table"?"background: var(--color-primary); color: #fff;":""}"
                        >
                            <i class="fa-solid fa-table-list"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 4. CONTAINER DAFTAR RIWAYAT RETUR -->
            <div id="returns-table-wrapper">
                ${y==="sales"?K():B()}
            </div>
        </div>
    `;U("admin-content",s)},J=t=>{y=t,M()},X=t=>{P=t;const a=u("returns-table-wrapper");a&&(a.innerHTML=y==="sales"?K():B());const e=u("btn-returns-view-card"),r=u("btn-returns-view-table");e&&r&&(t==="card"?(e.className="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer shadow-xs text-white",e.style.background="var(--color-primary)",e.style.color="#fff",r.className="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer",r.style.background="",r.style.color=""):(r.className="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer shadow-xs text-white",r.style.background="var(--color-primary)",r.style.color="#fff",e.className="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer",e.style.background="",e.style.color=""))},Z=t=>{A=(t||"").trim().toLowerCase();const a=u("returns-search-clear-btn");a&&a.classList.toggle("hidden",!A);const e=u("returns-table-wrapper");e&&(e.innerHTML=y==="sales"?K():B())},K=()=>{const t=(c.salesReturns||[]).filter(e=>{if(!A)return!0;const r=A;return e.id&&e.id.toLowerCase().includes(r)||e.orderId&&e.orderId.toLowerCase().includes(r)||e.customerName&&e.customerName.toLowerCase().includes(r)||e.customerPhone&&e.customerPhone.includes(r)});if(t.length===0)return`
            <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs py-16 px-4 text-center text-slate-400 dark:text-slate-500">
                <div class="w-16 h-16 mx-auto mb-3.5 rounded-2xl flex items-center justify-center text-2xl shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Belum Ada Riwayat Retur Penjualan</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto text-slate-500 dark:text-slate-400">Semua retur dari kasir POS maupun web akan tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openSalesReturnModal()" class="btn-native-action mt-4 px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-sm active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-plus text-xs"></i> Buat Retur Penjualan Baru
                </button>
            </div>
        `;const a=[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0));return P==="card"?`
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).length,s=e.customerName||"Pelanggan Umum",d=E(s);let o='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10.5px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?o='<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas Laci)</span>':e.refundMethod==="credit"?o='<span class="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-sky-200 dark:border-sky-800/60 shadow-2xs"><i class="fa-solid fa-wallet"></i> Saldo Kredit</span>':e.refundMethod==="exchange"&&(o='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black inline-flex items-center gap-1.5 border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>'),`
                        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3.5">
                            <!-- Top Bar: Avatar, Nama Pelanggan, No Retur & Badge Metode -->
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                        ${d}
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-black text-sm text-slate-800 dark:text-white leading-tight truncate">
                                            ${l(s)}
                                        </h5>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="font-mono font-black text-xs" style="color: var(--color-primary);">${l(e.id)}</span>
                                            <span class="text-[10px] font-semibold text-slate-400">&middot; ${r}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shrink-0">
                                    ${o}
                                </div>
                            </div>

                            <!-- Middle Section: Rujukan Nota & Daftar Barang yang Diretur -->
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2.5">
                                <div class="flex items-center justify-between text-xs gap-2">
                                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-300 text-[11px]">
                                        <i class="fa-solid fa-receipt text-slate-400"></i> ${l(e.orderId||"-")}
                                    </span>
                                    <div class="text-right">
                                        <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">Kompensasi Retur</span>
                                        <span class="text-base font-black text-rose-600 dark:text-rose-400 font-mono">${k(e.totalRefund||0)}</span>
                                    </div>
                                </div>

                                <!-- Cuplikan Barang -->
                                <div class="space-y-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                                    <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        <span>Item Diretur (${n} macam):</span>
                                        <span>Alokasi Stok</span>
                                    </div>
                                    <div class="space-y-1">
                                        ${(e.items||[]).slice(0,3).map(p=>{const m=p.condition==="damaged"?'<span class="text-[9.5px] font-black text-rose-500 shrink-0"><i class="fa-solid fa-triangle-exclamation"></i> Karantina</span>':'<span class="text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0"><i class="fa-solid fa-check"></i> Rak Toko</span>';return`
                                                <div class="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 text-xs">
                                                    <div class="flex items-center gap-1.5 min-w-0">
                                                        <span class="px-1.5 py-0.5 rounded-md font-black text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">${p.qty}x</span>
                                                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[180px]">${l(p.name)}</span>
                                                        ${p.variantName?`<span class="text-[9.5px] text-slate-400 shrink-0">[${l(p.variantName)}]</span>`:""}
                                                    </div>
                                                    ${m}
                                                </div>
                                            `}).join("")}
                                        ${n>3?`<p class="text-[10.5px] font-bold text-center text-slate-400 pt-0.5">+${n-3} item barang lainnya</p>`:""}
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Action Bar: Tombol Cetak & Aksi Native Touch Target 40px -->
                            <div class="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                                <button type="button" onclick="window.printSalesReturnA4('${l(e.id)}')" class="btn-native-action flex-1 h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer">
                                    <i class="fa-solid fa-file-invoice text-xs"></i>
                                    <span>Cetak Nota A4</span>
                                </button>
                                <button type="button" onclick="window.printSalesReturnThermal('${l(e.id)}')" class="btn-native-action flex-1 h-10 rounded-xl sm:rounded-2xl border border-[rgba(var(--color-primary-rgb),0.3)] text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary);">
                                    <i class="fa-solid fa-print text-xs"></i>
                                    <span>Struk Thermal</span>
                                </button>
                                <button type="button" onclick="window.deleteSalesReturn('${l(e.id)}')" title="Hapus Riwayat Retur Penjualan" class="btn-native-action w-10 h-10 rounded-xl sm:rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0">
                                    <i class="fa-solid fa-trash-can text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `:`
        <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Rujukan Nota</th>
                            <th class="py-3.5 px-4">Pelanggan</th>
                            <th class="py-3.5 px-4">Barang Diretur</th>
                            <th class="py-3.5 px-4 text-right">Nilai Kompensasi</th>
                            <th class="py-3.5 px-4">Metode</th>
                            <th class="py-3.5 px-4 text-center">Aksi / Cetak</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).map(d=>`${d.qty}x ${l(d.name)}${d.variantName?` [${l(d.variantName)}]`:""}`).join(", ");let s='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?s='<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas Laci)</span>':e.refundMethod==="credit"?s='<span class="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 text-[10px] font-black inline-flex items-center gap-1 border border-sky-200 dark:border-sky-800/60"><i class="fa-solid fa-wallet"></i> Saldo Kredit</span>':e.refundMethod==="exchange"&&(s='<span class="px-2.5 py-1 rounded-full text-[10px] font-black inline-flex items-center gap-1 border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>'),`
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black block" style="color: var(--color-primary);">${l(e.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${l(e.orderId||"-")}</span>
                                    </td>
                                    <td class="py-3.5 px-4">
                                        <span class="font-black text-slate-800 dark:text-white block">${l(e.customerName||"Pelanggan Umum")}</span>
                                        <span class="text-[10px] font-semibold text-slate-400">${l(e.customerPhone||"")}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${l(n)}">${l(n||"-")}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${e.items?e.items.length:0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400 text-sm font-mono">
                                        ${k(e.totalRefund||0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${s}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.printSalesReturnA4('${l(e.id)}')" title="Cetak Nota Retur A4 Resmi" class="btn-native-action h-9 px-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1 shadow-2xs active:scale-95 cursor-pointer">
                                                <i class="fa-solid fa-file-invoice text-xs"></i> <span>A4</span>
                                            </button>
                                            <button type="button" onclick="window.printSalesReturnThermal('${l(e.id)}')" title="Cetak Struk Thermal RawBT" class="btn-native-action h-9 px-2.5 rounded-xl border text-xs font-bold flex items-center gap-1 shadow-2xs active:scale-95 cursor-pointer" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                                <i class="fa-solid fa-print text-xs"></i> <span>Struk</span>
                                            </button>
                                            <button type="button" onclick="window.deleteSalesReturn('${l(e.id)}')" title="Hapus Riwayat Retur Penjualan" class="btn-native-action h-9 w-9 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `},B=()=>{const t=(c.vendorReturns||[]).filter(e=>{if(!A)return!0;const r=A;return e.id&&e.id.toLowerCase().includes(r)||e.supplierName&&e.supplierName.toLowerCase().includes(r)||e.poId&&e.poId.toLowerCase().includes(r)});if(t.length===0)return`
            <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs py-16 px-4 text-center text-slate-400 dark:text-slate-500">
                <div class="w-16 h-16 mx-auto mb-3.5 rounded-2xl flex items-center justify-center text-2xl shadow-2xs bg-amber-50 dark:bg-amber-950/40 text-amber-500 border border-amber-200 dark:border-amber-800/60">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                </div>
                <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Belum Ada Riwayat Retur Supplier</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto text-slate-500 dark:text-slate-400">Pengembalian barang rusak atau klaim distributor tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openVendorReturnModal()" class="btn-native-action mt-4 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shadow-sm active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2">
                    <i class="fa-solid fa-plus text-xs"></i> Buat Retur Supplier Baru
                </button>
            </div>
        `;const a=[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0));return P==="card"?`
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).length,s=e.supplierName||"Pemasok Toko",d=E(s);let o='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10.5px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?o='<span class="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-amber-200 dark:border-amber-800/60 shadow-2xs"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(o='<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>'),`
                        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3.5">
                            <!-- Top Bar: Avatar, Nama Pemasok, No Retur & Badge Metode -->
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
                                        ${d}
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-black text-sm text-slate-800 dark:text-white leading-tight truncate">
                                            ${l(s)}
                                        </h5>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="font-mono font-black text-xs text-amber-600 dark:text-amber-400">${l(e.id)}</span>
                                            <span class="text-[10px] font-semibold text-slate-400">&middot; ${r}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shrink-0">
                                    ${o}
                                </div>
                            </div>

                            <!-- Middle Section: Rujukan PO & Breakdown Barang -->
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2.5">
                                <div class="flex items-center justify-between text-xs gap-2">
                                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-300 text-[11px]">
                                        <i class="fa-solid fa-cart-flatbed text-slate-400"></i> ${l(e.poId||"-")}
                                    </span>
                                    <div class="text-right">
                                        <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">Klaim HPP</span>
                                        <span class="text-base font-black text-amber-600 dark:text-amber-400 font-mono">${k(e.totalClaim||0)}</span>
                                    </div>
                                </div>

                                <!-- Cuplikan Barang -->
                                <div class="space-y-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                                    <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        <span>Item Dikembalikan (${n} macam):</span>
                                        <span>Lokasi Asal</span>
                                    </div>
                                    <div class="space-y-1">
                                        ${(e.items||[]).slice(0,3).map(p=>{const m=p.fromLocation==="warehouse"?"Gudang":p.fromLocation==="quarantine"?"Karantina":"Rak Toko";return`
                                                <div class="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 text-xs">
                                                    <div class="flex items-center gap-1.5 min-w-0">
                                                        <span class="px-1.5 py-0.5 rounded-md font-black text-[10px] bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">${p.qty}x</span>
                                                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[180px]">${l(p.name)}</span>
                                                        ${p.variantName?`<span class="text-[9.5px] text-slate-400 shrink-0">[${l(p.variantName)}]</span>`:""}
                                                    </div>
                                                    <span class="text-[9.5px] font-bold text-slate-500 dark:text-slate-400 shrink-0">${m}</span>
                                                </div>
                                            `}).join("")}
                                        ${n>3?`<p class="text-[10.5px] font-bold text-center text-slate-400 pt-0.5">+${n-3} item barang lainnya</p>`:""}
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Action Bar: Tombol Cetak & Aksi Native Touch Target 40px -->
                            <div class="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                                <button type="button" onclick="window.printVendorReturnA4('${l(e.id)}')" class="btn-native-action flex-1 h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer">
                                    <i class="fa-solid fa-print text-xs text-amber-500"></i>
                                    <span>Cetak Surat Jalan Retur (A4)</span>
                                </button>
                                <button type="button" onclick="window.deleteVendorReturn('${l(e.id)}')" title="Hapus Riwayat Retur Supplier" class="btn-native-action w-10 h-10 rounded-xl sm:rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0">
                                    <i class="fa-solid fa-trash-can text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `:`
        <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Pemasok / Supplier</th>
                            <th class="py-3.5 px-4">Rujukan PO</th>
                            <th class="py-3.5 px-4">Barang Dikembalikan</th>
                            <th class="py-3.5 px-4 text-right">Nilai Klaim HPP</th>
                            <th class="py-3.5 px-4">Penyelesaian</th>
                            <th class="py-3.5 px-4 text-center">Aksi / Cetak</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).map(d=>`${d.qty}x ${l(d.name)}${d.variantName?` [${l(d.variantName)}]`:""}`).join(", ");let s='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?s='<span class="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 text-[10px] font-black inline-flex items-center gap-1 border border-amber-200 dark:border-amber-800/60"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(s='<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>'),`
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black text-amber-600 dark:text-amber-400 block">${l(e.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-black text-slate-800 dark:text-white">
                                        ${l(e.supplierName||"Pemasok Toko")}
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${l(e.poId||"-")}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${l(n)}">${l(n||"-")}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${e.items?e.items.length:0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400 text-sm font-mono">
                                        ${k(e.totalClaim||0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${s}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.printVendorReturnA4('${l(e.id)}')" title="Cetak Surat Jalan Retur Barang" class="btn-native-action h-9 px-3 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer">
                                                <i class="fa-solid fa-print text-xs text-amber-500"></i> <span>A4</span>
                                            </button>
                                            <button type="button" onclick="window.deleteVendorReturn('${l(e.id)}')" title="Hapus Riwayat Retur Supplier" class="btn-native-action h-9 w-9 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer">
                                                <i class="fa-solid fa-trash-can text-xs"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `},ee=(t=null)=>{h=null,f=[];const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=u("sales-return-order-search");r&&(r.value=t||"");const n=u("sales-return-order-content");n&&(n.innerHTML=`
        <div class="py-12 text-center text-slate-400 dark:text-slate-500">
            <i class="fa-solid fa-barcode text-3xl mb-2 block text-slate-300 dark:text-slate-600"></i>
            <p class="text-xs font-semibold">Ketik atau scan nomor nota struk kasir di atas untuk memuat item belanja.</p>
        </div>
    `),V(a,e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("salesReturn"),t&&O(t)},H=(t=!1)=>{const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=()=>{L(a,e),h=null,f=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("salesReturn",t,r):r()},O=async t=>{const a=(t||"").trim();if(!a){g("Masukkan nomor struk kasir atau Order ID");return}N("Mencari data transaksi...");try{let e=(c.orders||[]).find(r=>String(r.orderId)===a||String(r.id)===a);if(!e&&typeof firebase<"u"){const r=await firebase.firestore().collection("freshmart_orders").doc(a).get();r.exists&&(e={id:r.id,...r.data()})}if(R(),!e){g("Pesanan tidak ditemukan. Periksa kembali nomor nota!");return}h=e,te(e)}catch(e){R(),console.error("Error mencari order untuk retur:",e),g("Gagal memproses transaksi: "+(e.message||""))}},te=t=>{const a=u("sales-return-order-content");if(!a)return;const e=t.dateString||(t.createdAt?new Date(t.createdAt).toLocaleString("id-ID"):"-"),r=t.customer?.name||t.customerName||"Pelanggan Umum",n=t.source==="pos"?"Kasir POS":"Website Online",s=(c.salesReturns||[]).filter(o=>String(o.orderId)===String(t.orderId||t.id)),d={};s.forEach(o=>{(o.items||[]).forEach(p=>{const m=`${p.id}_${p.variantName||""}`;d[m]=(d[m]||0)+(parseFloat(p.qty)||0)})}),f=(t.items||[]).map((o,p)=>{const m=`${o.id}_${o.variantName||""}`,i=parseFloat(o.qty)||0,v=d[m]||0,w=Math.max(0,parseFloat((i-v).toFixed(3)));return{index:p,id:o.id,sku:o.sku||"",name:o.name||"Produk",variantName:o.variantName||"",price:parseFloat(o.price)||0,boughtQty:i,alreadyReturned:v,maxReturnable:w,returnQty:0,reason:"Kelebihan Proyek / Sisa Bangunan",condition:"good"}}),a.innerHTML=`
        <div class="space-y-4">
            <!-- 1. ORDER SUMMARY BENTO (THEMED ACCENT) -->
            <div class="p-4 rounded-2xl border space-y-2 card-native" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.22);">
                <div class="flex items-center justify-between text-xs font-black">
                    <span class="flex items-center gap-2" style="color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                        <span>No. Nota: ${l(t.orderId||t.id)}</span>
                    </span>
                    <span class="text-slate-500 dark:text-slate-400 font-semibold text-[11px]">${e}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span>Pelanggan: <b class="text-slate-800 dark:text-white">${l(r)}</b> (${n})</span>
                    <span>Total Belanja: <b class="text-slate-900 dark:text-white font-black">${k(t.payment?.grandTotal||t.total||0)}</b></span>
                </div>
            </div>

            <!-- 2. DAFTAR CHECKLIST BARANG DIREPOSISI KE KARTU NATIVE -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Pilih Kuantitas Barang yang Diretur:
                    </h4>
                    <span class="text-[10px] font-bold text-slate-400">Total ${f.length} Macam Barang</span>
                </div>

                <div class="space-y-3">
                    ${f.map((o,p)=>{const m=o.maxReturnable<=0;return`
                            <div class="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs card-native ${m?"opacity-60 bg-slate-50 dark:bg-slate-900/40":""}">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="flex-1">
                                        <h5 class="font-black text-xs sm:text-sm text-slate-800 dark:text-white leading-snug">
                                            ${l(o.name)}
                                        </h5>
                                        <div class="flex items-center gap-2 flex-wrap mt-1">
                                            ${o.variantName?`
                                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                                    <i class="fa-solid fa-layer-group mr-1 text-[9px]"></i>${l(o.variantName)}
                                                </span>
                                            `:""}
                                            <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                                Harga: <b class="text-slate-700 dark:text-slate-200">${k(o.price)}</b>
                                            </span>
                                            <span class="text-[11px] text-slate-400">
                                                &middot; Dibeli: <b>${o.boughtQty}</b> unit
                                                ${o.alreadyReturned>0?`(Retur Lalu: <b class="text-rose-500">${o.alreadyReturned}</b>)`:""}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Stepper Kuantitas Native App Ergonomis -->
                                    <div class="flex items-center gap-2 shrink-0">
                                        ${m?`
                                            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs">
                                                Kuota Retur Habis
                                            </span>
                                        `:`
                                            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 border border-slate-200 dark:border-slate-700 focus-within:border-[var(--color-primary)]">
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${p}, -1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Kurangi"
                                                >
                                                    −
                                                </button>
                                                <input 
                                                    type="number" 
                                                    id="sales-return-qty-input-${p}"
                                                    step="any" 
                                                    min="0" 
                                                    max="${o.maxReturnable}" 
                                                    value="${o.returnQty}" 
                                                    oninput="window.handleReturnQtyChange(${p}, this.value)" 
                                                    class="w-14 text-center font-black text-xs sm:text-sm bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none"
                                                >
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${p}, 1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Tambah"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                type="button" 
                                                onclick="window.setReturnQtyMax(${p})" 
                                                class="px-2.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-95 transition-all cursor-pointer"
                                                title="Retur seluruh kuota yang dibeli (${o.maxReturnable} unit)"
                                            >
                                                Maks
                                            </button>
                                        `}
                                    </div>
                                </div>

                                <!-- Alasan & Kondisi Barang -->
                                ${m?"":`
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-xs">
                                        <div>
                                            <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                Alasan Pengembalian:
                                            </label>
                                            <select 
                                                onchange="window.handleReturnReasonChange(${p}, this.value)" 
                                                class="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)]"
                                            >
                                                <option value="Kelebihan Proyek / Sisa Bangunan">Kelebihan Proyek / Sisa Bangunan</option>
                                                <option value="Salah Ukuran / Salah Beli">Salah Ukuran / Salah Beli</option>
                                                <option value="Cacat Fisik / Kemasan Rusak">Cacat Fisik / Kemasan Rusak</option>
                                                <option value="Keluhan Kualitas Barang">Keluhan Kualitas Barang</option>
                                                <option value="Lainnya">Lainnya</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                Kondisi &amp; Alokasi Stok Fisik:
                                            </label>
                                            <select 
                                                onchange="window.handleReturnConditionChange(${p}, this.value)" 
                                                class="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-black focus:outline-none focus:border-[var(--color-primary)]"
                                            >
                                                <option value="good">Kondisi Baik (Kembali ke Rak Toko)</option>
                                                <option value="damaged">Cacat/Rusak (Masuk Karantina Rusak)</option>
                                            </select>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}).join("")}
                </div>
            </div>

            <!-- 3. METODE KOMPENSASI & RINGKASAN SUBMIT (NATIVE BENTO BOX) -->
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl card-native bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-4">
                <div>
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Penyelesaian Pengembalian Dana / Kompensasi:
                    </h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Pilih bentuk kompensasi toko kepada pelanggan
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="cash" checked onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-money-bill-wave"></i>
                            </span>
                            <span>Tunai (Kas Laci)</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="credit" onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-wallet"></i>
                            </span>
                            <span>Store Credit</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="exchange" onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-repeat"></i>
                            </span>
                            <span>Tukar Barang</span>
                        </div>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Catatan Khusus / Keterangan Toko:
                    </label>
                    <input 
                        type="text" 
                        id="sales-return-notes" 
                        placeholder="Misal: Kemasan masih segel rapi, struk asli dilampirkan kasir..." 
                        class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                </div>

                <!-- Subtotal Grand Total Refund -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                            Total Nilai Pengembalian:
                        </span>
                        <span class="text-[10px] text-slate-400">Dihitung otomatis dari kuantitas retur</span>
                    </div>
                    <span id="sales-return-grand-total" class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400">
                        Rp 0
                    </span>
                </div>
            </div>
        </div>
    `,I()},ae=(t,a)=>{if(!f[t])return;const e=parseFloat(f[t].returnQty)||0,r=f[t].maxReturnable,n=Math.max(0,Math.min(r,parseFloat((e+a).toFixed(3))));f[t].returnQty=n;const s=u(`sales-return-qty-input-${t}`);s&&(s.value=n),I()},re=t=>{if(!f[t])return;f[t].returnQty=f[t].maxReturnable;const a=u(`sales-return-qty-input-${t}`);a&&(a.value=f[t].maxReturnable),I()},se=(t,a)=>{if(!f[t])return;const e=Math.max(0,Math.min(f[t].maxReturnable,parseFloat(a)||0));f[t].returnQty=e,I()},ne=(t,a)=>{f[t]&&(f[t].reason=a)},oe=(t,a)=>{f[t]&&(f[t].condition=a)},I=()=>{const t=f.reduce((e,r)=>e+r.returnQty*r.price,0),a=u("sales-return-grand-total");a&&(a.textContent=k(Math.round(t)))},le=async()=>{if(!h){g("Pilih rujukan nota penjualan terlebih dahulu!");return}const t=f.filter(d=>d.returnQty>0);if(t.length===0){g("Pilih minimal 1 barang dengan kuantitas lebih dari 0 untuk diretur!");return}const a=Math.round(t.reduce((d,o)=>d+o.returnQty*o.price,0)),e=document.querySelector('input[name="sales_refund_method"]:checked'),r=e?e.value:"cash",n=u("sales-return-notes")?.value||"",s=`Konfirmasi proses retur penjualan senilai ${k(a)} dengan metode: ${r.toUpperCase()}?`;if(await $("Proses Retur Penjualan",s,null,"Ya, Proses Retur",!1)){N("Memproses retur & merestorasi persediaan...");try{const d=new Date().toISOString(),o=Math.random().toString(36).substring(2,6).toUpperCase(),p=`RMA-SLS-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${o}`;t.forEach(i=>{const v=(c.products||[]).find(w=>String(w.id)===String(i.id));if(v){const w=i.variantName&&Array.isArray(v.variants)?v.variants.find(x=>x.name===i.variantName):null,j=w&&w.hpp?parseFloat(w.hpp):parseFloat(v.hpp)||i.price;W(v,{returnNumber:p,orderId:h.orderId||h.id,qty:i.returnQty,buyPrice:j,variantName:i.variantName,condition:i.condition})}}),r==="cash"&&(Array.isArray(c.expenses)||(c.expenses=[]),c.expenses.unshift({id:`EXP-RET-${Date.now()}`,date:d.slice(0,10),createdAt:d,category:"Retur Penjualan",description:`Pengembalian Tunai Retur Nota ${h.orderId||h.id} (${p})`,amount:a,paymentSource:"kas_toko",source:"pos_cashier",receiptNumber:p}));const m={id:p,orderId:h.orderId||h.id,createdAt:d,customerName:h.customer?.name||h.customerName||"Pelanggan Umum",customerPhone:h.customer?.wa||h.customer?.phone||"",cashierName:h.cashierName||"Kasir Toko",source:h.source||"pos",items:t.map(i=>({id:i.id,sku:i.sku,name:i.name,variantName:i.variantName,qty:i.returnQty,soldPrice:i.price,subtotalRefund:Math.round(i.returnQty*i.price),reason:i.reason,condition:i.condition,restockLocation:i.condition==="good"?"store":"quarantine"})),totalRefund:a,refundMethod:r,status:"completed",notes:n};Array.isArray(c.salesReturns)||(c.salesReturns=[]),c.salesReturns.unshift(m),await C(["salesReturns","expenses","products"]),R(),H(),M(),g(`Retur Penjualan ${p} berhasil diproses!`),await $("Cetak Nota Bukti Retur","Cetak Nota Bukti Retur Penjualan sekarang?",null,"Ya, Cetak Nota",!1)&&Q(p)}catch(d){R(),console.error("Error proses sales return:",d),g("Gagal memproses retur: "+(d.message||""))}}};let b=[];const ie=(t=null,a=null)=>{b=[];const e=u("modal-vendor-return"),r=u("modal-vendor-return-box");!e||!r||(de(t,a),V(e,r),typeof window.pushModalHistory=="function"&&window.pushModalHistory("vendorReturn"))},F=(t=!1)=>{const a=u("modal-vendor-return"),e=u("modal-vendor-return-box");if(!a||!e)return;const r=()=>{L(a,e),b=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("vendorReturn",t,r):r()},de=(t=null,a=null)=>{const e=u("vendor-return-modal-content");if(!e)return;const r=c.suppliers||[],n=c.purchases||[];e.innerHTML=`
        <div class="space-y-4">
            <!-- 1. PILIHAN PEMASOK & RUJUKAN PO -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Pilih Rekanan Supplier:
                    </label>
                    <select 
                        id="vendor-return-supplier-select" 
                        onchange="window.handleVendorSupplierChange(this.value)" 
                        class="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                        <option value="">-- Pilih Supplier Pemasok --</option>
                        ${r.map(s=>`<option value="${l(s.id)}" ${String(s.id)===String(t)?"selected":""}>${l(s.name)}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Rujukan PO Kulakan (Opsional):
                    </label>
                    <select 
                        id="vendor-return-po-select" 
                        class="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                        <option value="">-- Tidak Terikat PO Khusus --</option>
                        ${n.map(s=>`<option value="${l(s.id)}" ${String(s.id)===String(a)?"selected":""}>${l(s.poNumber||s.id)} - ${k(s.totalPrice||s.total||0)}</option>`).join("")}
                    </select>
                </div>
            </div>

            <!-- 2. DAFTAR BARANG YANG DIKEMBALIKAN -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Daftar Barang yang Dikembalikan:
                        </h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Pilih produk, varian spesifik, dan tentukan lokasi potong stok</p>
                    </div>
                    <button 
                        type="button" 
                        onclick="window.addVendorReturnItemRow()" 
                        class="btn-native-action px-3.5 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);"
                    >
                        <i class="fa-solid fa-plus text-[10px]"></i> Tambah Barang
                    </button>
                </div>

                <div id="vendor-return-items-list" class="space-y-3">
                    <!-- Diisi dinamis lewat addVendorReturnItemRow -->
                </div>
            </div>

            <!-- 3. METODE KOMPENSASI PEMASOK -->
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl card-native bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-4">
                <div>
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Penyelesaian Finansial Pemasok:
                    </h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Potong hutang invoice pembelian atau pengembalian dana tunai / transfer
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-amber-500 transition-all shadow-2xs">
                        <input type="radio" name="vendor_settlement_method" value="ap_deduction" checked onchange="window.recalcVendorReturnSummary()" class="accent-amber-500">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </span>
                            <span>Potong Hutang PO (AP Deduction)</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-amber-500 transition-all shadow-2xs">
                        <input type="radio" name="vendor_settlement_method" value="cash_refund" onchange="window.recalcVendorReturnSummary()" class="accent-amber-500">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-money-bill-wave"></i>
                            </span>
                            <span>Pengembalian Kas / Transfer</span>
                        </div>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Catatan Serah Terima / Nomor Resi Ekspedisi:
                    </label>
                    <input 
                        type="text" 
                        id="vendor-return-notes" 
                        placeholder="Misal: Diserahkan langsung ke supir distributor, nomor tanda terima terlampir..." 
                        class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors"
                    >
                </div>

                <!-- Subtotal Klaim Retur Supplier -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                            Total Klaim Retur Supplier:
                        </span>
                        <span class="text-[10px] text-slate-400">Total nominal HPP yang diklaim ke distributor</span>
                    </div>
                    <span id="vendor-return-grand-total" class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
                        Rp 0
                    </span>
                </div>
            </div>
        </div>
    `,q()},ce=t=>{const a=u("vendor-return-po-select");if(!a)return;const e=(c.purchases||[]).filter(r=>!t||String(r.supplierId)===String(t));a.innerHTML=`
        <option value="">-- Tidak Terikat PO Khusus --</option>
        ${e.map(r=>`<option value="${l(r.id)}">${l(r.poNumber||r.id)} - Sisa Hutang: ${k(r.remainingDebt||0)}</option>`).join("")}
    `},q=()=>{const t=u("vendor-return-items-list");if(!t)return;const a=b.length;b.push({productId:"",variantName:"",qty:1,buyPrice:0,fromLocation:"store",reason:"Barang Cacat Pabrik"});const e=c.products||[],r=document.createElement("div");r.id=`vendor-item-row-${a}`,r.className="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs",r.innerHTML=`
        <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500">
                Barang #${a+1}
            </span>
            <button 
                type="button" 
                onclick="window.removeVendorReturnItemRow(${a})" 
                class="btn-native-icon w-8 h-8 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center cursor-pointer transition-colors"
                title="Hapus baris ini"
            >
                <i class="fa-solid fa-trash text-xs"></i>
            </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Pilih Produk Master:
                </label>
                <select 
                    onchange="window.handleVendorItemProductSelect(${a}, this.value)" 
                    class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                >
                    <option value="">-- Pilih Barang --</option>
                    ${e.map(n=>`<option value="${l(n.id)}">${l(n.name)} (Stok: ${n.stock}${Array.isArray(n.variants)&&n.variants.length>0?` &middot; ${n.variants.length} Varian`:""})</option>`).join("")}
                </select>

                <!-- Kontainer Pemilih Varian Spesifik (Dinamis bertema toko) -->
                <div id="vendor-item-variant-box-${a}" class="hidden mt-2 p-3 rounded-xl border card-native" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.22);"></div>
            </div>

            <div class="grid grid-cols-2 gap-2.5 items-end">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Jumlah (Qty):
                    </label>
                    <!-- Stepper Kuantitas Vendor -->
                    <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 border border-slate-200 dark:border-slate-700 focus-within:border-[var(--color-primary)]">
                        <button 
                            type="button" 
                            onclick="window.stepVendorItemQty(${a}, -1)" 
                            class="w-8 h-8 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                            aria-label="Kurangi"
                        >
                            −
                        </button>
                        <input 
                            type="number" 
                            id="vendor-item-qty-${a}" 
                            step="any" 
                            min="0.01" 
                            value="1" 
                            oninput="window.handleVendorItemQtyChange(${a}, this.value)" 
                            class="w-12 text-center font-black text-xs bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none"
                        >
                        <button 
                            type="button" 
                            onclick="window.stepVendorItemQty(${a}, 1)" 
                            class="w-8 h-8 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                            aria-label="Tambah"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Harga Modal / HPP:
                    </label>
                    <input 
                        type="number" 
                        id="vendor-item-price-${a}" 
                        value="0" 
                        oninput="window.handleVendorItemPriceChange(${a}, this.value)" 
                        class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-black text-right text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Ambil dari Lokasi Fisik:
                </label>
                <select 
                    onchange="window.handleVendorItemLocationChange(${a}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"
                >
                    <option value="store">Rak Toko (storeStock)</option>
                    <option value="warehouse">Gudang Belakang (warehouseStock)</option>
                    <option value="quarantine">Karantina Rusak (damagedStock)</option>
                </select>
            </div>
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Alasan Retur ke Distributor:
                </label>
                <select 
                    onchange="window.handleVendorItemReasonChange(${a}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"
                >
                    <option value="Barang Cacat Pabrik">Barang Cacat Pabrik</option>
                    <option value="Kemasan Rusak / Bocor">Kemasan Rusak / Bocor</option>
                    <option value="Kadaluarsa / Expired">Kadaluarsa / Expired</option>
                    <option value="Salah Kirim Distributor">Salah Kirim Distributor</option>
                </select>
            </div>
        </div>
    `,t.appendChild(r)},pe=t=>{const a=u(`vendor-item-row-${t}`);a&&a.remove(),b[t]&&(b[t].removed=!0),T()},ue=(t,a)=>{if(!b[t])return;const e=parseFloat(b[t].qty)||1,r=Math.max(1,parseFloat((e+a).toFixed(3)));b[t].qty=r;const n=u(`vendor-item-qty-${t}`);n&&(n.value=r),T()},be=(t,a)=>{if(!b[t])return;b[t].productId=a;const e=(c.products||[]).find(n=>String(n.id)===String(a)),r=u(`vendor-item-variant-box-${t}`);if(e&&Array.isArray(e.variants)&&e.variants.length>0){const n=e.variants[0];b[t].variantName=n.name||"";const s=parseFloat(n.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=s,r&&(r.className="mt-2 p-3 rounded-2xl border card-native block space-y-1.5",r.style.background="rgba(var(--color-primary-rgb), 0.08)",r.style.borderColor="rgba(var(--color-primary-rgb), 0.25)",r.innerHTML=`
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black uppercase tracking-wider" style="color: var(--color-primary);">
                        <i class="fa-solid fa-layer-group mr-1"></i>Pilih Varian Spesifik:
                    </label>
                    <span class="text-[9.5px] font-bold px-2 py-0.5 rounded-full" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary);">
                        ${e.variants.length} Varian
                    </span>
                </div>
                <select 
                    onchange="window.handleVendorItemVariantSelect(${t}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black text-slate-800 dark:text-white focus:outline-none"
                >
                    ${e.variants.map(o=>{const p=o.storeStock!==void 0?o.storeStock:o.stock||0,m=o.warehouseStock!==void 0?o.warehouseStock:0,i=o.damagedStock||0,v=parseFloat(o.hpp)||parseFloat(e.hpp)||0;return`<option value="${l(o.name)}">${l(o.name)} (Rak: ${p}, Gudang: ${m}, Rusak: ${i} &middot; HPP: ${k(v)})</option>`}).join("")}
                </select>
            `);const d=u(`vendor-item-price-${t}`);d&&(d.value=s)}else if(b[t].variantName="",r&&(r.className="hidden",r.innerHTML=""),e){const n=parseFloat(e.hpp)||0;b[t].buyPrice=n;const s=u(`vendor-item-price-${t}`);s&&(s.value=n)}T()},xe=(t,a)=>{if(!b[t])return;b[t].variantName=a;const e=(c.products||[]).find(r=>String(r.id)===String(b[t].productId));if(e&&Array.isArray(e.variants)){const r=e.variants.find(n=>n.name===a);if(r){const n=parseFloat(r.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=n;const s=u(`vendor-item-price-${t}`);s&&(s.value=n)}}T()},me=(t,a)=>{b[t]&&(b[t].qty=parseFloat(a)||0),T()},fe=(t,a)=>{b[t]&&(b[t].buyPrice=parseFloat(a)||0),T()},ge=(t,a)=>{b[t]&&(b[t].fromLocation=a)},ke=(t,a)=>{b[t]&&(b[t].reason=a)},T=()=>{const t=b.filter(e=>!e.removed&&e.productId&&e.qty>0).reduce((e,r)=>e+r.qty*r.buyPrice,0),a=u("vendor-return-grand-total");a&&(a.textContent=k(Math.round(t)))},ve=async()=>{const a=u("vendor-return-supplier-select")?.value;if(!a){g("Pilih rekanan supplier terlebih dahulu!");return}const e=(c.suppliers||[]).find(i=>String(i.id)===String(a)),r=b.filter(i=>!i.removed&&i.productId&&i.qty>0);if(r.length===0){g("Pilih minimal 1 barang dengan kuantitas valid untuk diretur!");return}const n=u("vendor-return-po-select")?.value||null,s=document.querySelector('input[name="vendor_settlement_method"]:checked'),d=s?s.value:"ap_deduction",o=u("vendor-return-notes")?.value||"",p=Math.round(r.reduce((i,v)=>i+v.qty*v.buyPrice,0)),m=`Kirim retur barang ke ${e?.name||"Supplier"} senilai klaim ${k(p)}?`;if(await $("Kirim Retur Supplier",m,null,"Ya, Kirim Retur",!1)){N("Memproses pengembalian barang ke supplier...");try{const i=new Date().toISOString(),v=Math.random().toString(36).substring(2,6).toUpperCase(),w=`RMA-VND-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${v}`;if(r.forEach(x=>{const S=(c.products||[]).find(D=>String(D.id)===String(x.productId));S&&z(S,{qty:x.qty,variantName:x.variantName,fromLocation:x.fromLocation})}),d==="ap_deduction"&&n){const x=(c.purchases||[]).find(S=>String(S.id)===String(n));x&&x.remainingDebt&&(x.remainingDebt=Math.max(0,Math.round(x.remainingDebt-p)),x.remainingDebt===0&&(x.paymentStatus="paid"))}const j={id:w,supplierId:a,supplierName:e?.name||"Pemasok Toko",poId:n,createdAt:i,items:r.map(x=>{const S=(c.products||[]).find(D=>String(D.id)===String(x.productId));return{id:x.productId,name:S?S.name:"Produk",variantName:x.variantName||"",sku:x.sku||S?.sku||"",qty:x.qty,buyPrice:x.buyPrice,subtotalClaim:Math.round(x.qty*x.buyPrice),subtotalCost:Math.round(x.qty*x.buyPrice),fromLocation:x.fromLocation,reason:x.reason}}),totalClaim:p,settlementMethod:d,status:"completed",notes:o};Array.isArray(c.vendorReturns)||(c.vendorReturns=[]),c.vendorReturns.unshift(j),await C(["vendorReturns","purchases","products"]),R(),F(),M(),g(`Retur Supplier ${w} berhasil dicatat!`),await $("Cetak Surat Jalan Retur","Cetak Surat Pengembalian Barang ke Supplier sekarang?",null,"Ya, Cetak Surat",!1)&&_(w)}catch(i){R(),console.error("Error proses vendor return:",i),g("Gagal memproses retur supplier: "+(i.message||""))}}},Q=t=>{const a=(c.salesReturns||[]).find(i=>i.id===t);if(!a)return g("Data retur tidak ditemukan!");if(typeof window.printSalesReturnReceiptDirect=="function"){window.printSalesReturnReceiptDirect(a);return}if(typeof window.buildSalesReturnReceiptPayload=="function"){const i=window.buildSalesReturnReceiptPayload(a);if(typeof window.sendToRawBT=="function"){window.sendToRawBT(i.base64,i.plainText,i.html,{title:`Nota Retur Penjualan #${a.id}`,previewLines:i.previewLines,rebuild:()=>window.buildSalesReturnReceiptPayload(a)});return}}const e=c.store?.name||"TOKO PUTRI",r=c.store?.address||"",n=c.store?.wa||"";let s=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${l(e)}</div>`;r&&(s+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${l(r)}</div>`),n&&(s+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${l(n)}</div>`),s+='<div class="utp-separator"></div>',s+='<div class="text-center font-bold" style="font-size:12px;margin:2px 0;">NOTA RETUR PENJUALAN</div>',s+='<div class="utp-separator"></div>',s+=`<div class="utp-row"><div class="utp-col-left">No Retur</div><div class="utp-col-right">#${l(a.id)}</div></div>`,s+=`<div class="utp-row"><div class="utp-col-left">No Nota</div><div class="utp-col-right">#${l(a.orderId||"-")}</div></div>`,s+=`<div class="utp-row"><div class="utp-col-left">Tanggal</div><div class="utp-col-right">${new Date(a.createdAt).toLocaleDateString("id-ID")}</div></div>`,s+=`<div class="utp-row"><div class="utp-col-left">Pelanggan</div><div class="utp-col-right">${l(a.customerName||"Umum")}</div></div>`,s+='<div class="utp-separator"></div>',(a.items||[]).forEach(i=>{s+=`<div style="font-weight:bold;white-space:pre-wrap;">${l(i.name)}${i.variantName?` (${l(i.variantName)})`:""}</div>`,s+=`<div class="utp-row"><div class="utp-col-left">  ${i.qty} x ${k(i.soldPrice)}</div><div class="utp-col-right">${k(i.subtotalRefund)}</div></div>`,i.reason&&(s+=`<div style="font-size:9.5px;color:#64748b;font-style:italic;">  * Alasan: ${l(i.reason)}</div>`);const v=i.condition==="bad"?"Cacat/Rusak (Karantina)":"Kondisi Baik (Rak Toko)";s+=`<div style="font-size:9.5px;color:#64748b;font-style:italic;">  * ${v}</div>`}),s+='<div class="utp-double-separator"></div>',s+=`<div class="utp-row font-bold text-[12px]"><div class="utp-col-left">TOTAL RETUR</div><div class="utp-col-right">${k(a.totalRefund)}</div></div>`,s+='<div class="utp-double-separator"></div>';let d="REFUND TUNAI";a.refundMethod==="credit"?d="SALDO KREDIT TOKO":a.refundMethod==="exchange"?d="TUKAR BARANG LAIN":a.refundMethod&&(d=String(a.refundMethod).toUpperCase()),s+=`<div class="utp-row"><div class="utp-col-left">Kompensasi</div><div class="utp-col-right">${d}</div></div>`,s+='<div class="utp-separator"></div>',s+='<div class="text-center" style="font-size:9.5px;margin:4px 0;">Barang retur telah diverifikasi oleh toko.<br>Terima kasih atas kerja samanya.</div>',s+='<div style="height:15px;"></div>';const o=document.getElementById("receipt-paper-content"),p=document.getElementById("receipt-preview-modal"),m=document.getElementById("receipt-preview-modal-box");o&&p?(o.innerHTML=s,p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),typeof window.openModalAnim=="function"?window.openModalAnim(p,m):p.classList.remove("hidden")):typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(s):window.print()},he=t=>{if(!(c.salesReturns||[]).find(e=>e.id===t))return g("Data retur tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("sales_return",{returnId:t}):window.print()},_=t=>{if(!(c.vendorReturns||[]).find(e=>e.id===t))return g("Data retur supplier tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("vendor_return",{returnId:t}):window.print()},we=async t=>{if(!t)return;const a=(c.salesReturns||[]).find(n=>n.id===t);if(!a){g("Data retur penjualan tidak ditemukan!");return}const e=`Hapus permanen riwayat retur penjualan <b>#${l(t)}</b>?<br><br><span class="text-xs text-slate-500 dark:text-slate-400">• Penyesuaian stok fisik barang akan dibatalkan/dikembalikan.<br>• Catatan pengeluaran buku kas laci terkait akan dibersihkan.<br>• Tindakan ini tidak dapat dibatalkan.</span>`;let r=!0;if(typeof $=="function"?r=await $("Hapus Retur Penjualan",e,null,"Ya, Hapus Retur",!0):typeof window<"u"&&typeof window.showConfirm=="function"&&(r=await window.showConfirm("Hapus Retur Penjualan",e,null,"Ya, Hapus Retur",!0)),!!r){N("Menghapus riwayat retur...");try{Array.isArray(a.items)&&a.items.forEach(n=>{const s=(c.products||[]).find(d=>String(d.id)===String(n.id));s&&G(s,{returnNumber:a.id,orderId:a.orderId,qty:n.qty,variantName:n.variantName,condition:n.condition})}),a.refundMethod==="cash"&&Array.isArray(c.expenses)&&(c.expenses=c.expenses.filter(n=>n.receiptNumber!==t&&!(n.id&&n.id.startsWith("EXP-RET-")&&n.description&&n.description.includes(t)))),c.salesReturns=(c.salesReturns||[]).filter(n=>n.id!==t),await C(["salesReturns","expenses","products"]),R(),M(),g(`Riwayat retur penjualan ${t} berhasil dihapus!`)}catch(n){R(),console.error("Error hapus sales return:",n),g("Gagal menghapus retur: "+(n.message||""))}}},ye=async t=>{const a=t;if(!a)return;const e=(c.vendorReturns||[]).find(s=>s.id===a);if(!e){g("Data retur supplier tidak ditemukan!");return}const r=`Hapus permanen riwayat retur supplier <b>#${l(a)}</b>?<br><br><span class="text-xs text-slate-500 dark:text-slate-400">• Kuantitas barang yang dikembalikan akan dipulihkan ke stok toko/gudang/karantina.<br>${e.settlementMethod==="ap_deduction"&&e.poId?"• Penyesuaian potongan hutang PO terkait akan dikembalikan.<br>":""}• Tindakan ini tidak dapat dibatalkan.</span>`;let n=!0;if(typeof $=="function"?n=await $("Hapus Retur Supplier",r,null,"Ya, Hapus Retur",!0):typeof window<"u"&&typeof window.showConfirm=="function"&&(n=await window.showConfirm("Hapus Retur Supplier",r,null,"Ya, Hapus Retur",!0)),!!n){N("Menghapus retur supplier...");try{if(Array.isArray(e.items)&&e.items.forEach(s=>{const d=(c.products||[]).find(o=>String(o.id)===String(s.id||s.productId));d&&Y(d,{qty:s.qty,variantName:s.variantName,fromLocation:s.fromLocation})}),e.settlementMethod==="ap_deduction"&&e.poId&&Array.isArray(c.purchases)){const s=c.purchases.find(d=>String(d.id)===String(e.poId));if(s){const d=parseFloat(e.totalClaim)||0;s.remainingDebt=Math.round((parseFloat(s.remainingDebt)||0)+d),s.remainingDebt>0&&s.paymentStatus==="paid"&&(s.paymentStatus="partial")}}c.vendorReturns=(c.vendorReturns||[]).filter(s=>s.id!==a),await C(["vendorReturns","purchases","products"]),R(),M(),g(`Riwayat retur supplier ${a} berhasil dihapus!`)}catch(s){R(),console.error("Error hapus vendor return:",s),g("Gagal menghapus retur supplier: "+(s.message||""))}}};typeof window<"u"&&(window.renderReturnsView=M,window.switchReturnsTab=J,window.switchReturnsViewMode=X,window.handleReturnsSearch=Z,window.openSalesReturnModal=ee,window.closeSalesReturnModal=H,window.searchOrderForReturn=O,window.stepReturnQty=ae,window.setReturnQtyMax=re,window.handleReturnQtyChange=se,window.handleReturnReasonChange=ne,window.handleReturnConditionChange=oe,window.recalcSalesReturnSummary=I,window.submitSalesReturn=le,window.openVendorReturnModal=ie,window.closeVendorReturnModal=F,window.handleVendorSupplierChange=ce,window.addVendorReturnItemRow=q,window.removeVendorReturnItemRow=pe,window.stepVendorItemQty=ue,window.handleVendorItemProductSelect=be,window.handleVendorItemVariantSelect=xe,window.handleVendorItemQtyChange=me,window.handleVendorItemPriceChange=fe,window.handleVendorItemLocationChange=ge,window.handleVendorItemReasonChange=ke,window.recalcVendorReturnSummary=T,window.submitVendorReturn=ve,window.printSalesReturnThermal=Q,window.printSalesReturnA4=he,window.printVendorReturnA4=_,window.deleteSalesReturn=we,window.deleteVendorReturn=ye);export{q as addVendorReturnItemRow,H as closeSalesReturnModal,F as closeVendorReturnModal,we as deleteSalesReturn,ye as deleteVendorReturn,oe as handleReturnConditionChange,se as handleReturnQtyChange,ne as handleReturnReasonChange,Z as handleReturnsSearch,ge as handleVendorItemLocationChange,fe as handleVendorItemPriceChange,be as handleVendorItemProductSelect,me as handleVendorItemQtyChange,ke as handleVendorItemReasonChange,xe as handleVendorItemVariantSelect,ce as handleVendorSupplierChange,ee as openSalesReturnModal,ie as openVendorReturnModal,he as printSalesReturnA4,Q as printSalesReturnThermal,_ as printVendorReturnA4,I as recalcSalesReturnSummary,T as recalcVendorReturnSummary,pe as removeVendorReturnItemRow,M as renderReturnsView,O as searchOrderForReturn,re as setReturnQtyMax,ae as stepReturnQty,ue as stepVendorItemQty,le as submitSalesReturn,ve as submitVendorReturn,J as switchReturnsTab,X as switchReturnsViewMode};

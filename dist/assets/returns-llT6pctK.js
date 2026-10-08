import{e as p,a as d,i,f as g,o as j,k as v,b as Q,l as C,n as $,G as T,v as D}from"./module-print-BJzJ9NbK.js";import{M as _,p as B,N as U}from"./module-pos-C0ICr1k1.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-C2ILGxXQ.js";import"./module-faq-CEQ4u_mg.js";let y="sales",A="",f=null,m=[];const I=()=>{if(!p("admin-content"))return;Array.isArray(d.salesReturns)||(d.salesReturns=[]),Array.isArray(d.vendorReturns)||(d.vendorReturns=[]);const a=d.salesReturns.reduce((o,l)=>o+(parseFloat(l.totalRefund)||0),0),e=d.salesReturns.length,r=d.vendorReturns.reduce((o,l)=>o+(parseFloat(l.totalClaim)||0),0),n=(d.products||[]).reduce((o,l)=>{let u=parseFloat(l.damagedStock)||0;return Array.isArray(l.variants)&&(u+=l.variants.reduce((k,c)=>k+(parseFloat(c.damagedStock)||0),0)),o+u},0),s=`
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-3 sm:pt-4">
            <!-- 1. HERO BANNER: PUSAT RETUR & REKONSILIASI RMA (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.05)] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 shadow-xs card-native">
                <!-- Ambient Glow Dekorasi (Radial Gradient Anti-Hard Disc) -->
                <div class="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl" style="background: radial-gradient(circle at 90% 10%, rgba(var(--color-primary-rgb), 0.12), transparent 60%), radial-gradient(circle at 10% 90%, rgba(var(--color-primary-rgb), 0.08), transparent 50%);"></div>

                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-right-left"></i> Modul Rekonsiliasi RMA
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Retur Barang &amp; Rekonsiliasi
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Rekonsiliasi pengembalian barang konsumen, klaim cacat supplier pabrik, restorasi tiket FIFO, dan kontrol persediaan karantina.
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

                <!-- 2. METRIK BENTO STAT CARDS (4 KPI) -->
                <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">Total Retur Konsumen</span>
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 tracking-tight">${g(a)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Pengembalian Dana / Kredit</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasus Retur Nota</span>
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));">
                                <i class="fa-solid fa-receipt"></i>
                            </div>
                        </div>
                        <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${e} <span class="text-xs font-bold text-slate-400">Nota</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Transaksi Terselesaikan</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Klaim Supplier</span>
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${g(r)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Potong Hutang / Refund PO</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">Stok Karantina Rusak</span>
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-xs shadow-xs shrink-0">
                                <i class="fa-solid fa-triangle-exclamation"></i>
                            </div>
                        </div>
                        <p class="text-2xl font-black text-purple-600 dark:text-purple-400 tracking-tight">${n} <span class="text-xs font-bold text-slate-400">Unit</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Menunggu Klaim Distributor</p>
                    </div>
                </div>
            </div>

            <!-- 3. TOOLBAR: TAB SWITCHER & LIVE SEARCH BAR -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between card-native p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Tab Pills Switcher -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                    <button 
                        type="button" 
                        onclick="window.switchReturnsTab('sales')" 
                        class="px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${y==="sales"?"shadow-sm":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                        style="${y==="sales"?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);":""}"
                    >
                        <i class="fa-solid fa-basket-shopping"></i>
                        <span>Retur Penjualan</span>
                        <span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold ${y==="sales"?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}">
                            ${d.salesReturns.length}
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
                        <span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold ${y==="vendor"?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}">
                            ${d.vendorReturns.length}
                        </span>
                    </button>
                </div>

                <!-- Live Search Box -->
                <div class="relative flex-1 sm:max-w-md">
                    <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input 
                        type="text" 
                        id="returns-search-input" 
                        value="${i(A)}" 
                        oninput="window.handleReturnsSearch(this.value)" 
                        placeholder="${y==="sales"?"Cari no retur, no nota, nama pelanggan...":"Cari no retur, supplier, rujukan PO..."}" 
                        class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-2.5 pl-10 pr-4 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                    >
                </div>
            </div>

            <!-- 4. CONTAINER RIWAYAT (DUAL-VIEW: MOBILE CARD LIST & DESKTOP TABLE) -->
            <div id="returns-table-wrapper">
                ${y==="sales"?K():L()}
            </div>
        </div>
    `;Q("admin-content",s)},G=t=>{y=t,I()},Y=t=>{A=(t||"").trim().toLowerCase();const a=p("returns-table-wrapper");a&&(a.innerHTML=y==="sales"?K():L())},K=()=>{const t=(d.salesReturns||[]).filter(e=>{if(!A)return!0;const r=A;return e.id&&e.id.toLowerCase().includes(r)||e.orderId&&e.orderId.toLowerCase().includes(r)||e.customerName&&e.customerName.toLowerCase().includes(r)||e.customerPhone&&e.customerPhone.includes(r)});if(t.length===0)return`
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
        `;const a=[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0));return`
        <!-- A. TAMPILAN MOBILE: NATIVE APP CARD VIEW LIST (RAMAH LAYAR HP) -->
        <div class="block lg:hidden space-y-3">
            ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).length;let s='<span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?s='<span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas)</span>':e.refundMethod==="credit"?s='<span class="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 text-[10px] font-black inline-flex items-center gap-1 border border-sky-200 dark:border-sky-800/60"><i class="fa-solid fa-wallet"></i> Store Credit</span>':e.refundMethod==="exchange"&&(s='<span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-black inline-flex items-center gap-1 border border-purple-200 dark:border-purple-800/60"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>'),`
                    <div class="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
                        <!-- Top Row: No Retur + Badge Metode -->
                        <div class="flex items-center justify-between gap-2">
                            <span class="font-mono font-black text-xs" style="color: var(--color-primary);">${i(e.id)}</span>
                            ${s}
                        </div>

                        <!-- Row 2: Pelanggan & Tanggal + Rujukan Nota -->
                        <div class="flex items-start justify-between gap-2 text-xs">
                            <div>
                                <h5 class="font-black text-slate-800 dark:text-white leading-tight">${i(e.customerName||"Pelanggan Umum")}</h5>
                                <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Rujukan Nota</span>
                                <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10.5px] font-mono font-bold text-slate-700 dark:text-slate-300">
                                    ${i(e.orderId||"-")}
                                </span>
                            </div>
                        </div>

                        <!-- Row 3: Cuplikan Barang & Total Refund -->
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                            <div class="flex items-center justify-between gap-2">
                                <span class="text-[10px] font-bold text-slate-400">Barang yang Diretur (${n} macam):</span>
                                <span class="text-[10px] font-black uppercase text-rose-500">Nilai Kompensasi</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                                <div class="min-w-0 flex-1 flex flex-wrap gap-1">
                                    ${(e.items||[]).slice(0,3).map(o=>`
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                                            <span style="color: var(--color-primary);">${o.qty}x</span>
                                            <span class="truncate max-w-[120px]">${i(o.name)}</span>
                                            ${o.variantName?`<span class="text-[9px] opacity-75">[${i(o.variantName)}]</span>`:""}
                                        </span>
                                    `).join("")}
                                    ${n>3?`<span class="text-[10px] font-bold text-slate-400 self-center">+${n-3} lainnya</span>`:""}
                                </div>
                                <div class="text-right shrink-0 pl-2">
                                    <span class="text-base font-black text-rose-600 dark:text-rose-400">${g(e.totalRefund||0)}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 4: Action Bar Cetak (Touch Target 40px Lega) -->
                        <div class="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                            <button type="button" onclick="window.printSalesReturnA4('${i(e.id)}')" class="btn-native-action flex-1 py-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-file-invoice text-xs"></i> <span>Cetak Nota A4</span>
                            </button>
                            <button type="button" onclick="window.printSalesReturnThermal('${i(e.id)}')" class="btn-native-action flex-1 py-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-print text-xs" style="color: var(--color-primary);"></i> <span>Struk Thermal</span>
                            </button>
                        </div>
                    </div>
                `}).join("")}
        </div>

        <!-- B. TAMPILAN DESKTOP: TABEL ANALITIS LAPANG (LEBAR >= 1024px) -->
        <div class="hidden lg:block card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Rujukan Nota</th>
                            <th class="py-3.5 px-4">Pelanggan</th>
                            <th class="py-3.5 px-4">Barang Diretur</th>
                            <th class="py-3.5 px-4 text-right">Nilai Kompensasi</th>
                            <th class="py-3.5 px-4">Metode</th>
                            <th class="py-3.5 px-4 text-center">Cetak Bukti</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).map(o=>`${o.qty}x ${i(o.name)}${o.variantName?` [${i(o.variantName)}]`:""}`).join(", ");let s='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?s='<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas Laci)</span>':e.refundMethod==="credit"?s='<span class="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 text-[10px] font-black inline-flex items-center gap-1 border border-sky-200 dark:border-sky-800/60"><i class="fa-solid fa-wallet"></i> Store Credit</span>':e.refundMethod==="exchange"&&(s='<span class="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-black inline-flex items-center gap-1 border border-purple-200 dark:border-purple-800/60"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>'),`
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black block" style="color: var(--color-primary);">${i(e.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${i(e.orderId||"-")}</span>
                                    </td>
                                    <td class="py-3.5 px-4">
                                        <span class="font-black text-slate-800 dark:text-white block">${i(e.customerName||"Pelanggan Umum")}</span>
                                        <span class="text-[10px] font-semibold text-slate-400">${i(e.customerPhone||"")}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${i(n)}">${i(n||"-")}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${e.items?e.items.length:0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400 text-sm">
                                        ${g(e.totalRefund||0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${s}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <div class="flex items-center justify-center gap-2">
                                            <button type="button" onclick="window.printSalesReturnA4('${i(e.id)}')" title="Cetak Nota Retur A4 Resmi" class="btn-native-icon w-9 h-9 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                                <i class="fa-solid fa-file-invoice text-xs"></i>
                                            </button>
                                            <button type="button" onclick="window.printSalesReturnThermal('${i(e.id)}')" title="Cetak Struk Thermal RawBT" class="btn-native-icon w-9 h-9 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                                <i class="fa-solid fa-print text-xs" style="color: var(--color-primary);"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `},L=()=>{const t=(d.vendorReturns||[]).filter(e=>{if(!A)return!0;const r=A;return e.id&&e.id.toLowerCase().includes(r)||e.supplierName&&e.supplierName.toLowerCase().includes(r)||e.poId&&e.poId.toLowerCase().includes(r)});if(t.length===0)return`
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
        `;const a=[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0));return`
        <!-- A. TAMPILAN MOBILE: NATIVE APP CARD VIEW LIST (RAMAH LAYAR HP) -->
        <div class="block lg:hidden space-y-3">
            ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).length;let s='<span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?s='<span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-black inline-flex items-center gap-1 border border-purple-200 dark:border-purple-800/60"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(s='<span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>'),`
                    <div class="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
                        <!-- Top Row: No Retur + Badge Metode -->
                        <div class="flex items-center justify-between gap-2">
                            <span class="font-mono font-black text-xs text-amber-600 dark:text-amber-400">${i(e.id)}</span>
                            ${s}
                        </div>

                        <!-- Row 2: Supplier & Tanggal + Rujukan PO -->
                        <div class="flex items-start justify-between gap-2 text-xs">
                            <div>
                                <h5 class="font-black text-slate-800 dark:text-white leading-tight">${i(e.supplierName||"Pemasok Toko")}</h5>
                                <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Rujukan PO</span>
                                <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10.5px] font-mono font-bold text-slate-700 dark:text-slate-300">
                                    ${i(e.poId||"-")}
                                </span>
                            </div>
                        </div>

                        <!-- Row 3: Cuplikan Barang & Total Klaim HPP -->
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                            <div class="flex items-center justify-between gap-2">
                                <span class="text-[10px] font-bold text-slate-400">Barang Dikembalikan (${n} macam):</span>
                                <span class="text-[10px] font-black uppercase text-amber-500">Nilai Klaim HPP</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                                <div class="min-w-0 flex-1 flex flex-wrap gap-1">
                                    ${(e.items||[]).slice(0,3).map(o=>`
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                                            <span class="text-amber-500">${o.qty}x</span>
                                            <span class="truncate max-w-[120px]">${i(o.name)}</span>
                                            ${o.variantName?`<span class="text-[9px] opacity-75">[${i(o.variantName)}]</span>`:""}
                                        </span>
                                    `).join("")}
                                    ${n>3?`<span class="text-[10px] font-bold text-slate-400 self-center">+${n-3} lainnya</span>`:""}
                                </div>
                                <div class="text-right shrink-0 pl-2">
                                    <span class="text-base font-black text-amber-600 dark:text-amber-400">${g(e.totalClaim||0)}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 4: Action Bar Cetak Surat Jalan Retur -->
                        <div class="pt-1 border-t border-slate-100 dark:border-slate-800">
                            <button type="button" onclick="window.printVendorReturnA4('${i(e.id)}')" class="btn-native-action w-full py-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer">
                                <i class="fa-solid fa-print text-xs text-amber-500"></i> <span>Cetak Surat Jalan Retur Barang</span>
                            </button>
                        </div>
                    </div>
                `}).join("")}
        </div>

        <!-- B. TAMPILAN DESKTOP: TABEL ANALITIS LAPANG (LEBAR >= 1024px) -->
        <div class="hidden lg:block card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Pemasok / Supplier</th>
                            <th class="py-3.5 px-4">Rujukan PO</th>
                            <th class="py-3.5 px-4">Barang Dikembalikan</th>
                            <th class="py-3.5 px-4 text-right">Nilai Klaim HPP</th>
                            <th class="py-3.5 px-4">Penyelesaian</th>
                            <th class="py-3.5 px-4 text-center">Cetak Surat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${a.map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",n=(e.items||[]).map(o=>`${o.qty}x ${i(o.name)}${o.variantName?` [${i(o.variantName)}]`:""}`).join(", ");let s='<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?s='<span class="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-black inline-flex items-center gap-1 border border-purple-200 dark:border-purple-800/60"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(s='<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>'),`
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black text-amber-600 dark:text-amber-400 block">${i(e.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${r}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-black text-slate-800 dark:text-white">
                                        ${i(e.supplierName||"Pemasok Toko")}
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${i(e.poId||"-")}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${i(n)}">${i(n||"-")}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${e.items?e.items.length:0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400 text-sm">
                                        ${g(e.totalClaim||0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${s}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <button type="button" onclick="window.printVendorReturnA4('${i(e.id)}')" title="Cetak Surat Jalan Retur Barang" class="btn-native-icon w-9 h-9 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs mx-auto">
                                            <i class="fa-solid fa-print text-xs text-amber-500"></i>
                                        </button>
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `},W=(t=null)=>{f=null,m=[];const a=p("modal-sales-return"),e=p("modal-sales-return-box");if(!a||!e)return;const r=p("sales-return-order-search");r&&(r.value=t||"");const n=p("sales-return-order-content");n&&(n.innerHTML=`
        <div class="py-12 text-center text-slate-400 dark:text-slate-500">
            <i class="fa-solid fa-barcode text-3xl mb-2 block text-slate-300 dark:text-slate-600"></i>
            <p class="text-xs font-semibold">Ketik atau scan nomor nota struk kasir di atas untuk memuat item belanja.</p>
        </div>
    `),j(a,e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("salesReturn"),t&&E(t)},V=(t=!1)=>{const a=p("modal-sales-return"),e=p("modal-sales-return-box");if(!a||!e)return;const r=()=>{D(a,e),f=null,m=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("salesReturn",t,r):r()},E=async t=>{const a=(t||"").trim();if(!a){v("Masukkan nomor struk kasir atau Order ID");return}C("Mencari data transaksi...");try{let e=(d.orders||[]).find(r=>String(r.orderId)===a||String(r.id)===a);if(!e&&typeof firebase<"u"){const r=await firebase.firestore().collection("freshmart_orders").doc(a).get();r.exists&&(e={id:r.id,...r.data()})}if($(),!e){v("Pesanan tidak ditemukan. Periksa kembali nomor nota!");return}f=e,J(e)}catch(e){$(),console.error("Error mencari order untuk retur:",e),v("Gagal memproses transaksi: "+(e.message||""))}},J=t=>{const a=p("sales-return-order-content");if(!a)return;const e=t.dateString||(t.createdAt?new Date(t.createdAt).toLocaleString("id-ID"):"-"),r=t.customer?.name||t.customerName||"Pelanggan Umum",n=t.source==="pos"?"Kasir POS":"Website Online",s=(d.salesReturns||[]).filter(l=>String(l.orderId)===String(t.orderId||t.id)),o={};s.forEach(l=>{(l.items||[]).forEach(u=>{const k=`${u.id}_${u.variantName||""}`;o[k]=(o[k]||0)+(parseFloat(u.qty)||0)})}),m=(t.items||[]).map((l,u)=>{const k=`${l.id}_${l.variantName||""}`,c=parseFloat(l.qty)||0,h=o[k]||0,w=Math.max(0,parseFloat((c-h).toFixed(3)));return{index:u,id:l.id,sku:l.sku||"",name:l.name||"Produk",variantName:l.variantName||"",price:parseFloat(l.price)||0,boughtQty:c,alreadyReturned:h,maxReturnable:w,returnQty:0,reason:"Kelebihan Proyek / Sisa Bangunan",condition:"good"}}),a.innerHTML=`
        <div class="space-y-4">
            <!-- 1. ORDER SUMMARY BENTO (THEMED ACCENT) -->
            <div class="p-4 rounded-2xl border space-y-2 card-native" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.22);">
                <div class="flex items-center justify-between text-xs font-black">
                    <span class="flex items-center gap-2" style="color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                        <span>No. Nota: ${i(t.orderId||t.id)}</span>
                    </span>
                    <span class="text-slate-500 dark:text-slate-400 font-semibold text-[11px]">${e}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span>Pelanggan: <b class="text-slate-800 dark:text-white">${i(r)}</b> (${n})</span>
                    <span>Total Belanja: <b class="text-slate-900 dark:text-white font-black">${g(t.payment?.grandTotal||t.total||0)}</b></span>
                </div>
            </div>

            <!-- 2. DAFTAR CHECKLIST BARANG DIREPOSISI KE KARTU NATIVE -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Pilih Kuantitas Barang yang Diretur:
                    </h4>
                    <span class="text-[10px] font-bold text-slate-400">Total ${m.length} Macam Barang</span>
                </div>

                <div class="space-y-3">
                    ${m.map((l,u)=>{const k=l.maxReturnable<=0;return`
                            <div class="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs card-native ${k?"opacity-60 bg-slate-50 dark:bg-slate-900/40":""}">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="flex-1">
                                        <h5 class="font-black text-xs sm:text-sm text-slate-800 dark:text-white leading-snug">
                                            ${i(l.name)}
                                        </h5>
                                        <div class="flex items-center gap-2 flex-wrap mt-1">
                                            ${l.variantName?`
                                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                                    <i class="fa-solid fa-layer-group mr-1 text-[9px]"></i>${i(l.variantName)}
                                                </span>
                                            `:""}
                                            <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                                Harga: <b class="text-slate-700 dark:text-slate-200">${g(l.price)}</b>
                                            </span>
                                            <span class="text-[11px] text-slate-400">
                                                &middot; Dibeli: <b>${l.boughtQty}</b> unit
                                                ${l.alreadyReturned>0?`(Retur Lalu: <b class="text-rose-500">${l.alreadyReturned}</b>)`:""}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Stepper Kuantitas Native App Ergonomis -->
                                    <div class="flex items-center gap-2 shrink-0">
                                        ${k?`
                                            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs">
                                                Kuota Retur Habis
                                            </span>
                                        `:`
                                            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 border border-slate-200 dark:border-slate-700 focus-within:border-[var(--color-primary)]">
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${u}, -1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Kurangi"
                                                >
                                                    −
                                                </button>
                                                <input 
                                                    type="number" 
                                                    id="sales-return-qty-input-${u}"
                                                    step="any" 
                                                    min="0" 
                                                    max="${l.maxReturnable}" 
                                                    value="${l.returnQty}" 
                                                    oninput="window.handleReturnQtyChange(${u}, this.value)" 
                                                    class="w-14 text-center font-black text-xs sm:text-sm bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none"
                                                >
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${u}, 1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Tambah"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                type="button" 
                                                onclick="window.setReturnQtyMax(${u})" 
                                                class="px-2.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-95 transition-all cursor-pointer"
                                                title="Retur seluruh kuota yang dibeli (${l.maxReturnable} unit)"
                                            >
                                                Maks
                                            </button>
                                        `}
                                    </div>
                                </div>

                                <!-- Alasan & Kondisi Barang -->
                                ${k?"":`
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-xs">
                                        <div>
                                            <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                Alasan Pengembalian:
                                            </label>
                                            <select 
                                                onchange="window.handleReturnReasonChange(${u}, this.value)" 
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
                                                onchange="window.handleReturnConditionChange(${u}, this.value)" 
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
    `,P()},X=(t,a)=>{if(!m[t])return;const e=parseFloat(m[t].returnQty)||0,r=m[t].maxReturnable,n=Math.max(0,Math.min(r,parseFloat((e+a).toFixed(3))));m[t].returnQty=n;const s=p(`sales-return-qty-input-${t}`);s&&(s.value=n),P()},z=t=>{if(!m[t])return;m[t].returnQty=m[t].maxReturnable;const a=p(`sales-return-qty-input-${t}`);a&&(a.value=m[t].maxReturnable),P()},Z=(t,a)=>{if(!m[t])return;const e=Math.max(0,Math.min(m[t].maxReturnable,parseFloat(a)||0));m[t].returnQty=e,P()},ee=(t,a)=>{m[t]&&(m[t].reason=a)},te=(t,a)=>{m[t]&&(m[t].condition=a)},P=()=>{const t=m.reduce((e,r)=>e+r.returnQty*r.price,0),a=p("sales-return-grand-total");a&&(a.textContent=g(Math.round(t)))},ae=async()=>{if(!f){v("Pilih rujukan nota penjualan terlebih dahulu!");return}const t=m.filter(o=>o.returnQty>0);if(t.length===0){v("Pilih minimal 1 barang dengan kuantitas lebih dari 0 untuk diretur!");return}const a=Math.round(t.reduce((o,l)=>o+l.returnQty*l.price,0)),e=document.querySelector('input[name="sales_refund_method"]:checked'),r=e?e.value:"cash",n=p("sales-return-notes")?.value||"",s=`Konfirmasi proses retur penjualan senilai ${g(a)} dengan metode: ${r.toUpperCase()}?`;if(await T("Proses Retur Penjualan",s,null,"Ya, Proses Retur")){C("Memproses retur & merestorasi persediaan...");try{const o=new Date().toISOString(),l=Math.random().toString(36).substring(2,6).toUpperCase(),u=`RMA-SLS-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${l}`;t.forEach(c=>{const h=(d.products||[]).find(w=>String(w.id)===String(c.id));if(h){const w=c.variantName&&Array.isArray(h.variants)?h.variants.find(x=>x.name===c.variantName):null,N=w&&w.hpp?parseFloat(w.hpp):parseFloat(h.hpp)||c.price;_(h,{returnNumber:u,orderId:f.orderId||f.id,qty:c.returnQty,buyPrice:N,variantName:c.variantName,condition:c.condition})}}),r==="cash"&&(Array.isArray(d.expenses)||(d.expenses=[]),d.expenses.unshift({id:`EXP-RET-${Date.now()}`,date:o.slice(0,10),createdAt:o,category:"Retur Penjualan",description:`Pengembalian Tunai Retur Nota ${f.orderId||f.id} (${u})`,amount:a,paymentSource:"kas_toko",source:"pos_cashier",receiptNumber:u}));const k={id:u,orderId:f.orderId||f.id,createdAt:o,customerName:f.customer?.name||f.customerName||"Pelanggan Umum",customerPhone:f.customer?.wa||f.customer?.phone||"",cashierName:f.cashierName||"Kasir Toko",source:f.source||"pos",items:t.map(c=>({id:c.id,sku:c.sku,name:c.name,variantName:c.variantName,qty:c.returnQty,soldPrice:c.price,subtotalRefund:Math.round(c.returnQty*c.price),reason:c.reason,condition:c.condition,restockLocation:c.condition==="good"?"store":"quarantine"})),totalRefund:a,refundMethod:r,status:"completed",notes:n};Array.isArray(d.salesReturns)||(d.salesReturns=[]),d.salesReturns.unshift(k),await B(["salesReturns","expenses","products"]),$(),V(),I(),v(`✅ Retur Penjualan ${u} berhasil diproses!`),await T("Cetak Nota Bukti Retur","Cetak Nota Bukti Retur Penjualan sekarang?",null,"Ya, Cetak Nota",!1)&&F(u)}catch(o){$(),console.error("Error proses sales return:",o),v("Gagal memproses retur: "+(o.message||""))}}};let b=[];const re=(t=null,a=null)=>{b=[];const e=p("modal-vendor-return"),r=p("modal-vendor-return-box");!e||!r||(se(t,a),j(e,r),typeof window.pushModalHistory=="function"&&window.pushModalHistory("vendorReturn"))},O=(t=!1)=>{const a=p("modal-vendor-return"),e=p("modal-vendor-return-box");if(!a||!e)return;const r=()=>{D(a,e),b=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("vendorReturn",t,r):r()},se=(t=null,a=null)=>{const e=p("vendor-return-modal-content");if(!e)return;const r=d.suppliers||[],n=d.purchases||[];e.innerHTML=`
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
                        ${r.map(s=>`<option value="${i(s.id)}" ${String(s.id)===String(t)?"selected":""}>${i(s.name)}</option>`).join("")}
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
                        ${n.map(s=>`<option value="${i(s.id)}" ${String(s.id)===String(a)?"selected":""}>${i(s.poNumber||s.id)} - ${g(s.totalPrice||s.total||0)}</option>`).join("")}
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
    `,H()},ne=t=>{const a=p("vendor-return-po-select");if(!a)return;const e=(d.purchases||[]).filter(r=>!t||String(r.supplierId)===String(t));a.innerHTML=`
        <option value="">-- Tidak Terikat PO Khusus --</option>
        ${e.map(r=>`<option value="${i(r.id)}">${i(r.poNumber||r.id)} - Sisa Hutang: ${g(r.remainingDebt||0)}</option>`).join("")}
    `},H=()=>{const t=p("vendor-return-items-list");if(!t)return;const a=b.length;b.push({productId:"",variantName:"",qty:1,buyPrice:0,fromLocation:"store",reason:"Barang Cacat Pabrik"});const e=d.products||[],r=document.createElement("div");r.id=`vendor-item-row-${a}`,r.className="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs",r.innerHTML=`
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
                    ${e.map(n=>`<option value="${i(n.id)}">${i(n.name)} (Stok: ${n.stock}${Array.isArray(n.variants)&&n.variants.length>0?` &middot; ${n.variants.length} Varian`:""})</option>`).join("")}
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
    `,t.appendChild(r)},oe=t=>{const a=p(`vendor-item-row-${t}`);a&&a.remove(),b[t]&&(b[t].removed=!0),S()},le=(t,a)=>{if(!b[t])return;const e=parseFloat(b[t].qty)||1,r=Math.max(1,parseFloat((e+a).toFixed(3)));b[t].qty=r;const n=p(`vendor-item-qty-${t}`);n&&(n.value=r),S()},ie=(t,a)=>{if(!b[t])return;b[t].productId=a;const e=(d.products||[]).find(n=>String(n.id)===String(a)),r=p(`vendor-item-variant-box-${t}`);if(e&&Array.isArray(e.variants)&&e.variants.length>0){const n=e.variants[0];b[t].variantName=n.name||"";const s=parseFloat(n.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=s,r&&(r.className="mt-2 p-3 rounded-2xl border card-native block space-y-1.5",r.style.background="rgba(var(--color-primary-rgb), 0.08)",r.style.borderColor="rgba(var(--color-primary-rgb), 0.25)",r.innerHTML=`
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
                    ${e.variants.map(l=>{const u=l.storeStock!==void 0?l.storeStock:l.stock||0,k=l.warehouseStock!==void 0?l.warehouseStock:0,c=l.damagedStock||0,h=parseFloat(l.hpp)||parseFloat(e.hpp)||0;return`<option value="${i(l.name)}">${i(l.name)} (Rak: ${u}, Gudang: ${k}, Rusak: ${c} &middot; HPP: ${g(h)})</option>`}).join("")}
                </select>
            `);const o=p(`vendor-item-price-${t}`);o&&(o.value=s)}else if(b[t].variantName="",r&&(r.className="hidden",r.innerHTML=""),e){const n=parseFloat(e.hpp)||0;b[t].buyPrice=n;const s=p(`vendor-item-price-${t}`);s&&(s.value=n)}S()},de=(t,a)=>{if(!b[t])return;b[t].variantName=a;const e=(d.products||[]).find(r=>String(r.id)===String(b[t].productId));if(e&&Array.isArray(e.variants)){const r=e.variants.find(n=>n.name===a);if(r){const n=parseFloat(r.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=n;const s=p(`vendor-item-price-${t}`);s&&(s.value=n)}}S()},ce=(t,a)=>{b[t]&&(b[t].qty=parseFloat(a)||0),S()},pe=(t,a)=>{b[t]&&(b[t].buyPrice=parseFloat(a)||0),S()},ue=(t,a)=>{b[t]&&(b[t].fromLocation=a)},be=(t,a)=>{b[t]&&(b[t].reason=a)},S=()=>{const t=b.filter(e=>!e.removed&&e.productId&&e.qty>0).reduce((e,r)=>e+r.qty*r.buyPrice,0),a=p("vendor-return-grand-total");a&&(a.textContent=g(Math.round(t)))},xe=async()=>{const a=p("vendor-return-supplier-select")?.value;if(!a){v("Pilih rekanan supplier terlebih dahulu!");return}const e=(d.suppliers||[]).find(c=>String(c.id)===String(a)),r=b.filter(c=>!c.removed&&c.productId&&c.qty>0);if(r.length===0){v("Pilih minimal 1 barang dengan kuantitas valid untuk diretur!");return}const n=p("vendor-return-po-select")?.value||null,s=document.querySelector('input[name="vendor_settlement_method"]:checked'),o=s?s.value:"ap_deduction",l=p("vendor-return-notes")?.value||"",u=Math.round(r.reduce((c,h)=>c+h.qty*h.buyPrice,0)),k=`Kirim retur barang ke ${e?.name||"Supplier"} senilai klaim ${g(u)}?`;if(await T("Kirim Retur Supplier",k,null,"Ya, Kirim Retur")){C("Memproses pengembalian barang ke supplier...");try{const c=new Date().toISOString(),h=Math.random().toString(36).substring(2,6).toUpperCase(),w=`RMA-VND-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${h}`;if(r.forEach(x=>{const R=(d.products||[]).find(M=>String(M.id)===String(x.productId));R&&U(R,{qty:x.qty,variantName:x.variantName,fromLocation:x.fromLocation})}),o==="ap_deduction"&&n){const x=(d.purchases||[]).find(R=>String(R.id)===String(n));x&&x.remainingDebt&&(x.remainingDebt=Math.max(0,Math.round(x.remainingDebt-u)),x.remainingDebt===0&&(x.paymentStatus="paid"))}const N={id:w,supplierId:a,supplierName:e?.name||"Pemasok Toko",poId:n,createdAt:c,items:r.map(x=>{const R=(d.products||[]).find(M=>String(M.id)===String(x.productId));return{id:x.productId,name:R?R.name:"Produk",variantName:x.variantName||"",sku:x.sku||R?.sku||"",qty:x.qty,buyPrice:x.buyPrice,subtotalClaim:Math.round(x.qty*x.buyPrice),subtotalCost:Math.round(x.qty*x.buyPrice),fromLocation:x.fromLocation,reason:x.reason}}),totalClaim:u,settlementMethod:o,status:"completed",notes:l};Array.isArray(d.vendorReturns)||(d.vendorReturns=[]),d.vendorReturns.unshift(N),await B(["vendorReturns","purchases","products"]),$(),O(),I(),v(`✅ Retur Supplier ${w} berhasil dicatat!`),await T("Cetak Surat Jalan Retur","Cetak Surat Pengembalian Barang ke Supplier sekarang?",null,"Ya, Cetak Surat",!1)&&q(w)}catch(c){$(),console.error("Error proses vendor return:",c),v("Gagal memproses retur supplier: "+(c.message||""))}}},F=t=>{const a=(d.salesReturns||[]).find(e=>e.id===t);if(!a)return v("Data retur tidak ditemukan!");if(typeof window.executePrintRawBTData=="function"){const e=d.store?.name||"TOKO PUTRI",r=d.store?.address||"",n=d.store?.wa||"";let s=`${e}
${r}
Telp/WA: ${n}
`;s+=`--------------------------------
`,s+=`NOTA RETUR PENJUALAN
`,s+=`No Retur: ${a.id}
`,s+=`No Nota : ${a.orderId||"-"}
`,s+=`Tanggal : ${new Date(a.createdAt).toLocaleString("id-ID")}
`,s+=`Konsumen: ${a.customerName||"Umum"}
`,s+=`--------------------------------
`,(a.items||[]).forEach(o=>{s+=`${o.name}${o.variantName?` (${o.variantName})`:""}
`,s+=`  ${o.qty} x ${g(o.soldPrice)} = ${g(o.subtotalRefund)}
`,s+=`  [${o.reason}]
`}),s+=`--------------------------------
`,s+=`TOTAL RETUR: ${g(a.totalRefund)}
`,s+=`METODE     : ${a.refundMethod.toUpperCase()}
`,s+=`--------------------------------
`,s+=`Barang telah diverifikasi toko.
`,s+=`Terima kasih atas kerja samanya.


`,window.executePrintRawBTData(s)}else window.printSalesReturnA4(t)},me=t=>{if(!(d.salesReturns||[]).find(e=>e.id===t))return v("Data retur tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("sales_return",{returnId:t}):window.print()},q=t=>{if(!(d.vendorReturns||[]).find(e=>e.id===t))return v("Data retur supplier tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("vendor_return",{returnId:t}):window.print()};typeof window<"u"&&(window.renderReturnsView=I,window.switchReturnsTab=G,window.handleReturnsSearch=Y,window.openSalesReturnModal=W,window.closeSalesReturnModal=V,window.searchOrderForReturn=E,window.stepReturnQty=X,window.setReturnQtyMax=z,window.handleReturnQtyChange=Z,window.handleReturnReasonChange=ee,window.handleReturnConditionChange=te,window.recalcSalesReturnSummary=P,window.submitSalesReturn=ae,window.openVendorReturnModal=re,window.closeVendorReturnModal=O,window.handleVendorSupplierChange=ne,window.addVendorReturnItemRow=H,window.removeVendorReturnItemRow=oe,window.stepVendorItemQty=le,window.handleVendorItemProductSelect=ie,window.handleVendorItemVariantSelect=de,window.handleVendorItemQtyChange=ce,window.handleVendorItemPriceChange=pe,window.handleVendorItemLocationChange=ue,window.handleVendorItemReasonChange=be,window.recalcVendorReturnSummary=S,window.submitVendorReturn=xe,window.printSalesReturnThermal=F,window.printSalesReturnA4=me,window.printVendorReturnA4=q);export{H as addVendorReturnItemRow,V as closeSalesReturnModal,O as closeVendorReturnModal,te as handleReturnConditionChange,Z as handleReturnQtyChange,ee as handleReturnReasonChange,Y as handleReturnsSearch,ue as handleVendorItemLocationChange,pe as handleVendorItemPriceChange,ie as handleVendorItemProductSelect,ce as handleVendorItemQtyChange,be as handleVendorItemReasonChange,de as handleVendorItemVariantSelect,ne as handleVendorSupplierChange,W as openSalesReturnModal,re as openVendorReturnModal,me as printSalesReturnA4,F as printSalesReturnThermal,q as printVendorReturnA4,P as recalcSalesReturnSummary,S as recalcVendorReturnSummary,oe as removeVendorReturnItemRow,I as renderReturnsView,E as searchOrderForReturn,z as setReturnQtyMax,X as stepReturnQty,le as stepVendorItemQty,ae as submitSalesReturn,xe as submitVendorReturn,G as switchReturnsTab};

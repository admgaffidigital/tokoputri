import{a as p,e as c,b as T,f as m,i as s,at as A,au as F,B as D,I as y,a9 as M,a7 as g,v as f,x as I,u as L}from"./module-print-DQtiwYni.js";import{o as N}from"./module-admin-DB39c8NR.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-QL12i36a.js";import"./module-faq-C7B3QOqj.js";const P=()=>{const t=document.querySelector("#admin-content #modal-supplier-detail");t&&t.remove();const r=document.querySelector("#admin-content #modal-supplier-form");if(r&&r.remove(),!c("modal-supplier-detail")){const e=document.createElement("div");e.id="modal-supplier-detail",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=a=>{a.target===e&&window.closeSupplierDetailModal?.()},e.innerHTML=`
            <div id="modal-supplier-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-supplier-detail-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(e)}if(!c("modal-supplier-form")){const e=document.createElement("div");e.id="modal-supplier-form",e.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300",e.onclick=a=>{a.target===e&&window.closeSupplierFormModal?.()},e.innerHTML=`
            <div id="modal-supplier-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-supplier-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `,document.body.appendChild(e)}};let $="",k="all",j=null,b="products";const O=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return t}},H=()=>{const t=p.suppliers||[],r=p.products||[],e=p.purchases||[],a=t.length,l=r.filter(d=>d.supplierId&&t.some(n=>String(n.id)===String(d.supplierId))).length,o=e.reduce((d,n)=>{if(n.paymentType==="tempo"&&n.paymentStatus!=="lunas"){const u=(parseFloat(n.total)||0)-(parseFloat(n.amountPaid)||0);return d+(u>0?u:0)}return d},0),i=e.filter(d=>d.status==="ordered").length;return{totalSuppliers:a,linkedProductsCount:l,totalOutstandingDebt:o,activePurchasesCount:i}},h=()=>{if(P(),!c("admin-content"))return;const r=H(),e=p.suppliers||[],a=$.toLowerCase().trim();let l=e.filter(o=>!a||(o.name||"").toLowerCase().includes(a)||(o.code||"").toLowerCase().includes(a)||(o.salesName||"").toLowerCase().includes(a)||(o.phone||"").includes(a)||(o.address||"").toLowerCase().includes(a)?k==="has_debt"?(p.purchases||[]).some(n=>String(n.supplierId)===String(o.id)&&n.paymentType==="tempo"&&n.paymentStatus!=="lunas"&&(parseFloat(n.total)||0)-(parseFloat(n.amountPaid)||0)>0):!0:!1);T("admin-content",`
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 1. HERO BANNER: MASTER DATA SUPPLIER & REKANAN (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.05)] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 shadow-xs">
                <!-- Ambient Glow Dekorasi -->
                <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-15 blur-3xl" style="background: var(--color-primary)"></div>
                <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10 blur-2xl" style="background: var(--color-primary)"></div>

                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-truck-field"></i> Mitra Pabrik &amp; Distributor
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Database Supplier &amp; Rekanan
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Lacak asal-usul barang kulakan, kelola kontak sales, pantau tempo pembayaran, dan cetak purchase order pengadaan toko.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="if(window.openAdminTab) window.openAdminTab('purchases');" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-cart-flatbed" style="color:var(--color-primary)"></i>
                            <span>Order Kulakan</span>
                        </button>
                        <button onclick="window.openSupplierFormModal()" class="px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Tambah Supplier</span>
                        </button>
                    </div>
                </div>

                <!-- METRIK STATISTIK REKANAN -->
                <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Rekanan</span>
                            <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-truck-field"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r.totalSuppliers}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Pabrik &amp; Distributor Aktif</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Barang Terhubung</span>
                            <div class="w-7 h-7 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400 tracking-tight">${r.linkedProductsCount}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Produk Terlacak Asalnya</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Usaha</span>
                            <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                        </div>
                        <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${m(r.totalOutstandingDebt)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Kewajiban Belum Lunas</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">PO Berjalan</span>
                            <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-cart-flatbed"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r.activePurchasesCount}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Menunggu Barang Datang</p>
                    </div>
                </div>
            </div>

            <!-- 2. TOOLBAR: PENCARIAN & FILTER -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div class="flex gap-2 flex-1 max-w-xl">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                        <input 
                            type="text" 
                            id="supplier-search-input" 
                            value="${s($)}" 
                            placeholder="Cari supplier, kode, kontak sales, alamat..." 
                            oninput="window.handleSupplierSearch(this.value)"
                            class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                        >
                    </div>
                    <button 
                        onclick="window.toggleSupplierFilter()" 
                        class="px-4 py-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${k==="has_debt"?"text-white shadow-sm":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"}"
                        style="${k==="has_debt"?"background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;":""}"
                        title="Tampilkan hanya supplier yang ada sisa hutang tempo"
                    >
                        <i class="fa-solid fa-filter text-xs"></i>
                        <span class="hidden sm:inline">Ada Hutang</span>
                    </button>
                </div>
            </div>

            <!-- 3. DAFTAR SUPPLIER / REKANAN -->
            <div id="supplier-cards-list" class="space-y-3">
                ${l.length===0?`
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-truck-field"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Data Supplier</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Daftarkan supplier / distributor rekanan untuk melacak asal-usul barang, mengelola kulakan produk, dan memantau hutang tempo usaha.</p>
                        <button onclick="window.openSupplierFormModal()" class="mt-4 px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus mr-1.5"></i> Tambah Supplier Pertama
                        </button>
                    </div>
                `:l.map(o=>B(o)).join("")}
            </div>
        </div>
    `)},B=t=>{const r=p.products||[],e=p.purchases||[],a=r.filter(n=>String(n.supplierId)===String(t.id)),o=e.filter(n=>String(n.supplierId)===String(t.id)).reduce((n,u)=>{if(u.paymentType==="tempo"&&u.paymentStatus!=="lunas"){const x=(parseFloat(u.total)||0)-(parseFloat(u.amountPaid)||0);return n+(x>0?x:0)}return n},0),i={cash:"Cash / Tunai",tempo_7:"Tempo 7 Hari",tempo_14:"Tempo 14 Hari",tempo_30:"Tempo 30 Hari",tempo_60:"Tempo 60 Hari",konsinyasi:"Konsinyasi (Titip Jual)"},d=t.phone?A(t.phone):"";return`
        <div class="bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/50 transition-all rounded-3xl p-4 sm:p-6 shadow-2xs group space-y-4">
            <!-- 1. IDENTITAS UTAMA SUPPLIER & STATUS -->
            <div class="flex items-start justify-between gap-3.5">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-sm sm:text-base font-black shrink-0 border shadow-xs transition-transform group-hover:scale-105" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25)">
                        ${t.code?s(t.code.substring(0,3).toUpperCase()):'<i class="fa-solid fa-truck-field"></i>'}
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-black text-sm sm:text-base text-slate-800 dark:text-white truncate tracking-tight">${s(t.name)}</h4>
                            ${t.code?`<span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold border border-slate-200/60 dark:border-slate-700">${s(t.code)}</span>`:""}
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">${s(i[t.defaultTerms]||"Cash")}</span>
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            ${t.salesName?`<span><i class="fa-solid fa-user-tie mr-1" style="color:var(--color-primary)"></i>${s(t.salesName)}</span>`:""}
                            ${d?`<a href="https://wa.me/${d}" target="_blank" onclick="event.stopPropagation();" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"><i class="fa-brands fa-whatsapp text-sm"></i>+${d}</a>`:""}
                            ${t.bankName&&t.bankAccount?`<span><i class="fa-solid fa-credit-card mr-1" style="color:var(--color-primary)"></i>${s(t.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-300">${s(t.bankAccount)}</b></span>`:""}
                        </div>

                        ${t.address?`<p class="text-[11px] text-slate-400 truncate mt-1 max-w-lg"><i class="fa-solid fa-location-dot mr-1 text-rose-500"></i>${s(t.address)}</p>`:""}
                    </div>
                </div>
            </div>

            <!-- 2. KOTAK INFORMASI PRODUK & HUTANG USAHA -->
            <div class="grid grid-cols-2 gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                <div class="space-y-0.5">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400">Katalog Disuplai</span>
                    <p class="text-sm sm:text-base font-black text-slate-800 dark:text-white">
                        <span style="color:var(--color-primary)">${a.length}</span> <span class="text-xs font-bold text-slate-500">Macam Produk</span>
                    </p>
                </div>

                <div class="space-y-0.5 text-right">
                    <span class="block text-[10px] font-black uppercase tracking-wider ${o>0?"text-amber-500":"text-slate-400"}">Hutang Usaha</span>
                    <p class="text-sm sm:text-base font-black ${o>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                        ${o>0?m(o):'<span class="text-xs font-bold text-emerald-500"><i class="fa-solid fa-check mr-1"></i>Lunas (Rp 0)</span>'}
                    </p>
                </div>
            </div>

            <!-- 3. ACTION BAR RESPONSIF: MOBILE-FIRST & LAPANG -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
                <!-- Aksi Utama: Order PO & Detail -->
                <div class="flex items-center gap-2 flex-1">
                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.quickCreatePOForSupplier('${t.id}')" 
                        class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer" 
                        style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);"
                        title="Buat Order Kulakan Produk ke Supplier Ini"
                    >
                        <i class="fa-solid fa-cart-flatbed text-xs"></i>
                        <span>Order PO Kulakan</span>
                    </button>

                    <button 
                        type="button"
                        onclick="window.openSupplierDetailModal('${t.id}')" 
                        class="h-11 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Lihat Profil Rekanan, Katalog, & Histori PO"
                    >
                        <i class="fa-solid fa-layer-group text-xs" style="color:var(--color-primary)"></i>
                        <span>Detail Profil</span>
                    </button>
                </div>

                <!-- Aksi Sekunder: Touch-Targets 44px (Grid di HP, Row di Desktop) -->
                <div class="${d?"grid grid-cols-3":"grid grid-cols-2"} gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-2 justify-end shrink-0">
                    ${d?`
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.openSupplierWhatsApp('${d}', '${s(t.name)}', '${s(t.salesName||"")}')" 
                            class="h-11 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs" 
                            title="Chat WhatsApp Sales"
                            aria-label="WhatsApp Sales"
                        >
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span class="sm:hidden">WA Sales</span>
                        </button>
                    `:""}

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.openSupplierFormModal('${t.id}')" 
                        class="h-11 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs" 
                        title="Edit Data Rekanan"
                        aria-label="Edit Data Rekanan"
                    >
                        <i class="fa-solid fa-pen text-xs"></i>
                        <span class="sm:hidden">Edit</span>
                    </button>

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.deleteSupplier('${t.id}')" 
                        class="h-11 px-3 rounded-2xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs" 
                        title="Hapus Rekanan"
                        aria-label="Hapus Rekanan"
                    >
                        <i class="fa-solid fa-trash text-xs"></i>
                        <span class="sm:hidden">Hapus</span>
                    </button>
                </div>
            </div>
        </div>
    `};window.handleSupplierSearch=t=>{$=t||"",h()};window.toggleSupplierFilter=()=>{k=k==="all"?"has_debt":"all",h()};window.openSupplierWhatsApp=(t,r,e)=>{const l=`${e?`Halo Pak/Bu ${e}`:`Halo Tim Sales ${r}`} dari *${p.store?.name||"Toko Putri"}*.
Kami ingin menanyakan ketersediaan stok & mengajukan order barang. Mohon info update pricelist / ketersediaan barang ya. Terima kasih! 🙏`;F(t,l)};window.openSupplierFormModal=(t=null)=>{P();const r=p.suppliers||[],e=!!t,a=e?r.find(d=>String(d.id)===String(t))||{}:{code:"SUP-"+Math.floor(100+Math.random()*900),defaultTerms:"tempo_14"},l=c("modal-supplier-form"),o=c("modal-supplier-form-box"),i=c("modal-supplier-form-content");!l||!i||(T("modal-supplier-form-content",`
        <!-- Pull Indicator for Mobile Bottom Sheet -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid ${e?"fa-pen-to-square":"fa-truck-field"}"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${e?"Edit Data Rekanan / Supplier":"Daftarkan Supplier Baru"}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Master database pabrik, distributor, dan rekanan pengadaan barang toko</p>
                </div>
            </div>
            <button onclick="window.closeSupplierFormModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="supplier-editor-form" onsubmit="window.saveSupplierForm(event, '${e?a.id:""}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="custom-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nama Perusahaan / Supplier *</label>
                        <input type="text" id="sf-name" required value="${s(a.name||"")}" placeholder="Contoh: PT Semen Gresik Abadi" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Kode Supplier</label>
                        <input type="text" id="sf-code" value="${s(a.code||"")}" placeholder="Contoh: SUP-SGA" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl font-mono">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nama Sales / PIC Toko</label>
                        <input type="text" id="sf-salesName" value="${s(a.salesName||"")}" placeholder="Nama kontak sales lapangan" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">No WhatsApp Sales *</label>
                        <input type="tel" id="sf-phone" required value="${s(a.phone||"")}" placeholder="Contoh: 081234567890" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Termin Pembayaran Standar</label>
                        <select id="sf-defaultTerms" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl cursor-pointer font-bold">
                            <option value="cash" ${a.defaultTerms==="cash"?"selected":""}>Cash / Tunai Saat Kirim</option>
                            <option value="tempo_7" ${a.defaultTerms==="tempo_7"?"selected":""}>Tempo 7 Hari</option>
                            <option value="tempo_14" ${a.defaultTerms==="tempo_14"?"selected":""}>Tempo 14 Hari (2 Minggu)</option>
                            <option value="tempo_30" ${a.defaultTerms==="tempo_30"?"selected":""}>Tempo 30 Hari (1 Bulan)</option>
                            <option value="tempo_60" ${a.defaultTerms==="tempo_60"?"selected":""}>Tempo 60 Hari</option>
                            <option value="konsinyasi" ${a.defaultTerms==="konsinyasi"?"selected":""}>Konsinyasi (Titip Jual Laku Bayar)</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Email (Opsional)</label>
                        <input type="email" id="sf-email" value="${s(a.email||"")}" placeholder="sales@perusahaan.com" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>
                </div>

                <!-- Bagian Rekening Bank untuk Pembayaran Hutang -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-700/60 space-y-3">
                    <p class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <i class="fa-solid fa-credit-card text-[var(--color-primary)]"></i>
                        <span>Rekening Pembayaran Supplier (Untuk Transfer Kulakan &amp; Cicilan)</span>
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nama Bank</label>
                            <input type="text" id="sf-bankName" value="${s(a.bankName||"")}" placeholder="BCA / Mandiri / BRI" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        </div>
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nomor Rekening</label>
                            <input type="text" id="sf-bankAccount" value="${s(a.bankAccount||"")}" placeholder="1234567890" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono">
                        </div>
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Atas Nama (A/N)</label>
                            <input type="text" id="sf-bankHolder" value="${s(a.bankHolder||"")}" placeholder="PT / Nama Pemilik" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        </div>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Alamat Kantor / Gudang Supplier</label>
                    <textarea id="sf-address" rows="2" placeholder="Alamat lengkap supplier..." class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl resize-none">${s(a.address||"")}</textarea>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan Khusus (Syarat Order / Jadwal Armada)</label>
                    <textarea id="sf-notes" rows="2" placeholder="Minimal order 50 sak, jadwal kirim tiap hari Selasa & Kamis..." class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl resize-none">${s(a.notes||"")}</textarea>
                </div>
            </div>

            <!-- Sticky Action Footer on Mobile & Desktop -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeSupplierFormModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-floppy-disk"></i>
                    <span>Simpan Data Supplier</span>
                </button>
            </div>
        </form>
    `),l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("supplierForm"),D(l,o))};window.closeSupplierFormModal=(t=!1)=>{const r=c("modal-supplier-form"),e=c("modal-supplier-form-box");r&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("supplierForm",!1,()=>y(r,e)):y(r,e))};window.saveSupplierForm=async(t,r)=>{t.preventDefault(),M("Menyimpan Data Supplier...");try{const e=(c("sf-name")?.value||"").trim(),a=(c("sf-code")?.value||"").trim(),l=(c("sf-salesName")?.value||"").trim();let o=(c("sf-phone")?.value||"").trim();const i=c("sf-defaultTerms")?.value||"tempo_14",d=(c("sf-email")?.value||"").trim(),n=(c("sf-bankName")?.value||"").trim(),u=(c("sf-bankAccount")?.value||"").trim(),x=(c("sf-bankHolder")?.value||"").trim(),v=(c("sf-address")?.value||"").trim(),E=(c("sf-notes")?.value||"").trim();if(!e)return g(),f("Nama supplier wajib diisi!");o&&(o=A(o)),p.suppliers||(p.suppliers=[]);const w={id:r||"sup_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),name:e,code:a,salesName:l,phone:o,defaultTerms:i,email:d,bankName:n,bankAccount:u,bankHolder:x,address:v,notes:E,updatedAt:new Date().toISOString()};if(!r)w.createdAt=new Date().toISOString(),p.suppliers.unshift(w);else{const S=p.suppliers.findIndex(R=>String(R.id)===String(r));S>-1?p.suppliers[S]={...p.suppliers[S],...w}:p.suppliers.push(w)}await N(["suppliers"]),g(),window.closeSupplierFormModal(),f(r?"Data supplier diperbarui! ✨":"Supplier baru berhasil ditambahkan! 🎉"),h()}catch(e){g(),console.error("Gagal menyimpan supplier:",e),f("Gagal menyimpan: "+(e.message||""))}};window.deleteSupplier=t=>{const e=(p.suppliers||[]).find(i=>String(i.id)===String(t));if(!e)return;const a=(p.products||[]).filter(i=>String(i.supplierId)===String(t)),l=(p.purchases||[]).filter(i=>String(i.supplierId)===String(t));let o=`Hapus supplier <b>${s(e.name)}</b>?`;a.length>0&&(o+=`<br><span class="text-amber-500 font-bold text-xs mt-1 block">Perhatian: Ada ${a.length} produk di etalase yang terhubung ke supplier ini. Link supplier pada produk tersebut akan dilepas.</span>`),l.length>0&&(o+=`<br><span class="text-rose-500 font-bold text-xs mt-1 block">Terdapat ${l.length} riwayat pesanan kulakan (PO) terkait supplier ini.</span>`),I("Hapus Supplier",o,async()=>{M("Menghapus...");try{p.suppliers=(p.suppliers||[]).filter(d=>String(d.id)!==String(t));let i=!1;(p.products||[]).forEach(d=>{String(d.supplierId)===String(t)&&(delete d.supplierId,i=!0)}),await N(i?["suppliers","products"]:["suppliers"]),g(),f("Supplier berhasil dihapus."),h()}catch(i){g(),console.error("Gagal menghapus supplier:",i),f("Gagal menghapus: "+i.message)}},"Hapus Permanen")};window.openSupplierDetailModal=(t,r="products")=>{P(),j=t,b=r;const a=(p.suppliers||[]).find(d=>String(d.id)===String(t));if(!a)return f("Supplier tidak ditemukan!");const l=c("modal-supplier-detail"),o=c("modal-supplier-detail-box"),i=c("modal-supplier-detail-content");!l||!i||(C(a),l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("supplierDetail"),D(l,o))};window.closeSupplierDetailModal=(t=!1)=>{const r=c("modal-supplier-detail"),e=c("modal-supplier-detail-box");r&&(!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("supplierDetail",!1,()=>y(r,e)):y(r,e))};window.switchSupplierDetailTab=t=>{b=t;const e=(p.suppliers||[]).find(a=>String(a.id)===String(j));e&&C(e)};const C=t=>{const r=c("modal-supplier-detail-content");if(!r)return;r.className="flex-1 flex flex-col overflow-hidden";const e=p.products||[],a=p.purchases||[],l=e.filter(u=>String(u.supplierId)===String(t.id)),o=a.filter(u=>String(u.supplierId)===String(t.id));o.sort((u,x)=>new Date(x.date||x.createdAt||0)-new Date(u.date||u.createdAt||0));const i=o.filter(u=>u.paymentType==="tempo"),d=i.reduce((u,x)=>{if(x.paymentStatus!=="lunas"){const v=(parseFloat(x.total)||0)-(parseFloat(x.amountPaid)||0);return u+(v>0?v:0)}return u},0),n=t.phone?A(t.phone):"";T("modal-supplier-detail-content",`
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL: PROFIL SUPPLIER -->
        <div class="relative p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 shrink-0">
            <!-- Pinned Native Close Button (Top-Right) -->
            <button 
                type="button" 
                onclick="window.closeSupplierDetailModal()" 
                class="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-200/70 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer z-10 active:scale-95" 
                aria-label="Tutup Modal"
            >
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>

            <!-- Profil Header Info -->
            <div class="flex items-start gap-3 sm:gap-4 pr-9 sm:pr-10">
                <div class="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-2xl shrink-0 font-black shadow-xs transition-transform" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1.5px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${t.code?s(t.code.substring(0,3).toUpperCase()):'<i class="fa-solid fa-truck-field"></i>'}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-black text-base sm:text-xl text-slate-800 dark:text-white tracking-tight leading-tight">${s(t.name)}</h3>
                        ${t.code?`<span class="px-2 py-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold">${s(t.code)}</span>`:""}
                    </div>
                    <div class="flex items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                        ${t.salesName?`<span><i class="fa-solid fa-user-tie text-[var(--color-primary)] mr-1"></i>Sales: <b>${s(t.salesName)}</b></span>`:""}
                        ${n?`<a href="https://wa.me/${n}" target="_blank" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center"><i class="fa-brands fa-whatsapp mr-1 text-emerald-500"></i>+${n}</a>`:""}
                        ${t.bankName&&t.bankAccount?`<span><i class="fa-solid fa-credit-card mr-1" style="color:var(--color-primary)"></i>${s(t.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-200">${s(t.bankAccount)}</b></span>`:""}
                    </div>
                    ${t.address?`<p class="text-[11px] text-slate-400 dark:text-slate-400 mt-1 line-clamp-2"><i class="fa-solid fa-location-dot text-rose-500 mr-1 shrink-0"></i>${s(t.address)}</p>`:""}
                </div>
            </div>

            <!-- NATIVE SEGMENTED TAB BAR -->
            <div class="mt-4 sm:mt-5 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl grid grid-cols-3 gap-1 text-center font-bold text-xs select-none">
                <button 
                    type="button" 
                    onclick="window.switchSupplierDetailTab('products')" 
                    class="py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 min-w-0 ${b==="products"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}"
                    ${b==="products"?'style="color: var(--color-primary);"':""}
                >
                    <i class="fa-solid fa-boxes-stacked text-xs shrink-0"></i>
                    <span class="truncate">Produk (${l.length})</span>
                </button>

                <button 
                    type="button" 
                    onclick="window.switchSupplierDetailTab('orders')" 
                    class="py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 min-w-0 ${b==="orders"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}"
                    ${b==="orders"?'style="color: var(--color-primary);"':""}
                >
                    <i class="fa-solid fa-cart-flatbed text-xs shrink-0"></i>
                    <span class="truncate">PO (${o.length})</span>
                </button>

                <button 
                    type="button" 
                    onclick="window.switchSupplierDetailTab('debt')" 
                    class="py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 min-w-0 ${b==="debt"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}"
                    ${b==="debt"?'style="color: var(--color-primary);"':""}
                >
                    <i class="fa-solid fa-file-invoice-dollar text-xs shrink-0"></i>
                    <span class="truncate">Hutang (${i.length})</span>
                    ${d>0?'<span class="w-2 h-2 rounded-full bg-rose-500 shrink-0" title="Ada hutang aktif"></span>':""}
                </button>
            </div>
        </div>

        <!-- ISI KONTEN TAB (SCROLLABLE, FLUID FLEX-1) -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar">
            ${b==="products"?K(l,t):""}
            ${b==="orders"?U(o,t):""}
            ${b==="debt"?_(i,d,t):""}
        </div>

        <!-- STICKY ACTION FOOTER (NATIVE APP STANDARD) -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-between gap-3" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <button type="button" onclick="window.closeSupplierDetailModal()" class="h-12 px-5 sm:px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                Tutup
            </button>
            <button type="button" onclick="window.quickCreatePOForSupplier('${t.id}')" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-cart-flatbed"></i>
                <span>Buat Order Kulakan (PO)</span>
            </button>
        </div>
    `)},K=(t,r)=>t.length===0?`
            <div class="text-center py-10 sm:py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1.5px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Produk yang Dihubungkan</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">Saat Anda menambahkan atau mengedit produk di menu Katalog Produk, pilih <b>${s(r.name)}</b> pada field Rekanan/Supplier Asal.</p>
                <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('products');" class="mt-4 px-5 py-2.5 rounded-2xl font-bold text-xs cursor-pointer active:scale-95 transition-all inline-flex items-center gap-2 border shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-box-archive text-xs"></i>
                    <span>Buka Katalog Produk Toko</span>
                </button>
            </div>
        `:`
        <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
                <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Total <b>${t.length}</b> macam produk toko dari supplier ini:</p>
                <button onclick="window.quickCreatePOForSupplier('${r.id}')" class="h-10 px-4 rounded-2xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs cursor-pointer active:scale-95 transition-all self-stretch sm:self-auto shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-cart-plus text-xs"></i>
                    <span>Kulakan Produk Ini</span>
                </button>
            </div>

            <div class="space-y-3">
                ${t.map(e=>{const a=L(e,{size:"thumb"}),l=e.img?`<div class="w-14 h-14 shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-0.5 flex items-center justify-center shadow-2xs" style="width: 56px; height: 56px; min-width: 56px; min-height: 56px; max-width: 56px; max-height: 56px;"><img src="${s(e.img)}" alt="${s(e.name)}" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${a}</div></div>`:`<div class="w-14 h-14 shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-center" style="width: 56px; height: 56px; min-width: 56px; min-height: 56px; max-width: 56px; max-height: 56px;">${a}</div>`,o=e.variants&&e.variants.length?e.variants.reduce((n,u)=>n+(parseFloat(u.stock)||0),0):parseFloat(e.stock)||0,i=e.price&&e.hpp?e.price-e.hpp:0,d=e.price&&e.hpp&&e.hpp>0?Math.round(i/e.hpp*100):0;return`
                        <div class="p-3.5 sm:p-4 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all space-y-3">
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-start gap-3 min-w-0 flex-1">
                                    <div class="shrink-0">${l}</div>
                                    <div class="min-w-0 flex-1">
                                        <h5 class="font-black text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate">${s(e.name)}</h5>
                                        <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-1 flex-wrap">
                                            ${e.sku?`<span class="font-mono bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-300 font-bold">SKU: ${s(e.sku)}</span>`:""}
                                            ${e.category?`<span class="text-slate-500 dark:text-slate-400 font-medium">${s(e.category)}</span>`:""}
                                            <span class="font-bold ${o<=2?"text-rose-500":"text-emerald-600 dark:text-emerald-400"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${o} ${s(e.unit||"pcs")}</span>
                                        </div>
                                    </div>
                                </div>

                                <button onclick="window.closeSupplierDetailModal(); if(window.oAEd) window.oAEd('products', '${e.id}');" class="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all shrink-0 active:scale-95 shadow-2xs cursor-pointer" title="Edit Produk">
                                    <i class="fa-solid fa-pen text-xs"></i>
                                </button>
                            </div>

                            <!-- Baris Finansial: HPP, Jual & Margin -->
                            <div class="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-xs">
                                <div>
                                    <span class="block text-[9px] font-black uppercase tracking-wider text-slate-400">Modal (HPP)</span>
                                    <span class="font-bold text-slate-700 dark:text-slate-200">${e.hpp?m(e.hpp):'<span class="text-slate-400 font-normal">-</span>'}</span>
                                </div>
                                <div class="text-center">
                                    <span class="block text-[9px] font-black uppercase tracking-wider text-slate-400">Harga Jual</span>
                                    <span class="font-black" style="color:var(--color-primary)">${m(e.price)}</span>
                                </div>
                                <div class="text-right">
                                    <span class="block text-[9px] font-black uppercase tracking-wider text-slate-400">Margin Laba</span>
                                    <span class="font-bold ${i>0?"text-emerald-500":"text-slate-400"}">${i>0?`+${m(i)} (${d}%)`:"-"}</span>
                                </div>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        </div>
    `,U=(t,r)=>t.length===0?`
            <div class="text-center py-10 sm:py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1.5px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Riwayat Order PO</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">Mulai buat surat pesanan kulakan (Purchase Order) untuk mencatat barang masuk, harga modal, dan termin pembayaran.</p>
                <button onclick="window.quickCreatePOForSupplier('${r.id}')" class="mt-4 px-5 py-2.5 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-cart-flatbed text-xs"></i>
                    <span>Buat Order PO Pertama</span>
                </button>
            </div>
        `:`
        <div class="space-y-3">
            ${t.map(e=>{const a={ordered:'<span class="px-2.5 py-1 rounded-full text-[10px] font-bold border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-clock mr-1"></i>Dipesan</span>',received:'<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>',completed:'<span class="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-2xs"><i class="fa-solid fa-check-double mr-1"></i>Selesai &amp; Lunas</span>',cancelled:'<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[10px] font-bold border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Dibatalkan</span>'}[e.status||"ordered"],l=e.paymentType==="tempo"?`
                    <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                        Tempo ${e.tempoDays?`${e.tempoDays} Hari`:""} (${e.paymentStatus==="lunas"?"Lunas":"Belum Lunas"})
                    </span>
                `:`<span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase">${s(e.paymentType||"Cash")}</span>`;return`
                    <div class="bg-white/95 dark:bg-slate-800/90 p-4 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 transition-all rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                        <div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${s(e.poNumber||e.id)}</span>
                                ${a}
                                ${l}
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-3">
                                <span><i class="fa-regular fa-calendar mr-1"></i>${O(e.date||e.createdAt)}</span>
                                <span><i class="fa-solid fa-box mr-1"></i>${(e.items||[]).length} Item Barang</span>
                            </p>
                        </div>

                        <div class="flex items-center justify-between sm:justify-end gap-4">
                            <div class="text-right">
                                <span class="block text-[9px] font-bold uppercase text-slate-400">Total Kulakan</span>
                                <span class="text-sm font-black text-slate-800 dark:text-slate-100">${m(e.total)}</span>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchaseDetailModal?.('${e.id}'); }, 200);" class="px-3 py-1.5 rounded-xl font-bold text-xs transition-all border cursor-pointer active:scale-95" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                Lihat PO <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
                            </button>
                        </div>
                    </div>
                `}).join("")}
        </div>
    `,_=(t,r,e)=>{const a=t.filter(l=>(parseFloat(l.total)||0)-(parseFloat(l.amountPaid)||0)>0&&l.paymentStatus!=="lunas");return`
        <div class="space-y-4">
            <!-- RINGKASAN TOTAL HUTANG USAHA -->
            <div class="p-4 sm:p-5 rounded-3xl ${r>0?"bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700":"bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60"} flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                <div>
                    <span class="block text-[10px] font-black uppercase tracking-widest ${r>0?"text-slate-400":"text-emerald-600 dark:text-emerald-400"}">Total Hutang Usaha Berjalan</span>
                    <p class="text-2xl font-black ${r>0?"text-slate-900 dark:text-white":"text-emerald-600 dark:text-emerald-400"} tracking-tight mt-0.5">${m(r)}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        ${r>0?`Ada <b class="text-rose-500 font-black">${a.length}</b> nota order pembelian tempo yang belum lunas ke supplier ini.`:"Semua tagihan pembelian ke supplier ini sudah lunas sempurna! ✨"}
                    </p>
                </div>

                ${e.bankAccount?`
                    <div class="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs shrink-0 shadow-2xs">
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Rekening Tujuan Transfer:</span>
                        <p class="font-bold text-slate-800 dark:text-white mt-0.5">${s(e.bankName)}: <b class="font-mono text-base">${s(e.bankAccount)}</b></p>
                        <p class="text-[10px] text-slate-400">a/n ${s(e.bankHolder||e.name)}</p>
                    </div>
                `:""}
            </div>

            <!-- DAFTAR NOTA TEMPO BELUM LUNAS -->
            <div class="space-y-3">
                <h4 class="font-bold text-xs uppercase tracking-widest text-slate-500">Rincian Nota Tempo &amp; Jatuh Tempo</h4>
                ${a.length===0?`
                    <div class="p-6 text-center text-slate-400 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl">
                        <i class="fa-solid fa-circle-check text-2xl text-emerald-500 mb-2"></i>
                        <p class="font-bold text-xs text-slate-600 dark:text-slate-300">Tidak ada tanggungan hutang yang aktif</p>
                    </div>
                `:a.map(l=>{const o=(parseFloat(l.total)||0)-(parseFloat(l.amountPaid)||0),i=parseFloat(l.amountPaid)||0,d=l.tempoDueDate?O(l.tempoDueDate):"-";return`
                        <div class="bg-white/95 dark:bg-slate-800/90 p-4 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${s(l.poNumber||l.id)}</span>
                                    <span class="text-[10px] px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold border border-slate-200/80 dark:border-slate-600">Jatuh Tempo: ${d}</span>
                                </div>
                                <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex-wrap">
                                    <span>Total: <b>${m(l.total)}</b></span>
                                    <span>Sudah Dibayar: <b class="text-emerald-500">${m(i)}</b></span>
                                    <span>Sisa: <b class="text-rose-500 font-bold">${m(o)}</b></span>
                                </div>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchasePaymentModal?.('${l.id}'); }, 200);" class="h-11 px-5 rounded-2xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                                <i class="fa-solid fa-money-bill-wave text-xs"></i>
                                <span>Bayar / Cicil</span>
                            </button>
                        </div>
                    `}).join("")}
            </div>
        </div>
    `};window.quickCreatePOForSupplier=t=>{window.closeSupplierDetailModal?.(),window.openAdminTab&&(window.openAdminTab("purchases"),setTimeout(()=>{typeof window.openCreatePOModal=="function"&&window.openCreatePOModal(t)},150))};window.renderSuppliersView=h;window.computeSupplierMetrics=H;export{H as computeSupplierMetrics,P as ensureSupplierModals,h as renderSuppliersView};

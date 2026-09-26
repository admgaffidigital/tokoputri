import"./module-member-HotrGCGL.js";import{a as p,e as u,b as $,f as m,i as s,al as T,am as H,a3 as P,a1 as g,u as f,v as C,t as B}from"./module-print-DdyfBoO_.js";import{o as A}from"./module-admin-xU4Ill0v.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-hSc1GDmt.js";let S="",w="all",D=null,b="products";const M=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return e}},L=()=>{const e=p.suppliers||[],l=p.products||[],t=p.purchases||[],a=e.length,r=l.filter(n=>n.supplierId&&e.some(d=>String(d.id)===String(n.supplierId))).length,i=t.reduce((n,d)=>{if(d.paymentType==="tempo"&&d.paymentStatus!=="lunas"){const c=(parseFloat(d.total)||0)-(parseFloat(d.amountPaid)||0);return n+(c>0?c:0)}return n},0),o=t.filter(n=>n.status==="ordered").length;return{totalSuppliers:a,linkedProductsCount:r,totalOutstandingDebt:i,activePurchasesCount:o}},k=()=>{if(!u("admin-content"))return;const l=L(),t=p.suppliers||[],a=S.toLowerCase().trim();let r=t.filter(i=>!a||(i.name||"").toLowerCase().includes(a)||(i.code||"").toLowerCase().includes(a)||(i.salesName||"").toLowerCase().includes(a)||(i.phone||"").includes(a)||(i.address||"").toLowerCase().includes(a)?w==="has_debt"?(p.purchases||[]).some(d=>String(d.supplierId)===String(i.id)&&d.paymentType==="tempo"&&d.paymentStatus!=="lunas"&&(parseFloat(d.total)||0)-(parseFloat(d.amountPaid)||0)>0):!0:!1);$("admin-content",`
        <div class="space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-2">
            <!-- 1. HEADER & SUMMARY METRICS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 relative overflow-hidden group">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Total Rekanan</span>
                        <div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-truck-field"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${l.totalSuppliers}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Mitra Pabrik &amp; Distributor</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden group">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Asal Barang Terlacak</span>
                        <div class="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-boxes-stacked"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400 tracking-tight">${l.linkedProductsCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Produk Memiliki Supplier</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden group">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-amber-500">Hutang Usaha (Tempo)</span>
                        <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${m(l.totalOutstandingDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Kewajiban Belum Lunas</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden group">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-indigo-500">PO Berjalan</span>
                        <div class="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">${l.activePurchasesCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Menunggu Barang Datang</p>
                </div>
            </div>

            <!-- 2. TOOLBAR: PENCARIAN & TOMBOL AKSI -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div class="flex gap-2 flex-1 max-w-xl">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                        <input 
                            type="text" 
                            id="supplier-search-input" 
                            value="${s(S)}" 
                            placeholder="Cari supplier, kode, kontak sales, alamat..." 
                            oninput="window.handleSupplierSearch(this.value)"
                            class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-2xs transition-all"
                        >
                    </div>
                    <button 
                        onclick="window.toggleSupplierFilter()" 
                        class="px-3.5 py-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${w==="has_debt"?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"}"
                        title="Tampilkan hanya supplier yang ada sisa hutang tempo"
                    >
                        <i class="fa-solid fa-filter text-xs"></i>
                        <span class="hidden sm:inline">Ada Hutang</span>
                    </button>
                </div>

                <div class="flex items-center gap-2">
                    <button 
                        onclick="if(window.openAdminTab) window.openAdminTab('purchases');" 
                        class="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all active:scale-95 shadow-2xs"
                        title="Buka Halaman Kulakan & Order Pembelian (PO)"
                    >
                        <i class="fa-solid fa-cart-flatbed text-[var(--color-primary)]"></i>
                        <span>Order Kulakan</span>
                    </button>

                    <button 
                        onclick="window.openSupplierFormModal()" 
                        class="px-4 sm:px-5 py-3 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow hover:opacity-95 transition-all active:scale-95 shrink-0"
                    >
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah Supplier</span>
                    </button>
                </div>
            </div>

            <!-- 3. DAFTAR SUPPLIER / REKANAN -->
            <div id="supplier-cards-list" class="space-y-3">
                ${r.length===0?`
                    <div class="card-modern p-12 text-center flex flex-col items-center justify-center text-slate-400">
                        <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl mb-3 text-slate-400">
                            <i class="fa-solid fa-truck-field"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-600 dark:text-slate-300">Belum Ada Data Supplier</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Daftarkan supplier / distributor rekanan untuk melacak asal-usul barang, mengelola kulakan produk, dan memantau hutang tempo usaha.</p>
                        <button onclick="window.openSupplierFormModal()" class="mt-4 px-5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow">
                            <i class="fa-solid fa-plus mr-1.5"></i> Tambah Supplier Pertama
                        </button>
                    </div>
                `:r.map(i=>F(i)).join("")}
            </div>
        </div>

        <!-- MODAL DETAIL SUPPLIER & PROFIL LENGKAP -->
        <div id="modal-supplier-detail" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs hidden opacity-0 transition-opacity duration-200">
            <div id="modal-supplier-detail-box" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-supplier-detail-content" class="flex-1 overflow-y-auto"></div>
            </div>
        </div>

        <!-- MODAL FORM TAMBAH / EDIT SUPPLIER -->
        <div id="modal-supplier-form" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs hidden opacity-0 transition-opacity duration-200">
            <div id="modal-supplier-form-box" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-supplier-form-content" class="flex-1 overflow-y-auto"></div>
            </div>
        </div>
    `)},F=e=>{const l=p.products||[],t=p.purchases||[],a=l.filter(d=>String(d.supplierId)===String(e.id)),i=t.filter(d=>String(d.supplierId)===String(e.id)).reduce((d,c)=>{if(c.paymentType==="tempo"&&c.paymentStatus!=="lunas"){const x=(parseFloat(c.total)||0)-(parseFloat(c.amountPaid)||0);return d+(x>0?x:0)}return d},0),o={cash:"Cash / Tunai",tempo_7:"Tempo 7 Hari",tempo_14:"Tempo 14 Hari",tempo_30:"Tempo 30 Hari",tempo_60:"Tempo 60 Hari",konsinyasi:"Konsinyasi (Titip Jual)"},n=e.phone?T(e.phone):"";return`
        <div class="card-modern p-4 sm:p-5 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl shadow-2xs group">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl text-slate-700 dark:text-slate-200 shrink-0 font-black shadow-inner">
                        ${e.code?s(e.code.substring(0,3).toUpperCase()):'<i class="fa-solid fa-truck-field"></i>'}
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-black text-sm sm:text-base text-slate-800 dark:text-white truncate tracking-tight">${s(e.name)}</h4>
                            ${e.code?`<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold">${s(e.code)}</span>`:""}
                            <span class="px-2 py-0.5 rounded-md primary-bg-soft primary-text text-[10px] font-bold">${s(o[e.defaultTerms]||"Cash")}</span>
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            ${e.salesName?`<span><i class="fa-solid fa-user-tie text-[var(--color-primary)] mr-1"></i>${s(e.salesName)}</span>`:""}
                            ${e.phone?`<a href="https://wa.me/${n}" target="_blank" onclick="event.stopPropagation();" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"><i class="fa-brands fa-whatsapp"></i>+${n}</a>`:""}
                            ${e.bankName&&e.bankAccount?`<span><i class="fa-solid fa-credit-card text-blue-500 mr-1"></i>${s(e.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-300">${s(e.bankAccount)}</b></span>`:""}
                        </div>

                        ${e.address?`<p class="text-[11px] text-slate-400 truncate mt-1 max-w-lg"><i class="fa-solid fa-location-dot mr-1 text-rose-500"></i>${s(e.address)}</p>`:""}
                    </div>
                </div>

                <!-- Sisi Kanan: Statistik Cepat & Tombol Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                    <div class="flex items-center gap-4 text-right">
                        <div class="text-left md:text-right">
                            <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Produk</span>
                            <span class="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200">
                                <b class="text-teal-600 dark:text-teal-400">${a.length}</b> Macam
                            </span>
                        </div>

                        <div class="text-right">
                            <span class="block text-[9px] font-bold uppercase tracking-widest ${i>0?"text-amber-500":"text-slate-400"}">Hutang Usaha</span>
                            <span class="text-xs sm:text-sm font-black ${i>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                                ${i>0?m(i):'<span class="text-[11px] font-bold text-emerald-500">Lunas / Rp 0</span>'}
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center gap-1.5 ml-auto md:ml-2">
                        <!-- Tombol WA Sales Langsung -->
                        ${n?`
                            <button 
                                onclick="event.stopPropagation(); window.openSupplierWhatsApp('${n}', '${s(e.name)}', '${s(e.salesName||"")}')" 
                                class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center transition-all active:scale-95 shadow-2xs" 
                                title="Chat WhatsApp Sales"
                            >
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        `:""}

                        <!-- Tombol Buat PO Langsung untuk Supplier Ini -->
                        <button 
                            onclick="event.stopPropagation(); window.quickCreatePOForSupplier('${e.id}')" 
                            class="px-3 h-9 rounded-xl bg-indigo-50 hover:bg-indigo-500 hover:text-white dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs" 
                            title="Buat Order Kulakan Produk ke Supplier Ini"
                        >
                            <i class="fa-solid fa-cart-flatbed text-xs"></i>
                            <span class="hidden sm:inline">Order PO</span>
                        </button>

                        <!-- Tombol Lihat Profil & Katalog Lengkap -->
                        <button 
                            onclick="window.openSupplierDetailModal('${e.id}')" 
                            class="px-3.5 h-9 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-xs hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-2xs flex items-center gap-1.5"
                            title="Lihat Daftar Barang yang Disuplai & Histori PO"
                        >
                            <i class="fa-solid fa-layer-group text-xs"></i>
                            <span>Detail</span>
                        </button>

                        <!-- Tombol Edit Data Supplier -->
                        <button 
                            onclick="event.stopPropagation(); window.openSupplierFormModal('${e.id}')" 
                            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs" 
                            title="Edit Data Rekanan"
                        >
                            <i class="fa-solid fa-pen text-xs"></i>
                        </button>

                        <!-- Tombol Hapus Supplier -->
                        <button 
                            onclick="event.stopPropagation(); window.deleteSupplier('${e.id}')" 
                            class="w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs" 
                            title="Hapus Rekanan"
                        >
                            <i class="fa-solid fa-trash text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `};window.handleSupplierSearch=e=>{S=e||"",k()};window.toggleSupplierFilter=()=>{w=w==="all"?"has_debt":"all",k()};window.openSupplierWhatsApp=(e,l,t)=>{const r=`${t?`Halo Pak/Bu ${t}`:`Halo Tim Sales ${l}`} dari *${p.store?.name||"Toko Putri"}*.
Kami ingin menanyakan ketersediaan stok & mengajukan order barang. Mohon info update pricelist / ketersediaan barang ya. Terima kasih! 🙏`;H(e,r)};window.openSupplierFormModal=(e=null)=>{const l=p.suppliers||[],t=!!e,a=t?l.find(n=>String(n.id)===String(e))||{}:{code:"SUP-"+Math.floor(100+Math.random()*900),defaultTerms:"tempo_14"},r=u("modal-supplier-form"),i=u("modal-supplier-form-box"),o=u("modal-supplier-form-content");!r||!o||($("modal-supplier-form-content",`
        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl primary-bg-soft primary-text flex items-center justify-center text-lg">
                    <i class="fa-solid ${t?"fa-pen-to-square":"fa-truck-field"}"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${t?"Edit Data Rekanan / Supplier":"Daftarkan Supplier Baru"}</h3>
                    <p class="text-xs text-slate-400">Master database pabrik, distributor, dan rekanan pengadaan barang toko</p>
                </div>
            </div>
            <button onclick="window.closeSupplierFormModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <form id="supplier-editor-form" onsubmit="window.saveSupplierForm(event, '${t?a.id:""}')" class="p-5 sm:p-6 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Nama Perusahaan / Supplier *</label>
                    <input type="text" id="sf-name" required value="${s(a.name||"")}" placeholder="Contoh: PT Semen Gresik Abadi" class="admin-input bg-slate-50 dark:bg-slate-900">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Kode Supplier</label>
                    <input type="text" id="sf-code" value="${s(a.code||"")}" placeholder="Contoh: SUP-SGA" class="admin-input bg-slate-50 dark:bg-slate-900 font-mono">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Nama Sales / PIC Toko</label>
                    <input type="text" id="sf-salesName" value="${s(a.salesName||"")}" placeholder="Nama kontak sales lapangan" class="admin-input bg-slate-50 dark:bg-slate-900">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">No WhatsApp Sales *</label>
                    <input type="tel" id="sf-phone" required value="${s(a.phone||"")}" placeholder="Contoh: 081234567890" class="admin-input bg-slate-50 dark:bg-slate-900">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Termin Pembayaran Standar</label>
                    <select id="sf-defaultTerms" class="admin-input bg-slate-50 dark:bg-slate-900 cursor-pointer font-bold">
                        <option value="cash" ${a.defaultTerms==="cash"?"selected":""}>Cash / Tunai Saat Kirim</option>
                        <option value="tempo_7" ${a.defaultTerms==="tempo_7"?"selected":""}>Tempo 7 Hari</option>
                        <option value="tempo_14" ${a.defaultTerms==="tempo_14"?"selected":""}>Tempo 14 Hari (2 Minggu)</option>
                        <option value="tempo_30" ${a.defaultTerms==="tempo_30"?"selected":""}>Tempo 30 Hari (1 Bulan)</option>
                        <option value="tempo_60" ${a.defaultTerms==="tempo_60"?"selected":""}>Tempo 60 Hari</option>
                        <option value="konsinyasi" ${a.defaultTerms==="konsinyasi"?"selected":""}>Konsinyasi (Titip Jual Laku Bayar)</option>
                    </select>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Email (Opsional)</label>
                    <input type="email" id="sf-email" value="${s(a.email||"")}" placeholder="sales@perusahaan.com" class="admin-input bg-slate-50 dark:bg-slate-900">
                </div>
            </div>

            <!-- Bagian Rekening Bank untuk Pembayaran Hutang -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                <p class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                    <i class="fa-solid fa-credit-card text-[var(--color-primary)]"></i>
                    <span>Rekening Pembayaran Supplier (Untuk Transfer Kulakan &amp; Cicilan)</span>
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nama Bank</label>
                        <input type="text" id="sf-bankName" value="${s(a.bankName||"")}" placeholder="BCA / Mandiri / BRI" class="admin-input bg-white dark:bg-slate-800">
                    </div>
                    <div>
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nomor Rekening</label>
                        <input type="text" id="sf-bankAccount" value="${s(a.bankAccount||"")}" placeholder="1234567890" class="admin-input bg-white dark:bg-slate-800 font-mono">
                    </div>
                    <div>
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Atas Nama (A/N)</label>
                        <input type="text" id="sf-bankHolder" value="${s(a.bankHolder||"")}" placeholder="PT / Nama Pemilik" class="admin-input bg-white dark:bg-slate-800">
                    </div>
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Alamat Kantor / Gudang Supplier</label>
                <textarea id="sf-address" rows="2" placeholder="Alamat lengkap supplier..." class="admin-input bg-slate-50 dark:bg-slate-900 resize-none">${s(a.address||"")}</textarea>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Catatan Khusus (Syarat Order / Jadwal Armada)</label>
                <textarea id="sf-notes" rows="2" placeholder="Minimal order 50 sak, jadwal kirim tiap hari Selasa & Kamis..." class="admin-input bg-slate-50 dark:bg-slate-900 resize-none">${s(a.notes||"")}</textarea>
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button type="button" onclick="window.closeSupplierFormModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    Batal
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow transition-all active:scale-95">
                    <i class="fa-solid fa-floppy-disk mr-1.5"></i> Simpan Data Supplier
                </button>
            </div>
        </form>
    `),r.classList.remove("hidden"),setTimeout(()=>{r.classList.remove("opacity-0"),i.classList.remove("scale-95")},10))};window.closeSupplierFormModal=()=>{const e=u("modal-supplier-form"),l=u("modal-supplier-form-box");e&&(e.classList.add("opacity-0"),l&&l.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden")},200))};window.saveSupplierForm=async(e,l)=>{e.preventDefault(),P("Menyimpan Data Supplier...");try{const t=(u("sf-name")?.value||"").trim(),a=(u("sf-code")?.value||"").trim(),r=(u("sf-salesName")?.value||"").trim();let i=(u("sf-phone")?.value||"").trim();const o=u("sf-defaultTerms")?.value||"tempo_14",n=(u("sf-email")?.value||"").trim(),d=(u("sf-bankName")?.value||"").trim(),c=(u("sf-bankAccount")?.value||"").trim(),x=(u("sf-bankHolder")?.value||"").trim(),v=(u("sf-address")?.value||"").trim(),O=(u("sf-notes")?.value||"").trim();if(!t)return g(),f("Nama supplier wajib diisi!");i&&(i=T(i)),p.suppliers||(p.suppliers=[]);const h={id:l||"sup_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,6),name:t,code:a,salesName:r,phone:i,defaultTerms:o,email:n,bankName:d,bankAccount:c,bankHolder:x,address:v,notes:O,updatedAt:new Date().toISOString()};if(!l)h.createdAt=new Date().toISOString(),p.suppliers.unshift(h);else{const y=p.suppliers.findIndex(N=>String(N.id)===String(l));y>-1?p.suppliers[y]={...p.suppliers[y],...h}:p.suppliers.push(h)}await A(["suppliers"]),g(),window.closeSupplierFormModal(),f(l?"Data supplier diperbarui! ✨":"Supplier baru berhasil ditambahkan! 🎉"),k()}catch(t){g(),console.error("Gagal menyimpan supplier:",t),f("Gagal menyimpan: "+(t.message||""))}};window.deleteSupplier=e=>{const t=(p.suppliers||[]).find(o=>String(o.id)===String(e));if(!t)return;const a=(p.products||[]).filter(o=>String(o.supplierId)===String(e)),r=(p.purchases||[]).filter(o=>String(o.supplierId)===String(e));let i=`Hapus supplier <b>${s(t.name)}</b>?`;a.length>0&&(i+=`<br><span class="text-amber-500 font-bold text-xs mt-1 block">Perhatian: Ada ${a.length} produk di etalase yang terhubung ke supplier ini. Link supplier pada produk tersebut akan dilepas.</span>`),r.length>0&&(i+=`<br><span class="text-rose-500 font-bold text-xs mt-1 block">Terdapat ${r.length} riwayat pesanan kulakan (PO) terkait supplier ini.</span>`),C("Hapus Supplier",i,async()=>{P("Menghapus...");try{p.suppliers=(p.suppliers||[]).filter(n=>String(n.id)!==String(e));let o=!1;(p.products||[]).forEach(n=>{String(n.supplierId)===String(e)&&(delete n.supplierId,o=!0)}),await A(o?["suppliers","products"]:["suppliers"]),g(),f("Supplier berhasil dihapus."),k()}catch(o){g(),console.error("Gagal menghapus supplier:",o),f("Gagal menghapus: "+o.message)}},"Hapus Permanen")};window.openSupplierDetailModal=(e,l="products")=>{D=e,b=l;const a=(p.suppliers||[]).find(n=>String(n.id)===String(e));if(!a)return f("Supplier tidak ditemukan!");const r=u("modal-supplier-detail"),i=u("modal-supplier-detail-box"),o=u("modal-supplier-detail-content");!r||!o||(j(a),r.classList.remove("hidden"),setTimeout(()=>{r.classList.remove("opacity-0"),i.classList.remove("scale-95")},10))};window.closeSupplierDetailModal=()=>{const e=u("modal-supplier-detail"),l=u("modal-supplier-detail-box");e&&(e.classList.add("opacity-0"),l&&l.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden")},200))};window.switchSupplierDetailTab=e=>{b=e;const t=(p.suppliers||[]).find(a=>String(a.id)===String(D));t&&j(t)};const j=e=>{if(!u("modal-supplier-detail-content"))return;const t=p.products||[],a=p.purchases||[],r=t.filter(c=>String(c.supplierId)===String(e.id)),i=a.filter(c=>String(c.supplierId)===String(e.id));i.sort((c,x)=>new Date(x.date||x.createdAt||0)-new Date(c.date||c.createdAt||0));const o=i.filter(c=>c.paymentType==="tempo"),n=o.reduce((c,x)=>{if(x.paymentStatus!=="lunas"){const v=(parseFloat(x.total)||0)-(parseFloat(x.amountPaid)||0);return c+(v>0?v:0)}return c},0),d=e.phone?T(e.phone):"";$("modal-supplier-detail-content",`
        <!-- HEADER MODAL: PROFIL SUPPLIER -->
        <div class="p-5 sm:p-7 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-start gap-4">
                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-2xl text-slate-700 dark:text-slate-200 shrink-0 font-black shadow-inner">
                        ${e.code?s(e.code.substring(0,3).toUpperCase()):'<i class="fa-solid fa-truck-field"></i>'}
                    </div>
                    <div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <h3 class="font-black text-lg sm:text-xl text-slate-800 dark:text-white tracking-tight">${s(e.name)}</h3>
                            ${e.code?`<span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">${s(e.code)}</span>`:""}
                        </div>
                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            ${e.salesName?`<span><i class="fa-solid fa-user-tie text-[var(--color-primary)] mr-1"></i>Sales: <b>${s(e.salesName)}</b></span>`:""}
                            ${d?`<a href="https://wa.me/${d}" target="_blank" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"><i class="fa-brands fa-whatsapp mr-1"></i>+${d}</a>`:""}
                            ${e.bankName&&e.bankAccount?`<span><i class="fa-solid fa-credit-card text-blue-500 mr-1"></i>${s(e.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-200">${s(e.bankAccount)}</b> a/n ${s(e.bankHolder||"-")}</span>`:""}
                        </div>
                        ${e.address?`<p class="text-xs text-slate-400 mt-1"><i class="fa-solid fa-location-dot text-rose-500 mr-1"></i>${s(e.address)}</p>`:""}
                    </div>
                </div>

                <div class="flex items-center gap-2 self-end sm:self-center">
                    <button onclick="window.quickCreatePOForSupplier('${e.id}')" class="px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-2 shadow-glow active:scale-95 transition-all">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Buat Order (PO)</span>
                    </button>
                    <button onclick="window.closeSupplierDetailModal()" class="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            <!-- TAB NAVIGASI MODAL -->
            <div class="flex items-center gap-2 mt-6 border-b border-slate-200 dark:border-slate-700">
                <button 
                    onclick="window.switchSupplierDetailTab('products')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 ${b==="products"?"border-[var(--color-primary)] text-[var(--color-primary)]":"border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}"
                >
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Katalog Barang Disuplai (${r.length})</span>
                </button>

                <button 
                    onclick="window.switchSupplierDetailTab('orders')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 ${b==="orders"?"border-[var(--color-primary)] text-[var(--color-primary)]":"border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}"
                >
                    <i class="fa-solid fa-cart-flatbed"></i>
                    <span>Riwayat Order PO (${i.length})</span>
                </button>

                <button 
                    onclick="window.switchSupplierDetailTab('debt')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 ${b==="debt"?"border-[var(--color-primary)] text-[var(--color-primary)]":"border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}"
                >
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Kartu Hutang Usaha ${n>0?`<span class="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black">${m(n)}</span>`:""}</span>
                </button>
            </div>
        </div>

        <!-- ISI KONTEN TAB -->
        <div class="p-5 sm:p-6">
            ${b==="products"?I(r,e):""}
            ${b==="orders"?R(i,e):""}
            ${b==="debt"?E(o,n,e):""}
        </div>
    `)},I=(e,l)=>e.length===0?`
            <div class="text-center py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mx-auto mb-3 text-slate-400">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Produk yang Dihubungkan</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">Saat Anda menambahkan atau mengedit produk di menu Katalog Produk, pilih <b>${s(l.name)}</b> pada field Rekanan/Supplier Asal.</p>
                <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('products');" class="mt-4 px-4 py-2 rounded-xl primary-bg-soft primary-text font-bold text-xs">
                    <i class="fa-solid fa-box-archive mr-1.5"></i> Buka Katalog Produk Toko
                </button>
            </div>
        `:`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Total <b>${e.length}</b> macam produk toko berasal dari supplier ini:</p>
                <button onclick="window.quickCreatePOForSupplier('${l.id}')" class="px-3 py-1.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs">
                    <i class="fa-solid fa-cart-plus text-xs"></i>
                    <span>Kulakan Ulang Produk Ini</span>
                </button>
            </div>

            <div class="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                ${e.map(t=>{const a=B(t,{size:"thumb"}),r=t.img?`<img src="${s(t.img)}" alt="${s(t.name)}" class="w-12 h-12 object-contain rounded-xl p-1 bg-white border border-slate-100 dark:border-slate-700" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-12 h-12" style="display:none">${a}</div>`:`<div class="w-12 h-12">${a}</div>`,i=t.variants&&t.variants.length?t.variants.reduce((d,c)=>d+(parseFloat(c.stock)||0),0):parseFloat(t.stock)||0,o=t.price&&t.hpp?t.price-t.hpp:0,n=t.price&&t.hpp&&t.hpp>0?Math.round(o/t.hpp*100):0;return`
                        <div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="shrink-0">${r}</div>
                                <div class="min-w-0">
                                    <h5 class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate">${s(t.name)}</h5>
                                    <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 flex-wrap">
                                        ${t.sku?`<span class="font-mono bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">SKU: ${s(t.sku)}</span>`:""}
                                        ${t.category?`<span>${s(t.category)}</span>`:""}
                                        <span class="font-bold ${i<=2?"text-rose-500":"text-slate-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${i}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between sm:justify-end gap-5 text-right pl-15 sm:pl-0">
                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Modal (HPP)</span>
                                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400">${t.hpp?m(t.hpp):'<span class="text-slate-300">-</span>'}</span>
                                </div>

                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Harga Jual</span>
                                    <span class="text-xs font-bold text-[var(--color-primary)]">${m(t.price)}</span>
                                </div>

                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Margin Laba</span>
                                    <span class="text-xs font-bold ${o>0?"text-emerald-500":"text-slate-400"}">${o>0?`+${m(o)} (${n}%)`:"-"}</span>
                                </div>

                                <button onclick="window.closeSupplierDetailModal(); if(window.oAEd) window.oAEd('products', '${t.id}');" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all" title="Edit Produk">
                                    <i class="fa-solid fa-pen text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        </div>
    `,R=(e,l)=>e.length===0?`
            <div class="text-center py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mx-auto mb-3 text-slate-400">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Order PO</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">Mulai buat surat pesanan kulakan (Purchase Order) untuk mencatat barang masuk, harga modal, dan termin pembayaran.</p>
                <button onclick="window.quickCreatePOForSupplier('${l.id}')" class="mt-4 px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs shadow-glow">
                    <i class="fa-solid fa-cart-flatbed mr-1.5"></i> Buat Order PO Pertama
                </button>
            </div>
        `:`
        <div class="space-y-3">
            ${e.map(t=>{const a={ordered:'<span class="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan</span>',received:'<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 text-[10px] font-bold border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>',completed:'<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>',cancelled:'<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Dibatalkan</span>'}[t.status||"ordered"],r=t.paymentType==="tempo"?`
                    <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                        Tempo ${t.tempoDays?`${t.tempoDays} Hari`:""} (${t.paymentStatus==="lunas"?"Lunas":"Belum Lunas"})
                    </span>
                `:`<span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase">${s(t.paymentType||"Cash")}</span>`;return`
                    <div class="card-modern p-4 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/40 transition-all rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${s(t.poNumber||t.id)}</span>
                                ${a}
                                ${r}
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-3">
                                <span><i class="fa-regular fa-calendar mr-1"></i>${M(t.date||t.createdAt)}</span>
                                <span><i class="fa-solid fa-box mr-1"></i>${(t.items||[]).length} Item Barang</span>
                            </p>
                        </div>

                        <div class="flex items-center justify-between sm:justify-end gap-4">
                            <div class="text-right">
                                <span class="block text-[9px] font-bold uppercase text-slate-400">Total Kulakan</span>
                                <span class="text-sm font-black text-slate-800 dark:text-slate-100">${m(t.total)}</span>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchaseDetailModal?.('${t.id}'); }, 200);" class="px-3 py-1.5 rounded-xl primary-bg-soft primary-text font-bold text-xs hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                                Lihat PO <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
                            </button>
                        </div>
                    </div>
                `}).join("")}
        </div>
    `,E=(e,l,t)=>{const a=e.filter(r=>(parseFloat(r.total)||0)-(parseFloat(r.amountPaid)||0)>0&&r.paymentStatus!=="lunas");return`
        <div class="space-y-4">
            <!-- RINGKASAN TOTAL HUTANG USAHA -->
            <div class="p-4 sm:p-5 rounded-2xl ${l>0?"bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60":"bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60"} flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <span class="block text-[10px] font-black uppercase tracking-widest ${l>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">Total Hutang Usaha Berjalan</span>
                    <p class="text-2xl font-black ${l>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} tracking-tight">${m(l)}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        ${l>0?`Ada <b>${a.length}</b> nota order pembelian tempo yang belum lunas ke supplier ini.`:"Semua tagihan pembelian ke supplier ini sudah lunas sempurna! ✨"}
                    </p>
                </div>

                ${t.bankAccount?`
                    <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs shrink-0">
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Rekening Tujuan Transfer:</span>
                        <p class="font-bold text-slate-800 dark:text-white mt-0.5">${s(t.bankName)}: <b class="font-mono text-base">${s(t.bankAccount)}</b></p>
                        <p class="text-[10px] text-slate-400">a/n ${s(t.bankHolder||t.name)}</p>
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
                `:a.map(r=>{const i=(parseFloat(r.total)||0)-(parseFloat(r.amountPaid)||0),o=parseFloat(r.amountPaid)||0,n=r.tempoDueDate?M(r.tempoDueDate):"-";return`
                        <div class="card-modern p-4 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${s(r.poNumber||r.id)}</span>
                                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-bold">Jatuh Tempo: ${n}</span>
                                </div>
                                <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    <span>Total: <b>${m(r.total)}</b></span>
                                    <span>Sudah Dibayar: <b class="text-emerald-500">${m(o)}</b></span>
                                    <span>Sisa: <b class="text-amber-500">${m(i)}</b></span>
                                </div>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchasePaymentModal?.('${r.id}'); }, 200);" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all">
                                <i class="fa-solid fa-money-bill-wave text-xs"></i>
                                <span>Bayar / Cicil</span>
                            </button>
                        </div>
                    `}).join("")}
            </div>
        </div>
    `};window.quickCreatePOForSupplier=e=>{window.closeSupplierDetailModal?.(),window.openAdminTab&&(window.openAdminTab("purchases"),setTimeout(()=>{typeof window.openCreatePOModal=="function"&&window.openCreatePOModal(e)},150))};window.renderSuppliersView=k;window.computeSupplierMetrics=L;export{L as computeSupplierMetrics,k as renderSuppliersView};

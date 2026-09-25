import{d as p}from"./module-member-CCTfnNON.js";import{a2 as S,a as o,a0 as f,t as i,e as d,b as L,u as P,i as I}from"./module-print-C2-MjUR_.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let C=localStorage.getItem("tokoputri_last_sync")||new Date().toISOString(),D=!1,u={products:0,categories:0,orders:0,customers:0,cashiers:0,shifts:0};const w=e=>{if(!e)return"-";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"}catch{return e}},N=async()=>{d("admin-content")&&(u.products=(o.products||[]).length,u.categories=(o.categories||[]).length,L("admin-content",`
    <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-3">
        <!-- 1. HERO BANNER: CLOUD REAL-TIME STATUS & SINKRONISASI (SEAMLESS THEME HARMONIZED) -->
        <div class="backup-sync-hero relative overflow-hidden p-5 sm:p-7 transition-all">
            <!-- Dekorasi latar belakang lembut bersahabat -->
            <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-10 blur-3xl" style="background: var(--color-primary)"></div>
            <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-5 blur-2xl" style="background: var(--color-primary)"></div>

            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div class="space-y-2">
                    <div class="flex items-center gap-2.5 flex-wrap">
                        <span id="sync-cloud-pill" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Cloud Real-Time Aktif
                        </span>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono" id="sync-last-time-label">
                            <i class="fa-solid fa-clock-rotate-left mr-1"></i>${w(C)}
                        </span>
                    </div>
                    <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                        <i class="fa-solid fa-cloud-arrow-up" style="color:var(--color-primary)"></i>
                        Pusat Data &amp; Sinkronisasi Cloud
                    </h2>
                    <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                        Pantau integritas data, lakukan sinkronisasi real-time dua arah, dan cadangkan ekosistem toko secara akurat ke penyimpanan aman.
                    </p>
                </div>

                <!-- Tombol Tarik Sinkronisasi Cepat -->
                <div class="flex items-center gap-2 shrink-0">
                    <button id="btn-force-sync" onclick="window.triggerRealtimeSync()" class="w-full md:w-auto px-5 py-3 rounded-2xl text-xs font-black text-white shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/5 dark:border-white/10 hover:opacity-95" style="background:var(--color-primary)">
                        <i id="btn-force-sync-icon" class="fa-solid fa-arrows-rotate text-sm"></i>
                        <span>Tarik Data Cloud Terbaru</span>
                    </button>
                </div>
            </div>

            <!-- GRID STATISTIK EKOSISTEM DATA -->
            <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Produk</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-products">${u.products}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kategori</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-categories">${u.categories}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Transaksi</p>
                    <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5" id="stat-sync-orders">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pelanggan</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 mt-0.5" id="stat-sync-customers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Akun Kasir</p>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5" id="stat-sync-cashiers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sesi Shift</p>
                    <p class="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400 mt-0.5" id="stat-sync-shifts">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
            </div>
        </div>

        <!-- 2. PILAR DUA: MESIN PENCADANGAN LENGKAP (COMPREHENSIVE BACKUP ENGINE) -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-box-archive"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-white">Pencadangan Data Presisi (Backup Ekosistem)</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Unduh data toko dalam format JSON terenkripsi sistem atau tabel akuntansi CSV</p>
                    </div>
                </div>
                <span class="hidden sm:inline-block px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px]">
                    Presisi Tinggi 100%
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <!-- Backup Lengkap JSON -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full" style="background: var(--color-primary)"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Full Database JSON</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Mencakup seluruh katalog produk, pesanan kasir, piutang, member, akun kasir, shift, dan pengaturan toko.
                        </p>
                    </div>
                    <button onclick="window.downloadFullBackupJSON()" class="w-full py-2.5 px-3 rounded-xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-file-code"></i>
                        <span>Unduh Backup Lengkap (.json)</span>
                    </button>
                </div>

                <!-- Ekspor CSV Produk & Stok -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Katalog Produk (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Tabel daftar produk, SKU/barcode, kategori, HPP modal, harga jual, harga grosir, dan stok fisik untuk Excel.
                        </p>
                    </div>
                    <button onclick="window.exportProductsCSV()" class="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-file-excel"></i>
                        <span>Ekspor Produk (.csv)</span>
                    </button>
                </div>

                <!-- Ekspor CSV Transaksi Penjualan -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Riwayat Penjualan (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Laporan transaksi kasir &amp; pesanan online, rincian pembayaran (Tunai/QRIS/Tempo), dan diskon untuk pembukuan.
                        </p>
                    </div>
                    <button onclick="window.exportOrdersCSV()" class="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        <span>Ekspor Transaksi (.csv)</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- 3. PILAR TIGA: PEMULIHAN AMAN (ZERO-RISK RESTORE & SAFETY ROLLBACK) -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
            <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-base shrink-0 aspect-square shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="text-sm font-black text-slate-900 dark:text-white leading-snug">Pemulihan Aman &amp; Proteksi Rollback</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-0.5">Validasi skema ketat &amp; perlindungan snapshot otomatis sebelum eksekusi</p>
                    </div>
                </div>
                <div id="safety-snapshot-badge" class="shrink-0"></div>
            </div>

            <!-- Upload Area & Proteksi -->
            <div class="p-3.5 sm:p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-850/70 border border-slate-200/90 dark:border-slate-700/80 space-y-3.5">
                <div class="flex items-start gap-2.5 sm:gap-3">
                    <div class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 aspect-square mt-0.5 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-shield-halved text-xs"></i>
                    </div>
                    <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-w-0">
                        <b class="text-slate-900 dark:text-white">Proteksi Keamanan Anti-Kehilangan Data:</b> Sistem otomatis membuat cadangan darurat (<i>Safety Snapshot</i>) dari data toko aktif tepat sebelum berkas cadangan dipulihkan. Anda dapat membatalkan dan mengembalikan data semula seketika dengan 1 klik <b>Rollback</b>.
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    <label class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl text-white font-black text-xs cursor-pointer shadow-xs active:scale-95 transition-all hover:brightness-105 flex items-center justify-center gap-1.5 sm:gap-2 border border-black/5 dark:border-white/10 min-w-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cloud-arrow-up text-xs sm:text-sm shrink-0"></i>
                        <span class="block sm:hidden truncate text-[11px]">Pilih File JSON</span>
                        <span class="hidden sm:inline truncate text-xs">Pilih Berkas Cadangan (.json)</span>
                        <input type="file" accept=".json,application/json" class="hidden" onchange="window.handleRestoreFileSelect(event)">
                    </label>

                    <button id="btn-safety-rollback" onclick="window.triggerSafetyRollback()" class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl font-black text-xs flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-xs border disabled:cursor-not-allowed disabled:bg-slate-100 disabled:dark:bg-slate-800/80 disabled:text-slate-400 disabled:dark:text-slate-500 disabled:border-slate-200/80 disabled:dark:border-slate-700/60 disabled:shadow-none bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 hover:bg-rose-100 dark:hover:bg-rose-900/40 active:scale-95 min-w-0" disabled>
                        <i class="fa-solid fa-rotate-left text-xs sm:text-sm shrink-0"></i>
                        <span class="block sm:hidden truncate text-[11px]">Rollback Data</span>
                        <span class="hidden sm:inline truncate text-xs">Rollback Data Toko</span>
                    </button>
                </div>
            </div>

            <!-- 4. QUICK SNAPSHOT LOKAL (INSTANT IN-DEVICE BACKUP) -->
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-floppy-disk text-slate-400 shrink-0"></i>
                    <span class="leading-snug"><b>Snapshot Cepat di Perangkat:</b> Simpan cadangan kilat ke memori browser tanpa unduh file</span>
                </div>
                <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <button onclick="window.saveQuickDeviceSnapshot()" class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.5)] text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 min-w-0">
                        <i class="fa-solid fa-camera text-xs sm:text-sm shrink-0" style="color:var(--color-primary)"></i>
                        <span class="font-bold text-[11px] sm:text-xs whitespace-nowrap">Simpan Cepat</span>
                    </button>
                    <button onclick="window.restoreQuickDeviceSnapshot()" class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:border-amber-400 text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 min-w-0">
                        <i class="fa-solid fa-clock-rotate-left text-xs sm:text-sm shrink-0 text-amber-500"></i>
                        <span class="font-bold text-[11px] sm:text-xs whitespace-nowrap">Pulihkan</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `),E(),B())},E=async()=>{try{p.collection("freshmart_orders").get().then(e=>{u.orders=e.size;const t=d("stat-sync-orders");t&&(t.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),p.collection("freshmart").doc("cms_data").collection("customers").get().then(e=>{u.customers=e.size;const t=d("stat-sync-customers");t&&(t.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),p.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().then(e=>{u.cashiers=e.size;const t=d("stat-sync-cashiers");t&&(t.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),p.collection("freshmart").doc("cms_data").collection("pos_shifts").get().then(e=>{u.shifts=e.size;const t=d("stat-sync-shifts");t&&(t.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{})}catch(e){console.warn("[SyncHub] Gagal memuat ringkasan statistik live:",e)}},B=()=>{const e=localStorage.getItem("tokoputri_safety_snapshot"),t=d("btn-safety-rollback"),r=d("safety-snapshot-badge");if(!e){t&&(t.disabled=!0),r&&(r.innerHTML="");return}try{const n=JSON.parse(e);t&&(t.disabled=!1),r&&(r.innerHTML=`
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-clock-rotate-left text-amber-500"></i>
                    Snapshot Aktif: ${new Date(n.timestamp).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}
                </span>`)}catch{t&&(t.disabled=!0)}},M=async()=>{if(D)return;D=!0;const e=d("btn-force-sync"),t=d("btn-force-sync-icon");t&&t.classList.add("fa-spin"),e&&e.classList.add("opacity-80","pointer-events-none"),S("Menarik & Menyinkronkan Data Cloud...");try{const r=await p.collection("freshmart").doc("cms_data").get();if(r.exists){const x=r.data()||{};Object.assign(o,x);try{localStorage.setItem("freshmart_cms_data_cache",JSON.stringify(x))}catch{}}const n=await p.collection("freshmart").doc("cms_data").collection("customers").get();o.customers=n.docs.map(x=>x.data()),u.customers=n.size;const l=await p.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).get();u.orders=l.size,C=new Date().toISOString(),localStorage.setItem("tokoputri_last_sync",C),u.products=(o.products||[]).length,u.categories=(o.categories||[]).length;const s=d("stat-sync-products");s&&(s.textContent=u.products);const a=d("stat-sync-categories");a&&(a.textContent=u.categories);const b=d("stat-sync-orders");b&&(b.textContent=u.orders.toLocaleString("id-ID"));const g=d("stat-sync-customers");g&&(g.textContent=u.customers.toLocaleString("id-ID"));const k=d("sync-last-time-label");k&&(k.innerHTML=`<i class="fa-solid fa-clock-rotate-left mr-1"></i>${w(C)}`),i("Semua data toko berhasil disinkronkan langsung dari Cloud Firestore!","success")}catch(r){console.error("[SyncHub] Gagal menarik pembaruan cloud:",r),i("Gagal menyinkronkan data cloud. Periksa koneksi internet Anda.","error")}finally{D=!1,f(),t&&t.classList.remove("fa-spin"),e&&e.classList.remove("opacity-80","pointer-events-none")}},F=async()=>{S("Mengumpulkan seluruh data ekosistem toko...");try{const[e,t,r,n,l]=await Promise.all([p.collection("freshmart_orders").get().catch(()=>({docs:[]})),p.collection("freshmart").doc("cms_data").collection("customers").get().catch(()=>({docs:[]})),p.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().catch(()=>({docs:[]})),p.collection("freshmart").doc("cms_data").collection("pos_shifts").get().catch(()=>({docs:[]})),p.collection("freshmart").doc("cms_data").collection("reviews").get().catch(()=>({docs:[]}))]),s=e.docs.map(c=>({_id:c.id,...c.data()})),a=t.docs.map(c=>({_id:c.id,...c.data()})),b=r.docs.map(c=>({_id:c.id,...c.data()})),g=n.docs.map(c=>({_id:c.id,...c.data()})),k=l.docs.map(c=>({_id:c.id,...c.data()})),x=new Date,h=x.toISOString().slice(0,10),v=`${String(x.getHours()).padStart(2,"0")}-${String(x.getMinutes()).padStart(2,"0")}`,_={_meta:{appName:"Toko Putri Super App",version:"1.9.24",backupType:"full_ecosystem",createdAt:x.toISOString(),exportedBy:window.isAdm?"Seller Admin":"Staff",stats:{productsCount:(o.products||[]).length,categoriesCount:(o.categories||[]).length,ordersCount:s.length,customersCount:a.length,cashiersCount:b.length,shiftsCount:g.length},checksum:btoa(`${h}-${o.products?.length||0}-${s.length}`).slice(0,16)},appData:{store:o.store||{},products:o.products||[],categories:o.categories||[],brands:o.brands||[],colors:o.colors||[],banners:o.banners||[],vouchers:o.vouchers||[],banks:o.banks||[],faqs:o.faqs||[],tax:o.tax||{},rewards:o.rewards||[],hasCashier:o.hasCashier||!1},orders:s,customers:a,cashiers:b,shifts:g,reviews:k},A=JSON.stringify(_,null,2),T=`backup_tokoputri_full_${h}_${v}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const c=btoa(unescape(encodeURIComponent(A)));window.AndroidNativeApp.saveOrShareFile(c,T,"application/json")}else{const c=new Blob([A],{type:"application/json;charset=utf-8;"}),j=URL.createObjectURL(c),y=document.createElement("a");y.href=j,y.download=T,document.body.appendChild(y),y.click(),y.remove(),setTimeout(()=>URL.revokeObjectURL(j),1e3)}f(),i(`Cadangan lengkap berhasil diunduh (${s.length} transaksi, ${o.products?.length||0} produk)!`,"success")}catch(e){f(),console.error("[BackupEngine] Gagal mengekspor data komprehensif:",e),i("Gagal membuat cadangan database toko: "+e.message,"error")}},m=e=>e==null?'""':`"${String(e).replace(/"/g,'""')}"`,$=()=>{try{const e=o.products||[];if(e.length===0){i("Belum ada data produk untuk diekspor!","warning");return}const t=["ID Produk","Nama Produk","Barcode / SKU","Kategori","Merek","Harga Modal (HPP Rp)","Harga Jual Toko (Rp)","Harga Grosir (Rp)","Minimal Grosir","Stok Saat Ini","Satuan","Deskripsi Singkat"],r=e.map(s=>[m(s.id||""),m(s.name||""),m(s.sku||s.barcode||""),m(s.category||"Umum"),m(s.brand||"-"),s.hpp||0,s.price||0,s.wholesalePrice||0,s.wholesaleMin||0,s.stock??0,m(s.unit||"pcs"),m((s.desc||"").replace(/(\r\n|\n|\r)/gm," "))]),n="\uFEFF"+[t.join(","),...r.map(s=>s.join(","))].join(`\r
`),l=`laporan_produk_tokoputri_${new Date().toISOString().slice(0,10)}.csv`;O(n,l),i(`Berhasil mengekspor ${e.length} produk ke CSV!`,"success")}catch(e){console.error("[CSVExport] Gagal ekspor produk:",e),i("Gagal mengekspor CSV produk","error")}},U=async()=>{S("Menyiapkan laporan transaksi CSV...");try{const e=await p.collection("freshmart_orders").orderBy("timestamp","desc").get();if(e.empty){f(),i("Belum ada data pesanan/transaksi untuk diekspor!","warning");return}const t=e.docs.map(a=>({id:a.id,...a.data()})),r=["No Invoice","Waktu Transaksi","Sumber Transaksi","Nama Kasir / Staf","Nama Pelanggan","No WhatsApp","Total Item","Subtotal (Rp)","Diskon (Rp)","Pajak / PPN (Rp)","Total Bayar (Rp)","Metode Pembayaran","Status Pesanan"],n=t.map(a=>{const b=a.timestamp?w(a.timestamp):"-",g=a.source==="pos"?"Kasir POS":"Pesanan Web",k=a.cashierName||(a.source==="pos"?"Kasir Toko":"Website"),x=a.customerName||(a.customer?a.customer.name:"Pelanggan Toko"),h=a.customerPhone||(a.customer?a.customer.phone:"-"),v=(a.items||[]).reduce((_,A)=>_+(A.qty||1),0);return[m(a.id||""),m(b),m(g),m(k),m(x),m(h),v,a.subtotal||a.total||0,a.discount||0,a.tax||0,a.total||0,m(a.paymentMethod||"Tunai"),m(a.status||"Selesai")]}),l="\uFEFF"+[r.join(","),...n.map(a=>a.join(","))].join(`\r
`),s=`laporan_transaksi_tokoputri_${new Date().toISOString().slice(0,10)}.csv`;O(l,s),f(),i(`Berhasil mengekspor ${t.length} data transaksi ke CSV!`,"success")}catch(e){f(),console.error("[CSVExport] Gagal ekspor pesanan:",e),i("Gagal mengekspor data transaksi: "+e.message,"error")}},O=(e,t)=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const r=btoa(unescape(encodeURIComponent(e)));window.AndroidNativeApp.saveOrShareFile(r,t,"text/csv")}else{const r=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(r),l=document.createElement("a");l.href=n,l.download=t,document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}},V=e=>{const t=e.target.files?.[0];if(!t)return;const r=new FileReader;r.onload=async n=>{try{const l=n.target.result,s=JSON.parse(l),a=!!(s._meta&&s.appData),b=!!(s.products&&Array.isArray(s.products));if(!a&&!b){i("Format berkas tidak dikenali! Pastikan berkas cadangan resmi Toko Putri (.json).","error");return}const k=((a?s.appData:s).products||[]).length,x=a&&s.orders?s.orders.length:0,h=a&&s.customers?s.customers.length:0,v=a&&s._meta?.createdAt?w(s._meta.createdAt):t.name;K({fileName:t.name,backupDate:v,productsCount:k,ordersCount:x,custCount:h,isFullBackup:a,backupDataPayload:s})}catch(l){console.error("[RestoreEngine] Gagal membaca berkas cadangan:",l),i("Berkas JSON rusak atau tidak dapat dibaca!","error")}finally{e.target.value=""}},r.readAsText(t)},K=({fileName:e,backupDate:t,productsCount:r,ordersCount:n,custCount:l,isFullBackup:s,backupDataPayload:a})=>{const b=d("modal-pre-restore-inspector");b&&b.remove();const g=`
    <div id="modal-pre-restore-inspector" class="fixed inset-0 z-[10005] flex items-center justify-center p-3.5 bg-black/70 backdrop-blur-xs fade-in">
        <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-lg overflow-hidden fade-in-scale">
            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/70 dark:bg-amber-950/30">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-xs">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Inspektur Pra-Pemulihan Data</h3>
                        <p class="text-[10px] text-amber-700 dark:text-amber-300 font-bold">Verifikasi ringkasan sebelum data diterapkan</p>
                    </div>
                </div>
                <button onclick="document.getElementById('modal-pre-restore-inspector').remove()" class="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-5 space-y-4 text-xs">
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Nama Berkas:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate max-w-[200px]">${I(e)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Waktu Cadangan:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100">${I(t)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Tipe Cadangan:</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">${s?"Full Ecosystem Backup":"Katalog Standar"}</span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 text-center">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Produk</p>
                        <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${r}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Transaksi</p>
                        <p class="text-base font-black text-emerald-500 mt-0.5">${n}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Member</p>
                        <p class="text-base font-black text-cyan-500 mt-0.5">${l}</p>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 shrink-0"></i>
                    <span>Sistem akan membuat <b>Safety Snapshot otomatis</b> dari data saat ini sebelum menerapkan berkas baru. Anda bebas membatalkan kapan pun.</span>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button onclick="document.getElementById('modal-pre-restore-inspector').remove()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button id="btn-execute-restore" class="px-5 py-2.5 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 flex items-center gap-1.5" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Ya, Pulihkan Sekarang</span>
                </button>
            </div>
        </div>
    </div>
    `;document.body.insertAdjacentHTML("beforeend",g);const k=d("btn-execute-restore");k&&(k.onclick=()=>{d("modal-pre-restore-inspector")?.remove(),R(a)})},R=async e=>{S("Membuat Safety Snapshot & Memulihkan Database...");try{const t={timestamp:new Date().toISOString(),appData:JSON.parse(JSON.stringify(o))};localStorage.setItem("tokoputri_safety_snapshot",JSON.stringify(t));const r=!!(e._meta&&e.appData),n=r?e.appData:e;if(Object.assign(o,n),typeof window.saveApp=="function"?await window.saveApp():await p.collection("freshmart").doc("cms_data").set(o,{merge:!0}),r&&e.customers&&Array.isArray(e.customers)){const l=p.batch(),s=p.collection("freshmart").doc("cms_data").collection("customers");e.customers.slice(0,100).forEach(a=>{if(a.phone||a._id){const b=String(a.phone||a._id);l.set(s.doc(b),a,{merge:!0})}}),await l.commit().catch(()=>{})}f(),i("Database toko berhasil dipulihkan secara akurat!","success"),setTimeout(()=>{N()},600)}catch(t){f(),console.error("[RestoreEngine] Gagal mengeksekusi restore:",t),i("Gagal memulihkan database toko: "+t.message,"error")}},G=async()=>{const e=localStorage.getItem("tokoputri_safety_snapshot");if(!e){i("Tidak ada riwayat snapshot keselamatan yang tersimpan!","warning");return}let t;try{t=JSON.parse(e)}catch{i("Snapshot keselamatan rusak!","error");return}if(await P("Batalkan & Rollback Data?",`Apakah Anda yakin ingin membatalkan pemulihan dan mengembalikan data toko ke snapshot tanggal ${w(t.timestamp)}?`)){S("Mengembalikan data ke kondisi semula (Rollback)...");try{Object.assign(o,t.appData),typeof window.saveApp=="function"?await window.saveApp():await p.collection("freshmart").doc("cms_data").set(o,{merge:!0}),localStorage.removeItem("tokoputri_safety_snapshot"),f(),i("Data toko telah berhasil dikembalikan ke kondisi semula!","success"),setTimeout(()=>{N()},600)}catch(n){f(),console.error("[RollbackEngine] Gagal rollback:",n),i("Gagal mengembalikan data: "+n.message,"error")}}},H=()=>{try{const e={timestamp:new Date().toISOString(),appData:JSON.parse(JSON.stringify(o))};localStorage.setItem("tokoputri_quick_snapshot",JSON.stringify(e)),i("Snapshot cepat berhasil disimpan di memori perangkat!","success")}catch{i("Memori lokal penuh, gagal menyimpan snapshot!","error")}},J=async()=>{const e=localStorage.getItem("tokoputri_quick_snapshot");if(!e){i("Belum ada snapshot cepat yang disimpan di perangkat ini!","warning");return}let t;try{t=JSON.parse(e)}catch{i("Snapshot kilat rusak!","error");return}await P("Terapkan Snapshot Cepat?",`Pulihkan data toko ke snapshot yang disimpan pada ${w(t.timestamp)}?`)&&R(t.appData)};window.renderBackupSyncView=N;window.triggerRealtimeSync=M;window.downloadFullBackupJSON=F;window.exportProductsCSV=$;window.exportOrdersCSV=U;window.handleRestoreFileSelect=V;window.triggerSafetyRollback=G;window.saveQuickDeviceSnapshot=H;window.restoreQuickDeviceSnapshot=J;export{F as downloadFullBackupJSON,U as exportOrdersCSV,$ as exportProductsCSV,V as handleRestoreFileSelect,N as renderBackupSyncView,J as restoreQuickDeviceSnapshot,H as saveQuickDeviceSnapshot,M as triggerRealtimeSync,G as triggerSafetyRollback};

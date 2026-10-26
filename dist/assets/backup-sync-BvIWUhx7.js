import{r as $,e as p,H as _,l as C,q as m,a as n,n as h,k as d,b as H,E as U,i as L,ai as K}from"./module-print-Bg0XtXGP.js";import{h as V}from"./module-admin-Dc2u6jhf.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-CuV1Qpjr.js";import"./module-member-kpsRtBOf.js";import"./module-faq-D0xZ0r6r.js";import"./vendor-sortable-DzmX_rHT.js";let R=localStorage.getItem("tokoputri_last_sync")||new Date().toISOString(),T=!1,l={products:0,categories:0,orders:0,customers:0,cashiers:0,shifts:0};const G=5*60*1e3;let f={timestamp:0,data:null};const v=t=>{if(!t)return"-";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"}catch{return t}},N=async()=>{p("admin-content")&&(l.products=(n.products||[]).length,l.categories=(n.categories||[]).length,H("admin-content",`
    <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-3">
        <!-- 1. HERO BANNER: CLOUD REAL-TIME STATUS & SINKRONISASI (SEAMLESS THEME HARMONIZED) -->
        <div class="backup-sync-hero relative overflow-hidden p-5 sm:p-7 transition-all rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div class="space-y-2">
                    <div class="flex items-center gap-2.5 flex-wrap">
                        <span id="sync-cloud-pill" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Cloud Real-Time Aktif
                        </span>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono" id="sync-last-time-label">
                            <i class="fa-solid fa-clock-rotate-left mr-1"></i>${v(R)}
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
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Produk</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-products">${l.products}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kategori</p>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-0.5" id="stat-sync-categories">${l.categories}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Transaksi</p>
                    <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5" id="stat-sync-orders">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pelanggan</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 mt-0.5" id="stat-sync-customers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Akun Kasir</p>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5" id="stat-sync-cashiers">
                        <i class="fa-solid fa-spinner fa-spin text-xs text-slate-400"></i>
                    </p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
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
                <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
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
                <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full" style="background: var(--color-primary)"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Katalog Produk (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Tabel daftar produk, SKU/barcode, kategori, HPP modal, harga jual, harga grosir, dan stok fisik untuk Excel.
                        </p>
                    </div>
                    <button onclick="window.exportProductsCSV()" class="w-full py-2.5 px-3 rounded-xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-file-excel"></i>
                        <span>Ekspor Produk (.csv)</span>
                    </button>
                </div>

                <!-- Ekspor CSV Transaksi Penjualan -->
                <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full" style="background: var(--color-primary)"></span>
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100">Riwayat Penjualan (.csv)</h4>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            Laporan transaksi kasir &amp; pesanan online, rincian pembayaran (Tunai/QRIS/Tempo), dan diskon untuk pembukuan.
                        </p>
                    </div>
                    <button onclick="window.exportOrdersCSV()" class="w-full py-2.5 px-3 rounded-xl text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
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
            <div class="p-3.5 sm:p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 space-y-3.5">
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
                    <button onclick="window.saveQuickDeviceSnapshot()" class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:border-[var(--color-primary)] text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 min-w-0">
                        <i class="fa-solid fa-camera text-xs sm:text-sm shrink-0" style="color:var(--color-primary)"></i>
                        <span class="font-bold text-[11px] sm:text-xs whitespace-nowrap">Simpan Cepat</span>
                    </button>
                    <button onclick="window.restoreQuickDeviceSnapshot()" class="h-11 sm:h-12 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:border-[var(--color-primary)] text-slate-700 dark:text-slate-200 transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 min-w-0">
                        <i class="fa-solid fa-clock-rotate-left text-xs sm:text-sm shrink-0" style="color:var(--color-primary)"></i>
                        <span class="font-bold text-[11px] sm:text-xs whitespace-nowrap">Pulihkan</span>
                    </button>
                </div>
            <!-- 5. ZONA BAHAYA: RESET KE SETELAN AWAL & PEMBERSIHAN DATA (KHUSUS OWNER) -->
            ${U()?`
            <div class="pt-4 border-t border-rose-200/60 dark:border-rose-900/40 space-y-2.5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-bold">
                        <i class="fa-solid fa-triangle-exclamation shrink-0"></i>
                        <span>Zona Bahaya: Reset ke Setelan Awal &amp; Pembersihan Data</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">Khusus Owner</span>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl sm:rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50">
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        Bersihkan data transaksi uji coba atau kembalikan seluruh database ke setelan awal secara aman dengan cadangan darurat otomatis.
                    </p>
                    <button onclick="window.openFactoryResetModal && window.openFactoryResetModal()" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-all shadow-xs shrink-0 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap">
                        <i class="fa-solid fa-rotate-left text-xs"></i>
                        <span>Reset ke Setelan Awal</span>
                    </button>
                </div>
            </div>
            `:""}
        </div>
    </div>
    `),J(),z())},J=async()=>{const t=Date.now();if(f.data&&t-f.timestamp<G){const e=f.data,a=p("stat-sync-orders"),o=p("stat-sync-customers"),i=p("stat-sync-cashiers"),s=p("stat-sync-shifts");a&&(a.textContent=e.orders.toLocaleString("id-ID")),o&&(o.textContent=e.customers.toLocaleString("id-ID")),i&&(i.textContent=e.cashiers.toLocaleString("id-ID")),s&&(s.textContent=e.shifts.toLocaleString("id-ID")),Object.assign(l,e);return}try{m.collection("freshmart_orders").get().then(e=>{l.orders=e.size,f.data={...l},f.timestamp=Date.now();const a=p("stat-sync-orders");a&&(a.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),m.collection("freshmart").doc("cms_data").collection("customers").get().then(e=>{l.customers=e.size,f.data={...l},f.timestamp=Date.now();const a=p("stat-sync-customers");a&&(a.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),m.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().then(e=>{l.cashiers=e.size,f.data={...l},f.timestamp=Date.now();const a=p("stat-sync-cashiers");a&&(a.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{}),m.collection("freshmart").doc("cms_data").collection("pos_shifts").get().then(e=>{l.shifts=e.size,f.data={...l},f.timestamp=Date.now();const a=p("stat-sync-shifts");a&&(a.textContent=e.size.toLocaleString("id-ID"))}).catch(()=>{})}catch(e){console.warn("[SyncHub] Gagal memuat ringkasan statistik live:",e)}},z=()=>{const t=localStorage.getItem("tokoputri_safety_snapshot"),e=p("btn-safety-rollback"),a=p("safety-snapshot-badge");if(!t){e&&(e.disabled=!0),a&&(a.innerHTML="");return}try{const o=JSON.parse(t);e&&(e.disabled=!1),a&&(a.innerHTML=`
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-clock-rotate-left text-amber-500"></i>
                    Snapshot Aktif: ${new Date(o.timestamp).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}
                </span>`)}catch{e&&(e.disabled=!0)}},q=async()=>{if(T)return;T=!0;const t=p("btn-force-sync"),e=p("btn-force-sync-icon");e&&e.classList.add("fa-spin"),t&&t.classList.add("opacity-80","pointer-events-none"),C("Menarik & Menyinkronkan Data Cloud...");try{const a=await m.collection("freshmart").doc("cms_data").get();if(a.exists){const g=a.data()||{};Object.assign(n,g);try{localStorage.setItem("freshmart_cms_data_cache",JSON.stringify(g))}catch{}}const o=await m.collection("freshmart").doc("cms_data").collection("customers").get();n.customers=o.docs.map(g=>g.data()),l.customers=o.size;const i=await m.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).get();l.orders=i.size,R=new Date().toISOString(),localStorage.setItem("tokoputri_last_sync",R),l.products=(n.products||[]).length,l.categories=(n.categories||[]).length;const s=p("stat-sync-products");s&&(s.textContent=l.products);const c=p("stat-sync-categories");c&&(c.textContent=l.categories);const x=p("stat-sync-orders");x&&(x.textContent=l.orders.toLocaleString("id-ID"));const r=p("stat-sync-customers");r&&(r.textContent=l.customers.toLocaleString("id-ID"));const b=p("sync-last-time-label");b&&(b.innerHTML=`<i class="fa-solid fa-clock-rotate-left mr-1"></i>${v(R)}`),d("Semua data toko berhasil disinkronkan langsung dari Cloud Firestore!","success")}catch(a){console.error("[SyncHub] Gagal menarik pembaruan cloud:",a),d("Gagal menyinkronkan data cloud. Periksa koneksi internet Anda.","error")}finally{T=!1,h(),e&&e.classList.remove("fa-spin"),t&&t.classList.remove("opacity-80","pointer-events-none")}},Q=async()=>{const t=l.orders||"?",e=l.customers||"?";if(await _("Unduh Backup Lengkap (.json)",`Proses ini akan membaca seluruh data toko dari Firestore (estimasi ±${t} pesanan, ±${e} pelanggan, produk, kasir, shift, ulasan) sekaligus.

Gunakan fitur ini dengan bijak — hindari menekan berulang kali dalam waktu singkat.`,"Lanjutkan Backup","Batal")){C("Mengumpulkan seluruh data ekosistem toko...");try{const[o,i,s,c,x]=await Promise.all([m.collection("freshmart_orders").get().catch(()=>({docs:[]})),m.collection("freshmart").doc("cms_data").collection("customers").get().catch(()=>({docs:[]})),m.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().catch(()=>({docs:[]})),m.collection("freshmart").doc("cms_data").collection("pos_shifts").get().catch(()=>({docs:[]})),m.collection("freshmart").doc("cms_data").collection("reviews").get().catch(()=>({docs:[]}))]),r=o.docs.map(u=>({_id:u.id,...u.data()})),b=i.docs.map(u=>({_id:u.id,...u.data()})),g=s.docs.map(u=>({_id:u.id,...u.data()})),w=c.docs.map(u=>({_id:u.id,...u.data()})),S=x.docs.map(u=>({_id:u.id,...u.data()})),y=new Date,D=y.toISOString().slice(0,10),j=`${String(y.getHours()).padStart(2,"0")}-${String(y.getMinutes()).padStart(2,"0")}`,P={_meta:{appName:"Toko Putri Super App",version:"1.9.49",backupType:"full_ecosystem",createdAt:y.toISOString(),exportedBy:window.isAdm?"Seller Admin":"Staff",stats:{productsCount:(n.products||[]).length,categoriesCount:(n.categories||[]).length,ordersCount:r.length,customersCount:b.length,cashiersCount:g.length,shiftsCount:w.length},checksum:btoa(`${D}-${n.products?.length||0}-${r.length}`).slice(0,16)},appData:{store:n.store||{},products:n.products||[],categories:n.categories||[],brands:n.brands||[],colors:n.colors||[],banners:n.banners||[],vouchers:n.vouchers||[],banks:n.banks||[],faqs:n.faqs||[],tax:n.tax||{},rewards:n.rewards||[],hasCashier:n.hasCashier||!1},orders:r,customers:b,cashiers:g,shifts:w,reviews:S},I=JSON.stringify(P,null,2),O=`backup_tokoputri_full_${D}_${j}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const u=btoa(unescape(encodeURIComponent(I)));window.AndroidNativeApp.saveOrShareFile(u,O,"application/json")}else{const u=new Blob([I],{type:"application/json;charset=utf-8;"}),E=URL.createObjectURL(u),A=document.createElement("a");A.href=E,A.download=O,document.body.appendChild(A),A.click(),A.remove(),setTimeout(()=>URL.revokeObjectURL(E),1e3)}h(),d(`Cadangan lengkap berhasil diunduh (${r.length} transaksi, ${n.products?.length||0} produk)!`,"success")}catch(o){h(),console.error("[BackupEngine] Gagal mengekspor data komprehensif:",o),d("Gagal membuat cadangan database toko: "+o.message,"error")}}},k=t=>t==null?'""':`"${String(t).replace(/"/g,'""')}"`,W=()=>{try{const t=n.products||[];if(t.length===0){d("Belum ada data produk untuk diekspor!","warning");return}const e=["ID Produk","Nama Produk","Barcode / SKU","Kategori","Merek","Harga Modal (HPP Rp)","Harga Jual Toko (Rp)","Harga Grosir (Rp)","Minimal Grosir","Stok Saat Ini","Satuan","Deskripsi Singkat"],a=t.map(s=>[k(s.id||""),k(s.name||""),k(s.sku||s.barcode||""),k(s.category||"Umum"),k(s.brand||"-"),s.hpp||0,s.price||0,s.wholesalePrice||0,s.wholesaleMin||0,s.stock??0,k(s.unit||"pcs"),k((s.desc||"").replace(/(\r\n|\n|\r)/gm," "))]),o="\uFEFF"+[e.join(","),...a.map(s=>s.join(","))].join(`\r
`),i=`laporan_produk_tokoputri_${new Date().toISOString().slice(0,10)}.csv`;M(o,i),d(`Berhasil mengekspor ${t.length} produk ke CSV!`,"success")}catch(t){console.error("[CSVExport] Gagal ekspor produk:",t),d("Gagal mengekspor CSV produk","error")}},Z=async()=>{const t=l.orders||"?";if(await _("Ekspor Riwayat Penjualan (.csv)",`Proses ini akan membaca seluruh riwayat transaksi dari Firestore (estimasi ±${t} baris data) untuk diekspor ke file CSV.

Gunakan fitur ini dengan bijak — hindari mengekspor berulang kali dalam waktu singkat.`,"Lanjutkan Ekspor","Batal")){C("Menyiapkan laporan transaksi CSV...");try{const a=await m.collection("freshmart_orders").orderBy("timestamp","desc").get();if(a.empty){h(),d("Belum ada data pesanan/transaksi untuk diekspor!","warning");return}const o=a.docs.map(r=>({id:r.id,...r.data()})),i=["No Invoice","Waktu Transaksi","Sumber Transaksi","Nama Kasir / Staf","Nama Pelanggan","No WhatsApp","Total Item","Subtotal (Rp)","Diskon (Rp)","Pajak / PPN (Rp)","Total Bayar (Rp)","Metode Pembayaran","Status Pesanan"],s=o.map(r=>{const b=r.timestamp?v(r.timestamp):"-",g=r.source==="pos"?"Kasir POS":"Pesanan Web",w=r.cashierName||(r.source==="pos"?"Kasir Toko":"Website"),S=r.customerName||(r.customer?r.customer.name:"Pelanggan Toko"),y=r.customerPhone||(r.customer?r.customer.phone:"-"),D=(r.items||[]).reduce((j,P)=>j+(P.qty||1),0);return[k(r.id||""),k(b),k(g),k(w),k(S),k(y),D,r.subtotal||r.total||0,r.discount||0,r.tax||0,r.total||0,k(r.paymentMethod||"Tunai"),k(r.status||"Selesai")]}),c="\uFEFF"+[i.join(","),...s.map(r=>r.join(","))].join(`\r
`),x=`laporan_transaksi_tokoputri_${new Date().toISOString().slice(0,10)}.csv`;M(c,x),h(),d(`Berhasil mengekspor ${o.length} data transaksi ke CSV!`,"success")}catch(a){h(),console.error("[CSVExport] Gagal ekspor pesanan:",a),d("Gagal mengekspor data transaksi: "+a.message,"error")}}},M=(t,e)=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const a=btoa(unescape(encodeURIComponent(t)));window.AndroidNativeApp.saveOrShareFile(a,e,"text/csv")}else{const a=new Blob([t],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}},Y=t=>{const e=t.target.files?.[0];if(!e)return;const a=new FileReader;a.onload=async o=>{try{const i=o.target.result,s=JSON.parse(i),c=!!(s._meta&&s.appData),x=!!(s.products&&Array.isArray(s.products));if(!c&&!x){d("Format berkas tidak dikenali! Pastikan berkas cadangan resmi Toko Putri (.json).","error");return}const b=((c?s.appData:s).products||[]).length,g=c&&s.orders?s.orders.length:0,w=c&&s.customers?s.customers.length:0,S=c&&s._meta?.createdAt?v(s._meta.createdAt):e.name;X({fileName:e.name,backupDate:S,productsCount:b,ordersCount:g,custCount:w,isFullBackup:c,backupDataPayload:s})}catch(i){console.error("[RestoreEngine] Gagal membaca berkas cadangan:",i),d("Berkas JSON rusak atau tidak dapat dibaca!","error")}finally{t.target.value=""}},a.readAsText(e)},B=(t=!1)=>{$("preRestore",t,()=>{const e=p("modal-pre-restore-inspector");e&&e.remove()})};typeof window<"u"&&(window.closePreRestoreModal=B);const X=({fileName:t,backupDate:e,productsCount:a,ordersCount:o,custCount:i,isFullBackup:s,backupDataPayload:c})=>{const x=p("modal-pre-restore-inspector");x&&x.remove();const r=`
    <div id="modal-pre-restore-inspector" class="fixed inset-0 z-[10005] flex items-center justify-center p-3.5 bg-black/80 fade-in">
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
                <button onclick="window.closePreRestoreModal && window.closePreRestoreModal()" class="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-5 space-y-4 text-xs">
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Nama Berkas:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100 truncate max-w-[200px]">${L(t)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Waktu Cadangan:</span>
                        <span class="font-bold text-slate-800 dark:text-slate-100">${L(e)}</span>
                    </div>
                    <div class="flex justify-between items-center text-slate-500">
                        <span>Tipe Cadangan:</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400">${s?"Full Ecosystem Backup":"Katalog Standar"}</span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 text-center">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Produk</p>
                        <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${a}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Transaksi</p>
                        <p class="text-base font-black text-emerald-500 mt-0.5">${o}</p>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                        <p class="text-[9px] uppercase font-bold text-slate-400">Member</p>
                        <p class="text-base font-black text-cyan-500 mt-0.5">${i}</p>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 shrink-0"></i>
                    <span>Sistem akan membuat <b>Safety Snapshot otomatis</b> dari data saat ini sebelum menerapkan berkas baru. Anda bebas membatalkan kapan pun.</span>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button onclick="window.closePreRestoreModal && window.closePreRestoreModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button id="btn-execute-restore" class="px-5 py-2.5 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95 flex items-center gap-1.5" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Ya, Pulihkan Sekarang</span>
                </button>
            </div>
        </div>
    </div>
    `;document.body.insertAdjacentHTML("beforeend",r),K("preRestore");const b=p("btn-execute-restore");b&&(b.onclick=()=>{B(),F(c)})},F=async t=>{C("Membuat Safety Snapshot & Memulihkan Database...");try{const e={timestamp:new Date().toISOString(),appData:JSON.parse(JSON.stringify(n))};localStorage.setItem("tokoputri_safety_snapshot",JSON.stringify(e));const a=!!(t._meta&&t.appData),o=a?t.appData:t;if(Object.assign(n,o),typeof window.saveApp=="function"?await window.saveApp():await m.collection("freshmart").doc("cms_data").set(n,{merge:!0}),a&&t.customers&&Array.isArray(t.customers)){const i=m.batch(),s=m.collection("freshmart").doc("cms_data").collection("customers");t.customers.slice(0,100).forEach(c=>{if(c.phone||c._id){const x=String(c.phone||c._id);i.set(s.doc(x),c,{merge:!0})}}),await i.commit().catch(()=>{})}h(),d("Database toko berhasil dipulihkan secara akurat!","success"),setTimeout(()=>{N()},600)}catch(e){h(),console.error("[RestoreEngine] Gagal mengeksekusi restore:",e),d("Gagal memulihkan database toko: "+e.message,"error")}},ee=async()=>{const t=localStorage.getItem("tokoputri_safety_snapshot");if(!t){d("Tidak ada riwayat snapshot keselamatan yang tersimpan!","warning");return}let e;try{e=JSON.parse(t)}catch{d("Snapshot keselamatan rusak!","error");return}if(await _("Batalkan & Rollback Data?",`Apakah Anda yakin ingin membatalkan pemulihan dan mengembalikan data toko ke snapshot tanggal ${v(e.timestamp)}?`)){C("Mengembalikan data ke kondisi semula (Rollback)...");try{Object.assign(n,e.appData),typeof window.saveApp=="function"?await window.saveApp():await m.collection("freshmart").doc("cms_data").set(n,{merge:!0}),localStorage.removeItem("tokoputri_safety_snapshot"),h(),d("Data toko telah berhasil dikembalikan ke kondisi semula!","success"),setTimeout(()=>{N()},600)}catch(o){h(),console.error("[RollbackEngine] Gagal rollback:",o),d("Gagal mengembalikan data: "+o.message,"error")}}},te=()=>{try{const t={timestamp:new Date().toISOString(),appData:JSON.parse(JSON.stringify(n))};localStorage.setItem("tokoputri_quick_snapshot",JSON.stringify(t)),d("Snapshot cepat berhasil disimpan di memori perangkat!","success")}catch{d("Memori lokal penuh, gagal menyimpan snapshot!","error")}},ae=async()=>{const t=localStorage.getItem("tokoputri_quick_snapshot");if(!t){d("Belum ada snapshot cepat yang disimpan di perangkat ini!","warning");return}let e;try{e=JSON.parse(t)}catch{d("Snapshot kilat rusak!","error");return}await _("Terapkan Snapshot Cepat?",`Pulihkan data toko ke snapshot yang disimpan pada ${v(e.timestamp)}?`)&&F(e.appData)};window.renderBackupSyncView=N;window.triggerRealtimeSync=q;window.downloadFullBackupJSON=Q;window.exportProductsCSV=W;window.exportOrdersCSV=Z;window.handleRestoreFileSelect=Y;window.triggerSafetyRollback=ee;window.saveQuickDeviceSnapshot=te;window.restoreQuickDeviceSnapshot=ae;window.openFactoryResetModal=V;export{B as closePreRestoreModal,Q as downloadFullBackupJSON,Z as exportOrdersCSV,W as exportProductsCSV,Y as handleRestoreFileSelect,N as renderBackupSyncView,ae as restoreQuickDeviceSnapshot,te as saveQuickDeviceSnapshot,q as triggerRealtimeSync,ee as triggerSafetyRollback};

import{e as K,t as rt,f as s,a9 as D,a7 as j,v as N,b as T,l as C,a as u,i as $,g as H}from"./module-print-Bfr9huPI.js";import{o as G,p as O,q,v as lt,w as _,M as E,x as ot}from"./module-admin-osRqGjb0.js";import{computePurchaseMetrics as J}from"./purchases-b7TxvE7M.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-Cd7YFais.js";import"./module-faq-DYTnXqpq.js";let y="executive",k=new Date().getFullYear(),h=0,Rt="month",R="all",M="all",jt="all",I="",A=[],B=[],V="";const L=[{key:"gaji",label:"Gaji & Tunjangan Staf",icon:"fa-user-tie",color:"blue"},{key:"listrik",label:"Listrik, Air & Wifi Toko",icon:"fa-bolt",color:"amber"},{key:"sewa",label:"Sewa Ruko / Tempat Usaha",icon:"fa-shop",color:"purple"},{key:"transport",label:"Bensin & Transportasi",icon:"fa-van-shuttle",color:"emerald"},{key:"kemasan",label:"Kemasan / Lakban / Plastik",icon:"fa-box",color:"orange"},{key:"perawatan",label:"Pemeliharaan Toko & Alat",icon:"fa-screwdriver-wrench",color:"cyan"},{key:"lainnya",label:"Biaya Operasional Lainnya",icon:"fa-receipt",color:"slate"}],W=e=>{if(!e)return null;let r=null;return e.timestamp?.toDate?r=e.timestamp.toDate():e.createdAt?.toDate?r=e.createdAt.toDate():e.dateMs?r=new Date(e.dateMs):e.dateString?r=new Date(e.dateString):typeof e.timestamp=="number"?r=new Date(e.timestamp):typeof e.timestamp=="string"?r=new Date(e.timestamp):typeof e.createdAt=="string"&&(r=new Date(e.createdAt)),r&&!isNaN(r.getTime())?r:null},F=async(e=!1)=>{const r=`${k}-${h}`;if(!e&&V===r&&A.length>0)return{orders:A,piutang:B};A=[],B=[];try{(await C.collection("freshmart_orders").orderBy("timestamp","desc").limit(2e3).get().catch(async()=>await C.collection("freshmart_orders").limit(2e3).get())).forEach(i=>{const o=i.data();if(o.status==="Dibatalkan"||o.status==="Test")return;const l=W(o);if(!l)return;const p=l.getFullYear(),g=l.getMonth()+1;p===k&&(h!==0&&g!==h||A.push(o))}),(await C.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(i=>{B.push(i.data())}),V=r}catch(n){console.error("[ReportsHub] Gagal memuat data transaksi:",n),N("Gagal memuat data transaksi laporan: "+n.message)}return{orders:A,piutang:B}},Y=()=>{let e=0,r=0,n=0,a=0,d=A.length;return A.forEach(i=>{const o=i.payment?.dppAmount!==void 0&&i.payment?.dppAmount!==null?parseFloat(i.payment.dppAmount):parseFloat(i.payment?.subtotal)||0;e+=o,r+=parseFloat(i.payment?.ppnAmount)||0,a+=parseFloat(i.payment?.productDiscount)||0,(i.items||[]).forEach(l=>{const p=l.hpp!==void 0&&l.hpp!==null?parseFloat(l.hpp):q(l)||0;n+=(parseFloat(p)||0)*(parseFloat(l.qty)||1)})}),{omset:e,ppn:r,hpp:n,disc:a,orderCount:d}},Q=()=>{const e=u.taxSettings?.expenseBreakdown||{},r=u.taxSettings?.monthlyExpenses||{},n=h===0?Array.from({length:12},(d,i)=>i+1):[h],a={total:0,categories:{}};return L.forEach(d=>{a.categories[d.key]=0}),n.forEach(d=>{const i=`${k}-${d}`,o=e[i];if(o)L.forEach(l=>{a.categories[l.key]+=parseFloat(o[l.key])||0}),a.total+=parseFloat(r[i])||0;else{const l=parseFloat(r[i])||0;a.total+=l,a.categories.lainnya+=l}}),a},z=async(e=null)=>{e&&(y=e),K("admin-content")&&(T("admin-content",`
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `),await Promise.all([G(k),F()]),S())},S=()=>{const e=Array.from({length:6},(a,d)=>new Date().getFullYear()-4+d);h===0?`${k}`:`${E[h-1]}${k}`;const n=[{k:"executive",l:"Ringkasan & Laba Rugi",i:"fa-chart-pie",sub:"P&L Statement"},{k:"sales",l:"Penjualan & Kasir",i:"fa-chart-line",sub:"Omset & Kas"},{k:"stock",l:"Stok & Aset Gudang",i:"fa-boxes-stacked",sub:"Valuasi Inventori"},{k:"debts",l:"Utang & Piutang",i:"fa-scale-balanced",sub:"AP & AR Hub"},{k:"expenses",l:"Biaya Operasional",i:"fa-money-bill-transfer",sub:"Beban Toko"},{k:"tax",l:"Perpajakan RI 2026",i:"fa-file-invoice-dollar",sub:"PPN & PPh Final"},{k:"balance",l:"Neraca Keuangan",i:"fa-scale-unbalanced",sub:"Aset & Modal"}].map(a=>{const d=y===a.k;return`
            <button type="button" onclick="switchReportTab('${a.k}')" class="group flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 ${d?"bg-[var(--color-primary)] text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]"}">
                <i class="fa-solid ${a.i} text-xs ${d?"text-white":"text-slate-400 group-hover:text-[var(--color-primary)]"}"></i>
                <span>${a.l}</span>
            </button>
        `}).join("");T("admin-content",`
        <div class="space-y-6">
            <!-- 1. HEADER KONTROL PUSAT LAPORAN TERPADU -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div class="flex items-center gap-3.5">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-chart-pie text-xl"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h1 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">Pusat Laporan &amp; Keuangan Terpadu</h1>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">Live Sync</span>
                            </div>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                                Laporan Penjualan, Valuasi Stok, Utang Piutang, Biaya Operasional, &amp; Kepatuhan Pajak RI 2026
                            </p>
                        </div>
                    </div>

                    <!-- Global Filter Bar -->
                    <div class="flex flex-wrap items-center gap-2">
                        <!-- Filter Bulan -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                            <i class="fa-solid fa-calendar-day text-xs text-slate-400 ml-2"></i>
                            <select onchange="changeReportMonth(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1.5 pr-3 pl-1 focus:outline-hidden cursor-pointer">
                                <option value="0" ${h===0?"selected":""}>Setahun Penuh</option>
                                ${E.map((a,d)=>`<option value="${d+1}" ${h===d+1?"selected":""}>${a}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Filter Tahun -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                            <i class="fa-solid fa-calendar text-xs text-slate-400 ml-2"></i>
                            <select onchange="changeReportYear(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1.5 pr-3 pl-1 focus:outline-hidden cursor-pointer">
                                ${e.map(a=>`<option value="${a}" ${a===k?"selected":""}>${a}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Tombol Refresh Data -->
                        <button type="button" onclick="refreshReportData()" class="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer active:scale-95 flex items-center gap-1.5" title="Muat Ulang Data Terbaru">
                            <i class="fa-solid fa-arrows-rotate text-xs"></i>
                            <span class="hidden sm:inline">Segarkan</span>
                        </button>

                        <!-- Tombol Cetak Dokumen A4 -->
                        <button type="button" onclick="openReportCurrentDocPreview()" class="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center gap-2" title="Cetak Lembar Resmi A4 / PDF">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span>Cetak A4</span>
                        </button>
                    </div>
                </div>

                <!-- Tab Pill Navigation -->
                <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 sm:gap-2 overflow-x-auto custom-scrollbar pb-1">
                    ${n}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `),nt()},X=e=>{y=e,S()},Z=async e=>{k=parseInt(e,10),D("Memuat data tahun "+k+"..."),await Promise.all([G(k),F(!0)]),j(),S()},tt=async e=>{h=parseInt(e,10),D("Memuat data bulan..."),await F(!0),j(),S()},et=async()=>{D("Menyinkronkan data terbaru..."),await Promise.all([G(k),F(!0)]),j(),N("Data laporan berhasil disegarkan!"),S()},nt=()=>{K("report-hub-content")&&(y==="executive"?dt():y==="sales"?it():y==="stock"?U():y==="debts"?bt():y==="expenses"?ut():y==="tax"?kt():y==="balance"&&vt())},dt=()=>{const e=Y(),r=h===0?`Tahun ${k}`:`${E[h-1]} ${k}`,n=e.omset,a=e.disc,d=n-a,i=e.hpp,o=d-i,l=Q().total,p=o-l,g=u.taxSettings?.taxScheme||"umkm_final";let f=0,v="PPh Final UMKM 0,5% (PP 55/2022)";if(g==="umkm_final")f=Math.round(n*.005);else if(g==="badan_normal")f=p>0?Math.round(p*.22):0,v="PPh Badan Normal 22% (UU HPP)";else{const m=parseFloat(u.taxSettings?.customTaxRate)||.5;f=p>0?Math.round(p*(m/100)):0,v=`PPh Custom (${m}%)`}const t=p-f,x=n>0?(o/n*100).toFixed(1):"0.0",c=n>0?(t/n*100).toFixed(1):"0.0",b=n>0?(l/n*100).toFixed(1):"0.0";T("report-hub-content",`
        <div class="space-y-6">
            ${e.orderCount===0?`
            <!-- BANNER STATUS INFORMASI TRANSAKSI KOSONG -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 text-sm">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-amber-900 dark:text-amber-200">Belum ada transaksi penjualan selesai pada ${r}</p>
                        <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5">Nilai Rp 0 adalah status riil database saat ini. Begitu transaksi kasir POS atau pesanan web tercatat, omzet dan laba akan terakumulasi otomatis.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button type="button" onclick="switchReportTab('stock')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700/80 text-amber-800 dark:text-amber-200 text-xs font-bold hover:bg-amber-50 transition-all cursor-pointer">
                        <i class="fa-solid fa-boxes-stacked mr-1"></i> Cek Valuasi Stok
                    </button>
                    <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('pos')" class="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer">
                        <i class="fa-solid fa-cash-register mr-1"></i> Buka Kasir POS
                    </button>
                </div>
            </div>`:""}

            <!-- 4 KARTU BENTO UTAMA KESEHATAN FINANSIAL -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- 1. Omset Penjualan -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(n)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${e.orderCount} transaksi</span>
                        <span class="text-rose-500 font-bold">Disc: ${s(a)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${s(o)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${s(i)}</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">Margin ${x}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Operasional</span>
                            <span class="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${s(l)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Beban toko</span>
                        <span class="text-slate-500 font-bold">${b}% omset</span>
                    </div>
                </div>

                <!-- 4. Laba Bersih Akhir -->
                <div class="card-modern p-4 sm:p-5 border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/30 dark:bg-emerald-950/15 flex flex-col justify-between col-span-2 lg:col-span-1">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Laba Bersih Riil</span>
                            <span class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-crown"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-emerald-700 dark:text-emerald-400 truncate">${s(t)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between text-[10px]">
                        <span class="text-emerald-600 dark:text-emerald-500 font-medium">Net Profit</span>
                        <span class="font-black text-emerald-700 dark:text-emerald-300">${c}%</span>
                    </div>
                </div>
            </div>

            <!-- LEMBAR LAPORAN LABA RUGI RESMI (P&L BREAKDOWN) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Laporan Laba Rugi Komprehensif — ${r}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Penetapan pendapatan, beban pokok penjualan, beban operasional &amp; laba bersih</p>
                    </div>
                    <button type="button" onclick="openTaxDocPreview('income')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
                        <i class="fa-solid fa-print text-xs"></i> Cetak Laba Rugi
                    </button>
                </div>

                <div class="p-4 sm:p-6 space-y-4">
                    <!-- 1. PENDAPATAN -->
                    <div class="space-y-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">1. Pendapatan Penjualan</p>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Penjualan Bruto (${e.orderCount} pesanan)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(n)}</span>
                        </div>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${s(a)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white">${s(d)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${s(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${s(o)}</span>
                        </div>
                    </div>

                    <!-- 3. BEBAN OPERASIONAL -->
                    <div class="space-y-2 pt-2">
                        <div class="flex items-center justify-between">
                            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">3. Beban Operasional Usaha</p>
                            <button type="button" onclick="switchReportTab('expenses')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                                Kelola Biaya Operasional <i class="fa-solid fa-arrow-right text-[9px]"></i>
                            </button>
                        </div>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Beban Rutin Operasional Toko</span>
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${s(l)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white">${s(p)}</span>
                        </div>
                    </div>

                    <!-- 4. PAJAK PENGHASILAN & LABA BERSIH -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">4. Kepatuhan Pajak &amp; Laba Bersih Akhir</p>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">${v}</span>
                            <span class="font-bold text-slate-700 dark:text-slate-300">− ${s(f)}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-none">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-base"></i>
                                <span>LABA BERSIH TAHUN / BULAN BERJALAN</span>
                            </div>
                            <span class="text-base sm:text-lg font-black">${s(t)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},it=()=>{const e=A||[],r=e.length;let n=0,a=0;const d={cash:{count:0,total:0,label:"Tunai Kasir",icon:"fa-money-bill-wave",color:"emerald"},qris:{count:0,total:0,label:"QRIS Dinamis / Statis",icon:"fa-qrcode",color:"blue"},transfer:{count:0,total:0,label:"Transfer Bank (BCA/Mandiri/BRI)",icon:"fa-building-columns",color:"purple"},tempo:{count:0,total:0,label:"Tempo / Putri PayLater",icon:"fa-clock-rotate-left",color:"amber"},other:{count:0,total:0,label:"Lainnya",icon:"fa-credit-card",color:"slate"}};let i=0,o=0;const l={};e.forEach(t=>{const x=parseFloat(t.payment?.subtotal)||0;parseFloat(t.payment?.productDiscount),n+=x;const c=(t.payment?.method||"").toLowerCase();let b="other";c.includes("cash")||c.includes("tunai")?b="cash":c.includes("qris")?b="qris":c.includes("transfer")||c.includes("bca")||c.includes("mandiri")||c.includes("bri")?b="transfer":(c.includes("tempo")||c.includes("paylater"))&&(b="tempo"),d[b].count++,d[b].total+=x,t.cashierShiftId||t.cashierId||t.notes&&t.notes.includes("POS")?i+=x:o+=x,(t.items||[]).forEach(m=>{const w=parseFloat(m.qty)||1;a+=w;const P=m.id||m.name;l[P]||(l[P]={id:P,name:m.name||"Produk",qty:0,omset:0,hpp:0,image:m.image||""});const st=m.hpp!==void 0&&m.hpp!==null?parseFloat(m.hpp):q(m);l[P].qty+=w,l[P].omset+=(parseFloat(m.price)||0)*w,l[P].hpp+=st*w})});const p=r>0?Math.round(n/r):0,g=r>0?(a/r).toFixed(1):"0",f=Object.values(l).sort((t,x)=>x.qty-t.qty).slice(0,10),v=f.length?f.map((t,x)=>{const c=t.omset-t.hpp,b=t.omset>0?(c/t.omset*100).toFixed(0):"0";return`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${x+1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${s(t.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${t.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${s(t.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black text-emerald-600 dark:text-emerald-400">${s(c)} <span class="text-[9px] font-normal text-slate-400">(${b}%)</span></td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;T("report-hub-content",`
        <div class="space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan</p>
                    <p class="text-lg sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(n)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">${r} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Rata-Rata Keranjang (AOV)</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 truncate">${s(p)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">Per transaksi pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Barang Terjual</p>
                    <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 truncate">${a} Unit</p>
                    <p class="text-[10px] text-slate-500 mt-1">Rata-rata ${g} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Kanal Penjualan</p>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1 flex items-center justify-between">
                        <span>Kasir POS:</span> <b class="text-emerald-600">${s(i)}</b>
                    </p>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1 flex items-center justify-between">
                        <span>Storefront Web:</span> <b class="text-blue-600">${s(o)}</b>
                    </p>
                </div>
            </div>

            <!-- DISTRIBUSI METODE PEMBAYARAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-wallet text-[var(--color-primary)]"></i>
                    <span>Distribusi Metode Pembayaran</span>
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    ${Object.values(d).filter(t=>t.count>0||t.label.includes("Tunai")||t.label.includes("QRIS")||t.label.includes("Transfer")||t.label.includes("Tempo")).map(t=>{const x=n>0?(t.total/n*100).toFixed(0):"0";return`
                            <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fa-solid ${t.icon} text-xs text-slate-500"></i>
                                    <p class="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate">${t.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${s(t.total)}</p>
                                <div class="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                                    <span>${t.count} pesanan</span>
                                    <span class="font-bold text-slate-600 dark:text-slate-300">${x}%</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>

            <!-- TOP 10 PRODUK TERLARIS -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Top 10 Produk Terlaris &amp; Kontribusi Laba</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Produk dengan volume penjualan &amp; margin keuntungan tertinggi</p>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <th class="py-2.5 px-3 text-center w-12">No</th>
                                <th class="py-2.5 px-3">Nama Produk</th>
                                <th class="py-2.5 px-3 text-right">Qty Terjual</th>
                                <th class="py-2.5 px-3 text-right">Total Omset</th>
                                <th class="py-2.5 px-3 text-right">Laba Kotor</th>
                            </tr>
                        </thead>
                        <tbody>${v}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},U=()=>{const e=u.products||[],r=u.categories||[];u.brands;let n=0,a=0,d=0,i=0,o=0,l=0;const p=[];e.forEach(t=>{const x=parseFloat(t.minStock)||5;if(t.variants&&t.variants.length)t.variants.forEach(c=>{i++;const b=parseFloat(c.stock)||0,m=parseFloat(c.hpp)||0,w=parseFloat(c.price)||0;d+=b,n+=b*m,a+=b*w;let P="safe";b<=0?(o++,P="empty"):b<=x&&(l++,P="low"),p.push({id:t.id,variantId:c.id||c.name,name:`${t.name} (${c.name})`,category:t.category||"Umum",brand:t.brand||"-",stock:b,unit:t.unit||"pcs",hpp:m,price:w,totalHpp:b*m,totalRetail:b*w,status:P,minStock:x,image:t.image||""})});else{i++;const c=parseFloat(t.stock)||0,b=parseFloat(t.hpp)||0,m=parseFloat(t.price)||0;d+=c,n+=c*b,a+=c*m;let w="safe";c<=0?(o++,w="empty"):c<=x&&(l++,w="low"),p.push({id:t.id,variantId:null,name:t.name,category:t.category||"Umum",brand:t.brand||"-",stock:c,unit:t.unit||"pcs",hpp:b,price:m,totalHpp:c*b,totalRetail:c*m,status:w,minStock:x,image:t.image||""})}});const g=a-n;let f=p.filter(t=>{if(R!=="all"&&t.status!==R||M!=="all"&&t.category!==M)return!1;if(I){const x=I.toLowerCase();return t.name.toLowerCase().includes(x)||t.category.toLowerCase().includes(x)||t.brand.toLowerCase().includes(x)}return!0});f.sort((t,x)=>t.stock-x.stock);const v=f.length?f.map((t,x)=>{let c="";return t.status==="empty"?c='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>':t.status==="low"?c=`<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${t.stock}</span>`:c='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">Aman</span>',`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${x+1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400">${$(t.category)} • ${$(t.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${t.stock} ${t.unit}</span>
                        ${c}
                    </div>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${s(t.hpp)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${s(t.totalHpp)}</p>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${s(t.price)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${s(t.totalRetail)}</p>
                </td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-10 text-center text-xs text-slate-400">Tidak ada produk yang sesuai dengan filter</td></tr>
    `;T("report-hub-content",`
        <div class="space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Nilai Aset Modal (HPP)</p>
                    <p class="text-lg sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(n)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">Uang modal tertanam di rak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Estimasi Nilai Jual Retail</p>
                    <p class="text-lg sm:text-xl font-black truncate" style="color: var(--color-primary)">${s(a)}</p>
                    <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">Potensi margin: ${s(g)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Fisik Unit Barang</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 truncate">${d.toLocaleString("id-ID")} Unit</p>
                    <p class="text-[10px] text-slate-500 mt-1">${i} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Peringatan Kritis Stok</p>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="px-2 py-0.5 rounded-lg text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">${o} Habis</span>
                        <span class="px-2 py-0.5 rounded-lg text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">${l} Menipis</span>
                    </div>
                </div>
            </div>

            <!-- TABEL VALUASI & FILTER -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Valuasi Inventori Gudang</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Daftar barang beserta perbandingan modal HPP vs harga retail</p>
                    </div>

                    <!-- Filter Bar -->
                    <div class="flex flex-wrap items-center gap-2">
                        <!-- Pencarian -->
                        <div class="relative w-full sm:w-48">
                            <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
                            <input type="text" placeholder="Cari barang..." value="${$(I)}" oninput="filterStockReportSearch(this.value)" class="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden">
                        </div>

                        <!-- Filter Status -->
                        <select onchange="filterStockReportStatus(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer">
                            <option value="all" ${R==="all"?"selected":""}>Semua Status</option>
                            <option value="empty" ${R==="empty"?"selected":""}>Stok Habis (0)</option>
                            <option value="low" ${R==="low"?"selected":""}>Stok Menipis</option>
                            <option value="safe" ${R==="safe"?"selected":""}>Stok Aman</option>
                        </select>

                        <!-- Filter Kategori -->
                        <select onchange="filterStockReportCategory(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer">
                            <option value="all" ${M==="all"?"selected":""}>Semua Kategori</option>
                            ${r.map(t=>`<option value="${t.name}" ${M===t.name?"selected":""}>${t.name}</option>`).join("")}
                        </select>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <th class="py-2.5 px-3 text-center w-12">No</th>
                                <th class="py-2.5 px-3">Produk &amp; Kategori</th>
                                <th class="py-2.5 px-3 text-center">Stok Fisik</th>
                                <th class="py-2.5 px-3 text-right">Modal (HPP)</th>
                                <th class="py-2.5 px-3 text-right">Harga Jual</th>
                            </tr>
                        </thead>
                        <tbody>${v}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},pt=e=>{R=e,U()},ct=e=>{M=e,U()},xt=e=>{I=e,U()},bt=()=>{const e=B||[];let r=0,n=0;const a={};e.forEach(t=>{const x=_(t),c=x.totalAkhir;r+=c,x.isLate?n++:x.isDueSoon;const b=t.customer?.name||"Pelanggan Umum",m=t.customer?.phone||t.customer?.wa||"-";a[b]||(a[b]={name:b,phone:m,totalPiutang:0,orderCount:0,isLate:!1}),a[b].totalPiutang+=c,a[b].orderCount++,x.isLate&&(a[b].isLate=!0)});const d=Object.values(a).sort((t,x)=>x.totalPiutang-t.totalPiutang),i=J(),o=i.totalUnpaidDebt,l=u.purchases||[],p={};l.forEach(t=>{if(t.paymentType==="tempo"&&t.paymentStatus!=="lunas"&&t.status!=="cancelled"){const x=parseFloat(t.total)||0,c=parseFloat(t.amountPaid)||0,b=x-c;if(b>0){const m=t.supplierName||"Supplier";p[m]||(p[m]={name:m,totalDebt:0,poCount:0}),p[m].totalDebt+=b,p[m].poCount++}}});const g=Object.values(p).sort((t,x)=>x.totalDebt-t.totalDebt),f=r-o,v=f>=0;T("report-hub-content",`
        <div class="space-y-6">
            <!-- KARTU POSISI BERSIH LIKUIDITAS TOKO -->
            <div class="rounded-2xl border p-5 ${v?"border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20":"border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20"}">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <span class="text-[9px] font-black uppercase tracking-widest ${v?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            Posisi Bersih Likuiditas Toko (Net Working Capital Gap)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black ${v?"text-emerald-800 dark:text-emerald-300":"text-rose-800 dark:text-rose-300"} mt-0.5">
                            ${v?"+":""}${s(f)}
                        </h2>
                        <p class="text-xs ${v?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"} mt-1 font-medium">
                            ${v?"Surplus Piutang: Hak tagihan toko di pelanggan lebih besar daripada kewajiban toko ke supplier.":"Defisit Utang: Kewajiban toko ke supplier lebih besar daripada tagihan piutang di pelanggan."}
                        </p>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Piutang Pelanggan</span>
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${s(r)}</span>
                        </div>
                        <span class="text-slate-400 font-bold">−</span>
                        <div class="px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${s(o)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DUA KOLOM: PIUTANG PELANGGAN vs UTANG SUPPLIER -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- KOLOM KIRI: PIUTANG PELANGGAN (ACCOUNTS RECEIVABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Piutang Pelanggan</h3>
                                <p class="text-[10px] text-slate-400">${e.length} nota tempo aktif</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('piutang')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional Tempo <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Piutang Toko</span>
                            <p class="text-base font-black text-slate-900 dark:text-white mt-0.5">${s(r)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${n} Nota</p>
                        </div>
                    </div>

                    <!-- Tabel Debitur Terbesar -->
                    <div class="overflow-x-auto">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Debitur Pelanggan Terbesar</p>
                        <table class="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                    <th class="py-2">Nama Pelanggan</th>
                                    <th class="py-2 text-right">Sisa Tagihan</th>
                                    <th class="py-2 text-right w-16">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${d.length?d.slice(0,5).map(t=>`
                                    <tr class="border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                                        <td class="py-2.5">
                                            <p class="font-bold text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                                            <p class="text-[10px] text-slate-400">${t.orderCount} nota ${t.isLate?'<span class="text-rose-500 font-bold">• Terlambat</span>':""}</p>
                                        </td>
                                        <td class="py-2.5 text-right font-black text-slate-800 dark:text-white">${s(t.totalPiutang)}</td>
                                        <td class="py-2.5 text-right">
                                            <button type="button" onclick="openAdminTab('piutang')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Buka</button>
                                        </td>
                                    </tr>
                                `).join(""):`
                                    <tr><td colspan="3" class="py-4 text-center text-slate-400 text-xs">Tidak ada piutang pelanggan aktif</td></tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- KOLOM KANAN: UTANG SUPPLIER KULAKAN (ACCOUNTS PAYABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-cart-flatbed"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Utang Kulakan Supplier</h3>
                                <p class="text-[10px] text-slate-400">Order pembelian rekanan (PO)</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('purchases')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional PO <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Hutang Supplier</span>
                            <p class="text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${s(o)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                            <span class="text-[9px] font-bold text-blue-500 uppercase">Menunggu Kirim Barang</span>
                            <p class="text-base font-black text-blue-600 dark:text-blue-400 mt-0.5">${i.pendingArrivalCount} PO</p>
                        </div>
                    </div>

                    <!-- Tabel Utang Rekanan Terbesar -->
                    <div class="overflow-x-auto">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tagihan Supplier Rekanan Terbesar</p>
                        <table class="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                    <th class="py-2">Nama Supplier</th>
                                    <th class="py-2 text-right">Sisa Hutang</th>
                                    <th class="py-2 text-right w-16">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${g.length?g.slice(0,5).map(t=>`
                                    <tr class="border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                                        <td class="py-2.5">
                                            <p class="font-bold text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                                            <p class="text-[10px] text-slate-400">${t.poCount} invoice PO tempo</p>
                                        </td>
                                        <td class="py-2.5 text-right font-black text-rose-500">${s(t.totalDebt)}</td>
                                        <td class="py-2.5 text-right">
                                            <button type="button" onclick="openAdminTab('purchases')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Bayar</button>
                                        </td>
                                    </tr>
                                `).join(""):`
                                    <tr><td colspan="3" class="py-4 text-center text-slate-400 text-xs">Seluruh tagihan kulakan supplier telah lunas</td></tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `)},ut=()=>{const e=h===0?`Tahun ${k}`:`${E[h-1]} ${k}`,r=Q(),n=h===0?null:`${k}-${h}`,a=u.taxSettings?.monthlyExpenses||{},d=u.taxSettings?.expenseBreakdown||{},i=L.map(l=>{const p=r.categories[l.key]||0,g=r.total>0?(p/r.total*100).toFixed(0):"0";return`
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${l.label}</span>
                        <i class="fa-solid ${l.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${s(p)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${g}%</span>
                </div>
            </div>
        `}).join("");let o="";if(h===0){const l=Array.from({length:12},(p,g)=>g+1).map(p=>{const g=`${k}-${p}`,f=a[g]||0;return`
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${E[p-1]} ${k}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${f}" onchange="saveReportMonthlyExpense('${g}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join("");o=`
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${k}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${l}</div>
            </div>
        `}else{const l=d[n]||{},p=L.map(f=>{const v=l[f.key]||0;return`
                <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${f.icon} text-xs text-slate-400 w-4"></i>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${f.label}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${v}" id="input-exp-${f.key}" oninput="calcReportMonthlyExpenseTotal()" class="w-36 text-right font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join(""),g=a[n]||0;o=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${e}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${s(g)}</span>
                </div>

                <div class="space-y-1">${p}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${n}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `}T("report-hub-content",`
        <div class="space-y-6">
            <!-- REKAP KARTU KATEGORI BEBAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Distribusi Biaya Operasional Toko — ${e}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-amber-600">${s(r.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${i}</div>
            </div>

            <!-- FORM PENCATATAN / EDIT BIAYA OPERASIONAL -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                ${o}
            </div>
        </div>
    `)},mt=()=>{let e=0;L.forEach(r=>{const n=K(`input-exp-${r.key}`);n&&(e+=parseFloat(n.value)||0)}),rt("label-exp-total",s(e))},gt=async e=>{D("Menyimpan biaya operasional...");const r={};let n=0;L.forEach(a=>{const d=K(`input-exp-${a.key}`),i=d&&parseFloat(d.value)||0;r[a.key]=i,n+=i}),u.taxSettings||(u.taxSettings={}),u.taxSettings.monthlyExpenses||(u.taxSettings.monthlyExpenses={}),u.taxSettings.expenseBreakdown||(u.taxSettings.expenseBreakdown={}),u.taxSettings.monthlyExpenses[e]=n,u.taxSettings.expenseBreakdown[e]=r;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),j(),N("Biaya operasional berhasil disimpan!"),S()}catch(a){j(),N("Gagal menyimpan biaya operasional: "+a.message)}},ft=async(e,r)=>{await ot(e,r),S()},kt=()=>{const e=Y();h===0?`${k}`:`${E[h-1]}${k}`;const r=e.omset-e.disc,n=Math.round(e.omset*.005),a=u.taxSettings||{},d={};for(let o=1;o<=12;o++)d[o]={omset:0,ppn:0,orderCount:0};A.forEach(o=>{const l=W(o);if(!l)return;const p=l.getMonth()+1;if(d[p]){const g=o.payment?.dppAmount!==void 0&&o.payment?.dppAmount!==null?parseFloat(o.payment.dppAmount):parseFloat(o.payment?.subtotal)||0;d[p].omset+=g,d[p].ppn+=parseFloat(o.payment?.ppnAmount)||0,d[p].orderCount++}});const i=Array.from({length:12},(o,l)=>l+1).map(o=>{const l=window.gTaxMonthly&&window.gTaxMonthly[o]&&window.gTaxMonthly[o].omset>0?window.gTaxMonthly[o]:d[o],p=h===o,g=Math.round((l.omset||0)*.005);return`
            <tr class="${p?"bg-[rgba(var(--color-primary-rgb),0.08)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-800/40"} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${E[o-1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${s(l.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${s(l.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${s(g)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${l.orderCount}</td>
            </tr>
        `}).join("");T("report-hub-content",`
        <div class="space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto</p>
                    <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${s(e.omset)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">${e.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Diskon Produk</p>
                    <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${s(e.disc)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP Penjualan</p>
                    <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${s(r)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)">PPN Keluaran</p>
                    <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${s(e.ppn)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">${e.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                    <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400">PPh Final 0,5%</p>
                    <p class="text-sm sm:text-lg font-black text-emerald-700 dark:text-emerald-400 truncate">${s(n)}</p>
                    <p class="text-[10px] text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 UMKM</p>
                </div>
            </div>

            <!-- TABEL REKAP 12 BULAN & PENGATURAN IDENTITAS PAJAK -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Tabel 12 Bulan -->
                <div class="lg:col-span-2 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${k}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Dasar Pengenaan Pajak, PPN Keluaran, &amp; PPh Final 0,5%</p>
                        </div>
                        <button type="button" onclick="openTaxDocPreview('summary')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-print text-xs"></i> Cetak Rekap Pajak
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <th class="py-2.5 px-4">Bulan</th>
                                    <th class="py-2.5 px-4 text-right">Omset (DPP)</th>
                                    <th class="py-2.5 px-4 text-right">PPN</th>
                                    <th class="py-2.5 px-4 text-right">PPh 0,5%</th>
                                    <th class="py-2.5 px-4 text-right">Pesanan</th>
                                </tr>
                            </thead>
                            <tbody>${i}</tbody>
                        </table>
                    </div>
                </div>

                <!-- Formulir Identitas Pajak CTAS 2026 -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="pb-3 border-b border-slate-100 dark:border-slate-800">
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Identitas Wajib Pajak</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Konfigurasi NPWP 16-Digit CTAS DJP 2026</p>
                    </div>

                    <div class="space-y-3">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Nama Badan Usaha</label>
                            <input type="text" id="report-tax-company" value="${$(a.companyName||u.store?.name||"")}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${$(a.npwp||u.store?.taxNpwp||"")}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Skema PPh Toko</label>
                            <select id="report-tax-scheme" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden cursor-pointer">
                                <option value="umkm_final" ${a.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM 0,5% (PP 55/2022)</option>
                                <option value="badan_normal" ${a.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal 22% (UU HPP)</option>
                            </select>
                        </div>
                        <button type="button" onclick="saveReportTaxSettings()" class="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 mt-2">
                            <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)},ht=async()=>{D("Menyimpan pengaturan pajak..."),u.taxSettings||(u.taxSettings={});const e=H("report-tax-company"),r=H("report-tax-npwp"),n=H("report-tax-scheme");u.taxSettings.companyName=e,u.taxSettings.npwp=r,u.taxSettings.taxScheme=n,u.store||(u.store={}),u.store.taxNpwp=r;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),j(),N("Identitas pajak berhasil diperbarui!"),S()}catch(a){j(),N("Gagal menyimpan: "+a.message)}},vt=()=>{const e=u.taxSettings?.balanceSheet||{kas:0},r=lt(),n=J(),a=parseFloat(e.kas)||0,d=B.reduce((f,v)=>f+(_(v).totalAkhir||0),0),i=r.assetHpp||0,o=a+d+i,l=n.totalUnpaidDebt||0,p=Math.max(0,o-l),g=l+p;T("report-hub-content",`
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center text-xs"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black text-blue-600 dark:text-blue-400">${s(o)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${a}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span class="text-blue-600 dark:text-blue-400">${s(o)}</span>
                        </div>
                    </div>
                </div>

                <!-- PASIVA (KEWAJIBAN & MODAL) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs"><i class="fa-solid fa-scale-balanced"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">KEWAJIBAN &amp; MODAL</h3>
                        </div>
                        <span class="text-xs font-black text-purple-600 dark:text-purple-400">${s(g)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${s(l)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold text-emerald-600 dark:text-emerald-400">${s(p)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-purple-600 dark:text-purple-400">${s(g)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center pt-2">
                <button type="button" onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer inline-flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak Lembar Neraca A4
                </button>
            </div>
        </div>
    `)},at=()=>{y==="executive"||y==="sales"?O("income"):y==="tax"?O("summary"):y==="balance"?O("balance"):O("income")};window.renderReportsHubView=z;window.switchReportTab=X;window.changeReportYear=Z;window.changeReportMonth=tt;window.refreshReportData=et;window.openReportCurrentDocPreview=at;window.filterStockReportStatus=pt;window.filterStockReportCategory=ct;window.filterStockReportSearch=xt;window.calcReportMonthlyExpenseTotal=mt;window.saveReportExpenseBreakdown=gt;window.saveReportMonthlyExpense=ft;window.saveReportTaxSettings=ht;const Et={renderReportsHubView:z,switchReportTab:X,changeReportYear:Z,changeReportMonth:tt,refreshReportData:et,openReportCurrentDocPreview:at};export{L as EXPENSE_CATEGORIES,mt as calcReportMonthlyExpenseTotal,tt as changeReportMonth,Z as changeReportYear,Et as default,F as fetchReportOrdersData,ct as filterStockReportCategory,xt as filterStockReportSearch,pt as filterStockReportStatus,Q as getExpenseBreakdownForPeriod,Y as getReportFinancialTotals,at as openReportCurrentDocPreview,W as parseOrderDate,et as refreshReportData,vt as renderBalanceSheetTab,bt as renderDebtsReceivablesTab,dt as renderExecutiveSummaryTab,ut as renderExpensesTab,nt as renderReportTabContent,z as renderReportsHubView,S as renderReportsShell,it as renderSalesAnalyticsTab,U as renderStockValuationTab,kt as renderTaxComplianceTab,y as reportActiveTab,jt as reportDebtFilter,h as reportMonth,Rt as reportSalesPeriod,I as reportSearchQuery,M as reportStockCategory,R as reportStockFilter,k as reportYear,gt as saveReportExpenseBreakdown,ft as saveReportMonthlyExpense,ht as saveReportTaxSettings,X as switchReportTab};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/expenses-C4hjzaSY.js","assets/module-print-D7ZGPnsx.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-YAlbR-NC.js","assets/module-member-CsDpojBF.js","assets/module-faq-DvQovEFv.js","assets/module-admin-CfNt7FYa.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{e as F,a1 as pt,f as l,l as I,n as L,k as D,b as j,q as V,a as g,_ as xt,i as P,g as G}from"./module-print-D7ZGPnsx.js";import{E as R,f as _,o as K,g as J,c as Y,M as E,s as bt}from"./module-admin-CfNt7FYa.js";import{computePurchaseMetrics as W}from"./purchases-DC9YHaGX.js";import{i as ut}from"./module-pos-YAlbR-NC.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./vendor-sortable-DzmX_rHT.js";import"./module-faq-DvQovEFv.js";import"./module-member-CsDpojBF.js";let T="executive",k=new Date().getFullYear(),v=0,Ct="month",C="all",O="all",Ft="all",M="",S=[],N=[],q="";const Q=t=>{if(!t)return null;let a=null;if(t.timestamp?.toDate)a=t.timestamp.toDate();else if(t.createdAt?.toDate)a=t.createdAt.toDate();else if(t.timestamp&&typeof t.timestamp=="object"){const e=t.timestamp.seconds??t.timestamp._seconds;typeof e=="number"&&!isNaN(e)&&e>0&&(a=new Date(e*1e3))}else if(t.createdAt&&typeof t.createdAt=="object"){const e=t.createdAt.seconds??t.createdAt._seconds;typeof e=="number"&&!isNaN(e)&&e>0&&(a=new Date(e*1e3))}else t.dateMs?a=new Date(t.dateMs):t.dateString?a=new Date(t.dateString):typeof t.timestamp=="number"?a=new Date(t.timestamp>1e11?t.timestamp:t.timestamp*1e3):typeof t.timestamp=="string"?a=new Date(t.timestamp):typeof t.createdAt=="string"&&(a=new Date(t.createdAt));if(a&&!isNaN(a.getTime()))return a;const s=t.orderId||t.id||"";if(typeof s=="string"&&s.startsWith("ORD-")){const e=s.split("-");if(e.length>=2&&e[1].length>=6){const o=parseInt(e[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return null},U=async(t=!1)=>{const a=`${k}-${v}`;if(!t&&q===a&&S.length>0)return{orders:S,piutang:N};S=[],N=[];try{(await V.collection("freshmart_orders").orderBy("timestamp","desc").limit(2e3).get().catch(async()=>await V.collection("freshmart_orders").limit(2e3).get())).forEach(d=>{const b=d.data();if(b.status==="Dibatalkan"||b.status==="Test")return;const r=Q(b);if(!r)return;const x=r.getFullYear(),c=r.getMonth()+1;x===k&&(v!==0&&c!==v||S.push(b))}),(await V.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(d=>{N.push(d.data())}),q=a}catch(s){console.error("[ReportsHub] Gagal memuat data transaksi:",s),D("Gagal memuat data transaksi laporan: "+s.message)}return{orders:S,piutang:N}},Z=()=>{let t=0,a=0,s=0,e=0,o=S.length;return S.forEach(d=>{const b=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;t+=b,a+=parseFloat(d.payment?.ppnAmount)||0,e+=parseFloat(d.payment?.productDiscount)||0,(d.items||[]).forEach(r=>{const x=r.hpp!==void 0&&r.hpp!==null?parseFloat(r.hpp):J(r)||0;s+=(parseFloat(x)||0)*(parseFloat(r.qty)||1)})}),{omset:t,ppn:a,hpp:s,disc:e,orderCount:o}},z=()=>{const t=g.taxSettings?.expenseBreakdown||{},a=g.taxSettings?.monthlyExpenses||{},s=Array.isArray(g.expenses)?g.expenses:[],e=v===0?Array.from({length:12},(d,b)=>b+1):[v],o={total:0,transactionCount:0,categories:{},periodExpenses:[]};return R.forEach(d=>{o.categories[d.key]=0}),s.forEach(d=>{if(!d||!d.date)return;const[b,r]=d.date.split("-"),x=parseInt(b,10),c=parseInt(r,10);if(x===k&&(v===0||c===v)){const i=parseFloat(d.amount)||0,u=d.category||"lainnya";o.categories[u]!==void 0?o.categories[u]+=i:o.categories.lainnya+=i,o.total+=i,o.transactionCount++,o.periodExpenses.push(d)}}),o.periodExpenses.sort((d,b)=>new Date(b.date).getTime()-new Date(d.date).getTime()),e.forEach(d=>{const b=`${k}-${d}`;if(!s.some(x=>{if(!x||!x.date)return!1;const[c,i]=x.date.split("-");return parseInt(c,10)===k&&parseInt(i,10)===d})){const x=t[b];if(x)R.forEach(c=>{o.categories[c.key]+=parseFloat(x[c.key])||0}),o.total+=parseFloat(a[b])||0;else{const c=parseFloat(a[b])||0;o.total+=c,o.categories.lainnya+=c}}}),o},X=async(t=null)=>{t&&(T=t),F("admin-content")&&(j("admin-content",`
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `),await Promise.all([_(k),U()]),B())},B=()=>{const t=Array.from({length:6},(e,o)=>new Date().getFullYear()-4+o);v===0?`${k}`:`${E[v-1]}${k}`;const s=[{k:"executive",l:"Ringkasan & Laba Rugi",i:"fa-chart-pie",sub:"P&L Statement"},{k:"sales",l:"Penjualan & Kasir",i:"fa-chart-line",sub:"Omset & Kas"},{k:"stock",l:"Stok & Aset Gudang",i:"fa-boxes-stacked",sub:"Valuasi Inventori"},{k:"debts",l:"Utang & Piutang",i:"fa-scale-balanced",sub:"AP & AR Hub"},{k:"expenses",l:"Biaya Operasional",i:"fa-money-bill-transfer",sub:"Beban Toko"},{k:"tax",l:"Perpajakan RI 2026",i:"fa-file-invoice-dollar",sub:"PPN & PPh Final"},{k:"balance",l:"Neraca Keuangan",i:"fa-scale-unbalanced",sub:"Aset & Modal"}].map(e=>{const o=T===e.k;return`
            <button type="button" onclick="switchReportTab('${e.k}')" class="group flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 snap-start ${o?"bg-[var(--color-primary)] text-white shadow-2xs font-black":"bg-slate-50 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.06)]"}">
                <div class="w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${o?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors">
                    <i class="fa-solid ${e.i} text-[10px]"></i>
                </div>
                <span>${e.l}</span>
            </button>
        `}).join("");j("admin-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 1. HEADER KONTROL PUSAT LAPORAN TERPADU (NATIVE APP BAR) -->
            <div class="rounded-2xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.04)] dark:from-slate-900 dark:via-slate-900 dark:to-[rgba(var(--color-primary-rgb),0.08)] p-3.5 sm:p-5 shadow-2xs space-y-3.5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                            <i class="fa-solid fa-chart-pie text-lg sm:text-xl"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <h1 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider truncate">Pusat Laporan &amp; Keuangan</h1>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Live</span>
                            </div>
                            <p class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium truncate">
                                Laba Rugi, Penjualan, Valuasi Stok, Utang Piutang &amp; Pajak
                            </p>
                        </div>
                    </div>

                    <!-- Global Filter & Actions Bar -->
                    <div class="flex items-center flex-wrap gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80">
                        <!-- Filter Bulan -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700 min-h-[36px]">
                            <i class="fa-solid fa-calendar-day text-[11px] text-slate-400"></i>
                            <select onchange="changeReportMonth(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-2 pl-0.5 focus:outline-hidden cursor-pointer">
                                <option value="0" ${v===0?"selected":""}>Setahun Penuh</option>
                                ${E.map((e,o)=>`<option value="${o+1}" ${v===o+1?"selected":""}>${e}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Filter Tahun -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700 min-h-[36px]">
                            <i class="fa-solid fa-calendar text-[11px] text-slate-400"></i>
                            <select onchange="changeReportYear(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-2 pl-0.5 focus:outline-hidden cursor-pointer">
                                ${t.map(e=>`<option value="${e}" ${e===k?"selected":""}>${e}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Tombol Refresh Data -->
                        <button type="button" onclick="refreshReportData()" class="h-9 w-9 sm:w-auto sm:px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5" title="Muat Ulang Data Terbaru">
                            <i class="fa-solid fa-arrows-rotate text-xs"></i>
                            <span class="hidden sm:inline">Segarkan</span>
                        </button>

                        <!-- Tombol Cetak Dokumen A4 -->
                        <button type="button" onclick="openReportCurrentDocPreview()" class="h-9 px-3.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-black/10 shadow-2xs" style="background: var(--color-primary);" title="Cetak Lembar Resmi A4 / PDF">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span>Cetak A4</span>
                        </button>
                    </div>
                </div>

                <!-- Tab Segmented Pill Navigation -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar pb-1 snap-x snap-mandatory">
                    ${s}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `),mt()},tt=t=>{T=t,B()},et=async t=>{k=parseInt(t,10),I("Memuat data tahun "+k+"..."),await Promise.all([_(k),U(!0)]),L(),B()},at=async t=>{v=parseInt(t,10),I("Memuat data bulan..."),await U(!0),L(),B()},st=async()=>{I("Menyinkronkan data terbaru..."),await Promise.all([_(k),U(!0)]),L(),D("Data laporan berhasil disegarkan!"),B()},mt=()=>{F("report-hub-content")&&(T==="executive"?ft():T==="sales"?gt():T==="stock"?H():T==="debts"?ht():T==="expenses"?Pt():T==="tax"?St():T==="balance"&&Rt())},ft=()=>{const t=Z(),a=v===0?`Tahun ${k}`:`${E[v-1]} ${k}`,s=t.omset,e=t.disc,o=s-e,d=t.hpp,b=o-d,r=z().total,x=b-r,c=g.taxSettings?.taxScheme||"umkm_final";let i=0,u="PPh Final UMKM 0,5% (PP 55/2022)";if(c==="umkm_final")i=Math.round(s*.005);else if(c==="badan_normal")i=x>0?Math.round(x*.22):0,u="PPh Badan Normal 22% (UU HPP)";else{const p=parseFloat(g.taxSettings?.customTaxRate)||.5;i=x>0?Math.round(x*(p/100)):0,u=`PPh Custom (${p}%)`}const m=x-i,y=s>0?(b/s*100).toFixed(1):"0.0",n=s>0?(m/s*100).toFixed(1):"0.0",f=s>0?(r/s*100).toFixed(1):"0.0";j("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            ${t.orderCount===0?`
            <!-- BANNER STATUS INFORMASI TRANSAKSI KOSONG (THEME HARMONY) -->
            <div class="p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.25);">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary);">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white">Belum ada transaksi penjualan selesai pada ${a}</p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Nilai Rp 0 adalah status riil database saat ini. Begitu transaksi kasir POS atau pesanan web tercatat, omzet dan laba akan terakumulasi otomatis.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button type="button" onclick="switchReportTab('stock')" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs" style="border-color: rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-boxes-stacked mr-1" style="color: var(--color-primary)"></i> Cek Valuasi Stok
                    </button>
                    <button type="button" onclick="if(window.openAdminTab) window.openAdminTab('pos')" class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95" style="background: var(--color-primary);">
                        <i class="fa-solid fa-cash-register mr-1"></i> Buka Kasir POS
                    </button>
                </div>
            </div>`:""}

            <!-- 4 KARTU BENTO UTAMA KESEHATAN FINANSIAL -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- 1. Omset Penjualan -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${l(s)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${t.orderCount} transaksi</span>
                        <span class="text-rose-500 font-bold">Disc: ${l(e)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${l(b)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${l(d)}</span>
                        <span class="font-bold" style="color: var(--color-primary)">Margin ${y}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Usaha</span>
                            <span class="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${l(r)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Beban toko</span>
                        <span class="text-slate-500 font-bold">${f}% omset</span>
                    </div>
                </div>

                <!-- 4. Laba Bersih Akhir (Royal Theme Card) -->
                <div class="card-modern p-4 sm:p-5 flex flex-col justify-between col-span-2 lg:col-span-1 rounded-2xl" style="border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-primary-rgb), 0.03));">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">Laba Bersih Riil</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.18); color: var(--color-primary)"><i class="fa-solid fa-crown"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${l(m)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 flex items-center justify-between text-[10px]" style="border-top: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                        <span class="font-medium" style="color: var(--color-primary); opacity: 0.85;">Net Profit</span>
                        <span class="font-black" style="color: var(--color-primary)">${n}%</span>
                    </div>
                </div>
            </div>

            <!-- LEMBAR LAPORAN LABA RUGI RESMI (P&L BREAKDOWN) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-file-invoice"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Laporan Laba Rugi Komprehensif — ${a}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Penetapan pendapatan, beban pokok penjualan, beban operasional &amp; laba bersih</p>
                        </div>
                    </div>
                    <button type="button" onclick="openTaxDocPreview('income')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs">
                        <i class="fa-solid fa-print text-xs"></i> <span class="hidden sm:inline">Cetak Laba Rugi</span>
                    </button>
                </div>

                <div class="p-4 sm:p-6 space-y-4">
                    <!-- 1. PENDAPATAN -->
                    <div class="space-y-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">1. Pendapatan Penjualan</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Penjualan Bruto (${t.orderCount} pesanan)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${l(s)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${l(e)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white font-black">${l(o)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${l(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${l(b)}</span>
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
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Beban Rutin Operasional Toko</span>
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${l(r)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white font-black">${l(x)}</span>
                        </div>
                    </div>

                    <!-- 4. PAJAK PENGHASILAN & LABA BERSIH -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">4. Kepatuhan Pajak &amp; Laba Bersih Akhir</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">${u}</span>
                            <span class="font-bold text-slate-700 dark:text-slate-300">− ${l(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 px-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-2xs" style="background: var(--color-primary);">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-crown text-base"></i>
                                <span>LABA BERSIH TAHUN / BULAN BERJALAN</span>
                            </div>
                            <span class="text-base sm:text-lg font-black">${l(m)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},gt=()=>{const t=S||[],a=t.length;let s=0,e=0;const o={cash:{count:0,total:0,label:"Tunai Kasir",icon:"fa-money-bill-wave",color:"emerald"},qris:{count:0,total:0,label:"QRIS Dinamis / Statis",icon:"fa-qrcode",color:"blue"},transfer:{count:0,total:0,label:"Transfer Bank (BCA/Mandiri/BRI)",icon:"fa-building-columns",color:"purple"},tempo:{count:0,total:0,label:"Tempo / Putri PayLater",icon:"fa-clock-rotate-left",color:"amber"},other:{count:0,total:0,label:"Lainnya",icon:"fa-credit-card",color:"slate"}};let d=0,b=0;const r={};t.forEach(n=>{const f=parseFloat(n.payment?.subtotal)||0;parseFloat(n.payment?.productDiscount),s+=f;const p=(n.payment?.method||"").toLowerCase();let h="other";p.includes("cash")||p.includes("tunai")?h="cash":p.includes("qris")?h="qris":p.includes("transfer")||p.includes("bca")||p.includes("mandiri")||p.includes("bri")?h="transfer":(p.includes("tempo")||p.includes("paylater"))&&(h="tempo"),o[h].count++,o[h].total+=f,n.cashierShiftId||n.cashierId||n.notes&&n.notes.includes("POS")?d+=f:b+=f,(n.items||[]).forEach($=>{const w=parseFloat($.qty)||1;e+=w;const A=$.id||$.name;r[A]||(r[A]={id:A,name:$.name||"Produk",qty:0,omset:0,hpp:0,image:$.image||""});const ct=$.hpp!==void 0&&$.hpp!==null?parseFloat($.hpp):J($);r[A].qty+=w,r[A].omset+=(parseFloat($.price)||0)*w,r[A].hpp+=ct*w})});const x=a>0?Math.round(s/a):0,c=a>0?(e/a).toFixed(1):"0",i=Object.values(r).sort((n,f)=>f.qty-n.qty).slice(0,10),u=i.length?Math.max(...i.map(n=>n.omset||1)):1,m=i.length?i.map((n,f)=>{const p=n.omset-n.hpp,h=n.omset>0?(p/n.omset*100).toFixed(0):"0",$=Math.min(100,Math.max(8,Math.round(n.omset/u*100)));let w="";return f===0?w='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-950 shadow-2xs shrink-0"><i class="fa-solid fa-trophy text-[11px]"></i></span>':f===1?w='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-2xs shrink-0">#2</span>':f===2?w='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-amber-700/20 text-amber-800 dark:text-amber-300 border border-amber-600/30 shrink-0">#3</span>':w=`<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">#${f+1}</span>`,`
            <div class="p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        ${w}
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${P(n.name)}</p>
                            <p class="text-[10px] text-slate-400">Modal HPP: ${l(n.hpp)}</p>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            ${n.qty} Unit
                        </span>
                    </div>
                </div>
                <!-- Progress bar omset -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500" style="width: ${$}%; background: var(--color-primary);"></div>
                </div>
                <!-- Stat 2 Kolom -->
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Total Omset</span>
                        <span class="font-black text-slate-800 dark:text-white">${l(n.omset)}</span>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl text-right">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Laba Kotor</span>
                        <span class="font-black" style="color: var(--color-primary);">${l(p)} <span class="text-[9px] font-normal text-slate-400">(${h}%)</span></span>
                    </div>
                </div>
            </div>
        `}).join(""):`
        <div class="py-8 text-center flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center mb-2" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-chart-simple text-sm"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum ada transaksi penjualan pada periode ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Penjualan kasir POS &amp; pesanan web akan otomatis tampil di sini</p>
        </div>
    `,y=i.length?i.map((n,f)=>{const p=n.omset-n.hpp,h=n.omset>0?(p/n.omset*100).toFixed(0):"0";return`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${f+1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${P(n.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${l(n.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${n.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${l(n.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black" style="color: var(--color-primary);">${l(p)} <span class="text-[9px] font-normal text-slate-400">(${h}%)</span></td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;j("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${l(s)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${a} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rata-Rata Keranjang (AOV)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-basket-shopping"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${l(x)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Per transaksi pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Barang Terjual</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-boxes-packing"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${e} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Rata-rata ${c} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kanal Penjualan</span>
                            <span class="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-cash-register"></i></span>
                        </div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                            <span>Kasir POS:</span> <b style="color: var(--color-primary)">${l(d)}</b>
                        </p>
                    </div>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span>Storefront:</span> <b class="text-slate-600 dark:text-slate-300">${l(b)}</b>
                    </p>
                </div>
            </div>

            <!-- DISTRIBUSI METODE PEMBAYARAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-2xs">
                <div class="flex items-center gap-2 mb-3.5">
                    <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">
                        Distribusi Metode Pembayaran
                    </h3>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    ${Object.values(o).filter(n=>n.count>0||n.label.includes("Tunai")||n.label.includes("QRIS")||n.label.includes("Transfer")||n.label.includes("Tempo")).map(n=>{const f=s>0?(n.total/s*100).toFixed(0):"0";return`
                            <div class="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 shadow-2xs">
                                        <i class="fa-solid ${n.icon}"></i>
                                    </div>
                                    <p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate">${n.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${l(n.total)}</p>
                                <div class="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${f}%; background: var(--color-primary);"></div>
                                </div>
                                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                                    <span>${n.count} pesanan</span>
                                    <span class="font-bold text-slate-700 dark:text-slate-300">${f}%</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>

            <!-- TOP 10 PRODUK TERLARIS (RESPONSIVE CARD / TABLE HYBRID) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-ranking-star"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Top 10 Produk Terlaris &amp; Kontribusi Laba</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Produk dengan volume penjualan &amp; margin keuntungan tertinggi</p>
                        </div>
                    </div>
                </div>

                <!-- Tampilan Mobile (< 640px): Leaderboard Cards -->
                <div class="block sm:hidden p-3.5 space-y-3">
                    ${m}
                </div>

                <!-- Tampilan Desktop (>= 640px): Full Table -->
                <div class="hidden sm:block overflow-x-auto">
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
                        <tbody>${y}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},rt=t=>{const a=t.length?t.map((e,o)=>{let d="";e.status==="empty"?d='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">Habis</span>':e.status==="low"?d=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60">Sisa ${e.stock}</span>`:d=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Stok Aman (${e.stock})</span>`;const b=e.totalRetail-e.totalHpp,r=e.price-e.hpp;return`
            <div class="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-start justify-between gap-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary)">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${P(e.name)}</p>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <span class="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase tracking-wider">${P(e.category)}</span>
                                ${e.brand&&e.brand!=="-"?`<span class="text-[9px] text-slate-400">• ${P(e.brand)}</span>`:""}
                            </div>
                        </div>
                    </div>
                    <div class="shrink-0">
                        ${d}
                    </div>
                </div>

                <!-- Bento Mini Grid 2x2 -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Stok Fisik</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${e.stock} ${e.unit}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Harga Jual Retail</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${l(e.price)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${l(e.totalRetail)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Modal Kulakan (HPP)</span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${l(e.hpp)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${l(e.totalHpp)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2);">
                        <span class="text-[9px] font-bold uppercase tracking-widest block" style="color: var(--color-primary);">Potensi Laba Kotor</span>
                        <span class="text-xs font-black truncate" style="color: var(--color-primary);">+${l(b)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Per unit: +${l(r)}</span>
                    </div>
                </div>
            </div>
        `}).join(""):`
        <div class="py-10 text-center flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-boxes-stacked text-base"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Tidak ada produk yang cocok</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Ubah pencarian atau reset filter untuk menampilkan barang</p>
        </div>
    `,s=t.length?t.map((e,o)=>{let d="";return e.status==="empty"?d='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>':e.status==="low"?d=`<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${e.stock}</span>`:d='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Aman</span>',`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${o+1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${P(e.name)}</p>
                    <p class="text-[10px] text-slate-400">${P(e.category)} • ${P(e.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${e.stock} ${e.unit}</span>
                        ${d}
                    </div>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${l(e.hpp)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${l(e.totalHpp)}</p>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${l(e.price)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${l(e.totalRetail)}</p>
                </td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-10 text-center text-xs text-slate-400">Tidak ada produk yang sesuai dengan filter</td></tr>
    `;return`
        <!-- Tampilan Mobile (< 640px): Native Inventory Cards -->
        <div class="block sm:hidden p-3.5 space-y-3">
            ${a}
        </div>

        <!-- Tampilan Desktop (>= 640px): Full Table -->
        <div class="hidden sm:block overflow-x-auto">
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
                <tbody>${s}</tbody>
            </table>
        </div>
    `},lt=()=>{const t=g.products||[];let a=0,s=0,e=0,o=0,d=0,b=0,r=0;const x=[];t.forEach(i=>{const u=parseFloat(i.minStock)||5;if(i.variants&&i.variants.length)i.variants.forEach(m=>{o++;const y=parseFloat(m.stock)||0,n=parseFloat(m.hpp)||0,f=parseFloat(m.price)||0;e+=y,a+=y*n,s+=y*f;let p="safe";y<=0?(d++,p="empty"):y<=u?(b++,p="low"):r++,x.push({id:i.id,variantId:m.id||m.name,name:`${i.name} (${m.name})`,category:i.category||"Umum",brand:i.brand||"-",stock:y,unit:i.unit||"pcs",hpp:n,price:f,totalHpp:y*n,totalRetail:y*f,status:p,minStock:u,image:i.image||""})});else{o++;const m=parseFloat(i.stock)||0,y=parseFloat(i.hpp)||0,n=parseFloat(i.price)||0;e+=m,a+=m*y,s+=m*n;let f="safe";m<=0?(d++,f="empty"):m<=u?(b++,f="low"):r++,x.push({id:i.id,variantId:null,name:i.name,category:i.category||"Umum",brand:i.brand||"-",stock:m,unit:i.unit||"pcs",hpp:y,price:n,totalHpp:m*y,totalRetail:m*n,status:f,minStock:u,image:i.image||""})}});const c=s-a;return{stockItems:x,totalAssetHpp:a,totalAssetRetail:s,totalPhysicalUnits:e,totalSkuCount:o,outOfStockCount:d,lowStockCount:b,safeStockCount:r,potentialMargin:c}},ot=t=>{let a=t.filter(s=>{if(C!=="all"&&s.status!==C||O!=="all"&&s.category!==O)return!1;if(M){const e=M.toLowerCase();return s.name.toLowerCase().includes(e)||s.category.toLowerCase().includes(e)||s.brand.toLowerCase().includes(e)}return!0});return a.sort((s,e)=>s.stock-e.stock),a},nt=()=>{if(typeof document>"u")return;const t=document.getElementById("stock-report-list-container");if(!t){H();return}const{stockItems:a}=lt(),s=ot(a);t.innerHTML=rt(s)},H=()=>{const t=g.categories||[],a=lt(),{stockItems:s,totalAssetHpp:e,totalAssetRetail:o,totalPhysicalUnits:d,totalSkuCount:b,outOfStockCount:r,lowStockCount:x,safeStockCount:c,potentialMargin:i}=a,u=ot(s),y=[{key:"all",label:"Semua",count:s.length},{key:"empty",label:"Habis",count:r,colorClass:"text-rose-600 dark:text-rose-400"},{key:"low",label:"Menipis",count:x,colorClass:"text-amber-600 dark:text-amber-400"},{key:"safe",label:"Aman",count:c,colorClass:"text-emerald-600 dark:text-emerald-400"}].map(n=>{const f=C===n.key;return`
            <button type="button" onclick="filterStockReportStatus('${n.key}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 flex items-center gap-1.5 ${f?"bg-[var(--color-primary)] text-white shadow-2xs font-black":"bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[var(--color-primary)]"}">
                <span>${n.label}</span>
                <span class="px-1.5 py-0.2 rounded-md text-[10px] ${f?"bg-white/25 text-white":"bg-slate-200/80 dark:bg-slate-700 "+(n.colorClass||"text-slate-600 dark:text-slate-300")}">${n.count}</span>
            </button>
        `}).join("");j("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aset Modal (HPP)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${l(e)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">Modal fisik tertanam</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nilai Jual Retail</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${l(o)}</p>
                    </div>
                    <p class="text-[10px] font-bold mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate" style="color: var(--color-primary)">Potensi margin: ${l(i)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fisik Barang</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"><i class="fa-solid fa-box-archive"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${d.toLocaleString("id-ID")} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">${b} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kritis Stok</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i></span>
                        </div>
                        <div class="flex items-center gap-1.5 mt-1">
                            <button type="button" onclick="filterStockReportStatus('empty')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 active:scale-95 cursor-pointer" title="Klik filter habis">${r} Habis</button>
                            <button type="button" onclick="filterStockReportStatus('low')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 active:scale-95 cursor-pointer" title="Klik filter menipis">${x} Menipis</button>
                        </div>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Aman: <b>${c}</b></span>
                        <button type="button" onclick="filterStockReportStatus('all')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">Lihat Semua</button>
                    </div>
                </div>
            </div>

            <!-- VALUASI INVENTORI & FILTER BAR -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Valuasi Inventori Gudang</h3>
                                <p class="text-[10px] text-slate-400 mt-0.5">Daftar barang beserta perbandingan modal HPP vs harga retail</p>
                            </div>
                        </div>

                        <!-- Bar Pencarian, Dropdown Kategori & Tombol Stock Opname -->
                        <div class="flex items-center flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                            <button type="button" onclick="openAdminTab('stock_opname')" class="px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Audit fisik stok rak & rekonsiliasi selisih">
                                <i class="fa-solid fa-clipboard-check text-xs"></i> <span>Stock Opname</span>
                            </button>
                            <!-- Input Pencarian dengan Clear Button (Zero-Flicker) -->
                            <div class="relative flex-1 sm:w-56">
                                <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
                                <input type="text" id="stock-report-search-input" placeholder="Cari nama barang / SKU..." value="${P(M)}" oninput="filterStockReportSearch(this.value)" class="w-full pl-8 pr-7 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden">
                                <button type="button" id="stock-report-search-clear-btn" onclick="filterStockReportSearch('')" style="display: ${M?"block":"none"};" class="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </button>
                            </div>

                            <!-- Filter Kategori -->
                            <select onchange="filterStockReportCategory(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer max-w-[140px] sm:max-w-none truncate">
                                <option value="all" ${O==="all"?"selected":""}>Semua Kategori</option>
                                ${t.map(n=>`<option value="${n.name}" ${O===n.name?"selected":""}>${n.name}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <!-- Filter Status Pills Carousel -->
                    <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-1">
                        ${y}
                    </div>
                </div>

                <!-- Container Daftar Stok (Zero-Flicker Partial DOM) -->
                <div id="stock-report-list-container">
                    ${rt(u)}
                </div>
            </div>
        </div>
    `)},kt=()=>{it("")},vt=t=>{C=t,H()},yt=t=>{O=t,H()},it=t=>{if(M=t||"",typeof document<"u"){const a=document.getElementById("stock-report-search-input");a&&a.value!==M&&document.activeElement!==a&&(a.value=M);const s=document.getElementById("stock-report-search-clear-btn");s&&(s.style.display=M?"block":"none")}nt()},ht=()=>{const t=N||[];let a=0,s=0;const e={};t.forEach(p=>{const h=Y(p),$=h.totalAkhir;a+=$,h.isLate?s++:h.isDueSoon;const w=p.customer?.name||"Pelanggan Umum",A=p.customer?.phone||p.customer?.wa||"-";e[w]||(e[w]={name:w,phone:A,totalPiutang:0,orderCount:0,isLate:!1}),e[w].totalPiutang+=$,e[w].orderCount++,h.isLate&&(e[w].isLate=!0)});const o=Object.values(e).sort((p,h)=>h.totalPiutang-p.totalPiutang),d=W(),b=d.totalUnpaidDebt,r=g.purchases||[],x={};r.forEach(p=>{if(p.paymentType==="tempo"&&p.paymentStatus!=="lunas"&&p.status!=="cancelled"){const h=parseFloat(p.total)||0,$=parseFloat(p.amountPaid)||0,w=h-$;if(w>0){const A=p.supplierName||"Supplier";x[A]||(x[A]={name:A,totalDebt:0,poCount:0}),x[A].totalDebt+=w,x[A].poCount++}}});const c=Object.values(x).sort((p,h)=>h.totalDebt-p.totalDebt),i=a-b,u=i>=0,m=o.length?o.slice(0,8).map(p=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${P(p.name)}</p>
                        ${p.isLate?'<span class="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">Jatuh Tempo</span>':""}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5">${p.orderCount} nota tempo aktif</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-slate-900 dark:text-white">${l(p.totalPiutang)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Tagihan</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-phone text-[9px]"></i> ${P(p.phone)}
                </span>
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-[10px] font-bold shadow-2xs hover:opacity-90 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1">
                    Kelola Nota <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </button>
            </div>
        </div>
    `).join(""):`
        <div class="py-8 px-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-center space-y-2">
            <div class="w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-sm" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Tidak Ada Piutang Pelanggan</p>
            <p class="text-[10px] text-slate-400 max-w-xs mx-auto">Seluruh pelanggan telah melunasi tagihannya atau belum ada penjualan tempo aktif.</p>
        </div>
    `,y=o.length?o.slice(0,5).map(p=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                 <p class="font-bold text-slate-800 dark:text-white truncate">${P(p.name)}</p>
                 <p class="text-[10px] text-slate-400">${p.orderCount} nota ${p.isLate?'<span class="text-rose-500 font-bold">• Terlambat</span>':""}</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-white">${l(p.totalPiutang)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Buka</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Tidak ada piutang pelanggan aktif</td></tr>
    `,n=c.length?c.slice(0,8).map(p=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${P(p.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${p.poCount} invoice PO tempo kulakan</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${l(p.totalDebt)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Hutang Toko</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-truck text-[9px]"></i> Rekanan Kulakan
                </span>
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-[10px] font-bold shadow-2xs hover:opacity-90 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1">
                    Bayar PO <i class="fa-solid fa-arrow-right text-[8px]"></i>
                </button>
            </div>
        </div>
    `).join(""):`
        <div class="py-8 px-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-center space-y-2">
            <div class="w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-sm bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <i class="fa-solid fa-check-double"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Seluruh Tagihan Lunas</p>
            <p class="text-[10px] text-slate-400 max-w-xs mx-auto">Seluruh tagihan pembelian & kulakan ke supplier telah lunas tepat waktu.</p>
        </div>
    `,f=c.length?c.slice(0,5).map(p=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                <p class="font-bold text-slate-800 dark:text-white truncate">${P(p.name)}</p>
                <p class="text-[10px] text-slate-400">${p.poCount} invoice PO tempo</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-rose-500">${l(p.totalDebt)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Bayar</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Seluruh tagihan kulakan supplier telah lunas</td></tr>
    `;j("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- KARTU POSISI BERSIH LIKUIDITAS TOKO -->
            <div class="rounded-2xl border p-4 sm:p-5 ${u?"":"border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20"}" style="${u?"border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08), rgba(var(--color-primary-rgb), 0.02));":""}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span class="text-[9px] font-black uppercase tracking-widest ${u?"":"text-rose-700 dark:text-rose-400"}" style="${u?"color: var(--color-primary);":""}">
                            Posisi Bersih Likuiditas Toko (Net Working Capital Gap)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black ${u?"":"text-rose-800 dark:text-rose-300"} mt-0.5" style="${u?"color: var(--color-primary);":""}">
                            ${u?"+":""}${l(i)}
                        </h2>
                        <p class="text-xs ${u?"":"text-rose-700 dark:text-rose-400"} mt-1 font-medium" style="${u?"color: var(--color-primary); opacity: 0.9;":""}">
                            ${u?"Surplus Piutang: Hak tagihan toko di pelanggan lebih besar daripada kewajiban toko ke supplier.":"Defisit Utang: Kewajiban toko ke supplier lebih besar daripada tagihan piutang di pelanggan."}
                        </p>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Piutang Pelanggan</span>
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${l(a)}</span>
                        </div>
                        <span class="text-slate-400 font-black text-sm">−</span>
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${l(b)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DUA KOLOM: PIUTANG PELANGGAN vs UTANG SUPPLIER -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <!-- KOLOM KIRI: PIUTANG PELANGGAN (ACCOUNTS RECEIVABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Piutang Pelanggan</h3>
                                <p class="text-[10px] text-slate-400">${t.length} nota tempo aktif</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('piutang')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional Tempo <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Piutang Toko</span>
                            <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 truncate">${l(a)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${s} Nota</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Debitur Pelanggan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${m}
                        </div>

                        <!-- Desktop View (>= 640px): Table -->
                        <div class="hidden sm:block overflow-x-auto">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                        <th class="py-2 px-3">Nama Pelanggan</th>
                                        <th class="py-2 px-3 text-right">Sisa Tagihan</th>
                                        <th class="py-2 px-3 text-right w-16">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${y}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- KOLOM KANAN: UTANG SUPPLIER KULAKAN (ACCOUNTS PAYABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
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

                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Hutang Supplier</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5 truncate">${l(b)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold uppercase" style="color: var(--color-primary)">Menunggu Kirim Barang</span>
                            <p class="text-sm sm:text-base font-black mt-0.5 truncate" style="color: var(--color-primary)">${d.pendingArrivalCount} PO</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tagihan Supplier Rekanan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${n}
                        </div>

                        <!-- Desktop View (>= 640px): Table -->
                        <div class="hidden sm:block overflow-x-auto">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr class="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
                                        <th class="py-2 px-3">Nama Supplier</th>
                                        <th class="py-2 px-3 text-right">Sisa Hutang</th>
                                        <th class="py-2 px-3 text-right w-16">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${f}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},wt=async(t=null)=>{if(typeof window.openExpenseModal=="function"){window.openExpenseModal(t);return}try{const a=await xt(()=>import("./expenses-C4hjzaSY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));a&&typeof a.openExpenseModal=="function"?a.openExpenseModal(t):typeof window.openExpenseModal=="function"&&window.openExpenseModal(t)}catch(a){console.error("[Reports] Gagal membuka form pengeluaran operasional:",a),D("Gagal memuat modul pengeluaran operasional.")}};window.openExpenseModalFromReports=wt;const Pt=()=>{const t=v===0?`Tahun ${k}`:`${E[v-1]} ${k}`,a=z(),s=v===0?null:`${k}-${v}`,e=g.taxSettings?.monthlyExpenses||{},o=g.taxSettings?.expenseBreakdown||{},d=R.map(c=>{const i=a.categories[c.key]||0,u=a.total>0?(i/a.total*100).toFixed(0):"0";return`
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${c.label}</span>
                        <i class="fa-solid ${c.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${l(i)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${u}%</span>
                </div>
            </div>
        `}).join("");let b="";if(v===0){const c=Array.from({length:12},(i,u)=>u+1).map(i=>{const u=`${k}-${i}`,m=e[u]||0;return`
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${E[i-1]} ${k}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${m}" onchange="saveReportMonthlyExpense('${u}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join("");b=`
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${k}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${c}</div>
            </div>
        `}else{const c=o[s]||{},i=R.map(m=>{const y=c[m.key]||0;return`
                <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${m.icon} text-xs text-slate-400 w-4"></i>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${m.label}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${y}" id="input-exp-${m.key}" oninput="calcReportMonthlyExpenseTotal()" class="w-36 text-right font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join(""),u=e[s]||0;b=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${t}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${l(u)}</span>
                </div>

                <div class="space-y-1">${i}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${s}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `}const r=a.periodExpenses&&a.periodExpenses.length>0,x=r?`
        <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i> Riwayat Transaksi Beban Operasional — ${t}
                    </h3>
                    <p class="text-[10px] text-slate-400 mt-0.5">Daftar nota pengeluaran operasional yang dicatat di Buku Kas</p>
                </div>
                <button type="button" onclick="openAdminTab('expenses')" class="text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-80" style="color: var(--color-primary)">
                    <span>Buka Buku Kas Lengkap</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>

            <!-- Tabel Transaksi Desktop & Mobile Card -->
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/60 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-100 dark:border-slate-800">
                        <tr>
                            <th class="py-2.5 px-3">Tanggal</th>
                            <th class="py-2.5 px-3">Kategori</th>
                            <th class="py-2.5 px-3">Keperluan</th>
                            <th class="py-2.5 px-3">Sumber</th>
                            <th class="py-2.5 px-3 text-right">Nominal</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        ${a.periodExpenses.slice(0,10).map(c=>{const i=R.find(m=>m.key===c.category)||R[6],u=c.source==="cash"?"Kas Toko":c.source==="bank"?"Transfer Bank":"Dana Owner";return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                                    <td class="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">${c.date||"-"}</td>
                                    <td class="py-2.5 px-3">
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                            <i class="fa-solid ${i.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                            <span>${i.label}</span>
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-white">${P(c.desc)}</p>
                                        ${c.recipient?`<span class="text-[10px] text-slate-400">Penerima: ${P(c.recipient)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 whitespace-nowrap">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400">${u}</span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100 text-sm whitespace-nowrap">
                                        - ${l(c.amount)}
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
            ${a.periodExpenses.length>10?`
                <div class="text-center pt-2">
                    <button type="button" onclick="openAdminTab('expenses')" class="text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">
                        + Lihat ${a.periodExpenses.length-10} transaksi lainnya di Buku Kas
                    </button>
                </div>
            `:""}
        </div>
    `:"";j("report-hub-content",`
        <div class="space-y-6">
            <!-- HEADER TOOLBAR BIAYA OPERASIONAL -->
            <div class="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div>
                    <h3 class="font-black text-sm text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-money-bill-transfer" style="color: var(--color-primary)"></i>
                        <span>Manajemen Biaya Operasional Toko</span>
                    </h3>
                    <p class="text-[11px] text-slate-400 mt-0.5">Catat nota beban berkala dan sinkronkan dengan perhitungan Laba Rugi</p>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button type="button" onclick="openAdminTab('expenses')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-book" style="color: var(--color-primary)"></i>
                        <span>Buku Kas &amp; Riwayat</span>
                    </button>
                    <button type="button" onclick="openExpenseModalFromReports()" class="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-white text-xs font-black shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- STATUS KONEKSI BUKU KAS -->
            <div class="p-3.5 rounded-xl border ${r?"border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300":"border-amber-200/80 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300"} flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <i class="fa-solid ${r?"fa-circle-check text-emerald-600 text-sm":"fa-circle-info text-amber-600 text-sm"}"></i>
                    <div>
                        <span class="font-bold">${r?"Sinkronisasi Otomatis Aktif":"Pencatatan Transaksional"}</span>: 
                        <span class="text-[11px] opacity-90">${r?`Terhubung dengan Buku Kas (${a.transactionCount} transaksi di ${t}).`:`Belum ada nota transaksi di ${t}. Anda dapat mencatat nota baru atau memasukkan estimasi nominal di bawah.`}</span>
                    </div>
                </div>
                <button type="button" onclick="openExpenseModalFromReports()" class="shrink-0 text-[11px] font-black underline cursor-pointer hover:opacity-80" style="color: var(--color-primary)">
                    + Catat Baru
                </button>
            </div>

            <!-- REKAP KARTU KATEGORI BEBAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Distribusi Biaya Operasional Toko — ${t}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-rose-600 dark:text-rose-400">${l(a.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${d}</div>
            </div>

            <!-- DAFTAR TRANSAKSI ITEM BUKU KAS (JIKA ADA) -->
            ${x}

            <!-- FORM PENYESUAIAN BULANAN / MANUAL OVERRIDE -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <div class="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyesuaian Manual / Input Angka Cepat</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Digunakan jika Anda ingin menyesuaikan total operasional secara langsung per bulan</p>
                </div>
                ${b}
            </div>
        </div>
    `)},$t=()=>{let t=0;R.forEach(a=>{const s=F(`input-exp-${a.key}`);s&&(t+=parseFloat(s.value)||0)}),pt("label-exp-total",l(t))},At=async t=>{I("Menyimpan biaya operasional...");const a={};let s=0;R.forEach(e=>{const o=F(`input-exp-${e.key}`),d=o&&parseFloat(o.value)||0;a[e.key]=d,s+=d}),g.taxSettings||(g.taxSettings={}),g.taxSettings.monthlyExpenses||(g.taxSettings.monthlyExpenses={}),g.taxSettings.expenseBreakdown||(g.taxSettings.expenseBreakdown={}),g.taxSettings.monthlyExpenses[t]=s,g.taxSettings.expenseBreakdown[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),L(),D("Biaya operasional berhasil disimpan!"),B()}catch(e){L(),D("Gagal menyimpan biaya operasional: "+e.message)}},Tt=async(t,a)=>{await bt(t,a),B()},St=()=>{const t=Z();v===0?`${k}`:`${E[v-1]}${k}`;const a=t.omset-t.disc,s=Math.round(t.omset*.005),e=g.taxSettings||{},o={};for(let r=1;r<=12;r++)o[r]={omset:0,ppn:0,orderCount:0};S.forEach(r=>{const x=Q(r);if(!x)return;const c=x.getMonth()+1;if(o[c]){const i=r.payment?.dppAmount!==void 0&&r.payment?.dppAmount!==null?parseFloat(r.payment.dppAmount):parseFloat(r.payment?.subtotal)||0;o[c].omset+=i,o[c].ppn+=parseFloat(r.payment?.ppnAmount)||0,o[c].orderCount++}});const d=Array.from({length:12},(r,x)=>x+1).map(r=>{const x=window.gTaxMonthly&&window.gTaxMonthly[r]&&window.gTaxMonthly[r].omset>0?window.gTaxMonthly[r]:o[r],c=v===r,i=Math.round((x.omset||0)*.005);return`
            <div class="p-3.5 rounded-xl border transition-all ${c?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] shadow-2xs":"border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${c?"bg-[var(--color-primary)] text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${r}</span>
                        <span class="text-xs font-black ${c?"text-[var(--color-primary)]":"text-slate-800 dark:text-white"}">${E[r-1]}</span>
                        ${c?'<span class="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[var(--color-primary)] text-white">Bulan Aktif</span>':""}
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        ${x.orderCount} Pesanan
                    </span>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-center">
                    <div>
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Omset (DPP)</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${l(x.omset)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPN</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${l(x.ppn)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPh 0,5%</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${l(i)}</span>
                    </div>
                </div>
            </div>
        `}).join(""),b=Array.from({length:12},(r,x)=>x+1).map(r=>{const x=window.gTaxMonthly&&window.gTaxMonthly[r]&&window.gTaxMonthly[r].omset>0?window.gTaxMonthly[r]:o[r],c=v===r,i=Math.round((x.omset||0)*.005);return`
            <tr class="${c?"bg-[rgba(var(--color-primary-rgb),0.08)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-800/40"} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${E[r-1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${l(x.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${l(x.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color: var(--color-primary)">${l(i)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${x.orderCount}</td>
            </tr>
        `}).join("");j("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Omset Bruto</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${l(t.omset)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${t.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Diskon Produk</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${l(t.disc)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">DPP Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-calculator"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${l(a)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color:var(--color-primary)">PPN Keluaran</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-receipt"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${l(t.ppn)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${t.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 col-span-2 lg:col-span-1 rounded-2xl flex flex-col justify-between" style="border: 1px solid rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.05);">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">PPh Final 0,5%</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.2); color: var(--color-primary);"><i class="fa-solid fa-building-columns"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color: var(--color-primary)">${l(s)}</p>
                    </div>
                    <p class="text-[10px] font-medium mt-2 pt-2 border-t border-[rgba(var(--color-primary-rgb),0.15)]" style="color: var(--color-primary); opacity: 0.85;">PP 55/2022 UMKM</p>
                </div>
            </div>

            <!-- TABEL REKAP 12 BULAN & PENGATURAN IDENTITAS PAJAK -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <!-- Tabel / Kartu 12 Bulan -->
                <div class="lg:col-span-2 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${k}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Dasar Pengenaan Pajak, PPN Keluaran, &amp; PPh Final 0,5%</p>
                        </div>
                        <button type="button" onclick="openTaxDocPreview('summary')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0">
                            <i class="fa-solid fa-print text-xs"></i> Cetak Rekap
                        </button>
                    </div>
                    
                    <!-- Mobile View (< 640px): Native Cards -->
                    <div class="block sm:hidden p-3.5 space-y-2.5">
                        ${d}
                    </div>

                    <!-- Desktop View (>= 640px): Full Table -->
                    <div class="hidden sm:block overflow-x-auto">
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
                            <tbody>${b}</tbody>
                        </table>
                    </div>
                </div>

                <!-- Formulir Identitas Pajak CTAS 2026 -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-id-card"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Identitas Wajib Pajak</h4>
                            <p class="text-[10px] text-slate-400">NPWP 16-Digit CTAS DJP 2026</p>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Nama Badan Usaha</label>
                            <input type="text" id="report-tax-company" value="${P(e.companyName||g.store?.name||"")}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${P(e.npwp||g.store?.taxNpwp||"")}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Skema PPh Toko</label>
                            <select id="report-tax-scheme" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden cursor-pointer">
                                <option value="umkm_final" ${e.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM 0,5% (PP 55/2022)</option>
                                <option value="badan_normal" ${e.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal 22% (UU HPP)</option>
                            </select>
                        </div>
                        <button type="button" onclick="saveReportTaxSettings()" class="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 mt-2 shadow-2xs">
                            <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)},jt=async()=>{I("Menyimpan pengaturan pajak..."),g.taxSettings||(g.taxSettings={});const t=G("report-tax-company"),a=G("report-tax-npwp"),s=G("report-tax-scheme");g.taxSettings.companyName=t,g.taxSettings.npwp=a,g.taxSettings.taxScheme=s,g.store||(g.store={}),g.store.taxNpwp=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),L(),D("Identitas pajak berhasil diperbarui!"),B()}catch(e){L(),D("Gagal menyimpan: "+e.message)}},Rt=()=>{const t=g.taxSettings?.balanceSheet||{kas:0},a=ut(),s=W(),e=parseFloat(t.kas)||0,o=N.reduce((i,u)=>i+(Y(u).totalAkhir||0),0),d=a.assetHpp||0,b=e+o+d,r=s.totalUnpaidDebt||0,x=Math.max(0,b-r),c=r+x;j("report-hub-content",`
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black" style="color: var(--color-primary)">${l(b)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${e}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${l(o)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${l(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span style="color: var(--color-primary)">${l(b)}</span>
                        </div>
                    </div>
                </div>

                <!-- PASIVA (KEWAJIBAN & MODAL) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs"><i class="fa-solid fa-scale-balanced"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">KEWAJIBAN &amp; MODAL</h3>
                        </div>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${l(c)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${l(r)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold" style="color: var(--color-primary)">${l(x)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-slate-800 dark:text-white">${l(c)}</span>
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
    `)},dt=()=>{T==="executive"||T==="sales"?K("income"):T==="tax"?K("summary"):T==="balance"?K("balance"):K("income")};window.renderReportsHubView=X;window.switchReportTab=tt;window.changeReportYear=et;window.changeReportMonth=at;window.refreshReportData=st;window.openReportCurrentDocPreview=dt;window.filterStockReportStatus=vt;window.filterStockReportCategory=yt;window.filterStockReportSearch=it;window.clearStockReportSearch=kt;window.renderStockReportListOnly=nt;window.calcReportMonthlyExpenseTotal=$t;window.saveReportExpenseBreakdown=At;window.saveReportMonthlyExpense=Tt;window.saveReportTaxSettings=jt;const Ut={renderReportsHubView:X,switchReportTab:tt,changeReportYear:et,changeReportMonth:at,refreshReportData:st,openReportCurrentDocPreview:dt};export{R as EXPENSE_CATEGORIES,$t as calcReportMonthlyExpenseTotal,at as changeReportMonth,et as changeReportYear,kt as clearStockReportSearch,Ut as default,U as fetchReportOrdersData,yt as filterStockReportCategory,it as filterStockReportSearch,vt as filterStockReportStatus,z as getExpenseBreakdownForPeriod,ot as getFilteredStockReportItems,Z as getReportFinancialTotals,lt as getStockValuationData,wt as openExpenseModalFromReports,dt as openReportCurrentDocPreview,Q as parseOrderDate,st as refreshReportData,Rt as renderBalanceSheetTab,ht as renderDebtsReceivablesTab,ft as renderExecutiveSummaryTab,Pt as renderExpensesTab,mt as renderReportTabContent,X as renderReportsHubView,B as renderReportsShell,gt as renderSalesAnalyticsTab,rt as renderStockReportListHtml,nt as renderStockReportListOnly,H as renderStockValuationTab,St as renderTaxComplianceTab,T as reportActiveTab,Ft as reportDebtFilter,v as reportMonth,Ct as reportSalesPeriod,M as reportSearchQuery,O as reportStockCategory,C as reportStockFilter,k as reportYear,At as saveReportExpenseBreakdown,Tt as saveReportMonthlyExpense,jt as saveReportTaxSettings,tt as switchReportTab};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/expenses-BZm5cg3n.js","assets/module-print-ClmNIsdq.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-admin-CgUdlwOL.js","assets/module-pos-BJz89BT1.js","assets/vendor-sortable-DzmX_rHT.js","assets/module-faq-Dq4OCuai.js","assets/index-DPpHoCW0.js","assets/vendor-utils-Bszxp-Ae.js","assets/module-member-Cd5OuYtF.js","assets/index-BA-aSWQe.css"])))=>i.map(i=>d[i]);
import{e as H,t as nt,f as a,ae as I,a7 as L,v as D,b as R,l as _,a as k,ao as dt,i as $,g as q}from"./module-print-ClmNIsdq.js";import{E as M,p as J,q as F,v as W,w as Q,M as E,x as it}from"./module-admin-CgUdlwOL.js";import{computePurchaseMetrics as z}from"./purchases-a5F-rYDG.js";import{a as ct}from"./module-pos-BJz89BT1.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./vendor-sortable-DzmX_rHT.js";import"./module-faq-Dq4OCuai.js";let A="executive",y=new Date().getFullYear(),h=0,Nt="month",U="all",K="all",Ot="all",N="",S=[],O=[],Y="";const X=e=>{if(!e)return null;let r=null;return e.timestamp?.toDate?r=e.timestamp.toDate():e.createdAt?.toDate?r=e.createdAt.toDate():e.dateMs?r=new Date(e.dateMs):e.dateString?r=new Date(e.dateString):typeof e.timestamp=="number"?r=new Date(e.timestamp):typeof e.timestamp=="string"?r=new Date(e.timestamp):typeof e.createdAt=="string"&&(r=new Date(e.createdAt)),r&&!isNaN(r.getTime())?r:null},V=async(e=!1)=>{const r=`${y}-${h}`;if(!e&&Y===r&&S.length>0)return{orders:S,piutang:O};S=[],O=[];try{(await _.collection("freshmart_orders").orderBy("timestamp","desc").limit(2e3).get().catch(async()=>await _.collection("freshmart_orders").limit(2e3).get())).forEach(c=>{const x=c.data();if(x.status==="Dibatalkan"||x.status==="Test")return;const s=X(x);if(!s)return;const d=s.getFullYear(),l=s.getMonth()+1;d===y&&(h!==0&&l!==h||S.push(x))}),(await _.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(c=>{O.push(c.data())}),Y=r}catch(i){console.error("[ReportsHub] Gagal memuat data transaksi:",i),D("Gagal memuat data transaksi laporan: "+i.message)}return{orders:S,piutang:O}},Z=()=>{let e=0,r=0,i=0,n=0,o=S.length;return S.forEach(c=>{const x=c.payment?.dppAmount!==void 0&&c.payment?.dppAmount!==null?parseFloat(c.payment.dppAmount):parseFloat(c.payment?.subtotal)||0;e+=x,r+=parseFloat(c.payment?.ppnAmount)||0,n+=parseFloat(c.payment?.productDiscount)||0,(c.items||[]).forEach(s=>{const d=s.hpp!==void 0&&s.hpp!==null?parseFloat(s.hpp):W(s)||0;i+=(parseFloat(d)||0)*(parseFloat(s.qty)||1)})}),{omset:e,ppn:r,hpp:i,disc:n,orderCount:o}},tt=()=>{const e=k.taxSettings?.expenseBreakdown||{},r=k.taxSettings?.monthlyExpenses||{},i=Array.isArray(k.expenses)?k.expenses:[],n=h===0?Array.from({length:12},(c,x)=>x+1):[h],o={total:0,transactionCount:0,categories:{},periodExpenses:[]};return M.forEach(c=>{o.categories[c.key]=0}),i.forEach(c=>{if(!c||!c.date)return;const[x,s]=c.date.split("-"),d=parseInt(x,10),l=parseInt(s,10);if(d===y&&(h===0||l===h)){const b=parseFloat(c.amount)||0,m=c.category||"lainnya";o.categories[m]!==void 0?o.categories[m]+=b:o.categories.lainnya+=b,o.total+=b,o.transactionCount++,o.periodExpenses.push(c)}}),o.periodExpenses.sort((c,x)=>new Date(x.date).getTime()-new Date(c.date).getTime()),n.forEach(c=>{const x=`${y}-${c}`;if(!i.some(d=>{if(!d||!d.date)return!1;const[l,b]=d.date.split("-");return parseInt(l,10)===y&&parseInt(b,10)===c})){const d=e[x];if(d)M.forEach(l=>{o.categories[l.key]+=parseFloat(d[l.key])||0}),o.total+=parseFloat(r[x])||0;else{const l=parseFloat(r[x])||0;o.total+=l,o.categories.lainnya+=l}}}),o},et=async(e=null)=>{e&&(A=e),H("admin-content")&&(R("admin-content",`
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `),await Promise.all([J(y),V()]),B())},B=()=>{const e=Array.from({length:6},(n,o)=>new Date().getFullYear()-4+o);h===0?`${y}`:`${E[h-1]}${y}`;const i=[{k:"executive",l:"Ringkasan & Laba Rugi",i:"fa-chart-pie",sub:"P&L Statement"},{k:"sales",l:"Penjualan & Kasir",i:"fa-chart-line",sub:"Omset & Kas"},{k:"stock",l:"Stok & Aset Gudang",i:"fa-boxes-stacked",sub:"Valuasi Inventori"},{k:"debts",l:"Utang & Piutang",i:"fa-scale-balanced",sub:"AP & AR Hub"},{k:"expenses",l:"Biaya Operasional",i:"fa-money-bill-transfer",sub:"Beban Toko"},{k:"tax",l:"Perpajakan RI 2026",i:"fa-file-invoice-dollar",sub:"PPN & PPh Final"},{k:"balance",l:"Neraca Keuangan",i:"fa-scale-unbalanced",sub:"Aset & Modal"}].map(n=>{const o=A===n.k;return`
            <button type="button" onclick="switchReportTab('${n.k}')" class="group flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 snap-start ${o?"bg-[var(--color-primary)] text-white shadow-2xs font-black":"bg-slate-50 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.06)]"}">
                <div class="w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${o?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors">
                    <i class="fa-solid ${n.i} text-[10px]"></i>
                </div>
                <span>${n.l}</span>
            </button>
        `}).join("");R("admin-content",`
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
                                <option value="0" ${h===0?"selected":""}>Setahun Penuh</option>
                                ${E.map((n,o)=>`<option value="${o+1}" ${h===o+1?"selected":""}>${n}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Filter Tahun -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-700 min-h-[36px]">
                            <i class="fa-solid fa-calendar text-[11px] text-slate-400"></i>
                            <select onchange="changeReportYear(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-2 pl-0.5 focus:outline-hidden cursor-pointer">
                                ${e.map(n=>`<option value="${n}" ${n===y?"selected":""}>${n}</option>`).join("")}
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
                    ${i}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `),pt()},at=e=>{A=e,B()},st=async e=>{y=parseInt(e,10),I("Memuat data tahun "+y+"..."),await Promise.all([J(y),V(!0)]),L(),B()},rt=async e=>{h=parseInt(e,10),I("Memuat data bulan..."),await V(!0),L(),B()},lt=async()=>{I("Menyinkronkan data terbaru..."),await Promise.all([J(y),V(!0)]),L(),D("Data laporan berhasil disegarkan!"),B()},pt=()=>{H("report-hub-content")&&(A==="executive"?xt():A==="sales"?bt():A==="stock"?C():A==="debts"?kt():A==="expenses"?yt():A==="tax"?$t():A==="balance"&&Tt())},xt=()=>{const e=Z(),r=h===0?`Tahun ${y}`:`${E[h-1]} ${y}`,i=e.omset,n=e.disc,o=i-n,c=e.hpp,x=o-c,s=tt().total,d=x-s,l=k.taxSettings?.taxScheme||"umkm_final";let b=0,m="PPh Final UMKM 0,5% (PP 55/2022)";if(l==="umkm_final")b=Math.round(i*.005);else if(l==="badan_normal")b=d>0?Math.round(d*.22):0,m="PPh Badan Normal 22% (UU HPP)";else{const t=parseFloat(k.taxSettings?.customTaxRate)||.5;b=d>0?Math.round(d*(t/100)):0,m=`PPh Custom (${t}%)`}const P=d-b,T=i>0?(x/i*100).toFixed(1):"0.0",p=i>0?(P/i*100).toFixed(1):"0.0",w=i>0?(s/i*100).toFixed(1):"0.0";R("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            ${e.orderCount===0?`
            <!-- BANNER STATUS INFORMASI TRANSAKSI KOSONG (THEME HARMONY) -->
            <div class="p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.25);">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary);">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white">Belum ada transaksi penjualan selesai pada ${r}</p>
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
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${a(i)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${e.orderCount} transaksi</span>
                        <span class="text-rose-500 font-bold">Disc: ${a(n)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${a(x)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${a(c)}</span>
                        <span class="font-bold" style="color: var(--color-primary)">Margin ${T}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Usaha</span>
                            <span class="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${a(s)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Beban toko</span>
                        <span class="text-slate-500 font-bold">${w}% omset</span>
                    </div>
                </div>

                <!-- 4. Laba Bersih Akhir (Royal Theme Card) -->
                <div class="card-modern p-4 sm:p-5 flex flex-col justify-between col-span-2 lg:col-span-1 rounded-2xl" style="border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-primary-rgb), 0.03));">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">Laba Bersih Riil</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.18); color: var(--color-primary)"><i class="fa-solid fa-crown"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${a(P)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 flex items-center justify-between text-[10px]" style="border-top: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                        <span class="font-medium" style="color: var(--color-primary); opacity: 0.85;">Net Profit</span>
                        <span class="font-black" style="color: var(--color-primary)">${p}%</span>
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
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Laporan Laba Rugi Komprehensif — ${r}</h3>
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
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Penjualan Bruto (${e.orderCount} pesanan)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${a(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${a(n)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white font-black">${a(o)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${a(c)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${a(x)}</span>
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
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${a(s)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white font-black">${a(d)}</span>
                        </div>
                    </div>

                    <!-- 4. PAJAK PENGHASILAN & LABA BERSIH -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">4. Kepatuhan Pajak &amp; Laba Bersih Akhir</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">${m}</span>
                            <span class="font-bold text-slate-700 dark:text-slate-300">− ${a(b)}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 px-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-2xs" style="background: var(--color-primary);">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-crown text-base"></i>
                                <span>LABA BERSIH TAHUN / BULAN BERJALAN</span>
                            </div>
                            <span class="text-base sm:text-lg font-black">${a(P)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},bt=()=>{const e=S||[],r=e.length;let i=0,n=0;const o={cash:{count:0,total:0,label:"Tunai Kasir",icon:"fa-money-bill-wave",color:"emerald"},qris:{count:0,total:0,label:"QRIS Dinamis / Statis",icon:"fa-qrcode",color:"blue"},transfer:{count:0,total:0,label:"Transfer Bank (BCA/Mandiri/BRI)",icon:"fa-building-columns",color:"purple"},tempo:{count:0,total:0,label:"Tempo / Putri PayLater",icon:"fa-clock-rotate-left",color:"amber"},other:{count:0,total:0,label:"Lainnya",icon:"fa-credit-card",color:"slate"}};let c=0,x=0;const s={};e.forEach(p=>{const w=parseFloat(p.payment?.subtotal)||0;parseFloat(p.payment?.productDiscount),i+=w;const t=(p.payment?.method||"").toLowerCase();let f="other";t.includes("cash")||t.includes("tunai")?f="cash":t.includes("qris")?f="qris":t.includes("transfer")||t.includes("bca")||t.includes("mandiri")||t.includes("bri")?f="transfer":(t.includes("tempo")||t.includes("paylater"))&&(f="tempo"),o[f].count++,o[f].total+=w,p.cashierShiftId||p.cashierId||p.notes&&p.notes.includes("POS")?c+=w:x+=w,(p.items||[]).forEach(u=>{const g=parseFloat(u.qty)||1;n+=g;const v=u.id||u.name;s[v]||(s[v]={id:v,name:u.name||"Produk",qty:0,omset:0,hpp:0,image:u.image||""});const j=u.hpp!==void 0&&u.hpp!==null?parseFloat(u.hpp):W(u);s[v].qty+=g,s[v].omset+=(parseFloat(u.price)||0)*g,s[v].hpp+=j*g})});const d=r>0?Math.round(i/r):0,l=r>0?(n/r).toFixed(1):"0",b=Object.values(s).sort((p,w)=>w.qty-p.qty).slice(0,10),m=b.length?Math.max(...b.map(p=>p.omset||1)):1,P=b.length?b.map((p,w)=>{const t=p.omset-p.hpp,f=p.omset>0?(t/p.omset*100).toFixed(0):"0",u=Math.min(100,Math.max(8,Math.round(p.omset/m*100)));let g="";return w===0?g='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-950 shadow-2xs shrink-0"><i class="fa-solid fa-trophy text-[11px]"></i></span>':w===1?g='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-2xs shrink-0">#2</span>':w===2?g='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-amber-700/20 text-amber-800 dark:text-amber-300 border border-amber-600/30 shrink-0">#3</span>':g=`<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">#${w+1}</span>`,`
            <div class="p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        ${g}
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${$(p.name)}</p>
                            <p class="text-[10px] text-slate-400">Modal HPP: ${a(p.hpp)}</p>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            ${p.qty} Unit
                        </span>
                    </div>
                </div>
                <!-- Progress bar omset -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500" style="width: ${u}%; background: var(--color-primary);"></div>
                </div>
                <!-- Stat 2 Kolom -->
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Total Omset</span>
                        <span class="font-black text-slate-800 dark:text-white">${a(p.omset)}</span>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl text-right">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Laba Kotor</span>
                        <span class="font-black" style="color: var(--color-primary);">${a(t)} <span class="text-[9px] font-normal text-slate-400">(${f}%)</span></span>
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
    `,T=b.length?b.map((p,w)=>{const t=p.omset-p.hpp,f=p.omset>0?(t/p.omset*100).toFixed(0):"0";return`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${w+1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${$(p.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${a(p.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${p.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${a(p.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black" style="color: var(--color-primary);">${a(t)} <span class="text-[9px] font-normal text-slate-400">(${f}%)</span></td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;R("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${a(i)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${r} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rata-Rata Keranjang (AOV)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-basket-shopping"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${a(d)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Per transaksi pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Barang Terjual</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-boxes-packing"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${n} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Rata-rata ${l} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kanal Penjualan</span>
                            <span class="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-cash-register"></i></span>
                        </div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                            <span>Kasir POS:</span> <b style="color: var(--color-primary)">${a(c)}</b>
                        </p>
                    </div>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span>Storefront:</span> <b class="text-slate-600 dark:text-slate-300">${a(x)}</b>
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
                    ${Object.values(o).filter(p=>p.count>0||p.label.includes("Tunai")||p.label.includes("QRIS")||p.label.includes("Transfer")||p.label.includes("Tempo")).map(p=>{const w=i>0?(p.total/i*100).toFixed(0):"0";return`
                            <div class="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 shadow-2xs">
                                        <i class="fa-solid ${p.icon}"></i>
                                    </div>
                                    <p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate">${p.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${a(p.total)}</p>
                                <div class="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${w}%; background: var(--color-primary);"></div>
                                </div>
                                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                                    <span>${p.count} pesanan</span>
                                    <span class="font-bold text-slate-700 dark:text-slate-300">${w}%</span>
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
                    ${P}
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
                        <tbody>${T}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},C=()=>{const e=k.products||[],r=k.categories||[];k.brands;let i=0,n=0,o=0,c=0,x=0,s=0,d=0;const l=[];e.forEach(t=>{const f=parseFloat(t.minStock)||5;if(t.variants&&t.variants.length)t.variants.forEach(u=>{c++;const g=parseFloat(u.stock)||0,v=parseFloat(u.hpp)||0,j=parseFloat(u.price)||0;o+=g,i+=g*v,n+=g*j;let G="safe";g<=0?(x++,G="empty"):g<=f?(s++,G="low"):d++,l.push({id:t.id,variantId:u.id||u.name,name:`${t.name} (${u.name})`,category:t.category||"Umum",brand:t.brand||"-",stock:g,unit:t.unit||"pcs",hpp:v,price:j,totalHpp:g*v,totalRetail:g*j,status:G,minStock:f,image:t.image||""})});else{c++;const u=parseFloat(t.stock)||0,g=parseFloat(t.hpp)||0,v=parseFloat(t.price)||0;o+=u,i+=u*g,n+=u*v;let j="safe";u<=0?(x++,j="empty"):u<=f?(s++,j="low"):d++,l.push({id:t.id,variantId:null,name:t.name,category:t.category||"Umum",brand:t.brand||"-",stock:u,unit:t.unit||"pcs",hpp:g,price:v,totalHpp:u*g,totalRetail:u*v,status:j,minStock:f,image:t.image||""})}});const b=n-i;let m=l.filter(t=>{if(U!=="all"&&t.status!==U||K!=="all"&&t.category!==K)return!1;if(N){const f=N.toLowerCase();return t.name.toLowerCase().includes(f)||t.category.toLowerCase().includes(f)||t.brand.toLowerCase().includes(f)}return!0});m.sort((t,f)=>t.stock-f.stock);const P=m.length?m.map((t,f)=>{let u="";t.status==="empty"?u='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">Habis</span>':t.status==="low"?u=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60">Sisa ${t.stock}</span>`:u=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Stok Aman (${t.stock})</span>`;const g=t.totalRetail-t.totalHpp,v=t.price-t.hpp;return`
            <div class="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-start justify-between gap-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary)">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${$(t.name)}</p>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <span class="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase tracking-wider">${$(t.category)}</span>
                                ${t.brand&&t.brand!=="-"?`<span class="text-[9px] text-slate-400">• ${$(t.brand)}</span>`:""}
                            </div>
                        </div>
                    </div>
                    <div class="shrink-0">
                        ${u}
                    </div>
                </div>

                <!-- Bento Mini Grid 2x2 -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Stok Fisik</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${t.stock} ${t.unit}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Harga Jual Retail</span>
                        <span class="text-xs font-black text-slate-800 dark:text-white">${a(t.price)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${a(t.totalRetail)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Modal Kulakan (HPP)</span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${a(t.hpp)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${a(t.totalHpp)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2);">
                        <span class="text-[9px] font-bold uppercase tracking-widest block" style="color: var(--color-primary);">Potensi Laba Kotor</span>
                        <span class="text-xs font-black truncate" style="color: var(--color-primary);">+${a(g)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Per unit: +${a(v)}</span>
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
    `,T=m.length?m.map((t,f)=>{let u="";return t.status==="empty"?u='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>':t.status==="low"?u=`<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${t.stock}</span>`:u='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Aman</span>',`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${f+1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400">${$(t.category)} • ${$(t.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${t.stock} ${t.unit}</span>
                        ${u}
                    </div>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${a(t.hpp)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${a(t.totalHpp)}</p>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${a(t.price)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${a(t.totalRetail)}</p>
                </td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-10 text-center text-xs text-slate-400">Tidak ada produk yang sesuai dengan filter</td></tr>
    `,w=[{key:"all",label:"Semua",count:l.length},{key:"empty",label:"Habis",count:x,colorClass:"text-rose-600 dark:text-rose-400"},{key:"low",label:"Menipis",count:s,colorClass:"text-amber-600 dark:text-amber-400"},{key:"safe",label:"Aman",count:d,colorClass:"text-emerald-600 dark:text-emerald-400"}].map(t=>{const f=U===t.key;return`
            <button type="button" onclick="filterStockReportStatus('${t.key}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 flex items-center gap-1.5 ${f?"bg-[var(--color-primary)] text-white shadow-2xs font-black":"bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[var(--color-primary)]"}">
                <span>${t.label}</span>
                <span class="px-1.5 py-0.2 rounded-md text-[10px] ${f?"bg-white/25 text-white":"bg-slate-200/80 dark:bg-slate-700 "+(t.colorClass||"text-slate-600 dark:text-slate-300")}">${t.count}</span>
            </button>
        `}).join("");R("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aset Modal (HPP)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${a(i)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">Modal fisik tertanam</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nilai Jual Retail</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${a(n)}</p>
                    </div>
                    <p class="text-[10px] font-bold mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate" style="color: var(--color-primary)">Potensi margin: ${a(b)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fisik Barang</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"><i class="fa-solid fa-box-archive"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${o.toLocaleString("id-ID")} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">${c} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kritis Stok</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i></span>
                        </div>
                        <div class="flex items-center gap-1.5 mt-1">
                            <button type="button" onclick="filterStockReportStatus('empty')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 active:scale-95 cursor-pointer" title="Klik filter habis">${x} Habis</button>
                            <button type="button" onclick="filterStockReportStatus('low')" class="px-2 py-0.5 rounded-lg text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 active:scale-95 cursor-pointer" title="Klik filter menipis">${s} Menipis</button>
                        </div>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Aman: <b>${d}</b></span>
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
                            <!-- Input Pencarian dengan Clear Button -->
                            <div class="relative flex-1 sm:w-56">
                                <i class="fa-solid fa-search absolute left-3 top-2.5 text-xs text-slate-400"></i>
                                <input type="text" placeholder="Cari nama barang / SKU..." value="${$(N)}" oninput="filterStockReportSearch(this.value)" class="w-full pl-8 pr-7 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden">
                                ${N?`
                                    <button type="button" onclick="filterStockReportSearch('')" class="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </button>
                                `:""}
                            </div>

                            <!-- Filter Kategori -->
                            <select onchange="filterStockReportCategory(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer max-w-[140px] sm:max-w-none truncate">
                                <option value="all" ${K==="all"?"selected":""}>Semua Kategori</option>
                                ${r.map(t=>`<option value="${t.name}" ${K===t.name?"selected":""}>${t.name}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <!-- Filter Status Pills Carousel -->
                    <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-1">
                        ${w}
                    </div>
                </div>

                <!-- Tampilan Mobile (< 640px): Native Inventory Cards -->
                <div class="block sm:hidden p-3.5 space-y-3">
                    ${P}
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
                        <tbody>${T}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},ut=()=>{N="",C()},mt=e=>{U=e,C()},ft=e=>{K=e,C()},gt=e=>{N=e,C()},kt=()=>{const e=O||[];let r=0,i=0;const n={};e.forEach(t=>{const f=Q(t),u=f.totalAkhir;r+=u,f.isLate?i++:f.isDueSoon;const g=t.customer?.name||"Pelanggan Umum",v=t.customer?.phone||t.customer?.wa||"-";n[g]||(n[g]={name:g,phone:v,totalPiutang:0,orderCount:0,isLate:!1}),n[g].totalPiutang+=u,n[g].orderCount++,f.isLate&&(n[g].isLate=!0)});const o=Object.values(n).sort((t,f)=>f.totalPiutang-t.totalPiutang),c=z(),x=c.totalUnpaidDebt,s=k.purchases||[],d={};s.forEach(t=>{if(t.paymentType==="tempo"&&t.paymentStatus!=="lunas"&&t.status!=="cancelled"){const f=parseFloat(t.total)||0,u=parseFloat(t.amountPaid)||0,g=f-u;if(g>0){const v=t.supplierName||"Supplier";d[v]||(d[v]={name:v,totalDebt:0,poCount:0}),d[v].totalDebt+=g,d[v].poCount++}}});const l=Object.values(d).sort((t,f)=>f.totalDebt-t.totalDebt),b=r-x,m=b>=0,P=o.length?o.slice(0,8).map(t=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                        ${t.isLate?'<span class="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">Jatuh Tempo</span>':""}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5">${t.orderCount} nota tempo aktif</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-slate-900 dark:text-white">${a(t.totalPiutang)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Tagihan</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-phone text-[9px]"></i> ${$(t.phone)}
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
    `,T=o.length?o.slice(0,5).map(t=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                 <p class="font-bold text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                 <p class="text-[10px] text-slate-400">${t.orderCount} nota ${t.isLate?'<span class="text-rose-500 font-bold">• Terlambat</span>':""}</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-white">${a(t.totalPiutang)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Buka</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Tidak ada piutang pelanggan aktif</td></tr>
    `,p=l.length?l.slice(0,8).map(t=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${t.poCount} invoice PO tempo kulakan</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${a(t.totalDebt)}</span>
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
    `,w=l.length?l.slice(0,5).map(t=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                <p class="font-bold text-slate-800 dark:text-white truncate">${$(t.name)}</p>
                <p class="text-[10px] text-slate-400">${t.poCount} invoice PO tempo</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-rose-500">${a(t.totalDebt)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Bayar</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Seluruh tagihan kulakan supplier telah lunas</td></tr>
    `;R("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- KARTU POSISI BERSIH LIKUIDITAS TOKO -->
            <div class="rounded-2xl border p-4 sm:p-5 ${m?"":"border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20"}" style="${m?"border: 1px solid rgba(var(--color-primary-rgb), 0.35); background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08), rgba(var(--color-primary-rgb), 0.02));":""}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span class="text-[9px] font-black uppercase tracking-widest ${m?"":"text-rose-700 dark:text-rose-400"}" style="${m?"color: var(--color-primary);":""}">
                            Posisi Bersih Likuiditas Toko (Net Working Capital Gap)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black ${m?"":"text-rose-800 dark:text-rose-300"} mt-0.5" style="${m?"color: var(--color-primary);":""}">
                            ${m?"+":""}${a(b)}
                        </h2>
                        <p class="text-xs ${m?"":"text-rose-700 dark:text-rose-400"} mt-1 font-medium" style="${m?"color: var(--color-primary); opacity: 0.9;":""}">
                            ${m?"Surplus Piutang: Hak tagihan toko di pelanggan lebih besar daripada kewajiban toko ke supplier.":"Defisit Utang: Kewajiban toko ke supplier lebih besar daripada tagihan piutang di pelanggan."}
                        </p>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Piutang Pelanggan</span>
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${a(r)}</span>
                        </div>
                        <span class="text-slate-400 font-black text-sm">−</span>
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${a(x)}</span>
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
                                <p class="text-[10px] text-slate-400">${e.length} nota tempo aktif</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('piutang')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional Tempo <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Piutang Toko</span>
                            <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 truncate">${a(r)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${i} Nota</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Debitur Pelanggan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${P}
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
                                    ${T}
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
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5 truncate">${a(x)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold uppercase" style="color: var(--color-primary)">Menunggu Kirim Barang</span>
                            <p class="text-sm sm:text-base font-black mt-0.5 truncate" style="color: var(--color-primary)">${c.pendingArrivalCount} PO</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tagihan Supplier Rekanan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${p}
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
                                    ${w}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},vt=async(e=null)=>{if(typeof window.openExpenseModal=="function"){window.openExpenseModal(e);return}try{const r=await dt(()=>import("./expenses-BZm5cg3n.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));r&&typeof r.openExpenseModal=="function"?r.openExpenseModal(e):typeof window.openExpenseModal=="function"&&window.openExpenseModal(e)}catch(r){console.error("[Reports] Gagal membuka form pengeluaran operasional:",r),D("Gagal memuat modul pengeluaran operasional.")}};window.openExpenseModalFromReports=vt;const yt=()=>{const e=h===0?`Tahun ${y}`:`${E[h-1]} ${y}`,r=tt(),i=h===0?null:`${y}-${h}`,n=k.taxSettings?.monthlyExpenses||{},o=k.taxSettings?.expenseBreakdown||{},c=M.map(l=>{const b=r.categories[l.key]||0,m=r.total>0?(b/r.total*100).toFixed(0):"0";return`
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${l.label}</span>
                        <i class="fa-solid ${l.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${a(b)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${m}%</span>
                </div>
            </div>
        `}).join("");let x="";if(h===0){const l=Array.from({length:12},(b,m)=>m+1).map(b=>{const m=`${y}-${b}`,P=n[m]||0;return`
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${E[b-1]} ${y}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${P}" onchange="saveReportMonthlyExpense('${m}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join("");x=`
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${y}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${l}</div>
            </div>
        `}else{const l=o[i]||{},b=M.map(P=>{const T=l[P.key]||0;return`
                <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${P.icon} text-xs text-slate-400 w-4"></i>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${P.label}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${T}" id="input-exp-${P.key}" oninput="calcReportMonthlyExpenseTotal()" class="w-36 text-right font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join(""),m=n[i]||0;x=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${e}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${a(m)}</span>
                </div>

                <div class="space-y-1">${b}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${i}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `}const s=r.periodExpenses&&r.periodExpenses.length>0,d=s?`
        <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i> Riwayat Transaksi Beban Operasional — ${e}
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
                        ${r.periodExpenses.slice(0,10).map(l=>{const b=M.find(P=>P.key===l.category)||M[6],m=l.source==="cash"?"Kas Toko":l.source==="bank"?"Transfer Bank":"Dana Owner";return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                                    <td class="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">${l.date||"-"}</td>
                                    <td class="py-2.5 px-3">
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                            <i class="fa-solid ${b.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                            <span>${b.label}</span>
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-white">${$(l.desc)}</p>
                                        ${l.recipient?`<span class="text-[10px] text-slate-400">Penerima: ${$(l.recipient)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 whitespace-nowrap">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400">${m}</span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100 text-sm whitespace-nowrap">
                                        - ${a(l.amount)}
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
            ${r.periodExpenses.length>10?`
                <div class="text-center pt-2">
                    <button type="button" onclick="openAdminTab('expenses')" class="text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white">
                        + Lihat ${r.periodExpenses.length-10} transaksi lainnya di Buku Kas
                    </button>
                </div>
            `:""}
        </div>
    `:"";R("report-hub-content",`
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
            <div class="p-3.5 rounded-xl border ${s?"border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300":"border-amber-200/80 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300"} flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <i class="fa-solid ${s?"fa-circle-check text-emerald-600 text-sm":"fa-circle-info text-amber-600 text-sm"}"></i>
                    <div>
                        <span class="font-bold">${s?"Sinkronisasi Otomatis Aktif":"Pencatatan Transaksional"}</span>: 
                        <span class="text-[11px] opacity-90">${s?`Terhubung dengan Buku Kas (${r.transactionCount} transaksi di ${e}).`:`Belum ada nota transaksi di ${e}. Anda dapat mencatat nota baru atau memasukkan estimasi nominal di bawah.`}</span>
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
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Distribusi Biaya Operasional Toko — ${e}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-rose-600 dark:text-rose-400">${a(r.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${c}</div>
            </div>

            <!-- DAFTAR TRANSAKSI ITEM BUKU KAS (JIKA ADA) -->
            ${d}

            <!-- FORM PENYESUAIAN BULANAN / MANUAL OVERRIDE -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <div class="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyesuaian Manual / Input Angka Cepat</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Digunakan jika Anda ingin menyesuaikan total operasional secara langsung per bulan</p>
                </div>
                ${x}
            </div>
        </div>
    `)},ht=()=>{let e=0;M.forEach(r=>{const i=H(`input-exp-${r.key}`);i&&(e+=parseFloat(i.value)||0)}),nt("label-exp-total",a(e))},wt=async e=>{I("Menyimpan biaya operasional...");const r={};let i=0;M.forEach(n=>{const o=H(`input-exp-${n.key}`),c=o&&parseFloat(o.value)||0;r[n.key]=c,i+=c}),k.taxSettings||(k.taxSettings={}),k.taxSettings.monthlyExpenses||(k.taxSettings.monthlyExpenses={}),k.taxSettings.expenseBreakdown||(k.taxSettings.expenseBreakdown={}),k.taxSettings.monthlyExpenses[e]=i,k.taxSettings.expenseBreakdown[e]=r;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),L(),D("Biaya operasional berhasil disimpan!"),B()}catch(n){L(),D("Gagal menyimpan biaya operasional: "+n.message)}},Pt=async(e,r)=>{await it(e,r),B()},$t=()=>{const e=Z();h===0?`${y}`:`${E[h-1]}${y}`;const r=e.omset-e.disc,i=Math.round(e.omset*.005),n=k.taxSettings||{},o={};for(let s=1;s<=12;s++)o[s]={omset:0,ppn:0,orderCount:0};S.forEach(s=>{const d=X(s);if(!d)return;const l=d.getMonth()+1;if(o[l]){const b=s.payment?.dppAmount!==void 0&&s.payment?.dppAmount!==null?parseFloat(s.payment.dppAmount):parseFloat(s.payment?.subtotal)||0;o[l].omset+=b,o[l].ppn+=parseFloat(s.payment?.ppnAmount)||0,o[l].orderCount++}});const c=Array.from({length:12},(s,d)=>d+1).map(s=>{const d=window.gTaxMonthly&&window.gTaxMonthly[s]&&window.gTaxMonthly[s].omset>0?window.gTaxMonthly[s]:o[s],l=h===s,b=Math.round((d.omset||0)*.005);return`
            <div class="p-3.5 rounded-xl border transition-all ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] shadow-2xs":"border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${l?"bg-[var(--color-primary)] text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${s}</span>
                        <span class="text-xs font-black ${l?"text-[var(--color-primary)]":"text-slate-800 dark:text-white"}">${E[s-1]}</span>
                        ${l?'<span class="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[var(--color-primary)] text-white">Bulan Aktif</span>':""}
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        ${d.orderCount} Pesanan
                    </span>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-center">
                    <div>
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Omset (DPP)</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${a(d.omset)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPN</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${a(d.ppn)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPh 0,5%</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${a(b)}</span>
                    </div>
                </div>
            </div>
        `}).join(""),x=Array.from({length:12},(s,d)=>d+1).map(s=>{const d=window.gTaxMonthly&&window.gTaxMonthly[s]&&window.gTaxMonthly[s].omset>0?window.gTaxMonthly[s]:o[s],l=h===s,b=Math.round((d.omset||0)*.005);return`
            <tr class="${l?"bg-[rgba(var(--color-primary-rgb),0.08)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-800/40"} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${E[s-1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${a(d.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${a(d.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color: var(--color-primary)">${a(b)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${d.orderCount}</td>
            </tr>
        `}).join("");R("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Omset Bruto</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${a(e.omset)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${e.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Diskon Produk</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${a(e.disc)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">DPP Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-calculator"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${a(r)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color:var(--color-primary)">PPN Keluaran</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-receipt"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${a(e.ppn)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${e.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 col-span-2 lg:col-span-1 rounded-2xl flex flex-col justify-between" style="border: 1px solid rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.05);">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">PPh Final 0,5%</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.2); color: var(--color-primary);"><i class="fa-solid fa-building-columns"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color: var(--color-primary)">${a(i)}</p>
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
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${y}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Dasar Pengenaan Pajak, PPN Keluaran, &amp; PPh Final 0,5%</p>
                        </div>
                        <button type="button" onclick="openTaxDocPreview('summary')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0">
                            <i class="fa-solid fa-print text-xs"></i> Cetak Rekap
                        </button>
                    </div>
                    
                    <!-- Mobile View (< 640px): Native Cards -->
                    <div class="block sm:hidden p-3.5 space-y-2.5">
                        ${c}
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
                            <tbody>${x}</tbody>
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
                            <input type="text" id="report-tax-company" value="${$(n.companyName||k.store?.name||"")}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${$(n.npwp||k.store?.taxNpwp||"")}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Skema PPh Toko</label>
                            <select id="report-tax-scheme" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden cursor-pointer">
                                <option value="umkm_final" ${n.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM 0,5% (PP 55/2022)</option>
                                <option value="badan_normal" ${n.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal 22% (UU HPP)</option>
                            </select>
                        </div>
                        <button type="button" onclick="saveReportTaxSettings()" class="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 mt-2 shadow-2xs">
                            <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)},At=async()=>{I("Menyimpan pengaturan pajak..."),k.taxSettings||(k.taxSettings={});const e=q("report-tax-company"),r=q("report-tax-npwp"),i=q("report-tax-scheme");k.taxSettings.companyName=e,k.taxSettings.npwp=r,k.taxSettings.taxScheme=i,k.store||(k.store={}),k.store.taxNpwp=r;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),L(),D("Identitas pajak berhasil diperbarui!"),B()}catch(n){L(),D("Gagal menyimpan: "+n.message)}},Tt=()=>{const e=k.taxSettings?.balanceSheet||{kas:0},r=ct(),i=z(),n=parseFloat(e.kas)||0,o=O.reduce((b,m)=>b+(Q(m).totalAkhir||0),0),c=r.assetHpp||0,x=n+o+c,s=i.totalUnpaidDebt||0,d=Math.max(0,x-s),l=s+d;R("report-hub-content",`
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black" style="color: var(--color-primary)">${a(x)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${n}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${a(o)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${a(c)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span style="color: var(--color-primary)">${a(x)}</span>
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
                        <span class="text-xs font-black text-slate-800 dark:text-white">${a(l)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${a(s)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold" style="color: var(--color-primary)">${a(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-slate-800 dark:text-white">${a(l)}</span>
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
    `)},ot=()=>{A==="executive"||A==="sales"?F("income"):A==="tax"?F("summary"):A==="balance"?F("balance"):F("income")};window.renderReportsHubView=et;window.switchReportTab=at;window.changeReportYear=st;window.changeReportMonth=rt;window.refreshReportData=lt;window.openReportCurrentDocPreview=ot;window.filterStockReportStatus=mt;window.filterStockReportCategory=ft;window.filterStockReportSearch=gt;window.clearStockReportSearch=ut;window.calcReportMonthlyExpenseTotal=ht;window.saveReportExpenseBreakdown=wt;window.saveReportMonthlyExpense=Pt;window.saveReportTaxSettings=At;const Kt={renderReportsHubView:et,switchReportTab:at,changeReportYear:st,changeReportMonth:rt,refreshReportData:lt,openReportCurrentDocPreview:ot};export{M as EXPENSE_CATEGORIES,ht as calcReportMonthlyExpenseTotal,rt as changeReportMonth,st as changeReportYear,ut as clearStockReportSearch,Kt as default,V as fetchReportOrdersData,ft as filterStockReportCategory,gt as filterStockReportSearch,mt as filterStockReportStatus,tt as getExpenseBreakdownForPeriod,Z as getReportFinancialTotals,vt as openExpenseModalFromReports,ot as openReportCurrentDocPreview,X as parseOrderDate,lt as refreshReportData,Tt as renderBalanceSheetTab,kt as renderDebtsReceivablesTab,xt as renderExecutiveSummaryTab,yt as renderExpensesTab,pt as renderReportTabContent,et as renderReportsHubView,B as renderReportsShell,bt as renderSalesAnalyticsTab,C as renderStockValuationTab,$t as renderTaxComplianceTab,A as reportActiveTab,Ot as reportDebtFilter,h as reportMonth,Nt as reportSalesPeriod,N as reportSearchQuery,K as reportStockCategory,U as reportStockFilter,y as reportYear,wt as saveReportExpenseBreakdown,Pt as saveReportMonthlyExpense,At as saveReportTaxSettings,at as switchReportTab};

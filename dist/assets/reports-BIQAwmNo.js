const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./expenses-BLslBvx4.js","./module-print-C7VDw3er.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-pos-83ptgKlc.js","./module-member-DjNztP0x.js","./module-faq-CvKWsi_0.js","./module-admin-7Zia3Hf6.js","./vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{e as M,a1 as wt,f as c,l as W,n as H,a as v,k as C,b as D,q as dt,i as P,_ as Ut,o as Ht,g as ct}from"./module-print-C7VDw3er.js";import{E as R,f as ut,g as at,c as Y,o as tt,e as pt,M as L,s as Vt}from"./module-admin-7Zia3Hf6.js";import{computePurchaseMetrics as mt}from"./purchases-CDHyp4bu.js";import{i as Gt}from"./module-pos-83ptgKlc.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./vendor-sortable-DzmX_rHT.js";import"./module-faq-CvKWsi_0.js";import"./module-member-DjNztP0x.js";let T="executive",w=new Date().getFullYear(),$=0,he="month",E="all",_="all",ve="all",O="",j=[],K=[],yt="";const ft=t=>{if(!t)return null;let a=null;if(t.timestamp?.toDate)a=t.timestamp.toDate();else if(t.createdAt?.toDate)a=t.createdAt.toDate();else if(t.timestamp&&typeof t.timestamp=="object"){const e=t.timestamp.seconds??t.timestamp._seconds;typeof e=="number"&&!isNaN(e)&&e>0&&(a=new Date(e*1e3))}else if(t.createdAt&&typeof t.createdAt=="object"){const e=t.createdAt.seconds??t.createdAt._seconds;typeof e=="number"&&!isNaN(e)&&e>0&&(a=new Date(e*1e3))}else t.dateMs?a=new Date(t.dateMs):t.dateString?a=new Date(t.dateString):typeof t.timestamp=="number"?a=new Date(t.timestamp>1e11?t.timestamp:t.timestamp*1e3):typeof t.timestamp=="string"?a=new Date(t.timestamp):typeof t.createdAt=="string"&&(a=new Date(t.createdAt));if(a&&!isNaN(a.getTime()))return a;const o=t.orderId||t.id||"";if(typeof o=="string"&&o.startsWith("ORD-")){const e=o.split("-");if(e.length>=2&&e[1].length>=6){const s=parseInt(e[1],36);if(!isNaN(s)&&s>15e11&&s<25e11)return new Date(s)}}return null},st=async(t=!1)=>{const a=`${w}-${$}`;if(!t&&yt===a&&j.length>0)return{orders:j,piutang:K};j=[],K=[];try{(await dt.collection("freshmart_orders").orderBy("timestamp","desc").limit(2e3).get().catch(async()=>await dt.collection("freshmart_orders").limit(2e3).get())).forEach(i=>{const p=i.data();if(p.status==="Dibatalkan"||p.status==="Test")return;const l=ft(p);if(!l)return;const n=l.getFullYear(),m=l.getMonth()+1;n===w&&($!==0&&m!==$||j.push(p))}),(await dt.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(i=>{K.push(i.data())}),yt=a}catch(o){console.error("[ReportsHub] Gagal memuat data transaksi:",o),C("Gagal memuat data transaksi laporan: "+o.message)}return{orders:j,piutang:K}},gt=()=>{let t=0,a=0,o=0,e=0,s=j.length;return j.forEach(i=>{const p=i.payment?.dppAmount!==void 0&&i.payment?.dppAmount!==null?parseFloat(i.payment.dppAmount):parseFloat(i.payment?.subtotal)||0;t+=p,a+=parseFloat(i.payment?.ppnAmount)||0,e+=parseFloat(i.payment?.productDiscount)||0,(i.items||[]).forEach(l=>{const n=l.hpp!==void 0&&l.hpp!==null?parseFloat(l.hpp):Y(l)||0;o+=(parseFloat(n)||0)*(parseFloat(l.qty)||1)})}),{omset:t,ppn:a,hpp:o,disc:e,orderCount:s}},z=()=>{const t=v.taxSettings?.expenseBreakdown||{},a=v.taxSettings?.monthlyExpenses||{},o=Array.isArray(v.expenses)?v.expenses:[],e=$===0?Array.from({length:12},(i,p)=>p+1):[$],s={total:0,transactionCount:0,categories:{},periodExpenses:[]};return R.forEach(i=>{s.categories[i.key]=0}),o.forEach(i=>{if(!i||!i.date)return;const[p,l]=i.date.split("-"),n=parseInt(p,10),m=parseInt(l,10);if(n===w&&($===0||m===$)){const u=parseFloat(i.amount)||0,b=i.category||"lainnya";s.categories[b]!==void 0?s.categories[b]+=u:s.categories.lainnya+=u,s.total+=u,s.transactionCount++,s.periodExpenses.push(i)}}),s.periodExpenses.sort((i,p)=>new Date(p.date).getTime()-new Date(i.date).getTime()),e.forEach(i=>{const p=`${w}-${i}`;if(!o.some(n=>{if(!n||!n.date)return!1;const[m,u]=n.date.split("-");return parseInt(m,10)===w&&parseInt(u,10)===i})){const n=t[p];if(n)R.forEach(m=>{s.categories[m.key]+=parseFloat(n[m.key])||0}),s.total+=parseFloat(a[p])||0;else{const m=parseFloat(a[p])||0;s.total+=m,s.categories.lainnya+=m}}}),s},Pt=async(t=null)=>{t&&(T=t),M("admin-content")&&(D("admin-content",`
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `),await Promise.all([ut(w),st()]),F())},F=()=>{const t=Array.from({length:6},(e,s)=>new Date().getFullYear()-4+s);$===0?`${w}`:`${L[$-1]}${w}`;const o=[{k:"executive",l:"Ringkasan & Laba Rugi",i:"fa-chart-pie",sub:"P&L Statement"},{k:"sales",l:"Penjualan & Kasir",i:"fa-chart-line",sub:"Omset & Kas"},{k:"stock",l:"Stok & Aset Gudang",i:"fa-boxes-stacked",sub:"Valuasi Inventori"},{k:"debts",l:"Utang & Piutang",i:"fa-scale-balanced",sub:"AP & AR Hub"},{k:"expenses",l:"Biaya Operasional",i:"fa-money-bill-transfer",sub:"Beban Toko"},{k:"tax",l:"Perpajakan RI 2026",i:"fa-file-invoice-dollar",sub:"PPN & PPh Final"},{k:"balance",l:"Neraca Keuangan",i:"fa-scale-unbalanced",sub:"Aset & Modal"}].map(e=>{const s=T===e.k;return`
            <button type="button" onclick="switchReportTab('${e.k}')" class="group flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 snap-start border border-slate-200/90 dark:border-slate-700/80 ${s?"bg-[var(--color-primary)] text-white shadow-sm font-black":"bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-100 dark:hover:bg-slate-700/60"}">
                <div class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${s?"bg-white/20 text-white":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} transition-colors">
                    <i class="fa-solid ${e.i} text-[10px]"></i>
                </div>
                <span>${e.l}</span>
            </button>
        `}).join("");D("admin-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 1. HEADER KONTROL PUSAT LAPORAN TERPADU (INDUSTRIAL NEO-BRUTALISM) -->
            <div class="neo-card rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 p-3.5 sm:p-5 shadow-sm space-y-3.5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/90 dark:border-slate-700/80 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400 shadow-xs">
                            <i class="fa-solid fa-chart-pie text-lg sm:text-xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2">
                                <h1 class="font-black text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">Pusat Laporan &amp; Keuangan</h1>
                                <span class="neo-badge px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider shrink-0 whitespace-nowrap border border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-300">Live</span>
                            </div>
                            <p class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-bold truncate">
                                Laba Rugi, Penjualan, Valuasi Stok, Utang Piutang &amp; Pajak
                            </p>
                        </div>
                    </div>

                    <!-- Global Filter & Actions Bar -->
                    <div class="flex items-center flex-wrap gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
                        <!-- Filter Bulan (Zero Double-Boxing) -->
                        <div class="report-select-wrapper flex items-center gap-1.5 bg-white dark:bg-slate-800 px-2.5 h-9 rounded-xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs text-slate-800 dark:text-slate-200">
                            <i class="fa-solid fa-calendar-day text-[11px] text-slate-400"></i>
                            <select onchange="changeReportMonth(this.value)" class="report-period-select-raw bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-1 pl-0.5 focus:outline-none cursor-pointer">
                                <option value="0" ${$===0?"selected":""}>Setahun Penuh</option>
                                ${L.map((e,s)=>`<option value="${s+1}" ${$===s+1?"selected":""}>${e}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Filter Tahun (Zero Double-Boxing) -->
                        <div class="report-select-wrapper flex items-center gap-1.5 bg-white dark:bg-slate-800 px-2.5 h-9 rounded-xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs text-slate-800 dark:text-slate-200">
                            <i class="fa-solid fa-calendar text-[11px] text-slate-400"></i>
                            <select onchange="changeReportYear(this.value)" class="report-period-select-raw bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1 pr-1 pl-0.5 focus:outline-none cursor-pointer">
                                ${t.map(e=>`<option value="${e}" ${e===w?"selected":""}>${e}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Tombol Refresh Data -->
                        <button type="button" onclick="refreshReportData()" class="neo-btn h-9 w-9 sm:w-auto sm:px-3 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold shadow-xs hover:text-[var(--color-primary)] transition-all cursor-pointer flex items-center justify-center gap-1.5" title="Muat Ulang Data Terbaru">
                            <i class="fa-solid fa-arrows-rotate text-xs"></i>
                            <span class="hidden sm:inline">Segarkan</span>
                        </button>

                        <!-- Tombol Ekspor Spreadsheet Excel / CSV -->
                        <div class="relative inline-block text-left" id="report-export-dropdown-container">
                            <button type="button" onclick="toggleReportExportMenu()" class="neo-btn h-9 w-9 sm:w-auto px-2.5 sm:px-3 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs" title="Ekspor Data Laporan ke Spreadsheet Excel / CSV">
                                <i class="fa-solid fa-file-excel text-xs text-emerald-600 dark:text-emerald-400"></i>
                                <span class="hidden sm:inline">Ekspor Excel</span>
                                <i class="fa-solid fa-chevron-down text-[9px] opacity-70 ml-0.5 hidden sm:inline"></i>
                            </button>
                            <div id="report-export-dropdown-menu" class="hidden absolute left-0 sm:left-auto sm:right-0 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                                <div class="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-400">Pilih Format Ekspor (.csv / Excel)</p>
                                </div>
                                <div class="py-1 space-y-0.5">
                                    <button type="button" onclick="exportCurrentReportCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-white hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] transition-all flex items-center justify-between cursor-pointer">
                                        <span class="flex items-center gap-2"><i class="fa-solid fa-download text-emerald-600"></i> Ekspor Tab Saat Ini</span>
                                        <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 whitespace-nowrap">Aktif</span>
                                    </button>
                                    <div class="border-t border-slate-100 dark:border-slate-800 my-1"></div>
                                    <button type="button" onclick="exportPnlReportCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-file-invoice-dollar text-slate-400"></i> Laporan Laba Rugi (P&amp;L)
                                    </button>
                                    <button type="button" onclick="exportSalesReportCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-receipt text-slate-400"></i> Laporan Penjualan Detail
                                    </button>
                                    <button type="button" onclick="exportStockValuationCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-boxes-stacked text-slate-400"></i> Valuasi Stok Inventori Gudang
                                    </button>
                                    <button type="button" onclick="exportExpensesCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-money-bill-transfer text-slate-400"></i> Buku Kas Beban Operasional
                                    </button>
                                    <button type="button" onclick="exportDebtsReceivablesCSV(); closeReportExportMenu();" class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-scale-balanced text-slate-400"></i> Rekap Utang &amp; Piutang (AP/AR)
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Tombol Cetak Dokumen A4 -->
                        <button type="button" onclick="openReportCurrentDocPreview()" class="neo-btn h-9 w-9 sm:w-auto px-2.5 sm:px-3.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border border-slate-200/90 dark:border-slate-700/80 shadow-xs" style="background: var(--color-primary);" title="Cetak Lembar Resmi A4 / PDF">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Cetak A4</span>
                        </button>
                    </div>
                </div>

                <!-- Tab Segmented Pill Navigation -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar pb-1 snap-x snap-mandatory">
                    ${o}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `),qt()},$t=t=>{T=t,F()},St=async t=>{w=parseInt(t,10),W("Memuat data tahun "+w+"..."),await Promise.all([ut(w),st(!0)]),H(),F()},At=async t=>{$=parseInt(t,10),W("Memuat data bulan..."),await st(!0),H(),F()},Tt=async()=>{W("Menyinkronkan data terbaru..."),await Promise.all([ut(w),st(!0)]),H(),C("Data laporan berhasil disegarkan!"),F()},qt=()=>{M("report-hub-content")&&(T==="executive"?Yt():T==="sales"?zt():T==="stock"?ot():T==="debts"?te():T==="expenses"?ae():T==="tax"?le():T==="balance"&&ie())},Rt=t=>{const a=[],o=v.taxSettings?.monthlyExpenses||{},e=Array.isArray(v.expenses)?v.expenses:[];for(let s=1;s<=12;s++){const i=pt&&pt[s]?pt[s]:{omset:0,hpp:0,disc:0,orderCount:0},p=i.omset||0,l=i.disc||0,n=Math.max(0,p-l),m=i.hpp||0,u=Math.max(0,n-m);let b=0;const d=`${t}-${s}`;e.some(k=>{if(!k||!k.date)return!1;const[x,g]=k.date.split("-");return parseInt(x,10)===t&&parseInt(g,10)===s})?e.forEach(k=>{if(!k||!k.date)return;const[x,g]=k.date.split("-");parseInt(x,10)===t&&parseInt(g,10)===s&&(b+=parseFloat(k.amount)||0)}):b=parseFloat(o[d])||0;const r=u-b;a.push({month:s,monthName:L[s-1],omset:p,netSales:n,disc:l,hpp:m,grossProfit:u,expenses:b,netProfit:r,orderCount:i.orderCount||0})}return a},Jt=t=>{const a=Rt(t);let o=0;a.forEach(g=>{g.omset>o&&(o=g.omset),g.grossProfit>o&&(o=g.grossProfit),g.expenses>o&&(o=g.expenses)}),o<=0&&(o=1e6);const e=Math.pow(10,Math.floor(Math.log10(o))),s=Math.ceil(o/e)*e,i=760,p=210,l=60,n=20,m=20,u=35,b=i-l-n,d=p-m-u,f=b/12,k=[0,.333,.666,1].map(g=>{const h=s*g,y=m+d-d*g;let S="Rp 0";return h>=1e9?S=(h/1e9).toFixed(1)+"M":h>=1e6?S=(h/1e6).toFixed(0)+" Jt":h>0&&(S=(h/1e3).toFixed(0)+" Rb"),`
            <g class="grid-line opacity-50 dark:opacity-30">
                <line x1="${l}" y1="${y}" x2="${i-n}" y2="${y}" stroke="currentColor" stroke-dasharray="3,3" stroke-width="0.75" class="text-slate-300 dark:text-slate-700"></line>
                <text x="${l-8}" y="${y+3}" text-anchor="end" font-size="9" font-family="monospace" font-weight="bold" fill="currentColor" class="text-slate-400 dark:text-slate-500">${S}</text>
            </g>
        `}).join(""),x=a.map((g,h)=>{const y=l+h*f,S=$===g.month,G=new Date().getMonth()+1===g.month&&new Date().getFullYear()===t,Q=Math.max(2,g.omset/s*d),nt=m+d-Q,N=Math.max(2,g.grossProfit/s*d),B=m+d-N,V=Math.max(2,g.expenses/s*d),Z=m+d-V,I=10,U=y+(f-34)/2,it=S?`<rect x="${y+2}" y="${m}" width="${f-4}" height="${d}" rx="8" fill="rgba(var(--color-primary-rgb), 0.1)" stroke="rgba(var(--color-primary-rgb), 0.3)" stroke-width="1"></rect>`:"";return`
            <g class="month-col-group group cursor-pointer transition-transform" 
               onclick="changeReportMonth(${g.month})" 
               onmouseenter="showChartMonthTooltip(event, ${g.month})" 
               onmouseleave="hideChartMonthTooltip()">
                
                ${it}
                <rect x="${y}" y="${m}" width="${f}" height="${d+u}" fill="transparent" class="hover:fill-slate-500/5 transition-colors"></rect>

                <!-- Bar Omzet (Warna Tema Utama Toko) -->
                <rect x="${U}" y="${nt}" width="${I}" height="${Q}" rx="2.5" fill="var(--color-primary)" opacity="${g.omset>0?"0.95":"0.2"}">
                    <title>${g.monthName}: Omzet ${c(g.omset)}</title>
                </rect>

                <!-- Bar Laba Kotor (Emerald) -->
                <rect x="${U+12}" y="${B}" width="${I}" height="${N}" rx="2.5" fill="#10b981" opacity="${g.grossProfit>0?"0.95":"0.2"}">
                    <title>${g.monthName}: Laba Kotor ${c(g.grossProfit)}</title>
                </rect>

                <!-- Bar Beban Toko (Amber) -->
                <rect x="${U+24}" y="${Z}" width="${I}" height="${V}" rx="2.5" fill="#f59e0b" opacity="${g.expenses>0?"0.95":"0.2"}">
                    <title>${g.monthName}: Beban Usaha ${c(g.expenses)}</title>
                </rect>

                <!-- Label Bulan -->
                <text x="${y+f/2}" y="${p-12}" text-anchor="middle" font-size="10" font-weight="${S?"900":"600"}" fill="${S?"var(--color-primary)":"currentColor"}" class="${S?"":"text-slate-500 dark:text-slate-400"}">
                    ${g.monthName}${G?"•":""}
                </text>
            </g>
        `}).join("");return`
        <svg viewBox="0 0 ${i} ${p}" class="w-full h-auto max-h-56 select-none" style="overflow: visible;">
            ${k}
            ${x}
        </svg>
    `},_t=(t,a)=>{const o=M("chart-tooltip-box");if(!o)return;const s=Rt(w).find(p=>p.month===a);if(!s)return;o.innerHTML=`
        <div class="space-y-1">
            <div class="flex items-center justify-between gap-3 border-b border-slate-700 pb-1 text-[11px] font-black">
                <span class="text-white">${s.monthName} ${w}</span>
                <span class="text-slate-400 font-normal">${s.orderCount} pesanan</span>
            </div>
            <div class="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px]">
                <span class="text-slate-400">Omset:</span>
                <span class="text-right font-bold" style="color: var(--color-primary)">${c(s.omset)}</span>
                <span class="text-slate-400">Laba Kotor:</span>
                <span class="text-right font-bold text-emerald-400">${c(s.grossProfit)}</span>
                <span class="text-slate-400">Beban Toko:</span>
                <span class="text-right font-bold text-amber-400">${c(s.expenses)}</span>
                <span class="text-slate-400 font-black border-t border-slate-800 pt-0.5">Laba Bersih:</span>
                <span class="text-right font-black ${s.netProfit>=0?"text-blue-400":"text-rose-400"} border-t border-slate-800 pt-0.5">${c(s.netProfit)}</span>
            </div>
        </div>
    `;const i=o.parentElement;if(i){const p=i.getBoundingClientRect();let n=(t.clientX||t.touches&&t.touches[0]?.clientX||0)-p.left-60;n<10&&(n=10),n>p.width-180&&(n=p.width-180),o.style.left=`${n}px`,o.style.top="15px"}o.classList.remove("hidden")},Wt=()=>{const t=M("chart-tooltip-box");t&&t.classList.add("hidden")},Yt=()=>{const t=gt(),a=$===0?`Tahun ${w}`:`${L[$-1]} ${w}`,o=t.omset,e=t.disc,s=o-e,i=t.hpp,p=s-i,l=z().total,n=p-l,m=v.taxSettings?.taxScheme||"umkm_final";let u=0,b="PPh Final UMKM 0,5% (PP 55/2022)";if(m==="umkm_final")u=Math.round(o*.005);else if(m==="badan_normal")u=n>0?Math.round(n*.22):0,b="PPh Badan Normal 22% (UU HPP)";else{const x=parseFloat(v.taxSettings?.customTaxRate)||.5;u=n>0?Math.round(n*(x/100)):0,b=`PPh Custom (${x}%)`}const d=n-u,f=o>0?(p/o*100).toFixed(1):"0.0",r=o>0?(d/o*100).toFixed(1):"0.0",k=o>0?(l/o*100).toFixed(1):"0.0";D("report-hub-content",`
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
                    <button type="button" onclick="switchReportTab('stock')" class="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs whitespace-nowrap inline-flex items-center border-[rgba(var(--color-primary-rgb),0.3)] dark:border-rose-500/30">
                        <i class="fa-solid fa-boxes-stacked mr-1.5 text-[var(--color-primary)] dark:text-rose-400"></i> Cek Valuasi Stok
                    </button>
                    <button type="button" onclick="if(typeof window.openPOSCashierMode === 'function') window.openPOSCashierMode(); else if(window.openAdminTab) window.openAdminTab('pos');" class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95 whitespace-nowrap inline-flex items-center" style="background: var(--color-primary);">
                        <i class="fa-solid fa-cash-register mr-1.5"></i> Buka Kasir POS
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
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.1)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${c(o)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${t.orderCount} transaksi</span>
                        <span class="text-rose-600 dark:text-rose-400 font-bold">Disc: ${c(e)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate text-[var(--color-primary)] dark:text-rose-300">${c(p)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${c(i)}</span>
                        <span class="font-bold text-[var(--color-primary)] dark:text-rose-300">Margin ${f}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Usaha</span>
                            <span class="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${c(l)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Beban toko</span>
                        <span class="text-slate-500 font-bold">${k}% omset</span>
                    </div>
                </div>

                <!-- 4. Laba Bersih Akhir (Royal Theme Card) -->
                <div class="card-modern p-4 sm:p-5 flex flex-col justify-between col-span-2 lg:col-span-1 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.35)] dark:border-rose-500/40 bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.1)] to-[rgba(var(--color-primary-rgb),0.03)] dark:from-rose-950/40 dark:to-slate-900 shadow-2xs">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest text-[var(--color-primary)] dark:text-rose-400">Laba Bersih Riil</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-[rgba(var(--color-primary-rgb),0.25)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.18)] dark:bg-rose-950/60 text-[var(--color-primary)] dark:text-rose-400"><i class="fa-solid fa-crown"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate text-[var(--color-primary)] dark:text-rose-300">${c(d)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 flex items-center justify-between text-[10px] border-t border-[rgba(var(--color-primary-rgb),0.2)] dark:border-rose-500/30">
                        <span class="font-medium text-[var(--color-primary)] dark:text-rose-300/80">Net Profit</span>
                        <span class="font-black text-[var(--color-primary)] dark:text-rose-300">${r}%</span>
                    </div>
                </div>
            </div>

            <!-- GRAFIK TREN KINERJA FINANSIAL 12 BULAN (NATIVE RESPONSIVE SVG) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-2xs space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400">
                            <i class="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Tren Kinerja Finansial Bulanan — Tahun ${w}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Perbandingan Omzet Penjualan, Laba Kotor &amp; Beban Usaha (Klik batang untuk filter bulan)</p>
                        </div>
                    </div>
                    <!-- Legend Pills -->
                    <div class="flex items-center flex-wrap gap-2 text-[10px]">
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                            <span class="w-2.5 h-2.5 rounded-sm" style="background: var(--color-primary);"></span> Omzet
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                            <span class="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span> Laba Kotor
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                            <span class="w-2.5 h-2.5 rounded-sm bg-amber-500"></span> Beban Usaha
                        </span>
                    </div>
                </div>

                <!-- Container SVG Chart -->
                <div class="relative w-full overflow-hidden pt-1">
                    ${Jt(w)}
                    <div id="chart-tooltip-box" class="hidden absolute pointer-events-none z-20 px-3 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-bold shadow-xs border border-slate-700 transition-all"></div>
                </div>
            </div>

            <!-- LEMBAR LAPORAN LABA RUGI RESMI (P&L BREAKDOWN) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-rose-500/30 bg-[rgba(var(--color-primary-rgb),0.12)] dark:bg-rose-950/40 text-[var(--color-primary)] dark:text-rose-400">
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
                            <span class="font-bold text-slate-800 dark:text-white">${c(o)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${c(e)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white font-black">${c(s)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${c(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${c(p)}</span>
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
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${c(l)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white font-black">${c(n)}</span>
                        </div>
                    </div>

                    <!-- 4. PAJAK PENGHASILAN & LABA BERSIH -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">4. Kepatuhan Pajak &amp; Laba Bersih Akhir</p>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs border border-slate-100 dark:border-slate-800/60">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">${b}</span>
                            <span class="font-bold text-slate-700 dark:text-slate-300">− ${c(u)}</span>
                        </div>
                        <div class="flex items-center justify-between py-3 px-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-2xs" style="background: var(--color-primary);">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-crown text-base"></i>
                                <span>LABA BERSIH TAHUN / BULAN BERJALAN</span>
                            </div>
                            <span class="text-base sm:text-lg font-black">${c(d)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},xt=(t=j)=>{const a={};let o=0,e=0,s=0;return(t||[]).forEach(p=>{(p.items||[]).forEach(l=>{const n=parseFloat(l.qty)||1,u=(parseFloat(l.price)||0)*n,b=(v.products||[]).find(x=>x&&(String(x.id)===String(l.id)||x.name===l.name))||{},d=l.category||b.category||"Lainnya",r=(l.hpp!==void 0&&l.hpp!==null?parseFloat(l.hpp):Y(l))*n,k=u-r;a[d]||(a[d]={category:d,qty:0,omset:0,hpp:0,profit:0,txCount:0}),a[d].qty+=n,a[d].omset+=u,a[d].hpp+=r,a[d].profit+=k,a[d].txCount++,o+=u,e+=k,s+=n})}),{list:Object.values(a).map(p=>{const l=p.omset>0?(p.profit/p.omset*100).toFixed(1):"0.0",n=o>0?(p.omset/o*100).toFixed(1):"0.0";return{...p,marginPct:parseFloat(l),contributionPct:parseFloat(n)}}).sort((p,l)=>l.omset-p.omset),totalOmset:o,totalProfit:e,totalItemsSold:s}},zt=()=>{const t=j||[],a=t.length;let o=0,e=0;const s={cash:{count:0,total:0,label:"Tunai Kasir",icon:"fa-money-bill-wave",color:"emerald"},qris:{count:0,total:0,label:"QRIS Dinamis / Statis",icon:"fa-qrcode",color:"blue"},transfer:{count:0,total:0,label:"Transfer Bank (BCA/Mandiri/BRI)",icon:"fa-building-columns",color:"purple"},tempo:{count:0,total:0,label:"Tempo / Putri PayLater",icon:"fa-clock-rotate-left",color:"amber"},other:{count:0,total:0,label:"Lainnya",icon:"fa-credit-card",color:"slate"}};let i=0,p=0;const l={};t.forEach(r=>{const k=parseFloat(r.payment?.subtotal)||0;parseFloat(r.payment?.productDiscount),o+=k;const x=(r.payment?.method||"").toLowerCase();let g="other";x.includes("cash")||x.includes("tunai")?g="cash":x.includes("qris")?g="qris":x.includes("transfer")||x.includes("bca")||x.includes("mandiri")||x.includes("bri")?g="transfer":(x.includes("tempo")||x.includes("paylater"))&&(g="tempo"),s[g].count++,s[g].total+=k,r.cashierShiftId||r.cashierId||r.notes&&r.notes.includes("POS")?i+=k:p+=k,(r.items||[]).forEach(h=>{const y=parseFloat(h.qty)||1;e+=y;const S=h.id||h.name;l[S]||(l[S]={id:S,name:h.name||"Produk",qty:0,omset:0,hpp:0,image:h.image||""});const G=h.hpp!==void 0&&h.hpp!==null?parseFloat(h.hpp):Y(h);l[S].qty+=y,l[S].omset+=(parseFloat(h.price)||0)*y,l[S].hpp+=G*y})});const n=a>0?Math.round(o/a):0,m=a>0?(e/a).toFixed(1):"0",u=Object.values(l).sort((r,k)=>k.qty-r.qty).slice(0,10),b=u.length?Math.max(...u.map(r=>r.omset||1)):1,d=u.length?u.map((r,k)=>{const x=r.omset-r.hpp,g=r.omset>0?(x/r.omset*100).toFixed(0):"0",h=Math.min(100,Math.max(8,Math.round(r.omset/b*100)));let y="";return k===0?y='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-950 shadow-2xs shrink-0"><i class="fa-solid fa-trophy text-[11px]"></i></span>':k===1?y='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-2xs shrink-0">#2</span>':k===2?y='<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black bg-amber-700/20 text-amber-800 dark:text-amber-300 border border-amber-600/30 shrink-0">#3</span>':y=`<span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">#${k+1}</span>`,`
            <div class="p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 min-w-0">
                        ${y}
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${P(r.name)}</p>
                            <p class="text-[10px] text-slate-400">Modal HPP: ${c(r.hpp)}</p>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            ${r.qty} Unit
                        </span>
                    </div>
                </div>
                <!-- Progress bar omset -->
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500" style="width: ${h}%; background: var(--color-primary);"></div>
                </div>
                <!-- Stat 2 Kolom -->
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Total Omset</span>
                        <span class="font-black text-slate-800 dark:text-white">${c(r.omset)}</span>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl text-right">
                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Laba Kotor</span>
                        <span class="font-black" style="color: var(--color-primary);">${c(x)} <span class="text-[9px] font-normal text-slate-400">(${g}%)</span></span>
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
    `,f=u.length?u.map((r,k)=>{const x=r.omset-r.hpp,g=r.omset>0?(x/r.omset*100).toFixed(0):"0";return`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${k+1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${P(r.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${c(r.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${r.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${c(r.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black" style="color: var(--color-primary);">${c(x)} <span class="text-[9px] font-normal text-slate-400">(${g}%)</span></td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;D("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] border border-slate-100 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${c(o)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${a} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rata-Rata Keranjang (AOV)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-basket-shopping"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${c(n)}</p>
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
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Rata-rata ${m} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kanal Penjualan</span>
                            <span class="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-cash-register"></i></span>
                        </div>
                        <p class="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                            <span>Kasir POS:</span> <b style="color: var(--color-primary)">${c(i)}</b>
                        </p>
                    </div>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span>Storefront:</span> <b class="text-slate-600 dark:text-slate-300">${c(p)}</b>
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
                    ${Object.values(s).filter(r=>r.count>0||r.label.includes("Tunai")||r.label.includes("QRIS")||r.label.includes("Transfer")||r.label.includes("Tempo")).map(r=>{const k=o>0?(r.total/o*100).toFixed(0):"0";return`
                            <div class="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 shadow-2xs">
                                        <i class="fa-solid ${r.icon}"></i>
                                    </div>
                                    <p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate">${r.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${c(r.total)}</p>
                                <div class="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width: ${k}%; background: var(--color-primary);"></div>
                                </div>
                                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                                    <span>${r.count} pesanan</span>
                                    <span class="font-bold text-slate-700 dark:text-slate-300">${k}%</span>
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>

            <!-- ANALITIKA PROFITABILITAS PER KATEGORI PRODUK -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-shapes"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Analitika Profitabilitas Per Kategori Produk</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Kontribusi omset penjualan &amp; margin laba kotor tiap kelompok material</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            ${xt(t).list.length} Kategori Terjual
                        </span>
                    </div>
                </div>

                ${(()=>{const r=xt(t),k=r.list.length?Math.max(...r.list.map(h=>h.omset||1)):1,x=r.list.length?r.list.map((h,y)=>{const S=Math.min(100,Math.max(8,Math.round(h.omset/k*100)));return`
                            <div class="p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2.5">
                                <div class="flex items-center justify-between gap-3">
                                    <div class="flex items-center gap-2 min-w-0">
                                        <span class="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">#${y+1}</span>
                                        <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${P(h.category)}</p>
                                    </div>
                                    <span class="px-2 py-0.5 rounded-md text-[10px] font-black shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                                        ${h.contributionPct}% Omset
                                    </span>
                                </div>
                                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-500" style="width: ${S}%; background: var(--color-primary);"></div>
                                </div>
                                <div class="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[10px]">
                                    <div class="bg-slate-50 dark:bg-slate-800/40 p-1.5 rounded-lg text-center">
                                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Terjual</span>
                                        <span class="font-bold text-slate-800 dark:text-white">${h.qty} unit</span>
                                    </div>
                                    <div class="bg-slate-50 dark:bg-slate-800/40 p-1.5 rounded-lg text-center">
                                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Omset</span>
                                        <span class="font-bold text-slate-800 dark:text-white">${c(h.omset)}</span>
                                    </div>
                                    <div class="bg-slate-50 dark:bg-slate-800/40 p-1.5 rounded-lg text-center">
                                        <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Laba (Margin)</span>
                                        <span class="font-bold" style="color: var(--color-primary)">${c(h.profit)} <span class="text-[8px] font-normal text-slate-400">(${h.marginPct}%)</span></span>
                                    </div>
                                </div>
                            </div>
                        `}).join(""):`
                        <div class="py-6 text-center text-xs text-slate-400">Belum ada data penjualan kategori pada periode ini</div>
                    `,g=r.list.length?r.list.map((h,y)=>{const S=Math.min(100,Math.max(5,Math.round(h.omset/k*100)));return`
                            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="py-2.5 px-3 text-center text-xs font-black text-slate-400">#${y+1}</td>
                                <td class="py-2.5 px-3">
                                    <p class="text-xs font-bold text-slate-800 dark:text-white">${P(h.category)}</p>
                                    <p class="text-[10px] text-slate-400">${h.txCount} item transaksi</p>
                                </td>
                                <td class="py-2.5 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${h.qty} unit</td>
                                <td class="py-2.5 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${c(h.omset)}</td>
                                <td class="py-2.5 px-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400">${c(h.hpp)}</td>
                                <td class="py-2.5 px-3 text-right text-xs font-bold" style="color: var(--color-primary)">${c(h.profit)}</td>
                                <td class="py-2.5 px-3 text-center">
                                    <span class="px-2 py-0.5 rounded-full text-[10px] font-black ${h.marginPct>=20?"bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300":"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"}">
                                        ${h.marginPct}%
                                    </span>
                                </td>
                                <td class="py-2.5 px-3 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <div class="w-16 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                            <div class="h-full rounded-full" style="width: ${S}%; background: var(--color-primary);"></div>
                                        </div>
                                        <span class="text-xs font-black text-slate-700 dark:text-slate-300 w-10 text-right">${h.contributionPct}%</span>
                                    </div>
                                </td>
                            </tr>
                        `}).join(""):`
                        <tr><td colspan="8" class="py-6 text-center text-xs text-slate-400">Belum ada data penjualan kategori pada periode ini</td></tr>
                    `;return`
                        <div class="block sm:hidden p-3.5 space-y-3">${x}</div>
                        <div class="hidden sm:block overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <th class="py-2.5 px-3 text-center w-12">No</th>
                                        <th class="py-2.5 px-3">Kategori Material</th>
                                        <th class="py-2.5 px-3 text-right">Unit Terjual</th>
                                        <th class="py-2.5 px-3 text-right">Total Omset</th>
                                        <th class="py-2.5 px-3 text-right">Modal HPP</th>
                                        <th class="py-2.5 px-3 text-right">Laba Kotor</th>
                                        <th class="py-2.5 px-3 text-center">Margin %</th>
                                        <th class="py-2.5 px-3 text-right w-36">Kontribusi Omset</th>
                                    </tr>
                                </thead>
                                <tbody>${g}</tbody>
                            </table>
                        </div>
                    `})()}
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
                    <button type="button" onclick="openSalesReportDocPreview()" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs">
                        <i class="fa-solid fa-print text-xs"></i> <span class="hidden sm:inline">Cetak Penjualan A4</span>
                    </button>
                </div>

                <!-- Tampilan Mobile (< 640px): Leaderboard Cards -->
                <div class="block sm:hidden p-3.5 space-y-3">
                    ${d}
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
                        <tbody>${f}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `)},jt=t=>{const a=t.length?t.map((e,s)=>{let i="";e.status==="empty"?i='<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">Habis</span>':e.status==="low"?i=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60">Sisa ${e.stock}</span>`:i=`<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Stok Aman (${e.stock})</span>`;const p=e.totalRetail-e.totalHpp,l=e.price-e.hpp;return`
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
                        ${i}
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
                        <span class="text-xs font-black text-slate-800 dark:text-white">${c(e.price)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${c(e.totalRetail)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Modal Kulakan (HPP)</span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${c(e.hpp)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Total: ${c(e.totalHpp)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2);">
                        <span class="text-[9px] font-bold uppercase tracking-widest block" style="color: var(--color-primary);">Potensi Laba Kotor</span>
                        <span class="text-xs font-black truncate" style="color: var(--color-primary);">+${c(p)}</span>
                        <span class="text-[9px] text-slate-400 block truncate">Per unit: +${c(l)}</span>
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
    `,o=t.length?t.map((e,s)=>{let i="";return e.status==="empty"?i='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>':e.status==="low"?i=`<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${e.stock}</span>`:i='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">Aman</span>',`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${s+1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${P(e.name)}</p>
                    <p class="text-[10px] text-slate-400">${P(e.category)} • ${P(e.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${e.stock} ${e.unit}</span>
                        ${i}
                    </div>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${c(e.hpp)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${c(e.totalHpp)}</p>
                </td>
                <td class="py-2.5 px-3 text-right">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${c(e.price)}</p>
                    <p class="text-[10px] text-slate-400">Total: ${c(e.totalRetail)}</p>
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
                <tbody>${o}</tbody>
            </table>
        </div>
    `},rt=()=>{const t=v.products||[];let a=0,o=0,e=0,s=0,i=0,p=0,l=0;const n=[];t.forEach(u=>{const b=parseFloat(u.minStock)||5;if(u.variants&&u.variants.length)u.variants.forEach(d=>{s++;const f=parseFloat(d.stock)||0,r=parseFloat(d.hpp)||0,k=parseFloat(d.price)||0;e+=f,a+=f*r,o+=f*k;let x="safe";f<=0?(i++,x="empty"):f<=b?(p++,x="low"):l++,n.push({id:u.id,variantId:d.id||d.name,name:`${u.name} (${d.name})`,category:u.category||"Umum",brand:u.brand||"-",stock:f,unit:u.unit||"pcs",hpp:r,price:k,totalHpp:f*r,totalRetail:f*k,status:x,minStock:b,image:u.image||""})});else{s++;const d=parseFloat(u.stock)||0,f=parseFloat(u.hpp)||0,r=parseFloat(u.price)||0;e+=d,a+=d*f,o+=d*r;let k="safe";d<=0?(i++,k="empty"):d<=b?(p++,k="low"):l++,n.push({id:u.id,variantId:null,name:u.name,category:u.category||"Umum",brand:u.brand||"-",stock:d,unit:u.unit||"pcs",hpp:f,price:r,totalHpp:d*f,totalRetail:d*r,status:k,minStock:b,image:u.image||""})}});const m=o-a;return{stockItems:n,totalAssetHpp:a,totalAssetRetail:o,totalPhysicalUnits:e,totalSkuCount:s,outOfStockCount:i,lowStockCount:p,safeStockCount:l,potentialMargin:m}},Mt=t=>{let a=t.filter(o=>{if(E!=="all"&&o.status!==E||_!=="all"&&o.category!==_)return!1;if(O){const e=O.toLowerCase();return o.name.toLowerCase().includes(e)||o.category.toLowerCase().includes(e)||o.brand.toLowerCase().includes(e)}return!0});return a.sort((o,e)=>o.stock-e.stock),a},Et=()=>{if(typeof document>"u")return;const t=document.getElementById("stock-report-list-container");if(!t){ot();return}const{stockItems:a}=rt(),o=Mt(a);t.innerHTML=jt(o)},ot=()=>{const t=v.categories||[],a=rt(),{stockItems:o,totalAssetHpp:e,totalAssetRetail:s,totalPhysicalUnits:i,totalSkuCount:p,outOfStockCount:l,lowStockCount:n,safeStockCount:m,potentialMargin:u}=a,b=Mt(o),f=[{key:"all",label:"Semua",count:o.length},{key:"empty",label:"Habis",count:l,colorClass:"text-rose-600 dark:text-rose-400"},{key:"low",label:"Menipis",count:n,colorClass:"text-amber-600 dark:text-amber-400"},{key:"safe",label:"Aman",count:m,colorClass:"text-emerald-600 dark:text-emerald-400"}].map(r=>{const k=E===r.key;return`
            <button type="button" onclick="filterStockReportStatus('${r.key}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 flex items-center gap-1.5 ${k?"bg-[var(--color-primary)] text-white shadow-2xs font-black":"bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[var(--color-primary)]"}">
                <span>${r.label}</span>
                <span class="px-1.5 py-0.5 rounded-md text-[10px] ${k?"bg-white/25 text-white":"bg-slate-200/80 dark:bg-slate-700 "+(r.colorClass||"text-slate-600 dark:text-slate-300")}">${r.count}</span>
            </button>
        `}).join("");D("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aset Modal (HPP)</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${c(e)}</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">Modal fisik tertanam</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Nilai Jual Retail</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${c(s)}</p>
                    </div>
                    <p class="text-[10px] font-bold mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate" style="color: var(--color-primary)">Potensi margin: ${c(u)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fisik Barang</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"><i class="fa-solid fa-box-archive"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${i.toLocaleString("id-ID")} Unit</p>
                    </div>
                    <p class="text-[10px] text-slate-500 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 truncate">${p} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Kritis Stok</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-triangle-exclamation"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black ${l+n>0?"text-rose-600 dark:text-rose-400":"text-emerald-600 dark:text-emerald-400"} truncate">
                            ${l+n>0?`${l+n} SKU`:"0 SKU Kritis"}
                        </p>
                        <div class="flex items-center gap-1.5 mt-2 flex-wrap">
                            <button type="button" onclick="filterStockReportStatus('empty')" class="px-2 py-0.5 rounded-lg text-xs font-black ${E==="empty"?"bg-rose-600 text-white shadow-2xs":"bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60"} active:scale-95 cursor-pointer" title="Klik filter habis">${l} Habis</button>
                            <button type="button" onclick="filterStockReportStatus('low')" class="px-2 py-0.5 rounded-lg text-xs font-black ${E==="low"?"bg-amber-600 text-white shadow-2xs":"bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60"} active:scale-95 cursor-pointer" title="Klik filter menipis">${n} Menipis</button>
                            <button type="button" onclick="filterStockReportStatus('safe')" class="px-2 py-0.5 rounded-lg text-xs font-black ${E==="safe"?"bg-emerald-600 text-white shadow-2xs":"bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60"} active:scale-95 cursor-pointer" title="Klik filter aman">${m} Aman</button>
                        </div>
                    </div>
                    <div class="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">Filter: <b class="uppercase text-slate-700 dark:text-slate-200">${E==="all"?"Semua":E==="empty"?"Habis":E==="low"?"Menipis":"Aman"}</b></span>
                        <button type="button" onclick="filterStockReportStatus('all')" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[10px] ${E==="all"?"bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default":"bg-[var(--color-primary)] text-white shadow-2xs hover:opacity-90 cursor-pointer"} transition-all active:scale-95" title="Tampilkan semua barang inventori">
                            <i class="fa-solid fa-list-check text-[9px]"></i>
                            <span>Lihat Semua</span>
                        </button>
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

                        <!-- Bar Pencarian, Dropdown Kategori & Tombol Aksi -->
                        <div class="flex items-center flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                            <button type="button" onclick="openStockValuationDocPreview()" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs shrink-0" title="Cetak Lembar Resmi Valuasi Stok A4">
                                <i class="fa-solid fa-print text-xs"></i> <span>Cetak A4</span>
                            </button>
                            <button type="button" onclick="openAdminTab('stock_opname')" class="neo-btn px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0" style="background: var(--color-primary);" title="Audit fisik stok rak & rekonsiliasi selisih">
                                <i class="fa-solid fa-clipboard-check text-xs"></i> <span>Stock Opname</span>
                            </button>
                            <!-- Input Pencarian dengan Clear Button (Zero-Flicker) -->
                            <div class="relative flex-1 sm:w-64">
                                <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                                <input type="text" id="stock-report-search-input" placeholder="Cari nama barang / SKU..." value="${P(O)}" oninput="filterStockReportSearch(this.value)" class="w-full pl-9 pr-8 h-10 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden">
                                <button type="button" id="stock-report-search-clear-btn" onclick="filterStockReportSearch('')" style="display: ${O?"block":"none"};" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </button>
                            </div>

                            <!-- Filter Kategori -->
                            <select onchange="filterStockReportCategory(this.value)" class="px-3 h-10 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer max-w-[140px] sm:max-w-none truncate">
                                <option value="all" ${_==="all"?"selected":""}>Semua Kategori</option>
                                ${t.map(r=>`<option value="${r.name}" ${_===r.name?"selected":""}>${r.name}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <!-- Filter Status Pills Carousel -->
                    <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-1">
                        ${f}
                    </div>
                </div>

                <!-- Container Daftar Stok (Zero-Flicker Partial DOM) -->
                <div id="stock-report-list-container">
                    ${jt(b)}
                </div>
            </div>
        </div>
    `)},Xt=()=>{Lt("")},Qt=t=>{E=t,ot()},Zt=t=>{_=t,ot()},Lt=t=>{if(O=t||"",typeof document<"u"){const a=document.getElementById("stock-report-search-input");a&&a.value!==O&&document.activeElement!==a&&(a.value=O);const o=document.getElementById("stock-report-search-clear-btn");o&&(o.style.display=O?"block":"none")}Et()},te=()=>{const t=K||[];let a=0,o=0;const e={};t.forEach(x=>{const g=at(x),h=g.totalAkhir;a+=h,g.isLate?o++:g.isDueSoon;const y=x.customer?.name||"Pelanggan Umum",S=x.customer?.phone||x.customer?.wa||"-";e[y]||(e[y]={name:y,phone:S,totalPiutang:0,orderCount:0,isLate:!1}),e[y].totalPiutang+=h,e[y].orderCount++,g.isLate&&(e[y].isLate=!0)});const s=Object.values(e).sort((x,g)=>g.totalPiutang-x.totalPiutang),i=mt(),p=i.totalUnpaidDebt,l=v.purchases||[],n={};l.forEach(x=>{if(x.paymentType==="tempo"&&x.paymentStatus!=="lunas"&&x.status!=="cancelled"){const g=parseFloat(x.total)||0,h=parseFloat(x.amountPaid)||0,y=g-h;if(y>0){const S=x.supplierName||"Supplier";n[S]||(n[S]={name:S,totalDebt:0,poCount:0}),n[S].totalDebt+=y,n[S].poCount++}}});const m=Object.values(n).sort((x,g)=>g.totalDebt-x.totalDebt),u=a-p,b=u>=0,d=s.length?s.slice(0,8).map(x=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${P(x.name)}</p>
                        ${x.isLate?'<span class="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">Jatuh Tempo</span>':""}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5">${x.orderCount} nota tempo aktif</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-slate-900 dark:text-white">${c(x.totalPiutang)}</span>
                    <span class="block text-[9px] text-slate-400">Sisa Tagihan</span>
                </div>
            </div>
            <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span class="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i class="fa-solid fa-phone text-[9px]"></i> ${P(x.phone)}
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
    `,f=s.length?s.slice(0,5).map(x=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                 <p class="font-bold text-slate-800 dark:text-white truncate">${P(x.name)}</p>
                 <p class="text-[10px] text-slate-400">${x.orderCount} nota ${x.isLate?'<span class="text-rose-500 font-bold">• Terlambat</span>':""}</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-white">${c(x.totalPiutang)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('piutang')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Buka</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Tidak ada piutang pelanggan aktif</td></tr>
    `,r=m.length?m.slice(0,8).map(x=>`
        <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs text-slate-800 dark:text-white truncate">${P(x.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${x.poCount} invoice PO tempo kulakan</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-black text-rose-600 dark:text-rose-400">${c(x.totalDebt)}</span>
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
    `,k=m.length?m.slice(0,5).map(x=>`
        <tr class="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors last:border-0">
            <td class="py-2.5 px-3">
                <p class="font-bold text-slate-800 dark:text-white truncate">${P(x.name)}</p>
                <p class="text-[10px] text-slate-400">${x.poCount} invoice PO tempo</p>
            </td>
            <td class="py-2.5 px-3 text-right font-black text-rose-500">${c(x.totalDebt)}</td>
            <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="openAdminTab('purchases')" class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:text-[var(--color-primary)] transition-all cursor-pointer">Bayar</button>
            </td>
        </tr>
    `).join(""):`
        <tr><td colspan="3" class="py-6 text-center text-slate-400 text-xs">Seluruh tagihan kulakan supplier telah lunas</td></tr>
    `;D("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- KARTU POSISI BERSIH LIKUIDITAS TOKO -->
            <div class="rounded-2xl border p-4 sm:p-5 ${b?"":"border-rose-300 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20"}" style="${b?"border: 2px solid #0f172a; box-shadow: 2.5px 2.5px 0px #0f172a; background: rgba(var(--color-primary-rgb), 0.08);":""}">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span class="text-[9px] font-black uppercase tracking-widest ${b?"":"text-rose-700 dark:text-rose-400"}" style="${b?"color: var(--color-primary);":""}">
                            Posisi Bersih Likuiditas Toko (Net Working Capital Gap)
                        </span>
                        <h2 class="text-xl sm:text-2xl font-black ${b?"":"text-rose-800 dark:text-rose-300"} mt-0.5" style="${b?"color: var(--color-primary);":""}">
                            ${b?"+":""}${c(u)}
                        </h2>
                        <p class="text-xs ${b?"":"text-rose-700 dark:text-rose-400"} mt-1 font-medium" style="${b?"color: var(--color-primary); opacity: 0.9;":""}">
                            ${b?"Surplus Piutang: Hak tagihan toko di pelanggan lebih besar daripada kewajiban toko ke supplier.":"Defisit Utang: Kewajiban toko ke supplier lebih besar daripada tagihan piutang di pelanggan."}
                        </p>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Piutang Pelanggan</span>
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${c(a)}</span>
                        </div>
                        <span class="text-slate-400 font-black text-sm">−</span>
                        <div class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center shadow-2xs">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${c(p)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DUA KOLOM: PIUTANG PELANGGAN vs UTANG SUPPLIER -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <!-- KOLOM KIRI: PIUTANG PELANGGAN (ACCOUNTS RECEIVABLE) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Piutang Pelanggan (AR)</h3>
                        </div>
                        <button type="button" onclick="openDebtsDocPreview()" class="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-2xs">
                            <i class="fa-solid fa-print text-[10px]"></i> Cetak AP/AR A4
                        </button>
                    </div>
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
                            <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 truncate">${c(a)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${o} Nota</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Debitur Pelanggan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${d}
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
                                    ${f}
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
                            <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 mt-0.5 truncate">${c(p)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold uppercase" style="color: var(--color-primary)">Menunggu Kirim Barang</span>
                            <p class="text-sm sm:text-base font-black mt-0.5 truncate" style="color: var(--color-primary)">${i.pendingArrivalCount} PO</p>
                        </div>
                    </div>

                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Tagihan Supplier Rekanan Terbesar</p>
                        
                        <!-- Mobile View (< 640px): Native Cards -->
                        <div class="block sm:hidden space-y-2">
                            ${r}
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
                                    ${k}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)},ee=async(t=null)=>{if(typeof window.openExpenseModal=="function"){window.openExpenseModal(t);return}try{const a=await Ut(()=>import("./expenses-BLslBvx4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);a&&typeof a.openExpenseModal=="function"?a.openExpenseModal(t):typeof window.openExpenseModal=="function"&&window.openExpenseModal(t)}catch(a){console.error("[Reports] Gagal membuka form pengeluaran operasional:",a),C("Gagal memuat modul pengeluaran operasional.")}};window.openExpenseModalFromReports=ee;const ae=()=>{const t=$===0?`Tahun ${w}`:`${L[$-1]} ${w}`,a=z(),o=$===0?null:`${w}-${$}`,e=v.taxSettings?.monthlyExpenses||{},s=v.taxSettings?.expenseBreakdown||{},i=R.map(m=>{const u=a.categories[m.key]||0,b=a.total>0?(u/a.total*100).toFixed(0):"0";return`
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${m.label}</span>
                        <i class="fa-solid ${m.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${c(u)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${b}%</span>
                </div>
            </div>
        `}).join("");let p="";if($===0){const m=Array.from({length:12},(u,b)=>b+1).map(u=>{const b=`${w}-${u}`,d=e[b]||0;return`
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${L[u-1]} ${w}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${d}" onchange="saveReportMonthlyExpense('${b}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join("");p=`
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${w}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${m}</div>
            </div>
        `}else{const m=s[o]||{},u=R.map(d=>{const f=m[d.key]||0;return`
                <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid ${d.icon} text-xs text-slate-400 w-4"></i>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${d.label}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${f}" id="input-exp-${d.key}" oninput="calcReportMonthlyExpenseTotal()" class="w-36 text-right font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join(""),b=e[o]||0;p=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${t}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${c(b)}</span>
                </div>

                <div class="space-y-1">${u}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${o}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `}const l=a.periodExpenses&&a.periodExpenses.length>0,n=l?`
        <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary)"></i> Riwayat Transaksi Beban Operasional — ${t}
                    </h3>
                    <p class="text-[10px] text-slate-400 mt-0.5">Daftar nota pengeluaran operasional yang dicatat di Buku Kas</p>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="openExpensesDocPreview()" class="px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-2xs">
                        <i class="fa-solid fa-print text-[10px]"></i> Cetak Beban A4
                    </button>
                    <button type="button" onclick="openAdminTab('expenses')" class="text-xs font-bold flex items-center gap-1 cursor-pointer hover:opacity-80" style="color: var(--color-primary)">
                        <span>Buka Buku Kas</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
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
                        ${a.periodExpenses.slice(0,10).map(m=>{const u=R.find(d=>d.key===m.category)||R[6],b=m.source==="cash"?"Kas Toko":m.source==="bank"?"Transfer Bank":"Dana Owner";return`
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                                    <td class="py-2.5 px-3 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">${m.date||"-"}</td>
                                    <td class="py-2.5 px-3">
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                            <i class="fa-solid ${u.icon} text-[9px]" style="color: var(--color-primary)"></i>
                                            <span>${u.label}</span>
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-white">${P(m.desc)}</p>
                                        ${m.recipient?`<span class="text-[10px] text-slate-400">Penerima: ${P(m.recipient)}</span>`:""}
                                    </td>
                                    <td class="py-2.5 px-3 whitespace-nowrap">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400">${b}</span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100 text-sm whitespace-nowrap">
                                        - ${c(m.amount)}
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
    `:"";D("report-hub-content",`
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
                    <button type="button" onclick="openExpenseModalFromReports()" class="neo-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-white text-xs font-black cursor-pointer flex items-center justify-center gap-1.5 hover:opacity-95" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Catat Pengeluaran</span>
                    </button>
                </div>
            </div>

            <!-- STATUS KONEKSI BUKU KAS -->
            <div class="p-3.5 rounded-xl border ${l?"border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300":"border-amber-200/80 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300"} flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <i class="fa-solid ${l?"fa-circle-check text-emerald-600 text-sm":"fa-circle-info text-amber-600 text-sm"}"></i>
                    <div>
                        <span class="font-bold">${l?"Sinkronisasi Otomatis Aktif":"Pencatatan Transaksional"}</span>: 
                        <span class="text-[11px] opacity-90">${l?`Terhubung dengan Buku Kas (${a.transactionCount} transaksi di ${t}).`:`Belum ada nota transaksi di ${t}. Anda dapat mencatat nota baru atau memasukkan estimasi nominal di bawah.`}</span>
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
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-rose-600 dark:text-rose-400">${c(a.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${i}</div>
            </div>

            <!-- DAFTAR TRANSAKSI ITEM BUKU KAS (JIKA ADA) -->
            ${n}

            <!-- FORM PENYESUAIAN BULANAN / MANUAL OVERRIDE -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <div class="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyesuaian Manual / Input Angka Cepat</h4>
                    <p class="text-[10px] text-slate-400 mt-0.5">Digunakan jika Anda ingin menyesuaikan total operasional secara langsung per bulan</p>
                </div>
                ${p}
            </div>
        </div>
    `)},se=()=>{let t=0;R.forEach(a=>{const o=M(`input-exp-${a.key}`);o&&(t+=parseFloat(o.value)||0)}),wt("label-exp-total",c(t))},re=async t=>{W("Menyimpan biaya operasional...");const a={};let o=0;R.forEach(e=>{const s=M(`input-exp-${e.key}`),i=s&&parseFloat(s.value)||0;a[e.key]=i,o+=i}),v.taxSettings||(v.taxSettings={}),v.taxSettings.monthlyExpenses||(v.taxSettings.monthlyExpenses={}),v.taxSettings.expenseBreakdown||(v.taxSettings.expenseBreakdown={}),v.taxSettings.monthlyExpenses[t]=o,v.taxSettings.expenseBreakdown[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),H(),C("Biaya operasional berhasil disimpan!"),F()}catch(e){H(),C("Gagal menyimpan biaya operasional: "+e.message)}},oe=async(t,a)=>{await Vt(t,a),F()},le=()=>{const t=gt();$===0?`${w}`:`${L[$-1]}${w}`;const a=t.omset-t.disc,o=Math.round(t.omset*.005),e=v.taxSettings||{},s={};for(let l=1;l<=12;l++)s[l]={omset:0,ppn:0,orderCount:0};j.forEach(l=>{const n=ft(l);if(!n)return;const m=n.getMonth()+1;if(s[m]){const u=l.payment?.dppAmount!==void 0&&l.payment?.dppAmount!==null?parseFloat(l.payment.dppAmount):parseFloat(l.payment?.subtotal)||0;s[m].omset+=u,s[m].ppn+=parseFloat(l.payment?.ppnAmount)||0,s[m].orderCount++}});const i=Array.from({length:12},(l,n)=>n+1).map(l=>{const n=window.gTaxMonthly&&window.gTaxMonthly[l]&&window.gTaxMonthly[l].omset>0?window.gTaxMonthly[l]:s[l],m=$===l,u=Math.round((n.omset||0)*.005);return`
            <div class="p-3.5 rounded-xl border transition-all ${m?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] shadow-2xs":"border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${m?"bg-[var(--color-primary)] text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${l}</span>
                        <span class="text-xs font-black ${m?"text-[var(--color-primary)]":"text-slate-800 dark:text-white"}">${L[l-1]}</span>
                        ${m?'<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[var(--color-primary)] text-white">Bulan Aktif</span>':""}
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        ${n.orderCount} Pesanan
                    </span>
                </div>
                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-center">
                    <div>
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Omset (DPP)</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${c(n.omset)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPN</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${c(n.ppn)}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-bold uppercase" style="color: var(--color-primary)">PPh 0,5%</span>
                        <span class="text-xs font-bold" style="color: var(--color-primary)">${c(u)}</span>
                    </div>
                </div>
            </div>
        `}).join(""),p=Array.from({length:12},(l,n)=>n+1).map(l=>{const n=window.gTaxMonthly&&window.gTaxMonthly[l]&&window.gTaxMonthly[l].omset>0?window.gTaxMonthly[l]:s[l],m=$===l,u=Math.round((n.omset||0)*.005);return`
            <tr class="${m?"bg-[rgba(var(--color-primary-rgb),0.08)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-800/40"} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${L[l-1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${c(n.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${c(n.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color: var(--color-primary)">${c(u)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${n.orderCount}</td>
            </tr>
        `}).join("");D("report-hub-content",`
        <div class="space-y-4 sm:space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Omset Bruto</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-coins"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${c(t.omset)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${t.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Diskon Produk</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"><i class="fa-solid fa-tag"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${c(t.disc)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">DPP Penjualan</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-calculator"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${c(a)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color:var(--color-primary)">PPN Keluaran</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-receipt"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${c(t.ppn)}</p>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">${t.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 col-span-2 lg:col-span-1 rounded-2xl flex flex-col justify-between" style="border: 1px solid rgba(var(--color-primary-rgb), 0.25); background: rgba(var(--color-primary-rgb), 0.05);">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold uppercase tracking-widest" style="color: var(--color-primary)">PPh Final 0,5%</span>
                            <span class="w-7 h-7 rounded-xl flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.2); color: var(--color-primary);"><i class="fa-solid fa-building-columns"></i></span>
                        </div>
                        <p class="text-sm sm:text-lg font-black truncate" style="color: var(--color-primary)">${c(o)}</p>
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
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${w}</h3>
                            <p class="text-[10px] text-slate-400 mt-0.5">Dasar Pengenaan Pajak, PPN Keluaran, &amp; PPh Final 0,5%</p>
                        </div>
                        <button type="button" onclick="openTaxDocPreview('summary')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0">
                            <i class="fa-solid fa-print text-xs"></i> Cetak Rekap
                        </button>
                    </div>
                    
                    <!-- Mobile View (< 640px): Native Cards -->
                    <div class="block sm:hidden p-3.5 space-y-2.5">
                        ${i}
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
                            <tbody>${p}</tbody>
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
                            <input type="text" id="report-tax-company" value="${P(e.companyName||v.store?.name||"")}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${P(e.npwp||v.store?.taxNpwp||"")}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
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
    `)},ne=async()=>{W("Menyimpan pengaturan pajak..."),v.taxSettings||(v.taxSettings={});const t=ct("report-tax-company"),a=ct("report-tax-npwp"),o=ct("report-tax-scheme");v.taxSettings.companyName=t,v.taxSettings.npwp=a,v.taxSettings.taxScheme=o,v.store||(v.store={}),v.store.taxNpwp=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),H(),C("Identitas pajak berhasil diperbarui!"),F()}catch(e){H(),C("Gagal menyimpan: "+e.message)}},ie=()=>{const t=v.taxSettings?.balanceSheet||{kas:0},a=Gt(),o=mt(),e=parseFloat(t.kas)||0,s=K.reduce((u,b)=>u+(at(b).totalAkhir||0),0),i=a.assetHpp||0,p=e+s+i,l=o.totalUnpaidDebt||0,n=Math.max(0,p-l),m=l+n;D("report-hub-content",`
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black" style="color: var(--color-primary)">${c(p)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${e}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${c(s)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${c(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span style="color: var(--color-primary)">${c(p)}</span>
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
                        <span class="text-xs font-black text-slate-800 dark:text-white">${c(m)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${c(l)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold" style="color: var(--color-primary)">${c(n)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-slate-800 dark:text-white">${c(m)}</span>
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
    `)},A=t=>{if(t==null)return'""';let a=String(t).replace(/\r\n/g," ").replace(/\n/g," ");return a.includes('"')||a.includes(",")||a.includes(";")?`"${a.replace(/"/g,'""')}"`:`"${a}"`},X=(t,a)=>{if(typeof document>"u")return;const o=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),e=URL.createObjectURL(o),s=document.createElement("a");s.setAttribute("href",e),s.setAttribute("download",t),document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e),C(`Laporan berhasil diekspor: ${t}`)},de=()=>{const t=M("report-export-dropdown-menu");if(!t)return;if(t.classList.contains("hidden")){const o=M("report-export-dropdown-container");o&&(o.getBoundingClientRect().right>260?(t.classList.remove("left-0"),t.classList.add("right-0")):(t.classList.remove("right-0"),t.classList.add("left-0"))),t.classList.remove("hidden"),setTimeout(()=>{const e=s=>{s.target.closest("#report-export-dropdown-container")||(bt(),document.removeEventListener("click",e))};document.addEventListener("click",e)},10)}else bt()},bt=()=>{const t=M("report-export-dropdown-menu");t&&t.classList.add("hidden")},Dt=()=>{T==="executive"?J():T==="sales"?et():T==="stock"?kt():T==="debts"?vt():T==="expenses"?ht():T==="tax"||T==="balance"?J():et()},et=()=>{const t=j||[],o=`Laporan-Penjualan-TokoPutri-${$===0?`FY${w}`:`${w}-M${String($).padStart(2,"0")}`}.csv`,e=["No","ID Pesanan","Tanggal","Waktu","Kanal","Kasir","Nama Pelanggan","No WhatsApp","Metode Pembayaran","Status Bayar","Status Pesanan","Subtotal (Rp)","Diskon (Rp)","PPN (Rp)","Total Akhir (Rp)","HPP Modal (Rp)","Laba Kotor (Rp)","Margin (%)"];let s=0,i=0,p=0,l=0,n=0,m=0;const u=t.map((r,k)=>{const x=ft(r),g=x?x.toLocaleDateString("id-ID"):"-",h=x?x.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}):"-",y=r.cashierShiftId||r.cashierId||r.notes&&r.notes.includes("POS"),S=y?"Kasir POS":"Online Web",G=r.cashierName||(y?"Kasir Toko":"Sistem Web"),Q=r.customer?.name||r.shipping?.name||"Pelanggan Umum",nt=r.customer?.phone||r.customer?.wa||r.shipping?.phone||"-",N=parseFloat(r.payment?.subtotal)||0,B=parseFloat(r.payment?.productDiscount)||0,V=parseFloat(r.payment?.ppnAmount)||0,Z=r.payment?.finalAmount!==void 0?parseFloat(r.payment.finalAmount):N-B+V;let I=0;(r.items||[]).forEach(q=>{const Ct=parseFloat(q.qty)||1,Ft=q.hpp!==void 0&&q.hpp!==null?parseFloat(q.hpp):Y(q);I+=Ft*Ct});const U=Math.max(0,N-B-I),it=N-B>0?(U/(N-B)*100).toFixed(1):"0.0";return s+=N,i+=B,p+=V,l+=Z,n+=I,m+=U,[k+1,A(r.orderId||r.id||"-"),A(g),A(h),A(S),A(G),A(Q),A(nt),A(r.payment?.method||"Tunai"),A(r.payment?.paymentStatus||"lunas"),A(r.status||"Selesai"),N,B,V,Z,I,U,it+"%"].join(",")}),b=s-i>0?(m/(s-i)*100).toFixed(1):"0.0",d=['"TOTAL"','""','""','""','""','""','""','""','""','""',`"${t.length} Transaksi"`,s,i,p,l,n,m,`"${b}%"`].join(","),f=[e.join(","),...u,d].join(`\r
`);X(o,f)},J=()=>{const t=gt(),o=`Laporan-Laba-Rugi-TokoPutri-${$===0?`FY${w}`:`${w}-M${String($).padStart(2,"0")}`}.csv`,e=t.omset,s=t.disc,i=e-s,p=t.hpp,l=i-p,n=z(),m=n.total,u=l-m,b=v.taxSettings?.taxScheme||"umkm_final";let d=0,f="PPh Final UMKM 0,5% (PP 55/2022)";if(b==="umkm_final")d=Math.round(e*.005);else if(b==="badan_normal")d=u>0?Math.round(u*.22):0,f="PPh Badan Normal 22% (UU HPP)";else{const h=parseFloat(v.taxSettings?.customTaxRate)||.5;d=u>0?Math.round(u*(h/100)):0,f=`PPh Custom (${h}%)`}const r=u-d,k=["Kode Akun","Komponen Finansial","Nilai (Rp)","Catatan / Rasio"],x=[["1.0","I. PENDAPATAN USAHA (REVENUE)","",""],["4-100","Penjualan Kotor (Gross Sales)",e,`${t.orderCount} Transaksi`],["4-200","Potongan & Diskon Penjualan",-s,"Potongan Nota"],["4-000","TOTAL PENDAPATAN BERSIH (DPP)",i,"100.0% Basis"],["","","",""],["2.0","II. BEBAN POKOK PENJUALAN (HPP)","",""],["5-100","Beban Pokok Penjualan (HPP FIFO Kulakan)",-p,"Stok Terjual"],["5-900","LABA KOTOR (GROSS PROFIT)",l,`${e>0?(l/e*100).toFixed(1):0}% Gross Margin`],["","","",""],["3.0","III. BEBAN OPERASIONAL USAHA","",""]];R.forEach(h=>{const y=n.categories[h.key]||0;y>0&&x.push(["6-"+h.key.slice(0,3).toUpperCase(),`Beban ${h.label}`,-y,"Buku Kas Operasional"])}),x.push(["6-000","Total Beban Operasional",-m,`${e>0?(m/e*100).toFixed(1):0}% Omzet`],["6-900","Laba Operasional Sebelum Pajak (EBIT)",u,"Laba Operasi"],["","","",""],["4.0","IV. KEPATUHAN PAJAK & LABA BERSIH","",""],["9-100",`Estimasi ${f}`,-d,"Pajak Terutang"],["9-900","LABA BERSIH SETELAH PAJAK (NET INCOME)",r,`${e>0?(r/e*100).toFixed(1):0}% Net Margin`]);const g=[k.join(","),...x.map(h=>h.map(A).join(","))].join(`\r
`);X(o,g)},kt=()=>{const t=rt(),o=`Valuasi-Stok-Inventori-TokoPutri-${new Date().toISOString().slice(0,10)}.csv`,e=["No","ID Produk","Nama Barang","Kategori","Brand","Stok Fisik","Satuan","HPP Modal Satuan (Rp)","Total Modal HPP (Rp)","Harga Jual Satuan (Rp)","Total Nilai Jual (Rp)","Potensi Laba Kotor (Rp)","Potensi Margin (%)","Batas Min Stok","Status Stok"];let s=0,i=0,p=0,l=0;const n=t.stockItems.map((d,f)=>{s+=d.totalHpp,i+=d.totalRetail,l+=d.stock;const r=d.totalRetail-d.totalHpp;p+=r;const k=d.totalRetail>0?(r/d.totalRetail*100).toFixed(1):"0.0",x=d.status==="empty"?"HABIS":d.status==="low"?"MENIPIS":"AMAN";return[f+1,A(d.id||"-"),A(d.name),A(d.category),A(d.brand),d.stock,A(d.unit),d.hpp,d.totalHpp,d.price,d.totalRetail,r,k+"%",d.minStock,A(x)].join(",")}),m=i>0?(p/i*100).toFixed(1):"0.0",u=['"TOTAL"',`"${t.stockItems.length} SKU"`,'""','""','""',l,'"unit"','""',s,'""',i,p,`"${m}%"`,'""','""'].join(","),b=[e.join(","),...n,u].join(`\r
`);X(o,b)},ht=()=>{const a=`Buku-Kas-Beban-TokoPutri-${$===0?`FY${w}`:`${w}-M${String($).padStart(2,"0")}`}.csv`,o=z(),e=["No","Tanggal","ID Beban","Kategori Beban","Deskripsi / Keperluan","Jumlah Pengeluaran (Rp)","Sumber Dana","Penerima / Catatan"];let s=0;const i=o.periodExpenses.map((n,m)=>{const u=parseFloat(n.amount)||0;s+=u;const b=R.find(f=>f.key===n.category)||R[6],d=n.source==="cash"?"Kas Toko":n.source==="bank"?"Transfer Bank":"Dana Owner";return[m+1,A(n.date||"-"),A(n.id||"-"),A(b.label),A(n.desc||"-"),u,A(d),A(n.recipient||n.notes||"-")].join(",")}),p=['"TOTAL"','""','""','""',`"${o.transactionCount} Transaksi"`,s,'""','""'].join(","),l=[e.join(","),...i,p].join(`\r
`);X(a,l)},vt=()=>{const a=`Rekap-Utang-Piutang-TokoPutri-${new Date().toISOString().slice(0,10)}.csv`,o=["Jenis Akun","No Referensi","Nama Pihak (Pelanggan / Supplier)","Kontak WhatsApp / Telp","Jatuh Tempo","Total Tagihan (Rp)","Sudah Bayar (Rp)","Sisa Saldo (Rp)","Status Keterlambatan"],e=[];let s=0,i=0;(K||[]).forEach(b=>{const d=at(b),f=d.totalAkhir;s+=f;const r=d.isLate?"TERLAMBAT":d.isDueSoon?"JATUH TEMPO DEKAT":"LANCAR";e.push(["PIUTANG (AR)",b.orderId||b.id||"-",b.customer?.name||"Pelanggan Umum",b.customer?.phone||b.customer?.wa||"-",d.dueDateFormatted||"-",d.totalPlafon||f,d.totalBayar||0,f,r])}),(v.purchases||[]).forEach(b=>{if(b.paymentType==="tempo"&&b.paymentStatus!=="lunas"&&b.status!=="cancelled"){const d=parseFloat(b.total)||0,f=parseFloat(b.amountPaid)||0,r=d-f;r>0&&(i+=r,e.push(["UTANG (AP)",b.poNumber||b.id||"-",b.supplierName||"Supplier Rekanan",b.supplierPhone||"-",b.dueDate||"-",d,f,r,"AKTIF"]))}});const p=e.map(b=>b.map(A).join(",")),l=['"TOTAL PIUTANG PELANGGAN"','""','""','""','""','""','""',s,'""'].join(","),n=['"TOTAL UTANG SUPPLIER"','""','""','""','""','""','""',i,'""'].join(","),m=['"POSISI BERSIH LIKUIDITAS"','""','""','""','""','""','""',s-i,`"${s>=i?"SURPLUS":"DEFISIT"}"`].join(","),u=[o.join(","),...p,l,n,m].join(`\r
`);X(a,u)},lt=({title:t,docCode:a,periodLabel:o,innerContentHtml:e,signatures:s=null,infoBannerText:i=""})=>{const p=v.taxSettings||{},l=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),n=p.companyName||v.store?.name||"PUTRI UTAMA TEKNIK",m=v.store?.address||"Jln. Pakem RT005 RW003 Ds. Banyuanyar, Kec. Gurah, Kab. Kediri",u=v.store?.wa||v.store?.phone||"-",b=p.npwp||v.store?.taxNpwp||"",d=`DOC-${a}-${w}${$?String($).padStart(2,"0"):"FY"}-001`;let f="";v.store?.logo&&(v.store.logo.includes("http")||v.store.logo.includes("data:"))?f=`<img loading="eager" src="${P(v.store.logo)}" class="w-14 h-14 object-contain rounded-xl border border-slate-200">`:f='<div class="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-black shrink-0 border border-slate-200/90 dark:border-slate-700/80 shadow-sm" style="background: var(--color-primary);"><i class="fa-solid fa-store"></i></div>';const r=`
    <div class="border-b-2 border-slate-900 pb-3.5 mb-3.5 select-none">
        <div class="flex justify-between items-start gap-4">
            <div class="flex items-center gap-3.5">
                ${f}
                <div>
                    <h1 class="font-black text-lg sm:text-xl tracking-tight text-slate-900 uppercase leading-none">${P(n)}</h1>
                    <p class="text-[11px] font-semibold text-slate-500 mt-1 max-w-sm leading-tight">${P(m)}</p>
                    <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                        ${b?`<span class="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">NPWP: ${P(b)}</span>`:""}
                        <span class="font-bold text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i>${P(u)}</span>
                    </div>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white mb-1">Executive Statement</span>
                <h2 class="font-black text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight">${t}</h2>
                <p class="text-xs font-bold text-slate-700 mt-0.5 font-mono">No: <span class="text-blue-700 font-black">${d}</span></p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${o}</b> &bull; Dicetak: ${l}</p>
            </div>
        </div>
    </div>
    <div class="bg-amber-50/90 border border-amber-200/90 rounded-xl p-2.5 mb-3.5 text-[10.5px] font-medium text-amber-900 flex items-start gap-2 leading-relaxed select-none">
        <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 text-xs shrink-0"></i>
        <span>${i||"<b>Dokumen Resmi Manajemen Finansial Internal:</b> Lembar laporan ini dihasilkan secara terpusat oleh sistem Toko Putri berdasarkan pencatatan database transaksi kasir POS, etalase online, stok persediaan, dan buku kas operasional."}</span>
    </div>
    `,k=`
    <div class="mt-auto pt-4 flex justify-between items-end text-xs text-slate-700 select-none">
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disusun &amp; Diperiksa Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan Staf]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${P(v.store?.staffName||"Bagian Administrasi")}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Staf Pelaksana &amp; Kasir</p>
        </div>
        <div class="text-center w-52">
            <p class="text-[10px] font-bold text-slate-500">Disetujui &amp; Disahkan Oleh,</p>
            <div class="h-14 flex items-center justify-center">
                <span class="text-[9.5px] text-slate-300 italic">[Tanda Tangan &amp; Stempel]</span>
            </div>
            <p class="font-black text-slate-900 border-t border-slate-400 pt-1 text-[11px] uppercase">${P(n)}</p>
            <p class="text-[9.5px] text-slate-500 font-semibold">Pemilik Usaha / Owner</p>
        </div>
    </div>
    `,x=`
    <div class="a4-page-footer mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${P(n)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${P(t)}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-400 font-mono">${d}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            <span>Halaman 1 dari 1</span>
        </div>
    </div>
    `,g=`
    <div class="a4-page" data-page="1" data-total-pages="1">
        <div class="a4-page-body flex-1 flex flex-col justify-between">
            <div>
                ${r}
                ${e}
            </div>
            ${s||k}
        </div>
        ${x}
    </div>
    `;wt("doc-modal-title","Preview "+t),D("doc-paper-content",g);const h=M("doc-page-count-badge");if(h&&(h.textContent="1 Halaman A4"),typeof window.showDocModalWithAnim=="function")window.showDocModalWithAnim(1);else{const y=M("doc-preview-modal"),S=M("doc-preview-modal-box");y&&(y.classList.contains("hidden")||y.classList.contains("opacity-0"))&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Ht(y,S),typeof window.fitDocPreview=="function"&&(window.fitDocPreview(),setTimeout(()=>window.fitDocPreview(),60))}},Nt=()=>{const t=j||[],a=$===0?`Tahun ${w} (Setahun Penuh)`:`${L[$-1]} ${w}`;let o=0,e=0,s=0;const i=xt(t),p={};t.forEach(b=>{const d=parseFloat(b.payment?.subtotal)||0,f=parseFloat(b.payment?.productDiscount)||0;o+=d,e+=f,(b.items||[]).forEach(r=>{const k=parseFloat(r.qty)||1;s+=k;const x=r.id||r.name;p[x]||(p[x]={name:r.name||"Produk",qty:0,omset:0,hpp:0});const g=r.hpp!==void 0&&r.hpp!==null?parseFloat(r.hpp):Y(r);p[x].qty+=k,p[x].omset+=(parseFloat(r.price)||0)*k,p[x].hpp+=g*k})});const l=o-e,n=t.length>0?Math.round(o/t.length):0,m=Object.values(p).sort((b,d)=>d.qty-b.qty).slice(0,8),u=`
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Penjualan Bruto</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${c(o)}</span>
                <span class="text-[9px] text-slate-400 mt-0.5 block">${t.length} transaksi</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Diskon Penjualan</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${c(e)}</span>
                <span class="text-[9px] text-rose-500 mt-0.5 block">Potongan Nota</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Penjualan Bersih (DPP)</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${c(l)}</span>
                <span class="text-[9px] text-blue-600 mt-0.5 block">Dasar Pajak</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-900 block">Rata-Rata Nota (AOV)</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${c(n)}</span>
                <span class="text-[9px] text-emerald-600 mt-0.5 block">${s} unit terjual</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-3.5">
            <!-- Top 8 Produk Terlaris -->
            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-trophy text-amber-500 text-[10px]"></i> Produk Terlaris (Leaderboard)
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Produk</th>
                            <th class="py-1.5 px-2 text-right">Terjual</th>
                            <th class="py-1.5 px-2 text-right">Total Omset</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${m.map(b=>`
                            <tr>
                                <td class="py-1.5 px-2 font-semibold text-slate-800 truncate max-w-[160px]">${P(b.name)}</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-slate-700">${b.qty} unit</td>
                                <td class="py-1.5 px-2 text-right font-mono font-black text-slate-900">${c(b.omset)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>

            <!-- Kontribusi Kategori Material -->
            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-shapes text-blue-500 text-[10px]"></i> Kontribusi Kategori Material
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Kategori</th>
                            <th class="py-1.5 px-2 text-right">Omset (Rp)</th>
                            <th class="py-1.5 px-2 text-center">Margin %</th>
                            <th class="py-1.5 px-2 text-right">Kontribusi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${i.list.slice(0,8).map(b=>`
                            <tr>
                                <td class="py-1.5 px-2 font-semibold text-slate-800 truncate max-w-[120px]">${P(b.category)}</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-slate-900">${c(b.omset)}</td>
                                <td class="py-1.5 px-2 text-center font-mono font-bold text-emerald-700">${b.marginPct}%</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-blue-700">${b.contributionPct}%</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `;lt({title:"LAPORAN ANALITIKA PENJUALAN & OMSET",docCode:"SALES",periodLabel:a,innerContentHtml:u,infoBannerText:"<b>Ringkasan Kinerja Penjualan Toko:</b> Dokumen ini menyajikan rekapitulasi penjualan kotor, diskon promosi, omzet bersih, volume unit terjual, serta daftar produk dan kategori material paling laris."})},Bt=()=>{const t=rt(),a=`Posisi Per ${new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}`,o=`
        <div class="grid grid-cols-4 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 block">Total Aset Modal (HPP)</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${c(t.totalAssetHpp)}</span>
                <span class="text-[9px] text-slate-400 mt-0.5 block">${t.totalSkuCount} Total SKU</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Total Nilai Jual Retail</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${c(t.totalAssetRetail)}</span>
                <span class="text-[9px] text-blue-600 mt-0.5 block">${t.totalPhysicalUnits} Unit Fisik</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-emerald-900 block">Potensi Laba Kotor</span>
                <span class="text-sm font-black text-emerald-700 font-mono tabular-nums block mt-0.5">${c(t.totalAssetRetail-t.totalAssetHpp)}</span>
                <span class="text-[9px] text-emerald-600 mt-0.5 block">${t.totalAssetRetail>0?((t.totalAssetRetail-t.totalAssetHpp)/t.totalAssetRetail*100).toFixed(1):0}% Margin</span>
            </div>
            <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Status Persediaan</span>
                <span class="text-xs font-black text-amber-800 block mt-1">${t.safeStockCount} Aman &bull; ${t.lowStockCount} Menipis</span>
                <span class="text-[9px] font-bold text-rose-600 mt-0.5 block">${t.outOfStockCount} Barang Habis</span>
            </div>
        </div>

        <table class="w-full text-[10.5px] border-collapse border border-slate-300 mb-3.5">
            <thead>
                <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase tracking-wider">
                    <th class="py-2 px-2 text-center w-8">No</th>
                    <th class="py-2 px-3 text-left">Nama Produk &amp; Varian</th>
                    <th class="py-2 px-3 text-left">Kategori</th>
                    <th class="py-2 px-3 text-center">Stok</th>
                    <th class="py-2 px-3 text-right">Modal HPP (Rp)</th>
                    <th class="py-2 px-3 text-right">Total HPP (Rp)</th>
                    <th class="py-2 px-3 text-right">Harga Jual (Rp)</th>
                    <th class="py-2 px-3 text-center w-16">Status</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
                ${t.stockItems.slice(0,15).map((e,s)=>`
                    <tr>
                        <td class="py-1.5 px-2 text-center font-bold text-slate-400">${s+1}</td>
                        <td class="py-1.5 px-3 font-bold text-slate-800 truncate max-w-[180px]">${P(e.name)}</td>
                        <td class="py-1.5 px-3 text-slate-500">${P(e.category)}</td>
                        <td class="py-1.5 px-3 text-center font-mono font-bold text-slate-800">${e.stock} ${e.unit}</td>
                        <td class="py-1.5 px-3 text-right font-mono text-slate-600">${c(e.hpp)}</td>
                        <td class="py-1.5 px-3 text-right font-mono font-bold text-slate-900">${c(e.totalHpp)}</td>
                        <td class="py-1.5 px-3 text-right font-mono font-bold text-blue-700">${c(e.price)}</td>
                        <td class="py-1.5 px-3 text-center">
                            <span class="px-1.5 py-0.5 rounded text-[8.5px] font-black uppercase ${e.status==="empty"?"bg-rose-100 text-rose-700":e.status==="low"?"bg-amber-100 text-amber-700":"bg-emerald-100 text-emerald-700"}">
                                ${e.status}
                            </span>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;lt({title:"LAPORAN VALUASI STOK & ASET GUDANG",docCode:"STK",periodLabel:a,innerContentHtml:o,infoBannerText:"<b>Audit & Valuasi Fisik Persediaan:</b> Nilai aset inventori dihitung secara akurat menggunakan sistem modal kulakan (HPP). Mohon rekonsiliasi berkala dengan hasil fisik Stock Opname."})},It=()=>{const t=K||[];let a=0;const o={};t.forEach(f=>{const r=at(f),k=r.totalAkhir;a+=k;const x=f.customer?.name||"Pelanggan Umum";o[x]||(o[x]={name:x,phone:f.customer?.phone||"-",total:0,count:0,isLate:!1}),o[x].total+=k,o[x].count++,r.isLate&&(o[x].isLate=!0)});const s=mt().totalUnpaidDebt,i=a-s,p=i>=0,l=v.purchases||[],n={};l.forEach(f=>{if(f.paymentType==="tempo"&&f.paymentStatus!=="lunas"&&f.status!=="cancelled"){const r=parseFloat(f.total)||0,k=parseFloat(f.amountPaid)||0,x=r-k;if(x>0){const g=f.supplierName||"Supplier";n[g]||(n[g]={name:g,total:0,count:0}),n[g].total+=x,n[g].count++}}});const m=Object.values(o).sort((f,r)=>r.total-f.total).slice(0,8),u=Object.values(n).sort((f,r)=>r.total-f.total).slice(0,8),b=`Posisi Per ${new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}`,d=`
        <div class="grid grid-cols-3 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Total Piutang Pelanggan (AR)</span>
                <span class="text-sm font-black text-blue-800 font-mono tabular-nums block mt-0.5">${c(a)}</span>
                <span class="text-[9px] text-blue-600 mt-0.5 block">Hak tagihan aktif toko</span>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-rose-800 block">Total Utang Supplier (AP)</span>
                <span class="text-sm font-black text-rose-700 font-mono tabular-nums block mt-0.5">${c(s)}</span>
                <span class="text-[9px] text-rose-500 mt-0.5 block">Kewajiban PO kulakan</span>
            </div>
            <div class="p-3 rounded-xl ${p?"bg-emerald-50/80 border-emerald-200":"bg-amber-50/80 border-amber-200"} border">
                <span class="text-[9px] font-black uppercase tracking-wider ${p?"text-emerald-900":"text-amber-900"} block">Posisi Bersih Modal Kerja</span>
                <span class="text-sm font-black font-mono tabular-nums block mt-0.5 ${p?"text-emerald-700":"text-amber-700"}">${p?"+":""}${c(i)}</span>
                <span class="text-[9px] font-bold ${p?"text-emerald-600":"text-amber-600"} mt-0.5 block">${p?"Surplus Likuiditas":"Defisit Tagihan"}</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-3.5">
            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-hand-holding-dollar text-blue-500 text-[10px]"></i> Piutang Pelanggan Terbesar
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Pelanggan</th>
                            <th class="py-1.5 px-2 text-center">Nota</th>
                            <th class="py-1.5 px-2 text-right">Sisa Tagihan</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${m.length?m.map(f=>`
                            <tr>
                                <td class="py-1.5 px-2 font-semibold text-slate-800 truncate max-w-[140px]">${P(f.name)}</td>
                                <td class="py-1.5 px-2 text-center font-mono text-slate-500">${f.count}</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-slate-900">${c(f.total)}</td>
                            </tr>
                        `).join(""):'<tr><td colspan="3" class="py-3 text-center text-slate-400">Tidak ada piutang aktif</td></tr>'}
                    </tbody>
                </table>
            </div>

            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-truck text-rose-500 text-[10px]"></i> Utang Supplier Kulakan
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Supplier</th>
                            <th class="py-1.5 px-2 text-center">PO</th>
                            <th class="py-1.5 px-2 text-right">Sisa Utang</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${u.length?u.map(f=>`
                            <tr>
                                <td class="py-1.5 px-2 font-semibold text-slate-800 truncate max-w-[140px]">${P(f.name)}</td>
                                <td class="py-1.5 px-2 text-center font-mono text-slate-500">${f.count}</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-rose-600">${c(f.total)}</td>
                            </tr>
                        `).join(""):'<tr><td colspan="3" class="py-3 text-center text-slate-400">Seluruh utang supplier lunas</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;lt({title:"LAPORAN POSISI UTANG & PIUTANG (AP / AR)",docCode:"APAR",periodLabel:b,innerContentHtml:d,infoBannerText:"<b>Pernyataan Likuiditas Usaha:</b> Dokumen ini merangkum perbandingan hak piutang tempo di pelanggan melawan kewajiban utang dagang pengadaan material ke rekanan supplier."})},Ot=()=>{const t=$===0?`Tahun ${w} (Setahun Penuh)`:`${L[$-1]} ${w}`,a=z(),o=`
        <div class="grid grid-cols-3 gap-3 mb-3.5 select-none">
            <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-amber-900 block">Total Beban Operasional</span>
                <span class="text-sm font-black text-amber-800 font-mono tabular-nums block mt-0.5">${c(a.total)}</span>
                <span class="text-[9px] text-amber-600 mt-0.5 block">${a.transactionCount} Transaksi Pengeluaran</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-slate-600 block">Rata-Rata Biaya Per Transaksi</span>
                <span class="text-sm font-black text-slate-900 font-mono tabular-nums block mt-0.5">${c(a.transactionCount>0?Math.round(a.total/a.transactionCount):0)}</span>
                <span class="text-[9px] text-slate-400 mt-0.5 block">Efisiensi operasional</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                <span class="text-[9px] font-black uppercase tracking-wider text-blue-900 block">Kategori Biaya Terbesar</span>
                <span class="text-xs font-black text-blue-800 block mt-1">${(()=>{let e="-",s=0;return R.forEach(i=>{const p=a.categories[i.key]||0;p>s&&(s=p,e=i.label)}),e})()}</span>
                <span class="text-[9px] text-blue-600 mt-0.5 block">Alokasi primer</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-3.5">
            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-pie-chart text-amber-500 text-[10px]"></i> Rincian Per Kategori Beban
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Kategori Beban</th>
                            <th class="py-1.5 px-2 text-right">Nominal (Rp)</th>
                            <th class="py-1.5 px-2 text-right">Proporsi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${R.map(e=>{const s=a.categories[e.key]||0,i=a.total>0?(s/a.total*100).toFixed(1):"0.0";return`
                                <tr>
                                    <td class="py-1.5 px-2 font-semibold text-slate-800">${e.label}</td>
                                    <td class="py-1.5 px-2 text-right font-mono font-bold text-slate-900">${c(s)}</td>
                                    <td class="py-1.5 px-2 text-right font-mono text-slate-500">${i}%</td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>

            <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-list-check text-blue-500 text-[10px]"></i> Riwayat Transaksi Buku Kas Terkini
                </p>
                <table class="w-full text-[10.5px] border-collapse border border-slate-300">
                    <thead>
                        <tr class="bg-slate-900 text-white font-bold text-[9px] uppercase">
                            <th class="py-1.5 px-2 text-left">Tanggal</th>
                            <th class="py-1.5 px-2 text-left">Keperluan</th>
                            <th class="py-1.5 px-2 text-right">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${a.periodExpenses.slice(0,7).map(e=>`
                            <tr>
                                <td class="py-1.5 px-2 font-mono text-slate-600">${e.date||"-"}</td>
                                <td class="py-1.5 px-2 font-semibold text-slate-800 truncate max-w-[130px]">${P(e.desc||"-")}</td>
                                <td class="py-1.5 px-2 text-right font-mono font-bold text-amber-700">${c(e.amount)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `;lt({title:"REKAPITULASI BIAYA OPERASIONAL USAHA",docCode:"EXP",periodLabel:t,innerContentHtml:o,infoBannerText:"<b>Buku Kas Beban Operasional:</b> Dokumen ini mencatat seluruh pengeluaran rutin toko seperti gaji karyawan, listrik/air, kemasan, sewa tempat, dan perawatan aset fisik toko."})},Kt=()=>{T==="executive"?tt("income"):T==="sales"?Nt():T==="stock"?Bt():T==="debts"?It():T==="expenses"?Ot():T==="tax"?tt("summary"):T==="balance"?tt("balance"):tt("income")};window.renderReportsHubView=Pt;window.switchReportTab=$t;window.changeReportYear=St;window.changeReportMonth=At;window.refreshReportData=Tt;window.openReportCurrentDocPreview=Kt;window.filterStockReportStatus=Qt;window.filterStockReportCategory=Zt;window.filterStockReportSearch=Lt;window.clearStockReportSearch=Xt;window.renderStockReportListOnly=Et;window.calcReportMonthlyExpenseTotal=se;window.saveReportExpenseBreakdown=re;window.saveReportMonthlyExpense=oe;window.saveReportTaxSettings=ne;window.toggleReportExportMenu=de;window.closeReportExportMenu=bt;window.exportCurrentReportCSV=Dt;window.exportSalesReportCSV=et;window.exportPnlReportCSV=J;window.exportStockValuationCSV=kt;window.exportExpensesCSV=ht;window.exportDebtsReceivablesCSV=vt;window.openSalesReportDocPreview=Nt;window.openStockValuationDocPreview=Bt;window.openDebtsDocPreview=It;window.openExpensesDocPreview=Ot;window.showChartMonthTooltip=_t;window.hideChartMonthTooltip=Wt;const ye={renderReportsHubView:Pt,switchReportTab:$t,changeReportYear:St,changeReportMonth:At,refreshReportData:Tt,openReportCurrentDocPreview:Kt,exportCurrentReportCSV:Dt,exportSalesReportCSV:et,exportPnlReportCSV:J,exportStockValuationCSV:kt,exportExpensesCSV:ht,exportDebtsReceivablesCSV:vt};export{R as EXPENSE_CATEGORIES,se as calcReportMonthlyExpenseTotal,At as changeReportMonth,St as changeReportYear,Xt as clearStockReportSearch,bt as closeReportExportMenu,ye as default,X as downloadCsvFile,A as escapeCsvValue,Dt as exportCurrentReportCSV,vt as exportDebtsReceivablesCSV,ht as exportExpensesCSV,J as exportPnlReportCSV,et as exportSalesReportCSV,kt as exportStockValuationCSV,st as fetchReportOrdersData,Zt as filterStockReportCategory,Lt as filterStockReportSearch,Qt as filterStockReportStatus,xt as getCategorySalesAnalytics,z as getExpenseBreakdownForPeriod,Mt as getFilteredStockReportItems,gt as getReportFinancialTotals,rt as getStockValuationData,Rt as getTwelveMonthPerformanceData,Wt as hideChartMonthTooltip,It as openDebtsDocPreview,ee as openExpenseModalFromReports,Ot as openExpensesDocPreview,Kt as openReportCurrentDocPreview,Nt as openSalesReportDocPreview,Bt as openStockValuationDocPreview,ft as parseOrderDate,Tt as refreshReportData,ie as renderBalanceSheetTab,te as renderDebtsReceivablesTab,Yt as renderExecutiveSummaryTab,ae as renderExpensesTab,lt as renderReportA4DocumentShell,qt as renderReportTabContent,Pt as renderReportsHubView,F as renderReportsShell,zt as renderSalesAnalyticsTab,jt as renderStockReportListHtml,Et as renderStockReportListOnly,ot as renderStockValuationTab,le as renderTaxComplianceTab,Jt as renderTwelveMonthPerformanceSvg,T as reportActiveTab,ve as reportDebtFilter,$ as reportMonth,he as reportSalesPeriod,O as reportSearchQuery,_ as reportStockCategory,E as reportStockFilter,w as reportYear,re as saveReportExpenseBreakdown,oe as saveReportMonthlyExpense,ne as saveReportTaxSettings,_t as showChartMonthTooltip,$t as switchReportTab,de as toggleReportExportMenu};

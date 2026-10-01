import{e as K,t as at,f as s,a9 as O,a7 as R,v as L,b as A,l as G,a as u,i as $,g as C}from"./module-print-Bfr9huPI.js";import{o as H,p as M,q as st,v as _,w as J,M as j,x as rt,y as lt,z as ot}from"./module-admin-ffqiZf0j.js";import{computePurchaseMetrics as W}from"./purchases-B6SP5h-J.js";import{f as V}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-Cd7YFais.js";import"./module-faq-DYTnXqpq.js";let y="executive",m=new Date().getFullYear(),h=0,jt="month",S="all",D="all",Et="all",I="",E=[],B=[],q="";const N=[{key:"gaji",label:"Gaji & Tunjangan Staf",icon:"fa-user-tie",color:"blue"},{key:"listrik",label:"Listrik, Air & Wifi Toko",icon:"fa-bolt",color:"amber"},{key:"sewa",label:"Sewa Ruko / Tempat Usaha",icon:"fa-shop",color:"purple"},{key:"transport",label:"Bensin & Transportasi",icon:"fa-van-shuttle",color:"emerald"},{key:"kemasan",label:"Kemasan / Lakban / Plastik",icon:"fa-box",color:"orange"},{key:"perawatan",label:"Pemeliharaan Toko & Alat",icon:"fa-screwdriver-wrench",color:"cyan"},{key:"lainnya",label:"Biaya Operasional Lainnya",icon:"fa-receipt",color:"slate"}],U=async(a=!1)=>{const l=`${m}-${h}`;if(!a&&q===l&&E.length>0)return{orders:E,piutang:B};E=[],B=[];let r,e;h===0?(r=new Date(m,0,1),e=new Date(m+1,0,1)):(r=new Date(m,h-1,1),e=new Date(m,h,1));try{(await G.collection("freshmart_orders").where("timestamp",">=",V.firestore.Timestamp.fromDate(r)).where("timestamp","<",V.firestore.Timestamp.fromDate(e)).limit(5e3).get()).forEach(i=>{const k=i.data();k.status!=="Dibatalkan"&&E.push(k)}),(await G.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(i=>{B.push(i.data())}),q=l}catch(o){console.error("[ReportsHub] Gagal memuat data transaksi:",o),L("Gagal memuat data transaksi laporan: "+o.message)}return{orders:E,piutang:B}},nt=()=>{const a=u.taxSettings?.expenseBreakdown||{},l=u.taxSettings?.monthlyExpenses||{},r=h===0?Array.from({length:12},(o,c)=>c+1):[h],e={total:0,categories:{}};return N.forEach(o=>{e.categories[o.key]=0}),r.forEach(o=>{const c=`${m}-${o}`,x=a[c];if(x)N.forEach(d=>{e.categories[d.key]+=parseFloat(x[d.key])||0}),e.total+=parseFloat(l[c])||0;else{const d=parseFloat(l[c])||0;e.total+=d,e.categories.lainnya+=d}}),e},Y=async(a=null)=>{a&&(y=a),K("admin-content")&&(A("admin-content",`
        <div class="py-20 text-center flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 border border-slate-200 dark:border-slate-800" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary)">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Menyinkronkan Pusat Laporan Terpadu...</p>
            <p class="text-[10px] text-slate-400 mt-1">Mengolah data penjualan, aset stok, utang piutang, dan perpajakan</p>
        </div>
    `),await Promise.all([H(m),U()]),T())},T=()=>{const a=Array.from({length:6},(e,o)=>new Date().getFullYear()-4+o);h===0?`${m}`:`${j[h-1]}${m}`;const r=[{k:"executive",l:"Ringkasan & Laba Rugi",i:"fa-chart-pie",sub:"P&L Statement"},{k:"sales",l:"Penjualan & Kasir",i:"fa-chart-line",sub:"Omset & Kas"},{k:"stock",l:"Stok & Aset Gudang",i:"fa-boxes-stacked",sub:"Valuasi Inventori"},{k:"debts",l:"Utang & Piutang",i:"fa-scale-balanced",sub:"AP & AR Hub"},{k:"expenses",l:"Biaya Operasional",i:"fa-money-bill-transfer",sub:"Beban Toko"},{k:"tax",l:"Perpajakan RI 2026",i:"fa-file-invoice-dollar",sub:"PPN & PPh Final"},{k:"balance",l:"Neraca Keuangan",i:"fa-scale-unbalanced",sub:"Aset & Modal"}].map(e=>{const o=y===e.k;return`
            <button type="button" onclick="switchReportTab('${e.k}')" class="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${o?"bg-[var(--color-primary)] text-white":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]"}">
                <i class="fa-solid ${e.i} text-xs ${o?"text-white":"text-slate-400 group-hover:text-[var(--color-primary)]"}"></i>
                <span>${e.l}</span>
            </button>
        `}).join("");A("admin-content",`
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
                                ${j.map((e,o)=>`<option value="${o+1}" ${h===o+1?"selected":""}>${e}</option>`).join("")}
                            </select>
                        </div>

                        <!-- Filter Tahun -->
                        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                            <i class="fa-solid fa-calendar text-xs text-slate-400 ml-2"></i>
                            <select onchange="changeReportYear(this.value)" class="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 py-1.5 pr-3 pl-1 focus:outline-hidden cursor-pointer">
                                ${a.map(e=>`<option value="${e}" ${e===m?"selected":""}>${e}</option>`).join("")}
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
                <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
                    ${r}
                </div>
            </div>

            <!-- 2. WADAH KONTEN TAB SPESIFIK -->
            <div id="report-hub-content" class="fade-in"></div>
        </div>
    `),dt()},Q=a=>{y=a,T()},z=async a=>{m=parseInt(a,10),O("Memuat data tahun "+m+"..."),await Promise.all([H(m),U(!0)]),R(),T()},X=async a=>{h=parseInt(a,10),O("Memuat data bulan..."),await U(!0),R(),T()},Z=async()=>{O("Menyinkronkan data terbaru..."),await Promise.all([H(m),U(!0)]),R(),L("Data laporan berhasil disegarkan!"),T()},dt=()=>{K("report-hub-content")&&(y==="executive"?it():y==="sales"?pt():y==="stock"?F():y==="debts"?ut():y==="expenses"?gt():y==="tax"?ht():y==="balance"&&yt())},it=()=>{const a=J(),l=h===0?`Tahun ${m}`:`${j[h-1]} ${m}`,r=a.omset,e=a.disc,o=r-e,c=a.hpp,x=o-c,d=rt(),i=x-d,k=u.taxSettings?.taxScheme||"umkm_final";let f=0,v="PPh Final UMKM 0,5% (PP 55/2022)";if(k==="umkm_final")f=Math.round(r*.005);else if(k==="badan_normal")f=i>0?Math.round(i*.22):0,v="PPh Badan Normal 22% (UU HPP)";else{const g=parseFloat(u.taxSettings?.customTaxRate)||.5;f=i>0?Math.round(i*(g/100)):0,v=`PPh Custom (${g}%)`}const t=i-f,p=r>0?(x/r*100).toFixed(1):"0.0",n=r>0?(t/r*100).toFixed(1):"0.0",b=r>0?(d/r*100).toFixed(1):"0.0";A("report-hub-content",`
        <div class="space-y-6">
            <!-- 4 KARTU BENTO UTAMA KESEHATAN FINANSIAL -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <!-- 1. Omset Penjualan -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Penjualan</span>
                            <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-arrow-trend-up"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(r)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">${a.orderCount} transaksi</span>
                        <span class="text-rose-500 font-bold">Disc: ${s(e)}</span>
                    </div>
                </div>

                <!-- 2. Laba Kotor -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Laba Kotor</span>
                            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)"><i class="fa-solid fa-sack-dollar"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black truncate" style="color: var(--color-primary)">${s(x)}</p>
                    </div>
                    <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 font-medium">HPP: ${s(c)}</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">Margin ${p}%</span>
                    </div>
                </div>

                <!-- 3. Biaya Operasional -->
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Beban Operasional</span>
                            <span class="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-transfer"></i></span>
                        </div>
                        <p class="text-base sm:text-xl font-black text-amber-600 dark:text-amber-400 truncate">${s(d)}</p>
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
                        <span class="font-black text-emerald-700 dark:text-emerald-300">${n}%</span>
                    </div>
                </div>
            </div>

            <!-- LEMBAR LAPORAN LABA RUGI RESMI (P&L BREAKDOWN) -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Laporan Laba Rugi Komprehensif — ${l}</h3>
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
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Penjualan Bruto (${a.orderCount} pesanan)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(r)}</span>
                        </div>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Potongan Diskon Produk</span>
                            <span class="font-bold text-rose-500">− ${s(e)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Penjualan Bersih (DPP)</span>
                            <span class="text-slate-900 dark:text-white">${s(o)}</span>
                        </div>
                    </div>

                    <!-- 2. BEBAN POKOK PENJUALAN -->
                    <div class="space-y-2 pt-2">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">2. Beban Pokok Penjualan (HPP)</p>
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Total Modal Barang Terjual (HPP)</span>
                            <span class="font-bold text-rose-500">− ${s(c)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl font-bold text-xs border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.25); color: var(--color-primary)">
                            <span>LABA KOTOR (GROSS PROFIT)</span>
                            <span class="text-sm font-black">${s(x)}</span>
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
                            <span class="font-bold text-amber-600 dark:text-amber-400">− ${s(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs border border-slate-200/80 dark:border-slate-700">
                            <span class="text-slate-800 dark:text-white">Laba Operasional Sebelum Pajak (EBIT)</span>
                            <span class="text-slate-900 dark:text-white">${s(i)}</span>
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
    `)},pt=()=>{const a=E||[],l=a.length;let r=0,e=0;const o={cash:{count:0,total:0,label:"Tunai Kasir",icon:"fa-money-bill-wave",color:"emerald"},qris:{count:0,total:0,label:"QRIS Dinamis / Statis",icon:"fa-qrcode",color:"blue"},transfer:{count:0,total:0,label:"Transfer Bank (BCA/Mandiri/BRI)",icon:"fa-building-columns",color:"purple"},tempo:{count:0,total:0,label:"Tempo / Putri PayLater",icon:"fa-clock-rotate-left",color:"amber"},other:{count:0,total:0,label:"Lainnya",icon:"fa-credit-card",color:"slate"}};let c=0,x=0;const d={};a.forEach(t=>{const p=parseFloat(t.payment?.subtotal)||0;parseFloat(t.payment?.productDiscount),r+=p;const n=(t.payment?.method||"").toLowerCase();let b="other";n.includes("cash")||n.includes("tunai")?b="cash":n.includes("qris")?b="qris":n.includes("transfer")||n.includes("bca")||n.includes("mandiri")||n.includes("bri")?b="transfer":(n.includes("tempo")||n.includes("paylater"))&&(b="tempo"),o[b].count++,o[b].total+=p,t.cashierShiftId||t.cashierId||t.notes&&t.notes.includes("POS")?c+=p:x+=p,(t.items||[]).forEach(g=>{const w=parseFloat(g.qty)||1;e+=w;const P=g.id||g.name;d[P]||(d[P]={id:P,name:g.name||"Produk",qty:0,omset:0,hpp:0,image:g.image||""});const et=g.hpp!==void 0&&g.hpp!==null?parseFloat(g.hpp):lt(g);d[P].qty+=w,d[P].omset+=(parseFloat(g.price)||0)*w,d[P].hpp+=et*w})});const i=l>0?Math.round(r/l):0,k=l>0?(e/l).toFixed(1):"0",f=Object.values(d).sort((t,p)=>p.qty-t.qty).slice(0,10),v=f.length?f.map((t,p)=>{const n=t.omset-t.hpp,b=t.omset>0?(n/t.omset*100).toFixed(0):"0";return`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-3 px-3 text-center text-xs font-black text-slate-400">#${p+1}</td>
                <td class="py-3 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-xs">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400">Modal: ${s(t.hpp)}</p>
                </td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${t.qty} unit</td>
                <td class="py-3 px-3 text-right text-xs font-bold text-slate-800 dark:text-white">${s(t.omset)}</td>
                <td class="py-3 px-3 text-right text-xs font-black text-emerald-600 dark:text-emerald-400">${s(n)} <span class="text-[9px] font-normal text-slate-400">(${b}%)</span></td>
            </tr>
        `}).join(""):`
        <tr><td colspan="5" class="py-8 text-center text-xs text-slate-400">Belum ada transaksi penjualan pada periode ini</td></tr>
    `;A("report-hub-content",`
        <div class="space-y-6">
            <!-- RINGKASAN METRIK PENJUALAN -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan</p>
                    <p class="text-lg sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(r)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">${l} transaksi berhasil</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Rata-Rata Keranjang (AOV)</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 truncate">${s(i)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">Per transaksi pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Barang Terjual</p>
                    <p class="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 truncate">${e} Unit</p>
                    <p class="text-[10px] text-slate-500 mt-1">Rata-rata ${k} item / order</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Kanal Penjualan</p>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1 flex items-center justify-between">
                        <span>Kasir POS:</span> <b class="text-emerald-600">${s(c)}</b>
                    </p>
                    <p class="text-xs font-bold text-slate-800 dark:text-white mt-1 flex items-center justify-between">
                        <span>Storefront Web:</span> <b class="text-blue-600">${s(x)}</b>
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
                    ${Object.values(o).filter(t=>t.count>0||t.label.includes("Tunai")||t.label.includes("QRIS")||t.label.includes("Transfer")||t.label.includes("Tempo")).map(t=>{const p=r>0?(t.total/r*100).toFixed(0):"0";return`
                            <div class="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
                                <div class="flex items-center gap-2 mb-2">
                                    <i class="fa-solid ${t.icon} text-xs text-slate-500"></i>
                                    <p class="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate">${t.label}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 dark:text-white truncate">${s(t.total)}</p>
                                <div class="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                                    <span>${t.count} pesanan</span>
                                    <span class="font-bold text-slate-600 dark:text-slate-300">${p}%</span>
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
    `)},F=()=>{const a=u.products||[],l=u.categories||[];u.brands;let r=0,e=0,o=0,c=0,x=0,d=0;const i=[];a.forEach(t=>{const p=parseFloat(t.minStock)||5;if(t.variants&&t.variants.length)t.variants.forEach(n=>{c++;const b=parseFloat(n.stock)||0,g=parseFloat(n.hpp)||0,w=parseFloat(n.price)||0;o+=b,r+=b*g,e+=b*w;let P="safe";b<=0?(x++,P="empty"):b<=p&&(d++,P="low"),i.push({id:t.id,variantId:n.id||n.name,name:`${t.name} (${n.name})`,category:t.category||"Umum",brand:t.brand||"-",stock:b,unit:t.unit||"pcs",hpp:g,price:w,totalHpp:b*g,totalRetail:b*w,status:P,minStock:p,image:t.image||""})});else{c++;const n=parseFloat(t.stock)||0,b=parseFloat(t.hpp)||0,g=parseFloat(t.price)||0;o+=n,r+=n*b,e+=n*g;let w="safe";n<=0?(x++,w="empty"):n<=p&&(d++,w="low"),i.push({id:t.id,variantId:null,name:t.name,category:t.category||"Umum",brand:t.brand||"-",stock:n,unit:t.unit||"pcs",hpp:b,price:g,totalHpp:n*b,totalRetail:n*g,status:w,minStock:p,image:t.image||""})}});const k=e-r;let f=i.filter(t=>{if(S!=="all"&&t.status!==S||D!=="all"&&t.category!==D)return!1;if(I){const p=I.toLowerCase();return t.name.toLowerCase().includes(p)||t.category.toLowerCase().includes(p)||t.brand.toLowerCase().includes(p)}return!0});f.sort((t,p)=>t.stock-p.stock);const v=f.length?f.map((t,p)=>{let n="";return t.status==="empty"?n='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">Habis</span>':t.status==="low"?n=`<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">Sisa ${t.stock}</span>`:n='<span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">Aman</span>',`
            <tr class="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">${p+1}</td>
                <td class="py-2.5 px-3">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-sm">${$(t.name)}</p>
                    <p class="text-[10px] text-slate-400">${$(t.category)} • ${$(t.brand)}</p>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <div class="flex items-center justify-center gap-1.5">
                        <span class="text-xs font-bold text-slate-800 dark:text-white">${t.stock} ${t.unit}</span>
                        ${n}
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
    `;A("report-hub-content",`
        <div class="space-y-6">
            <!-- 4 KARTU VALUASI ASET GUDANG -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Nilai Aset Modal (HPP)</p>
                    <p class="text-lg sm:text-xl font-black text-slate-900 dark:text-white truncate">${s(r)}</p>
                    <p class="text-[10px] text-slate-500 mt-1">Uang modal tertanam di rak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Estimasi Nilai Jual Retail</p>
                    <p class="text-lg sm:text-xl font-black truncate" style="color: var(--color-primary)">${s(e)}</p>
                    <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">Potensi margin: ${s(k)}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Fisik Unit Barang</p>
                    <p class="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 truncate">${o.toLocaleString("id-ID")} Unit</p>
                    <p class="text-[10px] text-slate-500 mt-1">${c} SKU / Varian aktif</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Peringatan Kritis Stok</p>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="px-2 py-0.5 rounded-lg text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400">${x} Habis</span>
                        <span class="px-2 py-0.5 rounded-lg text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">${d} Menipis</span>
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
                            <option value="all" ${S==="all"?"selected":""}>Semua Status</option>
                            <option value="empty" ${S==="empty"?"selected":""}>Stok Habis (0)</option>
                            <option value="low" ${S==="low"?"selected":""}>Stok Menipis</option>
                            <option value="safe" ${S==="safe"?"selected":""}>Stok Aman</option>
                        </select>

                        <!-- Filter Kategori -->
                        <select onchange="filterStockReportCategory(this.value)" class="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold focus:outline-hidden cursor-pointer">
                            <option value="all" ${D==="all"?"selected":""}>Semua Kategori</option>
                            ${l.map(t=>`<option value="${t.name}" ${D===t.name?"selected":""}>${t.name}</option>`).join("")}
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
    `)},ct=a=>{S=a,F()},xt=a=>{D=a,F()},bt=a=>{I=a,F()},ut=()=>{const a=B||[];let l=0,r=0;const e={};a.forEach(t=>{const p=_(t),n=p.totalAkhir;l+=n,p.isLate?r++:p.isDueSoon;const b=t.customer?.name||"Pelanggan Umum",g=t.customer?.phone||t.customer?.wa||"-";e[b]||(e[b]={name:b,phone:g,totalPiutang:0,orderCount:0,isLate:!1}),e[b].totalPiutang+=n,e[b].orderCount++,p.isLate&&(e[b].isLate=!0)});const o=Object.values(e).sort((t,p)=>p.totalPiutang-t.totalPiutang),c=W(),x=c.totalUnpaidDebt,d=u.purchases||[],i={};d.forEach(t=>{if(t.paymentType==="tempo"&&t.paymentStatus!=="lunas"&&t.status!=="cancelled"){const p=parseFloat(t.total)||0,n=parseFloat(t.amountPaid)||0,b=p-n;if(b>0){const g=t.supplierName||"Supplier";i[g]||(i[g]={name:g,totalDebt:0,poCount:0}),i[g].totalDebt+=b,i[g].poCount++}}});const k=Object.values(i).sort((t,p)=>p.totalDebt-t.totalDebt),f=l-x,v=f>=0;A("report-hub-content",`
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
                            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">${s(l)}</span>
                        </div>
                        <span class="text-slate-400 font-bold">−</span>
                        <div class="px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center">
                            <span class="block text-[9px] font-bold text-slate-400 uppercase">Utang Supplier</span>
                            <span class="text-xs sm:text-sm font-bold text-rose-500">${s(x)}</span>
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
                                <p class="text-[10px] text-slate-400">${a.length} nota tempo aktif</p>
                            </div>
                        </div>
                        <button type="button" onclick="openAdminTab('piutang')" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            Operasional Tempo <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <span class="text-[9px] font-bold text-slate-400 uppercase">Total Piutang Toko</span>
                            <p class="text-base font-black text-slate-900 dark:text-white mt-0.5">${s(l)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                            <span class="text-[9px] font-bold text-rose-500 uppercase">Lewat Jatuh Tempo</span>
                            <p class="text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${r} Nota</p>
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
                                ${o.length?o.slice(0,5).map(t=>`
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
                            <p class="text-base font-black text-rose-600 dark:text-rose-400 mt-0.5">${s(x)}</p>
                        </div>
                        <div class="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                            <span class="text-[9px] font-bold text-blue-500 uppercase">Menunggu Kirim Barang</span>
                            <p class="text-base font-black text-blue-600 dark:text-blue-400 mt-0.5">${c.pendingArrivalCount} PO</p>
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
                                ${k.length?k.slice(0,5).map(t=>`
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
    `)},gt=()=>{const a=h===0?`Tahun ${m}`:`${j[h-1]} ${m}`,l=nt(),r=h===0?null:`${m}-${h}`,e=u.taxSettings?.monthlyExpenses||{},o=u.taxSettings?.expenseBreakdown||{},c=N.map(d=>{const i=l.categories[d.key]||0,k=l.total>0?(i/l.total*100).toFixed(0):"0";return`
            <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">${d.label}</span>
                        <i class="fa-solid ${d.icon} text-xs text-slate-400"></i>
                    </div>
                    <p class="text-base font-black text-slate-900 dark:text-white truncate">${s(i)}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Proporsi beban</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${k}%</span>
                </div>
            </div>
        `}).join("");let x="";if(h===0){const d=Array.from({length:12},(i,k)=>k+1).map(i=>{const k=`${m}-${i}`,f=e[k]||0;return`
                <div class="flex items-center justify-between py-2.5 px-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${j[i-1]} ${m}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-400 font-bold">Rp</span>
                        <input type="number" min="0" value="${f}" onchange="saveReportMonthlyExpense('${k}', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                    </div>
                </div>
            `}).join("");x=`
            <div class="space-y-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Biaya Operasional Per Bulan — Tahun ${m}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${d}</div>
            </div>
        `}else{const d=o[r]||{},i=N.map(f=>{const v=d[f.key]||0;return`
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
            `}).join(""),k=e[r]||0;x=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 max-w-2xl mx-auto">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rincian Biaya Operasional — ${a}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Isi rincian pengeluaran per kategori, total akan terakumulasi otomatis</p>
                    </div>
                    <span class="text-xs font-black text-amber-600 dark:text-amber-400" id="label-exp-total">${s(k)}</span>
                </div>

                <div class="space-y-1">${i}</div>

                <button type="button" onclick="saveReportExpenseBreakdown('${r}')" class="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Biaya Operasional Bulan Ini
                </button>
            </div>
        `}A("report-hub-content",`
        <div class="space-y-6">
            <!-- REKAP KARTU KATEGORI BEBAN -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Distribusi Biaya Operasional Toko — ${a}</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Total biaya operasional yang mengurangi Laba Kotor di Laba Rugi: <b class="text-amber-600">${s(l.total)}</b></p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${c}</div>
            </div>

            <!-- FORM PENCATATAN / EDIT BIAYA OPERASIONAL -->
            <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                ${x}
            </div>
        </div>
    `)},mt=()=>{let a=0;N.forEach(l=>{const r=K(`input-exp-${l.key}`);r&&(a+=parseFloat(r.value)||0)}),at("label-exp-total",s(a))},kt=async a=>{O("Menyimpan biaya operasional...");const l={};let r=0;N.forEach(e=>{const o=K(`input-exp-${e.key}`),c=o&&parseFloat(o.value)||0;l[e.key]=c,r+=c}),u.taxSettings||(u.taxSettings={}),u.taxSettings.monthlyExpenses||(u.taxSettings.monthlyExpenses={}),u.taxSettings.expenseBreakdown||(u.taxSettings.expenseBreakdown={}),u.taxSettings.monthlyExpenses[a]=r,u.taxSettings.expenseBreakdown[a]=l;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),R(),L("Biaya operasional berhasil disimpan!"),T()}catch(e){R(),L("Gagal menyimpan biaya operasional: "+e.message)}},ft=async(a,l)=>{await ot(a,l),T()},ht=()=>{const a=J();h===0?`${m}`:`${j[h-1]}${m}`;const l=a.omset-a.disc,r=Math.round(a.omset*.005),e=u.taxSettings||{},o=Array.from({length:12},(c,x)=>x+1).map(c=>{const x=window.gTaxMonthly&&window.gTaxMonthly[c]?window.gTaxMonthly[c]:{omset:0,ppn:0,orderCount:0},d=h===c,i=Math.round((x.omset||0)*.005);return`
            <tr class="${d?"bg-[rgba(var(--color-primary-rgb),0.08)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-800/40"} border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors">
                <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${j[c-1]}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${s(x.omset)}</td>
                <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${s(x.ppn)}</td>
                <td class="py-3 px-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right">${s(i)}</td>
                <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${x.orderCount}</td>
            </tr>
        `}).join("");A("report-hub-content",`
        <div class="space-y-6">
            <!-- 5 KARTU PAJAK REKAPITULASI -->
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto</p>
                    <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${s(a.omset)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">${a.orderCount} pesanan</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Diskon Produk</p>
                    <p class="text-sm sm:text-lg font-black text-rose-500 truncate">${s(a.disc)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">Potongan belanja</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP Penjualan</p>
                    <p class="text-sm sm:text-lg font-black text-slate-800 dark:text-white truncate">${s(l)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">Dasar Pengenaan Pajak</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)">PPN Keluaran</p>
                    <p class="text-sm sm:text-lg font-black truncate" style="color:var(--color-primary)">${s(a.ppn)}</p>
                    <p class="text-[10px] text-slate-400 mt-1">${a.ppn>0?"Wajib setor kas negara":"Bebas PPN / Tarif 0%"}</p>
                </div>
                <div class="card-modern p-4 sm:p-5 border border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 col-span-2 lg:col-span-1">
                    <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5 text-emerald-700 dark:text-emerald-400">PPh Final 0,5%</p>
                    <p class="text-sm sm:text-lg font-black text-emerald-700 dark:text-emerald-400 truncate">${s(r)}</p>
                    <p class="text-[10px] text-emerald-600 dark:text-emerald-500 mt-1">PP 55/2022 UMKM</p>
                </div>
            </div>

            <!-- TABEL REKAP 12 BULAN & PENGATURAN IDENTITAS PAJAK -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Tabel 12 Bulan -->
                <div class="lg:col-span-2 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">Rekapitulasi SPT Per Bulan — ${m}</h3>
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
                            <tbody>${o}</tbody>
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
                            <input type="text" id="report-tax-company" value="${$(e.companyName||u.store?.name||"")}" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">NPWP 16-Digit CTAS 2026</label>
                            <input type="text" id="report-tax-npwp" value="${$(e.npwp||u.store?.taxNpwp||"")}" placeholder="16 digit NPWP..." class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Skema PPh Toko</label>
                            <select id="report-tax-scheme" class="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white font-bold focus:outline-hidden cursor-pointer">
                                <option value="umkm_final" ${e.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM 0,5% (PP 55/2022)</option>
                                <option value="badan_normal" ${e.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal 22% (UU HPP)</option>
                            </select>
                        </div>
                        <button type="button" onclick="saveReportTaxSettings()" class="w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 mt-2">
                            <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)},vt=async()=>{O("Menyimpan pengaturan pajak..."),u.taxSettings||(u.taxSettings={});const a=C("report-tax-company"),l=C("report-tax-npwp"),r=C("report-tax-scheme");u.taxSettings.companyName=a,u.taxSettings.npwp=l,u.taxSettings.taxScheme=r,u.store||(u.store={}),u.store.taxNpwp=l;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings","store"]),R(),L("Identitas pajak berhasil diperbarui!"),T()}catch(e){R(),L("Gagal menyimpan: "+e.message)}},yt=()=>{const a=u.taxSettings?.balanceSheet||{kas:0},l=st(),r=W(),e=parseFloat(a.kas)||0,o=B.reduce((f,v)=>f+(_(v).totalAkhir||0),0),c=l.assetHpp||0,x=e+o+c,d=r.totalUnpaidDebt||0,i=Math.max(0,x-d),k=d+i;A("report-hub-content",`
        <div class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- AKTIVA (ASET) -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center text-xs"><i class="fa-solid fa-vault"></i></span>
                            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-white">ASET &amp; AKTIVA</h3>
                        </div>
                        <span class="text-xs font-black text-blue-600 dark:text-blue-400">${s(x)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Kas di Tangan / Bank (manual)</span>
                            <input type="number" min="0" value="${e}" onchange="saveBalanceField('kas', this.value)" class="w-36 text-right font-bold text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2.5 text-slate-800 dark:text-white focus:outline-hidden">
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Piutang Pelanggan (otomatis)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(o)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Persediaan Barang Dagang (HPP)</span>
                            <span class="font-bold text-slate-800 dark:text-white">${s(c)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL AKTIVA</span>
                            <span class="text-blue-600 dark:text-blue-400">${s(x)}</span>
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
                        <span class="text-xs font-black text-purple-600 dark:text-purple-400">${s(k)}</span>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Utang Usaha ke Supplier (otomatis)</span>
                            <span class="font-bold text-rose-500">${s(d)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                            <span class="text-slate-700 dark:text-slate-300 font-medium">Modal &amp; Laba Ditahan</span>
                            <span class="font-bold text-emerald-600 dark:text-emerald-400">${s(i)}</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-xs border border-slate-200 dark:border-slate-700">
                            <span>TOTAL PASIVA (KEWAJIBAN + MODAL)</span>
                            <span class="text-purple-600 dark:text-purple-400">${s(k)}</span>
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
    `)},tt=()=>{y==="executive"||y==="sales"?M("income"):y==="tax"?M("summary"):y==="balance"?M("balance"):M("income")};window.renderReportsHubView=Y;window.switchReportTab=Q;window.changeReportYear=z;window.changeReportMonth=X;window.refreshReportData=Z;window.openReportCurrentDocPreview=tt;window.filterStockReportStatus=ct;window.filterStockReportCategory=xt;window.filterStockReportSearch=bt;window.calcReportMonthlyExpenseTotal=mt;window.saveReportExpenseBreakdown=kt;window.saveReportMonthlyExpense=ft;window.saveReportTaxSettings=vt;const Bt={renderReportsHubView:Y,switchReportTab:Q,changeReportYear:z,changeReportMonth:X,refreshReportData:Z,openReportCurrentDocPreview:tt};export{N as EXPENSE_CATEGORIES,mt as calcReportMonthlyExpenseTotal,X as changeReportMonth,z as changeReportYear,Bt as default,U as fetchReportOrdersData,xt as filterStockReportCategory,bt as filterStockReportSearch,ct as filterStockReportStatus,nt as getExpenseBreakdownForPeriod,tt as openReportCurrentDocPreview,Z as refreshReportData,yt as renderBalanceSheetTab,ut as renderDebtsReceivablesTab,it as renderExecutiveSummaryTab,gt as renderExpensesTab,dt as renderReportTabContent,Y as renderReportsHubView,T as renderReportsShell,pt as renderSalesAnalyticsTab,F as renderStockValuationTab,ht as renderTaxComplianceTab,y as reportActiveTab,Et as reportDebtFilter,h as reportMonth,jt as reportSalesPeriod,I as reportSearchQuery,D as reportStockCategory,S as reportStockFilter,m as reportYear,kt as saveReportExpenseBreakdown,ft as saveReportMonthlyExpense,vt as saveReportTaxSettings,Q as switchReportTab};

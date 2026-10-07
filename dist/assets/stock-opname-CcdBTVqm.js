import{e as x,ag as R,k as y,H as j,l as J,a as g,n as L,q as B,af as pe,aN as F,f as A,i as p,o as Q,b as ue,v as X}from"./module-print-Nd5nEehY.js";import{z as Z}from"./module-admin-neRJT0ba.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-pos-D7KaOau2.js";import"./vendor-sortable-DzmX_rHT.js";import"./module-faq-oBIAWX3a.js";let T="active",H="all",I="all",w="all",$="",m={},N="",xe="",P=null;const be=[{key:"salah_hitung",label:"Salah Catat / Koreksi Kasir",icon:"fa-calculator",color:"blue"},{key:"rusak",label:"Barang Rusak / Cacat Fisik",icon:"fa-box-tissue",color:"rose"},{key:"hilang",label:"Barang Hilang / Shrinkage",icon:"fa-user-secret",color:"rose"},{key:"kadaluarsa",label:"Kadaluarsa / Expired",icon:"fa-calendar-xmark",color:"amber"},{key:"bonus",label:"Bonus Supplier / Temuan Fisik",icon:"fa-gift",color:"emerald"},{key:"retur_pending",label:"Retur Pembeli Belum Diinput",icon:"fa-rotate-left",color:"purple"},{key:"lainnya",label:"Alasan Lainnya",icon:"fa-file-lines",color:"slate"}],ee=()=>{const a=new Date,t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),l=Math.floor(1e3+Math.random()*9e3);return`SO-${t}${e}${s}-${l}`},te=a=>{if(!a)return"-";try{return(a.toDate?a.toDate():new Date(a)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return String(a)}},W=()=>{const a=g.products||[],t={...m};a.forEach(e=>{if(!e||e.id==null)return;const s=String(e.id);if(Array.isArray(e.variants)&&e.variants.length>0)e.variants.forEach((o,b)=>{const i=`${s}_v${b}`,n=o.storeStock!==void 0?parseFloat(o.storeStock)||0:parseFloat(o.stock)||0,d=parseFloat(o.warehouseStock)||0,r=n+d,S=parseFloat(o.hpp)||parseFloat(e.hpp)||0,f=parseFloat(o.price)||parseFloat(e.price)||0;t[i]?(t[i].systemStoreStock=n,t[i].systemWarehouseStock=d,t[i].systemStock=r,t[i].hpp=S,t[i].price=f,t[i].isCounted&&t[i].physicalStock!==null&&(t[i].diff=t[i].physicalStock-r,t[i].diffValueHpp=t[i].diff*S)):t[i]={key:i,productId:e.id,variantIndex:b,variantName:o.name||`Varian #${b+1}`,productName:e.name||"Produk Tanpa Nama",sku:o.sku||e.sku||"",barcode:o.barcode||e.barcode||"",category:e.category||"Umum",brand:e.brand||"-",unit:e.unit||"pcs",img:o.img||e.img||"",colorCode:o.colorCode||"",systemStoreStock:n,systemWarehouseStock:d,systemStock:r,physicalStoreStock:null,physicalWarehouseStock:null,physicalStock:null,diffStore:0,diffWarehouse:0,diff:0,hpp:S,price:f,diffValueHpp:0,reason:"salah_hitung",notes:"",isCounted:!1}});else{const o=`${s}_main`,b=e.storeStock!==void 0?parseFloat(e.storeStock)||0:parseFloat(e.stock)||0,i=parseFloat(e.warehouseStock)||0,n=b+i,d=parseFloat(e.hpp)||0,r=parseFloat(e.price)||0;t[o]?(t[o].systemStoreStock=b,t[o].systemWarehouseStock=i,t[o].systemStock=n,t[o].hpp=d,t[o].price=r,t[o].isCounted&&t[o].physicalStock!==null&&(t[o].diff=t[o].physicalStock-n,t[o].diffValueHpp=t[o].diff*d)):t[o]={key:o,productId:e.id,variantIndex:null,variantName:null,productName:e.name||"Produk Tanpa Nama",sku:e.sku||"",barcode:e.barcode||"",category:e.category||"Umum",brand:e.brand||"-",unit:e.unit||"pcs",img:e.img||"",colorCode:"",systemStoreStock:b,systemWarehouseStock:i,systemStock:n,physicalStoreStock:null,physicalWarehouseStock:null,physicalStock:null,diffStore:0,diffWarehouse:0,diff:0,hpp:d,price:r,diffValueHpp:0,reason:"salah_hitung",notes:"",isCounted:!1}}}),m=t,N||(N=pe()?.name||(R()?"Owner Toko":"Staf Gudang & Kasir"))},ae=()=>{let a=Object.values(m);if(H!=="all"&&(a=a.filter(t=>t.category===H)),I!=="all"&&(a=a.filter(t=>t.brand===I)),w==="diff"?a=a.filter(t=>t.isCounted&&t.diff!==0):w==="matched"?a=a.filter(t=>t.isCounted&&t.diff===0):w==="uncounted"?a=a.filter(t=>!t.isCounted):w==="loss"?a=a.filter(t=>t.isCounted&&t.diff<0):w==="surplus"&&(a=a.filter(t=>t.isCounted&&t.diff>0)),$){const t=$.toLowerCase().trim();a=a.filter(e=>e.productName.toLowerCase().includes(t)||e.variantName&&e.variantName.toLowerCase().includes(t)||e.sku&&e.sku.toLowerCase().includes(t)||e.barcode&&e.barcode.toLowerCase().includes(t)||e.category&&e.category.toLowerCase().includes(t)||e.brand&&e.brand.toLowerCase().includes(t))}return a},O=()=>{const a=Object.values(m),t=a.length;let e=0,s=0,l=0,o=0,b=0,i=0,n=0,d=0;a.forEach(f=>{f.isCounted&&f.physicalStock!==null&&(e++,f.diff===0?s++:f.diff<0?(l++,b+=Math.abs(f.diff),n+=Math.abs(f.diffValueHpp)):f.diff>0&&(o++,i+=f.diff,d+=f.diffValueHpp))});const r=i-b,S=d-n;return{totalItems:t,countedCount:e,uncountedCount:t-e,matchedCount:s,lossCount:l,surplusCount:o,totalLossUnits:b,totalSurplusUnits:i,netVarianceUnits:r,totalLossRp:n,totalSurplusRp:d,netVarianceRp:S}},se=a=>{if(!a)return;const t=String(a).trim().toLowerCase();if(!t)return;const s=Object.values(m).find(l=>l.barcode&&l.barcode.toLowerCase()===t||l.sku&&l.sku.toLowerCase()===t);if(s){const l=s.physicalStock!==null?s.physicalStock:0;V(s.key,l+1),requestAnimationFrame(()=>{const o=document.getElementById(`so-row-${s.key}`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.classList.add("ring-2","ring-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.08)]"),setTimeout(()=>{o.classList.remove("ring-2","ring-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.08)]")},1500))});try{window.playCashierBeep?.()}catch{}y(`Ditemukan: ${s.productName} (+1 Fisik)`)}else{$=a.trim();const l=x("so-quick-search-input");l&&(l.value=$),C(),y(`Pencarian: "${a}"`)}},oe=(a,t,e)=>{const s=m[a];if(s){if(t==="store"?s.physicalStoreStock=e===null||e===""||isNaN(e)?null:Math.max(0,parseFloat(e)||0):t==="warehouse"&&(s.physicalWarehouseStock=e===null||e===""||isNaN(e)?null:Math.max(0,parseFloat(e)||0)),s.physicalStoreStock===null&&s.physicalWarehouseStock===null)s.physicalStock=null,s.isCounted=!1,s.diffStore=0,s.diffWarehouse=0,s.diff=0,s.diffValueHpp=0;else{const l=s.physicalStoreStock!==null?s.physicalStoreStock:s.systemStoreStock,o=s.physicalWarehouseStock!==null?s.physicalWarehouseStock:s.systemWarehouseStock;s.physicalStock=l+o,s.isCounted=!0,s.diffStore=(s.physicalStoreStock!==null?s.physicalStoreStock:s.systemStoreStock)-s.systemStoreStock,s.diffWarehouse=(s.physicalWarehouseStock!==null?s.physicalWarehouseStock:s.systemWarehouseStock)-s.systemWarehouseStock,s.diff=s.physicalStock-s.systemStock,s.diffValueHpp=s.diff*s.hpp,s.diff===0&&(s.reason="sesuai")}E(),re(a)}},V=(a,t)=>{oe(a,"store",t)},fe=a=>{const t=m[a];t&&(t.physicalStoreStock=t.systemStoreStock,t.physicalWarehouseStock=t.systemWarehouseStock,t.physicalStock=t.systemStock,t.isCounted=!0,t.diffStore=0,t.diffWarehouse=0,t.diff=0,t.diffValueHpp=0,t.reason="sesuai",E(),re(a))},ke=(a,t)=>{m[a]&&(m[a].reason=t)},me=(a,t)=>{m[a]&&(m[a].notes=t)},he=()=>{const t=ae().filter(e=>!e.isCounted);if(!t.length){y("Semua item dalam filter ini sudah memiliki data fisik!");return}j(`Konfirmasi Samakan Stok (${t.length} Barang)`,`Apakah Anda yakin ingin menyamakan seluruh ${t.length} barang yang belum dihitung agar Stok Fisik (Toko & Gudang) = Stok Sistem (Selisih 0)?`,()=>{t.forEach(e=>{e.physicalStoreStock=e.systemStoreStock,e.physicalWarehouseStock=e.systemWarehouseStock,e.physicalStock=e.systemStock,e.isCounted=!0,e.diffStore=0,e.diffWarehouse=0,e.diff=0,e.diffValueHpp=0,e.reason="sesuai"}),M(),y(`${t.length} barang berhasil disamakan!`)},"Ya, Samakan Semua")},ge=()=>{j("Reset Sesi Hitung Stock Opname?","Seluruh data hitungan fisik sementara yang belum difinalisasi akan dikosongkan kembali. Lanjutkan?",()=>{m={},W(),M(),y("Sesi Stock Opname berhasil direset.")},"Ya, Kosongkan")},re=a=>{const t=document.getElementById(`so-row-${a}`);if(!t){C();return}const e=m[a];if(!e)return;t.querySelectorAll(".so-phys-input").forEach(d=>{const r=e.physicalStock!==null?String(e.physicalStock):"";d.value!==r&&(d.value=r)}),t.querySelectorAll(".so-phys-store").forEach(d=>{const r=e.physicalStoreStock!==null?String(e.physicalStoreStock):"";d.value!==r&&(d.value=r)}),t.querySelectorAll(".so-phys-warehouse").forEach(d=>{const r=e.physicalWarehouseStock!==null?String(e.physicalWarehouseStock):"";d.value!==r&&(d.value=r)}),t.querySelectorAll(".so-phys-total-display").forEach(d=>{d.innerText=e.physicalStock!==null?String(e.physicalStock):"-"});const i=t.querySelector(".so-diff-badge");i&&(i.innerHTML=`
            <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
            ${le(e)}
        `);const n=t.querySelector(".so-reason-wrap");n&&(n.innerHTML=ie(e))},le=a=>{if(!a.isCounted||a.physicalStock===null)return'<span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap"><i class="fa-solid fa-hourglass-start mr-1 text-[9px]"></i>Belum Dihitung</span>';if(a.diff===0)return'<span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-circle-check mr-1"></i>Sesuai (0)</span>';const t=F();return a.diff<0?`
            <div class="flex flex-col items-end">
                <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300/80 dark:border-rose-800 shadow-2xs whitespace-nowrap">
                    <i class="fa-solid fa-arrow-down mr-1"></i>Kurang ${Math.abs(a.diff)} ${p(a.unit)}
                </span>
                ${t&&a.hpp>0?`
                    <span class="text-[9px] font-bold text-rose-600 dark:text-rose-400 mt-0.5" title="Potensi Kerugian HPP">
                        - ${A(Math.abs(a.diffValueHpp))}
                    </span>`:""}
            </div>
        `:`
        <div class="flex flex-col items-end">
            <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300/80 dark:border-amber-800 shadow-2xs whitespace-nowrap">
                <i class="fa-solid fa-arrow-up mr-1"></i>Lebih +${a.diff} ${p(a.unit)}
            </span>
            ${t&&a.hpp>0?`
                <span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5" title="Nilai Tambahan HPP">
                    + ${A(a.diffValueHpp)}
                </span>`:""}
        </div>
    `},ie=a=>!a.isCounted||a.diff===0?'<span class="text-[10px] text-slate-400 italic">Tidak ada selisih stok</span>':`
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 w-full">
            <select onchange="window.setSoItemReason('${a.key}', this.value)" class="text-[11px] font-bold py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] cursor-pointer w-full sm:w-auto sm:max-w-[190px] truncate shadow-2xs">
                ${be.map(t=>`
                    <option value="${t.key}" ${a.reason===t.key?"selected":""}>${t.label}</option>
                `).join("")}
            </select>
            <input type="text" placeholder="Catatan selisih (opsional)..." value="${p(a.notes||"")}" oninput="window.setSoItemNotes('${a.key}', this.value)" class="text-[11px] font-medium py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] flex-1 min-w-0 shadow-2xs">
        </div>
    `,M=()=>{W(),U();const a=(g.categories||[]).map(e=>typeof e=="string"?e:e.name).filter(Boolean),t=(g.brands||[]).map(e=>typeof e=="string"?e:e.name).filter(Boolean);ue("admin-content",`
        <div class="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            <!-- 1. HERO HEADER BANNER & NATIVE APP BAR -->
            <div class="rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.04)] dark:from-slate-900 dark:via-slate-900 dark:to-[rgba(var(--color-primary-rgb),0.08)] p-4 sm:p-6 shadow-2xs space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-3.5">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 text-white shadow-md" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-clipboard-check text-xl sm:text-2xl"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h1 class="font-extrabold text-base sm:text-xl text-slate-900 dark:text-white uppercase tracking-tight">Stock Opname</h1>
                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                    Audit Fisik Rak
                                </span>
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-snug">
                                Verifikasi stok fisik di rak dan gudang toko, rekonsiliasi selisih sistem vs aktual, dan terapkan penyesuaian atomik.
                            </p>
                        </div>
                    </div>

                    <!-- Dual Segmented Sub-Tab Switcher (Mobile 50/50 Responsive) -->
                    <div class="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shrink-0 w-full sm:w-auto">
                        <button onclick="window.switchSoSubTab('active')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${T==="active"?"primary-bg text-white shadow-xs":"text-slate-600 dark:text-slate-300 hover:text-slate-900"}">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i> <span>Sesi Audit Aktif</span>
                        </button>
                        <button onclick="window.switchSoSubTab('history')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${T==="history"?"primary-bg text-white shadow-xs":"text-slate-600 dark:text-slate-300 hover:text-slate-900"}">
                            <i class="fa-solid fa-clock-rotate-left text-xs"></i> <span>Arsip &amp; Riwayat (${(g.stockOpnameHistory||[]).length})</span>
                        </button>
                    </div>
                </div>

                <!-- 2. BENTO STAT CARDS CONTAINER -->
                <div id="so-stats-container"></div>
            </div>

            <!-- 3. SUB-TAB VIEWPORT -->
            <div id="so-subtab-content"></div>
        </div>
    `),E(),T==="active"?ye(a,t):de()},ne=a=>{T=a,M()},E=()=>{const a=x("so-stats-container");if(!a)return;const t=O(),e=F(),s=t.totalItems>0?Math.round(t.countedCount/t.totalItems*100):0;a.innerHTML=`
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-1">
            <!-- Card 1: Total Progress Hitung (Diaksen Tema) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white to-[rgba(var(--color-primary-rgb),0.03)] dark:from-slate-900 dark:to-slate-900 border border-[rgba(var(--color-primary-rgb),0.25)] shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Kemajuan Hitung</span>
                    <span class="text-[10px] font-black" style="color: var(--color-primary);">${s}%</span>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${t.countedCount}</span>
                    <span class="text-xs font-bold text-slate-400">/ ${t.totalItems} Item</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2.5">
                    <div class="primary-bg h-full rounded-full transition-all duration-500" style="width: ${s}%"></div>
                </div>
            </div>

            <!-- Card 2: Stok Sesuai (Balance) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Stok Sesuai</span>
                    <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">${t.matchedCount}</span>
                    <span class="text-xs font-bold text-slate-400">Item (0 Selisih)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">Fisik persis sama dengan database</p>
            </div>

            <!-- Card 3: Selisih Kurang (Loss) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-rose-600 dark:text-rose-400">Selisih Kurang (Loss)</span>
                    <i class="fa-solid fa-arrow-trend-down text-rose-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">${t.lossCount}</span>
                    <span class="text-xs font-bold text-rose-500">Item (−${t.totalLossUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${e?`Defisit Modal: <b class="text-rose-600 dark:text-rose-400">−${A(t.totalLossRp)}</b>`:"Defisit fisik terdeteksi"}
                </p>
            </div>

            <!-- Card 4: Selisih Lebih (Surplus) / Dampak Bersih -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">Selisih Lebih (Surplus)</span>
                    <i class="fa-solid fa-arrow-trend-up text-amber-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">${t.surplusCount}</span>
                    <span class="text-xs font-bold text-amber-500">Item (+${t.totalSurplusUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${e?`Net Variance: <b class="${t.netVarianceRp>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${t.netVarianceRp>=0?"+":"−"}${A(Math.abs(t.netVarianceRp))}</b>`:"Surplus fisik terdeteksi"}
                </p>
            </div>
        </div>
    `},ye=(a,t)=>{const e=x("so-subtab-content");if(!e)return;e.innerHTML=`
        <div class="space-y-4">
            <!-- Filter Bar & Barcode Scanner Toolstrip -->
            <div class="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3.5">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <!-- Kolom Input Pencarian Cepat & Barcode Gun -->
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base"></i>
                        <input type="text" id="so-quick-search-input" value="${p($)}" placeholder="Scan barcode produk atau ketik SKU / Nama barang..." class="w-full bg-slate-50 dark:bg-slate-800/80 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-24 text-xs sm:text-sm font-bold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] transition-all">
                        
                        <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            ${$?`
                                <button onclick="window.clearSoSearch()" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg text-xs" title="Bersihkan">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>`:""}
                            <button onclick="window.openCameraScanner && window.openCameraScanner('so-quick-search-input')" class="px-2.5 py-1.5 rounded-xl primary-bg-soft primary-border border primary-text hover:bg-[rgba(var(--color-primary-rgb),0.2)] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95" title="Scan Barcode via Kamera HP">
                                <i class="fa-solid fa-camera"></i> <span class="hidden sm:inline">Scan</span>
                            </button>
                        </div>
                    </div>

                    <!-- Tombol Aksi Cepat Massal & Finalisasi -->
                    <div class="flex items-center flex-wrap sm:flex-nowrap gap-2 shrink-0 w-full sm:w-auto">
                        <button onclick="window.matchAllUncountedInView()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95" title="Samakan semua item yang belum diisi agar selisih 0">
                            <i class="fa-solid fa-check-double text-emerald-500"></i> <span class="whitespace-nowrap">Samakan Belum Diisi</span>
                        </button>
                        <button onclick="window.printSoWorksheet()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95" title="Cetak lembar hitung fisik untuk staf rak">
                            <i class="fa-solid fa-print text-slate-500"></i> <span class="whitespace-nowrap">Lembar Kerja</span>
                        </button>
                        <button onclick="window.openFinalizeModal()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95 whitespace-nowrap" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-floppy-disk"></i> <span>Terapkan Penyesuaian</span>
                        </button>
                    </div>
                </div>

                <!-- Dropdown Filters Bar -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                    <!-- Filter Status Selisih -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Status Selisih</label>
                        <select onchange="window.setSoStatusFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all" ${w==="all"?"selected":""}>Semua Status</option>
                            <option value="diff" ${w==="diff"?"selected":""}>Hanya yang Selisih</option>
                            <option value="loss" ${w==="loss"?"selected":""}>Hanya Kurang (Defisit)</option>
                            <option value="surplus" ${w==="surplus"?"selected":""}>Hanya Lebih (Surplus)</option>
                            <option value="matched" ${w==="matched"?"selected":""}>Hanya Sesuai (Match)</option>
                            <option value="uncounted" ${w==="uncounted"?"selected":""}>Belum Dihitung</option>
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Kategori</label>
                        <select onchange="window.setSoCategoryFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Kategori</option>
                            ${a.map(l=>`<option value="${p(l)}" ${H===l?"selected":""}>${p(l)}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Brand -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Brand / Merek</label>
                        <select onchange="window.setSoBrandFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Brand</option>
                            ${t.map(l=>`<option value="${p(l)}" ${I===l?"selected":""}>${p(l)}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Reset Sesi -->
                    <div class="flex items-end">
                        <button onclick="window.resetAuditSession()" class="w-full py-2 px-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/70 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs">
                            <i class="fa-solid fa-arrow-rotate-left text-xs"></i> <span>Kosongkan Sesi</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 4. DAFTAR BARANG YANG DIAUDIT (CONTAINER) -->
            <div id="so-items-container"></div>
        </div>
    `;const s=x("so-quick-search-input");s&&(s.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),se(s.value))}),s.addEventListener("input",l=>{$=l.target.value,C()})),C()},C=()=>{const a=x("so-items-container");if(!a)return;const t=ae();if(!t.length){a.innerHTML=`
            <div class="p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-3 shadow-2xs">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <p class="text-sm font-bold text-slate-800 dark:text-white">Tidak ada produk ditemukan</p>
                <p class="text-xs text-slate-400 max-w-sm">Periksa kembali kata kunci pencarian atau sesuaikan pilihan filter kategori/status selisih.</p>
                <button onclick="window.clearAllSoFilters()" class="px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs active:scale-95 shadow-xs cursor-pointer">
                    Reset Filter Pencarian
                </button>
            </div>
        `;return}a.innerHTML=`
        <div class="space-y-2.5">
            <!-- Header Kolom (Desktop Only) -->
            <div class="hidden lg:grid grid-cols-12 gap-3 px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 rounded-2xl">
                <div class="col-span-5">Informasi Produk &amp; Varian</div>
                <div class="col-span-2 text-center">Stok Sistem (Toko/Gudang)</div>
                <div class="col-span-2 text-center">Input Fisik (Toko/Gudang)</div>
                <div class="col-span-3 text-right">Selisih &amp; Keterangan</div>
            </div>

            <!-- List Item Rows -->
            ${t.map(e=>`
                <div id="so-row-${e.key}" class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3 lg:space-y-0">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                        <!-- Col 1: Informasi Produk (Desktop: 5 cols) -->
                        <div class="lg:col-span-5 flex items-center gap-3 min-w-0">
                            <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center">
                                ${e.img?`<img src="${p(e.img)}" alt="${p(e.productName)}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center font-bold text-base" style="color: var(--color-primary)"><i class="fa-solid fa-box-open"></i></div>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">${p(e.productName)}</p>
                                    ${e.variantName?`
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                            ${p(e.variantName)}
                                        </span>`:""}
                                </div>
                                <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-medium">
                                    <span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold uppercase tracking-wider text-[8.5px]">${p(e.category)}</span>
                                    ${e.brand&&e.brand!=="-"?`<span>• ${p(e.brand)}</span>`:""}
                                    ${e.sku?`<span class="font-mono text-slate-400">• SKU: ${p(e.sku)}</span>`:""}
                                </div>
                            </div>
                        </div>

                        <!-- Col 2: Stok Sistem (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 flex-col items-center justify-center text-center">
                            <div class="flex items-center gap-1.5 text-[11px] font-mono">
                                <span class="text-teal-600 dark:text-teal-400 font-bold" title="Stok Rak Toko"><i class="fa-solid fa-store text-[9px] mr-1"></i>${e.systemStoreStock}</span>
                                <span class="text-slate-300 dark:text-slate-600">•</span>
                                <span class="text-amber-600 dark:text-amber-400 font-bold" title="Stok Gudang"><i class="fa-solid fa-warehouse text-[9px] mr-1"></i>${e.systemWarehouseStock}</span>
                            </div>
                            <span class="text-[11px] font-black text-slate-700 dark:text-slate-200 font-mono mt-0.5">Total: ${e.systemStock} ${p(e.unit)}</span>
                        </div>

                        <!-- Col 3: Input Fisik Rak Toko & Gudang (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 items-center justify-center gap-1.5">
                            <div class="flex flex-col items-center gap-1">
                                <div class="flex items-center gap-1">
                                    <input type="number" min="0" step="any" placeholder="Toko" value="${e.physicalStoreStock!==null?e.physicalStoreStock:""}" onchange="window.setSoPhysicalLocation('${e.key}', 'store', this.value)" oninput="window.setSoPhysicalLocation('${e.key}', 'store', this.value)" class="so-phys-store w-16 py-1.5 px-1 text-center font-mono font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-teal-300/80 dark:border-teal-700/80 rounded-xl focus:outline-hidden text-teal-800 dark:text-teal-200 shadow-2xs" title="Hitung Fisik Rak Toko">
                                    <input type="number" min="0" step="any" placeholder="Gudang" value="${e.physicalWarehouseStock!==null?e.physicalWarehouseStock:""}" onchange="window.setSoPhysicalLocation('${e.key}', 'warehouse', this.value)" oninput="window.setSoPhysicalLocation('${e.key}', 'warehouse', this.value)" class="so-phys-warehouse w-16 py-1.5 px-1 text-center font-mono font-bold text-xs bg-slate-50 dark:bg-slate-800 border border-amber-300/80 dark:border-amber-700/80 rounded-xl focus:outline-hidden text-amber-800 dark:text-amber-200 shadow-2xs" title="Hitung Fisik Gudang Cadangan">
                                </div>
                                <span class="text-[10px] font-mono text-slate-400">
                                    Fisik: <b class="so-phys-total-display text-slate-800 dark:text-white font-black">${e.physicalStock!==null?e.physicalStock:"-"}</b>
                                </span>
                            </div>
                            <button type="button" onclick="window.matchSoItem('${e.key}')" class="h-8 px-2 rounded-xl primary-bg-soft primary-border border primary-text hover:bg-[rgba(var(--color-primary-rgb),0.2)] font-black text-[10px] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" title="Samakan fisik toko &amp; gudang dengan sistem">
                                =
                            </button>
                        </div>

                        <!-- MOBILE ONLY: Compact Bar Sistem vs Fisik (Touch-Friendly) -->
                        <div class="lg:hidden p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-[10px] font-bold text-slate-400">Sistem: <span class="text-teal-600 dark:text-teal-400 font-bold"><i class="fa-solid fa-store text-[9px] mr-0.5"></i>${e.systemStoreStock}</span> | <span class="text-amber-600 dark:text-amber-400 font-bold"><i class="fa-solid fa-warehouse text-[9px] mr-0.5"></i>${e.systemWarehouseStock}</span> (Tot: ${e.systemStock})</span>
                                <button type="button" onclick="window.matchSoItem('${e.key}')" class="px-2.5 py-1 rounded-xl primary-bg-soft primary-border border primary-text font-black text-[10px] active:scale-95" title="Samakan fisik = sistem">
                                    = Samakan
                                </button>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div class="flex flex-col gap-1">
                                    <span class="text-[9px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                                        <i class="fa-solid fa-store"></i> Fisik Toko
                                    </span>
                                    <input type="number" min="0" step="any" placeholder="0" value="${e.physicalStoreStock!==null?e.physicalStoreStock:""}" onchange="window.setSoPhysicalLocation('${e.key}', 'store', this.value)" oninput="window.setSoPhysicalLocation('${e.key}', 'store', this.value)" class="so-phys-store w-full h-10 py-1 px-2 text-center font-mono font-black text-sm bg-white dark:bg-slate-900 border border-teal-300 dark:border-teal-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-white shadow-2xs">
                                </div>
                                <div class="flex flex-col gap-1">
                                    <span class="text-[9px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                        <i class="fa-solid fa-warehouse"></i> Fisik Gudang
                                    </span>
                                    <input type="number" min="0" step="any" placeholder="0" value="${e.physicalWarehouseStock!==null?e.physicalWarehouseStock:""}" onchange="window.setSoPhysicalLocation('${e.key}', 'warehouse', this.value)" oninput="window.setSoPhysicalLocation('${e.key}', 'warehouse', this.value)" class="so-phys-warehouse w-full h-10 py-1 px-2 text-center font-mono font-black text-sm bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 rounded-xl focus:outline-hidden text-slate-900 dark:text-white shadow-2xs">
                                </div>
                            </div>
                        </div>

                        <!-- Col 4: Selisih & Alasan (Desktop: 3 cols) -->
                        <div class="lg:col-span-3 flex flex-col items-start lg:items-end gap-2 border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-100 dark:border-slate-800">
                            <div class="so-diff-badge w-full flex justify-between lg:justify-end items-center">
                                <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
                                ${le(e)}
                            </div>
                            <div class="so-reason-wrap w-full">
                                ${ie(e)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `},we=(a,t)=>{const e=m[a];if(!e)return;const s=e.physicalStock!==null?e.physicalStock:e.systemStock,l=Math.max(0,s+t);V(a,l)},ve=()=>{$="";const a=x("so-quick-search-input");a&&(a.value=""),C()},Se=()=>{$="",H="all",I="all",w="all",M()},$e=a=>{H=a,C()},Ae=a=>{I=a,C()},Ce=a=>{w=a,C()},U=()=>{if(!x("modal-so-finalize")){const a=document.createElement("div");a.id="modal-so-finalize",a.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",a.onclick=t=>{t.target===a&&window.closeFinalizeModal()},a.innerHTML=`
            <div id="modal-so-finalize-content" class="modal-bottom-sheet relative flex max-h-[84dvh] sm:max-h-[82dvh] w-full max-w-lg translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Pull Indicator for Mobile Bottom Sheet -->
                <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px;"></div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-clipboard-check"></i>
                        </div>
                        <div>
                            <h3 class="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white">Terapkan Penyesuaian Stok</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Finalisasi Stock Opname</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeFinalizeModal()" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <div class="custom-scrollbar p-3.5 sm:p-5 overflow-y-auto flex-1 space-y-3.5 min-h-0 text-xs" id="so-finalize-body"></div>

                <div class="px-4 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex items-center justify-end gap-2 shrink-0" style="padding-bottom: max(0.65rem, env(safe-area-inset-bottom));">
                    <button type="button" onclick="window.closeFinalizeModal()" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 transition-all text-xs">
                        Batal
                    </button>
                    <button type="button" onclick="window.executeSoFinalize()" class="px-5 py-2 rounded-xl text-white font-extrabold flex items-center gap-2 shadow-xs cursor-pointer active:scale-95 transition-all text-xs" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-check"></i> <span>Konfirmasi &amp; Update Stok</span>
                    </button>
                </div>
            </div>
        `,document.body.appendChild(a)}if(!x("modal-so-history-detail")){const a=document.createElement("div");a.id="modal-so-history-detail",a.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",a.onclick=t=>{t.target===a&&window.closeSoHistoryModal()},a.innerHTML=`
            <div id="modal-so-history-content" class="modal-bottom-sheet relative flex max-h-[84dvh] sm:max-h-[82dvh] w-full max-w-2xl translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Pull Indicator for Mobile Bottom Sheet -->
                <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px;"></div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-file-invoice"></i>
                        </div>
                        <div>
                            <h3 class="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white" id="so-detail-title">Berita Acara Stock Opname</h3>
                            <p class="text-[9px] font-mono text-slate-400 mt-0.5" id="so-detail-subtitle"></p>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeSoHistoryModal()" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <div class="custom-scrollbar p-3.5 sm:p-5 overflow-y-auto flex-1 space-y-3 min-h-0" id="so-detail-body"></div>

                <div class="px-4 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex items-center justify-between gap-3 shrink-0" style="padding-bottom: max(0.65rem, env(safe-area-inset-bottom));">
                    <button type="button" onclick="window.printSoHistoryActive()" class="px-3.5 sm:px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 cursor-pointer active:scale-95 transition-all text-xs flex items-center gap-2 shadow-2xs">
                        <i class="fa-solid fa-print"></i> <span>Cetak A4 / PDF</span>
                    </button>
                    <button type="button" onclick="window.closeSoHistoryModal()" class="px-5 sm:px-6 py-2 rounded-xl primary-bg text-white font-extrabold cursor-pointer active:scale-95 transition-all text-xs shadow-xs">
                        Tutup
                    </button>
                </div>
            </div>
        `,document.body.appendChild(a)}},He=()=>{const a=O();if(a.countedCount<=0){y("Masukkan hasil hitung fisik setidaknya untuk 1 barang!");return}const e=Object.values(m).filter(n=>n.isCounted&&n.diff!==0),s=F(),l=ee(),o=x("so-finalize-body");o&&(o.innerHTML=`
            <div class="p-4 rounded-2xl border space-y-1.5" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.2);">
                <div class="flex items-center gap-2 font-bold text-xs" style="color: var(--color-primary);">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>Ringkasan Berita Acara &amp; Rekonsiliasi</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Stok di database toko akan diperbarui secara atomik mengikuti angka <b>Hasil Fisik</b> yang Anda masukkan. Item yang tidak dihitung tetap memakai stok lama.
                </p>
            </div>

            <!-- Bento Mini Rekap -->
            <div class="grid grid-cols-2 gap-2.5">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400">Total Diperiksa</span>
                    <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${a.countedCount} Item</p>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400">Item Mengalami Selisih</span>
                    <p class="text-base font-black ${e.length?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} mt-0.5">
                        ${e.length} Item
                    </p>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
                    <span class="text-[9px] font-black uppercase text-rose-500">Total Defisit (Loss)</span>
                    <p class="text-base font-black text-rose-600 mt-0.5">−${a.totalLossUnits} Pcs</p>
                    ${s?`<p class="text-[10px] text-rose-500 font-bold">−${A(a.totalLossRp)}</p>`:""}
                </div>
                <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                    <span class="text-[9px] font-black uppercase text-amber-500">Total Surplus</span>
                    <p class="text-base font-black text-amber-600 mt-0.5">+${a.totalSurplusUnits} Pcs</p>
                    ${s?`<p class="text-[10px] text-amber-600 font-bold">+${A(a.totalSurplusRp)}</p>`:""}
                </div>
            </div>

            <!-- Form Identitas Dokumen SO -->
            <div class="space-y-3 pt-2">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Berita Acara (Auto)</label>
                    <input type="text" id="so-input-number" value="${l}" readonly class="w-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-mono font-bold text-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nama Petugas Auditor / Staf Pelaksana *</label>
                    <input type="text" id="so-input-auditor" value="${p(N)}" placeholder="Nama staf pemeriksa fisik..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Catatan Tambahan Sesi Audit</label>
                    <textarea id="so-input-notes" rows="2" placeholder="Contoh: Audit berkala rak depan & gudang utama..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-medium text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">${p(xe)}</textarea>
                </div>
            </div>
        `),U();const b=x("modal-so-finalize"),i=x("modal-so-finalize-content");b&&i&&(document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("soFinalize"),Q(b,i))},z=(a=!1)=>{const t=()=>{const e=x("modal-so-finalize"),s=x("modal-so-finalize-content");document.body.classList.remove("overflow-hidden"),e&&s&&X(e,s)};typeof window.requestCloseModal=="function"?window.requestCloseModal("soFinalize",a,t):t()},Ie=async()=>{const a=x("so-input-auditor"),t=a?a.value.trim():"";if(!t){y("Mohon masukkan nama petugas auditor!"),a?.focus();return}const e=x("so-input-notes"),s=e?e.value.trim():"",l=x("so-input-number")?.value||ee(),b=Object.values(m).filter(n=>n.isCounted&&n.physicalStock!==null);if(!b.length){y("Tidak ada item yang dihitung!");return}const i=b.filter(n=>n.diff!==0);z(),J("Memperbarui Stok Gudang & Berita Acara...");try{const n=typeof B<"u"&&B?B:window.db;if(!n)throw new Error("Koneksi Firebase database belum aktif");const d={};b.forEach(c=>{d[c.productId]||(d[c.productId]=[]),d[c.productId].push(c)});const r=n.batch(),S=[];Object.keys(d).forEach(c=>{const ce=n.collection("freshmart").doc("cms_data").collection("products").doc(String(c)),D=(g.products||[]).findIndex(v=>v&&String(v.id)===String(c));if(D<0)return;const u=JSON.parse(JSON.stringify(g.products[D])),q=d[c];if(u.variants&&u.variants.length>0)q.forEach(k=>{if(k.variantIndex!==null&&u.variants[k.variantIndex]){const h=u.variants[k.variantIndex],G=k.physicalStoreStock!==null?k.physicalStoreStock:k.physicalStock!==null?k.physicalStock:h.storeStock||0,Y=k.physicalWarehouseStock!==null?k.physicalWarehouseStock:h.warehouseStock||0;h.storeStock=G,h.warehouseStock=Y,h.stock=G+Y,h.stock>0&&(h.isActive===!1||h.isActive==="false")&&(h.isActive=!0)}}),u.storeStock=u.variants.reduce((k,h)=>k+(parseFloat(h.storeStock)||0),0),u.warehouseStock=u.variants.reduce((k,h)=>k+(parseFloat(h.warehouseStock)||0),0),u.stock=u.storeStock+u.warehouseStock,u.variants.some(k=>(parseFloat(k.stock)||0)>0&&k.isActive!==!1&&k.isActive!=="false")&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true");else{const v=q[0];if(v){const k=v.physicalStoreStock!==null?v.physicalStoreStock:v.physicalStock!==null?v.physicalStock:u.storeStock||0,h=v.physicalWarehouseStock!==null?v.physicalWarehouseStock:u.warehouseStock||0;u.storeStock=k,u.warehouseStock=h,u.stock=k+h,u.stock>0&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true")}}r.set(ce,u,{merge:!0}),g.products[D]=u,S.push(String(c))});const f=O(),_={id:"so_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),soNumber:l,date:new Date().toISOString(),auditorName:t,notes:s,categoryFilter:H,brandFilter:I,totalItemsAudited:f.countedCount,totalWithDiff:i.length,totalLossUnits:f.totalLossUnits,totalSurplusUnits:f.totalSurplusUnits,netVarianceUnits:f.netVarianceUnits,totalLossRp:f.totalLossRp,totalSurplusRp:f.totalSurplusRp,netVarianceRp:f.netVarianceRp,items:i.map(c=>({productId:c.productId,variantIndex:c.variantIndex,variantName:c.variantName||"",productName:c.productName,sku:c.sku||"",category:c.category,unit:c.unit||"pcs",systemStoreStock:c.systemStoreStock,systemWarehouseStock:c.systemWarehouseStock,systemStock:c.systemStock,physicalStoreStock:c.physicalStoreStock,physicalWarehouseStock:c.physicalWarehouseStock,physicalStock:c.physicalStock,diffStore:c.diffStore,diffWarehouse:c.diffWarehouse,diff:c.diff,hpp:c.hpp,price:c.price,diffValueHpp:c.diffValueHpp,reason:c.reason,notes:c.notes}))};Array.isArray(g.stockOpnameHistory)||(g.stockOpnameHistory=[]),g.stockOpnameHistory.unshift(_),await r.commit(),await Z(["stockOpnameHistory"],{updatedProductIds:S}),L(),y("Stock Opname berhasil diterapkan & stok telah disesuaikan!"),m={},W(),window.openDocPreview?.("stock_opname",_.id),ne("history")}catch(n){L(),console.error("[StockOpname] Finalize Error:",n),y("Gagal menyimpan penyesuaian: "+(n.message||n))}},de=()=>{const a=x("so-subtab-content");if(!a)return;const t=g.stockOpnameHistory||[];if(!t.length){a.innerHTML=`
            <div class="p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-3 shadow-2xs">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <p class="text-sm font-bold text-slate-800 dark:text-white">Belum Ada Riwayat Stock Opname</p>
                <p class="text-xs text-slate-400 max-w-sm">Riwayat audit fisik rak dan Berita Acara yang telah difinalisasi akan tersimpan otomatis di sini.</p>
                <button onclick="window.switchSoSubTab('active')" class="px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs active:scale-95 shadow-xs cursor-pointer">
                    Mulai Sesi Audit Baru
                </button>
            </div>
        `;return}const e=F();a.innerHTML=`
        <div class="space-y-3">
            ${t.map(s=>`
                <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-base border shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${p(s.soNumber||s.id)}</span>
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
                                        Selesai Difinalisasi
                                    </span>
                                </div>
                                <p class="text-[10px] text-slate-400 mt-0.5">
                                    <i class="fa-solid fa-calendar mr-1"></i>${te(s.date)} &bull; Auditor: <b>${p(s.auditorName||"Staf")}</b>
                                </p>
                            </div>
                        </div>

                        <!-- Tombol Aksi -->
                        <div class="flex items-center gap-1.5 self-end sm:self-auto">
                            <button onclick="window.viewSoHistoryDetail('${s.id}')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs">
                                <i class="fa-solid fa-eye text-xs"></i> <span>Rincian</span>
                            </button>
                            <button onclick="window.openDocPreview && window.openDocPreview('stock_opname', '${s.id}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                                <i class="fa-solid fa-print text-xs"></i> <span>Cetak A4</span>
                            </button>
                            ${R()?`
                                <button onclick="window.deleteSoHistory('${s.id}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-90" title="Hapus Riwayat Dokumen">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>`:""}
                        </div>
                    </div>

                    <!-- Metrics Strip -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Total Diperiksa</span>
                            <span class="font-black text-slate-800 dark:text-white text-xs">${s.totalItemsAudited||0} Item</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Barang Selisih</span>
                            <span class="font-black ${s.totalWithDiff>0?"text-amber-600":"text-emerald-600"} text-xs">${s.totalWithDiff||0} Item</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-rose-500 block">Total Defisit</span>
                            <span class="font-black text-rose-600 text-xs">−${s.totalLossUnits||0} Pcs</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Dampak Bersih</span>
                            <span class="font-black ${e?s.netVarianceRp>=0?"text-emerald-600":"text-rose-600":"text-slate-700 dark:text-slate-200"} text-xs">
                                ${e?(s.netVarianceRp>=0?"+":"−")+A(Math.abs(s.netVarianceRp||0)):`${s.netVarianceUnits||0} Pcs`}
                            </span>
                        </div>
                    </div>

                    ${s.notes?`
                        <div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 p-2 rounded-xl border border-slate-100 dark:border-slate-800/60 flex items-start gap-2">
                            <i class="fa-solid fa-note-sticky text-amber-500 mt-0.5 text-xs"></i>
                            <span>${p(s.notes)}</span>
                        </div>`:""}
                </div>
            `).join("")}
        </div>
    `},Fe=a=>{const e=(g.stockOpnameHistory||[]).find(r=>String(r.id)===String(a));if(!e){y("Data Berita Acara tidak ditemukan!");return}U(),P=e;const s=x("so-detail-title"),l=x("so-detail-subtitle"),o=x("so-detail-body");s&&(s.innerText=e.soNumber||"Berita Acara Stock Opname"),l&&(l.innerText=`${te(e.date)} • Oleh: ${e.auditorName||"Staf"}`);const b=F(),i=e.items||[];o&&(o.innerHTML=`
            <!-- Bento Rekap 4 Metrik Presisi -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400 block">Total Disesuaikan</span>
                    <span class="font-black text-slate-800 dark:text-white text-xs">${i.length} Barang</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-rose-500 block">Total Defisit</span>
                    <span class="font-black text-rose-600 text-xs">−${e.totalLossUnits||0} Pcs</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-amber-500 block">Total Surplus</span>
                    <span class="font-black text-amber-600 text-xs">+${e.totalSurplusUnits||0} Pcs</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400 block">Dampak Finansial</span>
                    <span class="font-black ${b?e.netVarianceRp>=0?"text-emerald-600":"text-rose-600":"text-slate-700 dark:text-slate-200"} text-xs">
                        ${b?(e.netVarianceRp>=0?"+":"−")+A(Math.abs(e.netVarianceRp||0)):`${e.netVarianceUnits||0} Pcs`}
                    </span>
                </div>
            </div>

            <!-- Tabel Daftar Barang yang Discrepancy -->
            <div class="space-y-2">
                <h4 class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">Rincian Barang yang Mengalami Selisih:</h4>
                <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    ${i.map((r,S)=>`
                        <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <span class="font-bold text-slate-800 dark:text-white truncate">${S+1}. ${p(r.productName)}</span>
                                    ${r.variantName?`<span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-600 dark:text-slate-300">${p(r.variantName)}</span>`:""}
                                </div>
                                <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400 flex-wrap">
                                    <span>Kategori: ${p(r.category||"Umum")}</span>
                                    ${r.sku?`<span>• SKU: ${p(r.sku)}</span>`:""}
                                    ${r.notes?`<span>• Catatan: <i class="italic text-slate-500 dark:text-slate-400">${p(r.notes)}</i></span>`:""}
                                </div>
                            </div>

                            <div class="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                                <div class="text-left sm:text-right text-[11px]">
                                    <span class="text-slate-400 block text-[9px]">Sistem <i class="fa-solid fa-arrow-right text-[8px] mx-0.5 text-slate-400"></i> Fisik</span>
                                    <span class="font-mono font-bold">${r.systemStock} <i class="fa-solid fa-arrow-right text-[8px] mx-0.5 text-slate-400"></i> <b class="text-slate-900 dark:text-white">${r.physicalStock}</b> ${p(r.unit||"pcs")}</span>
                                </div>
                                <div class="text-right min-w-[80px]">
                                    <span class="px-2 py-0.5 rounded-lg text-[10px] font-black ${r.diff<0?"bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300":"bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300"}">
                                        ${r.diff<0?`−${Math.abs(r.diff)}`:`+${r.diff}`} ${p(r.unit||"pcs")}
                                    </span>
                                    ${b&&r.hpp>0?`
                                        <span class="block text-[9px] font-bold ${r.diff<0?"text-rose-600":"text-amber-600"} mt-0.5">
                                            ${r.diff<0?"−":"+"}${A(Math.abs(r.diffValueHpp||0))}
                                        </span>`:""}
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `);const n=x("modal-so-history-detail"),d=x("modal-so-history-content");n&&d&&(document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("soHistory"),Q(n,d))},K=(a=!1)=>{const t=()=>{const e=x("modal-so-history-detail"),s=x("modal-so-history-content");document.body.classList.remove("overflow-hidden"),e&&s&&X(e,s)};typeof window.requestCloseModal=="function"?window.requestCloseModal("soHistory",a,t):t()},Me=()=>{P&&(K(),window.openDocPreview?.("stock_opname",P.id))},Te=a=>{if(!R()){y("Hanya Owner yang berhak menghapus riwayat audit.");return}j("Hapus Arsip Berita Acara?","Dokumen riwayat audit ini akan dihapus dari arsip. (Stok barang yang sudah disesuaikan tidak akan berubah). Lanjutkan?",async()=>{J("Menghapus arsip...");try{g.stockOpnameHistory=(g.stockOpnameHistory||[]).filter(t=>String(t.id)!==String(a)),await Z(["stockOpnameHistory"]),L(),y("Arsip Berita Acara berhasil dihapus."),de()}catch(t){L(),y("Gagal menghapus: "+t.message)}},"Ya, Hapus")},Le=()=>{window.openDocPreview?.("stock_opname_worksheet")};window.renderStockOpnameView=M;window.switchSoSubTab=ne;window.setSoPhysicalCount=V;window.setSoPhysicalLocation=oe;window.stepSoPhysicalCount=we;window.matchSoItem=fe;window.setSoItemReason=ke;window.setSoItemNotes=me;window.matchAllUncountedInView=he;window.resetAuditSession=ge;window.handleSoBarcodeScan=se;window.clearSoSearch=ve;window.clearAllSoFilters=Se;window.setSoCategoryFilter=$e;window.setSoBrandFilter=Ae;window.setSoStatusFilter=Ce;window.openFinalizeModal=He;window.closeFinalizeModal=z;window.closeSOFinalizeModal=z;window.executeSoFinalize=Ie;window.viewSoHistoryDetail=Fe;window.closeSoHistoryModal=K;window.closeSOHistoryModal=K;window.printSoHistoryActive=Me;window.deleteSoHistory=Te;window.printSoWorksheet=Le;export{be as SO_DISCREPANCY_REASONS,Se as clearAllSoFilters,ve as clearSoSearch,z as closeFinalizeModal,K as closeSoHistoryModal,O as computeAuditStats,Te as deleteSoHistory,U as ensureSoModals,Ie as executeSoFinalize,ee as generateSoNumber,ae as getFilteredAuditItems,se as handleSoBarcodeScan,W as initOrSyncAuditItems,he as matchAllUncountedInView,fe as matchSoItem,He as openFinalizeModal,Me as printSoHistoryActive,Le as printSoWorksheet,C as renderSoActiveItems,ye as renderSoActiveView,de as renderSoHistoryView,E as renderSoStatsBar,M as renderStockOpnameView,ge as resetAuditSession,Ae as setSoBrandFilter,$e as setSoCategoryFilter,me as setSoItemNotes,ke as setSoItemReason,V as setSoPhysicalCount,oe as setSoPhysicalLocation,Ce as setSoStatusFilter,we as stepSoPhysicalCount,ne as switchSoSubTab,Fe as viewSoHistoryDetail};

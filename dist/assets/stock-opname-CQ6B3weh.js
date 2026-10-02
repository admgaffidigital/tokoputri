import{e as u,I as z,ab as P,v as h,x as R,ae as _,a as g,a7 as j,l as T,aa as ne,aJ as H,f as w,i as d,B as q,b as de}from"./module-print-Ci9rSYNo.js";import{o as G}from"./module-admin-CWlWyg23.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-faq-CYTInM7F.js";let D="active",C="all",I="all",v="all",y="",f={},L="",ce="",N=null;const pe=[{key:"salah_hitung",label:"Salah Catat / Koreksi Kasir",icon:"fa-calculator",color:"blue"},{key:"rusak",label:"Barang Rusak / Cacat Fisik",icon:"fa-box-tissue",color:"rose"},{key:"hilang",label:"Barang Hilang / Shrinkage",icon:"fa-user-secret",color:"rose"},{key:"kadaluarsa",label:"Kadaluarsa / Expired",icon:"fa-calendar-xmark",color:"amber"},{key:"bonus",label:"Bonus Supplier / Temuan Fisik",icon:"fa-gift",color:"emerald"},{key:"retur_pending",label:"Retur Pembeli Belum Diinput",icon:"fa-rotate-left",color:"purple"},{key:"lainnya",label:"Alasan Lainnya",icon:"fa-file-lines",color:"slate"}],W=()=>{const t=new Date,a=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),r=Math.floor(1e3+Math.random()*9e3);return`SO-${a}${e}${s}-${r}`},Y=t=>{if(!t)return"-";try{return(t.toDate?t.toDate():new Date(t)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return String(t)}},O=()=>{const t=g.products||[],a={...f};t.forEach(e=>{if(!e||e.id==null)return;const s=String(e.id);if(Array.isArray(e.variants)&&e.variants.length>0)e.variants.forEach((o,c)=>{const l=`${s}_v${c}`,n=parseFloat(o.stock)||0,m=parseFloat(o.hpp)||parseFloat(e.hpp)||0,i=parseFloat(o.price)||parseFloat(e.price)||0;a[l]?(a[l].systemStock=n,a[l].hpp=m,a[l].price=i,a[l].isCounted&&a[l].physicalStock!==null&&(a[l].diff=a[l].physicalStock-n,a[l].diffValueHpp=a[l].diff*m)):a[l]={key:l,productId:e.id,variantIndex:c,variantName:o.name||`Varian #${c+1}`,productName:e.name||"Produk Tanpa Nama",sku:o.sku||e.sku||"",barcode:o.barcode||e.barcode||"",category:e.category||"Umum",brand:e.brand||"-",unit:e.unit||"pcs",img:o.img||e.img||"",colorCode:o.colorCode||"",systemStock:n,physicalStock:null,diff:0,hpp:m,price:i,diffValueHpp:0,reason:"salah_hitung",notes:"",isCounted:!1}});else{const o=`${s}_main`,c=parseFloat(e.stock)||0,l=parseFloat(e.hpp)||0,n=parseFloat(e.price)||0;a[o]?(a[o].systemStock=c,a[o].hpp=l,a[o].price=n,a[o].isCounted&&a[o].physicalStock!==null&&(a[o].diff=a[o].physicalStock-c,a[o].diffValueHpp=a[o].diff*l)):a[o]={key:o,productId:e.id,variantIndex:null,variantName:null,productName:e.name||"Produk Tanpa Nama",sku:e.sku||"",barcode:e.barcode||"",category:e.category||"Umum",brand:e.brand||"-",unit:e.unit||"pcs",img:e.img||"",colorCode:"",systemStock:c,physicalStock:null,diff:0,hpp:l,price:n,diffValueHpp:0,reason:"salah_hitung",notes:"",isCounted:!1}}}),f=a,L||(L=ne()?.name||(P()?"Owner Toko":"Staf Gudang & Kasir"))},J=()=>{let t=Object.values(f);if(C!=="all"&&(t=t.filter(a=>a.category===C)),I!=="all"&&(t=t.filter(a=>a.brand===I)),v==="diff"?t=t.filter(a=>a.isCounted&&a.diff!==0):v==="matched"?t=t.filter(a=>a.isCounted&&a.diff===0):v==="uncounted"?t=t.filter(a=>!a.isCounted):v==="loss"?t=t.filter(a=>a.isCounted&&a.diff<0):v==="surplus"&&(t=t.filter(a=>a.isCounted&&a.diff>0)),y){const a=y.toLowerCase().trim();t=t.filter(e=>e.productName.toLowerCase().includes(a)||e.variantName&&e.variantName.toLowerCase().includes(a)||e.sku&&e.sku.toLowerCase().includes(a)||e.barcode&&e.barcode.toLowerCase().includes(a)||e.category&&e.category.toLowerCase().includes(a)||e.brand&&e.brand.toLowerCase().includes(a))}return t},V=()=>{const t=Object.values(f),a=t.length;let e=0,s=0,r=0,o=0,c=0,l=0,n=0,m=0;t.forEach(b=>{b.isCounted&&b.physicalStock!==null&&(e++,b.diff===0?s++:b.diff<0?(r++,c+=Math.abs(b.diff),n+=Math.abs(b.diffValueHpp)):b.diff>0&&(o++,l+=b.diff,m+=b.diffValueHpp))});const i=l-c,A=m-n;return{totalItems:a,countedCount:e,uncountedCount:a-e,matchedCount:s,lossCount:r,surplusCount:o,totalLossUnits:c,totalSurplusUnits:l,netVarianceUnits:i,totalLossRp:n,totalSurplusRp:m,netVarianceRp:A}},Q=t=>{if(!t)return;const a=String(t).trim().toLowerCase();if(!a)return;const s=Object.values(f).find(r=>r.barcode&&r.barcode.toLowerCase()===a||r.sku&&r.sku.toLowerCase()===a);if(s){const r=s.physicalStock!==null?s.physicalStock:0;B(s.key,r+1),requestAnimationFrame(()=>{const o=document.getElementById(`so-row-${s.key}`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.classList.add("ring-2","ring-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.08)]"),setTimeout(()=>{o.classList.remove("ring-2","ring-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.08)]")},1500))});try{window.playCashierBeep?.()}catch{}h(`Ditemukan: ${s.productName} (+1 Fisik) ✨`)}else{y=t.trim();const r=u("so-quick-search-input");r&&(r.value=y),S(),h(`Pencarian: "${t}"`)}},B=(t,a)=>{const e=f[t];if(e){if(a===null||a===""||isNaN(a))e.physicalStock=null,e.isCounted=!1,e.diff=0,e.diffValueHpp=0;else{const s=Math.max(0,parseFloat(a)||0);e.physicalStock=s,e.isCounted=!0,e.diff=s-e.systemStock,e.diffValueHpp=e.diff*e.hpp,e.diff===0&&(e.reason="sesuai")}ae(),X(t)}},ue=t=>{const a=f[t];a&&(B(t,a.systemStock),a.reason="sesuai",X(t))},xe=(t,a)=>{f[t]&&(f[t].reason=a)},be=(t,a)=>{f[t]&&(f[t].notes=a)},fe=()=>{const a=J().filter(e=>!e.isCounted);if(!a.length){h("Semua item dalam filter ini sudah memiliki data fisik!");return}R(`Konfirmasi Samakan Stok (${a.length} Barang)`,`Apakah Anda yakin ingin menyamakan seluruh ${a.length} barang yang belum dihitung agar Stok Fisik = Stok Sistem (Selisih 0)?`,()=>{a.forEach(e=>{e.physicalStock=e.systemStock,e.isCounted=!0,e.diff=0,e.diffValueHpp=0,e.reason="sesuai"}),F(),h(`${a.length} barang berhasil disamakan! ✨`)},"Ya, Samakan Semua")},me=()=>{R("Reset Sesi Hitung Stock Opname?","Seluruh data hitungan fisik sementara yang belum difinalisasi akan dikosongkan kembali. Lanjutkan?",()=>{f={},O(),F(),h("Sesi Stock Opname berhasil direset.")},"Ya, Kosongkan")},X=t=>{const a=document.getElementById(`so-row-${t}`);if(!a){S();return}const e=f[t];if(!e)return;a.querySelectorAll(".so-phys-input").forEach(c=>{const l=e.physicalStock!==null?String(e.physicalStock):"";c.value!==l&&(c.value=l)});const r=a.querySelector(".so-diff-badge");r&&(r.innerHTML=`
            <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
            ${Z(e)}
        `);const o=a.querySelector(".so-reason-wrap");o&&(o.innerHTML=ee(e))},Z=t=>{if(!t.isCounted||t.physicalStock===null)return'<span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap"><i class="fa-solid fa-hourglass-start mr-1 text-[9px]"></i>Belum Dihitung</span>';if(t.diff===0)return'<span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-circle-check mr-1"></i>Sesuai (0)</span>';const a=H();return t.diff<0?`
            <div class="flex flex-col items-end">
                <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300/80 dark:border-rose-800 shadow-2xs whitespace-nowrap">
                    <i class="fa-solid fa-arrow-down mr-1"></i>Kurang ${Math.abs(t.diff)} ${d(t.unit)}
                </span>
                ${a&&t.hpp>0?`
                    <span class="text-[9px] font-bold text-rose-600 dark:text-rose-400 mt-0.5" title="Potensi Kerugian HPP">
                        - ${w(Math.abs(t.diffValueHpp))}
                    </span>`:""}
            </div>
        `:`
        <div class="flex flex-col items-end">
            <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300/80 dark:border-amber-800 shadow-2xs whitespace-nowrap">
                <i class="fa-solid fa-arrow-up mr-1"></i>Lebih +${t.diff} ${d(t.unit)}
            </span>
            ${a&&t.hpp>0?`
                <span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5" title="Nilai Tambahan HPP">
                    + ${w(t.diffValueHpp)}
                </span>`:""}
        </div>
    `},ee=t=>!t.isCounted||t.diff===0?'<span class="text-[10px] text-slate-400 italic">Tidak ada selisih stok</span>':`
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 w-full">
            <select onchange="window.setSoItemReason('${t.key}', this.value)" class="text-[11px] font-bold py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] cursor-pointer w-full sm:w-auto sm:max-w-[190px] truncate shadow-2xs">
                ${pe.map(a=>`
                    <option value="${a.key}" ${t.reason===a.key?"selected":""}>${a.label}</option>
                `).join("")}
            </select>
            <input type="text" placeholder="Catatan selisih (opsional)..." value="${d(t.notes||"")}" oninput="window.setSoItemNotes('${t.key}', this.value)" class="text-[11px] font-medium py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] flex-1 min-w-0 shadow-2xs">
        </div>
    `,F=()=>{O(),E();const t=(g.categories||[]).map(e=>typeof e=="string"?e:e.name).filter(Boolean),a=(g.brands||[]).map(e=>typeof e=="string"?e:e.name).filter(Boolean);de("admin-content",`
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
                        <button onclick="window.switchSoSubTab('active')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${D==="active"?"primary-bg text-white shadow-xs":"text-slate-600 dark:text-slate-300 hover:text-slate-900"}">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i> <span>Sesi Audit Aktif</span>
                        </button>
                        <button onclick="window.switchSoSubTab('history')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${D==="history"?"primary-bg text-white shadow-xs":"text-slate-600 dark:text-slate-300 hover:text-slate-900"}">
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
    `),ae(),D==="active"?ke(t,a):re()},te=t=>{D=t,F()},ae=()=>{const t=u("so-stats-container");if(!t)return;const a=V(),e=H(),s=a.totalItems>0?Math.round(a.countedCount/a.totalItems*100):0;t.innerHTML=`
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-1">
            <!-- Card 1: Total Progress Hitung (Diaksen Tema) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white to-[rgba(var(--color-primary-rgb),0.03)] dark:from-slate-900 dark:to-slate-900 border border-[rgba(var(--color-primary-rgb),0.25)] shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Kemajuan Hitung</span>
                    <span class="text-[10px] font-black" style="color: var(--color-primary);">${s}%</span>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${a.countedCount}</span>
                    <span class="text-xs font-bold text-slate-400">/ ${a.totalItems} Item</span>
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
                    <span class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">${a.matchedCount}</span>
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
                    <span class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">${a.lossCount}</span>
                    <span class="text-xs font-bold text-rose-500">Item (−${a.totalLossUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${e?`Defisit Modal: <b class="text-rose-600 dark:text-rose-400">−${w(a.totalLossRp)}</b>`:"Defisit fisik terdeteksi"}
                </p>
            </div>

            <!-- Card 4: Selisih Lebih (Surplus) / Dampak Bersih -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">Selisih Lebih (Surplus)</span>
                    <i class="fa-solid fa-arrow-trend-up text-amber-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">${a.surplusCount}</span>
                    <span class="text-xs font-bold text-amber-500">Item (+${a.totalSurplusUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${e?`Net Variance: <b class="${a.netVarianceRp>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${a.netVarianceRp>=0?"+":"−"}${w(Math.abs(a.netVarianceRp))}</b>`:"Surplus fisik terdeteksi"}
                </p>
            </div>
        </div>
    `},ke=(t,a)=>{const e=u("so-subtab-content");if(!e)return;e.innerHTML=`
        <div class="space-y-4">
            <!-- Filter Bar & Barcode Scanner Toolstrip -->
            <div class="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3.5">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <!-- Kolom Input Pencarian Cepat & Barcode Gun -->
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base"></i>
                        <input type="text" id="so-quick-search-input" value="${d(y)}" placeholder="Scan barcode produk atau ketik SKU / Nama barang..." class="w-full bg-slate-50 dark:bg-slate-800/80 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-24 text-xs sm:text-sm font-bold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] transition-all">
                        
                        <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            ${y?`
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
                            <option value="all" ${v==="all"?"selected":""}>Semua Status</option>
                            <option value="diff" ${v==="diff"?"selected":""}>Hanya yang Selisih</option>
                            <option value="loss" ${v==="loss"?"selected":""}>Hanya Kurang (Defisit)</option>
                            <option value="surplus" ${v==="surplus"?"selected":""}>Hanya Lebih (Surplus)</option>
                            <option value="matched" ${v==="matched"?"selected":""}>Hanya Sesuai (Match)</option>
                            <option value="uncounted" ${v==="uncounted"?"selected":""}>Belum Dihitung</option>
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Kategori</label>
                        <select onchange="window.setSoCategoryFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Kategori</option>
                            ${t.map(r=>`<option value="${d(r)}" ${C===r?"selected":""}>${d(r)}</option>`).join("")}
                        </select>
                    </div>

                    <!-- Filter Brand -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Brand / Merek</label>
                        <select onchange="window.setSoBrandFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Brand</option>
                            ${a.map(r=>`<option value="${d(r)}" ${I===r?"selected":""}>${d(r)}</option>`).join("")}
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
    `;const s=u("so-quick-search-input");s&&(s.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),Q(s.value))}),s.addEventListener("input",r=>{y=r.target.value,S()})),S()},S=()=>{const t=u("so-items-container");if(!t)return;const a=J();if(!a.length){t.innerHTML=`
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
        `;return}t.innerHTML=`
        <div class="space-y-2.5">
            <!-- Header Kolom (Desktop Only) -->
            <div class="hidden lg:grid grid-cols-12 gap-3 px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 rounded-2xl">
                <div class="col-span-5">Informasi Produk &amp; Varian</div>
                <div class="col-span-2 text-center">Stok Sistem</div>
                <div class="col-span-2 text-center">Hasil Fisik Rak</div>
                <div class="col-span-3 text-right">Selisih &amp; Keterangan</div>
            </div>

            <!-- List Item Rows -->
            ${a.map(e=>`
                <div id="so-row-${e.key}" class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3 lg:space-y-0">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                        <!-- Col 1: Informasi Produk (Desktop: 5 cols) -->
                        <div class="lg:col-span-5 flex items-center gap-3 min-w-0">
                            <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center">
                                ${e.img?`<img src="${d(e.img)}" alt="${d(e.productName)}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center font-bold text-base" style="color: var(--color-primary)"><i class="fa-solid fa-box-open"></i></div>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">${d(e.productName)}</p>
                                    ${e.variantName?`
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                            ${d(e.variantName)}
                                        </span>`:""}
                                </div>
                                <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-medium">
                                    <span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold uppercase tracking-wider text-[8.5px]">${d(e.category)}</span>
                                    ${e.brand&&e.brand!=="-"?`<span>• ${d(e.brand)}</span>`:""}
                                    ${e.sku?`<span class="font-mono text-slate-400">• SKU: ${d(e.sku)}</span>`:""}
                                </div>
                            </div>
                        </div>

                        <!-- Col 2: Stok Sistem (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 flex-col items-center justify-center text-center">
                            <span class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-200 font-mono">${e.systemStock}</span>
                            <span class="text-[10px] text-slate-400 ml-0.5 font-medium">${d(e.unit)}</span>
                        </div>

                        <!-- Col 3: Input Fisik Rak (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 items-center justify-center gap-1">
                            <button type="button" onclick="window.stepSoPhysicalCount('${e.key}', -1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="number" min="0" step="any" placeholder="Fisik" value="${e.physicalStock!==null?e.physicalStock:""}" onchange="window.setSoPhysicalCount('${e.key}', this.value)" oninput="window.setSoPhysicalCount('${e.key}', this.value)" class="so-phys-input w-16 sm:w-20 py-1.5 px-1 text-center font-mono font-black text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-[var(--color-primary)] text-slate-900 dark:text-white shadow-2xs">
                            <button type="button" onclick="window.stepSoPhysicalCount('${e.key}', 1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            <button type="button" onclick="window.matchSoItem('${e.key}')" class="h-8 px-2 rounded-xl primary-bg-soft primary-border border primary-text hover:bg-[rgba(var(--color-primary-rgb),0.2)] font-black text-[10px] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" title="Samakan fisik dengan stok sistem">
                                =
                            </button>
                        </div>

                        <!-- MOBILE ONLY: Compact Bar Sistem vs Fisik (Touch-Friendly) -->
                        <div class="lg:hidden p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                            <div class="flex flex-col">
                                <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Stok Sistem</span>
                                <span class="text-xs font-black font-mono text-slate-800 dark:text-slate-200">${e.systemStock} ${d(e.unit)}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <button type="button" onclick="window.stepSoPhysicalCount('${e.key}', -1)" class="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-600 font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs" title="Kurangi 1">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="number" min="0" step="any" placeholder="Fisik" value="${e.physicalStock!==null?e.physicalStock:""}" onchange="window.setSoPhysicalCount('${e.key}', this.value)" oninput="window.setSoPhysicalCount('${e.key}', this.value)" class="so-phys-input w-20 sm:w-24 h-10 py-1.5 px-2 text-center font-mono font-black text-base bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-[var(--color-primary)] text-slate-900 dark:text-white shadow-2xs">
                                <button type="button" onclick="window.stepSoPhysicalCount('${e.key}', 1)" class="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-600 font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs" title="Tambah 1">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <button type="button" onclick="window.matchSoItem('${e.key}')" class="h-10 px-3 rounded-xl primary-bg-soft primary-border border primary-text font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" title="Samakan fisik = sistem">
                                    =
                                </button>
                            </div>
                        </div>

                        <!-- Col 4: Selisih & Alasan (Desktop: 3 cols) -->
                        <div class="lg:col-span-3 flex flex-col items-start lg:items-end gap-2 border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-100 dark:border-slate-800">
                            <div class="so-diff-badge w-full flex justify-between lg:justify-end items-center">
                                <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
                                ${Z(e)}
                            </div>
                            <div class="so-reason-wrap w-full">
                                ${ee(e)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `},ge=(t,a)=>{const e=f[t];if(!e)return;const s=e.physicalStock!==null?e.physicalStock:e.systemStock,r=Math.max(0,s+a);B(t,r)},he=()=>{y="";const t=u("so-quick-search-input");t&&(t.value=""),S()},ve=()=>{y="",C="all",I="all",v="all",F()},ye=t=>{C=t,S()},we=t=>{I=t,S()},Se=t=>{v=t,S()},E=()=>{if(!u("modal-so-finalize")){const t=document.createElement("div");t.id="modal-so-finalize",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",t.onclick=a=>{a.target===t&&window.closeFinalizeModal()},t.innerHTML=`
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
        `,document.body.appendChild(t)}if(!u("modal-so-history-detail")){const t=document.createElement("div");t.id="modal-so-history-detail",t.className="fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden",t.onclick=a=>{a.target===t&&window.closeSoHistoryModal()},t.innerHTML=`
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
        `,document.body.appendChild(t)}},$e=()=>{const t=V();if(t.countedCount<=0){h("Masukkan hasil hitung fisik setidaknya untuk 1 barang!");return}const e=Object.values(f).filter(n=>n.isCounted&&n.diff!==0),s=H(),r=W(),o=u("so-finalize-body");o&&(o.innerHTML=`
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
                    <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${t.countedCount} Item</p>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400">Item Mengalami Selisih</span>
                    <p class="text-base font-black ${e.length?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"} mt-0.5">
                        ${e.length} Item
                    </p>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
                    <span class="text-[9px] font-black uppercase text-rose-500">Total Defisit (Loss)</span>
                    <p class="text-base font-black text-rose-600 mt-0.5">−${t.totalLossUnits} Pcs</p>
                    ${s?`<p class="text-[10px] text-rose-500 font-bold">−${w(t.totalLossRp)}</p>`:""}
                </div>
                <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                    <span class="text-[9px] font-black uppercase text-amber-500">Total Surplus</span>
                    <p class="text-base font-black text-amber-600 mt-0.5">+${t.totalSurplusUnits} Pcs</p>
                    ${s?`<p class="text-[10px] text-amber-600 font-bold">+${w(t.totalSurplusRp)}</p>`:""}
                </div>
            </div>

            <!-- Form Identitas Dokumen SO -->
            <div class="space-y-3 pt-2">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Berita Acara (Auto)</label>
                    <input type="text" id="so-input-number" value="${r}" readonly class="w-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-mono font-bold text-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nama Petugas Auditor / Staf Pelaksana *</label>
                    <input type="text" id="so-input-auditor" value="${d(L)}" placeholder="Nama staf pemeriksa fisik..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Catatan Tambahan Sesi Audit</label>
                    <textarea id="so-input-notes" rows="2" placeholder="Contoh: Audit berkala rak depan & gudang utama..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-medium text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">${d(ce)}</textarea>
                </div>
            </div>
        `),E();const c=u("modal-so-finalize"),l=u("modal-so-finalize-content");c&&l&&(document.body.classList.add("overflow-hidden"),q(c,l))},se=()=>{const t=u("modal-so-finalize"),a=u("modal-so-finalize-content");document.body.classList.remove("overflow-hidden"),t&&a&&z(t,a)},Ae=async()=>{const t=u("so-input-auditor"),a=t?t.value.trim():"";if(!a){h("Mohon masukkan nama petugas auditor!"),t?.focus();return}const e=u("so-input-notes"),s=e?e.value.trim():"",r=u("so-input-number")?.value||W(),c=Object.values(f).filter(n=>n.isCounted&&n.physicalStock!==null);if(!c.length){h("Tidak ada item yang dihitung!");return}const l=c.filter(n=>n.diff!==0);se(),_("Memperbarui Stok Gudang & Berita Acara...");try{const n=typeof T<"u"&&T?T:window.db;if(!n)throw new Error("Koneksi Firebase database belum aktif");const m={};c.forEach(p=>{m[p.productId]||(m[p.productId]=[]),m[p.productId].push(p)});const i=n.batch(),A=[];Object.keys(m).forEach(p=>{const le=n.collection("freshmart").doc("cms_data").collection("products").doc(String(p)),M=(g.products||[]).findIndex($=>$&&String($.id)===String(p));if(M<0)return;const x=JSON.parse(JSON.stringify(g.products[M])),K=m[p];if(x.variants&&x.variants.length>0)K.forEach(k=>{k.variantIndex!==null&&x.variants[k.variantIndex]&&(x.variants[k.variantIndex].stock=k.physicalStock,k.physicalStock>0&&(x.variants[k.variantIndex].isActive===!1||x.variants[k.variantIndex].isActive==="false")&&(x.variants[k.variantIndex].isActive=!0))}),x.stock=x.variants.reduce((k,ie)=>k+(parseFloat(ie.stock)||0),0),x.variants.some(k=>(parseFloat(k.stock)||0)>0&&k.isActive!==!1&&k.isActive!=="false")&&(x.isActive===!1||x.isActive==="false")&&(x.isActive="true");else{const $=K[0];$&&(x.stock=$.physicalStock,$.physicalStock>0&&(x.isActive===!1||x.isActive==="false")&&(x.isActive="true"))}i.set(le,x,{merge:!0}),g.products[M]=x,A.push(String(p))});const b=V(),U={id:"so_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),soNumber:r,date:new Date().toISOString(),auditorName:a,notes:s,categoryFilter:C,brandFilter:I,totalItemsAudited:b.countedCount,totalWithDiff:l.length,totalLossUnits:b.totalLossUnits,totalSurplusUnits:b.totalSurplusUnits,netVarianceUnits:b.netVarianceUnits,totalLossRp:b.totalLossRp,totalSurplusRp:b.totalSurplusRp,netVarianceRp:b.netVarianceRp,items:l.map(p=>({productId:p.productId,variantIndex:p.variantIndex,variantName:p.variantName||"",productName:p.productName,sku:p.sku||"",category:p.category,unit:p.unit||"pcs",systemStock:p.systemStock,physicalStock:p.physicalStock,diff:p.diff,hpp:p.hpp,price:p.price,diffValueHpp:p.diffValueHpp,reason:p.reason,notes:p.notes}))};Array.isArray(g.stockOpnameHistory)||(g.stockOpnameHistory=[]),g.stockOpnameHistory.unshift(U),await i.commit(),await G(["stockOpnameHistory"],{updatedProductIds:A}),j(),h("Stock Opname berhasil diterapkan & stok telah disesuaikan! 🎉"),f={},O(),window.openDocPreview?.("stock_opname",U.id),te("history")}catch(n){j(),console.error("[StockOpname] Finalize Error:",n),h("Gagal menyimpan penyesuaian: "+(n.message||n))}},re=()=>{const t=u("so-subtab-content");if(!t)return;const a=g.stockOpnameHistory||[];if(!a.length){t.innerHTML=`
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
        `;return}const e=H();t.innerHTML=`
        <div class="space-y-3">
            ${a.map(s=>`
                <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-base border shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${d(s.soNumber||s.id)}</span>
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
                                        Selesai Difinalisasi
                                    </span>
                                </div>
                                <p class="text-[10px] text-slate-400 mt-0.5">
                                    <i class="fa-solid fa-calendar mr-1"></i>${Y(s.date)} &bull; Auditor: <b>${d(s.auditorName||"Staf")}</b>
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
                            ${P()?`
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
                                ${e?(s.netVarianceRp>=0?"+":"−")+w(Math.abs(s.netVarianceRp||0)):`${s.netVarianceUnits||0} Pcs`}
                            </span>
                        </div>
                    </div>

                    ${s.notes?`
                        <div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 p-2 rounded-xl border border-slate-100 dark:border-slate-800/60 flex items-start gap-2">
                            <i class="fa-solid fa-note-sticky text-amber-500 mt-0.5 text-xs"></i>
                            <span>${d(s.notes)}</span>
                        </div>`:""}
                </div>
            `).join("")}
        </div>
    `},Ce=t=>{const e=(g.stockOpnameHistory||[]).find(i=>String(i.id)===String(t));if(!e){h("Data Berita Acara tidak ditemukan!");return}E(),N=e;const s=u("so-detail-title"),r=u("so-detail-subtitle"),o=u("so-detail-body");s&&(s.innerText=e.soNumber||"Berita Acara Stock Opname"),r&&(r.innerText=`${Y(e.date)} • Oleh: ${e.auditorName||"Staf"}`);const c=H(),l=e.items||[];o&&(o.innerHTML=`
            <!-- Bento Rekap 4 Metrik Presisi -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400 block">Total Disesuaikan</span>
                    <span class="font-black text-slate-800 dark:text-white text-xs">${l.length} Barang</span>
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
                    <span class="font-black ${c?e.netVarianceRp>=0?"text-emerald-600":"text-rose-600":"text-slate-700 dark:text-slate-200"} text-xs">
                        ${c?(e.netVarianceRp>=0?"+":"−")+w(Math.abs(e.netVarianceRp||0)):`${e.netVarianceUnits||0} Pcs`}
                    </span>
                </div>
            </div>

            <!-- Tabel Daftar Barang yang Discrepancy -->
            <div class="space-y-2">
                <h4 class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">Rincian Barang yang Mengalami Selisih:</h4>
                <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    ${l.map((i,A)=>`
                        <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <span class="font-bold text-slate-800 dark:text-white truncate">${A+1}. ${d(i.productName)}</span>
                                    ${i.variantName?`<span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-600 dark:text-slate-300">${d(i.variantName)}</span>`:""}
                                </div>
                                <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400 flex-wrap">
                                    <span>Kategori: ${d(i.category||"Umum")}</span>
                                    ${i.sku?`<span>• SKU: ${d(i.sku)}</span>`:""}
                                    ${i.notes?`<span>• Catatan: <i class="italic text-slate-500 dark:text-slate-400">${d(i.notes)}</i></span>`:""}
                                </div>
                            </div>

                            <div class="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                                <div class="text-left sm:text-right text-[11px]">
                                    <span class="text-slate-400 block text-[9px]">Sistem ➔ Fisik</span>
                                    <span class="font-mono font-bold">${i.systemStock} ➔ <b class="text-slate-900 dark:text-white">${i.physicalStock}</b> ${d(i.unit||"pcs")}</span>
                                </div>
                                <div class="text-right min-w-[80px]">
                                    <span class="px-2 py-0.5 rounded-lg text-[10px] font-black ${i.diff<0?"bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300":"bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300"}">
                                        ${i.diff<0?`−${Math.abs(i.diff)}`:`+${i.diff}`} ${d(i.unit||"pcs")}
                                    </span>
                                    ${c&&i.hpp>0?`
                                        <span class="block text-[9px] font-bold ${i.diff<0?"text-rose-600":"text-amber-600"} mt-0.5">
                                            ${i.diff<0?"−":"+"}${w(Math.abs(i.diffValueHpp||0))}
                                        </span>`:""}
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `);const n=u("modal-so-history-detail"),m=u("modal-so-history-content");n&&m&&(document.body.classList.add("overflow-hidden"),q(n,m))},oe=()=>{const t=u("modal-so-history-detail"),a=u("modal-so-history-content");document.body.classList.remove("overflow-hidden"),t&&a&&z(t,a)},Ie=()=>{N&&(oe(),window.openDocPreview?.("stock_opname",N.id))},He=t=>{if(!P()){h("Hanya Owner yang berhak menghapus riwayat audit.");return}R("Hapus Arsip Berita Acara?","Dokumen riwayat audit ini akan dihapus dari arsip. (Stok barang yang sudah disesuaikan tidak akan berubah). Lanjutkan?",async()=>{_("Menghapus arsip...");try{g.stockOpnameHistory=(g.stockOpnameHistory||[]).filter(a=>String(a.id)!==String(t)),await G(["stockOpnameHistory"]),j(),h("Arsip Berita Acara berhasil dihapus."),re()}catch(a){j(),h("Gagal menghapus: "+a.message)}},"Ya, Hapus")},Fe=()=>{window.openDocPreview?.("stock_opname_worksheet")};window.renderStockOpnameView=F;window.switchSoSubTab=te;window.setSoPhysicalCount=B;window.stepSoPhysicalCount=ge;window.matchSoItem=ue;window.setSoItemReason=xe;window.setSoItemNotes=be;window.matchAllUncountedInView=fe;window.resetAuditSession=me;window.handleSoBarcodeScan=Q;window.clearSoSearch=he;window.clearAllSoFilters=ve;window.setSoCategoryFilter=ye;window.setSoBrandFilter=we;window.setSoStatusFilter=Se;window.openFinalizeModal=$e;window.closeFinalizeModal=se;window.executeSoFinalize=Ae;window.viewSoHistoryDetail=Ce;window.closeSoHistoryModal=oe;window.printSoHistoryActive=Ie;window.deleteSoHistory=He;window.printSoWorksheet=Fe;export{pe as SO_DISCREPANCY_REASONS,ve as clearAllSoFilters,he as clearSoSearch,se as closeFinalizeModal,oe as closeSoHistoryModal,V as computeAuditStats,He as deleteSoHistory,E as ensureSoModals,Ae as executeSoFinalize,W as generateSoNumber,J as getFilteredAuditItems,Q as handleSoBarcodeScan,O as initOrSyncAuditItems,fe as matchAllUncountedInView,ue as matchSoItem,$e as openFinalizeModal,Ie as printSoHistoryActive,Fe as printSoWorksheet,S as renderSoActiveItems,ke as renderSoActiveView,re as renderSoHistoryView,ae as renderSoStatsBar,F as renderStockOpnameView,me as resetAuditSession,we as setSoBrandFilter,ye as setSoCategoryFilter,be as setSoItemNotes,xe as setSoItemReason,B as setSoPhysicalCount,Se as setSoStatusFilter,ge as stepSoPhysicalCount,te as switchSoSubTab,Ce as viewSoHistoryDetail};

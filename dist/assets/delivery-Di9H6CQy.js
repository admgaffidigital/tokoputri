import{e as i,u as v,k as f,z as _,i as c,o as S,l as N,q as $,n as T,a as P,H as O,v as M}from"./module-print-By0bNFep.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const w=[{id:"pickup",name:"Mobil Pick-up (L300 / Gran Max)",shortName:"Mobil Pick-up",sub:"L300 / Gran Max",capacity:"1.5 Ton",icon:"fa-truck-pickup"},{id:"truck_engkel",name:"Truk Engkel 4 Roda (Canter/Dyna)",shortName:"Truk Engkel 4 Roda",sub:"Canter / Dyna",capacity:"3.5 Ton",icon:"fa-truck"},{id:"truck_dobel",name:"Truk Dobel 6 Roda (Colt Diesel)",shortName:"Truk Dobel 6 Roda",sub:"Colt Diesel",capacity:"7.0 Ton",icon:"fa-truck-moving"},{id:"trike",name:"Motor Roda Tiga Bak (Viar/Tosa)",shortName:"Motor Roda Tiga",sub:"Viar / Tosa Bak",capacity:"500 Kg",icon:"fa-motorcycle"},{id:"external",name:"Ekspedisi / Armada Luar / Sewa",shortName:"Ekspedisi Luar",sub:"Sewa / Cargo Luar",capacity:"Variatif",icon:"fa-dolly"},{id:"self_pickup",name:"Diambil Mandor Sendiri di Toko",shortName:"Ambil di Toko",sub:"Mandor Ambil Sendiri",capacity:"Mandiri",icon:"fa-person-walking-luggage"}],j={pending_dispatch:{label:"Menunggu Muat",badgeClass:"bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",icon:"fa-boxes-packing"},out_for_delivery:{label:"Dalam Perjalanan",badgeClass:"bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",icon:"fa-truck-fast"},delivered:{label:"Terkirim & Diterima",badgeClass:"bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",icon:"fa-circle-check"},returned:{label:"Gagal / Kembali",badgeClass:"bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",icon:"fa-triangle-exclamation"}},K=(t="")=>{const a=new Date,e=String(a.getFullYear()).slice(-2),r=String(a.getMonth()+1).padStart(2,"0"),o=t?String(t).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase():Math.random().toString(36).substring(2,7).toUpperCase();return`DO-${e}${r}-${o}`},h=t=>{if(!t)return null;const a=t.delivery||{},e=a.recipientName||t.isDropPoint&&t.dropPoint?.name||t.customer?.name||"",r=a.recipientPhone||t.isDropPoint&&t.dropPoint?.wa||t.customer?.wa||"",o=a.destinationAddress||t.isDropPoint&&t.dropPoint?.address||t.customer?.address||"",l=a.destinationLat||t.isDropPoint&&t.dropPoint?.lat||t.customer?.lat||null,s=a.destinationLng||t.isDropPoint&&t.dropPoint?.lng||t.customer?.lng||null,d=a.unloadNotes||t.customer?.note||"",b=Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[],p=Array.isArray(a.checklist)&&a.checklist.length>0?a.checklist:b.map((g,k)=>({id:g.id||`item-${k}`,name:g.name||"Barang",variantName:g.variantName||"",qty:parseFloat(g.qty)||1,unit:g.unit||"pcs",loaded:!0}));return{doNumber:a.doNumber||K(t.orderId),orderId:t.orderId,status:a.status||"pending_dispatch",createdAt:a.createdAt||Date.now(),fleetType:a.fleetType||"pickup",fleetName:a.fleetName||"Mobil Pick-up (L300 / Gran Max)",plateNumber:a.plateNumber||"",driverName:a.driverName||"",driverPhone:a.driverPhone||"",helperName:a.helperName||"",recipientName:e,recipientPhone:r,destinationAddress:o,destinationLat:l,destinationLng:s,unloadNotes:d,dispatchedAt:a.dispatchedAt||null,deliveredAt:a.deliveredAt||null,signature:a.signature||null,checklist:p,logs:a.logs||[{status:"pending_dispatch",timestamp:a.createdAt||Date.now(),note:"Surat Jalan (DO) diterbitkan"}]}},A=t=>{const a=(v||[]).find(n=>String(n.orderId)===String(t));if(!a){f("Data pesanan tidak ditemukan!");return}const e=h(a),r=i("modal-delivery-order"),o=i("modal-delivery-order-box"),l=i("modal-delivery-order-content");if(!r||!o||!l)return;window._activeDeliveryOrderId=t,window._currentDeliveryData=e;const s=_(e.doNumber,{height:38,showText:!0,fontSize:9.5,className:"w-full max-w-[240px] h-auto"}),d=e.status==="pending_dispatch",b=e.status==="out_for_delivery",p=e.status==="delivered",g=e.checklist.filter(n=>n.loaded).length;let k="";d?k='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800 flex items-center gap-1.5"><i class="fa-solid fa-boxes-packing"></i> Menunggu Muat</span>':b?k='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> Dalam Perjalanan</span>':p?k='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 flex items-center gap-1.5"><i class="fa-solid fa-circle-check"></i> Selesai / Terkirim</span>':k='<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/80 dark:border-rose-800 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Gagal / Kembali</span>',l.innerHTML=`
        <div class="space-y-4 text-slate-800 dark:text-slate-100">
            <!-- 1. HERO CARD: INFO SURAT JALAN & TOGGLE BARCODE -->
            <div class="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono font-black text-sm sm:text-base text-slate-900 dark:text-white">#${c(e.doNumber)}</span>
                                ${k}
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                                Order: <b class="font-mono text-slate-700 dark:text-slate-300">#${c(a.orderId)}</b> &middot; Pemesan: <b class="text-slate-800 dark:text-slate-200">${c(a.customer?.name||"Umum")}</b>
                            </p>
                        </div>
                    </div>

                    <!-- Tombol Toggle Barcode -->
                    <button type="button" onclick="const b = document.getElementById('do-barcode-wrap'); b.classList.toggle('hidden'); const ic = document.getElementById('do-bc-chev'); ic.classList.toggle('rotate-180');" class="btn-native-action px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0">
                        <i class="fa-solid fa-barcode text-sm" style="color: var(--color-primary);"></i>
                        <span class="hidden sm:inline">Barcode</span>
                        <i id="do-bc-chev" class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform duration-200"></i>
                    </button>
                </div>

                <!-- Collapsible Barcode Drawer -->
                <div id="do-barcode-wrap" class="hidden pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center">
                    <div class="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs max-w-[260px] w-full flex items-center justify-center">
                        ${s}
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium text-center mt-1.5">
                        Scan dengan barcode scanner fisik / kamera HP untuk identifikasi cepat surat jalan.
                    </p>
                </div>
            </div>

            <!-- 2. SEGMENTED STATUS STEPPER (100% THEMED NATIVE CONTROL) -->
            <div class="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 flex items-center gap-1">
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${c(t)}', 'pending_dispatch')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${d?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${d?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-boxes-packing text-xs"></i>
                    <span>1. Muat Barang</span>
                </button>
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${c(t)}', 'out_for_delivery')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${b?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${b?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-truck-fast text-xs"></i>
                    <span>2. Kirim Truk</span>
                </button>
                <button 
                    type="button" 
                    onclick="openDeliverySignatureModal('${c(t)}')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${p?"shadow-sm text-white":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}"
                    style="${p?"background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);":""}"
                >
                    <i class="fa-solid fa-file-signature text-xs"></i>
                    <span>3. TTD Mandor</span>
                </button>
            </div>

            <!-- 3. PENUGASAN ARMADA & SUPIR (GRID KARTU VISUAL NATIVE) -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-truck" style="color: var(--color-primary);"></i> Penugasan Armada &amp; Pengemudi
                    </h4>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logistik Toko</span>
                </div>

                <!-- Hidden Input untuk Kompatibilitas DOM State & Tests -->
                <input type="hidden" id="do-fleet-type" value="${c(e.fleetType)}">

                <!-- Interactive Visual Fleet Grid (Pengganti Dropdown Kaku) -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">Pilih Jenis Kendaraan / Armada:</label>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="do-fleet-grid">
                        ${w.map(n=>{const x=e.fleetType===n.id,R=n.shortName||n.name.split("(")[0].trim(),I=n.sub||(n.name.includes("(")?n.name.split("(")[1].replace(")",""):n.capacity);return`
                            <div 
                                id="fleet-card-${n.id}"
                                onclick="selectFleetCard('${n.id}')"
                                class="fleet-choice-card p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-95 flex flex-col justify-between min-h-[78px] ${x?"is-selected shadow-2xs":"border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/60"}"
                                style="${x?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); box-shadow: 0 0 0 1px var(--color-primary);":""}"
                            >
                                <div class="flex items-center justify-between gap-1.5">
                                    <div id="fleet-icon-${n.id}" class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${x?"text-white shadow-2xs":"border border-slate-200/80 dark:border-slate-700"}"
                                         style="${x?"background: var(--color-primary);":"background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);"}">
                                        <i class="fa-solid ${n.icon} text-xs"></i>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span id="fleet-badge-${n.id}" class="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono ${x?"text-white":"bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}"
                                              style="${x?"background: var(--color-primary);":""}">
                                            ${n.capacity}
                                        </span>
                                        <i id="fleet-chk-${n.id}" class="fa-solid fa-circle-check text-xs ${x?"":"hidden"}" style="color: var(--color-primary);"></i>
                                    </div>
                                </div>
                                <div class="mt-2 min-w-0">
                                    <p class="text-xs font-black text-slate-800 dark:text-white leading-tight truncate">${R}</p>
                                    <p class="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">${I}</p>
                                </div>
                            </div>
                            `}).join("")}
                    </div>
                </div>

                <!-- Input Detail Supir & Plat Nomor -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-id-card text-slate-400"></i> Plat Nomor Truk / Kendaraan
                        </label>
                        <input type="text" id="do-plate-number" value="${c(e.plateNumber)}" placeholder="Cth: B 9234 KDA" class="w-full text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-slate-400"></i> Nama Sopir / Pengemudi
                        </label>
                        <input type="text" id="do-driver-name" value="${c(e.driverName)}" placeholder="Cth: Pak Joko" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Sopir
                        </label>
                        <input type="tel" id="do-driver-phone" value="${c(e.driverPhone)}" placeholder="Cth: 08123456789" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-group text-slate-400"></i> Helper / Kondektur Muatan
                        </label>
                        <input type="text" id="do-helper-name" value="${c(e.helperName)}" placeholder="Cth: Budi (Kondektur)" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- Tombol WA Cepat ke Sopir -->
                ${e.driverPhone?`
                <button type="button" onclick="sendDeliveryWhatsAppToDriver('${c(t)}')" class="btn-native-action w-full h-10 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
                    <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> Kirim Rute &amp; Kontak Mandor ke WA Sopir
                </button>`:""}
            </div>

            <!-- 4. LOKASI PROYEK & KONTAK MANDOR -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-map-location-dot text-rose-500"></i> Lokasi Proyek &amp; Mandor
                    </h4>
                    ${a.isDropPoint?'<span class="px-2.5 py-0.5 rounded-full text-[9.5px] font-black bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800">DROP POINT</span>':'<span class="text-[10px] font-bold text-slate-400">Penerima Barang</span>'}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Penerima / Mandor
                        </label>
                        <input type="text" id="do-recipient-name" value="${c(e.recipientName)}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Mandor
                        </label>
                        <input type="tel" id="do-recipient-phone" value="${c(e.recipientPhone)}" placeholder="No WA mandor" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Alamat Lengkap Proyek / Drop Point
                    </label>
                    <textarea id="do-destination-address" rows="2" placeholder="Alamat pengiriman / patokan proyek..." class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">${c(e.destinationAddress)}</textarea>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Catatan Akses Jalan &amp; Instruksi Bongkar
                    </label>
                    <input type="text" id="do-unload-notes" value="${c(e.unloadNotes)}" placeholder="Cth: Gang sempit, bongkar di samping gudang mandor" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                </div>

                ${e.destinationLat&&e.destinationLng?`
                <div class="pt-1">
                    <a href="https://www.google.com/maps?q=${c(e.destinationLat)},${c(e.destinationLng)}" target="_blank" rel="noopener noreferrer" class="btn-native-action w-full h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Buka Titik Koordinat GPS di Google Maps
                    </a>
                </div>`:""}
            </div>

            <!-- 5. CHECKLIST MUATAN FISIK (NATIVE INTERACTIVE TILES, ZERO TABLE KAKU) -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <div>
                        <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-list-check" style="color: var(--color-primary);"></i> Checklist Muatan Fisik
                        </h4>
                        <p class="text-[11px] font-semibold text-slate-400 mt-0.5">
                            Verifikasi fisik barang sebelum armada keluar toko
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-1 rounded-full text-[10.5px] font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                            <span id="do-loaded-count">${g}</span>/${e.checklist.length} Siap
                        </span>
                        <button type="button" onclick="toggleAllChecklistItems()" class="text-[11px] font-bold text-slate-500 hover:text-[var(--color-primary)] px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                            Pilih Semua
                        </button>
                    </div>
                </div>

                <div class="space-y-2" id="do-checklist-tiles">
                    ${e.checklist.map((n,x)=>`
                    <div 
                        id="do-chk-row-${x}"
                        onclick="toggleItemLoaded(${x})"
                        class="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 ${n.loaded?"border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs":"border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"}"
                    >
                        <!-- Squircle Checkbox Touch Target -->
                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <div 
                                id="do-chk-box-${x}"
                                class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all ${n.loaded?"border-transparent text-white shadow-2xs":"border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent"}"
                                style="${n.loaded?"background: var(--color-primary);":""}"
                            >
                                <i class="fa-solid fa-check text-xs"></i>
                            </div>
                            <div class="min-w-0">
                                <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white leading-snug">
                                    ${c(n.name)}
                                </h5>
                                <div class="flex items-center gap-2 mt-1 flex-wrap">
                                    ${n.variantName?`<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600">${c(n.variantName)}</span>`:""}
                                    <span class="text-[10px] font-semibold ${n.loaded?"text-emerald-600 dark:text-emerald-400":"text-slate-400"}" id="do-chk-status-${x}">
                                        <i class="fa-solid ${n.loaded?"fa-circle-check":"fa-circle-dot"} text-[9px] mr-1"></i>
                                        ${n.loaded?"Siap Muat di Armada":"Belum Dimuat"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Kapsul Kuantitas & Satuan -->
                        <div class="shrink-0 text-right">
                            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-mono font-black text-xs sm:text-sm bg-slate-100 dark:bg-slate-700/80 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-600/80 shadow-2xs">
                                <span>${n.qty}</span>
                                <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 font-sans">${c(n.unit||"pcs")}</span>
                            </span>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>

            <!-- 6. BUKTI TANDA TANGAN SERAH TERIMA MANDOR (JIKA ADA) -->
            ${e.signature?`
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-3">
                <div class="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                    <h4 class="font-black text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                        <i class="fa-solid fa-file-signature text-emerald-600"></i> Bukti Serah Terima &amp; Tanda Tangan Proyek
                    </h4>
                    <span class="text-[10px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-lg border border-emerald-300">TERVERIFIKASI</span>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <div class="p-2 bg-white rounded-xl border border-emerald-200 shadow-2xs max-w-[200px] w-full flex items-center justify-center">
                        <img src="${e.signature.signatureDataUrl}" alt="Tanda Tangan Mandor" class="h-20 w-auto object-contain">
                    </div>
                    <div class="flex-1 text-xs space-y-1 text-slate-700 dark:text-slate-300">
                        <p>Penerima: <b class="text-slate-900 dark:text-white">${c(e.signature.signerName||e.recipientName)}</b></p>
                        <p>Waktu Terima: <b class="font-mono">${e.signature.timestamp?new Date(e.signature.timestamp).toLocaleString("id-ID"):"-"}</b></p>
                        ${e.signature.notes?`<p class="italic text-slate-500">" ${c(e.signature.notes)} "</p>`:""}
                    </div>
                </div>
            </div>`:""}
        </div>
    `,r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliveryOrder"),S(r,o)},U=(t=!1)=>{const a=i("modal-delivery-order"),e=i("modal-delivery-order-box"),r=()=>{M(a,e),window._activeDeliveryOrderId=null,window._currentDeliveryData=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliveryOrder",t,r):r()},C=t=>{const a=w.find(r=>r.id===t);if(!a)return;window._currentDeliveryData&&(window._currentDeliveryData.fleetType=a.id,window._currentDeliveryData.fleetName=a.name);const e=i("do-fleet-type");e&&(e.value=a.id),w.forEach(r=>{const o=i(`fleet-card-${r.id}`),l=i(`fleet-badge-${r.id}`),s=i(`fleet-icon-${r.id}`),d=i(`fleet-chk-${r.id}`);if(!o)return;r.id===t?(o.classList.add("is-selected","shadow-2xs"),o.classList.remove("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),o.style.background="rgba(var(--color-primary-rgb), 0.08)",o.style.borderColor="var(--color-primary)",o.style.boxShadow="0 0 0 1px var(--color-primary)",l&&(l.style.background="var(--color-primary)",l.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono text-white"),s&&(s.style.background="var(--color-primary)",s.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all text-white shadow-2xs"),d&&d.classList.remove("hidden")):(o.classList.remove("is-selected","shadow-2xs"),o.classList.add("border-slate-200/80","dark:border-slate-800","bg-slate-50/60","dark:bg-slate-800/40"),o.style.background="",o.style.borderColor="",o.style.boxShadow="",l&&(l.style.background="",l.className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300"),s&&(s.style.background="rgba(var(--color-primary-rgb), 0.1)",s.style.color="var(--color-primary)",s.className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all border border-slate-200/80 dark:border-slate-700"),d&&d.classList.add("hidden"))}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},B=t=>{C(t)},E=(t,a)=>{if(!window._currentDeliveryData||!window._currentDeliveryData.checklist||!window._currentDeliveryData.checklist[t])return;const e=window._currentDeliveryData.checklist[t];typeof a=="boolean"?e.loaded=a:e.loaded=!e.loaded;const r=i(`do-chk-row-${t}`),o=i(`do-chk-box-${t}`),l=i(`do-chk-status-${t}`),s=i("do-loaded-count");if(e.loaded?(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs"),o&&(o.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-transparent text-white shadow-2xs",o.style.background="var(--color-primary)"),l&&(l.className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400",l.innerHTML='<i class="fa-solid fa-circle-check text-[9px] mr-1"></i> Siap Muat di Armada')):(r&&(r.className="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70"),o&&(o.className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent",o.style.background=""),l&&(l.className="text-[10px] font-semibold text-slate-400",l.innerHTML='<i class="fa-solid fa-circle-dot text-[9px] mr-1"></i> Belum Dimuat')),s){const d=window._currentDeliveryData.checklist.filter(b=>b.loaded).length;s.textContent=d}typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},H=(t=null)=>{if(!window._currentDeliveryData||!Array.isArray(window._currentDeliveryData.checklist))return;const a=window._currentDeliveryData.checklist,e=a.every(o=>o.loaded),r=t!==null?t:!e;a.forEach((o,l)=>{E(l,r)}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium")},G=async(t=window._activeDeliveryOrderId)=>{t||(t=window._activeDeliveryOrderId);const a=(v||[]).find(s=>String(s.orderId)===String(t));if(!a)return;const e=window._currentDeliveryData||h(a),r=i("do-fleet-type"),o=r?r.value:e.fleetType,l=w.find(s=>s.id===o)||{};e.fleetType=o,e.fleetName=l.name||e.fleetName,e.plateNumber=(i("do-plate-number")?.value||"").trim(),e.driverName=(i("do-driver-name")?.value||"").trim(),e.driverPhone=(i("do-driver-phone")?.value||"").trim(),e.helperName=(i("do-helper-name")?.value||"").trim(),e.recipientName=(i("do-recipient-name")?.value||"").trim(),e.recipientPhone=(i("do-recipient-phone")?.value||"").trim(),e.destinationAddress=(i("do-destination-address")?.value||"").trim(),e.unloadNotes=(i("do-unload-notes")?.value||"").trim(),N("Menyimpan Data Surat Jalan...");try{await $.collection("freshmart_orders").doc(t).update({delivery:e}),a.delivery=e,f("Data Surat Jalan & Armada berhasil disimpan!"),A(t),typeof window.openOrderDetail=="function"&&window.cVOrd===t&&window.openOrderDetail(t)}catch(s){console.error("[Delivery] Gagal menyimpan delivery:",s),f("Gagal menyimpan: "+(s.message||""))}finally{T()}},W=async(t,a)=>{const e=(v||[]).find(s=>String(s.orderId)===String(t));if(!e)return;const r=h(e);if(r.status===a)return;const o=j[a]?.label||a;if(await O("Ubah Status Pengiriman",`Perbarui status pengiriman Surat Jalan #${r.doNumber} menjadi "${o}"?`,null,"Ya, Perbarui",!1)){r.status=a,a==="out_for_delivery"?(r.dispatchedAt=Date.now(),r.logs.push({status:"out_for_delivery",timestamp:Date.now(),note:"Armada diberangkatkan ke proyek"})):a==="delivered"&&(r.deliveredAt=Date.now(),r.logs.push({status:"delivered",timestamp:Date.now(),note:"Material telah diterima di lokasi proyek"})),N("Memperbarui status logistik...");try{await $.collection("freshmart_orders").doc(t).update({delivery:r}),e.delivery=r,f(`Status pengiriman kini: ${o}`),A(t)}catch(s){f("Gagal mengubah status: "+s.message)}finally{T()}}};let u=null,m=null,y=!1,D=!1;const F=t=>{const a=(v||[]).find(s=>String(s.orderId)===String(t));if(!a)return;const e=h(a),r=i("modal-delivery-signature"),o=i("modal-delivery-signature-box");if(!r||!o)return;window._signatureOrderId=t;const l=i("modal-delivery-signature-content");l&&(l.innerHTML=`
            <div class="space-y-4 text-slate-800 dark:text-slate-100">
                <div class="p-3.5 rounded-2xl border text-xs flex items-start gap-2.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary-dark);">
                    <i class="fa-solid fa-circle-info text-base mt-0.5 shrink-0" style="color: var(--color-primary);"></i>
                    <div>
                        <p class="font-black text-slate-900 dark:text-white">Konfirmasi Serah Terima Material Proyek</p>
                        <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">Surat Jalan <b>#${c(e.doNumber)}</b>. Mohon mandor atau penerima menandatangani langsung pada area di bawah.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Terang Mandor / Penerima
                        </label>
                        <input type="text" id="sig-signer-name" value="${c(e.recipientName||a.customer?.name||"")}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-comment-dots text-slate-400"></i> Catatan Kondisi Barang Saat Tiba
                        </label>
                        <input type="text" id="sig-notes" value="" placeholder="Cth: Diterima utuh, semen 50 sak lengkap" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- CANVAS TANDA TANGAN SENTUH NATIVE -->
                <div>
                    <div class="flex items-center justify-between mb-1.5">
                        <label class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                            <i class="fa-solid fa-pen-nib" style="color: var(--color-primary);"></i> Goreskan Tanda Tangan Mandor
                        </label>
                        <button type="button" onclick="clearSignatureCanvas()" class="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                            <i class="fa-solid fa-rotate-left"></i> Bersihkan Canvas
                        </button>
                    </div>
                    <div class="relative w-full h-52 bg-white border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                        <canvas id="signature-pad-canvas" class="w-full h-full cursor-crosshair touch-none"></canvas>
                        <div id="sig-placeholder-hint" class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 select-none">
                            <i class="fa-solid fa-signature text-4xl mb-2 opacity-40"></i>
                            <span class="text-xs font-bold uppercase tracking-widest opacity-50">Tanda Tangan Sentuh di Sini</span>
                        </div>
                    </div>
                </div>
            </div>
        `),r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("deliverySignature"),S(r,o),setTimeout(()=>{V()},150)},L=(t=!1)=>{const a=i("modal-delivery-signature"),e=i("modal-delivery-signature-box"),r=()=>{M(a,e),window._signatureOrderId=null,u=null,m=null};typeof window.requestCloseModal=="function"?window.requestCloseModal("deliverySignature",t,r):r()},V=()=>{if(u=i("signature-pad-canvas"),!u)return;m=u.getContext("2d"),D=!1;const t=u.getBoundingClientRect(),a=window.devicePixelRatio||1;u.width=t.width*a,u.height=t.height*a,m.scale(a,a),m.strokeStyle="#0f172a",m.lineWidth=2.5,m.lineCap="round",m.lineJoin="round";const e=s=>{const d=u.getBoundingClientRect();return s.touches&&s.touches[0]?{x:s.touches[0].clientX-d.left,y:s.touches[0].clientY-d.top}:{x:s.clientX-d.left,y:s.clientY-d.top}},r=s=>{s.preventDefault(),y=!0,D=!0;const d=i("sig-placeholder-hint");d&&d.classList.add("hidden");const b=e(s);m.beginPath(),m.moveTo(b.x,b.y)},o=s=>{if(!y)return;s.preventDefault();const d=e(s);m.lineTo(d.x,d.y),m.stroke()},l=s=>{y&&(s.preventDefault(),m.closePath(),y=!1)};u.onmousedown=r,u.onmousemove=o,u.onmouseup=l,u.onmouseleave=l,u.ontouchstart=r,u.ontouchmove=o,u.ontouchend=l,u.ontouchcancel=l},q=()=>{if(!u||!m)return;const t=window.devicePixelRatio||1;m.clearRect(0,0,u.width/t,u.height/t),D=!1;const a=i("sig-placeholder-hint");a&&a.classList.remove("hidden")},J=async()=>{const t=window._signatureOrderId;if(!t)return;const a=(v||[]).find(s=>String(s.orderId)===String(t));if(!a)return;if(!D||!u){f("Harap goreskan tanda tangan mandor terlebih dahulu!");return}const e=(i("sig-signer-name")?.value||"").trim()||a.customer?.name||"Mandor Pelaksana",r=(i("sig-notes")?.value||"").trim(),o=u.toDataURL("image/png"),l=h(a);l.status="delivered",l.deliveredAt=Date.now(),l.recipientName=e,l.signature={signerName:e,signatureDataUrl:o,timestamp:Date.now(),notes:r},l.logs.push({status:"delivered",timestamp:Date.now(),note:`Serah terima diverifikasi & ditandatangani oleh ${e}`}),N("Menyimpan bukti serah terima...");try{await $.collection("freshmart_orders").doc(t).update({delivery:l,status:"Selesai"}),a.delivery=l,a.status="Selesai",f("Serah terima berhasil diverifikasi & pesanan ditandai Selesai!"),L(),A(t),typeof window.openOrderDetail=="function"&&window.openOrderDetail(t)}catch(s){console.error("[Delivery] Gagal simpan tanda tangan:",s),f("Gagal menyimpan: "+s.message)}finally{T()}},Y=t=>{const a=(v||[]).find(p=>String(p.orderId)===String(t));if(!a)return;const e=h(a),r=e.recipientPhone||a.customer?.wa||"";if(!r){f("Nomor WhatsApp mandor/pemesan tidak tersedia!");return}const o=P.store?.name||"TOKO PUTRI",l=e.checklist.map(p=>`• ${p.qty} ${p.unit} - *${p.name}*${p.variantName?` (${p.variantName})`:""}`).join(`
`);let s=`🚚 *PENGIRIMAN MATERIAL PROYEK — ${o.toUpperCase()}*

Halo Bpk/Ibu *${e.recipientName||"Mandor"}*,
Pesanan material Anda sedang dalam proses pengiriman armada kami:

📋 *No. Surat Jalan:* #${e.doNumber}
📦 *No. Pesanan:* #${a.orderId}
🚛 *Armada:* ${e.fleetName} (${e.plateNumber||"Toko"})
👤 *Sopir:* ${e.driverName||"Petugas Toko"}${e.driverPhone?` (+${e.driverPhone})`:""}
📍 *Tujuan:* ${e.destinationAddress||"-"}
`+(e.unloadNotes?`⚠️ *Catatan Bongkar:* ${e.unloadNotes}
`:"")+`
📦 *DAFTAR MUATAN BARANG:*
${l}

Mohon siapkan area bongkar muat. Terima kasih telah berbelanja di *${o}*! 🙏`;const b=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(s)}`;window.open(b,"_blank","noopener,noreferrer")},Q=t=>{const a=(v||[]).find(p=>String(p.orderId)===String(t));if(!a)return;const e=h(a),r=e.driverPhone||"";if(!r){f("Nomor WhatsApp sopir belum diisi!");return}const o=P.store?.name||"TOKO PUTRI",l=e.checklist.map(p=>`• ${p.qty} ${p.unit} - ${p.name}${p.variantName?` (${p.variantName})`:""}`).join(`
`);let s=`🚛 *SURAT TUGAS PENGANTARAN MATERIAL — ${o.toUpperCase()}*

Halo *${e.driverName||"Sopir"}*,
Berikut rincian tugas pengiriman barang:

📋 *No. Surat Jalan:* #${e.doNumber}
📍 *Alamat Tujuan:* ${e.destinationAddress||"-"}
👤 *Penerima Proyek:* ${e.recipientName||"-"}
📞 *Kontak Mandor:* +${e.recipientPhone||"-"}
`+(e.destinationLat&&e.destinationLng?`🗺️ *Rute Google Maps:* https://www.google.com/maps?q=${e.destinationLat},${e.destinationLng}
`:"")+(e.unloadNotes?`⚠️ *Catatan Bongkar:* ${e.unloadNotes}
`:"")+`
📦 *DAFTAR MUATAN:*
${l}

Hati-hati di jalan dan utamakan keselamatan kerja! 🚛`;const b=`https://wa.me/${String(r).replace(/\D/g,"").replace(/^0/,"62")}?text=${encodeURIComponent(s)}`;window.open(b,"_blank","noopener,noreferrer")},z=t=>{typeof window.openDocPreview=="function"?window.openDocPreview("surat_jalan",t):f("Modul cetak dokumen tidak tersedia!")};typeof window<"u"&&(window.openDeliveryModal=A,window.closeDeliveryModal=U,window.setDeliveryStatusQuick=W,window.saveDeliveryDetails=G,window.onFleetTypeChange=B,window.selectFleetCard=C,window.toggleItemLoaded=E,window.toggleAllChecklistItems=H,window.openDeliverySignatureModal=F,window.closeDeliverySignatureModal=L,window.clearSignatureCanvas=q,window.saveDeliverySignature=J,window.sendDeliveryWhatsAppToMandor=Y,window.sendDeliveryWhatsAppToDriver=Q,window.printOfficialDeliveryOrderA4=z);export{w as DEFAULT_FLEETS,j as DELIVERY_STATUSES,q as clearSignatureCanvas,U as closeDeliveryModal,L as closeDeliverySignatureModal,K as generateDONumber,h as getOrderDeliveryData,B as onFleetTypeChange,A as openDeliveryModal,F as openDeliverySignatureModal,z as printOfficialDeliveryOrderA4,G as saveDeliveryDetails,J as saveDeliverySignature,C as selectFleetCard,Q as sendDeliveryWhatsAppToDriver,Y as sendDeliveryWhatsAppToMandor,W as setDeliveryStatusQuick,H as toggleAllChecklistItems,E as toggleItemLoaded};
